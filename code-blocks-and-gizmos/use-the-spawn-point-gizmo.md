Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-spawn-point-gizmo

# Spawn point gizmo

In Meta Horizon Worlds, a spawn point refers to a designated location within a virtual environment where [entities](/horizon-worlds/reference/2.0.0/core_entity) such as players, enemies, and NPCs appear or spawn when they enter the world. These spawn points are important for managing entities’ entry and movement within the game.

The spawn point [gizmo](/horizon-worlds/learn/documentation/code-blocks-and-gizmos/about-gizmos), is a helper tool that you can use to enhance the creation and interactivity of worlds. In the desktop editor, it is a visual representation of a spawn point with editable options for adjusting properties such as position, rotation, and scale. You can also use the [SpawnPointGizmo API](/horizon-worlds/reference/2.0.0/core_spawnpointgizmo) to facilitate the management of spawn points such as [respawn](/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/codeblocks-to-typescript#simplerespawnscriptts). Additionally, when developing for mobile and web platforms, the spawn point gizmo can be configured to control [player camera’s point of view](/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-4-camera-manager#spawnpoint-camera-control).

**Note:** While you can access and use spawn point gizmo in the [VR tool](/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon), this introductory topic to spawn point gizmo focuses on the creator experience in the [desktop editor](/horizon-worlds/learn/documentation/get-started/install-desktop-editor).

## Limitations

When the entity is teleported to another location, a transition scene may be included. The use of this gizmo may also affect camera view, player gravity, and speed.

## Access and use the spawn point gizmo

In the Meta Horizon Worlds desktop editor, do the following to access the spawn point gizmo:

- In the desktop editor while in Build mode, select **Build** > **Gizmos** from the menu bar, search for “spawn point” in the search field.
- Select the spawn point gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the **Properties** panel.

## Spawn point properties

The spawn point gizmo properties can be configured in the [Properties panel](/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#properties-pane) of the desktop editor or through [scripting](/horizon-worlds/learn/documentation/typescript/getting-started/using-typescript-in-horizon-worlds).

### Mobile camera options

The spawn point gizmo includes enhanced camera options for mobile and web platforms. These options enable fine-tuning of the camera behavior based on how players will be viewing the world, ensuring optimal visual presentation regardless of device orientation.

* **Mobile Camera**: A mobile-specific setting which allows you to configure camera behavior. This can greatly improve the accessibility to your world for mobile users.

  ![Screenshot shows the desktop editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558914867_835743105630309_479224545206663294_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=xF-zqoqx_x8Q7kNvwH88Zqi&_nc_oc=Adnm0sUO4tyv_6iZJfQ89MbMiW6yGpnfmHvRxdtjkr4RjRcwL6bZcIHR75BC-0p0ADc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6yc5atgR4JIz74grXWCpwQ&oh=00_Afj74JqmMYw8DDvBNfwOWktpBsKs-3jJzhUdd_0MVCjOBw&oe=692C0955)
* **Portrait/Landscape separation**: You can define different visual parameters for each orientation to optimize the player experience across different device orientations

  ![Screenshot shows the desktop editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/562978628_835743102296976_2582391894108356684_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=KexuLStKbw8Q7kNvwGa_yhR&_nc_oc=AdnYaL508Ii9ZLWdy8rOG8ju7SbfFDQFFyCN2brzKYAy74msPuWHjx6B2BXu7eERySs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6yc5atgR4JIz74grXWCpwQ&oh=00_AfhIGzc7erwPCfjrRCu9VaNwzuyE8nsCWNLckXgcSnLJNQ&oe=692BDE49)

## Preview and publishing configuration

### Preview orientation simulation

When testing your world in the desktop editor, you can simulate different device orientations:

- In [**Preview Configuration**](/horizon-worlds/learn/documentation/desktop-editor/getting-started/preview-mode#setting-the-preview-device) options, locate the **Preview orientation** setting under **Mobile and Web device simulations**.
- Change the setting to **Portrait** to simulate how the world appears in portrait orientation.
- This allows you to test and validate your spawn point camera configurations before publishing.

### World orientation publishing

When publishing your world, you can specify the target orientation:

- In the [**Publish World**](/horizon-worlds/learn/documentation/desktop-editor/settings-modifications/world-settings-modification#changing-world-settings) panel, navigate to the **Advanced** section.
- Set the **World Orientation** option to **Portrait** to mark your world for portrait orientation.
- Use **Save for later** to prepare your world configuration without immediately publishing.

**Note:** Setting the world orientation to **Portrait** will automatically expand the Portrait orientation options in the **Spawn point Gizmo** properties by default.

## Scripting

To govern entity lifecycles throughout the game and implement more complex and dynamic behaviors, use Meta Horizon Worlds [SpawnPointGizmo API](/horizon-worlds/reference/2.0.0/core_spawnpointgizmo). See [tutorial worlds](/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/tutorial-prerequisites) for complete code samples and follow the [companion documentation](/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds#in-the-desktop-editor) for an in-depth explanation of the implementation details.

### Portrait camera API

For advanced orientation-based camera control, you can use the experimental Portrait Camera API through scripting:

- In **Script Settings**, access the `horizon/portrait_camera` API module.
- The `PortraitCamera` class extends the standard `Camera` class with a `currentOrientation` property.
- This property returns either **PORTRAIT** or **LANDSCAPE** based on the current simulation settings.

**Note:** This is an experimental module that will be merged into the core Camera API when fully released.

#### Example usage

```vs
import * as hz from 'horizon/core';
import {CameraOrientation, PortraitCamera} from 'horizon/portrait_camera';

class OrientationChecker extends hz.Component<typeof OrientationChecker> {
  static propsDefinition = {};

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
        this.entity.owner.set(player);
      },
    );

    if (this.entity.owner.get().id != this.world.getServerPlayer().id) {
      this.setUpCamera();
    }
  }

  setUpCamera() {
    let cam = new PortraitCamera();
    if (cam.currentOrientation.get().toString() == 'PORTRAIT') {
      // Configure portrait-specific camera behavior
      console.log('Portrait Options');
    } else {
      // Configure landscape-specific camera behavior
      console.log('Landscape Options');
    }
  }
}
hz.Component.register(OrientationChecker);
```

**Important:** Scripts using this API must be set to Local execution mode and owned by the target player, similar to existing camera checks.

## What’s next?

Now you’ve been introduced to the spawn point gizmo, further your learning with hands-on tutorials, tutorial worlds with completed samples, and developer guides:

* [Create your first world tutorial: designate a spawn point](/horizon-worlds/learn/documentation/get-started/create-your-first-world#section-2-place-assets-in-the-scene)
* [Simple respawn script](/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/codeblocks-to-typescript#simplerespawnscriptts)
* [Multiplayer lobby entering the match](/horizon-worlds/learn/documentation/tutorial-worlds/multiplayer-lobby-tutorial/module-5-entering-the-match)
* [Chop’N pop](/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup)
* [Rooftop racer](/horizon-worlds/learn/documentation/tutorial-worlds/horizon-traversal-sample-world/module-1-setup)
* [Set initial PlayerCamera point of view](/horizon-worlds/learn/documentation/tutorial-worlds/camera-api-examples-tutorial/module-2-playercamera-overview#set-initial-playercamera-point-of-view)
* [Meta Horizon Creator Program creators manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#spawn-point-gizmo)
* [Object spawning](/horizon-worlds/learn/documentation/tutorial-worlds/spawning-and-pooling-in-typescript/module-1-setup)