Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/portrait-camera-api

# Portrait Camera API

The Portrait Camera API is an experimental module that extends the standard Camera API with world-orientation detection capabilities. This allows you to create different camera behaviors and visual experiences based on whether you publish your world in portrait or landscape orientation.

## Overview

The Portrait Camera API provides the `PortraitCamera` class, which extends the core `Camera` class with additional properties for detecting the current world orientation. This lets you create adaptive experiences and easily test between the different orientations.

**Note:** This is an experimental module that will be merged into the core Camera API when fully released.

## Prerequisites

To use the Portrait Camera API, you need:

* **Editor version**: Desktop Editor version 229 or later.
* **Script configuration**: Scripts must be set to [local execution mode](../Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md#set-a-script-to-run-locally) and owned by the target player.
* **Compiling scripts**: You must have at least one script which successfully compiles in order to see the scripting API options.

## Enabling the API

- Open the **Scripts panel** in the desktop editor. !['Menu bar script button](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/555073546_835743082296978_4049885224438889596_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=EhjoGssIffMQ7kNvwFxebol&_nc_oc=AdmqhliF1fZVv_IOWAF8mse9PFJWy8WvQM6JXvYKaKGyU6DjaowtVCZjcLTEkIArmqb6td3eEUhQz1Coz9vy_E9d&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ZSiga8qcaWkuYVtKkd1Kng&oh=00_AfnkdYqj0TjpvkfkHwuskazFsZFgT_4JQcSsRiwmODUlWw&oe=695598B8)
- Click the gear icon to open Script Settings. !['Script button dropdown gear icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558820269_835743088963644_8046250276998552311_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=_ZMdb3wsz3oQ7kNvwEWl40k&_nc_oc=AdldRNw3ORsjDIXH6iA_eZG2m0_g7eoq9pXQVBU0Fto3yFA1azhy7XmlQx_mQcpOBk36FA2W4GB4VplAXzRDGc33&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ZSiga8qcaWkuYVtKkd1Kng&oh=00_AfnwYvy559sQDuJwA9YKxZvFfYApR9Dkvk1o871wMOUxwQ&oe=6955973C)
- Click on **API** on the left side of the settings. !['Script settings API tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558832699_835743095630310_3754706073599624222_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=-IVRLiwgN6sQ7kNvwFFwgav&_nc_oc=AdmZOZ4cS8ynSIn7GMEPtK3982UmVplqyC8n5Qs-PSQa-Q0Rkd-88l-jqfWNK5ald01C_mAXjuiG4CHnlJmcXcZX&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ZSiga8qcaWkuYVtKkd1Kng&oh=00_AfmgCYjv6uMGuel-9JptdE897r5ndLgdkASPlA5OcLBcjw&oe=6955A3A3)
- Enable **horizon/portrait\_camera**. !['Script settings toggle horizon/portrait_cameras](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558696010_835743078963645_3222124908869930014_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=oHxt5u3fZ0YQ7kNvwFdiinh&_nc_oc=AdkuvhsBvC3ztTagFvb1o07upteKjkL_n80ZdD5nRKeL8ePOHO4KS7V6X_0OrAcKNmWpRaSp94SH5tD1ihSM03-h&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ZSiga8qcaWkuYVtKkd1Kng&oh=00_AfnIr2S-98Jva-g0bEkIXgYkmM7-6GTvLmezi_fKHg4DAw&oe=695583D3)
- Click **Apply** to save the changes. !['Script settings toggle horizon/portrait_cameras](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558905396_835743092296977_6218382442484754449_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=FCpxsixd6IIQ7kNvwHj9984&_nc_oc=AdmWqRbJ7aTzMw290YeFFp8sa8wQB9BBWq1mEkFyr1l3CMWaaRlJqxv6awnr3kovdjCuZNjVCGPSL_u73rSYzMm7&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ZSiga8qcaWkuYVtKkd1Kng&oh=00_AfmwWONc1wQ0ztx7fa2NKL1pHFqsYndumoX4xBnfTul_Ig&oe=69559B7C)

## API reference

The [`PortraitCamera`](../../Reference/portrait_camera/Classes/PortraitCamera.md) class extends the standard [`Camera`](../../Reference/camera/Classes/Camera.md) class with orientation detection capabilities.

### Properties

| Properties | Type | Description |
| --- | --- | --- |
| **`currentOrientation`** | enum | A readable property that returns the current world orientation as an enum of either **`CameraOrientation.Portrait`** or **`CameraOrientation.Landscape`**. |

### Methods

The [`PortraitCamera`](../../Reference/portrait_camera/Classes/PortraitCamera.md) class inherits all methods from the standard [`Camera`](../../Reference/camera/Classes/Camera.md) class and can be used as a drop-in replacement with additional orientation capabilities.

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

* **Local execution mode**: Always set scripts using the Portrait Camera API to [local execution mode](../Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md#set-a-script-to-run-locally).
* **Player ownership**: Ensure the script entity is owned by the target player before making camera API calls.
* **Ownership transfer**: Transfer ownership when players enter the world, similar to other camera-related scripts.

### Integration with spawn point gizmos

The Portrait Camera API works well alongside [spawn point gizmo Mobile Camera Options](../../Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options):

## Testing and preview

Use the [Preview Configuration](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options in the desktop editor.

## Related documentation

* [Spawn Point Gizmo - Mobile Camera Options](../../Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options)
* [Preview Mode - Setting the Preview Device](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device)
* [Camera API for Web and Mobile](../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Camera.md)
* [Local Scripting Documentation](../Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md)
* [World Settings Modification - World Orientation](../../Desktop%20editor/Settings/World%20Settings%20Modification.md#advanced)

## Limitations and notes

* **Experimental status**: This API is experimental and may change before final release.
* **Platform support**: Currently designed for mobile devices; behavior on other platforms may vary.
* **Preview limitations**: Publishing worlds with Portrait orientation will currently display as landscape in the final published version until the feature is fully released.
* **Early access**: This provides early access to editor tooling for development and testing preparation.