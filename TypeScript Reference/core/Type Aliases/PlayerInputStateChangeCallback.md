# PlayerInputStateChangeCallback type

A callback that signals state changes when player input is pressed.

## Signature

```typescript
export declare type PlayerInputStateChangeCallback = (action: PlayerInputAction, pressed: boolean) => void;
```

## References

[PlayerInputAction](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinputaction)

## Remarks

Use [PlayerInput.registerCallback()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinput#registercallback) to register this callback.

- `action` - The input action that triggered the callback.
- `pressed` - true if the input was pressed; false if it was released.