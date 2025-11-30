Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/avatar-override-tutorial-world/module-5-player-manager

# Module 5 - Player Manager

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/creator-monetization-partner-program).

The Player Manager system is responsible for tracking players in the game as they enter, play, and exit the world. It manages player positioning and teleportation across different game areas, such as lobby, match, and showcase.

The `PlayerManager.ts` script contains the primary event listeners and methods for players in the game. It references various SpawnPoint entities, including LobbySpawnPoint, MatchSpawnPoint, ShowcaseFloorSpawnPoint, and ShowcaseStageSpawnPoint, which are used to teleport players to their respective positions during different stages of the game. After the completion of the game, all players are teleported back to the LobbySpawnPoint.

## Script Dependencies

* `GameUtils.ts` (Event definitions and broadcasting)

## System Components

PlayerManager reference object hosts `PlayerManager.ts`.

### PlayerManager.ts

* `preStart():`
  + Creates a number of event listeners, some of which map to private functions in the class to handle various game events.
  + Private functions manage:
    - Handling game state changes
    - Managing player join during game events
    - Processing showcase position events
    - Handling voting results from VotingManager

When a player enters the world, they are added to the MatchPlayers object list using their PlayerData. The PlayerData includes:

* A reference to the player.
* Other relevant player data used for tracking and management purposes.

## Script Properties

| Property | Description |
| --- | --- |
| debugLogs | Toggles debug logs on the console. |
| matchSpawn | Reference to the SpawnPoint entity in the game where players are teleported from the Lobby. |
| lobbySpawn | Reference to the SpawnPoint entity in the Lobby to which players are teleported after the game ends. |
| showcaseFloorSpawn | Reference to the SpawnPoint entity for the showcase floor position. |
| showcaseStageSpawn | Reference to the SpawnPoint entity for the showcase stage position. |

## How to Deploy

- Create an empty reference object called PlayerManager.
- Attach a script to it, which contains the contents of `PlayerManager.ts`.
- Configure `PlayerManager.ts` script properties, including adding references to additional spawns or game states (if needed).
- Bring in script dependencies.

## How to Use

To utilize the Player Manager system, follow these steps:

* **Create a PlayerManager Instance**: Ensure that you have a PlayerManager instance in your scene.
* **Configure Script Properties**: Adjust the script properties on `PlayerManager.ts` as needed to fit your game’s requirements.

## Modifications

### **Add Another Phase or Game Mode**

To add another phase or game mode, you could modify the `PlayerManager.ts` script to include new game states or logic for handling different gameplay scenarios.

* Update Game State Management: Extend the `setGameState()` method to accommodate additional game states.
* Implement New Game Logic: Create new methods or modify existing ones to handle the added phase or game mode.

### **Customize Player Showcase**

You can customize the player showcase feature by modifying the `showcaseCurrentPlayer()` method or adding new functionality to the `handleShowcaseInitialized()` method.

* Modify Showcase Behavior: Update the `showcaseCurrentPlayer()` method to change how players are showcased (e.g., alter the timer duration or add new effects).
* Add Custom Showcase Logic: Introduce new logic in `handleShowcaseInitialized()` to handle different showcase scenarios or player configurations.

### **Adjust Timer Settings**

Tune gameplay by adjusting timer settings on `PlayerManager.ts`. For example, consider modifying properties related to countdown durations or showcase timing.

* Update Timer Properties: Modify the **roundStartCountdownSeconds**, **roundDurationSeconds**, or **playerShowcaseDurationSeconds** properties to adjust the corresponding timers.
* Balance Gameplay: Experiment with different timer values to achieve a balanced gameplay experience.