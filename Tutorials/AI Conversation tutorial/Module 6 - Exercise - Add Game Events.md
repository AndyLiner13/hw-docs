Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-6-exercise-add-game-events

Learn

# Module 6 - Exercise - Add Game Events

This exercise shows you how to add custom game events to trigger NPC responses using the Conversation API.

## Exercise overview

The `NpcManager` class is a simple component that primarily handles the string instructions and descriptions from the Sim Tycoon game code, which is then handed to the NPC conversation API. We recommend you learn by experimenting with the various strings and API calls.

You may need to tweak various parts of `NpcManager` which call `elicitResponse` in order to manage multiple AI NPCs and their responses. For example, you may want your AI NPCs to talk more or less.

A simple search for `NpcManager` will reveal where game code hooks to this `NpcManager` code.

## Adding a player score event

Below is an example of scripting using the Conversation API to add a new game event that responds to player scoring:

### Step 1: Add the event handler function

- Add this function to the `NpcManager` class:

  ```
    /**
      * Called when a player scores
      * @param player - The user in question
      * @param score- Their new score
      */
     static onPlayerSetScore(player : hz.Player, score: number) {
       for(let i = 0; i < NpcManager.gizmos.length; ++i) {
          const gizmo = NpcManager.gizmos[i];
          gizmo.conversation.setDynamicContext(`player_${player.name.get()}_score`, `Player ${player.name.get()} has a current score of ${score}`);
          gizmo.conversation.addEventPerception(`Player ${player.name.get()} just scored`);
         }
         NpcManager.ellicitClosestGizmo(player, NpcManager.gizmos, `Congratulate player ${player.name.get()} on their score`);
       }
  ```

### Step 2: Hook the event to game logic

- Add this line of code to `SimPlayer.setPlayerScore` function in `SimPlayer.ts`:

```
    NpcManager.onPlayerSetScore( this.player, newScore );
```

### Step 3: Test and experiment

- Save the code and play the world. Experiment with which calls and which parameters are used in `onPlayerSetScore` to see the various ways the Conversation API will react to these inputs.

## Understanding the code

This example demonstrates three key concepts:

* **setDynamicContext**: Updates the NPC’s understanding of the player’s current score
* **addEventPerception**: Logs the scoring event for the NPC to remember
* **ellicitClosestGizmo**: Triggers an immediate response from the closest NPC

## Experiment with different approaches

Try modifying the example code to:

* Change the congratulatory message
* Only trigger responses for certain score thresholds
* Have different NPCs respond differently based on their personalities
* Add delays or conditions to the responses