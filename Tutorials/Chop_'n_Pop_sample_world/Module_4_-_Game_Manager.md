# Module 4 - Game Manager
...
## System Components


• Start Combat Trigger trigger zone hosts `GameTrigger.ts`
  • When this trigger zone is breached, the first wave of enemies is spawned.
  • Script dependencies:
   • `Behavior.ts`
   • `EnemyWaveManager.ts`
   • `Events.ts`
   • `PlayerManager.ts`
• Game Manager reference object hosts `GameManager.ts`
  • Script connects to the FightEnded event.
  • When the event is received, the GameOver function is executed.
  • Script dependencies:
   • `Behavior.ts`
   • `Events.ts`
   • `PlayerManager.ts`
• Events: The following events are used in this system:
  • FightStarted: when received by `EnemyWaveManager.ts`, this event launches the first wave.
  • FightEnded: when received by `GameManager.ts`, this event launches the GameOver function.

  
...
...
# Module 4 - Game Manager
...
## How to Deploy


1. Copy content of `GameManager.ts` and `GameTrigger.ts` into scripts in your own world.
2. Attach `GameManager.ts` to a GameManager reference object.
  1. Tip: If your world is an FBS world, you can create an asset template directly from
the GameManager reference object in your clone of this world. This method does
not work for non-FBS worlds.
3. Create a Trigger Zone object in your world that is used to begin gameplay.
4. Attach `GameTrigger.ts` to the Trigger Zone object.
5. Copy content of all dependent scripts into corresponding scripts in your world.

  
...
...
# Module 4 - Game Manager
...
## How to Use
...
### GameManager.ts

 This script handles the Game Over event. In the game logic, this event is
triggered only when all three waves have been defeated. The handleGameOver function performs the following:
• Shows a 3-second popup display to all players, announcing end of game and return
to lobby
• Sends the GameReset event, which is received by:
  • `EnemyWaveManager.ts`
  • `WorldAmmoSpawner.ts`
• Calls the `ResetAllPlayers()` function in the PlayerManager

  
...
...
# Module 4 - Game Manager
...
## How to Use
...
### GameTrigger.ts

 This script launches gameplay, by triggering the Enemy Wave Manager. In the
Script properties of `GameTrigger.ts`, you specify the entity that hosts the `EnemyWaveManager.ts` script. The `start()` method of this script defines a listener for when the first player enters the
world, after which the following occurs:
• When the first player triggers:
  • Create the waveManager variable, which is defined through the Behavior Finder to
locate the `EnemyWaveManager.ts` script and retrieve the value of the waveManager script property.
  • This reference is passed as a parameter in the StartWaveGroup event to the
receiving script to kick off the first wave of enemies.
• When the first and subsequent player trigger:
  • The player that triggered the trigger zone is moved to the inMatch list of
players.

  
...
...
# Module 4 - Game Manager
...
## How to Use

 After the scripts and entities have been deployed in your world, you can review
the scripts to identify any modifications you need to make.  
### GameManager.ts
...
### GameTrigger.ts
...
...
# Module 4 - Game Manager
...
## Modifications

  
### Change Timer and Message

 In `GameManager.ts`, you can change the length of the timer, currently set at 3000 milliseconds,
and the text string displayed to players when the game has ended. Additional styling modifications are possible on the popup UI.  `this`.`world`.`ui`.`showPopupForEveryone`(`text`:` `string` `|` i18n_utils`.`LocalizableText`,`
 displayTime`:` number`,` options`?:` `Partial`<`PopupOptions`>);` Options:  
```
export declare type PopupOptions = {
    position: Vec3;
    fontSize: number;
    fontColor: Color;
    backgroundColor: Color;
    playSound: boolean;
    showTimer: boolean;
};
```
  
...
...
# Module 4 - Game Manager
...
## Modifications
...
### Trigger on player enters world

 If your world does not have a Lobby, you can modify the system to trigger the
FightStarted event when the first player enters the world. From `GameTrigger.ts`, move the code that is inside the CodeBlockEvent listener to a
onPlayerEntersWorld CodeBlockEvent listener in the `GameManager.ts` script. You must also add a waveManager property to the `GameManager.ts` script.  
...
...
# Module 4 - Game Manager
...
## Modifications

  
### Change Timer and Message
...
### Trigger on player enters world
...
...
# Module 4 - Game Manager
...
## Summary

 This module covered the Game Manager system for Chop ‘N Pop: Graveyard Bash.
This system is quite simple, handling two primary events: GameStart and GameOver. Note that GameStart is handled through a Trigger Zone, which effectively enables
the creation of a Lobby and a separate gameplay area that is triggered by the
Trigger Zone. It does provide the framework for you to expand and enhance to meet more complex
needs. You can modify the system to add leveling, room management, and more.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
...
...
# Module 4 - Game Manager
...
## Summary
...
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 4 - Game Manager
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fchop-n-pop-sample-world%2Fmodule-4-game-manager%2F)
...
# Module 4 - Game Manager

 The Game Manager system provides a centralized means of managing the events and
actions of the game. In general, Game Manager systems are responsible for initiating gameplay and
completing the end-of-game steps. It can also serve as a repository for other
significant game events, such as:
• Completion of game levels
• Changes in player level
• Player joining and leaving events

 Note: This Game Manager begins gameplay based on at least one player crossing into a
Trigger Zone. If your game begins as soon as a player enters the world,
additional modifications are required. See “Modifications” below. In Chop ‘N Pop: Graveyard Bash, the Game Manager system handles two simple
events:
• Game start:
  • In many worlds, gameplay begins as soon as a player enters the world. In Chop ‘N
Pop, players are allowed to gather in a Lobby area and arm themselves before
gameplay begins.
  • When one of the players enters a trigger, gameplay begins.
• Game over:
...
...
# Module 4 - Game Manager
...
  • When all waves defined in the `EnemyWaveManager.ts` script have been completed, the event triggering the GameOver sequence is
fired. All players are returned to the Lobby, and a new set of waves is initiated.

 Note: When a player dies, the `PlayerManager.ts` moves the player back to the Lobby and respawns the player.  
## System Components
...
## How to Deploy
...
## How to Use
...
## Modifications
...
## Summary
...
## Additional Links
...
      Learn
# Module 4 - Game Manager
...
