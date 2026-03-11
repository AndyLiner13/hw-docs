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

```ts
export declare class AgentGrabbableInteraction 
```

## [Properties](#properties)

### [entity](#entity)

The entity that is attached to the agent.

**Signature**

```ts
entity: Entity;
```

## [Methods](#methods)

### [drop(handedness)](#drophandedness)

Commands an agent to drop a held item.

**Signature**

```ts
drop(handedness: Handedness): void;
```

**Parameters**

handedness: Handedness

The hand to drop the item from.

**Returns**

void

### [getGrabbedEntity(handedness)](#getgrabbedentityhandedness)

Gets the entity currently held by the specified hand.

**Signature**

```ts
getGrabbedEntity(handedness: Handedness): Entity | undefined;
```

**Parameters**

handedness: Handedness

The hand to query.

**Returns**

Entity | undefined

\- The held entity or undefined if not holding anything.

### [grab(handedness, entity)](#grabhandedness-entity)

Commands the agent to pick up an entity.

**Signature**

```ts
grab(handedness: Handedness, entity: Entity): Promise<AgentGrabActionResult>;
```

**Parameters**

handedness: Handedness

The hand to pick up the entity with.

entity: Entity

The entity to grab. The entity must be grabbable.

**Returns**

Promise<[AgentGrabActionResult](../Enumerations/AgentGrabActionResult.md)>

\- A promise describing how the grabbing action ended.

