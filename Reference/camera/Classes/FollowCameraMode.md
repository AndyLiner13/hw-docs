Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_followcameramode

# FollowCameraMode Class

Extends *[ICameraMode](/hw-docs/Reference/camera/Interfaces/ICameraMode.md)*

Manipulates runtime properties of cameras in Follow mode.

## Signature

```
export declare class FollowCameraMode implements ICameraMode
```

## Properties

|  |  |
| --- | --- |
| **activationDelay** | Camera auto-turning activation delay after camera has been manually turned.      Signature  ``` activationDelay: HorizonProperty<number>; ``` |
| **cameraTurnSpeed** | Speed at which the camera turns to return behind the player avatar.      Signature  ``` cameraTurnSpeed: HorizonProperty<number>; ``` |
| **continuousRotation** | Enables continuous rotation of the camera to return behind the player avatar once rotation had started and isn't interrupted.      Signature  ``` continuousRotation: HorizonProperty<boolean>; ``` |
| **distance** | Camera rotation radius around the target.      Signature  ``` distance: HorizonProperty<number>; ``` |
| **horizonLevelling** | Enables levelling the camera to the horizon.      Signature  ``` horizonLevelling: HorizonProperty<boolean>; ``` |
| **rotationSpeed** | Controls how quickly the camera rotates to the desired rotation. If not set, the camera is always snapped to it instantly.      Signature  ``` rotationSpeed: HorizonProperty<number | null>; ``` |
| **translationSpeed** | Controls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.      Signature  ``` translationSpeed: HorizonProperty<number | null>; ``` |
| **verticalOffset** | Vertical offset up from the target position. Camera rotates around the offsetted point      Signature  ``` verticalOffset: HorizonProperty<number>; ``` |