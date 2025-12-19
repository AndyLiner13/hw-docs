Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/simple-shooting-mechanics-tutorial/module-1-setup

# Module 1 - Setup

<details>
<summary>Thumbnail of the Simple Shooting Mechanics tutorial world</summary>

<p></p>

[Thumbnail of the Simple Shooting Mechanics tutorial world](../../../image_data/9d2cdbe0bba549f7ab9e37ee4dd44c047e760527718e65c5e715697fd6c99185.md)

### Overview
The image depicts a 3D scene with geometric shapes and a laser beam. The environment includes a tiled floor and a grid-patterned wall in the background. The primary focus is on a white cube that has a red laser beam striking its surface, creating a bright yellow star-like effect at the point of impact.

### Key Elements
- **White Cube**: A large, white, cubic shape located centrally in the image. It has a smooth texture and is positioned slightly off-center towards the bottom right.
- **Red Laser Beam**: A long, straight, red beam extends diagonally across the image, originating from a white sphere partially visible on the right side. The beam is thick and solid, with a bright yellow star at the point where it hits the cube.
- **Yellow Star**: A small, bright yellow star is formed at the intersection of the laser beam and the cube's surface.
- **Background Wall**: A tiled wall with a grid pattern in orange and blue tones forms the backdrop behind the cube.
- **Floor**: The floor is a light gray, tiled surface with a subtle grid pattern, extending horizontally across the lower part of the image.

### Visual Flow / Relationships
The most prominent visual element is the red laser beam, which draws attention due to its bright color and the resulting star effect upon hitting the cube. The white cube serves as the focal point around which the laser beam is directed. The background wall and floor provide context but do not interact with the main elements.

</details>

<p></p>



Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

This sample covers how to create a configurable gun and laser gun from the basic components available to every creator with access to the desktop editor. These gun types have different methods of targeting and managing projectiles:

| **Weapon type** | **Projectile management** | **Description** |
| --- | --- | --- |
| Basic gun | Projectile Launcher gizmo | The Projectile Launcher gizmo is attached to the end of the gun and launches a physical object (projectile) outward into the world. This object can be tracked for collision purposes. |
| Laser gun | Raycast gizmo | The Raycast gizmo is fired from the end of the laser gun with its laser projectile determined by casting an invisible ray out into the world. Its physical representation in the world is a visual effect. |

The scripts and functionality from this tutorial can be used in your next project.

**Key game development areas**:

* Projectile interactions with the world
* A gun made with a Projectile Launcher gizmo
* A on/off laser with configurable laser distance

**Key learning objectives**:

* Learn to deploy and manipulate the Projectile Launcher gizmo
* Learn to deploy and manipulate of the Raycast gizmo
* Projectiles interactions with world entities and players

## Before You Begin

If you haven’t done so, please review the Getting Started section for tutorials, which includes information on:

* Tutorial prerequisites and assumptions
* How to use tutorial worlds and assets in your own worlds
* Developer tools and testing for your worlds

**Note**: All tutorials are created using TypeScript 2.0.0. You can learn more about how to upgrade your own world to TypeScript 2.0.0.

See [Getting Started with Tutorials](../../Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md).

## Learning Pathways

### Play and modify

To create a copy of the Shooting Mechanics Tutorial sample world in Meta Horizon Worlds:

- In your headset, open the **Create menu**.
- Select the **Tutorials tab**.
- Browse the **Advanced Tutorials shelf** to locate the Simple Shooting Mechanics world.
- Select the world.
- A duplicate version is created, with you as its owner. The world name is set to: **Simple Shooting Mechanics**.

You can create a new world from a tutorial world from the desktop editor or from the headset. For more information on this workflow, see See [Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

### Use in your world

For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).

## Multiplayer

This experience is not intended to be a multiplayer experience, but feel free to try it out with friends.

## Get Started

To begin, open your new version of the tutorial world in the desktop editor.

- Open the Meta Quest Link application (formerly, Oculus) on your desktop.
- In the Library tab, locate the Meta Horizon Worlds application in which to build your version of the world.
- From the context menu, select **Start in Desktop Mode**.
- In the Creations Home page, select your copy of the tutorial template.
- Your world should now be opened in the desktop editor, and your project should look something like the following:

<details>
<summary>Image of the world's entities in the desktop editor</summary>

<p></p>

[Image of the world's entities in the desktop editor](../../../image_data/ea73d33bef3757dd60ba8756f43a03bcd7b6f42d81698bd91058676450bf7a1d.md)

### Overview
This image depicts a 3D modeling environment within a software interface, likely a game development tool. The central area shows a 3D scene with a grid floor and a yellow ceiling grid. There are several objects in the scene, including a character model and some cubes arranged in a pyramid-like structure. The left panel displays a hierarchical list of objects, while the right panel shows object properties. The bottom section contains a console with messages and system information.

### Key Elements
- **Scene**: A 3D view with a grid floor and a yellow ceiling grid. Contains a character model and a pyramid of white cubes.
- **Character Model**: Located near the bottom center of the scene, depicted as a blue humanoid figure.
- **Cubes**: White cubes arranged in a pyramid shape above the character model.
- **Grid Floor**: A light gray grid covering the entire floor of the scene.
- **Left Panel**: Displays a hierarchical list of objects, including "SpawnPoint," "LaserPoint," "Gun," "LaserGun," "Scripts," "BulletHit," "TargetCubes," and multiple "Walls."
- **Right Panel**: Shows a placeholder message "Select an object to view its properties."
- **Console at the Bottom**: Contains messages indicating that script source maps have loaded and instructions to reset the world for accurate line numbers in stack traces. It also shows system and user counts.

### Visual Flow / Relationships
The most prominent visual elements are the 3D scene and the character model. The scene is the central focus, with the character model and cubes arranged around it. The left panel lists objects hierarchically, and the right panel is currently inactive, awaiting selection of an object. The console at the bottom provides feedback and system status.

</details>

<p></p>



### Build mode and Preview mode

In the above, the world is in **Build mode**, which is where you add, move, and modify the entities in your world.

In Preview mode, you can drop into the world and experience it like an external visitor would. To enter Preview mode, you press the **Play button** in the toolbar:

<details>
<summary>Image of toolbar with Play button highlighted</summary>

<p></p>

[Image of toolbar with Play button highlighted](../../../image_data/a934ce6abff954a56508cf7449a5a98c4275bfcc0d3c7b741c0cf2765398edd8.md)

### Overview
This image depicts a user interface toolbar at the top of a software application. The toolbar contains various menu items, a play button, and some toggle switches.

### Key Elements
- **Menu Items**: Located in the left section of the toolbar. Includes "Build," "Systems," "Scripts," and "Gen AI." Each has a drop-down arrow indicating more options are available when clicked.
- **Play Button**: Positioned centrally within a red bounding box. It is a white play icon on a dark gray button.
- **Toggle Switches**: On the far right side, there are two toggle switches. One is labeled "World Sim Off" with a green checkmark next to it, indicating it is active. The other toggle switch is partially visible.
- **User Avatar**: Located on the far right, showing a profile picture of a person with a dropdown arrow suggesting more options are available.

### Visual Flow / Relationships
The most prominent visual element is the play button due to its central placement and distinct red bounding box. The menu items are arranged horizontally to the left, and the toggle switches and user avatar are to the right. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from left to right.

</details>

<p></p>



**Playtesting**:

To playtest your world:

Click the **Play button**, which begins the simulation by executing your scripts and drops your avatar in the world.

**Tip**: You can skip starting the simulation if you just want to preview the world and its entities without any scripted activities. More on Simulation below.

Preview mode controls:

* Use the mouse and `WASD` controls to move in the world.
  + In Preview mode, you move at a single speed.
* To jump, press `SPACEBAR`. It’s a good idea to test any required jumping distances in Preview mode.
* To leave Preview mode and return to Build mode, press `ESC`.

**Tip**: You can also explore the world in VR mode from the desktop and through the VR headset itself. More on this later.

**Note**: Preview mode in the desktop editor is not the same thing as playing the game in one of the targeted platforms, such as VR.

**Simulation**:

The simulation controls can be used to start, stop, and reset playback of your world’s scripts. In the toolbar, next to the playback controls, you can see the World Simulation button.

By default, World Simulation is turned on when you press the **Play button**. This means that when you drop into the world, the world’s scripts are executed.

As needed, you can turn off World Simulation, which enables you to explore the world without script-related activities getting triggered. This approach is useful for analyzing the art and world layout. To disable simulation, click the **World Simulation button** in the toolbar.

To restart world simulation, click the **Reset button**.

### Asset Library and Console tabs

At the bottom of the desktop editor screen, you can see the following tabs:

* **Asset Library**: This tab provides access to all assets in your Asset Library, which includes all assets that you own or that have been shared to you.

  **Tip**: You can also access assets that have been provided by Meta. In the Asset Library tab, click **Public Assets** to explore. To add an asset, drag it into your world.

  **Note**: In some cases, you may be interacting with entities in a tutorial world to which you do not have access through your Asset Library tab. This is ok.
* **Console**: Click this tab to review messages log messages (info, warning, error) that are generated from messages that you push to the console from your TypeScript. This is an invaluable debugging tool. More on the Console later.

## Checkpoint

Done with Module 1! In this module, you:

* Verified prerequisites
* Opened the tutorial world in the desktop editor
  + Checked out the Asset Library tab and Console tab
* Tested your world
  + Learned about Preview and simulation controls
  + Switched between Build mode and Preview mode

In the next module, we look at the included TypeScript scripts.