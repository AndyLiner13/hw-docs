Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/typescript-components-properties-and-variables

Learn

# TypeScript Components, Properties, and Variables

Components are the primary building blocks for attaching functionality to objects in a world. They are defined in TypeScript and registered in a script. Horizon components consist of many different elements. The key TypeScript elements are:

* [Properties - modify the component](/hw-docs/Scripting/Get%20started%20with%20TypeScript/TypeScript%20Components,%20Properties,%20and%20Variables.md#properties-and-variables)
* [Variables - define the capabilities of a component](/hw-docs/Scripting/Get%20started%20with%20TypeScript/TypeScript%20Components,%20Properties,%20and%20Variables.md#properties-and-variables)
* [Modules - provide the packaging specifications](/hw-docs/Scripting/Get%20started%20with%20TypeScript/Modules%20and%20Global%20Functions.md)
* [Global Functions - outline what properties apply to all entities](/hw-docs/Scripting/Get%20started%20with%20TypeScript/Modules%20and%20Global%20Functions.md)
* [Events - enable objects to interact](/hw-docs/Scripting/Events/Local%20Events.md)

## Example Component

Let’s take a look at an example of a Component. We’ll drill down into some of the code in subsequent sections.

```
import { Component, PropTypes, Entity, Player, CodeBlockEvents, LocalEvent, CodeBlockEvent, Quaternion, Vec3, Color, TextGizmo, } from 'horizon/core';

// define a custom event that a CodeBlocks script is listening to
// this takes a string and a number as arguments
// the event name is 'myCBEvent'
const myCBEvent = new CodeBlockEvent<[str: string, num: number]>('myCBEvent', [PropTypes.String, PropTypes.Number]);

// define TypeScript events -
// these can target a specific listener or
// be broadcasted to all listeners
const myTSEvent = new LocalEvent<{value: number; textGizmo: Entity}>('myTSEvent');
const broadcastEv = new LocalEvent<{value: number}>('broadcastEv');

class MyComponent extends Component<typeof MyComponent> {

  // define the inputs available in the property panel in the UI as well as default values
  static propsDefinition = {
    num: {type: PropTypes.Number, default: 42},
  };

  // define instance state
  grabbedCount: number = 0;

  // called on world start
  start() {
    console.log('MyComponent.num:', 'this.props.num');

    // built in events like GrabStart can be listened to
    this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnGrabStart, (isRightHand: boolean, player: Player) => {
        this.grabbedCount++;
        console.log('OnGrabReceived', player);
        // broadcast events are not targeted to any specific listener and are received by all listeners
        this.sendLocalBroadcastEvent(broadcastEv, {value: this.grabbedCount});
      });

      // listen to a local TypeScript event
      this.connectLocalEvent(this.entity, myTSEvent, (data: {value: number; textGizmo: Entity}) => {
        console.log('received:', data);
      });

      // call user defined methods on your instance
      this.myMethod();
  }

  // define your own methods
  myMethod() {
    this.sendCodeBlockEvent(this.entity, myCBEvent, 'hello from TS', this.props.num + this.grabbedCount);
  }
}

// Notify the UI that your component can be attached to an entity
Component.register(MyComponent);
```

## TypeScript Component Lifecycle

The following outlines the component creation sequence:

- The life cycle begins when the world starts or is reset. All user TypeScripts are compiled and executed at that time.
- Any TypeScript components that are registered via `Component.register` are registered as a TypeScript component definition. This is essentially a factory that we can use to create instances of this component.
- Entities that have a TypeScript component attached to them in the entity property panel will be instantiated. This also applies to property overrides or defaults.
- The `start` method is called on every TypeScript component instance. Any future script logic can be run by callbacks.

To learn more about the lifecycle of TypeScript scripts, see [TypeScript Script Lifecycle](/hw-docs/Scripting/TypeScript%20Script%20Lifecycle.md).

## Registering and Attaching Components to Entities

After you have built a component, you must do the following before you can use it in the world.

* To make a component available in the Entity panel, use the **Component.register()** function.
* This function enables attachment of the registered component to an entity.
* You can register multiple components in a single file.

### Example

```
class MyComponent extends Component {
  start() {
    console.log('starting');
  }
}

// Register component class MyComponent with the name 'MyComp'.
// Name is optional - if not supplied "MyComponent" is used.
Component.register(MyComponent, "MyComp");
```

**NOTE:** The name is optional. In this example, if the name is not supplied, it defaults to **MyComponent**. Having a name gives you the ability to further customize the name that creators see for your entity.

## Properties and Variables

### Properties

A TypeScript component has properties that modify its behavior. Properties can be defined in code or set in the Entity Panel in the Desktop Editor.

```
class MyComponent extends Component<typeof MyComponent> {
// the props definition enables defining defaults and telling the UI what properties are defined
   static propsDefinition  = {
     num: { type: PropTypes.Number, default: 12 },
     str: { type: PropTypes.String, default: '' },
     target: { type: PropTypes.Entity }
   }

   // local variable type owned by the script
   spinCount: number = 0

   start() {
      // properties can be accessed via `this.props`
      this.props.target.color.set(new Color(1, 0, 0);
      console.log(this.props.str);

      if(this.spinCount < 10) {
        this.spinCount = this.spinCount + 1
      }
   }
}
```

### Variables

Properties use variables to specify the types of actions a component can perform. Variable options include:

#### `Number', 'Boolean', 'String`

TypeScript `number`, `boolean`, and `string` types work as expected in TypeScript and also can be passed along correctly in events to CodeBlock scripts.

#### `Vec3`

The `Vec3` class provides functionality and common operations around manipulating a 3D Vector. **Note: TypeScript lacks operator overloading, so \*\*`vec1 + vec2`** is not possible; use **`vec1.add(vec2)`** instead.

#### `Quaternion`

The `Quaternion` class provides functionality and common operations around manipulating a Quaternion. One of its most useful features is that it can convert between Euler angles.

```
const q = Quaternion.fromEuler(new Vec3(90, 45, 180), EulerOrder.XYZ);
```

#### `Color`

The `Color` class encapsulates an RGB color and provides some utilities for working with Color and other color spaces such as HSV.

#### `Entity`

The `Entity` class is a wrapper around any `Object` in Horizon. We use Entity because **Object** is a reserved word in TypeScript. The most common `Entity` is `this.entity`, within a `Component` which refers to the `Entity` to which the script instance is attached. You can get and set properties on entities by using `get` and `set` methods on the property itself.

```
// move an entity to (0, 0, 1
entity.position.set(new Vec3(0, 0, 1));
// get an entities color
const c: Color = entity.color.get();
```

Beyond `this.entity`, your scripts can interact with external entities through the following approaches:

- Entities passed in as properties through an object’s Entity Panel
- Entities sent through a script using Events (see [Events section](/hw-docs/Scripting/Events/Local%20Events.md) )
- Entities spawned into the world (see [Asset Spawning section](/hw-docs/Scripting/Asset%20spawning/Checking%20for%20Asset%20Spawn%20Events.md))

#### `Gizmos`

Entities can also be cast into their more specific type, such as `TextGizmo` and `AudioGizmo`. This then allows them to be used with their more specific properties and methods in addition to the general Entity methods.

```
import {TextGizmo, AudioGizmo} from 'horizon/core';

const textGizmo = entity.as(TextGizmo);
textGizmo.text.set('Hello World');

const audioGizmo = this.props.audio.as(AudioGizmo);
audioGizmo.play();
```

#### `Player`

The `Player` class represents a player in a world. You can introspect the position and rotation of a player and use that data in your scripts.

#### `Arrays`

Homogeneous arrays, which are arrays of the same type, of the previously mentioned ScriptVariables are supported.

```
let color = new Color(0, 0, 0);
let colors: Array<Color> = [];
colors.push(color);
```

#### `Assets`

The `Asset` class can represent an asset in a world. Beyond creating and managing your own or Horizon available assets, you can spawn and despawn assets and operate on their properties with TypeScript. Review the [Asset Spawning](/hw-docs/Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md) docs for TypeScript implementation details.