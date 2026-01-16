Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vfxparameter

# VFXParameter type

Represents a parameter for a PopcornFX particle effect.

## Signature

```
export declare type VFXParameter<T extends VFXParameterType> = {
    name: string;
    type: string;
    minValue: T | null;
    maxValue: T | null;
};
```

## References

[VFXParameterType](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vfxparametertype)