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

```ts
export declare class AvatarAIAgent extends AIAgentGizmo 
```

## [Remarks](#remarks)

For more information, see [Getting Started with Scripted Avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/getting-started-with-scripted-avatar-npcs) and [Spawning for Scripted Avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/spawning-for-scripted-avatar-npcs).

## [Properties](#properties)

### [agentPlayer](#agentplayer)

The player controlled by the `AvatarAIAgent` object.

**Signature**

```ts
agentPlayer: ReadableHorizonProperty<Player | undefined>;
```

### [grabbableInteraction \[readonly\]](#grabbableinteraction-readonly)

The grabbable interaction capabilities of the agent.

**Signature**

```ts
readonly grabbableInteraction: AgentGrabbableInteraction;
```

### [locomotion \[readonly\]](#locomotion-readonly)

The Locomotion capabilities of the agent.

**Signature**

```ts
readonly locomotion: AgentLocomotion;
```

## [Methods](#methods)

### [despawnAgentPlayer()](#despawnagentplayer)

Despawns the player controlled by the `AvatarAIAgent` object.

**Signature**

```ts
despawnAgentPlayer(): void;
```

**Returns**

void

### [getGizmoFromPlayer(player) static](#getgizmofromplayerplayer-static)

Returns the `AIAgentGizmo` that is associated with the provided player.

**Signature**

```ts
static getGizmoFromPlayer(player: Player): Entity | undefined;
```

**Parameters**

player: Player

The player.

**Returns**

Entity | undefined

The gizmo, or undefined if no gizmo is associated with the player.

### [spawnAgentPlayer()](#spawnagentplayer)

Spawns a player controlled by the `AvatarAIAgent` object.

**Signature**

```ts
spawnAgentPlayer(): Promise<AgentSpawnResult>;
```

**Returns**

Promise<[AgentSpawnResult](../Enumerations/AgentSpawnResult.md)>

A promise describing the results of the spawn operation.

### [toString()](#tostring)

The ID of the `AvatarAIAgent` object.

**Signature**

```ts
toString(): string;
```

**Returns**

string

A string representation of the ID.

