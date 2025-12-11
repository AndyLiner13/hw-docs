Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/custom-ui-gizmo

# Custom UI gizmo

[Custom UI](../Desktop%20editor/Custom%20UI/Video%20presentation%20of%20creating%20performant%20custom%20UIs%20in%20Meta%20Horizon%20Worlds.md) in Worlds is a feature that allows creators to build customizable and interactive user interfaces in their virtual worlds. This feature enables creators to animate UIs, create heads-up displays (HUDs), lay out panels, attach buttons, and dynamically update UI elements based on player actions or other in-world events. The custom UI system is designed to enhance the player experience by allowing creators to tailor their worlds for different platforms, including mobile and desktop. The custom UI feature is great for creating complex UIs and supports a wide range of UI components.

The [custom UI gizmo](../Reference/ui/Classes/UIGizmo.md) is a helper tool that lets you use the custom UI feature in your worlds.

## Limitations

The custom UI gizmo can impact [performance](../Performance/Performance%20best%20practices/Custom%20UI%20optimization.md).

## Access the custom UI gizmo

The custom UI section has a detailed tutorial on how to [create your first “Hello World” UI panel](../Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md) using the custom UI gizmo.

## Properties

The custom UI gizmo is an entity. All objects in a world are represented by entities. [Entities](../Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the **Properties** panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

For additional descriptions of the custom UI gizmo properties, see [Custom UI panel configurations](../Desktop%20editor/Custom%20UI/Custom%20UI%20panel%20configurations.md).

## Scripting

Use scripting to add interactivity and dynamic behavior to their UI panels. For example, scripts can be used to bind data from the world to the UI panel for displaying a player’s health or score. Another good example involves player interaction in which scripts can be used to handle user input, such as button clicks, text entry, or other interactions, and respond accordingly. Completed sample worlds called Custom UI examples with compiled scripts in [Creation Home](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Create%20a%20New%20World.md) are also available. These worlds have [companion documentation](../Tutorials/Custom%20UI%20Examples%20tutorial/Station%200%20-%20Setup.md).

## What’s next?

Now that you’ve been introduced to the custom UI gizmo, further your learning with tutorials and related developer guides:

* [Custom UI](../Desktop%20editor/Custom%20UI/Video%20presentation%20of%20creating%20performant%20custom%20UIs%20in%20Meta%20Horizon%20Worlds.md)
* [Tutorial worlds on custom UI](../Tutorials/Custom%20UI%20Examples%20tutorial/Station%200%20-%20Setup.md)
* [TypeScript component lifecycle](../Scripting/TypeScript%20Script%20Lifecycle.md)
* [Meta Horizon Creator Program’s creator manual on custom UI gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#custom-ui-gizmo)