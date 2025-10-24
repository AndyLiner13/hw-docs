# EventSubscription interface

Represents what is returned from subscribing to an event.

## Signature

```typescript
export interface EventSubscription
```

## Properties

| Property | Description |
|----------|-------------|
| `disconnect` | Disconnect from an event listener so that you no longer receive events. **Signature:** `disconnect: () => void` |

## Remarks

This interface provides a standard way to manage event subscriptions in the Meta Horizon Worlds API, allowing you to cleanly disconnect from events when they are no longer needed.