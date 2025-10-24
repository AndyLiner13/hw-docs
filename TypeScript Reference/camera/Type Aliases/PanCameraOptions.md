# PanCameraOptions Type

Available options when applying a pan camera.

## Signature

```typescript
export declare type PanCameraOptions = {
    positionOffset?: Vec3;
    translationSpeed?: number;
};
```

## Remarks

**Type Parameters:**
- `positionOffset` - (number) The distance from the target to the camera. If not set, the camera remains at its current distance. Default = 5.0
- `translationSpeed` - Controls how quickly the camera moves with the target it's attached to. If not set, the camera is always snapped to the position offset from the target.