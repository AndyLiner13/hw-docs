# Trigger zone gizmo

## Use the trigger zone gizmo


1.  From the Build list, select Gizmos.
2.  Select Trigger zone icon.
3.  Under Hierarchy, right-click Trigger and select Rename, then rename the trigger zone to something that describes its purpose.

> 

 Note: Renaming the trigger zone is optional, but it helps you track the zone's
purpose.
1. While the trigger zone is selected, you can edit its parameters in the Properties panel.

  

## Things to remember


• Each trigger can be activated by either players or objects, but not both. If Triggered By is set to Players, any player in the world can activate the Trigger.
• You can control which specific players can trigger the zone using the `setWhoCanTrigger()` method in TypeScript.
• If Triggered By is set to Objects Named..., you must fill out the Triggered by Objects Named field. This field currently accepts only one name, and any object with that
name can activate the trigger.
• Objects may only have one name (or one word as a name), but multiple objects can
share the same name. Adjust the trigger area size using the handles, just like
other shapes.
• Use `enabled.set(false)` to temporarily disable a trigger zone without removing it from your world.

  

# Trigger zone gizmo

## Use the gizmo with TypeScript

 Through TypeScript, you can monitor and respond when players enter or exit a
Trigger Zone gizmo in your world. Create listeners for these trigger zone-specific
CodeBlockEvents:
• `onPlayerEnterTrigger`
• `onPlayerExitTrigger`

 You can also programmatically control trigger zones using the TriggerGizmo
class, which provides:
• `setWhoCanTrigger()` - Control which specific players can activate the trigger
• `getWhoCanTrigger()` - Check which players currently have access to the trigger
• `enabled` - Enable or disable the trigger zone dynamically

 CodeBlockEvents are platform-emitted events for key runtime functionality,
including gizmo activities.
• For more information on CodeBlockEvents, see [CodeBlock Events](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/codeblock-events).
• For API docs on CodeBlockEvents, see [CodeBlockEvents](https://horizon.meta.com/resources/scripting-api/core.codeblockevents.md/).
• For specific documentation on the TriggerGizmo API, see [TriggerGizmo class](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_triggergizmo).

 The following script can be attached to a Trigger Zone entity that you have
deployed in your world:  
```
import * as hz from 'horizon/core';

class TriggerMe extends hz.Component<typeof TriggerMe> {

  start() {
    // this listener for the CodeBlockEvent onPlayerEnterTrigger is fired
    // when a player enters the trigger.
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterTrigger, (enteredby:hz.Player)=>{
      this.world.ui.showPopupForEveryone("You dare enter the Trigger of Doom, " + enteredby.name.get() + "?!?!", 3)
    });

    // this listener for the CodeBlockEvent onPlayerExitTrigger is fired
    // when a player exits the trigger.
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerExitTrigger, (exitedBy:hz.Player)=>{
      this.world.ui.showPopupForEveryone("See you, " + exitedBy.name.get() + ".", 2)
    });

  }
}
hz.Component.register(TriggerMe);
```
 The above script defines two event listeners (`this.connectCodeBlockEvent`), one for each CodeBlockEvent for the trigger. Since this script is attached to
the trigger zone entity, these listeners activate when the `enteredby` player enters or exits the trigger zone. In the `onPlayerEnterTrigger` listener, a popup is displayed for everyone in the world with a message. In the `onPlayerExitTrigger` listener, a new popup is displayed for everyone in the world with a different
message.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon/)
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

# Trigger zone gizmo

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Fuse-the-trigger-zone%2F)

# Trigger zone gizmo

 The trigger zone [gizmo](https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/about-gizmos) triggers an event when you enter or exit a specified area. ![Trigger zone gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/524847180_776044178266869_4827202741838398310_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=J597KwQY7FkQ7kNvwEJ5CVp&_nc_oc=Adl_y96_7UimQuOowXgjcVDOKDuI9c9YQiG3XdUNpxV8Fa5EmrBoXpqtXEXJBr019Xs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=fZIPr_...
## Use the trigger zone gizmo

## Things to remember

## Use the gizmo with TypeScript

## Additional Links

      Learn
# Trigger zone gizmo
