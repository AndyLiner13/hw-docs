Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-1-setup

# Module 1 - Setup

![Thumbnail of the Developing for Web and Mobile Players tutorial world](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452506803_512509641286992_7228963949665786494_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=nE0OnsvOtSkQ7kNvwFhX7zy&_nc_oc=Adll7vTkxEKEx1TsbpNQ7Xr-gpXoXCRvgTQNd3YuFnKVLzeXRy0bqbOwcfyzEtWj_EQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EMQeH6fCD0rcbvOmpaxMlw&oh=00_AfjKMt9U9LGxuh5wWkhppt7FgAIDaBgaPwyPgl0eTEB9-A&oe=692C0BC4)

Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).

## Welcome

In this tutorial, we create a simple puzzle game that works for mobile and web screens. In developing this game, you learn how to use web and mobile features to offer an optimal gaming experience on all platforms. Key learning objectives:

* Create a user interface for web and mobile players
* Control the camera using the Camera API
* Configure grabbable objects with animations and projectiles for 2D screens
* Interact with objects and implement mechanics that are optimized for 2D screens using the Focused Interaction API
* Explore different puzzle mechanics to learn to build your own puzzle games

**Note**: This world is primarily focused on web and mobile development.

## Learning Pathways

You can follow this tutorial in different ways:

* Choose Your Path:
  + All users should read this introduction and verify meeting the prereqs and access requirements.
    - **Novice**: If you are new to TypeScript, you should complete the steps in the tutorial for yourself. See Follow Along below.
      **Note**: If you are new to TypeScript, you should follow the Novice path.
    - **Intermediate**: If you have some world-building and/or TypeScript experience, you may find it easier to clone the Complete World option and then review individual modules for key learnings.
    - **Experienced**: Experienced developers may wish to read the introductions to each module and then skip to the Additional Documentation and APIs section at the end of the module for references to other docs.
      -- Follow along. See below.

### Follow along

To build this world based on this tutorial, you must create a copy for yourself. These steps need to be performed in VR.

- Launch Meta Horizon Worlds.
- Open the **Create** menu.
- Select the **Tutorials** tab.
- Select **Developing for Mobile and Web Players: Follow Along** world in the **Advanced Tutorials** shelf.

You can create a new world based on a tutorial world from the desktop editor or from the headset. For more information on this workflow, see [Access Tutorial Worlds](/hw-docs/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).

### Explore complete world

You can check out the final version of the tutorial world by selecting the **Developing for Mobile and Web Players: Completed Examples** world in the ‘Tutorials’ tab inside Meta Horizon Worlds.

### Use in your world

For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](/hw-docs/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).

## Before You Begin

If you haven’t done so, please review the Getting Started section for tutorials, which includes information on:

* Tutorial prerequisites and assumptions
* How to use tutorial worlds and assets in your own worlds
* Developer tools and testing for your worlds

**Note**: All tutorials are created using TypeScript 2.0.0. You can learn more about how to upgrade your own world to TypeScript 2.0.0.

See [Getting Started with Tutorials](/hw-docs/typescript/upgrade-world-to-typescript-api-v200).

## Prerequisites

To follow along and complete this tutorial, you need the following:

* A Meta Account and a Meta Horizon Worlds Profile.
* The Meta Horizon Worlds app installed on your Quest device.
* The desktop editor downloaded and installed on a PC device.

See [Tutorial Prerequisites](/hw-docs/tutorial-worlds/getting-started-with-tutorials/tutorial-prerequisites).

Optional:

* An integrated development environment (IDE) can be connected to the desktop editor for building your TypeScript scripts.
  + Visual Studio Code is recommended.
    **Note**: If you are new to the Meta Horizon Worlds desktop editor, you might want to start with the first tutorial. See [Build your first game](/hw-docs/tutorial-worlds/build-your-first-game/module-1-build-your-first-game).

**Note**: This tutorial is built on TypeScript API version 2.0.0.

* Your IDE must be running TypeScript Version 4.7.4. For TypeScript API documentation, see [API v2.0.0 documentation](https://horizon.meta.com/resources/scripting-api/index.md/?api_version=2.0.0).

## Introduction to Web and Mobile on Meta Horizon Worlds

Worlds that you create in the Meta Horizon Worlds platform can be visited through VR and 2D screens using the website (horizon.meta.com) or the Meta Quest app. Visitors to your worlds can join from their preferred device and play with their friends, even if they don’t have a headset!

To reach such a varied audience, you must offer a good experience for all players, regardless of their preferred platforms. Using this tutorial, you can learn techniques for ensuring a good experience on web and mobile, as well as VR.

### Get started

Before you begin, please verify that you have acquired access to your own world to build (“Follow Along” above) or to the completed tutorial (“Explore Complete World”).

Open this world in the desktop editor, where you can explore it in either Build mode or Preview mode to familiarize yourself with the world and its structures before modifying it.

**Note**: This tutorial assumes that you are familiar with the desktop editor, a desktop application for world building in Meta Horizon Worlds. If you are new to the desktop editor, you should check out the “Build your first game” tutorial to learn the basics of building worlds and TypeScript scripts in the desktop editor. See [Build your first game](/hw-docs/tutorial-worlds/build-your-first-game/module-1-build-your-first-game).

### Game overview

This puzzle game is composed of a Lobby with 3 rooms, each of which has a closed exit door. To navigate each room of the game, each player must perform various actions with objects to solve the puzzle, which opens the exit door to the next room. Complete the three rooms to win the game!

The Features Lab allows you to experience individual web and mobile features and to explore the code that makes them work. Keep in mind that this section won’t work in the ‘Follow Along’ version until you’ve completed the code.

### Set up for web and mobile testing

This tutorial explores how to deliver compelling experiences across these platforms:

* VR
* Web (desktop)
* Mobile

As part of the development process, you must test your work on each of these platforms, which requires setting up a development environment for them. For more information, see [Preview device](/hw-docs/desktop-editor/getting-started/preview-mode#preview-device).

### Using the modules

This tutorial covers different systems and APIs. Each module focuses on one single system. Your work in the tutorial is replacing TODO entries in specified files with code snippets. An overview of the code behavior is typically provided afterward, and testing tasks are provided in the Checkpoints to assess that you have applied the code correctly for the module.

### Tutorial modules

The modules in this tutorial are organized in the following sequence.

| **Module Name** | **Description** |
| --- | --- |
| Module 2 - HUD System | Build a HUD system, which allows you to display hints to players to assist in resolving the puzzles. |
| Module 3 - Puzzle Manager | Puzzle Manager displays hints for how to complete individual puzzles. When the puzzle is complete, the Puzzle Manager moves objects to open the pathway to the next puzzle. |
| Module 4 - Camera Manager | Set up the Camera Manager, which manages camera perspectives (first-person or third-person) and field of view for mobile and desktop users. Toggle camera collisions, as needed. |
| Module 5 - Player Manager | Set up the Player Manager, which handles player entry and exit. Player Manager also assigns Camera Manager to each player upon entry. |
| Module 6 - Room A: The Magic Wand | Collect the wand and fire a projectile. Learn how to use grabbables and to fire projectiles. |
| Module 7 - Room B: Secret Code | Learn to use the Focused Interaction API to manage grabbing and rotating objects across multiple devices. |
| Module 8 - Room C: Target Practice | Build bifurcated game mechanics based on device type for VR versus web & mobile users. |
| Module 9 - Summary | Review what you learned and explore ways to expand on the tutorial. |

In each room, you learn how to use different features such as the Camera API or the Focused Interaction API. Let’s get started!

## Checkpoint

Module 1 completed! In this module, you:

* Verified prerequisites
* Opened the tutorial world in the desktop editor
* Tested your world
* Set up web and mobile testing
* Learned the structure of the game we are building

**Tip**: At the end of each module, review the Checkpoint section, which summarizes what you have learned and may include instructions on how to test what you have just built.

In the next module, you begin building core systems, such as the HUD.