---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrolsconnectoptions
---

# [PlayerControlsConnectOptions type](#playercontrolsconnectoptions-type)

The options to pass to [PlayerControls.connectLocalInput()](../Classes/PlayerControls.md#connectlocalinput).

## [Signature](#signature)

```ts
export declare type PlayerControlsConnectOptions = {
    preferredButtonPlacement?: ButtonPlacement;
    customAssetIconId?: string;
};
```

## [References](#references)

[ButtonPlacement](../Enumerations/ButtonPlacement.md)

## [Remarks](#remarks)

`preferredButtonPlacement` - The button placement to use, if supported. Certain platforms might not support all placements. Attempting to place multiple buttons at the same location prioritizes the latest button enabled.

