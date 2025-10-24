# Debug console gizmo

## Access the debug console gizmo

 While you can access and configure the gizmos in the [VR tool](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon), the following steps show you how to access the debug console gizmo from the
desktop editor and add it to the [scene pane](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#scene-pane).
1. In the desktop editor while in the Build mode, select Build > Gizmos from the menu bar, search for “debug console” in the search field.
2. Select the debug console gizmo and drag it into the scene. You can now edit the
new gizmo properties in the Properties panel.

  

## Properties

 All objects in a world are represented by [entities](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity). Entities have their respective properties such as position, rotation, and
scale. In the Properties panel, edit the debug console gizmo’s transformation fields to configure its Position, Rotation, and Scale. The visibility of the debug console is configured under [Visibility](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/the-debug-console#controlling-visibility-of-the-debug-console). The options are Edit Mode Only, [Edit and Preview Mode](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/operational-modes) , or [In Published World](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world#section-4-play-in-your-world-on-mobile). Be aware that the gizmo is only visible in the Build mode when Visibility is in the default Edit Mode Only. ![Debug console gizmo's visibility options](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/4983172...
 Note: The Edit Mode that the Properties panel refers to is also known as the [Build mode](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/operational-modes). See also the [Build mode](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/using-controllers-in-build-mode) in VR.  

## What’s next?

 Now you’ve been introduced to the debug console gizmo, further your learning
with tutorial worlds with completed samples, and developer guides:
• [Meta Horizon Creator Program creators manual on the debug console gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#debug-console-gizmo)
• [Developer tools for tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/developer-tools-for-tutorials)
• [The debug console](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/the-debug-console)
• [Roof top racer tutorial worlds on testing tools](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/horizon-traversal-sample-world/module-2-overall-game-manager-systems#testing-tools)
• [TypeScript Tutorial](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/typescript-tutorial)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon/)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
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

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Fdebug-console-gizmo%2F)

# Debug console gizmo

 When you create your world, there are helpful development tools for [debugging and optimization](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/developer-tools-for-tutorials). One such tool is the debug console [gizmo](https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/about-gizmos), which allows you to debug scripts in real time while you’re in the virtual
environment with the headset on. This is often referred to as in-world debugging.
It is designed to display script messages with an in-world interface for viewing
debug information, making it more suitable for interactive and real-time
debugging scenarios. You can see logs and debug information as you interact with the
world. In comparison, the standard console displays similar information in the log
viewer in the [desktop editor](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/desktop-editor) under the tab Console. The following image shows the [debug console](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/the-debug-console) gizmo while you have the headset on, providing an immersive debugging
experience. As shown, the Start world, Stop world, and Rest world buttons control the executing states of the scripts. ![Debug console gizmo showing debug messages in-world console](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493597714_723416580196296_8022545866060318316_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=kXzbaUZhk30Q7kNvwH8KU2O&_nc_oc=AdmXxpJ0vJ3C0-jJN8qklEYrJXbcOz28BgNufdiA9kLSaMEpDDf-la-VmDE46ej9bak&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KrRx5XfEz4MM6R-UEzLkww&o...
 The following image shows the debug console gizmo while you are using the
desktop editor without the headset. The log messages are also displayed under the
desktop editor Console tab. ![Debug console gizmo showing debug messages in the desktop editor console](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/499399178_723580280179926_4040817637596418026_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ILltOWHO89AQ7kNvwF_tQss&_nc_oc=AdlBLqnS8-stDUMAwQwtFWeO9kWxxYPD1wuGTCD5KJJ6YkV8SWI8rU7ShFnuuIQSzb4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KrRx5XfEz4MM6R-UEzLkww&oh=00_AfdmakVEqss_-X5qIVxDD1rQnK6mr...
 The following sections show you how to access and configure the gizmos so you
can start debugging in VR.  

## Access the debug console gizmo
## Properties
## What’s next?
## Additional Links
      Learn
# Debug console gizmo
