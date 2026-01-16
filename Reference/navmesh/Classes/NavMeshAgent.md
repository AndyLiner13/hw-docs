Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshagent

# NavMeshAgent Class

Extends *[INavMeshAgent](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_inavmeshagent)*

Extends *Entity*

Represents an entity with locomotion and pathfinding capabilities.

## Signature

```
export declare class NavMeshAgent extends Entity implements INavMeshAgent
```

## Remarks

For more information, see the [NavMesh agents](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/nav-mesh-agents) guide.

## Properties

|  |  |
| --- | --- |
| **Constants**  static | List of common constants used when setting the avoidance layer and mask.      Signature  ``` static Constants: {         LAYER_DEFAULT: number;         MASK_DEFAULT: number;         LAYER_PLAYERS: number;         MASK_IGNORE_ALL: number;     }; ```  Remarks  Constants: `LAYER_DEFAULT: 1 << 0` - Represents the default layer that agents belong to upon creation. For use with the `avoidanceLayer` property. `MASK_DEFAULT: (1 << 0) | (1 << 30)` - Represents the default masks that agents apply upon creation. For use with the `avoidanceMask` property. `LAYER_PLAYERS: 1 << 30` - Represents the collision layer for human players. For use with the `avoidanceLayer` property. `MASK_IGNORE_ALL: -1` - Ensure an agent ignores all other agents during collision avoidance, regardless of the layer they are on. For use with the `avoidanceMask` property. |
| **acceleration** | The acceleration rate for the agent. This is used to propel the agent forward until it reaches its max speed.      Signature  ``` acceleration: HorizonProperty<number>; ```  Remarks  This should be a positive number. The default value is `10 m/s^2`. |
| **alignmentMode** | The orientation faced by the agent when traveling.      Signature  ``` alignmentMode: HorizonProperty<NavMeshAgentAlignment>; ```  Remarks  When travelling, agents default to facing towards their next waypoint. To change the orientation of the agent as it is moving, you can use this property. See [NavMeshAgentAlignment](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshagentalignment) for more information on the available modes. Default: `NavMeshAgentAlignment.NextWaypoint` |
| **avoidanceLayer** | A bitmask that represents the avoidance layer used to perform collision avoidance calculations for the navigation mesh agent.      Signature  ``` avoidanceLayer: HorizonProperty<number>; ```  Remarks  Each agent belongs to an avoidance layer. These layers are taken into consideration during collision avoidance calculations to identify which agents to avoid. In tandem with the layer is the avoidance mask, which is a bitmask representing the layers which this agent should take into consideration during collision avoidance calculations. This property only sets the agent's avoidance layer. If you want to set the mask, see . |
| **avoidanceMask** | A bitmask that represents the layers the navigation mesh agent should avoid colliding with.      Signature  ``` avoidanceMask: HorizonProperty<number>; ```  Remarks  Each agent belongs to an avoidance layer. These layers are taken into consideration during collision avoidance calculations, to identify which agents to avoid. In tandem with the layer is the avoidance mask, a bitmask representing the layers which this agent should take into consideration during collision avoidance calculations. This method only sets the agent's avoidance mask. If you want to set the layer, see . |
| **avoidanceRadius** | The radius used for the agent when calculating collision avoidance.      Signature  ``` avoidanceRadius: HorizonProperty<number>; ```  Remarks  Default: The attached navigation profile radius. |
| **baseOffset** | The distance from the agent's center to the surface of its attached NavMesh, in meters. Use this to produce psuedo-flying agents.      Signature  ``` baseOffset: HorizonProperty<number>; ```  Remarks  This value affects collision avoidance; agents with higher values will avoid other agents with similar base offsets. Default: 0 |
| **currentSpeed** | The current speed of the agent, in meters per second.      Signature  ``` currentSpeed: ReadableHorizonProperty<number>; ``` |
| **currentVelocity** | The current velocity of the agent, in meters per second.      Signature  ``` currentVelocity: ReadableHorizonProperty<Vec3>; ``` |
| **deceleration** | The deceleration rate for the agent. This is used to slow the agent as it approaches the final waypoint of its path.      Signature  ``` deceleration: HorizonProperty<number>; ```  Remarks  This should be a negative number. Default: `-10 m/s^2` |
| **destination** | The destination of the agent.      Signature  ``` destination: HorizonProperty<Vec3 | null>; ```  Remarks  In Play Mode, agents move towards their destination until reached. When the position is outside the navigable surface, the agent will not be able to find path to the destination. If it is the intention to move towards a position outside the navigable surface, use the method to get a valid target location. |
| **getNavMesh** | Gets a reference to the current navigation mesh the agent is using.      Signature  ``` getNavMesh: () => Promise<INavMesh | null>; ``` |
| **getNavProfile** | Gets a reference to the current navigation mesh profile the agent is using.      Signature  ``` getNavProfile: () => Promise<NavMeshProfile | null>; ``` |
| **isImmobile** | Indicates whether the agent is immobile and unable avoid collisions.      Signature  ``` isImmobile: HorizonProperty<boolean>; ```  Remarks  By default, an agent attempts to avoid impending collisions with other agents or players. However, if you want your agent to plant itself and not avoid collisions with anything, you can use this property. Other agents will try to navigate around it. However, if the world geometry doesn't allow for it, it's possible other agents will collide with this agent or get stuck trying to move past it. The agent will not move at all unless `isImmobile` is set to `false`, even if the property is set. Default: false |
| **maxSpeed** | The max travel speed for the agent.      Signature  ``` maxSpeed: HorizonProperty<number>; ```  Remarks  To change how fast the agent reaches its max speed, use the property. Default: 5 meters per second |
| **nextWaypoint** | The next waypoint on the agent's current path.      Signature  ``` nextWaypoint: ReadableHorizonProperty<Vec3 | null>; ``` |
| **path** | The current path the agent is using.      Signature  ``` path: ReadableHorizonProperty<Vec3[]>; ``` |
| **profileName** | The name of the Navigation Profile attached to the agent.      Signature  ``` profileName: HorizonProperty<string | null>; ```  Remarks  Setting this value causes the agent to use the new profile's NavMesh for pathfinding operations. |
| **remainingDistance** | The agent's remaining distance in its current path, accounting for the agent's stopping distance.      Signature  ``` remainingDistance: ReadableHorizonProperty<number>; ```  Remarks  This may not be the same distance to its intended target. For example, if the path to the destination is incomplete or blocked. |
| **requiredForwardAlignment** | The required alignment, in degrees, between the agent's destination and the direction they are facing, at which point the agent can start moving towards the target direction.      Signature  ``` requiredForwardAlignment: HorizonProperty<number>; ```  Remarks  When traveling, it is possible the agent starts to move in a different direction than it is currently facing. For instance, when navigating to a destination behind the agent, it will begin travelling while turning to face the proper direction. You can leverage this property to ensure that an agent only travels forward when it is generally facing the correct direction. We recommend that you keep this value higher than \~10. Default: 360 degrees |
| **stoppingDistance** | The distance where the agent considers itself within an acceptable range of its destination.      Signature  ``` stoppingDistance: HorizonProperty<number>; ```  Remarks  Agents automatically decelerate and then stop when reaching this distance. Default: 0 meters |
| **turnSpeed** | The rate in degrees pers second, at which the agent rotates towards its desired orientation.      Signature  ``` turnSpeed: HorizonProperty<number>; ```  Remarks  The agent's desired orientation is determined by its property. Default: 120 degrees per second |
| **usePhysicalSurfaceSnapping** | The surface snapping setting for the agent, which determines whether the agent uses the navmesh or the world's physical surface to determine its surface position.      Signature  ``` usePhysicalSurfaceSnapping: HorizonProperty<boolean>; ```  Remarks  By default, the agent uses the navigation mesh to determine its surface position. The surface position is used when moving the agent to ensure it is attached to the navigation mesh at all times. The navigation mesh is a simplified representation of the world, so it may not be totally accurate, particularly along slopes or curves. In some cases, you'd want the actual physical surface position to be used instead. This setting allows you to toggle this physical surface snapping on/off. Enabling this setting icurs a per-frame performance cost for the agent. Default: false |

## Methods

|  |  |
| --- | --- |
| **clearDestination()** | Warning: This API is now obsolete. Use `destination.set(null)` instead! This method is deprecated.      Signature  ``` clearDestination(): void; ```  Returns  void |
| **toString()** | Creates a human-readable representation of the NavMeshAgent.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the NavMeshAgent. |