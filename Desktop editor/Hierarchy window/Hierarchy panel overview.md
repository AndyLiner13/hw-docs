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

![Drag and drop any entity on top of any other entity](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452514110_512510764620213_1429075691349308108_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=HpqQx5mv1-EQ7kNvwHXncu8&_nc_oc=Adme6T-gtEnbSsiawY0-B-q30vwGjMW92-7Gx6jh_HPXyMh_iHo8-owHoUbckb0meIw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QMdk0SDbmu_9gPTzfR1qtw&oh=00_AflQ75sD1kj2NeOarxAeiww6pgxfiJpDTYEQKYNjJ5xkNw&oe=694BBD57)

### Empty objects

It’s not necessary to designate an existing object in the scene as the parent of a group. You can create an intangible empty object, which you will be able to use as the parent for one or more children.

Empty objects have their own rules for visualization. In order to keep them from cluttering the scene, they remain invisible unless they are selected or have no children associated with them.

**Note**: This visualization of the empty object does not scale with its child objects, because it’s just a UI marker and not part of the content itself.

![Empty objects remain invisible until selected or become parents](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452541301_512510767953546_1065862861088532929_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=LBhI4bY6T54Q7kNvwEjATWD&_nc_oc=AdkSdrBdsP0kOKIkRcQIQtxAmmyFVXwEh3zRIs2vpXK_ycn5KcexiJBxdDNkn_YVpwU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QMdk0SDbmu_9gPTzfR1qtw&oh=00_AfkZnMOtVolhvE4tdkDE1LiJM1ARbQE-iZ9qe3CXzuxc9Q&oe=694BE851)

### Pivot around parent objects

Unlike with groups created by the legacy Grouping feature, moving a parent object’s children does not affect the parent’s location. This enables behaviors like pivoting children around the parent object rather than around the center of mass of the group of objects. This behavior can be used regardless of whether the parent object is an empty object or an existing object in the scene.

To pivot an object around its parent:

- Select the parent object in the object hierarchy.
- Click the Rotate or Scale button in the top menu bar.
- Select Pivot from the dropdown menu in the top menu bar.
- Use the manipulators to rotate or scale the grouped object and observe how it pivots in relation to the parent object.

![Pivot around parent objects](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452532398_512510757953547_2671853206226151862_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=VYCFSaSUB0MQ7kNvwHknAwQ&_nc_oc=AdkDqiVouFutGuEAZtNiowQjIdPZDvKmfSGmHnuisYIUDuDoRKPdn174eIZT9fZUmCk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=QMdk0SDbmu_9gPTzfR1qtw&oh=00_AfmcA8hcQuqU3oQHGEZCxU0rKcMqB1frstu2nQifAVPcaQ&oe=694BD4A7)

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

Thanks to the object nesting capabilities of [hierarchy editing](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Objects/Object%20hierarchy%20and%20groups.md), the entire town easily moves together in one big piece.