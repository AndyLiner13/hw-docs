# Module 4 - Pickaxe (Tool)

The pickaxe is the primary grabbable tool used by players to mine resource nodes
and extract materials. It represents the core interaction mechanism in the sim
tycoon gameplay loop.  
## System components

  
### Pickaxe.ts

 The Pickaxe script handles the behavior and mechanics of pickaxe tools. As a
grabbable tool, it's held in the player's hand and used for active mining
operations. Key features:
• Mining Action: Primary function for extracting resources from nodes
• Durability System: Health that decreases with each use
• Tier Progression: Six tiers with increasing efficiency and cost
• Visual Feedback: Mining effects and tool degradation indicators
• Sound Integration: Audio feedback for mining actions

  
### Pickaxe properties

 Each pickaxe has configurable properties that define its performance:
• miningPower: Amount of damage dealt to resource nodes per use
• durability: Total number of uses before the tool breaks
• miningSpeed: Time between mining actions (lower is faster)
• efficiency: Resource extraction multiplier
• repairCost: Currency cost to restore full durability
• upgradeCost: Cost to advance to the next tier

  
## Pickaxe tiers

 The reference world includes six pickaxe tiers, each providing meaningful
progression:  
### Tier 1 - Basic Pickaxe


• Mining Power: 5 damage per hit
• Durability: 50 uses
• Mining Speed: 2.0 seconds between actions
• Efficiency: 1.0x resource multiplier
• Upgrade Cost: 100 currency

  
### Tier 2 - Iron Pickaxe


• Mining Power: 8 damage per hit
• Durability: 75 uses
• Mining Speed: 1.8 seconds between actions
• Efficiency: 1.2x resource multiplier
• Upgrade Cost: 250 currency

  
### Tier 3 - Steel Pickaxe


• Mining Power: 12 damage per hit
• Durability: 100 uses
• Mining Speed: 1.6 seconds between actions
• Efficiency: 1.4x resource multiplier
• Upgrade Cost: 500 currency

  
### Tier 4 - Diamond Pickaxe


• Mining Power: 18 damage per hit
• Durability: 150 uses
• Mining Speed: 1.4 seconds between actions
• Efficiency: 1.6x resource multiplier
• Upgrade Cost: 1000 currency

  
### Tier 5 - Platinum Pickaxe


• Mining Power: 25 damage per hit
• Durability: 200 uses
• Mining Speed: 1.2 seconds between actions
• Efficiency: 1.8x resource multiplier
• Upgrade Cost: 2000 currency

  
### Tier 6 - Master Pickaxe


• Mining Power: 35 damage per hit
• Durability: 300 uses
• Mining Speed: 1.0 seconds between actions
• Efficiency: 2.0x resource multiplier
• Upgrade Cost: N/A (maximum tier)

  
## Mining mechanics

  
### Mining process


1. Player activates the pickaxe near a resource node
2. Pickaxe deals damage based on its mining power
3. Resource node health decreases by the damage amount
4. Pickaxe durability decreases by 1
5. If node health reaches zero, resources are extracted
6. Resources are multiplied by pickaxe efficiency
7. Mining cooldown based on pickaxe speed before next action

  
### Durability management


• Each mining action consumes 1 durability point
• When durability reaches zero, the pickaxe breaks and must be repaired
• Broken pickaxes cannot be used until repaired
• Repair costs are proportional to the pickaxe tier
• Players receive warnings when durability is low

  
### Resource extraction

 The pickaxe efficiency affects how many resources are extracted:
• Base extraction is determined by the resource node
• Pickaxe efficiency multiplies the base amount
• Higher tier pickaxes extract more resources per successful mine
• Efficiency also affects the chance of bonus resource drops

  
## Integration with other systems

  
### SimPlayer integration


• Pickaxes are managed through the `SimPlayer.equipGrabbable()` method
• Only one pickaxe can be equipped at a time
• Current pickaxe state is saved between sessions
• Durability and tier progression persist across play sessions

  
### ToolGroup integration


• Pickaxes are pooled and managed by PickaxeToolGroup
• When a player switches pickaxes, the old one returns to the pool
• New pickaxes are spawned dynamically when needed  
### Mining process


1. Player activates the pickaxe near a resource node.
2. Pickaxe deals damage based on its mining power.
3. Resource node health decreases by the damage amount.
4. Pickaxe durability decreases by 1.
5. If node health reaches zero, resources are extracted.
6. Resources are multiplied by pickaxe efficiency.
7. Mining cooldown based on pickaxe speed before next action.

  
### Modifying pickaxe stats


1. Select the pickaxe entity in the Desktop Editor.
2. Locate the Pickaxe component.
3. Adjust the following properties:
  • `miningPower`: Damage per hit
  • `durability`: Total uses before breaking
  • `miningSpeed`: Cooldown between actions
  • `efficiency`: Resource multiplier
  • `repairCost`: Cost to restore durability
  • `upgradeCost`: Cost to advance tier

  
### Adding new pickaxe tiers


1. Create a new pickaxe entity.
2. Configure the Pickaxe component with new tier stats.
3. Update the PickaxeToolGroup to include the new tier.
4. Add the new tier to store and upgrade systems.
5. Ensure visual progression matches tier advancement.

  
### Creating specialized pickaxes


1. Design pickaxes optimized for specific resource types.
2. Implement bonus damage against certain node types.
3. Add special effects or abilities for unique pickaxes.
4. Create acquisition methods (rewards, crafting, etc.).

  
## Visual and audio design

  
### Visual progression


• Each tier should have distinct visual appearance
• Higher tiers should appear more impressive and powerful
• Tool degradation should be visually indicated
• Mining effects should scale with tool power

  
### Audio feedback


• Unique sounds for each tier of pickaxe
• Different audio for different resource types
• Durability warnings through audio cues
• Satisfying mining impact sounds

  
## Balancing considerations

  
### Progression balance


• Each tier should feel like a meaningful upgrade
• Cost scaling should create interesting economic decisions
• Durability should balance convenience with resource management
• Mining speed improvements should feel impactful

  
### Economic integration


• Upgrade costs should align with resource generation rates
• Repair costs should be meaningful but not punitive
• Tool progression should drive the core gameplay loop
• Higher tiers should enable access to better resource areas

  
### Performance optimization


• Efficient pooling reduces spawning overhead
• Mining calculations should be optimized for frequent use
• Visual effects should scale appropriately with player count
• Audio management should prevent overlapping sound issues

  
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsim-tycoon-tutorial%2Fmodule-4-pickaxe%2F)
