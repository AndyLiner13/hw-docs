---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_pancameramode
---

# [PanCameraMode Class](#pancameramode-class)

Extends *[ICameraMode](../Interfaces/ICameraMode.md)*

Manipulates runtime properties of cameras in pan camera mode. In pan camera mode, the camera follows the player at a fixed position that you set adjacent to the player.

## [Signature](#signature)

```ts
export declare class PanCameraMode implements ICameraMode 
```

## [Remarks](#remarks)

The [Camera.setCameraModePan()](Camera.md#setcameramodepan) method enables pan camera mode. For more information on setting camera modes at runtime, see the [Camera](../../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Camera.md) guide.

## [Properties](#properties)

### [positionOffset](#positionoffset)

Local offset from the target position. Camera keeps looking at target.

**Signature**

```ts
positionOffset: HorizonProperty<Vec3>;
```

### [translationSpeed](#translationspeed)

Controls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.

**Signature**

```ts
translationSpeed: HorizonProperty<number | null>;
```

