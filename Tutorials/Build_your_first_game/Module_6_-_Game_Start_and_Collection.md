# Module 6 - Game Start and Collection

  
## Manually triggering game start
...
### Add a trigger zone

 In the desktop editor, select Build menu > Gizmos: ![Screenshot of selecting Gizmos from the Build menu](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489125328_692135299991091_4111077702588148303_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=rC_aJImR-1kQ7kNvwEuWq8f&_nc_oc=AdnDbXgxKCBE7rXDt2BIUBogTnWLT631v9zd-QgepQbWNTw-1sCbXiFkxru5y09nJDQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=qmHSZWyhuFbdo1Vvd00...
...
# Module 6 - Game Start and Collection

  
## Manually triggering game start
...
### Add a trigger zone
...
 Click and drag the Trigger Zone icon to add a trigger zone to the world: ![Screenshot of selecting the Trigger gizmo from the Gizmos panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489035548_692135403324414_320847249441776665_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=91XTwa-up7MQ7kNvwFaN6jf&_nc_oc=AdlWLw-dUZ473LgtTD1lPHv-_XhvUmji3ENRab5mMcSGaMWGBW7-jKJO26tl6yieOFE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qmHSZWyhuFbdo1Vvd...
...
# Module 6 - Game Start and Collection

  
## Manually triggering game start
...
### Add a trigger zone
...
 Click the Move tool in the toolbar. Move the Trigger Zone to the Start platform in the corner of
the provided course. Scale the trigger zone using the Scale tool available in the toolbar. Make it the same length and width of the visible,
...
...
# Module 6 - Game Start and Collection

  
## Manually triggering game start
...
### Add a trigger zone
...
raised platform. ![Screenshot of selecting the Scale tool in the toolbar](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480829176_662906912913930_5978396360539499939_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=rdswK8iaIQoQ7kNvwHsl1Dv&_nc_oc=AdnaJY7wpMVLIP05ApiISCc8biSCSms4GkyTx5Gl34Jr_QG3Cw5NedeFU7i7QjPIRlQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=qmHSZWyhuFbdo1Vvd00tng&oh=00_Afc-acjkQB...
...
# Module 6 - Game Start and Collection

  
## Manually triggering game start
...
### Add a trigger zone
...
 The course should look similar to the following: ![Screenshot of finished trigger zone in the desktop editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/481054503_662906919580596_1618625342451013238_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=lO0WlaxbRE0Q7kNvwF29oPr&_nc_oc=AdlInlLODWFa8On84p7OJ2SS3mrZoKogAgEBucb7fboPEf0W6zs6fKGQlaRq3_NmTds&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qmHSZWyhuFbdo1Vvd00tn...
...
# Module 6 - Game Start and Collection

  
## Manually triggering game start
...
### Trigger zone coding

 Trigger zones support some useful built-in Code Block Events. Each time a player enters the
trigger zone, the `OnPlayerEnterTrigger` event fires. To access this event, we attach a script to our trigger zone
entity and build the code there. Note: You can build the script from scratch in the following steps, or you can refer
to the `StartGameTrigger_COMPLETE.ts` script in the tutorial world for the finished script.
1. In the Script panel, create a new script.
2. Name it `StartGameTrigger`.
3. In the Main window, select the trigger zone entity.
4. In the Properties panel for the trigger zone entity, attach the new `StartGameTrigger` script.
5. Open the new script in your editor.

 In the `start()` function, connect to the `OnPlayerEnterTrigger` event. Arguments:
• Reference to the trigger zone (`this.entity`)
...
...
# Module 6 - Game Start and Collection

  
## Manually triggering game start
...
### Trigger zone coding
...
• Reference to the `onPlayerEnterTrigger` event.
• This event takes a callback function as the third argument and passes the player object to that callback, when the
listener detects the `onPlayerEnterTrigger` event. In the following code, this player reference is named `enteredBy` and can be referenced, if needed, in the callback function.

 Create an event handler method for this event binding and call to it from within
the callback function:  
```
start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      (enteredBy: hz.Player) => {
        this.handleOnPlayerEnter();
      }
    );
  }

  private handleOnPlayerEnter(): void {
  // TODO
  }

```
...
...
# Module 6 - Game Start and Collection

  
## Manually triggering game start
...
### Trigger zone coding
...
 We already set up our `GameManager` script to subscribe to `setGameState` events. So, we import the event and `GameState` enum into our `StartGameTrigger`:  `import` `{`setGameState`,` `GameState`}` `from` `'GameManager'`;` We can configure our event handler to emit an event to start the game:  
```
private handleOnPlayerEnter(): void {
    this.sendLocalBroadcastEvent(setGameState, {state: GameState.Playing});
}
```
...
...
# Module 6 - Game Start and Collection

  
## Manually triggering game start

 Bring those gems back! A common way to have players start a game is to add a Trigger Zone gizmo through
which players pass to initialize the game. Let’s set that up in our game.  
### Add a trigger zone
...
### Trigger zone coding
...
...
# Module 6 - Game Start and Collection
...
## Checkpoint

 Done with setting up the gems and the triggering of them into the world! We can
verify all of the work we have done:
1. Click the Reset world simulation button in the toolbar.
2. Press the Play button to enter the world in Preview mode.
3. When first entering Preview mode, you should not see any gems in your course.
4. Run through the Start platform area which has our trigger zone.
5. All of the gems should appear in your course!

  
### Troubleshooting

 If you are not seeing the expected results:
• Review console for scripting errors.
• Verify that all scripts are attached and props, on triggers and gems, are set.

  
...
...
# Module 6 - Game Start and Collection
...
## Entity collisions
...
### Set gem properties

 For a platform-style game, a player should collect a gem by simply running into
it. Whenever a player collides with a gem, an event should fire to handle the
effects of collecting the gem. We can configure our gems to receive collision
...
...
# Module 6 - Game Start and Collection
...
## Entity collisions
...
### Set gem properties
...
events in the Properties panel for each gem. ![Screenshot of selected gem and its Properties panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489857671_692135406657747_3269629125234067770_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=LGiLEVSLbNcQ7kNvwHZouHU&_nc_oc=AdnNEBIni2B_TXtWqo1RWoRp2uJFyE_rAi45Y4MNd0rmDfyxJMgY8U85SB4z23BFFm8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qmHSZWyhuFbdo1Vvd00tng&oh=00_AfcOW...
...
# Module 6 - Game Start and Collection

  
## Entity collisions
...
### Set gem properties
...
 Select one of the gems on your course, and configure the following properties:
• Collision Layer: `Players Only`.
  • Our demo game here has no other objects in motion, so this setting is not
important at present. However, it’s a good practice to scope as tightly as possible,
in case you decide to add other objects in the future.
• Motion: `Interactive`
• Interaction: `Grabbable`
  • In this game, we just want a player to collect a gem when colliding with it. We
do not want the player to have to physically grab a gem.
  • However, we need `Grabbable` to be set for our gems to be interactive and to receive events from player
interactions.
...
...
# Module 6 - Game Start and Collection

  
## Entity collisions
...
### Set gem properties
...
 We can still set up our objects to behave exactly as we prefer. ![Screenshot of selected gem and its collision-related properties](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489142265_692135339991087_261137589439071753_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=AADoq5RuwWwQ7kNvwEYoQyw&_nc_oc=Adn3TgAaVimy4MCiLd_dluCWGJPU7BiRQya_7yYYRv47nNep8OBj1zdjKfXn48F8P9E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qmHSZWyhuFbdo...
...
# Module 6 - Game Start and Collection

  
## Entity collisions
...
### Set gem properties
...
 Set the following collision-related properties:
• Collision Events: `Players`
• Disable events from `Player Heads` and `Player Hands`. Enable for `Player Torsos` only.
  • To avoid multiple collision events from firing when a player runs into a gem, we
only need events from the player torsos.
• To disable the default grabble behavior, set Who Can Grab? property to `Script Assignee(s)`.
  • With this setting, you must explicitly set a player as an owner in TypeScript
for an object to be grabbable by that player.
  • In our game, we won’t set an owner in TypeScript, which results in our preferred
collection interaction.

 Repeat the application of the above property definitions to each of the 5 gems.  
...
...
# Module 6 - Game Start and Collection

  
## Entity collisions
...
### Bind to collision events

 Our gem properties are now configured how we want them. The next step is binding
to the correct Code Block Events. In the `GemController` script, in the `start()` function, add a new Code Block event listener for the built-in `OnPlayerCollision` event:  
```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerCollision,
  (collidedWith: hz.Player) => {
    this.handleCollision();
  },
);
```
 And, as we have done before, create event handler method named `handleCollision()`:  
```
private handleCollision(): void {
}

```
  
...
...
# Module 6 - Game Start and Collection

  
## Entity collisions

 The gems hide and show correctly, but running into them doesn’t do anything. We
must set up the collision events between players and gems. Click the Stop button in the toolbar to stop the simulation, which stops all scripts from running and
...
...
# Module 6 - Game Start and Collection

  
## Entity collisions
...
returns the gem objects to their original (hidden) position: ![Screenshot of the Stop button in the toolbar of the desktop editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/490183383_692135389991082_8612843187370717632_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=AXYbF0tRjxMQ7kNvwGMzugC&_nc_oc=Adnq9r6M1XV3woilpTA-PMgWmNwb_xVNhJB6vm9ACktaOgwYhkjbqcpgCnrmfssfGtw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=qmHSZWyhuFbdo1Vvd00tng&oh=00_A...
...
# Module 6 - Game Start and Collection

  
## Entity collisions
...
### Set gem properties
...
### Bind to collision events
...
...
# Module 6 - Game Start and Collection
...
## Checkpoint
...
### Console results

 ![Results in the Console tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/481080474_662906932913928_2876650707859435079_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=PD3iL4qfH5AQ7kNvwGHswPg&_nc_oc=AdlknjCBxYxiux-5KOTVhdRHPJ_V8hDPBT7ihv9dm6T57lpGvQHPKfuDcIVPxT8c4sM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qmHSZWyhuFbdo1Vvd00tng&oh=00_AfdJg4pSuhZ6ooZuPN...
...
# Module 6 - Game Start and Collection
...
## Checkpoint
...
### Console results
 ...
 It works!  
 ...
...
# Module 6 - Game Start and Collection
...
## Checkpoint
...
### Troubleshooting

 Our collision events are triggered from the player’s torso only. If the gems
aren’t getting collected based on player collisions, verify that the position
reference objects are placed close to chest height on your avatar.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Module 6 - Game Start and Collection
...
## Checkpoint
...
### Troubleshooting
...
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
# Module 6 - Game Start and Collection
...
## Checkpoint

 We can verify collisions are working as expected by adding a console log to the
event handler:  
```
private handleCollision(): void {
  console.log('gem collision');
}

```
...
...
# Module 6 - Game Start and Collection
...
## Checkpoint
...
 Press the Play button to activate the world simulation, which also executes scripts: ![Screenshot of the Play button highlighted in the toolbar](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489312364_692135343324420_2299170072300284243_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=AlCbDFVVc1UQ7kNvwF2ksty&_nc_oc=AdkzUHCI1BRTdaNsFDyoOfsIt9Pf9lw3q4TRDXgelXC8NOa2k74_q_TWh0rei4owVWM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qmHSZWyhuFbdo1Vvd00tng&oh=00_AffNjoN8...
...
# Module 6 - Game Start and Collection
...
## Checkpoint
...
### Console results
 ...
### Troubleshooting
...
...
# Module 6 - Game Start and Collection
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fbuild-your-first-game%2Fmodule-6-game-start-and-collection%2F)
...
# Module 6 - Game Start and Collection

  
## Manually triggering game start
...
## Checkpoint
...
## Entity collisions
...
## Checkpoint
...
## Additional Links
...
      Learn
# Module 6 - Game Start and Collection
...
