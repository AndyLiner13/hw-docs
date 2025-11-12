Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/entity-visibility

Learn

# Entity Visibility

TypeScript can programmatically update an Entity’s visibility to players. It can also check to see if an object is visible to specific players. This is because each entity in Horizon has a setting to control its visibility to players in the world. For example, you might want to make an object invisible when it’s no longer in use. That way, you can keep it in the world, rather than destroy it. Just set the object to invisible for all players.

## Checking entity visibility

To check if an Entity is visible to a specific player in a world instance, call the `isVisibleToPlayer()` method on the `Entity` object. For details, see the [Entity.isVisibleToPlayer method](/hw-docs/Reference/core/Classes/Entity.md#isvisibletoplayer) in the API reference documentation.

## Updating entity visibility

You can set Entity visibility with the `setVisibleToPlayers` and `resetVisibilityForPlayers` methods. The `setVisibleToPlayers` method can set the visibility for a given set of players while the `resetVisibilityForPlayers` method makes the entity visible to all players in the world instance.

For details, see the following API reference topics:

* [Entity.setVisibleToPlayers method](/hw-docs/Reference/core/Classes/Entity.md#setvisibletoplayers)
* [Entity.resetVisibilityForPlayers method](/hw-docs/Reference/core/Classes/Entity.md#resetvisibilityforplayers)

## Example code

The following code indicates whether an Entity is visible to a player when they enter the world instance, and then makes the Entity visible to all players in the world instance.

```
class TestVisibilityAPIs extends Component<typeof TestVisibilityAPIs> {
  static propsDefinition = {
    sphere: {type: PropTypes.Entity},
  };

  start() {
    this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, (player) => {
        var sphere = this.props.sphere!;
        var isVisible = sphere.isVisibleToPlayer(player);
        console.log("Object is visible to player: " + isVisible);

        if (isVisible){
          sphere.setVisibilityForPlayers([], true);
        } else {
          sphere.resetVisibilityForPlayers();
        }
      });
  }
}
```