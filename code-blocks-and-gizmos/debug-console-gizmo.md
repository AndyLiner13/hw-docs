Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/debug-console-gizmo

# Debug console gizmo

When you create your world, there are helpful development tools for [debugging and optimization](/hw-docs/tutorial-worlds/getting-started-with-tutorials/developer-tools-for-tutorials). One such tool is the debug console [gizmo](/hw-docs/code-blocks-and-gizmos/about-gizmos), which allows you to debug scripts in real time while you’re in the virtual environment with the headset on. This is often referred to as in-world debugging. It is designed to display script messages with an in-world interface for viewing debug information, making it more suitable for interactive and real-time debugging scenarios. You can see logs and debug information as you interact with the world. In comparison, the standard console displays similar information in the log viewer in the [desktop editor](/hw-docs/desktop-editor/desktop-editor) under the tab **Console**.

The following image shows the [debug console](/hw-docs/typescript/getting-started/the-debug-console) gizmo while you have the headset on, providing an immersive debugging experience. As shown, the **Start world**, **Stop world**, and **Rest world** buttons control the executing states of the scripts.

![Debug console gizmo showing debug messages in-world console](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493597714_723416580196296_8022545866060318316_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Erf_fMv3XskQ7kNvwFtzr0-&_nc_oc=Adng9koeE9vIt8xUi-6dEqkgo0w9XGwOfwNxgL-o_EntWQJUkC5dhwMzYKSmVxF3vXo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=W7yI53UXg29seXOtxfLmTw&oh=00_AfieJDqDGFbmR8mOWo5usqKO6jRDs8-mrCFPdQgQhIfbGw&oe=692C0B5C)

The following image shows the debug console gizmo while you are using the desktop editor without the headset. The log messages are also displayed under the desktop editor **Console** tab.

![Debug console gizmo showing debug messages in the desktop editor console](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/499399178_723580280179926_4040817637596418026_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fvj0U5HnNd0Q7kNvwHiwVSJ&_nc_oc=AdmvHLi2n65IzPdLbisVDO1D1VfUEGVjz5F-iQdla52jPrgWV4b2ZTYwS5Zf0OJu7bg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=W7yI53UXg29seXOtxfLmTw&oh=00_AfiZXYyzYgagvlDGSaVRG0QZv71QyLNduQw-NQThE4VJDg&oe=692BE150)

The following sections show you how to access and configure the gizmos so you can start debugging in VR.

## Access the debug console gizmo

While you can access and configure the gizmos in the [VR tool](/hw-docs/vr-creation/getting-started/create-a-new-world-in-horizon), the following steps show you how to access the debug console gizmo from the desktop editor and add it to the [scene pane](/hw-docs/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “debug console” in the search field.
- Select the debug console gizmo and drag it into the scene.
  You can now edit the new gizmo properties in the Properties panel.

## Properties

All objects in a world are represented by [entities](/horizon-worlds/reference/2.0.0/core_entity). Entities have their respective properties such as position, rotation, and scale. In the **Properties** panel, edit the debug console gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

The visibility of the debug console is configured under [**Visibility**](/hw-docs/typescript/getting-started/the-debug-console#controlling-visibility-of-the-debug-console). The options are **Edit Mode Only**, [**Edit and Preview Mode**](/hw-docs/desktop-editor/getting-started/user-interface/operational-modes) , or [**In Published World**](/hw-docs/get-started/create-your-first-world#section-4-play-in-your-world-on-mobile). Be aware that the gizmo is only visible in the Build mode when **Visibility** is in the default **Edit Mode Only**.

![Debug console gizmo's visibility options](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/498317217_723416583529629_2536898422592253740_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=gWdyF5diXi4Q7kNvwHwPscm&_nc_oc=AdmHWSDv4Pgbif9FaTxfStkfr5-JPjZycW074jwv96dRAzkSMQFujs29ftpdXezChPU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=W7yI53UXg29seXOtxfLmTw&oh=00_AfhDWQ52w5WTWiL58VC9RaqUz0PCK3TRv7fNLE-VNYG_Yw&oe=692BF7F6)

**Note**: The Edit Mode that the Properties panel refers to is also known as the [Build mode](/hw-docs/desktop-editor/getting-started/user-interface/operational-modes). See also the [Build mode](/hw-docs/vr-creation/getting-started/using-controllers-in-build-mode) in VR.

## What’s next?

Now you’ve been introduced to the debug console gizmo, further your learning with tutorial worlds with completed samples, and developer guides:

* [Meta Horizon Creator Program creators manual on the debug console gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#debug-console-gizmo)
* [Developer tools for tutorials](/hw-docs/tutorial-worlds/getting-started-with-tutorials/developer-tools-for-tutorials)
* [The debug console](/hw-docs/typescript/getting-started/the-debug-console)
* [Roof top racer tutorial worlds on testing tools](/hw-docs/tutorial-worlds/horizon-traversal-sample-world/module-2-overall-game-manager-systems#testing-tools)
* [TypeScript Tutorial](/hw-docs/typescript/getting-started/typescript-tutorial)