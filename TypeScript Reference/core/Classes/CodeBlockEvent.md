# CodeBlockEvent Class

Represents an event sent locally or over a network within the code block scripting system. These events only supports predefined serializable types and are primarily used to interact with scripting events from a world.

## Signature

```typescript
export declare class CodeBlockEvent<T extends BuiltInVariableType[]>
```

## Examples

### Example 1
This example demonstrates how to create a custom code block event and send it to code blocks.

```typescript
import { Component, CodeBlockEvent, Entity, PropTypes } from 'horizon/core';

class CodeBlockEvent_CB extends Component<typeof CodeBlockEvent_CB> {

  static propsDefinition= {
    target: {type: PropTypes.Entity},
  };

  sendEvent = new CodeBlockEvent<[player_name: String, player_id: Number]>('sendEvent', [PropTypes.String, PropTypes.Number]);
  receiveEvent = new CodeBlockEvent<[score: Number]>('receiveEvent', [PropTypes.Number]);

  start() {
    // Register for CodeBlock events.
    this.connectCodeBlockEvent(
    this.entity,
    this.receiveEvent,
    (score: Number) => {
       console.log(score);
     });

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendCodeBlockEvent(
        this.props.target!,
        this.sendEvent,
        "Player One",
        123
      );
     }, 500);
    }
  }
Component.register(CodeBlockEvent_CB);
```

### Example 2
This example demonstrates how to receive a built-in CodeBlock event using the [Component.connectCodeBlockEvent()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#connectcodeblockevent) function.

```typescript
// Import CodeBlockEvents to access Built-in Events.
import { Component, CodeBlockEvents, Player } from 'horizon/core';

class BuiltInEventExample extends Component {
  start() {
    this.connectCodeBlockEvent(
     this.entity,
     CodeBlockEvents.OnIndexTriggerDown,
     (player: Player) => {
       // Perform an action when the Index Trigger is pressed.
     }
   );
     this.connectCodeBlockEvent (
       this.entity,
       CodeBlockEvents.OnGrabEnd,
       (player: Player) => {
       // Perform another action when the Grab Action ends.
     }
   );
 }
}

Component.register(BuiltInEventExample);
```

## Remarks

A code block event is a legacy event that doesn't perform as well as a [local event](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_localevent) or a [network event](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_networkevent). You should only use the `CodeBlockEvent` class to interact with world scripting events.

You can create, send, and receive custom code block events, or subscribe to built-in code block events defined in the [CodeBlockEvents](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevents) variable.

For information about using code block events, see the [Code Block Events](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/codeblock-events) guide.

## Constructors

### (constructor)(name, expectedTypes)

Creates a CodeBlockEvent object.

**Signature:**
```typescript
constructor(name: string, expectedTypes: ConstrainedPropTypes<T> | []);
```

**Parameters:**
- `name: string` - The name of the event.
- `expectedTypes: ConstrainedPropTypes<T> | []` - The list of possible event types.

**Remarks:**
Each of these types defines the parameters for the event and must be of type PropTypes.

## Properties

### expectedTypes

A list of possible types of the event.

**Signature:**
```typescript
expectedTypes: ConstrainedPropTypes<T> | [];
```

### name

The name of the event.

**Signature:**
```typescript
name: string;
```