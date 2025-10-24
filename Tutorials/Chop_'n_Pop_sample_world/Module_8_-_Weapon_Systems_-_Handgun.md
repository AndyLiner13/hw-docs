# Module 8 - Weapon Systems - Handgun
...
## System Components

  
### ZombieGun3000 object

 Its entities are the following:
• ZombieGun3000 reference object
  • `GunCore.ts` - script is attached to ZombieGun3000
  • HackyGrabCube - used for setting grab points on the weapon
  • PistolModel - Unity Asset Bundle for the pistol object model and textures
  • MuzzleFlash - VFX displayed at the end of the muzzle when the gun is fired
  • ProjectileLauncher - gizmo for firing projectiles
   • `GunProjectile.ts` - script is attached to ProjectileLauncher
  • AmmoText - Text gizmo for displaying the ammo count left in the clip just above
the gun
  • WeaponPickup - sound
  • PistolFire - sound
  • PistolReload - sound
  • PistolDryFire - sound
  • PistolShellDrop - sound
  • PistolPickup - sound

  
...
...
# Module 8 - Weapon Systems - Handgun
...
## System Components
...
### Scripts

 GunCore.ts: `GunCore.ts` handles the onGrab start and events, initializing the gun, and event
subscriptions for pressing trigger, releasing it, and reloading the ammo clip. Firing is issued by a call to the ProjectileLauncher gizmo referenced in its
script properties, and `GunCore.ts` handles the gunfire-related effects, like kickback and clip animation. Each
button press decrements the ammo counter. Script Dependencies:
• `AnimUtils.ts`
• `Behaviour.ts`
• `Events.ts`
• `HapticFeedback.ts`
• `StageHand.ts`

 GunProjectile.ts: `GunProjectile.ts` handles the tracking of a projectile by registering the entity with two
CodeBlockEvents. When the projectile hits an object, the `handleHit()` method in the script plays the appropriate effects and sends the
Events.projectileHit to all entities for handling. Script Dependencies:
• `Behaviour.ts`
• `Events.ts`
...
...
# Module 8 - Weapon Systems - Handgun
...
## System Components
...
### Scripts
...
• `Throttler.ts`
...
...
# Module 8 - Weapon Systems - Handgun
...
## System Components

  
### ZombieGun3000 object
...
### Scripts
...
...
# Module 8 - Weapon Systems - Handgun
...
## How to Deploy

 The ZombieGun3000 reference object and all sub-nodes must be saved as an asset
template. In your own world, you must replace the `GunCore.ts` and `GunProjectile.ts` references with your own scripts. Script dependencies must be copied over, too. For more information, see “Deploying Systems” in [Module 1 - Setup](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup).  
...
...
# Module 8 - Weapon Systems - Handgun
...
## How to Use

 Add the ZombieGun3000 into your world, referencing your localized versions of `GunCore.ts` and `GunProjectile.ts`. Note: Make sure that your versions of these scripts are configured to operate in
Local mode. Note: In order for the gun to shoot at the crosshairs in 2D screens in web and
mobile, the player must be set as the owner of the Projectile Launcher entity. Note: You must build out how to handle the Events.projectileHit event in your code.
In Chop ‘N Pop: Graveyard Bash, this event is handled in `NPCAgent.ts`.  
...
...
# Module 8 - Weapon Systems - Handgun
...
## Modifications

  
### Gun properties

 In `GunCore.ts`, you can modify the properties exposed in the panel and properties in the
script to change the behavior and responsiveness of the gun. Properties:  
```
const pistolConfig = {
  fireRate: 100,
  fireSpeed: 500,
  maxAmmo: 10,
  shouldAutoFire: false,
  reloadTime: 200,
  upwardsRecoilVel: 30,
  upwardsRecoilAcc: 350,
  backwardsRecoilVel: 0.5,
  backwardsRecoilAcc: 7,
};
```
  
...
...
# Module 8 - Weapon Systems - Handgun
...
## Summary

 The gun weapon system features a model and related sound and audio effects.
Behaviors are scripted for managing the gun firing, its ammunition, and reloading,
as well as the projectile hits through `GunProjectile.ts`, which sends an event received in `NPCAgent.ts`. That script is attached to each potential target (enemy).    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
# Module 8 - Weapon Systems - Handgun
...
## Summary
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
# Module 8 - Weapon Systems - Handgun
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fchop-n-pop-sample-world%2Fmodule-8-weapon-systems-pistol%2F)
...
# Module 8 - Weapon Systems - Handgun

 The pistol weapon system supports the pistols available in the Chop ‘N Pop:
Graveyard Bash world.
• When a pistol is collected, aiming is determined based on a crosshairs presented
on-screen when the pistol is in a player’s hand.
• Each pistol requires a clip of ammunition, which is decremented with each shot.
When the ammo in the clip is empty, the player must find and collect a new clip
and then reload the clip into the gun.
...
...
# Module 8 - Weapon Systems - Handgun
...
 ![Image of pistol examples](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467689606_593923079812314_5169865444718688226_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=RU6iPWeun3UQ7kNvwFKeoqc&_nc_oc=Adk444a1JVT1sTSZUeqPi3M9tM8BnG7V4aHQxV8M36D4EpUeN6BQWenl-CT4DUi2vbk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=HQsnAIZaCkeEWR9livFLfg&oh=00_AfeTHhSkuaQ-8IZaelu2t9lu...
...
# Module 8 - Weapon Systems - Handgun
...
 The gun weapon system leverages the Meta Horizon Worlds projectile management
system and collision detection to create an effective gun. The system is composed
of a multi-entity gun object, called ZombieGun3000 in the Chop ‘N Pop: Graveyard
Bash world. This object also includes a ProjectileLauncher gizmo, which manages
the release and collision detection of the projectile. Two scripts drive the
gun system: `GunCore.ts` and `GunProjectile.ts`. Note: `GunCore.ts` and `GunProjectile.ts` must be set to Local execution mode.  
## System Components
...
## How to Deploy
...
## How to Use
...
## Modifications
...
## Summary
...
## Additional Links
...
      Learn
# Module 8 - Weapon Systems - Handgun
...
