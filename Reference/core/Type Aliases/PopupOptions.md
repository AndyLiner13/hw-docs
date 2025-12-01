Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_popupoptions

# PopupOptions type

The sound and display settings for a popup message.

## Signature

```
export declare type PopupOptions = {
    position: Vec3;
    fontSize: number;
    fontColor: Color;
    backgroundColor: Color;
    playSound: boolean;
    showTimer: boolean;
};
```

## References

[Vec3](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Vec3.md), [Color](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Color.md)

## Remarks

position: The offset of the popup message relative to the player's local position.
fontSize: The size of the popup message.
fontColor: The font color of the popup message.
backgroundColor: The background color of the popup message.
playSound: true to play the standard popup sound when displaying the popup message; false otherwsie.
showTimer: true to display the timer when displaying the popup message; false otherwise.