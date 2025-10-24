# TransformStyle type

Represents the style used to transform a UI element on a UI panel. For descriptions of the available styles, see [Custom UI Styles](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#transformstyle).

## Signature

```typescript
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

[Bindable](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable), [DimensionValue](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_dimensionvalue)

## Remarks

The [UIComponent](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uicomponent) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel) for guides about using the API.