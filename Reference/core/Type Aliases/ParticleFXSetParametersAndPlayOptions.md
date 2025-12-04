Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxsetparametersandplayoptions

# ParticleFXSetParametersAndPlayOptions type

ParticleFXPlayOptions controls how the particle is played. Extends [ParticleFXPlayOptions](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/ParticleFXPlayOptions.md) and [ParticleFXSetParametersOptions](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/ParticleFXSetParametersOptions.md).

## Signature

```
export declare type ParticleFXSetParametersAndPlayOptions = ParticleFXPlayOptions & ParticleFXSetParametersOptions & {
    localOnly?: boolean;
    position?: Vec3;
    rotation?: Quaternion;
};
```

## References

[ParticleFXPlayOptions](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/ParticleFXPlayOptions.md), [ParticleFXSetParametersOptions](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/ParticleFXSetParametersOptions.md), [Vec3](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Vec3.md), [Quaternion](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Quaternion.md)