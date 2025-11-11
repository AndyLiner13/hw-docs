Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/noninteractive-custom-ui-screen-overlay

# Non-interactive custom UI screen overlay

The custom UI API allows you to create non-interactive screen overlays on both the desktop and VR platforms. This feature empowers creators to exhibit non-interactive overlay elements such as health bars or ammo counts. As creators, however, you may observe that the screen overlay experiences vary between platforms.

This topic explains the expected behaviors and challenges when developing screen overlay across platforms. Additionally, several use cases of building a screen overlay on web and mobile are shown. The topic concludes by outlining the expectation when screen overlays for the desktop are applied to VR.

## Expected behavior

When developing your custom UI screen overlay, certain interaction behavior is known across mobile and VR platforms. Screen overlays that are developed for the desktop may look different on VR. The following section offers the recommendation on how to best approach creating screen overlays across platforms.

### Interaction

If a button or a pressable component is placed within a screen overlay view and the cursor is released by any means, interaction with these components is still not possible. This behavior is consistent across mobile and VR platforms.

### Screen mode & VR

When you create an elaborate screen overlay for 2D platforms (i.e. mobile or desktop) and attempt to adapt it for VR, although the UI renders correctly without any issues, the layout experience doesn’t match that of 2D platforms. This is because VR lacks a specific screen dimension for [laying out custom UI views](/horizon-worlds/reference/2.0.0/ui_layoutstyle).

Through experimentation a canvas is created for VR, measuring 800px by 600px with a depth of 1 unit, which acts as a transparent overlay. This enables you to build or integrate any custom UI view into this canvas, allowing you to customize it according to your design needs and requirements.

## Build a screen overlay on web and mobile

Based on the above information, you’ll notice that the screen overlay feature is more flexible on web and mobile than VR. You will start building a screen overlay on web and mobile first.

### Create a screen overlay from scratch

- When you [create a UI with the **Custom UI** gizmo](/hw-docs/desktop-editor/custom-ui/creating-a-custom-ui-panel#step-1-create-a-custom-ui-gizmo), find the [**Display Mode** property](/hw-docs/desktop-editor/custom-ui/custom-ui-panel-configurations) under **Visual & Interaction** on the **Properties** panel.

  ![The Visual and Interaction section on the Properties panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487875307_686297440574877_2174095531124152284_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=QNrLdzG19VsQ7kNvwHSFUBg&_nc_oc=Adn-ZhlTSDj0AqeWZ7E00aKnupzOIW1NODl50Maf52rPIMVzSh1uGr-xFlLAdMsomqY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=69te8wufC6PbPHjYuqSpUA&oh=00_AfiDiGW_4kwHogGo_rVM-iULe9-_E6dAPKEUig1kuXfaWQ&oe=692BE008)
- Switch the **Display Mode** to **Screen Overlay**.
- Next, write Typescript code to craft a screen overlay UI that aligns with your design.
- Ensure that the outermost view container includes the [position: “absolute” property](/horizon-worlds/reference/2.0.0/ui_layoutstyle).
- Be aware that the panelHeight and panelWidth properties of the [UIComponent class](/horizon-worlds/reference/2.0.0/ui_uicomponent) are not applicable when creating a screen overlay custom UI. Instead, use CSS styling to define the height and width of the view. The remaining part of the full screen will be completely transparent.
- Finally, customize the layout of the view container. For example, you can set `left: 0` and `bottom: 0`.

Pseudocode:

```vs
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

* The panelHeight and panelWidth properties of the [UIComponent](/horizon-worlds/reference/2.0.0/ui_uicomponent) class are not applicable in a screen overlay custom UI.
* On the web and mobile platforms, the entire full screen is used as a canvas. This necessitates the defining of the custom UI height and width using CSS styling.
* Due to the above two points, `position: "absolute"` is required in the component-level view container.

**Note**: Converting a spatial UI to a screen overlay UI involves a significant amount of changes. The recommendation is to construct a new screen overlay from scratch using the guidance provided in the earlier section.

### Create multiple screen overlays

You also have the capability to display multiple screen overlays simultaneously. By incorporating various UI widgets into your world and associating each with well-crafted Typescript, you can ensure that all custom UI screen overlays are displayed correctly on the screen.

Assume you already have one screen overlay from following the previous section, create a new screen overlay with a different script attached.

Pseudocode:

```vs
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

![Two examples of screen overlays](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487698781_686297437241544_7890064344951409983_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=207vwRiqI9gQ7kNvwH6aiMG&_nc_oc=AdkpWI4KqCuXd1q2huGu5QOxLi2VoDtfXruV1kTp64s9MIRf5ltLtmayg4Kb0kL9rk0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=69te8wufC6PbPHjYuqSpUA&oh=00_Afg4uiJ_CqsK4M8cZveSwclfM37ZNF3ZeYlgYi-Uot3HRA&oe=692BF7B4)

### Player-specific screen overlay

Similar to spatial custom UI, you’re using the `Binding` class to display content for players which means you can display different screen overlay content to different for each player. Custom UI screen overlay also fully supports [player-specific UI](/hw-docs/desktop-editor/custom-ui/playerspecific-custom-ui/).

## Control visibility of screen overlay

### Entity-level visibility (single screen overlay)

The visibility of the screen overlay can be managed through the entity’s visible property. This can be achieved in two ways:

- Switch on the **Visible** property under **Behavior** in the **Properties** panel.
- Utilize the [TypeScript APIs](/horizon-worlds/reference/2.0.0/core_entity#properties):
  * `uiEntity.visible.set`
  * `uiEntity.setVisibilityForPlayers`

## Screen overlay experiences in VR

If you’ve adhered to the steps outlined above, the screen overlays you’ve developed will automatically be applied to VR when you enter the testing world with a VR device. However, there’s an important point to note here.

There isn’t a specific dimension that you can use to properly layout the screen overlays. For web and mobile, the full screen dimension can be utilized as a canvas for arranging the screen overlays. In VR, you’ve set up a canvas with dimensions of 800px in width and 600px in height, which acts as a transparent overlay. The depth of this canvas is 1 unit from the avatar. This enables you to build or integrate any custom UI view into this canvas, customized to your specific design needs and requirements.

In certain scenarios, you may observe that the UI aligns well on web and mobile platforms. However, when transitioning to the VR platform, it may not appear as visually appealing as it does in 2D. It might be challenging to accommodate all the use cases you wish to layout in VR.

## What’s next?

Try the tutorial world on [non-interactive screen overlay](/hw-docs/tutorial-worlds/custom-ui-examples-tutorial/station-10-timer-and-build-info-overlays).