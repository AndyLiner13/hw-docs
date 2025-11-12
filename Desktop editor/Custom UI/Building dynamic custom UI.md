Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/building-dynamic-custom-ui

Learn

# Building dynamic custom UI

This topic continues [Building an interactive custom UI](/hw-docs/Desktop%20editor/Custom%20UI/Building%20dynamic%20custom%20UI.md), and so far the UI panel is still static. In this topic, you will make it dynamic so that after the user clicks the button, the text content and color are updated.

## Updating UI with Binding

Conceptually, you need a container for a variable value that can be changed later. The custom UI API has a [`Binding`](/hw-docs/Reference/ui/Classes/Binding.md) class that serves as such a container. You can instantiate a `Binding` with an initial value, and can call its `set()` method to change the value later, which is usually done in a callback or an event listener.

To see that in action, an example can be implemented as follows:

```
initializeUI() {
  const textPrompt = new Binding<string>(
    'Want to change the color of the ball?',
  );
  const textColor = new Binding<string>('black');

  return View({
    children: [
      Text({
        text: textPrompt,
        style: { color: textColor, ... },
      }),
      Pressable({
        children: Text({ text: 'Sure!', style: { ... } }),
        onClick: () => {
          this.props.ball.color.set(new Color(0.9, 0.2, 0.2));
          textPrompt.set('Enjoy your new color!');
          textColor.set('red');
        },
        style: { ... },
      }),
    ],
  });
}
```

Summary of the code above:

- You create two instances of Binding of string type. One for the text content, and one for the color. They are containers for values that you want to change later. You pass in the initial values when you create the Bindings, which are the original text content “Want to change the color of the ball?” and the original color “black”.
- During the initialization of the UI, instead of passing explicit string values to the `text` prop and `color` style of the `Text` component, you pass in the Binding instances that you’ve created in the last step.
- When you want to change the text content and color, you simply call the `set()` method of the Bindings with the new value “Enjoy your new color!” and “red”, and the UI will be updated accordingly.

Every time you call the `set()` method on any Binding instance, it will trigger a potential re-render of the UI panel. Setting a new value to a Binding is the only way to update a UI panel after it is initialized.

Not every prop or style can receive a Binding as its value. Refer to the [API reference](/hw-docs/Reference/ui/Classes/Binding.md) to see which props and styles are marked as [`Bindable`](/hw-docs/Reference/ui/Type%20Aliases/Bindable.md). Notice that Binding is not a class field, but is created within the scope of `initializeUI()`. This is possible because the only place you update the Binding is also inside `initializeUI()`. This pattern allows you to avoid creating many class fields, keeping the code clean and readable.

## Conditional rendering

A common practice is to conditionally render a part of the UI, depending on some states of the game. In the example above, suppose you want to hide the button after it is clicked. The custom UI API has a method [`UINode.if()`](/hw-docs/Reference/ui/Classes/UINode.md), which is used to conditionally render the UI element by using the boolean condition.

```
initializeUI() {
  const textPrompt = new Binding<string>(
    'Want to change the color of the ball?',
  );
  const textColor = new Binding<string>('black');
  const showButton = new Binding<boolean>(true);

  return View({
    children: [
      Text({
        text: textPrompt,
        style: { color: textColor, ... },
      }),
      UINode.if(
        showButton,
        Pressable({
          children: Text({ text: 'Sure!', style: { ... } }),
          onClick: () => {
            this.props.ball.color.set(new Color(0.9, 0.2, 0.2));
            textPrompt.set('Enjoy your new color!');
            textColor.set('red');
            showButton.set(false);
          },
          style: { ... },
        }),
      ),
    ],
  });
}
```

Summary of the code above:

- You create a boolean Binding, which is used to indicate if the button should be rendered or not. Its default value is true, since you want to render the button in the beginning.
- Instead of passing the button as a child component, you pass a `UINode.if()` expression. It takes the boolean Binding you’ve created in the last step in the first argument as the condition to check. If it is true, the component is rendered in the second argument. If it is false, nothing will be rendered.
- Inside the `onClick` callback of the component, just as you call the text string Binding to change its value, you call the `set()` method of the boolean Binding to change its value to `false`.

The `UINode.if()` expression also works well if you’ve already defined and stored the component in another variable, because you can directly pass the variable to the `UINode.if()` expression without any props change.

```
initializeUI() {
  const ...
  const showButton = new Binding<boolean>(true);

  const button = Pressable({
    children: Text({ text: 'Sure!', style: { ... } }),
    onClick: () => { ... },
    style: { ... },
  });

  return View({
    children: [
      Text({ ... }),
      UINode.if(showButton, button),
    ],
  });
}
```

The `UINode.if()` expression also accepts a third parameter, which will be rendered when the condition is false. Instead of maintaining two boolean Bindings and having two `UINode.if()` expressions, you can simply have the following:

```
UINode.if(condition, trueComponent, falseComponent);
```

It is not recommended to wrap the root component by the `UINode.if()` expression. Compared to rendering an empty UI panel, hiding the entity altogether is much more performant. If you want to toggle the visibility of the entire UI panel, it is recommended to change the visibility of the UI gizmo entity.

```
this.entity.visible.set(false);
this.entity.setVisibilityForPlayers([], PlayerVisibilityMode.VisibleTo);
```

## Deriving Binding values

In the example above, you may have noticed that the three Bindings are always updated together. And if you think about the UI flow, there are really only two states: before and after the button click. Wouldn’t it be nice if you can use only one boolean to indicate the state of the UI?

The custom UI API has a [`derive()`](/hw-docs/Reference/ui/Classes/Binding.md#methods) method that allows you to derive a new value from the existing Binding. With this, you can rewrite the UI as follows:

```
initializeUI() {
  const hasClicked = new Binding<boolean>(false);

  return View({
    children: [
      Text({
        text: hasClicked.derive(v => v
          ? 'Enjoy your new color!'
          : 'Want to change the color of the ball?',
        ),
        style: {
          color: hasClicked.derive(v => v ? 'red' : 'black'),
          ...
        },
      }),
      UINode.if(
        hasClicked.derive(v => !v),
        Pressable({
          children: Text({ text: 'Sure!', style: { ... } }),
          onClick: () => {
            this.props.ball.color.set(new Color(0.9, 0.2, 0.2));
            hasClicked.set(true);
          },
          style: { ... },
        }),
      ),
    ],
  });
```

Summary of the code above:

Instead of creating three Bindings, one for each prop, style, or condition, you only create one Binding of boolean type. You will use this Binding to tell the components what value should be used for all props/styles/conditions.

- You call the [`derive()`](/hw-docs/Reference/ui/Classes/Binding.md#methods) method on the Binding to derive its new value before sending it to the props, styles, or conditions. The function that you pass to the `derive()` method specifies how the derived value is calculated. It takes the current Binding value and returns a new value.
- Instead of setting new values for three Bindings in the callback, you only need to do so for one. When a new value is set for the boolean Binding, all of its derived values are also updated together.

There is also a static `derive()` method that allows you to derive a new value from more than one Binding. For example, maybe you have two boolean Bindings that we want to combine into one condition:

```
Binding.derive([conditionA, conditionB], (a, b) => a && b);
```

Every time you call the `set()` method on any Binding instance, it will update its value, as well as all the values that are derived from it, before triggering a re-render for the UI.

To be more precise, the returned value of the `derive()` method is a `DerivedBinding` instance. It functions a lot like a Binding, and can be passed to the supported props and styles of a component in place of an explicit value. However, it does not have a `set()` method, and its value is purely derived from the Bindings that it depends on.

Because Bindings can easily be derived and result in other types and values, you do not need to create duplicate Bindings that will always be updated together. In this sense, Bindings now work a lot like states in React. Try to only create Bindings for the minimal representation of the UI states that you’ve identified. Derive everything else you need on-demand.

## Functional updates

If the new value of a Binding is computed using the previous value, pass a function to the `set()` method. This is called a functional update. The function will receive the previous value, and return an updated value.

For example, consider a toggle switch button that toggles a boolean value:

```
initializeUI() {
  const isSelected = new Binding<boolean>(false);
  return Pressable({
    onClick: () => {
      isSelected.set(v => !v);
    },
  });
}
```

It is possible to place other things inside the function, like emitting events, but keep in mind that they should be lightweight so that they do not block the Binding update. For example, you might want to also emit events when a Binding is updated. Normally you can emit the event right before or after the Binding update, but if the event also needs to depend on the Binding value:

```
someBinding.set(prev => {
  const next = !prev;
  this.sendEntityEvent(target, myUpdateEvent, { prev, next } );
  return next;
```

## Connecting to events

In the example of changing the ball color, the Bindings are updated inside the callback of a `Pressable` component. You can also do so in event handlers you connect.

For example, suppose you also want to hide the button until any player successfully finds and grabs the ball. Then you need a boolean Binding to track whether the ball has been found, and need to connect a handler to the `OnGrabStart` event.

```
initializeUI() {
  const hasFound = new Binding<boolean>(false);
  const hasClicked = new Binding<boolean>(false);

  this.connectCodeBlockEvent(
    this.props.ball,
    CodeBlockEvents.OnGrabStart,
    (isRightHand: boolean, player: Player) => {
      hasFound.set(true);
    },
  );

  return View({
    children: [
      Text({
        text: Binding.derive([hasFound, hasClicked], (found, clicked) =>
          found
            ? clicked
              ? 'Enjoy your new color!'
              : 'Want to change the color of the ball?'
            : 'Find the ball',
        ),
        style: { ... },
      }),
      UINode.if(
        Binding.derive(
          [hasFound, hasClicked],
          (found, clicked) => found && !clicked,
        ),
        Pressable({ ... }),
      ),
    ],
  });
}
```

As before, you do not need class fields and are able to place everything in the scope of `initializeUI()`, because you can connect events in this method as well.

## No Get method for Bindings

There is no public `get()` method for Bindings on purpose. This is to prevent creators from misusing the Bindings. Consider the example of changing the ball color. If there is a `get` method, you might be tempted to pass in different values to `text` and `color` based on the value of `hasClicked`:

```
// WRONG; only to illustrate why using get method is error-prone
initializeUI() {
  const hasClicked = new Binding<boolean>(false);

  return View({
    children: [
      Text({
        // WRONG; this is an explicit value, not a Binding
        text: hasClicked.get()
          ? 'Enjoy your new color!'
          : 'Want to change the color of the ball?',
        style: {
          // WRONG; this is an explicit value, not a Binding
          color: hasClicked.get() ? 'red' : 'black',
          ...
        },
      }),
      ...
    ],
  });
}
```

This implementation is wrong, because the values of `text` and `color` are not Bindings but explicit values. When the Binding `hasClicked` is updated, the UI will not re-render. A public `get()` method is not exposed to prevent this scenario.

If you need to get the value of a Binding because you need to use it in multiple styles, like in the example above, you should use [derived Bindings](/hw-docs/Desktop%20editor/Custom%20UI/Building%20dynamic%20custom%20UI.md#deriving-binding-values). If you need to get the value of a Binding because you need to set a new value based on the old value, use [functional updates](/hw-docs/Desktop%20editor/Custom%20UI/Building%20dynamic%20custom%20UI.md#functional-updates).

In some rare cases, you want to keep track of the value of the Binding for some other uses. To do this, you will have to create a separate variable to track the value:

```
initializeUI() {
  let someBindingValue = 0;
  const someBinding = new Binding<number>(0);

  return Pressable({
    onClick: () => {
      someBindingValue = newValue;
      someBinding.set(newValue);
    },
  });
}
```

## What’s next?

The example continues in [User-defined components for custom UI](/hw-docs/Desktop%20editor/Custom%20UI/User-Defined%20Components%20for%20Custom%20UI.md)