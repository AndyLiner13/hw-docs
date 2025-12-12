Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/avatar-poses

# Avatar Poses

# Avatar Poses

The avatar’s pose specifies the position of the avatar, and the animation-set that plays when a grabbable is held. For example, in Arena Clash, if you set the starting pistol to use the **Pistol** avatar pose, it looks like this:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/5c3233d9dbb81d0424ad8931b24d83bf87c481258a2d1d374e50465477a73e72.md)

### Overview
This image depicts a first-person view within a virtual environment, likely a video game. The scene includes a character standing in front of an information center, with various UI elements overlaid on the screen. The background features a gradient sky with clouds, suggesting a sunset or sunrise setting.

### Key Elements
- **Character**: A figure with long hair, wearing a dark hoodie and light-colored pants, holding a gun with a greenish glow. The character is facing away from the viewer.
- **Information Center**: Located on the right side of the image, with a sign that reads "INFORMATION CENTER." The center has a curved design with a glowing green light around its edges.
- **UI Elements**:
  - **Top Right Corner**: Displays health points (HP), points (PTS), time (0:00), and a score (W:0). The HP bar is filled with green squares.
  - **Left Side**: A circular icon with a large 'P' and a smaller figure, possibly indicating a player or spectator status. Below this icon, the text "Spectate Blue Raven" is visible.
  - **Center Left**: A small circular icon with a percentage symbol, likely indicating some form of progress or status.
- **Background**: A gradient sky with pink and orange hues, suggesting a sunset or sunrise. Clouds are scattered across the sky.

### Visual Flow / Relationships
The most prominent visual element is the character, as the viewer is positioned behind them. The information center is secondary but still noticeable due to its size and glowing edges. The UI elements are arranged at the top right and left sides of the screen, providing contextual information without obstructing the main view. The circular icon on the left suggests a spectator mode, while the information center likely provides game-related information.

</details>

<p></p>



When editing an entity, you can find the **Avatar Pose** property in the **More** section.

# Setting the Avatar Pose

You can choose an avatar pose according to how you want the user to hold and use the grabbable entity. The default pose holds the entity in the player’s hand with default animations. For example, running normally rather than aiming a weapon.

Different avatar poses play different animations. For example, **Sword** plays a swinging animation when playing **AvatarPoseAnimationNames.Fire**.

| ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452631575_512533731284583_2678556436957133234_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=IRNtCdCJ8QIQ7kNvwG5qOLY&_nc_oc=AdloQ4PaziuOldDjPNHBXtL3G1NCezd7CTf1oE8optHYso766-S3loaIDLQRaMVCra4HeOtMwowIAZujPmBvzOOP&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=jY0wlas5zx0HISP5c8emEA&oh=00_AfmdBGpY5Cn_KL_AyAKY7DdLD64SoiF56ZiQbpeULT05JA&oe=69558CE9) | ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/524637212_776044154933538_5457085298144533773_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=nYS0LUqU_7sQ7kNvwGeoRpy&_nc_oc=Adln1nYx_YNolnDmr8uI2VbyA0AEmYZsz5ihkA2eWwjtOuTvtAGXB57l3RwW7XdUMNi0Y2rp3Qp-JvIGVyHdemXH&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jY0wlas5zx0HISP5c8emEA&oh=00_AfnI0_yDFZwreWfMjCjbZg5XRTEF0MMV0IFPdRZlL5sK0A&oe=6955707C) |
| :---- | :---- |

# Disable HWXS Grab Relax Animation

On mobile and web devices, avatars automatically relax their grip and lower the weapon after a few seconds.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/cd06430979e4ccfc7e648aa5f9ddbb42dd358889ca94fb5365d40b219e6d05e5.md)

### Overview
This image depicts a settings interface with various options and toggles related to weapon animations and permissions. The interface is part of a larger application, likely a game or simulation tool, given the nature of the settings.

### Key Elements
- **HWXS Grab Relax Animation Enabled**: Located in the upper section, this is a toggle switch labeled with the text "> HWXS Grab Relax Animation Enabled". The toggle switch is currently in the 'off' position, indicated by the red bounding box around it.
- **Two-Handed Grab**: Positioned below the toggle switch, this option has a blue toggle switch next to it, which is in the 'on' position.
- **Who Can Grab?**: This section includes a dropdown menu labeled "> Anyone".
- **Who Can Take From Holder?**: Another dropdown menu is present here, labeled "> Only You".
- **Primary Action Icon**: At the bottom, this section has a dropdown menu labeled "> Fire".

### Visual Flow / Relationships
The elements are arranged vertically, with each setting grouped together logically. The toggle switches are visually distinct due to their color coding (blue for 'on', red for 'off'). The dropdown menus are aligned to the right of their respective labels.

</details>

<p></p>



To prevent this and allow the avatar to hold their pose, **disable** the **HWXS Grab Relax Animation** toggle found in the More section of the Properties panel.

| Enabled | Disabled |
| --- | --- |
|  |  |