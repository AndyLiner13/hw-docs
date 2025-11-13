Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_borderstyle

# BorderStyle type

Represents the style of the borders on a UI element for a UI panel. For descriptions of the available styles, see [Custom UI Styles](/hw-docs/Desktop%20editor/Custom%20UI/Custom%20UI%20Styles.md#borderstyle).

## Signature

```
export declare type BorderStyle = {
    borderColor?: Bindable<ColorValue>;
    borderRadius?: Bindable<number>;
    borderBottomLeftRadius?: Bindable<number>;
    borderBottomRightRadius?: Bindable<number>;
    borderTopLeftRadius?: Bindable<number>;
    borderTopRightRadius?: Bindable<number>;
    borderWidth?: Bindable<number>;
    borderBottomWidth?: Bindable<number>;
    borderEndWidth?: Bindable<number>;
    borderLeftWidth?: Bindable<number>;
    borderRightWidth?: Bindable<number>;
    borderStartWidth?: Bindable<number>;
    borderTopWidth?: Bindable<number>;
};
```

## References

[Bindable](/hw-docs/Reference/ui/Type%20Aliases/Bindable.md), [ColorValue](/hw-docs/Reference/ui/Type%20Aliases/ColorValue.md)

## Remarks

The [UIComponent](/hw-docs/Reference/ui/Abstract%20Classes/UIComponent.md) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](/hw-docs/Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md) for guides about using the API.