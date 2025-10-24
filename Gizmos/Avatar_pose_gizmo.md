# Avatar pose gizmo

## Prerequisites

• [TypeScript API version 2.0.0 or later](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/upgrade-world-to-typescript-api-v200).
• [The API is available in horizon/core/AvatarPoseGizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatarposegizmo).
• [Enable the API module](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/upgrade-world-to-typescript-api-v200#upgrading-your-world).

  

## Limitations and best practices

 There may be some amount of clipping through the object’s geometry from the
avatar’s legs. This can vary depending on the body shape of the avatar. You may need
to modify your objects and adjust the avatar pose gizmo to reduce clipping. To
help assist with this, a shadow avatar is available on the avatar pose gizmo
while in the Build mode to preview if the placement will create clipping. You can
also use the Worlds camera and try out different avatar bodies to see how avatars
will look using the seat. The sitting animation is procedurally adjusted to
account for the avatar’s body shape which reduces clipping for larger bodies. ![Avatar pose gizmo has a shadow avatar in the Build mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/497654382_718068954064392_7813754134802998118_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=5xRVsW8TAsUQ7kNvwFSzSig&_nc_oc=AdlAjr1qIb8geOVw3kLh3biVmwu98EdChfxd_VlMm1d8gb9Ps8GpXFIkHgau7DcKLFo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=HeYw6JsaaLW2f3e991RT...
 Emotes are available while sitting, but only the upper body will move. Features have been added for player comfort and security, such as preventing
overlapping pose gizmos, only allowing one person in a seat at a time, and
preventing the ability to jump on someone while seated. Players can sit on moving objects. A control is available to notify players if
they are automatically placed on moving objects when they enter a world.  

## Access the avatar pose gizmo

 While you can access and use gizmos in the [VR tool](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon), this topic focuses on the creator experience in the [desktop editor](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/install-desktop-editor). In the desktop editor, do the following to access the avatar pose gizmo:
1. In the desktop editor while in Build mode, select Build > Gizmos from the menu bar, search for “avatar pose” in the search field.
2. Select the avatar pose gizmo and drag it into the scene.
3. You can now edit the new gizmo properties in the Properties panel.

  

## Properties

 This section describes the properties of the avatar pose gizmo in the [Properties](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#properties-pane) panel. The avatar pose gizmo is an extended class of [entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity). All objects in a world are represented by entities. Entities have their
respective properties such as position, rotation, and scale. In the Properties panel,
edit the avatar pose gizmo’s transformation fields to configure its Position, Rotation, and Scale. Pose: Selecting the Seat option enables the player to enter a sitting pose on an entity. Toggle on the Use Custom Exit Direction to input a custom Exit Direction vector to specify the direction that the player is facing when exiting the
pose. For example, you may specify exit directions for avatar pose gizmos to control
where a player returns to their upright position to avoid awkward positioning
in crowded environments.  

## Scripting

 Through scripting, the [AvatarPoseGizmo class](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatarposegizmo) allows you to customize the player experience. The following are examples of
what the API can do:
• Specify which players can use an avatar pose gizmo.
• Place a player in an avatar pose gizmo.
• Specify if the player is allowed to exit the gizmo.
• Listen to [enter/exit events when a player enters/exits the avatar pose gizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevents) as shown in the image below.
 ![Avatar pose gizmo class has listeners for enter and exit events](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/497496279_718068957397725_4079087536513392361_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=EzXNad3S0rcQ7kNvwGeP3P0&_nc_oc=AdlmIw3InNqcrH4UxK2QXs_n8xTiEtm3RpktByl4W3RuG4DCaTBLWLYj9dmStmlhHeE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=HeYw6JsaaLW2f3e991RTTw&oh=00_AfeHUDa7WjiYH5IlWM...
 The following example shows how to use the [AvatarPoseGizmo class](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatarposegizmo) to specify which players can use an avatar pose gizmo while using [CodeBlockEvents](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevents) to listen for players enter/exit events. See also [CodeBlockEvent](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevent).  
```
import * as hz from 'horizon/core';
class TestSeatGizmo extends hz.Component<typeof TestSeatGizmo> {
  static propsDefinition = {};

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
      this.entity.as(hz.AvatarPoseGizmo).setCanUseForPlayers([player],
      hz.AvatarPoseUseMode.AllowUse);
      this.entity.as(hz.AvatarPoseGizmo).player.set(player);
    });

    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterAvatarPoseGizmo,
      (player: hz.Player) => {
      console.log("OnPlayerEnterAvatarPoseGizmo: " + player.name.get());
    });

    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitAvatarPoseGizmo,
      (player: hz.Player) => {
      console.log("OnPlayerExitAvatarPoseGizmo: " + player.name.get());
    });
  }
}
hz.Component.register(TestSeatGizmo);
```

## What’s next?

 Try the following topics to further your learning:
• [Avatar poses](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/avatar-poses)
• [Tutorial worlds customize avatar interaction](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-6-room-a-the-magic-wand#customize-avatar-interactions)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Favatar-pose-gizmo%2F)

# Avatar pose gizmo

 The avatar pose [gizmo](https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/about-gizmos) is a helper tool that allows creators to position avatars in the virtual world
in a sitting pose. Avatars can sit on a variety of stationary objects like
chairs or moving objects such as roller coasters and bicycles. When the player is
near the [avatar pose gizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatarposegizmo), the player can press E to sit down on the gizmo object or [entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity), and then stand up using the [movement controls](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/help-and-reference/desktop-editor-creation-tools-keyboard-shortcuts). The gizmo supports animations and locomotion mechanics, allowing avatars to
move naturally into seated positions as shown in the image below. ![Avatar pose gizmo enables you to position your avatar in a sitting pose](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/497727897_718068960731058_5060701550769065856_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=MIRM4wmaW0sQ7kNvwGM6b6N&_nc_oc=AdldWmsXt0wwtLxKblZiiAY9WiCY3i-mYVtGasKiqX9Yn9zBKZtc2gKbTmaG3QIEp8I&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=HeYw6JsaaLW2f3e991RTTw&oh=00_A...

## Prerequisites
## Limitations and best practices
## Access the avatar pose gizmo
## Properties
## Scripting
## What’s next?
## Additional Links
      Learn
# Avatar pose gizmo
