# ForceLookAtOptions Type

Options available when forcing a camera to look at a target.

## Signature

```typescript
export declare type ForceLookAtOptions = {
    duration?: number;
    offset?: Vec3;
    transitionIn?: CameraTransitionOptions;
    transitionOut?: CameraTransitionOptions;
};
```

## References

[CameraTransitionOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_cameratransitionoptions)

## Remarks

**Type Parameters:**
- `duration` - The time, in seconds, during which the camera will be stuck in forced look at if not interrupted. This time doesn't include the transition times (in and out). If not set, the camera will be stuck in forced look at until interrupted.
- `offset` - The offset from the target position to look at (in target's space).
- `transitionIn` - The options for the transition in to the forced look at. If undefined, the transition will be instant.
- `transitionOut` - The options for the transition out of the forced look at if not interrupted. If undefined, the transition will be instant.