Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/multiplayer-lobby-tutorial/module-6-completing-the-match-and-returning-players

# Module 6 - Completing the Match and Returning Players

The provided match environment has a very simple game setup. First person to run to the target wins. After the game ends, all players in the match should teleport back to the lobby.

Let’s wrap up our multiplayer module by building the functionality to handle the end of the match.

## Game Over!

The provided course has an **End Game Trigger Gizmo** with an attached script named **EndGameTrigger**. Inside of this script we need to let our game know when someone has won the game.

<details>
<summary>Screenshot of the End Game trigger zone in the desktop editor</summary>

<p></p>

[Screenshot of the End Game trigger zone in the desktop editor](../../../image_data/c541fce5d98519e361e853ec35657237ded0aabcecf5c0c4b802472ceafa8ba1.md)

### Overview
This image depicts a 3D modeling software interface, specifically showing a scene with a cube and a grid overlay. The right side of the screen displays various properties and settings related to the selected object.

### Key Elements
- **Scene View**: Located on the left side, showing a 3D cube with a grid overlay. The cube has a transparent green face and a solid orange face with a white square in the center. There are red, blue, and green arrows indicating the axes of rotation.
- **Cube**: A 3D cube with a transparent green face and a solid orange face with a white square in the center. The cube is positioned within a larger yellow grid environment.
- **Grid Overlay**: A light gray grid overlaying the scene view, providing a reference for positioning and scaling.
- **Properties Panel**: On the right side, displaying various properties of the selected object. It includes sections for Debug Data, Generic Entity Data, Script Instance Data, Behavior, Attributes, GameplayTags, and EndGameTrigger (script).

### Visual Flow / Relationships
The most prominent visual element is the 3D cube in the scene view. The cube is the central focus, with the grid overlay providing context. The properties panel on the right provides additional information about the cube, with sections arranged vertically. The arrows in the scene view indicate the axes of rotation, suggesting interactivity with the model.

</details>

<p></p>



In the **EndGameTrigger** script, replace:

```
// TODO: broadcast the "gameOver" event
```

With:

```
this.sendLocalBroadcastEvent(Events.gameOver, {});
```

From here, our remaining steps are very similar to Module 5.

The **GameManager** script will receive the “ **gameOver** ” broadcast, and when it does we want it to set the game state to “ **Ending** ”.

To do that, replace:

```
// TODO: update the game state to "Ending"
```

With:

```
this.setGameState(GameState.Ending);
```

Before we move players back to the lobby, remember it’s best to alert users that they are about to teleport.

When the game state changes to **Ending**, our **GameManager** will show another Popup UI message to all players in the **handleGameOver** event handler. This time, instead of 3 messages for 1 second each, our game will show 1 message for 3 seconds. See **handleGameOver()** in the **GameManager** script:

```
this.world.ui.showPopupForEveryone(
  `Game Over! \n Teleporting back to Lobby`,
  3,
);
```

After 3 seconds, the **handleGameOver** method will update the game state once again, this time to the **Finished** state.

## Teleporting Players back to the Lobby

The **PlayerManager** script is already listening to state change events and will receive this event. When the **Finished** state is received, display a message and move all players back to the lobby.

Players that are returned to the lobby are delivered to the **Lobby Spawn Point**, which is already in the world and is where the game began.

We need our PlayerManager to know about the Lobby Spawn Point object. We’ll do that with a script property just like we did early with the other spawn point.

In the desktop editor, in the main window, select the **Player Manager****Object**. In the **Script properties**, update the new prop field with the “ **Lobby Spawn Point** ” object.

In the **PlayerManager** script, replace:

```
// TODO: create a prop for the Lobby Spawn Point
```

With:

```
lobbySpawnPoint: { type: hz.PropTypes.Entity },
```

And then, using the desktop editor UI, connect the Lobby Spawn Point game object with the new prop on Player Manager.

<details>
<summary>Screenshot of adding the lobby spawn point entity to the Properties panel for the PlayerManager</summary>

<p></p>

[Screenshot of adding the lobby spawn point entity to the Properties panel for the PlayerManager](../../../image_data/93158c0daddb616e441d4a5ad58e6d8f4c788a1526e4a8524045ca27ab3f0989.md)

### Overview
This image depicts a section of a user interface, likely from a game development tool or engine, showing a script named "PlayerManager". It includes two entries labeled "matchSpawnPoint" and "lobbySpawnPoint", each with a corresponding icon and a partially obscured label.

### Key Elements
- **Visual description**: A collapsed section header with a disclosure triangle.
- **Location**: Top-left corner of the image.
- **Contents**: The text "PlayerManager (script)".
- **Visual styling**: Dark gray background, white text, red border highlighting the entire section.

- **Visual description**: A button labeled "Attach script".
- **Location**: Bottom-center of the image.
- **Contents**: The text "Attach script".
- **Visual styling**: Light gray background, white text.

- **Visual description**: Two entries under the header.
- **Location**: Below the header.
- **Contents**: "matchSpawnPoint" and "lobbySpawnPoint".
- **Visual styling**: Dark gray background, white text, light gray icons next to each entry.

</details>

<p></p>



In the **PlayerManager** script, replace:

```
// TODO: respawn the player at the Lobby Spawn Point location
```

With:

```
this.props.lobbySpawnPoint?.as(hz.SpawnPointGizmo)?.teleportPlayer(player);
```

And then update our data sets. Replace:

```
// TODO: update match MatchPlayers
```

With:

```
this.matchPlayers.moveToLobby(player);
```

## Resetting Game State

The last thing for us to do is to put the game back in the Ready game state, so that another match can be started.

Our Player Manager knows when all players have moved back to the lobby, so this is the perfect place to broadcast a new game state update.

In the **PlayerManager** script, replace:

```
// TODO: reset the world back to the original game state
```

With:

```
this.sendLocalBroadcastEvent(Events.setGameState, {newState: GameState.Ready});
```

Our GameManager script will receive this broadcast event and update the game state to the Ready state.

## Testing

Enter the world in **Visit** mode, you should now be able to play the game over and over again.

## Checkpoint

Congratulations, your multiplayer game is complete!

## Extending This World

This foundation can easily be extended to support some alternative and extra features.

* Only teleport players standing on the Start platform to the match, instead of all lobby players
* Don’t start a match unless there are a certain number of players in the lobby
* Have new players to the world automatically join a match in progress instead of waiting
* Cancel the Start Game countdown if a player jumps off the Start platform
* Message the name of the winning player to all match players
* Automatically declare a winner if other players leave and there is only one left

These are just a few ideas. Hopefully, this tutorial makes it easier for you to build your next multiplayer game in Meta Horizon Worlds using Typescript.