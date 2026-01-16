Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerbodypart

# PlayerBodyPart Class

Represents a player body part.

## Signature

```
export declare class PlayerBodyPart
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(player, type)** | Creates a `PlayerBodyPart`.  ---  Signature  ``` constructor(player: Player, type: PlayerBodyPartType); ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player that owns the body part.  type: [PlayerBodyPartType](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerbodyparttype)  The type of the body part. |

## Properties

|  |  |
| --- | --- |
| **forward** | The forward direction of the body part.      Signature  ``` forward: ReadableHorizonProperty<Vec3>; ``` |
| **localPosition** | The position of the body part relative to the player's torso.      Signature  ``` localPosition: ReadableHorizonProperty<Vec3>; ``` |
| **localRotation** | The local rotation of the body part relative to the player's torso.      Signature  ``` localRotation: ReadableHorizonProperty<Quaternion>; ``` |
| **player**  [readonly] protected | The player that owns the body part.      Signature  ``` protected readonly player: Player; ``` |
| **position** | The position of the body part relative to the player.      Signature  ``` position: ReadableHorizonProperty<Vec3>; ``` |
| **rotation** | The rotation of the body part relative to the player's body.      Signature  ``` rotation: ReadableHorizonProperty<Quaternion>; ``` |
| **type**  [readonly] protected | The type of the body part.      Signature  ``` protected readonly type: PlayerBodyPartType; ``` |
| **up** | The up direction of the body part.      Signature  ``` up: ReadableHorizonProperty<Vec3>; ``` |

## Methods

|  |  |
| --- | --- |
| **getPosition(space)** | Gets the world or the local position of the body part.      Signature  ``` getPosition(space: Space): Vec3; ```  Parameters  space: [Space](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_space)  Indicates whether to get the world or local position of the body part.  Returns  [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)  The position of the body part in this space. |
| **getRotation(space)** | Gets the rotation or the local rotation of the body part.      Signature  ``` getRotation(space: Space): Quaternion; ```  Parameters  space: [Space](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_space)  Indicates whether to get the world or local rotation of the body part.  Returns  [Quaternion](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_quaternion)  The rotation of the body part in this space. |