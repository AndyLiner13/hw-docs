# Module 2 - Intro to Scripting

## Create your first script

Note: The fininshed script for this module is `PlayerManager_COMPLETE.ts`, which is already part of the tutorial world. You can create a new script called `PlayerManager.ts`, follow the steps of this module, and then compare your generated file with the `_COMPLETE` one. Let’s start scripting! Players can, and will, come and go at any time in a Meta Horizon Worlds game. Let’s create a script to help us to track the players currently in our game. This is a useful and common place to begin.

1. In the desktop editor menubar, click Scripts.
2. In the Scripts panel, click the (+) icon to create a new script.
3. Enter a name for the new script. In this case, call it `PlayerManager`.
4. Click the context menu for the new script in the Scripts panel and select Open in External Editor to open it in your preconfigured IDE.
  1. The default and recommended IDE for editing scripts is Visual Studio Code. You can download and install it for free. See: [Download Visual Studio Code](https://code.visualstudio.com/download).
  2. It’s possible to create and modify scripts through the web interface. However, this method is not recommended and may be deprecated in the future. Navigate to: [Meta Horizon Worlds Creations](https://horizon.meta.com/creator/worlds_all/?locale=en_US).
  3. Locate your world. Click Scripts.

## Script template

The default script template creates and registers a Meta Horizon Worlds component named `PlayerManager`, which looks like the following:

```
import * as hz from 'horizon/core';

class PlayerManager extends hz.Component<typeof PlayerManager> {
  static propsDefinition = {};

  start() {}
}
hz.Component.register(PlayerManager);
```

This template includes the basic elements required to build a basic script:
• Import: Import modules from the TypeScript API definitions and components from other scripts.
• Class: Define the class that you are extending from the abstract `Component` class.
  • `propsDefinition` can be used to define properties internal to the class or as properties available through the Properties panel. More on this later.
  • `start()` method is executed when the class is first loaded.
• Register: The extended class must be registered with the abstract `Component` class.

## Add playerMap object

To track players in the world, we create an object store of cached references to all players. We define this variable within the `PlayerManager` class.
1. In `PlayerManager.ts`, place the cursor below the static `propsDefinition` declaration.
2. Insert the following snippet to create the new Map object:

  `private` playerMap`:` `Map`<`number`,` hz`.`Player`>` `=` `new` `Map`<`number`,` hz`.`Player`>();`

### Script breakdown

• The above declares a private variable, which means it is only available to code within the current script.
  • The name of the variable is `playerMap`.
  • The playerMap variable is of type Map.
  • The `Map` keyword identifies the type that is being created. This Map object has two dimensions; it contains two values for each entry: a number and a reference to the `hz.Player` type.
   • `hz.Player`: At the top of the screen, you can see that the v2.0.0 API module is imported under the name `hz`. The `hz.Player` refers to the `Player` class that is available through the v2.0.0 API module.
• On the other side of the declaration, the variable is declared as a new variable of this Map type, which is empty (`{}`) to start.

This declaration creates an object through which we can store and reference players in the game.

## Intro to Meta Horizon Worlds events in TypeScript

When players enter and leave the world, we must update the Map object that we created to store them, using the Meta Horizon Worlds built-in events API. These built-in events are called Code Block Events. Code Block Events cover common cases, such as when a player enters or exits the world. In TypeScript we can connect, or subscribe, any script to these events.

### Add event listener for onPlayerEnterWorld in start() method

For our world, we need a listener to detect when a new player enters the world. The default TypeScript template includes a reference to the `start()` method, which is executed when the script is first activated. The `start()` method in a script is usually the correct place to set up any event subscriptions. To create the listener:
• Use the built-in `connectCodeBlockEvent` function.
• This function takes 3 parameters:
  • `this.entity`
  • the code block event to which to listen
  • a callback function that passes a player object. A callback function is code that is executed when the event listener receives the event.

Add the following to the `start()` function for our `PlayerManager` script:

```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerEnterWorld,
  (player: hz.Player) => {
    this.playerMap.set(player.id, player);
  },
);
```

### Script breakdown

The above adds an event listener (`this.connectCodeBlockEvent`) for the script (`this.entity`) to receive events from players entering the world (`hz.CodeBlockEvents.OnPlayerEnterWorld`). Inside the callback function, the new player is added to our `playerMap` object in the form of a player ID and the abstract reference to the player.

### Console logging and previewing

It’s all well and good to write the code, but we need to test it! Inside the callback function, we can add a console logging message to verify the event is firing:

```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerEnterWorld,
  (player: hz.Player) => {
    this.playerMap.set(player.id, player);
    console.log(`added player: ${player.name.get()}`);
  },
);
```

#### To test

1. To start the simulation, click the Play button. If it’s already playing, press the Reset button. The simulation begins, which executes all applicable scripts, including the `start()` method in our `PlayerManager.ts` script.
2. To trigger `onPlayerEnterWorld`, Click the Play button, to launch Preview mode:
3. You drop into the world at the Spawn point.
4. Since you have entered the world, it should trigger the `OnPlayerEnterWorld` event. In turn, this registers with our script’s event listener, which means that the new player (you) should be added to the Map object.
5. To test, click the Console tab at the bottom of the screen.

Hmm…it’s not working. Nothing is being logged, and the console is empty. Note: Console logging is an important tool for debugging purposes. For more information, see [Test Your World](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/test-your-world#console-logging).

### Attach script

In Meta Horizon Worlds, scripts run when they are attached to objects, and our `PlayerManager.ts` script is not yet attached to any object in our world. In this case, the script does not apply to a specific object, so attaching it to, for example, one of the gems does not make sense. Instead, it should be attached to an object that is not part of the gameplay experience. We now place an empty object in our world and attach the `PlayerManager.ts` script to that object. The Empty Object type can be used as a placeholder for scripts and an organizing node in your world’s hierarchy. Intrinsically, it has no functionality and does not appear during runtime. Do the following to create the Empty Object placeholder:
1. In the desktop editor, click the Build menu.
2. From the Build menu, select Empty Object.
3. An empty object is added to the world.
4. Select the empty object in the Hierarchy panel:
  1. Right-click to rename it with an appropriate name. For example: `PlayerManager`.
  2. Use the Move tool to reposition the empty object to a location that is outside of the play area of your world. You can also enter coordinates for it in the Properties panel, such as `(0,-100,0)`.

Note: There’s a shortcut to the above workflow. In the Hierarchy panel, right-click the `PlayerManager` script object. Then, select Create parent object. Do the following to attach the script to the empty object.
1. Select the empty object. On the right side of the screen, you can see its properties.
2. At the bottom of the Properties panel (you may need to scroll down), locate the Script sub-panel.
3. From the Script drop-down, select the `PlayerManager:PlayerManager` option.
  1. This reference means: `<scriptName>:<className>`.
  2. This also means that you can define multiple classes within a single script.

#### Test

1. Click the Play button to enter Preview mode.
2. Check the Console tab again:

Success!

### Connect to onPlayerExitWorld CodeBlockEvent

We have handled the case when a player enters the world. Now, we need to manage player exits. Within the `start()` function, connect to the `OnPlayerExitWorld` code block event. When this event is emitted, remove the player from the playerMap object: Note: The `OnPlayerExitWorld` event does not fire when you exit Preview mode. To work around this limitation, test this event with a second Player in the world who enters and leaves while you observe the console.

```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerExitWorld,
  (player: hz.Player) => {
    this.playerMap.delete(player.id);
    console.log(`deleted player: ${player.name.get()}`);
  },
);
```

### Script breakdown

• The above is very similar to the `onPlayerEnterWorld` event listener.
• In this one, the player is deleted from the Map object.
• A message is delivered to the console.

### Create separate handler functions

To keep things simple, your `connectCodeBlockEvent` bindings should have limited code within the callback function, so you may find it useful to move all logic to a callback event handler. Let’s do this now. The `handleOnPlayerEnter` and `handleOnPlayerExit` functions are added below:
• These are declared as separate private functions within the class.
• They each take a single parameter: the player object.
• Some quick checks of the playerMap object are added to see if the player already exists before adding or removing.

See below.

### PlayerManager.ts

The finished `PlayerManager.ts` script now looks like the following:

```
import * as hz from 'horizon/core';

class PlayerManager extends hz.Component<typeof PlayerManager> {
  static propsDefinition = {};
  private playerMap: Map<number, hz.Player> = new Map<number, hz.Player>();

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
        this.handleOnPlayerEnter(player);
      },
    );

    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitWorld,
      (player: hz.Player) => {
        this.handleOnPlayerExit(player);
      },
    );
  }

  private handleOnPlayerExit(player: hz.Player): void {
    if (this.playerMap.has(player.id)) {
      this.playerMap.delete(player.id);
      console.log(`deleted player: ${player.name.get()}`);
    }
  }

  private handleOnPlayerEnter(player: hz.Player): void {
    if (!this.playerMap.has(player.id)) {
      this.playerMap.set(player.id, player);
      console.log(`added player ${player.name.get()}`);
    }
  }
}
hz.Component.register(PlayerManager);
```

## Checkpoint

In this module, you:
• Created your first script
  • Reviewed script structures of default script
  • Added a user-defined Map type to store players of the game
• Added an event listener to the `start()` method
  • Added console logging for testing purposes
• Successfully tested execution of the script
• Created event listener for `CodeBlockEvents`
  • `OnPlayerEnterWorld`
  • `OnPlayerExitWorld`

In the next module, we build event and state management in a `GameManager` script.
