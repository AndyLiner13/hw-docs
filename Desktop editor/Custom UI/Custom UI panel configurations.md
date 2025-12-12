Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/custom-ui-panel-configurations

# Custom UI panel configurations

This topic describes how you can customize behaviors of the custom UI panel in **Properties** by configuring settings for **Raycast**, **Mipmap**, **Focus prompt** and related properties.

Find these settings by first selecting the **Custom UI** gizmo entity in **Hierarchy**. The corresponding configuration settings are then shown in **Properties** > **Visual & Interaction** and **Web and Mobile**. You can use both the desktop editor and the VR edit mode to configure the settings.

The following image shows the custom UI panel configuration settings in the desktop editor.

<details>
<summary>The custom UI panel configuration in the desktop editor</summary>

<p></p>

[The custom UI panel configuration in the desktop editor](../../image_data/f674f7e8f3fc934b99f426e3d952f4498af2a6829f70e59ca995044645293e70.md)

### Overview
This image depicts a user interface (UI) screen, specifically a settings or configuration panel within a software application. The UI is divided into sections with various settings and data fields. The background has a gradient blue color, and the UI elements are primarily dark gray with white text and some blue highlights.

### Key Elements
- **Header**: Located at the top left, includes a camera icon and a dropdown menu labeled "1.0" and another dropdown with a gear icon labeled "0".
- **Properties Section**: Starts with a title "Properties" and contains several expandable sections.
  - **[CustomUI]**: A collapsed section showing a placeholder text.
  - **Debug Data**: Expanded section displaying "Entity Id: 100003".
  - **Generic Entity Data**: Expanded section showing "Entity Id: 100003".
  - **Script Instance Data**: Expanded section.
  - **Visual & Interaction**: Expanded section containing settings such as "Display mode", "Raycast", "Raycast distance", "Mipmap", "Mipmap bias", "Web and Mobile": "Focus prompt", and "Focus prompt distance".
- **Settings Fields**: Include checkboxes and input fields with labels like "Raycast", "Raycast distance", "Mipmap", "Mipmap bias", "Focus prompt", and "Focus prompt distance". These fields have blue checkboxes next to them indicating interactive elements.
- **Background**: A gradient blue background spans the left side of the UI.

### Visual Flow / Relationships
The UI is structured hierarchically with expandable sections. The most prominent elements are the expandable sections under "Properties". The interactive elements (checkboxes and input fields) are aligned vertically under their respective labels. The layout follows a grid-like structure with clear separation between sections.

</details>

<p></p>



The following image shows the custom UI panel configuration settings in the VR edit mode.

<details>
<summary>The custom UI panel configuration in the VR edit mode</summary>

<p></p>

[The custom UI panel configuration in the VR edit mode](../../image_data/fa0bfa8357f9a39c20db83ad2728ce387830093bbbf9ca3f76f792b18bc4a241.md)

### Overview
This image displays a user interface (UI) element from a software application, specifically a settings or configuration panel. The UI has a dark theme with a grid background, and it includes various controls and options related to visual and interaction settings.

### Key Elements
- **Top Panel**: 
  - **Header**: "CustomUI" at the top left, with a lock icon and a close ("X") button on the right.
  - **Tabs**: Three tabs labeled "Visual & Interaction," "Web and Mobile," and "Behavior."
  - **Settings**: Options include "Raycast," "Raycast distance," "Mipmap," and "Mipmap bias." Each setting has a toggle switch next to it.
  - **Input Fields**: Text input fields for "Raycast distance" and "Mipmap bias."

- **Bottom Panel**: 
  - **Attached Script**: A dropdown menu labeled "Uldemo2:Uldemo2" with a minus sign indicating the ability to remove the script.
  - **Script Parameters**: Three parameters labeled "texture," "trigger," and "ball," each with a minus sign to remove them.

### Visual Flow / Relationships
The most prominent visual elements are the settings and attached script panels. The settings panel is divided into sections with clear labels and toggles. The attached script panel is simpler, with a dropdown and parameter inputs. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from top to bottom.

</details>

<p></p>



There are no TypeScript APIs for these configurations. They can only be set statically in **Properties** and cannot be changed at runtime.

## Visual & Interaction settings

### Raycast

In VR, players interact with the UI panels through raycast from their controllers. By default, raycast is automatically enabled when a player is within a certain distance of the UI panel. You can disable raycast and customize the raycast distance.

When raycast is disabled, the UI panel no longer receives the raycast input events. As a result, the player can no longer interact with the panel. For example, no `Pressable` components will work properly.

### Raycast distance

Raycast distance controls the distance within which a player can interact with the UI panel. By default, the value is 3. We advise not to set the raycast distance greater than 10. While there’s no strict upper limit for this setting, having a larger raycast distance across multiple UI panels could negatively impact the performance.

These raycast settings only affect the player experience in VR and are unused for web and mobile experiences.

### Mipmap

By default, certain UI panels might have aliasing problems and appear pixelated when viewed from a far distance. This can be particularly undesirable when the UI content contains small text. Enabling mipmap can mitigate the issue by automatically caching some downsampled UI texture.

### Mipmap bias

When mipmap is enabled, the mipmap value setting becomes visible. The range for the mipmap bias is set between -1 and 1, and the default is 0. Enabling mipmap will slightly affect the performance. If mipmap is enabled for a large number of visible UI panels, it could negatively impact the Graphics Processing Unit (GPU) performance and reduce frames per second (FPS). Use this feature sparingly only when needed.

## Web and Mobile settings

### Focus prompt

Unlike in VR, players do not interact with UI panels through raycast on web and mobile platforms. Instead, players see a prompt when they are within a certain distance from the UI panel, prompting them to press “E” key. If they do, the camera will zoom in and focus onto the UI panel, and players can interact with the UI through clicking or tapping.

<details>
<summary>The player sees the UI panel Hello World</summary>

<p></p>

[The player sees the UI panel Hello World](../../image_data/d5acd293527ffca2f63e4f5205979337ca3d80fafaf905705d08df8049a4d36d.md)

### Overview
The image depicts a virtual environment with a character facing away from the viewer. The character is wearing a light gray hoodie and dark pants. There is a floating interface element above the character's head and another interactive element below the character.

### Key Elements
- **Character**: A back-facing avatar with short black hair, wearing a light gray hoodie and dark pants. The character has a simple design with minimal detail.
- **Floating Interface Element**: Located above the character's head, it contains the text "Hello World" within a white rectangular box.
- **Interactive Element**: Positioned below the character, it features a button labeled "E" with a hand cursor icon next to it. The button has a dark gray background with a white border.

### Visual Flow / Relationships
- **Most Prominent Visually**: The floating interface element above the character's head.
- **Arrows/Connectors**: None.
- **Spatial Relationships**: The floating interface element is above the character, while the interactive element is below the character. Both are centered horizontally but are vertically offset.

</details>

<p></p>



When the focus prompt is disabled, players cannot zoom in and focus onto the UI panel and they cannot interact with the panel.

### Focus prompt distance

Focus prompt distance controls the distance within which the focus prompt is shown to a player and the player can zoom in. By default the value is 2.5, but can be customized with a number that ranges between 0 and 10. The range restriction is due to performance considerations.

These focus prompt settings only affect the player experience on web and mobile platforms and are unused for VR experiences.

## Web and mobile unsupported use cases

### Moving UI panels that can receive focus from players

In some cases, if a UI panel is in motion when a player interacts with it, the UI panel may appear cropped or clipped as the UI panel continues to move after receiving camera focus.

To avoid this, don’t move or rotate UI panels that can receive focus from players.