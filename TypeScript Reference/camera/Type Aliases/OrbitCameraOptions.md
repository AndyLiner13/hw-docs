# OrbitCameraOptions Type

Available options when applying an orbit camera.

## Signature

```typescript
export declare type OrbitCameraOptions = {
    distance?: number;
    verticalOffset?: number;
    translationSpeed?: number;
    rotationSpeed?: number;
};
```

## Remarks

**Type Parameters:**
- `distance` - (number) The distance from the target to the camera. If not set, the camera remains at its current distance. Default = 5.0
- `verticalOffset` - Vertical offset up from the target position. Camera rotates around the offsetted point
- `translationSpeed` - Controls how quickly the camera moves to the desired position. If not set, the camera is always snapped to it instantly.
- `rotationSpeed` - Controls how quickly the camera rotates to the desired rotation. If not set, the camera is always snapped to it instantly.