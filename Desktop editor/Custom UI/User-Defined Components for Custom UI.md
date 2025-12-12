Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/userdefined-components-for-custom-ui

# User-Defined Components for Custom UI

Often, you will need to render multiple components with similar styles. For example, let’s say you want to modify your change-ball-color example so that the players can choose between two colors, “Red” and “Green”:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/ecbadd5fe0cae1d8d9ab03c4ef08b1e3e4b6e2bdcdd4be77db5327d021c45065.md)

### Overview
This image depicts a user interface element that prompts the user to choose a color for a ball. It features two buttons for selecting either red or green as the chosen color.

### Key Elements
- **Main Title**: Located at the top-center of the image. The text reads: **"Please choose a color for the ball"**.
- **Red Button**: Positioned below the title on the left side. It has a red background with white text that says **"Red"**.
- **Green Button**: Positioned to the right of the Red button. It has a green background with white text that says **"Green"**.

### Visual Flow / Relationships
The most prominent visual element is the title, which is centrally located above the two buttons. The buttons are arranged horizontally, with the Red button on the left and the Green button on the right. There are no arrows or lines connecting the elements, but the layout suggests a sequential reading order moving from left to right.

</details>

<p></p>



Those two buttons largely have the same styles, i.e. height, padding, border radius, etc., with only small differences like background color. Their children texts also have the same style. It will be verbose to duplicate these styles for each button.

One obvious solution is to put common styles into constant variables:

```
initializeUI() {
  const commonButtonStyle: ViewStyle = {
    borderRadius: 8,
    height: 36,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  };
  const commonButtonLabelStyle: TextStyle = {
    color: 'white',
  };

  return View({
    ...
          Pressable({
            children: Text({
              text: 'Red',
              style: commonButtonLabelStyle,
            }),
            onClick: ...,
            style: {
              ...commonButtonStyle,
              backgroundColor: '#CF1313',
              marginRight: 24,
            },
          }),
          Pressable({
            children: Text({
              text: 'Green',
              style: commonButtonLabelStyle,
            }),
            onClick: ...,
            style: {
              ...commonButtonStyle,
              backgroundColor: '#19AD0E',
            },
          }),
    ...
  });
}
```

But there are still duplicated elements, like the component structure itself. It would be nice if we can create our own component and just use that in the UI tree!

### Writing a User-Defined Component

Remember that all components are just functions that return a `UINode`. As long as your function also returns a `UINode`, you can put a bunch of shared logic inside your own function, essentially creating a user-defined component:

```
// Define the props that our user-defined component receives
type MyButtonProps = {
  label: string,
  onClick: Callback,
  style: ViewStyle,
};

function MyButton(props: MyButtonProps): UINode {
  return Pressable({
    children: Text({
      text: props.label,
      style: { color: 'white' },
    }),
    onClick: props.onClick,
    style: {
      borderRadius: 8,
      height: 36,
      width: 120,
      alignItems: 'center',
      justifyContent: 'center',
      // additional styles are spreaded the last
      // to override default styles
      ...props.style,
    },
  });
}

initializeUI() {
  return View({
    ...
          MyButton({
            label: 'Red',
            onClick: ...,
            style: { backgroundColor: '#CF1313', marginRight: 24 },
          }),
          MyButton({
            label: 'Green',
            onClick: ...,
            style: { backgroundColor: '#19AD0E' },
          }),
    ...
  });
}
```

Let’s recap what happened:

* We created a user-defined component called `MyButton`, which is just a function that takes in an object of props, and returns a `UINode`. While technically possible to take any form of parameters, it is recommended for user-defined components to take one parameter of object type called `props`, to be consistent with other components.
* In the `props`, we define the list of inputs that the component would need. Here we need three: the `label` of the button, the `onClick` callback, and the additional `style` that is added to the default button style. We properly type them using the `Callback` and `ViewProps` types which can be imported from the “horizon/ui” module.
* Inside the `MyButton` component, we make sure we return the rendered `UINode` object, which is constructed from other components like `Pressable` and `Text`. Notice that we merge the `props.style` into the default style of the button. This allows us to only pass in the necessary special style when using the component, greatly simplifying the code.
* Inside the main UI panel, we simply use the `MyButton` component just like other components and pass in the necessary props when. Notice that we can use multiple `MyButton` components. This way, we have created an easily reusable component.

### Private Bindings inside a User-Defined Component

User-defined components are an excellent way to encapsulate UI components. They are able to hide large UI structures and lengthy styles away.

But there is more! We can create private Bindings inside our user-defined components. For example, if we want to add a hover state for the button:

```
function MyButton(props: MyButtonProps): UINode {
  const DEFAULT_COLOR = '#19AD0E';
  const HOVERED_COLOR = '#87D481';
  const backgroundColor = new Binding<string>(DEFAULT_COLOR);

  return Pressable({
    children: Text({ ... }),
    onClick: props.onClick,
    onEnter: () => backgroundColor.set(HOVERED_COLOR),
    onExit: () => backgroundColor.set(DEFAULT_COLOR),
    style: { backgroundColor, ... },
  });
}
```

Notice that the Binding is completely inside the scope of `MyButton`. When other components use `MyButton`, they never need to know any details about this Binding, yet the hover effect is handled automatically inside `MyButton`. If you are familiar with React, an analogy you can draw is that the local Binding acts like a private “state” of a React component.

This only works when the Binding is only updated by the callbacks of the UI components we are returning. If we need to connect to Horizon events, we cannot do so inside the scope of user-defined components, because we can only connect Horizon events in a `Component` or `UIComponent`.