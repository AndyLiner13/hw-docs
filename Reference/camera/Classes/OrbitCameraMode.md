Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_orbitcameramode

# OrbitCameraMode Class

Extends *[ICameraMode](/hw-mcp-tools/documentation/hw-docs/Reference/camera/Interfaces/ICameraMode.md)*

Manipulates runtime properties of cameras in orbit mode, where camera view follows the player avatar without being fixed behind the player.

## Signature

```
export declare class OrbitCameraMode implements ICameraMode
```

## Remarks

The [Camera.setCameraModeOrbit()](/hw-mcp-tools/documentation/hw-docs/Reference/camera/Classes/Camera.md#setcameramodeorbit) method enables orbit mode. For more information on setting camera modes at runtime, see the [Camera](/hw-mcp-tools/documentation/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Camera.md) guide.

## Properties

|  |  |
| --- | --- |
| **distance** | Camera rotation radius around the target.      Signature  ``` distance: HorizonProperty<number>; ``` |
| **rotationSpeed** | Controls how quickly the camera rotates to the desired rotation. If not set, the camera is always snapped to it instantly.      Signature  ``` rotationSpeed: HorizonProperty<number | null>; ``` |
| **translationSpeed** | Controls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.      Signature  ``` translationSpeed: HorizonProperty<number | null>; ``` |
| **verticalOffset** | Vertical offset up from the target position. Camera rotates around the offsetted point      Signature  ``` verticalOffset: HorizonProperty<number>; ``` |