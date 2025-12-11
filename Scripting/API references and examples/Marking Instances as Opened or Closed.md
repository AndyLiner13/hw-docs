Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/marking-instances-as-opened-or-closed

# Marking Instances as Opened or Closed

When players join a world with an active experience in progress, their participation might be blocked until the current group finishes their session. This can result in a poor experience for players, when they could instead join a new world instance to participate right away.

With this API you can indicate if a world instance is open or closed to new players joining. This ensures players are matched with instances accepting new players and can start an experience right away. Once the current experience is complete, the instance can then be reopened for matchmaking by calling the TypeScript API once more.

To enable allowPlayerJoin() and **ServerState** functionality, import World from `'horizon/core’` within your TypeScript file.

The `World.matchmaking.allowPlayerJoin()` method indicates whether a user can or cannot join an instance at a given time. For details, see the [World.matchmaking.allowPlayerJoin method](../../Reference/core/Classes/PhysicalEntity.md#springpushtowardposition) in the API reference documentation.

#### Example Code

In the below example, two Components are created: `TestMarkInstanceOpen` and `TestMarkInstanceClosed`. If a player grabs one of these entities, the instance will be marked as **Open** or **Closed**, respectively.

```
import type { PropsDefinition } from 'horizon/core';
import { Player } from 'horizon/core';
import { CodeBlockEvents } from 'horizon/core';
import { HorizonEvent } from 'horizon/core';
import { Component } from 'horizon/core';
import World from 'horizon/core';

class TestMarkInstanceOpen extends Component  {
  start() {
      this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnGrabStart, async (isRightHand, player) => {
        this.world.ui.showPopupForEveryone("Marking instance as open", 5);
        this.world.matchmaking.allowPlayerJoin(true);
    });
  }
}

class TestMarkInstanceClosed extends Component  {
start()  {
  this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnGrabStart, async (isRightHand, player) => {
      this.world.ui.showPopupForEveryone("Marking instance as closed", 5);
      this.world.matchmaking.allowPlayerJoin(false);
    });
  }
}

Component.register(TestMarkInstanceOpen);
Component.register(TestMarkInstanceClosed);
```

#### Known Issues

* When calling the `allowPlayerJoin()` function, make sure your script isn’t running locally and is instead running on the server (default). Calling these functions within a local script will throw an exception.
* If all players leave the instance and it’s still marked as closed, the instance will automatically be deleted.