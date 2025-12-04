Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playanimationoptions

# PlayAnimationOptions type

The options for the [Player.playAvatarAnimation()](/hw-docs/Reference/core/Classes/Player.md#playavataranimation) method, which triggers an animation on an avatar.

## Signature

```
export declare type PlayAnimationOptions = {
    playRate?: number;
    looping?: boolean;
    fadeInDuration?: number;
    fadeOutDuration?: number;
    mask?: AvatarAnimationMask;
    callback?: AnimationCallback;
    onEndBehavior?: AnimationOnEndBehavior;
};
```

## References

[AvatarAnimationMask](/hw-docs/Reference/core/Enumerations/AvatarAnimationMask.md), [AnimationCallback](/hw-docs/Reference/core/Type%20Aliases/AnimationCallback.md), [AnimationOnEndBehavior](/hw-docs/Reference/core/Enumerations/AnimationOnEndBehavior.md)