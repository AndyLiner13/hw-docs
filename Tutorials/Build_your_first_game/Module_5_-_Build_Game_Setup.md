# Module 5 - Build Game Setup

  
## Overview

 Our Game Design Requirements from earlier are the following:
• When the game is in the `Ready` state, the course should not have gems in it.
• When the `Playing` state is triggered by a player, the course should be populated with gems.

 Let’s build these requirements now. This module has two steps:
1. Have the Game Manager hold a reference to each gem, and communicate to it when it needs to move.
2. Have each gem be in control of where it moves.

 This separation of concerns for the “when” and “where” responsibilities is
common practice. It helps our game setup to remain flexible, while keeping `GameManager.ts` simple.  
...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Build component properties for each gem

 Next, we update the static `propsDefinition` object inside of our `GameManager` component. Our gems are objects in the world, and as a prop type, we refer to a
world object as an entity. Meta Horizon Worlds doesn’t support Entity Array props at this time, but we can
easily create our own. Add five new properties to the `propsDefinition` object, one for each entity, as follows:  
```
static propsDefinition = {
  gemOne: {type: hz.PropTypes.Entity},
  gemTwo: {type: hz.PropTypes.Entity},
  gemThree: {type: hz.PropTypes.Entity},
  gemFour: {type: hz.PropTypes.Entity},
  gemFive: {type: hz.PropTypes.Entity},
};

```
 Now, select the empty object in your world that has the `GameManager` script attached to it. Its Properties panel is displayed on the right side of
...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Build component properties for each gem
...
the desktop editor. Scroll down to find the Scripts sub-panel. You see a reference to the `GameManager` script, followed by five new component props. These props have been defined as `hz.Entity` type, which means that they are constrained to be selections of objects that
are already in your world. Opening the drop-down for one of your script’s Gem
component props displays a list of each entity in the world. Here, though, we see a
set of `Emerald` entries. Which one is which? Naming game objects makes it easier to keep track of the ones to use. So, to
rename each one, select it in the main panel. In the Properties panel, you can
...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Build component properties for each gem
...
rename it to `emerald 1`, `emerald 2`, etc. ![Screenshot of Properties panel for selected gem in the desktop editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489880280_692135323324422_7523126256559279548_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=VH4Y_rp2UEEQ7kNvwHVhOpu&_nc_oc=AdkXMoYiTzcodr1CTU5uaox_vduUhNEUOGRnz3HANGR-t31kvinb1fw7AKhqAnNpJ5o&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GXH_VoOfoc...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Build component properties for each gem
...
 Now, select the Game Manager empty object. You can map the component property
...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Build component properties for each gem
...
for each gem to its corresponding named emerald, as follows: ![Screenshot of all five gems selected in Script properties](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/492371137_705021525369135_5887438574292242526_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=xFzFMNnxKtwQ7kNvwEwD8tI&_nc_oc=AdkH9LVJRGSKDQ99pwBMb3FoWVxC6FewH6KtGHDYrh6bVAo05-WlI0nG4VM1f7aiQVA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GXH_VoOfoc...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Build component properties for each gem
...
 You’ve wired up the gems to internal properties in your code.  
...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Build variable array to hold gems

 Back inside of our `GameManager` script, create a new private variable to hold all of our gems, and set its
initial value to an empty array. You can place this variable just after the class
declaration:  
```
private gems: hz.Entity[] = [];

```
 Then, in the `start()` function, populate this array with our gem props. This is a two-step process:
• API v2.0.0 does not allow Properties panel properties to serve as inputs to
other scripted objects, so you must first assign these values to local variables.
• Then, those variables can be added to the array.

  
```
const gem1: Readonly<hz.Entity> | undefined = this.props.gemOne;
const gem2: Readonly<hz.Entity> | undefined = this.props.gemTwo;
const gem3: Readonly<hz.Entity> | undefined = this.props.gemThree;
...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Build variable array to hold gems
...
const gem4: Readonly<hz.Entity> | undefined = this.props.gemFour;
const gem5: Readonly<hz.Entity> | undefined = this.props.gemFive;

this.gems.push(
  gem1!,
  gem2!,
  gem3!,
  gem4!,
  gem5!,
);

```
 When the `start()` method is executed, each of the static prop definitions, which have been mapped
in the Properties panel, is added (pushed) into this new `gems[]` array. We have:
• Externalized in the script’s Properties the properties for assigning each
collectible object (gem).
• Captured these objects to a single internal array for use in our code.

 On to the next!  
...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Create entity events for setup

 To finish off Step One of our plan, we must set the `GameManager` to communicate when gems need to move. This function is to be called when our state changes to
Playing. In the `switch` statement in `GameManager`, within the case for Playing, insert a call to a new `onGameStatePlaying()` function, which we define next:  
```
case GameState.Playing:
  if (this.gameState === GameState.Ready) {
    this.gameState = GameState.Playing;
    this.onGameStatePlaying();
  }
  break;

```
 This new `onGameStatePlaying()` function is called only by this component, so we can create a private method in
our `GameManager` class:  
```
private onGameStatePlaying(): void {
  // move gems to course
}

```
 For communication with each gem object, we could send a broadcast event again
...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Create entity events for setup
...
and have the gem objects subscribe to that event. However, in this case we have
references to the exact entities, so we can direct-send to each of them an event,
using the built-in sendLocalEvent API. Create and export another new event at the top of this file without passing any
data arguments:  `export` `const` moveGemToCourse `=` `new` hz`.`LocalEvent`<{}>(`'moveGemToCourse'`);` Back in the `onGameStatePlaying()` method, we must loop through our `this.gems` array, and send an Entity Event to each gem using the sendLocalEvent API. This API takes 3 arguments:
• the target entity,
• the Local Event,
• any data to pass along.

 The loop looks like the following:  
```
private onGameStatePlaying(): void {
...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Create entity events for setup
...
    this.gems.forEach((gem: hz.Entity) => {
      this.sendLocalEvent(
        gem,
        moveGemToCourse,
        {},
      );
    });
}

```
...
...
# Module 5 - Build Game Setup
...
## Step 1 - Build gem list
...
### Checkpoint

 The above loop steps through each gem entity in `this.gems` array and sends to it a local event, containing the local event `moveGemToCourse`. Step one done!  
 ...
...
# Module 5 - Build Game Setup

 We start by adding references to the five entities (or gems) to the Game Manager
through component properties. Component properties are properties of the component that we are building in
code.  
### Build component properties for each gem
...
### Build variable array to hold gems
...
### Create entity events for setup
...
### Checkpoint
 ...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
### Test


1. In the desktop editor, click the Reset button.
2. Press the Play button.
3. All gems should disappear from your course.

  
...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController

 There are several ways to make an entity appear. Meta Horizon Worlds has the
ability to spawn and despawn entities, but that may be overkill for what we need. A
simple hide-and-show technique works for our game and provides some performance benefits over spawning. To hide and show our gems, we need a new script to receive the entity events
that we created earlier and to control the position of each gem. Note: You can create the following `GemController` script and build it in the desktop editor, or you can refer to the `GemController_COMPLETE.ts` file, which is included in the tutorial world.
1. In the Scripts panel of the desktop editor, create a new script.
2. Name this script `GemController`.
3. Attach this script to one of the gems on your course:
  1. Select the gem.
  2. In the Properties panel, scroll to find the `GemController` script section at the bottom.
...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
4. Through the Scripts panel, open this new script in your editor.

 Let’s connect our new script to the local event we just created, using the `connectLocalEvent` from the built-in event system. At the top of the new `GemController` file, import the event from `GameManager`:  `import` `{`moveGemToCourse`}` `from` `'GameManager'`;` In the `start()` method of the `GemController` component, bind to our `moveGemToCourse` event. Add an event handler, `onMoveGemToCourseEvent`, in the event binding, and a new private method for the handler, just like we
did earlier in the `PlayerManager` script:  
```
start() {
    this.connectLocalEvent(
      this.entity,
      moveGemToCourse,
      () => {
        this.onMoveGemToCourseEvent();
      }
    );
  }
  ...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
  private onMoveGemToCourseEvent(): void {
    // TO DO: move gem into position
  }

```
 When the world is initialized, we want all gems to be hidden off of the course
when our game is in the Ready state. For the hidden position, we can store a
value of any far away position in our world. The following defines a position 100
units below our course (invisible) and sets that as a Vec3 value to a new private
variable:  
```
private hiddenLocation = new hz.Vec3(0, -100, 0);

```
 Since we want our gems hidden initially, we can move the gems to the hidden
position when the script starts. We need to apply this hidden location when the gems
...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
are initialized. Add the following to the beginning of the `start()` method:  `this`.`entity`.`position`.`set`(`this`.`hiddenLocation`);` When the `start()` method is called, the gem to which this script is attached in moved to the `hiddenLocation` position. When we want our gems to appear, we move them from the `hiddenLocation` to their current positions where we have placed them on our course layout. For the gem positions on the course, we could do something similar to the `hiddenLocation` solution. We could grab the current entity position, as shown below, and store
...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
that as a new variable on the `GemController` component. ![Screenshot of Properties panel showing XYZ coordinates for gem's world position](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489513296_692135303324424_6237353531129912976_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=JYrR78QsFkAQ7kNvwFCMXa7&_nc_oc=AdkxPaYgK007VrIYZMw2MFOSlrs6dHZmFBVzsRyk_z6ch-DX19Z9VtrCiTSSerBjsoQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GXH_VoOfoc0ZebwSDaZ...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
 This would work just fine. However, this solution may be difficult to use later,
if there are changes to the course or the gems. For each change of a gem’s
location, you must retrieve gem’s coordinates from the desktop editor and overwrite
the previous script variable. That gets tedious, even with only 5 gems in the
game. A very common and more flexible solution is to use a reference object and to set the gem’s position to the position of that game object. This way, if
you want to change where the gems appear, you simply need to change where the
reference object is located! This makes it very simple to make quick tweaks to
your game. Let’s add a reference object for each gem to our world.
1. In the main panel, add one Empty object to the world for each gem. Select Build menu > Empty object.
2. Place the empty objects next to the gems accordingly.
...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
3. Rename each empty object in its Properties panel.
...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
 ![Screenshot of gem and its related empty reference object in desktop editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489487322_692135399991081_8689336049908142159_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZjuZmEgXdlwQ7kNvwEQHK49&_nc_oc=Adn9MPTsNZhgvMAnAgKF8gZZ-1L8cnn7xXLcCiJ5tFr0zF1vi7RNfAJfTZ6r2Puw_OM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GXH_VoOfoc0ZebwSDaZS0g&oh=00_Afe3ansuif...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
 We can connect our position reference objects to our gems through component
props, which we learned to do earlier. In the code for the `GemController` component, update the `propsDefinition` with a new prop that requires an `Entity` as its value.  
```
static propsDefinition = {
    coursePositionRef: {type: hz.PropTypes.Entity},
};

```
 Select the gem that has the `GemController` script attached, and set the prop value to the correct reference empty object: ![Screenshot of attaching the GemController script in the Properties panel for a
...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
gem](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489738491_692135329991088_2745183880937428966_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=eiN90iq8-lYQ7kNvwEjxsJE&_nc_oc=AdmoAkuul7sse59mfMWIrSIRuym-5x5eVgGIwzpnbff4in3W0Rwxqj2ihvifKW1QJyw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GXH_VoOfoc0ZebwSDaZS0g&oh=00_Aff9tO_eZrDYdH9mKBOWuxuqeze7fJf...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
 For each of the 4 remaining gems:
1. Attach the `GemController` script.
2. Set its `coursePositionRef` prop.

 In the `GemController` script, we can now update our `OnMoveGemToCourseEvent()` method. When this event handler is called, update the position of the gem
entity to be the position of the attached `coursePositionRef` prop.  
```
private onMoveGemToCourseEvent(): void {
    this.entity.position.set(this.props.coursePositionRef!.position.get());
}

```
 The complete `GemController` script now looks like the following:  
```
import * as hz from 'horizon/core';
import { moveGemToCourse } from 'GameManager';

class GemController extends hz.Component {
  static propsDefinition = {
    coursePositionRef: {type: hz.PropTypes.Entity},
  };

private hiddenLocation = new hz.Vec3(0, -100, 0);
...
...
# Module 5 - Build Game Setup
...
## Step 2 - Build GemController
...
start() {

  this.entity.position.set(this.hiddenLocation);

  this.connectLocalEvent(
    this.entity,
    moveGemToCourse,
    () => {
    this.onMoveGemToCourseEvent();
    }
  );
}

private onMoveGemToCourseEvent(): void {
  this.entity.position.set(this.props.coursePositionRef!.position.get());
  }
}
hz.Component.register(GemController);

```
  
### Test
...
...
# Module 5 - Build Game Setup
...
## Checkpoint

 In this module, you:
• Built a set of gems using component properties
• Read these objects into an array
• Created an entity event to set them up
• Used empty objects to serve as reference points for their location on the course
• Hid the gems off-screen at start time

 Only one piece remains on our basic plans; creating a trigger for the player to
start the game.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
...
...
# Module 5 - Build Game Setup
...
## Checkpoint
...
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 5 - Build Game Setup
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fbuild-your-first-game%2Fmodule-5-build-game-setup%2F)
...
# Module 5 - Build Game Setup

  
## Overview
...
## Step 1 - Build gem list
...
## Step 2 - Build GemController
...
## Checkpoint
...
## Additional Links
...
      Learn
# Module 5 - Build Game Setup
...
