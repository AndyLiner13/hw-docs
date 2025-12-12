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
  
  [Horizontal strip layout and example display map](../image_data/8a238810b13c0fa0628ad44deb58a00a9439c85d5a487c49e61b7883b229ce44.md)
  
  ### Overview
  This image depicts a user interface of a 3D modeling or game development software, likely Unreal Engine, showing a 3D viewport with a grid floor and sky background. The interface includes panels for asset management, hierarchy, and properties.
  
  ### Key Elements
  - **Viewport**: A large central area displaying a 3D scene with a blue sky gradient and a gray grid floor. There are small icons representing objects within the scene.
  - **Hierarchy Panel**: Located on the left side, showing a tree-like structure with nodes labeled "SpawnPoint," "WorldInit," "Leaderboard-TextLabel," "Quest-TextLabel," "Common," and "z Unused."
  - **Asset Library**: A panel at the bottom left labeled "Asset Library." It contains sections for "Public Assets" and "My Assets."
  - **My Assets Section**: Within the Asset Library, a folder named "My Assets" is highlighted.
  - **Properties Panel**: On the right side, it displays placeholder text stating "Select an object to view its properties."
  - **Navigation Bar**: At the top, there are tabs for "Build," "Systems," "Scripts," and "Gen AI." There are also buttons for "World Sim Off," "Publish," and other settings.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the viewport and the hierarchy panel. The viewport is the largest area, drawing attention due to its size and the presence of the 3D scene. The hierarchy panel is secondary but crucial for navigating the project structure. The Asset Library and Properties panels provide additional functionality but are less prominent compared to the viewport and hierarchy.
  
  </details>
  
  <p></p>
  
  
- In the Asset Library tab, navigate your folder structure to select the folder where you wish to store the uploaded skydome.
- To begin, click **Add New > Skydome**:
  <details>
  <summary>Horizontal strip layout and example display map</summary>
  
  <p></p>
  
  [Horizontal strip layout and example display map](../image_data/1bbd2987a5dfa5946800105679dd14363370c90527cadfa9661238e89f1f8308.md)
  
  ### Overview
  The image displays a dropdown menu with various options against a blurred background that resembles a 3D modeling environment. The menu is dark-themed with white text and a red highlight around the "Skydome" option.
  
  ### Key Elements
  - **Visual description**: Dropdown menu with a dark background and white text.
  - **Location**: Centered vertically and horizontally within the image.
  - **Contents**: Options listed include "Folder," "3D Model," "Animation," "Audio," "Material," "Skydome," "Texture," and "Text." The "Skydome" option is highlighted with a red border.
  - **Visual styling**: Dark background, white text, red highlight.
  
  ### Visual Flow / Relationships
  - Most prominent visually: The "Skydome" option due to the red highlight.
  - Arrows, lines, or connectors: None visible.
  - Spatial relationships: Elements are arranged vertically in a list format.
  
  </details>
  
  <p></p>
  
  
- Select the art assets that you wish to upload for each of the skydome texture types. Please verify that all assets are in the file format and dimensions listed in the window:
  <details>
  <summary>Horizontal strip layout and example display map</summary>
  
  <p></p>
  
  [Horizontal strip layout and example display map](../image_data/e893c4f53a6494a6d224a74842c2d4e15c5b0bc9ff83bb86440825c23e5e9a52.md)
  
  ### Overview
  This image depicts a user interface dialog box titled "Import Skydome." It contains instructions and four upload fields for different types of maps required for importing a skydome into a software application.
  
  ### Key Elements
  - **Title**: "Import Skydome" located at the top-left corner.
  - **Instruction Box**: A rectangular area below the title containing information about the assets needed for a skydome import.
  - **Display Map**: A section with a radio button labeled "Display Map," followed by an upload field that says "Upload PNG file Choose files on your device (6144 x 1024)".
  - **Radiance Map**: Another section with a radio button labeled "Radiance Map," followed by an upload field that says "Upload PNG/EXR file Choose files on your device (256 x 128)".
  - **Reflection Map**: A section with a radio button labeled "Reflection Map," followed by an upload field that says "Upload EXR file Choose files on your device (768 x 256)".
  - **Fog Map**: A final section with a radio button labeled "Fog Map," followed by an upload field that says "Upload EXR file Choose files on your device (384 x 64)".
  - **Cancel Button**: A gray button labeled "Cancel" at the bottom-left.
  - **Next Button**: A blue button labeled "Next" at the bottom-right.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the upload fields, as they are the primary interactive components. The layout follows a grid-like structure with two rows and two columns, each containing a map type and its corresponding upload field. There are no arrows or lines connecting elements, but the placement suggests a sequential process where users must upload files in the correct order before proceeding to the next step.
  
  </details>
  
  <p></p>
  
  
- Click **Next**. The selected assets are displayed:
  <details>
  <summary>Horizontal strip layout and example display map</summary>
  
  <p></p>
  
  [Horizontal strip layout and example display map](../image_data/d7fd2e2026cb9c98c60828d5b4b7da6a4c8434cc6228dd419ba525761093cd1e.md)
  
  ### Overview
  This image depicts a user interface dialog box titled "Import Skydome." It contains information about the required assets for importing a skydome and displays four uploaded files with their respective formats and resolutions.
  
  ### Key Elements
  - **Title Bar**: Located at the top, the title bar reads "Import Skydome."
  - **Information Box**: Positioned below the title bar, it contains a message stating that skydomes require 4 assets: a display cubemap, a radiance map, a reflection map, and a fog map.
  - **Display Map**: Located in the upper left, it shows a preview image of the uploaded file named "HighResolutionDisplayMap-HorizontalStrip_768x256.png."
  - **Radiance Map**: Positioned to the right of the Display Map, it displays a preview image of the uploaded file named "RadianceMap-Equirect-256x128.png."
  - **Reflection Map**: Below the Display Map, it shows a preview image of the uploaded file named "ReflectionMap_MipMapSheet-768x256.png."
  - **Fog Map**: To the right of the Reflection Map, it displays a preview image of the uploaded file named "FogMap-HorizontalStrip-64x8.exr."
  - **File Formats**: Below each preview image, the file formats are indicated as ".EXR."
  - **Buttons**: At the bottom, there are two buttons labeled "Cancel" and "Next."
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the preview images of the uploaded files. The layout follows a grid-like structure with two columns and two rows, and the buttons are placed at the bottom. There are no arrows or lines connecting the elements, but the reading order is implied from left to right and then top to bottom.
  
  </details>
  
  <p></p>
  
  
- Click **Next**. Enter the Name and Description for the skydome. To start creating the asset, click **Done**:
- The asset is created. This process may take a minute or two to complete. Do not navigate away from the world or create a second skydome until the process has completed.
- After the asset is created, it is displayed in the Asset Lbrary tab in the folder that you selected for import.
  <details>
  <summary>Horizontal strip layout and example display map</summary>
  
  <p></p>
  
  [Horizontal strip layout and example display map](../image_data/6d79a6b178258abb8e7c9fe15209588dd22a2a1b59a6621301774c31958642ad.md)
  
  ### Overview
  This image depicts a user interface of an asset management tool within a software application. The layout includes navigation panels, a file directory view, and a preview area. The interface is dark-themed with a focus on managing assets, specifically skydome files.
  
  ### Key Elements
  - **Navigation Panel**: Located on the left side, it has two sections labeled "Asset Library" and "Public Assets." The "My Assets" section is highlighted, indicating the current selection.
  - **File Directory View**: Positioned centrally, showing a hierarchical file structure under "My Assets." The folder "skydomes" is expanded, revealing its contents.
  - **Preview Area**: On the right side, it displays a thumbnail preview of a file named "Example Skydome."
  - **Search Bar**: At the top-right, it contains a search field labeled "Search skydomes," suggesting functionality to find specific assets.
  - **Add New Button**: Above the file directory view, there’s a button labeled "Add New" with a dropdown arrow, likely for adding new assets.
  - **Tabs**: At the very top, there are tabs labeled "Console," "Tests," and "Performance," indicating different sections of the application.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the "My Assets" section and the "skydomes" folder. The preview area is secondary but important as it provides visual feedback on the selected asset. The search bar allows users to navigate through the assets efficiently. The tabs at the top suggest that the interface can switch between different functionalities.
  
  </details>
  
  <p></p>
  
  

## Deploy Skydome to Worlds

After you have created the custom skydome asset, you can deploy it into your world.

**Note**: This process creates a new instance of the Environment gizmo mapped to the custom skydome asset. If you already have an Environment gizmo in your world, you may need to port its settings to the new one that you create here.

- In the Asset Library tab, locate the skydome asset that you created. Right-click the asset and select **Place**. You may also click and drag it into your world.
  <details>
  <summary>Horizontal strip layout and example display map</summary>
  
  <p></p>
  
  [Horizontal strip layout and example display map](../image_data/411d38dae3806008355144a46e9d69dd0aedfb75dcebd7151bd18f67853c5bb6.md)
  
  ### Overview
  The image depicts a user interface from an asset management tool, specifically showing a folder named "skydomes" within a larger directory structure labeled "My Assets." The interface includes options for adding new assets, searching for specific items, and managing folders. A contextual menu is open, offering actions such as Place, Move, Replace, and Remove.
  
  ### Key Elements
  - **Left Panel**: Contains navigation options like "Public Assets" and "My Assets," with "My Assets" highlighted.
  - **Main Content Area**: Displays a list of folders under "My Assets," including "ScriptedAvatarNP..." and "My (SteveO) Temp..." among others.
  - **Selected Folder**: "skydomes" is highlighted, indicating it is currently selected.
  - **Contextual Menu**: Appears on the right side, offering actions related to the selected item ("Example Skydome").
  - **Search Bar**: Located at the top right, with placeholder text "Search skydomes."
  - **Tabs**: At the very top, tabs labeled "Console," "Tests," and "Performance" are visible.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The contextual menu with the "Example Skydome" selection.
  - **Arrows/Connectors**: None visibly present.
  - **Reading Order**: The interface follows a standard left-to-right, top-to-bottom flow, with the selected folder being the focal point.
  
  </details>
  
  <p></p>
  
  
- An instance of the Environment gizmo is created in the world, and the skydome in the world now matches the one that you uploaded.
  **Note**: Initially, the skydome is displayed at a lower resolution unitl the high-resolution display finishes downloading.
  <details>
  <summary>Horizontal strip layout and example display map</summary>
  
  <p></p>
  
  [Horizontal strip layout and example display map](../image_data/2105c7ea5851e5fdc967fba8835f8748f233d1ec1844cfe96c7300d967535190.md)
  
  ### Overview
  This image depicts a 3D modeling software interface, specifically showing a scene preview within a viewport. The interface includes a hierarchy panel on the left, a properties panel on the right, and a central viewport displaying a skydome environment. The viewport contains a landscape with a desert-like terrain and a colorful sky.
  
  ### Key Elements
  - **Hierarchy Panel**: Located on the left side, it displays a tree structure with nodes labeled "SpawnPoint," "WorldInit," "Leaderboard-TextLabel," "Quest-TextLabel," "Common," and "z Unused." The node "[Environment] Example Skydome" is highlighted in blue.
  - **Viewport**: Positioned centrally, it shows a 3D environment with a desert landscape featuring rock formations and a vibrant sky with hues of pink, purple, and blue. The ground is a grid pattern, suggesting a virtual workspace.
  - **Properties Panel**: On the right, it contains various settings related to the environment, such as "Active," "Custom Skydome," "Shadow Intensity," "Reflection Intensity," "Texture Rotation," "Exposure," "Custom Light Intensity," "Custom Fog Color," "Fog Density," "Show Grid," and "VOIP Settings." Some options have checkboxes next to them, indicating interactive elements.
  - **Scene Controls**: At the top of the viewport, there are controls for local view orientation ("Local," "Center"), zoom level ("Relative"), and camera settings ("1.0").
  - **Scene Navigation**: Below the viewport, there are navigation tools including "Add New," "All Assets," "My Folders," and a search bar labeled "Search skydomes."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the central viewport, which serves as the focal point of the interface. The hierarchy panel on the left provides context for the elements displayed in the viewport. The properties panel on the right offers detailed settings for the environment being viewed. The scene controls at the top provide interactive tools for manipulating the view within the viewport.
  
  </details>
  
  <p></p>
  
  
- Your custom skydome is displayed when you re-enter the world in the Desktop Editor or, after publication, in Visit mode on a supported device.

## Download Example Assets

You can download example assets for building a custom skydome:

**Download**: [SkydomeCustomSkydomeTestAssets.zip](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75375772_2364431677244731_586874341463105764_n.zip?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=0ttVucf5PUgQ7kNvwETRWaW&_nc_oc=Adk4oknQEq3YcWim5qvMHQnnV83qXJtoNRpEGALCZh2mpHQDkETjMGLroMvSp2uCkJIDr0yIKoA907RsXtsUCMW1&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afk3DUVdGH7uTM4KQ8tEn6s5EV2olsp7j8E_Jc6CUQRgbg&oe=6955985A)

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

[Horizontal strip layout and example display map](../image_data/df001124d40fa803a6d8778af888d08b1a84bf388d2c302ebfc9cc4af97c3c71.md)

### Overview
The image displays a cityscape at sunset with a gradient sky transitioning from orange to blue. The city features various buildings of different heights and shapes, some with lights on, suggesting it might be evening. Below the cityscape, there is a grid with six colored squares labeled with positive and negative directions along the X, Y, and Z axes.

### Key Elements
- **Cityscape**: A large rectangular area at the top of the image showing a city skyline during sunset. Buildings vary in height and design, with some illuminated windows.
- **Gradient Sky**: A horizontal band across the top of the cityscape, transitioning from a warm orange near the horizon to a cooler blue higher up.
- **Grid with Directions**: Located at the bottom of the image, a rectangular grid with six colored squares arranged in two rows of three. Each square has a label indicating a direction (+X, -X, +Y, -Y, +Z, -Z).

### Visual Flow / Relationships
- The most prominent visual element is the cityscape at the top.
- Arrows or lines are not present, so the visual flow is primarily horizontal, moving from left to right within the cityscape and then downward to the grid.
- The grid is positioned below the cityscape, creating a clear separation between the two main sections.

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

[All image details and metadata](../image_data/d9be7f8705297e12ae8f35da81669318cd62de29f4bcf5b270d680a581e93624.md)

### Overview
The image displays a table with two columns labeled "Name" and "Value." The table contains various settings related to texture shapes, file formats, and overrides for different platforms.

### Key Elements
- **Name**: Located in the first column, this header describes the setting being discussed.
- **Value**: Located in the second column, this header indicates the value assigned to the corresponding setting.
- **Settings**:
  - **Texture Shape**: Value is "Cube."
  - **Read/Write**: Value is "On."
  - **Streaming Mipmaps**: Value is "Off."
  - **sRGB (Color Texture)**: This row has no specific value listed under "Value."
  - **PNG File**: Value is "On."
  - **EXR File**: Value is "Off."
  - **PC Override for Windows, Mac, Linx**: Value is "On."
  - **Max Size**: Value is "1024."
  - **Format**: Value is "RGB(A) Compressed BC7."
  - **Android Override for Android**: Value is "On."
  - **Max Size**: Value is "1024."
  - **Format**: Value is "RGB(A) Compressed ASTC 6x6 block."

### Visual Flow / Relationships
The table is structured in a grid layout with alternating light and dark gray rows for better readability. The "Name" column is wider than the "Value" column, and both columns are aligned to the left. There are no arrows or lines connecting elements, indicating a straightforward reading order from left to right and top to bottom.

</details>

<p></p>



#### Example: High-Res Display Map

Captured:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/6472ecf4770819adae65bb5d0bfd22941d77026d68f011666f552d13598e89b5.md)

### Overview
This image consists of a series of five panels arranged horizontally, each depicting a stylized landscape scene. The central panel features a gradient background, while the outer four panels show similar landscapes with mountains, water bodies, and a sky.

### Key Elements
1. **Leftmost Panel**: 
   - **Visual description**: A stylized landscape with mountains, a body of water, and a small island with trees.
   - **Location**: Leftmost panel.
   - **Contents**: Mountains with pointed peaks, green grassy areas, a blue water body, and a small island with trees.
   - **Visual styling**: Soft pastel colors, simple shapes.

2. **Second Panel from Left**: 
   - **Visual description**: Similar to the first panel but with a slightly different angle and additional details like rocks and a small cityscape in the distance.
   - **Location**: Second panel from the left.
   - **Contents**: Mountains, water, rocks, and a distant cityscape.
   - **Visual styling**: Continues the soft pastel color scheme with more defined shapes.

3. **Central Panel**: 
   - **Visual description**: A gradient background transitioning from light blue at the bottom to white at the top, with subtle star-like specks scattered throughout.
   - **Location**: Center of the image.
   - **Contents**: A smooth gradient with no distinct objects or text.
   - **Visual styling**: Soft, calming colors with a minimalist design.

4. **Third Panel from Right**: 
   - **Visual description**: Another stylized landscape with mountains, water, and a small island with trees.
   - **Location**: Third panel from the right.
   - **Contents**: Mountains, water, rocks, and a small island with trees.
   - **Visual styling**: Similar to the leftmost panel but with a slightly different perspective and lighting.

5. **Rightmost Panel**: 
   - **Visual description**: A stylized landscape with mountains, water, and a small island with trees.
   - **Location**: Rightmost panel.
   - **Contents**: Mountains, water, rocks, and a small island with trees.
   - **Visual styling**: Similar to the previous panels but with a slightly different arrangement of elements.

### Visual Flow / Relationships
The panels are arranged in a horizontal sequence, suggesting a progression or a comparison of similar scenes. There are no arrows or lines connecting the panels, implying that the focus is on the individual scenes themselves rather than a narrative flow.

</details>

<p></p>



Drawn:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/be5f3219f766caa4a0e125eaa991d31fd87fcb7d5b54ae5b656024078d6e8c7f.md)

### Overview
This image is a collage of six landscape scenes, likely from a video game or animated environment. Each scene features desert-like terrain with various rock formations and a dynamic sky. The scenes are arranged side-by-side horizontally.

### Key Elements
1. **Scene 1 (Leftmost)**: 
   - **Visual description**: A desert landscape with reddish sand dunes and rocky outcrops.
   - **Location**: Leftmost part of the collage.
   - **Contents**: A small green plant and a blue object resembling a spaceship or vehicle.
   - **Visual styling**: Warm tones dominate, with a gradient sky transitioning from pink to blue.

2. **Scene 2**:
   - **Visual description**: Similar to Scene 1 but with more prominent dunes and a larger blue object in the foreground.
   - **Location**: Second from the left.
   - **Contents**: A large blue object that resembles a spaceship or vehicle.
   - **Visual styling**: The sky has a gradient of purple and blue hues.

3. **Scene 3**:
   - **Visual description**: A close-up of a swirling cloud formation with vibrant red and orange hues.
   - **Location**: Third from the left.
   - **Contents**: A swirling cloud with a mix of red and orange tones.
   - **Visual styling**: The cloud has a textured appearance with a gradient of colors.

4. **Scene 4**:
   - **Visual description**: A close-up of a sandy surface with a circular pattern in the center.
   - **Location**: Fourth from the left.
   - **Contents**: A sandy surface with a circular pattern resembling ripples or a ripple mark.
   - **Visual styling**: The sand is light beige with darker shadows around the edges.

5. **Scene 5**:
   - **Visual description**: Another desert landscape similar to Scene 1 but with more vegetation.
   - **Location**: Fifth from the left.
   - **Contents**: Green plants scattered across the sandy terrain.
   - **Visual styling**: The sky is a gradient of purple and blue, similar to Scene 2.

6. **Scene 6 (Rightmost)**:
   - **Visual description**: A wide-angle view of a desert landscape with distant rock formations under a dramatic sky.
   - **Location**: Rightmost part of the collage.
   - **Contents**: A vast desert with scattered rocks and a colorful sky with clouds.
   - **Visual styling**: The sky has a gradient of purple and blue hues, with some white clouds.

### Visual Flow / Relationships
The scenes are arranged in a horizontal sequence, suggesting a progression through different parts of the same environment. There are no arrows or lines connecting the scenes, implying a linear viewing experience rather than a branching narrative.

</details>

<p></p>



#### Recommendations

You can preview your maps using [Unity skybox](https://github.com/TwoTailsGames/Unity-Built-in-Shaders/blob/master/DefaultResourcesExtra/Skybox-Cubed.shader) prior to ingestion to fix any image errors like seams, pinching, noise, and banding. See below.

Pinching example:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/5c09f781cde324ddbdb996b188f8d06c1567818cc6de5e6f53fc5d98741ca062.md)

### Overview
The image depicts a close-up view of a gradient background with a mix of dark and light colors, primarily purples and reds. A prominent red arrow points towards a small white cloud-like shape located on the right side of the image.

### Key Elements
- **Visual description**: The image features a gradient background with a mix of dark and light purples and reds.
- **Location**: The gradient occupies the entire background area.
- **Contents**: The gradient transitions smoothly from darker shades at the edges to lighter tones near the center.
- **Visual styling**: The gradient uses a smooth blend without sharp transitions.

- **Visual description**: A red arrow is positioned in the upper right quadrant of the image.
- **Location**: The arrow is located in the upper right area, pointing diagonally towards the white cloud-like shape.
- **Contents**: The arrow is solid red with a thin black outline.
- **Visual styling**: The arrow has a simple design with a consistent width throughout its length.

- **Visual description**: A small white cloud-like shape is situated on the far right side of the image.
- **Location**: The white shape is located on the far right side of the image.
- **Contents**: The shape resembles a cloud or smoke, with a soft, diffuse texture.
- **Visual styling**: The white shape has a subtle gradient, transitioning from a lighter shade at the edges to a slightly darker center.

### Visual Flow / Relationships
- **Most prominent visually**: The gradient background serves as the primary visual element.
- **Arrows, lines, connectors**: The red arrow draws attention to the white cloud-like shape.
- **Spatial relationships**: The white cloud-like shape is isolated on the right side, creating a focal point that contrasts with the gradient background.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/d6d6430743a779aa69cd921f97f56dec888a7cdafb014bde02ce0d32bcaec777.md)

### Overview
The image features a simple graphic with a gradient blue background and a red arrow pointing downward. The overall composition is minimalistic, with no additional elements or text.

### Key Elements
- **Visual description**: A red arrow.
- **Location**: Centered horizontally, slightly offset to the right vertically.
- **Contents**: The arrow has a solid red color with a pointed tip.
- **Visual styling**: The arrow has a thick line style, with a uniform width throughout its length.

### Visual Flow / Relationships
- Most prominent visually: The red arrow.
- Spatial relationships: The arrow points downward, indicating direction but no further connections or relationships are depicted.

</details>

<p></p>



Seam example:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/de40e9ed495e0c1ad510125941f4864ce759fc090c44768c6775cc10fe754179.md)

### Overview
The image depicts a bright, sunny sky with fluffy white clouds. A red arrow points towards a specific area within the clouds, drawing attention to that spot.

### Key Elements
- **Visual description**: The image features a bright sun in the upper left corner, surrounded by soft, white clouds. The sky transitions from a deep blue at the top to lighter shades near the horizon.
- **Location**: The sun is positioned in the top-left corner, while the clouds occupy the majority of the frame.
- **Contents**: The sun emits a strong light, creating a glowing halo effect around it. The clouds are puffy and white, with some areas appearing slightly darker due to shadowing.
- **Visual styling**: The sun has a bright yellow hue with a white glow, and the clouds are primarily white with subtle gradients of light and shadow.

### Visual Flow / Relationships
- **Most prominent visually**: The sun and the clouds are the focal points of the image.
- **Arrows and lines**: A red arrow points diagonally towards the lower right part of the image, indicating a specific area within the clouds.
- **Spatial relationships**: The sun is isolated in the upper left, while the clouds fill the rest of the frame. The arrow creates a visual path leading towards the indicated area within the clouds.

</details>

<p></p>



Noise example:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/c9fb9844f5115bc14ab54986dfcada0eb551d8b80f590f798f4377c0f4daa2f8.md)

### Overview
The image depicts a sky scene with a bright light source, likely the sun, dominating the upper left portion of the frame. The sky is filled with scattered clouds, and the overall color palette is warm, dominated by shades of pink and orange.

### Key Elements
- **Visual Description**: The image features a gradient sky transitioning from a bright white light source to darker shades of blue and gray.
- **Location**: The bright light source is located in the upper left quadrant, while the clouds are distributed across the rest of the frame.
- **Contents**: The light source appears as a glowing orb, and the clouds are fluffy and soft in texture.
- **Visual Styling**: The colors are vivid, with a strong contrast between the light and the darker areas of the sky.

### Visual Flow / Relationships
- **Most Prominent Visually**: The bright light source is the most prominent feature due to its intense brightness.
- **Spatial Relationships**: The clouds are scattered randomly across the sky, with no clear directional flow. The light source creates a sense of radiance that spreads outward.

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

[All image details and metadata](../image_data/52b7689bd6f9286144e19eaf21175d9d9babbbb6aa8b21e19072f57edf305b41.md)

### Overview
The image appears to be a blurred abstract design featuring a gradient of warm colors transitioning into cooler tones. The overall composition suggests a landscape or sky with a horizon line.

### Key Elements
- **Visual Description**: The image has a smooth gradient effect with a mix of orange, yellow, and blue hues.
- **Location**: The gradient spans across the entire image horizontally.
- **Contents**: There are no discernible objects, text, or specific elements within the gradient itself.
- **Visual Styling**: The colors blend seamlessly into one another without sharp edges or distinct shapes.

### Visual Flow / Relationships
There is no clear visual hierarchy or spatial relationships due to the lack of defined elements or text. The gradient creates a sense of movement but lacks directionality or focal points.

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

[All image details and metadata](../image_data/d7d079ab9d2f03860b13bc580434fc6a5c62d7a9e0f9762450c6346d438d0605.md)

### Overview
The image consists of a simple geometric design featuring two rectangles placed side-by-side against a light blue background. The rectangles are filled with different shades of blue.

### Key Elements
- **Visual description**: Two rectangles.
- **Location**: Side-by-side, horizontally aligned.
- **Contents**: 
  - Left rectangle: Darker blue shade.
  - Right rectangle: Lighter blue shade.
- **Visual styling**: Both rectangles have solid fills without any gradients or textures. There are no borders or additional elements within the rectangles.

### Visual Flow / Relationships
- Most prominent visually: The two rectangles.
- Spatial relationships: Adjacent rectangles, no arrows or lines connecting them.

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

[All image details and metadata](../image_data/06d8543068fee9bb259cf05b2921afa317a462c5997302c6b33396d9ca1529db.md)

### Overview
This image appears to be a collage of various abstract and blurred visual elements, possibly representing a series of frames or a fragmented view of a scene. The overall composition is chaotic, with no clear structure or discernible pattern.

### Key Elements
- **Visual description**: The image consists of numerous small, rectangular segments arranged in a grid-like pattern.
- **Location**: These segments are scattered across the image, with some appearing larger than others.
- **Contents**: Each segment contains a mix of light and dark areas, with some showing faint shapes or patterns that are difficult to identify due to the blurriness.
- **Visual styling**: The segments vary in color intensity, ranging from very dark to bright white or light gray. Some segments have a glossy or reflective quality, while others appear matte.

### Visual Flow / Relationships
- **Most prominent visually**: The larger, lighter segments stand out against the darker background.
- **Arrows, lines, connectors**: There are no clear directional indicators or connections between the segments.
- **Spatial relationships**: The segments are arranged randomly, with no apparent order or alignment.

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