# Module 5 - Floating Text Manager
...
## System Components

 FloatingTextManager.ts: This script is attached to the WorldInstances > FloatingTextManager reference
object. Script properties are the defaults for any new floating text entity. Properties:  
```
static propsDefinition = {
  floatingTextAsset : {type: PropTypes.Asset, default: undefined},
  yPos : {type: PropTypes.Number, default: 2},
  floatSpeed : {type: PropTypes.Number, default: 0.5},
  rotationSpeed : {type: PropTypes.Number, default: 360},
  duration : {type: PropTypes.Number, default: 2.0},
  color : {type: PropTypes.Color, default: new Color(1, 1, 1)}
}
```

|  |
|  |
| floatingTextAsset | Asset in your Asset Library that corresponds to a predefined Text Gizmo asset, in which its properties have been set to create the proper appearance in the world. |
...
...
# Module 5 - Floating Text Manager
...
## System Components
...
| yPos | Y-coordinate offset from the entity from which the new floating text element is spawned. |
| floatSpeed | When a floating text element is spawned, it drifts upward. This value defines the speed of the drift in meters per second. |
| rotationSpeed | You can define a rotational speed if needed |
| duration | Time in seconds that the floating text element should live, before it is destroyed. |
| color | Color of the displayed text. |

 The `createFloatingText()` function is invoked from `NpcAgent.ts` whenever an axe or bullet strikes an NPC. Script dependencies:
• `Behaviour.ts`
• `FloatingText.ts`

 FloatingText.ts: This script is attached to the spawned Text gizmo asset and manages two
functions:
• `setText()` specifies the text that appears in the gizmo to which it is attached.
• `update()` is a world event that occurs every frame. This event updates the position and
...
...
# Module 5 - Floating Text Manager
...
## System Components
...
rotation of the floating text based on the specified parameters for it.
  • When the duration in seconds for the text gizmo has been exceeded, the text
gizmo is deleted.

 Script dependencies:
• `Behaviour.ts`

 Text Gizmo: In Chop ‘N Pop: Graveyard Bash, the FloatingTextManager script property for
floatingTextAsset links to an asset called FloatingDamage, which is an asset that is
composed of:
1. Text Gizmo that has been configured to display red numbers.
2. `FloatingText.ts` script that has been attached to the Text Gizmo.

 Tip: You can make your own in your own world.  
...
...
# Module 5 - Floating Text Manager
...
## How to Deploy


1. Copy the text of the scripts and their dependent scripts into scripts that you
create in your world.
2. Create a FloatingTextManager reference object. Attach `FloatingTextManager.ts` to it.
3. Add in a Text Gizmo. Configure it to display the text in a format that you
prefer. Attach `FloatingText.ts` to it.
4. Create an asset out of your configured Text gizmo.
5. In `FloatingTextManager.ts` properties, select this asset for the floatingTextAsset property.

 For more information, see “Deploying Systems” in [Module 1 - Setup](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup).  
...
...
# Module 5 - Floating Text Manager
...
## How to Use

 In your code, wherever you need to display floating text, call
createFloatingText function in `FloatingTextManager.ts` like the following:  `FloatingTextManager`.`instance`?.`createFloatingText`(`myString`,` hitPosition`,`
 textColor`);`  
...
...
# Module 5 - Floating Text Manager
...
## Modifications

  
### Multiple FloatingText instances

 To create a second type of floating text, copy the `FloatingText.ts` script, rename it, and attach it to a second Text gizmo. You can then change
behaviors of individual floating text by modifying parameters in the `FloatingText.ts` script.  
```
private floatSpeed: number = 1;
private rotateSpeed: number = 360;
private currentTime = 0;
private maxTime: number = 2;
private rotationEuler = new Vec3(0, 0, 0);
private deleted = false;
```
 These values can be used to override the defaults specified in the `FloatingTextManager.ts` script.  
...
...
# Module 5 - Floating Text Manager
...
## Summary

 This module covers the system for triggering floating text elements to appear in
the game for a few seconds before disappearing. In Chop ‘N Pop: Graveyard Bash,
this system is used for displaying damage to an enemy after a weapon strike. You can modify this system to make floating text appear wherever needed in your
game.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
# Module 5 - Floating Text Manager
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
# Module 5 - Floating Text Manager
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fchop-n-pop-sample-world%2Fmodule-5-floating-text-manager%2F)
...
# Module 5 - Floating Text Manager

 The Floating Text Manager system can be used to display floating text elements
in the game for a short period of time. In Chop ‘N Pop: Graveyard Bash, these
...
...
# Module 5 - Floating Text Manager
...
text elements appear over an enemy to indicate the effect of a hit on it. Note: The ammo counter displayed over the guns is a simple Text gizmo. ![Image of floating text above pistol](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467692849_593923059812316_2906969913953464649_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=F1zwyW3SlwIQ7kNvwGu7Sjb&_nc_oc=AdnBajb4zc4fPU_FkFBtTu8y0iBsp0JfTCtinEhuNSAleZO7OcTdEV4NE6TrpP3_T9k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=4XPE-j7liUCwzj...
...
# Module 5 - Floating Text Manager
...
 Floating Text Manager is composed of two scripts and a predefined Text Gizmo
asset, which is spawned in whenever a piece of floating text is required. In this world, the `createFloatingText()` method in Floating Text Manager is invoked in the `NPCAgent.ts` script when an npcHit is triggered from an axeHit or bulletHit. As a result of
a hit, `createFloatingText()` generates a piece of floating text bubbling up from the point of impact,
displaying the amount of damage done by the hit. This amount of damage is applied to a
spawned text gizmo using the `setText()` method in `FloatingText.ts`. This piece of floating text exists for a predefined period of time, before the
Text gizmo is deleted, causing the text to disappear.  
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
# Module 5 - Floating Text Manager
...
