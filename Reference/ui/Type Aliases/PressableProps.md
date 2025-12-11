Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_pressableprops

# PressableProps type

Represents the props of a [pressable](../Functions/Pressable.md) component on a UI panel.

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

[UIChildren](UIChildren.md), [Bindable](Bindable.md), [Callback](Callback.md), [ViewStyle](ViewStyle.md)