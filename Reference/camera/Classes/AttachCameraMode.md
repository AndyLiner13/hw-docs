Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_attachcameramode

# AttachCameraMode Class

Extends *[ICameraMode](/hw-docs/Reference/camera/Interfaces/ICameraMode.md)*

Manipulates runtime properties of cameras in attach mode. When attach mode is enabled for a camera, it follows a target entity's position and rotation.

## Signature

```
export declare class AttachCameraMode implements ICameraMode
```

## Remarks

The [Camera.setCameraModeAttach()](/hw-docs/Reference/camera/Classes/Camera.md#setcameramodeattach) method enables attach mode for a camera.

## Properties

|  |  |
| --- | --- |
| **positionOffset** | Local offset from the target position. Target's frame of reference.      Signature  ``` positionOffset: HorizonProperty<Vec3>; ``` |
| **rotationOffset** | Local rotation from the target rotation. Target's frame of reference.      Signature  ``` rotationOffset: HorizonProperty<Quaternion>; ``` |
| **rotationSpeed** | Controls how quickly the camera rotates to keep the target in view. If not set, the camera always points in the same direction the target is facing.      Signature  ``` rotationSpeed: HorizonProperty<number | null>; ``` |
| **translationSpeed** | Controls how quickly the camera moves with the target it's attached to. If not set, the camera is always snapped to the position offset from the target.      Signature  ``` translationSpeed: HorizonProperty<number | null>; ``` |