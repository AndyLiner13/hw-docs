# OrbitCameraMode Class

Extends [ICameraMode](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_icameramode). Manipulates runtime properties of cameras in orbit mode, where camera view follows the player avatar without being fixed behind the player.

## Signature

```typescript
export declare class OrbitCameraMode implements ICameraMode
```

## Remarks

The [Camera.setCameraModeOrbit()](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_camera#setcameramodeorbit) method enables orbit mode. For more information on setting camera modes at runtime, see the [Camera](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/camera) guide.

## Properties

| Property | Description |
| --- | --- |
| `distance` | Camera rotation radius around the target.<br/>**Signature:** `distance: HorizonProperty<number>;` |
| `rotationSpeed` | Controls how quickly the camera rotates to the desired rotation. If not set, the camera is always snapped to it instantly.<br/>**Signature:** `rotationSpeed: HorizonProperty<number \| null>;` |
| `translationSpeed` | Controls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.<br/>**Signature:** `translationSpeed: HorizonProperty<number \| null>;` |
| `verticalOffset` | Vertical offset up from the target position. Camera rotates around the offsetted point.<br/>**Signature:** `verticalOffset: HorizonProperty<number>;` |