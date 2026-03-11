---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vfxparameter
---

# [VFXParameter type](#vfxparameter-type)

Represents a parameter for a PopcornFX particle effect.

## [Signature](#signature)

```ts
export declare type VFXParameter<T extends VFXParameterType> = {
    name: string;
    type: string;
    minValue: T | null;
    maxValue: T | null;
};
```

## [References](#references)

[VFXParameterType](VFXParameterType.md)

