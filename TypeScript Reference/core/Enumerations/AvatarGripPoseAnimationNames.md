# AvatarGripPoseAnimationNames Enum

Defines the currently available avatar grip pose animations.

## Signature

```typescript
export declare enum AvatarGripPoseAnimationNames
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| CancelThrow | "CancelThrow" | Cancels the "ReadyThrow" or "ChargeThrow" animations. |
| ChargeThrow | "ChargeThrow" | Puts the player into a "Charging up throw" animation. |
| Fire | "Fire" | Fire animation for the player. |
| ReadyThrow | "ReadyThrow" | Puts the player into a "Ready to throw" animation. |
| Reload | "Reload" | Reload animation for the player. |
| Throw | "Throw" | Throw animation for the player. |

## Examples

### Using Avatar Grip Pose Animations

```typescript
// Fire animation
player.playGripPoseAnimation(AvatarGripPoseAnimationNames.Fire);

// Throw sequence
player.playGripPoseAnimation(AvatarGripPoseAnimationNames.ReadyThrow);
// ... prepare throw
player.playGripPoseAnimation(AvatarGripPoseAnimationNames.ChargeThrow);
// ... charge up
player.playGripPoseAnimation(AvatarGripPoseAnimationNames.Throw);

// Cancel a throw
player.playGripPoseAnimation(AvatarGripPoseAnimationNames.CancelThrow);

// Reload animation
player.playGripPoseAnimation(AvatarGripPoseAnimationNames.Reload);
```