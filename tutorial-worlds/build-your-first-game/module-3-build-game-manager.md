Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-3-build-game-manager

# Module 3 - Build Game Manager

Let’s focus on the game mechanics.

## Game design requirements

We want our game to have the states and progression like the following:

| **State** | **Description** | **Notes** |
| --- | --- | --- |
| game ready | This state represents a popular situation in games where you have players meeting up before game start, and the game is not keeping track of score yet. | When our game is in the Ready state, the course should not have gems in it. Ready cannot be set if the game state is currently Playing. |
| game play | This state represents when the game has started, and we are keeping score. | In our game, we want players to be able to trigger this state manually. When it is triggered, we start the game, if the game is in the Ready state.  When the Playing state is triggered by a player, the course is then populated with gems. The Playing state can only be set when the current state is Ready. |
| game over | This state represents the end of the game. | The Game Over state should be triggered automatically when players collect all gems.  There is no death state. |

Since all of our game progression and behavior can be represented in a few states, a simple class is useful for managing gamestate.

## Create GameManager.ts

A Game Manager is a common way to manage the state and the flow of a game. Let’s create one now.

**Note**: You can create a new `GameManager.ts` script and follow along or refer to the `GameManager_COMPLETE.ts` included in the tutorial.

- In the desktop editor, click **Scripts** to open the Scripts panel.
- To create a new script, click the **+ icon**.
- Name this new script: `GameManager`.
- Click the context menu next to the new GameManager script and select **Open in External Editor**.

### GameState enum

We start by defining some game states and switching between them to solve for the Game Design requirements that are listed above.

At the very bottom of the `GameManager` file, we must add an enum for our game states:

* Ready
* Playing
* Finished

An **enum** is a named set of values. No other values are accepted for the enum. This enum must be exported so other components have access to this as well. Your file should look like the following:

```vs
import * as hz from 'horizon/core';

class GameManager extends hz.Component<typeof GameManager> {
  static propsDefinition = {};

  start() {}
}

hz.Component.register(GameManager);

export enum GameState {
  'Ready',
  'Playing',
  'Finished',
}
```

### Variables to hold current game state

Inside the `GameManager` Component class and outside of the `start()` function, we need a variable to hold the current game state. Its value should be a reference to the enum:

```vs
private gameState!: GameState;
```

The exclamation point instructs the compiler that this variable can be treated as a non-null value.

Then, inside of our `start()` function, set the initial value of this variable to `Ready`, which is our default state.

```vs
this.gameState = GameState.Ready;
```

### setGameState function

There are many ways to manage and change the state of a game, and many examples of **finite state machines** can be found online. For this game and for many other worlds on Meta Horizon Worlds, a `switch` statement is a good solution.

Below the `start()` function, create a new public function, `setGameState`, which allows us to pass in a `GameState` enum value. Inside the function, add a `switch` statement with all of our enum values:

```vs
public setGameState(state: GameState): void {
  switch (state) {
    case GameState.Ready:
      break;
    case GameState.Playing:
      break;
    case GameState.Finished:
      break;
  }
}
```

The above defines the architecture for how the function operates. The value of the state is passed in as the new state to which to switch. Note that `break;` statements are required to exit the `switch` statement, which means that if one state’s code within the `switch` statement is processed, the other conditionals of the `switch` statement are not.

Now, we need to add the code to the function to manage the switching for each possible value of state:

* `GameState.Ready`
* `GameState.Playing`
* `GameState.Finished`

If someone passes in the current state, we can exit early. We shouldn’t do anything if this happens. Add this above the `switch` statement:

```vs
if (this.gameState === state) {
  return;
}
switch (state) {
```

Use the `switch` statement to update the value of `this.gameState` according to our Game Design requirements:

* The `Ready` state **cannot** be set if the game state is currently `Playing` state.
* The `Playing` state **can only** be set when the current state is `Ready` state.

```vs
public setGameState(state: GameState): void {
  if (this.gameState === state) {
    return;
  }

  switch (state) {
    case GameState.Ready:
      if (this.gameState !== GameState.Playing) {
        this.gameState = GameState.Ready;
      }
      break;
    case GameState.Playing:
      if (this.gameState === GameState.Ready) {
        this.gameState = GameState.Playing;
      }
      break;
    case GameState.Finished:
      this.gameState = GameState.Finished;
      break;
  }
}
```

### Set initial game state

We can use our new function to set the initial game state of the world. In the `start()` function, *replace* the code from earlier with a call to our new function and pass in the default `GameState.Ready` state.

```vs
start() {
    this.setGameState(GameState.Ready);
}
```

### Test game state init

To test our new function, add a new console log after the switch statement, inside of our `setGameState` function:

```vs
console.log(`new game state is: ${GameState[this.gameState]}`);
```

Before we verify it works, we need to attach this script to an **Empty Object**, as we did with our `PlayerManager` script. Create the Empty Object from the **Build menu** and then attach your script.

After that, you can test. Press the **Play button**:

![Screenshot of the highlighted Play button in the toolbar](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/489746733_692135333324421_369311511778975221_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=73I5SmBcxyIQ7kNvwFE_WtW&_nc_oc=AdnvXa8d2b8GYQPG9Cq1hM-dRcCd_X8ftSJz2MglUGFKzPdqh7lUfp1kLhnfKjvHyBc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=t0s4OVInIfudLGrzfUsa6g&oh=00_AfiyD6qa31fLq-JbxaHtqeYNxpoRBTgXTx1J_dJAP1gDUA&oe=692BFB07)

Console results:

![Image of console tab](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481015829_660734606464494_7683964807970467294_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=a0wbJswj1AMQ7kNvwEDmmHq&_nc_oc=AdmXkw6ARCQpGsnjF1STetuWu1Bghfy-XwLUFNAWhtwT52pxtxZ43E6zhCuAb_HJczc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=t0s4OVInIfudLGrzfUsa6g&oh=00_Afj7T5MdBF3uDlvA_PlV7DTU7G_AeA3p9B0s1vHCInxLEA&oe=692C03C1)

Success!

## Checkpoint

In this module, you:

* Created a Game Manager script to manage game progress
* Created a function to switch game states
* Created and exported an enum with game state definitions

Keep rolling!