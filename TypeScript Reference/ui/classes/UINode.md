# UINode Class

Represents a UI element in a custom UI panel. You cannot directly instantiate a new `UINode`; this type is returned by UI component methods and UI functions.

## Signature

```typescript
export declare class UINode<T extends UIComponentProps = UIComponentProps>
```

## Remarks

The following functions return `UINode` objects:
- [DynamicList()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_dynamiclist)
- [Image_2()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_image_2)
- [Pressable()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_pressable)
- [ScrollView()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_scrollview)
- [Text_2()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_text_2)
- [View()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_view)

## Methods

| Method | Description |
| --- | --- |
| if(condition, trueComponent, falseComponent) static | Conditionally renders the UI element based on a condition. **Signature:** `static if(condition: Bindable<boolean>, trueComponent?: UIChildren, falseComponent?: UIChildren): UINode<ConditionalProps>;` **Parameters:** `condition: Bindable<boolean>` - The condition to check. Accepts a boolean or a binding of a boolean. `trueComponent: UIChildren` (Optional) - The UI element to render when the condition is true. `falseComponent: UIChildren` (Optional) - The UI element to render when the condition is false. **Returns:** UINode<ConditionalProps> - A UINode that represents the result of the conditional rendering. |