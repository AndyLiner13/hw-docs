Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/debug-console-gizmo

# Debug console gizmo

When you create your world, there are helpful development tools for [debugging and optimization](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Developer%20Tools%20for%20Tutorials.md). One such tool is the debug console [gizmo](/hw-docs/Gizmos/About%20gizmos.md), which allows you to debug scripts in real time while you’re in the virtual environment with the headset on. This is often referred to as in-world debugging. It is designed to display script messages with an in-world interface for viewing debug information, making it more suitable for interactive and real-time debugging scenarios. You can see logs and debug information as you interact with the world. In comparison, the standard console displays similar information in the log viewer in the [desktop editor](/hw-docs/Desktop%20editor/Desktop%20Editor.md) under the tab **Console**.

The following image shows the [debug console](/hw-docs/Scripting/Get%20started%20with%20TypeScript/The%20Debug%20Console.md) gizmo while you have the headset on, providing an immersive debugging experience. As shown, the **Start world**, **Stop world**, and **Rest world** buttons control the executing states of the scripts.

![Debug console gizmo showing debug messages in-world console](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493597714_723416580196296_8022545866060318316_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=XRlXYUekMaEQ7kNvwFntfcH&_nc_oc=AdnuQdfTk9QYvipvRFxjzO9WPw2J0T8RZL3HgFSW__iYSvh8i1-Sw535TwEIeMwM9zc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KqJ6FtLCYbeYqnH8kd1XXw&oh=00_AfiiZkigC_9O7toKz133DpnhgNBZSvsootRoep20F9qyIA&oe=6931191C)

The following image shows the debug console gizmo while you are using the desktop editor without the headset. The log messages are also displayed under the desktop editor **Console** tab.

![Debug console gizmo showing debug messages in the desktop editor console](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/499399178_723580280179926_4040817637596418026_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=BDJZyIH09i0Q7kNvwEyXZdi&_nc_oc=Adk20lmUqqwB7vyw2W3QJ9tOMoymdMeK01hm9fxJBQxSc1x6bpGVG0Yl_rFLu9AWZoI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KqJ6FtLCYbeYqnH8kd1XXw&oh=00_Afhf9WefMHPa3EAcYihg8XcRox5GlyOVz9X60mZi1wZYnA&oe=69312750)

The following sections show you how to access and configure the gizmos so you can start debugging in VR.

## Access the debug console gizmo

While you can access and configure the gizmos in the [VR tool](/hw-docs/VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the debug console gizmo from the desktop editor and add it to the [scene pane](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-panel).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “debug console” in the search field.
- Select the debug console gizmo and drag it into the scene.
  You can now edit the new gizmo properties in the Properties panel.

## Properties

All objects in a world are represented by [entities](/hw-docs/Reference/core/Classes/Entity.md). Entities have their respective properties such as position, rotation, and scale. In the **Properties** panel, edit the debug console gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

The visibility of the debug console is configured under [**Visibility**](/hw-docs/Scripting/Get%20started%20with%20TypeScript/The%20Debug%20Console.md#controlling-visibility-of-the-debug-console). The options are **Edit Mode Only**, [**Edit and Preview Mode**](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md) , or [**In Published World**](/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md#step-5-play-in-your-world-on-mobile). Be aware that the gizmo is only visible in the Build mode when **Visibility** is in the default **Edit Mode Only**.

![Debug console gizmo's visibility options](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/498317217_723416583529629_2536898422592253740_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=-UZCZiKszhMQ7kNvwECKjCQ&_nc_oc=AdnieHSn14wCEgEr43WgflkPJmBgKE6LUNTJkvCl3yiLjxR32UQmfeOcZunD67qSnHU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KqJ6FtLCYbeYqnH8kd1XXw&oh=00_AfjZujXYw-cYqPX56l5u7d_wkxllOExNL5laIgATYwmXyg&oe=69313DF6)

**Note**: The Edit Mode that the Properties panel refers to is also known as the [Build mode](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md). See also the [Build mode](/hw-docs/VR%20tools/Getting%20started/Use%20your%20controllers%20in%20Build%20Mode%20of%20Meta%20Horizon%20Worlds.md) in VR.

## What’s next?

Now you’ve been introduced to the debug console gizmo, further your learning with tutorial worlds with completed samples, and developer guides:

* [Meta Horizon Creator Program creators manual on the debug console gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#debug-console-gizmo)
* [Developer tools for tutorials](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Developer%20Tools%20for%20Tutorials.md)
* [The debug console](/hw-docs/Scripting/Get%20started%20with%20TypeScript/The%20Debug%20Console.md)
* [Roof top racer tutorial worlds on testing tools](/hw-docs/Tutorials/Rooftop%20Racers%20sample%20world/Module%202%20-%20Overall%20Game%20Manager%20Systems.md#testing-tools)
* [TypeScript Tutorial](/hw-docs/Scripting/Get%20started%20with%20TypeScript/TypeScript%20Tutorial.md)