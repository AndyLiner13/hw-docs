Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/avatar-pose-gizmo

# Avatar pose gizmo

The avatar pose [gizmo](/hw-docs/code-blocks-and-gizmos/about-gizmos) is a helper tool that allows creators to position avatars in the virtual world in a sitting pose. Avatars can sit on a variety of stationary objects like chairs or moving objects such as roller coasters and bicycles. When the player is near the [avatar pose gizmo](/horizon-worlds/reference/2.0.0/core_avatarposegizmo), the player can press E to sit down on the gizmo object or [entity](/horizon-worlds/reference/2.0.0/core_entity), and then stand up using the [movement controls](/hw-docs/desktop-editor/help-and-reference/desktop-editor-creation-tools-keyboard-shortcuts). The gizmo supports animations and locomotion mechanics, allowing avatars to move naturally into seated positions as shown in the image below.

![Avatar pose gizmo enables you to position your avatar in a sitting pose](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/497727897_718068960731058_5060701550769065856_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=fEh7j-qfzgoQ7kNvwFvaJd5&_nc_oc=AdmJBXFOjNtSxt8Js8ogECoYexJQVXZFDHxnEtpUE0q-jgTYQxEfkEzuXyP7ecm01v8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Y6F2gug-LOcYiAxW9CSoLw&oh=00_Afhh7aqWWSm6dxRahrV0fwa8CL1MmFBRh0fWMN_6ZWVW3Q&oe=692BFD97)

## Prerequisites

* [TypeScript API version 2.0.0 or later](/hw-docs/typescript/upgrade-world-to-typescript-api-v200).
* [The API is available in horizon/core/AvatarPoseGizmo](/horizon-worlds/reference/2.0.0/core_avatarposegizmo).
* [Enable the API module](/hw-docs/typescript/upgrade-world-to-typescript-api-v200#upgrading-your-world).

## Limitations and best practices

There may be some amount of clipping through the object’s geometry from the avatar’s legs. This can vary depending on the body shape of the avatar. You may need to modify your objects and adjust the avatar pose gizmo to reduce clipping. To help assist with this, a shadow avatar is available on the avatar pose gizmo while in the Build mode to preview if the placement will create clipping. You can also use the Worlds camera and try out different avatar bodies to see how avatars will look using the seat. The sitting animation is procedurally adjusted to account for the avatar’s body shape which reduces clipping for larger bodies.

![Avatar pose gizmo has a shadow avatar in the Build mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/497654382_718068954064392_7813754134802998118_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=fKpfHaXBNREQ7kNvwFAIQ89&_nc_oc=AdkckI1fK-YXSm7Z9jSD5AK78u2jrzqHleTMK8QWBXrYpN75d9faif5cIEijhvgze5U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Y6F2gug-LOcYiAxW9CSoLw&oh=00_Afj1o7W3XukjDMSnHQUa12Z1mutFABz0y8WU8NieqE0SZg&oe=692BE0F8)

Emotes are available while sitting, but only the upper body will move.

Features have been added for player comfort and security, such as preventing overlapping pose gizmos, only allowing one person in a seat at a time, and preventing the ability to jump on someone while seated.

Players can sit on moving objects. A control is available to notify players if they are automatically placed on moving objects when they enter a world.

## Access the avatar pose gizmo

While you can access and use gizmos in the [VR tool](/hw-docs/vr-creation/getting-started/create-a-new-world-in-horizon), this topic focuses on the creator experience in the [desktop editor](/hw-docs/get-started/install-desktop-editor).

In the desktop editor, do the following to access the avatar pose gizmo:

- In the desktop editor while in Build mode, select **Build** > **Gizmos** from the menu bar, search for “avatar pose” in the search field.
- Select the avatar pose gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the **Properties** panel.

## Properties

This section describes the properties of the avatar pose gizmo in the [**Properties**](/hw-docs/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#properties-pane) panel.

The avatar pose gizmo is an extended class of [entity](/horizon-worlds/reference/2.0.0/core_entity). All objects in a world are represented by entities. Entities have their respective properties such as position, rotation, and scale. In the Properties panel, edit the avatar pose gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

**Pose**: Selecting the **Seat** option enables the player to enter a sitting pose on an entity.

Toggle on the **Use Custom Exit Direction** to input a custom **Exit Direction** vector to specify the direction that the player is facing when exiting the pose. For example, you may specify exit directions for avatar pose gizmos to control where a player returns to their upright position to avoid awkward positioning in crowded environments.

## Scripting

Through scripting, the [AvatarPoseGizmo class](/horizon-worlds/reference/2.0.0/core_avatarposegizmo) allows you to customize the player experience. The following are examples of what the API can do:

* Specify which players can use an avatar pose gizmo.
* Place a player in an avatar pose gizmo.
* Specify if the player is allowed to exit the gizmo.
* Listen to [enter/exit events when a player enters/exits the avatar pose gizmo](/horizon-worlds/reference/2.0.0/core_codeblockevents) as shown in the image below.

![Avatar pose gizmo class has listeners for enter and exit events](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/497496279_718068957397725_4079087536513392361_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=vghTKEDKzt8Q7kNvwHGj_Nm&_nc_oc=AdmV-5Mxc3ocizv9PZOvLkkDjwJJzPM5kAby2d7Eck0UVoAmfdJO7jrZAocsrio-rbo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Y6F2gug-LOcYiAxW9CSoLw&oh=00_Afi5FAjpTqA6q8JMB4LJFuIwTePdfojxyE2Gdbw_gxVr6Q&oe=692C02D4)

The following example shows how to use the [AvatarPoseGizmo class](/horizon-worlds/reference/2.0.0/core_avatarposegizmo) to specify which players can use an avatar pose gizmo while using [`CodeBlockEvents`](/horizon-worlds/reference/2.0.0/core_codeblockevents) to listen for players enter/exit events. See also [`CodeBlockEvent`](/horizon-worlds/reference/2.0.0/core_codeblockevent).

```vs
import * as hz from 'horizon/core';
class TestSeatGizmo extends hz.Component<typeof TestSeatGizmo> {
  static propsDefinition = {};

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
      this.entity.as(hz.AvatarPoseGizmo).setCanUseForPlayers([player],
      hz.AvatarPoseUseMode.AllowUse);
      this.entity.as(hz.AvatarPoseGizmo).player.set(player);
    });

    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterAvatarPoseGizmo,
      (player: hz.Player) => {
      console.log("OnPlayerEnterAvatarPoseGizmo: " + player.name.get());
    });

    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitAvatarPoseGizmo,
      (player: hz.Player) => {
      console.log("OnPlayerExitAvatarPoseGizmo: " + player.name.get());
    });
  }
}
hz.Component.register(TestSeatGizmo);
```

## What’s next?

Try the following topics to further your learning:

* [Avatar poses](/hw-docs/create-for-web-and-mobile/grabbable-entities/avatar-poses)
* [Tutorial worlds customize avatar interaction](/hw-docs/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-6-room-a-the-magic-wand#customize-avatar-interactions)