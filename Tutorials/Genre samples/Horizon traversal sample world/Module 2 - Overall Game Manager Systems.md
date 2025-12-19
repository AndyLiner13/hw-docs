Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/horizon-traversal-sample-world/module-2-overall-game-manager-systems

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

```
export enum GameState {
  "ReadyForMatch", // Default, nothing is going on, we can start a match
  "StartingMatch", //A match has been started by players
  "PlayingMatch", //A match is ongoing
  "EndingMatch", //A match is ending
  "CompletedMatch", //A match has just been completed
}
```

* PlayerGameStatus enum in GameUtils.ts contains the available player states:

```
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

<details>
<summary>Screenshot of the testing tool gizmos available in the world</summary>

<p></p>

[Screenshot of the testing tool gizmos available in the world](../../../image_data/63b408f7f961cc0677d7d238b9f17fca14fa64e75e2473009d422339a4031464.md)

### Overview
The image depicts a scene from a video game or simulation environment. It includes a debug console window, some interactive elements labeled as "ToggleTrail" and "TeleportToEnd," and a large structure resembling a tower or crane.

### Key Elements
- **Debug Console Window**: Located at the top-left part of the image. It has a dark background with light text and buttons. The title reads "Debug Console." There are three buttons labeled "Start world," "Stop world," and "Reset world." Below the buttons, there are two warning messages displayed.
- **Interactive Elements**: Two green cubes with yellow interiors are placed on the ground near the center of the image. Above them, the text "ToggleTrail" and "TeleportToEnd" is written in white, suggesting these are interactive elements or commands.
- **Large Structure**: A large orange structure resembling a tower or crane is situated on the right side of the image. It has a complex, geometric design with multiple interconnected beams.

### Visual Flow / Relationships
- **Most Prominent Element**: The debug console window is the most prominent due to its central placement and larger size compared to the other elements.
- **Arrows/Connectors**: There are no arrows or connectors visible in the image.
- **Spatial Relationships**: The debug console is positioned at the top-left, while the interactive elements are in the center, and the large structure is on the right. The interactive elements are slightly below the debug console.

</details>

<p></p>



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