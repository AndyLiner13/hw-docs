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

[All image details and metadata](../../../../images/output/img_20251211_064324_20251211_064324.md)

### Overview
The image depicts a user interface section within a software application, specifically related to navigation profiles. The interface includes tabs at the top, a search bar, and a central area for creating new profiles.

### Key Elements
- **Navigation Profiles Header**: Located at the top-left, the text "Navigation Profiles" is displayed prominently.
- **Search Bar**: Positioned below the header, it has a magnifying glass icon on the left side.
- **Create Profile Button**: A red-highlighted button with a plus sign (+) and the text "Create Profile" is situated to the right of the search bar.
- **Tabs**: At the very top, there are several tabs labeled "Build," "Systems," "Preview," "Scripts," and "General."
- **Variable Groups Dropdown**: To the right of the "Navigation" tab, there is a dropdown menu labeled "Variable Groups."
- **Quests Dropdown**: Adjacent to the Variable Groups dropdown, another dropdown labeled "Quests" is present.
- **Icon and Text Below**: A simple walking figure icon is centered below the search bar, accompanied by the text: "Create navigation profiles here, then use scripts to add pathfinding to your world."

### Visual Flow / Relationships
The most prominent visual element is the "Create Profile" button, as it is highlighted and centrally located. The layout suggests a linear reading order moving from left to right across the top, then downward to the central content area.

</details>

<p></p>



- In the **Create Navigation Profile** menu, fill in the properties and click **Create**. This displays the new agent profile in the **Navigation Profiles** menu.
- To update a profile, hover over the menu item and click the **Edit** button. This displays the properties for that profile, which can be modified and saved.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_064441_20251211_064441.md)

### Overview
This image depicts a user interface section of a software application, specifically a navigation profiles management screen. The layout includes a search bar, a list of navigation profiles, and various interactive elements such as buttons and icons.

### Key Elements
- **Search Bar**: Located at the top, spanning horizontally across the screen. Contains a magnifying glass icon and the placeholder text "> Navigation Profiles".
- **Navigation Profiles List**: Below the search bar, a list of navigation profiles is displayed. The first profile shown is labeled "Test nav mesh" with the subtitle "Nav mesh test input". It has a blue highlight indicating selection.
- **Profile Actions**: To the right of the profile name, there are several icons:
  - A pencil icon for editing.
  - A trash can icon for deleting.
  - A settings gear icon.
- **Add Button**: Positioned to the right of the search bar, featuring a plus sign.
- **Sort Icon**: An icon resembling arrows pointing up and down, likely for sorting functionality.
- **Edit Button**: A black button with the word "Edit" in white text, located at the bottom right corner of the profile row.

### Visual Flow / Relationships
The most prominent visual element is the selected profile "Test nav mesh". The interactive elements (icons and buttons) are arranged to the right of the profile name, facilitating quick access to actions related to that specific profile. The search bar is at the top, allowing users to filter the list of profiles. The add button and sort icon are positioned above the list for easy access.

</details>

<p></p>



- Drag and drop the **Navigation Volume** gizmo into your world from the toolbar in the Navigation section.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_064543_20251211_064543.md)

### Overview
This image depicts a user interface section labeled "Navigation." It contains various icons representing different navigation-related functionalities, arranged in a grid layout. The interface includes a search bar at the top and tabs for different settings categories ("Navigation," "Display," "Interactions").

### Key Elements
- **Search Bar**: Located at the top, spanning across the width of the interface. It has a magnifying glass icon on the left side.
- **Tabs**: Three tabs are visible at the top: "Navigation," "Display," and "Interactions." Each tab has a small icon next to its name.
- **Icons and Labels**: Below the tabs, there are four icons arranged horizontally:
  - **Spawn Point**: A blue square with a white figure walking upwards and downwards.
  - **Door**: A pink square with a white door icon.
  - **Snap Destination**: A blue square with a white arrow pointing upwards and a circular pattern around it.
  - **SafeSpawnZ one**: A white cube with a black outline.
- **Navigation Volume**: A green square with a white figure walking, outlined with a red dashed border. Below it, the label "Navigation Volume" is written.

### Visual Flow / Relationships
The most prominent visual element is the "Navigation Volume" icon, as it is highlighted with a red dashed border. The icons are arranged in a grid-like fashion, with the search bar above them and the tabs at the very top. There are no arrows or lines connecting the elements, but the layout suggests a logical reading order from left to right and then down.

</details>

<p></p>



- Adjust the size of the space to indicate where navigation meshes can be created.
- The **Navigation Volume** gizmo applies to all defined navigation profiles for newly added gizmos by default; however, you can specify other profiles within the **Agent Profile** drop-down menu.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_064654_20251211_064654.md)

### Overview
This image depicts a user interface element within a software application, specifically a dropdown menu that is part of a form or settings panel. The dropdown is open, revealing a list of options related to agent profiles.

### Key Elements
- **Dropdown Menu**: A blue rectangular dropdown menu with a white border, located centrally in the image.
  - **Visual description**: The dropdown has a rounded rectangle shape with a blue fill and a white border.
  - **Location**: Positioned below the "Agent Profile" label.
  - **Contents**: Contains the text "All" highlighted in blue, indicating the currently selected option, followed by another option labeled "MyNavProfile."
  - **Visual styling**: The dropdown has a solid blue background with a white border, and the selected item is highlighted with a darker blue shade.
  
- **Label**: "Agent Profile" located above the dropdown menu.
  - **Visual description**: The label is in white text on a dark background.
  - **Location**: Positioned above the dropdown menu.
  - **Contents**: The text "Agent Profile" is clearly visible.
  - **Visual styling**: The label has a white font against a dark background.

- **Dropdown Options**: Two options listed under the dropdown menu.
  - **Visual description**: The options are simple text labels.
  - **Location**: Below the dropdown menu.
  - **Contents**: The first option is "All," which is highlighted, and the second option is "MyNavProfile."
  - **Visual styling**: Both options have a white font against a dark background, with the selected option having a slightly darker blue background.

### Visual Flow / Relationships
- **Most Prominent Element**: The open dropdown menu is the most prominent visual element due to its central placement and active selection.
- **Arrows/Connectors**: There are no arrows or connectors visible in this image.
- **Spatial Relationships**: The dropdown menu is directly beneath the "Agent Profile" label, and the options are arranged vertically below the dropdown.

</details>

<p></p>



- You can also change the **Volume Type** to **Exclusion** or **Inclusion**. Setting the volume to **Exclusion** cuts out that area from any generated navigation mesh.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_064741_20251211_064741.md)

### Overview
The image depicts a 3D modeling interface showing a transparent cube with axes and grid lines. The cube is positioned on a grid background, suggesting a design or modeling software environment.

### Key Elements
- **Cube**: A transparent, wireframe cube with edges highlighted in white and blue. The cube is centered in the image.
- **Axes**: Three orthogonal axes (red, green, and blue) are visible within the cube, indicating the X, Y, and Z directions respectively.
- **Grid**: A light gray grid forms the background, providing a reference for spatial orientation.
- **Background**: Two distinct sections of the background are visible—one peach-colored and one gray, both with grid patterns.

### Visual Flow / Relationships
- **Most Prominent Element**: The transparent cube is the focal point.
- **Spatial Relationships**: The axes are embedded within the cube, and the grid lines provide a sense of depth and perspective. The peach and gray sections of the background are adjacent but do not interact with the cube itself.

</details>

<p></p>



- Setting the gizmo’s profile only impacts the navigation for that profile. For example, setting the gizmo to **Inclusion** for a particular profile will generate a walkable area in that volume for that particular profile.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_064826_20251211_064826.md)

### Overview
The image displays a 3D modeling environment with three transparent cubes placed on a grid background. The cubes are rendered with a wireframe outline and filled with solid colors. The perspective suggests a 3D modeling software interface.

### Key Elements
1. **Left Cube**
   - **Visual description**: A rectangular cube with a wireframe outline.
   - **Location**: Left side of the image.
   - **Contents**: Filled with a light green color.
   - **Visual styling**: Transparent edges, white wireframe, light green fill.

2. **Middle Cube**
   - **Visual description**: A rectangular cube with a wireframe outline.
   - **Location**: Center of the image.
   - **Contents**: Filled with a light orange color.
   - **Visual styling**: Transparent edges, white wireframe, light orange fill.

3. **Right Cube**
   - **Visual description**: A rectangular cube with a wireframe outline.
   - **Location**: Right side of the image.
   - **Contents**: Filled with a light green color.
   - **Visual styling**: Transparent edges, white wireframe, light green fill.

### Visual Flow / Relationships
- **Most prominent visually**: The three cubes are equally prominent as they are evenly spaced and of similar size.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The cubes are arranged horizontally, with no specific implied reading order among them.

</details>

<p></p>



If volumes overlap, walkable space is made for all associated profiles.
<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_064913_20251211_064913.md)

### Overview
The image displays a 3D rendering of two cubes, one orange and one green, placed on a grid background. The cubes appear semi-transparent, allowing the grid underneath to be partially visible through them.

### Key Elements
- **Orange Cube**: Located on the left side of the image. It has a semi-transparent orange surface with a grid pattern overlaying it. The edges of the cube are outlined in a darker shade of orange.
- **Green Cube**: Positioned on the right side of the image. Similar to the orange cube, it has a semi-transparent green surface with a grid pattern. The edges of the cube are outlined in a darker shade of green.
- **Grid Background**: A light gray grid spans the entire background, providing a coordinate system for the cubes.

### Visual Flow / Relationships
- The most prominent elements are the two cubes.
- There are no arrows, lines, or connectors indicating a specific reading order.
- Spatially, the cubes are adjacent to each other, with the orange cube on the left and the green cube on the right.

</details>

<p></p>



### Excluding specific obstacles/entities

When generating navigation meshes, you can exclude specific entities from impacting the final result. This can be particularly useful when you have an in-world asset that shouldn’t affect agent navigation such as doors, or even dynamic agents themselves.

All entities are considered navigable by default. To exclude an entity from being navigable, select the object and toggle off the **Navigable Surface** option in the **Navigation** panel:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_065012_20251211_065012.md)

### Overview
This image depicts a 3D modeling environment interface showing a cube object with a grid background. The cube has a white face and gray edges, and there are coordinate axes represented by colored arrows at its center. On the right side, there is a sidebar with various properties and settings related to the cube.

### Key Elements
- **Cube**: A 3D cube with a white face and gray edges. It is positioned centrally in the scene.
  - **Face**: White.
  - **Edges**: Gray.
  - **Axes**: Three colored arrows (blue, green, red) representing the x, y, and z axes, respectively, located at the center of the cube.
- **Grid Background**: An orange grid pattern covering the entire scene, serving as the workspace for the 3D model.
- **Sidebar**: Located on the right side of the image.
  - **Properties Section**: Contains options such as "Behavior," "Attributes," "Physics," "More," "Navigation," and "Script."
    - **Navigation**: Displays a toggle switch labeled "Navigable Surface."
    - **Script**: Shows a dropdown menu labeled "Attached Script" with "None" selected.
- **User Interface Elements**: Various UI elements like zoom controls and orientation indicators are visible at the top left corner.

### Visual Flow / Relationships
- **Most Prominent Element**: The cube in the center.
- **Arrows**: Positioned at the center of the cube, indicating the coordinate system.
- **Grid**: Uniformly distributed across the workspace, providing a reference for the 3D model.
- **Sidebar**: Provides interactive options for modifying the cube's properties.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_065111_20251211_065111.md)

### Overview
This image depicts a 3D modeling interface, likely from a software tool for creating or manipulating 3D objects. The central focus is a white cube with a grid overlay, suggesting a workspace for 3D modeling. The right side of the image shows a sidebar with various properties and settings related to the cube.

### Key Elements
- **Cube**: A white, three-dimensional cube with a grid overlay, located centrally in the workspace.
- **Grid Overlay**: An orange grid covering the entire workspace, providing a reference for spatial orientation.
- **Color Handles**: Three colored handles (blue, green, red) attached to the cube, indicating points of interaction for scaling, rotating, or translating the object.
- **Sidebar**: Located on the right side, displaying properties such as "Cube," "Behavior," "Attributes," "Physics," "More," "Navigation," and "Script." The "Attached Script" field shows "None."

### Visual Flow / Relationships
- **Most Prominent Element**: The white cube in the center.
- **Arrows/Connectors**: None.
- **Reading Order**: The grid serves as a backdrop, while the cube and its handles are the primary interactive elements. The sidebar provides additional information and options related to the cube.

</details>

<p></p>



- At this point, we have profiles defined and gizmos placed in our world. The next step is to **build** the navigation meshes for each profile. An alternative term is “baking” the navigation mesh **.** These terms are interchangeable.
- From the **Systems** menu, open the **Navigation Profiles** menu and click the **Build All** button.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_065205_20251211_065205.md)

### Overview
This image depicts a user interface element from a software application, specifically a dropdown menu titled "Navigation Profiles." The menu contains a search bar, a button labeled "Build All," and a list of navigation profiles.

### Key Elements
- **Search Bar**: Located at the top-left of the dropdown menu. It has a magnifying glass icon on the left side.
- **Button**: Positioned centrally below the search bar. It features a plus sign and a gear icon, suggesting options for adding new profiles or configuring existing ones.
- **"Build All" Button**: Situated below the central button. It is black with white text that reads "Build All."
- **List of Navigation Profiles**: Below the search bar, showing one entry labeled "Navigation Profiles (1/100)" followed by another entry labeled "NPC Test!" with a green icon depicting a character.

### Visual Flow / Relationships
The most prominent visual element is the "Build All" button due to its placement and contrasting color. The search bar is secondary but important for functionality. The list of navigation profiles is tertiary, providing context for the current selection.

</details>

<p></p>



- If it appears that nothing happened when building the navigation mesh, you likely need to enable the in-editor previews. Hover over each profile and ensure the visibility indicator is set to 👁 by clicking the relevant button:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_065252_20251211_065252.md)

### Overview
This image depicts a user interface element within a software application, specifically showing a list of navigation profiles. The interface includes a header, a profile entry, and some interactive icons.

### Key Elements
- **Header**: Located at the top-left corner, reads "Navigation Profiles (1/100)".
- **Profile Entry**: Below the header, contains a green icon resembling a walking figure labeled "NPC Test!".
- **Interactive Icons**: Positioned to the right of the profile entry, include a camera icon, a copy icon, and a trash can icon.
- **Background**: The main background is dark blue, while the highlighted area around the profile entry is light blue.

### Visual Flow / Relationships
The most prominent visual element is the profile entry, as it is highlighted and larger than the interactive icons. The interactive icons are arranged horizontally to the right of the profile entry. There are no arrows or lines connecting elements, but the layout suggests a typical user interface flow where users interact with the profile entry first before using the interactive icons.

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