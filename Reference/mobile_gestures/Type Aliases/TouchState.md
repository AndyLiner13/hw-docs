Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_touchstate

# TouchState type

State of a touch

## Signature

```
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

[TouchPhase](/hw-mcp-tools/documentation/hw-docs/Reference/mobile_gestures/Type%20Aliases/TouchPhase.md), [TouchInfo](/hw-mcp-tools/documentation/hw-docs/Reference/mobile_gestures/Type%20Aliases/TouchInfo.md)