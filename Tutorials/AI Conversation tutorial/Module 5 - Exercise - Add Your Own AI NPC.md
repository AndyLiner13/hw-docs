Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-5-exercise-add-your-own-ai-npc

# Module 5 - Exercise - Add Your Own AI NPC

This hands-on exercise guides you through creating and configuring your own AI NPC from scratch.

## Exercise overview

The best way to understand working with the NPCs is to actually work with them and play with the results. This exercise shows you how to add an AI NPC to this example world.

## Step-by-step instructions

### Step 1: Prepare the world

- Launch your clone of the example world in the Desktop Editor.
- Remove the invisible walls in this world which block access to the purple zone. Then add a bridge (same bridge that connects the green and blue zones) or other navigable geometry to connect the blue platform to the purple one.
  ![Removed invisible walls in tutorial world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/557449600_829681119569841_4470219053160881552_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=z438NixC-8cQ7kNvwGLyKNp&_nc_oc=Adke-toPCtHmBzMBh7v0YMVHMkAH113WtwFA_6TQ0IgIXupeB9iHMhwcl5jTByrTOuU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=538VabnTtNyO_Ptd5wwTmw&oh=00_AfgiJGPIvc63ER7tbsw6lkFfTONvnAni8Rt2RJyNsA1kTg&oe=69313CE9)
- From the Build menu, place a new NPC gizmo in the purple zone.
  ![Placed NPC gizmo in tutorial world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/557026233_829681102903176_740010170197496294_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=d2Gd3HmDU5QQ7kNvwHBlam-&_nc_oc=AdlEA6lWJRKmMaqhD-jIVd8u0mZklh3Eepx60qNBTduChPtrpoem1lH2H-67U64A7NU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=538VabnTtNyO_Ptd5wwTmw&oh=00_AfiWPsBp9N4D08jQ-mdR5ThT7IvrfsR_f5fctGelt2Cf2A&oe=693146F5)
- Set the Conversation field to “AI” and then press “Edit Character.”
  ![Set Conversation field to AI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/557963696_829681112903175_6749923197657319270_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=jZ3mLpzTDSAQ7kNvwF0jbl1&_nc_oc=AdkyRPJh2wrhQR1381EHSwCRQLC-ahbzqgqx53fHIT0xjGl2m6BHtBDgbVX6YlO3OHo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=538VabnTtNyO_Ptd5wwTmw&oh=00_AfgEs99WI7EB9U6Dbyafc7ojE1jCRlGPogiVD2RVgzG0aA&oe=69311DB6)
- To change the AI NPC’s appearance, click **Edit Avatar**. This will launch a web editor - don’t forget to hit **Done editing** to save your edits before returning to the Desktop Editor. Then you must press the Refresh button to update the in-world appearance of the AI NPC.
- Write a backstory for the AI NPC.
  - You can use Generative AI to generate the backstories which can speed up creation. It may take trial and error to achieve the desired results.
- Write instructions for the AI NPC. These instructions can include phrases such as “Keep answers short, don’t talk much” to influence the AI NPC. Click **Save**.
  - The Conversations panel can be used to iterate the backstory.
- There are several presets for voices available so all your NPCs don’t have to sound alike. Click on the **Voice and Speech** section and make your desired changes and click **Save** again.
  ![Set AI NPC's appearance and write backstory and instructions](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/559130325_829681092903177_3292628458169079395_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=JWfOrnf-PucQ7kNvwEGL2b1&_nc_oc=Adm6E2W54ozrlT21bS6BcZPQk8YYgpVugG39aX_9anC8_GPLt37oRFEjKf5UUcuFCW8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=538VabnTtNyO_Ptd5wwTmw&oh=00_AfifGVY2wv2ACfky1UPlQTiZKzIWp2OKG6t6FHL1RtwdpA&oe=69314AF0)
- If you want the AI NPC to directly interact with players, add a trigger volume to your world.
- Attach the `NpcComponent` script to your new AI NPC.
  - Select which game events the AI NPC should react to via the toggles.
  - Set an optional welcome instruction.
  - You can also set the `talkTrigger` field to the trigger volume you created.
- Configure the audio settings for the AI NPC depending on its placement and purpose.
  ![Set AI NPC's appearance and write backstory and instructions](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558169099_829681099569843_3150817076861307462_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=FZ5EF5mP17gQ7kNvwGbY4Ok&_nc_oc=AdkMzwrL_w-IIBaV9yo0jByrH3vJgLpKJLvsNDwsk8ADOKR85KTkTMdluvGwVjtbZvM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=538VabnTtNyO_Ptd5wwTmw&oh=00_Afiu3cIabmiYnwc4wwXn031t_WILj7v1zqnbmv_gD_Yo-A&oe=693114DB)
- Test your world to see how your new AI NPC behaves in response to what you do as a player.

## Tips for Success

* Experiment with different backstories and instructions to get the desired personality
* Test your NPC with various game events to see how it responds
* Adjust audio settings based on the NPC’s location and role in your world
* Use the NPC Debugger (covered in Module 7) to troubleshoot issues