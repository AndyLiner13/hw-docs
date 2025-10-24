# World Update Events

 World events are broadcast events that notify your scripts between each rendered
frame on the player’s headset. This returns the delta time, which is the
duration in milliseconds since the last update. Using Delta Time, your scripts can
provide smooth motion for animation and physics. To enable your scripts to run
logic during the update loop, subscribe to the World.onUpdate or World.onPrePhysicsUpdate event to handle running your code at different stages of the update loop.  
## Subscribe to world update events

 To subscribe to World Update events, use the [this.connectLocalBroadcastEvent](https://horizon.meta.com/resources/scripting-api/core.component.connectlocalbroadcastevent.md/?api_version=2.0.0) function. Parameters:
• `Event`: The LocalEvent to handle (from the World class).
• `Callback`: The function to call when the event is received.

 Returns:
• `EventSubscription`: A handler to control the event subscription.

  
## `Example`

  
```
import { Component, World } from 'horizon/core';

class WorldUpdateEventExample extends Component {
 start() {
    this.connectLocalBroadcastEvent(
      World.onUpdate,
      (data: {deltaTime: number}) => {
        // Perform an action during the Update step.
      }
    );
   
    this.connectLocalBroadcastEvent(
      World.onPrePhysicsUpdate, 
      (data: {deltaTime: number}) => {
        // Perform an action during the Pre-Physics Update step.
      }
    );
  }
}

Component.register(WorldUpdateEventExample);
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
