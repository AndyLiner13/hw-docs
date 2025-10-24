# NpcEngagementPhase Enum

Represents the NPC's conversation engagement phase. This phase is only informational. Currently, engagement with certain users can be triggered using the [NpcAttentionTarget](https://developers.meta.com/horizon-worlds/reference/2.0.0/npc_npcattentiontarget) indicated by the `NpcConversation.elicitResponse()` or `NpcConversation.speak()` method.

## Signature

```typescript
export declare enum NpcEngagementPhase
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Idle | 0 | The NPC is idle and can start a conversation anytime. No user is engaged yet. New instructions can be processed by the NPC. |
| Listening | 1 | The NPC is listening to the user. Listening to the user isn't currently supported. |
| Reacting | 2 | The NPC is processing input and formulating a response based on instructions from NpcConversation.elicitResponse() method. |
| Responding | 3 | The NPC is speaking. This phase can be triggered by the NpcConversation.speak() and NpcConversation.elicitResponse() methods. Certain users can be engaged with the NPC if the NpcAttentionTargets parameter of the NpcConversation.elicitResponse() method specifies a player in the world. New instructions are queued when the NPC is responding. The responding phase is transited again during the yielding and reacting phases if there's more instructions in the queue. |
| Yielding | 4 | The NPC finished speaking and is waiting for further instructions. The NpcAttentionTarget is still engaged. The NPC can process new instructions. |
| FocusedIdle | 5 | The NPC is idle and can process new instructions. The NpcAttentionTarget is still engaged with the NPC. |