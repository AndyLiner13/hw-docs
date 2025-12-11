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

[All image details and metadata](../../../../images/output/img_20251211_063856_20251211_063856.md)

### Overview
This image depicts a portion of a user interface, specifically a settings panel with expandable sections. The layout includes toggle switches next to certain options.

### Key Elements
- **Navigation Section**:
  - **Visual description**: A collapsed section header labeled "Navigation."
  - **Location**: Top-left area.
  - **Contents**: Includes a toggle switch labeled "Include in Bakes."
  - **Visual styling**: Dark gray background, white text, blue toggle switch.
- **Navigation Locomotion Section**:
  - **Visual description**: A collapsed section header labeled "Navigation Locomotion."
  - **Location**: Below the "Navigation" section.
  - **Contents**: Includes a toggle switch labeled "Enabled."
  - **Visual styling**: Dark gray background, white text, gray toggle switch.
- **Script Section**:
  - **Visual description**: A partially visible section header labeled "Script."
  - **Location**: Below the "Navigation Locomotion" section.
  - **Contents**: Not fully visible but appears to include another toggle switch.
  - **Visual styling**: Dark gray background, white text, no toggle switch shown.

### Visual Flow / Relationships
- **Most prominent visually**: The "Navigation" section due to its larger size and placement at the top.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: Sections are stacked vertically, with toggles aligned to the right of their respective headers.

</details>

<p></p>


- Configure the navigation locomotion settings for your agent. These properties can also be configured through the NavMeshAgent API. See the [NavMeshAgent API docs](https://horizon.meta.com/resources/scripting-api/navmesh.navmeshagent.md/?api_version=2.0.0) for more details about these properties.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_064012_20251211_064012.md)

### Overview
This image depicts a settings interface for configuring navigation parameters within a software application. The layout is structured with expandable sections and various input fields for adjusting settings related to navigation locomotion.

### Key Elements
- **Navigation Section**: Located at the top, this section has a header labeled "Navigation." It includes a toggle switch labeled "Include in Bakes."
- **Navigation Locomotion Section**: Below the Navigation section, this section is expanded to reveal more settings. It has a header labeled "Navigation Locomotion."
- **Enabled Toggle**: Within the Navigation Locomotion section, there is a toggle switch labeled "Enabled," which is currently in the 'on' position.
- **Navigation Profile Dropdown**: Next to the Enabled toggle, there is a dropdown menu labeled "Navigation Profile" set to "Regular."
- **Input Fields**: Several input fields are present under the Navigation Locomotion section, each with a label and a corresponding value field:
  - **Max Speed**: Value set to "5"
  - **Turning Speed**: Value set to "120"
  - **Base Offset**: Value set to "1"
  - **Stopping Distance**: Value set to "0"
  - **Acceleration**: Value set to "10"
  - **Deceleration**: Value set to "-10"
- **Immobile Toggle**: Below the input fields, there is a toggle switch labeled "Immobile."
- **Alignment Mode Dropdown**: This dropdown is labeled "Alignment Mode" and is set to "Current Velocity."
- **Physical Surface Snapping Toggle**: Below the Alignment Mode dropdown, there is another toggle switch labeled "Physical Surface Snapping."
- **Required Forward Alignment**: At the bottom, there is a label "Required Forward Alignment" with a value of "360."

### Visual Flow / Relationships
The most prominent visual element is the "Enabled" toggle switch within the Navigation Locomotion section. The input fields are arranged vertically beneath the toggle switch, and the alignment mode dropdown is positioned below them. The toggle switches for Immobile and Physical Surface Snapping are located at the bottom of the interface. The layout follows a clear hierarchical structure, with the top section being the primary navigation setting and the lower section detailing specific locomotion parameters.

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

[All image details and metadata](../../../../images/output/img_20251211_064117_20251211_064117.md)

### Overview
This image depicts a settings dialog box titled "Script Settings." It contains a sidebar menu with options such as "Script editing," "API," and "Console." The main content area displays a list of API options under the "API" tab, with toggle switches next to each option. At the bottom, there are two buttons labeled "Cancel" and "Apply."

### Key Elements
- **Sidebar Menu**: Located on the left side, with a dark gray background. Contains three options: "Script editing," "API," and "Console." Each option has a white label.
- **API Tab**: Located in the main content area, with a dark gray background. Contains a list of API options: "horizon/experimental," "horizon/testing," "horizon/2p," "horizon/analytics," "horizon/performance," "horizon/navmesh," and "horizon/test_bridge." Each API name is in white text.
- **Toggle Switches**: Located to the right of each API option, with a dark gray background and a white toggle handle. Some toggles are in the "off" position, while one ("horizon/test_bridge") is in the "on" position.
- **Buttons**: At the bottom of the dialog box, there are two buttons: "Cancel" and "Apply." Both have a dark gray background with white text. The "Apply" button is highlighted in blue.

### Visual Flow / Relationships
The most prominent visual element is the "API" tab, as it occupies the largest portion of the main content area. The toggle switches are arranged vertically next to the API names. The "Cancel" and "Apply" buttons are at the bottom, with the "Apply" button being more prominent due to its blue highlight.

</details>

<p></p>



Then, create a new script using the [NavMeshAgent API](https://horizon.meta.com/resources/scripting-api/navmesh.navmeshagent.md/?api_version=2.0.0). See the [Adding and Editing Scripts](../Get%20started%20with%20Desktop%20Editor/Adding%20and%20editing%20scripts.md) documentation for how to create a new script.

After you create a script to move your agent, don’t forget to attach the script to the agent object in the **Properties** pane.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_064227_20251211_064227.md)

### Overview
The image displays a 3D avatar model in a development environment, alongside a configuration interface for navigation settings. The avatar is wearing a plaid shirt, white pants, brown shoes, and a black cap. The right side of the image shows a settings panel with various parameters related to navigation and locomotion.

### Key Elements
- **Avatar Model**: A 3D character model with a plaid shirt, white pants, brown shoes, and a black cap. The model is positioned in a neutral stance, facing slightly to the right.
- **Navigation Settings Panel**: Located on the right side of the image, it contains several configurable options for navigation and locomotion.
    - **Who Can Grab?**: Dropdown menu showing "Anyone".
    - **Avatar Attachable**: Toggle switch set to "Off".
    - **Keep Ownership On Collision**: Toggle switch set to "Off".
    - **Navigation Section**: Contains a dropdown labeled "Include in Bakes".
    - **Navigation Locomotion Section**: Contains toggles and sliders for parameters such as "Enabled", "Navigation Profile", "Max Speed", "Turning Speed", "Base Offset", "Stopping Distance", "Acceleration", "Deceleration", "Immobile", "Alignment Mode", "Physical Surface Snapping", and "Required Forward Alignment".

### Visual Flow / Relationships
The avatar model is the most prominent visual element, with the navigation settings panel providing contextual information about the avatar's configuration. The avatar is positioned on the left, while the settings panel occupies the right side of the image. There are no arrows or lines connecting elements, but the layout suggests a logical progression from viewing the avatar to configuring its navigation settings.

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