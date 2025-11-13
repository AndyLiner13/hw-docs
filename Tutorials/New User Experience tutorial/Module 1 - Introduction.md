Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/new-user-experience-tutorial/module-1-setup

# Module 1 - Introduction

Welcome to the New User Experience Tutorial! In this tutorial, you learn how to create a simple and effective New User Experience (NUX) for your game using ready-made assets.

![New User Experience cover image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/548761734_818127914058495_8806220458799277431_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=XOFJhlTmDEsQ7kNvwG8nG8D&_nc_oc=AdkEiTQZ-28uCKyvhEH1Kwa0wc50mN3aA4Ycl0RnnwYaWFdv2Dn67mVkUTvcIfnO7Fw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=lS2DBQb89BAPjj3fJWRfBw&oh=00_AfjIH5uqCmRzdOHLO9Tw4CNqNZWihmishX4shOaumSqZaQ&oe=692FB6EB)

This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, the editor creates a copy for you to explore, and this page opens so you can follow along. For more information, see [Access Tutorial Worlds](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Access%20Tutorial%20Worlds.md).

A New User Experience (NUX), sometimes called the first-time user experience (FTUE) or tutorial, covers the first few minutes of gameplay that new players encounter. The NUX introduces the experience, interface, and mechanics, and may include tutorials that teach players how to play. A NUX is successful if it accomplishes two key metrics:

* **Day 1 Retention**: Do players return to the experience after their first session?
* **Quick Wins**: Do players understand the game’s goals and have fun quickly?

A good NUX is important because it provides the first impression of your game. If the start of the experience is confusing or boring, players may leave before reaching the exciting parts. A smooth NUX helps new players understand the basics without frustration, making them more likely to stay engaged.

## Key game development areas

This tutorial covers a reusable and flexible co-op, cross-platform setup in which all players walk through tutorial steps to learn basic controls and objectives.

### Key learning objectives

* Understand the role of NUX asset templates in guiding and onboarding players.
* Identify and apply the nine essential NUX components, including waypoint indicators, quest UIs, tutorial prompts, and interactive dialogue systems.
* Drag, place, and connect NUX asset templates to build a cohesive onboarding flow tailored to your own worlds.
* Prioritize mobile-friendly design with templates optimized for cross-platform performance.
* Use modular design for quick iteration and reuse of NUX elements across experiences.
* Incorporate visual and interactive cues (for example, “Grab Me” VFX, controller images) to communicate with new players.
* Guide players with in-world UI and feedback systems without external instructions.

### Game development areas include:

- 3D arrow (Waypoint indicator UI): An arrow floating in 3D space in front of the player that rotates to point in the direction the player should go.
- Exclamation point (Quest waypoint UI): Waypoints that mark locations for players to travel to.
- UI system:

* Quest giving (New quest indicator UI): Displays the next objective.
* Quest completing (Quest completed indicator UI): Lets players know when they finish a quest.
* Tutorial mode (Tutorial framework UI): Pauses the game and teaches mechanics.
* Hint text (Hint text UI): Provides reminders of what players need to do.
* NPC dialogue tree (Branching dialogue UI): Allows interactive dialogues with NPCs.
* “Grab Me” VFX (Attention indicator UI): VFX on grabbable objects to get player attention.
* Animated and static controller images (Controller tutorial UI): Teach VR controller usage.

## Before you begin

Review the [Getting started with tutorials](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Tutorial%20Prerequisites.md) section, which includes:

* Tutorial prerequisites and assumptions
* How to use tutorial worlds and assets in your own worlds
* Developer tools and testing for your worlds

### On mobile and desktop

To explore the finished world on mobile or desktop, use the following link: <https://horizon.meta.com/worlds/684538471419130>

**Note**: Desktop users must be signed in first.

## Prerequisites

Verify that you have access to your own copy of the New User Experience (NUX) tutorial world. For more information, see [Access Tutorial Worlds](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Access%20Tutorial%20Worlds.md).

**Note:** This tutorial assumes that you are familiar with the desktop editor, a desktop application for building in Meta Horizon Worlds. If you are new to the desktop editor, start with [Build your first game](/hw-docs/Tutorials/Build%20your%20first%20game/Module%201%20-%20Build%20your%20first%20game.md).

## Get started

- Open the [Meta Quest Link](/hw-docs/Get%20started/Install%20the%20desktop%20editor.md) application on your desktop.
- In the **Library** tab, locate the Meta Horizon application in which to build your version of the world.
- From the context menu for the application, select **Start in Desktop Mode**.
- In the **Creation Home** page, select **My worlds** from the left navigation bar.
- Select your copy of the tutorial template.
- Open your copy of the tutorial world in the desktop editor.

## Checkpoint (Optional)

When you finish module 1, you will have:

* Verified prerequisites.
* Opened the tutorial world in the desktop editor.
* Checked the Asset Library tab and Console tab.
* Tested your world.
* Used Preview and simulation controls.
* Switched between Build mode and Preview mode.

The next module introduces the included TypeScript scripts.

## Script descriptions

Each prefab is documented at the top of every script with:

* A summary.
* A description of what the script does.
* A list of related scripts.
* Instructions on how to set it up (connection requirements, customization options).

### How to Deploy Assets

Add the asset named from the Asset Library to your world. Each asset consists of a preconfigured set of scripts and entities that accelerate implementation.

- Open the **Asset Library**
- Navigate to the appropriate category
- Select the desired NUX asset

Once imported into the world, if the scripts appear with broken references, shutdown the server and it will be resolved.