---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_ileaderboards
---

# [ILeaderboards Interface](#ileaderboards-interface)

The leaderboards for the players in the world.

## [Signature](#signature)

```ts
export interface ILeaderboards 
```

## [Methods](#methods)

### [setScoreForPlayer(leaderboardName, player, score, override)](#setscoreforplayerleaderboardname-player-score-override)

Sets the leaderboard score for a player.

**Signature**

```ts
setScoreForPlayer(leaderboardName: string, player: Player, score: number, override: boolean): void;
```

**Parameters**

leaderboardName: string

The name of the leader board.

player: [Player](../Classes/Player.md)

The player for whom the score is updated.

score: number

The new score.

override: boolean

If `true`, overrides the previous score; otherwise the previous score is retained.

**Returns**

void

