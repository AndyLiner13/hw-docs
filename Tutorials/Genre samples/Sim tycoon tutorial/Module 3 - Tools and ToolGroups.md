---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/sim-tycoon-tutorial/module-3-tools-and-toolgroups
---

# [Module 3 - Tools and ToolGroups](#module-3---tools-and-toolgroups)

The tool system in the sim tycoon reference world manages different types of tools that players can equip and use. Tools are organized into ToolGroups which handle spawning, pooling, and distribution of tools to players.

## [System components](#system-components)

### [ToolGroup.ts](#toolgroupts)

The ToolGroup script manages collections of similar tools and handles their lifecycle. It serves as a factory and pool manager for tools, ensuring efficient resource usage.

Key features:

- **Tool Pooling**: Maintains a pool of tool instances to reduce spawning overhead
- **Dynamic Spawning**: Creates new tools when the pool is empty
- **Return Management**: Handles returning tools to the pool when no longer needed
- **Player Assignment**: Tracks which tools are currently assigned to which players

### [Tool properties](#tool-properties)

All tools in the system share common properties:

- **toolName**: Unique identifier for the tool type
- **tier**: Numerical tier indicating tool power/progression level
- **durability**: Health/usage points before the tool breaks
- **efficiency**: Modifier for how effective the tool is at its task
- **cost**: Currency cost to purchase or upgrade to this tool

### [Tool categories](#tool-categories)

The reference world implements two main categories of tools:

#### [Grabbable Tools (Pickaxes)](#grabbable-tools-pickaxes)

- Held in the player’s hand
- Used for mining and resource extraction
- Players can only hold one grabbable tool at a time
- Automatically returned to pool when player switches tools

#### [Attachable Tools (Backpacks)](#attachable-tools-backpacks)

- Attached to the player’s torso
- Increase inventory capacity
- Passive effect while equipped
- Only one can be attached at a time

## [Tool management workflow](#tool-management-workflow)

### [Tool assignment process](#tool-assignment-process)

1. Player requests a tool through the store or upgrade system.
2. ToolGroup checks if tools are available in the pool.
3. If pool is empty, new tool instance is spawned.
4. Tool is removed from pool and assigned to player.
5. SimPlayer records the tool assignment.
6. Previous tool (if any) is returned to its respective pool.

### [Tool return process](#tool-return-process)

1. Player switches to a different tool or leaves the world.
2. Current tool is detached/removed from player.
3. Tool is returned to its ToolGroup pool.
4. Tool becomes available for reassignment to other players.

## [Integration with SimPlayer](#integration-with-simplayer)

The tool system integrates closely with the SimPlayer management system:

### [equipGrabbable(toolName)](#equipgrabbabletoolname)

- Looks up the tool in the player’s toolMap
- Returns current grabbable tool to its pool
- Equips the new tool to the player’s hand
- Updates the player’s tool state

### [equipAttachable(toolName)](#equipattachabletoolname)

- Finds the requested attachable tool
- Removes current attachable and returns it to pool
- Attaches new tool to player’s torso
- Updates inventory capacity based on new tool

## [Tool progression system](#tool-progression-system)

### [Tier system](#tier-system)

Tools are organized into tiers representing progression levels:

- **Tier 1**: Basic starting tools
- **Tier 2**: First upgrade level
- **Tier 3**: Intermediate tools
- **Tier 4**: Advanced tools
- **Tier 5**: Expert-level tools
- **Tier 6**: Master-tier tools

### [Upgrade mechanics](#upgrade-mechanics)

- Players can upgrade their current tool to the next tier
- Upgrades cost increasing amounts of currency
- Higher tier tools provide significant efficiency improvements
- Upgrades are permanent and persist across sessions

## [Performance optimization](#performance-optimization)

### [Pooling benefits](#pooling-benefits)

The ToolGroup pooling system provides several performance advantages:

- **Reduced Spawning**: Reuses existing tool instances instead of creating new ones
- **Memory Management**: Maintains a controlled number of tool instances
- **Instant Assignment**: Tools are immediately available from the pool
- **Cleanup Automation**: Automatically manages tool lifecycle

### [Pool management](#pool-management)

- Pools start empty and grow as needed
- Maximum pool size can be configured to prevent memory issues
- Unused tools are automatically returned to pools
- Pool cleanup occurs when players leave the world

## [Customization guide](#customization-guide)

### [Adding new tool types](#adding-new-tool-types)

1. Create a new tool entity with the appropriate components
2. Create a corresponding ToolGroup to manage instances
3. Add the new tool to the SimPlayer toolMap
4. Update store and upgrade systems to include the new tool
5. Configure progression tiers and costs

### [Modifying tool properties](#modifying-tool-properties)

1. Select the tool entity in the Desktop Editor
2. Adjust the tool component properties:
   - durability: How long the tool lasts
   - efficiency: How effective the tool is
   - tier: Progression level
   - cost: Purchase/upgrade price

### [Creating tool variants](#creating-tool-variants)

1. Duplicate an existing tool entity
2. Modify the visual appearance and properties
3. Create a separate ToolGroup for the variant
4. Add progression paths between variants
5. Update UI to display different tool options

## [Best practices](#best-practices)

### [Tool design](#tool-design)

- Each tier should provide meaningful improvements over the previous tier
- Tool costs should scale appropriately with their benefits
- Visual differences should clearly indicate tool progression
- Tool names should be descriptive and consistent

### [Performance considerations](#performance-considerations)

- Use pooling for all tools to minimize spawning overhead
- Set reasonable maximum pool sizes to prevent memory issues
- Implement proper cleanup when players leave
- Test with maximum player count to ensure smooth performance

### [Player experience](#player-experience)

- Make tool upgrades feel rewarding and impactful
- Provide clear feedback when tools are equipped or unequipped
- Ensure tool progression aligns with game economy
- Consider tool repair mechanics for additional resource management

