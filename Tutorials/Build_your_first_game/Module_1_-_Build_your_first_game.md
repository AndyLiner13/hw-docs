# Module 1 - Build your first game

## Key game development areas

This tutorial covers a reusable and flexible co-op game setup, in which all players work together to collect gems. This tutorial walks through the basics of using the Meta Horizon Worlds desktop editor application to build the world and the TypeScript required to power a game that works in VR and on 2D desktop screens. Game development areas include:
• Keeping track of all players in the world.
• Managing game state.
• Player and object collision.
• Dependency injection and direct reference in scripts.
• Events.
• Implementing the [Observer Pattern](https://gameprogrammingpatterns.com/observer.html) using the Meta Horizon Worlds event system.
• Displaying dynamic text.

## Key learning objectives

• Basics of using the desktop editor.
• Basics of building scripts in TypeScript.
• Build a basic Game Manager.
  • Game states.
  • Initialize the game.
  • Keeping the score.
  • End the game and resetting the game.
• Events.
  • Event listeners.
  • Broadcast events.
  • Entity (local) events.
• Entity collisions.

## Before you begin

Review the [Getting Started with Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/tutorial-prerequisites)., which includes information on:
• Tutorial prerequisites and assumptions.
• How to acquire a copy of this world for yourself.
• How to use tutorial worlds and assets in your own worlds.
• Developer tools and testing for your worlds.

## Learning pathways

### Follow along

You can follow along with the steps of the tutorial content by using a copy of the world. After you have copied the world, you can compare the steps of the tutorial to the completed world. Desktop editor: To create a copy of this tutorial on a tutorial world from the desktop editor, click Tutorials in Creation Home and then select Build Your First Game. For more information, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds). VR headset: To build the world described in this tutorial, make your own copy of the Build Your First Game tutorial world, by selecting it from the Tutorials tab in the Create menu.

### Explore the complete world

You can explore the completed world and review the script and systems that are covered in the tutorial. The finished TypeScript files from this tutorial are included in the project with a file name that end with: `_COMPLETE`.

### Use in your world

Grab any asset from this world and use it in your own project. For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).

## Get started

### Build mode and Preview mode

When you first open the world in the desktop editor, the world is in Build mode, which is indicated by the Play button in the toolbar:

In Build mode, you can add, edit, and remove the entities that compose your world. Preview mode: To explore the world and playtest it, click the Play button, which opens Preview mode. When you are testing your TypeScript, you must press the Play button to start the simulation, which activates and executes your TypeScript scripts. Press the Stop button to stop the simulation. By default, when you press the Play button, you enter Preview mode and start the world simulation, which means that all valid scripts in the world are executed. So, you can choose to launch Preview mode as if you were entering it like a player or, if needed, to disable the world simulation so that you can explore it without any scripted activity. In the toolbar, next to the mode controls, you can see the simulation playback controls. The Reset button restarts the simulation as if the world was launched from the beginning. Note: Exploring the world in Preview mode is not the same as playing the game experience. It is used for debugging during development, but it is reccomended to test your worlds on all applicable target devices prior to publishing. Preview controls:

|  |  |
|  |  |
| WASD and mouse | Movement | In Preview mode, you move at a single speed. |
| SPACEBAR | Jump | It’s a good idea to test any required jumping distances in Preview mode. |
| ESC | Leave | Press ESC once to pause Preview mode, which enables you to interact with the desktop editor UI. Press ESC to exit Preview mode completely. |

Note: You can explore the world in VR mode from the desktop and through the VR headset.

### Device Previews

|  |  |
|  |  |
| Web Preview | Web Preview |
| Mobile Preview (iPhone 15) | iPhone Preview |
| Mobile Preview (Samsung) | Samsung Preview |

To begin, open your copy of the tutorial world in the desktop editor.
1. Open the Meta Quest Link application on your desktop.
2. In the Library tab, locate the Meta Horizon application in which to build your version of the world.
3. From the context menu for the application, select Start in Desktop Mode.
4. In the Creation Home page, click My worlds in the left navigation bar.
5. Select your copy of the tutorial template.
6. Your world opens in the desktop editor, and it should look something like the following:

### Build mode and Preview mode

### Device Previews

## Game layout

In the desktop editor, you can see that a course for your game is provided. You can change the course to any type of design layout.

#### Some tips if you change the course

• Get in the habit of building your maps offset from the origin `(0,0,0)`, which makes snapping easier in the editor.
• You can drag and drop entities in the Hierarchy panel to reorganize them. Reparenting entities groups them together and retains their positioning relative to their parent entity.
• Use Preview mode to move around the world to test the user experience. You can customize the world further by creating additional areas for the player to jump or explore.

## Add gems to the course

You should see a single green gem on the course. Create four duplicates of the green gem asset provided in the template.

1. In the Hierarchy panel, search for: `emerald`.
2. Right-click on the emerald entity in the hierarchy:a. If the emerald is not in main viewport, select Focus on selection.b. Select Duplicate.
3. The new instance appears at the bottom of the list in the Hierarchy. Select it.
4. Repeat the above steps until you have 5 total gems.

When duplicating additional gems, they will all have the exact same position and rotation as the source gem. You can move the additional gems around the course, by selecting each gem in the Hierarchy panel, and use the Move tool to reposition them. Gems should be placed about chest high on an avatar, so that players can easily run into them. You can also edit the Position properties in the right-hand panel for more precise positioning.

Example course:

Use Preview mode to test your course.

## Checkpoint

You have completed Module 1. In this module, you:
• Verified prerequisites.
• Opened the tutorial world in the desktop editor.
• Built your layout.
• Added gems.
• Tested your world.
  • Switched between Build mode and Preview mode.

In the next module, you can start building scripts in TypeScript.
