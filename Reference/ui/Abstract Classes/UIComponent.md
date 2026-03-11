---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uicomponent
---

# [UIComponent Class](#uicomponent-class)

Extends *Component\<TComponent, TState>*

The base class for a UI panel, and the scripting component to attach to a [UI Gizmo](../Classes/UIGizmo.md). It inherits the methods and properties from its parent Component class, with some UI-specialized additions.

## [Signature](#signature)

```ts
export declare abstract class UIComponent<TComponent = ComponentWithConstructor<Record<string, unknown>>, TState extends SerializableState = SerializableState> extends Component<TComponent, TState> 
```

## [Examples](#examples)

```ts
class Welcome extends UIComponent {
 initializeUI() {
   return Text({text: 'Welcome to my World'});
 }
}
```

## [Remarks](#remarks)

For information about usage, see the [Custom UI Examples](https://developers.meta.com/horizon-worlds/learn/documentation/tutorials/tutorial-worlds/custom-ui-examples-tutorial/station-0-setup) tutorial and [Custom UI guides](../../../Desktop%20editor/Custom%20UI/Video%20presentation%20of%20creating%20performant%20custom%20UIs%20in%20Meta%20Horizon%20Worlds.md).

## [Properties](#properties)

### [panelHeight \[readonly\] protected](#panelheight-readonly-protected)

The height of the panel, in pixels. You can't change the value after the panel is initialized.

**Signature**

```ts
protected readonly panelHeight: number;
```

**Remarks**

Default value: 500.

### [panelWidth \[readonly\] protected](#panelwidth-readonly-protected)

The width of the UI panel, in pixels. You can't change the value after the panel is initialized.

**Signature**

```ts
protected readonly panelWidth: number;
```

**Remarks**

Default value: 500.

## [Methods](#methods)

### [initializeUI() abstract](#initializeui-abstract)

Defines the UI and sets up necessary event subscriptions. This method is called before the [UIComponent.start()](UIComponent.md#start) method when the component is started.

**Signature**

```ts
abstract initializeUI(): UINode;
```

**Returns**

[UINode](../Classes/UINode.md)

**Remarks**

This method must return a valid UINode.

### [start()](#start)

A default `start` implementation for classes that inherit from UIComponent.

**Signature**

```ts
start(): void;
```

**Returns**

void

