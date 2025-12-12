Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/designing-worlds-for-mobile-and-web/safe-placement-of-ui-controls

# Safe Placement of UI Controls

When designing your game’s user interface, consider both the gameplay controls and transient platform UI (such as notifications, NUX prompts, and world chat). These elements can partially or permanently obscure your interface.

The following illustration provides general guidance for where you can place UI, combining both desktop and mobile surfaces:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/1a3e421c4768e5c2d657caded34cff42a513839a69feacdecee8f62093e6385f.md)

### Overview
This image depicts a user interface element labeled as "Navigation /Notification (48px height)" at the top. The layout includes a green central area surrounded by circular icons and a few linear elements. The design appears to be a prototype or a wireframe for a mobile app or web application.

### Key Elements
- **Central Green Area**: A large rectangular section filled with a solid green color, occupying most of the space.
- **Circular Icons**: Multiple circular icons are scattered around the green area. These icons vary in color and design, some appearing darker red, others lighter pink, and some with icons inside them.
- **Linear Elements**: A series of small, light yellow circles with lightning bolt symbols are arranged horizontally near the bottom of the green area.
- **Left Side Text**: The text "Device Notch Height" is written vertically along the left side of the green area.
- **Right Side Text**: Similar to the left side, the text "Device Notch Height" is written vertically along the right side of the green area.
- **Top Bar**: A thin red bar spans the top of the image, containing several icons and a menu button on the far right.

### Visual Flow / Relationships
The most prominent visual element is the central green area. Circular icons are distributed around it, with some appearing closer to the edges than others. The linear elements at the bottom provide a horizontal line of interaction points. The left and right texts serve as labels indicating the height of the device notch. The top bar acts as a header, providing navigation options.

</details>

<p></p>

*Mobile (@852x393 screen - iPhone 16)*

## Portrait orientation considerations

When designing for portrait orientation on mobile devices, the available screen space and UI placement considerations differ significantly from landscape mode. Portrait orientation typically provides different safe zones due to status bars, notches, and navigation areas.

When testing your world’s UI for portrait orientation:

- Use the [**Preview Configuration**](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options to ensure safe zones are kept clear to avoid overlapping UI.
- Consider how UI elements stack vertically rather than horizontally in portrait mode.
- Test with different device models to account for various screen aspect ratios and safe areas.

**Note:** You can configure different camera parameters for portrait and landscape orientations using the [spawn point gizmo](../../Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) to optimize the visual experience for each orientation.

* <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/64be8b07173bfdb9927063fed6499c402161e16de4def6d77876c096ad0ddcca.md)
  
  ### Overview
  The image displays a solid green background with no discernible objects, text, or additional elements.
  
  ### Key Elements
  - **Visual description**: The entire image is filled with a uniform green color.
  - **Location**: The entire image area.
  - **Contents**: There are no contents within the image.
  - **Visual styling**: The green color is solid and uniform without any gradients, textures, or patterns.
  
  ### Visual Flow / Relationships
  There are no elements to describe relationships or visual hierarchy since the image contains only a single color.
  
  </details>
  
  <p></p>
  
   Unobstructed.
* <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/c8c01cae609373e4f34d7ef33868dae02c2794ba2d19fdd9c756e867535455e5.md)
  
  ### Overview
  The image displays a solid, uniform color without any discernible elements, text, or patterns. It appears to be a blank canvas or a placeholder image.
  
  ### Key Elements
  There are no elements, text, or visual features present in the image.
  
  ### Visual Flow / Relationships
  Since there are no elements, there is no visual hierarchy or spatial relationships to describe.
  
  </details>
  
  <p></p>
  
   Potentially obstructed.
* <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/eb0f57aab50aa3a5b09829680a8e767af91be0cdf37e621d57555cbc06998140.md)
  
  ### Overview
  The image displays a solid pink background with no additional elements or text present.
  
  ### Key Elements
  - **Visual description**: The entire image is filled with a uniform pink color.
  - **Location**: The entire image area.
  - **Contents**: There are no texts, icons, or sub-elements within the image.
  - **Visual styling**: The color is a solid pink (#FFC0CB).
  
  ### Visual Flow / Relationships
  There are no elements to describe relationships or visual hierarchy since the image contains only a single color.
  
  </details>
  
  <p></p>
  
   Permanently obstructed.

> **Note:** The amount of space will vary depending on the features your world has enabled, how you set up grabbables, and the user’s screen size.

Always test your world on both mobile and desktop, to check for any overlapping or obscured UI.

For a deeper look at why these regions, let’s take a look at each surface with all possible UI states enabled:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/6d89afe62f85b63d301c6d9c1f16960d04805381980590bd7911f8419637d8f6.md)

### Overview
This image depicts a virtual environment featuring a character standing on a grassy hill overlooking a lighthouse. The scene includes natural elements like trees and a body of water in the background. There are user interface elements around the edges suggesting this might be a screenshot from a mobile application.

### Key Elements
- **Character**: A figure wearing a red dress with polka dots and white pants stands facing away from the viewer towards the lighthouse. The character has long hair.
- **Lighthouse**: A red and white lighthouse with a red roof is situated on the hill. It has a small balcony and a door at its base.
- **Trees**: Two green trees flank the lighthouse, one on each side.
- **Background**: The sky is blue with some clouds, and there is a body of water extending into the horizon.
- **User Interface Elements**: 
  - Top left: Icons for camera, microphone, and more options.
  - Top right: Three horizontal lines indicating a menu.
  - Left side: A vertical red bar with a circular red button.
  - Right side: A circular icon with a running figure and another red button.

### Visual Flow / Relationships
The most prominent visual is the character facing the lighthouse. The lighthouse is central in the composition, with the trees framing it symmetrically. The background elements provide depth, and the user interface elements suggest interactivity within the app.

</details>

<p></p>

*Mobile (@852x393)*

Taking into account the typical usage percentage of each gameplay control and the frequency of each transient UI element, the per-surface safe zones look like this:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/3d3554254b04f3c367b3289afb0ea646d934442c0da00141a57ffa7415148e71.md)

### Overview
This image depicts a virtual environment within a game or simulation interface. The central focus is a character standing near a lighthouse, surrounded by natural scenery. The interface includes various interactive elements overlaid on the scene.

### Key Elements
- **Character**: A female figure wearing a red dress with polka dots stands facing away from the viewer towards the lighthouse. She has long hair.
- **Lighthouse**: A red and white lighthouse with a red roof is situated on a grassy hill. It has a small balcony and a door at the base.
- **Background**: The background features a clear blue sky with some clouds, green trees, and a body of water reflecting the sky.
- **Interactive Overlay**: Several circular icons with symbols are scattered around the screen. These include icons resembling a camera, a microphone, a person running, a bottle, a lightning bolt, and others.
- **Navigation Controls**: At the bottom, there are five circular icons with lightning bolts, likely representing movement controls.
- **Menu Icons**: In the top corners, there are icons for settings, voice commands, and more options.

### Visual Flow / Relationships
The most prominent visual is the character and the lighthouse. The interactive icons are distributed around the screen, suggesting different actions or functions that can be performed within the game. The layout implies a user interface designed for interaction and exploration.

</details>

<p></p>

*Mobile (@852x393)*

## Mobile

The most important thing to note for mobile controls is that they are contextual. The number of on-screen buttons is determined by how you set up your grabbables.

For example, if you have a simple world with grabbables that have either one or no actions, then you’ll have more available UI space than a world using complex grabbables, custom input etc.

No held item:

Item with Primary & Secondary actions:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/fbfe180fd88e2d0eeed25d1a6219a5866644aa74d2a9d00e230fce690a79e26f.md)

### Overview
This image depicts a user interface element, likely a control panel or settings menu, with various interactive icons and a central circular element that could represent a camera or a similar device.

### Key Elements
- **Central Circular Element**: Located in the bottom-left quadrant, this element has a white circle surrounded by a darker ring, resembling a camera lens or a similar interface component.
- **Top Left Icons**: Three icons are located at the top-left corner:
  - A square with a smaller square inside, possibly representing a camera or a photo gallery.
  - A microphone icon, suggesting audio recording functionality.
  - An ellipsis (...), indicating more options or settings.
- **Top Right Icon**: A hamburger menu icon, typically used for accessing additional settings or navigation options.
- **Right Side Icons**: Four circular icons are arranged in a row on the right side:
  - A rocket ship icon, possibly related to a launch or send function.
  - A figure running, which might indicate a timer or a countdown feature.
  - Two additional icons, one appearing to be a gear or settings icon, and another that seems to be a lock or security icon.
- **Bottom Icons**: Two small circular icons are positioned at the bottom-center:
  - One resembles a hammer, potentially indicating a settings or configuration option.
  - The other looks like a gear, similar to the one mentioned above.

### Visual Flow / Relationships
The layout is structured with a clear division into functional areas. The central circular element draws attention due to its prominent placement and distinct design. The top icons provide quick access to different functionalities, while the right-side icons offer additional features. The bottom icons seem to be for specific settings or actions.

</details>

<p></p>



Item with Primary, Secondary and Tertiary actions Holstering enabled on world:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/831f13f038833c4d00a811ba15bf77cbb40a53eba4c6d0215a5abe21ced9b83c.md)

### Overview
This image depicts a user interface element that resembles a control panel or a settings menu. The layout includes a central circular element surrounded by various icons and buttons, suggesting functionality related to media playback or streaming.

### Key Elements
- **Central Circular Element**: Located in the bottom-left quadrant, this element has a white center and a darker outer ring, resembling a play/pause button or a volume control.
- **Top Left Corner Icons**: Three icons are present here, likely representing media controls such as play/pause, record, and more. They are small and circular with distinct symbols.
- **Top Right Corner Menu Icon**: A three-line icon, typically representing a menu or settings option.
- **Right Side Icons**: Several circular icons are arranged vertically on the right side, each containing a small icon or symbol. These appear to represent different functions or options within the interface.
- **Bottom Icons**: Two additional circular icons are located at the bottom, possibly for additional settings or actions.

### Visual Flow / Relationships
The most prominent visual element is the central circular element, which draws attention due to its larger size and central placement. The icons are distributed around the edges, creating a balanced layout. There are no arrows or lines connecting the elements, implying a free-flowing interaction pattern where users can interact with any element independently.

</details>

<p></p>



Item with Primary, Secondary and Tertiary actions Holstering enabled on world Using Custom input:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/2d140f33066ed1c92eb1e723cb03416ab78917bd4cc54edb65d76ab4c2372909.md)

### Overview
This image depicts a user interface layout with various interactive elements arranged around a central circular control. The layout includes icons, buttons, and a menu icon at the top right corner.

### Key Elements
- **Central Control**: A large circular element located in the bottom-left quadrant. It has a smaller circle in the middle, possibly indicating a button or a pointer.
- **Top Left Corner**: Three icons are present here, likely representing camera, microphone, and more options.
- **Top Right Corner**: A menu icon with three horizontal lines.
- **Right Side**: A series of circular icons arranged in a curved pattern, each containing different symbols such as a camera, a person, a target, a lightning bolt, a hammer, and others.
- **Bottom Center**: A row of small circular icons with lightning bolt symbols.

### Visual Flow / Relationships
The most prominent visual element is the central control. The icons on the right side are arranged in a curved line, suggesting a radial arrangement. The top icons provide additional functionality, while the bottom icons seem to represent different settings or actions.

</details>

<p></p>



## Desktop

Desktop controls are also contextual, but they’re limited to a list anchored in the bottom right portion of the screen.

You generally have more space available on desktop, because the on-screen elements are confined to the top left, top right, and bottom right corners.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/534e82efe916f732ed414f750a7254968d9e2648b3d4d9472dbdffd0ed7491be.md)

### Overview
This image depicts a virtual environment, likely from a video game or simulation. The scene features a character standing in a room with a tiled floor and yellow walls. There are various interactive elements and icons present, suggesting gameplay mechanics.

### Key Elements
- **Character**: A male figure wearing a black jacket and blue jeans stands facing away from the viewer. He is positioned centrally in the room.
- **Room**: The room has a tiled floor and yellow walls with a grid pattern. There is a doorway leading to another area in the distance.
- **Targets**: Two red bullseye targets are visible on the right side of the image, suggesting a shooting or aiming game mechanic.
- **Weightlifting Figure**: On the left wall, there is a small figure holding a barbell, possibly indicating a weightlifting challenge or exercise.
- **Menu Icons**: At the top left, there are circular icons labeled "TAB" and "ESC," which are typical keyboard shortcuts for game controls.
- **Control Icons**: At the bottom, there are circular icons arranged horizontally, likely representing different actions or abilities within the game.
- **Background**: The sky is clear blue, and there is a green rectangular shape at the top, possibly indicating a health bar or another game metric.

### Visual Flow / Relationships
The character is the most prominent visual element, as he is centrally located. The targets and weightlifting figure provide additional points of interest. The layout suggests a first-person perspective, with the character facing forward into the room. The menu icons and control icons are placed at the top and bottom respectively, providing easy access to game controls.

</details>

<p></p>

*Desktop (@1920x1080)*

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/791215e819954acc20be2b9712afd1997b31a07b09d10852aed482428c668b9a.md)

### Overview
The image depicts a first-person view within a virtual environment, likely a game or simulation. The scene is set in a green-tiled room with a character standing in the center, facing away from the viewer. The environment has a grid-like floor and walls, suggesting a structured, possibly maze-like layout. There are various interactive elements and UI components at the top of the screen.

### Key Elements
- **Character**: A figure wearing a dark outfit stands in the center of the room, facing away from the viewer.
- **Room**: The room is tiled with green squares, creating a grid pattern. The floor and walls are also green, with some areas appearing lighter, possibly indicating different materials or lighting effects.
- **Interactive Elements**: On the left side, there is a small figure holding a sword, seemingly floating in the air. On the right side, there are circular targets or markers.
- **UI Components**: At the top of the screen, there are several rectangular panels with rounded corners. These panels contain icons and labels such as "TAB," "ESC," and others that appear to be controls or settings.
- **Background**: The background is a gradient of blue and yellow, with a vertical yellow line running through the middle.

### Visual Flow / Relationships
- **Most Prominent Element**: The character in the center of the room.
- **Arrows/Connectors**: There are no explicit arrows or connectors visible in the image.
- **Spatial Relationships**: The character is positioned centrally, with the interactive elements on either side and the UI components at the top. The background gradient adds depth to the scene.

</details>

<p></p>

*Desktop (@1920x1080)*

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/d9160e5426444d9933dd00e6a8e84c2c0f8c476778d67e8b90ddd4abfc1f6af3.md)

### Overview
This image depicts a user interface with various control elements arranged at the top and bottom edges of the screen. The central area is blank, suggesting a placeholder or a loading state.

### Key Elements
- **Top Left Corner**: Contains two circular icons labeled "TAB" and "ESC". These appear to be keyboard shortcuts.
- **Top Right Corner**: Features two circular icons with symbols resembling a microphone and a robot face, likely representing voice commands and chat functionalities. Below them are small letters "V" and "B".
- **Bottom Right Corner**: Displays three circular icons with distinct symbols: a crosshair, a circle with dots, and a hand holding a weapon. Below these icons are letters "LMB", "R", and "X".

### Visual Flow / Relationships
The most prominent elements are the circular icons at the corners. There are no arrows or lines connecting the elements, indicating a flat layout without a specific reading order. The elements are evenly distributed around the edges of the screen.

</details>

<p></p>

*Desktop (@1920x1080)*