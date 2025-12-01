Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_transformstyle

# TransformStyle type

Represents the style used to transform a UI element on a UI panel. For descriptions of the available styles, see [Custom UI Styles](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Custom%20UI/Custom%20UI%20Styles.md#transformstyle).

## Signature

```
export declare type TransformStyle = {
    transform?: Array<{
        rotate: Bindable<string>;
    } | {
        scale: Bindable<number>;
    } | {
        scaleX: Bindable<number>;
    } | {
        scaleY: Bindable<number>;
    } | {
        translate: [Bindable<number>, Bindable<number>];
    } | {
        translateX: Bindable<number>;
    } | {
        translateY: Bindable<number>;
    } | {
        skewX: Bindable<string>;
    } | {
        skewY: Bindable<string>;
    }>;
    transformOrigin?: [DimensionValue, DimensionValue];
};
```

## References

[Bindable](/hw-mcp-tools/documentation/hw-docs/Reference/ui/Type%20Aliases/Bindable.md), [DimensionValue](/hw-mcp-tools/documentation/hw-docs/Reference/ui/Type%20Aliases/DimensionValue.md)

## Remarks

The [UIComponent](/hw-mcp-tools/documentation/hw-docs/Reference/ui/Abstract%20Classes/UIComponent.md) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md) for guides about using the API.