Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/multiplayer-lobby-tutorial/module-1-setup

# Module 1 - Setup

Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).

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

Please review [Getting Started with Tutorials](/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/tutorial-prerequisites).

### First world

This world is based off of the introductory tutorial world found in [Build your first game](/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game).

### Follow along

You can create a world based on a tutorial world from either the desktop editor or from the headset. For more information on this workflow, see [Access Tutorial Worlds](/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).

### Use in your world

For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).

## Multiplayer testing

Since this game experience is designed for use in multiplayer environments, you may want to grab some friends to help test your work.

## Get started

To begin, open your new version of the tutorial world in the desktop editor.

- Open **Meta Quest Link** (formerly, Oculus) on your desktop.
- In the Library tab, select the **Meta Horizon Worlds** application.
- From the context menu, select **Start in Desktop Mode**.
- In the **Creations Home** page, select your copy of the tutorial template.

Your world should now be opened in the desktop editor, and should look something like the following:

![Screenshot of the Multiplayer Lobby world opened in the desktop editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487831991_686408180563803_3808571924566109122_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=tvV2AHnGtUoQ7kNvwGACRRN&_nc_oc=Adl317WZ_MzukqN0QID4LkE6V8NqQcHzsp9z_xOrUYQ3PCCal3chNkPgwlkpBDjXUnw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Ytrx-OrNg4kZ4W0q9G3-Sw&oh=00_Afg5r_eyQDQULI2PgXdlkfqAkcoKAIwKAVEHh3304SEnUg&oe=692C0D2B)

## Build mode and Preview mode

When you open your world, it is in **Build mode**; to explore the world and playtest it, click the **Preview mode** button. For more information on the various modes, click [here](/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/operational-modes).

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

* **Asset Library**: This tab provides access to all assets in your Asset Library, which includes all assets that you own or that have been shared to you.
  **Note**: In some cases, you may be interacting with entities in a tutorial world to which you do not have access through your Asset Library tab. This is ok.
* **Console**: Click this tab to review messages that are generated from errors executing scripts or from messages that you push to the console from your TypeScript. This is an invaluable debugging tool.

## Checkpoint

In this module, you have:

* Verified prerequisites
* Opened the tutorial world in the desktop editor
* Tested your world
  + Switched between Build mode and Preview mode
  + Checked out the Asset Library and Console tabs

The next module will look at the included TypeScript scripts.