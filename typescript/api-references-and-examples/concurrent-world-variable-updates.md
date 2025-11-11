Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/concurrent-world-variable-updates

# Concurrent-safe world level variable updates

The `setWorldVariableAcrossAllInstancesAsync` API includes an optional concurrency control mode that prevents data loss when multiple instances modify the same world variable simultaneously. This mode helps maintain data integrity in competitive scenarios and eliminates the need for manual conflict resolution.

## Why use concurrency control

Concurrency control for world variable updates solves critical problems in multi-instance scenarios:

* **Prevent data loss** when multiple players interact with shared game state, such as community leaderboards, team scores, or shared inventory systems
* **Eliminate race conditions** in competitive scenarios where timing and data accuracy are crucial
* **Improve data integrity** for cross-instance persistence without requiring manual conflict resolution
* **Reduce debugging complexity** by providing structured error information instead of silent overwrites

The feature uses version-based conflict detection similar to database optimistic locking patterns, ensuring your game logic receives accurate feedback about update success or failure.

## API overview

The `setWorldVariableAcrossAllInstancesAsync` method now includes an optional `allowConcurrentOverride` parameter that controls how concurrent updates are handled:

### Method signature

```vs
setWorldVariableAcrossAllInstancesAsync<T>(
  key: string,
  value: T,
  allowConcurrentOverride?: boolean
): Promise<T | WorldVariableUpdateResult<T>>;
```

### Parameters

* `key` - Unique identifier for the world variable
* `value` - Data to store in the world variable
* `allowConcurrentOverride` - Controls concurrent update behavior:
  + `true` (default): Maintains existing behavior, overwrites unconditionally
  + `false`: Enables conflict detection and structured error reporting

### Return types

The return type depends on the `allowConcurrentOverride` setting:

* **Legacy mode** (`true`): Returns `Promise<T>` - the stored value without error reporting
* **Concurrent-safe mode** (`false`): Returns `Promise<WorldVariableUpdateResult<T>>` - structured result with success status and error details

## WorldVariableUpdateResult interface

When using concurrent-safe mode, the API returns a structured result object:

```vs
interface WorldVariableUpdateResult<T> {
  success: boolean; // True if update succeeded
  value: T; // Updated value (current state if failed)
  errorType?: WorldVariableUpdateErrorType; // Error details if failed
}
```

### Error types

* **SERVER\_ERROR (0)**: General server failure - handle this by retrying with exponential backoff
* **CONCURRENT\_UPDATE (1)**: Another update modified the variable - `value` contains the conflicting data
* **UPDATE\_THROTTLED (2)**: Rate limit exceeded - `value` contains latest state, retry after delay

## Usage examples

### Basic usage with conflict detection

```vs
async function updatePlayerScore(
  player: Player,
  newScore: number,
): Promise<boolean> {
  const result = await this.world.persistentStorageWorld.setWorldVariableAcrossAllInstancesAsync(
    'game:high_scores',
    {playerId: player.id, score: newScore, timestamp: Date.now()},
    false, // Enable conflict detection
  );

  if (result.success) {
    console.log('Score updated successfully:', result.value);
    return true;
  } else {
    console.log('Update failed:', result.errorType, result.value);
    return false;
  }
}
```

### Advanced error handling with retry logic

This example updates a player’s high score while comparing against conflicting values before retrying - if a higher score already exists, the update is skipped to avoid unnecessary retries.

```vs
async function updatePlayerScoreWithRetry(
  player: Player,
  newScore: number,
  maxRetries = 3,
): Promise<boolean> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const result = await this.world.persistentStorageWorld.setWorldVariableAcrossAllInstancesAsync(
        'game:high_scores',
        {playerId: player.id, score: newScore, timestamp: Date.now()},
        false, // Enable conflict detection
      );

      if (result.success) {
        console.log('Score updated successfully:', result.value);
        return true;
      }

      // Handle specific error types
      if (result.errorType === WorldVariableUpdateErrorType.CONCURRENT_UPDATE) {
        console.log(`Attempt ${attempt + 1}: Concurrent update detected`);
        // Check if the conflicting value is acceptable
        const conflictingData = result.value;
        if (conflictingData.score >= newScore) {
          console.log('Higher score already exists, skipping update');
          return true; // Consider this a success
        }
        // Continue retry loop for actual conflicts
      } else if (result.errorType === WorldVariableUpdateErrorType.UPDATE_THROTTLED) {
        // Wait before retrying due to rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
      }
    } catch (error) {
      console.error(`Score update error on attempt ${attempt + 1}:`, error);
    }
  }

  console.error('Failed to update score after', maxRetries, 'attempts');
  return false;
}
```

### Team inventory management

This example adds an item to a shared team inventory while preventing corruption from concurrent updates - if another player modifies the inventory simultaneously, the conflict is detected and can be intelligently merged.

```vs
async function addItemToTeamInventory(
  teamId: string,
  item: InventoryItem,
): Promise<void> {
  const inventoryKey = `team_inventory:${teamId}`;

  // First, get current inventory state
  const currentInventory = (await this.world.persistentStorageWorld.fetchWorldVariableAsync(
    inventoryKey,
  )) || {items: []};

  const result = await this.world.persistentStorageWorld.setWorldVariableAcrossAllInstancesAsync(
    inventoryKey,
    {items: [...currentInventory.items, item], lastUpdated: Date.now()},
    false, // Prevent inventory corruption from concurrent updates
  );

  if (!result.success && result.errorType === WorldVariableUpdateErrorType.CONCURRENT_UPDATE) {
    // Another player modified inventory - merge changes intelligently
    console.log('Inventory was modified by another player. Current state:', result.value);
    // Implement merge logic based on your game rules
  }
}
```

### Legacy compatibility

```vs
// Existing code continues to work unchanged
const result = await this.world.persistentStorageWorld.setWorldVariableAcrossAllInstancesAsync(
  'leaderboard:top_score',
  {playerId: player.id, score: 1500},
  true, // Optional - true is default, maintains existing behavior
);
// result is of type PlayerScore (or whatever T is)
```

## Best practices

### Retry strategies

* Implement exponential backoff for `SERVER_ERROR` cases
* Check conflict values before deciding whether to retry `CONCURRENT_UPDATE` scenarios
* Monitor rate limits and implement appropriate delays for `UPDATE_THROTTLED` responses

### Conflict resolution

* For competitive data (scores, rankings), check if the conflicting value is better than your update
* For additive data (inventory, collections), consider intelligently merging changes
* For configuration data, determine which update should take precedence based on your game rules

## Additional considerations

### Version tracking behavior

* Every world instance starts with up-to-date world variable values and cached versions
* Both `fetchWorldVariableAsync()` and `setWorldVariableAcrossAllInstancesAsync()` update the cached value and version
* If you haven’t fetched a value before performing a concurrent-safe set, the initial state is used

### Limitations

* World variables are subject to size and rate limiting constraints
* The concurrent override protection adds minimal latency for conflict detection
* Error recovery strategies should account for network connectivity issues

## Related APIs

* [World Level Variables Guide](/hw-docs/desktop-editor/quests-leaderboards-and-variable-groups/variable-groups/world-level-variables) - Introduction to world variables and basic operations
* [IPersistentStorageWorld API Reference](/horizon-worlds/reference/2.0.0/core_ipersistentstorageworld) - API for reading and updating world variable values