Source: https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world-continued

Learn

# Create your first world tutorial, part 2

**Welcome to Part 2 of the Creating Your First World Tutorial**

In this tutorial, you’ll continue to learn how to create a simple game in Horizon Worlds, where you shoot marauding skeletons in a graveyard. Where [Create your first world tutorial, part 1](/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md) showed you how to create a new world and build the basics of the game, part 2 will take you a bit farther.
Part 2 shows you how to import custom models, which are which are complex 3D models that are not available in the public asset library. You won’t be creating them here—you’ll use demo assets so you can see how they’re imported. Once you’ve done that, the tutorial shows you how to write a basic script and attach it to the entity to create behavior. The tutorial ends with testing the simple game in virtual reality.

Creating customs models is outside the scope of this tutorial, but if you want to find out more about them, see [Creating a custom model](/hw-docs/custom-model-import/creating-custom-models-for-horizon-worlds/creating-a-custom-model).

If you’re looking for the first half of the tutorial, go to the [Introductory Tutorial part 1](/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md).

The key things you should learn from this module are the following:

* Importing custom models into your world
* Adding entities to your game
* Scripting entity behavior
* Trying your world in virtual reality

**Note**: This tutorial assumes that you’ve completed the prerequisites discussed in [Create your first world tutorial introduction](/hw-docs/get-started/create-a-new-world-intro).

This part of the tutorial requires that you first complete [part 1](/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md), as this is a continutation of that process.

## Step 1: Add a pedestal and a rifle

In part 1 of this tutorial, you created the graveyard. But if you’re going to hunt marauding skeletons, you’ll want to add a rifle and a pedestal to make it easier (otherwise you’d have to use your hands and that gets messy…)

- Download the [Demo Assets](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=T6mlnRh87-sQ7kNvwE4suQr&_nc_oc=Adn_CVXnp1yi2zcgse-zK8yGktOkcTBxmyJPHJ5pdqL0PZ9zJEbpKeYd_ixOvG-yKCw&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfhEIAP3rFbcKBSs_CZ6zdK-8PBPlqPEfmQhR16GlKrLfg&oe=692EAA85)
  .

  This file is a zip archive that contains a number of pre-made assets that you’ll add to your game (like the rifle).
- Extract the contents of the zip archive. folder.

  a. Open the downloaded zip file.

  b. Click **Extract all**.

  c. Browse to a location for the folder on your local hard drive and click **Extract**.
- Add the pedestal to the scene. To do this, click **My Assets** on the **Asset Library** tab at the bottom of the screen

  ![The My Assets tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515073444_756887460182541_1703766811137744765_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=QCvfXeu0088Q7kNvwFJERZg&_nc_oc=AdndKSyz9r1kjrBqXX1dajNliG4kKfCvTOOIh2uXAwH-VHCMjGUPpzCCY6viTlTddso&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afj8UY9CbGKvO9v2xIevY3A5ls5YT9kZXClUji9pJjB-Vg&oe=692EB797)
- From the **Add New** list, select **3D Model**.

  ![Adding a new 3D model](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366312_756887446849209_4679233969024346019_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=VnNzSleQUV8Q7kNvwG76OCT&_nc_oc=Adn0C6rvazzmtK_8jlvuZ90-RsTRDUGXb76OIgOTiR26ByDxRL5EcC6PWjyyqs-ujpo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfhhVAAAhrqfLilakZPTw1wbV8S8IT9TI2AQy8NiUoFeBw&oe=692EA04D)
- In the **Import Models** dialog box, enable **Preserve offset pivots** if it isn’t selected already.

  Because of the way they move, certain assets use [offset pivot points](/hw-docs/Desktop%20editor/Assets/Use%20offset%20pivots.md), where the point around which they turn or pivot is offset from the center of the asset. This is so animation of the asset can look natural.

  Ignore the warning the dialog box shows: all the assets that this tutorial works with are [single mesh](https://developers.meta.com/horizon-worlds/ learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models) files.

  ![The Import Models dialog box](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515276565_756887456849208_4413823266568814632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=-CeB540cfucQ7kNvwFl-g19&_nc_oc=AdmWUN-yQhvyuSqjd6lbbGKOI8pa9L4B1BqIQXlcogrn5i_BFQ7AaXkQSwXUNmTPXV8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afg7O4X_ny7hdlfHUb7kBcF-iD3Bm1kIGpAJwj0kQGJC_A&oe=692EBCCF)
- Click **Choose files on your device**, then navigate to the folder in which you extracted the demo assets.

  ![Choosing the extracted files.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366476_756887433515877_6413619545446559528_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=VxIfbfj_DPwQ7kNvwGrlaC0&_nc_oc=AdnNtEvy7Tik5LbXQVgUtn2GqFuI0W3FRnuE-zMv-oai9kKl2wi2BZm2Pu0FgzBCEb8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afhf-hlNFASNQ_4Y49ny-jKB7Yzm7FMlpVaut-iOe-5O8w&oe=692EAAA8)
- From the folder on your hard drive, select the `SingleBlock.fbx` and `StoneBlockKit_BR.png` files, and then click **Open**.
  `SingleBlock.fbx`is the 3D model file (or `.fbx` file) and `StoneBlockKit_BR.png` is its associated texture file. These are the files that make up the pedestal asset.

  ![Select the asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515092034_756887443515876_6027285087868923840_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=sjP0hfOmKDcQ7kNvwEgV4Zo&_nc_oc=Adn6lvld5FfFK31lhPjFxNkfAVjNrVPXmM0l2dq2IQxO2iArJRHfZ8A-iPLAkr25N-U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfieDVxWj8zfSkw3d949STyhO5o6QuST1F-wkY3AZ62A3w&oe=692EA31A)

  These are then displayed in the the **Import Models** dialog box.

  ![Asset files displayed in the Import Models dialog](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515097062_756887440182543_8868542573376784040_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=6wnjzoZXXJcQ7kNvwFCTxvc&_nc_oc=AdluL5mGnhYSuWCyJ_0Gu2z1jnK63ZN8HuOgQ8gQHucDLKNeq3iPMkO3eVPYWI6n0gs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfhMFLUcb8FFdiKUMy-IFxvZLKYtA0JnStUxXFecBTJdVg&oe=692E96AF)
- Click **Import**.

  **Note**: If you decide to leave your world at this point, it’s important to wait for the asset files to be imported into the desktop editor before you leave.

  The SingleBlock asset will appear in your library when it’s been imported

  ![The SingleBlock asset](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515875637_756887453515875_4696101948964392756_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=hci0LkLHANEQ7kNvwEJFm1X&_nc_oc=AdkzSqBq1egGSZWW25UtEW0LAgY8ZVroLtDrLavQmA-fgVSWyrvinMX-UOr-6fUg7Xs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfisKtkXq75w-Aw2OwTvhF0SH9n0xsdSmzKjtkIwK-MeyA&oe=692E92FA)
- After the asset files have been imported, drag the SingleBlock asset into the scene.

  ![Inserting the asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/514954847_756887450182542_369195396390371839_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=nNhvXPnuTSQQ7kNvwEw8nds&_nc_oc=AdlucFbmwVxnx74FRbt6WFx5c_pqTatqIfxh_nbXuUOE9gdaVGfssSDHY5VaoVElENo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfjXxlM_cJ0ZsKpZsyA_xbVOisY8ZkyaxN0HzBRwXcIERw&oe=692EB401)

  The SingleBlock asset appears in the **Hierarchy** panel as an object named “SingleBlock”.
- In the Hierarchy, rename the “SingleBlock” object to “Pedestal”.
- Enable **Snap to surfaces** by clicking the **Snap to Surfaces** button. This allows you to easily position the base of the object along the ground.

  ![Click the Snap to surfaces button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464129353_573870105150945_5383089439026099930_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=pmcFx0vAxHsQ7kNvwE3X9bN&_nc_oc=AdkQPIynXZHZAkKHhFSh0FPkEzKFPt30pqArhR4oiGLcYhWc_U9oUTh55ddArBKbk8M&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgxOdSbxCyLyy2oFD0fu6GofmTCV6WgwokDJAlgkrI74g&oe=692EA0A7)
- With the Pedestal object selected in the Hierarchy, position it by dragging it by the orange dot. You can place the Pedestal anywhere on the ground.

  ![Click and drag the orange dot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475165196_641654818372473_4879658605534264112_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=SLzxQQau60IQ7kNvwFi5C1k&_nc_oc=Adk16ZXz8HofXwZ3e9GjBzo3FjU4oXLD6HBki4caUzCSSlG2g7va3I5ajBhjRaq3pWQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgWl5V7GWedxjZrTe6pcXrId7vZnF3h2KDXfv95RqzVVA&oe=692EA52B)
- Add the rifle asset to the scene.

  a. Open the **Assets** panel by clicking the **Assets** tab.

  b. Click **Add New**, and then click **3D Model**.

  c. In the **Import Models** dialog box, disable **Preserve offset pivots** because the 3D model for the rifle uses [more than one material for the mesh in the FBX file](/hw-docs/custom-model-import/creating-custom-models-for-horizon-worlds/multiple-materials-per-mesh).

  ![Don't preserve Offset Pivots](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464008566_573870171817605_7978731282074208552_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=8d02F5ef_CkQ7kNvwFrVlI4&_nc_oc=AdlZr29xsHeIasNM5W36aT4YfCTU5ZxDp6ekswa74husQ0JxNxXkMn14yZYfGYMzDc8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfjMCvIXmkYzqRHXNTa7ZM-zQc-Nq-X4Q2jZ2JJ9BUowpw&oe=692EB446)

  d. Select the asset files to import by clicking **Choose files on your device**.

  e. In the file picker window that appears, select the 3D model file (ACWpnBattleRifle.fbx) and its associated texture files (WpnBattleRifleA\_BR.png, WpnBattleRifleA\_MEO.png, WpnIndictator\_BR.png, and WpnIndictator\_MEO.png), and then click **Open**.

  ![Select the five asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464310803_573870025150953_4833471769077242766_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=UU0znRx0bCYQ7kNvwGCj-w8&_nc_oc=AdmzGlo225MAYu12aIa2rMQSSIawkpPTZg3L88EceYDW4o0PBJydnrOrrP2wG2D75cs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afi3ctgcceqxWIzAdv7zm5iGmKjIy6alp0sJ9di70VBp6g&oe=692E9DA8)

  f. In the **Import Models** dialog box, click **Import**. Wait for the asset files to be imported into the desktop editor.

  ![This is what the rifle asset looks like after you import it](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464292127_573870045150951_3415127998518177098_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=VDJ2dYGi-icQ7kNvwH2aV3q&_nc_oc=AdkcT3tXgqZwJ96iAHEzZ_igl8U5WCNDL_t2ciJWFF5FyfFRbef2OjmIt7V3i3Fz48w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfhR6YWJxn8f1HYQvP5HaPyO-yKrJp86ZawYlCdDApXWqw&oe=692EB703)

  g. Drag the rifle asset into the scene, and place it upon the Pedestal.

  ![The rifle floats over the pedestal](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475232756_641654861705802_4132254507512158168_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=joYASGtMBwsQ7kNvwHNPOCd&_nc_oc=AdkIdP_UR2XsK24GJDYeADbNxMbM0qh52QhzwZjEVLyHhHE8J78-w2qs5-KsNHXU7pA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afg0YzfQUri5sqm5rR_BhN9NxTC83IppzhrIZHRlvR61TQ&oe=692EA117)

  **Note**: If you’re having difficulty positioning the rifle, remember that you can always use the orange surface snapping manipulator to move objects anywhere along the ground. You can activate it by pressing the “W” key. Optionally, using “Ctrl+G” lets you group the pedestal and rifle as one object, so you can move them together.
- In the Hierarchy, rename the “ACWpnBattleRifle” object to “Rifle”.

Your Hierarchy should now look like this.

![Notice that the rifle object contains two child objects](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475582112_641654881705800_8956813367946191943_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Givjaxyj4KAQ7kNvwEKe3VF&_nc_oc=AdmCnjk7TgKLvMFcRLaM3NTMjZZbwBc5fnajP7HbHAJl3wa8n44qum0TScx1J_YsOQE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afhspli9U4Nhx78rj-EdL_rUlW3DdlFwNKKNpPaKLK4Muw&oe=692EC45F)

## Step 2: Make the rifle grabbable

In this section, you’ll learn how to make the rifle grabbable by the avatar.

- Select the Rifle object from the Hierarchy.
- In the Property panel, set the following two property values:

  **Motion** = “Interactive” and **Interaction** = “Grabbable”

  ![Click the drop-down selection list](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/463983859_573870008484288_2943956617777129080_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=59aRp1CxV_8Q7kNvwFwSZnG&_nc_oc=AdkhE09QK8HGmmZo_4ELxfDzvfR_8hnA45XnZ3gHsgB_hr9QrpE-E4yDYHcYHYLgSFc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfhaFd_axnUCWFFh6YaThBnvh2hPrSjAXnnMOx6gFFWTCA&oe=692E9F2D)

  **Note:** The **Interaction** property appears only after you set the **Motion** value to “Interactive”.

## Step 3: Try-out your new world

In this section, you’ll try-out your new world to see what it’s like to pick up the rifle.

- Click the Play button on the menu bar to enter preview mode.

  **Note**: Ensure you’ve configured world simulation to start automatically whenever you start the preview mode. Click the the ellipsis icon to open **Preview Configuration** and toggle on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview entry**.

  ![Ensure world simulation is configured to auto start](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481784596_667180549153233_231569701181011321_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=DSxp4WXg8XQQ7kNvwEkj5XV&_nc_oc=AdmpfbDVzwAmjTU0fbF7vulF0iLfmYEXOvBIXbaq9nSfIwna6TwNBERcpy6ST7Un_sU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afg0C9vntnm6-ajiRirCch631ZQAk6kQB5qQihkwsWJ-HQ&oe=692E9890)
- Maneuver the avatar over to the rifle using the arrow keys, and then pick it up by pressing the “E” key.
  ![Press E to pickup the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475655068_641654875039134_3343217904502966675_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=WIe8VSkguBQQ7kNvwHeB3Y_&_nc_oc=Admc22vEIFvkFRPrRFvmm_N8HJxiTjzdGtRUDboSSF_QDrJZMpKCbKMKVEzN-S7N7lM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfjMd4oOJuK17hkTNHkeOIdL89Cpopd_L9ESTSK9tR-exQ&oe=692EA0F7)
  The way the avatar holds the rifle looks somewhat awkward, but don’t worry, you’ll soon fix that.
  ![That's not how you hold a rifle!](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475514035_641654871705801_2878061070962689344_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=qITx9c2PAmAQ7kNvwFWDVGH&_nc_oc=AdmuUC-LN5T2-9giWGDOh6y6tfv9t5meRXIKdxc8JpeFyMcpA0tr48MpbY3QtQfXhf0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afh83FrGBMZl6k8dTk_D5mNeQBbvn7LS1dKZNn_2DuOyWQ&oe=692E9695)
- Exit preview mode by pressing Escape twice.
- Fix the way the avatar holds onto the rifle. With the Rifle object selected in the Hierarchy, in the Property panel, scroll down to the **More** section, and enable both **Use VR Grab Anchor** and **Use HWXS Grab Anchor**.
  ![These settings fixe the way the avatar hold onto the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/469860345_607478945123394_6899703159416175623_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=7n9zVevVqCcQ7kNvwFDqDRG&_nc_oc=AdmbVV1VLAggp_0IkX5y-7r6zB6zyCClFVmKieWLRt9oOto4t3eOuz0Mqkk04SEu5OI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afjka6WVJCuhiOvM8H1fivtCB3yTS3u6Azg58SncBrj8jg&oe=692E926B)
- Set a pose to use when the avatar holds onto the rifle. With Rifle selected in the Hierarchy, scroll down through the property list until you see **Avatar Pose**. Click the drop-down menu beside it, and then select **Rifle**.
  ![Select the Rifle Pose](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464342330_573869941817628_7549640582068222270_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=54SkHcbAGPoQ7kNvwHfO96J&_nc_oc=Adku9HS0QvtqxMpSj5CEbBGmwWDH7VBu-MYgQv9fjSMDUf1NnCYNjkkoRu1gV5Le-GU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afg-a1Q-mMigvJR3M3ipdjm_DE0vTGx9Ff0Lv5kONFTbiA&oe=692E982A)
  Now your avatar can hold onto the rifle properly.
  ![Now the avatar holds the rifle more naturally](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475859865_641654841705804_1105400890562108752_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=sjeIAY-KtTcQ7kNvwHFutmn&_nc_oc=Adlridaxcz4OmcHq4FIQUuFPS8YJ_DTyn1AiK6Zx0jzHgamhQjT-lCGtnYZoJ5k8-zM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfjEXsJOhjsAnBZWGtH2-YDJgeS9oDrkTR7fxHsk4Iedyw&oe=692E93EC)
  But the rifle still doesn’t do anything yet.

  ## Step 4: Add a hello world script

  You now have a rifle that you can pick up and move around with, but it still doesn’t do anything. In this section, you’ll make something happen when you fire the rifle. You’ll write code that prints “Hello World” in the **Console** whenever you fire the rifle.
- Open the **Scripts Panel** by clicking the **Script Panel** drop-down. The **Scripts** dialog appears.
  ![Click the Scripts Panel drop-down](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/463979710_573870158484273_6956393922882678343_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=jqSII7ioFHEQ7kNvwEKgQtZ&_nc_oc=Adn2XZMAJzAhtmG6jxsbXh-yZvKFzj_6oy-eLtufxFW2G_kD7-X0vzJ7cxqBy9Uiv-w&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afg7lsp3yRDoOonrsjdG9WrmNKF4IrK9OGh6ZPcw4mJZWA&oe=692EAC2F)
- Create a new script by clicking the plus button.
  ![Click the + button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464284760_573870108484278_5626008342355283582_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=_57T7Pg8ZHEQ7kNvwGCkQeR&_nc_oc=AdngYwLQAhQKvMV53_tiykVrHx0VgZAMidJQfB-EChGQth_baX9UhRto6nf15i-hPKQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afgx5DzyRaVIDeZSFKJXJ9op--OStzMFOBXbaYanmMEkQQ&oe=692EC748)
- Name your script “Shoot”.
  ![Enter Shoot and then press Enter](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464325206_573869988484290_3165699765154261570_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=494iye4UHpgQ7kNvwGDbsxa&_nc_oc=AdlvCG28wA206xC3V3DDhSVHlUBeziHvA4YoiQOjIXlJbptLrXhl9-IvpyLKMw-rx0M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfguO1eRSpMFkKMgFpeMHSiA7_j6r-KJf03fced-84W6kw&oe=692EB6CB)**Note:** It takes a few seconds for the script to appear after you’ve inputted the name.
- Open the script in VS Code. Click the menu icon next to the script name, and then select **Open in External Editor**.
  **Note:** Currently, scripts can only be opened in the aforementioned way, from the top dropdown menu.
  ![Click the three vertical dots to see the menu](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464107203_573870138484275_3986572612224730853_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=-UYa02baqmsQ7kNvwGmyzJh&_nc_oc=AdmPuSA18chDdrvYWJM_XfC3hXiuOa9922_yrO0Z7mlIU5BYc5EFeIsWUtYIGQu5Vd0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afg_unty4tkUgSnHxvd7GoLnWT-iXESRBuDXCowJJusUGA&oe=692EB418)![Oen the script in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464190660_573870198484269_3483053417967741197_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=ph46KUO2EdsQ7kNvwGE5UxV&_nc_oc=AdnDmGXC7f0egCdCr2LXPQ_PjIbicrCSju5r5LyuDS7w88qNu2YQCI5ubpjDcopdDzg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfjKrDOhLb5OGWLkdQp7UkvQ-viC8iOGsCBJmm74iZRWFg&oe=692EB7EF)
  The new script opens in VS Code in a file called `Shoot.ts`. It contains boilerplate code.
  ![This is the default structure of a TypeScript script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464177291_573870041817618_3500120114101619688_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=6wPDsxm9roUQ7kNvwH_-1K1&_nc_oc=AdmwS5WlZCvV6_ydwsWzV18TFkHhRRfweRpZgR-G0pWg3ljps22gd46SZFuMrHng9CA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfhfFFcp06WvjtRa_l7k2m9vx2_rMwJtWZvBSc-y_5dfdw&oe=692EA6AF)**Note:** The `start()` function is called whenever the entity that the script component is attached to is created. At this point though, you haven’t attached this script component to an entity.
- Add the following debug statement to the `start()` function. When the entity that this script component is attached to is created, this statement prints “Hello World!” to the **Console**.

  ```
  start() {
      console.log("Hello, World!");
  }
  ```
- Save the script file. You can press “Ctrl+S”.
- In the desktop editor, attach your script component to the rifle entity.
  a. Select the Rifle object from the Hierarchy.
  b. In the Properties pane, scroll down to the **Scripts** section.
  ![Click the drop-down selection list to see your script](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464091170_573869985150957_1926137328255172174_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=dzgnJ2UTFtUQ7kNvwG2kj_G&_nc_oc=Adk5lJdnDuyxvDGYlb0LlAG0-T2kseufq4FO3vVSDTojIh2qvxIZd8RM3rcFqq4xwnE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfibyfdeXOk1TbIXuGFUf26OE9xKhCIfO7s7Bf8wXbSjxA&oe=692EAFCA)
  c. Attach the script component by selecting “Shoot:Shoot” from the **Attached Script** drop-down selection list.
  ![Click on Shoot:Shoot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464106799_573870071817615_3222010519411086870_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=7LNGKKWR2X0Q7kNvwFRSadH&_nc_oc=Adn-Wajn9d4I_wDLxW2sOV9QuugaW6IFOQ2LDtr5-np1miPz_XHAyQCAADPshUGdMj8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgqQvHcZ8lBkRtEUS0wXBIx4-ONne-_YF6Odwqen5xchQ&oe=692EB62F)
- Preview your world by clicking the Play button on the menu bar.
  As soon as the Rifle entity is created, the script prints “Hello, World!” to the **Console**.
- End the preview by pressing Escape twice.
- You can see the debug message by clicking the **Console** tab at the bottom of the page.
  ![Hello World! appears down at the bottom of the Message list](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464178601_573870128484276_4374457029334205218_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=NKpKuHaTIDgQ7kNvwFnmWRb&_nc_oc=AdmSm95SYkVdg6889UIUgU0viXdADB7zFArbpzdKSsJALCs_nPLm_1MVu_PGTzpK9X8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfjqinigfEe-cvhgszb_Rk1bs6X22rL5XWcVWp-nk2Km7A&oe=692EA670)
  You’ve made your world interactive. The script outputs the message “Hello, World!” to the **Console**.

  ## Step 5: Refine your script

  But you really want the interaction to occur when you pull the trigger, not simply when the rifle is created. In this section, you’ll revise your script to print a message when you pull the trigger. When the rifle is created, an event is also created that fires each time you pull the trigger.
- Replace the code in the `start()` function with the following code:

  ```
  start() {
      // React to an event when the user pulls the trigger.
      this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, (player: hz.Player) => {
          console.log("boom!");
      });
  }
  ```
- Save your script.
  When editing your script, errors might appear in the **Console**. When this happens, you can clear the error messages from the **Console** by clicking **Clear**.
  ![You can clear the error messages](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464347386_573869901817632_7646464504087582755_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=7l5ez_iuL6EQ7kNvwHNCXxB&_nc_oc=Adn4ip1IUOY2sTL69xHNRd7kfLkQIN8La9pkdsLV_k-wD43SLtdLc2C2zzCTisWkUbg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgHDs3VpLdELana210U924Dd1EnKVvNpSB4ZaL43OK2zw&oe=692EC1FD)**Note:** Normally, you shouldn’t see any error messages in the **Console** window. If you do though, then try copying and pasting the code instead of typing it yourself.
- Preview your world by clicking the Play button.
- Walk over to the rifle and grab it.
- Fire the rifle several times by clicking the **A** button on the screen. As you fire the rifle, notice that a “boom!” message appears in the **Console** window along with the number of times that the message appeared.
  ![Look at all the booms!](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464389048_573870095150946_7738181260387489635_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=0kRp9kfRxI0Q7kNvwEv0W1X&_nc_oc=AdnR_rrIVsS3x2umHpvNowAMtpGjGyGzmq4w-n4Qj5XPyfmMafXwvOSKQyOvyWmqu1w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afjnxzvh4F-rWKQUCbyQKIWNncloU3zBYat_91zU6tTXtA&oe=692EB829)
- End the simulation by pressing Escape.

  ## Step 6: Add a projectile launcher to the rifle

  You now have a rifle that you can pick up and carry around, but it doesn’t actually do anything except print debug messages. In this section, you’ll make the rifle launch projectiles.
- Select the Rifle from the Hierarchy.
- Focus on the Rifle in the scene by pressing the “F” key.
- Click the **Build** button.
  ![Click the drop-down button](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464331432_573869915150964_3815683403137700120_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=DsxThsp0Uw0Q7kNvwFYebYs&_nc_oc=Adk4Pr6F3qTACgAoqFHpsZx6_ZgtkyRHmXC2352L6B0HHSq6QJaDrMxSPKr50bDFe2c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afibw7kQArdNjdTnmamuEJQTcRWPMz7OejnJTc661kqs5A&oe=692EA5DA)
- From the drop-down menu that appears, select **Gizmos**.
  ![Click Gizmos](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464197626_573869951817627_8947530193925354975_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=k3R3D-lt5CIQ7kNvwEoyA2c&_nc_oc=AdndBA4WWciEK3ovb-NAkXvJbgcQdBqPL9H9F04znR2F92D-cj7J2zcKwjGcSJqeIAE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfjhWtht1Xio5xjm3mbiqiCX62zh_DwscF2ycTJf46_2ng&oe=692EA129)
- Select **Projectile Launcher**.
  ![The icon for the projectile launcher gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464179364_573869968484292_6347379331044320910_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Pph27eoWKa0Q7kNvwHZvjdR&_nc_oc=AdkZoUE2tEyN3wu65_IXX4MGR043YjvN7ehBZkShYKfj9XKUHV7POfgUy1vf4UvY5xM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfiD_ObOlqcGoDumofUjh7vlbDogpIt0SIy-CNsOsztkAA&oe=692EA267)
  The **Projectile Launcher** gizmo appears in the scene, and in the Hierarchy. Pressing the “F” key while the object is selected brings the object to focus.
- Close the **Build Gizmos** panel.
- Attach the ProjectileLauncher to the Rifle by making it a child of the Rifle. In the Hierarchy, drag the projectile launcher, and drop it onto the Rifle.
  ![Drag and drop](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464060217_573869908484298_3061206173699646062_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=lbLdST2Qn3cQ7kNvwG5j8s9&_nc_oc=Adlb_xW_3wcjJjGugtlPsefSoSDJXB52N0ieCp7EPtcbL7Z0SmwyuzcwwvrcuExE5_E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgVaA9H8xBWUg3eLJlX7yqNj7ZVIw393MDdbwCnUe3HRQ&oe=692EA136)
  The ProjectileLauncher should appear indented in the hierarchy since it’s now a child object of the Rifle object. You can expand the hierarchy by clicking the triangle.
  ![It's now one of the Rigle's children](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464190942_573870178484271_3293882596374239688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Phfl3kI8mZ8Q7kNvwHv9wsR&_nc_oc=Adne-TgBRReULdLvHTDpb5ZrMSl7I49FXOdZlJ5tpEKwplL8F0klB0ou4ZXQx5mfs1c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfiInN5C1g5URsPbEEjb-LYC2vslH5eXYWrH6LJbvSDOlQ&oe=692E9E12)
  With the ProjectileLauncher selected in the Hierarchy, position it relative to the Rifle.
- Adjust the Position values of the projectile so it aligns with the aim of the rifle.
  ![Align the projectile with the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475194437_641654878372467_7693479725163060948_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=3Yf3T1uy52oQ7kNvwHQ1GqB&_nc_oc=Adlld33OOAjvYyUzPk52vGO14e6lQ7ER6YsSLQlvrfGIQIl9NW9czpDw4kieJHgVDwI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfingaMsEbLHDZO0zlg1YNgxqqOKYjNI2SMpLTYe4WNLNw&oe=692EC3BC)
  These adjustments in settings ensure that the projectile launcher appears at the front of the rifle, and that projectiles fire in the forward direction.
  Additionally, to make the projectiles easier to see, adjust **Scale** and **Trail Length Scale** based on your preference.
  Everything is now hooked up. Next, you’ll edit the code to make the rifle interactive.

  ### Section 7: Hook up the projectile launcher

Earlier in this tutorial, you got a debug message to appear when you pulled the trigger on the rifle. In this section, you’ll update your script to use the projectile launcher whenever you pull the trigger.

- To use the projectile launcher, you need to reference it in your script. Update the **Shoot** class’s **propsDefinition** with the following statement:

  ```
  class Shoot extends hz.Component<typeof Shoot> {

      static propsDefinition = {
          launcher: {type: hz.PropTypes.Entity}
      };
  ```
- Add a statement to the `start()` function that creates a reference to the projectile launcher gizmo.

  ```
  start() {

      // Store a reference to the projectile gizmo in the launcherGizmo variable.
      let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);
  ```

  With a reference to the `launcherGizmo`, you can call a function on it (`launchProjectile()`) to launch a projectile whenever you pull the trigger.
- Add a statement just before the `start()` function that adds a property for holding the launcher options.

  ```
  // The options to use when launching the projectile.
  launcherOptions: hz.LaunchProjectileOptions = {speed: 50};
  ```
- Add a statement to the **OnIndexTriggerDown** event for launching a projectile.

  ```
  start() {

      // Store a reference to the projectile gizmo in the launcherGizmo variable.
      let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);

      // Handle the OnIndexTriggerDown event when the user pulls the trigger.
      this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, (player: hz.Player) => {
          console.log("boom!");
          launcherGizmo?.launch(this.launcherOptions);
      });
  }
  ```

  This change made it so that when the Rifle is created, you hook it up to the trigger, but now this event asks the projectile launcher gizmo to launch a projectile instead of just printing “boom”.
- Save your script.
- In the desktop editor, select the Rifle object from the Hierarchy.
- In the Property pane, scroll down to the **Scripts** section. Notice that there is now a `launcher` property that you can set. This property appears because you added it to the `propsDefinition` in your script.

  ![There is a launcher property in the property panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464076144_573870208484268_3571774494949796316_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=r5ul8EeggSEQ7kNvwEVRb3r&_nc_oc=Adm-vq9ztJeGxoTFjUDpqoewetrHmqIB4AyxCKoh1neC5qslTuVWrzTbdHHnQWvRkmw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgWZRh8cx6xL-jbssqA0rSGs48D1TPLBkdao3VjupIvKA&oe=692EC305)

  **Note:** You might have to deselect and then reselect the Rifle object if this new property doesn’t appear.
- Set this **launcher** property to the **ProjectileLauncher** object. Click on the field beside **launcher**, and then select **ProjectileLauncher** from the list that appears.

  ![Select ProjectileLauncher](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464035648_573870011817621_4324077274258554259_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=hABUkB8tzqkQ7kNvwFLv6sA&_nc_oc=AdkY3c9HTUPZkQg7ieyEWU4OVmneKNd28x_ojwNCekrjFXOIovPpVGVW6VehEUWCuKQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgnB9qIzqDMJGrQ1YLo-6OQn-whuKxKpUFgxPTbAATKUQ&oe=692EAE8E)
- Preview your world by clicking the Play button.
- Walk over to the rifle, grab it, and then click the mouse button. Notice what happens, a shot appears to come out of the rifle when you pull the trigger. Next, you’ll update your script to accumulate points whenever the player hits the target.

  ![A shot appears to come out of the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475273504_641654838372471_3353505584347988670_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=kA8SVyPYFdUQ7kNvwEzpFaL&_nc_oc=Adlhly85eZjyMxrHqk1sl31wzWwOB8a4CQtgUC_0ZNMT6Psgpb6OhuSjakYYEgqW8Ks&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfhUrf-0VS1vBM5_diw0EfDcpaDk5g2Uf3mEAuuc5y3D1Q&oe=692EA8BD)
- Exit Preview mode by pressing Escape.

### Section 8: Count points whenever you hit the target

In this section, you’ll update the script so that you score a point each time you hit the target.

- In the desktop editor, select the SpawnPoint in the Hierarchy.
- Click **Asset Library** > **Public Assets** under the Scene pane.
- In the Search field, enter “skeletoncrayta” to find the skeleton.

  ![Pirate skeleton](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464152935_573869948484294_7911900688495928080_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q2SLUEpFLPUQ7kNvwFkAcuz&_nc_oc=AdmsaU-ar_TdHW_GzR0mY9BypdouoWOVMhjAlPmFQtP_s-ssR4pVrPHVP4BH5RcRCp4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afjqj7IQzSXX5ewRlXvlO9TQkqt9z7lO1wyzM1KakQUQyg&oe=692E9942)

  A skeleton object named [UnityAssetBundleGizmo](/hw-docs/desktop-editor/assets/unity-assetbundles/horizon-unity-assetbundles-overview) is added to your Hierarchy, and appears in your scene.
- Rename the skeleton object from “UnityAssetBundleGizmo” to “Target”.
- Position the target anywhere in the scene.
- Update your script so that whenever a projectile hits an object, a point is added to your score. You’ll need to add a variable to track the current point value, and to initialize its value to zero. Add the following statement near the top of your class, just above the `start()` function.

  ```
  // Keep track of the user's score.
  points: number = 0;
  ```
- Add another event listener inside the `start()` function that fires whenever a projectile hits an object. Copy the following statements to the end of the `start()` function.

  ```
  if (launcherGizmo) {
           this.connectCodeBlockEvent(
               launcherGizmo,
               hz.CodeBlockEvents.OnProjectileHitObject,
               (objectHit: hz.Entity, position: hz.Vec3, normal: hz.Vec3) => {
                   this.points = this.points + 1;
                   console.log("You're up to " + this.points + ' points!');
               },
           );
       }
  ```

  Your complete Shoot script should now look like this.

  ```
  import * as hz from 'horizon/core';

  class Shoot extends hz.Component<typeof Shoot> {
    static propsDefinition = {
      launcher: {type: hz.PropTypes.Entity},
    };

    // The options to use when launching the projectile.
    launcherOptions: hz.LaunchProjectileOptions = {speed: 50};

    // Keep track of the user's score.
    points: number = 0;

    start() {
      // Store a reference to the projectile gizmo in the launcherGizmo variable.
      let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);

      // Handle the OnIndexTriggerDown event when the user pulls the trigger.
      this.connectCodeBlockEvent(
        this.entity,
        hz.CodeBlockEvents.OnIndexTriggerDown,
        (player: hz.Player) => {
          console.log('boom!');
          launcherGizmo?.launch(this.launcherOptions);
        },
      );

      if (launcherGizmo) {
           this.connectCodeBlockEvent(
               launcherGizmo,
               hz.CodeBlockEvents.OnProjectileHitObject,
               (objectHit: hz.Entity, position: hz.Vec3, normal: hz.Vec3) => {
                   this.points = this.points + 1;
                   console.log("You're up to " + this.points + ' points!');
               },
           );
       }
    }
  }

  hz.Component.register(Shoot);
  ```
- Save your script.
- Test your world.

  - In the desktop editor, select the **Console** tab at the bottom of the screen.
  - Click the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.
  - Walk over to the rifle, pick it up, and then fire several shots at the skeleton.

    ![Every time to hit the target, the score increments](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475121433_641654885039133_2447663056588542102_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=AXOWqqS1_skQ7kNvwGevrY3&_nc_oc=Admup2WFUEpYULoNpgNz48ymVG8DqLtpgZrHo55Tsj_-oPqWNaPmLWWyXw4VBFDwEFE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgJVNOvAzpkqJGcDEYiL4zF9ZYkVA19KzkxxVVVUf-uHg&oe=692EC52B)

    Every time you hit the skeleton, a message prints to the **Console** that tells you how many points you’ve scored. If a shot doesn’t hit the skeleton, then the console message simply doesn’t appear.

### Section 9: Display the score

In this section, you’ll revise your script so that the score appears in the game.

- Add a **Text** gizmo to your scene.

  - Click the **Build** drop-down.

    ![Build an entity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464331432_573869915150964_3815683403137700120_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=DsxThsp0Uw0Q7kNvwFYebYs&_nc_oc=Adk4Pr6F3qTACgAoqFHpsZx6_ZgtkyRHmXC2352L6B0HHSq6QJaDrMxSPKr50bDFe2c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afibw7kQArdNjdTnmamuEJQTcRWPMz7OejnJTc661kqs5A&oe=692EA5DA)
  - Select **Gizmos**.

    ![Select Gizmos from the list](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464197626_573869951817627_8947530193925354975_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=k3R3D-lt5CIQ7kNvwEoyA2c&_nc_oc=AdndBA4WWciEK3ovb-NAkXvJbgcQdBqPL9H9F04znR2F92D-cj7J2zcKwjGcSJqeIAE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfjhWtht1Xio5xjm3mbiqiCX62zh_DwscF2ycTJf46_2ng&oe=692EA129)
  - Select **Text**.

    ![Select the Text gizmo](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464276063_573870021817620_5656500703368336488_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=NNPlDeA6Uk4Q7kNvwFIQarV&_nc_oc=Adn7kzZh3W5_ILCGxdNoMamHG9wva1yLSfBXQEZsN7wOadgqEXk7fCoyyXajbRO7mWw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgmTdM_OLRS0rC3VcnAh9xyskulNPIzpTb9I8uhHDAiEQ&oe=692E9C49)

    A **Text** gizmo is added to the scene.
  - Position the **Text** gizmo within the scene so that you can read the score while you’re shooting at the target.

    ![Position the Text gizmo so you can read the score](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475549601_641654858372469_2650846579364077855_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=QT_rzpJR2P8Q7kNvwHoBUeP&_nc_oc=AdmZmUob9cWAMwN94bDKelmfs28b7YZ7NYdGFCx0j4VkENtx0TDCE98gH2xVxytvMw4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgXbnhUZPu6X-3sBxoinTaPx6zeXqTlr9DjGsDl1GSnsw&oe=692E9CB4)

    You’ll need to rotate the **Text** gizmo so that the text displays in the correct orientation.
- Update your script to use the **Text** gizmo. Remember, if you want to reference an entity property within a script, then you need to add that property to the `propsDefinition`. Add a `scoreView` property to `propsDefinition`.

  ```
  static propsDefinition = {
      launcher: {type: hz.PropTypes.Entity},
      scoreView: {type: hz.PropTypes.Entity}
  };
  ```
- To be able to use the `scoreView` property, you need a reference to `scoreView` as its specific type: `TextGizmo`. Store a reference to the `scoreGizmo` object in your `start()` function.

  ```
  // Store a reference to scoreView as its specific type: TextGizmo.
  let scoreGizmo = this.props.scoreView?.as(hz.TextGizmo);
  ```
- Update the scoreboard text by adding a single statement beneath the `console.log` statement that calls the `scoreGizmo.text.set()` function.

  ```
  this.connectCodeBlockEvent(
    launcherGizmo,
    hz.CodeBlockEvents.OnProjectileHitObject,
    (objectHit: hz.Entity, position: hz.Vec3, normal: hz.Vec3) => {
       this.points = this.points + 1;
       console.log("You're up to " + this.points + ' points!');
       scoreGizmo?.text.set(this.points + ' points');
    },
  );
  ```
- Save your script.

  Your complete script should now look like this.

  ```
  import * as hz from 'horizon/core';

  class Shoot extends hz.Component<typeof Shoot> {
    static propsDefinition = {
      launcher: {type: hz.PropTypes.Entity},
      scoreView: {type: hz.PropTypes.Entity},
    };

    // The options to use when launching the projectile.
    launcherOptions: hz.LaunchProjectileOptions = {speed: 50};

    // Keep track of the user's score.
    points: number = 0;

    start() {
      // Store a reference to the projectile gizmo in the launcherGizmo variable.
      let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);

      // Store a reference to scoreView as its specific type: TextGizmo.
      let scoreGizmo = this.props.scoreView?.as(hz.TextGizmo);

      // Handle the OnIndexTriggerDown event when the user pulls the trigger.
      this.connectCodeBlockEvent(
        this.entity,
        hz.CodeBlockEvents.OnIndexTriggerDown,
        (player: hz.Player) => {
          console.log('boom!');
          launcherGizmo?.launch(this.launcherOptions);
        },
      );

      if (launcherGizmo) {
          this.connectCodeBlockEvent(
              launcherGizmo,
              hz.CodeBlockEvents.OnProjectileHitObject,
              (objectHit: hz.Entity, position: hz.Vec3, normal: hz.Vec3) => {
                  this.points = this.points + 1;
                  console.log("You're up to " + this.points + ' points!');
                  scoreGizmo?.text.set(this.points + ' points');
              },
          );
      }
    }
  }

  hz.Component.register(Shoot);
  ```
- In the desktop editor, select the Rifle object from the Hierarchy.
- Scroll to the **Scripts** section of the **Property** panel. Since you added `scoreView` to `propsDefinition` in your script, this property now appears in the **Scripts** section of the **Property** panel.

  ![The scoreView property appears in the property panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464222401_573870035150952_285145257509364434_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=RKpuyK8lN_UQ7kNvwHGvxG5&_nc_oc=AdnuSwqDhPMB2ZCHeTrhWRu5un854sT20QCmQI1H1SAsyMq9SKqeIqhEQbwP8HtDABQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfiC-K5tmyZ1HZv1VdQ-mRZVqZsk-obOM5NOwrlv0-66EQ&oe=692E99B5)

  **Note:** You might have to deselect the Rifle, and then reselect it if this new property doesn’t appear.
- Set the value of `scoreView` to the Text gizmo that you added to the scene. Click the drop-down selector beside the label **scoreView**, and select “Text”.

  ![Set the value to the Text gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464088168_573870068484282_6798580279511898058_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=RCzqnXQBrQMQ7kNvwFTrFFs&_nc_oc=AdlguDmZKzSxs7ERq5KPP2IgfyxEsashzno05GZACR375y-tfLsTwpXwZQQAtVqyqes&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfjIhBkgOdgyOnwNgmbq1OMEH2SyYfVdBgpNhw00t3CJmQ&oe=692EBB8B)
- Test your world.

  - In the desktop editor, select the **Console** tab at the bottom of the screen.
  - Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.
  - Walk over to the rifle and grab it, and use it to take several shots at the skeleton.

    ![Rack up some points by shooting the target](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475293293_641654835039138_2953793375639169747_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=a3wWcwnEYogQ7kNvwHFyjHj&_nc_oc=Adlg9oiwijXDDH2IZj-_qpj-4cuZ7JV98qAmU_U2kT8h-jWyAEETsYFDivnVp2Kozek&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgH59WzJkQDUZ1ttABKBvAM3pm80MGuLBvOzA7XcSXj9Q&oe=692E9D86)

    You should see your score floating in space, and it should increment each time you shoot the skeleton.

### Section 10: Create a second rifle

In this section, you’ll convert your Rifle/ProjectileLauncher combination into a Template Asset, and then you’ll use that asset to create another rifle.

- From the Hierarchy, select the Rifle. This object has the script attached to it, and it’s also the parent of the ProjectileLauncher.
- Right-click the Rifle object in the Hierarchy, and from the menu that appears, select **Create Asset**.

  ![Turn the Rifle object into an asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464006274_573869955150960_8083174888610967206_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=0Dbr9Ggoe3MQ7kNvwFI4THZ&_nc_oc=Adkq99oOoLaWZc3-08rwSfvSsSd1kXQ2T8V4XPA1Njvh5YKYLdVJjVHsRsY6LLsffaQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfjfA-prwMwayCJVguKqrDwpTgcb6qGsnf7cmPFJGBJqSA&oe=692EA4B5)

  The **Create New Asset** dialog appears.
- Type a name for the asset, and type a description of the asset, and then click **Create**.

  ![Fill in the asset name and the description](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473721798_631480272723261_8456815458843473069_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Lx0He5h8JnkQ7kNvwFhPvdD&_nc_oc=AdnUXli-dL9ADWJ8wIHNgFhRlK8EQ_PiEJlptXkJSTdNrlCwTXtgHGbzh4zqsyNLEkI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfhY32hNXr30DaZhu6M610oz0o28pxsrcJT-XcndQA2sIg&oe=692EB7A5)
- Open the **Assets** tab, and then select the **My Assets** folder. You’ll see your second rifle asset there.

  ![Your new asset appears in your My Assets folder in your Private Assets Library](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464099449_573869905150965_6806556283750141783_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=5O3RdoeJs7YQ7kNvwHBjqUL&_nc_oc=Admy5W2L2p98NPrWX6guYfRcu9INy4CRmU8Q2NiUYj1FLrmspLQ2OLZoRWSlrhlUn6o&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_Afi8Ahwnm_NqfYrrHVe2HP-d54R7omR8-yzK1R3iPQCUUw&oe=692EB19A)
- Click and drag the new AutoRifle asset, and drop it anywhere in the scene.

  ![Place the new Rifle anywhere in the scene](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475226479_641654815039140_955495808021670869_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=V7b_JcEhwLIQ7kNvwGoDtTs&_nc_oc=AdmXgf9rTfZs1Ngg-I2yGz4SOI4sp3AVdSSjLehSLENbAG4UJ0360fvUytoWtk4BqF8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TLbN6gepyqkVKcHREp4HTQ&oh=00_AfgrTKGxojYE7kBGHQ4hBMN2Ugpvx7s8goLGX7ZBR-Rk1g&oe=692EB040)
- Test your world. Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the second rifle.

  Notice that you can use either rifle to shoot the skeleton and generate a score. Each rifle has its own score, which means the text box swaps between the scores as you swap rifles.

You’re done! You’ve completed building a game in Meta Horizon Worlds! In the next section (which is optional), you’ll try running your game in 3D on a Meta Quest headset.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

* Try the [Batting cage tutorial](/hw-docs/get-started/batting-cage-tutorial) now that you’ve created your first world.
* Learn about the desktop editor with the [Introduction to the desktop editor](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
* Learn about the other tools available by reading our [Tools overview](/hw-docs/Get%20started/Tools%20overview.md).
* Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.