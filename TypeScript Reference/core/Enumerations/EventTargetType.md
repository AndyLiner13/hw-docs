# EventTargetType Enum

The target or destination of an event.

## Signature

```typescript
export declare enum EventTargetType
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Broadcast | 2 | A broadcast event. |
| Entity | 0 | An entity. |
| Player | 1 | A player. |

## Examples

### Using Event Target Types

```typescript
// Send event to specific entity
sendEvent("CustomEvent", data, EventTargetType.Entity, targetEntity);

// Send event to specific player
sendEvent("PlayerEvent", data, EventTargetType.Player, targetPlayer);

// Broadcast event to all listeners
sendEvent("GlobalEvent", data, EventTargetType.Broadcast);

// Handle different event target types
function handleEvent(eventType: string, data: any, targetType: EventTargetType) {
    switch (targetType) {
        case EventTargetType.Entity:
            console.log("Event sent to entity");
            break;
        case EventTargetType.Player:
            console.log("Event sent to player");
            break;
        case EventTargetType.Broadcast:
            console.log("Event broadcasted to all");
            break;
    }
}
```