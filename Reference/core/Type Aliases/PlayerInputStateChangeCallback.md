Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinputstatechangecallback

# PlayerInputStateChangeCallback type

A callback that signals state changes when player input is pressed.

## Signature

```
export declare type PlayerInputStateChangeCallback = (action: PlayerInputAction, pressed: boolean) => void;
```

## References

[PlayerInputAction](../Enumerations/PlayerInputAction.md)

## Remarks

Use [PlayerInput.registerCallback()](../Classes/PlayerInput.md#registercallback) to register this callback.
action - The input action that triggered the callback.
pressed - true if the input was pressed; false if it was released.