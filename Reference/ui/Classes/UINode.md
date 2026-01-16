Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uinode

# UINode Class

Represents a UI element in a custom UI panel. You cannot directly instantiate a new `UINode`; this type is return by UI component methods and UI functions.

## Signature

```
export declare class UINode<T extends UIComponentProps = UIComponentProps>
```

## Remarks

The following functions return `UINode` objects:
[DynamicList()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_dynamiclist)
[Image\_2()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_image_2)
[Pressable()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_pressable)
[ScrollView()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_scrollview)
[Text\_2()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_text_2)
[View()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_view)

## Methods

|  |  |
| --- | --- |
| **if(condition, trueComponent, falseComponent)** static | Conditionally renders the UI element based on the a condition.      Signature  ``` static if(condition: Bindable<boolean>, trueComponent?: UIChildren, falseComponent?: UIChildren): UINode<ConditionalProps>; ```  Parameters  condition: [Bindable](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable)<boolean>  The condition to check. Accepts a boolean or a binding of a boolean.  trueComponent: [UIChildren](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uichildren)  *(Optional)* The UI element to render when the condition is true. If not provided, nothing is rendered when the condition is true.  falseComponent: [UIChildren](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uichildren)  *(Optional)* The UI element to render when the condition is false. If not provided, nothing is rendered when the condition is false.  Returns  [UINode](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uinode)<[ConditionalProps](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_conditionalprops)>  A UINode that represents the result of the conditional rendering. Although the return type is a UINode, it is not really a node in the DOM tree. The components in the argument, if rendered, will appear in the DOM tree. |