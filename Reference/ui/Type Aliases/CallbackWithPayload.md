Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_callbackwithpayload

API reference

# CallbackWithPayload type

Represents a callback function interface for a [Player](/hw-docs/Reference/core/Classes/Player.md) object and its associated data.

## Signature

```
export declare type CallbackWithPayload = (player: Player, payload: string) => void;
```

## Remarks

Type Parameters:
player - The player associated with the callback.
payload - The data associated with the player.