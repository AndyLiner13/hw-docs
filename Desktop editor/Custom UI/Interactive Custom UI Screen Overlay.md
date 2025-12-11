Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/interactive-custom-ui-screen-overlay

# Interactive Custom UI Screen Overlay

## Overview

An interactive screen overlay is a type of screen overlay that renders in screen-space on top of the world, just like a non-interactive screen overlay does, while allowing players to interact with UI elements within the overlay such as buttons, menu options, and more.

Interactive, blocking screen overlays are designed to be used for situations that require the player’s immediate focus and attention. This means they are great for things like in-game shops, tutorials, and other UI that require the player to stop what they are doing and interact with the overlay before they can progress or continue playing.

By design, interactive, blocking screen overlays prevent gameplay-related inputs in order to allow the player to focus fully on the UI, which means this feature is not suitable for creating customized on-screen controls.

<details>
<summary>interactive overlay.gif</summary>

<p></p>

[interactive overlay.gif](../../../../images/output/img_20251211_030309_20251211_030309.md)

### Overview
The image depicts a virtual environment viewed from behind a character standing on a grid floor. The scene is minimalist, featuring a gradient sky transitioning from light blue at the horizon to a lighter shade above. The character is wearing a futuristic outfit with orange and black accents. The interface includes various icons and buttons in the top corners, suggesting this might be a game or simulation setup.

### Key Elements
- **Character**: A humanoid figure with a bald head, wearing a suit with orange and black patterns. The back view is shown.
- **Grid Floor**: A light gray grid pattern covers the ground, extending into the distance.
- **Gradient Sky**: A smooth transition from light blue to a lighter shade, indicating a clear sky.
- **Interface Elements**: Located in the top corners, there are icons and buttons labeled "TAB," "ESC," "V," "N," and "B." These appear to be controls or settings for the environment.

### Visual Flow / Relationships
The most prominent visual element is the character, positioned centrally in the lower half of the image. The grid floor extends horizontally across the bottom, leading the viewer’s eye towards the horizon. The gradient sky dominates the upper portion of the image, creating a sense of depth. The interface elements are static and do not interact with the scene.

</details>

<p></p>



Interactive, non-blocking screen overlays are designed to be used as onscreen inputs that can be fully customized in size and appearance. Interactive, non-blocking screen overlays do not prevent gameplay-related inputs, and can be used in combination with the Custom Input API to create custom on-screen controls.

## Getting Started

When you set the Display mode property of a Custom UI panel to **Screen Overlay**, a property named Input mode appears. You can use this property to switch the mode of the panel from **No Interaction** to **Interactive, Blocking** or **Interactive, Non-Blocking**, which allows the overlay to receive input from the current input pointer (such as a mouse, touchscreen, or VR controller).

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_030415_20251211_030415.md)

### Overview
This image depicts a user interface section within a settings or configuration menu. It includes dropdown menus and interactive options related to display modes and input modes. The layout suggests a focus on customization or configuration settings.

### Key Elements
- **Dropdown Menu (Display mode)**: Located in the top-left area, this menu has a label "Display mode" and offers a selection of options: "Screen Overlay," "Interactive, Blocking," and "Interactive, Non Blocking." The selected option is "Interactive, Blocking."
- **Dropdown Menu (Input mode)**: Positioned below the "Display mode" menu, this menu has a label "Input mode" and offers similar options as the Display mode menu but with a different selection: "No Interaction," "Interactive, Blocking," and "Interactive, Non Blocking." The selected option here is "Interactive, Blocking."
- **Toggle Label ("Mipmap")**: Located below the "Input mode" dropdown, this label indicates a setting named "Mipmap."
- **Menu Headers**: The menu headers include "Visual & Interaction," "Web ar," and "Behavior," suggesting that this section is part of a larger configuration interface.

### Visual Flow / Relationships
The visual hierarchy is clear, with the dropdown menus being the most prominent elements due to their size and placement. The options within the dropdown menus are arranged vertically, and the selected option is highlighted with a checkmark. There are no arrows or lines connecting the elements, indicating a straightforward reading order from top to bottom and left to right.

</details>

<p></p>



You can test the interaction by adding a Pressable component to your UI script.

#### Pressable pseudo code:

```
Pressable({
  children: Text({
    text: 'Close',
    style: {
      color: 'white',
    },
  }),
  onClick: () => {
    console.log('Clicked Close');
    this.entity.visible.set(false);
  },
  style: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: 36,
    justifyContent: 'center',
    width: 240,
  },
});
```

## Input behavior when using Interactive, Blocking Screen Overlay

When an interactive, blocking screen overlay is visible on the screen, the following input behavior occurs:

### Desktop

* Player controls are locked
* On-screen desktop prompts disappear
* Mouse cursor is released and can be used to interact with any panel marked as **Interactive, Blocking**

### Mobile

* On-screen player controls are hidden and the player cannot move or look around
* System controls such as PUI and Pause remain visible
* Player can interact with any panel marked as **Interactive, Blocking** using touch input

### VR

* The interactive overlay is displayed on a HUD-like panel at a comfortable distance in front of the player and is locked to the camera
* Player can interact with any panel marked as **Interactive, Blocking** using the VR controller pointer
* Player controls such as movement are *not* locked
* The overlay UI on VR will still be occluded by other objects. We cannot always render it on top, and this is because avatar (and raycasting) need to be on top of the UI, thus if the UI is on top of everything, so does avatar, which is wrong because avatar will occlude with the rest of world

## Input behaviour when using Interactive, Non-Blocking Screen Overlay

When an interactive, non-blocking screen overlay is visible on the screen, the following behaviour occurs:

### Desktop

* Interactive, non-blocking screen overlay is not currently supported for desktop players

### Mobile

* On-screen player controls are still visible (you can disable the default onscreen buttons for mobile players with the [Custom Input API](../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20Input%20API.md))
* Player can interact with any panel marked as **Interactive, Non-Blocking** using touch input

#### VR

* The interactive, non-blocking overlay is not displayed for VR players and the player controls such as movement are not locked