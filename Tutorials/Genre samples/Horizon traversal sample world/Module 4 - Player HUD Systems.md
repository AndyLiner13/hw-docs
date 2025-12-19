Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/horizon-traversal-sample-world/module-4-player-hud-systems

# Module 4 - Player HUD Systems

The Player HUD systems create a pool of HUD objects, which are assigned to players as they enter the world.

## HUD pool

The world includes a set of HUD objects in a pool, located behind the starting area:

<details>
<summary>Image of HUD objects in a pool</summary>

<p></p>

[Image of HUD objects in a pool](../../../image_data/826f3571064e9336103b3377b77f8a51d340aba6664b142caa500d34ca3fad57.md)

### Overview
The image depicts a scene from a video game or simulation environment. It features a large industrial structure resembling a tower or crane, set against a backdrop of a clear blue sky with some stylized clouds. The ground is textured to resemble asphalt or concrete. There is a small, highlighted rectangular area near the bottom center of the image, possibly indicating an interactive element or point of interest.

### Key Elements
- **Industrial Structure**: Located on the left side of the image, it has a reddish-brown metallic frame with a complex lattice design. It appears to be part of a larger machine or structure.
- **Text Overlay**: Positioned centrally, the text reads: 
    > Open the HUD Manager script to learn more.
    > HUD elements are based below.
- **Highlighted Rectangle**: A small gray rectangle with a dashed border is located near the bottom center of the image. It seems to be a focus point or interactive element.
- **Ground Texture**: The surface is dark gray, textured to look like asphalt or concrete.
- **Sky and Clouds**: The background consists of a gradient blue sky with stylized white clouds.

### Visual Flow / Relationships
The most prominent visual element is the text overlay, which draws attention due to its central placement and larger font size compared to the rest of the text. The industrial structure is secondary but still noticeable due to its size and distinct color. The highlighted rectangle near the bottom suggests a point of interaction within the game environment.

</details>

<p></p>



An individual HUD object consists of:

* HUDLocal object
  + Attached script: HUDLocal.ts
* Hud text1: Text object that displays game position during race
* Hud text2: Text object that displays running time during the race

**Tip**: In the Hierarchy panel, search for: HUD.

## HUDManager.ts

Initializes the player local HUDs and passes information to each player about the state of the race.

**Note**: The HUDManager.ts script is attached to the empty object in the above screenshot.

**Notes**:

* Creates a HUDPool object for containing HUD entities. Creates PlayerHUDCtrlMap map object for mapping HUD objects to players.
* preStart():
  + Creates listeners for onPlayerEnterWorld and onPlayerExitWorld, which handle getting and removing the player HUD from the pool and the control map, respectively.
  + Creates listener for the local broadcast event: onRegisterRaceHUD. When this event is received by the HUD manager, the local player’s HUD object is added to the pool.

## HUDLocal.ts

Local Player script that tells the player which race position they are in and the race timings.

**Note**: The HUDLocal.ts script is attached to each instance of the HUDLocal entity in the Hierarchy panel.

**Notes**:

* Creates several event subscriptions to network events, which must be reflected in the HUD display.
* Defines private variables for the entities, text, and colors used in the HUD.
* preStart():
  + Assigns entities specified as properties to variables used in the HUD.
  + When ownership of the HUD entity changes, it has been assigned to a player, and the initialization code creates event subscriptions for the following, which require changes to the HUD UI:
    - Events.onPlayerGotBoost: show boost ability is available in HUD
    - Events.onStopRacePosUpdates: stop updating race positions: this.updateUI = false
    - Events.onRacePosUpdate: Update race positions.
      * This triggers an update of the HUD: this.updateUI = true.
    - onPlayerUsedBoost: disable boost availability in the HUD
    - hz.World.onUpdate: if this.updateUI == true, then update race time and race position. If boost has been activated, then the star is rotated accordingly.
* start():
  + Contains a number of functions for updating the HUD at runtime.
  + cleanup() function is called when the player is returned to server control. Function disconnects from event subscriptions for the local HUD and calls reset().

reset() resets values on the HUD and returns its location to the zero point.