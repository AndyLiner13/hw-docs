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

[Drag and drop any entity on top of any other entity](../../../../images/output/img_20251211_061609_20251211_061609.md)

### Overview
This image depicts a user interface element showing a hierarchical structure, likely from a game development or asset management tool. The interface includes a search bar at the top, a filter icon, and a tree-like structure displaying nested objects.

### Key Elements
- **Search Bar**: Located at the top-left, it has a magnifying glass icon and the placeholder text "> Search hierarchy <".
- **Filter Icon**: Positioned to the right of the search bar, resembling a funnel.
- **Tree Structure**: Below the search bar, it displays a nested list of objects.
  - **[Spawn Point]**: A small icon resembling a rocket ship appears next to this entry.
  - **Cube**: This item is expanded, indicated by a downward-pointing triangle next to its name. It is highlighted in blue, suggesting it is currently selected or active.
  - **Cone**: Nested under the Cube, indicated by a smaller downward-pointing triangle.
  - **Sphere**: Nested under Cone, also indicated by a smaller downward-pointing triangle.

### Visual Flow / Relationships
The most prominent visual element is the **Cube**, as it is highlighted and expanded. The visual flow follows a hierarchical structure, moving from the top-level [Spawn Point] down through the nested objects. Arrows and triangles indicate the parent-child relationships within the hierarchy.

</details>

<p></p>



### Empty objects

It’s not necessary to designate an existing object in the scene as the parent of a group. You can create an intangible empty object, which you will be able to use as the parent for one or more children.

Empty objects have their own rules for visualization. In order to keep them from cluttering the scene, they remain invisible unless they are selected or have no children associated with them.

**Note**: This visualization of the empty object does not scale with its child objects, because it’s just a UI marker and not part of the content itself.

<details>
<summary>Empty objects remain invisible until selected or become parents</summary>

<p></p>

[Empty objects remain invisible until selected or become parents](../../../../images/output/img_20251211_061657_20251211_061657.md)

### Overview
The image depicts a 3D model of a cube with a grid background. The cube is rendered in a simple, clean style, likely intended for a design or modeling software environment.

### Key Elements
- **Visual Description**: The cube is a solid blue with white checkered edges, suggesting a transparent or semi-transparent material.
- **Location**: The cube is centered in the image.
- **Contents**: The cube has a uniform blue color with white checkered patterns along its edges.
- **Visual Styling**: The cube has a smooth surface with soft lighting, giving it a slightly glossy appearance. The background is a light gray grid, which helps in visualizing the cube's dimensions.

### Visual Flow / Relationships
- **Most Prominent Visually**: The cube is the focal point of the image.
- **Spatial Relationships**: There are no arrows, lines, or connectors. The cube is the only object in the image, and the grid serves as a backdrop to indicate perspective and scale.

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

[Pivot around parent objects](../../../../images/output/img_20251211_061803_20251211_061803.md)

### Overview
This image depicts a user interface element showing a dropdown menu with two options: "Center" and "Pivot". The dropdown is triggered by a button labeled "Local" with a downward arrow indicating a drop-down action. The interface has a blue background with some icons and buttons at the top left corner.

### Key Elements
- **Visual description**: The dropdown menu is rectangular with rounded corners.
- **Location**: Positioned below the "Local" button.
- **Contents**: Contains two options: "Center" and "Pivot".
- **Visual styling**: The dropdown has a light blue background with white text. The "Center" option is highlighted in a darker shade of blue, suggesting it is currently selected.

- **Visual description**: The "Local" button is a small rectangle with rounded corners.
- **Location**: Located at the top left of the image.
- **Contents**: The word "Local" is written in white text on a dark gray background.
- **Visual styling**: The button has a subtle shadow effect, giving it a slightly raised appearance.

- **Visual description**: The icons at the top left corner appear to be part of a toolbar.
- **Location**: Positioned at the very top left corner of the image.
- **Contents**: There are four icons visible, but their specific functions are not discernible from the image alone.
- **Visual styling**: The icons are small and appear to be in a dark gray or black color, with white highlights.

### Visual Flow / Relationships
- **Most prominent visually**: The dropdown menu is the most prominent feature due to its size and the fact that it is open.
- **Arrows/lines/connectors**: There are no arrows, lines, or connectors visible in the image.
- **Spatial relationships**: The dropdown menu is directly below the "Local" button, and the icons are positioned to the left of the dropdown.

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