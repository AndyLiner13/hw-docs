# Module 1 - SimPlayer

## System components

  
### SimPlayer.ts

 This script defines the `SimPlayer` class, which stores all player-related data and provides functions for managing
tools and inventory. Since this is not a Horizon component, it does not have
any properties and needs to be set up in `World.ts`. Below is a list of responsibilities that `SimPlayer` is used for:
|  |
|  |
| Tool Management | SimPlayer keeps track of all tools available to the player through a toolMap. It can equip and unequip both grabbables (pickaxes) and attachables (backpacks). It ensures that when a tool is swapped, the old one is returned to its pool and the new one is properly attached to the player. |
...
...
# Module 1 - SimPlayer
...
## System components

  
### SimPlayer.ts
...
| Resource Tracking | The system keeps a record of the player’s resources, allowing resources to be added, removed, or directly set. It also calculates total inventory weight to prevent players from exceeding their backpack’s storage limit. This ensures proper feedback during mining (e.g., when capacity is full). |
| Stats and Score | SimPlayer stores player stats and scores, making it easy to retrieve or update them. These values are persisted through the SaveGame system, allowing continuity across sessions. |
| Progress and Tutorial State | The system tracks mining progress (extractionProgress, extractionThreshold) as well as the type of resource last extracted. It also includes flags for whether the player has completed the tutorial (FTUE). |
| Persistence and Cleanup | Each SimPlayer is linked to a SaveGame, which handles storing equipped tools, stats, and progress between play sessions. The onSimPlayerExit() method ensures proper cleanup when a player leaves. |
...
...
# Module 1 - SimPlayer
...
## System components
...
### Main functions


• constructor(player, world) – Creates a new SimPlayer, initializes maps, and links a SaveGame record.
• equipAttachable(toolName) – Equips an attachable (backpack). Detaches any currently equipped attachable,
updates inventory capacity, and attaches the new one to the player’s torso.
• equipGrabbable(toolName) – Equips a grabbable (pickaxe). Returns the old one to the pool and makes the
player hold the new one.
• getPlayerTool(toolName: string) – Looks up a specific tool in the player’s `toolMap` by its string ID.

  
...
...
# Module 1 - SimPlayer
...
## System components

  
### SimPlayer.ts
...
### Main functions
...
...
# Module 1 - SimPlayer
...
## How to deploy


1. Add `SimPlayer.ts` to your project.
2. For each `hz.Player` in your world, create a corresponding `SimPlayer`.
3. Populate the `toolMap` with the player’s available tools (from `ToolGroups`).
4. Use `equipAttachable()` and `equipGrabbable()` to manage tools dynamically.

  
## Integration with other systems

 The SimPlayer system integrates closely with:
• SaveGame System: Persists player state between sessions
• Tool Systems: Manages tool equipping and unequipping
• Resource Systems: Tracks player inventory and capacity
• HUD System: Provides data for UI updates
• Store System: Handles purchase validation and tool distribution

  
...
...
# Module 1 - SimPlayer
...
## Best practices


• Always create a SimPlayer for each player when they join the world
• Use the appropriate equip functions rather than directly manipulating tools
• Regularly save player state after significant changes
• Clean up properly when players leave to prevent memory leaks
• Validate tool and resource operations through SimPlayer rather than directly

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Module 1 - SimPlayer
...
## Best practices
...
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy/policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 1 - SimPlayer
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsim-tycoon-tutorial%2Fmodule-1-simplayer%2F)
...
# Module 1 - SimPlayer

 The SimPlayer is a custom player wrapper that adds features on top of the base `hz.Player`. It keeps track of tools, resources, inventory, and progress for each player.
It also integrates with save data so progress can persist across sessions. This script ties most of the systems together, serving as the central point of
player state management.  
## System components
...
## How to deploy
...
## Integration with other systems
...
## Best practices
...
## Additional Links
...
      Learn
# Module 1 - SimPlayer
...
