Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/sim-tycoon-tutorial/module-8-world-management

# Module 8 - World and Game Management

The World system manages the overall game state, player lifecycle, and coordinates all the different systems working together. It serves as the central orchestrator for the sim tycoon experience.

## System components

### World.ts

The World script is the main game controller that handles:

* **Player Management**: Tracks all players in the world and their associated SimPlayer instances
* **System Initialization**: Sets up all game systems when the world starts
* **Event Coordination**: Manages communication between different systems
* **Global State**: Maintains world-wide settings and configurations
* **Performance Monitoring**: Tracks system performance and optimizes accordingly

### Core responsibilities

#### Player lifecycle management

* Detects when players join the world
* Creates SimPlayer instances for new players
* Manages player spawning and initial setup
* Handles player disconnection cleanup
* Maintains player count limits (max 8 players)

#### System coordination

* Initializes ToolGroups and ensures tool availability
* Sets up resource nodes and their respawn timers
* Configures store systems and pricing
* Establishes save game connections
* Coordinates HUD and UI systems

#### World state management

* Maintains global game settings and rules
* Tracks world-wide statistics and metrics
* Manages time-based events and cycles
* Handles world reset and cleanup operations
* Ensures consistent state across all systems

## Player management system

### Player joining process

When a new player joins the world:

- **Detection**: World.ts detects the new player entity.
- **SimPlayer Creation**: Creates associated SimPlayer wrapper.
- **Tool Assignment**: Assigns starting tools from ToolGroups.
- **Save Data Loading**: Attempts to load existing player progress.
- **HUD Initialization**: Sets up player-specific UI elements.
- **Spawn Placement**: Places player in appropriate starting location.
- **Tutorial Check**: Determines if FTUE should be triggered.

### Player departure handling

When a player leaves:

- **Tool Return**: All equipped tools are returned to their pools.
- **State Saving**: Current progress is saved to player variables.
- **Resource Cleanup**: Player inventory is processed appropriately.
- **Memory Cleanup**: SimPlayer instance is properly disposed.
- **Pool Management**: Tool pools are optimized for remaining players.

## System integration

### Resource management

* Coordinates resource node spawning and distribution
* Manages global resource availability and balancing
* Handles cross-player resource interactions
* Optimizes resource generation based on player count

### Economic oversight

* Monitors currency flow and inflation
* Adjusts pricing and rewards based on player behavior
* Manages global economic events or bonuses
* Ensures economic balance across all players

### Performance optimization

* Monitors system performance and resource usage
* Dynamically adjusts system complexity based on player count
* Manages entity pooling and cleanup
* Optimizes update frequencies for better performance

## Configuration management

### Global settings

The World system manages global configuration:

* **Player Limits**: Maximum concurrent players (default: 8)
* **Respawn Rates**: Global multipliers for resource respawn times
* **Economic Rates**: Base conversion rates and pricing scales
* **Difficulty Settings**: Global modifiers for mining difficulty
* **Event Triggers**: World-wide events and their conditions

### System parameters

* **Tool Pool Sizes**: Initial and maximum sizes for tool pools
* **Save Intervals**: How frequently player data is saved
* **Performance Thresholds**: Limits for system optimization
* **Debug Settings**: Development and testing configurations

## Event system

### Global events

The World system can trigger world-wide events:

* **Resource Bonuses**: Temporary increases in resource generation
* **Economic Events**: Market fluctuations or special pricing
* **Tool Promotions**: Temporary upgrade discounts
* **Seasonal Changes**: Time-based world modifications

### System notifications

* **Player Achievements**: Broadcasts significant player accomplishments
* **System Status**: Performance warnings or optimization notifications
* **Economic Updates**: Changes to global pricing or rates
* **Maintenance Alerts**: System updates or scheduled events

## Customization guide

### Modifying world settings

- Locate the World.ts script configuration section.
- Adjust global parameters:
  * `maxPlayers`: Maximum concurrent players
  * `resourceMultipliers`: Global resource generation rates
  * `economicRates`: Base currency and pricing scales
  * `performanceSettings`: Optimization thresholds

### Adding world events

- Define event conditions and triggers.
- Implement event effects on game systems.
- Create notification systems for players.
- Add event persistence for cross-session continuity.

### Performance tuning

- Monitor player count and system load.
- Adjust pool sizes based on usage patterns.
- Optimize update frequencies for different systems.
- Implement dynamic quality scaling for performance.

## Integration points

### Save system integration

* Coordinates save operations across all players
* Manages world state persistence
* Handles save file migration and updates
* Ensures data consistency and backup

### UI system integration

* Provides global UI state management
* Coordinates HUD updates across players
* Manages shared UI elements and notifications
* Handles UI performance optimization

### Tool system integration

* Manages global tool availability and distribution
* Coordinates tool pool optimization
* Handles tool balancing and progression
* Manages tool event systems and rewards

## Best practices

### System design

* Keep World.ts focused on coordination rather than implementation
* Use event-driven architecture for system communication
* Implement proper error handling and recovery
* Design for scalability within the 8-player limit

### Performance optimization

* Monitor and log system performance metrics
* Implement graceful degradation for high load
* Use efficient data structures for player tracking
* Optimize frequent operations and update cycles

### Maintainability

* Document configuration options and their effects
* Implement comprehensive logging for debugging
* Design modular systems that can be easily modified
* Provide clear interfaces between different systems