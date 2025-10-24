# ViewStyle type

Represents the styles of a [View()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_view) component on a UI panel. For descriptions of the available styles, see [Custom UI Styles](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#viewstyle).

## Signature

```typescript
export declare type ViewStyle = LayoutStyle & BorderStyle & ShadowStyle & TransformStyle & {
    backgroundColor?: Bindable<ColorValue>;
    backgroundClip?: 'border-box' | 'padding-box';
    opacity?: Bindable<number>;
    gradientColorA?: Bindable<ColorValue>;
    gradientColorB?: Bindable<ColorValue>;
    gradientXa?: number | string;
    gradientYa?: number | string;
    gradientXb?: number | string;
    gradientYb?: number | string;
    gradientAngle?: string;
};
```

## References

[LayoutStyle](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_layoutstyle), [BorderStyle](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_borderstyle), [ShadowStyle](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_shadowstyle), [TransformStyle](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_transformstyle), [Bindable](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable), [ColorValue](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_colorvalue)

## Remarks

The [UIComponent](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uicomponent) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel) for guides about using the API.