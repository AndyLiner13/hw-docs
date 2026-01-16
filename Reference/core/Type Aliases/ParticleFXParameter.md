Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxparameter

# ParticleFXParameter type

ParticleFXParameter joins name and value for batch setter call

## Signature

```
export declare type ParticleFXParameter<T extends VFXParameterType> = {
    name: string;
    value: T;
};
```

## References

[VFXParameterType](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vfxparametertype)