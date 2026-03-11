---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_orbitcameramode
---

# [OrbitCameraMode Class](#orbitcameramode-class)

Extends *[ICameraMode](../Interfaces/ICameraMode.md)*

Manipulates runtime properties of cameras in orbit mode, where camera view follows the player avatar without being fixed behind the player.

## [Signature](#signature)

```ts
export declare class OrbitCameraMode implements ICameraMode 
```

## [Remarks](#remarks)

The [Camera.setCameraModeOrbit()](Camera.md#setcameramodeorbit) method enables orbit mode. For more information on setting camera modes at runtime, see the [Camera](../../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Camera.md) guide.

## [Properties](#properties)

### [distance](#distance)

Camera rotation radius around the target.

**Signature**

```ts
distance: HorizonProperty<number>;
```

### [rotationSpeed](#rotationspeed)

Controls how quickly the camera rotates to the desired rotation. If not set, the camera is always snapped to it instantly.

**Signature**

```ts
rotationSpeed: HorizonProperty<number | null>;
```

### [translationSpeed](#translationspeed)

Controls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.

**Signature**

```ts
translationSpeed: HorizonProperty<number | null>;
```

### [verticalOffset](#verticaloffset)

Vertical offset up from the target position. Camera rotates around the offsetted point

**Signature**

```ts
verticalOffset: HorizonProperty<number>;
```

