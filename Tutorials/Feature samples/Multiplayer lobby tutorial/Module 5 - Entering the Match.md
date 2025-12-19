Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/multiplayer-lobby-tutorial/module-5-entering-the-match

# Module 5 - Entering the Match

## Spawn Points

There are many ways to move or teleport players. While you could simply update their position, the **Spawn Point** gizmo may be better for our case. Spawn Points provide a nice fade-out/fade-in transition that improves teleporting comfort.

Open the **Gizmos** panel and click the **Spawn Point** gizmo. A new spawn point object is added in the world and placed at the bottom of your Hierarchy panel.

<details>
<summary>Image shows a close-up of the open gizmos panel with the Spawn Point gizmo highlighted.</summary>

<p></p>

[Image shows a close-up of the open gizmos panel with the Spawn Point gizmo highlighted.](../../../image_data/155b88f65e6f6c9cb646d81eecd8bc8ac7e9a9a8345099c8ef8826891d399a51.md)

### Overview
This image depicts a user interface element within a software application, specifically a menu or panel showing various options or tools. The interface includes a search bar at the top, followed by a grid layout of icons representing different functionalities.

### Key Elements
- **Search Bar**: Located at the top, spanning across the width of the panel. It has a magnifying glass icon indicating its purpose as a search tool.
- **Menu Header**: Positioned above the search bar, labeled "Gizmos," suggesting a category or section name.
- **Close Button**: A small 'X' icon located to the right of the "Gizmos" label, likely for closing the panel.
- **Grid Layout**: Below the search bar, a grid of icons arranged in rows and columns. Each icon has a distinct color and shape, representing a specific feature or tool.
  - **Top Row Icons**:
    - **Trigger Zone**: Green icon with a hexagon shape and a key symbol.
    - **Mirror**: Pink icon with a mirror-like shape.
    - **Text**: Purple icon with a stylized 'Aa' symbol.
    - **Spawn Point**: Blue icon with a figure walking upwards and downwards, highlighted with a red bounding box.
  - **Middle Row Icons**:
    - **Door**: Pink icon with an arrow pointing into a door.
    - **Environment**: Light blue icon with a sun and cloud symbol.
    - **Dynamic Light**: Yellow icon with a light bulb shape.
    - **Static Light**: White cube icon.
  - **Bottom Row Icons**:
    - **TrailFx**: Orange icon with a line and a dot.
    - **ParticleFx**: Orange icon with a starburst pattern.
    - **Sound Recorder**: Teal icon with a microphone symbol.
    - **Quests**: Orange icon with a star symbol.

### Visual Flow / Relationships
The grid layout is the most prominent visual element, with each icon clearly separated and easily distinguishable. The icons are arranged in a structured manner, with the "Spawn Point" icon being emphasized by a red bounding box, drawing attention to it.

</details>

<p></p>



In the main window, click the new spawn point to select it. In the **Properties** panel:

* Rename this entity to “Match Spawn Point”
* Turn off the **Spawn on start** property, which disables use of the spawn point for players entering the game.

<details>
<summary>Image shows an example of the Properties panel</summary>

<p></p>

[Image shows an example of the Properties panel](../../../image_data/cadf67f9748b3c3d5e5622457e7b9cb306d14093288808e59c32b91b4b0da3ac.md)

### Overview
This image depicts a 3D modeling software interface, specifically showing a 3D model of a humanoid figure within a grid environment. The right side of the interface displays various properties and settings related to the model, while the left side shows the 3D view of the model and its surrounding environment.

### Key Elements
- **Left Panel (3D View)**:
  - **Visual Description**: A 3D model of a humanoid figure with a blue outline.
  - **Location**: Left side of the image.
  - **Contents**: The humanoid figure is positioned within a grid environment, suggesting a coordinate system for placement and orientation.
  - **Visual Styling**: The figure is rendered in a simple, wireframe-like style with blue edges, and the background is a yellow grid with a darker gray floor.

- **Right Panel (Properties)**:
  - **Visual Description**: A vertical panel displaying various properties and settings.
  - **Location**: Right side of the image.
  - **Contents**:
    - **Match Spawn Point**: A button or label indicating a feature to match spawn points.
    - **Debug Data**: Includes "Generic Entity Data" and "Script Instance Data," with specific IDs provided.
    - **Behavior**: Settings such as "Spawn on start," "Set Position Only," "Player Gravity," "Player Speed," "Force HWXS Camera," and "Enable client smoothing."
    - **Attributes**: Displays position, rotation, and scale values for the model.
    - **GameplayTags**: Partially visible at the bottom.
  - **Visual Styling**: The panel has a dark background with white and light gray text, and some elements have a subtle glow effect.

### Visual Flow / Relationships
- **Most Prominent Visually**: The 3D model in the left panel is the most prominent due to its central placement and larger size.
- **Arrows/Connections**: There are no explicit arrows or connections between elements.
- **Spatial Relationships**: The left panel is adjacent to the right panel, with the 3D model in the left panel being the focal point of the interaction.

</details>

<p></p>



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

<details>
<summary>Image shows the script sub-panel</summary>

<p></p>

[Image shows the script sub-panel](../../../image_data/63f940ec9dc5d9e27fb56c0b9fcedfc4fd3a785974738a6ba813cf709b16f35c.md)

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