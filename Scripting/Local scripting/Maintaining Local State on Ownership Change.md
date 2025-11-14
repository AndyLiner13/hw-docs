Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/maintaining-local-state-on-ownership-change

# Maintaining Local State on Ownership Change

If a local script’s entity transfers ownership, the script’s runtime state is lost. This can cause issues for entities where the local state is important to maintain, such as for entities with a limited number of uses. For example, a gun may have a current and limited amount of ammunition, which should be maintained as it is grabbed, and ownership of the gun is changed.

To ensure state information is passed from one player to another when an entity transfers ownership, you can override the `transferOwnership` and `receiveOwnership` functions to specify data to pass when ownership of the object changes. In this manner, when the gun is picked up by a new player, it has the same amount of ammunition as when the previous player dropped it.

**Tip**: To better understand how local vs. server-side scripting interacts with entity ownership, see the [Ownership in Meta Horizon Worlds](/hw-docs/Scripting/Local%20scripting/Ownership%20in%20Meta%20Horizon%20Worlds.md) docs.

**Note**: Components require a custom `State` type for data transferred when ownership of the entity changes. You should define this `State` type and include its definition in your `Component<Props, State>` definition. An example is provided below.

## Ownership APIs

API reference documentation:

* [transferOwnership method](/hw-docs/Reference/core/Abstract%20Classes/Component.md)
* [receiveOwnership method](/hw-docs/Reference/core/Abstract%20Classes/Component.md)
* [SerializableState type](/hw-docs/Reference/core/Type%20Aliases/SerializableState.md)

## TypeScript example

The following example illustrates how you can override the `transferOwnership` and `receiveOwnership` functions with the local entity’s ownership is transferred.

```
import * as hz from 'horizon/core';

type Props = { initialAmmo: number };
type State = { ammo: number };

class WeaponWithAmmo extends hz.Component<Props, State> {

  static propsDefinition = {
      initialAmmo: { type: hz.PropTypes.Number, default: 20 },
  };

  // local state that would normally be lost on ownership transfer
  private ammo: number = 0;

  start(): void {

    // set local value for ammo
    this.ammo = this.props.initialAmmo;

    // imagine there's some event here that decreases ammo over time

  };

  // this is called on the new owner's instance of the script
  // after it starts up and receives state from the previous owner.
  receiveOwnership(
    state: State | null,
    fromPlayer: hz.Player,
    toPlayer: hz.Player,
  ): void {
    if (state != null) {
      this.ammo = state.ammo;
    };
  };

  // this is called on the previous owner's instance of the script
  // to let it export its local state and send it over to the new owner.
  transferOwnership(
    fromPlayer: hz.Player,
    toPlayer: hz.Player,
  ): State {
    return { ammo: this.ammo };
  };

};

hz.Component.register(WeaponWithAmmo);
```