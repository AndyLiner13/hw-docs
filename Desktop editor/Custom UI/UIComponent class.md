Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/uicomponent-class

# UIComponent class

This topic describes the UIComponent class that is used to create custom UIs in your world. The script attached to a Custom UI gizmo extends the new [`UIComponent`](../../Reference/ui/Abstract%20Classes/UIComponent.md) class instead of the regular [`Component`](../../Reference/core/Abstract%20Classes/Component.md) class. `UIComponent` is similar to `Component` in many ways, for example, both can access the `this.world` object and listen to events. But the `UIComponent` class includes specialized properties and methods.

## Properties: panelHeight and panelWidth

The two [properties](../../Reference/ui/Abstract%20Classes/UIComponent.md#properties) of the `UIComponent` class are `panelHeight` and `panelWidth`. The default panel size is 500 x 500 pixels. You can change the size by specifying the `panelHeight` and `panelWidth` properties.

```
class HelloWorld extends UIComponent {
  panelHeight = 200; // the default value is 500
  panelWidth = 460; // the default value is 500

  initializeUI() {
    return View({
      children: [Text({text: 'Hello World'})],
      style: {backgroundColor: 'white'},
    });
  }
}

UIComponent.register(HelloWorld);
```

You cannot change the panel size after the UI panel is initialized. Assigning new values to `this.panelHeight` or `this.panelWidth` has no effect at runtime. Therefore, the example above is the recommended way of defining panel sizes.

**Note**: The panel size of the UI panel is different from the scale of the UI gizmo. The panel size defines how many pixels you can draw inside the panel. Scale defines how big those pixels are. If the UI panel is a screen, scale controls its size, and panel size its resolution.

The following image shows two different sets of **Scale** attributes in **Properties**.

<details>
<summary>An example that shows that scale controls the size of the UI panel in properties</summary>

<p></p>

[An example that shows that scale controls the size of the UI panel in properties](../../image_data/a82891d44d2b9f43c6664d589d685dd56e146a61f0fc16f9e042dd92556076c1.md)

### Overview
This image displays two side-by-side panels, both showing attributes of an object in a 3D modeling software interface. The panels are identical in layout but differ slightly in content.

### Key Elements
- **Left Panel**:
  - **Title**: "Attributes" located at the top-left corner.
  - **Position**: Contains three fields labeled X, Y, Z with numerical values.
    - X: 0.64
    - Y: 0.86
    - Z: 1.26
  - **Rotation**: Contains three fields labeled X, Y, Z with numerical values.
    - X: 0
    - Y: 0
    - Z: 0
  - **Scale**: Contains three fields labeled X, Y, Z with numerical values.
    - X: 1
    - Y: 1
    - Z: 1
- **Right Panel**:
  - **Title**: "Attributes" located at the top-left corner.
  - **Position**: Contains three fields labeled X, Y, Z with numerical values.
    - X: 0.64
    - Y: 0.86
    - Z: 1.26
  - **Rotation**: Contains three fields labeled X, Y, Z with numerical values.
    - X: 0
    - Y: 0
    - Z: 0
  - **Scale**: Contains three fields labeled X, Y, Z with numerical values.
    - X: 2
    - Y: 2
    - Z: 2

### Visual Flow / Relationships
The panels are arranged horizontally next to each other. Each panel has a title at the top-left corner followed by three sections: Position, Rotation, and Scale. These sections are vertically stacked within each panel. There are no arrows or lines connecting the panels, indicating that they are independent entities.

</details>

<p></p>



The following image shows the left UI gizmo is smaller than the right UI gizmo with **Scale** attribute of (1, 1, 1) vs. (2, 2, 2).

<details>
<summary>An example that shows that scale controls the size of the UI panel in the scene</summary>

<p></p>

[An example that shows that scale controls the size of the UI panel in the scene](../../image_data/a59868bf4c5850b0a4e5a9e6d989f6cd735d4ef4ad150ed10f166aad189787ed.md)

### Overview
The image consists of two side-by-side screenshots of a 3D environment, likely a simulation or game interface. The environment features a grid floor and a blue ceiling, suggesting a virtual space. Two main elements are present: a small humanoid figure and a rectangular object resembling a box or container.

### Key Elements
1. **Humanoid Figure**
   - **Visual description**: A small, stylized human-like figure with a blue body and white limbs.
   - **Location**: Positioned on the left side of both images.
   - **Contents**: The figure has a number "5" above its head.
   - **Visual styling**: The figure is simple and lacks detailed features, with a smooth surface and minimal shading.

2. **Rectangular Object**
   - **Visual description**: A rectangular object with a brownish-orange color and a white label on one side.
   - **Location**: In the first image, it is located to the right of the humanoid figure. In the second image, it is closer to the center and slightly larger.
   - **Contents**: The label on the object reads "T" and "F".
   - **Visual styling**: The object has a matte finish with subtle lighting that highlights its edges.

### Visual Flow / Relationships
- **Most prominent visually**: The humanoid figure remains consistently positioned across both images.
- **Arrows and lines**: There are no arrows or lines connecting the elements.
- **Spatial relationships**: The rectangular object moves closer to the humanoid figure in the second image, indicating some form of interaction or movement within the environment.

</details>

<p></p>



## Method: initializeUI()

In the `UIComponent` class, [`initializeUI()`](../../Reference/ui/Abstract%20Classes/UIComponent.md#methods) is an important method that is used to define the content of the UI. When a UI gizmo is initialized, it calls `initializeUI()` to get the UI that the entity needs to render. Conceptually, this is what happens behind the scene:

```
// Conceptual; not real implementation
start() {
  this.entity.as(UIGizmo).setPanelSize({
    height: this.panelHeight,
    width: this.panelWidth,
  });
  this.entity.as(UIGizmo).setUI(this.initializeUI());

  // The rest of the start function are executed thereafter
}
```

While the `initializeUI()` method might remind some developers of the `render()` function in the React component class, they are fundamentally different in that `initializeUI()` is only called once in the lifecycle of the UI panel. When any [props or variables](../../Scripting/Get%20started%20with%20TypeScript/TypeScript%20Components,%20Properties,%20and%20Variables.md) are changed, the UI panel does not automatically re-render to reflect the changes in the dependent data.

There are ways to update the UI panel after it is initialized with [`Binding`](../../Reference/ui/Classes/Binding.md). See [Updating UI with Binding](Building%20dynamic%20custom%20UI.md) for more details. For now, remember that `initializeUI()` is only called once when the UI gizmo is initialized, before the `start()` method of the component.

Because both `initializeUI()` and `start()` are executed when the world or the UI gizmo starts, it’s not required for a `UIComponent` to provide an implementation for `start()`. When the world starts, if you’d like to connect to event handlers, you can place the code in either `initializeUI()` or `start()`. For example, the following two implementations have the same behavior:

Implementation 1

```
initializeUI() {
  this.connectEntityEvent(
    this.entity,
    myTsEvent,
    data => {...},
  );

  return View({...});
}
```

Implementation 2

```
initializeUI() {
  return View({...});
}

start() {
  this.connectEntityEvent(
    this.entity,
    myTsEvent,
    data => {...},
  );
}
```

However, keep in mind that `initializeUI()` is executed before `start()`. If the UI depends on some local variables, initialize them in `initializeUI()`, not `start()`.

## Components and props

As mentioned before, the [`initializeUI()`](../../Reference/ui/Abstract%20Classes/UIComponent.md#methods) method must return the UI that you want to render. You can build the UI with the components that are provided, e.g. [`View`](../../Reference/ui/Functions/View.md), [`Text`](../../Reference/ui/Functions/Text_2.md), [`Image`](../../Reference/ui/Functions/Image_2.md), etc.

Essentially, these components are `functions` that take in an object of props and output an opaque `UINode` object, for example:

```
function View(props: ViewProps): UINode;
```

You do not need to know the internal implementation of `UINode`. You only need to know that the `initializeUI()` method must return a `UINode`.

Each component also takes an object of props, and the `props type` is different for each component type. For example, the following code defines a [`Text`](../../Reference/ui/Functions/Text_2.md) component with a [`text` and a `style` prop](../../Reference/ui/Type%20Aliases/TextProps.md):

```
const text = Text({
  text: 'Hello World',
  style: {fontSize: 24},
});
```

You can find the detailed documentation on the props and styles supported by each component in [API Reference for custom UI](Custom%20UI%20Styles.md). Also see related details in the `UI` API(/reference/2.0.0/). For now, this topic briefly introduces the important common props, [`style` and `children`](../../Reference/ui/Type%20Aliases/ViewProps.md).

### Prop: style

Most components include a `style` prop, which is the main tool to adjust the appearances of the components. It supports most of the stylesheets from CSS and React Native.

```
const view = View({
  style: {
    backgroundColor: '#EDE2D5',
    justifyContent: 'center',
    padding: 24,
    width: '100%',
  },
});
```

Different components support different sets of styles. Again, you can find detailed documentation on the supported styles in the [API Reference for custom UI](Custom%20UI%20Styles.md).

### Prop: children

Similar to the UI you would find in other frameworks like HTML and React, the custom UI is also a tree structure, and a component may have children components. This is defined through the [`children` prop](Custom%20UI%20Styles.md#props), which can be either one or an array of [`UINode`](../../Reference/ui/Classes/UINode.md)s.

```
const view = View({
  children: View({
    // children can be one UINode
    children: [
      // or an array of UINodes
      Text({text: 'Hello World'}),
      Text({text: 'This is a subtitle'}),
    ],
  }),
});
```

Not all components can have children. For example, you cannot assign children components to a `Text` component. You can refer to [API Reference for custom UI](Custom%20UI%20Styles.md) to see which component props explicitly include a `children` prop.

It is acceptable and quite common to store a part of the component into its own variable, so that a large complex UI can be broken down into smaller parts, improving code readability. For example, the above component can also be written as the following:

```
const text1 = Text({text: 'Hello World'});
const text2 = Text({text: 'This is a subtitle'});
const content = View({children: [text1, text2]});
const view = View({children: content});
```