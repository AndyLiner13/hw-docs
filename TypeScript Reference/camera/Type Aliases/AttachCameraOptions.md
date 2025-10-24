# AttachCameraOptions Type

Options used to determine the behavior of a camera in [attached mode](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_camera#setcameramodeattach).

## Signature

```typescript
export declare type AttachCameraOptions = {
    positionOffset?: Vec3;
    rotationOffset?: Vec3 | Quaternion;
    translationSpeed?: number;
    rotationSpeed?: number;
};
```

## Remarks

A camera in attached mode is locked to a position relative to the target's position, with a rotation relative to the target's rotation.

**Type Parameters:**
- `positionOffset` - The local space offset relative to the target. If not set, the camera is attached directly to the target's position.
- `rotationOffset` - The local space rotation relative to the target. If not set, the camera faces the same direction as the target.
- `translationSpeed` - Controls how quickly the camera moves with the target it's attached to. If not set, the camera is always snapped to the position offset from the target.
- `rotationSpeed` - Controls how quickly the camera rotates to keep the target in view. If not set, the camera always points in the same direction the target is facing.