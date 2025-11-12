Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/editor_editortextprops

API reference

# EditorTextProps type

The props of an [EditorText()](/hw-docs/Reference/editor/Functions/EditorText.md) component.

## Signature

```
export declare type EditorTextProps = {
    text?: Bindable<string>;
    color?: Bindable<ColorValue>;
    overflow?: 'wrap' | 'ellipsis';
    textAlign?: 'auto' | 'left' | 'center' | 'right';
    type?: TextType;
};
```

## References

[TextType](/hw-docs/Reference/editor/Type%20Aliases/TextType.md)