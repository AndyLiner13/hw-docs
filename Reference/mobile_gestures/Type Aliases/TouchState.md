---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchstate
---

# [TouchState type](#touchstate-type)

State of a touch

## [Signature](#signature)

```
export
 declare type 
TouchState
 
=
 
{

    phase
:
 
TouchPhase
;

    start
:
 
TouchInfo
;

    previous
:
 
TouchInfo
;

    current
:
 
TouchInfo
;

    screenDelta
:
 
Vec3
;

    screenTraveled
:
 number
;


};
```

## [References](#references)

[TouchPhase](TouchPhase.md), [TouchInfo](TouchInfo.md)

