# ParticleGizmo Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) Represents a particle effect in the world.

## Signature

```typescript
export declare class ParticleGizmo extends Entity
```

## Methods

| Method | Description |
| --- | --- |
| convertToVFXParameterType(parameterType) | Converts a C#-compatible particle FX parameter type to a TypeScript-compatible VFX parameter type. Signature convertToVFXParameterType(parameterType: string): VFXParameterTypeEnum; Parameters parameterType: stringThe Particle FX parameter type to convert. Returns VFXParameterTypeEnum- An equivalent VFX parameter type enum for the given Particle FX parameter type. Exceptions Thrown if the given parameter type is unrecognized. |
| getVFXParameters() | Gets all custom PopcornFX parameters for the particle effect. Signature getVFXParameters(): Promise<VFXParameter<VFXParameterType>[]>; Returns Promise< VFXParameter < VFXParameterType >[]>An array of VFXParameter associated with the particle effect. Examples Prints some parameter attributes to the console. const printParameters = async () => { const parameters = this.entity.as(ParticleGizmo).getVFXParameters(); parameters.forEach(vfxParam: VFXParameter => { console.log(vfxParam.name + ", " + vfxParam.type); |
| parseValue(value, type) | Parses the minimum and maximum VFX values according to type. Signature parseValue(value: string, type: VFXParameterTypeEnum): number | boolean | number[] | boolean[] | null; Parameters value: stringA string containing a comma separated list of the numbers or bools to parse. type: VFXParameterTypeEnumThe type of the parameter. Returns number | boolean | number[] | boolean[] | null- The parsed values. If the values are invalid, returns null. |
| play(options) | Plays the particle effect. Signature play(options?: ParticleFXPlayOptions): void; Parameters options: ParticleFXPlayOptions (Optional) Controls how the effect is played. Returns void |
| setVFXParameterValue(name, value, options) | Sets a custom PopcornFX parameter at runtime. Signature setVFXParameterValue<T extends VFXParameterType>(name: string, value: T, options?: ParticleFXSetParameterOptions): Promise<undefined>; Parameters name: string value: T options: ParticleFXSetParameterOptions (Optional) Allows customization of the set parameter action. Returns Promise<undefined> Examples Sets a boolean custom parameter. this.entity.as(ParticleGizmo).setVFXParameterValue("Trail Active", false); |
| stop(options) | Stops the particle effect. Signature stop(options?: ParticleFXStopOptions): void; Parameters options: ParticleFXStopOptions (Optional) The options that control how the effect is stopped. Returns void |
| toString() | Creates a human-readable representation of the entity. Signature toString(): string; Returns stringA string representation of the entity. |

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Freference%2F2.0.0%2Fcore_particlegizmo%2F)