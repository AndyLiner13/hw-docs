Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/spring-physics

# Spring Physics

The spring physics API enables you to push entities toward a specifed position and spin them toward a specified rotation. These push and spin movements are based on the simulated physics of springs.

<details>
<summary>Image of push and spin physics applied to two entities</summary>

<p></p>

[Image of push and spin physics applied to two entities](../../image_data/d751b2ab5b9bd2fa55bded14156ddb144e8a60a1d5823535343c615ead1b8133.md)

### Overview
The image depicts a 3D environment with a grid floor and a floating white cube in the center. There are two purple blocks labeled "Spring push" and "Spring spin" at the bottom corners, along with a small humanoid figure in the foreground. The scene appears to be part of a simulation or physics experiment setup.

### Key Elements
- **Grid Floor**: A light gray grid covering the entire floor, serving as the base for the 3D environment.
- **White Cube**: A white, translucent cube floating above the grid near the center of the image.
- **Purple Blocks**: Two purple blocks with white text indicating "Spring push" and "Spring spin." Each block has a small icon resembling a code snippet.
- **Humanoid Figure**: A small blue humanoid figure positioned centrally, holding a blue circular object.
- **Background**: A light blue sky visible at the top of the image.

### Visual Flow / Relationships
- **Most Prominent Element**: The white cube in the center.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: The blocks and the humanoid figure are arranged symmetrically around the central white cube.

</details>

<p></p>



## Prerequisites

To apply spring physics to an entity through your TypeScript code, you must set the following properties in in your entity’s Properties panel:

| **Property** | **Setting** |
| --- | --- |
| **Motion** | Set to `Interactive`. |
| **Interaction** | Set to `Physics or Both`. |
| **Gravity** | Enable it. |

To ensure continuous motion toward the specified target, the spring physics methods must be called within the `World.onUpdate` loop. For more information about this event, see [World Update Events](../Events/World%20Update%20Events.md).

## Pushing an entity toward a position

The `springPushTowardPosition()` method pushes an entity toward a specific position, with additional options to control the spring’s behavior. For details, see the [PhysicalEntity.springPushTowardPosition method](../../Reference/core/Classes/PhysicalEntity.md#springpushtowardposition) in the API reference documentation.

**Note**: In desktop editor, you can select the entity and specify the physics properties applied to it through the **Properties** panel for the script.

This example demonstrates how to push an entity toward a physical position in the world.

```
import * as hz from 'horizon/core';

class SpringTest extends hz.Component<typeof SpringTest> {

static propsDefinition = {
  translateObj: {type: hz.PropTypes.Entity},
  translatePos: {type: hz.PropTypes.Vec3, default: new hz.Vec3 (1,0,20)},
  translateStiffness: {type: hz.PropTypes.Number, default: 2},
  translateDamping: {type: hz.PropTypes.Number, default: 0.9},
};

start() {
  var varTranslateObj = this.props.translateObj!.as(hz.PhysicalEntity);
  if (varTranslateObj) {
    var varTranslatePos = this.props.translatePos
    var varTranslateStiffness = this.props.translateStiffness
    var varTranslateDamping = this.props.translateDamping
    var varTranslateOptions = {stiffness: varTranslateStiffness, damping: varTranslateDamping}
  }

  this.connectLocalBroadcastEvent(hz.World.onUpdate, (data: {deltaTime: number}) => {
      if (this.props.translateObj) {
        varTranslateObj.springPushTowardPosition(varTranslatePos, varTranslateOptions)
      };
    });
  };
};

hz.Component.register(SpringTest);
```

## Spinning an object toward a rotation

The `PhysicalEntity.springSpinTowardRotation` method spins an Entity toward a specific rotation, with additional options to control the spring’s behavior. For details, see the [PhysicalEntity.springSpinTowardRotation method](../../Reference/core/Classes/PhysicalEntity.md#springspintowardrotation) in the API reference documentation.

**Note**: In desktop editor, you can select the entity and specify the physics properties applied to it through the **Properties** panel for the script.

This example applies a rotational spin to an entity.

```
import * as hz from 'horizon/core';

class SpinTest extends hz.Component<typeof SpinTest> {

static propsDefinition = {
  rotateObj: {type: hz.PropTypes.Entity},
  rotatePos: {type: hz.PropTypes.Vec3, default: new hz.Vec3 (90,90,90)},
  rotateStiffness: {type: hz.PropTypes.Number, default: 10},
  rotateDamping: {type: hz.PropTypes.Number, default: 0.9},
  rotateAxisIndependent: {type:hz.PropTypes.Boolean, default: true}
};

start() {
  var varRotateObj = this.props.rotateObj!.as(hz.PhysicalEntity);
  if (varRotateObj) {
    var varRotatePos = this.props.rotatePos!
      var varRotateStiffness = this.props.rotateStiffness
      var varRotateDamping = this.props.rotateDamping
      var varRotateAxisIndependent = this.props.rotateAxisIndependent
      var varRotateOptions = {stiffness: varRotateStiffness, damping: varRotateDamping, axisIndependent: varRotateAxisIndependent}
  };

this.connectLocalBroadcastEvent(hz.World.onUpdate, (data: {deltaTime: number}) => {
      if (varRotateObj) {
        varRotateObj.springSpinTowardRotation(hz.Quaternion.fromVec3(varRotatePos), varRotateOptions)
      };
    });
  };
};
hz.Component.register(SpinTest);
```