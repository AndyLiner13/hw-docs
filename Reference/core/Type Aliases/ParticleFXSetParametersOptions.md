Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxsetparametersoptions

API reference

# ParticleFXSetParametersOptions type

ParticleFXSetParametersOptions is a composite object for setting multiple parameters at once.

## Signature

```
export declare type ParticleFXSetParametersOptions = {
    players?: Array<Player>;
    parameters: Array<ParticleFXParameter<VFXParameterType>>;
};
```

## References

[Player](/hw-docs/Reference/core/Classes/Player.md), [ParticleFXParameter](/hw-docs/Reference/core/Type%20Aliases/ParticleFXParameter.md), [VFXParameterType](/hw-docs/Reference/core/Type%20Aliases/VFXParameterType.md)