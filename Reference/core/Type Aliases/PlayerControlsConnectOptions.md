Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrolsconnectoptions

# PlayerControlsConnectOptions type

The options to pass to [PlayerControls.connectLocalInput()](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/PlayerControls.md#connectlocalinput).

## Signature

```
export declare type PlayerControlsConnectOptions = {
    preferredButtonPlacement?: ButtonPlacement;
    customAssetIconId?: string;
};
```

## References

[ButtonPlacement](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/ButtonPlacement.md)

## Remarks

`preferredButtonPlacement` - The button placement to use, if supported. Certain platforms might not support all placements. Attempting to place multiple buttons at the same location prioritizes the latest button enabled.