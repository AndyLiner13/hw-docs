# Module 1 - Setup

 ![Thumbnail of the Simple Shooting Mechanics tutorial world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462384297_563294049541884_4432521421105344562_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=iE-rv4Ao_CAQ7kNvwFVtteA&_nc_oc=AdmL3L3LJT-YEpbDQzyibzv1fxzNRNX_KERpUHdjIVW9EuOiStPeb4bMNKSikDCS48M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FbCbNhaMHxucUwbLC3pN5w&oh=00_Afc14H3b6MXIk9pmqoUp1PcNlmiKBYzbz3NI...
...
# Module 1 - Setup
...
 ImportantThis content is intended as a companion to the tutorial world of the same name,
which you can access through the desktop editor. When you open the tutorial
world, a copy is created for you to explore, and this page is opened so that you can
follow along. For more information, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds). This sample covers how to create a configurable gun and laser gun from the basic
components available to every creator with access to the desktop editor. These
gun types have different methods of targeting and managing projectiles:
|  |
|  |
| Basic gun | Projectile Launcher gizmo | The Projectile Launcher gizmo is attached to the end of the gun and launches a physical object (projectile) outward into the world. This object can be tracked for collision purposes. |
...
...
# Module 1 - Setup
...
| Laser gun | Raycast gizmo | The Raycast gizmo is fired from the end of the laser gun with its laser projectile determined by casting an invisible ray out into the world. Its physical representation in the world is a visual effect. |

 The scripts and functionality from this tutorial can be used in your next
project. Key game development areas:
• Projectile interactions with the world
• A gun made with a Projectile Launcher gizmo
• A on/off laser with configurable laser distance

 Key learning objectives:
• Learn to deploy and manipulate the Projectile Launcher gizmo
• Learn to deploy and manipulate of the Raycast gizmo
• Projectiles interactions with world entities and players

  
## Before You Begin

 If you haven’t done so, please review the Getting Started section for tutorials,
which includes information on:
• Tutorial prerequisites and assumptions
• How to use tutorial worlds and assets in your own worlds
• Developer tools and testing for your worlds

 Note: All tutorials are created using TypeScript 2.0.0. You can learn more about how
to upgrade your own world to TypeScript 2.0.0. See [Getting Started with Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/tutorial-prerequisites/).  
...
...
# Module 1 - Setup
...
## Learning Pathways

  
### Play and modify

 To create a copy of the Shooting Mechanics Tutorial sample world in Meta Horizon
Worlds:
1. In your headset, open the Create menu.
2. Select the Tutorials tab.
3. Browse the Advanced Tutorials shelf to locate the Simple Shooting Mechanics world.
4. Select the world.
5. A duplicate version is created, with you as its owner. The world name is set to:
Simple Shooting Mechanics.

 You can create a new world from a tutorial world from the desktop editor or from
the headset. For more information on this workflow, see See [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).  
...
...
# Module 1 - Setup
...
## Learning Pathways
...
### Use in your world

 For more information on how to apply assets or scripts from this world to yours,
see [Use Assets from Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).  
...
...
# Module 1 - Setup
...
## Learning Pathways

  
### Play and modify
...
### Use in your world
...
...
# Module 1 - Setup
...
## Multiplayer

 This experience is not intended to be a multiplayer experience, but feel free to
try it out with friends.  
...
...
# Module 1 - Setup
...
## Get Started
...
### Build mode and Preview mode

 In the above, the world is in Build mode, which is where you add, move, and modify the entities in your world. In Preview mode, you can drop into the world and experience it like an external
...
...
# Module 1 - Setup
...
## Get Started
...
### Build mode and Preview mode
...
visitor would. To enter Preview mode, you press the Play button in the toolbar: ![Image of toolbar with Play button highlighted](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480503857_676362558235032_5081585825323827551_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=xp0kAGCox9wQ7kNvwHqb0rS&_nc_oc=AdkuNHJNWec_bldwj4FVEcmid4nZInoMQI4JEcrHN50c6Z8yZWIYbM9lZijNjHAmfos&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FbCbNhaMHxucUwbLC3pN...
...
# Module 1 - Setup
...
## Get Started
...
### Build mode and Preview mode
...
 Playtesting: To playtest your world: Click the Play button, which begins the simulation by executing your scripts and drops your avatar in
the world. Tip: You can skip starting the simulation if you just want to preview the world and
its entities without any scripted activities. More on Simulation below. Preview mode controls:
• Use the mouse and `WASD` controls to move in the world.
  • In Preview mode, you move at a single speed.
• To jump, press `SPACEBAR`. It’s a good idea to test any required jumping distances in Preview mode.
• To leave Preview mode and return to Build mode, press `ESC`.

 Tip: You can also explore the world in VR mode from the desktop and through the VR
headset itself. More on this later. Note: Preview mode in the desktop editor is not the same thing as playing the game
...
...
# Module 1 - Setup
...
## Get Started
...
### Build mode and Preview mode
...
in one of the targeted platforms, such as VR. Simulation: The simulation controls can be used to start, stop, and reset playback of your
world’s scripts. In the toolbar, next to the playback controls, you can see the
World Simulation button. By default, World Simulation is turned on when you press the Play button. This means that when you drop into the world, the world’s scripts are
executed. As needed, you can turn off World Simulation, which enables you to explore the
world without script-related activities getting triggered. This approach is
useful for analyzing the art and world layout. To disable simulation, click the World Simulation button in the toolbar. To restart world simulation, click the Reset button.  
...
...
# Module 1 - Setup
...
## Get Started
...
### Asset Library and Console tabs

 At the bottom of the desktop editor screen, you can see the following tabs:
•  Asset Library: This tab provides access to all assets in your Asset Library, which includes
all assets that you own or that have been shared to you. Tip: You can also access assets that have been provided by Meta. In the Asset
Library tab, click Public Assets to explore. To add an asset, drag it into your world. Note: In some cases, you may be interacting with entities in a tutorial world to
which you do not have access through your Asset Library tab. This is ok.
•  Console: Click this tab to review messages log messages (info, warning, error) that are
generated from messages that you push to the console from your TypeScript. This
is an invaluable debugging tool. More on the Console later.

  
...
...
# Module 1 - Setup
...
## Get Started

 To begin, open your new version of the tutorial world in the desktop editor.
1. Open the Meta Quest Link application (formerly, Oculus) on your desktop.
2. In the Library tab, locate the Meta Horizon Worlds application in which to build
your version of the world.
3. From the context menu, select Start in Desktop Mode.
4. In the Creations Home page, select your copy of the tutorial template.
5. Your world should now be opened in the desktop editor, and your project should
look something like the following:
...
...
# Module 1 - Setup
...
## Get Started
...
 ![Image of the world's entities in the desktop editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480771236_676362561568365_2904909360084496927_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=G7sw618ffKsQ7kNvwFM3wht&_nc_oc=Adn41k5vrrv5IqEw1iZ3hS-6jQMBerqg1XU4M8EWa6WRpRZfkDlt_kizj8MxgGB1ONU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FbCbNhaMHxucUwbLC3pN5w&oh=00_Afep1AP3ae9ZzmO...
...
# Module 1 - Setup
...
### Build mode and Preview mode
...
### Asset Library and Console tabs
...
...
# Module 1 - Setup
...
## Checkpoint

 Done with Module 1! In this module, you:
• Verified prerequisites
• Opened the tutorial world in the desktop editor
  • Checked out the Asset Library tab and Console tab
• Tested your world
  • Learned about Preview and simulation controls
  • Switched between Build mode and Preview mode

 In the next module, we look at the included TypeScript scripts.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Module 1 - Setup
...
## Checkpoint
...
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 1 - Setup
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsimple-shooting-mechanics-tutorial%2Fmodule-1-setup%2F)
...
# Module 1 - Setup

 ![Thumbnail of the Simple Shooting Mechanics tutorial world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462384297_563294049541884_4432521421105344562_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=iE-rv4Ao_CAQ7kNvwFVtteA&_nc_oc=AdmL3L3LJT-YEpbDQzyibzv1fxzNRNX_KERpUHdjIVW9EuOiStPeb4bMNKSikDCS48M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FbCbNhaMHxucUwbLC3pN5w&oh=00_Afc14H3b6MXIk9pmqoUp1PcNlmiKBYzbz3NI...
...
# Module 1 - Setup
...
 ImportantThis content is intended as a companion to the tutorial world of the same name,
which you can access through the desktop editor. When you open the tutorial
world, a copy is created for you to explore, and this page is opened so that you can
follow along. For more information, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds). This sample covers how to create a configurable gun and laser gun from the basic
components available to every creator with access to the desktop editor. These
gun types have different methods of targeting and managing projectiles:
|  |
|  |
| Basic gun | Projectile Launcher gizmo | The Projectile Launcher gizmo is attached to the end of the gun and launches a physical object (projectile) outward into the world. This object can be tracked for collision purposes. |
...
...
# Module 1 - Setup
...
| Laser gun | Raycast gizmo | The Raycast gizmo is fired from the end of the laser gun with its laser projectile determined by casting an invisible ray out into the world. Its physical representation in the world is a visual effect. |

 The scripts and functionality from this tutorial can be used in your next
project. Key game development areas:
• Projectile interactions with the world
• A gun made with a Projectile Launcher gizmo
• A on/off laser with configurable laser distance

 Key learning objectives:
• Learn to deploy and manipulate the Projectile Launcher gizmo
• Learn to deploy and manipulate of the Raycast gizmo
• Projectiles interactions with world entities and players

  
## Before You Begin
...
## Learning Pathways
...
## Multiplayer
...
## Get Started
...
## Checkpoint
...
## Additional Links
...
      Learn
# Module 1 - Setup
