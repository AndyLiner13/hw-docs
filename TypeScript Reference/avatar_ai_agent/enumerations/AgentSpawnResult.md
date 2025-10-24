# AgentSpawnResult Enum

The result of a player spawn request.

## Signature

```typescript
export declare enum AgentSpawnResult
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| AlreadySpawned | 1 | This agent already has a player. |
| Error | 3 | An error has occurred. |
| Success | 0 | The player was successfully spawned. |
| WorldAtCapacity | 2 | There is no room in the world for an additional player. |