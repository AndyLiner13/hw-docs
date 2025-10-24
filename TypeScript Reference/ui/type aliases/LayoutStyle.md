# LayoutStyle type

Represents the styles of a layout for a UI panel. For descriptions of the available styles, see [Custom UI Styles](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#layoutstyle).

## Signature

```typescript
export declare type LayoutStyle = {
    display?: Bindable<'none' | 'flex'>;
    width?: Bindable<DimensionValue>;
    height?: Bindable<DimensionValue>;
    bottom?: Bindable<DimensionValue>;
    end?: DimensionValue;
    left?: Bindable<DimensionValue>;
    right?: Bindable<DimensionValue>;
    start?: DimensionValue;
    top?: Bindable<DimensionValue>;
    minWidth?: DimensionValue;
    maxWidth?: DimensionValue;
    minHeight?: DimensionValue;
    maxHeight?: DimensionValue;
    margin?: DimensionValue;
    marginBottom?: DimensionValue;
    marginEnd?: DimensionValue;
    marginHorizontal?: DimensionValue;
    marginLeft?: DimensionValue;
    marginRight?: DimensionValue;
    marginStart?: DimensionValue;
    marginTop?: DimensionValue;
    marginVertical?: DimensionValue;
    padding?: DimensionValue;
    paddingBottom?: DimensionValue;
    paddingEnd?: DimensionValue;
    paddingHorizontal?: DimensionValue;
    paddingLeft?: DimensionValue;
    paddingRight?: DimensionValue;
    paddingStart?: DimensionValue;
    paddingTop?: DimensionValue;
    paddingVertical?: DimensionValue;
    position?: 'absolute' | 'relative';
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    overflow?: 'visible' | 'hidden';
    flex?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: DimensionValue;
    aspectRatio?: number;
    zIndex?: number;
    layoutOrigin?: [number, number];
    direction?: 'inherit' | 'ltr' | 'rtl';
};
```

## References

[Bindable](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable), [DimensionValue](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_dimensionvalue)

## Remarks

The [UIComponent](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uicomponent) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel) for guides about using the API.