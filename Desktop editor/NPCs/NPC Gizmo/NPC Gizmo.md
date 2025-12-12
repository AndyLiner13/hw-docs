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
  
  [NPC Gizmo Build window](../../../image_data/88b2209431ad9fd4aa2071be3a71102aaa846e234d72edd37167907bcdd325b2.md)
  
  ### Overview
  The image displays a user interface toolbar within a software application, likely related to game development or asset management. The toolbar contains various categories and tools for building and managing assets. The interface has a dark theme with light-colored text and icons.
  
  ### Key Elements
  - **Hierarchy**: Located at the far left, this category is represented by a plus sign and a minus sign, indicating expand/collapse functionality.
  - **Shapes**: Positioned next to Hierarchy, this category includes icons for spheres, cubes, and other shapes, suggesting tools for creating geometric objects.
  - **Colliders**: Contains icons for different types of colliders, which are physics components used in games.
  - **UI**: Includes icons for UI elements such as text fields, buttons, and navigation controls.
  - **Navigation**: Features icons for navigation tools, possibly related to scene transitions or pathfinding.
  - **Display**: Contains icons for display-related functions, such as rendering and lighting adjustments.
  - **Interactions**: Includes icons for interaction tools, likely for scripting or event handling.
  - **Avatars**: Displays an icon resembling a character or avatar, suggesting tools for character creation or customization.
  - **Media**: Likely related to audio or video assets, indicated by a play button and a microphone icon.
  
  ### Visual Flow / Relationships
  The elements are arranged horizontally across the toolbar. The most prominent visual is the "Avatars" category, highlighted with a red bounding box. The elements follow a logical sequence from left to right, with each category having its own set of icons and labels.
  
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

[Edit your avatar window](../../../image_data/7dc97bd81a67deea47d7d01940ba4e49b3e371472e03c16ad42088b8d00e2345.md)

### Overview
This image depicts a user interface for editing an avatar within a virtual environment, specifically a character customization screen. The interface allows users to modify various aspects of the avatar, such as clothing, accessories, hair, makeup, face features, and body shape. The central focus is on the hairstyle customization options, which are displayed in a grid layout on the right side of the screen.

### Key Elements
- **Left Panel**: Contains a vertical menu with categories for editing the avatar. The categories include Clothing, Accessories, Hair, Makeup, Face, and Body. Each category has a downward arrow indicating more options can be expanded.
    - **Clothing**: A dropdown arrow next to the label.
    - **Accessories**: A dropdown arrow next to the label.
    - **Hair**: Expanded to show Hairstyle and Facial hair options.
        - **Hairstyle**: Selected option, highlighted with a darker background.
        - **Facial hair**: Not currently selected.
    - **Makeup**: A dropdown arrow next to the label.
    - **Face**: A dropdown arrow next to the label.
    - **Body**: A dropdown arrow next to the label.
- **Central Grid**: Displays a grid of hairstyle options for the avatar. Each thumbnail shows a different hairstyle.
- **Right Side**: Shows a 3D model of the avatar wearing the selected hairstyle.
- **Bottom Right**: A blue button labeled "Done editing."

### Visual Flow / Relationships
The interface follows a clear hierarchical structure. The left panel acts as the primary navigation area, guiding the user through different customization options. The central grid provides a visual representation of available choices, while the 3D model on the right showcases the current selection. The "Done editing" button at the bottom right suggests that the user can finalize their changes.

</details>

<p></p>



Remember to click **“Refresh”** in the Desktop Editor to see your updates after you click **Done editing**.