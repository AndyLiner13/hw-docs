Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_binding

# Binding Class

Extends *[ValueBindingBase](/hw-docs/Reference/ui/Abstract%20Classes/ValueBindingBase.md)<T>*

Represents a container for a variable value used by UI components. It can be passed to the supported props and styles of a component in place of an explicit value. When the value of the Binding is updated at runtime, the UI panels that use it are automatically re-rendered to reflect the change.

## Signature

```
export declare class Binding<T> extends ValueBindingBase<T>
```

## Examples

```
const binding = new Binding(initialValue);
binding.set(newValue);
```

## Remarks

There are other types of bindings, but this is the most basic type, where the Binding value is directly controlled in TypeScript.
Bindings can affect global or player values, so it's important to notice when a member description is specific to a global value or a player value. A global value is a value applied to every player by default before any player specific value is applied. A player value is a value that overrides a global value for a specific player.
For details about usage, see [Building Dynamic Custom UIs](/hw-docs/Desktop%20editor/Custom%20UI/Building%20dynamic%20custom%20UI.md).

## Constructors

|  |  |
| --- | --- |
| **(constructor)(value)** | Creates a Binding.  ---  Signature  ``` constructor(value: T); ```  Parameters  value: T  The initial value of the Binding. |

## Methods

|  |  |
| --- | --- |
| **derive(mapFn)** | Derives a new value from a list of Bindings with the provided map function.      Signature  ``` static derive<R, A extends unknown[]>(dependencies: [...Dependencies<A>], mapFn: (...args: A) => R): DerivedBinding<R, A>; ```  Parameters  dependencies: [...Dependencies<A>]  The list of Bindings to depend on.  mapFn: (...args: A) => R  A function that specifies how the derived value is calculated from the Bindings that it depends on. It takes the values of the dependencies as parameters, and returns the derived value.  Returns  DerivedBinding<R, A>  A derived Binding. Just like a Binding, it can be passed to the supported props and styles of a component in place of an explicit value. However, it does not have a set() method; its value is purely derived from the Bindings that it depends on. |
| **derive(dependencies, mapFn)** static | Derives a new value from a list of Bindings with the provided map function.      Signature  ``` static derive<R, A extends unknown[]>(dependencies: [...Dependencies<A>], mapFn: (...args: A) => R): DerivedBinding<R, A>; ```  Parameters  dependencies: [...Dependencies<A>]  The list of Bindings to depend on.  mapFn: (...args: A) => R  A function that specifies how the derived value is calculated from the Bindings that it depends on. It takes the values of the dependencies as parameters, and returns the derived value.  Returns  DerivedBinding<R, A>  A derived Binding. Just like a Binding, it can be passed to the supported props and styles of a component in place of an explicit value. However, it does not have a set() method; its value is purely derived from the Bindings that it depends on. |
| **reset(players)** | Resets the player-specific value of the binding, if any, back to the global value. Like the [Binding.set()](/hw-docs/Reference/ui/Classes/Binding.md#set) method, this method also queues a re-render operation for all UI panels that use this Binding.      Signature  ``` reset(players?: Array<Player>): void; ```  Parameters  players: Array<Player>  *(Optional)* The players to reset the value for. If not provided, all player-spesific values are cleared. If provided, only value for players in the list are reset and receive the global value.  Returns  void |
| **set(value, players)** | Updates the value of the Binding and queues a re-render operation for all UI panels that use the Binding. The UI does not update if the new and old values are the same.      Signature  ``` set(value: T | ((prev: T) => T), players?: Array<Player>): void; ```  Parameters  value: T | ((prev: T) => T)  The new value of the Binding, or an updater function that receives the previous value and mutates both the global value and each associated `player` value.  players: Array<Player>  *(Optional)* An optional array of players to send the value update to. It is used to determine whether the global value or the player-specific value should be updated. When not provided, all players receive the updated value; the global value is updated, and any player-specific values are cleared. When provided, only those players will get the new value as a new player-specific value, but the global value is unchanged.  Returns  void |