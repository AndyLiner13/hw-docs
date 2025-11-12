Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxsetparametersandplayoptions

API reference

# ParticleFXSetParametersAndPlayOptions type

ParticleFXPlayOptions controls how the particle is played. Extends [ParticleFXPlayOptions](/hw-docs/Reference/core/Type%20Aliases/ParticleFXPlayOptions.md) and [ParticleFXSetParametersOptions](/hw-docs/Reference/core/Type%20Aliases/ParticleFXSetParametersOptions.md).

## Signature

```
export declare type ParticleFXSetParametersAndPlayOptions = ParticleFXPlayOptions & ParticleFXSetParametersOptions & {
    localOnly?: boolean;
    position?: Vec3;
    rotation?: Quaternion;
};
```

## References

[ParticleFXPlayOptions](/hw-docs/Reference/core/Type%20Aliases/ParticleFXPlayOptions.md), [ParticleFXSetParametersOptions](/hw-docs/Reference/core/Type%20Aliases/ParticleFXSetParametersOptions.md), [Vec3](/hw-docs/Reference/core/Classes/Vec3.md), [Quaternion](/hw-docs/Reference/core/Classes/Quaternion.md)