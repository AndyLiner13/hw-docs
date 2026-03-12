---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/selecting-objects-in-desktop-editor
---

# [Selecting Objects in Desktop Editor](#selecting-objects-in-desktop-editor)

When working in the Desktop Editor, you can select an object and edit its properties or attached script by:

- Clicking on an object directly in the scene.
- Clicking on an object in the Hierarchy panel window.

![](../../.assets/gifs/ab8d63adcc940a67a8d048e0cf5f29100beea96af172814be07f76271219798e.gif)

![](../../.assets/gifs/24415c1681d05f2232b75678499b9516055187958625f897e9fce9bbcecfc0d3.gif)

**Note:** To redirect the view towards a specific object, select an object and press the “F” key.

## [Selecting multiple objects](#selecting-multiple-objects)

You can select multiple objects in the Hierarchy panel in the following ways:

- Select an object, then hold the Ctrl key and click another object to add it to the selection. You may repeat this until all the desired objects are selected. You can also use this method to deselect individual objects.

![](../../.assets/gifs/96b3fff5c720adb520283ce6f9fb7c25d8acf1192001521b4b18c5cfcc85b3ae.gif)

- Select an object, then hold the Shift key and click another object to select those objects and all objects in between them.

![](../../.assets/gifs/0e0060cebb6ed2514675794d75eca6adf5dd9dac1c83817e6ffd08033214a03b.gif)

**NOTE:** You can also click individual objects in the scene while holding Shift or Ctrl to add or remove them from the current selection.

## [Duplicate selected objects](#duplicate-selected-objects)

After selecting an object, or multiple objects, in the hierarchy view you can duplicate it to create multiple instances of the same object. Duplicating your existing objects can help reduce the time needed to create things like multiple instances of an item or texture that needs to be repeated or reused.

To do so use the following process:

1. Select an object or objects in the hierarchy view.
2. Right click and select **Duplicate selection** from the pop-up menu. You can also use the keyboard shortcut **Ctrl + D**. ![Duplicate object option in the hierarchy window view](../../.assets/images/ea202f7ae792b04d15d5e942cf88571ffa87ea82c80790f1f455ed57b010e5b2.png)
3. Your selected objects, including any child objects, will appear in the hierarchy view.

## [Sub-Object Selection](#sub-object-selection)

In the Desktop Editor, you can’t select a single sub-object of a group simply by clicking on it in the scene.

Sub-object selection is a feature for the Desktop Editor that lets you select sub-objects in the scene using a second click.

- The first click selects the group.
- The second click selects the sub-object that you clicked on.

**NOTE**: Sub-object selection applies only to groups. For sub-objects in regular hierarchies, the first click still selects the sub-object. To select the parent object, you can simply select it directly.

### [User flow](#user-flow)

Use this procedure to try out sub-object selection.

1. In the Desktop Editor, travel to any world in Edit mode.
2. In the world, either create a new group of entities, or find an existing group.
3. Click on one of the objects in the group. The entire group is selected.
4. Click on the same object again. The sub-object is selected.
5. You can repeat this procedure again with nested groups.

## [Selecting simulated objects and ghost visuals](#selecting-simulated-objects-and-ghost-visuals)

While running a simulation, animated or physics objects (the objects that move) leave behind a ghost visual at their origin point.

![](../../.assets/gifs/864a651d19bf63c44bb17d068db528ea2a71b8177b7005d95e9395f08f0e1969.gif)

While the simulation is running, you can select the moving object either by clicking on the simulated object itself, or its ghost visual.

![](../../.assets/gifs/a09f0f28ed0dcd32272a7259b69bd2ee2f569b57fa6b694378037ff8d84c23d0.gif)![](../../.assets/gifs/a73cc9ad92e2c0b38a2648bdf68a473f4fc63bab6c20206c0f2f35c40a06582c.gif)

This works for both regular selection and marquee selection.

## [Outline colors](#outline-colors)

- **Selected** objects and gizmos are outlined in blue.
- **Locked** objects and gizmos are outlined in red, both on mouse over and when selected.

![56b7a774-5178-4932-9458-82bb7b33895c.png](../../.assets/images/f679ea270c6d374b1309ca3c6d2184afd384f5a6b1607df576c19941de84dee4.png)

## [Focusing the camera on a selected entity](#focusing-the-camera-on-a-selected-entity)

To focus the camera on a specific object or gizmo, select the object and press the “F” key. ![](../../.assets/gifs/24415c1681d05f2232b75678499b9516055187958625f897e9fce9bbcecfc0d3.gif)

## [Grouped object behaviors](#grouped-object-behaviors)

In grouped objects, when selecting a child object it selects the whole group.

![SelectionGif.gif](../../.assets/gifs/569df5d76ce7b40fff0f95a1765b90c837c09acae9bec1f9292559e166d52486.gif)

Locked entities can be selected in the viewport, but manipulators are disabled on locked entities.

![LockSelectionGif.gif](../../.assets/gifs/69876d8538e2a39231dfe113c67064c7f991c17b9e4a1b54b26e7d39afbcd36f.gif)

Ghost visuals of a single mesh entity use the object’s mesh, but the ghost of a grouped object uses the group’s bounding box instead.

![](../../.assets/gifs/2434c3c581c28b8c2b6579cff0ece3aef79ec92ca5d2546d94cb51316285133d.gif)

## [Marquee selection](#marquee-selection)

Marquee selection makes it easier to select multiple objects. It simplifies the selection process by allowing you to select more than one object by creating a box around the objects you want selected and highlighting them in blue.

#### [How to use marquee selection](#how-to-use-marquee-selection)

1. In the Desktop Editor, click and drag a selection box over the objects that you want to select.
   1. All non-locked and visible objects within the box become outlined in blue.
   2. Child objects not within the selection box but with parents that are within the selection box are outlined in white.
   3. Any object within the selection box and belonging to either a group or asset template instance will result in the entire group/asset template instance being outlined in blue. ![](../../.assets/images/8235713aa82f543f1b754401ee6282064d337f206840a54ffe1c3b3535d6cadb.png)
2. When you unclick, the blue outlined objects within the box are selected.

