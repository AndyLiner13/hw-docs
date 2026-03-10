---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_startvideocaptureoptions
---

# [StartVideoCaptureOptions type](#startvideocaptureoptions-type)

> [!Warning]
>
> This API is now obsolete.\
> This module is deprecated and will be removed in a future version.

The options for the method.

## [Signature](#signature)

```
export
 declare type 
StartVideoCaptureOptions
 
=
 
{

    cameraMovementPreset
?:
 
CameraMovementPreset
;

    duration
:
 number
;

    saveOnDurationReached
:
 
boolean
;

    notifications
:
 
VideoCaptureNotifications
;


};
```

## [References](#references)

[CameraMovementPreset](CameraMovementPreset.md), [VideoCaptureNotifications](../Enumerations/VideoCaptureNotifications.md)

## [Remarks](#remarks)

[DefaultStartVideoCaptureOptions](../Variables/DefaultStartVideoCaptureOptions.md) specifies the default options.

