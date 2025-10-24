# Module 7 - Weapon Systems - Axe
...
## System Components

  
### Properties

  
#### Axe properties

 The root entity for the axe is the BadAxe UAB. Select an instance of this entity
to review the following key properties:
|  |
|  |
| Visible | Enabled to allow players to find them. |
| Collidable | Enabled to allow for collisions, including hits. |
| Collision Layer | Set to Objects Only, so that the axe does not damage other players. Note: To enable the axe to hit other players, you would need to add player hit detection and damage. |
| Motion | Set to Interactive, which allows you to set the Interaction property. |
| Interaction | Set to Grabbable. |
| Collision Events From | Set to Objects Tagged. This setting allows for linking the axe to objects, with which it can collide. In this case, the axe and the enemies are tagged with “Baddie”. |
| Object Tag | See previous. |
...
...
# Module 7 - Weapon Systems - Axe
...
## System Components

  
### Properties

  
#### Axe properties
...
| Use Grab Lock | Enable this to allow the grabbed axe to lock into the player’s hand. Otherwise, the axe must be “held” by the player during combat. |
| Use VR Anchor | Enable this to specify grab points for VR players. In this case, the VR grab points are specified and used for both VR and web/mobile (which is disabled). The Position and Rotation values are specified below. |
| Avatar Pose | Set this value to Sword, so that the weapon is held in the avatar’s hand like a sword. |
| Who Can Grab? | Set to Anyone, so that all players can collect. |
| Who Can Take from Holder? | Set to Only You. |
| Primary Action Icon | Set this to Swing Weapon, which displays an icon on XS to swing the weapon off of the primary button. |
...
...
# Module 7 - Weapon Systems - Axe
...
## System Components

  
### Properties

  
#### Axe properties
...
| Avatar Attachable | Since this weapon is grabbed, it should not be attachable to the avatar. Disable this setting. |
| Include in Bakes | Enable this setting to bake this weapon into the navigation mesh used by enemies to move about the graveyard. This means that when the weapon is not in a player’s hand, enemies must move around it during navigation. |
| Navigation Locomotion | Disable this setting, which would allow the entity to use navigation meshes for movement. |
...
...
# Module 7 - Weapon Systems - Axe
...
## System Components

  
### Properties
...
#### Script properties

 These properties are defined in `Axe.ts` and can be used to modify some of the behaviors of the axe.
|  |
|  |
| swingCooldown | Time in milliseconds after the axe is swung before it can be swung again. |
| threatRange | Maximum striking distance for the axe in meters. |
| threatAngle | Maximum angle off of the direction vector of the avatar at which an enemy can be hit. |
| hitSound | This sound entity is played when the axe hits an enemy. The entity to use is a sub-node of the parent BadAxe entity. |
| hitVfx | This particle entity is played when the axe hits an enemy. The entity to use is a sub-node of the parent BadAxe entity. |

  
...
...
# Module 7 - Weapon Systems - Axe
...
## System Components

  
### Properties

  
#### Axe properties
...
#### Script properties
...
...
# Module 7 - Weapon Systems - Axe
...
## System Components
...
### Axe components

 Attached to each instance of the BadAxe UAB entity are the following components:
|  |
|  |
| Axe.ts | Core script for handling the axe weapon. |
| ChopSound | An audio sound of chopping. This entity is also referenced as a Script property of Axe.ts. |
| hitVFx | Particle effect for when the axe hits an enemy. This entity is also referenced as a Script property of Axe.ts. |

  
### Script dependencies

 Axe.ts: This script handles grabbing the axe and listening for the primary button press,
which triggers the swinging animation and checks for contact. When a collision
is detected, damage is determined in hitMonsters based on the angle of the
monster to the axe. Script dependencies:
• `Events.ts`
• `Throttler.ts`
• `HapticFeedback.ts`
• `Behaviour.ts`
• `StageHand.ts`

  
...
...
# Module 7 - Weapon Systems - Axe
...
## System Components

  
### Properties
...
### Axe components
...
### Script dependencies
...
...
# Module 7 - Weapon Systems - Axe
...
## How to Deploy

 Scripts: Copy contents of `Axe.ts` and all dependent scripts from their source and into text files. Create scripts
in your world for these scripts. Paste in the contents. Resolve any issues. Assets: Create an asset template out of the BadAxe node and its child nodes. Add this to
your world, and fix the broken script reference to `Axe.ts`, replacing it on the BadAxe script properties with your own version of `Axe.ts`. For more information, see [Module 1 - Setup](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup).  
...
...
# Module 7 - Weapon Systems - Axe
...
## How to Use

 Add the asset and scripts to your world. Note: You must assign Gameplay Tags to this object and all objects in your world
that can be collided with it. Currently, this value is set to “Baddie”. Note: Make sure that your versions of these scripts are configured to operate in
Local mode.  
## Modifications

  
### Modify script properties

 You can make changes to the numeric values of the Script properties on `Axe.ts` to experiment with gameplay effects in your world. Note: Other than the Gameplay Tags value, avoid making changes to the properties of
the Unity Asset Bundle asset.  
### Replace axe assets

 You can replace the BadAxe Unity Asset Bundle with a UAB of your own for a
personalized swinging weapon. Note that the property settings for the BadAxe should
be applied to your new UAB. You may also choose to replace the sound and the VFX, too.  
...
...
# Module 7 - Weapon Systems - Axe
...
## Summary

 This module describes the systems in place for the axe weapon in the game. This
system can be modified for use in your game and can be deployed for other
swinging weapons, like a sword or a hammer.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)
...
...
# Module 7 - Weapon Systems - Axe
...
## Summary
...
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
# Module 7 - Weapon Systems - Axe
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fchop-n-pop-sample-world%2Fmodule-7-weapon-systems-axe%2F)
...
# Module 7 - Weapon Systems - Axe

 Chop ‘N Pop: Graveyard Bash allows visitors to select one of two kinds of
weapons:
• Axe: Grab the axe and chop away at the enemies. This weapon is swung one-handed at
the opposition.
• Pistol: Collect a pistol and pop the enemies at a distance. The gun requires an ammo
clip and can hit targets that are displayed behind the gun sight.

 Since the weapons have different mechanisms for attacking, they are covered in
...
...
# Module 7 - Weapon Systems - Axe
...
different modules. This module covers the Axe weapon and related systems. ![Image of axe examples](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467570579_593923069812315_3936592786219167883_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=gM3EE1S8HIYQ7kNvwGDfjp2&_nc_oc=Adkutn9IUjDqXe7Cm-eNtxI_AGpWIRP0pKXBPFOKZtcMO5nRlje23PEZaFvN3DY0bLk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9bQ885v-aoYpoP6hB5LFwg&oh=00_Aff-VST...
...
# Module 7 - Weapon Systems - Axe
...
 The axe weapon system is composed of an axe asset and the related scripts. There
are four axes available in the world near the entrance to the graveyard. Each axe is an independent instance of an asset template. This asset template is
maintained by Meta. The axe requires helper scripts to fulfill the functions of:
• Detect button press to swing axe
• Swing the axe
• Detect axe hits and issue damage events

 Note: `Axe.ts` must be set to Local execution mode.  
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
# Module 7 - Weapon Systems - Axe
...
