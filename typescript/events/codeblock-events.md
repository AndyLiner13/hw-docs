Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/codeblock-events

# CodeBlock Events

CodeBlock events enable your TypeScript code to send and receive events from CodeBlock or TypeScript scripts. These events communicate asynchronously with all players in the world by default. This ensures the server manages world behavior consistently for all users.

CodeBlock events restrict you to calling CodeBlock-specific functions, such as communicating between components with objects owned by different players or listening for events sent to specific players. This means that CodeBlock events can only process the basic data types available in CodeBlock scripts, such as numbers, strings, and entities.

[API docs for CodeBlock events](https://horizon.meta.com/resources/scripting-api/core.codeblockevent.md/?api_version=2.0.0) .

## Creating a custom CodeBlock event

To create a custom CodeBlock event:

- Specify the parameter names and types that are sent by the event.
- Specify an event name.
- List the `PropTypes` for each parameter that is sent by the event.

Your CodeBlock event should look like the following:

```vs
sendEvent = new CodeBlockEvent<[player_name: string, player_id: number]>('testSendEvent', [PropTypes.String, PropTypes.Number]);
```

## Sending CodeBlock events

To send a CodeBlock event, use the [Component.sendCodeBlockEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#sendcodeblockevent) method.

## Subscribing to CodeBlock events

To receive events from CodeBlock scripts, use the [Component.connectCodeBlockEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#connectcodeblockevent) method.

## Example - Sending to CodeBlocks

```vs
import { Component, CodeBlockEvent, Entity, PropTypes } from 'horizon/core';

class CodeBlockEvent_CB extends Component<typeof CodeBlockEvent_CB> {

  static propsDefinition= {
    target: {type: PropTypes.Entity},
  };

  sendEvent = new CodeBlockEvent<[player_name: String, player_id: Number]>('sendEvent', [PropTypes.String, PropTypes.Number]);
  receiveEvent = new CodeBlockEvent<[score: Number]>('receiveEvent', [PropTypes.Number]);

  start() {
    // Register for CodeBlock events.
    this.connectCodeBlockEvent(
    this.entity,
    this.receiveEvent,
    (score: Number) => {
       console.log(score);
     });

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendCodeBlockEvent(
        this.props.target!,
        this.sendEvent,
        "Player One",
        123
      );
     }, 500);
    }
  }
Component.register(CodeBlockEvent_CB);
```

## Example - Sending to TypeScript

```vs
import { Component, CodeBlockEvent, Entity, PropTypes } from 'horizon/core';

class CodeBlockEvent_TS extends Component{
  sendEvent = new CodeBlockEvent<[player_name: String, player_id: Number]>('sendEvent', [PropTypes.String, PropTypes.Number]);

  start () {
    // Register to receive CodeBlock event.
    this.connectCodeBlockEvent(
      this.entity,
      this.sendEvent,
      (player_name: String, score: Number) => {
        console.log(player_name + ": " + score);
      });

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendCodeBlockEvent(
        this.entity,
        this.sendEvent,
        "Player One",
        123
      );
    }, 500);
  }
}

Component.register(CodeBlockEvent_TS);
```

## Example - Sending an event to a Player

```vs
import * as hz from 'horizon/core';

class CodeBlockEvent_Player extends hz.Component {
  sendEvent = new hz.CodeBlockEvent<[msg: string]>('sendEvent', [hz.PropTypes.String]);

  playerList: hz.Player[] = [];

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
        this.playerList.push(player);
        this.connectCodeBlockEvent(
          player,
          this.sendEvent,
          (msg: string) => {
            console.log(msg);
          });
      }
 );

    this.async.setInterval(() => {
      this.playerList.forEach(player => {
        this.sendCodeBlockEvent(
          player,
          this.sendEvent,
          "Hello " + player.name.get() + "!"
        );
      });
    }, 5000);
  }
}
```

## Built-in CodeBlock events

There are a number of built-in CodeBlock events for common cases, such as when a player enters or exits the world, or when an object is grabbed by a player. The TypeScript API provides access to the built-in CodeBlock events through the `CodeBlockEvents` variable.

The following table lists some of the most common built-in CodeBlock events you can subscribe to. For a complete list, see the the [API docs for the CodeBlockEvents variable](https://horizon.meta.com/resources/scripting-api/core.codeblockevents.md/?api_version=2.0.0).

| **Event** | **Called when** | **Returns** |
| --- | --- | --- |
| **OnPlayerEnterTrigger** | A player enters a trigger area. | enteredBy: Player |
| **OnPlayerExitTrigger** | A player exits a trigger area. | exitedBy: Player |
| **OnEntityEnterTrigger** | An entity enters a trigger area. | enteredBy: Entity |
| **OnEntityExitTrigger** | An entity exits a trigger area. | enteredBy: Entity |
| **OnPlayerCollision** | A player collision occurs. | collidedWith: Player, collisionAt: Vec3, normal: Vec3, relativeVelocity: Vec3 |
| **OnEntityCollision** | An entity collision occurs. | collidedWith: Entity, collisionAt: Vec3, normal: Vec3, relativeVelocity: Vec3 |
| **OnPlayerEnterWorld** | A player enters the world. | player: Player |
| **OnPlayerExitWorld** | A player exits the world. | player: Player |
| **OnGrabStart** | A player begins to grab an entity. | isRightHand: boolean player: Player |
| **OnGrabEnd** | A player stops grabbing an entity. | player: Player |
| **OnMultiGrabStart** | A player begins grabbing an object with both controllers. | player: Player |
| **OnMultiGrabEnd** | A player stops grabbing an object with both controllers. | player: Player |
| **OnIndexTriggerDown** | The Index Trigger on the controller is pressed down by a player. | player: Player |
| **OnIndexTriggerUp** | The Index Trigger on the controller is released by a player. | player: Player |
| **OnButton1Down** | The Button 1 (Val or Val) on the controller is pressed down. | player: Player |
| **OnButton1Up** | The Button 1 on the controller is released. | player: Player |
| **OnButton2Down** | The Button 2 (Val or Val) on the controller is pressed down. | player: Player |
| **OnButton2Up** | The Button 2 on the controller is released. | player: Player |
| **OnAttachStart** | An object is attached to a player. | player: Player |
| **OnAttachEnd** | An object is removed from a player. | player: Player |
| **OnProjectileLaunched** | A projectile is launched. | - |
| **OnProjectileHitPlayer** | A projectile collides with a player. | playerHit: Player, position: Vec3, normal: Vec3, headshot: boolean |
| **OnProjectileHitEntity** | A projectile collides with an entity. | objectHit: Entity, position: Vec3, normal: Vec3, isStaticHit: boolean |
| **OnItemPurchaseSucceeded** | An item is successfully purchased. | player: Player, item: string |
| **OnItemPurchaseFailed** | An item purchase fails. | player: Player, item: string |
| **OnPlayerConsumeSucceeded** | A player consumes an item successfully. | player: Player, item: string |
| **OnPlayerConsumeFailed** | A player doesn’t consume an item. | player: Player, item: string |
| **OnPlayerSpawnedItem** | A player spawns an item. | player: Player, item: Entity |
| **OnAchievementComplete** | An achievement is completed by a player. | player: Player, achievementScriptId: string |
| **OnAssetSpawned** | An Asset has successfully spawned, returning the loaded Entity. | entity: Entity, asset: Asset |
| **OnAssetDespawned** | An Asset has successfully despawned, returning the unloaded Entity. | entity: Entity, asset: Asset |
| **OnAssetSpawnFailed** | An Asset failed to spawn, returning the requested Asset. | asset: Asset |
| **OnAudioCompleted** | An AudioGizmo’s audio clip is complete. | - |

### Subscribe to built-In CodeBlock events

To receive built-In CodeBlock events, use the [Component.connectCodeBlockEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#connectcodeblockevent) method.

```vs
// Import CodeBlockEvents to access Built-in Events.
import { Component, CodeBlockEvents, Player } from 'horizon/core';

class BuiltInEventExample extends Component {
  start() {
    this.connectCodeBlockEvent(
      this.entity,
      CodeBlockEvents.OnIndexTriggerDown,
      (player: Player) => {
        // Perform an action when the Index Trigger is pressed.
      }
    );
      this.connectCodeBlockEvent (
        this.entity,
        CodeBlockEvents.OnGrabEnd,
        (player: Player) => {
        // Perform another action when the Grab Action ends.
      }
    );
  }
}

Component.register(BuiltInEventExample);
```