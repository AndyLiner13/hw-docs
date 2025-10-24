# CodeBlock Achievements

 TypeScript provides methods and a [CodeBlock event](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/codeblock-events) to check for and grant achievements when a player completes actions or feats in
your world. Creators previously used CodeBlocks to handle player Achievements.
Now, TypeScript enables more flexible development options. Note: "Achievements" is a legacy name for Quests in Meta Horizon Worlds; at this
time, Quests are still referrd to as Achievements in the TypeScript API. The following TyepScript APIs are available for managing achievements:
• [OnAchievementComplete CodeBlock event](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevents) - This is a built-in CodeBlock event that is called when a player completes a
specified achievement.
• [Player.hasCompletedAchievement method](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#hascompletedachievement) - Verifies whether the player has completed the specified achievement.
• [Player.setAchievementComplete method](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#setachievementcomplete) - Specifies whether a player has completed the given achievement.

  
## Example Code

  
```
import * as hz from 'horizon/core';


class TestOnAchievementUpdate extends hz.Component<typeof TestOnAchievementUpdate> {
  static propsDefinition = {
    cube: {type: hz.PropTypes.Entity},
  };

  start() {
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnAchievementComplete, (player, scriptID) ==> {
      console.log("Achievement Updated! ScriptID: " + scriptID);
    });
  }
}
hz.Component.register(TestOnAchievementUpdate);

class TestGetAndSetAchievement extends hz.Component<typeof TestGetAndSetAchievement> {
  static propsDefinition = {};

  start() {
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterTrigger, (player: hz.Player) ==> {
      var scriptID = "winner";
      var hasAchievement = player.hasCompletedAchievement(scriptID);
      if (hasAchievement){
        player.setAchievementComplete(scriptID, false);
      } else {
        player.setAchievementComplete(scriptID, true);
      }
    });
  }
}
hz.Component.register(TestGetAndSetAchievement);
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
