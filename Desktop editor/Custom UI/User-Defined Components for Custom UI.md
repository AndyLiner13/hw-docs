Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/userdefined-components-for-custom-ui

# User-Defined Components for Custom UI

Often, you will need to render multiple components with similar styles. For example, let’s say you want to modify your change-ball-color example so that the players can choose between two colors, “Red” and “Green”:

![](data:image/png;base64,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)

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