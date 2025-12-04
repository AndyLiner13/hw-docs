Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/player-index

# Player Index

When a player joins your world instance, they’re assigned a constant index. This index persists while they are in the instance and you can use it to track players and any objects tied to them.

This feature will help save time and improve your resource management because you can quickly iterate through the indices to retrieve information about players that join or leave your world. The index starts at zero and is incremented for each additional player until it reaches the maximum number of players allowed for the world. When players leave, their indices are released for re-use by new players.

## Getting a Player’s Index

To retrieve a Player’s index in the world, use the `index.get()` function on a Player object. For details, see the [Player.Index property](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md#index) in the API reference documentation.

## Getting a Player from an Index

To retrieve a Player object based on a Player Index value, use the `getPlayerFromIndex()` function on the `this.world` object. For details, see the [World.getPlayerFromIndex method](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/World.md#getplayerfromindex) in the API reference documentation.

## Example

```
var playerIndex = player.index.get();
var playerFromIndex = this.world.getPlayerFromIndex(playerIndex);
```

## Player in build mode

When developing a world, you might want to perform special actions when a player is in Build Mode as opposed to Preview Mode. You can check if a player is in Build Mode by using the player function `isInBuildMode.get()`. For details, see the [Player.isInBuildMode property](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md#isinbuildmode) in the API reference documentation.

### `Example`

```
isInBuildMode = player.isInBuildMode.get();
```