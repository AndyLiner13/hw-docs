Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/chop-n-pop-sample-world/module-6-player-manager

# Module 6 - Player Manager

The Player Manager system is used for tracking the players in the game as they enter, play, and exit the world. In the code, the Player Manager brokers events that happen in the world or to the player and handles player-specific events such as reloading a weapon or taking a hit.

The `PlayerManager.ts` script contains the primary event listeners and methods for players in the game. It references the LobbySpawnPoint, which is where players are spawned in the game. Later, after the completion of the game, all players in the game are teleported back to the LobbySpawnPoint to play again.

Script dependencies:

* `Behaviour.ts`
* `Events.ts`
* `GameUtils.ts` (for GamePlayers and PlayerData types)
* `HapticFeedback.ts`

## System Components

PlayerManager reference object hosts `PlayerManager.ts`.

**PlayerManager.ts**:

`Awake()`:

* Creates a number of event listeners, some of which map to private functions in the class to handle player-related activities
* Private functions manage:
  + Ammo and taking a hit
  + Moving players from the game back to the lobby (players move themselves into the game area. Gameplay is triggered by breaching a Trigger Zone entity. See [Module 4 - Game Manager](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-4-game-manager).).

When a player enters the world, the player is added to the GamePlayers object list, using the player’s PlayerData. PlayerData includes:

* A reference to the player
* The player’s starting ammo (see playerStartAmmo below)
* The players’ max HP (see playerMaxHp below)

Script properties:

| Property | Description |
| --- | --- |
| matchSpawnPoint | Reference to the SpawnPoint entity in the game where players are teleported from the Lobby.   **Tip**: This value is unused in the tutorial world. If you wanted to teleport players from the Lobby to the location where the match starts, you could create a version of MovePlayerFromMatchToLobby to perform this teleporting. |
| lobbySpawnPoint | Reference to the SpawnPoint entity in the Lobby to which the players are teleported after the game ends.   **Note**: Players entering this single-world game automatically spawn at this SpawnPoint, since it is the only one in the game. |
| playerMaxHp | Maximum number of hit points for each player entering the game. |
| playerStartAmmo | Count of bullets for a player entering the world. |
| ammoPerBox | Count of bullets in each found box in the world. |
| healthPerPotion | Increase in health for each consumed potion. |
| knockbackForceOnHit | The force applied to the player’s avatar when the player is struck by an enemy. |
| hitScream | Audio entity that is played when the player’s avatar is struck by an enemy. |

## How to Deploy

- Create an empty reference object called PlayerManager.
- Attach a script to it, which contains the contents of `PlayerManager.ts`.
- Configure `PlayerManager.ts` script properties, including adding reference to the lobbySpawnPoint and (if needed for teleporting) matchSpawnPoint.
- Bring in script dependencies.

## How to Use

Create a GamePlayers instance in your code:

```
/* We can use our helpful Utils class to easily manage players */
public gamePlayers: GamePlayers = new GamePlayers();
```

Connect event listeners to relevant events in your code in the `Awake()` method. In your world-specific event listeners for onPlayerEnterWorld and onPlayerExitWorld, make sure you reference adding and removing the player from GamePlayers.

## Modifications

### Create MatchSpawnPoint

In this world, players navigate for themselves between the Lobby and the Match areas. Although unused in this world, the matchSpawnPoint script property can be used to create a separation between Lobby and Match space. To use it:

* Create a second SpawnPoint entity in your world, which serves as the matchSpawnPoint.
* Reference this second point as the matchSpawnPoint property in the `PlayerManager.ts` script.
* Create your own movePlayersFromLobbyToMatch private function in the PlayerManager to move all players in the Lobby area to the match.
* You will have to determine the trigger for when the players move to the match. # of players is three? All players move into a Trigger Zone area?

### Modify script properties

You can tune gameplay by modifying some of the script properties on `PlayerManager.ts` for individual players. For example, if you are anticipating lots of enemies and lots of damage, you might experiment with increasing the playerMaxHp and healthPerPotion settings. These values need to be balanced against the number of enemies, their individual damage ratings, and more.

**Tip**: You might also experiment with factoring playerMaxHp against the wavePlayerMultiplier in the EnemyConfigManager.

### Multiple classes

In this case, each player that enters the world is a single class of combatant. In your world, you may need to have multiple classes, each of which has separate capabilities. This can be implemented in many ways. Some ideas:

* Create multiple lobbySpawnPoints and add new players randomly to each one. Any player that enters is automatically assigned the player class and related attributes that have been defined with the `PlayerManager.ts` properties that are associated with the SpawnPoint.
* Use the GamePlayers class to update player attributes based on class selection made in the lobby. For example, you could add playerClass as a property to the player data, which may have some associated attributes for it. When a player steps on the Engineer trigger zone, the player is assigned the Engineer class.

## Summary

You can use this simple Player Manager and its related utility classes to build your own player management system for a multiplayer experience. In this case, all players start in the Lobby together and have the same basic gameplay attributes.

This Player Manager provides a basic framework for more advanced use cases, such as multiple classes, teleporting between Lobby and Match, and more.