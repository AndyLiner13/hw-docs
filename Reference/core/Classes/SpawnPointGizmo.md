Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawnpointgizmo

# SpawnPointGizmo Class

Extends *[Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity)*

A Spawn Point gizmo, which you can use to teleport players to a location in a world using a fade-out/fade-in transition.

## Signature

```
export declare class SpawnPointGizmo extends Entity
```

## Remarks

For more information about using the Spawn Point gizmo, see [Spawn Points](https://developers.meta.com/horizon-worlds/learn/documentation/tutorials/multiplayer-lobby-tutorial/module-5-entering-the-match) guide.

## Properties

|  |  |
| --- | --- |
| **gravity** | The gravity for players spawned using this gizmo.      Signature  ``` gravity: HorizonProperty<number>; ```  Remarks  Range = (0, 9.81) |
| **speed** | The speed for players spawned using this gizmo.      Signature  ``` speed: HorizonProperty<number>; ```  Remarks  Range = (0, 45) |

## Methods

|  |  |
| --- | --- |
| **teleportPlayer(player)** | Teleports a player to the spawn point.      Signature  ``` teleportPlayer(player: Player): void; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player to teleport.  Returns  void |
| **toString()** | Creates a human-readable representation of the SpawnPointGizmo.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the `SpawnPointGizmo`. |