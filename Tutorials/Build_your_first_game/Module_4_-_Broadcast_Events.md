# Module 4 - Broadcast Events

## Create GameStateChanged Local event to broadcast

First, we must create the event to broadcast. When creating events, you can declare any parameters that should be passed along with the broadcast. In this case, we want to pass our updated game state. At the top of your `GameManager` file, below the import statements, add the following:

```
export const gameStateChanged = new hz.LocalEvent<{state: GameState}>(
  'gameStateChanged');
```

The above defines the event to be a local event that passes along a value called `state` of GameState type, and includes a message: `gameStateChanged`. It is up to the subscriber to respond to it.

## sendLocalBroadcastEvent

To emit (publish) this event, we use the built-in `sendLocalBroadcastEvent` function to pass the current value of `this.gameState`. Add the following line inside of our `setGameState` function, at the very bottom:  `this`.`sendLocalBroadcastEvent`(`gameStateChanged`,` `{`state`:` `this`.`gameState`});` Later, we create components to connect to this event. Note: There are no components listening for this event now, which causes console warnings. This is ok for now.

## Create setGameState Local event and broadcast

We also want to allow other components to send in state change requests. For that, our `GameManager` should listen for broadcast events. Create another new event at the top of the `GameManager` file to pass a `GameState` value:  `export` `const` setGameState `=` `new` hz`.`LocalEvent`<{`state`:` `GameState`}>(`'setGameState'`);` Inside of the `start()` function, connect (subscribe) to this event using the `connectLocalBroadcastEvent` function. When this event is received, call our `setGameState` function with the state that was passed:

```
this.connectLocalBroadcastEvent(setGameState, (data: {state: GameState}) => {
  this.setGameState(data.state);
});
```

Note that the the data passed in the event is captured in the `data` object, whose sole property is `state`. We pass this value to our `setGameState` function. At this point, the `GameManager` file looks like the following:

```
import * as hz from 'horizon/core';

export const gameStateChanged = new hz.LocalEvent<{state: GameState}>('gameStateChanged');
export const setGameState = new hz.LocalEvent<{state: GameState}>('setGameState');

class GameManager extends hz.Component<typeof GameManager> {
  static propsDefinition = {};
  private gameState!: GameState;
  start() {
    this.setGameState(GameState.Ready);
    this.connectLocalBroadcastEvent(setGameState, (data: {state: GameState}) => {
        this.setGameState(data.state);
      });
  }
  public setGameState(state: GameState): void {
    if (this.gameState === state) {
      return;
    }
    switch (state) {
      case GameState.Ready:
        if (this.gameState !== GameState.Playing) {
          this.gameState = GameState.Ready;
        }
        break;
      case GameState.Playing:
        if (this.gameState === GameState.Ready) {
          this.gameState = GameState.Playing;
        }
        break;
      case GameState.Finished:
        this.gameState = GameState.Finished;
        break;
    } // console.log(`new game state is: ${GameState[this.gameState]}`);
    this.sendLocalBroadcastEvent(gameStateChanged, {state: this.gameState});
  }
}

hz.Component.register(GameManager);

export enum GameState {
  'Ready',
  'Playing',
  'Finished',
}
```

## Checkpoint

We now have a simple yet flexible game state manager! Our game state manager can be saved and reused in many games. We have a class that broadcasts an event any time our game state changes. This is a very useful, basic Game Manager setup. In your `GameManager`, you:
• Created events:
  • Local event to track game state
  • Local event to track when state changes
  • Broadcast event to send messages when state changes

In the next module, you use `PlayerManager` and `GameManager` to build the gameplay in your game.
