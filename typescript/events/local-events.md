Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/local-events

# Local Events

Local events enable your TypeScript code to send and receive events from objects running TypeScript logic. These events are limited to scripts running on the same device, but can accept basic inputs, such as numbers, strings, entities, and custom class definitions. This provides greater control over the information these scripts can process.

Local events differ from Code Block events in the following ways:

* Local events are synchronous and block code execution until the event callback is complete.
* Local events are tracked by the instantiated object rather than the names or payloads of the event. We recommend that you reuse the same event object between scripts. See [Event Best practices](/horizon-worlds/learn/documentation/typescript/events/events-best-practices/) for a recommended solution.
* Local events are only received by listeners registered on the same client. See the note below on Event Behavior for further details.

## Creating a local event

To create a custom local event:

- Specify the parameters and types that are sent by the event.
- Specify an event name.

Your event should look like the following:

```_ar4n
sendEvent = new LocalEvent<{message: String}>('sendEvent');
```

## Sending local events

To send local events, use the [Component.sendLocalEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#sendlocalevent) function.

Parameters:

* `Target Entity`: The object that receives this event (and is running a TypeScript script).
* `Event`: The LocalEvent to send.
* `Data` : The event parameters to send.

## Subscribing to local events

To receive local events, use the [Component.connectLocalEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#connectlocalevent) function.

Parameters:

* `Target Entity`: The object to subscribe to.
* `Event` : The LocalEvent to handle.
* `Callback`: The function to call when the event is received.

Returns:

* `EventSubscription`: A handler to control the event subscription.

## Example

**Note**: The following example is for demonstration purposes only. Since code execution in Meta Horizon Worlds is non-deterministic, the register code may not complete before the event is send event code executes 500 milliseconds later, which would result in an error. For a more robust solution, you should use Promises. For more information, see [TypeScript Script Lifecycle](/horizon-worlds/learn/documentation/typescript/typescript-script-lifecycle/).

```_ar4n
import {Component, LocalEvent} from 'horizon/core';

class MyEventExample extends Component {
  testEvent = new LocalEvent<{message: String}>('testEvent');

 start () {
    // Register to receive Local Event.
    this.connectLocalEvent (
      this.entity,
      this.testEvent,
      (data: {message: String}) => {
        console.log(data.message);
      });

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendLocalEvent(
        this.entity,
        this.testEvent,
        {message: "My Local Event Test"}
      );
    }, 500);
  }
}

Component.register(MyEventExample);
```

### Event behavior for local vs. server script execution

By default, all scripts run on the server when attached to an object in the world. If you set a script to run locally, your local and broadcast events are only received by scripts running on the same client.

* If a local or broadcast event is sent from a script running on the server, only scripts running on the server receive that event.
* If a local or broadcast event is sent from a script running on a local client, only scripts owned by that client receive the event.

If your scripts need to communicate between local client and server scripts, use CodeBlock events. For more information, see [Getting Started with Local Scripting](/horizon-worlds/learn/documentation/typescript/local-scripting/getting-started-with-local-scripting).