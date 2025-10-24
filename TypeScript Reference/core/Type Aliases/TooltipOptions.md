# TooltipOptions type

The settings for displaying a tooltip message.

## Signature

```typescript
export declare type TooltipOptions = {
    tooltipAnchorOffset?: Vec3;
    displayTooltipLine?: boolean;
    tooltipLineAttachmentProperties?: TooltipLineAttachmentProperties;
    playSound?: boolean;
};
```

## References

[Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3), [TooltipLineAttachmentProperties](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_tooltiplineattachmentproperties)

## Remarks

- `tooltipAnchorOffset` - The offset of the tooltip relative to the anchor location.
- `displayTooltipLine` - true to display a line that connects the tooltip to its attachment point; false otherwise.
- `tooltipLineAttachmentProperties` - The attachment point and offset of the line that connects to the tooltip.
- `playSound` - true to play a sound when displaying the tooltip; false otherwise.