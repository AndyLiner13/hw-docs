Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_viewstyle

# ViewStyle type

Represents the styles of a [View()](/hw-docs/Reference/ui/Functions/View.md) component on a UI panel. For descriptions of the available styles, see [Custom UI Styles](/hw-docs/Desktop%20editor/Custom%20UI/Custom%20UI%20Styles.md#viewstyle).

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

[LayoutStyle](/hw-docs/Reference/ui/Type%20Aliases/LayoutStyle.md), [BorderStyle](/hw-docs/Reference/ui/Type%20Aliases/BorderStyle.md), [ShadowStyle](/hw-docs/Reference/ui/Type%20Aliases/ShadowStyle.md), [TransformStyle](/hw-docs/Reference/ui/Type%20Aliases/TransformStyle.md), [Bindable](/hw-docs/Reference/ui/Type%20Aliases/Bindable.md), [ColorValue](/hw-docs/Reference/ui/Type%20Aliases/ColorValue.md)

## Remarks

The [UIComponent](/hw-docs/Reference/ui/Abstract%20Classes/UIComponent.md) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](/hw-docs/Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md) for guides about using the API.