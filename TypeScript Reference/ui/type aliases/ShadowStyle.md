# ShadowStyle type

Represents the style of a UI element's shadow on a custom UI panel. For descriptions of the available styles, see [Custom UI Styles](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#shadowstyle).

## Signature

```typescript
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

[Bindable](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable), [ColorValue](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_colorvalue)

## Remarks

The [UIComponent](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uicomponent) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel) for guides about using the API.