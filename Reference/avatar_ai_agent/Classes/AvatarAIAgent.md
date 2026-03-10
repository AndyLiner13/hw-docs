---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_avataraiagent
---

# [AvatarAIAgent Class](#avataraiagent-class)

Extends *AIAgentGizmo*

> [!Warning]
>
> This API is now obsolete.\
> Please use the Npc class in the horizon/npc module instead.\
> An AI-powered NPC that scripts can spawn and despawn at runtime and is represented by a player avatar. `AvatarAIAgent` objects are also capable of pathfinding, locomotion, and grabbale interacation.

## [Signature](#signature)

```
export
 declare 
class
 
AvatarAIAgent
 
extends
 
AIAgentGizmo
 
```

## [Remarks](#remarks)

For more information, see [Getting Started with Scripted Avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/getting-started-with-scripted-avatar-npcs) and [Spawning for Scripted Avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/spawning-for-scripted-avatar-npcs).

## [Properties](#properties)

|                 |                                                                     |
| --------------- | ------------------------------------------------------------------- |
| **agentPlayer** | The player controlled by the `AvatarAIAgent` object.Signature\`\`\` |
| agentPlayer     |                                                                     |
| :               |                                                                     |

ReadableHorizonProperty
<
Player

|

undefined

> ;

````|
| **grabbableInteraction**\[readonly] | The grabbable interaction capabilities of the agent.Signature```
readonly
 grabbableInteraction
:
 
AgentGrabbableInteraction
;
```      |
| **locomotion**\[readonly]           | The Locomotion capabilities of the agent.Signature```
readonly
 locomotion
:
 
AgentLocomotion
;
```                                     |

## [Methods](#methods)

|                                      |                                                                                                                                                                                                                                                                                                     |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **despawnAgentPlayer()**             | Despawns the player controlled by the `AvatarAIAgent` object.Signature```
despawnAgentPlayer
():
 
void
;
```Returnsvoid                                                                                                                                                                            |
| **getGizmoFromPlayer(player)**static | Returns the `AIAgentGizmo` that is associated with the provided player.Signature```
static
 getGizmoFromPlayer
(
player
:
 
Player
):
 
Entity
 
|
 
undefined
;
```Parametersplayer: PlayerThe player.ReturnsEntity \| undefinedThe gizmo, or undefined if no gizmo is associated with the player. |
| **spawnAgentPlayer()**               | Spawns a player controlled by the `AvatarAIAgent` object.Signature```
spawnAgentPlayer
():
 
Promise
<
AgentSpawnResult
>;
```ReturnsPromise<[AgentSpawnResult](../Enumerations/AgentSpawnResult.md)>A promise describing the results of the spawn operation.                                       |
| **toString()**                       | The ID of the `AvatarAIAgent` object.Signature```
toString
():
 
string
;
```ReturnsstringA string representation of the ID.                                                                                                                                                                        |
````

