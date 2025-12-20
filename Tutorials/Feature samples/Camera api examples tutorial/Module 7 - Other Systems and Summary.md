Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/camera-api-examples-tutorial/module-7-other-systems-and-summary

# Module 7 - Other Systems and Summary

## Summary

In this tutorial world, you have explored the different modes of the player’s camera through individual Player Camera entities, each of which is basically a physical reference point with an attached `PlayerCamera.ts` script.

* The `PlayerCamera.ts` script consumes events delivered by other entities or triggers in the world, including in the event message data on the camera mode and other properties to configure.
* This script responds to these events by executing the appropriate method within the script to perform the camera switch, retaining the previous camera mode for reverting after the action is completed.

**Tip**: Make `PlayerCamera.ts` your own! Bring this script into your world and begin exploring how it can work for you. Remember to create the object reference and attach the script and to send the appropriate PlayerCamera events, which are defined at the top of the script.

This tutorial featured the stations to demonstrate the following camera modes and use cases:

| Camera Mode | Use Case |
| --- | --- |
| First Person | Shooting a weapon at a target |
| Third Person | Close quarters combat |
| Orbit | Explore this interesting location |
| Fixed Camera | Spectator Mode |
| Fixed Camera with camera movements | Cut scenes |
| Attach Camera | Security Cameras |
| Follow Camera | Chase Sequences |

`PlayerCameraManager.ts` is used to safely deploy cameras for each player entering the world. This script is necessary to ensure that the non-sequential execution of scripts at startup does not interfere with camera assignment.

## Other Systems

This tutorial world also includes the following mini-systems as a bonus.

### Instructions System

Throughout the world, you can see posters like the following:

<details>
<summary>Yellow Post-It used for instructions</summary>

<p></p>

[Yellow Post-It used for instructions](../../../image_data/ac22ad3a8eee1a2260c70b27b4f441f09ebc5967d05b8e9d0990f261acf6be2c.md)

### Overview
The image depicts a user interface element that appears to be part of a game or application tutorial. It features a pop-up window with information about the third-person camera setting. The background shows a virtual environment with a character model holding a sword, and the surrounding area has a grid-like floor and walls.

### Key Elements
- **Pop-up Window**: A rectangular box with rounded corners, containing text information.
  - **Visual description**: Light yellow background with black text.
  - **Location**: Centered in the image.
  - **Contents**: Contains the title "Third-Person Camera" followed by a paragraph explaining the functionality and implications of the third-person camera.
  - **Visual styling**: No borders, slightly raised shadow effect.
- **Character Model**: A figure holding a sword, located on the left side of the image.
  - **Visual description**: Brown outfit with a sword attached to the back.
  - **Location**: Left side of the image.
  - **Contents**: The character is static, with no additional text or icons.
  - **Visual styling**: Simple, cartoonish design.
- **Background**: A virtual environment with a grid floor and yellow walls.
  - **Visual description**: Grid pattern on the floor, yellow walls with a blue ceiling.
  - **Location**: Surrounding the pop-up window and character model.
  - **Contents**: No additional text or icons.
  - **Visual styling**: Flat, simple design typical of a game environment.
- **UI Elements**: Located at the top left and right corners.
  - **Top Left**: A circular icon with vertical lines and the word "TAB" below it.
  - **Top Right**: Icons for voice input ("V") and closing the window ("X").

### Visual Flow / Relationships
- **Most Prominent Element**: The pop-up window with the instructional text.
- **Arrows/Connectors**: None.
- **Spatial Relationships**: The pop-up window is the focal point, with the character model and background serving as contextual elements. The UI elements provide interaction options.

</details>

<p></p>



In the Hierarchy panel, all of these posters are grouped under the Instructions node. Each interface includes:

* A yellow post-it Unity Asset Bundle

**Tip**: Create an asset from one of these post-its to make it available for use in your world.

**Tip**: You can apply a different color to the asset by selecting it and applying a different texture.

* A custom UI
  + This asset is positioned so that its surface displays on the surface of the post-it.
  + This custom UI has a simple script for it.
  + This script property `name` defines the instructional text set to apply to the custom UI/post-it.
  + The `name` property is used to reference the string to apply from the `InstructionConsts.ts` file, which is a set of key-value pairs:

```
export const InstructionConsts = {
    'SWORD': "Third-Person Camera\n\nThis sword uses the third-person camera. \n\nThe third-person camera is enabled by default, and is good for building the relationship between the player and their avatar, and for showing off the avatar's actions, cosmetic items and wearables.\n\nThird-person camera can make it difficult for players to see small objects and text in front of them, and can be awkward in small spaces.",
    'GUN': "First-Person Camera\n\nThis blunderbuss uses the first-person camera.\n\nThe first-person camera is good for building the relationship between the player and the environment, for precise aiming and for seeing small objects and text in front of the player.\n\nFirst-person camera can make it difficult for players to see what is around them, and to avoid obstacles or jump over gaps.",
    'ORBIT': "Orbit Camera\n\nThis area triggers an orbit camera.\n\nThe orbit camera is good for showing off the environment, for giving players a sense of scale, traversing tricky terrain and taking selfies!\n\nOrbit camera can make it difficult for players to aim projectile weapons, see small objects and text in front of them, and can be awkward in small spaces.",
    'FIXED': "Fixed Camera\n\nThe fixed-camera decouples the player's camera from their avatar.\n\nThe fixed camera is good for giving player's an unencumbered view of the world. It's great for spectating, cut-scenes and for non-avatar focused gameplay.\n\nMake sure that players can easily return the camera to their avatar if they need to, and that they can't get stuck in the fixed camera.",
    'ATTACH': "Attach Camera\n\nPress the button to attach the camera to the moving block.\n\nThe attach camera target can be set to any entity or player in the world, including NPCs.\n\nUse the attach camera to enable players to inhabit a moving object, spectate another player or offer them an alternative perspective on the world.\n\n",
    'PAN': "Pan Camera\n\nThis area triggers a side-scrolling style camera movement, where the camera pans horizontally to reveal more of the environment.\n\nThe pan camera is good for enacting side-scrolling and top-down views that can be used to create a dynamic and engaging experience for your players.\n\nTry adjusting the vector position within the trigger properties to experiment with different view angles.",
    'ANGLES': "Pan Angles\n\nTry to input these positions into the property panel of a Pan Trigger.\n\nSide Scroll: (10, 0, 0)\nTop Down: (0, 10, 0)\n\n\nNote that negating any coordinate value will flip the camera to the opposite side.\n\nAdditionally, increasing or decreasing the value of the vector will move the camera closer to or further away from the player.",
    'FOLLOW': "Follow Camera\n\nThis area triggers a follow camera that tracks the player's movement.\n\nThe follow camera is good for creating a dynamic third-person perspective that maintains a consistent view of the player.\n\nYou can adjust properties like distance, rotation speed, and vertical offset to fine-tune the camera behavior. Consider enabling collision detection in tight spaces to prevent the camera from clipping through walls."
}
```

### Combat System

The `Weapon.ts` script contains a rudimentary system for grabbing and swinging a weapon in hand.

**Note**: It does not contain code to manage collision, damage, or any other standard aspect of combat. For a more robust example, please see the [Chop N Pop Sample World](../../Genre%20samples/Chop%20N%20Pop%20sample%20world/Module%201%20-%20Setup.md).

### Gun System

The `Gun.ts` script contains a simple gun management system for firing a gun.

**Note**: It does not contain code to manage collisions. For a better example, see [Simple Shooting Mechanics Tutorial World](../Simple%20shooting%20mechanics%20tutorial/Module%201%20-%20Setup.md).