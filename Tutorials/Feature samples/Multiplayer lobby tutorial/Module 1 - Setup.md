Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/multiplayer-lobby-tutorial/module-1-setup

# Module 1 - Setup

Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

<details>
<summary>Multiplayer lobby cover image</summary>

<p></p>

[Multiplayer lobby cover image](../../../image_data/c2193a5fe962fdfd3af47795405fed3cd16e9d90f386afd65436b28791d4a2ea.md)

### Overview
The image depicts a simple 3D-rendered room with a grid pattern on the walls and floor. The room has a yellow wall with a blue window on one side, and the floor is tiled gray. A red platform with a white target-like design is centered in the room.

### Key Elements
- **Wall**: Yellow, with a grid pattern. Located on the left, right, and back sides of the room.
- **Window**: Blue, rectangular shape, located on the right wall.
- **Floor**: Gray tiles arranged in a grid pattern.
- **Platform**: Red, rectangular shape with a white target-like design in the center. Positioned centrally on the floor.
- **Target Design**: White square with concentric circles and a central dot, resembling a target.

### Visual Flow / Relationships
The most prominent visual element is the red platform with the target design. The walls form a closed space around the platform, and the window provides a contrast with its blue color against the yellow walls. There are no arrows or lines connecting elements, and the reading order is implied by the placement of the platform as the focal point.

</details>

<p></p>



## Welcome

This tutorial covers the process of creating a starting lobby area in a Meta Horizon Worlds game. Meta Horizon Worlds is a multiplayer environment where players can drop in and out of a game at any time. It’s likely that the next world you build needs to accommodate such player behavior. The finished scripts and functionality from this tutorial can be used in your next project. Key game development areas:

* Track all players and their game statuses
* Enable players to manually trigger a new game to start
* Communicate to players that a new game is starting
* Teleport all lobby players into a new game automatically
* Return all players to the lobby when the game is over

### Key learning objectives

* Move players to different locations in a world
* Respond to events when players join and leave
* Utilize the Meta Horizon Worlds pop-up UI

## Before you begin

Please review [Getting Started with Tutorials](../../Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md).

### First world

This world is based off of the introductory tutorial world found in [Build your first game](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game).

### Follow along

You can create a world based on a tutorial world from either the desktop editor or from the headset. For more information on this workflow, see [Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

### Use in your world

For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).

## Multiplayer testing

Since this game experience is designed for use in multiplayer environments, you may want to grab some friends to help test your work.

## Get started

To begin, open your new version of the tutorial world in the desktop editor.

- Open **Meta Quest Link** (formerly, Oculus) on your desktop.
- In the Library tab, select the **Meta Horizon Worlds** application.
- From the context menu, select **Start in Desktop Mode**.
- In the **Creations Home** page, select your copy of the tutorial template.

Your world should now be opened in the desktop editor, and should look something like the following:

<details>
<summary>Screenshot of the Multiplayer Lobby world opened in the desktop editor</summary>

<p></p>

[Screenshot of the Multiplayer Lobby world opened in the desktop editor](../../../image_data/0f421517ab2176eb8c00636d359875bb0298bfec81e7211e6d1ea12f858fa116.md)

### Overview
This image depicts a 3D modeling environment interface, likely from a game development tool such as Unity. The central area displays a 3D scene with a grid floor and walls labeled "Lobby." The left sidebar shows a hierarchical list of objects within the scene, while the right sidebar contains properties for selected objects. The top bar includes various tools and settings typical of a 3D modeling software.

### Key Elements
- **Central Scene**: A 3D view showing a room labeled "Lobby" with a grid floor and walls. The walls are orange with a grid pattern, and the floor is gray with a grid overlay.
- **Left Sidebar**: Contains a hierarchical list of objects named "Lobby Spawn Point," "PlayerManager," "GameManager," "GameUtils," "StartGameTrigger," "EndGameTrigger," "Start Match Trigger," "End Game Trigger," "Game Manager," "Player Manager," "Environment," "BoxCollider," and "Match Spawn Point."
- **Right Sidebar**: Displays a message "Select an object to view its properties" and a small icon resembling a cube.
- **Top Bar**: Includes various tools and settings such as "Local," "Center," "Relative," and others, along with a search bar at the top left.

### Visual Flow / Relationships
The most prominent visual element is the central 3D scene. The left sidebar is secondary but essential for navigation through the project's objects. The right sidebar is less prominent but serves as a property viewer. The top bar provides tools for manipulating the scene.

</details>

<p></p>



## Build mode and Preview mode

When you open your world, it is in **Build mode**; to explore the world and playtest it, click the **Preview mode** button. For more information on the various modes, click [here](../../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md).

In Preview mode:

* Use the mouse and WASD controls to move in the world.
  + In Preview mode, you move at a single speed.
* To jump, press SPACEBAR. It’s a good idea to test any required jumping distances in Preview mode.
* To leave Preview mode and return to Build mode, press ESC.

Note that exploring the world in Preview mode is not the same thing as playing the game experience. In the toolbar, next to the mode controls, you can see the simulation playback controls.

**Tip**: You can also explore the world in VR mode from the desktop and through the VR headset itself.

When you are testing your TypeScript, you must press the **Play** button to start the simulation, which activates and executes your TypeScript scripts. You can also use the **Stop** button and **Reset** button for your playtesting.

## Asset Library and Console tabs

At the bottom of the desktop editor screen, you can see two tabs:

* **Asset Library**: This tab provides access to all assets in your Asset Library, which includes all assets that you own or that have been shared to you. **Note**: In some cases, you may be interacting with entities in a tutorial world to which you do not have access through your Asset Library tab. This is ok.
* **Console**: Click this tab to review messages that are generated from errors executing scripts or from messages that you push to the console from your TypeScript. This is an invaluable debugging tool.

## Checkpoint

In this module, you have:

* Verified prerequisites
* Opened the tutorial world in the desktop editor
* Tested your world
  + Switched between Build mode and Preview mode
  + Checked out the Asset Library and Console tabs

The next module will look at the included TypeScript scripts.