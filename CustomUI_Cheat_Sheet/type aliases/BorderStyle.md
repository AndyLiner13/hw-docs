# BorderStyle type

Represents the style of the borders on a UI element for a UI panel. For descriptions of the available styles, see [Custom UI Styles](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#borderstyle).

## Signature

```typescript
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

[Bindable](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable), [ColorValue](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_colorvalue)

## Remarks

The [UIComponent](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uicomponent) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel) for guides about using the API.