---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentgrabbableinteraction
---

# [AgentGrabbableInteraction Class](#agentgrabbableinteraction-class)

> [!Warning]
>
> This API is now obsolete.\
> Please use the NpcPlayer class in the horizon/npc module instead.\
> The grabbing features of an agent.

## [Signature](#signature)

```
export
 declare 
class
 
AgentGrabbableInteraction
 
```

## [Properties](#properties)

|            |                                                          |
| ---------- | -------------------------------------------------------- |
| **entity** | The entity that is attached to the agent.Signature\`\`\` |
| entity     |                                                          |
| :          |                                                          |

Entity
;

````|

## [Methods](#methods)

|                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **drop(handedness)**             | Commands an agent to drop a held item.Signature```
drop
(
handedness
:
 
Handedness
):
 
void
;
```Parametershandedness: HandednessThe hand to drop the item from.Returnsvoid                                                                                                                                                                                                                                                   |
| **getGrabbedEntity(handedness)** | Gets the entity currently held by the specified hand.Signature```
getGrabbedEntity
(
handedness
:
 
Handedness
):
 
Entity
 
|
 
undefined
;
```Parametershandedness: HandednessThe hand to query.ReturnsEntity \| undefined- The held entity or undefined if not holding anything.                                                                                                                                             |
| **grab(handedness, entity)**     | Commands the agent to pick up an entity.Signature```
grab
(
handedness
:
 
Handedness
,
 entity
:
 
Entity
):
 
Promise
<
AgentGrabActionResult
>;
```Parametershandedness: HandednessThe hand to pick up the entity with.entity: EntityThe entity to grab. The entity must be grabbable.ReturnsPromise<[AgentGrabActionResult](../Enumerations/AgentGrabActionResult.md)>- A promise describing how the grabbing action ended. |
````

