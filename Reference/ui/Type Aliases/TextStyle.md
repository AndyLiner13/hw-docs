Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_textstyle

# TextStyle type

Represents the styles of a [Text](../Functions/Text_2.md) component in a UI panel.

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

[ViewStyle](ViewStyle.md), [Bindable](Bindable.md), [ColorValue](ColorValue.md), [FontFamily](FontFamily.md)

## Remarks

For descriptions of the available styles, see [Custom UI Styles](../../../Desktop%20editor/Custom%20UI/Custom%20UI%20Styles.md#textstyle).