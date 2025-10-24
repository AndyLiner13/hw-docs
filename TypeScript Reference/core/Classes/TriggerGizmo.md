# TriggerGizmo Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity)

Represents a Trigger gizmo in the world, which triggers an event when a player enters or exits a given area.

## Signature

```typescript
export declare class TriggerGizmo extends Entity
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `enabled` | `WritableHorizonProperty<boolean>` | Indicates whether the Trigger gizmo is enabled. |

## Methods

| Method | Description |
|--------|-------------|
| `getWhoCanTrigger(): Array<Player>` | Gets all the players that can trigger the Trigger gizmo. |
| `setWhoCanTrigger(players: 'anyone' \| Array<Player>): void` | Specifies the players that can trigger the Trigger gizmo. |
| `toString(): string` | Creates a human-readable representation of the TriggerGizmo object. |

### getWhoCanTrigger

Gets all the players that can trigger the Trigger gizmo.

```typescript
getWhoCanTrigger(): Array<Player>
```

**Returns:** `Array<Player>` - An array of players that can trigger the gizmo.

**Remarks:**
If the trigger is set to Objects, it returns an empty array. If the trigger is set to Players, it returns all players (default) or the players specified by a TriggerGizmo.setWhoCanTrigger() call.

### setWhoCanTrigger

Specifies the players that can trigger the Trigger gizmo.

```typescript
setWhoCanTrigger(players: 'anyone' | Array<Player>): void
```

**Parameters:**
- `players: 'anyone' | Array<Player>` - An array of players that can trigger the gizmo, or anyone (default).

**Returns:** `void`

**Examples:**
```typescript
trigger.setWhoCanTrigger('anyone'); // anyone can trigger
trigger.setWhoCanTrigger([]); // no one can trigger
trigger.setWhoCanTrigger([player1, player2]); // only those 2 players can trigger
```

### toString

Creates a human-readable representation of the TriggerGizmo object.

```typescript
toString(): string
```

**Returns:** `string` - A string representation TriggerGizmo object.

## Examples

### Working with Trigger Gizmos

```typescript
// Get a trigger gizmo from the world
const trigger = world.getEntitiesByName("EntranceTrigger")[0] as TriggerGizmo;

// Enable the trigger
trigger.enabled.set(true);

// Set who can trigger it
trigger.setWhoCanTrigger('anyone');

// Restrict to specific players
const allowedPlayers = [player1, player2];
trigger.setWhoCanTrigger(allowedPlayers);

// Check who can trigger
const canTrigger = trigger.getWhoCanTrigger();
console.log("Players who can trigger:", canTrigger);

// Listen for trigger events
trigger.onPlayerEntered.add((player: Player) => {
    console.log(`Player ${player.name} entered trigger area`);
});

trigger.onPlayerExited.add((player: Player) => {
    console.log(`Player ${player.name} exited trigger area`);
});

// Conditional trigger access
function updateTriggerAccess(trigger: TriggerGizmo, players: Array<Player>) {
    const vipPlayers = players.filter(p => p.hasTag("VIP"));
    trigger.setWhoCanTrigger(vipPlayers);
}

// Toggle trigger state
function toggleTrigger(trigger: TriggerGizmo) {
    trigger.enabled.set(!trigger.enabled.get());
}
```

## References

- [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) - Base class for all world entities
- [WritableHorizonProperty](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_writablehorizonproperty) - Property system for reactive updates