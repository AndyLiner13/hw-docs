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
  
  [Create a hierarchy](../../image_data/560fb9dfa6c87fc429ba751370cf4800d88efd139769d95666ec878d0da06649.md)
  
  ### Overview
  This image depicts a 3D modeling software interface, specifically showing a scene view with objects placed within a grid environment. The left side displays a hierarchical list of objects, while the right side shows the 3D workspace with various 3D models.
  
  ### Key Elements
  - **Left Panel (Hierarchy)**:
    - **Visual description**: A vertical menu with a dark background.
    - **Location**: Left side of the image.
    - **Contents**: Contains a list of objects such as "SpawnPoint," "Sound Recorder," "SmoothCylinder," and "Capsule." The "SmoothCylinder" item is highlighted in blue, indicating selection.
    - **Visual styling**: Dark gray background, white text, blue highlight for selected items.
  
  - **Right Panel (Scene View)**:
    - **Visual description**: A 3D workspace with a light blue gradient sky and a gray grid floor.
    - **Location**: Right side of the image.
    - **Contents**: Three 3D models are visible:
      - Two white, rounded objects resembling cylinders or spheres.
      - One small cube with a microphone icon and a blue arrow pointing upwards.
    - **Visual styling**: White objects, gray grid, light blue sky.
  
  - **Bottom Right Corner**:
    - **Visual description**: A small blue humanoid figure.
    - **Location**: Bottom right corner.
    - **Contents**: A simple blue stick figure character.
    - **Visual styling**: Blue color, simplistic design.
  
  ### Visual Flow / Relationships
  - **Most Prominent Visually**: The 3D models in the scene view.
  - **Arrows/Connectors**: None visible.
  - **Spatial Relationships**: The objects are arranged in a scattered manner within the scene view, with no clear implied reading order.
  
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
  
  [The object is added to the chosen hierarchy](../../image_data/299b11fd770facfcc9a831979e2af2e23cd4ee10e3cb6a108281abcbab888756.md)
  
  ### Overview
  This image depicts a 3D modeling software interface, specifically showing a scene view with a grid floor and a sky background. The left side displays a hierarchical structure of objects within the scene, while the right side shows the 3D view of the scene itself.
  
  ### Key Elements
  - **Left Panel (Hierarchy)**:
    - **Visual description**: A vertical panel with a dark background.
    - **Location**: Left side of the image.
    - **Contents**: Contains a list of objects with icons next to them. Examples include "SpawnPoint," "[Empty Object]," "Sound Recorder," "SmoothCylinder," and "Capsule."
    - **Visual styling**: Icons are small and white, text is white against a dark background.
  
  - **Scene View**:
    - **Visual description**: A 3D view with a light blue sky and a gray grid floor.
    - **Location**: Right side of the image.
    - **Contents**: Three white 3D objects resembling cylinders are placed on the floor. There is also a small cube with a microphone icon on it.
    - **Visual styling**: Objects are simple and geometric, with no additional textures or colors.
  
  - **Right-Top Corner**:
    - **Visual description**: A small avatar figure standing on the floor.
    - **Location**: Bottom-right corner of the scene view.
    - **Contents**: A blue humanoid figure with a hand raised, possibly indicating interaction or selection.
    - **Visual styling**: Simple, stylized human form with a blue color scheme.
  
  ### Visual Flow / Relationships
  - **Most Prominent Visually**: The 3D objects in the scene view.
  - **Arrows/Connectors**: None visible.
  - **Spatial Relationships**: The objects are arranged in a scattered manner on the floor, with no specific order or grouping indicated.
  
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