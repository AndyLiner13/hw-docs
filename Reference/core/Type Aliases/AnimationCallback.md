Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_animationcallback

# AnimationCallback type

A callback that signals changes in the pressed state of a [PlayerInput](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/PlayerInput.md) object. This callback is used to inform scripts when an avatar animation starts or completes, so the script can respond to the animations.

## Signature

```
export declare type AnimationCallback = (animation: Asset, reason: AnimationCallbackReason) => void;
```

## References

[Asset](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Asset.md), [AnimationCallbackReason](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/AnimationCallbackReason.md)

## Remarks

This callback is optionally provided by the [Player.playAvatarAnimation()](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md#playavataranimation) and [Player.stopAvatarAnimation()](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md#stopavataranimation) methods when providing custom avatar animations.