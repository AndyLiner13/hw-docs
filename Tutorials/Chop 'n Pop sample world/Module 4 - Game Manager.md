Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-4-game-manager

Learn

# Module 4 - Game Manager

The Game Manager system provides a centralized means of managing the events and actions of the game.

In general, Game Manager systems are responsible for initiating gameplay and completing the end-of-game steps. It can also serve as a repository for other significant game events, such as:

* Completion of game levels
* Changes in player level
* Player joining and leaving events

**Note**: This Game Manager begins gameplay based on at least one player crossing into a Trigger Zone. If your game begins as soon as a player enters the world, additional modifications are required. See “Modifications” below.

In Chop ‘N Pop: Graveyard Bash, the Game Manager system handles two simple events:

* **Game start**:
  + In many worlds, gameplay begins as soon as a player enters the world. In Chop ‘N Pop, players are allowed to gather in a Lobby area and arm themselves before gameplay begins.
  + When one of the players enters a trigger, gameplay begins.
* **Game over**:
  + When all waves defined in the `EnemyWaveManager.ts` script have been completed, the event triggering the GameOver sequence is fired. All players are returned to the Lobby, and a new set of waves is initiated.

**Note**: When a player dies, the `PlayerManager.ts` moves the player back to the Lobby and respawns the player.

## System Components

* Start Combat Trigger trigger zone hosts `GameTrigger.ts`
  + When this trigger zone is breached, the first wave of enemies is spawned.
  + Script dependencies:
    - `Behavior.ts`
    - `EnemyWaveManager.ts`
    - `Events.ts`
    - `PlayerManager.ts`
* Game Manager reference object hosts `GameManager.ts`
  + Script connects to the FightEnded event.
  + When the event is received, the GameOver function is executed.
  + Script dependencies:
    - `Behavior.ts`
    - `Events.ts`
    - `PlayerManager.ts`
* Events: The following events are used in this system:
  + FightStarted: when received by `EnemyWaveManager.ts`, this event launches the first wave.
  + FightEnded: when received by `GameManager.ts`, this event launches the GameOver function.

## How to Deploy

- Copy content of `GameManager.ts` and `GameTrigger.ts` into scripts in your own world.
- Attach `GameManager.ts` to a GameManager reference object.
  - **Tip**: If your world is an FBS world, you can create an asset template directly from the GameManager reference object in your clone of this world. This method does not work for non-FBS worlds.
- Create a Trigger Zone object in your world that is used to begin gameplay.
- Attach `GameTrigger.ts` to the Trigger Zone object.
- Copy content of all dependent scripts into corresponding scripts in your world.

## How to Use

After the scripts and entities have been deployed in your world, you can review the scripts to identify any modifications you need to make.

### GameManager.ts

This script handles the Game Over event. In the game logic, this event is triggered only when all three waves have been defeated.

The handleGameOver function performs the following:

* Shows a 3-second popup display to all players, announcing end of game and return to lobby
* Sends the GameReset event, which is received by:
  + `EnemyWaveManager.ts`
  + `WorldAmmoSpawner.ts`
* Calls the `ResetAllPlayers()` function in the PlayerManager

### GameTrigger.ts

This script launches gameplay, by triggering the Enemy Wave Manager. In the Script properties of `GameTrigger.ts`, you specify the entity that hosts the `EnemyWaveManager.ts` script.

The `start()` method of this script defines a listener for when the first player enters the world, after which the following occurs:

* When the first player triggers:
  + Create the waveManager variable, which is defined through the Behavior Finder to locate the `EnemyWaveManager.ts` script and retrieve the value of the waveManager script property.
  + This reference is passed as a parameter in the StartWaveGroup event to the receiving script to kick off the first wave of enemies.
* When the first and subsequent player trigger:
  + The player that triggered the trigger zone is moved to the inMatch list of players.

## Modifications

### Change Timer and Message

In `GameManager.ts`, you can change the length of the timer, currently set at 3000 milliseconds, and the text string displayed to players when the game has ended.

Additional styling modifications are possible on the popup UI.

```
this.world.ui.showPopupForEveryone(text: string | i18n_utils.LocalizableText, displayTime: number, options?: Partial<PopupOptions>);
```

Options:

```
export declare type PopupOptions = {
    position: Vec3;
    fontSize: number;
    fontColor: Color;
    backgroundColor: Color;
    playSound: boolean;
    showTimer: boolean;
};
```

### Trigger on player enters world

If your world does not have a Lobby, you can modify the system to trigger the FightStarted event when the first player enters the world.

From `GameTrigger.ts`, move the code that is inside the CodeBlockEvent listener to a onPlayerEntersWorld CodeBlockEvent listener in the `GameManager.ts` script. You must also add a waveManager property to the `GameManager.ts` script.

## Summary

This module covered the Game Manager system for Chop ‘N Pop: Graveyard Bash. This system is quite simple, handling two primary events: GameStart and GameOver.

Note that GameStart is handled through a Trigger Zone, which effectively enables the creation of a Lobby and a separate gameplay area that is triggered by the Trigger Zone.

It does provide the framework for you to expand and enhance to meet more complex needs. You can modify the system to add leveling, room management, and more.