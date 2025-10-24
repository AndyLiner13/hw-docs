# Animation_2 Class

A simple or composite animation that can be passed to the [AnimatedBinding.set()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#set) method.

## Signature

```typescript
export declare abstract class Animation
```

## Examples

```typescript
const anim = new AnimatedBinding(initialValue);
anim.set(Animation.repeat(Animation.timing(endValue, {duration: 300})));
```

## Remarks

Animations start on their own; they can only be used inside an [AnimatedBinding.set()](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_animatedbinding#set) call. For information about usage, see [Animations for Custom UIs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/animations-for-custom-ui).

## Methods

| Method | Description |
| --- | --- |
| delay(time, animation) static | Starts an animation after the specified duration. **Signature:** `static delay(time: number, animation: Animation): Animation;` **Parameters:** `time: number` - The length of the delay to apply to the animation, in milliseconds. `animation: Animation` - The animation to apply the delay to. **Returns:** Animation |
| repeat(animation, iterations) static | Repeats an animation the given number of times. **Signature:** `static repeat(animation: Animation, iterations?: number): Animation;` **Parameters:** `animation: Animation` - The animation to repeat. `iterations: number` (Optional) - The number of times to repeat the animation. If not provided, or if a negative value if provided, the animation repeats until it is interrupted or stopped. **Returns:** Animation **Remarks:** Before each iteration of the animation, the animated binding is reset to the default value when was is created. When repeating the animation by passing an updater function to the AnimatedBinding object, the effect is not accumulative. The same animation with the same start and end values is replayed. |
| sequence(animations) static | Runs a set of animations in sequence. **Signature:** `static sequence(...animations: Array<Animation>): Animation;` **Parameters:** `animations: Array<Animation>` - The animations to run in sequence. **Returns:** Animation **Remarks:** When playing multiple animations in a sequence for the same AnimatedBinding object, the sequence method performs better than the onEnd callback that is passed to the AnimatedBinding. However, to play animations for different AnimatedBinding objects in sequence, you must use the onEnd callback. |
| timing(value, config) static | Applies a timing animation to the binding based on the given easing curve. **Signature:** `static timing(value: number \| ((prev: number) => number), config?: TimingAnimationConfig): Animation;` **Parameters:** `value: number \| ((prev: number) => number)` - The binding value. This can be an explicit value or an updater function that calculates the new value from the previous value. `config: TimingAnimationConfig` (Optional) - The animation configuration that specifies the easing curve. **Returns:** Animation |