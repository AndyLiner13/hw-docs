Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_startvideocaptureoptions

# StartVideoCaptureOptions type

> Warning: This API is now obsolete.
> This module is deprecated and will be removed in a future version.

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

[CameraMovementPreset](CameraMovementPreset.md), [VideoCaptureNotifications](../Enumerations/VideoCaptureNotifications.md)

## Remarks

[DefaultStartVideoCaptureOptions](../Variables/DefaultStartVideoCaptureOptions.md) specifies the default options.