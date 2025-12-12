Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/objects/grid-and-surface-snapping

# Grid and Surface Snapping

You can snap objects to specific increments in your world with grid, angle, and scale snapping. These features make it possible to be more precise and uniform when placing objects. They are supported by both Local and Global coordinate systems.

## How to use snapping tools

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/15455eaa3f33c017040f9d90c12c8d46ade9dc2f2b219985f8cd31a725007bd5.md)

### Overview
This image displays a user interface snippet with three distinct sections, each containing a number and a small icon. The layout suggests a settings or configuration panel.

### Key Elements
1. **Left Section**
   - **Visual description**: A rectangular box with rounded corners.
   - **Location**: Leftmost part of the image.
   - **Contents**: Contains the text `# 1`.
   - **Visual styling**: Dark gray background, light gray border, white text.

2. **Middle Section**
   - **Visual description**: Another rectangular box with rounded corners.
   - **Location**: Centered horizontally.
   - **Contents**: Contains the text `10°` with a small icon resembling a triangle pointing upwards.
   - **Visual styling**: Dark gray background, light gray border, white text.

3. **Right Section**
   - **Visual description**: A rectangular box with rounded corners.
   - **Location**: Rightmost part of the image.
   - **Contents**: Contains the text `1` with a small icon resembling a camera.
   - **Visual styling**: Dark gray background, light gray border, white text.

### Visual Flow / Relationships
The three sections are arranged horizontally, with no connecting lines or arrows. Each section is equally spaced and aligned horizontally. The elements within each section are static and do not suggest any interactive relationship between them.

</details>

<p></p>



* The snapping tool icons are located on the tools top bar to the right of the Select, Translate, Rotate, and Scale tool icons.
* Get started by selecting a grid, angle, or scale snap icon to toggle snapping on or off.

### Snapping Hotkey

You can hold down the Ctrl key to quickly enable snapping for your transform. This acts the same as clicking the snapping button, and you can toggle this on/off before or during a transform.

## Rotation example

How to rotate an object by 5-degree increments:

- Turn on Angle Snap by either:
  * Selecting the Angle Snap icon in the top bar (middle option)
  * Holding down Ctrl
- Set degrees to 5 (the default is 10).
- Press [E] to toggle into Rotation mode.

## Snapping tools modes

There are three snapping tool mode options:

- Grid snap mode
  * This affects Translation [W] and Planar Translation [W].
  * Objects will move along an axis or a plane by relative increments of grid snap units.
  * Default Grid Snapping is set to increments of 1 unit.
- Angle snap mode
  * This affects Rotation [E].
  * Object will rotate along an axis by relative angles of angle snap units.
  * Default Angle Snapping is set to increments of 10 degrees.
- Scale snap mode
  * This affects Scale [R].
  * Object will scale by multiples of the scale snap percentage value.
  * For example: 100% means the object will scale by 100% of the starting scale value of each snap.
  * Default Scale Snapping is set to increments of 100%.

## Relative and Absolute snapping

You can toggle between relative and absolute snapping using the dropdown.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/059624e39eed0d5b2a8afbff361f3b5e939d73e7e1c6363de372e20df0033f35.md)

### Overview
This image depicts a user interface element showing a dropdown menu with two options: "Relative" and "Absolute". The dropdown is triggered by a button labeled "Relative" which has a checkmark icon next to it. The interface appears to be part of a design tool or software application.

### Key Elements
- **Visual description**: A dropdown menu with two options.
- **Location**: Positioned at the right side of the interface.
- **Contents**: 
  - "Relative" option with a checkmark icon.
  - "Absolute" option without any icon.
- **Visual styling**: The dropdown has a blue background with white text. The "Relative" option is highlighted, indicating it is currently selected.

### Visual Flow / Relationships
- Most prominent visually: The "Relative" option with the checkmark.
- Arrows or lines: None visible.
- Spatial relationships: The dropdown menu is adjacent to the "Relative" button and extends downward from it.

</details>

<p></p>



Relative: Snap to a value relative to the object’s starting position.

Absolute: Snap to a value regardless of the starting position.

## Surface snapping

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/7a245d156e51226f7dbfb131fcdfdfc51d72b5ab1fdd8af557d128d9cdd2b54b.md)

### Overview
The image depicts a 3D model of a house with various interactive elements overlaid on it. The house has a red roof, beige walls, and a gray door. There are also colored markers and arrows indicating specific points of interest or interaction.

### Key Elements
- **House Model**: A 3D model of a house with a red roof, beige walls, and a gray door. The house has windows and a chimney.
- **Blue Arrow**: A blue arrow pointing upwards from the roof towards the top of the image.
- **Red Arrow**: A red arrow pointing downwards from the bottom left corner of the image.
- **Green Circle**: A green circle located near the bottom left side of the house.
- **Orange Circle**: An orange circle located near the bottom right side of the house.
- **User Interface Elements**: At the top of the image, there are several interface elements including numbers, angles, and a dropdown menu labeled "Absolute."

### Visual Flow / Relationships
- **Most Prominent Element**: The blue arrow pointing upwards.
- **Arrows**: The blue arrow is the most prominent due to its central placement and directionality. The red arrow is less prominent but still noticeable.
- **Spatial Relationships**: The green and orange circles are positioned at the base of the house, while the blue arrow is directed upwards from the roof. The user interface elements are at the top of the image, suggesting they control the view or interaction with the house model.

</details>

<p></p>



Follow these steps to snap an object’s pivot to the collider of another object:

- First, select the object you want to snap and change to Translate mode [W].
- Next, click the surface snap toggle button (or hold Ctrl + Shift) to see the surface snap manipulation handle.
- Then, drag the orange sphere handle on top of another object to surface snap the selected object to a collider.