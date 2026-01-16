Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_fixedpositiontrackingplayercameramovementpreset

# FixedPositionTrackingPlayerCameraMovementPreset type

> Warning: This API is now obsolete.
> This module is deprecated and will be removed in a future version.

A [CameraMovementPreset](https://developers.meta.com/horizon-worlds/reference/2.0.0/capturing_cameramovementpreset) option that keeps the player avatar in the center of the frame from a fixed position.

## Signature

```
export declare type FixedPositionTrackingPlayerCameraMovementPreset = {
    strategy: 'FixedLocationTrackingPlayer';
    fixedPosition: Vec3;
};
```