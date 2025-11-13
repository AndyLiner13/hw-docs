Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/broadcast-events

# Broadcast Events

A broadcast event is a type of local event that notifies all objects subscribed to the same event without directly referencing them. This enables your code to be less dependent on knowing which objects should receive the event, reducing code complexity. Like local events, broadcast events are performed synchronously, but the execution order is random and can only be received by listeners registered on the same client.

## Event behavior for local vs. server script execution

By default, all scripts run on the server when attached to an object in the world. If you set a script to run locally, your local and broadcast events are only received by scripts running on the same client.

* If a local or broadcast event is sent from a script running on the server, only scripts running on the server receive that event.
* If a local or broadcast event is sent from a script running on a local client, only scripts owned by that client receive the event.

If your scripts need to communicate between local client and server scripts, use CodeBlock events. For more information, see [Getting Started with Local Scripting](/hw-docs/Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md).

> [!Warning]
> Maintaining broadcast event subscriptions can slow your event messaging as more subscriptions are added. If your objects no longer need to listen for broadcast events, you can [unsubscribe from these sources](/hw-docs/Scripting/Events/Events%20Best%20Practices.md) to improve performance.

## Creating a broadcast event

Local events are used to create custom broadcast events and can follow the same process for creation:

```
broadcastEvent = new MyLocalEvent<{message: String}>('broadcastEvent');
```

## Sending broadcast events

To send broadcast events, use the `this.sendBroadcastEvent` function.

Parameters:

* `Event`: The LocalEvent to send.
* `Data`: The event parameters to send.

## Subscribing to broadcast events

To receive broadcast events, use the `this.connectBroadcastEvent` function.

Parameters:

* `Event`: The LocalEvent to handle.
* `Callback`: The function to call when the event is received.

Returns:

* `EventSubscription`: A handler to control the new subscription.

## Example

```
import { Component, LocalEvent } from 'horizon/core';

class BroadcastEventExample extends Component {
  testEvent = new LocalEvent<{message: String}>('testEvent');

 start() {
    // Register to receive the Broadcast event.
    this.connectLocalBroadcastEvent(
      this.testEvent,
      (data: {message: String}) => {
        console.log(data.message);
      }
    );

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendLocalBroadcastEvent(
        this.testEvent,
        {message: "Broadcast Test"}
      );
    }, 500);
  }
}

Component.register(BroadcastEventExample);
```