# PinchEventData type

Payload received by pinch events.

## Signature

```typescript
export declare type PinchEventData = TouchEventData & {
    scale: number;
    rotate: number;
};
```

## References

[TouchEventData](https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_toucheventdata)