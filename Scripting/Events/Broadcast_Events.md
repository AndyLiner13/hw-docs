# Broadcast Events

## Event behavior for local vs. server script execution

 By default, all scripts run on the server when attached to an object in the
world. If you set a script to run locally, your local and broadcast events are only
received by scripts running on the same client.
• If a local or broadcast event is sent from a script running on the server, only
scripts running on the server receive that event.
• If a local or broadcast event is sent from a script running on a local client,
only scripts owned by that client receive the event.

 If your scripts need to communicate between local client and server scripts, use
CodeBlock events. For more information, see [Getting Started with Local Scripting](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/getting-started-with-local-scripting).> 

 [!Warning] Maintaining broadcast event subscriptions can slow your event
messaging as more subscriptions are added. If your objects no longer need to listen for
broadcast events, you can [unsubscribe from these sources](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/events-best-practices) to improve performance.  
## Creating a broadcast event

 Local events are used to create custom broadcast events and can follow the same
process for creation:  `broadcastEvent `=` `new` `MyLocalEvent`<{`message`:` `String`}>(`'broadcastEvent'`);`  
## Sending broadcast events

 To send broadcast events, use the `this.sendBroadcastEvent` function. Parameters:
• `Event`: The LocalEvent to send.
• `Data`: The event parameters to send.

  
## Subscribing to broadcast events

 To receive broadcast events, use the `this.connectBroadcastEvent` function. Parameters:
• `Event`: The LocalEvent to handle.
• `Callback`: The function to call when the event is received.

 Returns:
• `EventSubscription`: A handler to control the new subscription.

  
## Example

  
```
import { Component, LocalEvent } from 'horizon/core';

class BroadcastEventExample extends Component {
  testEvent = new LocalEvent<{message: String}>('testEvent');

 start() {
    // Register to receive the Broadcast event.
    this.connectLocalBroadcastEvent(
      this.testEvent,
      (data: {message: String}) => {
        console.log(data.message);
      }
    );

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendLocalBroadcastEvent(
        this.testEvent,
        {message: "Broadcast Test"}
      );
    }, 500);
  }
}

Component.register(BroadcastEventExample);
```
    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
