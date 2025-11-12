Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/sim-tycoon-tutorial/module-5-backpack

Learn

# Module 5 - Backpack (Tool)

The backpack is an attachable tool that increases the player’s inventory capacity. Unlike grabbable tools like pickaxes, backpacks are attached to the player’s torso and provide passive benefits while equipped.

## System components

### Property description

* **name** – name stringID of the backpack.
* **capacity** – how many resources it can hold.

#### Core functions

* **`start()`** – records the backpack’s starting position.
* **`returnToPool()`** – instantly moves the backpack back to its starting position.
* **`returnToPoolDelayed()`** – returns the backpack to its starting position after a 1-second delay.
* **`getAnimationState()`** – returns whether the backpack is currently animating.
* **`setAnimationState(isAnimating: boolean)`** – sets the animation state.

## How to deploy

- Add `backpack.ts` to your project.
- Create a backpack entity in the world.
- Attach `backpack.ts` to the entity.
- Set the capacity property to adjust how many resources it can store.
- If you are adding a new tool, make sure to add it to the save game data.

## How to use

* The backpack automatically tracks its starting position when spawned.
* Call `returnToPool()` to reset it immediately.
* Call `returnToPoolDelayed()` if you want a 1-second delay.

## Modifications

* Change the capacity to allow for larger or smaller backpacks.
* Change the model to create different attachables.