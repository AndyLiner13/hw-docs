Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_dynamiclistprops

# DynamicListProps type

Represents the props of a [DynamicList()](../Functions/DynamicList.md) component in a UI panel.

## Signature

```
export declare type DynamicListProps<T> = {
    data: Binding<T[]>;
    renderItem: (item: T, index?: number) => UINode;
    style?: ViewStyle;
};
```

## References

[Binding](../Classes/Binding.md), [UINode](../Classes/UINode.md), [ViewStyle](ViewStyle.md)