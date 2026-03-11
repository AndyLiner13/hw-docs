---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallback
---

# [AnimationCallback type](#animationcallback-type)

A callback that signals changes in the pressed state of a [PlayerInput](../Classes/PlayerInput.md) object. This callback is used to inform scripts when an avatar animation starts or completes, so the script can respond to the animations.

## [Signature](#signature)

```ts
export declare type AnimationCallback = (animation: Asset, reason: AnimationCallbackReason) => void;
```

## [References](#references)

[Asset](../Classes/Asset.md), [AnimationCallbackReason](AnimationCallbackReason.md)

## [Remarks](#remarks)

This callback is optionally provided by the [Player.playAvatarAnimation()](../Classes/Player.md#playavataranimation) and [Player.stopAvatarAnimation()](../Classes/Player.md#stopavataranimation) methods when providing custom avatar animations.

