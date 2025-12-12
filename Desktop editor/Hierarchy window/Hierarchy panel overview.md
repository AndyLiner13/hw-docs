Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/hierarchy-window-overview

# Hierarchy panel overview

The hierarchy view in the desktop editor provides advanced features for defining relationships between content in your scene. Hierarchy editing allows you to create nested parent/child relationships between objects. You can also create empty objects that serve as parent objects within those hierarchies. And you’ll be able to directly select children of a hierarchy.

## Features

These features will provide additional functionality to the editing process for defining object relationships.

### Parent anything to anything

From the hierarchy view in the desktop editor, you can drag and drop any entity on top of any other entity to create a parent/child relationship. These relationships can be nested within each other to create hierarchies of grouped objects. Common reasons to create parent/child relationships include:

* Having the transform of one entity impact another. For example, moving a car (parent) moves the steering wheel (child) with it.
* Organizing groups of objects into conceptual layers or folders. For example, grouping all trees in your world into a collection to make them easier to manage.

When an entity is at the top of the hierarchy and has no parent, it is called a *root entity*.

<details>
<summary>Drag and drop any entity on top of any other entity</summary>

<p></p>

[Drag and drop any entity on top of any other entity](../../image_data/48d3c82faa067c7f030e3af3e406b5afc0aeeacab0fbfbdcccb8303c9a3e84e2.md)

### Overview
This image depicts a user interface element showing a hierarchical structure, likely from a 3D modeling software or game development tool. The main focus is on a tree-like structure displaying various nodes, with a search bar at the top for navigating through the hierarchy.

### Key Elements
- **Search Bar**: Located at the top, spanning the width of the interface. Contains a magnifying glass icon and the placeholder text "> Search hierarchy <".
- **Hierarchy Tree**: Positioned below the search bar, occupying the majority of the screen. It consists of expandable nodes labeled `[Spawn Point]`, `Cube`, `Cone`, and `Sphere`.
  - **[Spawn Point]**: A node with a small icon resembling a person, located above the `Cube` node.
  - **Cube**: A node highlighted in blue, indicating selection or active status. It has a small icon resembling a cube.
  - **Cone**: A node with a small icon resembling a cone, located below the `Cube` node.
  - **Sphere**: A node with a small icon resembling a sphere, located below the `Cone` node.
- **Expand/Collapse Icons**: Small triangle icons next to each node, suggesting that clicking them would expand or collapse the subtree beneath.

### Visual Flow / Relationships
The most prominent visual element is the `Cube` node, which is highlighted in blue. The expand/collapse icons indicate a hierarchical relationship, with the `Cube` node being the parent of `Cone` and `Sphere`. The search bar at the top suggests a way to navigate through the hierarchy efficiently.

</details>

<p></p>



### Empty objects

It’s not necessary to designate an existing object in the scene as the parent of a group. You can create an intangible empty object, which you will be able to use as the parent for one or more children.

Empty objects have their own rules for visualization. In order to keep them from cluttering the scene, they remain invisible unless they are selected or have no children associated with them.

**Note**: This visualization of the empty object does not scale with its child objects, because it’s just a UI marker and not part of the content itself.

<details>
<summary>Empty objects remain invisible until selected or become parents</summary>

<p></p>

[Empty objects remain invisible until selected or become parents](../../image_data/f231f2d71714edaa4c36002c17bc0f0095a83bc0ba64812a241a9ba44605b8c2.md)

### Overview
The image depicts a single, three-dimensional cube rendered in a 3D modeling software environment. The cube is centered within a grid background, suggesting a workspace for 3D modeling tasks.

### Key Elements
- **Visual Description**: The cube has a solid blue face with white checkered edges, indicating a selection or active state.
- **Location**: The cube is centrally located within the image.
- **Contents**: The cube's faces are uniformly colored blue, and the edges are marked with white checkers.
- **Visual Styling**: The cube has a smooth texture with soft lighting, giving it a realistic appearance. The background grid is light gray with darker gray lines forming a uniform grid pattern.

### Visual Flow / Relationships
- **Most Prominent Visually**: The cube is the focal point of the image.
- **Spatial Relationships**: There are no arrows, lines, or connectors present. The cube is isolated against the grid background, emphasizing its standalone nature.

</details>

<p></p>



### Pivot around parent objects

Unlike with groups created by the legacy Grouping feature, moving a parent object’s children does not affect the parent’s location. This enables behaviors like pivoting children around the parent object rather than around the center of mass of the group of objects. This behavior can be used regardless of whether the parent object is an empty object or an existing object in the scene.

To pivot an object around its parent:

- Select the parent object in the object hierarchy.
- Click the Rotate or Scale button in the top menu bar.
- Select Pivot from the dropdown menu in the top menu bar.
- Use the manipulators to rotate or scale the grouped object and observe how it pivots in relation to the parent object.

<details>
<summary>Pivot around parent objects</summary>

<p></p>

[Pivot around parent objects](../../image_data/56bf5d58dbe8514700eb7bf205f761ce36c3fd6e4bc973c519201a4b620020fa.md)

### Overview
This image depicts a user interface element showing a dropdown menu with two options: "Center" and "Pivot". The dropdown is triggered by a button labeled "Local" with a downward arrow indicating a drop-down action. The interface has a dark theme with blue and black as primary colors.

### Key Elements
- **Visual description**: The dropdown menu is rectangular with rounded corners.
- **Location**: Positioned below the "Local" button.
- **Contents**: Contains two options: "Center" and "Pivot", both with a checkmark icon next to them.
- **Visual styling**: The "Center" option is highlighted in blue, suggesting it is currently selected. The "Pivot" option is in black, indicating it is not selected.

### Visual Flow / Relationships
- **Most prominent visually**: The "Center" option due to its blue highlight.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: The dropdown menu is directly below the "Local" button, and the options are arranged vertically within the dropdown.

</details>

<p></p>



### Direct selection of children in the scene

When you click a child object in the scene, you are selecting the child object rather than the parent. This applies to all child objects that have been grouped using hierarchy editing.

In the past, when you clicked a child object in the scene, you selected the outermost parent group of that child. Grouped objects created using the Grouping feature still maintain this legacy behavior.

**Note**: Asset template instances will select the root node of the asset instance rather than the child object.

## Differences from legacy grouping

Creating parent/child relationships in the hierarchy editor is very similar to the legacy Object Grouping feature (now deprecated). Here are some of the key differences:

* Legacy groups do not contain a user-designated “parent” object in the scene.
  + Legacy groups have a dynamically generated parent that automatically moves and resizes to encompass the objects the group contains, whereas parent objects in a hierarchy do not automatically move or resize when their children are moved or resized.
  + Because of this automatic encompassing behavior, Pivot mode and Center mode are effectively identical for legacy groups.
  + The “parent” location of a legacy group is automatically set at the center point of all its objects.
* When you remove all the objects from a legacy group, the group is deleted. When you remove all the children from a non-legacy parent object (empty or otherwise), the parent is *not* deleted.
* When you click a member of a legacy group in a scene in the desktop editor, you select the entire group. When you click the non-legacy child of a parent in a parent/child group, you select only the child object.

## Case study on creating a simple town

A creator decides he wants to build a simple town in Horizon using editable hierarchy. He has already ingested the mesh assets to his asset library for the pieces he needs, such as buildings, roads, and trees. He starts putting them together in a new world, in the following steps:

- First, he creates an empty object to represent the town.
  - He creates another empty object for the surrounding forest. He does this for easier organization of his hierarchy.
  - The location of these empty objects isn’t important because they’re just for organization. What is important are the names. He makes sure to name one of them “Town” and the other “Forest”.
- Next, he places tree prefabs around the world.
  - He leaves a big space in the center for the town.
  - Then he selects all the trees in the hierarchy editor and drags them under the “Forest” empty object.
- Now it’s time to build out the town.
  - He wants to build it out into different “blocks” of buildings, so he adds a bunch of buildings to the world.
  - Then he creates an empty object in the center of each one, which he calls “Block”.
  - He parents “Block” to “Town” and parents all of the new buildings to “Block”.
- Each house needs decorations around it.
  - He adds decorative details around the houses to make them look unique and add character to the world.
  - He parents these decorations to each house so they’ll move with the house if he decides to reposition it.
- To quickly populate the rest of the town, he:
  - Duplicates the first block and drags it over to new locations.
  - When each duplicated block is in place, he tweaks the position of the buildings in each block.
  - Then he changes around the decorations.
  - And  replaces some house models to make things look a little less uniform.
- To finish the town, he wants to create roads.
  - He places one road segment mesh in the world.
  - He then puts a few street light meshes around it.
  - Then he parents the street light to the road segment.
  - And duplicates a road segment multiple times to create a full road network.
  - He creates a new empty object called “Roads” which he parents to “Town”.
  - Then he parents all of the road segment meshes to the “Roads” object.
- After he finishes the road network, he realizes the street lights are too close together.
  - He selects them by clicking on each one.
  - Then he moves them to where he wants them to go.
- Now that the core of everything is built, he decides that the town isn’t centered in the forest area.
  - He clicks on the “Town” empty object in the hierarchy.
  - He then uses the manipulators to move and align the town to where he wants it.

Thanks to the object nesting capabilities of [hierarchy editing](../Objects/Object%20hierarchy%20and%20groups.md), the entire town easily moves together in one big piece.