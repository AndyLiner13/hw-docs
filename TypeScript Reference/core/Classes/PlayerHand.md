# PlayerHand Class

Extends [PlayerBodyPart](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerbodypart) A player's hand.

## Signature

```typescript
export declare class PlayerHand extends PlayerBodyPart
```

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(player, handedness) | Contructs a new PlayerHand. Signature constructor(player: Player, handedness: Handedness); Parameters player: Player The player associated with the hand. handedness: Handedness The player's handedness. |

## Properties

| Property | Description |
| --- | --- |
| handedness [readonly] | The player handedness. Signature protected readonly handedness: Handedness; |

## Methods

| Method | Description |
| --- | --- |
| playHaptics(duration, strength, sharpness) | Plays haptic feedback on the specified hand. Signature playHaptics(duration: number, strength: HapticStrength, sharpness: HapticSharpness): void; Parameters duration: numberThe duration of the feedback in MS. strength: HapticStrength The strength of feedback to play. sharpness: HapticSharpness The sharpness of the feedback. Returns void |

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Freference%2F2.0.0%2Fcore_playerhand%2F)