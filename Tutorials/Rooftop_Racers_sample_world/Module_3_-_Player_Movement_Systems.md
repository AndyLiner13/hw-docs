# Module 3 - Player Movement Systems

 This game utilizes fairly standard movement patterns in VR, except for two key
game features:
• Double-jump: players can jump and then re-jump in mid-air.
• Boost jump: When a player crosses through a ring in the game, boost jump is re-charged,
which allows the player a single super-jump.
  • After landing, the player cannot boost jump again until the player crosses
through a ring. The player can cross through the same ring to recharge.

 These special controls require separate properties and calculations based on
those properties and the player’s:
• current position and velocity
• input from their controls, whether in VR/mobile/Desktop. We take the inputs and
normalize them before using them for the above.

  

## PlayerControllerManager.ts

 Manages the local player control inputs, initializing them and managing
ownership. Also, provides an interface for setting double-jump, boost-jump, and
boost-jump angle properties. Notes:
• When this script is attached to an entity in the world, you can modify in the
Properties panel the values for double-jump and boost-jump properties:
  • doubleJumpAmount
  • boostJumpAmount
  • boostJumpAngle
  • Tip: You can set new default values in the code or modify property values through
the Properties panel.
• preStart():
  • Registers listeners for onPlayerEnterWorld and onPlayerExitWorld CodeBlock
events. Call private handlers in both cases.
  • Creates a network broadcast event listener for the onGetPlyrCtrlData network
event. When the event is received, the local player’s control data and jump
property values are broadcast.
• start():
  • When player enters the world:
   • Player jump controls are registered in the CtrlPool, which manages mapping of
controls for individual players.
  • When player exits the world:
   • A lookup is performed by player.id to locate the jump controls for the player in
the CtrlPool and to remove them.

## PlayerControllerLocal.ts

 Local Script that takes the Players input and allows for doublejump and boost
jumping. Additionally, for responsiveness of game effects, it also plays SFX and
VFX for players. Notes:
• preStart() and start() methods segment between local player and server player.
If this Local script is executing on a client that is not the server, then the
script owner (this.owner) can be presumed to be a player, and the private
preStart() and start() handers are used.
• localPreStart():
  • Connects inputs for double-jump (this.connectDoubleJumpInputs()) and boost jump
(this.connectBoostJumpInputs())
  • Connects properties for sound effects and visual effects to internal variables
for playback as needed.
  • Creates network hz.EventSubscription objects for local player events:
   • this.playerGotBoostSub
   • this.setJumpCtrlDataSub
   • this.onPlayerOOBSub
   • When these events occur, the local player data is sent across the network to
update other entities.
• localStart():
  • Private functions for connectDoubleJumpInputs() and connectBoostJumpInputs() map
player input controls and icons for the two game functions and create
callbacks.
  • connectDoubleJumpInputs() creates a callback function which manages the first
and second jump of a double jump, by calculating velocity and angle of the jump,
as well as playing back SFX.
  • connectBoostJumpInputs() creates a callback to calculate the boost jump vector
using the private function getBoostVectorBasedOnInput(), which performs the
vector calculations.

 Some calculations use functions defined in MathUtils.ts.   

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fhorizon-traversal-sample-world%2Fmodule-3-player-movement-systems%2F)
