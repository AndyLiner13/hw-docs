# ScrollViewProps type

Represents the props of a [ScrollView()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_scrollview) component, which is a scrollable version of a [View()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_view) component. It supports horizontal and vertical scrolling, as well as distinct styling for the view itself and underlying content wrapper.

## Signature

```typescript
export declare type ScrollViewProps = ViewProps & {
    contentContainerStyle?: ViewStyle;
    horizontal?: boolean;
};
```

## References

[ViewProps](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_viewprops), [ViewStyle](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_viewstyle)