# Module 2 - Resource Nodes

Resource nodes are the interactive objects that players can mine to collect
resources. They serve as the primary source of materials in the sim tycoon gameplay
loop.  
## System components

  
### ResourceNode.ts

 This script handles the core functionality of resource nodes including mining
interactions, health management, and respawn mechanics. Key features:
• Health System: Each node has a health value that decreases when mined
• Respawn Mechanics: Nodes respawn after a set timer when fully depleted
• Resource Generation: Nodes generate specific types and amounts of resources
• Visual Feedback: Nodes provide visual and audio feedback during mining
• Player Interaction: Supports multiple players mining the same node

  
### Resource node properties

 Resource nodes have the following configurable properties:
• maxHealth: Maximum health points for the node
• resourceType: Type of resource the node produces (wood, stone, crystal)
• resourceAmount: Amount of resource generated per successful mine
• respawnTime: Time in seconds before a depleted node respawns
• miningDifficulty: How much damage is required per mining action

  
### Mining mechanics

 The mining process follows these steps:
1. Player activates their tool near a resource node
2. Tool deals damage to the node based on tool tier and efficiency
3. Node health decreases by the damage amount
4. If node health reaches zero, it generates resources for the player
5. Node enters a cooldown state and begins respawn timer
6. After respawn time expires, node returns to full health

  
### Resource types

 The reference world includes three main resource types:  
#### Wood Nodes


• Health: 10 points
• Resource Type: Wood
• Amount per Mine: 1-3 wood
• Respawn Time: 30 seconds

  
#### Stone Nodes


• Health: 20 points
• Resource Type: Stone
• Amount per Mine: 1-2 stone
• Respawn Time: 45 seconds

  
#### Crystal Nodes


• Health: 30 points
• Resource Type: Crystal
• Amount per Mine: 1 crystal
• Respawn Time: 60 seconds

  
## Integration with other systems

 Resource nodes integrate with:
• Tool system: Accepts damage from all tool types
• Inventory system: Generated resources are automatically added to player inventory
• HUD system: Displays mining progress and node health

  
## Customization guide

  
### Modifying node properties


1. Select the resource node entity.
2. Locate the ResourceNode component.
3. Adjust properties like maxHealth, resourceAmount, respawnTime, and resourceType.

  
#### Wood Nodes


• Health: 10 points
• Resource Type: Wood
• Amount per Mine: 1-3 wood
• Respawn Time: 30 seconds
• Appearance: Tree stumps and fallen logs

  
#### Stone Nodes


• Health: 20 points
• Resource Type: Stone
• Amount per Mine: 1-2 stone
• Respawn Time: 45 seconds
• Appearance: Rock formations and boulders

  
#### Crystal Nodes


• Health: 30 points
• Resource Type: Crystal
• Amount per Mine: 1 crystal
• Respawn Time: 60 seconds
• Appearance: Glowing crystal formations

  
### Adding new resource types


1. Create new resource node entities in the world
2. Configure the ResourceNode component with new resource type
3. Update the inventory system to track the new resource
4. Add the new resource to store conversion rates
5. Update HUD displays to show the new resource

  
### Modifying node properties


1. Select the resource node entity
2. Locate the ResourceNode component
3. Adjust the following properties:
  • `maxHealth`: Difficulty to fully mine
  • `resourceAmount`: Reward per successful mine
  • `respawnTime`: Availability frequency
  • `resourceType`: Type of reward generated

  
### Creating node clusters


1. Group multiple nodes of the same type in specific areas
2. Vary health and respawn timers within clusters
3. Add environmental theming to match resource types
4. Consider adding rare "bonus" nodes with higher rewards

  
### Advanced mechanics

  
#### Progressive depletion


• Nodes become harder to mine as they take damage
• Visual deterioration as health decreases
• Reduced efficiency for damaged tools

  
#### Environmental effects


• Time-of-day affects mining efficiency
• Weather conditions impact resource generation
• Seasonal variations in node availability

  
#### Social mechanics


• Shared nodes that require multiple players to mine
• Node ownership or claiming systems
• Competitive mining with resource stealing

  
## Visual and audio feedback

 Resource nodes provide rich feedback to enhance the player experience:  
### Visual effects


• Mining sparks: Particle effects when tools hit the node
• Health indicators: Visual representation of remaining health
• Depletion effects: Special effects when node is fully mined
• Respawn animation: Visual cue when node becomes available again

  
### Audio feedback


• Mining sounds: Different audio for each resource type
• Tool impact: Audio varies based on tool type and efficiency
• Completion sound: Special audio when node is fully depleted
• Respawn notification: Audio cue when node respawns

  
## Balancing considerations

  
### Mining time vs. rewards


• Higher health nodes should provide proportionally better rewards
• Tool upgrades should meaningfully reduce mining time
• Respawn timers should balance resource availability with scarcity

  
### Spatial distribution


• Resource nodes should be distributed to encourage exploration
• Higher-value resources should be in less accessible locations
• Node density should support the maximum player count

  
### Progression scaling


• Early-game nodes should be accessible with basic tools
• Late-game nodes should require upgraded tools for efficiency
• Resource requirements should scale with tool upgrade costs

  
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsim-tycoon-tutorial%2Fmodule-2-resource-nodes%2F)
