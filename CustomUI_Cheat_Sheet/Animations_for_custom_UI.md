# Animations for custom UI

Animations are important for creating a great gameplay experience. Custom UI provides a set of APIs to concisely build [animations](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animation_2) in a performant way, along with configurable properties and start/stop methods to precisely control the behavior of the animations.

## Animated Binding class

The important piece for [building a dynamic UI](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/building-dynamic-custom-ui/) is the [Binding](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_binding) class. Similarly, the important piece for building animations is the new [AnimatedBinding](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding) class.

```
import { AnimatedBinding } from 'horizon/ui';

initializeUI() {
  const width = new AnimatedBinding(100);

  return View({
    children: [
      Pressable({
        children: Text({ text: 'Start Animation', style: { ... } }),
        onClick: () => width.set(200),
      }),
      View({ style: { backgroundColor: 'red', height: 100, width } }),
    ],
  });
}
```

## Create an animation

When you call the [set()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) method of an Animated Binding with a plain number, like above, the behavior of the Animated Binding is exactly the same as the regular Binding. The UI will be re-rendered with a new value of width, and the change is abrupt without any transition. However, for an Animated Binding, you can wrap the new value inside the [set()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) method with an `Animation.timing()` to turn it into an animation that will smoothly transition to the new value:

```
import { AnimatedBinding, Animation } from 'horizon/ui';

initializeUI() {

  const width = new AnimatedBinding(100);

  return View({
    children: [
      Pressable({
        children: Text({ text: 'Start Animation', style: { ... } }),
        onClick: () => width.set(Animation.timing(200)),
      }),
      View({ style: { backgroundColor: 'red', height: 100, width } }),
    ],
  });
}
```

You have created your first animation! You can see that there is no way to define a start value for an animation. An animation does not care about the start value; it only knows the end value that it needs to transition to. When playing an animation, the start value will be whatever the current value of the Animated Binding. If you want to specify a start value, you can explicitly call the `set()` method with a direct value before starting the animation:

```
onClick: () => {
  width.set(100);
  width.set(Animation.timing(200));
},
```

## Configure an animation

You will notice that without any additional configurations, the animation is using some default duration and easing. You can customize the behavior of the animation by passing a config object to the second parameter of the [Animation.timing()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animation_2) function.

```
import { AnimatedBinding, Animation, Easing } from 'horizon/ui';

onClick: () => width.set(Animation.timing(200, {
  duration: 500,
  easing: Easing.inOut(Easing.ease),
})),
```

The [config parameter of withTiming](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_timinganimationconfig) comes with two properties: `duration` and `easing`.
• The `duration` parameter defines how long in milliseconds the animation should take to reach the end value. The default duration is `500` milliseconds.
• The `easing` parameter lets us fine tune the animation over the specified time. For example, You can make the animation gradually accelerate to full speed and slow down to a stop at the end. The default easing is `Easing.inOut(Easing.ease)`. You can explore more provided [Easing](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_easing) functions in the API Reference.

## Compose animations

[Animations](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animation_2) can be further customized by modifying them into composite animations. Custom UI provides three built-in modifiers: Delay, Repeat, and Sequence. You can wrap an animation with `Animation.delay()` to add some suspense before the animation starts. The first parameter defines the duration of the delay in milliseconds. `onClick:` `()` `=>` width`.`set`(`Animation`.`delay`(`500`,` `Animation`.`timing`(`200`))),` You can wrap an animation with `Animation.repeat()` to replay the same animation over and over again. Before each iteration of the animation, the [Animated Binding](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding) will be reset to the default value when it is created, so that the animation is visually the same for every iteration. `onClick`:` `()` `=>` width`.`set`(`Animation`.`repeat`(`Animation`.`timing`(`200`))),` `Animation.repeat()` takes an optional second parameter indicating the number of times the animation needs to repeat. If the value is not provided, or if the value is negative (e.g. -1), the animation will repeat forever. `onClick`:` `()` `=>` width`.`set`(`Animation`.`repeat`(`Animation`.`timing`(`200`),` `5`)),` Finally, you can use `Animation.sequence()` to chain several animations together. You pass animations as arguments in the order that you want them to run, and the next animation will start when the previous one ends.

```
onClick: () => width.set(Animation.sequence(
  Animation.timing(200),
  Animation.timing(150),
  Animation.timing(250),
)),
```

These three modifiers can be combined freely to create even more complex composite animations. For example, if you want an animation that bounces back and forth between 100 and 200 for three times, but pausing for 200 milliseconds before each move, you can concisely write the animation as the following:

```
onClick: () => width.set(Animation.repeat(
  Animation.sequence(
    Animation.delay(200, Animation.timing(200)),
    Animation.delay(200, Animation.timing(100)),
  ),
  3,
)),
```

## Interpolation

Interpolation allows you to map a value from an input range to an output range using linear interpolation. This is useful when one animation needs to change multiple styles in sync. For example, suppose you want to change the width of the box from 100px to 200px, and you also want to change its opacity from 1 to 0 and create a fade-out effect. The straightforward way is to create two [Animated Bindings](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding), and call [set()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) on both of them when you start the animation:

```
initializeUI() {
  const width = new AnimatedBinding(100);
  const opacity = new AnimatedBinding(1);

  return View({
    children: [
      Pressable({
        children: Text({ text: 'Start Animation', style: { ... } }),
        onClick: () => {
          width.set(Animation.timing(200));
          opacity.set(Animation.timing(0));
        },
      }),
      View({ style: {
        backgroundColor: 'red',
        height: 100,
        width,
        opacity,
      } }),
    ],
  });
}
```

But with [interpolation](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods), you can also do the following:

```
initializeUI() {
  const width = new AnimatedBinding(100);

  return View({
    children: [
      Pressable({
        children: Text({ text: 'Start Animation', style: { ... } }),
        onClick: () => width.set(Animation.timing(200)),
      }),
      View({ style: {
        backgroundColor: 'red',
        height: 100,
        width,
        opacity: width.interpolate([100, 200], [1, 0]),
      } }),
    ],
  });
}
```

Summary of the code above:
• You know that the width and the opacity always change together. This indicates that you do not need two [Animated Bindings](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding) for each style; you only need to change one Animated Binding.
• You keep the `width` to be the source of truth and animate the width change as before. You pass the Animated Binding `width` to the `width` style.
• You want to pass the same Animated Binding to the `opacity` style, but before you do, you need to linearly interpolate the `width` value to the desired `opacity` value, so that the start value 100 corresponds to 1, and the end value 200 corresponds to 0.
• You pass the interpolated value to the `opacity` style.

Sometimes when the animation is too complicated, you might even create a generic Animated Binding that goes from 0 to 1, but do not pass it into any style, and always use [interpolation](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) when you set a style:

```
initializeUI() {
  const anim = new AnimatedBinding(0);

  return View({
    children: [
      Pressable({
        children: Text({ text: 'Start Animation', style: { ... } }),
        onClick: () => anim.set(Animation.timing(1)),
      }),
      View({ style: {
        backgroundColor: 'red',
        height: 100,
        width: anim.interpolate([0, 1], [100, 200]),
        opacity: anim.interpolate([0, 1], [1, 0]),
      } }),
    ],
  });
}
```

The [interpolate()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) method takes two parameters, the input range and the output range. Both are arrays and must have at least two elements. Input and output range arrays must have the same lengths. When an input number is outside of the input range, it will linearly extrapolate beyond the ranges given. When the length of the range arrays is greater than 2, you are telling it to interpolate with multiple range segments. For example:

```
const output = input.interpolate([-300, -100, 0, 100, 101], [300, 0, 1, 0, 0]);
//  input:  -400  -300  -200  -100   -50   0    50  100  101  200
// output:   450   300   150     0   0.5   1   0.5    0    0    0
```

The output range of the interpolation can also take a string or `Color` object array, which will map the Animated Binding number value to string or `Color`. This is extremely useful to animate color and values with units like angles. Obviously there are some limitations on the string format and not all the strings can be interpolated. The supported string formats include:
• Suffixed numbers: Strings being a number with a unit, like `"5.5%"`, `"90deg"`. Make sure there is no space between number and suffix, and all strings in the output range array have the same format. (Arrays like ['5.5%, '90deg'] are not allowed.)
• Colors: Different color formats can be used in the same array. You can even use [Color objects](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_color) and string color representations in the same array like `[new Color(1, 0, 0), '#00FFFF']`.

With this functionality, you can animate some color change and rotation within the same animation:

```
View({ style: {
  backgroundColor: anim.interpolate([0, 1], ['red', '#53575E']),
  height: 100,
  width: anim.interpolate([0, 1], [100, 200]),
  opacity: anim.interpolate([0, 1], [1, 0]),
  translate: [{rotation: anim.interpolate([0, 1], ['0deg', '180deg'])}],
} }),
```

## Interrupt or stop an animation

Animations have duration and take time to complete. Therefore it is possible to interrupt an animation in progress. One possible scenario is calling [set()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) again when the previous animation is not completed. The other scenario is explicitly calling the [stopAnimation()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) method of `AnimatedBinding`.

```
const anim = new AnimatedBinding(0);
anim.set(Animation.timing(20, {duration: 2000}));
// After 1000 ms
anim.set(Animation.timing(40, {duration: 2000}));
// After another 1000 ms
anim.stopAnimation();
```

The [stopAnimation()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) method will stop the current animation, regardless of which animation it is. If there is no animation in progress, the method will have no effect. When an animation is interrupted or stopped, the value of the underlying [AnimatedBinding](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding) simply stays at where it stops, and is not reset. If another animation is started, the animation will start from the stopped value. In the example above, when the first animation is interrupted halfway, the value should be 10; the second animation will then go from 10 to 40. After the second animation is stopped halfway, the value should be 25. As mentioned before, if you really want to specify a start value, you can explicitly call the `set()` method before starting the animation.

## Callback when the animation ends

The [set()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) method of [AnimatedBinding](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding) takes a completion callback `onEnd` that will be triggered when the animation is done. If the animation finishes running normally, the completion callback will be invoked with a `true` value. If the animation is done because it is interrupted or stopped before it could finish, then it will receive a `false` value. The completion callback is useful to implement some side effects after an animation is done, for example, hiding some components that went out of the viewport, updating some other bindings, etc. For example, if you want to change a Text from "Not done" to "Done" after the animation finishes normally, you can have the following:

```
initializeUI() {
  const done = new Binding<boolean>(false);
  const width = new AnimatedBinding(100);

  return View({
    children: [
      Text({ text: done.derive(v => v ? 'Not done' : 'Done') }),
      Pressable({
       onClick: () => width.set(
          Animation.timing(200),
         (finished: boolean) => {
            if (finished) {
             done.set(true);
           }
         },
       ),
      }),
      View({ style: { backgroundColor: 'red', height: 100, width } }),
    ],
  });
}
```

When you want to start another animation after the previous one is done, it is recommended to use the `Animation.sequence()` modifier to chain several Animation objects together, rather than implementing your own chaining logic in the callbacks. This is because a sequenced Animation object is fully serializable so that the rendering stack can play the animations on its own without involving any change in the TypeScript, which would be much slower. The completion callback is only invoked for Animations, and is ignored for direct value updates. For example, if you call `anim.set(200, () => doSomething())`, the value of the Animated Binding is directly set to 200 without any animations, and `doSomething()` will never be called. There is one more caveat. Because TypeScript can run on the server, when one single `set()` method is called, you might have started animations on multiple clients, so the completion callback might also be called multiple times, once by each client. In the example above, if you have five players in the world, and suppose the animation finishes on every client, `done.set(true)` will be set for five times.

## Player-specific UI

Similar to [Binding](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_binding) class can be used to display different content for each player, [AnimatedBinding](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding) also fully supports [player-specific UI](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/playerspecific-custom-ui/). You can start or stop animation only for certain players, and the concepts of [global value and player value](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/playerspecific-custom-ui#global-value-vs-player-values) are fully transferable.

```
anim.set(
  Animation.timing(200),
 (finished: boolean) => { ... },
  [player],
);
anim.stopAnimation([player]);
anim.reset([player]);
```

Remember that the [reset()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) method resets the player value back to the [global value](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/playerspecific-custom-ui#global-value-vs-player-values). It has nothing to do with animations, and cannot take an `Animation` object when resetting. There is no way to reset an animation to the start value. The best you can do is to stop it. Also notice that for the [set()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) method of `AnimatedBinding`s, the players array is the third parameter, not the second as in the [set()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_binding#methods) method for `Binding`s. You have to make room for the completion callback as the second parameter. You might need to pay attention to this difference if you migrate some Bindings into Animated Bindings. The completion callback `onEnd` inside the [set()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#methods) method can also take a `player` parameter, which indicates the player client that the animation is done on.

As mentioned above, because one `set()` call on the server can start multiple animations, one on each client, this completion callback will also be called multiple times, once for each player. Because you are able to stop or interrupt animations for selected players, the `finished` boolean state in each one of those invocations might be different. Assume there are 5 players in the session: player1, ..., player5

```
const results = {};
anim.set(
  Animation.timing(200, {duration: 2000}),
  (finished: boolean, player: Player) => {
    results[player.id] = finished;
  },
  [player2, player3, player4, player5],
);
// After 1000 ms
anim.stopAnimation([player3, player4]);
// After another 2000 ms
console.log(results);
// {'2': true, '3': false, '4': false, '5': true}
```

## Functional updates

Regular Bindings support [functional updates](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/building-dynamic-custom-ui/), and so do Animated Bindings. You can wrap an update function with `Animation.timing()`, just like how you wrap plain numbers.

```
// Plain value update
anim.set(100);
anim.set(Animation.timing(100));
// Functional update
anim.set(Animation.timing(v => v + 10));
```

If you chain several animations with functional updates in an `Animation.sequence()` call, the effect is accumulative: the update function of the next animation will be applied on the end value of the previous animation. For example, the following animation will go from 100 to 110, and then from 110 to 120:

```
const anim = new AnimatedBinding(100);
anim.set(Animation.sequence(
  Animation.timing(v => v + 10),
  Animation.timing(v => v + 10),
));
```

However, if you repeat an animation with functional update in an `Animation.repeat()` call, the effect is not cumulative. The same animation with the same start and end values will be replayed over and over, and the value is reset to the default value of the Animated Binding before each iteration. For example, the following animation will go from 100 to 110, and then jump back to 100, before going from 100 to 110 again:

```
const anim = new AnimatedBinding(100);
anim.set(Animation.repeat(Animation.timing(v => v + 10), 2));
```

There is one more caveat about the "previous value" that the update function is applying on. Custom UI serializes the entire animation and sends it to the rendering stack, and lets the rendering stack perform the animation without TypeScript being involved during the process. Therefore, if an animation is interrupted or stopped, TypeScript cannot know the value at which the animation stops, and there is no way you can apply the next functional update against that value. The previous value will only get successfully updated when the animation is finished normally, that is, `finished` is true in the completion callback.

```
const anim = new AnimatedBinding(100);
anim.set(Animation.timing(200, {duration: 2000}));
// After 1000 ms
anim.set(Animation.timing(v => v + 10));
// The first animation is interrupted at 150, and is not finished.
// TypeScript does not know about this, still thinking the value is 100.
// The second animation will go from 150 to 110, instead of 160.

// After another 2000 ms
// The second animation finishes successfully.
// TypeScript is notified about the new value 110.
anim.set(Animation.timing(v => v + 10));
// This third animation will go from 110 to 120.
```

## What’s next?

Try the tutorial world [Animation effects](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-examples-tutorial/station-9-animation-effects).
