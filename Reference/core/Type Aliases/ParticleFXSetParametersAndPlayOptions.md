---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlefxsetparametersandplayoptions
---

# [ParticleFXSetParametersAndPlayOptions type](#particlefxsetparametersandplayoptions-type)

ParticleFXPlayOptions controls how the particle is played. Extends [ParticleFXPlayOptions](ParticleFXPlayOptions.md) and [ParticleFXSetParametersOptions](ParticleFXSetParametersOptions.md).

## [Signature](#signature)

```
export
 declare type 
ParticleFXSetParametersAndPlayOptions
 
=
 
ParticleFXPlayOptions
 
&
 
ParticleFXSetParametersOptions
 
&
 
{

    localOnly
?:
 
boolean
;

    position
?:
 
Vec3
;

    rotation
?:
 
Quaternion
;


};
```

## [References](#references)

[ParticleFXPlayOptions](ParticleFXPlayOptions.md), [ParticleFXSetParametersOptions](ParticleFXSetParametersOptions.md), [Vec3](../Classes/Vec3.md), [Quaternion](../Classes/Quaternion.md)

