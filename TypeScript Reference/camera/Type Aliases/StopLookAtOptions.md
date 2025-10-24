# StopLookAtOptions Type

Options available when stopping a camera from looking at a target.

## Signature

```typescript
export declare type StopLookAtOptions = {
    useForceLookAtTransitionOutOptions?: boolean;
    transition?: CameraTransitionOptions;
};
```

## References

[CameraTransitionOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_cameratransitionoptions)

## Remarks

**Type Parameters:**
- `useForceLookAtTransitionOutOptions` - If true, the transition out options from the [ForceLookAtOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_forcelookatoptions) will be used.
- `transition` - describes the behavior of the transition out of the forced look at. If undefined, the transition will be instant. If `useForceLookAtTransitionOutOptions` is true, the options for the transition out of the forced look at will be used.