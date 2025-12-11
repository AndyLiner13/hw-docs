Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/preparing-skydome-maps-for-horizon-worlds-ingestion

# Preparing Skydome Maps for Meta Horizon Worlds Ingestion

This section describes the requirements and process for building custom skydome maps for ingestion into Meta Horizon Worlds for use in your worlds.

## Skydome Asset Requirements

To upload a custom skydome, you must build the following art assets, listed below in the supported format(s).

- High Resolution Display Cubemap (`PNG`)
  - The high-resolution display map must be an equirectangular/latlong source asset.
  - This asset must be converted to a horizontal strip through your source application.
- Radiance Map (`PNG` or `EXR`)
- Reflection Map (`EXR`)
- Fog Map (`EXR`)

For more information on the requirements for each asset type, please see “Appendix: Skydome Map Reference” below.

**Tip**: You can also download a pre-made assets to upload into Meta Horizon Worlds. See “Download” below.

## Limitations

* Skybox textures must meet the exact dimensions and type as noted in the UI. Using textures with any other dimensions causes failures.
* You cannot re-upload the skybox textures individually. You must make a new asset or use the Replace Asset feature.
* You cannot spawn a skydome asset via TypeScript.
* Reflection Map assets must be in `EXR` format. `PNG` is not supported.

## Import Skydome into Horizon

After you have prepared assets, the following steps walk through how to create a skydome asset:

- Open a world in the desktop editor.
- Click the **Asset Library tab** at the bottom of the screen:
  <details>
<summary>Horizontal strip layout and example display map</summary>

<p></p>

[Horizontal strip layout and example display map](../../../images/output/img_20251211_075706_20251211_075706.md)

### Overview
This image depicts a user interface of a 3D modeling or game development software. The layout includes a sidebar with a hierarchy view, a central viewport showing a 3D scene, and a properties panel on the right side. The bottom section features an asset library with folders and assets displayed.

### Key Elements
- **Sidebar (Left Panel)**: Contains a hierarchical list of objects labeled "SpawnPoint," "WorldInit," "Leaderboard-TextLabel," "Quest-TextLabel," "Common," and "z Unused." Each item has a small icon next to it.
- **Central Viewport**: Displays a 3D scene with a blue sky gradient and a grid floor. There are two small objects in the scene: one orange cube and one teal cube with a speaker icon.
- **Properties Panel (Right Panel)**: Currently empty, with a placeholder message stating "Select an object to view its properties."
- **Asset Library Section**: Located at the bottom of the interface. It includes tabs for "Asset Library," "Console," "Tests," and "Performance." The "Asset Library" tab is active, and within it, there are sections for "Public Assets" and "My Assets." "My Assets" is further divided into "All Assets," "My Folders," and "Removed Assets." Icons representing different asset types (text, audio, and another text asset) are visible under "All Assets."

### Visual Flow / Relationships
The most prominent visual elements are the sidebar and the central viewport. The viewport is the largest area, serving as the main workspace. The sidebar provides navigation through the project hierarchy, while the properties panel and asset library provide additional functionality. The asset library is the focal point of the bottom section, with the "My Assets" folder being highlighted.

</details>

<p></p>


- In the Asset Library tab, navigate your folder structure to select the folder where you wish to store the uploaded skydome.
- To begin, click **Add New > Skydome**:
  <details>
<summary>Horizontal strip layout and example display map</summary>

<p></p>

[Horizontal strip layout and example display map](../../../images/output/img_20251211_075802_20251211_075802.md)

### Overview
The image displays a dropdown menu with various options listed vertically. The menu is part of a user interface, likely within a software application related to asset management or 3D modeling. The background shows a grid-like surface, suggesting a 3D environment.

### Key Elements
- **Visual description**: The dropdown menu has a dark background with white text.
- **Location**: The menu is centered in the image, extending upwards from a button labeled "Add New."
- **Contents**: The menu contains the following items:
    - Folder
    - 3D Model
    - Animation
    - Audio
    - Material
    - Skydome
    - Texture
    - Text
- **Visual styling**: The text is white, and the background is a dark gray. There is a red rectangular highlight around the "Skydome" option.

### Visual Flow / Relationships
- **Most prominent visually**: The "Skydome" option is highlighted with a red rectangle, drawing attention to it.
- **Arrows, lines, connectors**: There are no arrows or lines connecting the elements.
- **Spatial relationships**: The elements are arranged vertically, with each item stacked directly below the previous one.

</details>

<p></p>


- Select the art assets that you wish to upload for each of the skydome texture types. Please verify that all assets are in the file format and dimensions listed in the window:
  <details>
<summary>Horizontal strip layout and example display map</summary>

<p></p>

[Horizontal strip layout and example display map](../../../images/output/img_20251211_075905_20251211_075905.md)

### Overview
This image depicts a user interface dialog box titled "Import Skydome." It contains four upload fields for different types of maps required for importing a skydome asset into a software application. The dialog box also includes a brief instruction at the top explaining the requirements for skydome assets and a "Next" button at the bottom right.

### Key Elements
- **Title**: "Import Skydome" located at the top-left corner.
- **Instruction Box**: A gray box containing a light bulb icon and text explaining that skydomes require specific assets.
- **Display Map**: A section with a radio button labeled "Display Map," followed by an upload field prompting users to choose a PNG file.
- **Radiance Map**: Another section with a radio button labeled "Radiance Map," followed by an upload field prompting users to choose a PNG/EXR file.
- **Reflection Map**: A third section with a radio button labeled "Reflection Map," followed by an upload field prompting users to choose an EXR file.
- **Fog Map**: A fourth section with a radio button labeled "Fog Map," followed by an upload field prompting users to choose an EXR file.
- **Cancel Button**: Located at the bottom-left corner.
- **Next Button**: Located at the bottom-right corner.

### Visual Flow / Relationships
The most prominent visual elements are the upload fields, as they are the primary interactive components. There are no arrows or lines connecting the elements, but the layout suggests a sequential process where users must complete each step before proceeding to the next ("Next" button).

</details>

<p></p>


- Click **Next**. The selected assets are displayed:
  <details>
<summary>Horizontal strip layout and example display map</summary>

<p></p>

[Horizontal strip layout and example display map](../../../images/output/img_20251211_080008_20251211_080008.md)

### Overview
This image is a screenshot of a user interface window titled "Import Skydome." It displays four asset options required for importing a skydome into a software application. The assets include a display map, radiance map, reflection map, and fog map. Each asset has a preview image, file name, and a checkbox indicating selection status. There are also buttons labeled "Cancel" and "Next."

### Key Elements
- **Title**: "Import Skydome" located at the top-left corner.
- **Information Box**: A gray box with a light gray border containing instructions about the requirements for skydome assets.
- **Asset Preview Images**: Four images representing the Display Map, Radiance Map, Reflection Map, and Fog Map. Each image has a filename beneath it.
- **File Format Buttons**: Two buttons labeled ".EXR" below the asset previews.
- **Selection Checkboxes**: Green checkmarks next to the asset names indicate which assets are currently selected.
- **Buttons**: Two buttons labeled "Cancel" and "Next," with the "Next" button highlighted in blue.

### Visual Flow / Relationships
The most prominent visual elements are the asset previews and the selection checkboxes. The information box provides context about the asset requirements. The visual flow follows a logical sequence from selecting assets to proceeding with the import process.

</details>

<p></p>


- Click **Next**. Enter the Name and Description for the skydome. To start creating the asset, click **Done**:
- The asset is created. This process may take a minute or two to complete. Do not navigate away from the world or create a second skydome until the process has completed.
- After the asset is created, it is displayed in the Asset Lbrary tab in the folder that you selected for import.
  <details>
<summary>Horizontal strip layout and example display map</summary>

<p></p>

[Horizontal strip layout and example display map](../../../images/output/img_20251211_080102_20251211_080102.md)

### Overview
This image depicts a user interface of an asset management tool within a software application. The layout includes a sidebar menu, a navigation bar at the top, and a content area displaying folders and an example asset preview.

### Key Elements
- **Sidebar Menu**: Located on the left side, with options labeled "Asset Library," "Public Assets," and "My Assets." The "My Assets" option is highlighted, indicating the current selection.
- **Navigation Bar**: At the top, spanning across the width of the interface, contains tabs labeled "Console," "Tests," and "Performance."
- **Folder List**: In the central area, a vertical list of folders is displayed under the "My Assets" selection. The folders shown include "ScriptedAvatarNP..." (partially visible), "skydomes," "My (SteveO) Temp...," "SteveO items2," and "My Swapping."
- **Example Asset Preview**: On the right side, there is a preview of an asset named "Example Skydome," featuring a cloud icon and a placeholder image.
- **Search Bar**: Positioned at the top-right, allowing users to search for assets within the "skydomes" folder.

### Visual Flow / Relationships
The most prominent visual element is the "My Assets" selection in the sidebar. The folder list and the asset preview are secondary elements that provide context and functionality related to the selected folder. The search bar is a tertiary element, offering additional functionality for asset discovery.

</details>

<p></p>



## Deploy Skydome to Worlds

After you have created the custom skydome asset, you can deploy it into your world.

**Note**: This process creates a new instance of the Environment gizmo mapped to the custom skydome asset. If you already have an Environment gizmo in your world, you may need to port its settings to the new one that you create here.

- In the Asset Library tab, locate the skydome asset that you created. Right-click the asset and select **Place**. You may also click and drag it into your world.
  <details>
<summary>Horizontal strip layout and example display map</summary>

<p></p>

[Horizontal strip layout and example display map](../../../images/output/img_20251211_080154_20251211_080154.md)

### Overview
This image depicts a user interface from an asset management tool, specifically showing the "My Assets" section within an "Asset Library." The interface includes a sidebar with navigation options, a file explorer view, and a contextual menu for managing assets.

### Key Elements
- **Sidebar Navigation**: Located on the left side, with options like "Asset Library," "Public Assets," and "My Assets."
- **File Explorer**: Central area displaying folders and assets. Visible folders include "ScriptedAvatarNP..." and "skydomes."
- **Contextual Menu**: Appears as a dropdown menu on the right side, offering actions such as "Place," "Move," "Replace," and "Remove."
- **Search Bar**: Positioned at the top-right, allowing users to search for specific assets.
- **Folder Icon**: A folder icon next to each folder name, indicating directory structure.
- **Asset Preview**: A small preview image of an asset named "Example Skydome" is shown within the file explorer.

### Visual Flow / Relationships
The most prominent visual elements are the file explorer and the contextual menu. The file explorer is the central focus, with the contextual menu appearing as a dropdown when interacting with an asset. The search bar is secondary but important for navigation and filtering.

</details>

<p></p>


- An instance of the Environment gizmo is created in the world, and the skydome in the world now matches the one that you uploaded.
  **Note**: Initially, the skydome is displayed at a lower resolution unitl the high-resolution display finishes downloading.
  <details>
<summary>Horizontal strip layout and example display map</summary>

<p></p>

[Horizontal strip layout and example display map](../../../images/output/img_20251211_080745_20251211_080745.md)

### Overview
This image depicts a user interface of a 3D modeling or game development software. The central area displays a 3D environment with a skydome, featuring a desert landscape with rocky formations and a colorful sky. The interface includes panels for hierarchy management, properties, and asset library functionalities.

### Key Elements
- **Hierarchy Panel**: Located on the left side, showing a tree structure with nodes such as "SpawnPoint," "WorldInit," "LeaderboardTextLabel," "QuestTextLabel," "Common," and "[Environment] Example Skydome." The highlighted node is "[Environment] Example Skydome."
- **Central Scene View**: The main area shows a 3D environment with a desert landscape, a skydome, and a grid floor. The skydome has a gradient sky with clouds and a large planet-like object in the background.
- **Properties Panel**: On the right side, it contains various settings for the selected skydome, including options like "Active," "Custom Skydome," "Shadow Intensity," "Reflection Intensity," "Texture Rotation," "Exposure," "Custom Light Intensity," "Custom Fog Color," "Fog Density," "Show Grid," and "VOIP Settings."
- **Asset Library**: At the bottom left, there are tabs for "Asset Library," "Console," "Tests," and "Performance." The current tab is "Asset Library," which shows folders like "Public Assets" and "My Folders."

### Visual Flow / Relationships
The interface is organized into distinct panels, with the hierarchy on the left, the scene view in the center, and the properties on the right. The scene view is the focal point, with the hierarchy and properties panels providing contextual information and control over the scene.

</details>

<p></p>


- Your custom skydome is displayed when you re-enter the world in the Desktop Editor or, after publication, in Visit mode on a supported device.

## Download Example Assets

You can download example assets for building a custom skydome:

**Download**: [SkydomeCustomSkydomeTestAssets.zip](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75375772_2364431677244731_586874341463105764_n.zip?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=yNbId5mr0REQ7kNvwEKJmkz&_nc_oc=Adm4JitdDwmS-oxfSUiRWjpgz5gGBPyHRMJqD-5rZ_ppkQrsCBvyNMIuYwZBK4BwURk&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfnSYJoTZMi8whaSr-L0dHKJm-Ex-Pc_tD2IZuDEgiAOnQ&oe=694BB51A)

## Appendix: Skydome Map Reference

This section contains reference information on the types of assets that you must generate to create a custom skydome.

### High Resolution Display Map

The High Resolution Display Map is a high-res display of the world background after it has been downloaded from the CDN. At world startup, this download process may take a few seconds, during which a low-resolution display map is shown to visitors.

**Tip**: During the upload process, the low-resolution map is generated from the high-resolution map that is uploaded. You do not have to create this asset.

This map is just for display purposes. It is not fed into lighting, fog, and reflection calculations.

#### Format

**Horizontal Strip**: 6144 x 1024 pixels

<details>
<summary>Horizontal strip layout and example display map</summary>

<p></p>

[Horizontal strip layout and example display map](../../../images/output/img_20251211_080848_20251211_080848.md)

### Overview
The image displays a split-screen layout with two distinct sections above and below a central axis. The upper section features a cityscape illustration, while the lower section presents a grid of colored squares labeled with directional indicators.

### Key Elements
#### Upper Section
- **Visual description**: A cityscape illustration with buildings of varying heights and lighting.
- **Location**: Top half of the image.
- **Contents**: Buildings, some illuminated, with a gradient sky transitioning from light blue to yellow.
- **Visual styling**: Buildings are outlined in white, with a mix of neutral and warm tones. The sky has a gradient effect, suggesting either sunrise or sunset.

#### Lower Section
- **Visual description**: A grid of six colored squares arranged in two rows of three.
- **Location**: Bottom half of the image.
- **Contents**: Each square contains a plus or minus symbol followed by a letter (X, Y, Z).
- **Visual styling**: Squares are solid-colored blocks with a simple design. The colors are red, green, and blue, each representing a different axis (+X, +Y, +Z, -X, -Y, -Z).

### Visual Flow / Relationships
- **Most prominent visually**: The cityscape in the upper section.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The cityscape is divided into two parts, with the grid of colored squares below it. The grid is organized in a clear, linear fashion, with each square distinctly separated from the others.

</details>

<p></p>



#### Preparing Image Source

The skydome can be drawn or created via any image software:
1. The high-resolution display map must be an equirectangular/latlong source asset.
1. This asset must be converted to a horizontal strip through your source application.

For import, its format must be **horizontal strip**: 6144 x 1024 pixels in `PNG` file format. This format is recommended because it is compresses well and is more performant.

Horizon Unity import settings:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_080930_20251211_080930.md)

### Overview
The image displays a table with two columns labeled "Name" and "Value." It appears to be a settings or configuration table, likely related to texture parameters for a software application or game engine.

### Key Elements
- **Name Column**: Contains labels such as "Texture Shape," "Read/Write," "Streaming Mipmaps," etc.
- **Value Column**: Contains corresponding values like "Cube," "On," "Off," etc.
- **Rows**: Each row represents a different setting parameter.
- **PC Section**: Contains specific settings for PC platforms, including overrides for Windows, Mac, Linux, max size, and format.
- **Android Section**: Contains specific settings for Android platforms, including overrides and format.

### Visual Flow / Relationships
The table is structured in a grid layout with alternating light and dark gray rows for better readability. The columns are clearly defined, and the rows follow a logical sequence based on the parameter names.

</details>

<p></p>



#### Example: High-Res Display Map

Captured:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_081032_20251211_081032.md)

### Overview
This image consists of a landscape scene divided into four panels, each showing a different part of the same environment. The panels are arranged side-by-side horizontally, with the leftmost and rightmost panels being wider than the middle two.

### Key Elements
1. **Left Panel**
   - **Visual description**: A landscape with mountains, a body of water, and a small island.
   - **Location**: Leftmost panel.
   - **Contents**: Mountains with pointed peaks, green grassy areas, a small rocky island, and a calm blue water body.
   - **Visual styling**: Soft pastel colors, simple geometric shapes.

2. **Middle Left Panel**
   - **Visual description**: A gradient transition from light blue to white.
   - **Location**: Between the left and middle right panels.
   - **Contents**: A smooth gradient effect without any distinct elements.
   - **Visual styling**: Uniform gradient with no additional features.

3. **Middle Right Panel**
   - **Visual description**: A continuation of the landscape seen in the left panel but with a different angle and perspective.
   - **Location**: Between the middle left and right panels.
   - **Contents**: Similar to the left panel but with a slightly different arrangement of the elements.
   - **Visual styling**: Same soft pastel colors and geometric shapes as the left panel.

4. **Right Panel**
   - **Visual description**: A landscape similar to the left panel but with a more distant view and a larger body of water.
   - **Location**: Rightmost panel.
   - **Contents**: Mountains, a large body of water, and a small island further away compared to the left panel.
   - **Visual styling**: Similar soft pastel colors and geometric shapes as the left panel.

### Visual Flow / Relationships
- **Most prominent visually**: The left panel due to its larger size and detailed landscape.
- **Arrows, lines, connectors**: None.
- **Implied reading order**: Horizontal progression from left to right.
- **Spatial relationships**: Panels are arranged side-by-side, with the left and right panels being wider than the middle ones.

</details>

<p></p>



Drawn:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_081140_20251211_081140.md)

### Overview
This image is a collage of six distinct desert landscapes, each showcasing unique geological formations and atmospheric conditions. The scenes are vibrant and fantastical, blending realistic textures with surreal lighting effects.

### Key Elements
1. **Left Panel (Top Left)**: A desert landscape with large rock formations and a clear sky transitioning from blue to pink hues. The terrain is sandy with scattered rocks.
   - **Visual description**: Rocky outcrops and sand dunes.
   - **Location**: Top left corner.
   - **Contents**: Textured rocks and sand.
   - **Visual styling**: Warm tones dominate, with a gradient sky.

2. **Second Panel (Top Middle)**: Another desert scene featuring a glowing orb in the distance under a dramatic sky with purple and blue clouds.
   - **Visual description**: Large rock formations and a glowing orb.
   - **Location**: Top middle.
   - **Contents**: Rocks and a glowing orb.
   - **Visual styling**: Darker tones with bright highlights.

3. **Third Panel (Top Right)**: A close-up of a rock formation with a swirling, ethereal effect in the foreground.
   - **Visual description**: Rock texture with a swirling effect.
   - **Location**: Top right.
   - **Contents**: Rock texture and swirling effect.
   - **Visual styling**: Warm orange and red tones with a glowing effect.

4. **Fourth Panel (Bottom Left)**: A close-up of a sand dune with a circular, glowing pattern in the center.
   - **Visual description**: Sand dune with a glowing pattern.
   - **Location**: Bottom left.
   - **Contents**: Sand dune and glowing pattern.
   - **Visual styling**: Warm tones with a glowing effect.

5. **Fifth Panel (Bottom Middle)**: A desert landscape similar to the first but with more prominent rock formations and a brighter sky.
   - **Visual description**: Sandy terrain with large rock formations.
   - **Location**: Bottom middle.
   - **Contents**: Sandy terrain and rock formations.
   - **Visual styling**: Brighter tones with a clear sky.

6. **Sixth Panel (Bottom Right)**: A desert scene with a glowing orb in the distance under a sky with pink and blue clouds.
   - **Visual description**: Sandy terrain with rock formations and a glowing orb.
   - **Location**: Bottom right.
   - **Contents**: Sandy terrain, rock formations, and a glowing orb.
   - **Visual styling**: Warm tones with a glowing effect.

### Visual Flow / Relationships
The panels are arranged horizontally, creating a continuous flow from left to right. Each panel focuses on a different aspect of the desert environment, with varying degrees of detail and lighting effects.

</details>

<p></p>



#### Recommendations

You can preview your maps using [Unity skybox](https://github.com/TwoTailsGames/Unity-Built-in-Shaders/blob/master/DefaultResourcesExtra/Skybox-Cubed.shader) prior to ingestion to fix any image errors like seams, pinching, noise, and banding. See below.

Pinching example:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_081220_20251211_081220.md)

### Overview
The image depicts a close-up view of a celestial object, possibly a nebula or a distant planet, with a prominent red arrow pointing towards a specific area within the object. The overall composition suggests a focus on highlighting a particular feature or region of interest.

### Key Elements
- **Visual description**: The image features a gradient of colors ranging from deep purples to vibrant reds, creating a dynamic and ethereal atmosphere.
- **Location**: The red arrow is positioned in the upper right quadrant of the image.
- **Contents**: The arrow points to a bright, glowing area within the nebula-like structure.
- **Visual styling**: The colors are vivid and contrast sharply against the darker background, emphasizing the highlighted area.

### Visual Flow / Relationships
- **Most prominent visually**: The red arrow draws immediate attention to the glowing area.
- **Spatial relationships**: The arrow acts as a directional guide, leading the viewer's eye to the specific region of interest within the nebula.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_081303_20251211_081303.md)

### Overview
The image displays a single red arrow pointing diagonally towards the bottom-left corner against a gradient blue background. The overall composition is minimalistic, focusing solely on the arrow and its direction.

### Key Elements
- **Visual description**: A red arrow with a pointed tip.
- **Location**: Positioned centrally but slightly angled towards the bottom-left corner.
- **Contents**: The arrow has a solid red color with a sharp point at the end.
- **Visual styling**: The arrow is a simple geometric shape without any additional elements or gradients within it.

### Visual Flow / Relationships
- Most prominent visually: The red arrow.
- Spatial relationships: The arrow points diagonally from the upper-right to the lower-left, creating a clear directional focus.

</details>

<p></p>



Seam example:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_081350_20251211_081350.md)

### Overview
The image depicts a bright, sunny sky with fluffy white clouds. A red arrow points towards a specific area within the clouds, suggesting a direction or focus.

### Key Elements
- **Visual description**: The image features a clear blue sky with scattered white clouds. The sun is partially visible on the left side, emitting bright light.
- **Location**: The sun is located on the left side of the image, with the clouds occupying the majority of the frame.
- **Contents**: The sun emits a strong light, creating a glare effect. The clouds are fluffy and white, with some areas appearing denser than others.
- **Visual styling**: The sky has a gradient of blue tones, transitioning from lighter at the horizon to darker higher up. The clouds are white with soft edges, and the sun's light creates a glowing effect around it.

### Visual Flow / Relationships
- **Most prominent visually**: The sun and its bright light.
- **Arrows and lines**: A red arrow points towards a specific cloud formation, indicating a direction or focus.
- **Spatial relationships**: The sun is on the left, the clouds occupy the middle and right, and the arrow points from the sun towards the clouds.

</details>

<p></p>



Noise example:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_081445_20251211_081445.md)

### Overview
The image depicts a sky scene with a bright light source, likely the sun, dominating the upper left portion of the frame. There are scattered clouds in various shapes and sizes, primarily in the lower left and right areas. The overall composition suggests a serene outdoor setting, possibly during sunrise or sunset.

### Key Elements
- **Visual Description**: The image features a gradient sky transitioning from a bright white to a darker blue-gray hue.
- **Location**: The bright light source is located in the upper left quadrant.
- **Contents**: The light source appears as a glowing orb, radiating intense light that overpowers the surrounding area.
- **Visual Styling**: The light source has a soft glow effect, and the surrounding sky has a warm, pinkish tint, suggesting a sunrise or sunset.

### Visual Flow / Relationships
- **Most Prominent Visually**: The bright light source is the most prominent feature due to its intensity and position.
- **Spatial Relationships**: The clouds are scattered around the edges, with no clear directional flow indicated by lines or arrows. The image focuses on the interplay of light and shadow rather than a specific narrative.

</details>

<p></p>



**Note**: Use [Nuke denoise](https://learn.foundry.com/nuke/content/comp_environment/denoise/removing_noise_denoise.html) to remove noise.

### Radiance Map

A radiance map is used for image-based lighting (IBL). A radiance map simulates how the sky lights up a 3D scene. It captures the intensity and color of the ambient light emitted from skydome. The radiance map is used for calculating global illumination.

#### Format

Radiance map is an **equirect** version of the display map.

* The format is **equirect** 256x128.
* Radiance map can be either `PNG` or `EXR`. Use an `EXR` file if you have HDR values in the radiance map. Otherwise, use a `PNG` file.

You can create a radiance map based on the display map.

- Convert a copy of the file to **equirect** format.
- Resize to 256 x 128.

#### Example: Radiance Map

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_081532_20251211_081532.md)

### Overview
The image appears to be a blurred abstract design featuring a gradient of warm colors transitioning into cooler tones. The overall composition suggests a dynamic, possibly futuristic or digital theme.

### Key Elements
- **Visual description**: The image consists of smooth gradients and blurred shapes.
- **Location**: The entire image spans horizontally across the frame.
- **Contents**: There are no discernible objects, text, or specific elements within the blur.
- **Visual styling**: The colors range from orange and red at the bottom to blue and purple at the top, creating a gradient effect. There are no defined shapes or lines, only a continuous blend of colors.

### Visual Flow / Relationships
There is no clear visual hierarchy or spatial relationships due to the blurriness. The gradient effect creates a sense of movement but lacks distinct elements to establish a reading order.

</details>

<p></p>



### Fog Map

A **fog map** adds atmospheric particle density to your world.

**Note**: A fog map applies color to meshes. It does not apply to the high resolution display map. Fog maps aren’t related to cached global illumination.

For greater distances between camera and mesh, the further away, the mesh is more tinted by the fog map. It’s a non-linear gradual change.

**Tip**: In the Environment gizmo, which is created when you add a custom skydome to your world, you can choose to override the fog map by a constant color, which provides realtime feedback on the fogging effect. You can also build a fog map that is composed of a single color.

#### Format

The format of the Fog map is the following:

* a **horizontal strip**: 384 x 64.
* A fog map shouldn’t have any near/middle/far ground geometries, just the sky.
* Fog maps are `EXR` format only. Do not use a `PNG`, which yields poor results.

#### Example: Fog Map

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_081613_20251211_081613.md)

### Overview
The image consists of a simple geometric design featuring two rectangles placed side-by-side against a light blue background. The rectangles are filled with different shades of blue, creating a contrast with the background.

### Key Elements
- **Visual description**: Two rectangles.
- **Location**: Side-by-side, horizontally aligned.
- **Contents**: 
  - Left rectangle: Dark blue fill.
  - Right rectangle: Lighter blue fill.
- **Visual styling**: 
  - Borders: Thin white border around both rectangles.
  - Size: The rectangles are roughly equal in size but slightly smaller than the width of the image itself.

### Visual Flow / Relationships
- Most prominent visually: The two rectangles.
- Spatial relationships: Adjacent rectangles, no connecting lines or arrows.

</details>

<p></p>



### Reflection Map

A Reflection Map is used for reflection probing and providing view-dependent reflection.

#### Format

* File format should be a 768 x 256 [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps (8 mip levels) sheet.
* Use an `EXR` file if you have HDR values in the reflection map. Otherwise, use a `PNG` file.

#### Examples: Reflection Maps

Many skydomes in Meta Horizon Worlds reuse this image because it creates a nice reflection for metallic objects, but it doesn’t represent the world in a physically accurate way.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_081658_20251211_081658.md)

### Overview
This image consists of a series of small, square frames arranged in a grid-like pattern. Each frame contains a blurry, abstract representation of light and shadow, predominantly featuring shades of blue and white. The overall composition suggests a collage or a sequence of light patterns captured at different moments.

### Key Elements
- **Visual description**: Each square frame contains a blurry, abstract depiction of light and shadow.
- **Location**: The elements are arranged in a grid layout across the image.
- **Contents**: The content within each frame varies slightly but generally includes light sources and dark areas, possibly representing reflections or diffused light.
- **Visual styling**: The squares are uniformly sized and have a consistent background color that blends into the surrounding area.

### Visual Flow / Relationships
- **Most prominent visually**: The individual frames stand out due to their distinct shapes and varying light patterns.
- **Arrows, lines, connectors**: There are no connecting lines or arrows; the elements are isolated.
- **Spatial relationships**: The elements are arranged in a grid, suggesting a structured yet abstract arrangement.

</details>

<p></p>



Ideally, you can create a mip a mipmap sheet from a horizontal strip display map, which is more accurate than using the default reflection map from the above example.

In the above example, the default reflection map has some hot spots which produce a nice shiny look, especially on metallic objects. If the reflection map doesn’t have hot spots, the metallic objects look less shiny than using the default reflection map.

However, to get the most PBR accurate reflection, you must re-capture the world with all geometries and the new skydome, and then generate a [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps sheet based on roughness.

### More examples

Below you can see some example images of the custom skydome assets.

**Note**: These assets are not suitable for import. They are provided for display purposes only.

|  | Skydome | Radiance Map | Fog Map |
| --- | --- | --- | --- |
| Daytime |  |  |  |
| Misty Marsh |  |  |  |
| Sunrise |  |  |  |
| Midnight Black |  |  |  |
| Night |  |  |  |
| Overcast |  |  |  |
| Sunset |  |  |  |
| Twilight |  |  |  |
| Winter |  |  |  |