---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_attachcameramode
---

# [AttachCameraMode Class](#attachcameramode-class)

Extends *[ICameraMode](../Interfaces/ICameraMode.md)*

Manipulates runtime properties of cameras in attach mode. When attach mode is enabled for a camera, it follows a target entity's position and rotation.

## [Signature](#signature)

```ts
export declare class AttachCameraMode implements ICameraMode 
```

## [Remarks](#remarks)

The [Camera.setCameraModeAttach()](Camera.md#setcameramodeattach) method enables attach mode for a camera.

## [Properties](#properties)

### [positionOffset](#positionoffset)

Local offset from the target position. Target's frame of reference.

**Signature**

```ts
positionOffset: HorizonProperty<Vec3>;
```

### [rotationOffset](#rotationoffset)

Local rotation from the target rotation. Target's frame of reference.

**Signature**

```ts
rotationOffset: HorizonProperty<Quaternion>;
```

### [rotationSpeed](#rotationspeed)

Controls how quickly the camera rotates to keep the target in view. If not set, the camera always points in the same direction the target is facing.

**Signature**

```ts
rotationSpeed: HorizonProperty<number | null>;
```

### [translationSpeed](#translationspeed)

Controls how quickly the camera moves with the target it's attached to. If not set, the camera is always snapped to the position offset from the target.

**Signature**

```ts
translationSpeed: HorizonProperty<number | null>;
```

