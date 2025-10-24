# Module 5 - Backpack (Tool)

## System components

  
### Backpack.ts

 The Backpack script manages attachable tools that modify player inventory
capacity. As an attachable tool, it’s worn by the player and provides continuous
passive benefits. Key features:
• Inventory Expansion: Increases the maximum number of resources a player can carry
• Passive Effect: Provides benefits while equipped without active use
• Tier Progression: Multiple tiers with increasing capacity and features
• Visual Indication: Shows current capacity and storage status
• Attachment System: Automatically attaches to player’s torso slot

  
### Backpack properties

 Each backpack has configurable properties that define its storage capabilities:
• capacity: Maximum number of resource units that can be stored
• durability: How long the backpack lasts before needing repair
• efficiency: Modifier for resource collection or storage
• specialization: Bonus capacity for specific resource types
• repairCost: Currency cost to restore full durability
• upgradeCost: Cost to advance to the next tier

  
...
...
# Module 5 - Backpack (Tool)
...
## Backpack tiers
...
### Tier 1 - Basic Pouch


• Capacity: 20 resource units
• Durability: 100 uses
• Efficiency: 1.0x storage multiplier
• Specialization: None
• Upgrade Cost: 150 currency

  
### Tier 2 - Leather Backpack


• Capacity: 35 resource units
• Durability: 150 uses
• Efficiency: 1.1x storage multiplier
• Specialization: +5 wood capacity
• Upgrade Cost: 350 currency

  
### Tier 3 - Canvas Pack


• Capacity: 50 resource units
• Durability: 200 uses
• Efficiency: 1.2x storage multiplier
• Specialization: +8 stone capacity
• Upgrade Cost: 700 currency

  
...
...
# Module 5 - Backpack (Tool)
...
## Backpack tiers
...
### Tier 4 - Explorer’s Pack


• Capacity: 75 resource units
• Durability: 300 uses
• Efficiency: 1.3x storage multiplier
• Specialization: +10 crystal capacity
• Upgrade Cost: 1500 currency

  
### Tier 5 - Master Pack


• Capacity: 100 resource units
• Durability: 500 uses
• Efficiency: 1.5x storage multiplier
• Specialization: +15 all resource types
• Upgrade Cost: 3000 currency

  
### Tier 6 - Dimensional Storage


• Capacity: 150 resource units
• Durability: Unlimited
• Efficiency: 2.0x storage multiplier
• Specialization: +25 all resource types
• Upgrade Cost: N/A (maximum tier)

  
...
...
# Module 5 - Backpack (Tool)
...
## Backpack tiers

 The reference world includes multiple backpack tiers with increasing capacity:  
### Tier 1 - Basic Pouch
...
### Tier 2 - Leather Backpack
...
### Tier 3 - Canvas Pack
...
### Tier 4 - Explorer’s Pack
...
### Tier 5 - Master Pack
...
### Tier 6 - Dimensional Storage
...
...
# Module 5 - Backpack (Tool)
...
## Inventory mechanics

  
### Capacity management

 The backpack system manages player inventory through several mechanisms:
• Base Capacity: Each player starts with a minimal base inventory
• Backpack Bonus: Equipped backpack adds its capacity to the base amount
• Overflow Protection: Players cannot collect resources when at maximum capacity
• Visual Feedback: HUD displays current and maximum capacity
• Weight Simulation: Heavier inventories may affect movement speed

  
### Resource storage

 Backpacks can store multiple types of resources:
• Universal Storage: All backpacks can store any resource type
• Specialized Slots: Higher tier backpacks have bonus capacity for specific resources
• Smart Stacking: Similar resources automatically stack in inventory
• Priority System: Critical resources are protected from accidental loss

  
...
...
# Module 5 - Backpack (Tool)
...
## Inventory mechanics
...
### Durability system

 Unlike pickaxes, backpack durability works differently:
• Passive Degradation: Durability decreases slowly over time while equipped
• Collection Impact: Each resource collected reduces durability slightly
• Full Inventory Stress: Operating at maximum capacity increases wear
• Repair Benefits: Repaired backpacks gain temporary efficiency bonuses

  
...
...
# Module 5 - Backpack (Tool)
...
## Inventory mechanics

  
### Capacity management
...
### Resource storage
...
### Durability system
...
...
# Module 5 - Backpack (Tool)
...
## Integration with other systems

  
### SimPlayer integration


• Backpacks are managed through the SimPlayer.equipAttachable() method
• Only one backpack can be equipped at a time
• Capacity changes immediately upon equipping/unequipping
• Current backpack state is saved between sessions

  
### ToolGroup integration


• Backpacks are pooled and managed by BackpackToolGroup
• When a player switches backpacks, the old one returns to the pool
• Inventory contents are preserved during backpack changes
• Pool management ensures efficient memory usage

  
### HUD integration


• Real-time capacity display in player interface
• Visual indicators for capacity warnings
• Resource type breakdown in inventory view
• Storage optimization suggestions

  
...
...
# Module 5 - Backpack (Tool)
...
## Attachment mechanics

  
### Equipping process


1. Player selects a backpack through store or upgrade interface
2. Current backpack (if any) is detached and returned to pool
3. New backpack is attached to player’s torso attachment point
4. Player capacity is immediately updated to new backpack’s values
5. HUD refreshes to show new capacity information

  
### Visual attachment


• Backpacks appear visually attached to the player’s back
• Different tiers have distinct visual appearances
• Attachment points are automatically configured
• Visual scaling adjusts to player avatar size
• Attachment state is synchronized across all players

  
...
...
# Module 5 - Backpack (Tool)
...
## Customization guide

  
### Modifying backpack stats


1. Select the backpack entity in the Desktop Editor.
2. Locate the Backpack component.
3. Adjust the following properties:
  • `capacity`: Total storage space
  • `durability`: Longevity before repair needed
  • `efficiency`: Storage optimization multiplier
  • `specialization`: Bonus capacity for specific resources
  • `repairCost`: Cost to restore durability
  • `upgradeCost`: Cost to advance tier

  
### Adding specialized backpacks


1. Create backpack variants optimized for specific gameplay styles.
2. Implement mining-focused packs with tool storage.
3. Design trading packs with enhanced valuable resource capacity.
4. Create exploration packs with utility item storage.

  
### Creating unique mechanics


1. Auto-Sort Backpacks: Automatically organize inventory.
2. Resource Conversion: Convert common resources to rare ones.
3. Portable Storage: Allow temporary inventory expansion.
4. Shared Storage: Enable inventory sharing between players.

  
...
...
# Module 5 - Backpack (Tool)
...
## Balancing considerations

  
### Capacity progression


• Each tier should provide meaningful inventory improvements
• Upgrade costs should align with increased resource generation
• Capacity should enable new gameplay strategies
• Maximum capacity should support extended play sessions

  
### Economic impact


• Larger inventories enable longer mining sessions
• Reduced trips to storage/conversion points
• Higher efficiency should come at proportional cost
• Repair mechanics should create ongoing resource sink

  
### Player progression


• Backpack upgrades should feel essential for advancement
• Capacity limitations should drive upgrade decisions
• Specialization should create interesting choice points
• Maximum tier should feel like a significant achievement

  
## Performance optimization

  
### Memory management


• Efficient inventory data structures for large capacities
• Optimized attachment/detachment processes
• Minimal visual update overhead
• Smart pooling to reduce creation/destruction costs

  
### UI optimization


• Smooth capacity bar updates
• Efficient inventory grid rendering
• Optimized resource counter displays
• Responsive attachment state changes

  
...
...
# Module 5 - Backpack (Tool)
...
## Advanced features

  
### Smart inventory management


• Automatic resource sorting by type or value
• Intelligent space optimization algorithms
• Predictive capacity warnings
• Resource usage pattern analysis

  
...
...
# Module 5 - Backpack (Tool)
...
## Advanced features
...
### Social features


• Inventory sharing or trading capabilities
• Comparative capacity displays
• Backpack showcasing systems
• Achievement tracking for inventory milestones

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
...
...
# Module 5 - Backpack (Tool)
...
## Advanced features
...
### Social features
...
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 5 - Backpack (Tool)
...
## Advanced features

  
### Smart inventory management
...
### Social features
...
...
# Module 5 - Backpack (Tool)
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsim-tycoon-tutorial%2Fmodule-5-backpack%2F)
...
# Module 5 - Backpack (Tool)

 The backpack is an attachable tool that increases the player’s inventory
capacity. Unlike grabbable tools like pickaxes, backpacks are attached to the player’s
torso and provide passive benefits while equipped.  
## System components
...
## Backpack tiers
...
## Inventory mechanics
...
## Integration with other systems
...
## Attachment mechanics
...
## Customization guide
...
## Balancing considerations
...
## Performance optimization
...
## Advanced features
...
## Additional Links
...
      Learn
# Module 5 - Backpack (Tool)
...
