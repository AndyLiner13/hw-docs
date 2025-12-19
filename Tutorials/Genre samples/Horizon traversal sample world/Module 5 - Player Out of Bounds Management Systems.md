Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/horizon-traversal-sample-world/module-5-player-out-of-bounds-management-systems

# Module 5 - Player Out of Bounds Management Systems

The Out of Bounds (OOB) management system for the player consists of 1) a manager script and 2) a respawning script.

* **Manager script**: The manager script determines if a player is out of bounds by checking to see if a perimeter trigger has been breached and/or the player has dropped too low on the Y-axis (fallen off a building). While it is possible to have only OOB areas or Y-axis check, we do both as a failsafe.
  **Note**: The PlayerOOBManager.ts script is attached to the empty object (gray box) in the following screenshot.
* **Respawning script** : When the player is out of bounds, the game fades out for the player. When it fades in again, the player is respawned at the closest respawn point on the course.

<details>
<summary>Image of respawning points</summary>

<p></p>

[Image of respawning points](../../../image_data/bc762a3a4dd03aa397cfdd81b0982f939de706dc66e39361f606c7f504c156fd.md)

### Overview
The image depicts a scene from a video game environment, showing multiple player avatars standing on a snowy terrain. There are also some graphical elements indicating respawn points above the characters.

### Key Elements
- **Player Avatars**: Blue humanoid figures with simplistic designs, standing on the snow. They are evenly spaced across the scene.
- **Respawn Points**: Above each player avatar, there is a circular icon with a small figure inside, indicating the respawn point.
- **Terrain**: The ground is covered with snow, with a wooden structure partially visible on the left side.
- **Text**: At the top of the image, there is a message that reads: "Open the PlayerOBBManager script to learn more. The respawn point that follows each player is below."

### Visual Flow / Relationships
- **Most Prominent Element**: The player avatars are the focal point of the image.
- **Arrows**: White directional arrows are placed at the bottom of the image, pointing towards the players, likely indicating movement direction.
- **Spatial Relationships**: The respawn points are directly above the corresponding player avatars, suggesting a connection between them.

</details>

<p></p>



A **SpawnPoint** is assigned to each player that enters the game. This SpawnPoint tracks along the player’s course during the game, whenever they are touching the ground. This is why it is important to not have accessible areas where the player cannot return to the course. When the player falls out of bounds (dies), the player is teleported back to the player’s tracking SpawnPoint as long as the game continues. We respawn the player some height above the last known ground location for safety, so they have time to adjust their location to fall back on the ground.

## PlayerOOBManager.ts

Manages the individual OOB controllers, initializing them.

**Note**: We do not provide individual OOB controllers to each player to own (local) because game calculations are faster on the server, and the server already knows the location of each player.

In the map is a perimeter trigger to catch when the player is out of bounds, as well as an additional height safeguard that triggers when the player’s y position is too low.

**Notes**:

* Initializes a playerMap of mappings between players in the game, localized respawning points, and subscriptions to triggering events.
* Y-coordinate value for out of bounds is stored as a property: OOBYWorldHeight.
* preStart():
  + Defines listeners for onPlayerEnterWorld and onPlayerExitWorld to be handled locally. Also, defines listeners for local broadcast events to register an OOB spawner and manage changed game states.
  + this.asyncIntervalID performs check on property-defined interval to see if player is out of bounds (below Y coordinate). If so, the player is teleported to the pairedRespawnGizmo for the player.
* start():
  + handleOnPlayerEnterWorld():
    - Assigns a respawner from the objPool to the player
    - Defines a subscription to a network event for the player, triggered off of the onPlayerOutofBounds event. When the OOB event fires, the player is respawned at the last known ground spawn point if the game is continuing. Otherwise, the player is teleported back to the Lobby.
  + handleOnPlayerExitWorld():
    - playerRespawner assigned to the player is returned to the objPool,
    - Player is disconnected from event subscription and is removed from the playerMap.

## PlayerOOBRespawner.ts

Simple script to register the player’s spawner to the manager.

**Note**: The PlayerOOBRespawner.ts script is attached to each instance of the player SpawnPoint entities in the Hierarchy panel.

**Notes**:

* See script.