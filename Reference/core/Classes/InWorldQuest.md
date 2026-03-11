---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_inworldquest
---

# [InWorldQuest Class](#inworldquest-class)

Provides detail info of in-world quest, which is useful for player to understand quest's details and its reward item.

## [Signature](#signature)

```ts
export declare class InWorldQuest 
```

## [Remarks](#remarks)

Similar to world purchase item, [InWorldQuest.launchQuestDetailsPanel()](InWorldQuest.md#launchquestdetailspanel) is to launch the UI for quest in world.

## [Methods](#methods)

### [launchQuestDetailsPanel(player, questID) static](#launchquestdetailspanelplayer-questid-static)

Launches the quest details panel of a in-world quest for the given player.

**Signature**

```ts
static launchQuestDetailsPanel(player: Player, questID: string): void;
```

**Parameters**

player: [Player](Player.md)

The player purchasing the item.

questID: string

The ID of the in-world quest

**Returns**

void

