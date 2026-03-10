---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinputstatechangecallback
---

# [PlayerInputStateChangeCallback type](#playerinputstatechangecallback-type)

A callback that signals state changes when player input is pressed.

## [Signature](#signature)

```
export
 declare type 
PlayerInputStateChangeCallback
 
=
 
(
action
:
 
PlayerInputAction
,
 pressed
:
 
boolean
)
 
=>
 
void
;
```

## [References](#references)

[PlayerInputAction](../Enumerations/PlayerInputAction.md)

## [Remarks](#remarks)

Use [PlayerInput.registerCallback()](../Classes/PlayerInput.md#registercallback) to register this callback.\
action - The input action that triggered the callback.\
pressed - true if the input was pressed; false if it was released.

