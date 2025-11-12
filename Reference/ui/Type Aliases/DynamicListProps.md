Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_dynamiclistprops

API reference

# DynamicListProps type

Represents the props of a [DynamicList()](/hw-docs/Reference/ui/Functions/DynamicList.md) component in a UI panel.

## Signature

```
export declare type DynamicListProps<T> = {
    data: Binding<T[]>;
    renderItem: (item: T, index?: number) => UINode;
    style?: ViewStyle;
};
```

## References

[Binding](/hw-docs/Reference/ui/Classes/Binding.md), [UINode](/hw-docs/Reference/ui/Classes/UINode.md), [ViewStyle](/hw-docs/Reference/ui/Type%20Aliases/ViewStyle.md)