---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerhand
---

# [PlayerHand Class](#playerhand-class)

Extends *[PlayerBodyPart](PlayerBodyPart.md)*

A player's hand.

## [Signature](#signature)

```ts
export declare class PlayerHand extends PlayerBodyPart 
```

## [Constructors](#constructors)

### [(constructor)(player, handedness)](#constructorplayer-handedness)

Contructs a new `PlayerHand`.

**Signature**

```ts
constructor(player: Player, handedness: Handedness);
```

**Parameters**

player: [Player](Player.md)

The player associated with the hand.

handedness: [Handedness](../Enumerations/Handedness.md)

The player's handedness.

## [Properties](#properties)

### [handedness \[readonly\] protected](#handedness-readonly-protected)

The player handedness.

**Signature**

```ts
protected readonly handedness: Handedness;
```

## [Methods](#methods)

### [playHaptics(duration, strength, sharpness)](#playhapticsduration-strength-sharpness)

Plays haptic feedback on the specified hand.

**Signature**

```ts
playHaptics(duration: number, strength: HapticStrength, sharpness: HapticSharpness): void;
```

**Parameters**

duration: number

The duration of the feedback in MS.

strength: [HapticStrength](../Enumerations/HapticStrength.md)

The strength of feedback to play.

sharpness: [HapticSharpness](../Enumerations/HapticSharpness.md)

The sharpness of the feedback.

**Returns**

void

