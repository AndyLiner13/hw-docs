Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/multiplayer-lobby-tutorial/module-4-starting-the-game

# Module 4 - Starting the Game

## Start Game Trigger Zone

Now, let’s make it possible for players to participate. In our game, we want players to be able to:

* Enter the world in a state and a location outside of the gameplay space
* Wait in this space for others to join.
* When players are ready, start a new game.

A common mechanic is to designate a zone as the lobby area, where players enter, wait, and launch new matches.

In the provided world, the lobby area has a small platform near one end with a Trigger Zone gizmo. We define this area as our “Start New Match” zone.

The Trigger Zone has a script already attached: **StartGameTrigger**. Let’s open that script and complete the TODOs listed in it.

Our tracking events are already created in the provided **GameUtils** module. We need to gain access to the required event in this file.

Replace:

```
// TODO: import all events from our GameUtils file
```

With:

```
import Events from 'GameUtils';
```

Now, all objects defined as Events in the GameUtils file are now available for use in the current script.

We want to broadcast this event, the registerNewMatch event, when a player enters the trigger zone. We can do that with the built-in **SendLocalBroadcastEvent**. This event sends an event message to any component in our game that is listening.

In the **StartGameTrigger** script, replace:

```
// TODO: broadcast the "registerNewMatch" event
```

With:

```
this.sendLocalBroadcastEvent(Events.registerNewMatch, {});
```

## Updating Game State

Our GameManager script is already designed to listen for the registerNewMatch event. We must update the code so that when this event is received, the game state is changed to **Starting**.

In the **GameManager** script, replace:

```
// TODO: Call the "handleNewMatchStarting" event handler
```

With:

```
this.handleNewMatchStarting();
```

## Display a countdown timer

Before teleporting players into the game, we should show a simple countdown to all lobby players.

**Note**: It is best practice to **not** teleport players without warning. It can be really confusing.

For our countdown timer, we are going to use the built-in **Popup UI**. The code for a simple internal function is provided in an event handler for when the state changes to “**Starting**”. However, it’s not hooked up yet. Let’s do that first.

In the **GameManager** script, replace:

```
// TODO: update the game state to "Starting"
```

With:

```
this.setGameState(GameState.Starting);
```

For Popup UI, we are going to use the **World** class from TypeScript API v2.0.0, its **UI** property, and the **showPopupForEveryone** method. (API reference for **world.ui** can be found [here](https://horizon.meta.com/resources/scripting-api/core.world.ui.md/?api_version=2.0.0) )

In our **GameManager** file, replace:

```
// TODO: show Popup UI message to everyone with remaining time
```

With:

```
this.world.ui.showPopupForEveryone(
  `Match Start teleport in  ${this.countdownTimeInMS / 1000}`,
  1,
);
```

In the above code snippet, we are using the **showPopupForEveryone** method. This method takes 2 parameters:

* the first param is the text to display
* the second param is the time (in seconds) to display that message

After the designated time, the Popup UI will dismiss itself.

## Testing

At this point, we can test what we have built so far.

- Enter the world in **Visit** mode.
- Jump up on the **Start Match** platform.
- You should see the **Popup UI** that displays a countdown.

## Checkpoint

Done with Module 4! In this module, you:

* Triggered a new game to start using events and game state
* Displayed a Popup UI message to all players

Right now, when the countdown finishes, nothing happens. We’ll cover that in the next module.