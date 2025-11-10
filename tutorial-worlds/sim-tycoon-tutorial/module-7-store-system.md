Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/sim-tycoon-tutorial/module-7-store-system

# Module 7 - Store System

The store system enables players to purchase tools and upgrades using the currency they’ve earned from converting resources. It provides an interface for players to progress their tools and capabilities.

## System components

### StoreSystem.ts

The store system manages the purchase flow for tools and upgrades. It validates purchases, handles currency transactions, and distributes tools to players.

Key features:

* **Purchase Validation**: Ensures players have sufficient currency for purchases
* **Tool Distribution**: Handles giving tools to players through the ToolGroup system
* **Currency Management**: Deducts costs and tracks player spending
* **Progress Tracking**: Records purchases for save system persistence
* **UI Integration**: Provides purchase confirmation and feedback

### Store properties

The store system has configurable properties for managing the shop:

* **toolCosts**: Mapping of tool names to their purchase costs
* **upgradeCosts**: Costs for upgrading existing tools to higher tiers
* **discountRates**: Optional discount percentages for bulk purchases
* **availableTools**: List of tools currently available for purchase
* **purchaseHistory**: Tracking of player purchases for analytics

## Purchase mechanics

### Tool purchasing flow

- Player approaches store trigger or interface
- Store displays available tools and their costs
- Player selects desired tool or upgrade
- System validates player has sufficient currency
- Currency is deducted from player account
- Tool is distributed through ToolGroup system
- Player’s SimPlayer state is updated
- Purchase is recorded for save persistence

### Upgrade system

The store integrates with the tool progression system:

* **Tier Upgrades**: Players can upgrade tools to higher tiers
* **Progressive Costs**: Each tier costs more than the previous
* **Stat Improvements**: Higher tiers provide better performance
* **Visual Progression**: Tool appearance improves with tier

## Integration with other systems

The store works closely with ToolGroups to handle tool distribution and integrates with SimPlayer for purchase validation and state management.

## Currency integration

### Currency validation

Before any purchase, the store system:

* Checks player’s current currency balance
* Validates the requested purchase cost
* Provides feedback if insufficient funds
* Suggests alternative lower-cost options

### Transaction processing

When a valid purchase is made:

* Currency is immediately deducted from player balance
* Transaction is logged for tracking
* Player statistics are updated
* HUD displays reflect new balance

## Tool distribution

### ToolGroup integration

The store works closely with ToolGroups to handle tool distribution:

- **Tool Request**: Store requests specific tool from appropriate ToolGroup
- **Pool Management**: ToolGroup provides tool from pool or spawns new instance
- **Player Assignment**: Tool is assigned to player through SimPlayer
- **Previous Tool Return**: Old tool is returned to its respective pool

### Equipment management

When players purchase new tools:

* Current tool is automatically returned to pool
* New tool is equipped immediately
* Player capacity or abilities update instantly
* Visual feedback confirms the equipment change

## Store interface

### Purchase options

The store provides several purchase categories:

#### Pickaxe purchases

* Tool tier upgrades for better mining efficiency
* Specialized pickaxes for specific resource types
* Repair services for damaged tools

#### Backpack purchases

* Capacity upgrades for larger inventories
* Specialized storage for specific resources
* Enhanced efficiency backpacks

#### Utility purchases

* Temporary boosts or multipliers
* Cosmetic upgrades for tools
* Special abilities or enhancements

## Integration with other systems

### SimPlayer integration

* Purchase validation through player currency
* Tool assignment through equipGrabbable/equipAttachable
* State persistence through save system
* Progress tracking for achievements

### HUD integration

* Real-time currency display during shopping
* Purchase confirmation dialogs
* Tool comparison interfaces
* Upgrade recommendation systems

### Save system integration

* Purchase history is saved between sessions
* Tool ownership persists across play sessions
* Currency balances are maintained
* Upgrade progress is tracked

## Customization guide

### Adding new items

- Define the new tool or item entity.
- Create appropriate ToolGroup for management.
- Add item to store inventory configuration.
- Set appropriate cost and tier placement.
- Update UI to display new item.

### Modifying costs

- Locate the store configuration.
- Update the `toolCosts` or `upgradeCosts` mapping.
- Adjust values to maintain economic balance.
- Test progression flow with new pricing.

### Creating special offers

- Implement discount rate system
- Add limited-time purchase options
- Create bundle deals for multiple items
- Implement loyalty rewards for frequent customers

## Economic balancing

### Cost scaling

Store prices should follow progression principles:

* **Early Tools**: Affordable with basic resource conversion
* **Mid-Tier Tools**: Require moderate grinding or resource optimization
* **High-Tier Tools**: Significant investment requiring efficient play
* **Top-Tier Tools**: Major achievement requiring substantial progression

### Progression pacing

The store system should support healthy progression:

* **Quick Early Wins**: First few upgrades should be achievable quickly
* **Meaningful Choices**: Mid-game should present interesting upgrade decisions
* **Long-term Goals**: High-end items should provide aspirational targets
* **Endgame Content**: Top-tier items should require mastery of all systems

## Performance optimization

### Efficient transactions

The store system optimizes performance through:

* **Cached Tool Pools**: Pre-spawned tools reduce purchase latency
* **Batch Processing**: Multiple purchases can be processed efficiently
* **Lightweight Validation**: Quick currency checks before expensive operations
* **Optimized UI Updates**: Minimal refresh cycles for responsive interface

### Memory management

Store operations manage memory efficiently:

* **Pool Reuse**: Tools are recycled rather than recreated
* **Transaction Logging**: Efficient storage of purchase history
* **State Persistence**: Compressed save data for store state
* **UI Optimization**: Responsive interfaces without memory leaks

## Advanced features

### Dynamic pricing

Implement market-style systems:

* **Supply and Demand**: Prices fluctuate based on player behavior
* **Seasonal Sales**: Special pricing during events
* **Bulk Discounts**: Better rates for large purchases
* **Loyalty Programs**: Rewards for frequent customers

### Social features

Add multiplayer elements:

* **Gift System**: Players can purchase items for others
* **Trading Post**: Player-to-player item exchange
* **Group Purchases**: Collaborative buying for expensive items
* **Leaderboards**: Track top spenders or collectors