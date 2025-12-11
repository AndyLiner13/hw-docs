Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-gizmo/npc-gizmo

# NPC Gizmo

The **NPC Gizmo** serves as the **foundational entity for creating Non-Player Characters (NPCs)** in Horizon Worlds. NPCs can range from **simple scripted characters** with predefined behaviors to complex AI-driven characters that learn and adapt based on player actions. Regardless of their complexity, all NPCs begin with the NPC Gizmo.

Adding an NPC Gizmo to your world has the **same performance impact as adding another player**. Therefore, it’s recommended to manage the total number of human players and NPCs by adjusting your world’s “Maximum number of players” setting and considering spawning NPCs only when needed to optimize resource usage.

## Create and Configure an NPC

To create and configure an NPC using the NPC Gizmo, use the following process:

- Select **Build** from the top menu and navigate to select the **NPC** icon from the **Avatar** section.
  <details>
<summary>NPC Gizmo Build window</summary>

<p></p>

[NPC Gizmo Build window](../../../../../images/output/img_20251211_070638_20251211_070638.md)

### Overview
The image displays a user interface toolbar within a software application, likely a game development environment. The toolbar contains various categories such as Hierarchy, Shapes, Colliders, UI, Navigation, Display, Interactions, Avatars, and Media. Each category has a set of icons representing different functionalities. A specific icon within the Avatars section is highlighted with a red bounding box.

### Key Elements
- **Hierarchy**: Located at the far left, represented by a tree icon and a plus sign.
- **Shapes**: Contains icons for sphere, cube, cylinder, and a dropdown arrow.
- **Colliders**: Includes icons for cube, sphere, cylinder, and a dropdown arrow.
- **UI**: Features icons for text, info, and a T-shaped icon.
- **Navigation**: Displays icons for a trophy, a cup, and a dropdown arrow.
- **Display**: Contains icons for search, trophy, and a dropdown arrow.
- **Interactions**: Includes icons for a target, a rocket, and a dropdown arrow.
- **Avatars**: Highlighted with a red bounding box, showing an icon resembling a character or avatar.
- **Media**: Contains icons for play, a microphone, and a dropdown arrow.

### Visual Flow / Relationships
The toolbar is horizontally arranged with each category having its own set of icons. The Avatars section is visually distinct due to the red bounding box highlighting it. The icons are evenly spaced, and there are no arrows or lines connecting them, indicating a flat design without a specific reading order.

</details>

<p></p>


- Drag the NPC Gizmo from the toolbar into your world scene and place it. **Note**: the NPC may initially appear as a single, flat color as a placeholder. It is also important to position the NPC gizmo on a surface in your world and not above or below it.
- Once your NPC has been added to your world, you can configure its properties.

| Property | Description |
| --- | --- |
| Attributes | Standard properties for adjusting the NPC’s location, and scale within your world. |
| Character Name | The display name of your avatar NPC |
| Spawn on Start | Toggle that controls whether or not the NPC spawns on world start or not. If toggled off, the NPC must be spawned into the world using Typescript. |
| Body Type | Sets the embodiment for the NPC. The available options are **None** and **Horizon Avatar**. See Configuring Horizon Avatar NPCs for more information |
| Appearance | Click this button to edit the avatar’s appearance. |
| Refresh | Click this button after you have edited your avatar’s appearance to refresh it in this world. |
| Conversation | Sets the conversation type for the NPC. The available choices are **AI** and **None**. |
| Default Speech Bubble | Toggles whether or not the created NPC will display a speech bubble when speaking. |
| AI Character | Click **Edit Character** to begin the process of creating and customizing the NPC’s name, backstory, voice, and more. |
| Nametag Settings | Updates the nametag for the NPC that displays in world. You can change title for the nametag and the left/right color gradient |
| Audio Settings | Controls the audio produced by the NPC. |
| Attach Script | Allows you to attach a TypeScript script to define the NPC’s behaviors. |

You can also duplicate or delete NPC Gizmos within your world like any asset added to the Horizon editor. Duplicating an NPC with altered properties will also duplicate those properties for the newly generated NPC.

### Configuring Horizon Avatar NPCs

After adding the NPC Gizmo (**Gizmos > NPC)** and positioning it in your world, you can set its’ **Body Type** to Horizon Avatar to use a Horizon based avatar as an NPC. When selecting a Horizon Avatar as an NPC you can also **customize its visual appearance** by clicking “**Edit Avatar**” in the Properties panel. This opens a web-based editor for body, face, clothing, and accessories.

<details>
<summary>Edit your avatar window</summary>

<p></p>

[Edit your avatar window](../../../../../images/output/img_20251211_070754_20251211_070754.md)

### Overview
This image depicts a user interface for editing an avatar within a virtual environment, specifically Meta Horizon. The interface allows users to customize various aspects of their avatar, such as clothing, accessories, hair, makeup, face, and body features. The main focus is on the hairstyle customization options, which are displayed in a grid layout on the right side of the screen.

### Key Elements
- **Avatar Preview**: Located on the right side of the screen, showing a 3D model of an avatar wearing a dark t-shirt and jeans. The avatar has a hairstyle that matches one of the options selected in the hairstyle grid.
- **Hairstyle Grid**: Positioned centrally on the right side, displaying multiple hairstyles in a grid format. Each hairstyle is represented by a small 3D model of a head.
- **Clothing Section**: Located on the left side, with a dropdown menu labeled "Clothing." It includes a sub-menu for "Accessories."
- **Hair Section**: Also on the left side, with a dropdown menu labeled "Hair," currently expanded to show "Hairstyle" and "Facial hair" options.
- **Makeup Section**: Below the Hair section, with a dropdown menu labeled "Makeup."
- **Face Section**: Below the Makeup section, with a dropdown menu labeled "Face."
- **Body Section**: At the bottom of the left sidebar, with a dropdown menu labeled "Body."

### Visual Flow / Relationships
The interface is organized into a sidebar on the left and a preview area on the right. The hairstyle grid is the most prominent visual element, as it occupies a significant portion of the screen space. The avatar preview is secondary but crucial for visualizing the changes made to the avatar. The layout suggests a linear progression through the customization options, starting from the top left and moving downward.

</details>

<p></p>



Remember to click **“Refresh”** in the Desktop Editor to see your updates after you click **Done editing**.