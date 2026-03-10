---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_particlegizmo
---

# [ParticleGizmo Class](#particlegizmo-class)

Extends *[Entity](Entity.md)*

Represents a particle effect in the world.

## [Signature](#signature)

```
export
 declare 
class
 
ParticleGizmo
 
extends
 
Entity
 
```

## [Methods](#methods)

|                                              |                                                                                                                   |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **convertToVFXParameterType(parameterType)** | Converts a C#-compatible particle FX parameter type to a TypeScript-compatible VFX parameter type.Signature\`\`\` |
| convertToVFXParameterType                    |                                                                                                                   |
| (                                            |                                                                                                                   |
| parameterType                                |                                                                                                                   |
| :                                            |                                                                                                                   |

string
):

VFXParameterTypeEnum
;

````ParametersparameterType: stringThe Particle FX parameter type to convert.ReturnsVFXParameterTypeEnum- An equivalent VFX parameter type enum for the given Particle FX parameter type.ExceptionsThrown if the given parameter type is unrecognized.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **getVFXParameters()**                         | Gets all custom PopcornFX parameters for the particle effect.Signature```
getVFXParameters
():
 
Promise
<
VFXParameter
<
VFXParameterType
>[]>;
```ReturnsPromise<[VFXParameter](../Type%20Aliases/VFXParameter.md)<[VFXParameterType](../Type%20Aliases/VFXParameterType.md)>\[]>An array of [VFXParameter](../Type%20Aliases/VFXParameter.md) associated with the particle effect.ExamplesPrints some parameter attributes to the console.```
const
 printParameters 
=
 
async
 
()
 
=>
 
{

  
const
 parameters 
=
 
this
.
entity
.
as
(
ParticleGizmo
).
getVFXParameters
();

  parameters
.
forEach
(
vfxParam
:
 
VFXParameter
 
=>
 
{

    console
.
log
(
vfxParam
.
name 
+
 
", "
 
+
 vfxParam
.
type
);

  
});


}



// Example output:


// Opacity, number


// Trail Active, boolean
```                                                                                                                                                                                                                                                                                                                                                        |
| **parseValue(value, type)**                    | Parses the minimum and maximum VFX values according to type.Signature```
parseValue
(
value
:
 
string
,
 type
:
 
VFXParameterTypeEnum
):
 number 
|
 
boolean
 
|
 number
[]
 
|
 
boolean
[]
 
|
 
null
;
```Parametersvalue: stringA string containing a comma separated list of the numbers or bools to parse.type: VFXParameterTypeEnumThe type of the parameter.Returnsnumber \| boolean \| number\[] \| boolean\[] \| null- The parsed values. If the values are invalid, returns null.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **play(options)**                              | Plays the particle effect.Signature```
play
(
options
?:
 
ParticleFXPlayOptions
):
 
void
;
```Parametersoptions: [ParticleFXPlayOptions](../Type%20Aliases/ParticleFXPlayOptions.md)*(Optional)* Controls how the effect is played.Returnsvoid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **setVFXParameterValue(name, value, options)** | Sets a custom PopcornFX parameter at runtime.Signature```
setVFXParameterValue
<
T 
extends
 
VFXParameterType
>(
name
:
 
string
,
 value
:
 T
,
 options
?:
 
ParticleFXSetParameterOptions
):
 
Promise
<undefined>
;
```Parametersname: stringvalue: Toptions: [ParticleFXSetParameterOptions](../Type%20Aliases/ParticleFXSetParameterOptions.md)*(Optional)* Allows customization of the set parameter action.ReturnsPromise\<undefined>ExamplesSets a boolean custom parameter.```
this
.
entity
.
as
(
ParticleGizmo
).
setVFXParameterValue
(
"Trail Active"
,
 
false
);
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **setVFXParameterValues(options)**             | Batch call to configure PopcornFX parameters.Signature```
setVFXParameterValues
(
options
:
 
ParticleFXSetParametersOptions
):
 
Promise
<undefined>
;
```Parametersoptions: [ParticleFXSetParametersOptions](../Type%20Aliases/ParticleFXSetParametersOptions.md)See [ParticleFXSetParametersOptions](../Type%20Aliases/ParticleFXSetParametersOptions.md)ReturnsPromise\<undefined>ExamplesNote that the parameters must be valid parameter values for the particle effect.```
         particleGizmo
.
setVFXParameterValues
({

           players
:
 
[
player1
,
 player2
],

           parameters
:
 
[

             
{
name
:
 
'distance'
,
 value
:
 
5
},

             
{
name
:
 
'end_radius'
,
 value
:
 
10
,

             
{
name
:
 
'color'
,
 value
:
 
[
255
,
 
255
,
 
255
,
 
0
]}

           
]

         
})
```                                                                                                                                                                                                                                                                                                                         |
| **setVFXParameterValuesAndPlay(options)**      | Set the transform of the PopcornFX, configure parameters and play.Signature```
setVFXParameterValuesAndPlay
(
options
:
 
ParticleFXSetParametersAndPlayOptions
):
 
Promise
<undefined>
;
```Parametersoptions: [ParticleFXSetParametersAndPlayOptions](../Type%20Aliases/ParticleFXSetParametersAndPlayOptions.md)See [ParticleFXSetParametersAndPlayOptions](../Type%20Aliases/ParticleFXSetParametersAndPlayOptions.md)ReturnsPromise\<undefined>ExamplesNote that the parameters must be valid parameter values for the particle effect.```
         particleGizmo
.
setVFXParameterValuesAndPlay
({

           fromStart
:
 
true
,

           oneShot
:
 
false
,

           localOnly
:
 
true
,

           players
:
 
[
player1
,
 player2
],

           position
:
 
new
 hz
.
Vec3
(
5
,
 
10
,
 
-
5
),

           rotation
:
 
Quaternion
.
fromEuler
(
new
 
Vec3
(
0
,
 
90
,
 
0
)),

           parameters
:
 
[

             
{
name
:
 
'distance'
,
 value
:
 
5
},

             
{
name
:
 
'end_radius'
,
 value
:
 
10
,

             
{
name
:
 
'color'
,
 value
:
 
[
255
,
 
255
,
 
255
,
 
0
]}

           
]

         
})
``` |
| **stop(options)**                              | Stops the particle effect.Signature```
stop
(
options
?:
 
ParticleFXStopOptions
):
 
void
;
```Parametersoptions: [ParticleFXStopOptions](../Type%20Aliases/ParticleFXStopOptions.md)*(Optional)* The options that control how the effect is stopped.Returnsvoid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **toString()**                                 | Creates a human-readable representation of the entity.Signature```
toString
():
 
string
;
```ReturnsstringA string representation of the entity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
````

