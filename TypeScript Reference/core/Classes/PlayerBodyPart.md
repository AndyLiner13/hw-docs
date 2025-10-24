# PlayerBodyPart Class

Represents a player body part.

## Signature

```typescript
export declare class PlayerBodyPart
```

## Constructors

| Constructor | Description |
| --- | --- |
| `(constructor)(player, type)` | Creates a PlayerBodyPart.<br/>**Signature:** `constructor(player: Player, type: PlayerBodyPartType);`<br/>**Parameters:** player: Player - The player that owns the body part. type: PlayerBodyPartType - The type of the body part. |

## Properties

| Property | Description |
| --- | --- |
| `forward` | The forward direction of the body part.<br/>**Signature:** `forward: ReadableHorizonProperty<Vec3>;` |
| `localPosition` | The position of the body part relative to the player's torso.<br/>**Signature:** `localPosition: ReadableHorizonProperty<Vec3>;` |
| `localRotation` | The local rotation of the body part relative to the player's torso.<br/>**Signature:** `localRotation: ReadableHorizonProperty<Quaternion>;` |
| `player` [readonly] | The player that owns the body part.<br/>**Signature:** `protected readonly player: Player;` |
| `position` | The position of the body part relative to the player.<br/>**Signature:** `position: ReadableHorizonProperty<Vec3>;` |
| `rotation` | The rotation of the body part relative to the player's body.<br/>**Signature:** `rotation: ReadableHorizonProperty<Quaternion>;` |
| `type` [readonly] | The type of the body part.<br/>**Signature:** `protected readonly type: PlayerBodyPartType;` |
| `up` | The up direction of the body part.<br/>**Signature:** `up: ReadableHorizonProperty<Vec3>;` |

## Methods

| Method | Description |
| --- | --- |
| `getPosition(space)` | Gets the world or the local position of the body part.<br/>**Signature:** `getPosition(space: Space): Vec3;`<br/>**Parameters:** space: Space - Indicates whether to get the world or local position of the body part.<br/>**Returns:** Vec3 - The position of the body part in this space. |
| `getRotation(space)` | Gets the rotation or the local rotation of the body part.<br/>**Signature:** `getRotation(space: Space): Quaternion;`<br/>**Parameters:** space: Space - Indicates whether to get the world or local rotation of the body part.<br/>**Returns:** Quaternion - The rotation of the body part in this space. |