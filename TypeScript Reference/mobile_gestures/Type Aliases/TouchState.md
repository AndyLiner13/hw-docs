# TouchState type

State of a touch.

## Signature

```typescript
export declare type TouchState = {
    phase: TouchPhase;
    start: TouchInfo;
    previous: TouchInfo;
    current: TouchInfo;
    screenDelta: Vec3;
    screenTraveled: number;
};
```

## References

[TouchPhase](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchphase), [TouchInfo](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchinfo)