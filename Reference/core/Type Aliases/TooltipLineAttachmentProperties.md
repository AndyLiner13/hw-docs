Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_tooltiplineattachmentproperties

# TooltipLineAttachmentProperties type

Determines how the line attached to a tooltip is displayed.

## Signature

```
export declare type TooltipLineAttachmentProperties = {
    lineAttachmentEntity?: Entity | PlayerBodyPartType;
    lineAttachmentLocalOffset?: Vec3;
    lineAttachmentRounded?: boolean;
    lineChokeStart?: number;
    lineChokeEnd?: number;
};
```

## References

[Entity](/hw-docs/Reference/core/Classes/Entity.md), [PlayerBodyPartType](/hw-docs/Reference/core/Enumerations/PlayerBodyPartType.md), [Vec3](/hw-docs/Reference/core/Classes/Vec3.md)

## Remarks

`lineAttachmentEntity` - The entity to attach to the line (defaults to the anchor attachment point). You can also set this to a `PlayerBodyPartType`.
`lineAttachmentLocalOffset` - Adds a local `Vec3` offset on the attachment point of the line.
`lineAttachmentRounded` - `true` to round off the start and end edges of the line; `false` otherwise.
`lineChokeStart` - The distance where the line should start rendering, after the attachment point.
`lineChokeEnd` - The distance where the line should stop rendering, before the line hits the tooltip.