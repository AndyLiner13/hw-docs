---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/ai-conversation-tutorial/module-5-exercise-add-your-own-ai-npc
---

# [Module 5 - Exercise - Add Your Own AI NPC](#module-5---exercise---add-your-own-ai-npc)

This hands-on exercise guides you through creating and configuring your own AI NPC from scratch.

## [Exercise overview](#exercise-overview)

The best way to understand working with the NPCs is to actually work with them and play with the results. This exercise shows you how to add an AI NPC to this example world.

## [Step-by-step instructions](#step-by-step-instructions)

### [Step 1: Prepare the world](#step-1-prepare-the-world)

1. Launch your clone of the example world in the Desktop Editor.
2. Remove the invisible walls in this world which block access to the purple zone. Then add a bridge (same bridge that connects the green and blue zones) or other navigable geometry to connect the blue platform to the purple one. ![Removed invisible walls in tutorial world](../../../_assets/images/4db647561b0754e9539dd32cce472c5956c386f1577150c818e9f619f52e2aee.png)
3. From the Build menu, place a new NPC gizmo in the purple zone. ![Placed NPC gizmo in tutorial world](../../../_assets/images/4801b84cfadacbe6e06e85201f87e9ac7c3f75539edcd76ddc2cffc044d79cd8.png)
4. Set the Conversation field to “AI” and then press “Edit Character.” ![Set Conversation field to AI](../../../_assets/images/da86733ae217dca015c991fba5dfcf5a3f7a1df2d99c7f93fe227974099f2707.png)
5. To change the AI NPC’s appearance, click **Edit Avatar**. This will launch a web editor - don’t forget to hit **Done editing** to save your edits before returning to the Desktop Editor. Then you must press the Refresh button to update the in-world appearance of the AI NPC.
6. Write a backstory for the AI NPC.
   1. You can use Generative AI to generate the backstories which can speed up creation. It may take trial and error to achieve the desired results.
7. Write instructions for the AI NPC. These instructions can include phrases such as “Keep answers short, don’t talk much” to influence the AI NPC. Click **Save**.
   1. The Conversations panel can be used to iterate the backstory.
8. There are several presets for voices available so all your NPCs don’t have to sound alike. Click on the **Voice and Speech** section and make your desired changes and click **Save** again. ![Set AI NPC's appearance and write backstory and instructions](../../../_assets/images/0d8e02c2c46caff6dfd6d8c82c92589f6e4934c5deedf65704d164d801f13794.png)
9. If you want the AI NPC to directly interact with players, add a trigger volume to your world.
10. Attach the `NpcComponent` script to your new AI NPC.
    1. Select which game events the AI NPC should react to via the toggles.
    2. Set an optional welcome instruction.
    3. You can also set the `talkTrigger` field to the trigger volume you created.
11. Configure the audio settings for the AI NPC depending on its placement and purpose. ![Set AI NPC's appearance and write backstory and instructions](../../../_assets/images/c8b60f946ad6fdea0addfb9ddbb59a89b677af97b0fca03c00d86f8b51605dc3.png)
12. Test your world to see how your new AI NPC behaves in response to what you do as a player.

## [Tips for Success](#tips-for-success)

- Experiment with different backstories and instructions to get the desired personality
- Test your NPC with various game events to see how it responds
- Adjust audio settings based on the NPC’s location and role in your world
- Use the NPC Debugger (covered in Module 7) to troubleshoot issues

