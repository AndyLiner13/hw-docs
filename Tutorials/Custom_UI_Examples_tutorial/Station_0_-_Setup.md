# Station 0 - Setup
...
## Before You Begin
...
### Enable Auto-start of the simulation

 Custom UIs are generated entirely from TypeScript code. If Auto-start the
simulation is disabled when you preview your world in desktop editor, no TypeScript
code is executed, and all of your custom UIs are not visible. In the desktop editor, click the three-dot menu in the toolbar. Enable the
following settings:
• Auto-start simulation on Preview entry
• Auto-stop simulation on Preview exit
...
...
# Station 0 - Setup
...
## Before You Begin
...
### Enable Auto-start of the simulation
...
 ![Preview Configuration panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481781953_667154415822513_6557476269878662057_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=DCHSFreINMQQ7kNvwEuIHeO&_nc_oc=Adnnu92ayfGWP0sceucI-6MBZ1rA5ziMIxeP-NMzbkjtqjf3bcN6EEVscqmqR36eiXY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LsUVB-jNJsboh_HjTt5ASw&oh=00_AfdbmZcW1S9qKXAJIra82HYcp...
...
# Station 0 - Setup
...
## Before You Begin

 Before you begin exploring this world, please verify that you have reviewed and
met the prerequisites for access. See [Getting Started with Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/tutorial-prerequisites).  
### Enable Auto-start of the simulation
...
...
# Station 0 - Setup
...
## Overview
...
### Usage

 In your world, you may need to display custom messaging to your visitors or to
provide kiosk-style interactivity for selecting things from a screen. For
example, you may need to deploy a custom UI to assist Players in outfitting themselves
for exploring your world.  
#### Performance considerations


• Try to keep the main thread CPU cost for a customUI:
  • Local client: below 0.5ms per frame
  • Server: below 1.5ms per frame
• Minimize binding set calls.
  • Binding `set()` method causes a ReactVR refresh.
  • `set()` calls and callbacks are networked RPC events between client and server. Total
time for each async operation is bound by network latency on the viewer.

  
...
...
# Station 0 - Setup
...
## Overview
...
### Elements

 A custom interface is composed of:
• An instance of the Custom UI gizmo
  • By default, this object has no visual appearance at runtime. All of its visual
characteristics are defined through TypeScript.
• An associated TypeScript script
  • This defines the 2D panel, its elements, their styles, and any interactivity in
the UI.
• Any related assets, such as referenced objects, textures, audio, etc.
  • The custom UI may reference or have effects on other elements in the world.

  
...
...
# Station 0 - Setup
...
## Overview
...
### General Tips

 There have been reported issues with performance of custom UI’s. The following
tips have been provided to help with performance of your custom UI’s:
• Avoid using or updating custom UIs in conjunction with the world.onUpdate event.
• Avoid making updates to the display of the panel using for/next loops.
• Each time that a panel is updated requires a network call.
• Split multiple custom UIs across multiple Custom UI gizmos.
• Try to make custom UIs as flat as possible.
  • Every layer in a visible custom UI is rendered, even if it is not seen.
  • Set panels that are not being shown to users to be invisible, which stops them
from being rendered.

  
...
...
# Station 0 - Setup
...
## Overview

 This world is set up as a sequence of stations, each of which explore a
different type of custom user interface (CustomUI). From each station, you can learn:
• Elements of custom UIs
• How to initialize custom UIs of different types
• How to explore the APIs
• How to organize your code

  
### Usage
...
### Elements
...
### General Tips
...
...
# Station 0 - Setup
...
## How to Use This World
...
### Create a copy

 Create a copy of this Examples Tutorial first. Then, you can modify the scripts
as needed. You can create your own copy from the desktop editor or from the headset. For
more information on this workflow, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).  
### Start at Station 1

 These examples are separated into different stations. Station 1 represents the
simplest example (font display), with each subsequent station adding more
complexity or new customUI features. Tip: When you land in the world, Station 1 is to your left.  
### Review the Code

 Comments in the code provide additional information on how to use it. If you’ve
created a clone of the source world, you can modify the code to explore it
further.  
...
...
# Station 0 - Setup
...
## How to Use This World
...
### Use in Your World

 For more information on how to apply assets or scripts from this world to yours,
see [Use Assets from Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
# Station 0 - Setup
...
## How to Use This World
...
### Use in Your World
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
# Station 0 - Setup
...
## How to Use This World

 To explore the TypeScript of this Examples Tutorial, you should use the desktop
editor, which allows you to use your integrated development environment and to
explore all world scripts locally. You can also preview results on your desktop.  
### Create a copy
...
### Start at Station 1
...
### Review the Code
...
### Use in Your World
...
...
# Station 0 - Setup
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-examples-tutorial%2Fstation-0-setup%2F)
...
# Station 0 - Setup

 ![Custom UI Examples thumbnail](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475919694_646003171270971_7027298327403430135_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=icAgbztARO4Q7kNvwHwev7V&_nc_oc=AdmIvbh9bpiqFUG3GO50wXJc3vPD12oF6OwFiJ67mWs7ae20XAy2jc6lLL1XUBkJxSM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LsUVB-jNJsboh_HjTt5ASw&oh=00_AffijDP_JcJtumhw0NpGBAQ8iGBjYegaMLRmDCyvPCrsUA...
...
# Station 0 - Setup
...
 ImportantThis content is intended as a companion to the tutorial world of the same name,
which you can access through the desktop editor. When you open the tutorial
world, a copy is created for you to explore, and this page is opened so that you can
follow along. For more information, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds). In this example world, we explore the core capabilities of custom UIs, which
enable you to build custom 2D interfaces in your worlds. Example worlds are intended to provide simple, clear, and well-documented
examples of platform features. Also included is relevant information about TypeScript
...
...
# Station 0 - Setup
...
and coding in general. Feedback is welcome. This doc is intended to be a companion to the example world listed below. For platform documentation on custom UIs, see [Custom UI](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui/).  
## Before You Begin
...
## Overview
...
## How to Use This World
...
## Additional Links
...
      Learn
# Station 0 - Setup
...
