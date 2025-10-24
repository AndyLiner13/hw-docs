# PlayerEntitlement Interface

Represents an in-world item a player is authorized to access due to a purchase, achievement, or some type of reward system.

## Signature

```typescript
export interface PlayerEntitlement
```

## Properties

| Property | Description |
| --- | --- |
| `description` | The description of the item as it appears in the UI.<br/>**Signature:** `description: string;` |
| `displayName` | The name of the item as it appears in the UI.<br/>**Signature:** `displayName: string;` |
| `quantity` | The number of items player has entitlements to.<br/>**Signature:** `quantity: number;` |
| `sku` | The SKU of the item.<br/>**Signature:** `sku: string;` |