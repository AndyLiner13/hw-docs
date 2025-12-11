Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_shadowstyle

# ShadowStyle type

Represents the style of a UI element's shadow on a custom UI panel. For descriptions of the available styles, see [Custom UI Styles](../../../Desktop%20editor/Custom%20UI/Custom%20UI%20Styles.md#shadowstyle).

## Signature

```
export declare type ShadowStyle = {
    shadowColor?: Bindable<ColorValue>;
    shadowFalloff?: 'linear' | 'sqrt' | 'sigmoid';
    shadowOffset?: [number, number];
    shadowOpacity?: Bindable<number>;
    shadowRadius?: number;
    shadowSpreadRadius?: number;
};
```

## References

[Bindable](Bindable.md), [ColorValue](ColorValue.md)

## Remarks

The [UIComponent](../Abstract%20Classes/UIComponent.md) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](../../../Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md) for guides about using the API.