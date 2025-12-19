Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/noninteractive-custom-ui-screen-overlay

# Non-interactive custom UI screen overlay

The custom UI API allows you to create non-interactive screen overlays on both the desktop and VR platforms. This feature empowers creators to exhibit non-interactive overlay elements such as health bars or ammo counts. As creators, however, you may observe that the screen overlay experiences vary between platforms.

This topic explains the expected behaviors and challenges when developing screen overlay across platforms. Additionally, several use cases of building a screen overlay on web and mobile are shown. The topic concludes by outlining the expectation when screen overlays for the desktop are applied to VR.

## Expected behavior

When developing your custom UI screen overlay, certain interaction behavior is known across mobile and VR platforms. Screen overlays that are developed for the desktop may look different on VR. The following section offers the recommendation on how to best approach creating screen overlays across platforms.

### Interaction

If a button or a pressable component is placed within a screen overlay view and the cursor is released by any means, interaction with these components is still not possible. This behavior is consistent across mobile and VR platforms.

### Screen mode & VR

When you create an elaborate screen overlay for 2D platforms (i.e. mobile or desktop) and attempt to adapt it for VR, although the UI renders correctly without any issues, the layout experience doesn’t match that of 2D platforms. This is because VR lacks a specific screen dimension for [laying out custom UI views](../../Reference/ui/Type%20Aliases/LayoutStyle.md).

Through experimentation a canvas is created for VR, measuring 800px by 600px with a depth of 1 unit, which acts as a transparent overlay. This enables you to build or integrate any custom UI view into this canvas, allowing you to customize it according to your design needs and requirements.

## Build a screen overlay on web and mobile

Based on the above information, you’ll notice that the screen overlay feature is more flexible on web and mobile than VR. You will start building a screen overlay on web and mobile first.

### Create a screen overlay from scratch

- When you [create a UI with the **Custom UI** gizmo](Create%20a%20custom%20UI%20panel.md#step-1-create-a-custom-ui-gizmo), find the [**Display Mode** property](Custom%20UI%20panel%20configurations.md) under **Visual & Interaction** on the **Properties** panel.

  <details>
  <summary>The Visual and Interaction section on the Properties panel</summary>
  
  <p></p>
  
  [The Visual and Interaction section on the Properties panel](../../image_data/f529f23ad94653f398d09c5323b1f1483717b71e1700911660ece03aaf7d93bf.md)
  
  ### Overview
  This image depicts a settings interface with multiple configuration options grouped under different headers. The interface has a dark theme with toggle switches and input fields for adjusting settings.
  
  ### Key Elements
  - **Header "Visual & Interaction"**: Located at the top, this section contains a dropdown menu labeled "Display Mode" set to "Spatial." Below it are toggles for "Raycast" and "Mipmap," both currently off.
  - **Input Field "Raycast distance"**: Positioned below the "Raycast" toggle, it shows the value "3."
  - **Toggle "Mipmap"**: Located next to the "Raycast distance" field, it is off.
  - **Header "Web and Mobile"**: Below the previous section, this header contains a toggle switch labeled "Focus prompt," which is on. Next to it is an input field labeled "Focus prompt distance" showing the value "2.5."
  - **Header "Behavior"**: At the bottom, this section includes a toggle switch labeled "Visible," which is on.
  
  ### Visual Flow / Relationships
  The interface is organized into distinct sections, each with its own header. The toggles and input fields are arranged vertically within each section. The toggles have a blue background when active, while the input fields show the current values clearly.
  
  </details>
  
  <p></p>
  
  
- Switch the **Display Mode** to **Screen Overlay**.
- Next, write Typescript code to craft a screen overlay UI that aligns with your design.
- Ensure that the outermost view container includes the [position: “absolute” property](../../Reference/ui/Type%20Aliases/LayoutStyle.md).
- Be aware that the panelHeight and panelWidth properties of the [UIComponent class](../../Reference/ui/Abstract%20Classes/UIComponent.md) are not applicable when creating a screen overlay custom UI. Instead, use CSS styling to define the height and width of the view. The remaining part of the full screen will be completely transparent.
- Finally, customize the layout of the view container. For example, you can set `left: 0` and `bottom: 0`.

Pseudocode:

```
class ScreenOverlay extends UIComponent {
  static propsDefinition = {};
  initializeUI() {
    return View({
      children: ...,
      style: {
        position: 'absolute',
        height: 200,
        width: 300,
        backgroundColor: '#220022',
        left: 0,
        bottom: 0,
      },
    });
  }
}
UIComponent.register(ScreenOverlay);
```

### Have an existing custom UI spatial panel in your test world

If you already have custom UI panels in your testing world, notice the **Display Mode** property in the configuration panel under **Visual & Interaction**. By default, this value is set to **Spatial**.

While it’s possible to change this property to **Screen Overlay** to transform a spatial UI into a screen overlay, it’s not the recommended approach for several reasons:

* The panelHeight and panelWidth properties of the [UIComponent](../../Reference/ui/Abstract%20Classes/UIComponent.md) class are not applicable in a screen overlay custom UI.
* On the web and mobile platforms, the entire full screen is used as a canvas. This necessitates the defining of the custom UI height and width using CSS styling.
* Due to the above two points, `position: "absolute"` is required in the component-level view container.

**Note**: Converting a spatial UI to a screen overlay UI involves a significant amount of changes. The recommendation is to construct a new screen overlay from scratch using the guidance provided in the earlier section.

### Create multiple screen overlays

You also have the capability to display multiple screen overlays simultaneously. By incorporating various UI widgets into your world and associating each with well-crafted Typescript, you can ensure that all custom UI screen overlays are displayed correctly on the screen.

Assume you already have one screen overlay from following the previous section, create a new screen overlay with a different script attached.

Pseudocode:

```
class ScreenOverlay2 extends UIComponent {
  initializeUI() {
    return View({
      children: ...,
      style: {
        position: 'absolute',
        height: 200,
        width: 300,
        backgroundColor: '#220022',
        right: 0,
        bottom: 0,
      },
    });
  }
}
```

Now that you have created these two screen overlays, you can see two UI layouts as shown in this screenshot. The content varies depending on your TypeScript code.

<details>
<summary>Two examples of screen overlays</summary>

<p></p>

[Two examples of screen overlays](../../image_data/07bc67d8eb06eaa1bab0e81b6084aaef02db567a5ff3dee3832b61cc3d55c189.md)

### Overview
The image depicts a virtual environment viewed from behind a character standing on a grid floor. The character has long dark hair and is wearing a white coat over a gray dress. The scene is set against a gradient blue sky. There are two overlays labeled "OVERLAY 1" and "OVERLAY 2" at the bottom corners, each containing red and green buttons labeled "Red" and "Green," respectively. The top left corner features a menu icon and an "ESC" key symbol, while the top right corner includes a microphone icon and a smiley face icon.

### Key Elements
- **Character**: A 3D model of a person with long dark hair, facing away from the viewer. Wearing a white coat over a gray dress.
- **Background**: A gradient blue sky and a tiled floor with a grid pattern.
- **Overlays**: Two rectangular areas labeled "OVERLAY 1" and "OVERLAY 2" at the bottom corners. Each contains a red button labeled "Red" and a green button labeled "Green."
- **Top Icons**: A menu icon and an "ESC" key symbol in the top left corner. A microphone icon and a smiley face icon in the top right corner.

### Visual Flow / Relationships
The most prominent visual element is the character in the center. The overlays are positioned symmetrically at the bottom corners. The top icons provide interactive elements for the user.

</details>

<p></p>



### Player-specific screen overlay

Similar to spatial custom UI, you’re using the `Binding` class to display content for players which means you can display different screen overlay content to different for each player. Custom UI screen overlay also fully supports [player-specific UI](Player-Specific%20Custom%20UI.md).

## Control visibility of screen overlay

### Entity-level visibility (single screen overlay)

The visibility of the screen overlay can be managed through the entity’s visible property. This can be achieved in two ways:

- Switch on the **Visible** property under **Behavior** in the **Properties** panel.
- Utilize the [TypeScript APIs](../../Reference/core/Classes/Entity.md#properties):
  * `uiEntity.visible.set`
  * `uiEntity.setVisibilityForPlayers`

## Screen overlay experiences in VR

If you’ve adhered to the steps outlined above, the screen overlays you’ve developed will automatically be applied to VR when you enter the testing world with a VR device. However, there’s an important point to note here.

There isn’t a specific dimension that you can use to properly layout the screen overlays. For web and mobile, the full screen dimension can be utilized as a canvas for arranging the screen overlays. In VR, you’ve set up a canvas with dimensions of 800px in width and 600px in height, which acts as a transparent overlay. The depth of this canvas is 1 unit from the avatar. This enables you to build or integrate any custom UI view into this canvas, customized to your specific design needs and requirements.

In certain scenarios, you may observe that the UI aligns well on web and mobile platforms. However, when transitioning to the VR platform, it may not appear as visually appealing as it does in 2D. It might be challenging to accommodate all the use cases you wish to layout in VR.

## What’s next?

Try the tutorial world on [non-interactive screen overlay](../../Tutorials/Feature%20samples/Custom%20UI%20examples%20tutorial/Station%2010%20-%20Timer%20and%20Build%20Info%20Overlays.md).