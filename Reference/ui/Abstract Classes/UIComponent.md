Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uicomponent

# UIComponent Class

Extends *Component<TComponent, TState>*

The base class for a UI panel, and the scripting component to attach to a [UI Gizmo](../Classes/UIGizmo.md). It inherits the methods and properties from its parent Component class, with some UI-specialized additions.

## Signature

```
export declare abstract class UIComponent<TComponent = ComponentWithConstructor<Record<string, unknown>>, TState extends SerializableState = SerializableState> extends Component<TComponent, TState>
```

## Examples

```
class Welcome extends UIComponent {
 initializeUI() {
   return Text({text: 'Welcome to my World'});
 }
}
```

## Remarks

For information about usage, see the [Custom UI Examples](../../../Tutorials/Feature%20samples/Custom%20UI%20examples%20tutorial/Station%200%20-%20Setup.md) tutorial and [Custom UI guides](../../../Desktop%20editor/Custom%20UI/Video%20presentation%20of%20creating%20performant%20custom%20UIs%20in%20Meta%20Horizon%20Worlds.md).

## Properties

|  |  |
| --- | --- |
| **panelHeight**  [readonly] protected | The height of the panel, in pixels. You can't change the value after the panel is initialized.      Signature  ``` protected readonly panelHeight: number; ```  Remarks  Default value: 500. |
| **panelWidth**  [readonly] protected | The width of the UI panel, in pixels. You can't change the value after the panel is initialized.      Signature  ``` protected readonly panelWidth: number; ```  Remarks  Default value: 500. |

## Methods

|  |  |
| --- | --- |
| **initializeUI()** abstract | Defines the UI and sets up necessary event subscriptions. This method is called before the [UIComponent.start()](UIComponent.md#start) method when the component is started.      Signature  ``` abstract initializeUI(): UINode; ```  Returns  [UINode](../Classes/UINode.md)  Remarks  This method must return a valid UINode. |
| **start()** | A default `start` implementation for classes that inherit from UIComponent.      Signature  ``` start(): void; ```  Returns  void |