# AvatarAnimationMask Enum

Defines which parts of the avatar's body should be affected by animation masks.

## Signature

```typescript
export declare enum AvatarAnimationMask
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| FullBody | 0 | Applies animation to the full body. |
| UpperBody | 1 | Applies animation only to the upper body (torso, arms, head). |
| LowerBody | 2 | Applies animation only to the lower body (legs, feet). |
| Head | 3 | Applies animation only to the head. |
| Arms | 4 | Applies animation only to the arms. |
| Hands | 5 | Applies animation only to the hands. |
| Legs | 6 | Applies animation only to the legs. |

## Examples

### Using Avatar Animation Masks

```typescript
// Apply different animation masks
function playAnimationWithMask(player: Player, animation: string, mask: AvatarAnimationMask) {
    player.playAnimation(animation, {
        mask: mask
    });
}

// Play upper body animation while preserving lower body movement
playAnimationWithMask(player, "wave", AvatarAnimationMask.UpperBody);

// Play walking animation only on legs
playAnimationWithMask(player, "walk", AvatarAnimationMask.LowerBody);

// Facial expressions only
playAnimationWithMask(player, "smile", AvatarAnimationMask.Head);

// Layered animations with different masks
function playLayeredAnimations(player: Player) {
    // Base walking animation
    player.playAnimation("walk", { mask: AvatarAnimationMask.LowerBody });
    
    // Upper body gesture
    player.playAnimation("wave", { mask: AvatarAnimationMask.UpperBody });
    
    // Facial expression
    player.playAnimation("happy", { mask: AvatarAnimationMask.Head });
}

// Context-specific animation masking
function playContextualAnimation(player: Player, context: string) {
    switch (context) {
        case "greeting":
            playAnimationWithMask(player, "wave", AvatarAnimationMask.Arms);
            break;
        case "dancing":
            playAnimationWithMask(player, "dance", AvatarAnimationMask.FullBody);
            break;
        case "talking":
            playAnimationWithMask(player, "speak", AvatarAnimationMask.Head);
            break;
        case "walking":
            playAnimationWithMask(player, "walk", AvatarAnimationMask.LowerBody);
            break;
    }
}
```

## Remarks

*Note: This documentation is based on common animation patterns in the Meta Horizon Worlds API. Please refer to the official documentation for the most up-to-date information.*