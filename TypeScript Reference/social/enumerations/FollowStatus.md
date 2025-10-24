# FollowStatus Enum

Represents the different types of follow status between two players.

## Signature

```typescript
export declare enum FollowStatus
```

## Enumeration Members

| Member | Value | Description |
|--------|-------|-------------|
| **NOT_FOLLOWING** | 0 | The player is not following the target player |
| **PENDING_FOLLOW** | 1 | The player has sent a follow request to the target player |
| **FOLLOWING** | 2 | The player is following the target player |
| **MUTUAL_FOLLOWING** | 3 | The player and the target player are following each other |