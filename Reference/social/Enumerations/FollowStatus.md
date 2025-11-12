Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/social_followstatus

API reference

# FollowStatus Enum

Represents the different types of follow status between two players.

## Signature

```
export declare enum FollowStatus
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| FOLLOWING | `2` | The player is following the target player |
| MUTUAL\_FOLLOWING | `3` | The player and the target player are following each other |
| NOT\_FOLLOWING | `0` | The player is not following the target player |
| PENDING\_FOLLOW | `1` | The player has sent a follow request to the target player |