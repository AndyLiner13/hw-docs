Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/objects/grid-and-surface-snapping

# Grid and Surface Snapping

You can snap objects to specific increments in your world with grid, angle, and scale snapping. These features make it possible to be more precise and uniform when placing objects. They are supported by both Local and Global coordinate systems.

## How to use snapping tools

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_072155_20251211_072155.md)

### Overview
This image displays a user interface snippet with several interactive elements arranged horizontally. The elements include numbers, symbols, and a degree symbol indicating some form of measurement or selection.

### Key Elements
- **Visual description**: Small rectangular buttons with rounded corners.
- **Location**: Horizontally aligned across the top.
- **Contents**:
  - First button: Contains the number `1` and a hashtag symbol (`#`).
  - Second button: Displays a triangle symbol (`Δ`) followed by the text `10°`.
  - Third button: Shows a camera icon (`📷`) next to the number `1`.
- **Visual styling**: Buttons have a dark background with white text and light gray borders.

### Visual Flow / Relationships
The elements are arranged in a linear fashion, suggesting a sequence or a set of options. There are no arrows or lines connecting them, implying that they are independent but part of a larger interface.

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

[All image details and metadata](../../../../images/output/img_20251211_072244_20251211_072244.md)

### Overview
This image depicts a user interface element showing a dropdown menu with two options: "Relative" and "Absolute". The dropdown is open, revealing the options against a dark background. The surrounding interface includes various tool icons and settings at the top.

### Key Elements
- **Visual description**: The dropdown menu is rectangular with rounded corners.
- **Location**: Positioned centrally below the top bar of the interface.
- **Contents**: Contains two options labeled "Relative" and "Absolute".
- **Visual styling**: The dropdown has a dark background (#000000) with white text for the options. The "Relative" option is highlighted with a blue background and a checkmark icon next to it.

### Visual Flow / Relationships
- **Most prominent visually**: The open dropdown menu.
- **Spatial relationships**: The dropdown is adjacent to the top bar containing tool icons and settings. There are no arrows or lines connecting elements, but the dropdown implies a reading order moving downward from the top bar.

</details>

<p></p>



Relative: Snap to a value relative to the object’s starting position.

Absolute: Snap to a value regardless of the starting position.

## Surface snapping

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_072342_20251211_072342.md)

### Overview
The image depicts a 3D model of a house with various interactive elements overlaid on it. The house is shown in a light blue gradient background, and there are directional arrows and colored points indicating possible manipulations or transformations of the model.

### Key Elements
- **House Model**: A 3D model of a house with a red roof, white walls, and a gray door. The windows are outlined in black.
- **Red Arrow**: Positioned at the bottom left, pointing towards the bottom left corner of the house. It has a green dot near its tip.
- **Blue Arrows**: Two blue arrows are present, one pointing upwards and the other extending horizontally across the roof of the house.
- **Green Dot**: Located near the red arrow, slightly above and to the right of the red arrow's tip.
- **Orange Circle**: Situated near the bottom right of the house, slightly above the red arrow's tip.
- **User Interface Elements**: At the top of the image, there are several interface elements including numbers, angles, and a dropdown menu labeled "Absolute."

### Visual Flow / Relationships
The most prominent visual elements are the directional arrows and the colored points. The red arrow seems to indicate a rotation or translation direction, while the blue arrows suggest scaling or moving actions. The green dot and orange circle likely represent specific points of interest or interaction within the model.

</details>

<p></p>



Follow these steps to snap an object’s pivot to the collider of another object:

- First, select the object you want to snap and change to Translate mode [W].
- Next, click the surface snap toggle button (or hold Ctrl + Shift) to see the surface snap manipulation handle.
- Then, drag the orange sphere handle on top of another object to surface snap the selected object to a collider.