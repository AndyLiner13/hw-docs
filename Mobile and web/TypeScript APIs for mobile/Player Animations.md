Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/player-animations

Learn

# Player Animations

Since the firing of projectiles is controlled programmatically, you can add hooks in your code to play animations. These animations play only when visiting Meta Horizon Worlds on web and mobile.

You can trigger the animation using **playAvatarGripPoseAnimationByName()**.

```
player.playAvatarGripPoseAnimationByName(AvatarGripPoseAnimationNames.Fire);
```

You can find the names of the supported animations in the **AvatarGripPoseAnimationNames** enumeration. Some animations will have a variation based on the pose type from the **AvatarGripPose** enumeration (for example, the `Fire` animation when holding a sword will swing the sword). You can see the pose type in the properties of the grabbable entity.

```
/**
 * Defines the available avatar grip pose animations.
 */
export enum AvatarGripPoseAnimationNames {
  /**
   * Fire animation for the player.
   */
   Fire = 'Fire',

  /**
   * Reload animation for the player.
   */
   Reload = 'Reload',

   /*
   *
   */
  ReadyThrow = 'ReadyThrow',

  /*
  *
  */
  ChargeThrow = 'ChargeThrow',

  /*
  *
  */
  CancelThrow = 'CancelThrow',

  /*
  *
  */
 Throw = 'Throw',

}
```

### Death / Respawn

It is also possible to trigger a death and respawn animation for the player. This is done by calling the `playAvatarGripPostAnimationByName` and passing the values `"Die"` for death, and `"Respawn"` for respawn. Note that the player will not be able to move their avatar whilst they are dead, and must be respawned in order to move their avatar again.

```
player.playAvatarGripPoseAnimationByName("Die"); // Death
player.playAvatarGripPoseAnimationByName("Respawn"); // Respawn
```

### Example

A script triggering an animation for a player when an event is received would look something like this:

```
const playAnimationEvent = new CodeBlockEvent<
  [player: Player, animation: string]
>('playAnimation', [PropTypes.Player, PropTypes.String]);

class PlayAnimation extends Component<Props> {
  start() {
    this.connectCodeBlockEvent(
      this.entity,
      playAnimationEvent,
      (player: Player, animation: string) => {
        player.playAvatarGripPoseAnimationByName(animation);
      },
    );
  }
}

Component.register(PlayAnimation);
```