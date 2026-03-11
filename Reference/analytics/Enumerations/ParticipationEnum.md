---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_participationenum
---

# [ParticipationEnum Enum](#participationenum-enum)

The participation state of a player in a world instance.

## [Signature](#signature)

```ts
export declare enum ParticipationEnum 
```

## [Enumeration Members](#enumeration-members)

| Member              | Value                 | Description                                  |
| ------------------- | --------------------- | -------------------------------------------- |
| AFK                 | `"AFK"`               | The player is AFK (away from the keyboard).  |
| BETWEEN\_ROUNDS     | `"IN_BETWEEN_ROUNDS"` | The player is in between game rounds.        |
| IN\_BETWEEN\_STAGES | `"IN_BETWEEN_STAGES"` | The player is in between game stages.        |
| IN\_LOBBY           | `"IN_LOBBY"`          | The player is in the game lobby.             |
| IN\_ROUND           | `"IN_ROUND"`          | The player is participating in a game round. |
| NONE                | `"NONE"`              | No player state.                             |

