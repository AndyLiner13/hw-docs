Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/avatar-scaling-api

# Avatar scaling API

This topic describes the `avatarScale` property in the [Player](../../Reference/core/Classes/Player.md) class, which is used to scale avatars. Use cases of this API include creating asymmetrical experiences where some players are larger than others, as well as dynamic changes of players during gameplay.

In the following image of [Kaiju City Showdown](https://horizon.meta.com/world/1279402616789539), the Kaiju player is larger than the rest of players using the API.

<details>
<summary>The Kaiju player is larger than the rest of the players</summary>

<p></p>

[The Kaiju player is larger than the rest of the players](../../image_data/d61d1f882252f878c50c46e0e0838ee648655a971477307c64f248b7b50bb243.md)

### Overview
This image depicts a scene from a video game where a player character is engaged in combat with a large, green dinosaur-like creature. The player character is equipped with futuristic armor and is holding a weapon that emits a blue beam towards the creature. The game interface includes various controls and indicators at the edges of the screen.

### Key Elements
- **Player Character**: Positioned on the left side of the image, wearing white and blue armor with a white cap and sunglasses. The character is facing away from the viewer, aiming a weapon.
- **Weapon**: A futuristic-looking gun held by the player character, emitting a blue beam towards the creature.
- **Dinosaur Creature**: A large, green, dinosaur-like creature with sharp teeth and claws. It is positioned on the right side of the image, facing the player character.
- **Health Bar**: Located at the top of the image, showing a health status with a gradient bar indicating remaining health.
- **Control Buttons**: Various control buttons are displayed around the edges of the screen, including movement controls ("TAB", "ESC", "LMB", "R", "F") and action buttons ("SPACE").
- **Game Interface Elements**: Icons for volume control, mute, and other game settings are located in the top corners.

### Visual Flow / Relationships
The player character is the focal point, with the dinosaur creature as the secondary subject. The health bar at the top indicates the ongoing battle scenario. The control buttons are arranged around the edges for easy access during gameplay.

</details>

<p></p>



You can now unlock new content on the platform. The API enables creators to incorporate mechanics such as platform jumping and puzzle games that rely on scaling avatars up or down in order to progress in the game. Additionally, you can use avatar scaling as part of a progression system for prestige or reputation.

The following image shows the avatar at the beginning of the game.

<details>
<summary>The avatar before it's scaled down</summary>

<p></p>

[The avatar before it's scaled down](../../image_data/f883cc0508106d394f1a2a1b348a013fd19dcc55f0e12aad478e6d1e230efb55.md)

### Overview
The image depicts a virtual environment viewed from behind a character standing on a tiled floor. The scene includes a cityscape in the distance, a body of water, and a mountainous landscape under a gradient sky transitioning from yellow to blue. There are user interface elements at the top and bottom of the screen.

### Key Elements
- **Character**: A figure wearing a black T-shirt, dark pants, and white shoes stands facing away from the viewer. The character has short hair.
- **Background**: 
  - **Cityscape**: Silhouettes of buildings are visible in the far distance.
  - **Water**: A calm body of water stretches across the middle ground.
  - **Mountain**: A mountain range is seen on the right side of the image.
  - **Sky**: The sky is a gradient of yellow to blue, with scattered clouds.
- **User Interface**:
  - **Top Left**: Icons for menu, pause, and tabulation escape are visible.
  - **Top Right**: Icons for voice chat, volume control, and another unidentifiable icon are present.
  - **Bottom Left**: A compass icon and a magnifying glass icon are located.
  - **Bottom Right**: An arrow icon pointing up and down is visible.

### Visual Flow / Relationships
The most prominent visual is the character standing in the center of the tiled floor. The background elements are arranged horizontally, with the cityscape on the left, the water in the middle, and the mountain on the right. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from left to right.

</details>

<p></p>



The following image shows the avatar is scaled down to jump through the doughnut hole.

<details>
<summary>The avatar scaled down to fit through the doughnut hole</summary>

<p></p>

[The avatar scaled down to fit through the doughnut hole](../../image_data/ccef3b92024061b5f3fe6b7c9a7f8a1b3ae888fc40feb34e886b1879e0438872.md)

### Overview
The image depicts a virtual environment where a character is running towards a large, white, donut-shaped object. The setting appears to be an open, flat area with a cityscape in the background under a sunset sky. There are user interface elements at the top and bottom corners of the screen.

### Key Elements
- **Character**: A person wearing a black shirt and dark pants with a white stripe, running towards the donut shape. The character is facing away from the viewer.
- **Donut Shape**: A large, white, donut-shaped object with a hollow center, positioned centrally in the scene.
- **Background**: Features a city skyline with buildings silhouetted against a gradient sky transitioning from yellow to orange. There are also hills and a small castle-like structure in the distance.
- **UI Elements**: At the top left, there are icons labeled "TABULACION ESC" and "II". At the top right, there are icons resembling a microphone, a robot, and a letter "B". At the bottom left, there is a circular icon with a "Q" inside, and at the bottom right, there is a circular icon with a "E" inside.

### Visual Flow / Relationships
The character is the focal point, running towards the donut shape. The background elements provide context but are less prominent. The UI elements are static and do not interact with the scene.

</details>

<p></p>



## Prerequisites

* [TypeScript API version 2.0.0 or later](../Upgrade%20World%20to%20TypeScript%20API%20v2.0.0.md).
* The API is available in [horizon/core/player](../../Reference/core/Classes/Player.md).
* [Enable the API module](../Upgrade%20World%20to%20TypeScript%20API%20v2.0.0.md#upgrading-your-world).

## Limitations

The recommended range for scaling avatars is between 0.05 and 50. Values outside of this range may cause unexpected behavior due to engine limitations.

## Best practices

The recommendation is to change the scale when the avatar teleports to another location or when the screen is in transition. Avoid changing the size too often.

## Sample code

The following sample shows you how to use the `avatarScale` property in the [Player](../../Reference/core/Classes/Player.md) class. When the user uses the [right grip action](../../Reference/core/Enumerations/PlayerInputAction.md), the player avatar scale will be increased. When the user uses the [left grip action](../../Reference/core/Enumerations/PlayerInputAction.md), the avatar scale will be decreased. Keep in the mind that the example only iterates between 3 different scales, which are 10%, 100%, and 500%. Additionally, the sample also uses custom input APIs, learn more in the [developer guide](../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20Input%20API.md) and the [API reference guide](../../Reference/core/Classes/PlayerControls.md).

```
import * as hz from 'horizon/core';

class SetAvatarScale extends hz.Component<typeof SetAvatarScale> {
  static propsDefinition = {};

  growInput?: hz.PlayerInput;
  shrinkInput?: hz.PlayerInput;

  avatarScales: number[] = [0.1, 1, 5];
  avatarScaleIndex: number = 1;

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player) => {
      this.entity.owner.set(player);
    });

    if (this.entity.owner.get() == this.world.getServerPlayer()) return;

    this.growInput = hz.PlayerControls.connectLocalInput(
      hz.PlayerInputAction.RightGrip,
      hz.ButtonIcon.Expand, this);

    this.growInput.registerCallback((_, pressed) => {
      if (pressed) this.changeAvatarScale(1);
    });

    this.shrinkInput = hz.PlayerControls.connectLocalInput(
      hz.PlayerInputAction.LeftGrip,
      hz.ButtonIcon.Contract, this);

    this.shrinkInput.registerCallback((_, pressed) => {
      if (pressed) this.changeAvatarScale(-1);
    });
  }

  changeAvatarScale(increment: number) {
    let player = this.entity.owner.get();
    this.avatarScaleIndex = Math.min(
      Math.max(0, this.avatarScaleIndex + increment),
      this.avatarScales.length - 1);
    player.avatarScale.set(this.avatarScales[this.avatarScaleIndex]);
  }
}

hz.Component.register(SetAvatarScale);
```

## What’s next?

Try more tutorials and follow examples in these topics:

* [Scripting](../Scripting%20using%20TypeScript.md)
* [Tutorial worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game)