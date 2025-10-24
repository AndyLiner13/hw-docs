# Marking Instances as Opened or Closed

#### Example Code

 In the below example, two Components are created: `TestMarkInstanceOpen` and `TestMarkInstanceClosed`. If a player grabs one of these entities, the instance will be marked as Open or Closed, respectively.  
```
import type { PropsDefinition } from 'horizon/core';
import { Player } from 'horizon/core';
import { CodeBlockEvents } from 'horizon/core';
import { HorizonEvent } from 'horizon/core';
import { Component } from 'horizon/core';
import World from 'horizon/core';

class TestMarkInstanceOpen extends Component  {
  start() {
      this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnGrabStart, async (isRightHand, player) => {
        this.world.ui.showPopupForEveryone("Marking instance as open", 5);
        this.world.matchmaking.allowPlayerJoin(true);
    });
  }
}

class TestMarkInstanceClosed extends Component  {
start()  {
  this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnGrabStart, async (isRightHand, player) => {
      this.world.ui.showPopupForEveryone("Marking instance as closed", 5);
      this.world.matchmaking.allowPlayerJoin(false);
    });
  }
}

Component.register(TestMarkInstanceOpen);
Component.register(TestMarkInstanceClosed);
```
#### Known Issues


• When calling the `allowPlayerJoin()` function, make sure your script isn't running locally and is instead running on
the server (default). Calling these functions within a local script will throw
an exception.
• If all players leave the instance and it's still marked as closed, the instance
will automatically be deleted.

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
