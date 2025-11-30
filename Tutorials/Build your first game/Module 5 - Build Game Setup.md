Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-5-build-game-setup

# Module 5 - Build Game Setup

## Overview

Our Game Design Requirements from earlier are the following:

* When the game is in the `Ready` state, the course should not have gems in it.
* When the `Playing` state is triggered by a player, the course should be populated with gems.

Let’s build these requirements now.

This module has two steps:

- Have the Game Manager hold a reference to each gem, and communicate to it *when* it needs to move.
- Have each gem be in control of *where* it moves.

This separation of concerns for the “when” and “where” responsibilities is common practice. It helps our game setup to remain flexible, while keeping `GameManager.ts` simple.

## Step 1 - Build gem list

We start by adding references to the five entities (or gems) to the Game Manager through **component properties**. Component properties are properties of the component that we are building in code.

### Build component properties for each gem

Next, we update the static `propsDefinition` object inside of our `GameManager` component. Our gems are objects in the world, and as a prop type, we refer to a world object as an **entity**.

Meta Horizon Worlds doesn’t support Entity Array props at this time, but we can easily create our own. Add five new properties to the `propsDefinition` object, one for each entity, as follows:

```
static propsDefinition = {
  gemOne: {type: hz.PropTypes.Entity},
  gemTwo: {type: hz.PropTypes.Entity},
  gemThree: {type: hz.PropTypes.Entity},
  gemFour: {type: hz.PropTypes.Entity},
  gemFive: {type: hz.PropTypes.Entity},
};
```

Now, select the empty object in your world that has the `GameManager` script attached to it. Its Properties panel is displayed on the right side of the desktop editor. Scroll down to find the **Scripts** sub-panel. You see a reference to the `GameManager` script, followed by five new component props.

These props have been defined as `hz.Entity` type, which means that they are constrained to be selections of objects that are already in your world. Opening the drop-down for one of your script’s Gem component props displays a list of each entity in the world. Here, though, we see a set of `Emerald` entries. Which one is which?

Naming game objects makes it easier to keep track of the ones to use. So, to rename each one, select it in the main panel. In the Properties panel, you can rename it to `emerald 1`, `emerald 2`, etc.

![Screenshot of Properties panel for selected gem in the desktop editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489880280_692135323324422_7523126256559279548_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=6Dn9GbDQjhUQ7kNvwHG56ev&_nc_oc=AdmAsk8NTxb_M2haGwmin3pk4l9cXZW2SoVC78PDOiOV7nlOrfJUOz8OBmBBm7RzHz0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=m-CEPmMCyJtdYF_PlFJBQg&oh=00_AfjQjjLXYfSuDyN6HtVkO-3318oeTYZwO0YFUK6fIzrSAw&oe=69463212)

Now, select the Game Manager empty object. You can map the component property for each gem to its corresponding named emerald, as follows:

![Screenshot of all five gems selected in Script properties](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/492371137_705021525369135_5887438574292242526_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=d5xDmOZn-FQQ7kNvwFGXyBy&_nc_oc=AdkIKrIaWLhauZGiaQFvCMa9j7MvGvOcNnuFgUydu7XfYNa9nhe5tDAaxkqLGAIOExo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=m-CEPmMCyJtdYF_PlFJBQg&oh=00_AfglHXQ6bP_4k3GLcSG5HeOH4MdPi75qSkyw-CYR_J4pZA&oe=694637A1)

You’ve wired up the gems to internal properties in your code.

### Build variable array to hold gems

Back inside of our `GameManager` script, create a new private variable to hold all of our gems, and set its initial value to an empty array. You can place this variable just after the class declaration:

```
private gems: hz.Entity[] = [];
```

Then, in the `start()` function, populate this array with our gem props. This is a two-step process:

* API v2.0.0 does not allow Properties panel properties to serve as inputs to other scripted objects, so you must first assign these values to local variables.
* Then, those variables can be added to the array.

```
const gem1: Readonly<hz.Entity> | undefined = this.props.gemOne;
const gem2: Readonly<hz.Entity> | undefined = this.props.gemTwo;
const gem3: Readonly<hz.Entity> | undefined = this.props.gemThree;
const gem4: Readonly<hz.Entity> | undefined = this.props.gemFour;
const gem5: Readonly<hz.Entity> | undefined = this.props.gemFive;

this.gems.push(
  gem1!,
  gem2!,
  gem3!,
  gem4!,
  gem5!,
);
```

When the `start()` method is executed, each of the static prop definitions, which have been mapped in the Properties panel, is added (pushed) into this new `gems[]` array.

We have:

* Externalized in the script’s Properties the properties for assigning each collectible object (gem).
* Captured these objects to a single internal array for use in our code.

On to the next!

### Create entity events for setup

To finish off Step One of our plan, we must set the `GameManager` to communicate *when* gems need to move. This function is to be called when our state changes to Playing.

In the `switch` statement in `GameManager`, within the case for Playing, insert a call to a new `onGameStatePlaying()` function, which we define next:

```
case GameState.Playing:
  if (this.gameState === GameState.Ready) {
    this.gameState = GameState.Playing;
    this.onGameStatePlaying();
  }
  break;
```

This new `onGameStatePlaying()` function is called only by this component, so we can create a private method in our `GameManager` class:

```
private onGameStatePlaying(): void {
  // move gems to course
}
```

For communication with each gem object, we could send a broadcast event again and have the gem objects subscribe to that event. However, in this case we have references to the exact entities, so we can direct-send to each of them an event, using the built-in sendLocalEvent API.

Create and export another new event at the top of this file without passing any data arguments:

```
export const moveGemToCourse = new hz.LocalEvent<{}>('moveGemToCourse');
```

Back in the `onGameStatePlaying()` method, we must loop through our `this.gems` array, and send an **Entity Event** to each gem using the sendLocalEvent API. This API takes 3 arguments:

* the target entity,
* the Local Event,
* any data to pass along.

The loop looks like the following:

```
private onGameStatePlaying(): void {
    this.gems.forEach((gem: hz.Entity) => {
      this.sendLocalEvent(
        gem,
        moveGemToCourse,
        {},
      );
    });
}
```

### Checkpoint

The above loop steps through each gem entity in `this.gems` array and sends to it a local event, containing the local event `moveGemToCourse`.

Step one done!

## Step 2 - Build GemController

There are several ways to make an entity appear. Meta Horizon Worlds has the ability to spawn and despawn entities, but that may be overkill for what we need. A simple **hide-and-show technique** works for our game and provides some performance benefits over spawning.

To hide and show our gems, we need a new script to receive the entity events that we created earlier and to control the position of each gem.

**Note**: You can create the following `GemController` script and build it in the desktop editor, or you can refer to the `GemController_COMPLETE.ts` file, which is included in the tutorial world.

- In the Scripts panel of the desktop editor, create a new script.
- Name this script `GemController`.
- Attach this script to one of the gems on your course:
  - Select the gem.
  - In the Properties panel, scroll to find the `GemController` script section at the bottom.
- Through the Scripts panel, open this new script in your editor.

Let’s connect our new script to the local event we just created, using the `connectLocalEvent` from the built-in event system.

At the top of the new `GemController` file, import the event from `GameManager`:

```
import {moveGemToCourse} from 'GameManager';
```

In the `start()` method of the `GemController` component, bind to our `moveGemToCourse` event.

Add an event handler, `onMoveGemToCourseEvent`, in the event binding, and a new private method for the handler, just like we did earlier in the `PlayerManager` script:

```
start() {
    this.connectLocalEvent(
      this.entity,
      moveGemToCourse,
      () => {
        this.onMoveGemToCourseEvent();
      }
    );
  }

  private onMoveGemToCourseEvent(): void {
    // TO DO: move gem into position
  }
```

When the world is initialized, we want all gems to be hidden off of the course when our game is in the Ready state. For the hidden position, we can store a value of any far away position in our world. The following defines a position 100 units below our course (invisible) and sets that as a Vec3 value to a new private variable:

```
private hiddenLocation = new hz.Vec3(0, -100, 0);
```

Since we want our gems hidden initially, we can move the gems to the hidden position when the script starts. We need to apply this hidden location when the gems are initialized. Add the following to the beginning of the `start()` method:

```
this.entity.position.set(this.hiddenLocation);
```

When the `start()` method is called, the gem to which this script is attached in moved to the `hiddenLocation` position.

When we want our gems to appear, we move them from the `hiddenLocation` to their current positions where we have placed them on our course layout.

For the gem positions on the course, we could do something similar to the `hiddenLocation` solution. We could grab the current entity position, as shown below, and store that as a new variable on the `GemController` component.

![Screenshot of Properties panel showing XYZ coordinates for gem's world position](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489513296_692135303324424_6237353531129912976_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=FqVLdHoL1IcQ7kNvwH2c25U&_nc_oc=Admn2BFwR8-FraSy6rWRJ5IWpIc4y0KB4v9GJNLYHKCe4KvnGDo82kLOWJPobAShyY0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=m-CEPmMCyJtdYF_PlFJBQg&oh=00_Afjoxxv9jb2qVqgiY5JCFAbDG_GBztH49plsF6LAf_O5FA&oe=69463C68)

This would work just fine. However, this solution may be difficult to use later, if there are changes to the course or the gems. For each change of a gem’s location, you must retrieve gem’s coordinates from the desktop editor and overwrite the previous script variable. That gets tedious, even with only 5 gems in the game.

A very common and more flexible solution is to use a **reference object** and to set the gem’s position to the position of that game object. This way, if you want to change where the gems appear, you simply need to change where the reference object is located! This makes it very simple to make quick tweaks to your game.

Let’s add a reference object for each gem to our world.

- In the main panel, add one **Empty object** to the world for each gem. Select **Build menu > Empty object**.
- Place the empty objects next to the gems accordingly.
- Rename each empty object in its Properties panel.

![Screenshot of gem and its related empty reference object in desktop editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489487322_692135399991081_8689336049908142159_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=BNQxyQbrHbUQ7kNvwHC7P2w&_nc_oc=Adl5JgBTentgcaJYcrBViaI1F8EIBuVhcMdwWrIP-RNRuMJBmi5BDGYAODdAQWXh7mQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=m-CEPmMCyJtdYF_PlFJBQg&oh=00_AfiewAt-mbdUYzWiEZTdflcm5yoyiX5a3PS5pTeU7mvE0g&oe=69465105)

We can connect our position reference objects to our gems through component props, which we learned to do earlier. In the code for the `GemController` component, update the `propsDefinition` with a new prop that requires an `Entity` as its value.

```
static propsDefinition = {
    coursePositionRef: {type: hz.PropTypes.Entity},
};
```

Select the gem that has the `GemController` script attached, and set the prop value to the correct reference empty object:

![Screenshot of attaching the GemController script in the Properties panel for a gem](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489738491_692135329991088_2745183880937428966_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=q11ZVQJMaPMQ7kNvwHAbWFc&_nc_oc=Adn-uht2XUqqQKqkQI2d5osWHLhavK5TmBKXwVYWJUu9y6SDjWpLSf8HssMe2AN51qw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=m-CEPmMCyJtdYF_PlFJBQg&oh=00_AfiVVD3BzseXdiXT1Cyqy-19OE72vO4pE2o-KBtqpaBWeQ&oe=69465DDA)

For each of the 4 remaining gems:

- Attach the `GemController` script.
- Set its `coursePositionRef` prop.

In the `GemController` script, we can now update our `OnMoveGemToCourseEvent()` method. When this event handler is called, update the position of the gem entity to be the position of the attached `coursePositionRef` prop.

```
private onMoveGemToCourseEvent(): void {
    this.entity.position.set(this.props.coursePositionRef!.position.get());
}
```

The complete `GemController` script now looks like the following:

```
import * as hz from 'horizon/core';
import { moveGemToCourse } from 'GameManager';

class GemController extends hz.Component {
  static propsDefinition = {
    coursePositionRef: {type: hz.PropTypes.Entity},
  };

private hiddenLocation = new hz.Vec3(0, -100, 0);

start() {

  this.entity.position.set(this.hiddenLocation);

  this.connectLocalEvent(
    this.entity,
    moveGemToCourse,
    () => {
    this.onMoveGemToCourseEvent();
    }
  );
}

private onMoveGemToCourseEvent(): void {
  this.entity.position.set(this.props.coursePositionRef!.position.get());
  }
}
hz.Component.register(GemController);
```

### Test

- In the desktop editor, click the **Reset button**.
- Press the **Play button**.
- All gems should disappear from your course.

## Checkpoint

In this module, you:

* Built a set of gems using component properties
* Read these objects into an array
* Created an entity event to set them up
* Used empty objects to serve as reference points for their location on the course
* Hid the gems off-screen at start time

Only one piece remains on our basic plans; creating a trigger for the player to start the game.