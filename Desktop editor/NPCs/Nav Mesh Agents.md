Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/nav-mesh-agents

# Nav Mesh Agents

The navigation mesh (NavMesh) agent feature allows you to create [agents](Navigation%20mesh%20generation.md#agent) that autonomously navigate through a world avoiding obstacles, guided by [navigation meshes](Navigation%20mesh%20generation.md#navigation-mesh-navmesh). Agents can be simple, like a primitive object, or complex, like a premade [NPC asset](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/getting-started-with-npc-assets). You can create an agent from any of the following entity types:

* Meshes (primitive and custom model)
* Unity Asset Bundles (2p-only)
* Empty/group objects

The NavMesh agent feature provides Desktop Editor tools to configure agents and a [NavMeshAgent API](https://horizon.meta.com/resources/scripting-api/navmesh.navmeshagent.md/?api_version=2.0.0) to execute commands on agents, as well as configure them.

Before setting up an agent, you must create:

* Navigation meshes, to determine the areas of your world that NPCs can access and the paths they can use to get there.
* Navigation profiles, to determine which navigation meshes are used for a given agent.

See the [Navigation Mesh Generation](Navigation%20mesh%20generation.md) docs for instructions on how to create navigation meshes and profiles.

## Set up agents using Desktop Editor

Once you have created navigation profiles and navigation meshes, you can configure agents using the Desktop Editor.

- First, select the object you’ll use as an agent and open the **Properties** pane.
- Scroll down to the **Navigation Locomotion** section and toggle on the Enabled property.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/32751f260410e0595557dd6246eed7cb0191239cc48e83f7b5829f70d37e5dae.md)
  
  ### Overview
  This image depicts a portion of a user interface, specifically a settings panel with expandable sections. The layout is structured with toggle switches next to certain options.
  
  ### Key Elements
  - **Navigation Section**: Located at the top, this section has a header labeled "Navigation." Below the header, there is a toggle switch labeled "Include in Bakes."
  - **Navigation Locomotion Section**: Positioned below the Navigation section, this section has a header labeled "Navigation Locomotion." Below the header, there is another toggle switch labeled "Enabled."
  - **Script Section**: Located at the bottom, this section is partially visible but has a header labeled "Script."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the toggle switches, as they are the interactive components. The sections are arranged vertically, with each section expanding when clicked. There are no arrows or lines connecting the elements, indicating a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  
- Configure the navigation locomotion settings for your agent. These properties can also be configured through the NavMeshAgent API. See the [NavMeshAgent API docs](https://horizon.meta.com/resources/scripting-api/navmesh.navmeshagent.md/?api_version=2.0.0) for more details about these properties.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/de8f1a025e89d34f6a51a32399ef863e84fa14fe8162e785637e8b6830e590d4.md)
  
  ### Overview
  This image depicts a settings interface for navigation parameters within a software application. It includes various adjustable settings related to movement and speed control.
  
  ### Key Elements
  - **Navigation Section**: Located at the top, this section has a header labeled "Navigation." Below it, there's a toggle switch labeled "Include in Bakes."
  - **Navigation Locomotion Section**: Positioned below the Navigation section, this part is titled "Navigation Locomotion." It contains several adjustable parameters.
    - **Enabled Toggle**: A blue toggle switch indicating that navigation locomotion is enabled.
    - **Navigation Profile Dropdown**: A dropdown menu labeled "Navigation Profile" set to "Regular."
    - **Max Speed Input Box**: Displays the value "5."
    - **Turning Speed Input Box**: Displays the value "120."
    - **Base Offset Input Box**: Displays the value "1."
    - **Stopping Distance Input Box**: Displays the value "0."
    - **Acceleration Input Box**: Displays the value "10."
    - **Deceleration Input Box**: Displays the value "-10."
    - **Immobile Toggle**: A toggle switch labeled "Immobile."
    - **Alignment Mode Dropdown**: A dropdown menu labeled "Alignment Mode" set to "Current Velocity."
    - **Physical Surface Snapping Toggle**: A toggle switch labeled "Physical Surface Snapping."
    - **Required Forward Alignment Input Box**: Displays the value "360."
  
  ### Visual Flow / Relationships
  The interface is structured hierarchically with nested sections. The "Navigation Locomotion" section is a sub-section under "Navigation." The parameters are arranged vertically, with each parameter having its own input box or toggle switch. The layout suggests a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  

  - **Enabled**: Whether the object is a NavMesh agent.
  - **Navigation Profile**: The navigation profile the agent will use.
  - **Max Speed**: The maximum speed the agent will move in meters per second.
  - **Turning Speed**: The rate the agent will rotate towards its desired orientation in degrees per second.
  - **Base Offset**: The distance from the agent’s center to the surface of its attached navmesh. This value affects collision avoidance such that agents with higher values will avoid other agents with similar base offsets.
  - **Stopping Distance**: The distance the agent will stop from its destination in meters.
  - **Acceleration**: The agent’s acceleration rate in meters per second squared.
  - **Deceleration**: The agent’s deceleration rate in meters per second squared.
  - **Immobile**: Prevents the agent from moving, even if a destination is set. The agent will not move while the property is toggled on.
  - **Alignment Mode**: The orientation faced by the agent when traveling. See [NavMeshAgentAlignment enum API docs](https://horizon.meta.com/resources/scripting-api/navmesh.navmeshagentalignment.md/?api_version=2.0.0) for more information.
  - **Physical Surface Snapping**: Whether the agent stays attached (“snapped”) to the physical surface position or uses the NavMesh surface.
  - **Required Forward Alignment**: When this is set, the agent will only begin traveling in a given direction when it facing less than the specified angle in degrees away from the direction of travel. This ensures an agent only starts moving once it’s generally facing the right direction.
- Scroll up to the **Navigation** section and ensure the **Include in Bakes** toggle is off. This ensures the agent itself isn’t included in the navigation mesh. If this is toggled on, the agent will not be able to move through the NavMesh properly.

To enable your agents to move, you need to write a script to determine their movements with the [`NavMeshAgent API`](https://horizon.meta.com/resources/scripting-api/navmesh.navmeshagent.md/?api_version=2.0.0).

To use the NavMeshAgent API, first enable the `horizon/navmesh` package in the **Script Settings** menu and **Apply** your changes.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/c88842a212e2541da6714bf884fa7fcd3638ee16b109a935804e475a73fabb7c.md)

### Overview
This image depicts a settings interface titled "Script Settings." It is a modal window with a dark theme, featuring a sidebar menu on the left and a content area on the right. The content area is divided into sections labeled "API," "horizon/experimental," "horizon/testing," etc., with toggle switches next to each API name.

### Key Elements
- **Sidebar Menu**: Located on the left side, with options "Script editing," "API," and "Console." The "API" option is highlighted with a blue vertical line indicating selection.
- **Content Area**: On the right, under the "API" heading, a list of APIs is displayed vertically. Each API has a toggle switch to the right.
    - **API List Items**: 
        - horizon/experimental
        - horizon/testing
        - horizon/2p
        - horizon/analytics
        - horizon/performance
        - horizon/navmesh
        - horizon/test_bridge
    - **Toggle Switches**: Positioned to the right of each API item, these are currently off except for "horizon/test_bridge," which is toggled on.
- **Buttons**: At the bottom of the content area, there are two buttons labeled "Cancel" and "Apply."

### Visual Flow / Relationships
The most prominent visual element is the "API" section, as indicated by the blue highlight. The APIs are listed vertically, and the toggle switches are aligned to the right. The "Apply" button is visually distinct due to its blue color, suggesting it is the primary action to confirm changes. The "Cancel" button is less prominent but still noticeable.

</details>

<p></p>



Then, create a new script using the [NavMeshAgent API](https://horizon.meta.com/resources/scripting-api/navmesh.navmeshagent.md/?api_version=2.0.0). See the [Adding and Editing Scripts](../Get%20started%20with%20Desktop%20Editor/Adding%20and%20editing%20scripts.md) documentation for how to create a new script.

After you create a script to move your agent, don’t forget to attach the script to the agent object in the **Properties** pane.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/c7e31f5cd9c2ecf77c9425a9aa7c144d6695079ea4f5fa25ce3b8c9fa0ce4ebe.md)

### Overview
The image displays a 3D avatar model in a development environment, likely a game or animation software. The avatar is wearing a plaid shirt, light-colored pants, and a cap. On the right side, there is a settings panel with various parameters related to navigation and locomotion.

### Key Elements
- **Avatar Model**: A 3D character model with a plaid shirt, light-colored pants, and a cap. The model has a blue outline indicating its bounding box.
- **Navigation Panel**: Located on the right side of the image, it contains several settings related to navigation and locomotion.
    - **Navigation Section**: Includes options like "Include in Bakes," which is toggled off.
    - **Navigation Locomotion Section**: Contains parameters such as "Max Speed," "Turning Speed," "Base Offset," "Stopping Distance," "Acceleration," "Deceleration," and more. These are adjustable sliders and checkboxes.
    - **Script Section**: Displays a dropdown menu labeled "Attached Script..." with "MyNavAgent:MyNavAgent" selected.

### Visual Flow / Relationships
- **Most Prominent Element**: The avatar model is the focal point, with the navigation panel providing contextual information.
- **Arrows and Lines**: Red arrows are overlaid on the avatar, possibly indicating movement directions or axes.
- **Spatial Relationships**: The avatar is positioned on a grid background, suggesting a development environment. The navigation panel is vertically aligned to the right of the avatar.

</details>

<p></p>



### Example scripts

#### Walk to random points

Here’s an example script where the agent walks to random points in the world:

```
import * as hz from 'horizon/core';
import {INavMesh, NavMeshAgent} from 'horizon/navmesh';

class MyNavAgent extends hz.Component<typeof MyNavAgent> {
  static propsDefinition = {};
  agent!: NavMeshAgent;
  navmesh!: INavMesh;

  start = async () => {
    // Access the NMA API for the attached entity
    this.agent = this.entity.as(NavMeshAgent)!; // Access the navmesh to which this agent is attached
    const mesh = await this.agent.getNavMesh();
    this.navmesh = mesh!; // Move to a random point on the navmesh every 5 seconds

    this.async.setInterval(this.moveToRandomPoint, 5000);
  };

  moveToRandomPoint = () => {
    let foundValidPt = false;
    while (!foundValidPt) {
      // Generate a random point and then find a valid spot on the navmesh nearby
      const randomPoint = new hz.Vec3(
        Math.random() * 10,
        0,
        Math.random() * 10,
      );
      const range = 3;
      const point = this.navmesh.getNearestPoint(randomPoint, range); // Move the agent to the found point!
      if (point) {
        this.agent.destination.set(point);
        foundValidPt = true;
      }
    }
  };
}
hz.Component.register(MyNavAgent);
```

#### Follow a player

Here’s an example script where the agent follows a player:

```
import * as hz from 'horizon/core';
import {INavMesh, NavMeshAgent} from 'horizon/navmesh';

type Props = {};

class NavAgentTest extends hz.Component<Props> {
  static propsDefinition = {};

  private currentTarget?: hz.Player;
  private agent!: NavMeshAgent;
  private navmesh!: INavMesh;
  private lastKnownGood: hz.Vec3 = hz.Vec3.zero;

  listenForPlayerJoinLeave = () => {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      player => {
        this.currentTarget = player;
        this.update();
      },
    );

    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitWorld,
      player => {
        delete this.currentTarget;
      },
    );
  };

  start() {
    this.agent = this.entity.as(NavMeshAgent)!;
    this.listenForPlayerJoinLeave(); // Get the navmesh reference so we can use it later

    this.agent.getNavMesh().then(mesh => {
      this.navmesh = mesh!;
    }); // Update 4 times per second

    this.async.setInterval(this.update, 1000 / 4); // Tracking variable setup

    this.lastKnownGood = this.entity.position.get();
  }

  update = () => {
    if (this.currentTarget) {
      let targetPos: hz.Vec3 = this.currentTarget.position.get(); // Target is off-mesh, try to find a nearby point.

      if (this.navmesh) {
        const after = this.navmesh.getNearestPoint(targetPos, 3);
        targetPos = after ?? this.entity.position.get();
      }

      this.lastKnownGood = targetPos ?? this.lastKnownGood;
      this.agent.destination.set(this.lastKnownGood);
    }
  };
}
hz.Component.register(NavAgentTest);
```