# Player Index

## Getting a Player’s Index

 To retrieve a Player’s index in the world, use the `index.get()` function on a Player object. For details, see the [Player.Index property](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#index) in the API reference documentation.  
## Getting a Player from an Index

 To retrieve a Player object based on a Player Index value, use the `getPlayerFromIndex()` function on the `this.world` object. For details, see the [World.getPlayerFromIndex method](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#getplayerfromindex) in the API reference documentation.  
## Example

  
```
var playerIndex = player.index.get();
var playerFromIndex = this.world.getPlayerFromIndex(playerIndex);
```
  
## Player in build mode

 When developing a world, you might want to perform special actions when a player
is in Build Mode as opposed to Preview Mode. You can check if a player is in
Build Mode by using the player function `isInBuildMode.get()`. For details, see the [Player.isInBuildMode property](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#isinbuildmode) in the API reference documentation.  
### `Example`

  `isInBuildMode `=` player`.`isInBuildMode`.`get`();`    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
