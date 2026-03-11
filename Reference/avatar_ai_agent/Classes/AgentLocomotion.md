---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotion
---

# [AgentLocomotion Class](#agentlocomotion-class)

> [!Warning]
>
> This API is now obsolete.\
> Please use the NpcPlayer class in the horizon/npc module instead.\
> Exposes the locomotion features of an AI agent.

## [Signature](#signature)

```ts
export declare class AgentLocomotion 
```

## [Remarks](#remarks)

To use agent locomotion, you must enable Navigation Locomotion in Desktop Editor. For more information, see the [Nav Mesh Agents](../../../Desktop%20editor/NPCs/Nav%20Mesh%20Agents.md) guide.

## [Properties](#properties)

### [entity](#entity)

The entity that is attached to the agent.

**Signature**

```ts
entity: Entity;
```

### [isGrounded](#isgrounded)

Indicates whether the agent is on the ground. true if the agent is on the ground, false if the agent is above, below, or otherwise away from the ground.

**Signature**

```ts
isGrounded: ReadableHorizonProperty<boolean>;
```

### [isJumping](#isjumping)

Indicates whether the agent is performing a jump.

**Signature**

```ts
isJumping: ReadableHorizonProperty<boolean>;
```

### [isMoving](#ismoving)

Indicates whether the agent is moving.

**Signature**

```ts
isMoving: ReadableHorizonProperty<boolean>;
```

### [targetDirection](#targetdirection)

The current target direction of the agent. Undefined if the agent isn't currently rotating to a specific target direction.

**Signature**

```ts
targetDirection: ReadableHorizonProperty<Vec3 | undefined>;
```

### [targetPosition](#targetposition)

The current locomotion target of the agent. Undefined if the agent isn't currently moving.

**Signature**

```ts
targetPosition: ReadableHorizonProperty<Vec3 | undefined>;
```

## [Methods](#methods)

### [jump()](#jump)

Issues a jump command.

**Signature**

```ts
jump(): Promise<AgentLocomotionResult>;
```

**Returns**

Promise<[AgentLocomotionResult](../Enumerations/AgentLocomotionResult.md)>

A promise describing how the jump ended.

### [moveToPosition(position, options)](#movetopositionposition-options)

Issues a movement command to the agent. Issuing a new move, rotate, follow, or jump command cancels any previous move command.

**Signature**

```ts
moveToPosition(position: Vec3, options?: AgentLocomotionOptions): Promise<AgentLocomotionResult>;
```

**Parameters**

position: Vec3

The desired destination.

options: [AgentLocomotionOptions](../Type%20Aliases/AgentLocomotionOptions.md)

*(Optional)* Optional parameters.

**Returns**

Promise<[AgentLocomotionResult](../Enumerations/AgentLocomotionResult.md)>

\- A promise describing how the locomotion ended.

### [moveToPositions(path, options)](#movetopositionspath-options)

Issues a movement command along a path. Issuing a new move, rotate, follow, or jump command cancels any previous move command.

**Signature**

```ts
moveToPositions(path: Array<Vec3>, options?: AgentLocomotionOptions): Promise<AgentLocomotionResult>;
```

**Parameters**

path: Array\<Vec3>

An array of points to follow, in order.

options: [AgentLocomotionOptions](../Type%20Aliases/AgentLocomotionOptions.md)

*(Optional)* Optional parameters

**Returns**

Promise<[AgentLocomotionResult](../Enumerations/AgentLocomotionResult.md)>

\- A promise describing how the locomotion ended.

### [rotateTo(direction, options)](#rotatetodirection-options)

Issues a rotation command to change the direction the agent faces. Issuing a new move, rotate, follow, or jump command cancels any previous move command.

**Signature**

```ts
rotateTo(direction: Vec3, options?: AgentRotationOptions): Promise<AgentLocomotionResult>;
```

**Parameters**

direction: Vec3

The desired facing direction.

options: [AgentRotationOptions](../Type%20Aliases/AgentRotationOptions.md)

*(Optional)* Optional parameters.

**Returns**

Promise<[AgentLocomotionResult](../Enumerations/AgentLocomotionResult.md)>

\- A promise describing how the rotation ended.

### [stopMovement()](#stopmovement)

Stops any movement in progress.

**Signature**

```ts
stopMovement(): void;
```

**Returns**

void

