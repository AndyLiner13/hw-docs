Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/scripted-avatar-npc-tutorial/module-6-summary

Learn

# Module 6 - Summary

Thanks for joining us in Gem Jam! This tutorial world has demonstrated the Scripted Avatar NPC feature and includes two working examples, which are brought to life with visual design, navigation, animation, and voice.

In addition to learning more about NPCs, you have seen a rudimentary system for managing quests within your world, including how to define, mark as complete, reset and refresh the quests of the world.

Take any part or all of the tutorial for use in your own worlds!

**Note**: You cannot export and import avatar NPCs into worlds that you own. These entities are owned by the owner of the source world and cannot be modified by non-owners. Instead, have fun designing your own avatars and then attach the scripts from this world to bring them to life.

## Extending the Tutorial

If interested, you can continue learning about the features of this world by exploring these avenues of extending the tutorial in new directions.

### Replace NPCs

If you want to create your own NPCs for this world, you can do the following:

* Add the NPC gizmo to your world.
* In the Properties panel, click **Edit Avatar**. Design your own avatar.
* To connect your avatar to the code of this world:
  + Position the new avatar in the same location as the old one.
  + In the hierarchy panel, drag all of the audio assets from under the old avatar to the new one.
  + Move the old avatar out of the way.
  + In the properties for the NPC Manager object, set the Village Elder or Traveling Merchant property to point to your new avatar.
* Preview the world to verify that all is working.

### Insert Your Own Audio

If you replace the avatars, you may want to record your own audio. Keep track of the mapping between your asset names and where the voice is to be used in the world. Then, add them as entities in the world.

**Tip**: Sound entities must be added beneath the avatar to which they apply.

You can then populate the properties under the `SoundBank` entity by selecting the entities that you have added as replacements.

In `NPCAudioPlayback.ts` , which is the script that is attached to the `SoundBank` entity, you can build the arrays from the assets that you have added to the world.

**Tip**: You can add or remove variations of assets by changing the arrays in `NPCAudioPlayback.ts`.

### Add Quests

You can add new quests as needed:

* Create a new quest through the **Systems menu > Quests** in the Desktop Editor.
  **Note**: Make sure you retain the value of the Script ID. This value is needed in code and cannot be changed after you create the quest.
  + For a Tracked quest, you may need to first create the persistent variable or variables that are used to evaluate the success criteria for the quest.
* In `QuestManager.ts`, add the Script ID as a new value in the `QuestNames` enum.
* In your code, you must determine where and how the quest is completed.
  + For quests of Simple type, create a `sendLocalBroadcast` event like the following in the location where you know that the quest has been completed:

```
this.sendLocalBroadcastEvent( questComplete, {player: ps.player, questName: QuestNames.QuestMyNewQuest } );
```

* For Tracked quests, the evaluation of the persistent variable criteria should automatically determine progress and completion of the quest.

#### Quest exercise

You might try to do the following as an exercise:

* Create a Simple quest called `questWinGame`. This quest is resolved when all other quests have been completed.
* When any quest completes, there should be a check to see if all quests have been completed.
  + This tutorial includes multiple examples of iterating over the keys of the `QuestNames` enum to evaluate the state of a quest.
  + If no quest is `false`, then the game is won.
* When the game wins, you should play a special sound and, if available, a visual effect.
* What code needs to be executed after the game is over? What code needs to be executed to reset the world?