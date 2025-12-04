Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/example-scripts-library

# Example scripts library

The example scripts in this document illustrate ways to accomplish common tasks using the [Meta Horizon Worlds TypeScript API](/hw-mcp-tools/documentation/hw-docs/Scripting/Scripting%20using%20TypeScript.md).

## Detach an entity from a player

Here is a Horizon TypeScript that detaches an entity from a player:

```
import { Component, AttachableEntity } from "horizon/core";

class DetachEntityFromPlayer extends Component {
  start() {
    // Assuming this.entity is the attachable entity you want to detach
    const attachableEntity = this.entity.as(AttachableEntity);
    if (attachableEntity) {
      attachableEntity.detach();
    }
  }
}

Component.register(DetachEntityFromPlayer);
```

## Stop an animation for an entity

Here is a Horizon TypeScript that stops an animation for an entity:

```
import { Component, AnimatedEntity } from "horizon/core";

class StopAnimationComponent extends Component {
  start() {
    // Assuming this.entity is the AnimatedEntity you want to stop the animation for
    (this.entity as AnimatedEntity).stop(); // Stop the animation
  }
}

Component.register(StopAnimationComponent);
```

## Teleport a player to a specific location

Here is a Horizon TypeScript that teleports a player to a specific location. This script teleports the local player to the location (10, 5, 0) when the component is started:

```
import { Component, Player, Vec3 } from "horizon/core";

class TeleportPlayer extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();

    // Define the teleport location
    const teleportLocation = new Vec3(10, 5, 0);

    // Teleport the player
    player.position.set(teleportLocation);
  }
}

Component.register(TeleportPlayer);
```

## Set who can grab a grabbable entity

Here is a Horizon TypeScript that sets who can grab a grabbable entity:

```
import { Component, GrabbableEntity } from "horizon/core";

class MyComponent extends Component {
  start() {
    // Assuming this.entity is the grabbable entity
    const grabbableEntity = this.entity.as(GrabbableEntity);
    if (grabbableEntity) {
      grabbableEntity.setWhoCanGrab([this.world.getLocalPlayer()]); // Only allow the local player to grab
    }
  }
}

Component.register(MyComponent);
```

## Attach an attachable entity to a player

Here is a Horizon TypeScript that attaches an attachable entity to a player:

```
import { Component, AttachableEntity, AttachablePlayerAnchor } from "horizon/core";

class AttachEntityToPlayer extends Component {
  start() {
    // Assuming this.entity is the attachable entity you want to attach to a player
    const attachableEntity = this.entity.as(AttachableEntity);
    if (attachableEntity) {
      attachableEntity.attachToPlayer(this.world.getLocalPlayer(), AttachablePlayerAnchor.Head);
    }
  }
}

Component.register(AttachEntityToPlayer);
```

## Detach an attachable entity from a player

Here is a Horizon TypeScript that detaches an attachable entity from a player:

```
import { Component, AttachableEntity } from "horizon/core";

class DetachEntityFromPlayer extends Component {
  start() {
    // Assuming this.entity is the attachable entity you want to detach
    const attachableEntity = this.entity.as(AttachableEntity);
    if (attachableEntity) {
      attachableEntity.detach();
    }
  }
}

Component.register(DetachEntityFromPlayer);
```

## Check if a player has completed an achievement

Here is an example of how you can check if a player has completed a specific achievement using the Horizon API:

```
import { Component, Player } from "horizon/core";

class CheckAchievementComponent extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();

    // Define the achievement script ID you want to check
    const achievementScriptID = "my_achievement_id";

    // Check if the player has completed the achievement
    if (player.hasCompletedAchievement(achievementScriptID)) {
      console.log(`Player has completed the ${achievementScriptID} achievement`);
    } else {
      console.log(`Player has not completed the ${achievementScriptID} achievement`);
    }
  }
}

Component.register(CheckAchievementComponent);
```

## Clear an aim assist target for a player

Here is an example of how you can clear an aim assist target for a player using the Horizon API:

```
import { Component, Player } from "horizon/core";

class ClearAimAssistTarget extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();
    // Clear the aim assist target
    player.clearAimAssistTarget();
  }
}

Component.register(ClearAimAssistTarget);
```

## Launch a projectile from a launcher

Here is a Horizon TypeScript that launches a projectile from a launcher. This script will launch a projectile from the launcher entity when the trigger is pulled. The projectile will be launched with a speed of 50 units per second:

```
import * as hz from 'horizon/core';

class LaunchProjectile extends hz.Component<typeof LaunchProjectile> {
  static propsDefinition = {
    launcher: {type: hz.PropTypes.Entity}
  };

  start() {
    let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, () => {
      launcherGizmo?.launchProjectile(50);
    });
  }
}

hz.Component.register(LaunchProjectile);
```

## Enable or disable a TriggerGizmo

Here is a Horizon TypeScript that enables or disables a TriggerGizmo. This script assumes that the entity is a TriggerGizmo and uses the `enabled` property to enable or disable the trigger gizmo:

```
import { Component, TriggerGizmo } from "horizon/core";

class EnableDisableTriggerGizmo extends Component {
  start() {
    const triggerGizmo = this.entity.as(TriggerGizmo);
    if (triggerGizmo) {
      triggerGizmo.enabled.set(true); // Enable the trigger gizmo
      // or
      // triggerGizmo.enabled.set(false); // Disable the trigger gizmo
    }
  }
}

Component.register(EnableDisableTriggerGizmo);
```

## Unfocus a player’s UI

Here is an example of how you can unfocus a player’s UI using the Horizon API:

```
import { Component, Player } from "horizon/core";

class UnfocusPlayerUI extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();
    // Unfocus the player's UI
    player.unfocusUI();
  }
}

Component.register(UnfocusPlayerUI);
```

## Play an avatar grip pose animation when a player enters the world

Here is a Horizon TypeScript that plays an avatar grip pose animation for a player when they enter the world:

```
import * as hz from 'horizon/core';

class PlayAvatarGripPoseAnimation extends hz.Component {
  start() {
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, (player: hz.Player) => {
      player.playAvatarGripPoseAnimationByName('Sword');
    });
  }
}

hz.Component.register(PlayAvatarGripPoseAnimation);
```

## Change the color of an entity

Here is a Horizon TypeScript component that changes the color of an entity. This component changes the color of the entity it is attached to to green when the `start()` method is called:

```
import { Component, Entity, Color } from "horizon/core";

class ChangeColorComponent extends Component {
  start() {
    this.entity.color.set(new Color(0, 255, 0)); // Set color to green
  }
}

Component.register(ChangeColorComponent);
```

## Move an entity to a specific position

Here is a Horizon TypeScript code that moves an entity to a specific position. This component will move the entity it is attached to to the position (10, 0, 5) when the `start()` method is called:

```
import { Component, Entity, Vec3 } from "horizon/core";

class MoveToPositionComponent extends Component {
  start() {
    this.entity.position.set(new Vec3(10, 0, 5)); // Move entity to position (10, 0, 5)
  }
}

Component.register(MoveToPositionComponent);
```

## Scale an entity

Here is a Horizon TypeScript component that scales an entity. This component scales the entity to 2 times its original size in all directions (x, y, and z axes). You can adjust the values passed to the `Vec3` constructor to scale the entity differently in each direction:

```
import { Component, Entity, Vec3 } from "horizon/core";

class ScaleComponent extends Component {
  start() {
    // Assuming this.entity is the entity you want to scale
    this.entity.scale.set(new Vec3(2, 2, 2)); // Scale entity to 2x its original size
  }
}

Component.register(ScaleComponent);
```

## Toggle the visibility of an entity

Here is a Horizon TypeScript component that toggles the visibility of an entity. This component uses the `visible` property of the `Entity` class, which is a `HorizonProperty<boolean>`. The `set` method is used to set the visibility to the opposite of its current value, effectively toggling it:

```
import { Component, Entity } from "horizon/core";

class ToggleVisibilityComponent extends Component {
  start() {
    // Assuming this.entity is the entity you want to toggle visibility of
    const entity = this.entity;
    entity.visible.set(!entity.visible.get());
  }
}

Component.register(ToggleVisibilityComponent);
```

## Make an entity collidable

Here is a Horizon TypeScript component that makes an entity collidable or non-collidable. In this example, the `collidable` property of the `Entity` class is used to set the collidability of the entity. Setting it to `true` makes the entity collidable, and setting it to `false` makes it non-collidable:

```
import { Component, Entity } from "horizon/core";

class CollidableComponent extends Component {
  start() {
    // Assuming this.entity is the entity you want to make collidable or non-collidable
    this.entity.collidable.set(true); // Set collidable to true to make the entity collidable
    // this.entity.collidable.set(false); // Set collidable to false to make the entity non-collidable
  }
}

Component.register(CollidableComponent);
```

## Retrieve the position of a player

Here is a Horizon TypeScript component that retrieves the position of a player. This component uses the `getLocalPlayer()` method to get the local player, and then retrieves the player’s position using the `position` property. The `get()` method is used to get the current value of the `position` property, which is a `Vec3` object. The component then logs the player’s position to the console:

```
import { Component, Player } from "horizon/core";

class GetPlayerPosition extends Component {
  start() {
    const player = this.world.getLocalPlayer();
    if (player) {
      const position = player.position.get();
      console.log(`Player position: ${position.x}, ${position.y}, ${position.z}`);
    }
  }
}

Component.register(GetPlayerPosition);
```

## Change gravity for a player

Here is a Horizon TypeScript component that changes the gravity for a player. This component gets the local player using `this.world.getLocalPlayer()` and then sets the gravity of the player to 5 using `localPlayer.gravity.set(5)`:

```
import { Component, Player, World } from "horizon/core";

class ChangeGravityComponent extends Component {
  start() {
    // Get the local player
    const localPlayer = this.world.getLocalPlayer();
    // Set the gravity
    localPlayer.gravity.set(5); // Set gravity to 5
  }
}

Component.register(ChangeGravityComponent);
```

## Change speed for a player

Here is a Horizon TypeScript component that changes the speed of a player’s locomotion. This component gets the local player using `this.world.getLocalPlayer()` and then sets the locomotion speed to 10 using `localPlayer.locomotionSpeed.set(10)`:

```
import { Component, Player, World } from "horizon/core";

class ChangeSpeedComponent extends Component {
  start() {
    // Get the local player
    const localPlayer = this.world.getLocalPlayer();
    // Set the locomotion speed
    localPlayer.locomotionSpeed.set(10); // Set speed to 10
  }
}

Component.register(ChangeSpeedComponent);
```

## Retrieve a player’s device type

Here is a Horizon TypeScript component that retrieves the device type of a player. This component uses the `getLocalPlayer()` method to get the local player, and then accesses the `deviceType` property to retrieve the device type. The `get()` method is used to get the current value of the `deviceType` property, which is a `ReadableHorizonProperty`. The resulting device type is then logged to the console:

```
import { Component, Player } from "horizon/core";

class GetPlayerDeviceType extends Component {
  start() {
    const player = this.world.getLocalPlayer();
    const deviceType = player.deviceType.get();
    console.log(`Player device type: ${deviceType}`);
  }
}

Component.register(GetPlayerDeviceType);
```

## Delete an asset

Here is a Horizon TypeScript component that deletes an asset from the game. This component can be attached to an entity, and when it starts, it will delete the entity from the game:

```
import { Component, World, Entity } from "horizon/core";

class DeleteAsset extends Component {
  async start() {
    // Define the entity you want to delete
    const entity = this.entity;
    // Delete the asset
    await this.world.deleteAsset(entity);
  }
}

Component.register(DeleteAsset);
```

## Retrieve a player’s variable from persistent storage

Here is a Horizon TypeScript component that retrieves a player’s variable from persistent storage. This component retrieves a player variable named “score” from persistent storage and logs it to the console:

```
import { Component } from "horizon/core";

class RetrievePlayerVariable extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();

    // Retrieve a player variable from persistent storage
    const score = this.world.persistentStorage.getPlayerVariable<number>(player, "score");

    // Log the retrieved variable to the console
    console.log(`Player's score: ${score}`);
  }
}

Component.register(RetrievePlayerVariable);
```

## Set a player’s variable in persistent storage

Here is a Horizon TypeScript component that sets a player’s variable in persistent storage. This component sets a player variable named “myVariable” to the value 10 in persistent storage when the component is started:

```
import { Component } from "horizon/core";

class SetPlayerVariableInPersistentStorage extends Component {
  start() {
    // Get the local player
    const player = this.world.getLocalPlayer();

    // Set a player variable in persistent storage
    this.world.persistentStorage.setPlayerVariable(player, "myVariable", 10);
  }
}

Component.register(SetPlayerVariableInPersistentStorage);
```