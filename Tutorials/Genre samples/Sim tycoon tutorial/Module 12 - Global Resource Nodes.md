---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/sim-tycoon-tutorial/module-12-global-resource-nodes
---

# [Module 12 - Global Resource Nodes](#module-12---global-resource-nodes)

Global Resource Nodes are shared finite resource sources for all players, which reset after being fully mined. Unlike individual ResourceNodes, these require collaborative effort from multiple players and provide shared rewards when completed.

## [System components](#system-components)

### [GlobalResourceNode.ts](#globalresourcenodets)

This script defines a global resource node that is shared by all players. Multiple players work together to collect the resource and, when finished, the resource node resets after a cooldown.

#### [Property description](#property-description)

- **resourceType** – stringID for the type of resource the node provides.
- **toolType** – Tool type required to mine the node.
- **workToExtract** – Amount of collective work needed to finish the node.
- **nodeReward** – Total reward shared among contributors when the node is completed.
- **nodeResetTime** – Time in seconds before the node becomes available again.
- **nodeVisuals** – Parent object containing node meshes.
- **healthBar, healthWrapper, healthBarNumeric** – UI elements showing progress toward completion.

#### [Main functions](#main-functions)

- **start()** – Stores original health bar states and checks visuals.
- **registerHit(player, progressAdded)** – Adds player contribution, updates progress bars, and checks for node completion.
- **allocateRewards()** – Divides rewards among players once the node is completed.
- **resetNode()** - Starts resetting the node after progress is completed.

## [Key differences from regular Resource Nodes](#key-differences-from-regular-resource-nodes)

### [Shared progress](#shared-progress)

- All players contribute to the same progress bar
- Node depletes for everyone when fully mined
- Progress is visible to all players through health bar UI

### [Collaborative rewards](#collaborative-rewards)

- Rewards are distributed among all contributing players
- Contribution tracking determines reward allocation
- Higher contributors receive larger reward shares

### [Reset mechanics](#reset-mechanics)

- Node becomes unavailable when fully depleted
- Cooldown timer before respawning
- Visual feedback during reset period
- All players see synchronized reset state

## [Integration with quest system](#integration-with-quest-system)

Global Resource Nodes integrate with the achievement system:

- “Teamwork!” quest is awarded when a player receives a resource from mining the global node
- Encourages collaborative gameplay
- Provides social incentives for group activities

## [Deployment guide](#deployment-guide)

1. Add `GlobalResourceNode.ts` to your project.
2. Create entities for each global resource node in your world.
3. Attach the script to each entity.
4. Configure properties (resource type, work required, rewards).
5. Make sure the node entity is collidable.
6. Add a gameplay tag “RESOURCE” to the collidable object.
7. Set up health bar UI elements for progress display.
8. Ensure tools call `registerHit()` on these resource nodes.

## [Balancing considerations](#balancing-considerations)

### [Work requirements](#work-requirements)

- Higher work requirements encourage more collaboration
- Should be balanced against player count and tool efficiency
- Consider peak and off-peak player populations

### [Reward distribution](#reward-distribution)

- Fair distribution encourages participation
- Consider minimum contribution thresholds
- Balance individual vs. group benefits

### [Reset timing](#reset-timing)

- Cooldown should create anticipation without frustration
- Allow time for players to spend rewards and return
- Consider time zones and player availability patterns

## [Customization options](#customization-options)

### [Progress visualization](#progress-visualization)

- Customize health bar appearance and positioning
- Add particle effects for mining progress
- Implement sound feedback for collaboration milestones

### [Reward mechanics](#reward-mechanics)

- Implement bonus rewards for first/last contributors
- Add rare resource chances for global nodes
- Create special global nodes with unique rewards.

### [Social features](#social-features)

- Add notification systems for node completion
- Implement contributor leaderboards
- Create team-based mining challenges

