# PanCameraMode Class

Extends [ICameraMode](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_icameramode). Manipulates runtime properties of cameras in pan camera mode. In pan camera mode, the camera follows the player at a fixed position that you set adjacent to the player.

## Signature

```typescript
export declare class PanCameraMode implements ICameraMode
```

## Remarks

The [Camera.setCameraModePan()](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_camera#setcameramodepan) method enables pan camera mode. For more information on setting camera modes at runtime, see the [Camera](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/camera) guide.

## Properties

| Property | Description |
| --- | --- |
| `positionOffset` | Local offset from the target position. Camera keeps looking at target.<br/>**Signature:** `positionOffset: HorizonProperty<Vec3>;` |
| `translationSpeed` | Controls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.<br/>**Signature:** `translationSpeed: HorizonProperty<number \| null>;` |