Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/portrait-camera-api

# Portrait Camera API

The Portrait Camera API is an experimental module that extends the standard Camera API with world-orientation detection capabilities. This allows you to create different camera behaviors and visual experiences based on whether you publish your world in portrait or landscape orientation.

## Overview

The Portrait Camera API provides the `PortraitCamera` class, which extends the core `Camera` class with additional properties for detecting the current world orientation. This lets you create adaptive experiences and easily test between the different orientations.

**Note:** This is an experimental module that will be merged into the core Camera API when fully released.

## Prerequisites

To use the Portrait Camera API, you need:

* **Editor version**: Desktop Editor version 229 or later.
* **Script configuration**: Scripts must be set to [local execution mode](/hw-docs/typescript/local-scripting/getting-started-with-local-scripting#set-a-script-to-run-locally) and owned by the target player.
* **Compiling scripts**: You must have at least one script which successfully compiles in order to see the scripting API options.

## Enabling the API

- Open the **Scripts panel** in the desktop editor. !['Menu bar script button](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/555073546_835743082296978_4049885224438889596_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=0D47CUlhInUQ7kNvwEl8M-1&_nc_oc=Adka39sES5Sqzv6UuE-PpQ8ALsyVy0RhgtWr6UFEJaC3FA9O26IsqSHl-ucfIWPAm7E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=wEiBvRYx-vALbWBOdLRvQg&oh=00_AfjH5PUkToRTN6QYzWEWxT5Nxy47g__7-T6TBkHKylIeLQ&oe=692C1178)
- Click the gear icon to open Script Settings. !['Script button dropdown gear icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558820269_835743088963644_8046250276998552311_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=uNcylVnmuXcQ7kNvwH7M-mD&_nc_oc=Admyc1WXzOrHrcZfTcTY7wLsvEiE5DfuSTCvZKXCLazerBmEwhyyXV0S_APrnfDIe4I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=wEiBvRYx-vALbWBOdLRvQg&oh=00_AfiocIFSrF1Xr-kcZkOZ1q59Gi5czBN8v7f-2EO8O_SgFw&oe=692C0FFC)
- Click on **API** on the left side of the settings. !['Script settings API tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558832699_835743095630310_3754706073599624222_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=RoYNe2GSRZsQ7kNvwH4_hah&_nc_oc=AdlcEHwBCYaMMkap9HcGkxIYr_BDlCAZU4ZZX_N9eBOyiIck8_NjMwpgOMO2d50WMYs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=wEiBvRYx-vALbWBOdLRvQg&oh=00_AfikOmeAsTJkWHp8paWdHQ1ptfXxvYNgHmT70E6xBUPv7Q&oe=692BE423)
- Enable **horizon/portrait\_camera**. !['Script settings toggle horizon/portrait_cameras](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558696010_835743078963645_3222124908869930014_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=QvHN5mguHlQQ7kNvwEAN9ON&_nc_oc=Adm4QjMGE5kjJVhurhb_mMHGmXG8wTdse3-Rkl2vpK1NDKCeCuA0Q0Opt_vFm12mj48&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=wEiBvRYx-vALbWBOdLRvQg&oh=00_AfjGJianGa374aQ3O-BUncnGOotTXxz70Fxu-TaYJ-_n-g&oe=692BFC93)
- Click **Apply** to save the changes. !['Script settings toggle horizon/portrait_cameras](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558905396_835743092296977_6218382442484754449_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=VEPQu5ZKVKIQ7kNvwGWo909&_nc_oc=AdklWycZXMeiDNy7WN3nD7VyiHB12O-XPGd4-5OruxAY-5sU4HnxIccugH1LJIRmiBY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=wEiBvRYx-vALbWBOdLRvQg&oh=00_Afg_gWK5tv7BzyF8x5-ANkIcJbrEdGfn4zueM_gzxfN_lA&oe=692BDBFC)

## API reference

The [`PortraitCamera`](https://developers.meta.com/horizon-worlds/reference/2.0.0/portrait_camera_portraitcamera) class extends the standard [`Camera`](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_camera) class with orientation detection capabilities.

### Properties

| Properties | Type | Description |
| --- | --- | --- |
| **`currentOrientation`** | enum | A readable property that returns the current world orientation as an enum of either **`CameraOrientation.Portrait`** or **`CameraOrientation.Landscape`**. |

### Methods

The [`PortraitCamera`](https://developers.meta.com/horizon-worlds/reference/2.0.0/portrait_camera_portraitcamera) class inherits all methods from the standard [`Camera`](https://developers.meta.com/horizon-worlds/reference/2.0.0/camera_camera) class and can be used as a drop-in replacement with additional orientation capabilities.

### Usage example: basic orientation detection

```vs
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

* **Local execution mode**: Always set scripts using the Portrait Camera API to [local execution mode](/hw-docs/typescript/local-scripting/getting-started-with-local-scripting#set-a-script-to-run-locally).
* **Player ownership**: Ensure the script entity is owned by the target player before making camera API calls.
* **Ownership transfer**: Transfer ownership when players enter the world, similar to other camera-related scripts.

### Integration with spawn point gizmos

The Portrait Camera API works well alongside [spawn point gizmo Mobile Camera Options](/hw-docs/code-blocks-and-gizmos/use-the-spawn-point-gizmo#mobile-camera-options):

## Testing and preview

Use the [Preview Configuration](/hw-docs/desktop-editor/getting-started/preview-mode#setting-the-preview-device) options in the desktop editor.

## Related documentation

* [Spawn Point Gizmo - Mobile Camera Options](/hw-docs/code-blocks-and-gizmos/use-the-spawn-point-gizmo#mobile-camera-options)
* [Preview Mode - Setting the Preview Device](/hw-docs/desktop-editor/getting-started/preview-mode#setting-the-preview-device)
* [Camera API for Web and Mobile](/hw-docs/create-for-web-and-mobile/typescript-apis-for-mobile/camera/)
* [Local Scripting Documentation](/hw-docs/typescript/local-scripting/getting-started-with-local-scripting/)
* [World Settings Modification - World Orientation](/hw-docs/desktop-editor/settings-modifications/world-settings-modification#advanced)

## Limitations and notes

* **Experimental status**: This API is experimental and may change before final release.
* **Platform support**: Currently designed for mobile devices; behavior on other platforms may vary.
* **Preview limitations**: Publishing worlds with Portrait orientation will currently display as landscape in the final published version until the feature is fully released.
* **Early access**: This provides early access to editor tooling for development and testing preparation.