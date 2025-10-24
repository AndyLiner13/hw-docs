# Avatar scaling API

## Prerequisites


• [TypeScript API version 2.0.0 or later](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/upgrade-world-to-typescript-api-v200).
• The API is available in [horizon/core/player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player).
• [Enable the API module](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/upgrade-world-to-typescript-api-v200#upgrading-your-world).

  
## Limitations

 The recommended range for scaling avatars is between 0.05 and 50. Values outside
of this range may cause unexpected behavior due to engine limitations.  
## Best practices

 The recommendation is to change the scale when the avatar teleports to another
location or when the screen is in transition. Avoid changing the size too often.  
## Sample code

 The following sample shows you how to use the `avatarScale` property in the [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player) class. When the user uses the [right grip action](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinputaction), the player avatar scale will be increased. When the user uses the [left grip action](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinputaction), the avatar scale will be decreased. Keep in the mind that the example only
iterates between 3 different scales, which are 10%, 100%, and 500%. Additionally,
the sample also uses custom input APIs, learn more in the [developer guide](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/custom-input-api) and the [API reference guide](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols).  
```
import * as hz from 'horizon/core';

class SetAvatarScale extends hz.Component<typeof SetAvatarScale> {
  static propsDefinition = {};

  growInput?: hz.PlayerInput;
  shrinkInput?: hz.PlayerInput;

  avatarScales: number[] = [0.1, 1, 5];
  avatarScaleIndex: number = 1;

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player) => {
      this.entity.owner.set(player);
    });
    if (this.entity.owner.get() == this.world.getServerPlayer()) return;

    this.growInput = hz.PlayerControls.connectLocalInput(
      hz.PlayerInputAction.RightGrip,
      hz.ButtonIcon.Expand, this);

    this.growInput.registerCallback((_, pressed) => {
      if (pressed) this.changeAvatarScale(1);
    });

    this.shrinkInput = hz.PlayerControls.connectLocalInput(
      hz.PlayerInputAction.LeftGrip,
      hz.ButtonIcon.Contract, this);

    this.shrinkInput.registerCallback((_, pressed) => {
      if (pressed) this.changeAvatarScale(-1);
    });
  }

  changeAvatarScale(increment: number) {
    let player = this.entity.owner.get();
    this.avatarScaleIndex = Math.min(
      Math.max(0, this.avatarScaleIndex + increment),
      this.avatarScales.length - 1);
    player.avatarScale.set(this.avatarScales[this.avatarScaleIndex]);
  }
}
hz.Component.register(SetAvatarScale);
```
## What’s next?

 Try more tutorials and follow examples in these topics:
• [Scripting](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/typescript)
• [Tutorial worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game)

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
