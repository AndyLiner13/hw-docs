Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/multiplayer-lobby-tutorial/module-5-entering-the-match

Learn

# Module 5 - Entering the Match

## Spawn Points

There are many ways to move or teleport players. While you could simply update their position, the **Spawn Point** gizmo may be better for our case. Spawn Points provide a nice fade-out/fade-in transition that improves teleporting comfort.

Open the **Gizmos** panel and click the **Spawn Point** gizmo. A new spawn point object is added in the world and placed at the bottom of your Hierarchy panel.

![Image shows a close-up of the open gizmos panel with the Spawn Point gizmo highlighted.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488077132_686408257230462_9189278117600569932_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=6PBo1p5xkPUQ7kNvwE40jrC&_nc_oc=Adlyyi7fghSB6y00HrXjBzpRW1lal4W1O1YF_Ftrj5GQ8-i5qX4Kgs9VWLxZKfyJbbM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=D8QAaXSutopnQeA20A3cfg&oh=00_AfjbaruY6xBYpD_k99UWQDygg-761eDR_bUfkA2wl9cNWQ&oe=692F9FD7)

In the main window, click the new spawn point to select it. In the **Properties** panel:

* Rename this entity to “Match Spawn Point”
* Turn off the **Spawn on start** property, which disables use of the spawn point for players entering the game.

![Image shows an example of the Properties panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/488509297_686408233897131_487584987737791949_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=gFdg1gjeLjgQ7kNvwFxoZrH&_nc_oc=AdnztFGYtwgM7h3kBW3mkELersRISz4ytdNCf8jsNNf8U3LLLUGQwocwxLRVnBawNPs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=D8QAaXSutopnQeA20A3cfg&oh=00_AfgnxUhH_tDBVgXI_7m-OgSDVfYwUZwdDbAB59p7_48jHQ&oe=692FC783)

Next, connect the new spawn point to **PlayerManager**, which is managed through script properties.

**Script properties** are defined within a script so that they surface in the Properties panel of the object to which the script is attached. They are a useful way of allowing non-engineers to make changes to gameplay parameters without having to dig into the code.

In this case, the **PlayerManager** script is being updated, which is attached to an empty object in the world. When properties are added to the script, they appear in the Properties panel when the empty object is selected.

In the **PlayerManager** script, replace:

```
// TODO: create a prop for the Match Spawn Point
```

With:

```
matchSpawnPoint: { type: hz.PropTypes.Entity },
```

- Save the script.
- Return to the desktop editor.
- In the main window or the Hierarchy panel, select the **Player Manager Object**.
- In the Properties panel, locate the Script sub-panel.
- Update the new matchSpawnPoint property field with the **Match Spawn Point** entity in the first available field.

![Image shows the script sub-panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487757061_686408200563801_6704182067673252801_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=TZdII6ePT_oQ7kNvwF29kHI&_nc_oc=AdkaYfRyxr-qxYvQnFdLHup0fIsi3hOxQp7bhG9MStWzfH72nk8M94q8jMpWlhV4d-g&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=D8QAaXSutopnQeA20A3cfg&oh=00_AfjdpWIxEjLc0awVw_YeFB2k_jeiuLlU5TnaFEvlkSRGfw&oe=692FAEE9)

## Respawning players in a new location

The final step is to perform the teleporting of players after the countdown completes. We do that using TypeScript.

The provided countdown timer in the **GameManager** script is updating the game state to “**Playing**” when the timer reaches zero, and the **PlayerManager** script is listening for state updates. When the state update to **Playing** is received, the **PlayerManager** should move players.

In the **PlayerManager** script, replace:

```
// TODO: if "fromState" was "Starting", move all players to the match area
```

With:

```
if (fromState === GameState.Starting) {
  this.moveAllLobbyPlayersToMatch();
}
```

The above code calls a provided event handler that will query for all players currently in the lobby and for each player call a new class method: **movePlayerFromLobbyToMatch**. Inside of that method, we must update the code so that our game is moving the player.

Players are moved using a technique called “casting”. **Casting** tells Meta Horizon Worlds to treat an **entity** (an in-game object), which provides access to a more specific Entity API.

For example, if Meta Horizon Worlds is working with an audio file object, it can provide access to functions like Play and Pause. In our case, we want Meta Horizon Worlds to provide access to the **teleportPlayer** method available on Spawn Point entities.

In the **PlayerManager** script, the matchSpawnPoint property is cast as a Spawn Point gizmo. Replace:

```
// TODO: respawn the player at the Match Spawn Point location
```

With:

```
(this.props.matchSpawnPoint as any).as(hz.SpawnPointGizmo).teleportPlayer(player);
```

The keyword **as** casts the property value to the specified Meta Horizon Worlds object type, through which the teleportPlayer method can be accessed.

Now, replace:

```
// TODO: update lobby MatchPlayers
```

with:

```
this.matchPlayers.moveToMatch(player);
```

The above code updates the data sets and ensures the game knows the accurate status of every player.

## Testing

You can now test to see if multiple players can be moved from the lobby into the game.

- Enter the world in Visit mode.
- Have players enter Visit mode, if desired.
- Move to the Start Game platform.
- A countdown timer should display.
- Once the counter reaches 0, everyone should be teleported to the spawn point that you placed in the game space.

## Checkpoint

In this module, you:

* Added a second spawn point to a world
* Learned about casting entities as gizmo types
* Teleported players