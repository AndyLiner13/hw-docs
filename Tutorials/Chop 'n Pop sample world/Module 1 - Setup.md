Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup

# Module 1 - Setup

![Thumbnail of Chop N Pop World](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467985657_595263769678245_8393983042199091303_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=JDwTJeNlhmYQ7kNvwEcKUMl&_nc_oc=AdnwSY6IP4ERpGgI-DiV_pl-23Q7aEqgsAnrkFjs3wymQoLw72W8p_4cDRpgS4HDzSo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v67R53ca07kqhIq7aHQy-A&oh=00_Afie-OvtmNeeHE5t4Hxgam_v_5n0aNf_g4SoRmawzELC3w&oe=692FA209)

Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Access%20Tutorial%20Worlds.md).

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

Before you begin, please verify that you have acquired access to your own copy of the Chop ‘N Pop: Graveyard Bash world. For more information, see [Access Tutorial Worlds](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Access%20Tutorial%20Worlds.md).

**Note**: This tutorial assumes that you are familiar with the desktop editor, a desktop application for world building in Meta Horizon Worlds. If you are new to the desktop editor, you might want to start with the Build your first game tutorial. See [Module 1 - Build your first game](/hw-docs/Tutorials/Build%20your%20first%20game/Module%201%20-%20Build%20your%20first%20game.md).

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
  ![Image of settings to enable File Backed Scripts](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489750052_692135419991079_739814288388774121_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=dx5acJdiifUQ7kNvwFDhXa7&_nc_oc=Adnt61WkpyTCmUpi16UxwLenPYyyW0flH2mJz7F2x1XLyzKZCO4MfrcLSvsVKI5Toio&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v67R53ca07kqhIq7aHQy-A&oh=00_AfiVXQ5PetRtvMxoCR4mREMKfiuh2qivLZ-XHGQpNPbZ8w&oe=692F99EC)
- To upgrade your world to FBS, click **Update**. **This change cannot be undone.**

For more information, see [Use File-Backed Scripts](/hw-docs/code-blocks-and-gizmos/use-file-backed-scripts).

### Gen AI

Many of the audio assets in this world were generated using Gen AI. In the desktop editor, click the **Gen AI menu**.

Using a few words, you can prompt Gen AI to generate a sound, which you can modify a bit through the interface. Saved sounds are stored in your Asset Library and can be imported into your worlds.

**Tip**: For refinement, you can download the sound asset and process it through your preferred external sound editor, before uploading it back through the Asset Library tab in the desktop editor.

### NPCs

The zombies and skeletons in the world are taken from the NPC library available to creators through the desktop editor. NPCs allow you to deploy premade animated assets, which you can augment with TypeScript-based behavior. For more information on NPCs, see [NPCs](/hw-docs/Desktop%20editor/NPCs/NPCs%20Overview.md).

In Chop ‘N Pop: Graveyard Bash, NPCs are controlled by a dedicated system, which also surfaces a set of configurable parameters for each type of NPC. For more information, see [Module 10 - NPC System](/hw-docs/Tutorials/Chop%20'n%20Pop%20sample%20world/Module%2010%20-%20NPC%20System.md).

## Learning Pathways

### Clone and modify

In your world, you can begin exploring the entities in the world to learn by making modifications:

* Under the World Geo node, you can access all of the entities that have physical presence in the world. These items can be modified, moved, duplicated, and deleted to reshape the playing area of the world
  **Note**: How does the gameplay change if you shrink each dimension of the cemetery a bit? How does it change if you expand the dimensions? Do you need to add larger or more waves?
* For many of the gameplay systems, configuration parameters for those systems are surfaced in the Script properties panel, where you can make modifications to see the impacts on gameplay.
  **Note**: You can even try to swap in your own assets to use with these systems. This can be a way of testing deployment of your assets with these systems before bringing them into your own world.

### Using the systems

Another approach is to explore through the docs to learn how to use individual systems. For example, if you need to learn more about how to deploy loot into your game, you can check out the [Module 11 - Loot System](/hw-docs/Tutorials/Chop%20'n%20Pop%20sample%20world/Module%2011%20-%20Loot%20System.md).

For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Use%20Assets%20from%20Tutorials.md).

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
  ![Image of broken script reference in the Properties panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467740926_593923073145648_7289764976967935412_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=6_CmOSOCf9YQ7kNvwH80tBI&_nc_oc=AdlkTNOYfdfR3Usc4TGfgXn9xxMQNhl6zkWxL02n-vYwzXPKaSpDC_8kqdS4SwarJi0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v67R53ca07kqhIq7aHQy-A&oh=00_AfjwkZ2PgiQxDHoEdXYPhMx-sXvD1sN4oDZ8r6GLGP9F1Q&oe=692F9F1D)
- The above reference is broken because you as owner of this world do not have edit access to the referenced script, which is owned in the Chop ‘N Pop: Graveyard Bash world.
- To fix this:
  a. From the Attached Script dropdown, select the replacement script in your world that you have created from a copied version of the source world’s script. In the above example, this would be your personal version of `Axe.ts`.
  b. At the top of the Properties panel, you should see a message indicating that there is 1 override that has not been applied to the definition. Click **Review**. In the Template Overrides window, click **Apply All Overrides**:
  ![Image of apply all overrides to asset template](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467718232_593923063145649_2857413320607593808_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=jVPEcDAYk3EQ7kNvwHC4-3C&_nc_oc=AdmMsYiXmJjTv8GAHp01m_DjNYDbqsw6UA_-eklOcPQ8n2Ze727qSdBfHx7_QIKMcR4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v67R53ca07kqhIq7aHQy-A&oh=00_Afi68nKbAumZkEap0MeIvoCFT8MjYvm0UucP-Q0GjYkGTA&oe=692FBFA9)
  c. Enter a description of the change, and click **Save & publish**.

You have created your own asset template from a source asset and replaced the broken reference to the script with your own script.

This asset is ready for use.