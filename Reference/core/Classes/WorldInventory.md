---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_worldinventory
---

# [WorldInventory Class](#worldinventory-class)

Represents the inventory of items in a world.

## [Signature](#signature)

```
export
 declare 
class
 
WorldInventory
 
```

## [Examples](#examples)

This example method retrieves the entitlements for a given player, and verifies whether a specific item is owned by the player.

```
verifyEntitlement
(
player
:
 hz
.
Player
,
 itemSKU
:
 
string
)
 
{

  
const
 items
:
 
PlayerEntitlementDetails
[]
 
=
 
await
 
WorldInventory
.
getPlayerEntitlements
(
player
);

  
const
 isActive 
=
 
WorldInventory
.
DoesPlayerHaveEntitlement
(
player
,
itemSKU
);

  console
.
log
(
itemSKU
,
" consumbed item is"
,
 isActive
,
"\n"
);


}
```

## [Remarks](#remarks)

You can use this class to create a custom inventory of items a player is entitled to.

## [Methods](#methods)

|                                                           |                                                                               |
| --------------------------------------------------------- | ----------------------------------------------------------------------------- |
| \*\*consumeItemForPlayer(player, sku, quantity)\*\*static | Consumes the specified item or item pack for the given player.Signature\`\`\` |
| static                                                    |                                                                               |
| consumeItemForPlayer                                      |                                                                               |
| (                                                         |                                                                               |
| player                                                    |                                                                               |
| :                                                         |                                                                               |

Player
,
sku
:

string
,
quantity
?:
number
):

void
;
`Parametersplayer: [Player](Player.md)The player that's authorized to use the items.sku: stringThe SKU of the item or item pack to consume.quantity: number*(Optional)* The quantity of the item to consume. 1 is the minimum and default value.ReturnsvoidExamplesIn this example, a player consumes 5 power-up items.`
consumeItemForPlayer
(
player
,

"power\_up\_sku"
,

5
);

````|
| **doesPlayerHaveEntitlement(player, sku)**static      | Indicates whether the player has an entitlement for an in-world item based on the given SKU.Signature```
static
 doesPlayerHaveEntitlement
(
player
:
 
Player
,
 sku
:
 
string
):
 
Promise
<boolean>
;
```Parametersplayer: [Player](Player.md)The player to fetch entitlement information for.sku: stringThe SKU of the in-world item.ReturnsPromise\<boolean>- True if the player owns the in-world item for the SKU, otherwise false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **getPlayerEntitlementQuantity(player, sku)**static   | Returns the player in-world item quantity for the SKU.Signature```
static
 getPlayerEntitlementQuantity
(
player
:
 
Player
,
 sku
:
 
string
):
 
Promise
<number>
;
```Parametersplayer: [Player](Player.md)The player to fetch in world items forsku: stringItem/Item Pack SKUs to verify forReturnsPromise\<number>- Returns item & item pack quantity if the player owns the in-world item for the SKU, otherwise 0 if player does not own item.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **getPlayerEntitlements(player)**static               | Gets a list of active entitlements for the given player in a world.Signature```
static
 getPlayerEntitlements
(
player
:
 
Player
):
 
Promise
<
PlayerEntitlement
[]>;
```Parametersplayer: [Player](Player.md)The player to fetch in-world entitlements for.ReturnsPromise<[PlayerEntitlement](../Interfaces/PlayerEntitlement.md)\[]>- A promise that resolves to a list of in world entitlement details for the player.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **getWorldPurchasablesBySKUs(skus)**static            | Returns a list of any in-world purchase items with SKUs that match the given list of item SKUs.Signature```
static
 getWorldPurchasablesBySKUs
(
skus
:
 
Array
<string>
):
 
Promise
<
Array
<
InWorldPurchasable
>>;
```Parametersskus: Array\<string>The list of item SKUs to query.ReturnsPromise\<Array<[InWorldPurchasable](../Type%20Aliases/InWorldPurchasable.md)>>- A promise that resolves to a list of in-world purchase items with SKUs that match the list of SKUs provided.ExamplesIn this example, a menu displays any in-world purchase items with the provides SKUs.```
class
 
GameManager
 
extends
 hz
.
Component
<
typeof
 
GameManager
>
 
{

  
static
 propsDefinition 
=
 
{};

  
const
 skus 
=
 
[
'hamburger_item_123'
,
 
'hotdog_item_123'
];

  start
()
 
{

    
this
.
connectLocalBroadcastEvent
(
setMenuBoardState
,
 
(
data
:
 
{
state
:
 
MenuBoardState
})
 
=>
 
{

      
this
.
setMenuBoardState
(
data
.
state
);

    
});

    
const
 featuredItems 
=
 
await
 hz
.
WorldInventory
.
getWorldPurchasablesBySKUs
(
skus
);

    
if
(
featuredItems
.
length 
>
 
0
)
 
{

      
this
.
setMenuBoardState
({
items
:
 featuredItems
,
 message
:
 
null
});

    
}
 
else
 
{

      
this
.
setMenuBoardState
({
items
:
 
[],
 message
:
 
'No items available today!'
});

    
}

  
}

  
}


}


hz
.
Component
.
register
(
GameManager
);
```RemarksThis method allows you to query in-world purchase items so you can display their current catalog information in your world, such as their price and display name. |
| **grantItemToPlayer(player, sku, quantity)**static    | Increases the player in world inventory item quantity by amount. Works for both durable and consumable items. Durable items will ignore the quantity parameter.Signature```
static
 grantItemToPlayer
(
player
:
 
Player
,
 sku
:
 
string
,
 quantity
?:
 number
):
 
void
;
```Parametersplayer: [Player](Player.md)The player to grant item to.sku: stringThe unique sku corresponding to the item to grant. Find it on Creator portalquantity: number*(Optional)*ReturnsvoidExamples```
WorldInventory
.
grantItemToPlayer
(
player
,
 
"item_sku"
);
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
````

