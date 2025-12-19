Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started/getting-started-with-tutorials/use-assets-from-tutorials

# Use Assets from Tutorials

As you explore these tutorial worlds, you may find scripts, art, or other entities that you would like to use in your own worlds. Go for it!

<details>
<summary>Create Asset Template</summary>

<p></p>

[Create Asset Template](../../../image_data/2d43cdedd9413db3e28176c1eeac1887810d097460ad6c84aa7b6baa22dffec9.md)

### Overview
This image depicts a contextual menu that appears when interacting with a 3D object in a design or modeling software environment. The menu is dark-themed with white text and light gray accents. The heart-shaped object is prominently displayed in the background, suggesting the focus is on a specific 3D model.

### Key Elements
- **Visual description**: The menu has a rectangular shape with rounded corners.
- **Location**: Positioned centrally, slightly overlapping the heart-shaped object.
- **Contents**: 
    - "Copy" with shortcut "Ctrl + C"
    - "Cut" with shortcut "Ctrl + X"
    - "Paste" with shortcut "Ctrl + V"
    - "Paste as child"
    - "Duplicate selection" with shortcut "Ctrl + D"
    - "Create Asset" highlighted with a red bounding box
    - "Delete selection" with shortcut "Del"
    - "Create parent object" with shortcut "Ctrl + G"
    - "Unparent selection"
    - "Scroll to selection"
    - "Preview from here"
- **Visual styling**: The menu has a dark background (#000000) with white text for readability. The highlighted "Create Asset" option has a subtle glow effect.

### Visual Flow / Relationships
- **Most prominent visually**: The "Create Asset" option is emphasized with a red bounding box.
- **Arrows, lines, connectors**: None visible.
- **Spatial relationships**: The menu items are arranged vertically, with each item followed by its corresponding keyboard shortcut.

</details>

<p></p>



Tutorials contain the following categories of assets:

* **Assets**: Individual entities or groups of entities in a world can be added to your personal Asset Library for use in other worlds.
* **Scripts**: You can copy scripts or parts of scripts from one world into a text editor for insertion into the scripts in other worlds.

**Note**: These worlds are non-FBS (File Backed Scripts) worlds, which means that asset templates created from these worlds are not compatible with FBS worlds.

**Note**: If you create an asset template from one of these non-FBS tutorial worlds and the template contains scripts, the scripts are included in the asset template. When you deploy an asset template into a non-FBS world, you create a separate instance of the script for each instance of the asset template, even though the scripts are identical. You can end up with many script instances to manage. More information is provided below.

## Create Asset Templates from Entities

To add an entity to your Asset Library, please complete the following steps. When finished, the entity is stored as an **asset template**. Asset templates can be added to your other worlds. Also, they can be edited as needed, and those edits can be consumed in the worlds where the template has been deployed.

- In the desktop editor, locate the entity in the world. Select it.
- In the Hierarchy panel, verify that you have selected all sub-entities of the entity that you wish to add to your Library.
- Right-click the entity in the Hierarchy panel and select **Create Asset**.
- Add a meaningful name and description for the asset.
- Choose the appropriate folder where you would like to store the asset.

**Note**: For assets that you would like to share with your team or across multiple worlds, you should store them in a shared folder. For more information, see [Shared Folders](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/shared-folders/).

- Click **Create**. The asset template is created in the selected folder.

<details>
<summary>Create asset template</summary>

<p></p>

[Create asset template](../../../image_data/e80555464ed752c3d1fd836e77c8a84a09eed056c0717c6be7a39c0f24de28c7.md)

### Overview
This is a screenshot of a modal window titled "Create New Asset." The window contains fields for entering an asset name, description, selecting an asset type, and choosing a folder within a file structure. There are also buttons for canceling or creating the asset.

### Key Elements
- **Title Bar**: "Create New Asset" at the top.
- **Warning Banner**: A yellow banner with a warning icon and text stating that the feature is only recommended for desktop use due to VR limitations.
- **Asset Name Field**: Located below the title bar, with the text "Red Heart" entered.
- **Description Text Area**: Below the asset name field, containing the text "Test asset from Spawning tutorial."
- **Asset Type Dropdown**: Positioned to the right of the description area, showing "Template Asset."
- **Folder Structure**: A nested folder structure under "All Assets" and "My Folders," with "My Assets" highlighted.
- **Buttons**: Two buttons at the bottom, labeled "Cancel" and "Create."

### Visual Flow / Relationships
The most prominent visual element is the "Create New Asset" title bar. The warning banner is positioned above the form fields. The form fields follow a logical sequence from top to bottom: asset name, description, asset type selection, and then folder selection. The buttons at the bottom are clearly defined as interactive elements, with "Create" being the primary action button.

</details>

<p></p>



This asset template is now available for you to use in any world!

To add the asset to a world, open the Asset Library tab in the desktop editor. Locate the folder where the asset is located. Drag the asset into the world.

Asset templates can also be spawned into a world at runtime using TypeScript. For more information, see [Spawning and Pooling in TypeScript](../../Feature%20samples/Spawning%20and%20pooling%20in%20typescript/Module%201%20-%20Setup.md).

## Use Scripts from Worlds

When you create a clone of a tutorial world, you can gain access to read and write the script files that power the world. These scripts can contain useful snippets or even entire systems that can be used in your own worlds.

**Note**: The tutorial worlds are built using TypeScript v2.0.0. If your world is using TypeScript v1.0.0, these scripts will not work directly in your world. Some syntax and reference fixes are required.

### Using scripts in your worlds

Useful TypeScript from the tutorial worlds is typically entire systems that can be applied and modified for your needs. For example, you may want to use the GameManager system in your world. However, this system may be spread across multiple files, each of which has references to other files.

Below are some recommended practices for using these systems. In the files:

* Review the list of imports.
  + Imports from the Meta Horizon Worlds APIs must be included in your scripts to use the code. Be sure to verify that the imports are actually used in the current script.
  + Some import lines may be pulling in references in other script files in the world. You should review those files to determine if you need to import the entire file or some elements of them.
* Review the list of exports.
  + Entities that are exported from the script may have implications on your code.
* Review the list of events.
  + Events defined within the code need to be supported in your code.
  + Events that are referenced in the code may have an equivalent event under a different name in your code.
* Review the script properties.
  + In some cases, the script properties may refer to assets in the Asset Library or entities in the world. These references may need to be fixed in your world.
* You may want to insert test code, such as console messages into the functions and methods that you are trying to use. These can be used to assess that the system is processing data correctly.

### Scripts as files

If you are using the desktop editor, scripts are stored as independent files in local storage.

**Note**: You cannot copy and paste files from one world’s directory to another. These files are not automatically picked up by the desktop editor and integrated into the world’s codebase. Instead, you must open the files and copy out the contents, pasting them into new or existing script files associated with the target world.

**Note**: These worlds are non-FBS worlds. In a non-FBS world, the option to Spawn New Gizmo from a script in the Script panel is not available. For more information, see [Tutorial Assumptions](Tutorial%20Assumptions.md).

To locate your files, please do the following:

- In the desktop editor, open the **Scripts panel**.
- Click the **Gear icon**.
- In the Script Settings window, click **Script editing**.
- Locate the value for the External Editor Directory.
- Navigate your local environment to find this directory. Scripts for individual worlds are stored as sub-directories.

<details>
<summary>Script Editing settings</summary>

<p></p>

[Script Editing settings](../../../image_data/ca7d0609d7c980a46086ed64ee782af1647e7ac7ceb5dc76e75d70e1d162238f.md)

### Overview
This image depicts a settings interface titled "Script Settings." It is a dialog box with a sidebar menu on the left and a content area on the right. The content area is divided into sections with labels and options related to script editing.

### Key Elements
- **Sidebar Menu**: Located on the left side, it has three options: "Script editing," "API," and "Console." Each option is a clickable item.
- **Content Area**: On the right, it displays the "Script editing" section with several settings.
  - **External Editor**: A label followed by "Default (VS Code)" indicating the default external editor.
  - **External Editor Directory**: A label followed by a path: "C:/Users/solson/AppData/LocalLow/Meta/Horizon Worlds."
  - **File-Backed Scripts**: A label with a green "Update available" message underneath.
  - **Buttons**: Two buttons labeled "Select" and "Reset" appear next to some of the settings.
  - **Review Button**: A button labeled "Review" is located at the bottom right of the content area.
- **Apply and Cancel Buttons**: At the very bottom, there are two buttons: "Cancel" and "Apply."

### Visual Flow / Relationships
The most prominent visual element is the "Script editing" section in the content area. The buttons are arranged horizontally at the bottom. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from left to right and then down the page.

</details>

<p></p>



### Scripts in asset templates

**Note**: Scripts in asset templates from non-FBS worlds do not behave like other assets.

When an asset template is deployed into a world, any script that is included in it is deployed as a deep copy of the original.

* The deployed script is a completely independent asset from the original script.
  + It is not a versioned instance of the original.
  + Changes made to the script in the world cannot be deployed back to the original asset.
* References related to the script may be broken:
  + The script may not be attached to the entity to which it is supposed to be attached, which is caused by the script being created as an entirely new asset.
  + When the script is re-attached, script-based properties must be defined again.

**Tip**: You may find it easier to create scripts as asset templates containing a single asset (the script). This effectively turns scripts in the Asset Library as read-only assets that can be deployed and then connected to the entities in your world.