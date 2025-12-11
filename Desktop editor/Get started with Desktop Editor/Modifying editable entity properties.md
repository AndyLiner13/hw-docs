Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/modifying-editable-entity-properties

# Modifying editable entity properties

Many of the properties of objects in your world can be modified after you’ve added them. To edit the property of an object, click the object to select it. This lets you see its available properties using the **Properties** panel.

**To modify the properties of an object**

- Select an object in the **Hierarchy** panel or in the **Scene** panel of the desktop editor.

  <details>
<summary>An oject is selected in the Hierachy and Scene pane</summary>

<p></p>

[An oject is selected in the Hierachy and Scene pane](../../../../images/output/img_20251211_042551_20251211_042551.md)

### Overview
This image depicts a 3D modeling environment interface, likely from a game development tool such as Unity. The main focus is on a 3D model of a green gemstone placed in a virtual environment. The interface includes a sidebar with a hierarchy view and a viewport showing the 3D scene.

### Key Elements
- **Sidebar (Left Panel)**: 
  - **Visual description**: A dark-themed sidebar with a grid layout.
  - **Location**: Left side of the screen.
  - **Contents**: Contains a tree-like structure labeled "Hierarchy" with nodes like "Spawn Point," "Gemstone," and "Correlated Scripts."
  - **Visual styling**: Dark background with light text, red highlights around certain nodes.

- **Viewport (Main Area)**:
  - **Visual description**: A 3D scene with a grid floor and walls.
  - **Location**: Right side of the screen.
  - **Contents**: A green gemstone model centered in the scene with the word "Start" above it.
  - **Visual styling**: The gemstone has a green color with a reflective surface, and the walls are yellow with a grid pattern.

- **Red Highlighted Box**:
  - **Visual description**: A red rectangular box surrounding the gemstone.
  - **Location**: Surrounding the gemstone in the viewport.
  - **Contents**: The box is solid red with no additional elements inside.
  - **Visual styling**: Solid red color, thin border.

### Visual Flow / Relationships
- **Most Prominent Element**: The green gemstone in the center of the viewport.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: The gemstone is centrally located within the viewport, with the red box highlighting it. The sidebar provides contextual information about the scene.

</details>

<p></p>


- Navigate to the object’s **Properties** panel, search for the **Attributes** category, then change the value of the **Tint Color** to *(1, 0, 0)* and the **Tint Strength** to *1.00*. Your object will change from the color Green to Red.

  <details>
<summary>Changing the Tint Color and Tint Strength of the emerald</summary>

<p></p>

[Changing the Tint Color and Tint Strength of the emerald](../../../../images/output/img_20251211_042720_20251211_042720.md)

### Overview
This image depicts a user interface element from a software application, specifically a settings or properties panel. The focus is on a section labeled "Attributes," which includes various parameters such as Position, Rotation, Scale, Tint Color, and Tint Strength. The interface has a dark theme with a black background and white text, and some elements are highlighted with red borders.

### Key Elements
- **Tint Color**: Located in the middle of the Attributes section, this area contains a color swatch with a red border and a small rectangle indicating the current tint color (RGB values shown as 1, 0, 0).
- **Tint Strength**: Positioned next to the Tint Color, it displays a value of 1.00, indicating the strength of the tint applied to the color.
- **Position, Rotation, Scale**: These parameters are listed above the Tint Color section, showing numerical values for X, Y, Z coordinates and rotation angles.
- **Brightness**: Located below the Tint Color section, it shows a value of 1.00.
- **Texture Asset**: This section allows users to select a texture asset, indicated by a dropdown menu labeled "Select Texture."
- **Load full textures before visible**: A checkbox option at the bottom left corner of the Attributes section.

### Visual Flow / Relationships
The most prominent visual elements are the Tint Color and Tint Strength sections, as they are highlighted with a red border. The interface follows a logical reading order from top to bottom, with parameters grouped under the Attributes heading. The Tint Color swatch is visually distinct due to its red border, drawing attention to the color selection aspect.

</details>

<p></p>


- In the **Properties** panel, navigate to the **Behavior** category. You can toggle the visibility of the object on or off by clicking **Visible**.

  <details>
<summary>Toggling the visibility of an object</summary>

<p></p>

[Toggling the visibility of an object](../../../../images/output/img_20251211_042817_20251211_042817.md)

### Overview
This image displays a user interface element from a software application, specifically a settings or properties panel. The focus is on a toggle switch within a section labeled "Behavior."

### Key Elements
- **Visible Toggle Switch**: Located in the center of the image, highlighted with a red rectangle. It has a white square with a black border indicating the toggle area. The toggle switch is currently in the 'off' position, as indicated by the white square being on the right side.
- **Section Header "Behavior"**: Positioned above the toggle switch, with a small downward arrow indicating a dropdown or expandable section.
- **Other Options**: Below the toggle switch, there are additional options such as "Reflect Light & Cast Shadow," "Collidable," and "Collision Layer." These options have checkboxes next to them, some of which are checked (indicated by filled squares).

### Visual Flow / Relationships
The most prominent visual element is the toggle switch, as it is centrally located and highlighted. The options below it are arranged vertically, suggesting a linear reading order from top to bottom. The "Behavior" section header acts as a grouping element for the toggle switch and the other options beneath it.

</details>

<p></p>


- You can also select a vector label, such as **Position**, and then copy and past the value of that vector into another vector input label in the panel.