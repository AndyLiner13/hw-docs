Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/chop-n-pop-sample-world/module-8-weapon-systems-pistol

# Module 8 - Weapon Systems - Handgun

The pistol weapon system supports the pistols available in the Chop ‘N Pop: Graveyard Bash world.

* When a pistol is collected, aiming is determined based on a crosshairs presented on-screen when the pistol is in a player’s hand.
* Each pistol requires a clip of ammunition, which is decremented with each shot. When the ammo in the clip is empty, the player must find and collect a new clip and then reload the clip into the gun.

<details>
<summary>Image of pistol examples</summary>

<p></p>

[Image of pistol examples](../../../image_data/acf26da594c5f8e2803e5aac302d18239b04dd14a40d7d0a8fbd1dcfb2c4d1b9.md)

### Overview
The image depicts a scene from a video game or interactive environment featuring a character interacting with wooden crates. The character is standing facing away from the viewer, wearing a teal shirt and dark pants. Above the crates, there are icons representing actions that can be performed, such as opening a crate ("E") and possibly interacting with another object ("F").

### Key Elements
- **Character**: A bald figure wearing a teal shirt and dark pants, positioned centrally in the image.
- **Crate**: Two wooden crates are stacked behind the character. They appear to be part of a storage or inventory system within the game.
- **Action Icons**: Above the crates, there are icons indicating possible interactions:
  - **Left Icon**: A gun icon with a green outline, suggesting an action related to weapons or ammunition.
  - **Middle Icon**: A hand icon with a green outline, likely representing an interaction action like opening a crate.
  - **Right Icon**: Another gun icon, similar to the left one, possibly indicating a different weapon or action.

### Visual Flow / Relationships
- **Most Prominent Element**: The character is the focal point, with the crates and action icons above them drawing attention.
- **Spatial Relationships**: The crates are stacked horizontally, and the action icons are positioned above them, suggesting a menu or interface overlay.

</details>

<p></p>



The gun weapon system leverages the Meta Horizon Worlds projectile management system and collision detection to create an effective gun. The system is composed of a multi-entity gun object, called ZombieGun3000 in the Chop ‘N Pop: Graveyard Bash world. This object also includes a ProjectileLauncher gizmo, which manages the release and collision detection of the projectile. Two scripts drive the gun system: `GunCore.ts` and `GunProjectile.ts`.

**Note**: `GunCore.ts` and `GunProjectile.ts` must be set to Local execution mode.

## System Components

### ZombieGun3000 object

Its entities are the following:

* ZombieGun3000 reference object
  + `GunCore.ts` - script is attached to ZombieGun3000
  + HackyGrabCube - used for setting grab points on the weapon
  + PistolModel - Unity Asset Bundle for the pistol object model and textures
  + MuzzleFlash - VFX displayed at the end of the muzzle when the gun is fired
  + ProjectileLauncher - gizmo for firing projectiles
    - `GunProjectile.ts` - script is attached to ProjectileLauncher
  + AmmoText - Text gizmo for displaying the ammo count left in the clip just above the gun
  + WeaponPickup - sound
  + PistolFire - sound
  + PistolReload - sound
  + PistolDryFire - sound
  + PistolShellDrop - sound
  + PistolPickup - sound

### Scripts

**GunCore.ts**:

`GunCore.ts` handles the onGrab start and events, initializing the gun, and event subscriptions for pressing trigger, releasing it, and reloading the ammo clip.

Firing is issued by a call to the ProjectileLauncher gizmo referenced in its script properties, and `GunCore.ts` handles the gunfire-related effects, like kickback and clip animation. Each button press decrements the ammo counter.

Script Dependencies:

* `AnimUtils.ts`
* `Behaviour.ts`
* `Events.ts`
* `HapticFeedback.ts`
* `StageHand.ts`

**GunProjectile.ts**:

`GunProjectile.ts` handles the tracking of a projectile by registering the entity with two CodeBlockEvents. When the projectile hits an object, the `handleHit()` method in the script plays the appropriate effects and sends the Events.projectileHit to all entities for handling.

Script Dependencies:

* `Behaviour.ts`
* `Events.ts`
* `Throttler.ts`

## How to Deploy

The ZombieGun3000 reference object and all sub-nodes must be saved as an asset template. In your own world, you must replace the `GunCore.ts` and `GunProjectile.ts` references with your own scripts. Script dependencies must be copied over, too.

For more information, see “Deploying Systems” in [Module 1 - Setup](Module%201%20-%20Setup.md).

## How to Use

Add the ZombieGun3000 into your world, referencing your localized versions of `GunCore.ts` and `GunProjectile.ts`.

**Note**: Make sure that your versions of these scripts are configured to operate in Local mode.

**Note**: In order for the gun to shoot at the crosshairs in 2D screens in web and mobile, the player must be set as the owner of the Projectile Launcher entity.

**Note**: You must build out how to handle the Events.projectileHit event in your code. In Chop ‘N Pop: Graveyard Bash, this event is handled in `NPCAgent.ts`.

## Modifications

### Gun properties

In `GunCore.ts`, you can modify the properties exposed in the panel and properties in the script to change the behavior and responsiveness of the gun. Properties:

```
const pistolConfig = {
  fireRate: 100,
  fireSpeed: 500,
  maxAmmo: 10,
  shouldAutoFire: false,
  reloadTime: 200,
  upwardsRecoilVel: 30,
  upwardsRecoilAcc: 350,
  backwardsRecoilVel: 0.5,
  backwardsRecoilAcc: 7,
};
```

## Summary

The gun weapon system features a model and related sound and audio effects. Behaviors are scripted for managing the gun firing, its ammunition, and reloading, as well as the projectile hits through `GunProjectile.ts`, which sends an event received in `NPCAgent.ts`. That script is attached to each potential target (enemy).