# Module 3 - Tools and ToolGroups

## System components

  
### ToolGroup.ts

 The ToolGroup script manages collections of similar tools and handles their
lifecycle. It serves as a factory and pool manager for tools, ensuring efficient
resource usage. Key features:
• Tool Pooling: Maintains a pool of tool instances to reduce spawning overhead
• Dynamic Spawning: Creates new tools when the pool is empty
• Return Management: Handles returning tools to the pool when no longer needed
• Player Assignment: Tracks which tools are currently assigned to which players

  
### Tool properties

 All tools in the system share common properties:
• toolName: Unique identifier for the tool type
• tier: Numerical tier indicating tool power/progression level
• durability: Health/usage points before the tool breaks
• efficiency: Modifier for how effective the tool is at its task
• cost: Currency cost to purchase or upgrade to this tool

  
...
...
# Module 3 - Tools and ToolGroups
...
## System components
...
### Tool categories

 The reference world implements two main categories of tools:  
#### Grabbable Tools (Pickaxes)


• Held in the player’s hand
• Used for mining and resource extraction
• Players can only hold one grabbable tool at a time
• Automatically returned to pool when player switches tools

  
#### Attachable Tools (Backpacks)


• Attached to the player’s torso
• Increase inventory capacity
• Passive effect while equipped
• Only one can be attached at a time

  
...
...
# Module 3 - Tools and ToolGroups
...
## System components

  
### ToolGroup.ts
...
### Tool properties
...
### Tool categories
...
...
# Module 3 - Tools and ToolGroups
...
## Tool management workflow

  
### Tool assignment process


1. Player requests a tool through the store or upgrade system.
2. ToolGroup checks if tools are available in the pool.
3. If pool is empty, new tool instance is spawned.
4. Tool is removed from pool and assigned to player.
5. SimPlayer records the tool assignment.
6. Previous tool (if any) is returned to its respective pool.

  
### Tool return process


1. Player switches to a different tool or leaves the world.
2. Current tool is detached/removed from player.
3. Tool is returned to its ToolGroup pool.
4. Tool becomes available for reassignment to other players.

  
...
...
# Module 3 - Tools and ToolGroups
...
## Integration with SimPlayer

 The tool system integrates closely with the SimPlayer management system:  
### equipGrabbable(toolName)


• Looks up the tool in the player’s toolMap
• Returns current grabbable tool to its pool
• Equips the new tool to the player’s hand
• Updates the player’s tool state

  
### equipAttachable(toolName)


• Finds the requested attachable tool
• Removes current attachable and returns it to pool
• Attaches new tool to player’s torso
• Updates inventory capacity based on new tool

  
...
...
# Module 3 - Tools and ToolGroups
...
## Tool progression system

  
### Tier system

 Tools are organized into tiers representing progression levels:
• Tier 1: Basic starting tools
• Tier 2: First upgrade level
• Tier 3: Intermediate tools
• Tier 4: Advanced tools
• Tier 5: Expert-level tools
• Tier 6: Master-tier tools

  
### Upgrade mechanics


• Players can upgrade their current tool to the next tier
• Upgrades cost increasing amounts of currency
• Higher tier tools provide significant efficiency improvements
• Upgrades are permanent and persist across sessions

  
...
...
# Module 3 - Tools and ToolGroups
...
## Performance optimization

  
### Pooling benefits

 The ToolGroup pooling system provides several performance advantages:
• Reduced Spawning: Reuses existing tool instances instead of creating new ones
• Memory Management: Maintains a controlled number of tool instances
• Instant Assignment: Tools are immediately available from the pool
• Cleanup Automation: Automatically manages tool lifecycle

  
### Pool management


• Pools start empty and grow as needed
• Maximum pool size can be configured to prevent memory issues
• Unused tools are automatically returned to pools
• Pool cleanup occurs when players leave the world

  
...
...
# Module 3 - Tools and ToolGroups
...
## Customization guide

  
### Adding new tool types


1. Create a new tool entity with the appropriate components
2. Create a corresponding ToolGroup to manage instances
3. Add the new tool to the SimPlayer toolMap
4. Update store and upgrade systems to include the new tool
5. Configure progression tiers and costs

  
### Modifying tool properties


1. Select the tool entity in the Desktop Editor
2. Adjust the tool component properties:
  • durability: How long the tool lasts
  • efficiency: How effective the tool is
  • tier: Progression level
  • cost: Purchase/upgrade price

  
### Creating tool variants


1. Duplicate an existing tool entity
2. Modify the visual appearance and properties
3. Create a separate ToolGroup for the variant
4. Add progression paths between variants
5. Update UI to display different tool options

  
...
...
# Module 3 - Tools and ToolGroups
...
## Best practices

  
### Tool design


• Each tier should provide meaningful improvements over the previous tier
• Tool costs should scale appropriately with their benefits
• Visual differences should clearly indicate tool progression
• Tool names should be descriptive and consistent

  
### Performance considerations


• Use pooling for all tools to minimize spawning overhead
• Set reasonable maximum pool sizes to prevent memory issues
• Implement proper cleanup when players leave
• Test with maximum player count to ensure smooth performance

  
...
...
# Module 3 - Tools and ToolGroups
...
## Best practices
...
### Player experience


• Make tool upgrades feel rewarding and impactful
• Provide clear feedback when tools are equipped or unequipped
• Ensure tool progression aligns with game economy
• Consider tool repair mechanics for additional resource management

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
# Module 3 - Tools and ToolGroups
...
## Best practices
...
### Player experience
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
# Module 3 - Tools and ToolGroups
...
## Best practices

  
### Tool design
...
### Performance considerations
...
### Player experience
...
...
# Module 3 - Tools and ToolGroups
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsim-tycoon-tutorial%2Fmodule-3-tools-and-toolgroups%2F)
...
# Module 3 - Tools and ToolGroups

 The tool system in the sim tycoon reference world manages different types of
tools that players can equip and use. Tools are organized into ToolGroups which
handle spawning, pooling, and distribution of tools to players.  
## System components
...
## Tool management workflow
...
## Integration with SimPlayer
...
## Tool progression system
...
## Performance optimization
...
## Customization guide
...
## Best practices
...
## Additional Links
...
      Learn
# Module 3 - Tools and ToolGroups
...
