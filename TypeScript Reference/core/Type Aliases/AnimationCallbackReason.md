# AnimationCallbackReason type

Represents the [reason](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallbackreasons) that an [AnimationCallback](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallback) or [AvatarGripPoseAnimationCallback](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatargripposeanimationcallback) function triggered, such as if the animation is starting or stopping.

## Signature

```typescript
export declare type AnimationCallbackReason = AnimationCallbackReasons;
```

## References

[AnimationCallbackReasons](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallbackreasons)

## Remarks

This type alias provides the reason why an animation callback was triggered, enabling scripts to respond appropriately to animation state changes.