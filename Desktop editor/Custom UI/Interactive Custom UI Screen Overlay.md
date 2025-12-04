Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/interactive-custom-ui-screen-overlay

# Interactive Custom UI Screen Overlay

## Overview

An interactive screen overlay is a type of screen overlay that renders in screen-space on top of the world, just like a non-interactive screen overlay does, while allowing players to interact with UI elements within the overlay such as buttons, menu options, and more.

Interactive, blocking screen overlays are designed to be used for situations that require the player’s immediate focus and attention. This means they are great for things like in-game shops, tutorials, and other UI that require the player to stop what they are doing and interact with the overlay before they can progress or continue playing.

By design, interactive, blocking screen overlays prevent gameplay-related inputs in order to allow the player to focus fully on the UI, which means this feature is not suitable for creating customized on-screen controls.

![interactive overlay.gif](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452910563_512510387953584_8404522134663938617_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=hXIr7emP3e8Q7kNvwHLznwY&_nc_oc=Adlvak5ll7WLqBLTAOkZzwk6bmr3fzMSlCGFLVUIHmqzef79VpWwvdS43wkCYcmdKOE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=wrTF_qgpMMvqWI9ZjDx_ew&oh=00_AflDz0_fiO8Z4ZmfL941rR7aBpPTaair80ThSihWwCPZCA&oe=694BCFDD)

Interactive, non-blocking screen overlays are designed to be used as onscreen inputs that can be fully customized in size and appearance. Interactive, non-blocking screen overlays do not prevent gameplay-related inputs, and can be used in combination with the Custom Input API to create custom on-screen controls.

## Getting Started

When you set the Display mode property of a Custom UI panel to **Screen Overlay**, a property named Input mode appears. You can use this property to switch the mode of the panel from **No Interaction** to **Interactive, Blocking** or **Interactive, Non-Blocking**, which allows the overlay to receive input from the current input pointer (such as a mouse, touchscreen, or VR controller).

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/469896061_606730451864910_612662587024664924_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=7Rfc1dD3urEQ7kNvwEvhe_E&_nc_oc=AdlZkZUdIknb8k5hg8gCosskoGaQZ9mAa31mn8uDkIDifnlrJzt_pX_UzjyRvB65Xuo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=wrTF_qgpMMvqWI9ZjDx_ew&oh=00_Afmj4gkFbOiaDzIR4ffKNR_RjNeeeX0u9eOsS9Q7lg4wEA&oe=694BC379)

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

* On-screen player controls are still visible (you can disable the default onscreen buttons for mobile players with the [Custom Input API](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20Input%20API.md))
* Player can interact with any panel marked as **Interactive, Non-Blocking** using touch input

#### VR

* The interactive, non-blocking overlay is not displayed for VR players and the player controls such as movement are not locked