Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/avatar-scaling-api

# Avatar scaling API

This topic describes the `avatarScale` property in the [Player](../../Reference/core/Classes/Player.md) class, which is used to scale avatars. Use cases of this API include creating asymmetrical experiences where some players are larger than others, as well as dynamic changes of players during gameplay.

In the following image of [Kaiju City Showdown](https://horizon.meta.com/world/1279402616789539), the Kaiju player is larger than the rest of players using the API.

![The Kaiju player is larger than the rest of the players](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487459574_686297430574878_1704284363227182690_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=pE3JITtf39EQ7kNvwFYcFr5&_nc_oc=AdkaSyDpjDzvw2sve4D0DTarZWLchB4Yejl0AB3UFTQIjrHqG1BZ5oLY7SI-2IBIwvXY6JDthbCh7CcpP43NyGi6&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7zBckCuHwbbV4xPXlvvfHg&oh=00_AfnLxyXTQcL1IWANWq9RNi76Z016w5V9SppeEM59ApYr-w&oe=6955705A)

You can now unlock new content on the platform. The API enables creators to incorporate mechanics such as platform jumping and puzzle games that rely on scaling avatars up or down in order to progress in the game. Additionally, you can use avatar scaling as part of a progression system for prestige or reputation.

The following image shows the avatar at the beginning of the game.

![The avatar before it's scaled down](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487334824_686297433908211_277638335994097776_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=JdfrHouqNRwQ7kNvwGABnsi&_nc_oc=AdnfWpMRlIYu5RvsZT6Lm7f7Ls0_Jl0ag4Qc3D9JgQ4oXQPioS-SvBw-NR8u3hePo4BPF9RJInQ9IDrC0LgG00DU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7zBckCuHwbbV4xPXlvvfHg&oh=00_AfklY_oUFd_3iYEN5ECBmg_PFX9cmXDwcmK3OwxrZcCtVw&oe=69558F05)

The following image shows the avatar is scaled down to jump through the doughnut hole.

![The avatar scaled down to fit through the doughnut hole](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487357450_686297427241545_4741437208343931387_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=EYlAGvuhiU8Q7kNvwH4dUrc&_nc_oc=Adn1vBTgaAjE0luW-A3BoG7QIkORFUqLwyE_L7cbvJ06gy94uWY39cpkMj06YOM13Dc9i1U3WiA4YyZCNSoQr2CQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7zBckCuHwbbV4xPXlvvfHg&oh=00_AflM7c4aWXueYWt8y_upcTflZuo2aH_8lt6Vjh2YRi1qPQ&oe=69558B8E)

## Prerequisites

* [TypeScript API version 2.0.0 or later](../Upgrade%20World%20to%20TypeScript%20API%20v2.0.0.md).
* The API is available in [horizon/core/player](../../Reference/core/Classes/Player.md).
* [Enable the API module](../Upgrade%20World%20to%20TypeScript%20API%20v2.0.0.md#upgrading-your-world).

## Limitations

The recommended range for scaling avatars is between 0.05 and 50. Values outside of this range may cause unexpected behavior due to engine limitations.

## Best practices

The recommendation is to change the scale when the avatar teleports to another location or when the screen is in transition. Avoid changing the size too often.

## Sample code

The following sample shows you how to use the `avatarScale` property in the [Player](../../Reference/core/Classes/Player.md) class. When the user uses the [right grip action](../../Reference/core/Enumerations/PlayerInputAction.md), the player avatar scale will be increased. When the user uses the [left grip action](../../Reference/core/Enumerations/PlayerInputAction.md), the avatar scale will be decreased. Keep in the mind that the example only iterates between 3 different scales, which are 10%, 100%, and 500%. Additionally, the sample also uses custom input APIs, learn more in the [developer guide](../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20Input%20API.md) and the [API reference guide](../../Reference/core/Classes/PlayerControls.md).

```
import * as hz from 'horizon/core';

class SetAvatarScale extends hz.Component<typeof SetAvatarScale> {
  static propsDefinition = {};

  growInput?: hz.PlayerInput;
  shrinkInput?: hz.PlayerInput;

  avatarScales: number[] = [0.1, 1, 5];
  avatarScaleIndex: number = 1;

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player) => {
      this.entity.owner.set(player);
    });

    if (this.entity.owner.get() == this.world.getServerPlayer()) return;

    this.growInput = hz.PlayerControls.connectLocalInput(
      hz.PlayerInputAction.RightGrip,
      hz.ButtonIcon.Expand, this);

    this.growInput.registerCallback((_, pressed) => {
      if (pressed) this.changeAvatarScale(1);
    });

    this.shrinkInput = hz.PlayerControls.connectLocalInput(
      hz.PlayerInputAction.LeftGrip,
      hz.ButtonIcon.Contract, this);

    this.shrinkInput.registerCallback((_, pressed) => {
      if (pressed) this.changeAvatarScale(-1);
    });
  }

  changeAvatarScale(increment: number) {
    let player = this.entity.owner.get();
    this.avatarScaleIndex = Math.min(
      Math.max(0, this.avatarScaleIndex + increment),
      this.avatarScales.length - 1);
    player.avatarScale.set(this.avatarScales[this.avatarScaleIndex]);
  }
}

hz.Component.register(SetAvatarScale);
```

## What’s next?

Try more tutorials and follow examples in these topics:

* [Scripting](../Scripting%20using%20TypeScript.md)
* [Tutorial worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game)