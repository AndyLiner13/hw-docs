Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/avatar-pose-gizmo

# Avatar pose gizmo

The avatar pose [gizmo](About%20gizmos.md) is a helper tool that allows creators to position avatars in the virtual world in a sitting pose. Avatars can sit on a variety of stationary objects like chairs or moving objects such as roller coasters and bicycles. When the player is near the [avatar pose gizmo](../Reference/core/Classes/AvatarPoseGizmo.md), the player can press E to sit down on the gizmo object or [entity](../Reference/core/Classes/Entity.md), and then stand up using the [movement controls](../Desktop%20editor/Help%20and%20reference/Desktop%20Editor%20Creation%20Tools%20Keyboard%20Shortcuts.md). The gizmo supports animations and locomotion mechanics, allowing avatars to move naturally into seated positions as shown in the image below.

<details>
<summary>Avatar pose gizmo enables you to position your avatar in a sitting pose</summary>

<p></p>

[Avatar pose gizmo enables you to position your avatar in a sitting pose](../image_data/573f232ff6b73b14b94a07da43d9aaab3f8d8952340ef3c2b3ee842d520d51ae.md)

### Overview
The image depicts a virtual environment with a character sitting on a cube. The scene is set against a flat, tiled floor and a clear sky. There are user interface elements at the top corners of the screen.

### Key Elements
- **Character**: A seated figure wearing a black shirt, dark pants, and white shoes. The character is positioned centrally on a light gray cube.
- **Cube**: A simple, light gray cube that the character is sitting on. It is located in the center of the image.
- **Background**: A flat, tiled floor extending into the distance under a clear blue sky.
- **User Interface Elements**: Located in the top left and right corners of the screen. The left side has icons labeled "TABULACION ESC" and "[ntarna]" with a small "d" next to them. The right side has icons labeled "v" and "b".

### Visual Flow / Relationships
- **Most Prominent Element**: The seated character on the cube.
- **Arrows/Connectors**: None.
- **Reading Order**: The character is the focal point, with the background providing context. The user interface elements are secondary and provide interaction options.

</details>

<p></p>



## Prerequisites

* [TypeScript API version 2.0.0 or later](../Scripting/Upgrade%20World%20to%20TypeScript%20API%20v2.0.0.md).
* [The API is available in horizon/core/AvatarPoseGizmo](../Reference/core/Classes/AvatarPoseGizmo.md).
* [Enable the API module](../Scripting/Upgrade%20World%20to%20TypeScript%20API%20v2.0.0.md#upgrading-your-world).

## Limitations and best practices

There may be some amount of clipping through the object’s geometry from the avatar’s legs. This can vary depending on the body shape of the avatar. You may need to modify your objects and adjust the avatar pose gizmo to reduce clipping. To help assist with this, a shadow avatar is available on the avatar pose gizmo while in the Build mode to preview if the placement will create clipping. You can also use the Worlds camera and try out different avatar bodies to see how avatars will look using the seat. The sitting animation is procedurally adjusted to account for the avatar’s body shape which reduces clipping for larger bodies.

<details>
<summary>Avatar pose gizmo has a shadow avatar in the Build mode</summary>

<p></p>

[Avatar pose gizmo has a shadow avatar in the Build mode](../image_data/08ccd83315c76cd72508d0f3c1726cbaf1c11704b5f955e321ac5f12b5293e49.md)

### Overview
This image depicts a 3D scene with two human-like figures and various graphical elements representing axes and controls. The environment is a simple grid floor with a gradient sky background.

### Key Elements
- **Figure 1 (Left)**: A seated figure with a blue outline. The figure is facing forward, and a red bounding box surrounds its head area.
- **Figure 2 (Right)**: A standing figure with a blue outline, positioned slightly to the right and pointing towards Figure 1.
- **Axes**: 
  - A green arrow pointing upwards.
  - A blue arrow pointing to the left.
  - A red sphere at the intersection of the blue and green axes.
- **Control Panel**: A circular control with a blue background and white symbols resembling a person and an upward arrow.
- **Background**: A light gray grid floor and a gradient sky transitioning from light blue to white.

### Visual Flow / Relationships
The most prominent visual elements are the two figures and the axes. The standing figure points towards the seated figure, suggesting interaction or control. The axes indicate movement or transformation directions, while the control panel likely represents a way to manipulate the seated figure.

</details>

<p></p>



Emotes are available while sitting, but only the upper body will move.

Features have been added for player comfort and security, such as preventing overlapping pose gizmos, only allowing one person in a seat at a time, and preventing the ability to jump on someone while seated.

Players can sit on moving objects. A control is available to notify players if they are automatically placed on moving objects when they enter a world.

## Access the avatar pose gizmo

While you can access and use gizmos in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), this topic focuses on the creator experience in the [desktop editor](../Get%20started/Install%20the%20desktop%20editor.md).

In the desktop editor, do the following to access the avatar pose gizmo:

- In the desktop editor while in Build mode, select **Build** > **Gizmos** from the menu bar, search for “avatar pose” in the search field.
- Select the avatar pose gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the **Properties** panel.

## Properties

This section describes the properties of the avatar pose gizmo in the [**Properties**](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane) panel.

The avatar pose gizmo is an extended class of [entity](../Reference/core/Classes/Entity.md). All objects in a world are represented by entities. Entities have their respective properties such as position, rotation, and scale. In the Properties panel, edit the avatar pose gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

**Pose**: Selecting the **Seat** option enables the player to enter a sitting pose on an entity.

Toggle on the **Use Custom Exit Direction** to input a custom **Exit Direction** vector to specify the direction that the player is facing when exiting the pose. For example, you may specify exit directions for avatar pose gizmos to control where a player returns to their upright position to avoid awkward positioning in crowded environments.

## Scripting

Through scripting, the [AvatarPoseGizmo class](../Reference/core/Classes/AvatarPoseGizmo.md) allows you to customize the player experience. The following are examples of what the API can do:

* Specify which players can use an avatar pose gizmo.
* Place a player in an avatar pose gizmo.
* Specify if the player is allowed to exit the gizmo.
* Listen to [enter/exit events when a player enters/exits the avatar pose gizmo](../Reference/core/Variables/CodeBlockEvents.md) as shown in the image below.

<details>
<summary>Avatar pose gizmo class has listeners for enter and exit events</summary>

<p></p>

[Avatar pose gizmo class has listeners for enter and exit events](../image_data/b87cb0b4e7c06533898a9859fda20c396da1c1dff776621d7af83e7dfc5221b6.md)

### Overview
The image depicts a 3D environment viewed from behind a character standing on a grid floor. The scene includes a user interface at the bottom with tabs labeled "Asset Library," "Console," "Tests," and "Performance." Below these tabs, there are indicators for simulation view, clear button, and system/user/cloud counts. The console area displays messages related to player interactions with a gizmo.

### Key Elements
- **Character**: A 3D model of a person wearing a black shirt and dark pants, facing away from the viewer.
- **Grid Floor**: A light gray grid covering the entire floor, indicating a virtual space.
- **User Interface**: Located at the bottom of the screen, featuring tabs and indicators.
    - **Tabs**: "Asset Library," "Console," "Tests," "Performance."
    - **Simulation View**: Dropdown menu showing "Simulation View" with a drop-down arrow.
    - **Clear Button**: A button labeled "Clear."
    - **Indicators**: Icons with numbers next to them (e.g., "i 2," "A 0," "X 0," "<>" System, <> User, <> Cloud).
    - **Messages**: Console log displaying "[User] OnPlayerEnterAvatarPoseGizmo:" and "[User] OnPlayerExitAvatarPoseGizmo:" entries with timestamps and server information.
- **Background**: A gradient sky transitioning from light blue to white, suggesting an open outdoor environment.

### Visual Flow / Relationships
- **Most Prominent Element**: The character in the center of the screen.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: The character is centered, with the user interface at the bottom and the grid floor extending into the distance.

</details>

<p></p>



The following example shows how to use the [AvatarPoseGizmo class](../Reference/core/Classes/AvatarPoseGizmo.md) to specify which players can use an avatar pose gizmo while using [`CodeBlockEvents`](../Reference/core/Variables/CodeBlockEvents.md) to listen for players enter/exit events. See also [`CodeBlockEvent`](../Reference/core/Classes/CodeBlockEvent.md).

```
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

* [Avatar poses](../Mobile%20and%20web/Grabbable%20entities/Avatar%20Poses.md)
* [Tutorial worlds customize avatar interaction](../Tutorials/Feature%20samples/Developing%20for%20web%20and%20mobile%20players%20tutorial/Module%206%20-%20Room%20A-%20The%20Magic%20Wand.md#customize-avatar-interactions)