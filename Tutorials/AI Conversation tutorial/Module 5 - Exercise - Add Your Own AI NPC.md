Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-5-exercise-add-your-own-ai-npc

# Module 5 - Exercise - Add Your Own AI NPC

This hands-on exercise guides you through creating and configuring your own AI NPC from scratch.

## Exercise overview

The best way to understand working with the NPCs is to actually work with them and play with the results. This exercise shows you how to add an AI NPC to this example world.

## Step-by-step instructions

### Step 1: Prepare the world

- Launch your clone of the example world in the Desktop Editor.
- Remove the invisible walls in this world which block access to the purple zone. Then add a bridge (same bridge that connects the green and blue zones) or other navigable geometry to connect the blue platform to the purple one.
  ![Removed invisible walls in tutorial world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/557449600_829681119569841_4470219053160881552_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=CN7-VqWa2ScQ7kNvwE8_ukV&_nc_oc=AdmCoWloPTnV-GptuaupiZXJTEvksASTYmZSFNkxweivoF8gmOEtrXcqhuqFseYeong&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-ycP3cWWCyblT9egBCI9EA&oh=00_AfkoPgahOFA9g3U5HhkJXj8WlNeE1KefjV7kOlkxotNvcQ&oe=694BD329)
- From the Build menu, place a new NPC gizmo in the purple zone.
  ![Placed NPC gizmo in tutorial world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/557026233_829681102903176_740010170197496294_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=nFzGqfa-KgUQ7kNvwFwG_w2&_nc_oc=AdlWn-2JgoAaY0d8lig44c4UaY0muXRg5q256LhIydCS5zjJtSiOQyfkctpQvIU1wQI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-ycP3cWWCyblT9egBCI9EA&oh=00_AfkjJp9BL0w-knVo1ev5THPM1041mKq_37Qwm9bEa6mKUw&oe=694BDD35)
- Set the Conversation field to “AI” and then press “Edit Character.”
  ![Set Conversation field to AI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/557963696_829681112903175_6749923197657319270_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=wM3wRDxyiXQQ7kNvwFQVLxf&_nc_oc=AdnqR_QebHEL-3Xn65p6CjCyMlEP81s7jLsuMEoPcp4UZ5HPdROq1Drz7KTMU8sgdLQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-ycP3cWWCyblT9egBCI9EA&oh=00_AflK4NDQ7viJHytyQs4K0RvnhCSCD1sYHO8mIhBwff0dNA&oe=694BEC36)
- To change the AI NPC’s appearance, click **Edit Avatar**. This will launch a web editor - don’t forget to hit **Done editing** to save your edits before returning to the Desktop Editor. Then you must press the Refresh button to update the in-world appearance of the AI NPC.
- Write a backstory for the AI NPC.
  - You can use Generative AI to generate the backstories which can speed up creation. It may take trial and error to achieve the desired results.
- Write instructions for the AI NPC. These instructions can include phrases such as “Keep answers short, don’t talk much” to influence the AI NPC. Click **Save**.
  - The Conversations panel can be used to iterate the backstory.
- There are several presets for voices available so all your NPCs don’t have to sound alike. Click on the **Voice and Speech** section and make your desired changes and click **Save** again.
  ![Set AI NPC's appearance and write backstory and instructions](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/559130325_829681092903177_3292628458169079395_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=75QZHuKzieYQ7kNvwE6LDpc&_nc_oc=AdkrCq62xdbjQ4W7On0BHdF6SRTKxy4nOmyALmk81fnm6fpZgzhcNDciCKfpnJvqMZY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-ycP3cWWCyblT9egBCI9EA&oh=00_Afm0lEkesjp3RArSVEXfJCWBeE30vUkI8Nyl31bJRhQpVQ&oe=694BE130)
- If you want the AI NPC to directly interact with players, add a trigger volume to your world.
- Attach the `NpcComponent` script to your new AI NPC.
  - Select which game events the AI NPC should react to via the toggles.
  - Set an optional welcome instruction.
  - You can also set the `talkTrigger` field to the trigger volume you created.
- Configure the audio settings for the AI NPC depending on its placement and purpose.
  ![Set AI NPC's appearance and write backstory and instructions](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558169099_829681099569843_3150817076861307462_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=xsXU_ePNde8Q7kNvwEqQ-ee&_nc_oc=Adm5jy52kdAro_I5RJX0wR-HopVJ98MNlQ3p4rL7f4a1Vz3cvbj-_rzAwmGdhasPvWY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-ycP3cWWCyblT9egBCI9EA&oh=00_Afk-c5R9OdVejux74Y_XTOW-5wbode6HL-FWqnQarnDFTw&oe=694BE35B)
- Test your world to see how your new AI NPC behaves in response to what you do as a player.

## Tips for Success

* Experiment with different backstories and instructions to get the desired personality
* Test your NPC with various game events to see how it responds
* Adjust audio settings based on the NPC’s location and role in your world
* Use the NPC Debugger (covered in Module 7) to troubleshoot issues