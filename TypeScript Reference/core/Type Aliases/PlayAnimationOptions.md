# PlayAnimationOptions type

The options for the [Player.playAvatarAnimation()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#playavataranimation) method, which triggers a non-looping animation on an avatar.

## Signature

```typescript
export declare type PlayAnimationOptions = {
    playRate?: number;
    looping?: boolean;
    fadeInDuration?: number;
    fadeOutDuration?: number;
    mask?: AvatarAnimationMask;
    callback?: AnimationCallback;
};
```

## References

[AvatarAnimationMask](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avataranimationmask), [AnimationCallback](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallback)