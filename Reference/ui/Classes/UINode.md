Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uinode

API reference

# UINode Class

Represents a UI element in a custom UI panel. You cannot directly instantiate a new `UINode`; this type is return by UI component methods and UI functions.

## Signature

```
export declare class UINode<T extends UIComponentProps = UIComponentProps>
```

## Remarks

The following functions return `UINode` objects:
[DynamicList()](/hw-docs/Reference/ui/Functions/DynamicList.md)
[Image\_2()](/hw-docs/Reference/ui/Functions/Image_2.md)
[Pressable()](/hw-docs/Reference/ui/Functions/Pressable.md)
[ScrollView()](/hw-docs/Reference/ui/Functions/ScrollView.md)
[Text\_2()](/hw-docs/Reference/ui/Functions/Text_2.md)
[View()](/hw-docs/Reference/ui/Functions/View.md)

## Methods

|  |  |
| --- | --- |
| **if(condition, trueComponent, falseComponent)** static | Conditionally renders the UI element based on the a condition.      Signature  ``` static if(condition: Bindable<boolean>, trueComponent?: UIChildren, falseComponent?: UIChildren): UINode<ConditionalProps>; ```  Parameters  condition: [Bindable](/hw-docs/Reference/ui/Type%20Aliases/Bindable.md)<boolean>  The condition to check. Accepts a boolean or a binding of a boolean.  trueComponent: [UIChildren](/hw-docs/Reference/ui/Type%20Aliases/UIChildren.md)  *(Optional)* The UI element to render when the condition is true. If not provided, nothing is rendered when the condition is true.  falseComponent: [UIChildren](/hw-docs/Reference/ui/Type%20Aliases/UIChildren.md)  *(Optional)* The UI element to render when the condition is false. If not provided, nothing is rendered when the condition is false.  Returns  [UINode](/hw-docs/Reference/ui/Classes/UINode.md)<[ConditionalProps](/hw-docs/Reference/ui/Type%20Aliases/ConditionalProps.md)>  A UINode that represents the result of the conditional rendering. Although the return type is a UINode, it is not really a node in the DOM tree. The components in the argument, if rendered, will appear in the DOM tree. |