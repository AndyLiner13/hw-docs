Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_startvideocaptureoptions

API reference

# StartVideoCaptureOptions type

The options for the method.

## Signature

```
export declare type StartVideoCaptureOptions = {
    cameraMovementPreset?: CameraMovementPreset;
    duration: number;
    saveOnDurationReached: boolean;
    notifications: VideoCaptureNotifications;
};
```

## References

[CameraMovementPreset](/hw-docs/Reference/capturing/Type%20Aliases/CameraMovementPreset.md), [VideoCaptureNotifications](/hw-docs/Reference/capturing/Enumerations/VideoCaptureNotifications.md)

## Remarks

[DefaultStartVideoCaptureOptions](/hw-docs/Reference/capturing/Variables/DefaultStartVideoCaptureOptions.md) specifies the default options.