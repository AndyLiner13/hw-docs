# AnimationCallback type

A callback that signals changes in the pressed state of a [PlayerInput](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinput) object. This callback is used to inform scripts when an avatar animation starts or completes, so the script can respond to the animations.

## Signature

```typescript
export declare type AnimationCallback = (animation: Asset, reason: AnimationCallbackReason) => void;
```

## References

[Asset](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_asset), [AnimationCallbackReason](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallbackreason)

## Remarks

This callback is optionally provided by the [Player.playAvatarAnimation()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#playavataranimation) and [Player.stopAvatarAnimation()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#stopavataranimation) methods when providing custom avatar animations.