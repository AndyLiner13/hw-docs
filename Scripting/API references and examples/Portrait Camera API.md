Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/portrait-camera-api

# Portrait Camera API

The Portrait Camera API is an experimental module that extends the standard Camera API with world-orientation detection capabilities. This allows you to create different camera behaviors and visual experiences based on whether you publish your world in portrait or landscape orientation.

## Overview

The Portrait Camera API provides the `PortraitCamera` class, which extends the core `Camera` class with additional properties for detecting the current world orientation. This lets you create adaptive experiences and easily test between the different orientations.

**Note:** This is an experimental module that will be merged into the core Camera API when fully released.

## Prerequisites

To use the Portrait Camera API, you need:

* **Editor version**: Desktop Editor version 229 or later.
* **Script configuration**: Scripts must be set to [local execution mode](/hw-mcp-tools/documentation/hw-docs/Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md#set-a-script-to-run-locally) and owned by the target player.
* **Compiling scripts**: You must have at least one script which successfully compiles in order to see the scripting API options.

## Enabling the API

- Open the **Scripts panel** in the desktop editor. !['Menu bar script button](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/555073546_835743082296978_4049885224438889596_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=a4iSdfKU6tcQ7kNvwERQ1ZC&_nc_oc=Adlno5r3eDMDQR7hTntf3PD65GgRHak948Q1PyhJoBFHTGBQJM4-D6ZBIa0sPO4VXIM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=x11Z86FDHtoV85eKHq3QlA&oh=00_AfkteWOaFItCbIznvg888AWCkixK91pQ1pNWUX1Fk36M2g&oe=694BEDB8)
- Click the gear icon to open Script Settings. !['Script button dropdown gear icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558820269_835743088963644_8046250276998552311_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=yQtAoysSAvEQ7kNvwFuLMvz&_nc_oc=AdkniJB_dLLFSmxFi1OlvS5ptjvrECkAniTTsmKmsT5N_YH9Aq6T6HXEi2AVUlPYtec&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=x11Z86FDHtoV85eKHq3QlA&oh=00_AfnIjdwqtieF5G5jlbv7xtx_w5UI-8JhFNNwYaei8DNw7g&oe=694BEC3C)
- Click on **API** on the left side of the settings. !['Script settings API tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558832699_835743095630310_3754706073599624222_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=qEupUIN6zM4Q7kNvwE4CU3n&_nc_oc=AdkKGznadbedfj3HNDdaU88PS-MAlit_BpbLElTukMsWZuwGfPfwddF3ojaivQ3lO58&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=x11Z86FDHtoV85eKHq3QlA&oh=00_AfmlqID_gNufJs6PqtggQ4b4KcRj2v7-OV0oHkmhxPwqOg&oe=694BC063)
- Enable **horizon/portrait\_camera**. !['Script settings toggle horizon/portrait_cameras](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558696010_835743078963645_3222124908869930014_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=JSb4R47z9fEQ7kNvwEB--7X&_nc_oc=AdkmjUz4m8Bksw9CGRMehMCvpONtgy2cp0VJ5Y3pFZ54_eDdjL9hbB1HAKsOoK3SNo4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=x11Z86FDHtoV85eKHq3QlA&oh=00_Afk3yu-9tE8opUrZjNRlEdEZqNj1WRScFI1h5a5L94Pv1g&oe=694BD8D3)
- Click **Apply** to save the changes. !['Script settings toggle horizon/portrait_cameras](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558905396_835743092296977_6218382442484754449_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=TkalDdER8kMQ7kNvwHnKGho&_nc_oc=Adljf8v3CbKjsFHejprtCe49RKWtZK-1jQDudeYTxN1ugC8x7-YK-aY9HDsNwwxnaP0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=x11Z86FDHtoV85eKHq3QlA&oh=00_Afkt1YEg4N5LQYqYpw3e14NlVO6vjMuMZaxCTSrSrrK5kw&oe=694BB83C)

## API reference

The [`PortraitCamera`](/hw-mcp-tools/documentation/hw-docs/Reference/portrait_camera/Classes/PortraitCamera.md) class extends the standard [`Camera`](/hw-mcp-tools/documentation/hw-docs/Reference/camera/Classes/Camera.md) class with orientation detection capabilities.

### Properties

| Properties | Type | Description |
| --- | --- | --- |
| **`currentOrientation`** | enum | A readable property that returns the current world orientation as an enum of either **`CameraOrientation.Portrait`** or **`CameraOrientation.Landscape`**. |

### Methods

The [`PortraitCamera`](/hw-mcp-tools/documentation/hw-docs/Reference/portrait_camera/Classes/PortraitCamera.md) class inherits all methods from the standard [`Camera`](/hw-mcp-tools/documentation/hw-docs/Reference/camera/Classes/Camera.md) class and can be used as a drop-in replacement with additional orientation capabilities.

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

* **Local execution mode**: Always set scripts using the Portrait Camera API to [local execution mode](/hw-mcp-tools/documentation/hw-docs/Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md#set-a-script-to-run-locally).
* **Player ownership**: Ensure the script entity is owned by the target player before making camera API calls.
* **Ownership transfer**: Transfer ownership when players enter the world, similar to other camera-related scripts.

### Integration with spawn point gizmos

The Portrait Camera API works well alongside [spawn point gizmo Mobile Camera Options](/hw-mcp-tools/documentation/hw-docs/Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options):

## Testing and preview

Use the [Preview Configuration](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options in the desktop editor.

## Related documentation

* [Spawn Point Gizmo - Mobile Camera Options](/hw-mcp-tools/documentation/hw-docs/Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options)
* [Preview Mode - Setting the Preview Device](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device)
* [Camera API for Web and Mobile](/hw-mcp-tools/documentation/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Camera.md)
* [Local Scripting Documentation](/hw-mcp-tools/documentation/hw-docs/Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md)
* [World Settings Modification - World Orientation](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Settings/World%20Settings%20Modification.md#advanced)

## Limitations and notes

* **Experimental status**: This API is experimental and may change before final release.
* **Platform support**: Currently designed for mobile devices; behavior on other platforms may vary.
* **Preview limitations**: Publishing worlds with Portrait orientation will currently display as landscape in the final published version until the feature is fully released.
* **Early access**: This provides early access to editor tooling for development and testing preparation.