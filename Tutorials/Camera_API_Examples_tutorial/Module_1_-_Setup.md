# Module 1 - Setup
...
## Key Learning Objectives


•  How to switch the camera
•  When to switch the camera
•  Changes to interaction models based on the camera
•  Other stuff:
  •  A working door
  •  Text gizmos and how to manage instructions sets

  
...
...
# Module 1 - Setup
...
## Learning Pathways

 You can follow this tutorial in different ways:  
### Grab What You Need!

 You can use assets and scripts from this world in your own. For more information
on how to apply this world to yours, see [Use Assets from Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials). Note: In the following modules, script names are listed to indicate where the code
for the system is located. These files are available in a local directory for
your scripts. Search for the filename of the name of the world.  
### Follow Along

 These modules are intended to be explored in a sequence. Grab a cup of coffee,
and get ready to learn about the Camera API!  
...
...
# Module 1 - Setup
...
## Before You Begin

 If you haven’t done so, please review the Getting Started section for tutorials,
which includes information on:
• Tutorial prerequisites and assumptions
• How to use tutorial worlds and assets in your own worlds
• Developer tools and testing for your worlds

 Note: All tutorials are created using TypeScript 2.0.0. You can learn more about how
to upgrade your own world to TypeScript 2.0.0. See [Getting Started with Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/tutorial-prerequisites).  
...
...
# Module 1 - Setup
...
## Prerequisites

 To follow along and complete this tutorial, you need the following:
•  A Meta Account and a Meta Horizon Profile.
•  The Meta Horizon Worlds App installed on your Quest device.
•  The desktop editor downloaded and installed on a PC device.

 See [Tutorial Prerequisites](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/tutorial-prerequisites).
•  (Optional) An integrated development environment (IDE) can be connected to the
desktop editor for building your TypeScript scripts.
  • Visual Studio Code is recommended.

 Note: If you are new to the desktop editor or to TypeScript, you might want to start
with the first tutorial. See [Build your first game](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/tutorial-prerequisites). Note: This tutorial is built on TypeScript API version 2.0.0.
...
...
# Module 1 - Setup
...
## Prerequisites
...
•  Your IDE must be running at least TypeScript Version 4.7.4.
•  For API documentation, see [API v2.0.0 documentation](https://horizon.meta.com/resources/scripting-api/index.md/?api_version=2.0.0).
...
...
# Module 1 - Setup
...
## Get Started
...
### Set up for web and mobile testing

 As part of the development process, you must test your work on each supported
platform, which requires setting up a development environment for them. Note: Mobile can only be tested in a published world. Note: For this tutorial world, the desktop editor is a reasonable testbed for the
basics of camera operations. However, mobile has some differences that need to be
included as part of your testing. For example, this world includes a camera
reset button, which appears in the mobile screen only. Mobile experiences should be
tested as well. For more information, see [How to Test on Web and Mobile](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/how-to-test-on-web-and-mobile).  
...
...
# Module 1 - Setup
...
## Get Started
...
### Tutorial modules

 The modules in this tutorial are organized in the following sequence.
|  |
|  |
| Module 2 - PlayerCamera Overview | Overview of how the player avatar’s camera works in Meta Horizon Worlds. How PlayerCamera objects and code work. |
| Module 3 - PlayerCameraManager | How the PlayerCameraManager code works and how you can interface with it. |
| Module 4 - Pan Camera | Set up camera to follow player at a consistent offset. |
| Module 5 - Fixed Camera and Spectator Mode | How to set up the PlayerCamera to be located at a fixed point based on a reference object. |
| Module 6 - Fixed Camera and Cutscenes | How you can use the PlayerCamera for cutscenes and other perspectives such as isometric game experiences |
| Module 7 - Other Systems and Summary | How to use the secondary systems and summing it all up |

  
...
...
# Module 1 - Setup
...
## Get Started

 Before you begin, you must create a new world from this tutorial world. See [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds). Open your new world in the desktop editor, where you can explore it in either
Build mode or Preview mode to familiarize yourself with the world and its
structures before modifying it. Note: This tutorial assumes that you are familiar with the desktop editor, a desktop
application for world building in Meta Horizon Worlds. If you are new to the
desktop editor, you should check out the “Build your first game” tutorial to learn
the basics of building worlds and TypeScript scripts in the desktop editor. See
[Build your first game](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game).  
### Set up for web and mobile testing
...
### Tutorial modules
...
...
# Module 1 - Setup
...
## Checkpoint

 Module 1 completed! In this module, you:
•  Verified prerequisites
•  Opened the tutorial world in the desktop editor
•  Set up web and mobile testing
•  Learned the basic structure of the world

 In the next module, you explore the camera, its APIs, and its usage in web and
mobile.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcamera-api-examples-tutorial%2Fmodule-1-setup%2F)
...
# Module 1 - Setup

 ![Thumbnail of Camera API Examples World](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473631823_632772149260740_360189898514370635_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=KJbTG0v_TuUQ7kNvwHLtbQQ&_nc_oc=AdmJ2XID0k-E_rshA4C7hM6Upk9m1IVeQadoYe5QnPAVm-PKbJmskes9ZZYIw5U9lN0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Uja95AWaq6YpEWNgj3up3A&oh=00_AffJENcxeBxOTp3_qV1cqb--LQuNudUxR4...
...
# Module 1 - Setup
...
 ImportantThis content is intended as a companion to the tutorial world of the same name,
which you can access through the desktop editor. When you open the tutorial
world, a copy is created for you to explore, and this page is opened so that you can
follow along. For more information, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds). In VR, the camera’s point of view is set to first-person from the point of view
of your avatar. In web and mobile experiences, however, the camera may be
positioned in different points of view to facilitate the best combination of immersive
experience, situational awareness, and current interactions. This tutorial
covers the different camera positions available through the Camera API for use in
web and mobile worlds, including recommended use cases for each one. Note: This world is supported for web and mobile only. Although you may explore it
...
...
# Module 1 - Setup
...
in VR, the camera POVs do not apply.  
## Key Learning Objectives
...
## Learning Pathways
...
## Before You Begin
...
## Prerequisites
...
## Get Started
...
## Checkpoint
...
## Additional Links
...
      Learn
# Module 1 - Setup
...
