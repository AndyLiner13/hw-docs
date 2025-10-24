# Binding Class

Extends [ValueBindingBase](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_valuebindingbase)<T>

Represents a container for a variable value used by UI components. It can be passed to the supported props and styles of a component in place of an explicit value. When the value of the Binding is updated at runtime, the UI panels that use it are automatically re-rendered to reflect the change.

## Signature

```typescript
export declare class Binding<T> extends ValueBindingBase<T>
```

## Examples

```typescript
const binding = new Binding(initialValue);
binding.set(newValue);
```

## Remarks

There are other types of bindings, but this is the most basic type, where the Binding value is directly controlled in TypeScript.

Bindings can affect global or player values, so it's important to notice when a member description is specific to a global value or a player value. A global value is a value applied to every player by default before any player specific value is applied. A player value is a value that overrides a global value for a specific player.

For details about usage, see [Building Dynamic Custom UIs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/building-dynamic-custom-ui).

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(value) | Creates a Binding. **Signature:** `constructor(value: T);` **Parameters:** `value: T` - The initial value of the Binding. |

## Methods

| Method | Description |
| --- | --- |
| derive(mapFn) | Derives a new value from a list of Bindings with the provided map function. **Signature:** `static derive<R, A extends unknown[]>(dependencies: [...Dependencies<A>], mapFn: (...args: A) => R): DerivedBinding<R, A>;` **Parameters:** `dependencies: [...Dependencies<A>]` - The list of Bindings to depend on. `mapFn: (...args: A) => R` - A function that specifies how the derived value is calculated from the Bindings that it depends on. **Returns:** `DerivedBinding<R, A>` - A derived Binding. |
| derive(dependencies, mapFn) static | Derives a new value from a list of Bindings with the provided map function. **Signature:** `static derive<R, A extends unknown[]>(dependencies: [...Dependencies<A>], mapFn: (...args: A) => R): DerivedBinding<R, A>;` **Parameters:** `dependencies: [...Dependencies<A>]` - The list of Bindings to depend on. `mapFn: (...args: A) => R` - A function that specifies how the derived value is calculated. **Returns:** `DerivedBinding<R, A>` |
| reset(players) | Resets the player-specific value of the binding, if any, back to the global value. Like the Binding.set() method, this method also queues a re-render operation for all UI panels that use this Binding. **Signature:** `reset(players?: Array<Player>): void;` **Parameters:** `players: Array<Player>` (Optional) - The players to reset the value for. **Returns:** void |
| set(value, players) | Updates the value of the Binding and queues a re-render operation for all UI panels that use the Binding. The UI does not update if the new and old values are the same. **Signature:** `set(value: T \| ((prev: T) => T), players?: Array<Player>): void;` **Parameters:** `value: T \| ((prev: T) => T)` - The new value of the Binding, or an updater function. `players: Array<Player>` (Optional) - An optional array of players to send the value update to. **Returns:** void |