# Module 13 - Teleporter System

 The teleporter system provides fast travel between different areas of the world.
It includes both unlockable teleporters (for FTUE progression) and
always-available teleporters for general world navigation.  

## System components

  

### Teleporter.ts

 This script manages teleportation functionality and access control. It can be
configured to require certain conditions before allowing teleportation.  

#### Key features

• Conditional Access: Teleporters can be locked until specific conditions are met
• FTUE Integration: Some teleporters unlock only after tutorial completion
• Tool Requirements: Certain teleporters may require players to have specific tools equipped
• Visual Feedback: Clear indication of teleporter availability and requirements
• Smooth Transitions: Seamless player transportation between areas

  

#### Property description

• destinationSpawnPoint: Target spawn point for teleportation
• requiresCompletion: Boolean flag for FTUE completion requirement
• requiredTools: List of tools player must own to use teleporter
• unlockMessage: Text displayed when teleporter becomes available
• lockedMessage: Text shown when teleporter is inaccessible

  

## FTUE teleporter mechanics

  

### Access control

 The FTUE teleporter implements specific unlock conditions:
1. Purchase Requirement: Player must buy green pickaxe from FTUE store.
2. Completion Tracking: FTUE completion status is updated upon purchase.
3. Visual Indication: Teleporter appearance changes when unlocked.
4. One-Way Travel: FTUE teleporter only goes from tutorial to main area.

  

## Integration with other systems

  

### Save system integration

 Teleporter usage and unlocks are tracked in save data:
• FTUE completion status determines teleporter availability
• Player progress affects which teleporters are accessible
• Teleporter unlock achievements are saved between sessions

  

### Tool system integration

 Some teleporters may require specific tool ownership:
• Advanced area teleporters might require higher-tier tools
• Safety systems prevent under-equipped players from accessing dangerous areas
• Tool verification happens automatically during teleporter interaction

  

### Implementation details

  
```
// Check if player can use FTUE teleporter
canUseTeleporter(player: hz.Player): boolean {
  const simPlayer = getSimPlayer(player);
  return simPlayer.hasRequiredTool("green_pickaxe") &&
         simPlayer.saveGame.hasCompletedFTUE();
}
```
  
## General teleporter system

  

### Bidirectional travel

 Most teleporters in the main game area allow bidirectional travel:
• Players can travel between connected areas freely
• No unlock requirements beyond basic tool ownership
• Consistent visual design and interaction patterns

  

### Area connections

 The teleporter network connects major game areas:
• Main Mining Area: Central hub with resource nodes
• Store District: Shopping and upgrade areas
• Advanced Mining Zones: Higher-tier resource locations
• Social Areas: Meeting points and collaborative spaces

  

## Visual design and feedback

  

### Teleporter states

 Teleporters have distinct visual states:
• Available: Bright, animated, clearly interactive
• Locked: Dimmed, with lock icons or barrier effects
• Activating: Transition effects during teleportation
• Cooldown: Brief unavailability after use (if applicable)

  

### User interface

 Clear communication about teleporter status:
• Interaction prompts show destination information
• Lock messages explain unlock requirements
• Visual indicators show teleporter network connections
• Progress indicators for conditional unlocks

  

## Customization guide

  

### Adding new teleporters

1. Create teleporter entity at desired location.
2. Attach Teleporter.ts script to the entity.
3. Configure destination spawn point.
4. Set any unlock requirements or conditions.
5. Add visual elements and interaction triggers.
6. Test teleportation flow and visual feedback.

  

### Modifying unlock conditions

1. Update the unlock logic in Teleporter.ts.
2. Modify save data structure if needed for new conditions.
3. Update visual feedback systems.
4. Test with various player progression states.
5. Ensure proper integration with existing systems.

  

### Creating teleporter networks

1. Plan teleporter placement for optimal world flow.
2. Design consistent visual language for teleporter types.
3. Implement discovery mechanics for hidden teleporters.
4. Create logical groupings and connection patterns.
5. Balance convenience with world exploration incentives.

  

## Performance considerations

  

### Optimization strategies

• Efficient Condition Checking: Minimize expensive checks during interaction
• Visual Optimization: Use efficient particle effects and animations
• Network Efficiency: Optimize multiplayer synchronization for teleporter states
• Memory Management: Properly clean up teleporter effects and states

  

### Loading optimization

• Preload Destinations: Cache destination areas for smooth transitions
• Progressive Loading: Load destination content during teleportation animation
• Error Handling: Graceful fallbacks for failed teleportations
• Performance Monitoring: Track teleportation performance metrics

  

## Best practices

  

### User experience design

• Clear Communication: Always indicate teleporter destination and requirements
• Consistent Interaction: Use uniform interaction patterns across all teleporters
• Accessibility: Ensure teleporters work well on mobile devices
• Error Prevention: Prevent accidental teleportations with confirmation prompts

  

### Technical implementation

• Robust Error Handling: Handle edge cases like invalid destinations
• State Synchronization: Ensure multiplayer consistency for teleporter states
• Performance Optimization: Minimize impact on frame rate and loading times
• Extensible Design: Build teleporter system to support future expansion

  

### Balancing considerations

• Convenience vs. Exploration: Balance fast travel with world exploration incentives
• Progression Gating: Use teleporter unlocks to guide player progression
• Social Dynamics: Consider how teleporters affect multiplayer interactions
• Economic Impact: Ensure teleporters don't disrupt resource gathering balance

    

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsim-tycoon-tutorial%2Fmodule-13-teleporter-system%2F)
