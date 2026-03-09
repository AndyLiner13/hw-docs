---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/selecting-objects-in-desktop-editor
---

# Selecting Objects in Desktop Editor

When working in the Desktop Editor, you can select an object and edit its properties or attached script by:

* Clicking on an object directly in the scene.
* Clicking on an object in the Hierarchy panel window.

![](BROKEN_REF)

![](BROKEN_REF)

**Note:** To redirect the view towards a specific object, select an object and press the “F” key.

## Selecting multiple objects

You can select multiple objects in the Hierarchy panel in the following ways:

* Select an object, then hold the Ctrl key and click another object to add it to the selection. You may repeat this until all the desired objects are selected. You can also use this method to deselect individual objects.

![](../../_assets/gifs/96b3fff5c720adb520283ce6f9fb7c25d8acf1192001521b4b18c5cfcc85b3ae.png)

* Select an object, then hold the Shift key and click another object to select those objects and all objects in between them.

![](BROKEN_REF)

**NOTE:** You can also click individual objects in the scene while holding Shift or Ctrl to add or remove them from the current selection.

## Duplicate selected objects

After selecting an object, or multiple objects, in the hierarchy view you can duplicate it to create multiple instances of the same object. Duplicating your existing objects can help reduce the time needed to create things like multiple instances of an item or texture that needs to be repeated or reused.

To do so use the following process:

- Select an object or objects in the hierarchy view.
- Right click and select **Duplicate selection** from the pop-up menu. You can also use the keyboard shortcut **Ctrl + D**.
  ![Duplicate object option in the hierarchy window view](../../_assets/images/9d4feb1aaf6fe2b38c0309c8b8641d3554544b915e2eb03d16c55f86b45a241a.png)
- Your selected objects, including any child objects, will appear in the hierarchy view.

## Sub-Object Selection

In the Desktop Editor, you can’t select a single sub-object of a group simply by clicking on it in the scene.

Sub-object selection is a feature for the Desktop Editor that lets you select sub-objects in the scene using a second click.

* The first click selects the group.
* The second click selects the sub-object that you clicked on.

**NOTE**: Sub-object selection applies only to groups. For sub-objects in regular hierarchies, the first click still selects the sub-object. To select the parent object, you can simply select it directly.

### User flow

Use this procedure to try out sub-object selection.

- In the Desktop Editor, travel to any world in Edit mode.
- In the world, either create a new group of entities, or find an existing group.
- Click on one of the objects in the group. The entire group is selected.
- Click on the same object again. The sub-object is selected.
- You can repeat this procedure again with nested groups.

## Selecting simulated objects and ghost visuals

While running a simulation, animated or physics objects (the objects that move) leave behind a ghost visual at their origin point.

![](../../_assets/gifs/864a651d19bf63c44bb17d068db528ea2a71b8177b7005d95e9395f08f0e1969.png)

While the simulation is running, you can select the moving object either by clicking on the simulated object itself, or its ghost visual.

![](../../_assets/gifs/a09f0f28ed0dcd32272a7259b69bd2ee2f569b57fa6b694378037ff8d84c23d0.png)![](../../_assets/gifs/a73cc9ad92e2c0b38a2648bdf68a473f4fc63bab6c20206c0f2f35c40a06582c.png)

This works for both regular selection and marquee selection.

## Outline colors

* **Selected** objects and gizmos are outlined in blue.
* **Locked** objects and gizmos are outlined in red, both on mouse over and when selected.

![56b7a774-5178-4932-9458-82bb7b33895c.png](../../_assets/images/f679ea270c6d374b1309ca3c6d2184afd384f5a6b1607df576c19941de84dee4.png)

## Focusing the camera on a selected entity

To focus the camera on a specific object or gizmo, select the object and press the “F” key. ![](BROKEN_REF)

## Grouped object behaviors

In grouped objects, when selecting a child object it selects the whole group.

![SelectionGif.gif](../../_assets/gifs/569df5d76ce7b40fff0f95a1765b90c837c09acae9bec1f9292559e166d52486.png)

Locked entities can be selected in the viewport, but manipulators are disabled on locked entities.

![LockSelectionGif.gif](../../_assets/gifs/69876d8538e2a39231dfe113c67064c7f991c17b9e4a1b54b26e7d39afbcd36f.png)

Ghost visuals of a single mesh entity use the object’s mesh, but the ghost of a grouped object uses the group’s bounding box instead.

![](../../_assets/gifs/2434c3c581c28b8c2b6579cff0ece3aef79ec92ca5d2546d94cb51316285133d.png)

## Marquee selection

Marquee selection makes it easier to select multiple objects. It simplifies the selection process by allowing you to select more than one object by creating a box around the objects you want selected and highlighting them in blue.

#### How to use marquee selection

- In the Desktop Editor, click and drag a selection box over the objects that you want to select.
  - All non-locked and visible objects within the box become outlined in blue.
  - Child objects not within the selection box but with parents that are within the selection box are outlined in white.
  - Any object within the selection box and belonging to either a group or asset template instance will result in the entire group/asset template instance being outlined in blue. ![](../../_assets/images/8235713aa82f543f1b754401ee6282064d337f206840a54ffe1c3b3535d6cadb.png)
- When you unclick, the blue outlined objects within the box are selected.