# FollowCameraOptions Type

Available options when applying a follow camera.

## Signature

```typescript
export declare type FollowCameraOptions = {
    activationDelay?: number;
    cameraTurnSpeed?: number;
    continuousRotation?: boolean;
    distance?: number;
    horizonLevelling?: boolean;
    rotationSpeed?: number;
    translationSpeed?: number;
    verticalOffset?: number;
};
```

## Remarks

**Type Parameters:**
- `activationDelay` - (number) The delay from when the auto-turning is enabled after camera has been manually turned. Default = 2.0
- `cameraTurnSpeed` - (number) Modifier for the speed at which the camera turns to return behind the player avatar. 0.5 = 50% speed, 1 = 100% speed etc. Default = 1.0
- `continuousRotation` - (bool) Enable the camera to continually rotate to behind the player once rotation has started and not interrupted or disable to only allow the rotation while player moves. Default = false
- `distance` - (number) The distance from the target to the camera. If not set, the camera remains at its current distance. Default = 5.0
- `horizonLevelling` - (bool) Enables levelling the camera to the horizon. Default = false
- `rotationSpeed` - Controls how quickly the camera rotates to the desired rotation during transitions between cameras. If not set, the camera is always snapped to it instantly.
- `translationSpeed` - Controls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.
- `verticalOffset` - Vertical offset up from the target position. Camera rotates around the offsetted point