---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_popupoptions
---

# [PopupOptions type](#popupoptions-type)

The sound and display settings for a popup message.

## [Signature](#signature)

```ts
export declare type PopupOptions = {
    position: Vec3;
    fontSize: number;
    fontColor: Color;
    backgroundColor: Color;
    playSound: boolean;
    showTimer: boolean;
};
```

## [References](#references)

[Vec3](../Classes/Vec3.md), [Color](../Classes/Color.md)

## [Remarks](#remarks)

position: The offset of the popup message relative to the player's local position.\
fontSize: The size of the popup message.\
fontColor: The font color of the popup message.\
backgroundColor: The background color of the popup message.\
playSound: true to play the standard popup sound when displaying the popup message; false otherwsie.\
showTimer: true to display the timer when displaying the popup message; false otherwise.

