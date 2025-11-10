Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/horizon-traversal-sample-world/module-2-overall-game-manager-systems

# Module 2 - Overall Game Manager Systems

This section provides overviews of the game manager systems, which manage the game state, matchmaking, race and environmental sound manager.

**Note**: All of these systems send and receive events, which are defined in Events.ts.

## GameManager.ts

Controls the overall game state of the world, listening to events occurring and transiting the game state accordingly.

**Notes**:

* preStart() - defines methods and listeners for player management
* start() - no code
* Includes a set of private functions to manage transitions between states of the game, including the general function transitGameState(), which is called from the other private functions.
* dispose() - when the GameManager is destroyed, the game is reset.
  **Tip**: Use the dispose() method in your code to safely remove assets from the game and free resources.

## MatchManager.ts

Moves players between match states, based on the match state, and teleports them around as needed.

**Notes**:

* GameState enum in GameUtils.ts contains the available game states:

```vs
export enum GameState {
  "ReadyForMatch", // Default, nothing is going on, we can start a match
  "StartingMatch", //A match has been started by players
  "PlayingMatch", //A match is ongoing
  "EndingMatch", //A match is ending
  "CompletedMatch", //A match has just been completed
}
```

* PlayerGameStatus enum in GameUtils.ts contains the available player states:

```vs
export enum PlayerGameStatus {
  "Lobby",
  "Standby",
  "Playing",
}
```

* playerMap map object contains a unique identifier and a reference to PlayerData object, which includes:
  + A reference to the player
  + A reference to the players PlayerGameStatus
* preStart(): Creates event listeners for the following global events, which are handled locally through private functions:
  + onPlayerEnterWorld and onPlayerExitWorld
  + On change of game state, which sends the fromState and toState to the local handler.
  + On player registering for a match or de-registering for a match
  + On world reset
* start(): a set of functions, including:
  + getPlayerWithStatus(): returns an array of all of the players with the same status. This is key for setting up a match.
  + handleGameStateTransit(): manages game state transitions, including start and finish of the match.
    - Calls transferAllPlayersWithStatus() for setting up matches.
  + teleportPlayersWithStatusToSpawnPoint(): transfers all players with a specified status using the SpawnPoint gizmo, which is less disruptive than moving their location directly.
* dispose(): runs the local reset() function to clear the player map and set the game state to ReadyForMatch.

## RaceManager.ts

Manages the race itself, setting the race up and completing it.

**Notes**:

* handleOnMatchStart() - creates an array of objects of players who are participating in the race.
  + this.raceIntervalUpdateID() - checks and updates status of the race every 500ms(modifiable)
* Handlers for various race states
* initCurve() - creates an array of checkpoints based on Vec3 location.
* updateAllRacerCurveProgress() - updates location along the race path for all participants in the race

## EnvironmentalSoundManager.ts

Controls the playing of sounds that are heard by all players throughout the world, based on the game state, such as the countdown to race start.

**Notes**:

* Audio assets are attached as properties to the entity hosting the environment sound manager. These properties must be specified by a designer.
* Creates listeners for the gameplay events defined in Events.ts.
  + When the event is triggered, the background audio stops playing, and the audio for the new gameplay state begins playing.
  + The listener for Events.onGameStartTimeLeft triggers playback of the countdown until game start, while Events.onGameEndTimeLeft triggers another audio countdown until the game ends.

## Testing Tools

Behind the back wall of the starting area, you can find the following tools.

![Screenshot of the testing tool gizmos available in the world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452702340_512509544620335_2067269565763808907_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=MuoAXRQRJ8EQ7kNvwE3W0fZ&_nc_oc=AdnrLWSdzNiHnFNd1jl3w4_qXQAsBbXZGhtkmFf92hULE61EaLm6-BxdgKEa86p0yzA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=1xqGBOc4W_u9zFI8UobV8Q&oh=00_AfiT63C_lQYDYIp344XP_ViMYK2pVn4VOu8jN6GBmZHpvA&oe=692BDAB8)

**Tip**: Move these tools into the gameplay area to take advantage of them.

### Debug Console

The Debug Console displays console messages in-game, which are normally available through the Console tab in the desktop editor. This console is useful for debugging issues in VR.

**Tip**: The Debug Console gizmo is available for inclusion in any world through the **Build > Gizmos** menu in the desktop editor.

### Toggle Trail tool

When this tool is placed in the field of play, a player can run across it to toggle the display of the happy path trail through the game.

This tool is composed of:

* Trigger zone
  + Attached script: ToggleTrailTrigger.ts
* Square (visual marker)
* Text label

### TeleportToEnd tool

When this tool is placed in the field of play, a player can run across it to jump to the end of the course, which is useful if you are debugging or exploring the far end of the trail.

This tool is composed of:

* Trigger zone
  + Attached script: TeleportToSpawnPointTrigger.ts
* Square (visual marker)
* Text label