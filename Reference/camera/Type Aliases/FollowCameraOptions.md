Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_followcameraoptions

# FollowCameraOptions type

Available options when applying a follow camera.

## Signature

```
export declare type FollowCameraOptions = {
    activationDelay?: number;
    cameraTurnSpeed?: number;
    continuousRotation?: boolean;
    distance?: number;
    horizonLevelling?: boolean;
    rotationSpeed?: number;
    translationSpeed?: number;
    verticalOffset?: number;
    horizontalTranslationInertiaRate?: number;
    verticalTranslationInertiaRate?: number;
    horizontalRotationRate?: number;
    verticalRotationRate?: number;
    horizontalRotationRateMaxTime?: number;
    verticalRotationRateMaxTime?: number;
    targetPitch?: number;
};
```

## Remarks

Type Parameters:
`activationDelay` - (number) The delay from when the auto-turning is enabled after camera has been manually turned. Default = 2.0
`cameraTurnSpeed` - (number) Modifier for the speed at which the camera turns to return behind the player avatar. 0.5 = 50% speed, 1 = 100% speed etc. Default = 1.0
`continuousRotation` - (bool) Enable the camera to continually rotate to behind the player once rotation has started and not interrupted or disable to only allow the rotation while player moves. Default = false
`distance` - (number) The distance from the target to the camera. If not set, the camera remains at its current distance. Default = 5.0
`horizonLevelling` - (bool) Enables levelling the camera to the horizon. Default = false
`rotationSpeed` - Deprecated, use horizontalRotationRate and verticalRotationRate instead
`translationSpeed` - Deprecated, use horizontalTranslationInertiaRate and verticalTranslationInertiaRate instead
`verticalOffset` - Vertical offset up from the target position. Camera rotates around the offsetted point
`horizontalTranslationInertiaRate` - How quickly the camera follows the target along XZ plane null - The camera follows the target instantly 0 - the camera doesn't follow the target 1 - the camera follows the target with high delay 5 - noticeable delay (\~1 meter difference at default character speed) 10 - minimal delay
`verticalTranslationInertiaRate` - How quickly the camera follows the target along Y axis plane null - The camera follows the target instantly 0 - the camera doesn't follow the target height changes 1 - the camera barely follows character vertical movement, the character substantially moves on the screen while jumping 5 - the camera repeats most of the character trajectory while jumping, but with a delay 10 - the character slightly moves along the camera during jump
`horizontalRotationRate` - Controls how quickly the camera rotates horizontally to return behind the player avatar. null - default rotation rate applied (1) 0 - the camera does not rotate after the target 1 - default value, relatively slow rotating camera 5 - high speed change 10 - nearly instant rotation
`verticalRotationRate` - Controls how quickly the camera rotates vertically to the desired target pitch null - default rotation rate applied (1) 0 - the camera does not change the pitch 1 - default value, relatively slow rotation 5 - high speed change 10 - nearly instant rotation
`horizontalRotationRateMaxTime` - How much time it takes to reach maximum horizontal rotation speed
`verticalRotationRateMaxTime` - How much time it takes to reach maximum vertical rotation speed
`targetPitch` - Target pitch angle adjustment for the follow camera