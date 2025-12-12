Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/adding-and-editing-scripts

# Adding and editing scripts

## Set up desktop editor to use your IDE

Meta Horizon Worlds Creator docs reference using Visual Studio Code (VS Code), but you can use any IDE you’ve installed on your Windows PC. See [Adding an IDE to Desktop Editor](../../Scripting/Get%20started%20with%20TypeScript/Adding%20an%20IDE%20to%20the%20desktop%20editor.md) for detailed instructions on how to set up desktop editor with your preferred IDE.

For troubleshooting VS Code refer to the documentation on [Troubleshooting VS code for Meta Horizon Worlds library module](../../Scripting/Get%20started%20with%20TypeScript/If%20VS%20Code%20can’t%20find%20a%20V2%20module.md),

## Getting started with TypeScript scripting

Refer to [TypeScript Getting Started](../../Scripting/Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md) docs for more information on how to start using TypeScript with Meta Horizon Worlds.

## Adding an existing script to an entity

These instructions walk you through assigning a script reference after you have created the script.

- Select an object in the Hierarchy menu or in the scene pane.
- In the **Properties** panel, scroll to the **Script** section.
- Select a script from the **Attached Script** dropdown menu.
- The script is applied to the object, and the properties defined in the script now appear in the **Script** section of the **Properties** panel.
  <details>
  <summary>The script properties appear in the Properties panel.</summary>
  
  <p></p>
  
  [The script properties appear in the Properties panel.](../../image_data/c7d9e4349d06e36196834bc63146ef39826bb11c44a65c64a8d313f104003252.md)
  
  ### Overview
  This image depicts a user interface element showing a script configuration panel. It includes a dropdown menu, several input fields, and a few buttons. The layout suggests it is part of a software application, likely for game development or animation, given the terms "Rot_Bob:RotateAndBob" and "rotSpeed," "bobSpeed," "bobAmplitude."
  
  ### Key Elements
  - **Dropdown Menu**: Located at the top, it displays "Attached Script" followed by "Rot_Bob:RotateAndBob." It has a light blue background with a darker blue border.
  - **Input Fields**: Below the dropdown, there are three labeled input fields:
    - **rotSpeed**: Contains the value "0.01" in a light gray input field with a dark gray border.
    - **bobSpeed**: Contains the value "1" in a similar light gray input field with a dark gray border.
    - **bobAmplitude**: Contains the value "0.02" in a similar light gray input field with a dark gray border.
  - **Buttons**: There are two small buttons located at the top right corner of the panel. One appears to be a standard button, while the other seems to be a dropdown toggle button indicated by the downward arrow next to the "Script" label.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the dropdown menu, as it is the first interactive element users would engage with. The input fields follow in a horizontal sequence beneath the dropdown, and the buttons are positioned at the top right corner. The layout suggests a linear reading order moving from left to right and then down to the buttons.
  
  </details>
  
  <p></p>
  
  

## Copying scripts

Script copying is an available feature to save you time. You can copy a script from an object, and paste it directly onto another. You can reference an object from a script by dragging it onto a script that is already attached to an object.

#### To copy a script

- Open the **Properties panel** for an object that already has a script attached.
- Scroll down to the **Script** section, and click the menu dropdown.
- From the menu that appears, select **Copy Script**. The script is copied into memory.

<details>
<summary>Image shows the script menu dropdown, with the "Copy Script" option highlighted.</summary>

<p></p>

[Image shows the script menu dropdown, with the "Copy Script" option highlighted.](../../image_data/4b59c7ad461f817f37f5ab8b98d5551f4529f2738269433191cf35d101382416.md)

### Overview
This image depicts a contextual menu that appears when interacting with a specific item labeled "StartGameTrigger_COMPLETE:StartGameTrigge..." in a user interface. The menu contains several options related to script management.

### Key Elements
- **Visual description**: The menu has a dark gray background with white text and light gray separators.
- **Location**: The menu is positioned directly beneath the highlighted item.
- **Contents**:
  - **Edit script**: Located at the top of the menu.
  - **Copy script**: Highlighted in yellow, indicating selection.
  - **Paste all script properties**: Below the "Copy script" option.
  - **Remove script**: At the bottom of the menu.
- **Visual styling**: The menu has a clean, modern look with a consistent color scheme.

### Visual Flow / Relationships
- **Most prominent visually**: The "Copy script" option is emphasized due to its highlighted status.
- **Arrows, lines, connectors**: None present.
- **Spatial relationships**: The items are arranged vertically, with each option clearly separated by light gray lines.

</details>

<p></p>



#### To paste a copied script

- Open the **Properties Panel** for another object.
- Navigate to the **Script** section, then click the menu dropdown.
- From the menu that appears, select **Paste all script properties**. A copy of the script is attached to the object.

<details>
<summary>Image shows the script menu drop-down, with the "Paste as new attached script" option selected.</summary>

<p></p>

[Image shows the script menu drop-down, with the "Paste as new attached script" option selected.](../../image_data/3be1e4d1deddbd6af7c9eb0dbad686cd79da7159eeb9594f9114dff318419099.md)

### Overview
This image depicts a user interface element within a game development tool, specifically showing a dropdown menu that appears when interacting with a script property in a game object's properties panel. The interface is dark-themed with a focus on the dropdown options.

### Key Elements
- **Visual description**: A dropdown menu with a black background and white text.
- **Location**: Positioned at the bottom right of the screen.
- **Contents**: Contains four menu items labeled as follows:
  - Edit script
  - Copy script
  - Paste all script properties (highlighted in yellow)
  - Remove script
- **Visual styling**: The dropdown has a simple design with no additional borders or gradients. The text is white against a black background.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu itself. The menu items are arranged vertically, with the highlighted option indicating the current selection. There are no arrows or lines connecting elements, but the vertical arrangement implies a sequential reading order.

</details>

<p></p>

