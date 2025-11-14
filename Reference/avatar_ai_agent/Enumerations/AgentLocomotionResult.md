Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotionresult

# AgentLocomotionResult Enum

> Warning: This API is now obsolete.
> Please use the NpcLocomotionResult enum and NpcPlayer class in the horizon/npc module instead.
> The possible results of a move action for an NPC agent.

## Signature

```
export declare enum AgentLocomotionResult
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Canceled | `1` | The action is canceled. |
| Complete | `0` | The action is complete. |
| Error | `2` | An error occured when attempting the action. |