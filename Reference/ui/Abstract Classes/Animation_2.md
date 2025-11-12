Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animation_2

API reference

# Animation\_2 Class

A simple or composite animation that can be passed to the [AnimatedBinding.set()](/hw-docs/Reference/ui/Classes/AnimatedBinding.md#set) method.

## Signature

```
export declare abstract class Animation
```

## Examples

```
const anim = new AnimatedBinding(initialValue);
anim.set(Animation.repeat(Animation.timing(endValue, {duration: 300})));
```

## Remarks

Animations start on their own; they can only be used inside an [AnimatedBinding.set()](/hw-docs/Reference/ui/Classes/AnimatedBinding.md#set) call.
For information about usage, see [Animations for Custom UIs](/hw-docs/Desktop%20editor/Custom%20UI/Animations%20for%20custom%20UI.md).

## Methods

|  |  |
| --- | --- |
| **delay(time, animation)** static | Starts an animation after the specified duration.      Signature  ``` static delay(time: number, animation: Animation): Animation; ```  Parameters  time: number  The length of the delay to apply to the animation, in milliseconds.  animation: [Animation](/hw-docs/Reference/ui/Abstract%20Classes/Animation_2.md)  The animation to apply the delay to.  Returns  [Animation](/hw-docs/Reference/ui/Abstract%20Classes/Animation_2.md) |
| **repeat(animation, iterations)** static | Repeats an animation the given number of times.      Signature  ``` static repeat(animation: Animation, iterations?: number): Animation; ```  Parameters  animation: [Animation](/hw-docs/Reference/ui/Abstract%20Classes/Animation_2.md)  The animation to repeat.  iterations: number  *(Optional)* The number of times to repeat the animation. If not provided, or if a negative value if provided, the animation repeats until it is interrupted or stopped. When repeating the animation by passing an updater function to the [AnimatedBinding](/hw-docs/Reference/ui/Classes/AnimatedBinding.md) object, the effect is not accumulative. The same animation with the same start and end values is replayed.  Returns  [Animation](/hw-docs/Reference/ui/Abstract%20Classes/Animation_2.md)  Remarks  Before each iteration of the animation, the animated binding is reset to the default value when was is created. |
| **sequence(animations)** static | Runs a set of animations in sequence.      Signature  ``` static sequence(...animations: Array<Animation>): Animation; ```  Parameters  animations: Array<[Animation](/hw-docs/Reference/ui/Abstract%20Classes/Animation_2.md)>  The animations to run in sequence.  Returns  [Animation](/hw-docs/Reference/ui/Abstract%20Classes/Animation_2.md)  Remarks  When playing multiple animations in a squence for the same [AnimatedBinding](/hw-docs/Reference/ui/Classes/AnimatedBinding.md) object, the `sequence` method performs better than the `onEnd` callback that is passed to the `AnimatedBinding`. However, to play animations for different [AnimatedBinding](/hw-docs/Reference/ui/Classes/AnimatedBinding.md) objects in sequence, you must use the `onEnd` callback. |
| **timing(value, config)** static | Applies a timing animation to the binding based on the given easing curve.      Signature  ``` static timing(value: number | ((prev: number) => number), config?: TimingAnimationConfig): Animation; ```  Parameters  value: number | ((prev: number) => number)  The binding value. This can be an explicit value or an updater function that calculates the new value from the previous value.  config: [TimingAnimationConfig](/hw-docs/Reference/ui/Type%20Aliases/TimingAnimationConfig.md)  *(Optional)* The animation configuration that specifies the easing curve.  Returns  [Animation](/hw-docs/Reference/ui/Abstract%20Classes/Animation_2.md) |