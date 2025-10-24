# Module 5 - Player Out of Bounds Management Systems

 The Out of Bounds (OOB) management system for the player consists of 1) a
manager script and 2) a respawning script.
• Manager script: The manager script determines if a player is out of bounds by checking to see
if a perimeter trigger has been breached and/or the player has dropped too low
on the Y-axis (fallen off a building). While it is possible to have only OOB
areas or Y-axis check, we do both as a failsafe. Note: The PlayerOOBManager.ts script is attached to the empty object (gray box) in
the following screenshot.
• Respawning script : When the player is out of bounds, the game fades out for the player. When it
fades in again, the player is respawned at the closest respawn point on the
course.

 ![Image of respawning points](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452704315_512509424620347_8768241518730939723_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=PTdjcENSRUkQ7kNvwHWlMYc&_nc_oc=AdldYBLzrG4RLdiEDWI-EB7C3jy1C-2h__Kym5HG321DCmtrOGkR0i9-LElVsmkYqRI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=UYr81Wqh1xqk2I9w34jUZA&oh=00_AffejOs_SHNg0CJgg6LeDRC...

 A SpawnPoint is assigned to each player that enters the game. This SpawnPoint tracks along
the player’s course during the game, whenever they are touching the ground. This
is why it is important to not have accessible areas where the player cannot
return to the course. When the player falls out of bounds (dies), the player is
teleported back to the player’s tracking SpawnPoint as long as the game continues.
We respawn the player some height above the last known ground location for
safety, so they have time to adjust their location to fall back on the ground.  

## PlayerOOBManager.ts

 Manages the individual OOB controllers, initializing them. Note: We do not provide individual OOB controllers to each player to own (local)
because game calculations are faster on the server, and the server already knows
the location of each player. In the map is a perimeter trigger to catch when the player is out of bounds, as
well as an additional height safeguard that triggers when the player’s y
position is too low. Notes:
• Initializes a playerMap of mappings between players in the game, localized
respawning points, and subscriptions to triggering events.
• Y-coordinate value for out of bounds is stored as a property: OOBYWorldHeight.
• preStart():
  • Defines listeners for onPlayerEnterWorld and onPlayerExitWorld to be handled
locally. Also, defines listeners for local broadcast events to register an OOB
spawner and manage changed game states.
  • this.asyncIntervalID performs check on property-defined interval to see if
player is out of bounds (below Y coordinate). If so, the player is teleported to the
pairedRespawnGizmo for the player.
• start():
  • handleOnPlayerEnterWorld():
   • Assigns a respawner from the objPool to the player
   • Defines a subscription to a network event for the player, triggered off of the
onPlayerOutofBounds event. When the OOB event fires, the player is respawned at
the last known ground spawn point if the game is continuing. Otherwise, the
player is teleported back to the Lobby.
  • handleOnPlayerExitWorld():
   • playerRespawner assigned to the player is returned to the objPool,
   • Player is disconnected from event subscription and is removed from the
playerMap.

## PlayerOOBRespawner.ts

 Simple script to register the player’s spawner to the manager. Note: The PlayerOOBRespawner.ts script is attached to each instance of the player
SpawnPoint entities in the Hierarchy panel. Notes:
• See script.

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fhorizon-traversal-sample-world%2Fmodule-5-player-out-of-bounds-management-systems%2F)
