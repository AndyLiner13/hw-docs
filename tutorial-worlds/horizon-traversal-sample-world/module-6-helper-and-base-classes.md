Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/horizon-traversal-sample-world/module-6-helper-and-base-classes

# Module 6 - Helper and Base Classes

These classes are referenced elsewhere in the code to provide functionality and data objects for use in the game.

**Tip**: These files may be the easiest to port to other worlds. In particular, the GameUtils.ts and MathUtils.ts can provide helpful capabilities in your projects.

## Events.ts

Contains all of the global event definitions for the world. Most events apply to individual player states or to game states.

**Tip**: Any script file that sends and receives events must import this file. Avoid creating events in other files.

**Notes**:

```vs
export const Events = {
  ...
}
```

* The set of events is encapsulated in the exported constant Events, which enables events to be referenced as “Events.myEvent” in your code, after import.
* Events are defined as local events (LocalEvent) or global events (NetworkEvent). Local events are emitted and delivered to the client, while network events are broadcast to all listening entities across the network.

## GameUtils.ts

Contains code for:

* Game-wide enums and constants.
* Objects and functions for defining and managing the various pools of entities required for the game.
* Advanced curve functions and their visualizer.

**Tip**: In VisualStudio Code, you can right-click defined terms in this file and select **Go to References** to display how these entities are applied in the code.

## HideTeachingObjects.ts

Hides the tutorial objects on the world start. These objects are intended to be visible in dev mode only.

## MathUtils.ts

Contains helper classes for advanced Math functions.

## PlayerEventTriggerBase.ts

Base class that provides functionality that fires on players and entities entering and/or exiting triggers.

## PlayerVictoryTrigger.ts

Extended class for setting Player victory state info.

## PlayerRegisterMatchTrigger.ts

Extended class for new lobby players to join or leave a match.

## ToggleTrailTrigger.ts

Extended class that specifically toggles the CurveVisualizer class inside GameUtils.ts.

## TeleportToSpawnPointTrigger.ts

Extended class that teleports the entering player to a specific spawn point.

## PlayerBoostPowerUpTrigger.ts

Extended class that sends an event to the player’s local jump control to allow boosting.

## PlayerOOBTrigger.ts

Extended class that informs the player’s local OOB controller to respawn the player in an appropriate location when out of bounds.

## ToggleGatesOnGameStateChange.ts

Works with gamestate to specifically control the gates to the start of a Match.