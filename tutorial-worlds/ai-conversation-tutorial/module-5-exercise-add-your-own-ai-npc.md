Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-5-exercise-add-your-own-ai-npc

# Module 5 - Exercise - Add Your Own AI NPC

This hands-on exercise guides you through creating and configuring your own AI NPC from scratch.

## Exercise overview

The best way to understand working with the NPCs is to actually work with them and play with the results. This exercise shows you how to add an AI NPC to this example world.

## Step-by-step instructions

### Step 1: Prepare the world

- Launch your clone of the example world in the Desktop Editor.
- Remove the invisible walls in this world which block access to the purple zone. Then add a bridge (same bridge that connects the green and blue zones) or other navigable geometry to connect the blue platform to the purple one.
  ![Removed invisible walls in tutorial world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/557449600_829681119569841_4470219053160881552_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=yefL5smxBXQQ7kNvwFXeYe1&_nc_oc=AdljllO-P_4r1iiC2PDvnTLohZ79ljwhU4KddFAkA7Dm9cKJ2g9GWHg7Isep1cnCFKY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=iZTU6U6v9DuWue4sPgfoHA&oh=00_AfjAwhmV8bvpwu6YIWfgKLpr1hHWsbh79CHtblXqTOTAOA&oe=692BF6E9)
- From the Build menu, place a new NPC gizmo in the purple zone.
  ![Placed NPC gizmo in tutorial world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/557026233_829681102903176_740010170197496294_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=LNsnVHiNjVsQ7kNvwGBPVlb&_nc_oc=Adleczb4gBgft38FxpmGcufkwuFxEm12qwxfMmymTEwZB1OHwZtCzLz_u8fHgs4YL_E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=iZTU6U6v9DuWue4sPgfoHA&oh=00_AfikLBIgOaTvblpbeCSY3hAhnGNA2IW1mBZoc7nObg2FLA&oe=692C00F5)
- Set the Conversation field to “AI” and then press “Edit Character.”
  ![Set Conversation field to AI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/557963696_829681112903175_6749923197657319270_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=An55fBY18xUQ7kNvwGK_cjl&_nc_oc=AdlaMoH6sZKS6-4x7oish1XggE0COBBMtCPJhMHpf_BI9M_EVcmUSeomzuyVlsHoeuI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=iZTU6U6v9DuWue4sPgfoHA&oh=00_AfjDdezjcXGTijR-TBJzKawFvbZcT40s0ZaDZHwOLHf6Gw&oe=692C0FF6)
- To change the AI NPC’s appearance, click **Edit Avatar**. This will launch a web editor - don’t forget to hit **Done editing** to save your edits before returning to the Desktop Editor. Then you must press the Refresh button to update the in-world appearance of the AI NPC.
- Write a backstory for the AI NPC.
  - You can use Generative AI to generate the backstories which can speed up creation. It may take trial and error to achieve the desired results.
- Write instructions for the AI NPC. These instructions can include phrases such as “Keep answers short, don’t talk much” to influence the AI NPC. Click **Save**.
  - The Conversations panel can be used to iterate the backstory.
- There are several presets for voices available so all your NPCs don’t have to sound alike. Click on the **Voice and Speech** section and make your desired changes and click **Save** again.
  ![Set AI NPC's appearance and write backstory and instructions](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/559130325_829681092903177_3292628458169079395_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=9tG_oAf-vEMQ7kNvwH638PG&_nc_oc=AdlvMN36iEsaiEsXAW3jA2RuZU21-yJeeHbpjFFfrfS_2_b-nxzuY_bzXXEp3RcO-68&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=iZTU6U6v9DuWue4sPgfoHA&oh=00_AfgKFVRkdDHFWTvXX-OC9UaZEZyqGQJQHBPS6IXkJmz4PQ&oe=692C04F0)
- If you want the AI NPC to directly interact with players, add a trigger volume to your world.
- Attach the `NpcComponent` script to your new AI NPC.
  - Select which game events the AI NPC should react to via the toggles.
  - Set an optional welcome instruction.
  - You can also set the `talkTrigger` field to the trigger volume you created.
- Configure the audio settings for the AI NPC depending on its placement and purpose.
  ![Set AI NPC's appearance and write backstory and instructions](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/558169099_829681099569843_3150817076861307462_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=y45lLl44bdYQ7kNvwF1y6Dh&_nc_oc=AdnNOSQKf6UyioczAc4nc24bd6N176txu-I5v_3q0pRP2XsSST5Jp195RvlTpco7TBc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=iZTU6U6v9DuWue4sPgfoHA&oh=00_AfhgCqscnZyjSQodSIpt-__vAyyGFA97nN8OgqBPul9SLQ&oe=692C071B)
- Test your world to see how your new AI NPC behaves in response to what you do as a player.

## Tips for Success

* Experiment with different backstories and instructions to get the desired personality
* Test your NPC with various game events to see how it responds
* Adjust audio settings based on the NPC’s location and role in your world
* Use the NPC Debugger (covered in Module 7) to troubleshoot issues