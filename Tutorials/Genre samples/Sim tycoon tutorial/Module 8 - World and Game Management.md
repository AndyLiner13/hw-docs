---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/sim-tycoon-tutorial/module-8-world-management
---

# [Module 8 - World and Game Management](#module-8---world-and-game-management)

The World system manages the overall game state, player lifecycle, and coordinates all the different systems working together. It serves as the central orchestrator for the sim tycoon experience.

## [System components](#system-components)

### [World.ts](#worldts)

The World script is the main game controller that handles:

- **Player Management**: Tracks all players in the world and their associated SimPlayer instances
- **System Initialization**: Sets up all game systems when the world starts
- **Event Coordination**: Manages communication between different systems
- **Global State**: Maintains world-wide settings and configurations
- **Performance Monitoring**: Tracks system performance and optimizes accordingly

### [Core responsibilities](#core-responsibilities)

#### [Player lifecycle management](#player-lifecycle-management)

- Detects when players join the world
- Creates SimPlayer instances for new players
- Manages player spawning and initial setup
- Handles player disconnection cleanup
- Maintains player count limits (max 8 players)

#### [System coordination](#system-coordination)

- Initializes ToolGroups and ensures tool availability
- Sets up resource nodes and their respawn timers
- Configures store systems and pricing
- Establishes save game connections
- Coordinates HUD and UI systems

#### [World state management](#world-state-management)

- Maintains global game settings and rules
- Tracks world-wide statistics and metrics
- Manages time-based events and cycles
- Handles world reset and cleanup operations
- Ensures consistent state across all systems

## [Player management system](#player-management-system)

### [Player joining process](#player-joining-process)

When a new player joins the world:

1. **Detection**: World.ts detects the new player entity.
2. **SimPlayer Creation**: Creates associated SimPlayer wrapper.
3. **Tool Assignment**: Assigns starting tools from ToolGroups.
4. **Save Data Loading**: Attempts to load existing player progress.
5. **HUD Initialization**: Sets up player-specific UI elements.
6. **Spawn Placement**: Places player in appropriate starting location.
7. **Tutorial Check**: Determines if FTUE should be triggered.

### [Player departure handling](#player-departure-handling)

When a player leaves:

1. **Tool Return**: All equipped tools are returned to their pools.
2. **State Saving**: Current progress is saved to player variables.
3. **Resource Cleanup**: Player inventory is processed appropriately.
4. **Memory Cleanup**: SimPlayer instance is properly disposed.
5. **Pool Management**: Tool pools are optimized for remaining players.

## [System integration](#system-integration)

### [Resource management](#resource-management)

- Coordinates resource node spawning and distribution
- Manages global resource availability and balancing
- Handles cross-player resource interactions
- Optimizes resource generation based on player count

### [Economic oversight](#economic-oversight)

- Monitors currency flow and inflation
- Adjusts pricing and rewards based on player behavior
- Manages global economic events or bonuses
- Ensures economic balance across all players

### [Performance optimization](#performance-optimization)

- Monitors system performance and resource usage
- Dynamically adjusts system complexity based on player count
- Manages entity pooling and cleanup
- Optimizes update frequencies for better performance

## [Configuration management](#configuration-management)

### [Global settings](#global-settings)

The World system manages global configuration:

- **Player Limits**: Maximum concurrent players (default: 8)
- **Respawn Rates**: Global multipliers for resource respawn times
- **Economic Rates**: Base conversion rates and pricing scales
- **Difficulty Settings**: Global modifiers for mining difficulty
- **Event Triggers**: World-wide events and their conditions

### [System parameters](#system-parameters)

- **Tool Pool Sizes**: Initial and maximum sizes for tool pools
- **Save Intervals**: How frequently player data is saved
- **Performance Thresholds**: Limits for system optimization
- **Debug Settings**: Development and testing configurations

## [Event system](#event-system)

### [Global events](#global-events)

The World system can trigger world-wide events:

- **Resource Bonuses**: Temporary increases in resource generation
- **Economic Events**: Market fluctuations or special pricing
- **Tool Promotions**: Temporary upgrade discounts
- **Seasonal Changes**: Time-based world modifications

### [System notifications](#system-notifications)

- **Player Achievements**: Broadcasts significant player accomplishments
- **System Status**: Performance warnings or optimization notifications
- **Economic Updates**: Changes to global pricing or rates
- **Maintenance Alerts**: System updates or scheduled events

## [Customization guide](#customization-guide)

### [Modifying world settings](#modifying-world-settings)

1. Locate the World.ts script configuration section.
2. Adjust global parameters:
   - `maxPlayers`: Maximum concurrent players
   - `resourceMultipliers`: Global resource generation rates
   - `economicRates`: Base currency and pricing scales
   - `performanceSettings`: Optimization thresholds

### [Adding world events](#adding-world-events)

1. Define event conditions and triggers.
2. Implement event effects on game systems.
3. Create notification systems for players.
4. Add event persistence for cross-session continuity.

### [Performance tuning](#performance-tuning)

1. Monitor player count and system load.
2. Adjust pool sizes based on usage patterns.
3. Optimize update frequencies for different systems.
4. Implement dynamic quality scaling for performance.

## [Integration points](#integration-points)

### [Save system integration](#save-system-integration)

- Coordinates save operations across all players
- Manages world state persistence
- Handles save file migration and updates
- Ensures data consistency and backup

### [UI system integration](#ui-system-integration)

- Provides global UI state management
- Coordinates HUD updates across players
- Manages shared UI elements and notifications
- Handles UI performance optimization

### [Tool system integration](#tool-system-integration)

- Manages global tool availability and distribution
- Coordinates tool pool optimization
- Handles tool balancing and progression
- Manages tool event systems and rewards

## [Best practices](#best-practices)

### [System design](#system-design)

- Keep World.ts focused on coordination rather than implementation
- Use event-driven architecture for system communication
- Implement proper error handling and recovery
- Design for scalability within the 8-player limit

### [Performance optimization](#performance-optimization-1)

- Monitor and log system performance metrics
- Implement graceful degradation for high load
- Use efficient data structures for player tracking
- Optimize frequent operations and update cycles

### [Maintainability](#maintainability)

- Document configuration options and their effects
- Implement comprehensive logging for debugging
- Design modular systems that can be easily modified
- Provide clear interfaces between different systems

