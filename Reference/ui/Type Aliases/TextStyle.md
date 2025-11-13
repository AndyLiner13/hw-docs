Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_textstyle

# TextStyle type

Represents the styles of a [Text](/hw-docs/Reference/ui/Functions/Text_2.md) component in a UI panel.

## Signature

```
export declare type TextStyle = ViewStyle & {
    color?: Bindable<ColorValue>;
    fontFamily?: FontFamily;
    fontSize?: Bindable<number>;
    fontWeight?: Bindable<'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'>;
    letterSpacing?: number;
    lineHeight?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center';
    textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
    textDecorationLine?: Bindable<'none' | 'underline' | 'line-through' | 'underline line-through'>;
    textShadowColor?: Bindable<ColorValue>;
    textShadowOffset?: [number, number];
    textShadowRadius?: number;
    whiteSpace?: 'normal' | 'pre-line' | 'pre-wrap';
};
```

## References

[ViewStyle](/hw-docs/Reference/ui/Type%20Aliases/ViewStyle.md), [Bindable](/hw-docs/Reference/ui/Type%20Aliases/Bindable.md), [ColorValue](/hw-docs/Reference/ui/Type%20Aliases/ColorValue.md), [FontFamily](/hw-docs/Reference/ui/Type%20Aliases/FontFamily.md)

## Remarks

For descriptions of the available styles, see [Custom UI Styles](/hw-docs/Desktop%20editor/Custom%20UI/Custom%20UI%20Styles.md#textstyle).