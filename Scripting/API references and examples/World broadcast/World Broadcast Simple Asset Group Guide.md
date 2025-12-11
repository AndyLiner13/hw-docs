Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/world-broadcast/asset-group-guide

# World Broadcast Simple Asset Group Guide

The `Simple World Broadcast` asset group provides an easy, “plug-and-play” set of entities for creators who want to quickly begin working with the World Broadcast system. It includes the minimum required tech to use all features and can be extended with custom logic.

![Simple World Broadcast](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/576914763_858604166677536_3578087410803227640_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=k_32zqE_5KIQ7kNvwFm-Jaq&_nc_oc=Adno2uuEzsZu_PIIMi987AQh6tKweAp9uFOOaccmFS4ediKp6RH5-qlS5gAO0B-phLOnsNSWPPeE02FjTClHvCo8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Uv7cBG3BqJV5rqR4AugJoQ&oh=00_AfnjG-JWvpr7s9yNd5UOn-DUPMsoPiY08uxwNEEMeql1pw&oe=695583DE)

## System Setup

### Step 1: Add the “Simple World Broadcast” Asset Group

The Simple World Broadcast Asset Group contains two root objects:

- `World Broadcast Brain`
- `Camera Handle`

The `World Broadcast Brain` component handles cycling through all camera handles in the world. An API is available to force the brain to focus on a particular camera handle.

```
  public ForceCameraFocusOnTarget(target: CameraTransform): void {
    if (target == null) {
      console.error('[*] WorldBroadcastBrain: Cannot force focus on null target');
      return;
    }

    if (this.props.debugMode)
      console.log(`[WorldBroadcastBrain] Forcing focus on ${JSON.stringify(target)} `);

    this.forcedFocusTarget = target;
    this.currentState = CameraDirectorState.ForcedFocus;
    this.UpdateCamera(target);
  }

  public EndForcedFocus(): void {
    if (this.props.debugMode)
      console.log('[WorldBroadcastBrain] Ending forced focus');

    this.currentState = CameraDirectorState.CyclingThroughDefaultCameraPositions;
    this.forcedFocusTarget = null;
  }
```

### Step 2: Add More Camera Handles

The World Broadcast Brain picks up all `Camera Handle` components at `start`. To add more handles, duplicate the handle bundled with the Asset Group.

![Simple World Broadcast](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/574497167_856098613594758_7925879309636927751_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=9HMlcHvme5AQ7kNvwGVdvXy&_nc_oc=AdnFdCCZ81xTAVZTgTrAmVn31Tr3iG3yeh055Lj6CTy96hGKAfgQXKbTw-PQnJoLHuDgdbgbJj5GFDwqQB6IPpyr&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Uv7cBG3BqJV5rqR4AugJoQ&oh=00_AfmtKB9c_gOKT_9xcOp5-IM0A1Wqra_FuPmAzFXHkuOBQg&oe=695595FF)

## Extending The System

The forced focus API can be used with custom logic to create gameplay-dependent camera switches. For example, link a trigger component to a camera handle to force the world broadcast brain to look at whatever enters the trigger zone. The `ForceCameraFocusOnTarget()` method can be called multiple times to change the forced focus target *without* ending forced focus first.

## Troubleshooting

### “No default camera found”

This error appears when no “Default Camera” entity exists as a child of the brain. The Asset Group includes this by default when imported, but the object hierarchy may have changed. If the “default camera” is no longer a child of the `World Broadcast Brain`, add an empty entity and copy these values from the inspector (excluding the transform):

![Default Camera](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/576844213_856098640261422_4822725382626636124_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=tkWgp8E9gdUQ7kNvwEEuRsj&_nc_oc=AdlL_OcrCY6q49KSjhcn6V0xuC98LpvVH6pJDYKcj8GXbwSB5rJOYEiwcEBP3mKEYbvKEkZh-InZLA5Uiblf6Tbz&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Uv7cBG3BqJV5rqR4AugJoQ&oh=00_AfntmTa_0mtd5pNCdU2QYLl2KPeYh5EZhcuVFCpkic30yg&oe=6955A0F4)

### “WorldBroadcastBrain: Cannot force focus on null target”, or “WorldBroadcastBrain: Cannot update camera to undefined transform”

This error occurs when the `target` passed into the `ForceCameraFocusOnTarget()` method does not exist. When calling the API, pass a new object of type `CameraTransform`. Create this object at the point of the API call. The type definition is as follows:

```
type CameraTransform = {
  position: hz.Vec3;
  rotation: hz.Quaternion;
};
```