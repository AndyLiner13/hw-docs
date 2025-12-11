Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_scrollviewprops

# ScrollViewProps type

Represents the props of a [ScrollView()](../Functions/ScrollView.md) component, which is a scrollable version of a [View()](../Functions/View.md) component. It supports horizontal and vertical scrolling, as well as distinct styling for the view itself and underlying content wrapper.

## Signature

```
export declare type ScrollViewProps = ViewProps & {
    contentContainerStyle?: ViewStyle;
    horizontal?: boolean;
};
```

## References

[ViewProps](ViewProps.md), [ViewStyle](ViewStyle.md)