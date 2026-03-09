---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/objects/object-manipulation
---

# Using the Object Tools

With the Worlds desktop editor, you can edit objects in your scene easily and intuitively, with easily accessible buttons on a single toolbar to toggle between different tool functions.

![Object tools in the Desktop Editor](../../_assets/images/8cce16848beb84c9d8caaaf5eb00b78f8f2cdd01153222396ea6ca678e7c024e.png)

## Select object

![The Select tool](../../_assets/images/c2523e3e994161d9d383da3ff1b3d7b11524043915834c215dc0ac2797f80444.png)

Keyboard shortcut: **Shift** + **Q**

Select an object by selecting it in the **Hierarchy** panel, or selecting it in the **Scene** view. If another tool has been selected, click the **Select** tool while focus is on the object. You can also select more than one object at a time by holding down the **Shift** or **Ctrl** keys and selecting the objects in either the **Scene** view or the **Hiearchy** panel.

![Selecting an object](../../_assets/gifs/3b021fd95d5deb286efa267e3bd20acd47aa572c4ea09b4d05349241461e9c2b.png)

## Move object

![The Move tool](../../_assets/images/39a994675bc53c0e79f608d93ab00892adf72fbb0a2de869191a93de74cf10b3.png)

Keyboard shortcut: **Shift** + **W**

When you click the **Move** button with an object selected, a small three-dimensional (3D) coordinate system appears on the object.

![The 3D object coordinate system](../../_assets/images/c6c4a9a2148c7fcc1aa8516e319ad2b5bd6f92e40df3d5a0b74d92e9e4902422.png)

It has arrows going along the red X (left-right), green Y (up-down), and blue Z (forward-back) directions. You can move the object in any of those directions by clicking and dragging on one of the arrows.You can move the object along the XY, XZ, or YZ planes by dragging one of the planar handles (the squares where the arrows meet in the center).

![Moving an object](BROKEN_REF)

## Rotate object

![The Rotate tool](../../_assets/images/26e0ce9c87d3607c519cd1b292a51b76c6f05934505d6d789b9b35b79f02e51f.png)

Keyboard shortcut: **Shift** + **E**

When you click the **Rotate** button with an object selected, a small three-dimensional (3D) set of angles appears on the object.

![Rotational angles](../../_assets/images/5d2aa2fdf10110fce6b97cdcdfafe55eaf260ef887761512fb4c01694ca453cb.png)

Rotate objects around the X, Y, or Z axes by dragging the red (X), green (Y) or blue (Z) angles. These partial circles show the rotation around either the center or the pivot point of the object (whichever you’ve chosen with the **Pivot** tool.) You can rotate the object in any of those directions by clicking the angle and dragging it so that the object rotates the desired amount.

![Rotating an object](BROKEN_REF)

## Scale object

![The Scale tool](../../_assets/images/530c19aff2b896af120d40278f333df105c61a37ff0d5fd9357868c2eea4d964.png)

Keyboard shortcut: **Shift** + **R**

Scale objects along the X, Y, or Z axes by dragging the red (X), green (Y) or blue (Z) arrows. Doing this will only change the scale along that single axis. If you want to uniformly scale the object, drag the center gray box, or press **Shift** and drag one of the red, green, or blue handles.

![Scaling an object](BROKEN_REF)

## Global / local coordinates

![The Local and Global Coordinates tool](../../_assets/images/6adeb9af39dd7d71fdcea322ca02c58c6d06cd8203cc0a061d730c75a10c9e92.png)

This option toggles between **Local** and **Global** axes for the **Rotate** and **Move** tools. If this is set to **Local** (the default), any movement or rotation along (or about) an axis will be relative to the current orientation of the object. If it’s set to **Global**, it will move or rotate relative to the world’s X, Y, and Z axes.

![](BROKEN_REF)

## Pivot

![The Pivot tool](../../_assets/images/def57a8336585f6f36b92279f4c1c2a8c1c75050ff6208f7cc3278d288669cc9.png)

By default, objects are positioned based on their center point. You can use the **Pivot** tool to position objects based on their pivot point, which is usually located at the bottom of the object, rather than based on their center point.

## Snapping tools

![The suite of Snapping tools](../../_assets/images/4f678fb3e61278260beebaf26e846f2cf2baad55e545f9f5ae3999c698c92797.png)

You can use the **Snapping** tools to precisely translate, rotate, and scale objects in your scene by forcing the object to *snap* to a whole value, into a new position, orientation, or scale.

The following snapping tools are availabe in the Desktop Editor UI:

* [Translation Grid Snap](Using%20the%20Object%20Tools.md#translation-grid-snap)
* [Rotation Angle Snap](Using%20the%20Object%20Tools.md#rotation-angle-snap)
* [Scale Snap](Using%20the%20Object%20Tools.md#scale-snap)
* [Relative or Absolute Snap](Using%20the%20Object%20Tools.md#relative-or-absolute-snap)
* [Snap to Surfaces](Using%20the%20Object%20Tools.md#snap-to-surfaces)

### Translation Grid Snap

![The Translation Grid Snap tool](../../_assets/images/ef18cf869c744e8fa210283ae7df6244b24baecb8a0721fc90e0bd10a990bec4.png)

**Translation Grid Snap** provides you a way to move objects along a given axis by specific increments called *Grid Snap Units*. They then snap into position along a whole coordinate value. Snapping objects into position helps you place object precisesly in your scene.

The Translation Grid Snap supports both local and global coordinate systems.

### Rotation Angle Snap

![The Rotation Angle Snap tool](../../_assets/images/885afe4789f54ee84c7c804ab81e8e738ff2a453122a80254361513f65a11a99.png)

Use the **Rotation Angle Snap** tool to rotate an object about its center point in specific increments.

### Scale Snap

![The Scale Snap tool](../../_assets/images/95323b7a3838dd875afbf22f9d61eb3e12b7cc1801398cb5bd1eee0d4ae6a3b0.png)

Use the **Scale Snap** toggle when you want to change an object’s size, and you want to scale it incrementally using a scaling factor.

### Relative or Absolute Snap

![The Relative or Absolute Snap tool](../../_assets/images/5a1ed89818c27963812d8bf06c0c4d32eddc4846f46aadf4321253796683a91d.png)

Snapping objects to values helps you align them precisely. By default, the desktop editor uses Relative snapping, but you can change it to use Absolute snapping.

| Snap Type | Description |
| --- | --- |
| Relative | Aligns objects based on their current position relative to other objects. This is useful to maintain consistent spacing or alignment between multiple objects in your scene. |
| Absolute | Aligns objects to a fixed grid or axis, regardless of their current position. This is useful to place objects at exact coordinates, or to align them to a specific grid. |

### Snap to Surfaces

![The Snap to surfaces tool](../../_assets/images/42ab6d4766c2c0ded08c3e2b82e4ba462880884f81bc183a48ca28e7298f340c.png)

Use the **Snap to surfaces** to snap the pivot point of one object to the collider (surface) of another object in the scene.

## Object tool demonstration

The following video shows use of some of the object tools discussed here:

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/453652177_440894775677861_8360914254631007171_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=zpmpc_-vT0gQ7kNvwEaar0C&_nc_oc=Adm6Zd1AlWggWT9fnz7ppa6GpZAYq6Mk9lYA3IBNH7wC3v4UYA2MXe98nedI_IK4bgqFJu3tTqYeKSi0wkKjM57Y&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=T10a51MqgH5lExOZ47Alzg&oh=00_Afp0dY8F9WrCUCljlm3Nq4OnWgm-Z2pyzhIx3Ge7u6eBmA&oe=696FADBC)