Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_view

API reference

# View() Function

Creates a view component for a UI panel.

## Signature

```
export declare function View(props: Readonly<ViewProps>): UINode<ViewProps>;
```

## Parameters

props: Readonly<[ViewProps](/hw-docs/Reference/ui/Type%20Aliases/ViewProps.md)>

The props that define the child components and style of the view.

## Returns

[UINode](/hw-docs/Reference/ui/Classes/UINode.md)<[ViewProps](/hw-docs/Reference/ui/Type%20Aliases/ViewProps.md)>

A UINode representing the View component.

## Remarks

A view is a container for UI components and supports a parent-child relationship with other components. Views support multiple styles including flex layouts.
The [UIComponent](/hw-docs/Reference/ui/Abstract%20Classes/UIComponent.md) class is the base class for controlling custom UI panels in a world. See [Create a custom UI panel](/hw-docs/Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md) for guides about using the API.