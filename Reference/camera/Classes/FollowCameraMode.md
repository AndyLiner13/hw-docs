Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_followcameramode

# FollowCameraMode Class

Extends *[ICameraMode](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_icameramode)*

Manipulates runtime properties of cameras in Follow mode.

## Signature

```
export declare class FollowCameraMode implements ICameraMode
```

## Properties

|  |  |
| --- | --- |
| **activationDelay** | Camera auto-turning activation delay after camera has been manually turned.      Signature  ``` activationDelay: HorizonProperty<number>; ``` |
| **cameraTurnSpeed** | Warning: This API is now obsolete. use horizontalRotationRate and verticalRotationRate instead Speed at which the camera turns to return behind the player avatar.      Signature  ``` cameraTurnSpeed: HorizonProperty<number>; ``` |
| **continuousRotation** | Enables continuous rotation of the camera to return behind the player avatar once rotation had started and isn't interrupted.      Signature  ``` continuousRotation: HorizonProperty<boolean>; ``` |
| **distance** | Camera rotation radius around the target.      Signature  ``` distance: HorizonProperty<number>; ``` |
| **horizonLevelling** | Enables levelling the camera to the horizon.      Signature  ``` horizonLevelling: HorizonProperty<boolean>; ``` |
| **horizontalRotationRate** | Controls how quickly the camera rotates horizontally to return behind the player avatar.      Signature  ``` horizontalRotationRate: HorizonProperty<number | null>; ``` |
| **horizontalRotationRateMaxTime** | How much time it takes to reach maximum horizontal rotation speed      Signature  ``` horizontalRotationRateMaxTime: HorizonProperty<number | null>; ``` |
| **horizontalTranslationInertiaRate** | How quickly the camera follows the target along XZ plane See FollowCameraOptions.horizontalTranslationInertiaRate for full explanation      Signature  ``` horizontalTranslationInertiaRate: HorizonProperty<number | null>; ``` |
| **rotationSpeed** | Warning: This API is now obsolete. use horizontalRotationRate and verticalRotationRate instead Controls how quickly the camera rotates to the desired rotation. If not set, the camera is always snapped to it instantly.      Signature  ``` rotationSpeed: HorizonProperty<number | null>; ``` |
| **targetPitch** | Target pitch angle adjustment for the follow camera      Signature  ``` targetPitch: HorizonProperty<number>; ``` |
| **translationSpeed** | Warning: This API is now obsolete. use verticalTranslationInertiaRate and horizontalTranslationInertiaRate instead Controls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.      Signature  ``` translationSpeed: HorizonProperty<number | null>; ``` |
| **verticalOffset** | Vertical offset up from the target position. Camera rotates around the offsetted point      Signature  ``` verticalOffset: HorizonProperty<number>; ``` |
| **verticalRotationRate** | Controls how quickly the camera rotates vertically to the desired target pitch      Signature  ``` verticalRotationRate: HorizonProperty<number | null>; ``` |
| **verticalRotationRateMaxTime** | How much time it takes to reach maximum vertical rotation speed      Signature  ``` verticalRotationRateMaxTime: HorizonProperty<number | null>; ``` |
| **verticalTranslationInertiaRate** | How quickly the camera follows the target along Y axis plane See FollowCameraOptions.verticalTranslationInertiaRate for full explanation      Signature  ``` verticalTranslationInertiaRate: HorizonProperty<number | null>; ``` |