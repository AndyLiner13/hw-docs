# Getting Started with Local Scripting

 Horizon scripts are run on the server by default, enabling your world to
maintain a consistent experience for all players. But, because scripts run on the
server, script actions can experience latency and cause disruptions. To improve
responsiveness within a world, you can convert your TypeScript logic to run in local
scripting mode. This runs the script on the user's device rather than on the
server if the device owns the entity the script is bound to, enhancing overall
performance.  
## Set a script to run locally

 To set your script to run in local scripting mode in Desktop Editor, perform the
following steps.
1.  In Desktop Editor, select Scripts in the menu bar to open the Scripts panel. ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452652035_512510781286878_7011830116582645952_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=nSqf6gzLDaoQ7kNvwG67K7o&_nc_oc=AdkaqS1RyujCA-aSBYrHrEih35wMnwpxoizahf3PdprK7KmyxLmOjNPtVDTjrZ7B7JU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=im9cfXEbpHX4MTsqNtNbcQ&oh=00_A...
2.  Click the more options menu of your script and change the Script Execution Mode from Default to Local.
 ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452577880_512510777953545_862034031477793040_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=do91MVIfHbAQ7kNvwGxKHi-&_nc_oc=AdnfAbycO50_ftTQNhis_elkesMMMyPmZDFjSu2-B8ThPieb418NRIc2olTcd1i8bAw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=im9cfXEbpHX4MTsqNtNbcQ&oh=00_Afc29noKhWh49Jk6hz-AzkvOVU4MgpQ7u1OYAJYNOMHvFQ...
  
## Entity ownership

 To better understand how local vs. server-side scripting interacts with entity
ownership, see the [Ownership in Meta Horizon Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds/) docs. With your script set to local scripting mode, your code runs locally when the
entity with the attached local script transfers ownership from the server to a
player. Entity ownership changes in the following cases:
• A script transfers ownership of the entity to a player using CodeBlock events.
• The entity is grabbed by a player.
• The entity collides with a player or an entity running locally for that player.

 Note : When a world loads for a user for the first time, and local scripting mode is
enabled on a script, the script initially runs on the server before
transferring to a user's device. When entity ownership is transferred, the following applies to local scripts
running on that entity:  
### The `start()` method is called

 When an entity changes ownership, the local runtime calls the `start()` method for the local script attached to that entity. During this time, any
events fired off before or during this transfer are lost, including those sent with
a delay. Throughout this event, your script can reset itself upon this ownership
change.  
### Entity properties aren't changed

 On transfer, any entity properties and script variables revert back to their
default values. This can cause issues in cases where an object has a set number of
uses or is personalized for the player. To avoid this, you should persist this
information separately, updating the appropriate values when ownership is
transferred using events.  
### Behaviors to note

  
#### `OnPlayerExitWorld` isn't received by local scripts

 If a local script subscribes to `OnPlayerExitWorld` , it won't receive that event if the player that owns the script leaves the
world. If your local script processes this event, you must set a script to Default Execution mode so it can track the event and then notify your local script.  
#### `OnPlayerEnterWorld` and `OnPlayerExitWorld` aren't received by local scripts

 If a local script subscribes to the `OnPlayerEnterWorld` and `OnPlayerExitWorld` events, it won't receive those events if the player toggles between preview and
build mode in World Builder. If your local script processes these events, you
must set a script to Default Execution mode so it can track the events and then notify your local script.  
#### `OnGrabEnd` and `OnAttachEnd` aren't received when owner exits world

 If a player exits the world while holding a local entity, the `OnGrabEnd` and `OnAttachEnd` events are no longer sent to that entity. If your entity has logic to perform
on these events, you should create a default script to track them and notify the
entity with the appropriate `OnGrabEnd` or `OnAttachEnd` events. Note: When the player exits the world, local scripts for that player will run on the
server instead of locally.  
#### Persistent Variables API is inaccessible in local scripts

 The Persistent Variables API is only available for default scripts. If your
local script must send or receive data from the Persistent Variables store, you
should send an event to an object running a default script to process the request.  
#### Local scripts can't listen for local events received by default scripts (and vice versa)

 If your scripts are listening to objects for events, be aware that local scripts
can't listen for local events received by default scripts and vice versa. If
you need to handle local events received by other objects, these objects must
communicate directly when they receive local events.  
#### Local events can only communicate with local events with the same owner

 Local events can only communicate with events owned by the same player. If you
have an object owned by different players, they must use CodeBlock events to
communicate with each other.  
#### Local scripts can't trigger asset spawning

 Due to security and integrity concerns, local scripts can't trigger asset
spawning. All asset spawning must be triggered on the server.  
#### Local scripts can't access texture assets

 Similar to the case of asset spawning, local scripts cannot access or use
texture assets. If you want to set a new UI-optimized texture for an entity, you must
send an event to a default script and let it trigger the API call.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
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
