Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_viewstyle

# ViewStyle type

Represents the styles of a [View()](../Functions/View.md) component on a UI panel. For descriptions of the available styles, see [Custom UI Styles](../../../Desktop%20editor/Custom%20UI/Custom%20UI%20Styles.md#viewstyle).

## Signature

```
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

[LayoutStyle](LayoutStyle.md), [BorderStyle](BorderStyle.md), [ShadowStyle](ShadowStyle.md), [TransformStyle](TransformStyle.md), [Bindable](Bindable.md), [ColorValue](ColorValue.md)

## Remarks

The [UIComponent](../Abstract%20Classes/UIComponent.md) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](../../../Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md) for guides about using the API.