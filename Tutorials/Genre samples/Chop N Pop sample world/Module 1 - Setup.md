Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/chop-n-pop-sample-world/module-1-setup

# Module 1 - Setup

<details>
<summary>Thumbnail of Chop N Pop World</summary>

<p></p>

[Thumbnail of Chop N Pop World](../../../image_data/031a579878af2add51419beec842a9aea07bc5e6ce1c09ebe12b41a46ac78f03.md)

### Overview
This image depicts a scene from a video game set in a graveyard at dusk or night. The environment features tombstones, gravestones, and a few characters resembling zombies or undead figures. The atmosphere is eerie, with a purple sky and sparse lighting.

### Key Elements
- **Foreground Characters**: Two humanoid figures with green skin, red glowing eyes, and tattered clothing are prominently displayed. One is closer to the viewer, while the other is further back.
- **Background Characters**: Additional figures can be seen in the distance, also appearing as zombies or undead, standing near the graves.
- **Environment**: The setting includes tombstones, gravestones, and a gate leading into the graveyard. There are trees without leaves, suggesting autumn or winter.
- **Lighting**: The scene is dimly lit, with a purple hue dominating the sky, creating a spooky ambiance.

### Visual Flow / Relationships
The foreground characters are the most prominent, drawing attention due to their size and glowing eyes. The background characters provide depth and context to the scene. The layout suggests a progression towards the gate, implying movement through the graveyard.

</details>

<p></p>



Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

Welcome to Chop ‘N Pop: Graveyard Bash, a good old-fashioned slasher game set in a haunted graveyard. Grab an axe or a gun, and chop and pop your way through waves of zombies and skeletons!

This world features a complete player vs. enemy gaming experience, including all applicable systems to develop these types of games. The goal of this sample is to deploy working game systems that creators can easily repurpose and deploy in their own worlds. Using the system in this world can save you time and effort in building them on your own.

## Game Overview

This game features a simple lobby, which leads into a rectangular gameplay area: a cemetery. When you approach the cemetery, you are presented with a set of weapons from which you can arm yourself. Crossing a Trigger Zone awakens the enemies, and it’s time to go to work.

This game features configurable waves of enemies, which can be combinations of zombies and skeletons. By default, the game is designed to send three waves, after which the game ends.

To address the enemies, the player can select either an axe or a pistol. Use of the pistol requires collection of ammo clips and reloading the weapon as needed.

In the cemetery is other loot: more ammo clips, weapons, and health potions.

These items can be modified as needed.

No score is kept. Skill and level progression are not part of this tutorial.

### On mobile and desktop

To explore the finished world on mobile or desktop, please use the following link: <https://horizon.meta.com/world/1388615685427535>.

**Note**: Desktop users must be signed in first.

## Prerequisites

Before you begin, please verify that you have acquired access to your own copy of the Chop ‘N Pop: Graveyard Bash world. For more information, see [Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

**Note**: This tutorial assumes that you are familiar with the desktop editor, a desktop application for world building in Meta Horizon Worlds. If you are new to the desktop editor, you might want to start with the Build your first game tutorial. See [Module 1 - Build your first game](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game).

## Get Started

Open your copy of the world in the desktop editor, where you can explore it in either Build mode or Preview mode to familiarize yourself with the world and its structures before modifying it.

**Tip**: In the Hierarchy panel, you can review the entities that are present in the world. In particular, open the **World Instances** entity. Underneath, you can see empty reference objects that serve as the attachment points for key system scripts. Some system scripts may be deployed through different structures.

### Key game systems

The next module explores the core game scripts, which serve as the foundational layer beneath many of the gaming systems.

Subsequent modules explore the scripts and entities for the following key game systems:

* Game Manager
* Floating Text Manager
* Player Manager
* Loot System
* Weapons System
* Enemy Wave Manager
* NPC System

## Advanced Features

This tutorial world was developed using the following advanced features.

**Note**: These features are not yet ready for public use in a Production environment. They are likely to be released at some point in the future.

### File Backed Scripts

This world has been built to use File Backed Scripts, in which script files are stored and maintained on the server. This change in architecture enables:

* Larger script sizes
* Multiple entities referencing the same script
  + More consistent deployment of instances of asset scripts
  + When an asset template is deployed or spawned into the world, a single instance of the script is referenced, instead of creating/spawning multiple instances of the script in the world.
* No more use of Script gizmos in the world
  **Tip**: In an FBS world, to deploy a script that is not specific to an individual entity, you can add an empty reference object and then attach the script to it. This method is used for many of the helper system scripts in this world. For more information, explore the **World Instances node** in the Hierarchy panel.

**Limitations**:

**Note**: This complex feature is in active development.

The following limitations apply:

**Note**: You can upgrade your non-FBS world to FBS. However, it is not possible to switch an FBS world to a non-FBS world. You should upgrade a clone of your world first.

* Do not change a world to FBS that is in Production or is close to being released to Production.
* Assets saved in an FBS world are not compatible with a non-FBS world.
* FBS does not support version management of scripts.

**To use FBS**:

FBS is a script-related feature that can be enabled in your world. Please do the following:

- In the desktop editor, click the **Scripts menu**.
- In the Scripts panel, click the **Gear icon**.
- In the Script Settings window, click **Script editing**.
- Next to File Backed Scripts, click the **Review button**. If you see an **Info button**, your world is already set to FBS.
  <details>
  <summary>Image of settings to enable File Backed Scripts</summary>
  
  <p></p>
  
  [Image of settings to enable File Backed Scripts](../../../image_data/c18706f969fd0b4f139ff824f788bb5fc0c39b9a0f5901a273033ef1f671e1a0.md)
  
  ### Overview
  The image displays a user interface element within a software application, specifically a settings menu for script editing. The main focus is on the "Script Settings" dialog box, which contains various configuration options related to script editing. The interface has a dark theme with some elements highlighted in red for emphasis.
  
  ### Key Elements
  - **Top Bar**: Located at the very top, this bar includes a dropdown labeled "Scripts" with a downward arrow indicating a menu. It also features a gear icon for settings and a three-dot menu icon.
  - **Search Box**: Positioned below the top bar, this is a search field for finding scripts.
  - **Settings Dialog**: A modal window titled "Script Settings" is open, showing options under "Script editing." It includes fields for selecting an external editor and specifying the directory for file-backed scripts.
  - **Buttons**: Two buttons are visible at the bottom of the dialog: "Cancel" and "Apply."
  - **Review Button**: A button labeled "Review" is located towards the right side of the dialog box.
  - **Background**: The background of the main application interface is partially visible behind the dialog box.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Script Settings" dialog box, which is centrally placed and occupies a significant portion of the screen. The gear icon within the top bar is likely intended to be clicked to access more settings. The "Review" button is positioned to the right of the dialog box, suggesting that users can click it after reviewing the settings before applying them. The "Cancel" and "Apply" buttons are at the bottom, indicating the final steps in the process.
  
  </details>
  
  <p></p>
  
  
- To upgrade your world to FBS, click **Update**. **This change cannot be undone.**

For more information, see [Use File-Backed Scripts](../../../VR%20tools/Scripting/Use%20file-backed%20scripts.md).

### Gen AI

Many of the audio assets in this world were generated using Gen AI. In the desktop editor, click the **Gen AI menu**.

Using a few words, you can prompt Gen AI to generate a sound, which you can modify a bit through the interface. Saved sounds are stored in your Asset Library and can be imported into your worlds.

**Tip**: For refinement, you can download the sound asset and process it through your preferred external sound editor, before uploading it back through the Asset Library tab in the desktop editor.

### NPCs

The zombies and skeletons in the world are taken from the NPC library available to creators through the desktop editor. NPCs allow you to deploy premade animated assets, which you can augment with TypeScript-based behavior. For more information on NPCs, see [NPCs](../../../Desktop%20editor/NPCs/NPCs%20Overview.md).

In Chop ‘N Pop: Graveyard Bash, NPCs are controlled by a dedicated system, which also surfaces a set of configurable parameters for each type of NPC. For more information, see [Module 10 - NPC System](Module%2010%20-%20NPC%20System.md).

## Learning Pathways

### Clone and modify

In your world, you can begin exploring the entities in the world to learn by making modifications:

* Under the World Geo node, you can access all of the entities that have physical presence in the world. These items can be modified, moved, duplicated, and deleted to reshape the playing area of the world
  **Note**: How does the gameplay change if you shrink each dimension of the cemetery a bit? How does it change if you expand the dimensions? Do you need to add larger or more waves?
* For many of the gameplay systems, configuration parameters for those systems are surfaced in the Script properties panel, where you can make modifications to see the impacts on gameplay.
  **Note**: You can even try to swap in your own assets to use with these systems. This can be a way of testing deployment of your assets with these systems before bringing them into your own world.

### Using the systems

Another approach is to explore through the docs to learn how to use individual systems. For example, if you need to learn more about how to deploy loot into your game, you can check out the [Module 11 - Loot System](Module%2011%20-%20Loot%20System.md).

For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).

### A Note on Unity

Some of the code has been designed to reflect coding practices and structures that are familiar to Unity developers. For example, the `preStart()` method may be configured to call the `Awake()` method on a class.

## Deploying Systems

All of the assets, including scripts, are available for you to use in your own worlds.

**Note**: Scripts should work in a non-FBS world. Assets do not.

### Multiple systems

**Tip**: If you are deploying multiple systems, it may be easiest to create a clone and then delete objects from it until you have what you need.

### Scripts

Some of the systems are a collection of scripts that can be deployed and used as needed.

* All scripts in the loot system must have their contents copied and pasted into scripts in your own world.
  **Tip**: For best results, use the same script names, which may be referenced in the imports of other scripts.
* All scripts listed as script dependencies must have their contents copied and pasted into scripts in your world.

**To deploy scripts**:

**Note**: These scripts are compatible with TypeScript v2.0.0.

**Note**: Scripts in a File Backed Scripts world are not stored locally.

- Identify the scripts in your copy of the Chop ‘N Pop: Graveyard Bash world that you want to bring into your personal world. Make sure you review the imports at the top of each script to identify its script dependencies.
- For each script:
  a. Open it in your external editor.
  b. Copy all of the contents in the script.
  c. Paste this into a text file outside of Meta Horizon Worlds.
  d. Save this text file using the same name as the source file.
- In your world, for each script:
  a. In the Script panel of the desktop editor, create a new script file using the same name as the one in the source world.
  b. Open the text file version that you saved externally.
  c. Paste the contents of the text file into the new script file.
  d. Save the script. There may be errors due to unclear references.
- After you have added all of the scripts for a system into your world, review any script compilation errors and fix them.

### Assets

**Note**: Assets from Chop ‘N Pop: Graveyard Bash cannot be used in non-File Backed Scripts worlds.

Some of the systems, such as the weapon system for the Axe, are combinations of assets and related scripts. In most cases, an multi-node asset is an instance of an asset template, which is controlled by Meta. You do not have direct, referenceable access to these assets.

**To deploy an asset**:

To use any asset, you must make it your own.

- Locate an instance of the asset in the Hierarchy panel of Chop ‘N Pop: Graveyard Bash.
  a. Take note of any nodes in the asset’s hierarchy that may have attached scripts.
- Right-click the topmost node of the asset. If it is available, select **Unlink instance root & children**. This option breaks the link between the instance of the asset and its asset template. Some assets may not be based on an asset template.
- Right-click the topmost asset again and select **Create Asset**. Name and locate the folder where you wish to create the asset template. Click **Save**.
- You now have the asset and any sub-nodes as your own asset template.
- Open your FBS world in the desktop editor.
- In the Asset Library tab, locate the asset template that you just created of the asset.
- Drag this asset template into the world.
- If the asset has nodes with attached scripts, select each node.
- In the Properties panel, you should see an entry like the following:
  <details>
  <summary>Image of broken script reference in the Properties panel</summary>
  
  <p></p>
  
  [Image of broken script reference in the Properties panel](../../../image_data/bbfe61474fe99e6ef76436ee6ab3980961338dc019701a1b348422e21f275522.md)
  
  ### Overview
  This image depicts a user interface element, specifically a dropdown menu within a script management interface. The layout includes a collapsed section header, a dropdown button, and a placeholder text indicating a broken reference.
  
  ### Key Elements
  - **Header**: Located at the top-left, it reads "Script" with a downward arrow indicating that the content is collapsed.
  - **Attached Script Label**: Positioned below the header, it says "Attached Script" in a lighter font.
  - **Dropdown Button**: Situated to the right of the "Attached Script" label, it has a blue background with white text stating "[Broken Ref] Axe". There is a downward-facing arrow next to the text, suggesting a dropdown functionality.
  - **Three Dots Menu**: At the far right of the header, there are three vertically stacked dots, likely representing additional options or settings related to the script.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the collapsed header "Script". The dropdown button is secondary but equally important as it indicates interactive functionality. The three dots menu is tertiary but still significant as it suggests further actions can be taken. The elements are arranged horizontally, with the header taking up the most space due to its larger size and central placement.
  
  </details>
  
  <p></p>
  
  
- The above reference is broken because you as owner of this world do not have edit access to the referenced script, which is owned in the Chop ‘N Pop: Graveyard Bash world.
- To fix this:
  a. From the Attached Script dropdown, select the replacement script in your world that you have created from a copied version of the source world’s script. In the above example, this would be your personal version of `Axe.ts`.
  b. At the top of the Properties panel, you should see a message indicating that there is 1 override that has not been applied to the definition. Click **Review**. In the Template Overrides window, click **Apply All Overrides**:
  <details>
  <summary>Image of apply all overrides to asset template</summary>
  
  <p></p>
  
  [Image of apply all overrides to asset template](../../../image_data/0003aa1543e45f11e8951b0bbdf04efc02c9fa9b41a24e18bd4a138b7a97573e.md)
  
  ### Overview
  This image depicts a user interface window titled "Template Overrides." It appears to be part of a software application, likely for managing object properties and overrides within a game engine or similar development environment. The interface includes a hierarchical object tree on the left and a table on the right displaying override information.
  
  ### Key Elements
  - **Left Panel (Object Hierarchy)**:
    - **Visual description**: A vertical list of objects with icons and names.
    - **Location**: Left side of the interface.
    - **Contents**: 
      - "MyBadAxe" with a downward arrow indicating expandable children.
      - "ChopSound" and "AxeSpark" as child nodes under "MyBadAxe."
    - **Visual styling**: Dark gray background with white text and icons.
  
  - **Right Panel (Override Table)**:
    - **Visual description**: A table with headers and rows.
    - **Location**: Right side of the interface.
    - **Headers**: "COMPONENT," "PROPERTY," "OLD VALUE," and "NEW VALUE."
    - **Rows**: One row showing "Script" as the component, "Attached Script" as the property, and "dummy" as the new value.
    - **Visual styling**: Dark gray background with white text and light gray separators.
  
  - **Buttons at the Bottom**:
    - **Revert All Overrides**: A gray button with white text.
    - **Apply All Overrides**: A blue button with white text.
  
  ### Visual Flow / Relationships
  - **Most Prominent Visually**: The "MyBadAxe" node in the object hierarchy is the most prominent due to its expanded state and highlighted blue background.
  - **Arrows and Lines**: There are no arrows or lines connecting elements, but the downward arrow indicates a hierarchical relationship.
  - **Spatial Relationships**: The left panel is adjacent to the right panel, with the buttons at the bottom spanning both panels horizontally.
  
  </details>
  
  <p></p>
  
  
  c. Enter a description of the change, and click **Save & publish**.

You have created your own asset template from a source asset and replaced the broken reference to the script with your own script.

This asset is ready for use.