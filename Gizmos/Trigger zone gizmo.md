Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-trigger-zone

# Trigger zone gizmo

The trigger zone [gizmo](/hw-mcp-tools/documentation/hw-docs/Gizmos/About%20gizmos.md) triggers an event when you enter or exit a specified area.

![Trigger zone gizmo](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/578801646_863563276181625_6970024535789345268_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=2GJOfWpzbUwQ7kNvwFBalN_&_nc_oc=AdlJidPN6kPCAIlbx9YnkPG7rYQ_E0NJs4RMkGYYJYWAtahj7ltYa4xwMz3XmqZvaG0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6lL7lRC-9DMjQkt-aevsCg&oh=00_Afl-BWY-epXJoozGYw9eDjlFcbKt2Vq1IVSit1pSh6gXwg&oe=694BBD1B)

## Use the trigger zone gizmo

- From the Build list, select **Gizmos**.
- Select **Trigger zone** icon.
- Under **Hierarchy**, right-click **Trigger** and select **Rename**, then rename the trigger zone to something that describes its purpose.

> **Note**: Renaming the trigger zone is optional, but it helps you track the zone’s purpose.

- While the trigger zone is selected, you can edit its parameters in the **Properties** panel.

## Things to remember

* Each trigger can be activated by either players or objects, but not both. If **Triggered By** is set to **Players**, any player in the world can activate the Trigger.
* You can control which specific players can trigger the zone using the `setWhoCanTrigger()` method in TypeScript.
* If **Triggered By** is set to **Objects Named...**, you must fill out the **Triggered by Objects Named** field. This field currently accepts only one name, and any object with that name can activate the trigger.
* Objects may only have one name (or one word as a name), but multiple objects can share the same name. Adjust the trigger area size using the handles, just like other shapes.
* Use `enabled.set(false)` to temporarily disable a trigger zone without removing it from your world.

## Use the gizmo with TypeScript

Through TypeScript, you can monitor and respond when players enter or exit a Trigger Zone gizmo in your world. Create listeners for these trigger zone-specific CodeBlockEvents:

* `onPlayerEnterTrigger`
* `onPlayerExitTrigger`

You can also programmatically control trigger zones using the TriggerGizmo class, which provides:

* `setWhoCanTrigger()` - Control which specific players can activate the trigger
* `getWhoCanTrigger()` - Check which players currently have access to the trigger
* `enabled` - Enable or disable the trigger zone dynamically

CodeBlockEvents are platform-emitted events for key runtime functionality, including gizmo activities.

* For more information on CodeBlockEvents, see [CodeBlock Events](/hw-mcp-tools/documentation/hw-docs/Scripting/Events/CodeBlock%20Events.md).
* For API docs on CodeBlockEvents, see [CodeBlockEvents](https://horizon.meta.com/resources/scripting-api/core.codeblockevents.md/).
* For specific documentation on the TriggerGizmo API, see [TriggerGizmo class](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/TriggerGizmo.md).

The following script can be attached to a Trigger Zone entity that you have deployed in your world:

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

The above script defines two event listeners (`this.connectCodeBlockEvent`), one for each CodeBlockEvent for the trigger. Since this script is attached to the trigger zone entity, these listeners activate when the `enteredby` player enters or exits the trigger zone.

In the `onPlayerEnterTrigger` listener, a popup is displayed for everyone in the world with a message.

In the `onPlayerExitTrigger` listener, a new popup is displayed for everyone in the world with a different message.