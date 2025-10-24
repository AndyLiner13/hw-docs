# CallbackWithPayload type

Represents a callback function interface for a [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player) object and its associated data.

## Signature

```typescript
export declare type CallbackWithPayload = (player: Player, payload: string) => void;
```

## Remarks

Type Parameters:
- player - The player associated with the callback.
- payload - The data associated with the player.