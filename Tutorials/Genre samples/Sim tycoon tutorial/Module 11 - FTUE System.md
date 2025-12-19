Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/sim-tycoon-tutorial/module-11-ftue-system

# Module 11 - FTUE System

The FTUE is a short tutorial where new players learn the basic game mechanics before teleporting to the main gameplay area. It provides a controlled environment for players to understand the core systems.

## System overview

The FTUE zone contains a simplified store which only sells the green pickaxe. Players must purchase a green pickaxe to activate the teleporter and to mine in the main gameplay area.

<details>
<summary>First time user experience sign</summary>

<p></p>

[First time user experience sign](../../../image_data/02f0f12a4b600feb811a892c6290d62b605f3535a7d3c0a233b6d83cab97df89.md)

### Overview
This image depicts a virtual environment within a game, specifically a shop interface and a character standing in front of a signboard providing first-time user experience (FTUE) information. The scene includes a shop window displaying items, a character model, and a signboard with text.

### Key Elements
- **Shop Window**: Located on the left side of the image, it has a blue background with a yellow border. Contains an item labeled "Green Pickaxe" with a price tag of 300. The item description states, "This pickaxe is perfect for mining Green. Your first purchase." There is a green "PURCHASE" button below the description.
- **Character Model**: Positioned centrally in the image, facing away from the viewer. The character is wearing a brown backpack, a gray shirt, blue jeans, and white shoes.
- **Signboard**: On the right side of the image, it has a wooden frame with a black background and white text that reads, "FIRST-TIME USER EXPERIENCE. The FTUE is a common way to introduce players to the game. Purchase a Green Pickaxe before stepping on the teleporter. See the FTUEZone.ts file to learn more."
- **Background**: The walls are tiled with a yellow and orange pattern. The floor is a light gray tile.
- **User Interface Elements**: At the top left, there are icons for menu, pause, and internal settings. At the top right, there are icons for chat, profile, and settings, along with numerical indicators for various resources (e.g., 30, 0, 0).

### Visual Flow / Relationships
The most prominent visual elements are the shop window and the signboard. The character model is positioned between them, serving as a focal point. Arrows or lines are not present, but the layout suggests a linear reading order moving from the shop window to the character and then to the signboard.

</details>

<p></p>



## How the FTUE works

When a player joins the game world, `World.ts` checks the save game state (`SaveGame.ts`) to determine whether the player has already completed the FTUE. If the player is a first-time user, they are spawned in the FTUE zone.

The following code sample can be found on line 143 of `World.ts`:

```
// If we are First Time Users, port to the intro space
if (!simPlayer.saveGame?.hasCompletedFTUE() && this.props.ftueSpawnPoint) {
  this.props.ftueSpawnPoint.as(hz.SpawnPointGizmo).teleportPlayer(simPlayer.player)
}
```

When the player purchases the green pickaxe, they are marked as having completed the FTUE (even if they do not use the FTUE teleporter). This ensures that the player is spawned into the main play area when they return to this world.

## FTUE flow

The First-Time User Experience follows this sequence:

- **Arrival**: New players spawn in the dedicated FTUE area.
- **Introduction**: Simple UI and guidance introduce the core concepts.
- **Store Tutorial**: Players learn to navigate and use the store interface.
- **First Purchase**: Players must buy their first tool (green pickaxe).
- **Teleporter Activation**: Purchase unlocks the teleporter to the main game area.
- **Completion Tracking**: FTUE completion is saved to prevent repeat tutorials.

## FTUE zone design

### Simplified environment

* **Focused Learning**: Only essential game elements are present
* **Reduced Complexity**: Limited options prevent overwhelming new players
* **Clear Objectives**: Obvious goals that guide player actions
* **Safe Practice**: No penalties for experimentation

### Store configuration

* **Limited Inventory**: Only green pickaxe available for purchase
* **Starting Currency**: Players begin with enough currency for first purchase
* **Clear Instructions**: Visual and text cues guide the purchase process
* **Immediate Feedback**: Purchase completion triggers positive reinforcement

## Integration with save system

### FTUE completion tracking

The FTUE system integrates with the save game system to track completion status:

```
// Check FTUE completion status
hasCompletedFTUE(): boolean {
  return this.gameData.completedFTUE
}

// Mark FTUE as completed
setFTUECompleted(): void {
  this.gameData.completedFTUE = true
  this.save()
}
```

### Spawn point determination

The World system uses FTUE completion status to determine where to spawn players:

* **New Players**: Spawn in FTUE zone for tutorial
* **Returning Players**: Spawn in main gameplay area
* **Manual Override**: Debug options can reset FTUE status for testing

## Customization guide

### Modifying FTUE content

- **Update Store Inventory**: Modify which items are available in the FTUE store.
- **Adjust Starting Resources**: Change initial currency or tool allocations.
- **Customize Instructions**: Update guidance text and visual cues.
- **Modify Requirements**: Change what constitutes FTUE completion.

### Adding FTUE steps

- **Define New Objectives**: Create additional learning goals.
- **Implement Progress Tracking**: Track completion of each step.
- **Update Save Data**: Include new progress flags in save system.
- **Create Visual Feedback**: Provide clear indication of progress.

### FTUE environment design

- **Simplified Layout**: Keep the environment focused and uncluttered
- **Clear Pathways**: Guide player movement with obvious routes
- **Visual Hierarchy**: Use color, size, and positioning to highlight important elements
- **Consistent Theming**: Maintain visual consistency with the main game

## Testing and validation

### FTUE testing checklist

* **New Player Experience**: Test with fresh save data
* **Completion Tracking**: Verify FTUE completion is properly saved
* **Spawn Behavior**: Confirm returning players skip FTUE
* **Store Functionality**: Ensure FTUE store works correctly
* **Teleporter Activation**: Test teleporter unlocking after purchase

### Common issues and solutions

#### Players stuck in FTUE

* Verify your purchase requirements are achievable
* Check that FTUE completion is properly triggered
* Ensure teleporter activation conditions are met

#### FTUE not triggering for new players

* Confirm save game system is properly configured
* Check spawn point assignments in World.ts
* Verify FTUE completion flag is correctly initialized

## Best practices

### Design principles

* **Keep It Simple**: Focus on core mechanics only
* **Progressive Disclosure**: Introduce concepts gradually
* **Clear Feedback**: Provide obvious confirmation of success
* **Forgiving Design**: Allow experimentation without harsh penalties

### Technical implementation

* **Efficient Save Operations**: Minimize save frequency during FTUE
* **Error Handling**: Gracefully handle edge cases and errors
* **Performance Optimization**: Keep FTUE zone lightweight for smooth performance
* **Accessibility**: Ensure FTUE works well on all supported devices

### Player experience

* **Respect Player Time**: Keep FTUE concise and focused
* **Build Confidence**: Start with easy wins to build player confidence
* **Set Expectations**: Clearly communicate what players will learn
* **Smooth Transition**: Provide seamless progression to main gameplay