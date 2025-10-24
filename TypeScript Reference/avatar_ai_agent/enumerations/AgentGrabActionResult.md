# AgentGrabActionResult Enum

The result of a request for an agent to pick up an entity.

## Signature

```typescript
export declare enum AgentGrabActionResult
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| AlreadyHolding | 1 | The request failed because another entity is already being held. |
| InvalidEntity | 3 | The entity is not grabbable. |
| NotAllowed | 2 | The agent is not allowed to hold the entity. |
| Success | 0 | The entity was successfully picked up. |