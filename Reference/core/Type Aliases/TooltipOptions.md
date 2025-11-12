Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_tooltipoptions

API reference

# TooltipOptions type

The settings for displaying a tooltip message.

## Signature

```
export declare type TooltipOptions = {
    tooltipAnchorOffset?: Vec3;
    displayTooltipLine?: boolean;
    tooltipLineAttachmentProperties?: TooltipLineAttachmentProperties;
    playSound?: boolean;
};
```

## References

[Vec3](/hw-docs/Reference/core/Classes/Vec3.md), [TooltipLineAttachmentProperties](/hw-docs/Reference/core/Type%20Aliases/TooltipLineAttachmentProperties.md)

## Remarks

tooltipAnchorOffset - The offset of the tooltip relative to the anchor location.
displayTooltipLine - true to display a line that connects the tooltip to its attachment point; false otherwise.
tooltipLineAttachmentProperties - The attachment point and offset of the line that connects to the tooltip.
playSound - true to play a sound when displaying the tooltip; false otherwise.