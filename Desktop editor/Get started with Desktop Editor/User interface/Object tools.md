---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/object-tools
---

# [Object tools](#object-tools)

![Object tools in the Desktop Editor](../../../_assets/images/8cce16848beb84c9d8caaaf5eb00b78f8f2cdd01153222396ea6ca678e7c024e.png)

The object tools in the Desktop Editor provide a set of commonly used tools for building scenes and asset use. Each option provides a menu of different types of tools that you can use for creating your worlds.

For more in-depth information about the object tools, see [Using the Object tools](../../Objects/Using%20the%20Object%20Tools.md)

This suite of tools contains the following object tool tyou can use:

- [Select](Object%20tools.md#select)
- [Move](Object%20tools.md#move)
- [Rotate](Object%20tools.md#rotate)
- [Scale](Object%20tools.md#scale)
- [Local and Global Coordinate Systems](Object%20tools.md#local-and-global-scripts)
- [Pivot](Object%20tools.md#pivot)
- [Snapping tools](Object%20tools.md#snapping-tools)

## [Select](#select)

![The Select tool](../../../_assets/images/13503756b51854d64b53eaeab1ee0be645092897f2b537b3a47e124e76c0ebd6.png)

Use the **Select** tool to select an object on the scene. This enables you to easily manipulate the object or view its properties. You can also select multiple objects by either using the **Select** tool and holding the **Ctrl** key down while you select the objects in the scene, or by holding down the **Ctrl** or **Shift** key and selecting the objects in the **Hiearchy** panel.

## [Move](#move)

![The Move tool](../../../_assets/images/3989a99c618b75b1169e76c24435ec9fc43a40c5766a1b6a0e8aa0935307503f.png)

Select an object and then use the **Move** tool to reposition it anywhere in your scene.

## [Rotate](#rotate)

![The Rotate tool](../../../_assets/images/10ddc3bb81745bbb5c515df7a2bbbfc492a2b9bdfbd35eba581ac8db16104904.png)

Use the **Rotate** tool to rotate an object about its center or pivot point. You can rotate it in any direction using the tool.

## [Scale](#scale)

![The Scale tool](../../../_assets/images/c18b88560d29b649d7f439dcda3102e7a097b0c34a26a7885b8e1636c4afe897.png)

Use the **Scale** tool resize an object in your scene. It can be scaled in a single direction (such as making it longer or wider), or in all directions (making it bigger or smaller).

## [Local and Global Coordinates](#local-and-global-coordinates)

![The Local and Global Coordinate tool](../../../_assets/images/6adeb9af39dd7d71fdcea322ca02c58c6d06cd8203cc0a061d730c75a10c9e92.png)

This option toggles between **Local** and **Global** axes for the **Rotate** and **Move** tools. If this is set to **Local** (the default), any movement or rotation along (or about) an axis will be relative to the current orientation of the object. If it’s set to **Global**, it will move or rotate relative to the world’s X, Y, and Z axes.

## [Pivot](#pivot)

![The Pivot tool](../../../_assets/images/def57a8336585f6f36b92279f4c1c2a8c1c75050ff6208f7cc3278d288669cc9.png)

By default, objects are positioned based on their center point. You can use the **Pivot** tool to position objects instead based on their pivot point, which is usually located at the bottom of the object.

## [Snapping tools](#snapping-tools)

![The suite of Snapping tools](../../../_assets/images/4f678fb3e61278260beebaf26e846f2cf2baad55e545f9f5ae3999c698c92797.png)

You can use the **Snapping** tools to precisely translate, rotate, and scale objects in your scene by forcing the object to *snap* to a whole value, into a new position, orientation, or scale.

The following snapping tools are availabe in the Desktop Editor UI:

- [Translation Grid Snap](Object%20tools.md#translation-grid-snap)
- [Rotation Angle Snap](Object%20tools.md#rotation-angle-snap)
- [Scale Snap](Object%20tools.md#scale-snap)
- [Relative or Absolute Snap](Object%20tools.md#relative-or-absolute-snap)
- [Snap to Surfaces](Object%20tools.md#snap-to-surfaces)

### [Translation Grid Snap](#translation-grid-snap)

![The Translation Grid Snap tool](../../../_assets/images/ef18cf869c744e8fa210283ae7df6244b24baecb8a0721fc90e0bd10a990bec4.png)

**Translation Grid Snap** provides you a way to move objects along a given axis by specific increments called *Grid Snap Units*. They then snap into position along a whole coordinate value. Snapping objects into position helps you place object precisesly in your scene.

The Translation Grid Snap supports both local and global coordinate systems.

### [Rotation Angle Snap](#rotation-angle-snap)

![The Rotation Angle Snap tool](../../../_assets/images/885afe4789f54ee84c7c804ab81e8e738ff2a453122a80254361513f65a11a99.png)

Use the **Rotation Angle Snap** tool to rotate an object about its center point in specific increments.

### [Scale Snap](#scale-snap)

![The Scale Snap tool](../../../_assets/images/95323b7a3838dd875afbf22f9d61eb3e12b7cc1801398cb5bd1eee0d4ae6a3b0.png)

Use the **Scale Snap** toggle when you want to change an object’s size, and you want to scale it incrementally using a scaling factor.

### [Relative or Absolute Snap](#relative-or-absolute-snap)

![The Relative or Absolute Snap tool](../../../_assets/images/5a1ed89818c27963812d8bf06c0c4d32eddc4846f46aadf4321253796683a91d.png)

Snapping objects to values helps you align them precisely. By default, the Desktop Editor uses Relative snapping, but you can change it to use Absolute snapping.

| Snap Type | Description                                                                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relative  | Aligns objects based on their current position relative to other objects. This is useful to maintain consistent spacing or alignment between multiple objects in your scene. |
| Absolute  | Aligns objects to a fixed grid or axis, regardless of their current position. This is useful to place objects at exact coordinates, or to align them to a specific grid.     |

### [Snap to Surfaces](#snap-to-surfaces)

![The Snap to surfaces tool](../../../_assets/images/42ab6d4766c2c0ded08c3e2b82e4ba462880884f81bc183a48ca28e7298f340c.png)

Use the **Snap to surfaces** to snap the pivot point of one object to the collider (surface) of another object in the scene.

### [See also](#see-also)

The **Object tool** suite is part of the collection of tools in the Desktop Editor UI. You can find out more about the UI at:

- [The Desktop Editor user interface](User%20Interface.md)

You can also try out the editor by working through the the introductory tutorials:

- [Create Your First World Tutorial](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world-intro)

