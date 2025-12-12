Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/interactive-custom-ui-screen-overlay

# Interactive Custom UI Screen Overlay

## Overview

An interactive screen overlay is a type of screen overlay that renders in screen-space on top of the world, just like a non-interactive screen overlay does, while allowing players to interact with UI elements within the overlay such as buttons, menu options, and more.

Interactive, blocking screen overlays are designed to be used for situations that require the player’s immediate focus and attention. This means they are great for things like in-game shops, tutorials, and other UI that require the player to stop what they are doing and interact with the overlay before they can progress or continue playing.

By design, interactive, blocking screen overlays prevent gameplay-related inputs in order to allow the player to focus fully on the UI, which means this feature is not suitable for creating customized on-screen controls.

<details>
<summary>interactive overlay.gif</summary>

<p></p>

[interactive overlay.gif](../../image_data/9f321c6119a8733c385b28c66b1e7719d71deb1bfac258bffb1d56209da69aa6.md)

### Overview
The image depicts a virtual environment viewed from behind a character standing on a grid floor. The character is facing away from the viewer, looking towards a vast, open sky. The interface includes various control buttons and icons at the top corners of the screen.

### Key Elements
- **Character**: A bald figure wearing a futuristic outfit with orange and black accents. The outfit has a high collar and gloves. The character stands on a tiled floor with a grid pattern.
- **Background**: A gradient sky transitioning from light blue at the horizon to a lighter shade higher up, suggesting a clear day.
- **Control Buttons**: Located in the top-left corner, there are two buttons labeled "TAB" and "ESC". In the top-right corner, there are three circular icons labeled "V", "N", and "B".
- **Interface Icons**: Above the control buttons, there are additional icons resembling a microphone, a camera, and a user profile.

### Visual Flow / Relationships
The most prominent visual element is the character, as the viewer's perspective is from behind them. The grid floor and the vast sky create a sense of openness. The control buttons and interface icons are arranged symmetrically around the top edges of the screen, providing easy access to navigation and settings.

</details>

<p></p>



Interactive, non-blocking screen overlays are designed to be used as onscreen inputs that can be fully customized in size and appearance. Interactive, non-blocking screen overlays do not prevent gameplay-related inputs, and can be used in combination with the Custom Input API to create custom on-screen controls.

## Getting Started

When you set the Display mode property of a Custom UI panel to **Screen Overlay**, a property named Input mode appears. You can use this property to switch the mode of the panel from **No Interaction** to **Interactive, Blocking** or **Interactive, Non-Blocking**, which allows the overlay to receive input from the current input pointer (such as a mouse, touchscreen, or VR controller).

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/39a666c70f12edba4a23a7e844466754af0f91f4e66a1e37026c3ed8880d6b9c.md)

### Overview
This image depicts a user interface element showing a dropdown menu within a settings panel. The dropdown is open, revealing options related to interaction modes. The interface has a dark theme with a focus on interactive elements.

### Key Elements
- **Dropdown Menu**: Located centrally, with a black background and white text. Contains three options: "No Interaction," "Interactive, Blocking," and "Interactive, Non Blocking." The "Interactive, Blocking" option is highlighted with a checkmark.
- **Menu Header**: Positioned above the dropdown, labeled "Interactive, Blocking" with a dropdown arrow indicating more options.
- **Display Mode Label**: To the left of the dropdown, reads "Display mode" with a dropdown arrow next to it, currently set to "Screen Overlay."
- **Input Mode Label**: Below the display mode, reads "Input mode" with a dropdown arrow next to it, currently set to "Interactive, Blocking."
- **Mipmap Label**: Below the input mode, partially visible, reads "Mipmap."

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu itself, as it is the focal point of the image. The options within the dropdown are arranged vertically, with the selected option highlighted. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from left to right and then down the list of options.

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