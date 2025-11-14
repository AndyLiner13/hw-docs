Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/nav-mesh-agents

# Nav Mesh Agents

The navigation mesh (NavMesh) agent feature allows you to create [agents](/hw-docs/Desktop%20editor/NPCs/Navigation%20mesh%20generation.md#agent) that autonomously navigate through a world avoiding obstacles, guided by [navigation meshes](/hw-docs/Desktop%20editor/NPCs/Navigation%20mesh%20generation.md#navigation-mesh-navmesh). Agents can be simple, like a primitive object, or complex, like a premade [NPC asset](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/getting-started-with-npc-assets). You can create an agent from any of the following entity types:

* Meshes (primitive and custom model)
* Unity Asset Bundles (2p-only)
* Empty/group objects

The NavMesh agent feature provides Desktop Editor tools to configure agents and a [NavMeshAgent API](/hw-docs/Reference/navmesh/Classes/NavMesh.md) to execute commands on agents, as well as configure them.

Before setting up an agent, you must create:

* Navigation meshes, to determine the areas of your world that NPCs can access and the paths they can use to get there.
* Navigation profiles, to determine which navigation meshes are used for a given agent.

See the [Navigation Mesh Generation](/hw-docs/Desktop%20editor/NPCs/Navigation%20mesh%20generation.md) docs for instructions on how to create navigation meshes and profiles.

## Set up agents using Desktop Editor

Once you have created navigation profiles and navigation meshes, you can configure agents using the Desktop Editor.

- First, select the object you’ll use as an agent and open the **Properties** pane.
- Scroll down to the **Navigation Locomotion** section and toggle on the Enabled property.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/459400604_543667308171225_1499421177653764709_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=o5cUUAKbpecQ7kNvwGVT84H&_nc_oc=AdlCLLWNmmu0suTn0FHLjunVG-QFKf6MVmOru3_ensu2L3MriN45j5kzeXoHpCZysBY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=zYxGK5pel4W06QF_ttuccA&oh=00_AfivEKh4Jq1ZOFPNqoujFIQT-kQyJON3Qvd67Zr_mBXsgQ&oe=693096B7)
- Configure the navigation locomotion settings for your agent. These properties can also be configured through the NavMeshAgent API. See the [NavMeshAgent API docs](/hw-docs/Reference/navmesh/Classes/NavMesh.md) for more details about these properties.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/459083561_543667304837892_4941892522645062338_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=qA3Kd_M_DC4Q7kNvwEuRZ_1&_nc_oc=AdkKxxAUN3418so3jGoNTcsmjgtTTu6mNaJyeo507eOk0PllSNQ1pd_DOW_ByyIwM8U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=zYxGK5pel4W06QF_ttuccA&oh=00_AfjZU_bxWivQONXbU0cllyEUCg2m5IduJq3cyD0ZGXRoeA&oe=6930BC41)

  - **Enabled**: Whether the object is a NavMesh agent.
  - **Navigation Profile**: The navigation profile the agent will use.
  - **Max Speed**: The maximum speed the agent will move in meters per second.
  - **Turning Speed**: The rate the agent will rotate towards its desired orientation in degrees per second.
  - **Base Offset**: The distance from the agent’s center to the surface of its attached navmesh. This value affects collision avoidance such that agents with higher values will avoid other agents with similar base offsets.
  - **Stopping Distance**: The distance the agent will stop from its destination in meters.
  - **Acceleration**: The agent’s acceleration rate in meters per second squared.
  - **Deceleration**: The agent’s deceleration rate in meters per second squared.
  - **Immobile**: Prevents the agent from moving, even if a destination is set. The agent will not move while the property is toggled on.
  - **Alignment Mode**: The orientation faced by the agent when traveling. See [NavMeshAgentAlignment enum API docs](/hw-docs/Reference/navmesh/Classes/NavMesh.md) for more information.
  - **Physical Surface Snapping**: Whether the agent stays attached (“snapped”) to the physical surface position or uses the NavMesh surface.
  - **Required Forward Alignment**: When this is set, the agent will only begin traveling in a given direction when it facing less than the specified angle in degrees away from the direction of travel. This ensures an agent only starts moving once it’s generally facing the right direction.
- Scroll up to the **Navigation** section and ensure the **Include in Bakes** toggle is off. This ensures the agent itself isn’t included in the navigation mesh. If this is toggled on, the agent will not be able to move through the NavMesh properly.

To enable your agents to move, you need to write a script to determine their movements with the [`NavMeshAgent API`](/hw-docs/Reference/navmesh/Classes/NavMesh.md).

To use the NavMeshAgent API, first enable the `horizon/navmesh` package in the **Script Settings** menu and **Apply** your changes.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/459441915_543667311504558_2099678408108692939_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=KCfqN96odhsQ7kNvwGX1T1K&_nc_oc=AdkdjIvMhhkaU1ArYIHvflkcHEM5UaAPR58RY6kkwRf0HH_ndZgRms4SzLxVGTlOfOo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=zYxGK5pel4W06QF_ttuccA&oh=00_AfgRWvjmXDQISzVvg7g8NQ4LqD43Z4BOaBA3reyEAMQtCA&oe=6930A690)

Then, create a new script using the [NavMeshAgent API](/hw-docs/Reference/navmesh/Classes/NavMesh.md). See the [Adding and Editing Scripts](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Adding%20and%20editing%20scripts.md) documentation for how to create a new script.

After you create a script to move your agent, don’t forget to attach the script to the agent object in the **Properties** pane.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/459101076_543667314837891_4007115484206548401_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=7ws3Kb5EDboQ7kNvwEhmftP&_nc_oc=AdlLDPegd89016tm8nkFxpU0ZnKXDitvsXa9VgzxWuIFR1rtmC9fg8n9eFq5admF61w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=zYxGK5pel4W06QF_ttuccA&oh=00_Afinao4ZaJoNfoclvkFN3gacafH1sxMbcJBE66tVpH25Ug&oe=6930A909)

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