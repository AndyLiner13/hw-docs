Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/sim-tycoon-tutorial/module-1-simplayer

# Module 1 - SimPlayer

The SimPlayer is a custom player wrapper that adds features on top of the base `hz.Player`. It keeps track of tools, resources, inventory, and progress for each player. It also integrates with save data so progress can persist across sessions.

This script ties most of the systems together, serving as the central point of player state management.

## System components

### SimPlayer.ts

This script defines the `SimPlayer` class, which stores all player-related data and provides functions for managing tools and inventory. Since this is not a Horizon component, it does not have any properties and needs to be set up in `World.ts`.

Below is a list of responsibilities that `SimPlayer` is used for:

| **Responsibility** | **Description** |
| --- | --- |
| **Tool Management** | `SimPlayer` keeps track of all tools available to the player through a `toolMap`. It can equip and unequip both grabbables (pickaxes) and attachables (backpacks). It ensures that when a tool is swapped, the old one is returned to its pool and the new one is properly attached to the player. |
| **Resource Tracking** | The system keeps a record of the player’s resources, allowing resources to be added, removed, or directly set. It also calculates total inventory weight to prevent players from exceeding their backpack’s storage limit. This ensures proper feedback during mining (e.g., when capacity is full). |
| **Stats and Score** | `SimPlayer` stores player stats and scores, making it easy to retrieve or update them. These values are persisted through the `SaveGame` system, allowing continuity across sessions. |
| **Progress and Tutorial State** | The system tracks mining progress (`extractionProgress`, `extractionThreshold`) as well as the type of resource last extracted. It also includes flags for whether the player has completed the tutorial (FTUE). |
| **Persistence and Cleanup** | Each SimPlayer is linked to a `SaveGame`, which handles storing equipped tools, stats, and progress between play sessions. The `onSimPlayerExit()` method ensures proper cleanup when a player leaves. |

### Main functions

* **constructor(player, world)** – Creates a new SimPlayer, initializes maps, and links a SaveGame record.
* **equipAttachable(toolName)** – Equips an attachable (backpack). Detaches any currently equipped attachable, updates inventory capacity, and attaches the new one to the player’s torso.
* **equipGrabbable(toolName)** – Equips a grabbable (pickaxe). Returns the old one to the pool and makes the player hold the new one.
* **getPlayerTool(toolName: string)** – Looks up a specific tool in the player’s `toolMap` by its string ID.

## How to deploy

- Add `SimPlayer.ts` to your project.
- For each `hz.Player` in your world, create a corresponding `SimPlayer`.
- Populate the `toolMap` with the player’s available tools (from `ToolGroups`).
- Use `equipAttachable()` and `equipGrabbable()` to manage tools dynamically.

## Integration with other systems

The SimPlayer system integrates closely with:

* **SaveGame System**: Persists player state between sessions
* **Tool Systems**: Manages tool equipping and unequipping
* **Resource Systems**: Tracks player inventory and capacity
* **HUD System**: Provides data for UI updates
* **Store System**: Handles purchase validation and tool distribution

## Best practices

* Always create a SimPlayer for each player when they join the world
* Use the appropriate equip functions rather than directly manipulating tools
* Regularly save player state after significant changes
* Clean up properly when players leave to prevent memory leaks
* Validate tool and resource operations through SimPlayer rather than directly