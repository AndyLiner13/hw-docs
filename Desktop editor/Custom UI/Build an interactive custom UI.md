Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/building-interactive-custom-ui

# Build an interactive custom UI

This topic shows you how to build an interactive custom UI, because creating a static, [non-interactive UI panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel) is only the beginning. In most cases, you’d want to build dynamic UI panels that interact with the rest of the world. These are the two types of interactions:

* Calling TypeScript from the UI:

  Some UI components, for example, `Pressable`s can receive player inputs and execute their effects implemented in the TypeScript.
* Controlling the UI from TypeScript:

  TypeScript can control and update what is being displayed in the UI at runtime after the UI is initialized.

This topic and [Build a dynamic custom UI](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/building-dynamic-custom-ui) explore these capabilities by working through an example. Consider a game where the players are given a chance to change the color for a ball. In the UI, you’d like to have a text prompt and a confirmation button in the UI. After any player clicks the button, you’d want the ball’s color to be updated, button removed, and the prompt’s content and color changed.

The following image is an interactive UI showing a text prompt and a confirmation button.
![A text prompt and a confirmation button](data:image/png;base64,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)

The following image is an interactive UI showing some confirmation text.
![Some confirmation text after clicking the button](data:image/png;base64,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)

## Build a static UI

To start, build the static version of the UI.

```
class BallDialog extends UIComponent {
  panelHeight = 200;
  panelWidth = 460;

  initializeUI() {
    return View({
      children: [
        Text({
          text: 'Want to change the color of the ball?',
          style: {
            color: 'black',
            fontSize: 24,
          },
        }),
        View({
          children: Text({
            text: 'Sure!',
            style: {
              color: 'white',
            },
          }),
          style: {
            alignItems: 'center',
            backgroundColor: '#19AD0E',
            borderRadius: 8,
            height: 36,
            justifyContent: 'center',
            marginTop: 12,
            width: 240,
          },
        }),
      ],
      style: {
        alignItems: 'center',
        backgroundColor: '#EDE2D5',
        borderRadius: 24,
        flexDirection: 'column',
        padding: 24,
        width: '100%',
      },
    });
  }
}
```

## Invoking Callbacks from UI

Some components like `Pressable` can take function props as event handlers, which are callbacks. For example, the props of `Pressable` include `onClick`, `onEnter`, `onExit`, etc., and each callback will be executed when the corresponding event happens in the UI.

Add the effect of changing the ball color to the UI above. Some `style` props are hidden for simplicity.

```
class BallDialog extends UIComponent<typeof BallDialog> {
  static propsDefinition = {
    ball: { type: PropTypes.Entity },
  };

  initializeUI() {
    return View({
      children: [
        Text({
          text: 'Want to change the color of the ball?',
          style: {
            color: 'black',
            fontSize: 24,
            },
        }),
        Pressable({
          children: Text({ text: 'Sure!', style: { color: 'white', } }),
          onClick: () => {
            this.props.ball.color.set(new Color(0.9, 0.2, 0.2));
          },
          style: {
            alignItems: 'center',
            backgroundColor: '#19AD0E',
            borderRadius: 8,
            height: 36,
            justifyContent: 'center',
            marginTop: 12,
            width: 240,
          },
        }),
      ],
      style: {
        alignItems: 'center',
        backgroundColor: '#EDE2D5',
        borderRadius: 24,
        flexDirection: 'column',
        padding: 24,
        width: '100%',
      },
    });
  }
}
```

Summary of the code above:

- You pass in the entity that you want to manipulate through the props.
- You change the button from `View` to `Pressable` so that you can assign callbacks to the component to act on the player input events.
- You write the `onClick` callback as a function. Place the desired effects inside the function to set a new color to the entity that you pass to the props.

## The acting player

You can also know which player is the acting player, meaning the player who triggered the callback. This becomes handy when creating buttons that have different effects for different players.

All the callbacks are of type `(player: Player) => void`, and the parameter `player` is the `Player` object of the acting player. You can then implement the callback effects that takes in the player information:

```
Pressable({
  onClick: (player: Player) => {
    console.log(`Player with id ${player.index.get()} clicked`);
    // Do things differently based on the player
    this.sendCodeBlockEvent(player, myPlayerEvent, {...});
  },
})
```

You will explore more in [Player-specific UI](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/playerspecific-custom-ui/) with an advanced example.

## Working with class methods

A common pattern is to make the callback a class method. When you do this, be extra careful about the meaning of `this`. In TypeScript, class methods are not bound by default. If you do not bind a class method and pass it to a prop as a callback, when it is actually called, `this` will be `undefined`. This is not a behavior specific to our UI framework, but a part of how functions and classes work in JavaScript.

There are three solutions to this issue. The first is to explicitly bind `this` when assigning callbacks:

```
// in BallDialog class
handleClick() {
  this.props.ball.color.set(new Color(0.9, 0.2, 0.2));
}

// then in Pressable
onClick: this.handleClick.bind(this),
```

The second is to change class methods into class fields:

```
// in BallDialog class
handleClick = () => {
  this.props.ball.color.set(new Color(0.9, 0.2, 0.2));
};

// then in Pressable
onClick: this.handleClick,
```

The third is to write callbacks as inline arrow functions:

```
// in BallDialog class
handleClick() {
  this.props.ball.color.set(new Color(0.9, 0.2, 0.2));
}

// then in Pressable
onClick: () => this.handleClick(),
```

## Passing parameters to callbacks

Sometimes the callback that you want to call needs to take parameters, for example, a class method `this.setBallColor(color: Color)` that encapsulates the effect of color change and takes a parameter as the new color. When you need to pass parameters to a callback, you can either bind the function or create a new inline arrow function:

```
// in BallDialog class
setBallColor(color: Color) {
  this.props.ball.color.set(color);
}

// then in Pressable
onClick: this.setBallColor.bind(this, new Color(0.9, 0.2, 0.2)),
// or equivalently
onClick: () => this.setBallColor(new Color(0.9, 0.2, 0.2)),
```

## What’s next?

The example continues in [Build a dynamic custom UI](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/building-dynamic-custom-ui).