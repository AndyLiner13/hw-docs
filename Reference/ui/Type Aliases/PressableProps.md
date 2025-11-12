Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_pressableprops

API reference

# PressableProps type

Represents the props of a [pressable](/hw-docs/Reference/ui/Functions/Pressable.md) component on a UI panel.

## Signature

```
export declare type PressableProps = {
    children?: UIChildren;
    disabled?: Bindable<boolean>;
    onClick?: Callback;
    onEnter?: Callback;
    onExit?: Callback;
    onPress?: Callback;
    onRelease?: Callback;
    propagateClick?: boolean;
    style?: ViewStyle;
};
```

## References

[UIChildren](/hw-docs/Reference/ui/Type%20Aliases/UIChildren.md), [Bindable](/hw-docs/Reference/ui/Type%20Aliases/Bindable.md), [Callback](/hw-docs/Reference/ui/Type%20Aliases/Callback.md), [ViewStyle](/hw-docs/Reference/ui/Type%20Aliases/ViewStyle.md)