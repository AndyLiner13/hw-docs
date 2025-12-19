Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/horizon-traversal-sample-world/module-1-setup

# Module 1 - Setup

<details>
<summary>Screenshot of the world from the spawn point</summary>

<p></p>

[Screenshot of the world from the spawn point](../../../image_data/21b17826f70a2929da623ec7395e4bd4647789c8580cde4c3eefd62703668cf9.md)

### Overview
The image depicts a construction site within a cityscape. The scene includes a crane lifting a container labeled "Metaverse Shipping," a partially constructed building, and a banner with the word "START" in bold letters. The foreground features a bridge-like structure with railings, and the background showcases a variety of buildings under construction or renovation.

### Key Elements
- **Crane**: Located on the left side, lifting a green container labeled "Metaverse Shipping." It has a metallic structure with orange accents.
- **Container**: Green with white text reading "Metaverse Shipping," suspended by the crane.
- **Banner**: Positioned on the right side, featuring a black-and-white checkered pattern with the word "START" prominently displayed in large, bold letters.
- **Buildings**: Various structures in the background, some under construction with scaffolding, others completed but showing signs of wear or unfinished work.
- **Bridge/Railings**: In the foreground, a gray bridge-like structure with metal railings spans across the scene.
- **Sky**: Clear blue sky occupies the upper portion of the image.

### Visual Flow / Relationships
The most prominent visual elements are the crane and the "START" banner. The crane is positioned to the left, while the banner is to the right. The buildings form the backdrop, and the bridge/railings frame the lower part of the image. There are no explicit arrows or lines connecting elements, but the arrangement suggests a sequence of actions or a narrative flow related to construction and readiness.

</details>

<p></p>



Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

## Welcome

Welcome to the Traversal sample world. The goal of the world is to show a simple racing game that works across VR, web, and mobile. The world is constructed in a way that is easy to explore and utilizes modular pieces that can be applied to other worlds and game types.

**Note**: This world is a full game with all required game systems. While it can be a useful learning tool, the TypeScript coding may be advanced for beginning developers.

Before hopping in, you may want to take a look at the following worlds that showcase how to use the basic versions of the concepts used inside the sample world:

* Build your first game world
* Spawning and Pooling in TypeScript world
* Multiplayer Lobby Tutorial world
* Developing for Web and Mobile Players world

See [Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md).

## Key game development areas

This sample world is a full game world experience within Meta Horizon Worlds that utilizes various systems:

* Player local controls
* Object pooling
* HUD systems
* Local and networked events
* Changing ownership of objects from Server to player and back
* Complex game math, including curves and calculating jump vectors based on player input
* Multiplayer lobbies

## Learning pathways

You can explore the world in the following ways:

* **Play the game**. Explore areas of the game and interface to determine areas of interest to you.
* **Explore the tutorial**. You can use the signposts in the world for pointers into the TypeScript files where individual systems are created. You can create a new world based on a tutorial world from the desktop editor or from the headset. For more information on this workflow, see [Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).
* **Dig into the code**. Comments in the code should give you a start in learning how to use it.
* **Use in your world**. For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).

## Before You Begin

If you haven’t done so, please review the Getting Started section for tutorials, which includes information on:

* Tutorial prerequisites and assumptions
* How to use tutorial worlds and assets in your own worlds
* Developer tools and testing for your worlds

**Note**: All tutorials are created using TypeScript 2.0.0. You can learn more about how to upgrade your own world to TypeScript 2.0.0.

See [Getting Started with Tutorials](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

## Introduction to Rooftop Racers

Rooftop Racers is a multi-player traversal game in which a maximum of 8 players race each other across the rooftops of a virtual city.

This world is a complete game, which allows developers to learn and explore all of the systems required to build a racing game.

Additionally, this world utilizes art resources available to MHCP/3P creators, so you can leverage these assets for your own uses.

### Get started

Before you begin, please verify that you have acquired access to the tutorial world.

Open this world in the desktop editor, where you can explore it in either Build mode or Preview mode to familiarize yourself with the world and its structures before modifying it.

**Note**: This tutorial assumes that you are familiar with the desktop editor, a desktop application for world building in Meta Horizon Worlds. If you are new to the Meta Horizon Worlds desktop editor, you might want to start with the Build your first game tutorial. See [Build your first game](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game).

### On mobile and desktop

To explore the finished world on mobile or desktop, please use the following link:

<https://horizon.meta.com/worlds/10168961025775472/>

**Note**: Desktop users must be signed in first.

**Note**: If you are interested in web and mobile development, see [Developing for Web and Mobile Players Tutorial](../../Feature%20samples/Developing%20for%20web%20and%20mobile%20players%20tutorial/Module%201%20-%20Setup.md).

## Game Design

The game was developed with sufficient mechanics to create a game loop with meaningful choices to compete against other players.

* To maneuver through the course, the player must jump, double-jump, boost-jump and sprint to beat their opponents to the finish line. Double-jump is always available, but boost-jump is restored only by running through the gold rings on the course.
* The level was laid out using the included modular piece set and built to ramp up intensity over time. The jumps are easier at the start of the level and become more difficult over the course. Near the end of the course, the frequency of boost jump refills increases to heighten the competitiveness.
* Cris-crossing traversal paths make the level more interesting to traverse.

Rooftop Racers was designed to be a learning example and a fun, competitive experience. We look forward to seeing how y’all build and expand upon this game concept to make your own worlds!

## Using the Modules

In the following modules, we break down the systems that are used in the Traversal Sample world. You can explore overviews of the game systems and the individual files that compose those systems.

**Note**: Most of the systems are independent and communicate based on the Meta Horizon Worlds event system, so you can take them out and use them directly in your own world.

Additional detail is available in the TypeScript files.

## Code Design

The code is built around a set of interacting managers, including:

| **Manager name** | **Description** |
| --- | --- |
| Environmental Sound manager | Playback of ambient sounds, based on race conditions. |
| Game manager | Manages overall game. |
| Race manager | Controls starting, stopping, and processing individual races. |
| Match manager | Manages adding and removing players from the match in formation. |
| Player Controller manager | Maps each player’s controller and controller prefaces to game actions. |
| HUD manager | Manages the Head-Up Display (HUD) shown on the player’s screen, which includes elapsed time, race position, and power-up status. |
| Out of Bounds manager | Monitors player position within the confines of the race and respawns player if OOB conditions are met. |

* Managers are singletons that mostly share information and changes of status with each other through a series of events. Events are globally defined in Events.ts. (MatchManager is an exception to provide other classes with the up to date status of all players)
* Player Controller Manager and HUD manager are composed of:
  + One manager file (e.g. HUDManager.ts), which manages a pool of entities (e.g. HUD instances) and assigns them to each player that enters the world, while adding them back to the pool if the player exits.
  + Local scripts (e.g. HUDLocal.ts), which manages the interactions for individual instances of the system for the player. For example, HUDLocal.ts is a Local script. It executes on the player’s client headset to display updates to the HUD based on network events that it receives.
* Out of Bounds Manager has a central manager and respective SpawnPoint gizmos, that are also assigned to players but they are all server controlled, since it deals with player positions which are server registered.

These systems and more are described in the individual modules of this tutorial.

### Accessing managers

In the desktop editor, you can access the systems in the following ways:

* Open the scripts listed below through the Scripts panel.
* Navigate the Hierarchy panel.
* Scripts and other non-geometry resources are located behind the starting area. See below.

<details>
<summary>Screenshot of the bank of empty reference objects that host the scripts for gameplay systems</summary>

<p></p>

[Screenshot of the bank of empty reference objects that host the scripts for gameplay systems](../../../image_data/1d3e7af65e325f44c0d918354a48620cd4a42a93fa1fb3b9d7c5de54f0014eb9.md)

### Overview
The image depicts a scene from a video game or simulation environment. It features a large industrial crane-like structure in the background, a flat platform with a patterned box in the foreground, and a clear blue sky above. The interface includes several menu options labeled as "Race Manager," "Match Manager," "Player Controller Manager," and "HUD Manager."

### Key Elements
- **Crane Structure**: Located centrally in the background, it has a metallic orange and brown color scheme with a complex framework.
- **Platform**: A flat, gray surface occupies the lower part of the image, serving as a base for the box and the crane.
- **Patterned Box**: An orange box with white diamond patterns sits on the platform, positioned slightly to the right.
- **Menu Options**: Text labels appear prominently across the middle of the image, with "Race Manager," "Match Manager," "Player Controller Manager," and "HUD Manager" written in yellow font.
- **Small Sidebar**: On the left side, there is a small rectangular area with a dark background and some text, possibly indicating additional information or settings related to the "Race Manager."

### Visual Flow / Relationships
- **Most Prominent Element**: The crane structure is the most visually dominant feature due to its size and central placement.
- **Reading Order**: The menu options are arranged horizontally across the middle of the image, suggesting a linear progression that the player might follow.
- **Spatial Relationships**: The box is placed on the platform, which is adjacent to the crane. The menu options are evenly spaced, implying equal importance.

</details>

<p></p>

