Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-2-intro-to-scripting

# Module 2 - Intro to Scripting

In Module 1, we built the layout for our world and added gems to it. The next step is to begin building scripts to power these entities and manage the systems of our game.

## Create your first script

**Note**: The fininshed script for this module is `PlayerManager_COMPLETE.ts`, which is already part of the tutorial world. You can create a new script called `PlayerManager.ts`, follow the steps of this module, and then compare your generated file with the `_COMPLETE` one.

Let’s start scripting!

Players can, and will, come and go at any time in a Meta Horizon Worlds game. Let’s create a script to help us to track the players currently in our game. This is a useful and common place to begin.

![Screenshot of Scripts panel with create new script button highlighted](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489266500_692135293324425_3182611591958576777_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=aL6n6AoC3XsQ7kNvwGqRvCm&_nc_oc=AdnAeNqnOSe6Z5qxScskOK-3oUTm7l3QXlssbqLYwrZhXUDpQU18wppnYtCxlVWlE2c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AWFvoW06VnXX-YcvhuLVTQ&oh=00_AfhI9KSHm5U6-5aUj7TX5NLlBC7qtfPKNkRHf6jSfGQHBA&oe=69311B5A)

- In the desktop editor menubar, click **Scripts**.
- In the Scripts panel, click the **(+) icon** to create a new script.
- Enter a name for the new script. In this case, call it `PlayerManager`.
- Click the context menu for the new script in the Scripts panel and select **Open in External Editor** to open it in your preconfigured IDE.
  - The default and recommended IDE for editing scripts is Visual Studio Code. You can download and install it for free. See: [Download Visual Studio Code](https://code.visualstudio.com/download).
  - It’s possible to create and modify scripts through the web interface. However, this method is not recommended and may be deprecated in the future. Navigate to: [Meta Horizon Worlds Creations](https://horizon.meta.com/creator/worlds_all/?locale=en_US).
  - Locate your world. Click **Scripts**.

![Screenshot of menu option to open in external editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/488829947_692135319991089_2853596312494584992_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=iGMcO-6cIdIQ7kNvwHGjABF&_nc_oc=Adk5BE3Mr-SxuNxecaR0GtlCjDaNdOODJz_7N9lzu4_vBZlH23T2SKXW_FqA86mmy4Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AWFvoW06VnXX-YcvhuLVTQ&oh=00_AfjBYFfLuju5caKEuretJQOdnsvmu5f22aCtIjgr1qTzYg&oe=693118E4)

## Script template

The default script template creates and registers a Meta Horizon Worlds component named `PlayerManager`, which looks like the following:

```
import * as hz from 'horizon/core';

class PlayerManager extends hz.Component<typeof PlayerManager> {
  static propsDefinition = {};

  start() {}
}
hz.Component.register(PlayerManager);
```

This template includes the basic elements required to build a basic script:

* **Import**: Import modules from the TypeScript API definitions and components from other scripts.
* **Class**: Define the class that you are extending from the abstract `Component` class.
  + `propsDefinition` can be used to define properties internal to the class or as properties available through the Properties panel. More on this later.
  + `start()` method is executed when the class is first loaded.
* **Register**: The extended class must be registered with the abstract `Component` class.

## Add playerMap object

To track players in the world, we create an object store of cached references to all players. We define this variable within the `PlayerManager` class.

- In `PlayerManager.ts`, place the cursor below the static `propsDefinition` declaration.
- Insert the following snippet to create the new Map object:

```
private playerMap: Map<number, hz.Player> = new Map<number, hz.Player>();
```

### Script breakdown

* The above declares a private variable, which means it is only available to code within the current script.
  + The name of the variable is `playerMap`.
  + The playerMap variable is of type Map.
  + The `Map` keyword identifies the type that is being created. This Map object has two dimensions; it contains two values for each entry: a number and a reference to the `hz.Player` type.
    - `hz.Player`: At the top of the screen, you can see that the v2.0.0 API module is imported under the name `hz`. The `hz.Player` refers to the `Player` class that is available through the v2.0.0 API module.
* On the other side of the declaration, the variable is declared as a new variable of this Map type, which is empty (`{}`) to start.

This declaration creates an object through which we can store and reference players in the game.

## Intro to Meta Horizon Worlds events in TypeScript

When players enter and leave the world, we must update the Map object that we created to store them, using the Meta Horizon Worlds built-in events API. These built-in events are called **Code Block Events**.

Code Block Events cover common cases, such as when a player enters or exits the world. In TypeScript we can connect, or subscribe, any script to these events.

### Add event listener for onPlayerEnterWorld in start() method

For our world, we need a listener to detect when a new player enters the world.

The default TypeScript template includes a reference to the `start()` method, which is executed when the script is first activated. The `start()` method in a script is usually the correct place to set up any event subscriptions.

To create the listener:

* Use the built-in `connectCodeBlockEvent` function.
* This function takes 3 parameters:
  + `this.entity`
  + the code block event to which to listen
  + a callback function that passes a player object. A **callback function** is code that is executed when the event listener receives the event.

Add the following to the `start()` function for our `PlayerManager` script:

```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerEnterWorld,
  (player: hz.Player) => {
    this.playerMap.set(player.id, player);
  },
);
```

### Script breakdown

The above adds an event listener (`this.connectCodeBlockEvent`) for the script (`this.entity`) to receive events from players entering the world (`hz.CodeBlockEvents.OnPlayerEnterWorld`).

Inside the callback function, the new player is added to our `playerMap` object in the form of a player ID and the abstract reference to the player.

### Console logging and previewing

It’s all well and good to write the code, but we need to test it!

Inside the callback function, we can add a console logging message to verify the event is firing:

```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerEnterWorld,
  (player: hz.Player) => {
    this.playerMap.set(player.id, player);
    console.log(`added player: ${player.name.get()}`);
  },
);
```

#### To test

- To start the simulation, click the **Play button**. If it’s already playing, press the **Reset button**. The simulation begins, which executes all applicable scripts, including the `start()` method in our `PlayerManager.ts` script.
- To trigger `onPlayerEnterWorld`, Click the **Play button**, to launch Preview mode:
  ![Screenshot of toolbar with highlighted Play button](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489830571_692135393324415_5068842372652785054_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=aMMLszdKihAQ7kNvwFkmPOZ&_nc_oc=AdlEQSJoE2TwCZ1mCuFKzC8zUQlp7Xp6p5SXWvrkwvLSQ1ASVFOIYwiBGYbfF6V0fhA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AWFvoW06VnXX-YcvhuLVTQ&oh=00_Afia9RPzzcNAwJiUVCZlFYBi5ZCIaOcsTEmXG62GXoxuvw&oe=69312D14)
- You drop into the world at the Spawn point.
- Since you have entered the world, it should trigger the `OnPlayerEnterWorld` event. In turn, this registers with our script’s event listener, which means that the new player (you) should be added to the Map object.
- To test, click the **Console tab** at the bottom of the screen.

![Screenshot of Console tab opened at the bottom of the desktop editor screen](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493273647_705021528702468_6855972478545546369_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=-jaL6E92N2YQ7kNvwFsCMUo&_nc_oc=AdmpCTGsFmVEpojggu8Hh8GN8XazLpki7GSRlBUOr_uEABx79OyQEltHg2dzpTVfzZQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AWFvoW06VnXX-YcvhuLVTQ&oh=00_Afj1fB04DDp55V01_CMxv1vnMemIR0myon2kjnVO8rg_zQ&oe=693136F1)

Hmm…it’s not working. Nothing is being logged, and the console is empty.

**Note**: Console logging is an important tool for debugging purposes. For more information, see [Test Your World](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Test%20Your%20World.md#console-logging).

### Attach script

In Meta Horizon Worlds, scripts run when they are attached to objects, and our `PlayerManager.ts` script is not yet attached to any object in our world.

In this case, the script does not apply to a specific object, so attaching it to, for example, one of the gems does not make sense. Instead, it should be attached to an object that is not part of the gameplay experience.

We now place an empty object in our world and attach the `PlayerManager.ts` script to that object. The **Empty Object** type can be used as a placeholder for scripts and an organizing node in your world’s hierarchy. Intrinsically, it has no functionality and does not appear during runtime.

Do the following to create the Empty Object placeholder:

- In the desktop editor, click the **Build menu**.
- From the Build menu, select **Empty Object**.

  ![Screenshot of selecting Empty Object in the Build menu](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489830764_692135373324417_2816249255592353068_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=iy9W_aFv6_cQ7kNvwE7zmgG&_nc_oc=Adlb7EJBb6MdwVtfOGluK4VtnbagiQiqJBGRhsTSc-CSMsWIxsK2yjHv8h0zjfvXyho&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AWFvoW06VnXX-YcvhuLVTQ&oh=00_Afg07bBZr81u0Cfe6U6WqTOtqbdl7-AK2U-hvKINm-hgFg&oe=69313F4A)
- An empty object is added to the world.
- Select the empty object in the Hierarchy panel:
  - Right-click to rename it with an appropriate name. For example: `PlayerManager`.
  - Use the **Move tool** to reposition the empty object to a location that is outside of the play area of your world. You can also enter coordinates for it in the Properties panel, such as `(0,-100,0)`.

![Screenshot of the Move tool highlighted in the toolbar](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489626585_692135369991084_2766122100356522274_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=GN6CGDEdYnkQ7kNvwEt0ghv&_nc_oc=AdneINs-ulReHT0gtNMPlfgd9uncrjMmAAAZRFlfdZhB_8Nqx0PezX8GT78vhqCatPk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AWFvoW06VnXX-YcvhuLVTQ&oh=00_AfgXAe7wcL4Pbh6s_TLuuSzYdOC8CHLbLdXWxti0I24rYw&oe=69311B11)

**Note**: There’s a shortcut to the above workflow. In the Hierarchy panel, right-click the `PlayerManager` script object. Then, select **Create parent object**.

Do the following to attach the script to the empty object.

![Screenshot of Attached Script drop-down highlighted in the Properties panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480856541_660734649797823_7886863523287699176_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=CUtXYoHGxc0Q7kNvwG-RCTE&_nc_oc=Adl6jQKYQqINLL2nnccpbYNrXJv5lcBFTq8XT45wVuE7Fn1w4_yWK9Xzc5-zBeN0ZxU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AWFvoW06VnXX-YcvhuLVTQ&oh=00_Afhlo4ByxCoXwcnyDKxIom49j_LAVSvGpivFROfpfhQ_IQ&oe=69311794)

- Select the empty object. On the right side of the screen, you can see its properties.
- At the bottom of the Properties panel (you may need to scroll down), locate the Script sub-panel.
- From the Script drop-down, select the `PlayerManager:PlayerManager` option.
  - This reference means: `<scriptName>:<className>`.
  - This also means that you can define multiple classes within a single script.

![Screenshot of drop-down list of available scripts to attach](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/489822923_692135383324416_6273319841199421846_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=czBSRc52qt0Q7kNvwEvIt-s&_nc_oc=Admq_vCmcTyZiFFVsx0MOWSnc8T4y2W0diCxvZLeSAFYifCLNUUmMOKv-e5f3StLUzc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AWFvoW06VnXX-YcvhuLVTQ&oh=00_AfizuNy_F2qP9q7yEY7V0IH4vsEtT6trOS4yTyN7SPTLVw&oe=69313EAF)

#### Test

- Click the **Play button** to enter Preview mode.
- Check the Console tab again:

![Screenshot of Console tab with logging message from the attached script, which is working](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489450727_692135363324418_5483864251695886664_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=ln_tBmtZg_QQ7kNvwHjI7fg&_nc_oc=Adnf3rUh_BSsEL0ZBEu83oXvZ8Cp3s9wOJaksMx0aa8EEjYrnC6eDEmccjBHMwGkqaU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AWFvoW06VnXX-YcvhuLVTQ&oh=00_Afjsx2ULxtXIMT_NrChryeLCim21C4e6FYjD9nfBbuYHNw&oe=69311E6F)

Success!

### Connect to onPlayerExitWorld CodeBlockEvent

We have handled the case when a player enters the world. Now, we need to manage player exits.

Within the `start()` function, connect to the `OnPlayerExitWorld` code block event. When this event is emitted, *remove* the player from the playerMap object:

**Note**: The `OnPlayerExitWorld` event does not fire when you exit Preview mode. To work around this limitation, test this event with a second Player in the world who enters and leaves while you observe the console.

```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerExitWorld,
  (player: hz.Player) => {
    this.playerMap.delete(player.id);
    console.log(`deleted player: ${player.name.get()}`);
  },
);
```

### Script breakdown

* The above is very similar to the `onPlayerEnterWorld` event listener.
* In this one, the player is deleted from the Map object.
* A message is delivered to the console.

### Create separate handler functions

To keep things simple, your `connectCodeBlockEvent` bindings should have limited code within the callback function, so you may find it useful to move all logic to a callback event handler. Let’s do this now.

The `handleOnPlayerEnter` and `handleOnPlayerExit` functions are added below:

* These are declared as separate private functions within the class.
* They each take a single parameter: the player object.
* Some quick checks of the playerMap object are added to see if the player already exists before adding or removing.

See below.

### PlayerManager.ts

The finished `PlayerManager.ts` script now looks like the following:

```
import * as hz from 'horizon/core';

class PlayerManager extends hz.Component<typeof PlayerManager> {
  static propsDefinition = {};
  private playerMap: Map<number, hz.Player> = new Map<number, hz.Player>();

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
        this.handleOnPlayerEnter(player);
      },
    );

    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitWorld,
      (player: hz.Player) => {
        this.handleOnPlayerExit(player);
      },
    );
  }

  private handleOnPlayerExit(player: hz.Player): void {
    if (this.playerMap.has(player.id)) {
      this.playerMap.delete(player.id);
      console.log(`deleted player: ${player.name.get()}`);
    }
  }

  private handleOnPlayerEnter(player: hz.Player): void {
    if (!this.playerMap.has(player.id)) {
      this.playerMap.set(player.id, player);
      console.log(`added player ${player.name.get()}`);
    }
  }
}
hz.Component.register(PlayerManager);
```

## Checkpoint

In this module, you:

* Created your first script
  + Reviewed script structures of default script
  + Added a user-defined Map type to store players of the game
* Added an event listener to the `start()` method
  + Added console logging for testing purposes
* Successfully tested execution of the script
* Created event listener for `CodeBlockEvents`
  + `OnPlayerEnterWorld`
  + `OnPlayerExitWorld`

In the next module, we build event and state management in a `GameManager` script.