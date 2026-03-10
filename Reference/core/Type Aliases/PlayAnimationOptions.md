---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playanimationoptions
---

# [PlayAnimationOptions type](#playanimationoptions-type)

The options for the [Player.playAvatarAnimation()](../Classes/Player.md#playavataranimation) method, which triggers an animation on an avatar.

## [Signature](#signature)

```
export
 declare type 
PlayAnimationOptions
 
=
 
{

    playRate
?:
 number
;

    looping
?:
 
boolean
;

    fadeInDuration
?:
 number
;

    fadeOutDuration
?:
 number
;

    mask
?:
 
AvatarAnimationMask
;

    callback
?:
 
AnimationCallback
;

    onEndBehavior
?:
 
AnimationOnEndBehavior
;


};
```

## [References](#references)

[AvatarAnimationMask](../Enumerations/AvatarAnimationMask.md), [AnimationCallback](AnimationCallback.md), [AnimationOnEndBehavior](../Enumerations/AnimationOnEndBehavior.md)

