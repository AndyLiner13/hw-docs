Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_settextureoptions

# SetTextureOptions type

Options for the [MeshEntity.setTexture()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_meshentity#settexture) method.

## Signature

```
export declare type SetTextureOptions = {
    players?: Array<Player>;
};
```

## References

[Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)

## Remarks

players - The players to apply the texture for. If null or empty, applies the texture for all players.