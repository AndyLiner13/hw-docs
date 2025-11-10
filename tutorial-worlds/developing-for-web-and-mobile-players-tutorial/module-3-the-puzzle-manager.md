Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-3-the-puzzle-manager

# Module 3- The Puzzle Manager

The Puzzle Manager is a key component in this game. We deploy one Puzzle Manager to each room, where it is responsible for the following:

* Display a hint to the players in the room after a specified duration to assist them in getting through the puzzle.
* Move objects to complete the puzzle allowing the player to advance. For example, opening a door at the end of the room.

We use the HUD created in the previous module to display the hints and create two new events to communicate to the Puzzle Manager that a puzzle has been completed and to move objects.

## Puzzle Manager events

These events are located in the sysEvents script:

```vs
// Puzzle Manager events
  OnFinishPuzzle: new hz.NetworkEvent("OnFinishPuzzle"),
  OnMoveObject: new hz.LocalEvent("OnMoveObject"),
```

Open the sysPuzzleManager script and import these events:

```vs
import {sysEvents} from 'sysEvents';
```

### Start puzzle hint timer

Let’s start by implementing the function to start a puzzle, setting a timeout to display a hint after some time. We also set an interval to repeat the hint again in the future, in case players are still stuck in the room.

Find the next TODO in the script:

```vs
// TODO: Starts the puzzle and displays a hint to the active players after `hintDelay` seconds and repeat the hint every `hintRepeatTime` seconds
```

Replace the above with the following function, which uses the HUD system to display hints to the players when needed:

```vs
private OnStartPuzzle() {
  this.isActive = true;

  this.timeoutID = this.async.setTimeout(() => {
    this.sendNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, {players: this.activePlayersList, text: this.props.hintText, duration: this.props.hintDuration});
    this.intervalID = this.async.setInterval(() => {
      this.sendNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, {players: this.activePlayersList, text: this.props.hintText, duration: this.props.hintDuration});
    }, this.props.hintRepeatTime * 1000)},
    this.props.hintDelay * 1000
  );
}
```

### Track players in room

Now, let’s add code to define when to call the function we just created and display hints to the players in the room.

First, we must track the players that are in the room. When the first player enters the room, we start the puzzle.

Find the following TODO in the script:

```vs
// TODO: Keeping track of players in the puzzle room and start the puzzle when the first player enters
```

Replace the above with the following code, which add players to a list when they enter the trigger zone surrounding the room:

```vs
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerEnterTrigger,
  (player: hz.Player) => {
    if (!this.activePlayersList.includes(player)) {
      this.activePlayersList.push(player);
    }

    if (!this.isActive) this.OnStartPuzzle();
  });
```

### Remove exiting players

We must keep track of the players in the room to avoid displaying a hint to a player that is not participating in resolving the room’s puzzle, so we must manage when a player leaves the room. To remove tracking of a player, we remove the player from the player list when they exit the trigger in the room. Locate the next TODO in the script:

```vs
// TODO: Removing players from the active players list when they exit the puzzle room
```

Replace the above with the following code:

```vs
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerExitTrigger,
  (player: hz.Player) => {
    if (this.activePlayersList.includes(player)) {
      this.activePlayersList.splice(this.activePlayersList.indexOf(player), 1);
    }
  });
```

We have now completed the first functionality of the Puzzle Manager and the players should be getting hints in the puzzle rooms now!

### Manage room puzzle completion

Let’s continue with the next responsibility of the Puzzle Manager, which is managing puzzle completion and allowing the player to continue. To track, we use the following events that have already been defined:

* OnFinishPuzzle
* OnMoveObject

#### onFinishPuzzle event

First, let’s implement the OnFinishPuzzle function that will allow the player to continue by moving an object, such as a door.

Locate the following TODO in the script:

```vs
// TODO: Finish the puzzle, clearing all the timeouts and sending an event to move the object (for example, the door to the next room or some platforms)
```

Replace the above with this function:

```vs
private OnFinishPuzzle() {
  this.async.clearTimeout(this.timeoutID);
  this.async.clearInterval(this.intervalID);
  if (this.props.objectToMove) this.sendLocalEvent(this.props.objectToMove, sysEvents.OnMoveObject, {});
}
```

**Note**: The objectToMove entity that is receiving the event must listen for it and react accordingly. In this case, the object moves itself to a different position. Feel free to also check out the sysMoveObject script to see how that is done.

Then, let’s listen to the OnFinishPuzzle event, which is received when another component in the game identifies that the puzzle has been completed successfully and call the function we have just created.

Find the next TODO in the script:

```vs
// TODO: Listen to the `OnFinishPuzzle` event to complete the puzzle and allow the player to continue
```

Replace the above with the following:

```vs
this.connectNetworkEvent(this.entity, sysEvents.OnFinishPuzzle, () => {
  this.OnFinishPuzzle();
});
```

#### onFinishPuzzle event

Upon receiving the onFinishPuzzle event, the Puzzle Manager must move an object (like a door) to allow the player to continue to the next room. In this case, we send the OnMoveObject event to the desired entity.

## Checkpoint

Puzzle Manager complete! Our Puzzle Manager can help players to navigate the puzzles by displaying hints and by moving objects when the puzzle has been completed.

At this point, your sysPuzzleManager script should look like the following:

```vs
import * as hz from 'horizon/core';
import {sysEvents} from 'sysEvents';
class sysPuzzleManager extends hz.Component<typeof sysPuzzleManager> {
  static propsDefinition = {
    hintText: {type: hz.PropTypes.String},
    hintDelay: {type: hz.PropTypes.Number, default: 30},
    hintDuration: {type: hz.PropTypes.Number, default: 5},
    hintRepeatTime: {type: hz.PropTypes.Number, default: 30},
    objectToMove: {type: hz.PropTypes.Entity},
  };

  private activePlayersList = new Array<hz.Player>();
  private isActive = false;
  private timeoutID = -1;
  private intervalID = -1;

  start() {
    // Keeping track of players in the puzzle room and start the puzzle when the first player enters
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      (player: hz.Player) => {
        if (!this.activePlayersList.includes(player)) {
          this.activePlayersList.push(player);
        }

        if (!this.isActive) this.OnStartPuzzle();
      });

    // Removing players from the active players list when they exit the puzzle room
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitTrigger,
      (player: hz.Player) => {
        if (this.activePlayersList.includes(player)) {
          this.activePlayersList.splice(
            this.activePlayersList.indexOf(player), 1);
        }
      });

    // Listen to the `OnFinishPuzzle` event to complete the puzzle and allow the player to continue
    this.connectNetworkEvent(this.entity, sysEvents.OnFinishPuzzle, () => {
      this.OnFinishPuzzle();
    });
  }

  // Starts the puzzle and displays a hint to the active players after `hintDelay` seconds and repeat the hint every `hintRepeatTime` seconds
  private OnStartPuzzle() {
    this.isActive = true;

    this.timeoutID = this.async.setTimeout(() => {
      this.sendNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, {
        players: this.activePlayersList,
        text: this.props.hintText,
        duration: this.props.hintDuration,
      });
      this.intervalID = this.async.setInterval(() => {
        this.sendNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, {
          players: this.activePlayersList,
          text: this.props.hintText,
          duration: this.props.hintDuration,
        });
      }, this.props.hintRepeatTime * 1000)},
      this.props.hintDelay * 1000
      );
  }

  // Finish the puzzle, clearing all the timeouts and sending an event to move the object (for example, the door to the next room or some platforms)
  private OnFinishPuzzle() {
    this.async.clearTimeout(this.timeoutID);
    this.async.clearInterval(this.intervalID);
    if (this.props.objectToMove)
      this.sendLocalEvent(this.props.objectToMove, sysEvents.OnMoveObject, {});
  }
}
hz.Component.register(sysPuzzleManager);
```

### Test:

To test this script, jump into Preview Mode, teleport to one of the rooms and wait 30 seconds until a hint is displayed. The logic for finishing a puzzle is tested in a later module, when we implement the logic of the puzzles of each room.

Next, we build the Camera Manager to control the camera depending on the game situation and player’s device.

## Additional Documentation and APIs

#### Additional documentation:

* [Local Events](/horizon-worlds/learn/documentation/typescript/events/local-events/)
* [Broadcast Events](/horizon-worlds/learn/documentation/typescript/events/broadcast-events/)
* [Events Best Practices](/horizon-worlds/learn/documentation/typescript/events/events-best-practices/)

#### API docs:

* [CodeBlockEvent](https://horizon.meta.com/resources/scripting-api/core.codeblockevent.md/?api_version=2.0.0)
* [LocalEvent](https://horizon.meta.com/resources/scripting-api/core.localevent.md/?api_version=2.0.0)
* [NetworkEvent](https://horizon.meta.com/resources/scripting-api/core.networkevent.md/?api_version=2.0.0)
* [CodeBlockEvents](https://horizon.meta.com/resources/scripting-api/core.codeblockevents.md/?api_version=2.0.0)