# ThrowOptions type

Options for customising the effect of calling the [Player.throwHeldItem()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#throwhelditem) method.

## Signature

```typescript
export declare type ThrowOptions = {
    speed?: number | null;
    pitch?: number | null;
    yaw?: number | null;
    playThrowAnimation?: boolean | null;
    hand?: Handedness | null;
};
```

## References

[Handedness](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_handedness)

## Remarks

- `speed`: The speed of the object when launched.
- `pitch`: The pitch of the throwing force.
- `yaw`: The yaw of the throwing force.
- `playThrowAnimation`: `true` to play the throwing animation on web & mobile clients; `false` otherwise. This value does not affect VR.
- `hand`: The hand to use for throwing.