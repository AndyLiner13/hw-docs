---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/objects/object-manipulation
---

# [Using the Object Tools](#using-the-object-tools)

With the Worlds desktop editor, you can edit objects in your scene easily and intuitively, with easily accessible buttons on a single toolbar to toggle between different tool functions.

![Object tools in the Desktop Editor](../../.assets/images/8cce16848beb84c9d8caaaf5eb00b78f8f2cdd01153222396ea6ca678e7c024e.png)

## [Select object](#select-object)

![The Select tool](../../.assets/images/13503756b51854d64b53eaeab1ee0be645092897f2b537b3a47e124e76c0ebd6.png)

Keyboard shortcut: **Shift** + **Q**

Select an object by selecting it in the **Hierarchy** panel, or selecting it in the **Scene** view. If another tool has been selected, click the **Select** tool while focus is on the object. You can also select more than one object at a time by holding down the **Shift** or **Ctrl** keys and selecting the objects in either the **Scene** view or the **Hiearchy** panel.

![Selecting an object](../../.assets/gifs/3b021fd95d5deb286efa267e3bd20acd47aa572c4ea09b4d05349241461e9c2b.gif)

## [Move object](#move-object)

![The Move tool](../../.assets/images/3989a99c618b75b1169e76c24435ec9fc43a40c5766a1b6a0e8aa0935307503f.png)

Keyboard shortcut: **Shift** + **W**

When you click the **Move** button with an object selected, a small three-dimensional (3D) coordinate system appears on the object.

![The 3D object coordinate system](../../.assets/images/c6c4a9a2148c7fcc1aa8516e319ad2b5bd6f92e40df3d5a0b74d92e9e4902422.png)

It has arrows going along the red X (left-right), green Y (up-down), and blue Z (forward-back) directions. You can move the object in any of those directions by clicking and dragging on one of the arrows.You can move the object along the XY, XZ, or YZ planes by dragging one of the planar handles (the squares where the arrows meet in the center).

![Moving an object](../../.assets/gifs/5fe9d12a6fa118bdaebef3e569d03fa14958238c61043adc7d0869087e48e10f.gif)

## [Rotate object](#rotate-object)

![The Rotate tool](../../.assets/images/10ddc3bb81745bbb5c515df7a2bbbfc492a2b9bdfbd35eba581ac8db16104904.png)

Keyboard shortcut: **Shift** + **E**

When you click the **Rotate** button with an object selected, a small three-dimensional (3D) set of angles appears on the object.

![Rotational angles](../../.assets/images/5d2aa2fdf10110fce6b97cdcdfafe55eaf260ef887761512fb4c01694ca453cb.png)

Rotate objects around the X, Y, or Z axes by dragging the red (X), green (Y) or blue (Z) angles. These partial circles show the rotation around either the center or the pivot point of the object (whichever you’ve chosen with the **Pivot** tool.) You can rotate the object in any of those directions by clicking the angle and dragging it so that the object rotates the desired amount.

![Rotating an object](../../.assets/gifs/c857e850c1cd5b526ee6ba747c010f1c701ffdb7baf455df65ec03e8e79b9d04.gif)

## [Scale object](#scale-object)

![The Scale tool](../../.assets/images/c18b88560d29b649d7f439dcda3102e7a097b0c34a26a7885b8e1636c4afe897.png)

Keyboard shortcut: **Shift** + **R**

Scale objects along the X, Y, or Z axes by dragging the red (X), green (Y) or blue (Z) arrows. Doing this will only change the scale along that single axis. If you want to uniformly scale the object, drag the center gray box, or press **Shift** and drag one of the red, green, or blue handles.

![Scaling an object](../../.assets/gifs/05d2e3237fe657f19546ba20f3cc9204d360a583b7af7cad6a4fa33df2282525.gif)

## [Global / local coordinates](#global--local-coordinates)

![The Local and Global Coordinates tool](../../.assets/images/6adeb9af39dd7d71fdcea322ca02c58c6d06cd8203cc0a061d730c75a10c9e92.png)

This option toggles between **Local** and **Global** axes for the **Rotate** and **Move** tools. If this is set to **Local** (the default), any movement or rotation along (or about) an axis will be relative to the current orientation of the object. If it’s set to **Global**, it will move or rotate relative to the world’s X, Y, and Z axes.

![](../../.assets/gifs/fc5b5d789703af6983b1a340e6fdcaf1f7250091661f4c87e9b6a5868b25f364.gif)

## [Pivot](#pivot)

![The Pivot tool](../../.assets/images/def57a8336585f6f36b92279f4c1c2a8c1c75050ff6208f7cc3278d288669cc9.png)

By default, objects are positioned based on their center point. You can use the **Pivot** tool to position objects based on their pivot point, which is usually located at the bottom of the object, rather than based on their center point.

## [Snapping tools](#snapping-tools)

![The suite of Snapping tools](../../.assets/images/4f678fb3e61278260beebaf26e846f2cf2baad55e545f9f5ae3999c698c92797.png)

You can use the **Snapping** tools to precisely translate, rotate, and scale objects in your scene by forcing the object to *snap* to a whole value, into a new position, orientation, or scale.

The following snapping tools are availabe in the Desktop Editor UI:

- [Translation Grid Snap](Using%20the%20Object%20Tools.md#translation-grid-snap)
- [Rotation Angle Snap](Using%20the%20Object%20Tools.md#rotation-angle-snap)
- [Scale Snap](Using%20the%20Object%20Tools.md#scale-snap)
- [Relative or Absolute Snap](Using%20the%20Object%20Tools.md#relative-or-absolute-snap)
- [Snap to Surfaces](Using%20the%20Object%20Tools.md#snap-to-surfaces)

### [Translation Grid Snap](#translation-grid-snap)

![The Translation Grid Snap tool](../../.assets/images/ef18cf869c744e8fa210283ae7df6244b24baecb8a0721fc90e0bd10a990bec4.png)

**Translation Grid Snap** provides you a way to move objects along a given axis by specific increments called *Grid Snap Units*. They then snap into position along a whole coordinate value. Snapping objects into position helps you place object precisesly in your scene.

The Translation Grid Snap supports both local and global coordinate systems.

### [Rotation Angle Snap](#rotation-angle-snap)

![The Rotation Angle Snap tool](../../.assets/images/885afe4789f54ee84c7c804ab81e8e738ff2a453122a80254361513f65a11a99.png)

Use the **Rotation Angle Snap** tool to rotate an object about its center point in specific increments.

### [Scale Snap](#scale-snap)

![The Scale Snap tool](../../.assets/images/95323b7a3838dd875afbf22f9d61eb3e12b7cc1801398cb5bd1eee0d4ae6a3b0.png)

Use the **Scale Snap** toggle when you want to change an object’s size, and you want to scale it incrementally using a scaling factor.

### [Relative or Absolute Snap](#relative-or-absolute-snap)

![The Relative or Absolute Snap tool](../../.assets/images/5a1ed89818c27963812d8bf06c0c4d32eddc4846f46aadf4321253796683a91d.png)

Snapping objects to values helps you align them precisely. By default, the desktop editor uses Relative snapping, but you can change it to use Absolute snapping.

| Snap Type | Description                                                                                                                                                                  |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Relative  | Aligns objects based on their current position relative to other objects. This is useful to maintain consistent spacing or alignment between multiple objects in your scene. |
| Absolute  | Aligns objects to a fixed grid or axis, regardless of their current position. This is useful to place objects at exact coordinates, or to align them to a specific grid.     |

### [Snap to Surfaces](#snap-to-surfaces)

![The Snap to surfaces tool](../../.assets/images/42ab6d4766c2c0ded08c3e2b82e4ba462880884f81bc183a48ca28e7298f340c.png)

Use the **Snap to surfaces** to snap the pivot point of one object to the collider (surface) of another object in the scene.

## [Object tool demonstration](#object-tool-demonstration)

The following video shows use of some of the object tools discussed here:

<video controls><source src="(BROKEN_REF)" type="video/mp4"></video>

