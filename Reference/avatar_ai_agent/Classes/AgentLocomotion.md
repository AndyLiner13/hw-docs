Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotion

# AgentLocomotion Class

> Warning: This API is now obsolete.
> Please use the NpcPlayer class in the horizon/npc module instead.
> Exposes the locomotion features of an AI agent.

## Signature

```
export declare class AgentLocomotion
```

## Remarks

To use agent locomotion, you must enable Navigation Locomotion in Desktop Editor. For more information, see the [Nav Mesh Agents](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/nav-mesh-agents) guide.

## Properties

|  |  |
| --- | --- |
| **entity** | The entity that is attached to the agent.      Signature  ``` entity: Entity; ``` |
| **isGrounded** | Indicates whether the agent is on the ground. true if the agent is on the ground, false if the agent is above, below, or otherwise away from the ground.      Signature  ``` isGrounded: ReadableHorizonProperty<boolean>; ``` |
| **isJumping** | Indicates whether the agent is performing a jump.      Signature  ``` isJumping: ReadableHorizonProperty<boolean>; ``` |
| **isMoving** | Indicates whether the agent is moving.      Signature  ``` isMoving: ReadableHorizonProperty<boolean>; ``` |
| **targetDirection** | The current target direction of the agent. Undefined if the agent isn't currently rotating to a specific target direction.      Signature  ``` targetDirection: ReadableHorizonProperty<Vec3 | undefined>; ``` |
| **targetPosition** | The current locomotion target of the agent. Undefined if the agent isn't currently moving.      Signature  ``` targetPosition: ReadableHorizonProperty<Vec3 | undefined>; ``` |

## Methods

|  |  |
| --- | --- |
| **jump()** | Issues a jump command.      Signature  ``` jump(): Promise<AgentLocomotionResult>; ```  Returns  Promise<[AgentLocomotionResult](https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotionresult)>  A promise describing how the jump ended. |
| **moveToPosition(position, options)** | Issues a movement command to the agent. Issuing a new move, rotate, follow, or jump command cancels any previous move command.      Signature  ``` moveToPosition(position: Vec3, options?: AgentLocomotionOptions): Promise<AgentLocomotionResult>; ```  Parameters  position: Vec3  The desired destination.  options: [AgentLocomotionOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotionoptions)  *(Optional)* Optional parameters.  Returns  Promise<[AgentLocomotionResult](https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotionresult)>  - A promise describing how the locomotion ended. |
| **moveToPositions(path, options)** | Issues a movement command along a path. Issuing a new move, rotate, follow, or jump command cancels any previous move command.      Signature  ``` moveToPositions(path: Array<Vec3>, options?: AgentLocomotionOptions): Promise<AgentLocomotionResult>; ```  Parameters  path: Array<Vec3>  An array of points to follow, in order.  options: [AgentLocomotionOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotionoptions)  *(Optional)* Optional parameters  Returns  Promise<[AgentLocomotionResult](https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotionresult)>  - A promise describing how the locomotion ended. |
| **rotateTo(direction, options)** | Issues a rotation command to change the direction the agent faces. Issuing a new move, rotate, follow, or jump command cancels any previous move command.      Signature  ``` rotateTo(direction: Vec3, options?: AgentRotationOptions): Promise<AgentLocomotionResult>; ```  Parameters  direction: Vec3  The desired facing direction.  options: [AgentRotationOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentrotationoptions)  *(Optional)* Optional parameters.  Returns  Promise<[AgentLocomotionResult](https://developers.meta.com/horizon-worlds/reference/2.0.0/avatar_ai_agent_agentlocomotionresult)>  - A promise describing how the rotation ended. |
| **stopMovement()** | Stops any movement in progress.      Signature  ``` stopMovement(): void; ```  Returns  void |