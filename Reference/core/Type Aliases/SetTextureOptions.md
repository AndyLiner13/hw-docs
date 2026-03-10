---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_settextureoptions
---

# [SetTextureOptions type](#settextureoptions-type)

Options for the [MeshEntity.setTexture()](../Classes/MeshEntity.md#settexture) method.

## [Signature](#signature)

```
export
 declare type 
SetTextureOptions
 
=
 
{

    players
?:
 
Array
<
Player
>;


};
```

## [References](#references)

[Player](../Classes/Player.md)

## [Remarks](#remarks)

players - The players to apply the texture for. If null or empty, applies the texture for all players.

