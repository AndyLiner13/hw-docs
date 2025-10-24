# Module 7 - Collecting Gems and Keeping Score

  
## Endgame
...
#### Solution


• When a player collides with a gem, it is collected. The gem is hidden, and we
increment a counter.
• The game is over when all gems (5) have been collected.

 Building the solution with a separation of concerns in mind helps to keep our
game easy to manage.
• A single gem should be responsible for managing itself when a collision occurs. For example, it should
move, or it should change color, or it should take damage, etc. It should send
messages of changes in status as needed.
• A single gem should NOT be responsible for knowing about all other gems in the world and keeping track of
the gem collecting progress. Updating changes on all gems could get difficult
and become buggy.
• Our `GameManager` is meant to manage the state and flow of the game, and it already knows how
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Endgame
...
#### Solution
...
many gems are in the world. This component should be the single source of truth for how many gems have been collected (game state).

 Each gem already has a `hiddenLocation` variable that we can use to move a gem off of the course. That’s part of the
solution. However, we do not have a way for gems to communicate to our `GameManager` yet. In theory, we could add the `GameManager` as a component prop to the `GemController` script and send a direct entity event. This would work. But what if there
other components that need to know when a gem is collected? Possible examples:
• A scoreboard needs to know.
• An audio system needs to know.
• Enemies need to know so they can move faster.

 We could end up with a long list of prop dependencies that we would need to
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Endgame
...
#### Solution
...
connect on every single gem. That doesn’t work. For our situation, broadcast events work best. Our new to-do list for when a collision event is fired on a gem is:
1. In `GemController`, have the gem move itself to its `hiddenLocation`.
2. In `GemController`, have the gem send a new `gemCollected` broadcast event.
3. Have the Game Manager subscribe to the `gemCollected` event.
4. Have the Game Manager keep a `totalGemsCollected` value.

 The next sections describe how to execute these tasks. However, we have already
learned how to do them! If you’re up for it, you can try it yourself and then
check the final `GameManager` and `GemController` scripts, which are included here and in the tutorial world.  
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Endgame

 Reviewing our Game Design requirements:
• The Finished state should be triggered automatically after the player has
collected all gems.

  
#### Solution
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Keeping score in GameManager

 In the `GameManager` script, add a new private variable:  `totalGemsCollected`. This variable keeps track of the game’s progress. The new `totalGemsCollected` variable could be a number that we increment by 1 each time we receive the
event. That could work. However, it does not prevent the possibility of us
accidentally counting the same gem twice. Additionally, if our game is expanded to
collect things other than gems or has more complex win states, a simple incrementing
variable is inadequate. Instead, let’s use a Map object here, and add gems when they are collected.
After a gem has been added, it cannot be added again, which is an easy way to
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Keeping score in GameManager
...
prevent duplicate counts. Add the following near the top of the `start()` method in the `GameManager` script:  `private` totalGemsCollected`:` `Map`<`bigint`,` hz`.`Entity`>` `=` `new` `Map`<`bigint`,` hz`.`Entity`
>();` Still in the `GameManager` script, we must create another new event. This broadcast event is published by
each collected gem, and the `GameManager` connects to it to listen for it. As part of the execution of the event, we want
to add each gem to our Map variable. We must pass the gem entity data, along
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Keeping score in GameManager
...
with the event:  `export` `const` collectGem `=` `new` hz`.`LocalEvent`<{`gem`:` hz`.`Entity`}>(`'collectGem'`);` Now, in the `start()` module of the `GameManager` component, subscribe to the event:  
```
this.connectLocalBroadcastEvent(collectGem, (data: {gem: hz.Entity}) => {
  this.handleGemCollect(data.gem);
});
```
 Create the `handleGemCollect()` event handler. Inside of the event handler, check if the gem has already been
collected. If not, add it:  
```
private handleGemCollect(gem: hz.Entity): void {
  if (!this.totalGemsCollected.has(gem.id)) {
    this.totalGemsCollected.set(gem.id, gem);
  }
}

```
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Keeping score in GameManager
...
 When all gems have been collected, the game state is supposed to be updated,
which we can address in this same event handler. Each time a gem is added to our `totalGemsCollected` map, check to see if we have collected all gems in our gems array (`this.gems`). The complete `handleGemCollect` method now looks like the following:  
```
private handleGemCollect(gem: hz.Entity): void {
  if (!this.totalGemsCollected.has(gem.id)) {
    this.totalGemsCollected.set(gem.id, gem);
  }
  if (this.totalGemsCollected.size === this.gems.length) {
    this.setGameState(GameState.Finished);
  }
}

```
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Keeping score in GameManager
...
 Note the different properties for checking size between the Map (`size`) and the array (`length`). To ensure replay, we should reset the count of `totalGemsCollected` when the game starts. In the GameManager class, add a new class method in `GameManager` called `onGameStateReady`, which clears the `totalGemsCollected` map.  
```
private onGameStateReady(): void {
   this.totalGemsCollected.clear();
};

```
 The above method must be called. In the `switch` statement in the `setGameState` function, call `onGameStateReady`.  
```
case GameState.Ready:
  if (this.gameState !== GameState.Playing) {
    this.gameState = GameState.Ready;
    this.onGameStateReady();
  }
  break;

```
 That’s it for the `GameManager` part of our to-do list, we can move to the `GemController` script.  
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Manage gem collection - GemController

 In the `GemController` script, add the `collectGem` event to the imports:  `import` `{`moveGemToCourse`,` collectGem`}` `from` `'GameManager'`;` Now, update the `handleCollision` method so that it moves the gem to the `hiddenLocation`, after which it emits a `collectGem` broadcast event:  
```
private handleCollision(): void {
    this.entity.position.set(this.hiddenLocation);
    this.sendLocalBroadcastEvent(
      collectGem,
      {gem: this.entity},
    );
  }

```
  
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Complete GemController script
...
### Testing

 You can verify that gem collecting and state updates are working correctly by
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Complete GemController script
...
### Testing
...
logging state changes from the `GameManager` script to the console (`console.log`). Then, check the console output during gameplay: ![Screenshot of the Console tab displaying log messages during runtime](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480888317_662906936247261_2138606661305590945_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fur_2A4jcl4Q7kNvwEUOpIF&_nc_oc=AdnPpokxPXTA5TkKAuWqYBzN-EAVMAhLImgfEW5Z_wikRqVhdEYxT2V5IoKQ6fheRNI&_nc_zt=14&_nc_ht=scontent-dfw...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Complete GemController script
...
### Testing
...
 Hooray!  
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Complete GemController script

 The complete `GemController` script now looks like the following:  
```
import * as hz from '@horizon/core';
import {moveGemToCourse, collectGem} from 'GameManager';

class GemController extends hz.Component<typeof GameController> {
  static propsDefinition = {
    coursePositionRef: {type: hz.PropTypes.Entity},
  };

  private hiddenLocation = new hz.Vec3(0, -100, 0);

  start() {
    this.entity.position.set(this.hiddenLocation);

    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerCollision,
      (collidedWith: hz.Player) => {
        this.handleCollision();
      },
    );

    this.connectLocalEvent(this.entity, moveGemToCourse, () => {
      this.onMoveGemToCourseEvent();
    });
  }

  private handleCollision(): void {
    this.entity.position.set(this.hiddenLocation);
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Complete GemController script
...
    this.sendLocalBroadcastEvent(collectGem, {gem: this.entity});
  }
  private onMoveGemToCourseEvent(): void {
    this.entity.position.set(this.props.coursePositionRef!.position.get());
  }
}
hz.Component.register(GemController);
```
  
### Testing
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Resetting the game
...
### Results

 These steps are repeats of things we have learned, so let’s skip straight to the
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Resetting the game
...
### Results
...
results. A new Trigger Zone with an attached `ResetGameTrigger` script: ![Screenshot of Reset trigger zone with attached script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488755649_692135413324413_6532781331557383189_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=sdpIe80gDBcQ7kNvwFg8wdm&_nc_oc=AdmeeXXmMzqMcd-k7qdnRpHoRa079W1gL6HJwU2QAEO2St6B5dnvQInE90HDskBbNIg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EeqZloP6...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Resetting the game
...
### Results
...
 The new `ResetGameTrigger` script:  
```
import * as hz from 'horizon/core';
import {GameState, setGameState} from 'GameManager';

class ResetGameTrigger extends hz.Component<typeof ResetGameTrigger> {
  static propsDefinition = {};

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      (enteredBy: hz.Player) => {
        this.handleOnPlayerEnter();
      },
    );
  }

  private handleOnPlayerEnter(): void {
    this.sendLocalBroadcastEvent(setGameState, {state: GameState.Ready});
  }
}

hz.Component.register(ResetGameTrigger);
```
 Our game can now be played over and over again! Players can start the game,
collect all coins, trigger the game to reset, and then trigger the game to start
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Resetting the game
...
### Results
...
again. Note: In this implementation, the `ResetGameTrigger` works only if all gems have been collected and the game is in a Finished state.
As an exercise, you can look to modify or improve the code to support reset in
states other than Finished.  
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Resetting the game

 Let’s enable replay, over and over again! We made it easy to manage and change game states, so resetting the game should
not be too hard. Let us make it possible to return the game back to the initial
Ready state. To trigger a game reset, we can follow our pattern from earlier when we manually
triggered game start. Here are the next steps we need to complete:
1. Add a new Trigger Zone gizmo to the Reset platform area in the provided course.
2. Create a new script named `ResetGameTrigger`. Attach it to the Trigger Zone.
3. Connect the `ResetGameTrigger` script to the `OnPlayerEnterTrigger` Code Block Event and then broadcast our existing `setGameState` event with the Ready state.

  
### Results
...
...
# Module 7 - Collecting Gems and Keeping Score

  
## Checkpoint


• At this point you have built a complete game!
• In the next module we are going to add a scoreboard that displays the game state
and the number of gems collected during gameplay, but you can stop here if you
like.
• The components you have built in this tutorial are the foundation for many great
experiences in Meta Horizon Worlds.

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
...
...
# Module 7 - Collecting Gems and Keeping Score

  
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
# Module 7 - Collecting Gems and Keeping Score

  
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fbuild-your-first-game%2Fmodule-7-collecting-gems-and-keeping-score%2F)
...
# Module 7 - Collecting Gems and Keeping Score

  
## Endgame
...
## Keeping score in GameManager
...
## Manage gem collection - GemController
...
## Complete GemController script
...
## Resetting the game
...
## Checkpoint
...
## Additional Links
...
      Learn
# Module 7 - Collecting Gems and Keeping Score
...
