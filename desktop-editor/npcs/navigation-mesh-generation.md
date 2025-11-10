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

### Navigation mesh (NavMesh)

A navigation mesh is a 3D polygonal mesh that defines sections of an environment that an agent can traverse. A world can have multiple navigation meshes for different types of AI agents, dictated by the navigation profiles you define. Each profile has an associated navigation mesh, which can be queried at runtime through the TypeScript API.

### Navigation profile

A navigation profile defines properties that describe the agent traversing the world. These properties tell the navigation mesh how tall or wide the agent is, as well as details such as the maximum slope angle that can be climbed. These details not only impact the mesh generation, but also the paths calculated at runtime. You can configure the following properties in a navigation profile:

* **Radius**: The closest the center point of an agent can get to a wall or ledge.
* **Height**: The minimum height needed for an agent to move through an area.
* **Max slope angle**: The maximum incline an agent can move up in degrees (between 0 and 60).
* **Step height**: The maximum height an agent can step up.

### Navigation gizmo

The navigation gizmo is the primary building block for designing navigation meshes. The box-shaped gizmo allows you to define which areas of your world should be used when generating a navigation mesh. By placing a navigation gizmo in your world, the navigation mesh generation process recognizes the gizmo’s boundaries and identifies any walkable areas within that space.

Conversely, you can set a gizmo to **inclusion** or **exclusion** mode. Exclusion mode cuts out an area from the navigation mesh. You can also make gizmos profile-specific, meaning you can design profile-specific walkable areas, exclude agents from a certain area, and so on.

## Setting up in World Builder

This section describes how to set up and generate navigation meshes in World Builder (Desktop Editor or CST panel only) so you can access them with the NavMesh API.

### Adding and editing agent profiles

- In the **Systems** drop-down menu, click the **Navigation Profiles** menu. The **Navigation Profiles** menu lists any navigation profiles defined for your world.
- Click the **+** button to define a new navigation profile.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452915470_512520781285878_587933054312395785_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=v6Lb65AzjoEQ7kNvwHt92YF&_nc_oc=AdkOhosm-Z_dhDvZqiKYbG2XeHaME8-ooDKrv-rS_2eTqv6Kr3TsiIM0eg6BzAnJMFA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_Afi33UaIyA6QF03r8BKC2q8QCygIYsVRhi5kEz10P-tGYg&oe=692BFC17)

- In the **Create Navigation Profile** menu, fill in the properties and click **Create**. This displays the new agent profile in the **Navigation Profiles** menu.
- To update a profile, hover over the menu item and click the edit button. This displays the properties for that profile, which can be modified and saved.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916641_512520807952542_5526810256888703711_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=n6bjDrvbpJ8Q7kNvwGeabe8&_nc_oc=Adl8uHA5JSSbsV1v8EkjZbLrANbn4MGvlnQEcKGHVvtxyhdBzEMyR2IWKIqz9EKA8JU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_AfghN3_x64hbw87PL6JANvJWNMw4Ti-c-Aot18cxGAQBrg&oe=692C0DE5)

### Adding a navigation gizmo

- Drag and drop the **Navigation Volume** gizmo into your world.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452932552_512520811285875_6437266146071347115_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=tjv7axlU6a4Q7kNvwHzdU-2&_nc_oc=Adl6DEFaxhcZtL0bcSshKt1cWmAgwrUapJe66q69nubhVxTkpBSpICVcAotUiGbOmYc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_AfhCaJZLDuWIV81aVygUYPzw7Y6RgrSd_79NQRLAeCJEzA&oe=692BE071)

- Adjust the size of the space to indicate where navigation meshes can be created.
- The **Navigation Volume** gizmo applies to all defined navigation profiles for newly added gizmos by default; however, you can specify other profiles within the **Agent Profile** drop-down menu.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653622_512520797952543_8523304140805967984_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=uHQMplRMbtoQ7kNvwGhnwKK&_nc_oc=AdmCQ1nkLBICbfn8XkLIcEF958fN19A_l0fYffxsxeMtsk7YEK5pdG1GNJ_CCkFZCmo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_AfiG9FD0HWTyr1NGHIF-g95Ydz-xb0RWDtXglClltexTUg&oe=692C0525)

- You can also change the **Volume Type** to **Exclusion** or **Inclusion**. Setting the volume to **Exclusion** cuts out that area from any generated navigation mesh.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452863729_512520794619210_6139799495093903217_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=qXB9DnXt0IMQ7kNvwFzg0GI&_nc_oc=AdlsKxQZpBEF6bBrlnCM7GKFjkoSb0_84w5LpD8YoOQxNE4jEPRdN6-XBvjzNIAvLM4&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_Afit1QQOQOyjeOCogaqlEpArOEh1_cVukYm-R7k9ZlSG3A&oe=692BE4A8)

- Setting the gizmo’s profile only impacts the navigation for that profile. For example, setting the gizmo to **Inclusion** for a particular profile will generate a walkable area in that volume for that particular profile.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452978199_512520774619212_5715647804876400228_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=JWE0GJLzZFwQ7kNvwGRaSGa&_nc_oc=AdlTxlO0aDFyuwHhPcobFbxQr2-HhlYjxscWGTNWgjcMzldVLu69MZTRj1RmcEQZSKE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_AfjGO4gY0uXJYrN7nGwl6rGh77JoDI_gELA1yw5ZMVfO8A&oe=692BFB12)

If volumes overlap, walkable space is made for all associated profiles.
![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452598139_512520804619209_9000742366036294529_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=eEzMbkKx9c0Q7kNvwEg7Hyh&_nc_oc=AdnK4GGMxMxw5-1sCcKpmFbcnFcdPlkqiLKAaLvbRinD7Ez1BQ4GbLJNR9pieEqZazY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_AfiNZZ74vL5eWVbiCqXz2JOtMSijtSbpCpU8bdMUQI0HSw&oe=692C0F79)

### Excluding specific obstacles/entities

When generating navigation meshes, you can exclude specific entities from impacting the final result. This can be particularly useful when you have an in-world asset that shouldn’t affect agent navigation such as doors, or even dynamic agents themselves.

All entities are considered navigable by default. To exclude an entity from being navigable, select the object and toggle off the **Navigable Surface** option in the **Navigation** panel:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452628396_512520771285879_665141551739901961_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=wTjf5kS8ztEQ7kNvwF9nirb&_nc_oc=AdlII4W3PHw29Trs9snds3-fHUDutzr0HwcA_Jf2kFB-DUbqHelhJLnZ_EvmkfIUJjU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_Afgq-kfvh8P2sJbgxc9nBlX6wsgI4gsXf2gA6HncQi4pvA&oe=692BF3E6)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452678735_512520821285874_7555048856054191891_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=cBqTAqC4Vx0Q7kNvwFPvWj5&_nc_oc=Adk7h0I6uaGXTn3G3wi0ugSZgxdQKUwQJz2NXeNNPDNV92RQ7eR27CosN3_Bs_dOp7k&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_Afg9Q6RQ4aVggIFo50Mfhwy1Njmi2d70uw-tlyKGnk4_HA&oe=692BEF85)

### Building the navigation meshes

- At this point, we have profiles defined and gizmos placed in our world. The next step is to **build** the navigation meshes for each profile. An alternative term is “baking” the navigation mesh **.** These terms are interchangeable.
- From the **Systems** menu, open the **Navigation Profiles** menu and click the **Build All** button.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452554927_512520777952545_4458452995230939688_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ODDzfu9_rQUQ7kNvwFEZrsE&_nc_oc=AdmcKxCdjgnAO-Z0tPi0_g00pP14SLac0JDhn8Y4BONQoS0gGOfGY9DPBIqk01bPw8A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_Afhm6mmzz2jrfTzUYkgsUR89lwyCsoscMx8GxcSA568ZgA&oe=692BFF3F)

- If it appears that nothing happened when building the navigation mesh, you likely need to enable the in-editor previews. Hover over each profile and ensure the visibility indicator is set to 👁 by clicking the relevant button:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452956933_512520814619208_2075920617223828293_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=aUqhLYVXyroQ7kNvwELfVa5&_nc_oc=AdlsOq5igkrHLfyIGwC6JqSSVjeMbNfuc4b-SeC0QPB3fv5eaJC5RufLHSJwL_Rzuf0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RdFCOx10gz6ys_a63c2zoQ&oh=00_AfhpWJySutVHfR0HVkqti7HNGOlHtku7N2kb7dMkPhHCmQ&oe=692BF4F8)

## Using the NavMesh APIs

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

```vs
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

## NavMesh API reference

#### `NavMesh` class

A reference to a navigation mesh instance, which scripts can use to query paths, raycasts, and nearest points. Each `NavMesh` class represents a profile already defined in the editor; you can not define or modify profiles at runtime. As such, the `NavMesh` class is generally considered to be read-only.

There can only be one instance of a given NavMesh for each profile. For example, if you procure the same reference from multiple scripts, you are still operating against the same, singular NavMesh reference. This ensures your NavMesh reference can be safely passed between classes, functions, etc.

```vs
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

#### NavMeshHit type

Collision data returned when a raycast is performed on a NavMesh.

**Variables**

| **Variable** | **Type** | **Description** |
| --- | --- | --- |
| position | Vec3 | The ending location where the raycast collided with the NavMesh. |
| normal | Vec3 | The normal vector at the point of impact for this raycast. |
| distance | number | The distance traveled when the raycast was performed. |
| hit | boolean | true if the raycast hits any obstructions or edges during the calculation; otherwise, false. |
| navMesh | NavMesh | The NavMesh that the raycast was performed on. |

#### NavMeshProfile type

Defines a navigation profile configuration created in World Builder.

**Variables**

| **Variable** | **Type** | **Description** |
| --- | --- | --- |
| name | string | The name of the profile entity in World Builder. |
| color | string | The color of the given profile as defined in World Builder. |
| agentRadius | number | The radius for the agent’s navmesh calculations. |
| agentMaxSlope | number | The maximum angle on a slope the agent can traverse. |
| navMesh | NavMesh | The NavMesh that the agent is running a calculation against. |

#### NavMeshPath type

Defines the pathfinding calculation results for a `getPath` query.

**Variables**

| **Variable** | **Type** | **Description** |
| --- | --- | --- |
| waypoints | Vec3[] | The list of waypoints for the generated path. |
| startPos | Vec3 | The origin point for the generated path. |
| endPos | Vec3 | The terminal point for the generated path. This might not be the same as the query destination. |
| destinationPos | Vec3 | The requested terminal point for the generated path. This may not be reachable, and can differ from `endPos` . |
| pathReachesDestination | boolean | `true` if the endPos reaches the destinationPos, `false` if an incomplete path is returned. |