# Async Failure Handling Patterns

Not every Promise-returning Horizon Worlds API communicates failure the same way. [NpcConversation.elicitResponse()](../Desktop%20editor/NPCs/NPC%20Conversation/NPC%20Fallback.md#apis-for-creating-fallback-instances-with-scripted-dialog) is documented as an API that may throw an AI-availability error and should fall back to scripted dialogue, while [Asset.fetchAsData()](../Reference/core/Classes/Asset.md#fetchasdataoptions), [IPersistentStorageWorld.setWorldVariableAcrossAllInstancesAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride), and [PlayerMigration.migrateToHorizonApp()](../Reference/migration/Classes/PlayerMigration.md#migratetohorizonappoptions) are documented with different success and failure shapes. The safest rule is to follow each API's published contract instead of assuming every Promise needs the same `try/catch` pattern.

| API | Documented success shape | Documented failure shape | Practical handling pattern |
| --- | --- | --- | --- |
| [NpcConversation.elicitResponse()](../Desktop%20editor/NPCs/NPC%20Conversation/NPC%20Fallback.md#apis-for-creating-fallback-instances-with-scripted-dialog) | Generates an AI response | [NpcErrorCategory.AiNotAvailableError](../Desktop%20editor/NPCs/NPC%20Conversation/NPC%20Fallback.md#apis-for-creating-fallback-instances-with-scripted-dialog) can be caught for fallback logic | Add `.catch(...)` or `try/catch` when you need scripted fallback |
| [Asset.fetchAsData()](../Reference/core/Classes/Asset.md#fetchasdataoptions) | Resolves to [AssetContentData](../Reference/core/Classes/AssetContentData.md) | Tutorial examples describe the success path only and say the follow-up code does not run if fetching fails | Treat parse/use steps as success-path code and decide separately whether your feature needs retry or user feedback |
| [IPersistentStorageWorld.setWorldVariableAcrossAllInstancesAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride) | Resolves either to `T` or to [WorldVariableUpdateResult](../Reference/core/Interfaces/WorldVariableUpdateResult.md) | Concurrent-safe mode exposes structured failure via `success` and [WorldVariableUpdateErrorType](../Reference/core/Enumerations/WorldVariableUpdateErrorType.md); advanced examples also show `catch` for operational errors | Inspect `result.success` and `result.errorType` first, then add `try/catch` for retry loops or transport-level failures |
| [PlayerMigration.migrateToHorizonApp()](../Reference/migration/Classes/PlayerMigration.md#migratetohorizonappoptions) | Resolves to `boolean` | The reference says the Promise resolves `true` when migration was triggered and `false` otherwise | Branch on the returned boolean before assuming migration started |

## `elicitResponse()` is the clearest documented catch case

The [NPC Fallback](../Desktop%20editor/NPCs/NPC%20Conversation/NPC%20Fallback.md#apis-for-creating-fallback-instances-with-scripted-dialog) guide explicitly tells creators to catch [NpcConversation.elicitResponse()](../Desktop%20editor/NPCs/NPC%20Conversation/NPC%20Fallback.md#apis-for-creating-fallback-instances-with-scripted-dialog) failures and check for [NpcErrorCategory.AiNotAvailableError](../Desktop%20editor/NPCs/NPC%20Conversation/NPC%20Fallback.md#apis-for-creating-fallback-instances-with-scripted-dialog). The same guide also says editor testing can force [NpcConversation.elicitResponse()](../Desktop%20editor/NPCs/NPC%20Conversation/NPC%20Fallback.md#testing-in-editor) to throw that error when AI speech is disabled or unreachable. That makes this API different from generic Promise-returning helpers: fallback handling is part of the documented behavior, not just defensive style.

```ts
try {
  await npc.conversation.elicitResponse('Warn the player that time is running out.');
} catch (error) {
  npc.conversation.speak('The AI service is unavailable, so here is a scripted warning instead.');
}
```

## `setWorldVariableAcrossAllInstancesAsync()` mixes returned failure state with thrown failures

The [Concurrent-safe world level variable updates](API%20references%20and%20examples/Concurrent-safe%20world%20level%20variable%20updates.md) article and the [IPersistentStorageWorld.setWorldVariableAcrossAllInstancesAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride) reference describe two different overload shapes. With `allowConcurrentOverride` omitted or set to `true`, [IPersistentStorageWorld.setWorldVariableAcrossAllInstancesAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride) resolves directly to `T`. With `allowConcurrentOverride` set to `false`, the same API resolves to [WorldVariableUpdateResult](../Reference/core/Interfaces/WorldVariableUpdateResult.md), where callers are expected to inspect `success` and [WorldVariableUpdateErrorType](../Reference/core/Enumerations/WorldVariableUpdateErrorType.md) for conflict or throttling outcomes.

That distinction matters because the official examples use both styles. The basic conflict-detection example awaits [IPersistentStorageWorld.setWorldVariableAcrossAllInstancesAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride-1) and branches on `result.success` without wrapping the call in `try/catch`, while the advanced retry example adds `try/catch` around the await to handle broader operational failures during repeated attempts. In other words, structured result handling and thrown-error handling are complementary here rather than mutually exclusive.

```ts
const result = await this.world.persistentStorageWorld.setWorldVariableAcrossAllInstancesAsync(
  'game:high_scores',
  nextScore,
  false,
);

if (!result.success) {
  if (result.errorType === hz.WorldVariableUpdateErrorType.CONCURRENT_UPDATE) {
    return;
  }
}
```

## `migrateToHorizonApp()` publishes a boolean outcome contract

The [PlayerMigration.migrateToHorizonApp()](../Reference/migration/Classes/PlayerMigration.md#migratetohorizonappoptions) reference says the returned Promise resolves `true` when the migration flow was successfully triggered and `false` otherwise. The [Improving retention with Horizon Worlds app migration](../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Improving%20retention%20with%20Horizon%20Worlds%20app%20migration.md#triggering-the-migration) guide mirrors that contract by showing an awaited call and then explaining that the result indicates whether migration was successful. That makes boolean branching the first documented control-flow tool for this API.

If your feature needs analytics, UI state changes, or follow-up rewards, read the boolean result before assuming travel has started. A rejected Promise may still deserve a `try/catch` in production code, but the official contract already gives you a non-exceptional failure path through the return value itself.

## `fetchAsData()` is documented as a success-path fetch helper, not a fallback contract

The [Asset.fetchAsData()](../Reference/core/Classes/Asset.md#fetchasdataoptions) reference documents the return type and cache behavior, while [Data as an Asset](../Desktop%20editor/Assets/Data%20as%20an%20Asset.md) and [Station 8 - JSON as Datasource for Custom UIs](../Tutorials/Feature%20samples/Custom%20UI%20examples%20tutorial/Station%208%20-%20JSON%20as%20Datasource%20for%20Custom%20UIs.md) show success-path `.then(...)` usage. The Station 8 tutorial goes further and explicitly says that if fetching fails, the subsequent `.then()` code does not run. That is a different style of guidance from the explicit fallback pattern documented for [NpcConversation.elicitResponse()](../Desktop%20editor/NPCs/NPC%20Conversation/NPC%20Fallback.md#apis-for-creating-fallback-instances-with-scripted-dialog).

This means code using [Asset.fetchAsData()](../Reference/core/Classes/Asset.md#fetchasdataoptions) usually needs two separate decisions: how to parse and cache the successful [AssetContentData](../Reference/core/Classes/AssetContentData.md), and whether the surrounding user experience needs explicit retry, error logging, or placeholder content when the fetch never reaches the success path. The docs do not present one universal failure pattern for every caller.

## Revalidate player and entity references after long async gaps

The [Player.isValidReference](../Reference/core/Classes/Player.md#isvalidreference) and [Entity.isValidReference](../Reference/core/Classes/Entity.md#isvalidreference) properties are both documented as useful in asynchronous contexts such as `async/await`, `promise.then(...)`, and network events. That guidance connects async control flow to object lifetime: even when a Promise resolves successfully, the referenced player or entity may no longer be valid by the time follow-up logic runs.

That is especially relevant after [NpcConversation.elicitResponse()](../Desktop%20editor/NPCs/NPC%20Conversation/NPC%20Fallback.md#apis-for-creating-fallback-instances-with-scripted-dialog), [Asset.fetchAsData()](../Reference/core/Classes/Asset.md#fetchasdataoptions), or [PlayerMigration.migrateToHorizonApp()](../Reference/migration/Classes/PlayerMigration.md#migratetohorizonappoptions) because all of them can introduce enough delay for the world state to change. A robust async pattern therefore combines API-specific failure handling with post-await validity checks.

```ts
const data = await asset.fetchAsData();

if (!player.isValidReference.get() || !entity.isValidReference.get()) {
  return;
}

const parsed = data.asJSON<MyPayload>();
```