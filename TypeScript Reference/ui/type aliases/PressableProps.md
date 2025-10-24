# PressableProps type

Represents the props of a [Pressable()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_pressable) component.

## Signature

```typescript
export declare type PressableProps = ViewProps & {
    onPress?: Callback;
    onPressIn?: Callback;
    onPressOut?: Callback;
    disabled?: Bindable<boolean>;
};
```

## References

[ViewProps](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_viewprops), [Callback](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_callback), [Bindable](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable)