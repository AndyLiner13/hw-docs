# SpawnPointGizmo Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity). A Spawn Point gizmo, which you can use to teleport players to a location in a world using a fade-out/fade-in transition.

## Signature

```typescript
export declare class SpawnPointGizmo extends Entity
```

## Remarks

For more information about using the Spawn Point gizmo, see [Spawn Points](https://developers.meta.com/horizon-worlds/learn/documentation/tutorials/multiplayer-lobby-tutorial/module-5-entering-the-match) guide.

## Properties

| Property | Description |
| --- | --- |
| `gravity` | The gravity for players spawned using this gizmo.<br/>**Signature:** `gravity: HorizonProperty<number>;`<br/>**Remarks:** Range = (0, 9.81) |
| `speed` | The speed for players spawned using this gizmo.<br/>**Signature:** `speed: HorizonProperty<number>;`<br/>**Remarks:** Range = (0, 45) |

## Methods

| Method | Description |
| --- | --- |
| `teleportPlayer(player)` | Teleports a player to the spawn point.<br/>**Signature:** `teleportPlayer(player: Player): void;`<br/>**Parameters:** player: Player - The player to teleport.<br/>**Returns:** void |
| `toString()` | Creates a human-readable representation of the SpawnPointGizmo.<br/>**Signature:** `toString(): string;`<br/>**Returns:** string - A string representation of the SpawnPointGizmo. |