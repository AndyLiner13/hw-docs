---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_inworldpurchasable
---

# [InWorldPurchasable type](#inworldpurchasable-type)

Represents an in-world item that is purchaseable such as an item or item pack.

## [Signature](#signature)

```ts
export declare type InWorldPurchasable = {
    sku: string;
    name: string;
    price: InWorldPurchasablePrice;
    description: string;
    isPack: boolean;
    quantity: number;
};
```

## [References](#references)

[InWorldPurchasablePrice](InWorldPurchasablePrice.md)

