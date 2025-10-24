# TooltipLineAttachmentProperties type

Determines how the line attached to a tooltip is displayed.

## Signature

```typescript
export declare type TooltipLineAttachmentProperties = {
    lineAttachmentEntity?: Entity | PlayerBodyPartType;
    lineAttachmentLocalOffset?: Vec3;
    lineAttachmentRounded?: boolean;
    lineChokeStart?: number;
    lineChokeEnd?: number;
};
```

## References

[Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity), [PlayerBodyPartType](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerbodyparttype), [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)

## Remarks

- `lineAttachmentEntity` - The entity to attach to the line (defaults to the anchor attachment point). You can also set this to a `PlayerBodyPartType`.
- `lineAttachmentLocalOffset` - Adds a local `Vec3` offset on the attachment point of the line.
- `lineAttachmentRounded` - `true` to round off the start and end edges of the line; `false` otherwise.
- `lineChokeStart` - The distance where the line should start rendering, after the attachment point.
- `lineChokeEnd` - The distance where the line should stop rendering, before the line hits the tooltip.