Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_inworldquest

# InWorldQuest Class

Provides detail info of in-world quest, which is useful for player to understand quest's details and its reward item.

## Signature

```
export declare class InWorldQuest
```

## Remarks

Similar to world purchase item, [InWorldQuest.launchQuestDetailsPanel()](/hw-docs/Reference/core/Classes/InWorldQuest.md) is to launch the UI for quest in world.

## Methods

|  |  |
| --- | --- |
| **launchQuestDetailsPanel(player, questID)** static | Launches the quest details panel of a in-world quest for the given player.      Signature  ``` static launchQuestDetailsPanel(player: Player, questID: string): void; ```  Parameters  player: [Player](/hw-docs/Reference/core/Classes/Player.md)  The player purchasing the item.  questID: string  The ID of the in-world quest  Returns  void |