Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation

# Navigation mesh generation

Horizon includes World Builder tools and APIs that provide navigation meshes for defining walkable areas of an environment. For example, you might have cases where non-player characters (NPCs) should move within a defined space toward specific locations. This can involve multiple constraints to find an optimal path, such as walkable areas within the environment, obstacles in the path of the target, and slopes leading up or down towards the target. Navigation meshes are 3D polygonal meshes representing the predetermined walkable spaces of a world.

Navigation meshes are used to determine the areas of your world that NPCs can access and the paths they can use to get there. With World Builder tools, you can set up, create, and update your meshes. You can then use the NavMesh TypeScript APIs to create scripts that retrieve navigation path calculations for your NPCs.

This document will cover these navigation mesh topics:

* Main concepts
* Setup procedures
* API reference

## Concepts

Before you get started setting up a navigation mesh, here’s an overview of the main concepts you’ll be using.

### Agent

An agent is an entity that queries and traverses a navmesh. Agents are typically NPCs, but they can also be player characters depending on the game’s implementation. There is no specific Agent class or code structure; it is a general term that refers to entities that query and use the navigation mesh to function.

A navigation mesh is a 3D polygonal mesh that defines sections of an environment that an agent can traverse. A world can have multiple navigation meshes for different types of AI agents, dictated by the navigation profiles you define. Each profile has an associated navigation mesh, which can be queried at runtime through the TypeScript API.

A navigation profile defines properties that describe the agent traversing the world. These properties tell the navigation mesh how tall or wide the agent is, as well as details such as the maximum slope angle that can be climbed. These details not only impact the mesh generation, but also the paths calculated at runtime. You can configure the following properties in a navigation profile:

* **Radius**: The closest the center point of an agent can get to a wall or ledge.
* **Height**: The minimum height needed for an agent to move through an area.
* **Max slope angle**: The maximum incline an agent can move up in degrees (between 0 and 60).
* **Step height**: The maximum height an agent can step up.

The navigation gizmo is the primary building block for designing navigation meshes. The box-shaped gizmo allows you to define which areas of your world should be used when generating a navigation mesh. By placing a navigation gizmo in your world, the navigation mesh generation process recognizes the gizmo’s boundaries and identifies any walkable areas within that space.

Conversely, you can set a gizmo to **inclusion** or **exclusion** mode. Exclusion mode cuts out an area from the navigation mesh. You can also make gizmos profile-specific, meaning you can design profile-specific walkable areas, exclude agents from a certain area, and so on.

## Setting up in World Builder

This section describes how to set up and generate navigation meshes in World Builder (Desktop Editor or CST panel only) so you can access them with the NavMesh API.

### Adding and editing agent profiles

- In the **Systems** drop-down menu, click the **Navigations** button. The **Navigation Profiles** menu lists any navigation profiles defined for your world.
- Click the **+** button to define a new navigation profile.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/cf42fa3e4d4086b430087ab571c1f6d3588135bf3c0d038794e5fd17b91c9899.md)

### Overview
The image depicts a user interface section within a software application, specifically related to navigation profiles. The interface includes a search bar, a button for creating new profiles, and a placeholder message indicating the purpose of the section.

### Key Elements
- **Search Bar**: Located at the top-left, it has a magnifying glass icon and spans horizontally across the width of the section. It is black with white text.
- **Create Profile Button**: Positioned to the right of the search bar, it is a black button with a white plus sign inside a red square. The button has a tooltip labeled "Create Profile."
- **Placeholder Message**: Below the search bar, there is a light gray icon of a walking figure and a message that reads: "Create navigation profiles here, then use scripts to add pathfinding to your world." The text is centered and written in white.
- **Navigation Tabs**: At the very top, there are several tabs labeled "Build," "Systems," "Preview," "Scripts," and others partially cut off. The "Navigation" tab is highlighted in blue, indicating it is currently active.

### Visual Flow / Relationships
The most prominent visual element is the "Create Profile" button, as it is centrally located and highlighted. The search bar is secondary but still important for functionality. The placeholder message provides context for the user. The navigation tabs at the top provide additional context about the application's functionality.

</details>

<p></p>



- In the **Create Navigation Profile** menu, fill in the properties and click **Create**. This displays the new agent profile in the **Navigation Profiles** menu.
- To update a profile, hover over the menu item and click the **Edit** button. This displays the properties for that profile, which can be modified and saved.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/64f9aae81e9e30b9710bb86db67e4a6a80e12d2ffffb32e6b2f8a674836d3411.md)

### Overview
This image depicts a user interface section within a software application, specifically a navigation profiles management screen. The layout includes a search bar, a list of navigation profiles, and various interactive elements such as edit and delete icons.

### Key Elements
- **Search Bar**: Located at the top, spanning horizontally across the screen. Contains a magnifying glass icon and a placeholder text area.
- **Navigation Profiles List**: Below the search bar, a list titled "Navigation Profiles (1/100)" displays one entry labeled "Test nav mesh." This entry has a description "Nav mesh test input."
- **Edit Icon**: Positioned to the right of the profile name, represented by a pencil icon.
- **Delete Icon**: Positioned further to the right, depicted as a trash can icon.
- **Profile Icon**: To the left of the profile name, showing an orange square with a white figure running.
- **Edit Button**: A black button labeled "Edit" located at the bottom right corner of the profile entry.
- **Tabs**: At the very top, there are three tabs labeled "Navigation," "Quests," and "Variable Groups."

### Visual Flow / Relationships
The most prominent visual element is the "Test nav mesh" profile entry. The interactive icons (edit and delete) are adjacent to the profile name. The search bar is above the list, suggesting a hierarchical relationship where users can search for profiles before interacting with them. The tabs at the top indicate navigational options within the application.

</details>

<p></p>



- Drag and drop the **Navigation Volume** gizmo into your world from the toolbar in the Navigation section.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/0390bfec396b693a2c30c37d8ac6e1c6deb595e7da2cfc11b6da48280484683a.md)

### Overview
This image depicts a user interface section labeled "Navigation" within a larger application or software tool. The interface includes various icons and labels representing different navigation-related functionalities. The layout is organized into rows and columns, with icons and labels clearly defined.

### Key Elements
- **Navigation Label**: Located at the top-left corner, the word "Navigation" is displayed prominently.
- **Search Bar**: Positioned below the "Navigation" label, it contains a magnifying glass icon and a black search bar.
- **Icons and Labels**:
  - **Spawn Point**: A blue square with a white figure walking downwards, labeled "Spawn Point."
  - **Door**: A pink square with a white door icon, labeled "Door."
  - **Snap Destination**: A blue square with a white compass icon, labeled "Snap Destination."
  - **SafeSpawnZ one**: A white cube icon, labeled "SafeSpawnZ one."
  - **Navigation Volume**: A green square with a white figure walking, highlighted with a red bounding box, labeled "Navigation Volume."

### Visual Flow / Relationships
The visual hierarchy is clear, with the "Navigation" label as the primary heading. Below it, the search bar serves as a secondary element. The icons are arranged in a grid-like structure, with each icon accompanied by its respective label. The highlighted "Navigation Volume" icon draws attention due to the red bounding box.

</details>

<p></p>



- Adjust the size of the space to indicate where navigation meshes can be created.
- The **Navigation Volume** gizmo applies to all defined navigation profiles for newly added gizmos by default; however, you can specify other profiles within the **Agent Profile** drop-down menu.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/449ad18fb0cab7b59f560a0461731005a94864b282694554e95f8dcd66a52ee7.md)

### Overview
This image depicts a user interface element within a software application, specifically a dropdown menu under a settings or configuration panel. The panel is titled "Navigation Volume," and it includes options for configuring volume settings related to agents' profiles.

### Key Elements
- **Dropdown Menu**: Located centrally, with a blue highlight indicating the currently selected option ("All").
  - **Visual description**: A rectangular dropdown menu with rounded corners.
  - **Location**: Below the "Agent Profile" label.
  - **Contents**: Contains two options: "All" and "MyNavProfile."
  - **Visual styling**: The selected option has a blue background, while the unselected option is black with white text.
- **Label "Agent Profile"**: Positioned above the dropdown menu.
  - **Visual description**: A label indicating the setting being adjusted.
  - **Location**: Top-left of the dropdown area.
  - **Contents**: "Agent Profile" text.
  - **Visual styling**: White text on a dark background.
- **Dropdown Button**: To the right of the "Agent Profile" label.
  - **Visual description**: A button with a downward arrow indicating a dropdown menu.
  - **Location**: Right side of the "Agent Profile" label.
  - **Contents**: "All" text.
  - **Visual styling**: White text on a gray button with a darker gray border.
- **Panel Title "Navigation Volume"**: At the top of the panel.
  - **Visual description**: A title indicating the category of settings.
  - **Location**: Top of the panel.
  - **Contents**: "Navigation Volume" text.
  - **Visual styling**: White text on a dark background.
- **Volume Type Label**: Below the panel title.
  - **Visual description**: A label indicating another setting parameter.
  - **Location**: Below the panel title.
  - **Contents**: "Volume Type" text.
  - **Visual styling**: White text on a dark background.
- **Dropdown Button for Volume Type**: To the right of the "Volume Type" label.
  - **Visual description**: A button with a downward arrow indicating a dropdown menu.
  - **Location**: Right side of the "Volume Type" label.
  - **Contents**: "Inclusion" text.
  - **Visual styling**: White text on a gray button with a darker gray border.

### Visual Flow / Relationships
- **Most Prominent Element**: The dropdown menu with the blue highlight.
- **Arrows/Connectors**: None.
- **Reading Order**: The dropdown menu is the focal point, followed by the "Agent Profile" label and its associated button, then the "Volume Type" label and its associated button.
- **Spatial Relationships**: The dropdown menu is nested under the "Agent Profile" label, which is itself part of the larger "Navigation Volume" panel.

</details>

<p></p>



- You can also change the **Volume Type** to **Exclusion** or **Inclusion**. Setting the volume to **Exclusion** cuts out that area from any generated navigation mesh.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/341fc4b3f0247c4102b8f9e7f3912feca19cc9388c36a62f2d094a2ffce1cf29.md)

### Overview
The image depicts a 3D modeling interface showing a transparent cube with axes and grid lines. The cube is positioned within a larger workspace that includes a grid background and a semi-transparent orange overlay.

### Key Elements
- **Cube**: A transparent white cube with blue edges, located centrally in the image. It has a grid inside, indicating its internal structure.
- **Axes**: Three orthogonal axes (red, green, and blue) are visible inside the cube, representing the X, Y, and Z directions respectively.
- **Grid**: A light gray grid overlaid on the workspace, providing a reference for positioning and scaling.
- **Orange Overlay**: A semi-transparent orange area occupies the upper left portion of the image, possibly indicating a selection or focus area.
- **Background**: The workspace is a light gray surface with a grid pattern, suggesting a 3D modeling environment.

### Visual Flow / Relationships
- **Most Prominent Element**: The transparent cube is the focal point of the image.
- **Spatial Relationships**: The axes are aligned with the cube's edges, and the grid lines extend across the entire workspace, providing a consistent reference system.

</details>

<p></p>



- Setting the gizmo’s profile only impacts the navigation for that profile. For example, setting the gizmo to **Inclusion** for a particular profile will generate a walkable area in that volume for that particular profile.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/c68a5c3a4993eab3ccb0561469a24194c0113668cec8ffa968daad5067cd72ad.md)

### Overview
This image displays a 3D modeling interface showing three different colored cubes with grid overlays. The cubes are positioned side-by-side against a grid background, suggesting a digital workspace environment.

### Key Elements
1. **Left Cube**
   - **Visual description**: A transparent cube with a green base and white edges.
   - **Location**: Leftmost cube.
   - **Contents**: The cube has a grid overlay on its surface.
   - **Visual styling**: Transparent material, green base, white edges, grid overlay.

2. **Middle Cube**
   - **Visual description**: A solid orange cube with a grid overlay.
   - **Location**: Center cube.
   - **Contents**: The cube has a grid overlay on its surface.
   - **Visual styling**: Solid orange color, grid overlay.

3. **Right Cube**
   - **Visual description**: A semi-transparent green cube with a grid overlay.
   - **Location**: Rightmost cube.
   - **Contents**: The cube has a grid overlay on its surface.
   - **Visual styling**: Semi-transparent green color, grid overlay.

### Visual Flow / Relationships
- **Most prominent visually**: The three cubes are equally prominent as they are evenly spaced and of similar size.
- **Arrows, lines, connectors**: No arrows, lines, or connectors are present.
- **Spatial relationships**: The cubes are arranged horizontally, with no overlap or adjacency that suggests a specific relationship.

</details>

<p></p>



If volumes overlap, walkable space is made for all associated profiles.
<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/5608ae4055cdb456cb7bd47875ea590e329cf6cdaa29bdc580ec161c80a53728.md)

### Overview
The image depicts a 3D scene rendered with a grid background, featuring two cubes intersecting at an angle. The cubes are transparent, allowing visibility through them, and are colored orange and green.

### Key Elements
- **Orange Cube**: Located on the left side of the image. It has a grid pattern overlaying its surface. The cube is semi-transparent, showing the green cube behind it.
- **Green Cube**: Positioned on the right side of the image. Similar to the orange cube, it has a grid pattern and is semi-transparent, revealing the orange cube behind it.
- **Grid Background**: A light gray grid covers the entire background, providing a coordinate system for the 3D space.

### Visual Flow / Relationships
- The most prominent visual elements are the two cubes.
- There are no arrows, lines, or connectors indicating a specific reading order.
- Spatially, the cubes are adjacent to each other, with one partially obscuring the other due to their transparency and overlapping.

</details>

<p></p>



### Excluding specific obstacles/entities

When generating navigation meshes, you can exclude specific entities from impacting the final result. This can be particularly useful when you have an in-world asset that shouldn’t affect agent navigation such as doors, or even dynamic agents themselves.

All entities are considered navigable by default. To exclude an entity from being navigable, select the object and toggle off the **Navigable Surface** option in the **Navigation** panel:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/1721eaeb95b2a36994306975b06162a9f87e6cb15843ed09fe899e9f3b2e911f.md)

### Overview
The image depicts a 3D modeling environment interface showing a cube object in a 3D space. The cube is highlighted with a blue outline, indicating selection or active editing mode. The interface includes a grid background and various toolbars and panels for manipulating the cube.

### Key Elements
- **Cube**: A white cube with a blue outline, located centrally in the image. It has a small gray cube at its center, likely representing the pivot point, with red, green, and blue axes extending from it.
- **Grid Background**: An orange grid pattern covering the entire background, providing a reference for spatial orientation.
- **Toolbars**: Located at the top left, with options such as "Relative," "100%," and a magnifying glass icon.
- **Properties Panel**: On the right side, displaying properties related to the cube. Sections include "Behavior," "Attributes," "Physics," "More," "Navigation," and "Script." The "Navigation" section has a toggle switch labeled "Navigable Surface."

### Visual Flow / Relationships
- **Most Prominent Element**: The selected cube.
- **Spatial Relationships**: The cube is centered, with the grid providing a backdrop. Toolbars are at the top left, and the properties panel is on the right side. There are no arrows or lines connecting elements, but the layout suggests a typical user interface flow where tools are accessed via panels and the workspace is the central area.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/54b3a44b1a4c66d434648dae5a7015611a0e0e153af19cae13376caee8453d8d.md)

### Overview
This image depicts a 3D modeling interface, likely from a game development tool, showing a cube object in a 3D workspace. The workspace has a grid background, and the cube is highlighted with axes handles for rotation and scaling. On the right side, there is a properties panel displaying various attributes of the cube.

### Key Elements
- **Cube**: A white cube with blue edges, located centrally in the workspace. It has red, green, and blue axes handles at its center.
- **Axes Handles**: Three colored handles (red, green, blue) indicating the axes for rotation and scaling.
- **Workspace Background**: An orange grid background representing the 3D space.
- **Properties Panel**: Located on the right side, with a dark background. Contains sections labeled "Properties," "Behavior," "Attributes," "Physics," "More," and "Navigation." The "Navigation" section includes a toggle switch labeled "Navigable Surface."
- **Attached Script**: Below the "Navigation" section, there is a dropdown labeled "Attached Script" set to "None."

### Visual Flow / Relationships
The most prominent visual element is the cube in the center of the workspace. The axes handles are positioned at the center of the cube. The properties panel on the right provides contextual information about the cube. There are no arrows or lines connecting elements, but the layout suggests a typical user interface where the workspace is the primary area for interaction, and the properties panel offers additional settings.

</details>

<p></p>



- At this point, we have profiles defined and gizmos placed in our world. The next step is to **build** the navigation meshes for each profile. An alternative term is “baking” the navigation mesh **.** These terms are interchangeable.
- From the **Systems** menu, open the **Navigation Profiles** menu and click the **Build All** button.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/dbb6ab51b1c6e7fd1d66bd7cb3805c7ce9a53ec15a03cb90a1285ee9ec7091d5.md)

### Overview
This image depicts a user interface element, specifically a modal window titled "Navigation Profiles." The window contains a search bar, a button labeled "Build All," and a section indicating the current status of navigation profiles being processed.

### Key Elements
- **Modal Window Title**: "Navigation Profiles" located at the top-center of the window.
- **Search Bar**: Positioned below the title, with a magnifying glass icon on the left side.
- **Button**: A black button labeled "Build All" with white text, located below the search bar.
- **Status Indicator**: Text stating "Navigation Profiles (1/100)" indicating the current progress of building navigation profiles.
- **Icon**: A green icon with a white figure walking, labeled "NPC Test!" below it.

### Visual Flow / Relationships
The most prominent visual element is the "Build All" button, as it is centrally located and larger than the other elements. The search bar is positioned above the button, and the status indicator is below the button. The icon and its label are placed beneath the status indicator.

</details>

<p></p>



- If it appears that nothing happened when building the navigation mesh, you likely need to enable the in-editor previews. Hover over each profile and ensure the visibility indicator is set to 👁 by clicking the relevant button:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/80b59c69d5df0e912c4ac14574590fb813b4fbf473afc46805dbdcd6ddcd0f45.md)

### Overview
This image depicts a user interface element within a software application, specifically showing a list of navigation profiles. The interface includes a search bar at the top, followed by a list item with an icon, text, and several interactive buttons.

### Key Elements
- **Search Bar**: Located at the very top-left corner, it has a magnifying glass icon on the left side and a black input field.
- **List Header**: Below the search bar, the text "Navigation Profiles (1/100)" indicates the current view and total number of profiles.
- **List Item**: Contains an icon, text, and three interactive buttons.
  - **Icon**: A green square with a white walking figure and a speech bubble, representing an NPC profile.
  - **Text**: Next to the icon, the text reads "NPC Test!".
  - **Interactive Buttons**: Three buttons are aligned horizontally to the right of the text:
    - **Camera Icon Button**: A gray camera icon with a blue border.
    - **Copy Icon Button**: A gray clipboard icon with a blue border.
    - **Trash Can Icon Button**: A gray trash can icon with a blue border.
- **Pointer**: A white hand cursor is positioned over the camera icon button, indicating interaction readiness.

### Visual Flow / Relationships
The most prominent visual element is the list item, as it contains the most information and is the focal point of the interaction. The interactive buttons are arranged in a row to the right of the text, suggesting a linear reading order from left to right. The camera icon button is highlighted by the cursor, drawing attention to it.

</details>

<p></p>



You can use the NavMesh TypeScript API to get references to navigation mesh instances in order to perform pathfinding calculations at runtime.

The general approach to getting the API up and running is as follows:

- Set up the API..
- Instantiate the NavMeshManager for this particular world
- Use that NavMeshManager instance to request NavMesh references
- Use the exposed API on those NavMesh references to perform pathfinding calculations.

### Setting up the APIs

This section describes how to set up the API and provides a basic example of how to use it.

The TypeScript APIs that handle navigation mesh calculations are located in the **horizon/navmesh** module.

#### Example

The following script demonstrates the basic setup for accessing NavMesh references, including the initial manager setup, requesting profiles, and performing queries on the cached references returned by the manager.

```
import NavMeshManager, {NavMesh} from 'horizon/navmesh';
import * as hz from 'horizon/core';

type Props = {};

class ExampleNavAgentScript extends hz.Component<Props> {
  static propsDefinition: hz.PropsDefinition<Props> = {};
  navMesh!: NavMesh;

  public start = async () => {
    // The manager/`directory` is responsible for procuring navmesh references.
    // The `getInstance` result can be cached, or the method can be called again later as needed.
    const directory = NavMeshManager.getInstance(this.world); // The directory allows us to get references to any navmesh profile we've defined in the editor.

    const mesh = await directory.getByName('NPC');
    if (!mesh) {
      console.log('No navmesh available! Did you type the name wrong?');
      return;
    } // The reference can be treated as a first-class object and stored, passed around, etc.

    this.navMesh = mesh; // Finally, we can do something with the navmesh reference.

    this.findPathExample();
  };

  private findPathExample = () => {
    // Get a path from the origin to (5,0,5)
    const path = this.navMesh.getPath(
      new hz.Vec3(0, 0, 0),
      new hz.Vec3(5, 0, 5),
    );
    if (path) {
      // access `path.waypoints`
    }
  };
}

hz.Component.register(ExampleNavAgentScript);
```

A reference to a navigation mesh instance, which scripts can use to query paths, raycasts, and nearest points. Each `NavMesh` class represents a profile already defined in the editor; you can not define or modify profiles at runtime. As such, the `NavMesh` class is generally considered to be read-only.

There can only be one instance of a given NavMesh for each profile. For example, if you procure the same reference from multiple scripts, you are still operating against the same, singular NavMesh reference. This ensures your NavMesh reference can be safely passed between classes, functions, etc.

```
const dir = NavMeshManager.getInstance(this.world);
const mesh1 = dir.getByName('NPC');
const mesh2 = dir.getByName('NPC');
mesh1 === mesh2; // true!
```

#### GetPath method

Calculates any viable or partially-viable path between a start position and target destination. If either the start position or destination position don’t lie on the given NavMesh, no path is returned. If both points lie on the mesh but don’t have a viable path between them, a partial path is returned with waypoints from the start position to the closest possible point to the destination.

We recommend using the `getNearestPosition` method to filter the parameters for this method, so the start and target paths are always valid.

**Parameters**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| start | Vec3 | The position to calculate the path from. |
| destination | Vec3 | The position to calculate the path towards. |

**Return Type**

|  |  |
| --- | --- |
| \*\*Null | NavMeshPath -\*\* The following scenarios may occur when calling this function: |

* If there’s no path to the target destination, returns null.
* If any partial path is possible, returns an object containing details about the path, such as the list of waypoints to traverse and if the path reaches its destination.

#### raycast (Origin with direction) method

Performs a raycast from an origin position that travels in the given direction along the navigation mesh. The ray travels until it either hits something or reaches the max range.

This raycast is different from a physics ray cast because it works in 2.5D on the navigation mesh. A `NavMesh` raycast can detect all kinds of navigation obstructions, such as holes in the ground, and can also climb up slopes if the area is navigable. A physics raycast, in comparison, typically travels linearly through 3D space.

**Parameters**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| origin | Vec3 | The starting position of the raycast. |
| direction | Vec3 | The direction for the raycast to travel in 3D space. |
| range | number | The maximum distance the raycast should travel. |

**Return Type**

**NavMeshHit**

* Data about the raycast calculation, such as if a collision occurred and the distance from the origin.

#### raycast (start and end points)

Performs a raycast between a start and end position on a navigation mesh.

This raycast is different from a physics raycast because it works in 2.5D on the navigation mesh. A `NavMesh` raycast can detect all kinds of navigation obstructions, such as holes in the ground, and can also climb up slopes if the area is navigable. A physics raycast, in comparison, typically travels linearly through 3D space.

**Parameters**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| startPoint | Vec3 | The start position of the raycast. |
| endPoint | Vec3 | The destination of the raycast. |

**Return Type**

**NavMeshHit**

* Data about the raycast calculation, such as if a collision occurred and the distance from the start point.

#### getNearestPoint method

Gets the nearest point on the navigation mesh within the range of the target position, even if the target isn’t on the navigation mesh. This is useful for filtering input parameters for other NavMesh queries. For example, if we want to navigate towards a player that is standing on a box (and therefore off the NavMesh), we can use this call to find the closest valid position for a NavMesh query.

**Parameters**

| **Parameter** | **Type** | **Description** |
| --- | --- | --- |
| position | Vec3 | The target position to check for the nearest point. |
| range | number | The maximum distance for the calculation. |

**Return Type**

|  |  |
| --- | --- |
| \*\*Null | Vec3\*\* |

* Returns the nearest `Vec3` position within the range, or `null` if no point is available.

#### rebake method

Requests that the server rebuilds the navigation mesh. This allows you to rebuild a navigation profile’s mesh at runtime in order to respond to loading/placing assets or as a result of an obstacle in the world moving.

**Parameters (none)**

**Return Type**

`Promise<boolean>`

* Returns a promise containing the result of the rebake request.

Collision data returned when a raycast is performed on a NavMesh.

**Variables**

| **Variable** | **Type** | **Description** |
| --- | --- | --- |
| position | Vec3 | The ending location where the raycast collided with the NavMesh. |
| normal | Vec3 | The normal vector at the point of impact for this raycast. |
| distance | number | The distance traveled when the raycast was performed. |
| hit | boolean | true if the raycast hits any obstructions or edges during the calculation; otherwise, false. |
| navMesh | NavMesh | The NavMesh that the raycast was performed on. |

Defines a navigation profile configuration created in World Builder.

**Variables**

| **Variable** | **Type** | **Description** |
| --- | --- | --- |
| name | string | The name of the profile entity in World Builder. |
| color | string | The color of the given profile as defined in World Builder. |
| agentRadius | number | The radius for the agent’s navmesh calculations. |
| agentMaxSlope | number | The maximum angle on a slope the agent can traverse. |
| navMesh | NavMesh | The NavMesh that the agent is running a calculation against. |

Defines the pathfinding calculation results for a `getPath` query.

**Variables**

| **Variable** | **Type** | **Description** |
| --- | --- | --- |
| waypoints | Vec3[] | The list of waypoints for the generated path. |
| startPos | Vec3 | The origin point for the generated path. |
| endPos | Vec3 | The terminal point for the generated path. This might not be the same as the query destination. |
| destinationPos | Vec3 | The requested terminal point for the generated path. This may not be reachable, and can differ from `endPos` . |
| pathReachesDestination | boolean | `true` if the endPos reaches the destinationPos, `false` if an incomplete path is returned. |