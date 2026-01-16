Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxsetparametersandplayoptions

# ParticleFXSetParametersAndPlayOptions type

ParticleFXPlayOptions controls how the particle is played. Extends [ParticleFXPlayOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxplayoptions) and [ParticleFXSetParametersOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxsetparametersoptions).

## Signature

```
export declare type ParticleFXSetParametersAndPlayOptions = ParticleFXPlayOptions & ParticleFXSetParametersOptions & {
    localOnly?: boolean;
    position?: Vec3;
    rotation?: Quaternion;
};
```

## References

[ParticleFXPlayOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxplayoptions), [ParticleFXSetParametersOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxsetparametersoptions), [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3), [Quaternion](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_quaternion)