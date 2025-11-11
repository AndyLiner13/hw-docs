Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/avatar-scaling-api

# Avatar scaling API

This topic describes the `avatarScale` property in the [Player](/horizon-worlds/reference/2.0.0/core_player) class, which is used to scale avatars. Use cases of this API include creating asymmetrical experiences where some players are larger than others, as well as dynamic changes of players during gameplay.

In the following image of [Kaiju City Showdown](https://horizon.meta.com/world/1279402616789539), the Kaiju player is larger than the rest of players using the API.

![The Kaiju player is larger than the rest of the players](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487459574_686297430574878_1704284363227182690_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=_EJw7KcFytMQ7kNvwGxmS92&_nc_oc=AdlPZ-A_NLzZcy3bgsjPwuuXzObnFWUZ7fTKnevR7Pa9BBTODL-_DuTlPgtSdBJsmZw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=HSZjEnCCycqSrcBxwj50Ww&oh=00_AfgZ7GQxZEqf4ad5RBZ64Qqm2-8Q74MtG7iLiHJgnxcYcA&oe=692BE91A)

You can now unlock new content on the platform. The API enables creators to incorporate mechanics such as platform jumping and puzzle games that rely on scaling avatars up or down in order to progress in the game. Additionally, you can use avatar scaling as part of a progression system for prestige or reputation.

The following image shows the avatar at the beginning of the game.

![The avatar before it's scaled down](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487334824_686297433908211_277638335994097776_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=TDtcQ4whvVUQ7kNvwF2inDG&_nc_oc=AdnzSqJsVSR-asOrJCjsRWR5ytyy_otC1lrEsfxFdE_FTugtDX_BWc9uMrOE6s6HRyk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=HSZjEnCCycqSrcBxwj50Ww&oh=00_AfgOoBU0OBNQ3PBLnyPwXYEdTd8cZj3nEuXlUm6cgq6jzw&oe=692C07C5)

The following image shows the avatar is scaled down to jump through the doughnut hole.

![The avatar scaled down to fit through the doughnut hole](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487357450_686297427241545_4741437208343931387_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=yrTY0lm7r90Q7kNvwGhsKzo&_nc_oc=AdlBeanLx1wO7en-ZzFZPYfuKHasuy9pSBktMC_kw3GMRPvx4avef5rQr-ciIjk-TO0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=HSZjEnCCycqSrcBxwj50Ww&oh=00_AfirhEYyUS1HYzx8ZE3-ZCqNDx1AFkPc9NyIJP3tuvaNAg&oe=692C044E)

## Prerequisites

* [TypeScript API version 2.0.0 or later](/hw-docs/typescript/upgrade-world-to-typescript-api-v200).
* The API is available in [horizon/core/player](/horizon-worlds/reference/2.0.0/core_player).
* [Enable the API module](/hw-docs/typescript/upgrade-world-to-typescript-api-v200#upgrading-your-world).

## Limitations

The recommended range for scaling avatars is between 0.05 and 50. Values outside of this range may cause unexpected behavior due to engine limitations.

## Best practices

The recommendation is to change the scale when the avatar teleports to another location or when the screen is in transition. Avoid changing the size too often.

## Sample code

The following sample shows you how to use the `avatarScale` property in the [Player](/horizon-worlds/reference/2.0.0/core_player) class. When the user uses the [right grip action](/horizon-worlds/reference/2.0.0/core_playerinputaction), the player avatar scale will be increased. When the user uses the [left grip action](/horizon-worlds/reference/2.0.0/core_playerinputaction), the avatar scale will be decreased. Keep in the mind that the example only iterates between 3 different scales, which are 10%, 100%, and 500%. Additionally, the sample also uses custom input APIs, learn more in the [developer guide](/hw-docs/create-for-web-and-mobile/typescript-apis-for-mobile/custom-input-api) and the [API reference guide](/horizon-worlds/reference/2.0.0/core_playercontrols).

```vs
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

* [Scripting](/hw-docs/typescript/typescript)
* [Tutorial worlds](/hw-docs/tutorial-worlds/build-your-first-game/module-1-build-your-first-game)