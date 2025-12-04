Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/new-user-experience-tutorial/module-6-waypoint-arrows

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

  ![Arrow assignment manager](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/548084218_817222380815715_5691887712263177527_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=SV2qi1tQaRcQ7kNvwH9uyMK&_nc_oc=Adn_3S5wQJbyzQrqDw3ly0dMKBvHm0Uj_BAx-Fp-QJIXjGoXtpjVQ5ZT9a9QwqjtfD4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Z3zRIwl9_5tZvc_EtgbDfA&oh=00_Aflf3uDa-iDPufXCZHAuQWfaIj33DT_pObROdNOG9nXJqw&oe=694BDC68)
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

![Arrow assignment example](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/550213105_817222390815714_6418903758704150581_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=A0G4YpThjCEQ7kNvwHrNo0c&_nc_oc=AdmUxFek_kEo0XzaZ3Ikn6tED2fnmniyw906TLGZ88msfuT0qJjlFCfXK968ymO_jm0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Z3zRIwl9_5tZvc_EtgbDfA&oh=00_AfnqrpNRKHATKX2qLHJJmVxd4WJnZKvYi_TWJ882DWN-zA&oe=694BD0B3)

With a comprehensive 3D waypoint arrow system in place, you can provide players with intuitive floating guidance that dynamically tracks objectives, adapts to quest types, and provides smooth directional assistance throughout their journey in your world.