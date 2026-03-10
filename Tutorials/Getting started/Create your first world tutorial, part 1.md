---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started/create-your-first-world
---

# [Create your first world tutorial, part 1](#create-your-first-world-tutorial-part-1)

Welcome to part 1 of the create your first world tutorial. In this tutorial you’ll learn how to create a basic new world, hosting a simple game where you shoot marauding skeletons in a graveyard.

This first part shows you how to create a new world, place an asset in the world, manipulate it using the desktop editor, then preview the world and playtest it on a mobile device. If you’re looking for the second half of the tutorial, go to the [Create your first world tutorial, part 2](Create%20your%20first%20world%20tutorial%2C%20part%202.md).

The key things you should learn from this module are the following:

- Setting up your tooling
- Creating a new world
- Selecting assets to use in your world and learning how to manipulate them
- Previewing your world for playtesting
- Playtesting in your world on your mobile device

**Note**: This tutorial assumes that you’ve completed the prerequisites discussed in [Intro Tutorial Overview](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world-intro).

## [Step 1: Create a new world](#step-1-create-a-new-world)

*In this section, you’ll create a new world for your game.*

1. Open the Worlds desktop editor.

   ![The Start button on the app icon](../../_assets/images/cfc46914ec433fe52f29843d0d202b5de9360301c8b56c18f046f59123c7428b.png)

2. On the **Creation Home** page, click **New World**.

   ![The New World button](../../_assets/images/e940ced3251dc124ca3d0c0996c88cb758746c16e82393fbc0c219f30b2e252e.png)

3. When the desktop editor opens, click **Rename World** from the main menu.

   ![The Rename World option](../../_assets/images/2b1540f15d1e916c5ff20fb7fa8c5cbdf5aa633388c158db888df4f95c67041b.png)

4. Provide a name for your new world

   ![Providing a name for your new world](../../_assets/images/fc5b0e706bef73acd1b46830162f970927881f5a6cf3de0831eb9b893660a88e.png)

   **Note**: If you do not provide a name for your new world, it will still exist and be saved as normal. However, the next time you open it, it will be called “New World” with the count of how many worlds you’ve created without names appended to it (for instance, “New World 4.” If you do this several times, you may end up with multiple worlds called by similar names, potentially causing confusion. You can always rename it to something else at a later time.

5. Click **Save**.

**Note**: Meta Horizon Worlds automatically saves your progress as you go.

## [Step 2: Place assets in the scene](#step-2-place-assets-in-the-scene)

Assets are objects that you can place in your world so that players can interact with them. Tables, chairs, laser guns, doors, and so on, are all potentially assets you can use. There are many assets created both by Worlds developers and by other creators that are available in the public asset library, which you’ll use in this tutorial. Public assets are displayed on the **Public Assets** panel of the **Assets Library** tab in the center bottom of the desktop editor. You can also create your own assets, which are stored in the **My Assets** panel of the same tab.

In this section, you will learn how to place an asset from the public assets into your scene. (Just like in a movie, a *scene* is a sequence of continuous action that’s usually oriented around a particular location. Many games consist of many scenes, although this one includes just one).

The **Scene** panel is the large window in the middle of the desktop editor. It shows the scene that you are currently working on, letting you see what it looks like so far. When you add assets to a scene, this is where they appear. **Note**: To learn more about this part of the UI (user interface), see [Panels and tabs in the desktop editor](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md).

1. On the **Asset Library** tab, select **Public Assets**.

   ![Select \*\*Public Assets\*\*](../../_assets/images/987608b8e657049c8542c8935e0381f20e9d94ae1164cc4e60732734a2b3c597.png)

2. In the search field, search for *Unfinished Graveyard* in the search field.

   ![The asset search box](../../_assets/images/acfee8c3e40cbcb81f2768fb899666c8595fc0ab2f497479bfca393e08e3420e.png)

3. When the asset is shown, drag it into the **Scene** panel. This will place the the *unfinished graveyard* withing the scene you’re working on.

   ![Placing the graveyard](../../_assets/images/516a48a6dd99b2f5ffdec4ec8a088b66395f0856e520411116dad7ebfc1e8b7d.png)

4. In the **Hierarchy** panel, select **MyFirstWorld**.

   ![The Hierarchy panel](../../_assets/images/8142ed0d730fb903d32e8ddc593f4b26aa9483fdeeaaa39f250a5a6e126cfc92.png)

   Then, in the **Properties** panel, enter *0*, *0*, *0* for the **Position** and **Rotation** values.

   ![Changing the position and rotation.](../../_assets/images/983abb624d486b55160868bd230e7409896d6eed8b71d683b45c891ae494730b.png)

   The **Hierarchy** panel shows you the list of objects in the current scene. You can use this panel to sort and group the objects as needed. By selecting a particular object in the panel, you can see (and edit) the various properties of that object in the **Properties** panel. In this case, by selecting the top level of the hierarchy (**MyFirstWorld**), this allows you to change the position and rotation for all the child objects under that parent object.

   To explore this subject in greater depth, see the [Hierarchy panel overview](../../Desktop%20editor/Hierarchy%20window/Hierarchy%20panel%20overview.md) and the [Properties panel](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-panel).

5. Center the graveyard in the scene panel by moving the camera to get a better view. There are many different key shortcuts for doing maneuvering the camera, but the ones you’ll probably use the most are:

   - **Up**: Right-click + E
   - **Down**: Right-click + Q
   - **Left**: Arrow Left, or right-click + A
   - **Right**: Arrow Right, or right-click + D
   - **Forward**: Arrow Up, or right-click (on your mouse) + W
   - **Back**: Arrow Down, or right-click + S

   You can find a full list of the shortcuts by clicking **Keyboard Shortcuts** on the main menu.

   ![Keyboard shortcuts](../../_assets/images/d79d7224327caaf22d3f98dad192d040b81a0c0274df0da761efef65ceec6552.png)

   **Note**: It’s often much easier to work on specific areas of a scene when they’re center-stage. Being able to move the camera can also help you select a particular object when you don’t know the name its been given.

6. In the **Hierarchy** panel, select **SpawnPoint**.

   ![Selecting the SpawnPoint](../../_assets/images/89d8fa51085c54f06bd03e4f3bc4c6201bc24060c2bd2a31ed9539cfc1e5575e.png)

   This selects the player avatar and lets you move to a new position within the scene. **Note**: A *SpawnPoint* is a designated location within game where players appear (or “spawn”) when they enter the world. These are important for managing player entry and movement within the game.

7. Focus your camera on the avatar by pressing the **F** key.

   ![Focusing the camera on the avatar](../../_assets/images/5e10393fe8f7bea693eb78791100c770109022e36502446970b566bc713b205d.png)

8. Select the **Move** tool to move the avatar around the scene.

   ![The Move tool](../../_assets/images/91bf6ae81218332a2b4cf7208a57c3443fd268f9144958ec22c4df63fb8bb545.png)

   When you click the **Move** tool with the avatar selected, a small three-dimensional (3D) coordinate system appears on the object.

   ![The 3D coordinate system](../../_assets/images/6634f09a41cbe75e725606a4c0d94b272c419f4f3f4744ab12445386389d33c1.png)

   It has arrows going along the red X (left-right), green Y (up-down), and blue Z (forward-back) directions. You can move the avatar in any of those directions by clicking and dragging on one of the arrows.

9. Select the **Rotate** tool to rotate the avatar about its center or pivot point.

   ![The Rotate tool](../../_assets/images/7d9a4d74d7e709c10807e3f3d9d3235d70132ff8fe2366e72b3bb2af80bab1eb.png)

   When you click the **Rotate** tool with an object selected, a small three-dimensional (3D) set of angles appears on the object.

   ![The 3D rotational angles](../../_assets/images/b08c5943486f9b4d93ede3a9a636cb01a4e07eece56f0e857e71ce23e9d4f2da.png)

   Each angle shows the rotation around the center point of the avatar: the red X (horizontal), green Y (vertical), and the blue Z (forward-back) directions. You can rotate the avatar in any of those directions by clicking the angle and dragging it so that the object rotates the desired amount.

10. Adjust the camera to view the scene more easily, if needed.

    You can:

    - Orbit the camera around the avatar by holding Alt + the left mouse button while you drag the mouse.
    - Pan the camera using the left and right arrow keys, or by clicking the mouse scroll wheel and dragging the mouse.
    - Zoom in and out by rolling the mouse scroll wheel.

11. Use the **Move** and **Rotate** tools to move the avatar so that it will face the front of the tombstones in the graveyard. This will be the player’s starting position. ![Facing the tombstones](../../_assets/images/c949df1680897059916dda6cb0f972823bf5aacdf1b0316c73d5128d5d5e1862.png)

## [Step 3: Previewing your progress](#step-3-previewing-your-progress)

Playtesting your game during and after you’ve finished creating it is an essential part of being a Worlds creator. As experienced developers know, it’s too easy to miss essential things if you don’t playtest it enough.

For additional information on doing this, see [Preview](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md).

1. Click the play button to enter preview mode.

   ![The Play button](../../_assets/images/2115c31c33e25b7228209d56265ef46a033824aa01470023a9001cba7050d131.png)

2. Move your avatar around using the arrow keys to get a feel for how your users will experience your world. You can also change the direction the avatar faces using your mouse.

   **Note**: The avatar displayed in the playtest will probably be your own personal avatar. In the actual game, the avatar of the user will be used.

   ![Moving your avatar around the scene.](../../_assets/images/1e8bfb8fb1a8d35b4a8e2e1cd68e54c0b72238a05edc4d84eacf2412f80cc61e.png)

3. When you’re done moving your avatar around, exit the preview mode by pressing **Escape** twice.

## [Step 4: Completing the graveyard](#step-4-completing-the-graveyard)

1. In the graveyard, select the back walls leading up to the gate.

   Do this by clicking one wall or post, holding the **Ctrl** key, and then clicking each one until you’ve got them all. Don’t forget the posts between the wall sections! You can also do this by selecting multiple files in the **Hierarchy** panel, but you may find this more difficult both because of the number of items and the obscure object names.

   ![Select the back walls](../../_assets/images/eea8ca289524dcf1ae7c16e023c9a207e218b139edc780e97adcbfaba5d8182c.png)

   **Note**: It may be easier to see the individual objects that make up the wall if you select **MyFirstWorld** in the **Hierarchy** panel. This will show the outlines of all the objects in the **Scene** panel.

   ![Outline of the back walls](../../_assets/images/b77869e9edf33b2e2c65dc5188b33a138ddd805373fe828685166410c1476e2b.png)

2. Select the **Move** button and then press **Ctrl** + **D** to duplicate these objects. Use the tools that you learned in Step 2 of this tutorial to move the walls to the

   ![Duplicate the back walls](../../_assets/images/fe31696d105cf5e36140d6c7f13c65d67ca6a7feb44693af49c7cfdd485ad0a5.png)

3. Rotate the walls 180 degrees and line them up with the backside of the gate. Now you have an enclosed graveyard.

   ![Rotate the walls 180 degrees](../../_assets/images/e664e1eabe928884abd9caebb6cbe41e07b793ed4460af1987bdd791673df611.png)

4. Use the other assets in the world to finish creating the graveyard. Feel free to get creative and add objects from the [asset library](../../VR%20tools/Getting%20started/Use%20the%20Asset%20Library%20in%20Meta%20Horizon%20Worlds.md).

   ![Add other assets to finish the graveyard](../../_assets/images/08473f92c75aba74872506fa3130aa4030b9ef209d8dd47b7375d7b05904ff5f.png)

## [Step 5: Play in your world on mobile](#step-5-play-in-your-world-on-mobile)

1. Click the **Publish** button in the upper right of your screen or select **Publish World** from the main menu.

   ![Selecting \*\*Publish World\*\* from the main menu](../../_assets/images/928287628ec2045b959dcefe833af1997e6b2c802ad60edfaba6cf6f4b090887.png)

2. In the **Publish World** dialog, complete the required information and any additional details that you want to add. The following items are required:

   - **Name**
   - **Age Rating**
   - **Tags**
   - **Availability**
   - **Comfort Rating**

   Ensure that the option you select from the list for **Availability** includes mobile. If you don’t wish your world to be visible to the public, ensure that the **Visible to Public** option is not selected.

   **Note**: Do no select **Members-only world** at this time. Once this is done and the world is published, this cannot be changed.

   ![The Publish World dialog](../../_assets/images/4952cc7cbe99fad39527ebdef4c05ed953013feaeb154ec9769b2f9cf6d39c03.png)

3. Click **Publish**.

   ![Publishing your world](../../_assets/images/28db34f4f785a9addced474ad696daf8334521b49dce7376e7bd74e7abc13f47.png)

   For additional information on publishing your world, see the [Publish](../../Save%2C%20optimize%2C%20and%20publish/Publish%20your%20world.md) page.

4. Click **Preview tab**.

   ![Preview Configuration Settings](../../_assets/images/f36cdad5f857cd0a6c94c88dacab4e6db68e147a41cbba897dbd9da69ca4a81b.png)

5. From the **Preview Device** list, select **Mobile**.

   ![Preview Device list](../../_assets/images/9e5c3b05253fc83afe64f0d4cdb6a9187d371c81ded4c4c1b1229e2b08e31176.png)

6. From **Preview actions**, select **Send preview build link to the Meta Horizon mobile app**.

   ![Sending a preview link to your Worlds app](../../_assets/images/353feea47888742206e2ec64390f107cacca61f6909c3c3391404e40a4f76af1.png)

   **Note**: If you do not have the Meta Horizon mobile app installed, you can install it and repeat this step, view the published world in your browser, or share the web link with others. For more information, see [Preview device](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#preview-device).

7. Open the Meta Horizon app on your mobile device, find the build link under **Notifications** to play in your world.

   For more related information, see [Testing worlds on mobile](../../Mobile%20and%20web/Testing%20worlds%20on%20mobile%20and%20web.md#mobile).

## [What’s Next](#whats-next)

**Congratulations!** You’ve finished Part 1 of the Introductory Tutorial: Creating Your First World

Now go to the [Part 2 of the tutorial](Create%20your%20first%20world%20tutorial%2C%20part%202.md) to learn how to import custom models and write your first script.

