---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_camera
---

# [Camera Class](#camera-class)

Manages the view, position, and features of the in-game camera.

## [Signature](#signature)

```ts
export declare class Camera 
```

## [Properties](#properties)

### [cameraRoll](#cameraroll)

The camera roll angle.

**Signature**

```ts
cameraRoll: HorizonProperty<number>;
```

**Remarks**

You can change this value over time using .

### [collisionEnabled](#collisionenabled)

Indicates whether camera collision is enabled.

**Signature**

```ts
collisionEnabled: HorizonProperty<boolean>;
```

### [currentMode](#currentmode)

The type of camera that is active.

**Signature**

```ts
currentMode: ReadableHorizonProperty<CameraMode>;
```

**Remarks**

For native cameras, this property indicates whether the camera is in first or third person mode.

### [forward](#forward)

Gets the forward direction of the camera.

**Signature**

```ts
forward: ReadableHorizonProperty<Vec3>;
```

**Examples**

```ts
if (LocalCamera !== null) {
  LocalCamera.forward.get()
}
```

### [isForceLookAtcamera](#isforcelookatcamera)

Checks whether the current active camera is force-looking at something.

**Signature**

```ts
isForceLookAtcamera: ReadableHorizonProperty<boolean>;
```

### [lookAtPosition](#lookatposition)

Gets the world space position that first intersects the center of the camera view, ignoring the avatar of the local player.

**Signature**

```ts
lookAtPosition: ReadableHorizonProperty<Vec3>;
```

**Examples**

```ts
if (LocalCamera !== null) {
  var lookAtPosition = LocalCamera.lookAtPosition.get();
}
```

### [perspectiveSwitchingEnabled](#perspectiveswitchingenabled)

Indicates whether the player is allowed to toggle between first and third person modes.

**Signature**

```ts
perspectiveSwitchingEnabled: HorizonProperty<boolean>;
```

**Examples**

```ts
if (LocalCamera !== null) {
  LocalCamera.position.get()
}
```

**Remarks**

This property does not affect a script's ability to forcibly enable 1st or 3rd person mode with or . This property has as no effect in VR, where first person is always enabled.

### [position](#position)

Gets the position of the camera.

**Signature**

```ts
position: ReadableHorizonProperty<Vec3>;
```

**Examples**

```ts
if (LocalCamera !== null) {
  LocalCamera.position.get()
}
```

### [rotation](#rotation)

Gets the rotation of the camera.

**Signature**

```ts
rotation: ReadableHorizonProperty<Quaternion>;
```

**Examples**

```ts
if (LocalCamera !== null) {
  LocalCamera.rotation.get()
}
```

### [up](#up)

Gets the up direction of the camera.

**Signature**

```ts
up: ReadableHorizonProperty<Vec3>;
```

**Examples**

```ts
if (LocalCamera !== null) {
  LocalCamera.up.get()
}
```

## [Methods](#methods)

### [convertWorldToScreenPoint(worldPos)](#convertworldtoscreenpointworldpos)

Converts a world position to a screen position on mobile and desktop.X: 0.0, Y: 0.0 represents the top left of the screen.X: 0.5, Y: 0.5 represents the center of the screen.X: 1.0, Y: 1.0 represents the bottom right of the screen.Z represents the distance to the object, negative will be behind the camera.

**Signature**

```ts
convertWorldToScreenPoint(worldPos: Vec3): Vec3;
```

**Parameters**

worldPos: Vec3

The world position to convert.

**Returns**

Vec3

A Vec3 representing the screen position.

### [forceLookAt(target, options)](#forcelookattarget-options)

Forces the camera to look at a target or position.Supported camera modes:- AttachCamera- OrbitCamera- FollowCamera

**Signature**

```ts
forceLookAt(target: Player | Entity | Vec3, options?: ForceLookAtOptions): void;
```

**Parameters**

target: Player | Entity | Vec3

The target to look at.

options: [ForceLookAtOptions](../Type%20Aliases/ForceLookAtOptions.md)

*(Optional)* Options for the transition to and from the forced look.

**Returns**

void

### [getCameraModeObjectAs(classType)](#getcameramodeobjectasclasstype)

Gets the current camera mode object as a specific type.

**Signature**

```ts
getCameraModeObjectAs<TRuntimeCameraMode extends ICameraMode>(classType: new () => TRuntimeCameraMode): TRuntimeCameraMode | null;
```

**Parameters**

classType: new () => TRuntimeCameraMode

The type of camera mode object to get. Must extend ICameraMode.

**Returns**

TRuntimeCameraMode | null

The camera mode object as the specified type, or null if the camera mode object is not of the specified type.

**Examples**

Get the current camera mode object as OrbitCameraMode:

```ts
LocalCamera.getCameraModeObjectAs(OrbitCameraMode);
```

### [overrideCameraFarClipPlane(farClipPlane, options)](#overridecamerafarclipplanefarclipplane-options)

Set the far clip plane of the camera.

**Signature**

```ts
overrideCameraFarClipPlane(farClipPlane: number, options?: CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

farClipPlane: number

The new far clip plane value to transition towards.

options: [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* Optional [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md) that define how the previous far clip plane should transition to the new one. If not set, the transition is instant.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Adjust the camera far clip plane to 50 over a period of 1 second.

```ts
localCamera.overrideCameraFarClipPlane(50.0, {duration: 1.0);
```

**Remarks**

Prevents the native camera from adjusting the far clip plane automatically, until [Camera.resetCameraFarClipPlane()](Camera.md#resetcamerafarclipplane) is called.

### [overrideCameraFOV(fov, options)](#overridecamerafovfov-options)

Set the field of view of the camera.

**Signature**

```ts
overrideCameraFOV(fov: number, options?: CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

fov: number

The new field of view value to transition towards.

options: [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* Optional [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md) that define how the previous field of view should transition to the new one. If not set, the transition is instant.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Adjust the camera field of view to 50 over a period of 1 second.

```ts
localCamera.overrideCameraFOV(50.0, {duration: 1.0);
```

**Remarks**

Prevents the native camera from adjusting the field of view automatically, until [Camera.resetCameraFOV()](Camera.md#resetcamerafov) is called. For example, the third person camera zooms in a little while you sprint.

### [resetCameraFarClipPlane(options)](#resetcamerafarclipplaneoptions)

Clears any far clip plane override, resetting it to the default native camera value.

**Signature**

```ts
resetCameraFarClipPlane(options?: CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

options: [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* Optional [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md) that define how the far clip plane should transition to the default far clip plane. If not set, the transition is instant.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Reset the far clip plane over a period of 1 second.

```ts
localCamera.resetCameraFarClipPlane({duration: 1.0);
```

### [resetCameraFOV(options)](#resetcamerafovoptions)

Clears any field of view override, resetting it to the default native camera value.

**Signature**

```ts
resetCameraFOV(options?: CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

options: [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* Optional [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md) that define how the previous field of view should transition to the new field of view. If not set, the transition is instant.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Reset the field of view over a period of 1 second.

```ts
localCamera.resetCameraFOV({duration: 1.0);
```

**Remarks**

Prevents the native camera from adjusting the field of view automatically until [Camera.resetCameraFOV()](Camera.md#resetcamerafov) is called. For example, the third person camera zooms in a little while the player sprints.

### [setCameraModeAttach(target, options)](#setcameramodeattachtarget-options)

Enables attach mode for a camera, which automatically follows a target entity's position and rotation.

**Signature**

```ts
setCameraModeAttach(target: CameraTarget, options?: AttachCameraOptions & CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

target: [CameraTarget](../Type%20Aliases/CameraTarget.md)

The entity for the tracking camera to follow.

options: [AttachCameraOptions](../Type%20Aliases/AttachCameraOptions.md) & [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* If not set, the camera instantly matches the target's position and rotation.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Place the camera at a fixed position relative to the player, over a period of 1 second.

```ts
localCamera.setCameraModeAttach(player, {positionOffset = position, duration: 1.0});
```

**Remarks**

If the target entity is destroyed, camera tracking stops with the camera remaining where it was before losing the target. This method has no effect in VR, where only first person cameras are permitted.

### [setCameraModeFirstPerson(options)](#setcameramodefirstpersonoptions)

Enables the standard first-person game camera, which uses a camera view from the eyes of the player avatar.

**Signature**

```ts
setCameraModeFirstPerson(options?: CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

options: [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* Optional [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md) that define how the previous camera should transition to this new camera. If not set, the transition is instant.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Enable the first person camera after a delay of 1 second.

```ts
localCamera.setCameraModeFirstPerson({delay: 1.0});
```

**Remarks**

Disables any previously set camera. Ignores the current value of [Camera.perspectiveSwitchingEnabled](Camera.md#perspectiveswitchingenabled). Has no effect in VR, where first person is always enabled.

### [setCameraModeFixed(options)](#setcameramodefixedoptions)

Sets the current camera to a fixed world position and rotation.

**Signature**

```ts
setCameraModeFixed(options?: FixedCameraOptions & CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

options: [FixedCameraOptions](../Type%20Aliases/FixedCameraOptions.md) & [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* If not set, the camera remains fixed in place from it's current position and orientation.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Example 1

Move the camera to a new position over a period of 1 second, maintaining its current orientation.

```ts
localCamera.setFixedCameraPosition({position: pos}, {duration: 1.0});
```

Example 2

Keep the camera where it currently is, but point it straight downwards instantly.

```ts
localCamera.setFixedCameraPosition({lookAt: getCameraPos() + new Vec3(0,-1,0)});
```

### [setCameraModeFollow(options)](#setcameramodefollowoptions)

Enables the follow camera, which follows and auto-turns to be behind the local player avatar.

**Signature**

```ts
setCameraModeFollow(options?: FollowCameraOptions & CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

options: [FollowCameraOptions](../Type%20Aliases/FollowCameraOptions.md) & [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* Optional [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md) that define how the previous camera should transition to this new camera. If not set, the transition is instant.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Enable the follow camera after a delay of 1 second.

```ts
localCamera.setCameraModeFollow({delay: 1.0});
```

**Remarks**

Disables any previously set camera. Ignores the current value of . and has no effect in VR where only first person is allowed.

### [setCameraModeOrbit(options)](#setcameramodeorbitoptions)

Enables the orbit camera, which follows the local player avatar.

**Signature**

```ts
setCameraModeOrbit(options?: OrbitCameraOptions & CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

options: [OrbitCameraOptions](../Type%20Aliases/OrbitCameraOptions.md) & [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* Optional [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md) that define how the previous camera should transition to this new camera. If not set, the transition is instant.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Enable the orbit camera after a delay of 1 second.

```ts
localCamera.setCameraModeOrbit({delay: 1.0});
```

**Remarks**

Disables any previously set camera. Ignores the current value of . and has no effect in VR where only first person is allowed.

### [setCameraModePan(options)](#setcameramodepanoptions)

Enables the pan camera, which follows the local player avatar at a fixed vector offset.

**Signature**

```ts
setCameraModePan(options?: PanCameraOptions & CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

options: [PanCameraOptions](../Type%20Aliases/PanCameraOptions.md) & [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* Optional [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md) that define how the previous camera should transition to this new camera. If not set, the transition is instant.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Enable the pan camera after a delay of 1 second.

```ts
localCamera.setCameraModePan({delay: 1.0});
```

**Remarks**

Disables any previously set camera. Ignores the current value of . and has no effect in VR where only first person is allowed.

### [setCameraModeThirdPerson(options)](#setcameramodethirdpersonoptions)

Enables the standard third-person game camera, which follows the local player avatar.

**Signature**

```ts
setCameraModeThirdPerson(options?: CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

options: [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* Optional [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md) that define how the previous camera should transition to this new camera. If not set, the transition is instant.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Enable the third person over a period of 1 second.

```ts
localCamera.setCameraModeThirdPerson({duration: 1.0});
```

**Remarks**

Disables any previously set camera, ignores the current value of [Camera.perspectiveSwitchingEnabled](Camera.md#perspectiveswitchingenabled), and has no effect in VR where only first person is allowed.

### [setCameraRollWithOptions(rollAngle, options)](#setcamerarollwithoptionsrollangle-options)

Adjusts the current camera roll over time.

**Signature**

```ts
setCameraRollWithOptions(rollAngle: number, options?: CameraTransitionOptions): Promise<CameraTransitionEndReason>;
```

**Parameters**

rollAngle: number

The roll rotation, in degrees, to set on the the current camera.

options: [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md)

*(Optional)* Optional [CameraTransitionOptions](../Type%20Aliases/CameraTransitionOptions.md) that define how the previous roll should transition to the new roll. If not set, the transition is instant.

**Returns**

Promise<[CameraTransitionEndReason](../Enumerations/CameraTransitionEndReason.md)>

**Examples**

Roll the camera by 10 degrees left over 1 second.

```ts
localCamera.setCameraRoll(-10, {duration: 1.0});
```

### [stopForceLookAt(options)](#stopforcelookatoptions)

Stop a force look at if any are active. If `options` is not provided, an instant transition will be used.

**Signature**

```ts
stopForceLookAt(options?: StopLookAtOptions): void;
```

**Parameters**

options: [StopLookAtOptions](../Type%20Aliases/StopLookAtOptions.md)

*(Optional)* Options for the transition from the forced look.

**Returns**

void

