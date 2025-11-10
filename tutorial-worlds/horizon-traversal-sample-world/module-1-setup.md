Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/horizon-traversal-sample-world/module-1-setup

# Module 1 - Setup

![Screenshot of the world from the spawn point](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452882400_512509657953657_4484116017896127605_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=x_3e9fvV7loQ7kNvwFz35TT&_nc_oc=AdnmQ2Vg3w0atFNFA4mL6ub82jtbXvN69U204jURrJkgbGRVJopvrQEkkOI2n_htRss&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=gKcQVu21bLYGm2Hn45Jk6Q&oh=00_AfjOa1Ma70s_yuAr24RGmcqLkUU3sssnYKrDN_1_WGp5yQ&oe=692BDBE3)

Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).

## Welcome

Welcome to the Traversal sample world. The goal of the world is to show a simple racing game that works across VR, web, and mobile. The world is constructed in a way that is easy to explore and utilizes modular pieces that can be applied to other worlds and game types.

**Note**: This world is a full game with all required game systems. While it can be a useful learning tool, the TypeScript coding may be advanced for beginning developers.

Before hopping in, you may want to take a look at the following worlds that showcase how to use the basic versions of the concepts used inside the sample world:

* Build your first game world
* Spawning and Pooling in TypeScript world
* Multiplayer Lobby Tutorial world
* Developing for Web and Mobile Players world

See [Tutorial Worlds](/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/tutorial-prerequisites).

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
* **Explore the tutorial**. You can use the signposts in the world for pointers into the TypeScript files where individual systems are created. You can create a new world based on a tutorial world from the desktop editor or from the headset. For more information on this workflow, see [Access Tutorial Worlds](/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).
* **Dig into the code**. Comments in the code should give you a start in learning how to use it.
* **Use in your world**. For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).

## Before You Begin

If you haven’t done so, please review the Getting Started section for tutorials, which includes information on:

* Tutorial prerequisites and assumptions
* How to use tutorial worlds and assets in your own worlds
* Developer tools and testing for your worlds

**Note**: All tutorials are created using TypeScript 2.0.0. You can learn more about how to upgrade your own world to TypeScript 2.0.0.

See [Getting Started with Tutorials](/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).

## Introduction to Rooftop Racers

Rooftop Racers is a multi-player traversal game in which a maximum of 8 players race each other across the rooftops of a virtual city.

This world is a complete game, which allows developers to learn and explore all of the systems required to build a racing game.

Additionally, this world utilizes art resources available to MHCP/3P creators, so you can leverage these assets for your own uses.

### Get started

Before you begin, please verify that you have acquired access to the tutorial world.

Open this world in the desktop editor, where you can explore it in either Build mode or Preview mode to familiarize yourself with the world and its structures before modifying it.

**Note**: This tutorial assumes that you are familiar with the desktop editor, a desktop application for world building in Meta Horizon Worlds. If you are new to the Meta Horizon Worlds desktop editor, you might want to start with the Build your first game tutorial. See [Build your first game](/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game).

### On mobile and desktop

To explore the finished world on mobile or desktop, please use the following link:

<https://horizon.meta.com/worlds/10168961025775472/>

**Note**: Desktop users must be signed in first.

**Note**: If you are interested in web and mobile development, see [Developing for Web and Mobile Players Tutorial](/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-1-setup).

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

![Screenshot of the bank of empty reference objects that host the scripts for gameplay systems](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452520043_512509637953659_6246132046291088143_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=lSDnkd438KMQ7kNvwGwyVGU&_nc_oc=Adn1Xjw57__Sr1HxI58ldW_LZOu1IwnlRe9P94COGI5OJniZFPU_sRAwUhY7k9vSyXA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=gKcQVu21bLYGm2Hn45Jk6Q&oh=00_AfiTIVHiadXN1C9jxV1VbRfhQC5Pf10uLqExLYfpS29UYA&oe=692BED8D)