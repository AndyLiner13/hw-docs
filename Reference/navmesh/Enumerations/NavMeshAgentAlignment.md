Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshagentalignment

API reference

# NavMeshAgentAlignment Enum

The possible orientation values for [NavMeshAgent](/hw-docs/Reference/navmesh/Classes/NavMeshAgent.md) locomotion.

## Signature

```
export declare const enum NavMeshAgentAlignment
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| CurrentVelocity | `1` | The agent rotates to face its current direction of travel. (Default) |
| Destination | `4` | The agent rotates to face its target destination. This may be different than its final waypoint; for instance, if the path is incomplete. |
| FinalWaypoint | `3` | The agent rotates to face the final waypoint of its current path. This may be different than its destination, for instance, if the path is incomplete. |
| NextWaypoint | `2` | The agent rotates to face the next waypoint of its current path. |
| None | `0` | The agent does not change orientation as it travels. |

## Remarks

See the [NavMeshAgent.alignmentMode](/hw-docs/Reference/navmesh/Classes/NavMeshAgent.md#alignmentmode) property for usage.