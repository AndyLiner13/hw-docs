# OnPlayerPurchasedItemEventPayload type

Content of the data sent when a player purchases an item from an in-world shop.

## Signature

```typescript
export declare type OnPlayerPurchasedItemEventPayload = {
    playerId: number;
    shopId: number;
    consumedItemSku: string;
    consumedItemQuantity: number;
    grantItemSku: string;
    grantItemQuantity: number;
};
```