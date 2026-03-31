# Persistent Variable Return Shapes

[IPersistentStorage.getPlayerVariable()](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) and [IPersistentStorageWorld.getWorldVariable()](../Reference/core/Interfaces/IPersistentStorageWorld.md#getworldvariablekey) both read persisted data, but they do not share the same missing-value contract. The generated [IPersistentStorage reference](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) and [IPersistentStorageWorld reference](../Reference/core/Interfaces/IPersistentStorageWorld.md#getworldvariablekey) publish different return shapes, and the player-variable guides are not fully aligned with each other.

## Player variable reads depend on the variable's data type

The generated [IPersistentStorage.getPlayerVariable()](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) signature returns `T extends number ? T : T | null`, so number variables stay numeric while object-shaped payloads remain nullable. The official [Object Type Persistent Variables](Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md#accessing-variables-from-typescript) guide says the same thing in prose: unset number variables return `0`, while unset object variables return `null`.

The broader official [Persistent Variables](Get%20started%20with%20TypeScript/Persistent%20Variables.md#api-module-and-references) guide says an unset [IPersistentStorage.getPlayerVariable()](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) returns `0` as a default value without restating the object-type exception. That statement conflicts with both the generated [IPersistentStorage reference](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) and the dedicated [Object Type Persistent Variables](Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md#accessing-variables-from-typescript) guide. When those sources disagree, the safest interpretation is the one shared by the generated reference and the current type surface: object-shaped reads from [IPersistentStorage.getPlayerVariable()](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) must be treated as nullable.

That split means object-shaped player state and numeric counters should be handled differently. Code that uses [IPersistentStorage.getPlayerVariable()](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) for structured payloads should initialize missing state before member access, while number-based score or level variables can rely on the documented numeric default.

| Read API | Missing-value shape | Source-backed interpretation |
| --- | --- | --- |
| [IPersistentStorage.getPlayerVariable()](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) for number variables | `0` | The generated [IPersistentStorage reference](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) and the official [Object Type Persistent Variables](Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md#accessing-variables-from-typescript) guide align on numeric defaults. |
| [IPersistentStorage.getPlayerVariable()](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) for object variables | `null` | The generated [IPersistentStorage reference](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) and the official [Object Type Persistent Variables](Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md#accessing-variables-from-typescript) guide both make object reads nullable. |
| [IPersistentStorageWorld.getWorldVariable()](../Reference/core/Interfaces/IPersistentStorageWorld.md#getworldvariablekey) | `T \| null` | The generated [IPersistentStorageWorld reference](../Reference/core/Interfaces/IPersistentStorageWorld.md#getworldvariablekey) publishes a nullable world-variable read contract. |
| [IPersistentStorageWorld.fetchWorldVariableAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#fetchworldvariableasynckey) | `Promise<T \| null>` | The generated [IPersistentStorageWorld reference](../Reference/core/Interfaces/IPersistentStorageWorld.md#fetchworldvariableasynckey) keeps the async world-variable fetch path nullable as well. |

## World variable reads are uniformly nullable

Unlike [IPersistentStorage.getPlayerVariable()](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key), both [IPersistentStorageWorld.getWorldVariable()](../Reference/core/Interfaces/IPersistentStorageWorld.md#getworldvariablekey) and [IPersistentStorageWorld.fetchWorldVariableAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#fetchworldvariableasynckey) are always nullable in the published reference. That makes world-level reads simpler to reason about: a missing world variable is always a nullable-read problem, not a number-versus-object special case.

This matters when code mixes player-specific persistence and world-level persistence in the same component. If a script reads an object payload via [IPersistentStorage.getPlayerVariable()](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) and then reads shared state via [IPersistentStorageWorld.fetchWorldVariableAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#fetchworldvariableasynckey), both results need guard logic even though the first API only becomes nullable for non-number payloads.

## Cross-instance world writes have two documented return shapes

[IPersistentStorageWorld.setWorldVariableAcrossAllInstancesAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride) has two official overload families. The generated [IPersistentStorageWorld reference](../Reference/core/Interfaces/IPersistentStorageWorld.md#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride) publishes a legacy mode where omitted or `true` `allowConcurrentOverride` resolves directly to `Promise<T>`, and it also publishes a concurrent-safe mode where `allowConcurrentOverride: false` resolves to `Promise<[WorldVariableUpdateResult](../Reference/core/Interfaces/WorldVariableUpdateResult.md)<T>>`.

The official [Concurrent-safe world level variable updates](API%20references%20and%20examples/Concurrent-safe%20world%20level%20variable%20updates.md) guide explains why the `false` mode exists: it prevents silent overwrite behavior and exposes structured conflict information through [WorldVariableUpdateResult](../Reference/core/Interfaces/WorldVariableUpdateResult.md). The official [Create world level variables](../Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Variable%20groups/Create%20world%20level%20variables.md#set-a-world-variable) guide, however, still shows the legacy two-argument form and describes the race-condition risk only as a note for data-integrity-sensitive scenarios. In practical terms, [IPersistentStorageWorld.setWorldVariableAcrossAllInstancesAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride) has two supported contracts, not one universally-correct contract.

## Practical handling pattern

Use [IPersistentStorage.getPlayerVariable()](../Reference/core/Interfaces/IPersistentStorage.md#getplayervariableplayer-key) with a payload-specific mindset: numeric counters can be read directly, but object payloads should be initialized from a null check before member access. Treat both [IPersistentStorageWorld.getWorldVariable()](../Reference/core/Interfaces/IPersistentStorageWorld.md#getworldvariablekey) and [IPersistentStorageWorld.fetchWorldVariableAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#fetchworldvariableasynckey) as nullable every time.

Choose the overload of [IPersistentStorageWorld.setWorldVariableAcrossAllInstancesAsync()](../Reference/core/Interfaces/IPersistentStorageWorld.md#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride) deliberately. If you need conflict detection, retry logic, or throttling awareness, pass `false` and inspect [WorldVariableUpdateResult](../Reference/core/Interfaces/WorldVariableUpdateResult.md). If you intentionally want the published legacy overwrite behavior, omitting the third argument or passing `true` is still part of the documented API surface.

```ts
type PlayerProfile = { level: number; title: string };
type SharedState = { highScore: number };

const profile = this.world.persistentStorage.getPlayerVariable<PlayerProfile>(player, profileKey);
if (profile == null) {
  initializeProfile(player);
}

const sharedState = await this.world.persistentStorageWorld.fetchWorldVariableAsync<SharedState>(worldKey);
const currentHighScore = sharedState?.highScore ?? 0;

const result = await this.world.persistentStorageWorld.setWorldVariableAcrossAllInstancesAsync(
  worldKey,
  { highScore: Math.max(currentHighScore, newScore) },
  false,
);

if (!result.success) {
  handleConflict(result.errorType, result.value);
}
```