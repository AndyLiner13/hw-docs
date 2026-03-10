---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_inworldquest
---

# [InWorldQuest Class](#inworldquest-class)

Provides detail info of in-world quest, which is useful for player to understand quest's details and its reward item.

## [Signature](#signature)

```
export
 declare 
class
 
InWorldQuest
 
```

## [Remarks](#remarks)

Similar to world purchase item, [InWorldQuest.launchQuestDetailsPanel()](InWorldQuest.md#launchquestdetailspanel) is to launch the UI for quest in world.

## [Methods](#methods)

|                                                        |                                                                                           |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| \*\*launchQuestDetailsPanel(player, questID)\*\*static | Launches the quest details panel of a in-world quest for the given player.Signature\`\`\` |
| static                                                 |                                                                                           |
| launchQuestDetailsPanel                                |                                                                                           |
| (                                                      |                                                                                           |
| player                                                 |                                                                                           |
| :                                                      |                                                                                           |

Player
,
questID
:

string
):

void
;

```Parametersplayer: [Player](Player.md)The player purchasing the item.questID: stringThe ID of the in-world questReturnsvoid |
```

