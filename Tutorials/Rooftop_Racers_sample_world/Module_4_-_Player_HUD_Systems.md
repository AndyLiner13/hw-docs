# Module 4 - Player HUD Systems

 The Player HUD systems create a pool of HUD objects, which are assigned to
players as they enter the world.  

## HUD pool

 The world includes a set of HUD objects in a pool, located behind the starting
area: ![Image of HUD objects in a pool](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452943973_512509374620352_8719646224426405196_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=GraNuTdUOz4Q7kNvwFY3rdq&_nc_oc=Adm9qn9vk90DZrtYjY52Iw5YSCPIJEPtfqmD8fvNfIpBrF0qchYl3uClTRQDT61mh6A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Ophm1AS6kgGqo3X5IILUVw&oh=00_Afd_QxxUcw7jzOkvv...

 An individual HUD object consists of:
• HUDLocal object
  • Attached script: HUDLocal.ts
• Hud text1: Text object that displays game position during race
• Hud text2: Text object that displays running time during the race

 Tip: In the Hierarchy panel, search for: HUD.  

## HUDManager.ts

 Initializes the player local HUDs and passes information to each player about
the state of the race. Note: The HUDManager.ts script is attached to the empty object in the above
screenshot. Notes:
• Creates a HUDPool object for containing HUD entities. Creates PlayerHUDCtrlMap
map object for mapping HUD objects to players.
• preStart():
  • Creates listeners for onPlayerEnterWorld and onPlayerExitWorld, which handle
getting and removing the player HUD from the pool and the control map,
respectively.
  • Creates listener for the local broadcast event: onRegisterRaceHUD. When this
event is received by the HUD manager, the local player’s HUD object is added to the
pool.

  

## HUDLocal.ts

 Local Player script that tells the player which race position they are in and
the race timings. Note: The HUDLocal.ts script is attached to each instance of the HUDLocal entity in
the Hierarchy panel. Notes:
• Creates several event subscriptions to network events, which must be reflected
in the HUD display.
• Defines private variables for the entities, text, and colors used in the HUD.
• preStart():
  • Assigns entities specified as properties to variables used in the HUD.
  • When ownership of the HUD entity changes, it has been assigned to a player, and
the initialization code creates event subscriptions for the following, which
require changes to the HUD UI:
   • Events.onPlayerGotBoost: show boost ability is available in HUD
   • Events.onStopRacePosUpdates: stop updating race positions: this.updateUI = false
   • Events.onRacePosUpdate: Update race positions.
    • This triggers an update of the HUD: this.updateUI = true.
   • onPlayerUsedBoost: disable boost availability in the HUD
   • hz.World.onUpdate: if this.updateUI == true, then update race time and race
position. If boost has been activated, then the star is rotated accordingly.
• start():
  • Contains a number of functions for updating the HUD at runtime.
  • cleanup() function is called when the player is returned to server control.
Function disconnects from event subscriptions for the local HUD and calls reset().

 reset() resets values on the HUD and returns its location to the zero point.   

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fhorizon-traversal-sample-world%2Fmodule-4-player-hud-systems%2F)
