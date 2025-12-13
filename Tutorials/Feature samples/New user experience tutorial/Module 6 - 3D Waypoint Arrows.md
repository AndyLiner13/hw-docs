Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/new-user-experience-tutorial/module-6-waypoint-arrows

# Module 6 - 3D Waypoint Arrows

In this module, we will cover how the 3D arrow navigation system works and how to use it to guide players toward objectives using floating directional indicators.

The 3D arrow navigation system provides floating arrows to guide players toward objectives in real-time. The arrow rotates dynamically and adapts to quest categories, complementing the visual language of each quest type. It offers clear in-world directional guidance without relying on mini-maps or abstract markers, making it especially effective for first-time players, exploration quests, or time-sensitive objectives.

This system offers intuitive spatial guidance that helps players navigate complex environments and ensures they can find important locations without confusion or frustration.

You may want to add this to your world as part of the tutorial so players have to follow a specific path, or as a clue about where the next point of interest is located.

The 3D arrow system works with the following scripts included in the tutorial world:

* `ArrowAssignManager.ts` - Manages the assignment of arrows to players
* `ArrowFollower.ts` - Handles arrow behavior and visual positioning
* `ObjectiveSequence.ts` - Manages the sequence of objectives related to the arrow
* `TargetBroadcaster.ts` - Provides target positions for arrow guidance
* `QuestWaypoint.ts` - Integrates arrows with the quest system

## Implement the 3D waypoint arrow components

In the New User Experience (NUX) tutorial world, the 3D arrow system creates floating directional indicators that attach to player heads and dynamically point toward objectives. The system spawns player-specific arrows with quest-type color coding and smooth real-time rotation tracking.

The arrow system uses an asset-based approach where `ArrowAssignManager.ts` spawns arrow assets per player, while `ArrowFollower.ts` handles the visual behavior and target tracking for each individual arrow instance.

### Understanding the arrow system architecture

The 3D arrow system consists of several interconnected components:

* **ArrowAssignManager**: Controls when arrows appear/disappear and spawns arrow assets for players
* **ArrowFollower**: Handles individual arrow behavior, attachment, and target tracking
* **ObjectiveSequence**: Manages progression through multiple waypoint targets
* **TargetBroadcaster**: Provides target position information for arrow direction

### Setup the arrow assignment system

The `ArrowAssignManager.ts` script handles the core logic of when players receive arrows and manages the spawning of arrow assets.

- **Create the arrow assignment manager**: Create an empty object in your world to house the arrow assignment system. Attach the `ArrowAssignManager.ts` script to this object.

  <details>
  <summary>Arrow assignment manager</summary>
  
  <p></p>
  
  [Arrow assignment manager](../../../image_data/e780b6e5bc4a045a30dcfd220e8064f1077471361c81bd3a77b30e0f3b685230.md)
  
  ### Overview
  This image depicts a hierarchical tree-like structure, likely part of a user interface for managing targets or waypoints. The visual is organized into a series of nested elements, resembling a file system or a project management tool.
  
  ### Key Elements
  - **Visual description**: The elements are represented as nodes with icons and labels.
  - **Location**: The elements are arranged vertically.
  - **Contents**: 
      - **WaypointTargets**: A folder icon with a plus sign, indicating expandable content.
      - **Target 0**: A node with a circle icon, labeled "Target 0".
      - **Target 1**: A node with a circle icon, labeled "Target 1".
      - **Target 2**: A node with a circle icon, labeled "Target 2". This node is highlighted in blue, suggesting it is currently selected or active.
      - **Target 3**: A node with a circle icon, labeled "Target 3".
  - **Visual styling**: The icons are simple circles with a checkmark inside, and the labels are in white text against a dark background. The selected node has a blue background.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The selected node "Target 2" is the most prominent due to its blue highlight.
  - **Arrows/lines/connectors**: There are no explicit arrows or lines connecting the nodes, but the indentation suggests a hierarchical relationship.
  - **Spatial relationships**: The nodes are stacked vertically, with "WaypointTargets" at the top, followed by its children "Target 0", "Target 1", "Target 2", and "Target 3".
  
  </details>
  
  <p></p>
  
  
- **Configure trigger zones**: Set up the essential trigger entities in the script properties:
  * **startArrowTrigger**: Trigger zone where players first receive arrows (typically at tutorial start)
  * **removeArrowTrigger**: Trigger zone where arrows are removed (typically at tutorial end)
  * **trigger\_1, trigger\_2, trigger\_3**: Individual objective triggers that advance arrow targets
- **Setup the arrow asset**: Assign the **NUXArrow** property to your arrow asset from the Asset Library. This asset should contain:
  * A root entity with appropriate naming
  * Child entities named containing “Objective”, “Target”, and “Arrow” for the system to identify components
  * The arrow mesh and any VFX effects you want to display

### Configure arrow behavior and visuals

The `ArrowFollower.ts` script controls how arrows behave once assigned to players.

- **Setup arrow attachment and positioning**: Configure the arrow follower properties:
  * **arrowParent**: The parent entity that will attach to the player’s head
  * **arrowMesh**: The visual arrow entity (with VFX effects)
  * **target**: The target entity that the arrow should point toward
  * **localOffset**: Position offset from player head (default: 0, -0.2, 1.2)
  * **lockToYAxis**: Restrict arrow rotation to horizontal plane only (default: true)
- **Configure quest-type color coding**: The system supports automatic color changes based on quest types:
  * **Collect quests**: Yellow arrows (Color: 1, 1, 0)
  * **Defeat quests**: Blue arrows (Color: 0, 0, 1)
  * **Default**: White arrows (Color: 1, 1, 1)

### Advanced arrow system features

- **Multi-objective progression**: The system supports sequential objectives through the trigger system:
  * Players entering **trigger\_1** advances to the first objective
  * Players entering **trigger\_2** advances to the second objective
  * Players entering **trigger\_3** advances to the third objective
  * Each trigger sends `AssignNewTarget` events to update arrow direction
- **Player-specific arrow management**: The system provides sophisticated multiplayer support:
  * **Individual spawning**: Each player gets their own arrow asset instance
  * **Ownership assignment**: Arrows are owned by specific players for proper visibility
  * **VFX coordination**: Particle effects play only for the owning player
  * **Cleanup handling**: Arrows are properly removed when players leave triggers or disconnect
- **Performance optimizations**: The arrow system includes several efficiency features:
  * **Asset pooling**: Reuses arrow assets when possible
  * **Conditional updates**: Arrows only update when targets or players exist
  * **Event-driven updates**: Uses network events rather than constant polling
  * **Automatic cleanup**: Removes arrow assets when no longer needed

### Understanding the spawn and assignment process

When a player enters the start trigger, the system:

- **Validates requirements**: Checks that NUXArrow asset and player are valid
- **Spawns arrow asset**: Creates a new arrow instance for the player
- **Sets ownership**: Assigns the arrow entities to the player for visibility
- **Finds components**: Locates Objective, Target, and Arrow entities in the spawned asset
- **Configures attachment**: Attaches arrow parent to player’s head with offset
- **Starts VFX**: Plays particle effects for the target and arrow (with delays)
- **Enables tracking**: Begins real-time target tracking and rotation updates

### Testing your 3D arrow implementation

Once your arrow system is implemented, test thoroughly:

- **Trigger Testing**: Walk into start triggers and verify arrows spawn correctly
- **Direction Testing**: Confirm arrows point accurately toward intended targets
- **Progression Testing**: Test objective advancement through trigger zones
- **Visual Testing**: Verify arrow positioning, rotation, and VFX effects
- **Multiplayer Testing**: Test with multiple players to ensure individual arrow instances
- **Cleanup Testing**: Confirm arrows disappear when entering remove triggers
- **Performance Testing**: Ensure smooth arrow rotation and minimal frame rate impact

<details>
<summary>Arrow assignment example</summary>

<p></p>

[Arrow assignment example](../../../image_data/19c97700d136f95979dc3ded2d6771e0f25cc35a29110d7eb4f86315ff1b0045.md)

### Overview
The image depicts a 3D-rendered scene featuring a character standing on a platform labeled "Start." The character is surrounded by a green circular path and above them, there are three green downward-pointing arrows. The background consists of a grid-like pattern, suggesting a virtual environment.

### Key Elements
- **Character**: A person wearing a red hoodie, blue jeans, and white sneakers. Positioned centrally, facing right.
- **Platform**: Dark blue rectangular platform with the word "Start" written in white text at the bottom left corner.
- **Green Path**: A bright green circle encircles the character, indicating a path or boundary.
- **Green Arrows**: Three green downward-pointing arrows are located above the character, positioned vertically.
- **Background**: A light gray grid pattern covers the entire background, resembling a floor or surface in a virtual space.

### Visual Flow / Relationships
- **Most Prominent Element**: The character and the green path around them.
- **Arrows**: Positioned above the character, pointing downwards.
- **Path**: Surrounds the character, implying movement or direction within the scene.

</details>

<p></p>



With a comprehensive 3D waypoint arrow system in place, you can provide players with intuitive floating guidance that dynamically tracks objectives, adapts to quest types, and provides smooth directional assistance throughout their journey in your world.