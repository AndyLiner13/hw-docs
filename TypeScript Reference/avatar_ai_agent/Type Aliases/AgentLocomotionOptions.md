# AgentLocomotionOptions Type

The options used when a movement command is issued to the agent.

## Signature

```typescript
export declare type AgentLocomotionOptions = {
    movementSpeed?: number;
    travelTime?: number;
    acceleration?: number;
    deceleration?: number;
};
```

## Properties

| Property | Type | Description |
| --- | --- | --- |
| movementSpeed | number (Optional) | The speed at which the agent moves. |
| travelTime | number (Optional) | The time it takes for the agent to reach the destination. |
| acceleration | number (Optional) | The acceleration rate of the agent. |
| deceleration | number (Optional) | The deceleration rate of the agent. |
