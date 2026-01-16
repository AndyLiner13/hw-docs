Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_pressableprops

# PressableProps type

Represents the props of a [pressable](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_pressable) component on a UI panel.

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

[UIChildren](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uichildren), [Bindable](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable), [Callback](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_callback), [ViewStyle](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_viewstyle)