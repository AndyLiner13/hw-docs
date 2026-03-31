# Network Event Payload Types

[NetworkEvent](../Reference/core/Classes/NetworkEvent.md) payloads are described two different ways in the current Horizon Worlds documentation. The [NetworkEvent](../Reference/core/Classes/NetworkEvent.md) class says network events support data that can be serialized through `JSON.stringify()`, while the current [horizon_core.d.ts](../hw-project/types/horizon_core.d.ts) type surface and official tutorials show payload shapes that include [Entity](../Reference/core/Classes/Entity.md) and [Player](../Reference/core/Classes/Player.md) references. If you interpret [NetworkEvent](../Reference/core/Classes/NetworkEvent.md) as "plain JSON only," you will reject patterns that current official samples actively use.

## What the reference pages clearly guarantee

[Component.sendNetworkEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkeventtarget-event-data-players) and [Component.sendNetworkBroadcastEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkbroadcasteventevent-data-players) both document a hard 63kB limit after serialization for the payload data. The [NetworkEvent](../Reference/core/Classes/NetworkEvent.md) class description also makes it clear that payloads are networked data rather than arbitrary local-only state. That shared guidance is the stable part of the contract: payloads cross the network, must be serializable in some supported form, and must stay within the serialized size limit.

| Source | What it shows | Practical consequence |
| --- | --- | --- |
| [NetworkEvent](../Reference/core/Classes/NetworkEvent.md) | Describes payloads as data serializable through `JSON.stringify()` | Suggests a JSON-style mental model for network payloads |
| [Component.sendNetworkEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkeventtarget-event-data-players) | States that serialized payload data is capped at 63kB | Confirms a hard transport limit even when a payload type is otherwise valid |
| [Component.sendNetworkBroadcastEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkbroadcasteventevent-data-players) | Repeats the same 63kB serialized-size limit | The same payload-budget rule applies to broadcast events too |
| [horizon_core.d.ts](../hw-project/types/horizon_core.d.ts) | Declares [SerializableState](../Reference/core/Type%20Aliases/SerializableState.md) broadly enough to include [Entity](../Reference/core/Classes/Entity.md) and [Player](../Reference/core/Classes/Player.md) nodes in the current type surface | The generated type contract is broader than a strict plain-JSON reading |

## Where the current sources diverge

The prose on [NetworkEvent](../Reference/core/Classes/NetworkEvent.md) points readers toward a `JSON.stringify()` mental model, but the current [horizon_core.d.ts](../hw-project/types/horizon_core.d.ts) declarations use [SerializableState](../Reference/core/Type%20Aliases/SerializableState.md) as the payload boundary for [Component.sendNetworkEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkeventtarget-event-data-players) and [Component.sendNetworkBroadcastEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkbroadcasteventevent-data-players). In the current type surface, that boundary is broader than plain JSON objects because it includes engine value/reference types such as [Entity](../Reference/core/Classes/Entity.md) and [Player](../Reference/core/Classes/Player.md).

That mismatch matters because the difference is not theoretical. A creator who reads only the [NetworkEvent](../Reference/core/Classes/NetworkEvent.md) description could reasonably conclude that payloads should be limited to primitives, arrays, and plain objects. A creator who reads the current [horizon_core.d.ts](../hw-project/types/horizon_core.d.ts) surface or follows the official samples will arrive at a wider interpretation. Search results that surface both sources together make that contradiction visible before a team turns it into a house rule.

## Official examples that send Player values

[NPC Scripts](../Desktop%20editor/NPCs/NPC%20Scripts.md) defines [NetworkEvent](../Reference/core/Classes/NetworkEvent.md) instances whose payload type is `{player: hz.Player}` and later uses [Component.sendNetworkBroadcastEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkbroadcasteventevent-data-players) with `{player}` as the payload. That is direct official evidence that a [Player](../Reference/core/Classes/Player.md)-valued field is treated as a supported network payload shape in current Horizon Worlds samples.

## Official examples that send Entity values

[Module 3 - PlayerCameraManager](../Tutorials/Feature%20samples/Camera%20api%20examples%20tutorial/Module%203%20-%20PlayerCameraManager.md) uses [Component.sendNetworkBroadcastEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkbroadcasteventevent-data-players) to broadcast `{ObjectId: "PlayerCamera", Object: this.entity}`. [Module 2 - PlayerCamera Overview](../Tutorials/Feature%20samples/Camera%20api%20examples%20tutorial/Module%202%20-%20PlayerCamera%20Overview.md) uses [Component.sendNetworkEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkeventtarget-event-data-players) with an entity-valued payload field in `{ entity: this.props.cameraPositionEntity, duration: 0.4, easing: Easing.EaseInOut }`. Together, those official examples show that [Entity](../Reference/core/Classes/Entity.md) references are also used as supported payload members in current documentation.

## Receiving Player and Entity references safely

[Component.connectNetworkEvent()](../Reference/core/Abstract%20Classes/Component.md#connectnetworkeventtarget-event-callback) receives payloads as the exact `TPayload` declared on the [NetworkEvent](../Reference/core/Classes/NetworkEvent.md), and the generated [horizon_core.d.ts](../hw-project/types/horizon_core.d.ts) uses the same `(payload: TPayload) => void` callback contract. In other words, a network event declared with `{player: Player}` or `{entity: Entity}` is presented to the listener as a non-optional payload shape in the current reference surface.

That typed payload contract is not the whole lifetime story. [Player.isValidReference](../Reference/core/Classes/Player.md#isvalidreference) and [Entity.isValidReference](../Reference/core/Classes/Entity.md#isvalidreference) are both documented as useful in asynchronous contexts such as network events, and the generated [horizon_core.d.ts](../hw-project/types/horizon_core.d.ts) goes further by stating that bridge calls throw when the referenced [Player](../Reference/core/Classes/Player.md) or [Entity](../Reference/core/Classes/Entity.md) is no longer valid. A payload member can therefore be part of a supported network payload shape and still require a validity guard before later bridge calls.

The current [Social.getAvatarImageSource()](../Reference/social/Classes/Social.md) example exposes a second contradiction. It registers [Component.connectNetworkEvent()](../Reference/core/Abstract%20Classes/Component.md#connectnetworkeventtarget-event-callback) with a callback typed as `{player: Player}`, then immediately checks `data.player != undefined` before calling [Social.getAvatarImageSource()](../Reference/social/Classes/Social.md). The same example is preserved in [horizon_social.d.ts](../hw-project/types/horizon_social.d.ts), so the mismatch is not limited to one scraped page: the published callback typing says the payload member is present, while the official example still treats that same member as optionally absent.

The least risky interpretation is to treat [Player](../Reference/core/Classes/Player.md) and [Entity](../Reference/core/Classes/Entity.md) payload members as supported by current docs and types, then guard the received references conservatively before using APIs on them. When a project wants one rule that survives both the strict callback signature and the official examples, checking [Player.isValidReference](../Reference/core/Classes/Player.md#isvalidreference) or [Entity.isValidReference](../Reference/core/Classes/Entity.md#isvalidreference) is a more stable contract than assuming network-event hazards are expressed only through `undefined`.

```ts
this.connectNetworkEvent(this.entity, SomeEvents.OnPayload, ({ player, entity }) => {
	if (!player || !entity) {
		return;
	}

	if (!player.isValidReference.get() || !entity.isValidReference.get()) {
		return;
	}

	// Safe follow-up bridge calls here.
});
```

## Safe interpretation for current projects

When the prose on [NetworkEvent](../Reference/core/Classes/NetworkEvent.md) and the current [horizon_core.d.ts](../hw-project/types/horizon_core.d.ts) surface do not line up perfectly, the least risky interpretation is to treat the generated types and current official samples as the operational contract, then keep payloads small enough to satisfy the 63kB limit documented on [Component.sendNetworkEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkeventtarget-event-data-players) and [Component.sendNetworkBroadcastEvent()](../Reference/core/Abstract%20Classes/Component.md#sendnetworkbroadcasteventevent-data-players). Plain structured data is still the safest default, but the current documentation set does not support a blanket claim that every [Entity](../Reference/core/Classes/Entity.md) or [Player](../Reference/core/Classes/Player.md) payload member is invalid.