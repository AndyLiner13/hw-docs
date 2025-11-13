Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/portrait-camera-api

# Portrait Camera API

The Portrait Camera API is an experimental module that extends the standard Camera API with world-orientation detection capabilities. This allows you to create different camera behaviors and visual experiences based on whether you publish your world in portrait or landscape orientation.

## Overview

The Portrait Camera API provides the `PortraitCamera` class, which extends the core `Camera` class with additional properties for detecting the current world orientation. This lets you create adaptive experiences and easily test between the different orientations.

**Note:** This is an experimental module that will be merged into the core Camera API when fully released.

## Prerequisites

To use the Portrait Camera API, you need:

* **Editor version**: Desktop Editor version 229 or later.
* **Script configuration**: Scripts must be set to [local execution mode](/hw-docs/Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md#set-a-script-to-run-locally) and owned by the target player.
* **Compiling scripts**: You must have at least one script which successfully compiles in order to see the scripting API options.

## Enabling the API

- Open the **Scripts panel** in the desktop editor. !['Menu bar script button](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/555073546_835743082296978_4049885224438889596_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=HynsT0esAxsQ7kNvwEL1QvE&_nc_oc=Adl_aDc7xRLDHT5-G7iavZhPAEKO87hwf8ZR_G94IepXE6WI5CrVwONmN27hFs911tY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=VByVSMeVM2i6FtWCOaW_hw&oh=00_AfiWnmXY4cwUJIgYPTcMCZsXOnbFtqkCFIt3OB3hka8fzQ&oe=692FCDB8)
- Click the gear icon to open Script Settings. !['Script button dropdown gear icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558820269_835743088963644_8046250276998552311_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=n3PNFDO7bCkQ7kNvwGi29Rf&_nc_oc=Adn01CwRomVD3kHXPc8lEOR-FIxdDucQ5xvQJCH8ScP4VJbcmWUUCZjPqVcmVslRU7g&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=VByVSMeVM2i6FtWCOaW_hw&oh=00_AfgG7_CqYgxeMS6daobBIBCEsyM0NLUMkpcz0JDVzOxbNg&oe=692FCC3C)
- Click on **API** on the left side of the settings. !['Script settings API tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558832699_835743095630310_3754706073599624222_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=naGbXa-_WCgQ7kNvwEiiuZ_&_nc_oc=AdlQv0ta7zP-InYUMmjHjVR2qPACEU4p_hZjMrhxZBvz4GvyTT9tXkU2I0CjUwOo7tE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=VByVSMeVM2i6FtWCOaW_hw&oh=00_Afi1sYXF8xwLxwppGOUs1K160vcCecY24cKSXHf0IIbySQ&oe=692FA063)
- Enable **horizon/portrait\_camera**. !['Script settings toggle horizon/portrait_cameras](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558696010_835743078963645_3222124908869930014_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=M4Dfgc18Kt8Q7kNvwHv5QD1&_nc_oc=AdkUAf7lYaedYc8rJJnjEuNtQu58THBts5XAfrcuBfued5vQWo9IPflGi_-YkILibow&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=VByVSMeVM2i6FtWCOaW_hw&oh=00_AfgGXCNn727p3P-wSgZb_ZkfUHaOjRsK8zoh8Xq7725BNg&oe=692FB8D3)
- Click **Apply** to save the changes. !['Script settings toggle horizon/portrait_cameras](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558905396_835743092296977_6218382442484754449_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=x8DXiKHf51oQ7kNvwHuSH_T&_nc_oc=Adkp0zQBz2QggEVLDKBAgBnuq8JWXKMS-Y2XlXHRN7TdkQxpZ0d5qE0e2_YMmHpf-aQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=VByVSMeVM2i6FtWCOaW_hw&oh=00_Afhh948AJwfuTuYfRH3Sejdk2u4GVubotI9SkXCBYtEiUg&oe=692F983C)

## API reference

The [`PortraitCamera`](/hw-docs/Reference/portrait_camera_portraitcamera) class extends the standard [`Camera`](/hw-docs/Reference/camera/Classes/Camera.md) class with orientation detection capabilities.

### Properties

| Properties | Type | Description |
| --- | --- | --- |
| **`currentOrientation`** | enum | A readable property that returns the current world orientation as an enum of either **`CameraOrientation.Portrait`** or **`CameraOrientation.Landscape`**. |

### Methods

The [`PortraitCamera`](/hw-docs/Reference/portrait_camera_portraitcamera) class inherits all methods from the standard [`Camera`](/hw-docs/Reference/camera/Classes/Camera.md) class and can be used as a drop-in replacement with additional orientation capabilities.

### Usage example: basic orientation detection

```
import * as hz from 'horizon/core';
import {PortraitCamera} from 'horizon/portrait_camera';

class OrientationChecker extends hz.Component<typeof OrientationChecker> {
  static propsDefinition = {};

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
        this.entity.owner.set(player);
        console.log(`Set entity owner to: ${player.name}`);
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
      this.configurePortraitCamera();
    } else {
      // Configure landscape-specific camera behavior
      console.log('Landscape Options');
      this.configureLandscapeCamera();
    }
  }

  configurePortraitCamera() {
    // Portrait-specific camera settings
    // e.g., adjust field of view, position, or other camera properties
  }

  configureLandscapeCamera() {
    // Landscape-specific camera settings
    // e.g., different camera positioning for wider screens
  }
}

hz.Component.register(OrientationChecker);
```

### Script execution requirements

* **Local execution mode**: Always set scripts using the Portrait Camera API to [local execution mode](/hw-docs/Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md#set-a-script-to-run-locally).
* **Player ownership**: Ensure the script entity is owned by the target player before making camera API calls.
* **Ownership transfer**: Transfer ownership when players enter the world, similar to other camera-related scripts.

### Integration with spawn point gizmos

The Portrait Camera API works well alongside [spawn point gizmo Mobile Camera Options](/hw-docs/Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options):

## Testing and preview

Use the [Preview Configuration](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options in the desktop editor.

## Related documentation

* [Spawn Point Gizmo - Mobile Camera Options](/hw-docs/Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options)
* [Preview Mode - Setting the Preview Device](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device)
* [Camera API for Web and Mobile](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Camera.md)
* [Local Scripting Documentation](/hw-docs/Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md)
* [World Settings Modification - World Orientation](/hw-docs/Desktop%20editor/Settings/World%20Settings%20Modification.md#advanced)

## Limitations and notes

* **Experimental status**: This API is experimental and may change before final release.
* **Platform support**: Currently designed for mobile devices; behavior on other platforms may vary.
* **Preview limitations**: Publishing worlds with Portrait orientation will currently display as landscape in the final published version until the feature is fully released.
* **Early access**: This provides early access to editor tooling for development and testing preparation.