Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_pancameramode

API reference

# PanCameraMode Class

Extends *[ICameraMode](/hw-docs/Reference/camera/Interfaces/ICameraMode.md)*

Manipulates runtime properties of cameras in pan camera mode. In pan camera mode, the camera follows the player at a fixed position that you set adjacent to the player.

## Signature

```
export declare class PanCameraMode implements ICameraMode
```

## Remarks

The [Camera.setCameraModePan()](/hw-docs/Reference/camera/Classes/Camera.md#setcameramodepan) method enables pan camera mode. For more information on setting camera modes at runtime, see the [Camera](/hw-docs/create-for-web-and-mobile/typescript-apis-for-mobile/camera) guide.

## Properties

|  |  |
| --- | --- |
| **positionOffset** | Local offset from the target position. Camera keeps looking at target.      Signature  ``` positionOffset: HorizonProperty<Vec3>; ``` |
| **translationSpeed** | Controls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.      Signature  ``` translationSpeed: HorizonProperty<number | null>; ``` |