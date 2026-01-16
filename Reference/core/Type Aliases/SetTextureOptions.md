Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_settextureoptions

# SetTextureOptions type

Options for the [MeshEntity.setTexture()](../Classes/MeshEntity.md#settexture) method.

## Signature

```
export declare type SetTextureOptions = {
    players?: Array<Player>;
};
```

## References

[Player](../Classes/Player.md)

## Remarks

players - The players to apply the texture for. If null or empty, applies the texture for all players.