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

- Open the **Scripts panel** in the desktop editor. <details>
                                                    <summary>'Menu bar script button</summary>
                                                    
                                                    <p></p>
                                                    
                                                    ['Menu bar script button](../../image_data/1862b15822e8a0e02d949b7ec8310c9e10746b21f89af7522ef21c2218830f29.md)
                                                    
                                                    ### Overview
                                                    This image depicts a user interface element from a software application, specifically a menu item labeled "Scripts". The interface includes a search bar, a sidebar labeled "Hierarchy", and various toolbars with icons and dropdown menus.
                                                    
                                                    ### Key Elements
                                                    - **Menu Item "Scripts"**: Located at the top right, this is a dropdown menu indicated by a downward arrow next to the text "Scripts". It has a red bounding box highlighting it.
                                                    - **Search Bar**: Positioned below the "Scripts" menu, it contains the placeholder text "> Search hierarchy".
                                                    - **Sidebar "Hierarchy"**: On the left side, this section displays a tree-like structure with nodes such as "SpawnPoint".
                                                    - **Toolbars**: At the top and bottom of the interface, there are toolbars with various icons representing different functions like build, systems, local, and others.
                                                    - **Icons**: Various icons are present throughout the interface, such as a magnifying glass for the search bar and a plus sign for adding new items.
                                                    
                                                    ### Visual Flow / Relationships
                                                    The most prominent visual element is the "Scripts" menu due to its highlighted bounding box. The search bar is secondary but important for functionality. The sidebar provides hierarchical navigation, while the toolbars offer quick access to different functionalities within the application.
                                                    
                                                    </details>
                                                    
                                                    <p></p>
                                                    
                                                    
- Click the gear icon to open Script Settings. <details>
                                               <summary>'Script button dropdown gear icon</summary>
                                               
                                               <p></p>
                                               
                                               ['Script button dropdown gear icon](../../image_data/324cba6fafae5390eab9f8dacd1bdca3c9118ced8b61c3123b269a86a238d044.md)
                                               
                                               ### Overview
                                               This image depicts a user interface element within a software application, specifically a section labeled "Scripts." It includes a search bar, a plus sign for adding new items, a refresh icon, and a settings gear icon.
                                               
                                               ### Key Elements
                                               - **Search Bar**: Located at the top-left, it has a magnifying glass icon and the placeholder text "> BasicOrientationDetection". The background is white, and the text is black.
                                               - **Plus Sign**: Positioned next to the search bar, it is a simple '+' symbol.
                                               - **Refresh Icon**: Situated to the right of the search bar, it is a circular arrow icon.
                                               - **Settings Gear**: A gear icon located to the right of the refresh icon, encased in a red square for emphasis. It is a standard gear symbol representing settings.
                                               - **Three Dots**: Positioned to the far right, it is a vertical ellipsis (...).
                                               
                                               ### Visual Flow / Relationships
                                               The most prominent visual is the **Settings Gear** due to its placement and the red square highlighting it. The elements are arranged horizontally from left to right, with the search bar on the far left and the three dots on the far right. There are no arrows or lines connecting the elements, indicating a linear reading order from left to right.
                                               
                                               </details>
                                               
                                               <p></p>
                                               
                                               
- Click on **API** on the left side of the settings. <details>
                                                     <summary>'Script settings API tab</summary>
                                                     
                                                     <p></p>
                                                     
                                                     ['Script settings API tab](../../image_data/c5d120706f2516b9a897017bcd4921866c0bd2693ae8f31bbd0f00bfd709802d.md)
                                                     
                                                     ### Overview
                                                     This image depicts a settings interface titled "Script Settings." It is divided into two main sections: a sidebar menu on the left and a content area on the right. The content area is further divided into two tabs: "API" and "Script editing," with the "API" tab currently active. The interface has a dark theme with blue accents for interactive elements.
                                                     
                                                     ### Key Elements
                                                     - **Sidebar Menu**: Located on the left side, it contains options such as "API" and "Script editing." The "API" option is highlighted with a red rectangle and an arrow pointing towards it, indicating its selection status.
                                                     - **Tab Header**: "API" is displayed at the top of the content area, enclosed within a red rectangle.
                                                     - **Content Area**: The right side displays settings related to API scripting. It includes fields like "External Editor," "External Editor Directory," and "File-Backed Scripts." There are buttons labeled "Select" and "Reset" next to some fields.
                                                     - **Footer Buttons**: At the bottom, there are two buttons labeled "Cancel" and "Apply."
                                                     
                                                     ### Visual Flow / Relationships
                                                     The most prominent visual element is the "API" tab header, which is highlighted. The interface follows a linear reading order from left to right and top to bottom. The "API" tab is the focal point, drawing attention due to its highlighted state and the red arrow pointing to it.
                                                     
                                                     </details>
                                                     
                                                     <p></p>
                                                     
                                                     
- Enable **horizon/portrait\_camera**. <details>
                                       <summary>'Script settings toggle horizon/portrait_cameras</summary>
                                       
                                       <p></p>
                                       
                                       ['Script settings toggle horizon/portrait_cameras](../../image_data/6a5532055e5ca44e4b4c84f6f0711ab7da60acc236b4e5359b07b5ff1c6f4d6b.md)
                                       
                                       ### Overview
                                       This image depicts a settings interface titled "Script Settings." It has a sidebar menu on the left with options labeled "API," "Console," and "Script editing." The main content area displays API-related settings, specifically showing an API version number and a toggle switch next to a text field containing a camera configuration string.
                                       
                                       ### Key Elements
                                       - **Sidebar Menu**: Located on the left side, with options "API," "Console," and "Script editing." The "API" option is highlighted.
                                       - **Main Content Area**: Positioned centrally, displaying API-related settings.
                                         - **API Version**: Located at the top right, showing "2.0.0."
                                         - **Camera Configuration Text Field**: A red-highlighted text field containing the text `horizon/portrait_camera`.
                                         - **Toggle Switch**: Positioned to the right of the text field, indicating a selection status.
                                       - **Buttons**: At the bottom, there are two buttons labeled "Cancel" and "Apply."
                                       
                                       ### Visual Flow / Relationships
                                       The most prominent visual element is the red-highlighted text field, drawing attention to the camera configuration setting. The toggle switch is adjacent to this field, suggesting that selecting the toggle changes the camera configuration. The "API" option in the sidebar is highlighted, indicating the current focus of the interface.
                                       
                                       </details>
                                       
                                       <p></p>
                                       
                                       
- Click **Apply** to save the changes. <details>
                                       <summary>'Script settings toggle horizon/portrait_cameras</summary>
                                       
                                       <p></p>
                                       
                                       ['Script settings toggle horizon/portrait_cameras](../../image_data/c8448b30dbb57f86403843e8f250c5bfbbbe69d2ef19f8c876df2146c26846ef.md)
                                       
                                       ### Overview
                                       This image depicts a user interface element within a software application, specifically a settings dialog box titled "Script Settings." The interface includes a sidebar with options ("API," "Console," "Script editing") and a main content area displaying API-related settings. A large red arrow points towards a prominent blue button labeled "Apply."
                                       
                                       ### Key Elements
                                       - **Sidebar (Left Panel)**: Contains three options listed vertically: "API," "Console," and "Script editing." Each option has a small icon next to it.
                                       - **Main Content Area**: Displays API-related settings, including "API Version" set to "2.0.0." There is a blurred-out text area below this setting.
                                       - **Red Arrow**: Positioned centrally, pointing downward towards the "Apply" button.
                                       - **Blue Button (Apply)**: Located at the bottom right of the main content area, outlined in red for emphasis. The button is blue with white text that reads "Apply."
                                       
                                       ### Visual Flow / Relationships
                                       The most prominent visual element is the red arrow, which draws attention to the "Apply" button. The layout follows a standard form-filling pattern, with the "Apply" button being the final step after making changes. The red arrow acts as a visual guide, directing the user's focus to the action required.
                                       
                                       </details>
                                       
                                       <p></p>
                                       
                                       

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