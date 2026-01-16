Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/editor_editortextprops

# EditorTextProps type

The props of an [EditorText()](https://developers.meta.com/horizon-worlds/reference/2.0.0/editor_editortext) component.

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

[TextType](https://developers.meta.com/horizon-worlds/reference/2.0.0/editor_texttype)