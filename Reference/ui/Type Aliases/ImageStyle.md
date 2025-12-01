Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_imagestyle

# ImageStyle type

Represents the styles of an [Image](/hw-mcp-tools/documentation/hw-docs/Reference/ui/Functions/Image_2.md) component in a UI panel.

## Signature

```
export declare type ImageStyle = ViewStyle & {
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'center' | 'repeat';
    tintColor?: Bindable<ColorValue>;
    tintOperation?: 'replace' | 'multiply';
};
```

## References

[ViewStyle](/hw-mcp-tools/documentation/hw-docs/Reference/ui/Type%20Aliases/ViewStyle.md), [Bindable](/hw-mcp-tools/documentation/hw-docs/Reference/ui/Type%20Aliases/Bindable.md), [ColorValue](/hw-mcp-tools/documentation/hw-docs/Reference/ui/Type%20Aliases/ColorValue.md)

## Remarks

For descriptions of the available styles, see [Custom UI Styles](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Custom%20UI/Custom%20UI%20Styles.md#imagestyle).