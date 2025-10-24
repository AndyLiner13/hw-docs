# AvatarAIAgent Class

Extends AIAgentGizmo. An AI-powered NPC that scripts can spawn and despawn at runtime and is represented by a player avatar. `AvatarAIAgent` objects are also capable of pathfinding, locomotion, and grabbable interaction.

## Signature

```typescript
export declare class AvatarAIAgent extends AIAgentGizmo
```

## Remarks

For more information, see [Getting Started with Scripted Avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/getting-started-with-scripted-avatar-npcs) and [Spawning for Scripted Avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/spawning-for-scripted-avatar-npcs).

## Properties

| Property | Description |
| --- | --- |
| agentPlayer | The player controlled by the AvatarAIAgent object. Signature: `agentPlayer: ReadableHorizonProperty<Player \| undefined>;` |
| grabbableInteraction [readonly] | The grabbable interaction capabilities of the agent. Signature: `readonly grabbableInteraction: AgentGrabbableInteraction;` |
| locomotion [readonly] | The Locomotion capabilities of the agent. Signature: `readonly locomotion: AgentLocomotion;` |

## Methods

| Method | Description |
| --- | --- |
| despawnAgentPlayer() | Despawns the player controlled by the AvatarAIAgent object. Signature: `despawnAgentPlayer(): void;` Returns: void |
| getGizmoFromPlayer(player) static | Returns the AIAgentGizmo that is associated with the provided player. Signature: `static getGizmoFromPlayer(player: Player): Entity \| undefined;` Parameters: player: Player - The player. Returns: Entity \| undefined - The gizmo, or undefined if no gizmo is associated with the player. |
| spawnAgentPlayer() | Spawns a player controlled by the AvatarAIAgent object. Signature: `spawnAgentPlayer(): Promise<AgentSpawnResult>;` Returns: Promise<AgentSpawnResult> - A promise describing the results of the spawn operation. |
| toString() | The ID of the AvatarAIAgent object. Signature: `toString(): string;` Returns: string - A string representation of the ID. |