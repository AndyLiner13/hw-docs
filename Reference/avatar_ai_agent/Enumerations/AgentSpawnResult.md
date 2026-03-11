---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentspawnresult
---

# [AgentSpawnResult Enum](#agentspawnresult-enum)

> [!Warning]
>
> This API is now obsolete.\
> Please use the NpcPlayerSpawnResult enum and Npc class in the horizon/npc module instead.\
> The result of a player spawn request

\\\*

## [Signature](#signature)

```ts
export declare enum AgentSpawnResult 
```

## [Enumeration Members](#enumeration-members)

| Member          | Value | Description                                             |
| --------------- | ----- | ------------------------------------------------------- |
| AlreadySpawned  | `1`   | This agent already has a player.                        |
| Error           | `3`   | An error has occured.                                   |
| Success         | `0`   | The player was successfully spawned                     |
| WorldAtCapacity | `2`   | There is no room in the world for an additional player. |

