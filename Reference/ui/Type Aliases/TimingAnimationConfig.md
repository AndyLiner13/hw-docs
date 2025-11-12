Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_timinganimationconfig

API reference

# TimingAnimationConfig type

Defines how to [animate](/hw-docs/Reference/ui/Abstract%20Classes/Animation_2.md) a value along an easing curve.

## Signature

```
export declare type TimingAnimationConfig = {
    duration?: number;
    easing?: Easing;
};
```

## References

[Easing](/hw-docs/Reference/ui/Classes/Easing.md)

## Remarks

Type Parameters:
duration - The duration of the animation.
easing - The function that defines the easing curve.