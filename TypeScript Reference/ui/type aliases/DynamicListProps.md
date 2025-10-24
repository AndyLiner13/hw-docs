# DynamicListProps type

Represents the props of a [DynamicList()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_dynamiclist) component in a UI panel.

## Signature

```typescript
export declare type DynamicListProps<T> = {
    data: Binding<T[]>;
    renderItem: (item: T, index?: number) => UINode;
    style?: ViewStyle;
};
```

## References

[Binding](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_binding), [UINode](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uinode), [ViewStyle](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_viewstyle)