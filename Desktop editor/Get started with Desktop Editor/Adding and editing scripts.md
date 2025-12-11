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

[The script properties appear in the Properties panel.](../../../../images/output/img_20251211_035857_20251211_035857.md)

### Overview
This image depicts a user interface element showing a script configuration panel. It includes a dropdown menu for selecting a script, followed by three adjustable parameters related to rotation and bobbing motion.

### Key Elements
- **Dropdown Menu**: Located at the top, it displays "Attached Script" and a dropdown arrow. The selected option is "Rot_Bob:RotateAndBob".
- **Parameters Section**: Below the dropdown, there are three parameter fields labeled "rotSpeed," "bobSpeed," and "bobAmplitude." Each field has a corresponding value input box.
  - **rotSpeed**: Positioned under "rotSpeed," it contains the value "0.01."
  - **bobSpeed**: Positioned under "bobSpeed," it contains the value "1."
  - **bobAmplitude**: Positioned under "bobAmplitude," it contains the value "0.02."

### Visual Flow / Relationships
The layout is linear, moving from the top-down and left-to-right. The dropdown menu is the most prominent element due to its larger size and placement at the top. The parameters follow in a vertical sequence beneath the dropdown.

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

[Image shows the script menu dropdown, with the "Copy Script" option highlighted.](../../../../images/output/img_20251211_035946_20251211_035946.md)

### Overview
This image shows a contextual menu that appears when interacting with a script named "StartGameTrigger_COMPLETE:StartGameTrigge..." in a development environment. The menu includes options for editing, copying, pasting properties, and removing the script. The menu is presented against a dark background typical of code editors or IDEs.

### Key Elements
- **Visual description**: The menu has a dark background with light gray text and a yellow highlight around the "Copy script" option.
- **Location**: The menu is positioned centrally below the script name.
- **Contents**: 
  - "Edit script"
  - "Copy script" (highlighted)
  - "Paste all script properties"
  - "Remove script"
- **Visual styling**: The text is white, and the menu has a subtle shadow effect, giving it a slight elevation from the background.

### Visual Flow / Relationships
The most prominent element is the "Copy script" option, which is highlighted. The menu items are arranged vertically, with no arrows or lines connecting them. The visual hierarchy suggests that the user can interact with any of these options, but the highlighted "Copy script" indicates it is currently the focus.

</details>

<p></p>



#### To paste a copied script

- Open the **Properties Panel** for another object.
- Navigate to the **Script** section, then click the menu dropdown.
- From the menu that appears, select **Paste all script properties**. A copy of the script is attached to the object.

<details>
<summary>Image shows the script menu drop-down, with the "Paste as new attached script" option selected.</summary>

<p></p>

[Image shows the script menu drop-down, with the "Paste as new attached script" option selected.](../../../../images/output/img_20251211_040035_20251211_040035.md)

### Overview
This image depicts a user interface element within a game development tool, specifically showing a properties panel for an object named "StartGameTrigger_COMPLETE." The interface includes a dropdown menu with options related to script management.

### Key Elements
- **Properties Panel**: Located at the top, displaying various categories such as "Debug Data," "Behavior," "Attributes," and "GameplayTags."
- **Object Name**: "StartGameTrigger_COMPLETE" displayed prominently in the dropdown menu.
- **Dropdown Menu**: Appears as a right-click context menu with options: "Edit script," "Copy script," "Paste all script properties," and "Remove script."
- **Three-Dot Icon**: Positioned to the right of the dropdown menu, indicating additional options or settings.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu, which is the focal point of the interaction. The three-dot icon suggests that clicking it would reveal more options, implying a hierarchical relationship between the main menu and the additional settings.

</details>

<p></p>

