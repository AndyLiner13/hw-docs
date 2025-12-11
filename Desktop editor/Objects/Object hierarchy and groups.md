Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/objects/object-grouping

# Object hierarchy and groups

The Meta Horizon Worlds desktop editor provides you with the ability to combine objects so you can select, move, rotate, or scale objects as a single unit. This is achieved through defining object relationships that allow you to set behaviors, such as [collidable](../../Performance/Performance%20best%20practices/Physics%20best%20practices.md#collidable-objects), for all the child objects of the same parent. Additionally, creating nested [parent-child relationships](../Hierarchy%20window/Hierarchy%20panel%20overview.md#features) between objects improves world organization, and object manipulation and management.

**Note**: While creating parent-child relationships between objects, pay attention to the location of the [pivot point](../Hierarchy%20window/Hierarchy%20panel%20overview.md#pivot-around-parent-objects) that defines your rotations and scale transformations.

## Create a parent-child hierarchy between objects

While it’s not necessary to designate an existing object in the scene as the parent of a group, any [object in the hierarchy view](../Hierarchy%20window/Hierarchy%20panel%20overview.md#parent-anything-to-anything) can be dragged and dropped onto any other object to create a parent-child relationship. Alternatively, you can create an intangible [empty object](../Hierarchy%20window/Hierarchy%20panel%20overview.md#empty-objects) as the parent for one or more children. The following steps demonstrates how an empty object is created to be the parent of selected objects.

- Press Ctrl + Click or Shift + Click to select multiple objects.

  <details>
<summary>Create a hierarchy</summary>

<p></p>

[Create a hierarchy](../../../../images/output/img_20251211_072444_20251211_072444.md)

### Overview
This image depicts a 3D modeling software interface, specifically showing a scene view with a grid floor and a sky background. The left side displays a hierarchical list of objects, while the right side shows the 3D scene with various 3D models placed on the ground.

### Key Elements
- **Left Panel (Hierarchy)**:
  - **Visual description**: A vertical list with icons and text labels.
  - **Location**: Left side of the image.
  - **Contents**: Contains items like "SpawnPoint," "Sound Recorder," "SmoothCylinder," and "Capsule."
  - **Visual styling**: Dark background with white text and blue highlight for selected items ("SmoothCylinder").
  
- **Scene View**:
  - **Visual description**: A 3D environment with a grid floor and a gradient sky.
  - **Location**: Right side of the image.
  - **Contents**: Three 3D models are visible: a white cylinder, a white cube with microphone icons, and another white cylinder.
  - **Visual styling**: Simple shapes with no additional textures or colors.

- **Bottom Right Corner**:
  - **Visual description**: A small humanoid figure.
  - **Location**: Bottom right corner of the scene view.
  - **Contents**: A small blue humanoid character standing on the grid floor.
  - **Visual styling**: Simple, stylized human form.

### Visual Flow / Relationships
- **Most prominent visually**: The 3D scene view with the grid floor and the three 3D models.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: The hierarchy list on the left corresponds to the objects in the scene view on the right. The bottom right corner figure is separate but part of the scene.

</details>

<p></p>


- Create an empty object to be the parent of the selected objects:

  Press Ctrl + G on your keyboard, or right click to select **Create parent object** from the context menu.

## Add an object to an existing hierarchy

- Select the object you want to add to an existing hierarchy.
- Click and drag the object to the hierarchy.

  In the following image, the **Sound Recorder** is dragged to the **Empty Object** hierarchy.

  <details>
<summary>The object is added to the chosen hierarchy</summary>

<p></p>

[The object is added to the chosen hierarchy](../../../../images/output/img_20251211_072534_20251211_072534.md)

### Overview
This image depicts a 3D modeling software interface, specifically showing a scene view with a grid floor and a sky background. The left side displays a hierarchical structure of objects within the scene, while the right side shows the actual 3D environment.

### Key Elements
- **Scene View**: Located on the right side of the image, featuring a grid floor and a blue sky background. Three white, rounded objects are placed on the floor, along with a small cube with a microphone icon and a green background.
- **Hierarchy Panel**: On the left side, it lists objects in a tree-like structure. The highlighted object is "[Empty Object]" which contains nested objects like "Sound Recorder," "SmoothCylinder," and "Capsule."
- **Grid Floor**: A light gray grid spans the entire floor area, indicating the workspace for placing and manipulating objects.
- **Sky Background**: A gradient of blue shades forms the backdrop, suggesting an outdoor environment.
- **Camera View**: A small blue figure with a camera icon is located at the bottom right, indicating the current camera perspective.

### Visual Flow / Relationships
The most prominent visual elements are the objects in the scene view. The hierarchy panel is secondary but essential for understanding the structure of the scene. The camera view icon suggests that the user can interact with the scene from various angles.

</details>

<p></p>



## Remove objects from a hierarchy

- Objects can be removed from hierarchies using the same drag-and-drop method as described above.

  You can also right-click the object you’d like to remove from the hierarchy and select **Unparent selection**.

## Unparent all objects in a hierarchy

- Select the parent object of the hierarchy.
- Right-click the parent object to click **Unparent child objects**.
- All child objects are removed from the hierarchy, and the parent object remains.

## Additional object organizations

The four procedures explained above can be combined to create additional object organizations such as the following:

* Add multiple objects to an existing group.
* Remove multiple objects from an existing group.
* Move objects from one group to another group.
* Nest groups.
* Add or remove objects from nested groups.
* Move objects from a nested group to a higher level group.
* Undo or Redo your last operation.

## What’s next?

Learn more about the concepts of object hierarchy and pivot around parent objects in [Hierarchy panel overview](../Hierarchy%20window/Hierarchy%20panel%20overview.md).