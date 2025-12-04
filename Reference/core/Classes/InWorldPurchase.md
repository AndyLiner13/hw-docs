Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_inworldpurchase

# InWorldPurchase Class

Provides access to in-world item purchasing, which is useful for supporting purchases in a custom UI.

## Signature

```
export declare class InWorldPurchase
```

## Remarks

Typically when providing purchasing of in-world items, you provide an In-World Item gizmo that players can interact with to make purchases. However, this prevents you from incorporating the checkout process into a custom UI. [InWorldPurchase.launchCheckoutFlow()](/hw-docs/Reference/core/Classes/InWorldPurchase.md#launchcheckoutflow) makes it possible to launch the checkout process from a custom UI.

## Methods

|  |  |
| --- | --- |
| **launchCheckoutFlow(player, sku)** static | Launches the checkout process for an in-world item for the given player.      Signature  ``` static launchCheckoutFlow(player: Player, sku: string): void; ```  Parameters  player: [Player](/hw-docs/Reference/core/Classes/Player.md)  The player purchasing the item.  sku: string  Returns  void |