Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/custom-ui-gizmo

# Custom UI gizmo

[Custom UI](/hw-docs/desktop-editor/custom-ui/video-create-performant-custom-uis-in-horizon-worlds) in Worlds is a feature that allows creators to build customizable and interactive user interfaces in their virtual worlds. This feature enables creators to animate UIs, create heads-up displays (HUDs), lay out panels, attach buttons, and dynamically update UI elements based on player actions or other in-world events. The custom UI system is designed to enhance the player experience by allowing creators to tailor their worlds for different platforms, including mobile and desktop. The custom UI feature is great for creating complex UIs and supports a wide range of UI components.

The [custom UI gizmo](/horizon-worlds/reference/2.0.0/ui_uigizmo) is a helper tool that lets you use the custom UI feature in your worlds.

## Limitations

The custom UI gizmo can impact [performance](/hw-docs/performance-best-practices-and-tooling/performance-best-practices/custom-ui-optimization).

## Access the custom UI gizmo

The custom UI section has a detailed tutorial on how to [create your first “Hello World” UI panel](/hw-docs/desktop-editor/custom-ui/creating-a-custom-ui-panel) using the custom UI gizmo.

## Properties

The custom UI gizmo is an entity. All objects in a world are represented by entities. [Entities](/horizon-worlds/reference/2.0.0/core_entity) have their respective properties such as position, rotation, and scale. In the **Properties** panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

For additional descriptions of the custom UI gizmo properties, see [Custom UI panel configurations](/hw-docs/desktop-editor/custom-ui/custom-ui-panel-configurations).

## Scripting

Use scripting to add interactivity and dynamic behavior to their UI panels. For example, scripts can be used to bind data from the world to the UI panel for displaying a player’s health or score. Another good example involves player interaction in which scripts can be used to handle user input, such as button clicks, text entry, or other interactions, and respond accordingly. Completed sample worlds called Custom UI examples with compiled scripts in [Creation Home](/hw-docs/desktop-editor/getting-started/creating-a-new-world) are also available. These worlds have [companion documentation](/hw-docs/tutorial-worlds/custom-ui-examples-tutorial/station-0-setup).

## What’s next?

Now that you’ve been introduced to the custom UI gizmo, further your learning with tutorials and related developer guides:

* [Custom UI](/hw-docs/desktop-editor/custom-ui/video-create-performant-custom-uis-in-horizon-worlds)
* [Tutorial worlds on custom UI](/hw-docs/tutorial-worlds/custom-ui-examples-tutorial/station-0-setup)
* [TypeScript component lifecycle](/hw-docs/typescript/typescript-script-lifecycle)
* [Meta Horizon Creator Program’s creator manual on custom UI gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#custom-ui-gizmo)