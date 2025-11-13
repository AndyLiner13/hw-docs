Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerentitlement

# PlayerEntitlement Interface

Represents an in-world item a player is authorized to access due to a purchase, achievement, or some type of reward system.

## Signature

```
export interface PlayerEntitlement
```

## Properties

|  |  |
| --- | --- |
| **description** | The description of the item as it appears in the UI.      Signature  ``` description: string; ``` |
| **displayName** | The name of the item as it appears in the UI.      Signature  ``` displayName: string; ``` |
| **quantity** | The number of items player has entitlements to.      Signature  ``` quantity: number; ``` |
| **sku** | The SKU of the item.      Signature  ``` sku: string; ``` |