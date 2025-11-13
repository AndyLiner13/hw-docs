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

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/581306146_863533342851285_195327867686303909_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=E5wlxglpQ4IQ7kNvwFYJnQT&_nc_oc=Adm1DU2yOVghTxVsyyIs4u8k_S3gDAHVJQ4bq09B3_N8cEsW2kf3SnfzlKmVG175qvg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_AfgtRDFVAFN96_S0af9w667bUzEVYmlBrN704_yPBVfqHQ&oe=692F9829)

- In the **Create Navigation Profile** menu, fill in the properties and click **Create**. This displays the new agent profile in the **Navigation Profiles** menu.
- To update a profile, hover over the menu item and click the **Edit** button. This displays the properties for that profile, which can be modified and saved.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/580796535_863533336184619_5962457243421882840_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=P3pdaRCv9-YQ7kNvwFvZvSA&_nc_oc=AdnouUNCGs91SAWxWyTqm5E961-NzT_nu65mGM6jf2QrIhH_AJPnqQy4vwCw4yIFIkA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_Afg9YyR7X7ICaRT7Hw6q4x9yg1Utbog7MNlmRaFXT6HF3w&oe=692FCC6E)

- Drag and drop the **Navigation Volume** gizmo into your world from the toolbar in the Navigation section.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/581939883_863533332851286_8604663435429527805_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=XLJTwC_pXPcQ7kNvwHALUnk&_nc_oc=AdlIcEOJ5QuLUVlJ6de7j50x0YbRzmpQ3RJ06sCGz_ZfjY48mbVIjol8HC9wYQtK0No&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_Afg6rXeIBQy5MYAVGBLuGwpkH3KEw8HpuTBoNXyzWqrvfg&oe=692FA61F)

- Adjust the size of the space to indicate where navigation meshes can be created.
- The **Navigation Volume** gizmo applies to all defined navigation profiles for newly added gizmos by default; however, you can specify other profiles within the **Agent Profile** drop-down menu.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653622_512520797952543_8523304140805967984_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=2UjHC-LPg5AQ7kNvwFm0Pdt&_nc_oc=Admtpm1DDyVqvnH7zgu1LjI0uPL6ZNvuK0kCvecDevQdPnSqX0t5Ne2y1juRulDU-T4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_AfgVWYtrcXk3ae6HMy4iB-5F9tJhq_B9ynlMSZ2hgt-lQg&oe=692FC165)

- You can also change the **Volume Type** to **Exclusion** or **Inclusion**. Setting the volume to **Exclusion** cuts out that area from any generated navigation mesh.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452863729_512520794619210_6139799495093903217_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=vQ9R4xtVTekQ7kNvwHoiWaj&_nc_oc=AdlbdQH2ZeVn679eWSFJIZ64e2eVEx0z7hi3uXNhM7-ZgoGO80tQiuHmdt2BKrjP4tc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_AfhwFKVBFQg2yb9Ts9pzBfkr33XVGAlCU0rENBiT5QcDbA&oe=692FA0E8)

- Setting the gizmo’s profile only impacts the navigation for that profile. For example, setting the gizmo to **Inclusion** for a particular profile will generate a walkable area in that volume for that particular profile.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452978199_512520774619212_5715647804876400228_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=w-8FBb84h00Q7kNvwGlDSyw&_nc_oc=AdlOtqyEyOURNKW3loiwGQW4j93loU-CeDNCeTjEzWc3vkqUTmn_OiCgmaP-30vQXjA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_AfhLz27-zXMldU5-wL_GRJqBIurNqD_XmksjtANkOxx_wg&oe=692FB752)

If volumes overlap, walkable space is made for all associated profiles.
![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452598139_512520804619209_9000742366036294529_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=069GowNlRAsQ7kNvwHi2POc&_nc_oc=AdklCZ_CT9ki0-LGD-rGqqeqv49YxQClWNv5qGNR-PbliNhc-JSthSPI43jDEhRQy-A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_AfhYjL1U2x1kztMnAiujg8EjdE2jY959Xo2dOqZTh8OdeA&oe=692FCBB9)

### Excluding specific obstacles/entities

When generating navigation meshes, you can exclude specific entities from impacting the final result. This can be particularly useful when you have an in-world asset that shouldn’t affect agent navigation such as doors, or even dynamic agents themselves.

All entities are considered navigable by default. To exclude an entity from being navigable, select the object and toggle off the **Navigable Surface** option in the **Navigation** panel:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452628396_512520771285879_665141551739901961_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=3mV6m2QoBNAQ7kNvwHROPIX&_nc_oc=Adlqsk96LHk1vBm0KpNSwobWhc2LuV_zkKzXS-NOJ29nGWHfpUdMR3TJwz05aih4YoU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_Afj5vd5clfiW6HRSAoVfmyRuSUHiLJqj8TSN2RA1S4bCNQ&oe=692FB026)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452678735_512520821285874_7555048856054191891_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y3zYyWKRFaEQ7kNvwE7ICuF&_nc_oc=AdnqjKi3jXAk6Y7tSWbCG54uJyK0xs8Wp0DlNNt7gMI5-RB8WXjBZA78xJ8WO_uXzRA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_AfgU34LZY3RQ4Cg2RaHujkwKZEQhkcdRuVSSVX7-q3tG1Q&oe=692FABC5)

- At this point, we have profiles defined and gizmos placed in our world. The next step is to **build** the navigation meshes for each profile. An alternative term is “baking” the navigation mesh **.** These terms are interchangeable.
- From the **Systems** menu, open the **Navigation Profiles** menu and click the **Build All** button.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452554927_512520777952545_4458452995230939688_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=LutHizt1AasQ7kNvwG7gWiN&_nc_oc=AdntoOASWbp2gj-XEVAuuFJ2xwzn0sdTvRjFrrDIGY6huCU0SmQW9FqXGRTLkLyzXzU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_AfhZ3nxaTAYhRdNlukV6QNwf0Ey4hGt_PNlvZ2Xxc-ZPSQ&oe=692FBB7F)

- If it appears that nothing happened when building the navigation mesh, you likely need to enable the in-editor previews. Hover over each profile and ensure the visibility indicator is set to 👁 by clicking the relevant button:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452956933_512520814619208_2075920617223828293_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=aUqhLYVXyroQ7kNvwELfVa5&_nc_oc=AdlsOq5igkrHLfyIGwC6JqSSVjeMbNfuc4b-SeC0QPB3fv5eaJC5RufLHSJwL_Rzuf0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=01NVLh85iIsu3kpRHsaKdw&oh=00_Afi-dDspIqt8gPk6Ut0hmq1w-KlDV0606lyX1B6OY0VltA&oe=692FB138)

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