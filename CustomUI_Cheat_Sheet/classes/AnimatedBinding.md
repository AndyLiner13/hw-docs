# AnimatedBinding Class

Extends [ValueBindingBase](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_valuebindingbase)<number>

A [Binding](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_binding) that supports animations when setting values. Only numbers are supported. When the value of the `AnimatedBinding` is updated at runtime, the UI panels that use it are automatically re-rendered to reflect the change.

## Signature

```typescript
export declare class AnimatedBinding extends ValueBindingBase<number>
```

## Examples

```typescript
const anim = new AnimatedBinding(initialValue);
anim.set(Animation.timing(newValue));
```

## Remarks

The `AnimatedBinding` class differs from the [Binding](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_binding) class in the following ways:

1. It only takes number value, while the `Binding` class takes any type.
2. It has no method, but has a more restrictive AnimatedBinding.interpolate() method.
3. In addition to plain numbers and update functions, the AnimatedBinding.set() method can also take an Animation object to define an animated transition to the new value.

For information about usage, see [Animations For Custom UIs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/animations-for-custom-ui).

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(value) | Constructs a new instance of the AnimatedBinding class. **Signature:** `constructor(value: number);` **Parameters:** `value: number` - The value of the binding. |

## Methods

| Method | Description |
| --- | --- |
| interpolate(inputRange, outputRange) | Returns an interpolated version of the animated binding. **Signature:** `interpolate<T extends number \| string \| Color>(inputRange: Array<number>, outputRange: Array<T>): AnimatedInterpolation<T>;` **Parameters:** `inputRange: Array<number>` - The range of number inputs to map to the output range of the interpolation. The array must have at least 2 elements. Each value in the range must be greater than or equal to the previous value (monotonically non-decreasing). `outputRange: Array<T>` - The range of number, string, or color outputs to map to the input range of the interpolation. The array must be of the same length as the inputRange array. **Returns:** `AnimatedInterpolation<T>` |
| reset(players) | Resets the player-specific value of the binding, if any, back to the global value. Like the Binding.set() method, this method also queues a re-render operation for all UI panels that use this Binding. **Signature:** `reset(players?: Array<Player>): void;` **Parameters:** `players: Array<Player>` (Optional) - The players to reset the value for. If not provided, all player-specific values are cleared. **Returns:** void |
| set(value, onEnd, players) | Updates the value of the binding and queues a re-render operation for all UI panels that use the binding. The UI does not update if the new and old values are the same. **Signature:** `set(value: number \| ((prev: number) => number) \| Animation, onEnd?: AnimationOnEndCallback, players?: Array<Player>): void;` **Parameters:** `value: number \| ((prev: number) => number) \| Animation` - The new value of the binding. This parameter can either be an explicit value, an updater function, or an Animation object. `onEnd: AnimationOnEndCallback` (Optional) - If an animation is passed to the value parameter, this callback triggers when animation ends. `players: Array<Player>` (Optional) - The players to apply the updated value to. **Returns:** void |
| stopAnimation(players) | Stops the binding animation for the given players. **Signature:** `stopAnimation(players?: Array<Player>): void;` **Parameters:** `players: Array<Player>` (Optional) - The players to stop the animation for. **Returns:** void |