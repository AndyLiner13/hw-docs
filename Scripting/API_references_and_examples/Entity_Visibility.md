# Entity Visibility

## Checking entity visibility

 To check if an Entity is visible to a specific player in a world instance, call
the `isVisibleToPlayer()` method on the `Entity` object. For details, see the [Entity.isVisibleToPlayer method](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity#isvisibletoplayer) in the API reference documentation.  
## Updating entity visibility

 You can set Entity visibility with the `setVisibleToPlayers` and `resetVisibilityForPlayers` methods. The `setVisibleToPlayers` method can set the visibility for a given set of players while the `resetVisibilityForPlayers` method makes the entity visible to all players in the world instance. For details, see the following API reference topics:
• [Entity.setVisibleToPlayers method](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity#setvisibletoplayers)
• [Entity.resetVisibilityForPlayers method](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity#resetvisibilityforplayers)

  
## Example code

 The following code indicates whether an Entity is visible to a player when they
enter the world instance, and then makes the Entity visible to all players in
the world instance.  
```
class TestVisibilityAPIs extends Component<typeof TestVisibilityAPIs> {
  static propsDefinition = {
    sphere: {type: PropTypes.Entity},
  };

  start() {
    this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, (player) => {
        var sphere = this.props.sphere!;
        var isVisible = sphere.isVisibleToPlayer(player);
        console.log("Object is visible to player: " + isVisible);

        if (isVisible){
          sphere.setVisibilityForPlayers([], true);
        } else {
          sphere.resetVisibilityForPlayers();
        }
      });
  }
}
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
