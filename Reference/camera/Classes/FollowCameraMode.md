---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_followcameramode
---

# [FollowCameraMode Class](#followcameramode-class)

Extends *[ICameraMode](../Interfaces/ICameraMode.md)*

Manipulates runtime properties of cameras in Follow mode.

## [Signature](#signature)

```ts
export declare class FollowCameraMode implements ICameraMode 
```

## [Properties](#properties)

### [activationDelay](#activationdelay)

Camera auto-turning activation delay after camera has been manually turned.

**Signature**

```ts
activationDelay: HorizonProperty<number>;
```

### [cameraTurnSpeed](#cameraturnspeed)

Warning: This API is now obsolete.use horizontalRotationRate and verticalRotationRate insteadSpeed at which the camera turns to return behind the player avatar.

**Signature**

```ts
cameraTurnSpeed: HorizonProperty<number>;
```

### [continuousRotation](#continuousrotation)

Enables continuous rotation of the camera to return behind the player avatar once rotation had started and isn't interrupted.

**Signature**

```ts
continuousRotation: HorizonProperty<boolean>;
```

### [distance](#distance)

Camera rotation radius around the target.

**Signature**

```ts
distance: HorizonProperty<number>;
```

### [horizonLevelling](#horizonlevelling)

Enables levelling the camera to the horizon.

**Signature**

```ts
horizonLevelling: HorizonProperty<boolean>;
```

### [horizontalRotationRate](#horizontalrotationrate)

Controls how quickly the camera rotates horizontally to return behind the player avatar.

**Signature**

```ts
horizontalRotationRate: HorizonProperty<number | null>;
```

### [horizontalRotationRateMaxTime](#horizontalrotationratemaxtime)

How much time it takes to reach maximum horizontal rotation speed

**Signature**

```ts
horizontalRotationRateMaxTime: HorizonProperty<number | null>;
```

### [horizontalTranslationInertiaRate](#horizontaltranslationinertiarate)

How quickly the camera follows the target along XZ plane See FollowCameraOptions.horizontalTranslationInertiaRate for full explanation

**Signature**

```ts
horizontalTranslationInertiaRate: HorizonProperty<number | null>;
```

### [rotationSpeed](#rotationspeed)

Warning: This API is now obsolete.use horizontalRotationRate and verticalRotationRate insteadControls how quickly the camera rotates to the desired rotation. If not set, the camera is always snapped to it instantly.

**Signature**

```ts
rotationSpeed: HorizonProperty<number | null>;
```

### [targetPitch](#targetpitch)

Target pitch angle adjustment for the follow camera

**Signature**

```ts
targetPitch: HorizonProperty<number>;
```

### [translationSpeed](#translationspeed)

Warning: This API is now obsolete.use verticalTranslationInertiaRate and horizontalTranslationInertiaRate insteadControls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.

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

### [verticalRotationRate](#verticalrotationrate)

Controls how quickly the camera rotates vertically to the desired target pitch

**Signature**

```ts
verticalRotationRate: HorizonProperty<number | null>;
```

### [verticalRotationRateMaxTime](#verticalrotationratemaxtime)

How much time it takes to reach maximum vertical rotation speed

**Signature**

```ts
verticalRotationRateMaxTime: HorizonProperty<number | null>;
```

### [verticalTranslationInertiaRate](#verticaltranslationinertiarate)

How quickly the camera follows the target along Y axis plane See FollowCameraOptions.verticalTranslationInertiaRate for full explanation

**Signature**

```ts
verticalTranslationInertiaRate: HorizonProperty<number | null>;
```

