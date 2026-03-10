---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/avatar-override-tutorial-world/module-5-player-manager
---

# [Module 5 - Player Manager](#module-5---player-manager)

> [!Note]
>
> You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

The Player Manager system is responsible for tracking players in the game as they enter, play, and exit the world. It manages player positioning and teleportation across different game areas, such as lobby, match, and showcase.

The `PlayerManager.ts` script contains the primary event listeners and methods for players in the game. It references various SpawnPoint entities, including LobbySpawnPoint, MatchSpawnPoint, ShowcaseFloorSpawnPoint, and ShowcaseStageSpawnPoint, which are used to teleport players to their respective positions during different stages of the game. After the completion of the game, all players are teleported back to the LobbySpawnPoint.

## [Script Dependencies](#script-dependencies)

- `GameUtils.ts` (Event definitions and broadcasting)

## [System Components](#system-components)

PlayerManager reference object hosts `PlayerManager.ts`.

### [PlayerManager.ts](#playermanagerts)

- `preStart():`
  - Creates a number of event listeners, some of which map to private functions in the class to handle various game events.
  - Private functions manage:
    - Handling game state changes
    - Managing player join during game events
    - Processing showcase position events
    - Handling voting results from VotingManager

When a player enters the world, they are added to the MatchPlayers object list using their PlayerData. The PlayerData includes:

- A reference to the player.
- Other relevant player data used for tracking and management purposes.

## [Script Properties](#script-properties)

| Property           | Description                                                                                          |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| debugLogs          | Toggles debug logs on the console.                                                                   |
| matchSpawn         | Reference to the SpawnPoint entity in the game where players are teleported from the Lobby.          |
| lobbySpawn         | Reference to the SpawnPoint entity in the Lobby to which players are teleported after the game ends. |
| showcaseFloorSpawn | Reference to the SpawnPoint entity for the showcase floor position.                                  |
| showcaseStageSpawn | Reference to the SpawnPoint entity for the showcase stage position.                                  |

## [How to Deploy](#how-to-deploy)

1. Create an empty reference object called PlayerManager.
2. Attach a script to it, which contains the contents of `PlayerManager.ts`.
3. Configure `PlayerManager.ts` script properties, including adding references to additional spawns or game states (if needed).
4. Bring in script dependencies.

## [How to Use](#how-to-use)

To utilize the Player Manager system, follow these steps:

- **Create a PlayerManager Instance**: Ensure that you have a PlayerManager instance in your scene.
- **Configure Script Properties**: Adjust the script properties on `PlayerManager.ts` as needed to fit your game’s requirements.

## [Modifications](#modifications)

### [**Add Another Phase or Game Mode**](#add-another-phase-or-game-mode)

To add another phase or game mode, you could modify the `PlayerManager.ts` script to include new game states or logic for handling different gameplay scenarios.

- Update Game State Management: Extend the `setGameState()` method to accommodate additional game states.
- Implement New Game Logic: Create new methods or modify existing ones to handle the added phase or game mode.

### [**Customize Player Showcase**](#customize-player-showcase)

You can customize the player showcase feature by modifying the `showcaseCurrentPlayer()` method or adding new functionality to the `handleShowcaseInitialized()` method.

- Modify Showcase Behavior: Update the `showcaseCurrentPlayer()` method to change how players are showcased (e.g., alter the timer duration or add new effects).
- Add Custom Showcase Logic: Introduce new logic in `handleShowcaseInitialized()` to handle different showcase scenarios or player configurations.

### [**Adjust Timer Settings**](#adjust-timer-settings)

Tune gameplay by adjusting timer settings on `PlayerManager.ts`. For example, consider modifying properties related to countdown durations or showcase timing.

- Update Timer Properties: Modify the **roundStartCountdownSeconds**, **roundDurationSeconds**, or **playerShowcaseDurationSeconds** properties to adjust the corresponding timers.
- Balance Gameplay: Experiment with different timer values to achieve a balanced gameplay experience.

