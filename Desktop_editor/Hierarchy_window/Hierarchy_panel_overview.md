# Hierarchy panel overview

The hierarchy view in the desktop editor provides advanced features for defining relationships between content in your scene. Hierarchy editing allows you to create nested parent/child relationships between objects. You can also create empty objects that serve as parent objects within those hierarchies. And you'll be able to directly select children of a hierarchy.

## Features

These features will provide additional functionality to the editing process for defining object relationships.

### Parent anything to anything

From the hierarchy view in the desktop editor, you can drag and drop any entity on top of any other entity to create a parent/child relationship. These relationships can be nested within each other to create hierarchies of grouped objects. Common reasons to create parent/child relationships include:
• Having the transform of one entity impact another. For example, moving a car (parent) moves the steering wheel (child) with it.
• Organizing groups of objects into conceptual layers or folders. For example, grouping all trees in your world into a collection to make them easier to manage.

When an entity is at the top of the hierarchy and has no parent, it is called a root entity.

### Empty objects

It's not necessary to designate an existing object in the scene as the parent of a group. You can create an intangible empty object, which you will be able to use as the parent for one or more children. Empty objects have their own rules for visualization. In order to keep them from cluttering the scene, they remain invisible unless they are selected or have no children associated with them. Note: This visualization of the empty object does not scale with its child objects, because it's just a UI marker and not part of the content itself.

### Pivot around parent objects

Unlike with groups created by the legacy Grouping feature, moving a parent's children does not affect the parent's location. This enables behaviors like pivoting children around the parent object rather than around the center of mass of the group of objects. This behavior can be used regardless of whether the parent object is an empty object or an existing object in the scene. To pivot an object around its parent:
1. Select the parent object in the object hierarchy.
2. Click the Rotate or Scale button in the top menu bar.
3. Select Pivot from the dropdown menu in the top menu bar.
4. Use the manipulators to rotate or scale the grouped object and observe how it pivots in relation to the parent object.

### Direct selection of children in the scene

When you click a child object in the scene, you are selecting the child object rather than the parent. This applies to all child objects that have been grouped using hierarchy editing. In the past, when you clicked a child object in the scene, you selected the outermost parent group of that child. Grouped objects created using the Grouping feature still maintain this legacy behavior. Note: Asset template instances will select the root node of the asset instance rather than the child object.

## Differences from legacy grouping

Creating parent/child relationships in the hierarchy editor is very similar to the legacy Object Grouping feature (now deprecated). Here are some of the key differences:
• Legacy groups do not contain a user-designated "parent" object in the scene.
  • Legacy groups have a dynamically generated parent that automatically moves and resizes to encompass the objects the group contains, whereas parent objects in a hierarchy do not automatically move or resize when their children are moved or resized.
  • Because of this automatic encompassing behavior, Pivot mode and Center mode are effectively identical for legacy groups.
  • The "parent" location of a legacy group is automatically set at the center point of all its objects.
• When you remove all the objects from a legacy group, the group is deleted. When you remove all the children from a non-legacy parent object (empty or otherwise), the parent is not deleted.
• When you click a member of a legacy group in a scene in the desktop editor, you select the entire group. When you click the non-legacy child of a parent in a parent/child group, you select only the child object.

## Case study on creating a simple town

A creator decides he wants to build a simple town in Horizon using editable hierarchy. He has already ingested the mesh assets to his asset library for the pieces he needs, such as buildings, roads, and trees. He starts putting them together in a new world, in the following steps:
1. First, he creates an empty object to represent the town.
   1. He creates another empty object for the surrounding forest. He does this for easier organization of his hierarchy.
   2. The location of these empty objects isn't important because they're just for organization. What is important are the names. He makes sure to name one of them "Town" and the other "Forest".
2. Next, he places tree prefabs around the world.
   1. He leaves a big space in the center for the town.
   2. Then he selects all the trees in the hierarchy editor and drags them under the "Forest" empty object.
3. Now it's time to build out the town.
   1. He wants to build it out into different "blocks" of buildings, so he adds a bunch of buildings to the world.
   2. Then he creates an empty object in the center of each one, which he calls "Block".
   3. He parents "Block" to "Town" and parents all of the new buildings to "Block".
4. Each house needs decorations around it.
   1. He adds decorative details around the houses to make them look unique and add character to the world.
   2. He parents these decorations to each house so they'll move with the house if he decides to reposition it.
5. To quickly populate the rest of the town, he:
   1. Duplicates the first block and drags it over to new locations.
   2. When each duplicated block is in place, he tweaks the position of the buildings in each block.
   3. Then he changes around the decorations.
   4. And replaces some house models to make things look a little less uniform.
6. To finish the town, he wants to create roads.
   1. He places one road segment mesh in the world.
   2. He then puts a few street light meshes around it.
   3. Then he parents the street light to the road segment.
   4. And duplicates a road segment multiple times to create a full road network.
   5. He creates a new empty object called "Roads" which he parents to "Town".
   6. Then he parents all of the road segment meshes to the "Roads" object.
7. After he finishes the road network, he realizes the street lights are too close together.
   1. He selects them by clicking on each one.
   2. Then he moves them to where he wants them to go.
8. Now that the core of everything is built, he decides that the town isn't centered in the forest area.
   1. He clicks on the "Town" empty object in the hierarchy.
   2. He then uses the manipulators to move and align the town to where he wants it.

Thanks to the object nesting capabilities of hierarchy editing, the entire town easily moves together in one big piece.
