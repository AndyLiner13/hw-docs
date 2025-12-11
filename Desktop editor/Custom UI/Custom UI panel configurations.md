Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/custom-ui-panel-configurations

# Custom UI panel configurations

This topic describes how you can customize behaviors of the custom UI panel in **Properties** by configuring settings for **Raycast**, **Mipmap**, **Focus prompt** and related properties.

Find these settings by first selecting the **Custom UI** gizmo entity in **Hierarchy**. The corresponding configuration settings are then shown in **Properties** > **Visual & Interaction** and **Web and Mobile**. You can use both the desktop editor and the VR edit mode to configure the settings.

The following image shows the custom UI panel configuration settings in the desktop editor.

<details>
<summary>The custom UI panel configuration in the desktop editor</summary>

<p></p>

[The custom UI panel configuration in the desktop editor](../../../../images/output/img_20251211_030009_20251211_030009.md)

### Overview
This image depicts a user interface (UI) settings panel, likely from a game development tool or engine. The panel is divided into sections for different properties and data related to custom UI elements. The layout includes a sidebar with a gradient background transitioning from light blue to dark blue, and a main content area with a dark theme.

### Key Elements
- **Sidebar (Left Panel)**: A light blue gradient background with a darker blue sidebar header containing a camera icon and a dropdown menu labeled "1.0" with a downward arrow.
- **Main Content Area (Right Panel)**: A dark background with white text and some interactive elements.
  - **Header**: "Properties" at the top.
  - **Custom UI Section**: Contains a header "CustomUI" with a small icon resembling a lock.
  - **Debug Data**: Includes "Entity Id: 100003" and "Script Instance Data".
  - **Visual & Interaction Section**: Contains options like "Display mode", "Raycast", "Raycast distance", "Mipmap", "Mipmap bias", "Web and Mobile" with a "Focus prompt" option.
  - **Interactive Elements**: Toggle switches next to "Raycast", "Mipmap", and "Focus prompt".

### Visual Flow / Relationships
The layout is structured with a clear separation between the sidebar and the main content area. The sidebar is on the left, and the main content area occupies the right side. The interactive elements within the main content area are arranged vertically, with labels followed by toggle switches. The "Raycast distance" field has a black input box with the number "3" entered.

</details>

<p></p>



The following image shows the custom UI panel configuration settings in the VR edit mode.

<details>
<summary>The custom UI panel configuration in the VR edit mode</summary>

<p></p>

[The custom UI panel configuration in the VR edit mode](../../../../images/output/img_20251211_030116_20251211_030116.md)

### Overview
This image depicts a user interface (UI) panel from a software application, likely related to game development or 3D modeling, given the presence of terms like "Raycast," "Mipmap," and "Attached Script." The UI is divided into two main sections: one for visual and interaction settings, and another for attached scripts.

### Key Elements
- **Top Panel (Visual & Interaction):**
  - **Header:** "CustomUI" at the top-left corner.
  - **Tabs:** Three tabs labeled "Visual & Interaction," "Web and Mobile," and "Behavior."
  - **Settings:**
    - **Raycast:** A toggle switch labeled "On" with a green dot indicating it is enabled.
    - **Raycast distance:** A slider set to "3."
    - **Mipmap:** Another toggle switch labeled "On" with a green dot indicating it is enabled.
    - **Mipmap bias:** A slider set to "0.9."

- **Bottom Panel (Attached Script):**
  - **Header:** "Attached Script" at the top-left corner.
  - **Dropdown Menu:** A dropdown menu labeled "Uldemo2:Uldemo2" with a downward arrow indicating it can be expanded.
  - **Script Fields:**
    - **texture:** A field labeled "wallpaper" with a cross icon next to it.
    - **trigger:** A field labeled "<empty>" with a cross icon next to it.
    - **ball:** A field labeled "<empty>" with a cross icon next to it.

### Visual Flow / Relationships
The visual hierarchy is clear, with the top panel being more prominent due to its larger size and the placement of the "Raycast" toggle switch. The bottom panel is less prominent but still important as it contains script fields that can be interacted with. There are no arrows or lines connecting elements, so the relationship is primarily through the layout and the user's interaction with the UI.

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

[The player sees the UI panel Hello World](../../../../images/output/img_20251211_030216_20251211_030216.md)

### Overview
This image depicts a virtual environment with a character facing away from the viewer. The character is wearing a light gray hoodie and dark pants. There is a floating interface element near the character's right side, containing an icon and some text. Above the character, there is a rectangular bar with text inside it.

### Key Elements
- **Character**: A figure with short black hair, viewed from behind. Wearing a light gray hoodie and dark pants.
- **Floating Interface Element**: Located to the right of the character, near the bottom right quadrant. Contains a white square with the letter 'E' inside and a hand cursor icon pointing towards it.
- **Text Bar**: Positioned above the character, spanning horizontally across the screen. Contains the text "Hello World".

### Visual Flow / Relationships
The most prominent visual element is the floating interface element near the character. The text bar above the character is less prominent but still noticeable. The hand cursor icon suggests interactivity, implying that clicking the 'E' might trigger an action.

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