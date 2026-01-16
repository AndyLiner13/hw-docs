Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerhand

# PlayerHand Class

Extends *[PlayerBodyPart](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerbodypart)*

A player's hand.

## Signature

```
export declare class PlayerHand extends PlayerBodyPart
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(player, handedness)** | Contructs a new `PlayerHand`.  ---  Signature  ``` constructor(player: Player, handedness: Handedness); ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player associated with the hand.  handedness: [Handedness](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_handedness)  The player's handedness. |

## Properties

|  |  |
| --- | --- |
| **handedness**  [readonly] protected | The player handedness.      Signature  ``` protected readonly handedness: Handedness; ``` |

## Methods

|  |  |
| --- | --- |
| **playHaptics(duration, strength, sharpness)** | Plays haptic feedback on the specified hand.      Signature  ``` playHaptics(duration: number, strength: HapticStrength, sharpness: HapticSharpness): void; ```  Parameters  duration: number  The duration of the feedback in MS.  strength: [HapticStrength](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_hapticstrength)  The strength of feedback to play.  sharpness: [HapticSharpness](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_hapticsharpness)  The sharpness of the feedback.  Returns  void |