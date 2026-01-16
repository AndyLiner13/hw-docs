Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentgrabbableinteraction

# AgentGrabbableInteraction Class

> Warning: This API is now obsolete.
> Please use the NpcPlayer class in the horizon/npc module instead.
> The grabbing features of an agent.

## Signature

```
export declare class AgentGrabbableInteraction
```

## Properties

|  |  |
| --- | --- |
| **entity** | The entity that is attached to the agent.      Signature  ``` entity: Entity; ``` |

## Methods

|  |  |
| --- | --- |
| **drop(handedness)** | Commands an agent to drop a held item.      Signature  ``` drop(handedness: Handedness): void; ```  Parameters  handedness: Handedness  The hand to drop the item from.  Returns  void |
| **getGrabbedEntity(handedness)** | Gets the entity currently held by the specified hand.      Signature  ``` getGrabbedEntity(handedness: Handedness): Entity | undefined; ```  Parameters  handedness: Handedness  The hand to query.  Returns  Entity | undefined  - The held entity or undefined if not holding anything. |
| **grab(handedness, entity)** | Commands the agent to pick up an entity.      Signature  ``` grab(handedness: Handedness, entity: Entity): Promise<AgentGrabActionResult>; ```  Parameters  handedness: Handedness  The hand to pick up the entity with.  entity: Entity  The entity to grab. The entity must be grabbable.  Returns  Promise<[AgentGrabActionResult](../Enumerations/AgentGrabActionResult.md)>  - A promise describing how the grabbing action ended. |