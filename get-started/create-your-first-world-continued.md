Source: https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world-continued

# Create your first world tutorial, part 2

**Welcome to Part 2 of the Creating Your First World Tutorial**

In this tutorial, you’ll continue to learn how to create a simple game in Horizon Worlds, where you shoot marauding skeletons in a graveyard. Where [Create your first world tutorial, part 1](/horizon-worlds/learn/documentation/get-started/create-your-first-world) showed you how to create a new world and build the basics of the game, part 2 will take you a bit farther.
Part 2 shows you how to import custom models, which are which are complex 3D models that are not available in the public asset library. You won’t be creating them here—you’ll use demo assets so you can see how they’re imported. Once you’ve done that, the tutorial shows you how to write a basic script and attach it to the entity to create behavior. The tutorial ends with testing the simple game in virtual reality.

Creating customs models is outside the scope of this tutorial, but if you want to find out more about them, see [Creating a custom model](/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/creating-a-custom-model).

If you’re looking for the first half of the tutorial, go to the [Introductory Tutorial part 1](/horizon-worlds/learn/documentation/get-started/create-your-first-world).

The key things you should learn from this module are the following:

* Importing custom models into your world
* Adding entities to your game
* Scripting entity behavior
* Trying your world in virtual reality

**Note**: This tutorial assumes that you’ve completed the prerequisites discussed in [Create your first world tutorial introduction](/horizon-worlds/learn/documentation/get-started/create-a-new-world-intro).

This part of the tutorial requires that you first complete [part 1](/horizon-worlds/learn/documentation/get-started/create-your-first-world), as this is a continutation of that process.

## Step 1: Add a pedestal and a rifle

In part 1 of this tutorial, you created the graveyard. But if you’re going to hunt marauding skeletons, you’ll want to add a rifle and a pedestal to make it easier (otherwise you’d have to use your hands and that gets messy…)

- Download the [Demo Assets](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=T6mlnRh87-sQ7kNvwE4suQr&_nc_oc=Adn_CVXnp1yi2zcgse-zK8yGktOkcTBxmyJPHJ5pdqL0PZ9zJEbpKeYd_ixOvG-yKCw&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afjg72590Cn9zqmLj79-P164DAyX2gm0qobBnyO72aqLkw&oe=692C0785)
  .

  This file is a zip archive that contains a number of pre-made assets that you’ll add to your game (like the rifle).
- Extract the contents of the zip archive. folder.

  a. Open the downloaded zip file.

  b. Click **Extract all**.

  c. Browse to a location for the folder on your local hard drive and click **Extract**.
- Add the pedestal to the scene. To do this, click **My Assets** on the **Asset Library** tab at the bottom of the screen

  ![The My Assets tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515073444_756887460182541_1703766811137744765_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=cQYCUrIG_ncQ7kNvwHNMOTt&_nc_oc=Adn568xAxEJtmjE2gdaRMot3uLXcbSvI3KSi_BG2f5dIaikySkenMkKM7aPM3pFtLko&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afh4kP7SjbvfHuR2YamXsZt0z_MXIxbPonODLeMFVKYNWA&oe=692BDC57)
- From the **Add New** list, select **3D Model**.

  ![Adding a new 3D model](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366312_756887446849209_4679233969024346019_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=VnNzSleQUV8Q7kNvwG76OCT&_nc_oc=Adn0C6rvazzmtK_8jlvuZ90-RsTRDUGXb76OIgOTiR26ByDxRL5EcC6PWjyyqs-ujpo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhL_-8m5P1Nl4hgQcessSHx8lbwsN7kRIe-eH5ZPDiSWQ&oe=692BFD4D)
- In the **Import Models** dialog box, enable **Preserve offset pivots** if it isn’t selected already.

  Because of the way they move, certain assets use [offset pivot points](/horizon-worlds/learn/documentation/desktop-editor/assets/offset-pivots), where the point around which they turn or pivot is offset from the center of the asset. This is so animation of the asset can look natural.

  Ignore the warning the dialog box shows: all the assets that this tutorial works with are [single mesh](/horizon-worlds/ learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models) files.

  ![The Import Models dialog box](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515276565_756887456849208_4413823266568814632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=GZHJJcCf26EQ7kNvwH4ngtK&_nc_oc=AdnadyGTYADkbXTHVJwPzxVuLvnWZjK0vpW-xhnGReIU-xJiC3hDI01_VOTSWA9syZI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfjaUkr889tXKHwNzFrVy2i30cXNHKsi3LhdNA7c-qAEfg&oe=692BE18F)
- Click **Choose files on your device**, then navigate to the folder in which you extracted the demo assets.

  ![Choosing the extracted files.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366476_756887433515877_6413619545446559528_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZJYXzcMIQ0gQ7kNvwHis70G&_nc_oc=Adn3xFsYfANRGG2NlM5htgvW9_CTG5zkHmYEm4RxDBN9BudYcrkmrUolLNGBRcfhoe0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afhh0jGZCALSNwTISqfLiYOX94f3DYOXkpRRumI-ABhfyQ&oe=692C07A8)
- From the folder on your hard drive, select the `SingleBlock.fbx` and `StoneBlockKit_BR.png` files, and then click **Open**.
  `SingleBlock.fbx`is the 3D model file (or `.fbx` file) and `StoneBlockKit_BR.png` is its associated texture file. These are the files that make up the pedestal asset.

  ![Select the asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515092034_756887443515876_6027285087868923840_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=plOp8fWQu0sQ7kNvwEyefYj&_nc_oc=AdmoxXN2OdjR6IjIFKaJLyef1H7Olpzz-q1nmAwHs-lAP12iPIdhlk5r0QrWxLZpGTk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afg7rX22Jl-uwZYllrbwgAmvsLgVWX8quUpOx5Da2aYKLg&oe=692C001A)

  These are then displayed in the the **Import Models** dialog box.

  ![Asset files displayed in the Import Models dialog](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515097062_756887440182543_8868542573376784040_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=FhjNoJ-Oq9IQ7kNvwExkV4x&_nc_oc=Adni9bEnCH-N8TSKJIV50E8QrrEqgT8YMObK1t41hMmeI11E3Cu7LHut4Xg8xopUA3U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afgm4QBJyUMOGlt2ooYJ8Pq04w07zbRbruVt-vumC0oBBg&oe=692BF3AF)
- Click **Import**.

  **Note**: If you decide to leave your world at this point, it’s important to wait for the asset files to be imported into the desktop editor before you leave.

  The SingleBlock asset will appear in your library when it’s been imported

  ![The SingleBlock asset](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515875637_756887453515875_4696101948964392756_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=oyZcv7-C4N0Q7kNvwEpFL2B&_nc_oc=Adk4j28obwcghpV62PRAiRhQyWAnGIf3uuNlSZ3Uj-fr1_AzwH9Cxil1Qb1naIaaQYA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfjRKPoadmgtNPfXkKur1fBbkoAf0gYkRqFE80ubVtI-Gw&oe=692BEFFA)
- After the asset files have been imported, drag the SingleBlock asset into the scene.

  ![Inserting the asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/514954847_756887450182542_369195396390371839_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=nNhvXPnuTSQQ7kNvwEw8nds&_nc_oc=AdlucFbmwVxnx74FRbt6WFx5c_pqTatqIfxh_nbXuUOE9gdaVGfssSDHY5VaoVElENo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfipEKG5urOYfh8Oq84EY79gdZ7qob-2qNjyhbOKcg2yvA&oe=692BD8C1)

  The SingleBlock asset appears in the **Hierarchy** panel as an object named “SingleBlock”.
- In the Hierarchy, rename the “SingleBlock” object to “Pedestal”.
- Enable **Snap to surfaces** by clicking the **Snap to Surfaces** button. This allows you to easily position the base of the object along the ground.

  ![Click the Snap to surfaces button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464129353_573870105150945_5383089439026099930_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=pmcFx0vAxHsQ7kNvwE3X9bN&_nc_oc=AdkQPIynXZHZAkKHhFSh0FPkEzKFPt30pqArhR4oiGLcYhWc_U9oUTh55ddArBKbk8M&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfjmXqUHRkPz8wAqRtgzhrjQOcQs1UORdtZwDsnP5EqW4A&oe=692BFDA7)
- With the Pedestal object selected in the Hierarchy, position it by dragging it by the orange dot. You can place the Pedestal anywhere on the ground.

  ![Click and drag the orange dot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475165196_641654818372473_4879658605534264112_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=omIUzczsvBMQ7kNvwEiXXGm&_nc_oc=AdngWoEl3VGrXJzizxY5CnJkO5UnINf9WiGbTovx2IWaOkPwF76vehERA50n38Z8Z-w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afhgmfl5vAVkWZVsYbimCltd3_m8OGeI074FaWADZ0ZPog&oe=692C022B)
- Add the rifle asset to the scene.

  a. Open the **Assets** panel by clicking the **Assets** tab.

  b. Click **Add New**, and then click **3D Model**.

  c. In the **Import Models** dialog box, disable **Preserve offset pivots** because the 3D model for the rifle uses [more than one material for the mesh in the FBX file](/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/multiple-materials-per-mesh).

  ![Don't preserve Offset Pivots](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464008566_573870171817605_7978731282074208552_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=8d02F5ef_CkQ7kNvwFrVlI4&_nc_oc=AdlZr29xsHeIasNM5W36aT4YfCTU5ZxDp6ekswa74husQ0JxNxXkMn14yZYfGYMzDc8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfiYiBmgnFncuZI4dBrxjTjSt5g9Wema05gYP4qNJUIncA&oe=692BD906)

  d. Select the asset files to import by clicking **Choose files on your device**.

  e. In the file picker window that appears, select the 3D model file (ACWpnBattleRifle.fbx) and its associated texture files (WpnBattleRifleA\_BR.png, WpnBattleRifleA\_MEO.png, WpnIndictator\_BR.png, and WpnIndictator\_MEO.png), and then click **Open**.

  ![Select the five asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464310803_573870025150953_4833471769077242766_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=7IvCdrKaY2QQ7kNvwFbASca&_nc_oc=AdlZMnndBCG-BzgPltGrUrOnazDY4OC9kP1fkBuuXdpYAjvk3zhbT3fuaSv55dHCYd8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhDdMLsnZJ_PNru3TPN32jOePWOkF-b6jXIV3WAuhjwQw&oe=692BFAA8)

  f. In the **Import Models** dialog box, click **Import**. Wait for the asset files to be imported into the desktop editor.

  ![This is what the rifle asset looks like after you import it](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464292127_573870045150951_3415127998518177098_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=o4QkA90IDOUQ7kNvwFu7_oB&_nc_oc=AdnbzjDPi_k_mhP_24fbh8kEwZ5LGn3TKB3E18AznCjQy7bfn2XxjuM8pSh9X_D1Qn4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfgY5-bWe5MyE20HoKMqwYylcFLx1iMMYhclsg0_0pZJcQ&oe=692BDBC3)

  g. Drag the rifle asset into the scene, and place it upon the Pedestal.

  ![The rifle floats over the pedestal](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475232756_641654861705802_4132254507512158168_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=joYASGtMBwsQ7kNvwHNPOCd&_nc_oc=AdkIdP_UR2XsK24GJDYeADbNxMbM0qh52QhzwZjEVLyHhHE8J78-w2qs5-KsNHXU7pA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhtbLPeOEVbyqs3HWqIDjwuJ2icw7Q5tl3Y2QuQmn4L1A&oe=692BFE17)

  **Note**: If you’re having difficulty positioning the rifle, remember that you can always use the orange surface snapping manipulator to move objects anywhere along the ground. You can activate it by pressing the “W” key. Optionally, using “Ctrl+G” lets you group the pedestal and rifle as one object, so you can move them together.
- In the Hierarchy, rename the “ACWpnBattleRifle” object to “Rifle”.

Your Hierarchy should now look like this.

![Notice that the rifle object contains two child objects](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475582112_641654881705800_8956813367946191943_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ngmcD3gJRXYQ7kNvwHuihrJ&_nc_oc=AdlV7IGWqwun7Qa_FXqqSRa12Q-_00iN1RtNfh_c7XWTiyS5t3eg151XgXYDFXknTpI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhgfnKkK7cTPVx8F9lCX9B-YLW_x5Pjo9sv4i6Kfu8bhQ&oe=692BE91F)

## Step 2: Make the rifle grabbable

In this section, you’ll learn how to make the rifle grabbable by the avatar.

- Select the Rifle object from the Hierarchy.
- In the Property panel, set the following two property values:

  **Motion** = “Interactive” and **Interaction** = “Grabbable”

  ![Click the drop-down selection list](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/463983859_573870008484288_2943956617777129080_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=UmN675oXyYcQ7kNvwFWgYZw&_nc_oc=AdmIf9MJEgx2L9IGfQsU7R3fASYsJuUm-p_swB1RYZtA63JO4e8E5ULaWIq72ykol74&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfgL6i5ZvwUSgkoMLAkajmcA9AJ1fOgsahKEi-nUyRgOAg&oe=692BFC2D)

  **Note:** The **Interaction** property appears only after you set the **Motion** value to “Interactive”.

## Step 3: Try-out your new world

In this section, you’ll try-out your new world to see what it’s like to pick up the rifle.

- Click the Play button on the menu bar to enter preview mode.

  **Note**: Ensure you’ve configured world simulation to start automatically whenever you start the preview mode. Click the the ellipsis icon to open **Preview Configuration** and toggle on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview entry**.

  ![Ensure world simulation is configured to auto start](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481784596_667180549153233_231569701181011321_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=IILyJs0TJIcQ7kNvwEmTeKA&_nc_oc=Adm-CfofxrtMwwQ-ULE8T8-bMGjpii_TtQla3DATmsarFKO-iESPbQgPmAfeS1h5JGE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afg6Xc-ffjcLNXa_J0XvHRm805R2ZjP0fcA6YwEjK4uHGA&oe=692BF590)
- Maneuver the avatar over to the rifle using the arrow keys, and then pick it up by pressing the “E” key.
  ![Press E to pickup the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475655068_641654875039134_3343217904502966675_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=pQvxi51zwVMQ7kNvwEGOyNI&_nc_oc=AdnK738nB2uKLA8NLPYdp8HuvBZh8PVp_2FtZxfbRl8V0w4JiW3oBGWd2m017W-mxy8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhWeCVl8DbHkZJyOqvoAIqMrS23WPO4KP9FXRqEme-R8A&oe=692BFDF7)
  The way the avatar holds the rifle looks somewhat awkward, but don’t worry, you’ll soon fix that.
  ![That's not how you hold a rifle!](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475514035_641654871705801_2878061070962689344_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=RnVz6igNONwQ7kNvwGot0a4&_nc_oc=AdntuZfjOCbODzKt9fnX8S0Lu9w0E80dSlJFEnfI1enuF9gX4dTE5Tur2k5cwZsQTus&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfiLou_5UbxepXvNT4jUjcEF_EflksVV3Oh_Lgy9g_-qMg&oe=692BF395)
- Exit preview mode by pressing Escape twice.
- Fix the way the avatar holds onto the rifle. With the Rifle object selected in the Hierarchy, in the Property panel, scroll down to the **More** section, and enable both **Use VR Grab Anchor** and **Use HWXS Grab Anchor**.
  ![These settings fixe the way the avatar hold onto the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/469860345_607478945123394_6899703159416175623_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ky3_vDKZENEQ7kNvwFX_6Iz&_nc_oc=Adm9_m1epqnUHGCshWjC6Jm24PQ2xBV6afLdNrzneo2Vd_rc3scbHjCb5khKHrQtP5c&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afh_R4fYEwvFp084a0-eOvNV_PkYIKleS2aTdMloRzLe1Q&oe=692BEF6B)
- Set a pose to use when the avatar holds onto the rifle. With Rifle selected in the Hierarchy, scroll down through the property list until you see **Avatar Pose**. Click the drop-down menu beside it, and then select **Rifle**.
  ![Select the Rifle Pose](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464342330_573869941817628_7549640582068222270_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=54SkHcbAGPoQ7kNvwHfO96J&_nc_oc=Adku9HS0QvtqxMpSj5CEbBGmwWDH7VBu-MYgQv9fjSMDUf1NnCYNjkkoRu1gV5Le-GU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfgAGSAgOkm43LN4L2Tw0dcy67VWukqQiSKSBiinXT9Y8w&oe=692BF52A)
  Now your avatar can hold onto the rifle properly.
  ![Now the avatar holds the rifle more naturally](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475859865_641654841705804_1105400890562108752_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=JOQiZqER25IQ7kNvwEHeUPk&_nc_oc=AdnbNLajJpxdjPRXvC7ega5Avs_ekJi5OVmgeSc8SIP2F492l2UQyr3V690SJUqsBUw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhsfyX_cXpnye7R81-sxyj0WGIJbvryYu1T-6njgcveGg&oe=692BF0EC)
  But the rifle still doesn’t do anything yet.

  ## Step 4: Add a hello world script

  You now have a rifle that you can pick up and move around with, but it still doesn’t do anything. In this section, you’ll make something happen when you fire the rifle. You’ll write code that prints “Hello World” in the **Console** whenever you fire the rifle.
- Open the **Scripts Panel** by clicking the **Script Panel** drop-down. The **Scripts** dialog appears.
  ![Click the Scripts Panel drop-down](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/463979710_573870158484273_6956393922882678343_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=jqSII7ioFHEQ7kNvwEKgQtZ&_nc_oc=Adn2XZMAJzAhtmG6jxsbXh-yZvKFzj_6oy-eLtufxFW2G_kD7-X0vzJ7cxqBy9Uiv-w&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhuLMq0Txw3TvsXPflc4PPcbb55uSaqBbJVmpmEWMDKLQ&oe=692C092F)
- Create a new script by clicking the plus button.
  ![Click the + button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464284760_573870108484278_5626008342355283582_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=6FWal3c5I3kQ7kNvwGhgYN-&_nc_oc=Adk6LI6gpWdJlADxi176Tcy-b80s-OQqDg6WhW8ydPaA33u8Pth9zTmdcWPTUTd_jYE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfiRuVInr0KadlLJ7HkRZo6rrQOJKdUwLYXFwms2Fzbx2A&oe=692BEC08)
- Name your script “Shoot”.
  ![Enter Shoot and then press Enter](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464325206_573869988484290_3165699765154261570_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=494iye4UHpgQ7kNvwGDbsxa&_nc_oc=AdlvCG28wA206xC3V3DDhSVHlUBeziHvA4YoiQOjIXlJbptLrXhl9-IvpyLKMw-rx0M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfgFyVXvoW-J2VZUDskUurkKqnTen_8oqd-bJw5cEnlcEw&oe=692BDB8B)**Note:** It takes a few seconds for the script to appear after you’ve inputted the name.
- Open the script in VS Code. Click the menu icon next to the script name, and then select **Open in External Editor**.
  **Note:** Currently, scripts can only be opened in the aforementioned way, from the top dropdown menu.
  ![Click the three vertical dots to see the menu](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464107203_573870138484275_3986572612224730853_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=-UYa02baqmsQ7kNvwGmyzJh&_nc_oc=AdmPuSA18chDdrvYWJM_XfC3hXiuOa9922_yrO0Z7mlIU5BYc5EFeIsWUtYIGQu5Vd0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfjYmsMYMw1eIJw1vfDhWzt-BkbiJoQrdt700D3GI22fbQ&oe=692BD8D8)![Oen the script in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464190660_573870198484269_3483053417967741197_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=IxDnd2cfemEQ7kNvwHfpxXW&_nc_oc=Adk9-J2nU6XkYyYwUCNOUoHsbEixu3KtqSTCVCF2F86RFdwkae5eO9E0VgyWYijnMKY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afiy8IATsBEF_-UWyTqiyBgXarTx0SXp5OBEjsEfko0dxQ&oe=692BDCAF)
  The new script opens in VS Code in a file called `Shoot.ts`. It contains boilerplate code.
  ![This is the default structure of a TypeScript script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464177291_573870041817618_3500120114101619688_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=D0Pzh1JZrogQ7kNvwFdDAnh&_nc_oc=Adn90fa9yGWmQb0a4jS4UBmAAr0e5LbR6bAGcBsxRY2g9dojW4hlDKp8qpxWVOdvOAQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfjrdgDoHdWhxJr4FPnVPZQRZb5QK_tCKhuKUNbbFz1FIg&oe=692C03AF)**Note:** The `start()` function is called whenever the entity that the script component is attached to is created. At this point though, you haven’t attached this script component to an entity.
- Add the following debug statement to the `start()` function. When the entity that this script component is attached to is created, this statement prints “Hello World!” to the **Console**.

  ```vs
  start() {
      console.log("Hello, World!");
  }
  ```
- Save the script file. You can press “Ctrl+S”.
- In the desktop editor, attach your script component to the rifle entity.
  a. Select the Rifle object from the Hierarchy.
  b. In the Properties pane, scroll down to the **Scripts** section.
  ![Click the drop-down selection list to see your script](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464091170_573869985150957_1926137328255172174_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=dzgnJ2UTFtUQ7kNvwG2kj_G&_nc_oc=Adk5lJdnDuyxvDGYlb0LlAG0-T2kseufq4FO3vVSDTojIh2qvxIZd8RM3rcFqq4xwnE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhAiRb42C8LRU83dYv3DzKCtKToro3wtX5lLNmmHO65Uw&oe=692C0CCA)
  c. Attach the script component by selecting “Shoot:Shoot” from the **Attached Script** drop-down selection list.
  ![Click on Shoot:Shoot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464106799_573870071817615_3222010519411086870_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=7LNGKKWR2X0Q7kNvwFRSadH&_nc_oc=Adn-Wajn9d4I_wDLxW2sOV9QuugaW6IFOQ2LDtr5-np1miPz_XHAyQCAADPshUGdMj8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfiPIFOqWenYlhp41aMMOopratB6tKBfGrDYGHGjQVsSkg&oe=692BDAEF)
- Preview your world by clicking the Play button on the menu bar.
  As soon as the Rifle entity is created, the script prints “Hello, World!” to the **Console**.
- End the preview by pressing Escape twice.
- You can see the debug message by clicking the **Console** tab at the bottom of the page.
  ![Hello World! appears down at the bottom of the Message list](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464178601_573870128484276_4374457029334205218_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=NKpKuHaTIDgQ7kNvwFnmWRb&_nc_oc=AdmSm95SYkVdg6889UIUgU0viXdADB7zFArbpzdKSsJALCs_nPLm_1MVu_PGTzpK9X8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfituyJift0_EwcJ8UbGoFpMOYlQ1amSek5w4GgrfPKVMA&oe=692C0370)
  You’ve made your world interactive. The script outputs the message “Hello, World!” to the **Console**.

  ## Step 5: Refine your script

  But you really want the interaction to occur when you pull the trigger, not simply when the rifle is created. In this section, you’ll revise your script to print a message when you pull the trigger. When the rifle is created, an event is also created that fires each time you pull the trigger.
- Replace the code in the `start()` function with the following code:

  ```vs
  start() {
      // React to an event when the user pulls the trigger.
      this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, (player: hz.Player) => {
          console.log("boom!");
      });
  }
  ```
- Save your script.
  When editing your script, errors might appear in the **Console**. When this happens, you can clear the error messages from the **Console** by clicking **Clear**.
  ![You can clear the error messages](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464347386_573869901817632_7646464504087582755_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=bL0xH5s_nJAQ7kNvwE9mMpY&_nc_oc=AdkcaudrIXzk7ah3YFDET8mjrdmo_55AHOTNcKzPSbLbXyJok6RGqBLc3Sp_W_CsxZU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afh6phoyYEaYUyuH7OJJsjmp5xHqXWM3HSJAiY5sJomvhQ&oe=692BE6BD)**Note:** Normally, you shouldn’t see any error messages in the **Console** window. If you do though, then try copying and pasting the code instead of typing it yourself.
- Preview your world by clicking the Play button.
- Walk over to the rifle and grab it.
- Fire the rifle several times by clicking the **A** button on the screen. As you fire the rifle, notice that a “boom!” message appears in the **Console** window along with the number of times that the message appeared.
  ![Look at all the booms!](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464389048_573870095150946_7738181260387489635_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=nuH4RNT_LHcQ7kNvwETtkTA&_nc_oc=AdkjDi7zykpw5zgRvu8HdKPOAS-mgSYeVwwXHPIQlemhaJ2znNr-FY0kdeAGnt3YEmI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfidDe53xxfT874-Bk8V0UWZJwOJ_WNJnOwOPGPn9mJfiQ&oe=692BDCE9)
- End the simulation by pressing Escape.

  ## Step 6: Add a projectile launcher to the rifle

  You now have a rifle that you can pick up and carry around, but it doesn’t actually do anything except print debug messages. In this section, you’ll make the rifle launch projectiles.
- Select the Rifle from the Hierarchy.
- Focus on the Rifle in the scene by pressing the “F” key.
- Click the **Build** button.
  ![Click the drop-down button](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464331432_573869915150964_3815683403137700120_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=DsxThsp0Uw0Q7kNvwFYebYs&_nc_oc=Adk4Pr6F3qTACgAoqFHpsZx6_ZgtkyRHmXC2352L6B0HHSq6QJaDrMxSPKr50bDFe2c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhxDxzYQdUHWgyoOG6bE2uCOcH4_WZjWG9nPBD6YZFFZw&oe=692C02DA)
- From the drop-down menu that appears, select **Gizmos**.
  ![Click Gizmos](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464197626_573869951817627_8947530193925354975_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=uHQxZE636VgQ7kNvwEVW8jE&_nc_oc=AdmXySbNm3ZSssjqjYnEhQCr7cvgNL9Qjr-rGJgkxOkkHE0DWTYvUUg9ZoC6J1KHsCU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afhi5uXUbM2Y87851-jTo_nUPhCKqe9VGxCKe_PI0ve25g&oe=692BFE29)
- Select **Projectile Launcher**.
  ![The icon for the projectile launcher gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464179364_573869968484292_6347379331044320910_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=g9Bn1jQlRz0Q7kNvwHqVC6m&_nc_oc=AdlbWr1HWbetXpmmCiY3Jg-YdXpml9xcoKBeMRGjSau21VxwEejpCmUKymox3xgXYfQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhmRwgL7Zm5T2JSrNzNI4QlnAuCKVgqAJLqa10h_7Ftug&oe=692BFF67)
  The **Projectile Launcher** gizmo appears in the scene, and in the Hierarchy. Pressing the “F” key while the object is selected brings the object to focus.
- Close the **Build Gizmos** panel.
- Attach the ProjectileLauncher to the Rifle by making it a child of the Rifle. In the Hierarchy, drag the projectile launcher, and drop it onto the Rifle.
  ![Drag and drop](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464060217_573869908484298_3061206173699646062_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=FbtmzVHXPBkQ7kNvwE8Yssf&_nc_oc=AdmurV4affwIvcgrCxwrHgaDmfo-TuietnN2uQuGr1Xv9TMc8MPMEhbAB0PkfmmNmWI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afg5AtV2GYgtOOgW94bKb2QK2AJODBI6zSSBGaRSU-A3_Q&oe=692BFE36)
  The ProjectileLauncher should appear indented in the hierarchy since it’s now a child object of the Rifle object. You can expand the hierarchy by clicking the triangle.
  ![It's now one of the Rigle's children](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464190942_573870178484271_3293882596374239688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Phfl3kI8mZ8Q7kNvwHv9wsR&_nc_oc=Adne-TgBRReULdLvHTDpb5ZrMSl7I49FXOdZlJ5tpEKwplL8F0klB0ou4ZXQx5mfs1c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afjf9q5rWgoY1i4f3RBVAAIRn4BYGpGkUKKwQFmJCGk7JA&oe=692BFB12)
  With the ProjectileLauncher selected in the Hierarchy, position it relative to the Rifle.
- Adjust the Position values of the projectile so it aligns with the aim of the rifle.
  ![Align the projectile with the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475194437_641654878372467_7693479725163060948_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=dV1GExb5JqQQ7kNvwHCD44r&_nc_oc=AdkoW3-WUukYpqewPf-YsL-lnIMlsrau47kIxezThYSyyaKHk2wRXOSIsDEopfLfGvM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfieLt6qVbBvFWcbFQBxP_ZxxTxGWA4EOiGzPFyzAy1ARw&oe=692BE87C)
  These adjustments in settings ensure that the projectile launcher appears at the front of the rifle, and that projectiles fire in the forward direction.
  Additionally, to make the projectiles easier to see, adjust **Scale** and **Trail Length Scale** based on your preference.
  Everything is now hooked up. Next, you’ll edit the code to make the rifle interactive.

  ### Section 7: Hook up the projectile launcher

Earlier in this tutorial, you got a debug message to appear when you pulled the trigger on the rifle. In this section, you’ll update your script to use the projectile launcher whenever you pull the trigger.

- To use the projectile launcher, you need to reference it in your script. Update the **Shoot** class’s **propsDefinition** with the following statement:

  ```vs
  class Shoot extends hz.Component<typeof Shoot> {

      static propsDefinition = {
          launcher: {type: hz.PropTypes.Entity}
      };
  ```
- Add a statement to the `start()` function that creates a reference to the projectile launcher gizmo.

  ```vs
  start() {

      // Store a reference to the projectile gizmo in the launcherGizmo variable.
      let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);
  ```

  With a reference to the `launcherGizmo`, you can call a function on it (`launchProjectile()`) to launch a projectile whenever you pull the trigger.
- Add a statement just before the `start()` function that adds a property for holding the launcher options.

  ```vs
  // The options to use when launching the projectile.
  launcherOptions: hz.LaunchProjectileOptions = {speed: 50};
  ```
- Add a statement to the **OnIndexTriggerDown** event for launching a projectile.

  ```vs
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

  ![There is a launcher property in the property panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464076144_573870208484268_3571774494949796316_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=HrQOp3UN9qIQ7kNvwHUvbLk&_nc_oc=Adna5v8deKZKT2L1TMhC_eDEmq05XtkyN_8o6YcA9QjhfILXkWHt6t7-rvw3xKBrR64&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfgzXiIA0Z53xqEcBscDSAY9l4qG_2X3uursyd8uWhZF-w&oe=692BE7C5)

  **Note:** You might have to deselect and then reselect the Rifle object if this new property doesn’t appear.
- Set this **launcher** property to the **ProjectileLauncher** object. Click on the field beside **launcher**, and then select **ProjectileLauncher** from the list that appears.

  ![Select ProjectileLauncher](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464035648_573870011817621_4324077274258554259_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=vy5cOT6oNTgQ7kNvwFWCXCR&_nc_oc=AdkZgdHuZg9_wtrH-NbzXtYSab17PIocFfe14dqE3r6RCjdNQxigBH9f59LRqqQTonI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfgbVJspNUI1I9XGAr2I4F63m43R_jxuIEAJLA0j-T9IBw&oe=692C0B8E)
- Preview your world by clicking the Play button.
- Walk over to the rifle, grab it, and then click the mouse button. Notice what happens, a shot appears to come out of the rifle when you pull the trigger. Next, you’ll update your script to accumulate points whenever the player hits the target.

  ![A shot appears to come out of the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475273504_641654838372471_3353505584347988670_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=VbFv195ELe4Q7kNvwHtbrce&_nc_oc=Adl74R1NmhFtF6c9vngcrVELT45jAlHPIKYvh6jPNlRpwl8ixRtIxIPL0xkh0FesCds&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afgemlbf-lb8gk4fIWesDDhI2gQWnIT94t5IoQgQhQNnUw&oe=692C05BD)
- Exit Preview mode by pressing Escape.

### Section 8: Count points whenever you hit the target

In this section, you’ll update the script so that you score a point each time you hit the target.

- In the desktop editor, select the SpawnPoint in the Hierarchy.
- Click **Asset Library** > **Public Assets** under the Scene pane.
- In the Search field, enter “skeletoncrayta” to find the skeleton.

  ![Pirate skeleton](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464152935_573869948484294_7911900688495928080_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q2SLUEpFLPUQ7kNvwFkAcuz&_nc_oc=AdmsaU-ar_TdHW_GzR0mY9BypdouoWOVMhjAlPmFQtP_s-ssR4pVrPHVP4BH5RcRCp4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfgDml9iJmtDSeZByUe2R1bagpRfAQKgq7ZtYVKHCW6q3g&oe=692BF642)

  A skeleton object named [UnityAssetBundleGizmo](/horizon-worlds/learn/documentation/desktop-editor/assets/unity-assetbundles/horizon-unity-assetbundles-overview) is added to your Hierarchy, and appears in your scene.
- Rename the skeleton object from “UnityAssetBundleGizmo” to “Target”.
- Position the target anywhere in the scene.
- Update your script so that whenever a projectile hits an object, a point is added to your score. You’ll need to add a variable to track the current point value, and to initialize its value to zero. Add the following statement near the top of your class, just above the `start()` function.

  ```vs
  // Keep track of the user's score.
  points: number = 0;
  ```
- Add another event listener inside the `start()` function that fires whenever a projectile hits an object. Copy the following statements to the end of the `start()` function.

  ```vs
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

  ```vs
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

    ![Every time to hit the target, the score increments](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475121433_641654885039133_2447663056588542102_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=AXOWqqS1_skQ7kNvwGevrY3&_nc_oc=Admup2WFUEpYULoNpgNz48ymVG8DqLtpgZrHo55Tsj_-oPqWNaPmLWWyXw4VBFDwEFE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfiN2yUfE3OBvTkLmc1E3Qo5tmitPGFrVHnPyPvDJatH6g&oe=692BE9EB)

    Every time you hit the skeleton, a message prints to the **Console** that tells you how many points you’ve scored. If a shot doesn’t hit the skeleton, then the console message simply doesn’t appear.

### Section 9: Display the score

In this section, you’ll revise your script so that the score appears in the game.

- Add a **Text** gizmo to your scene.

  - Click the **Build** drop-down.

    ![Build an entity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464331432_573869915150964_3815683403137700120_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=DsxThsp0Uw0Q7kNvwFYebYs&_nc_oc=Adk4Pr6F3qTACgAoqFHpsZx6_ZgtkyRHmXC2352L6B0HHSq6QJaDrMxSPKr50bDFe2c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfhxDxzYQdUHWgyoOG6bE2uCOcH4_WZjWG9nPBD6YZFFZw&oe=692C02DA)
  - Select **Gizmos**.

    ![Select Gizmos from the list](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464197626_573869951817627_8947530193925354975_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=uHQxZE636VgQ7kNvwEVW8jE&_nc_oc=AdmXySbNm3ZSssjqjYnEhQCr7cvgNL9Qjr-rGJgkxOkkHE0DWTYvUUg9ZoC6J1KHsCU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afhi5uXUbM2Y87851-jTo_nUPhCKqe9VGxCKe_PI0ve25g&oe=692BFE29)
  - Select **Text**.

    ![Select the Text gizmo](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464276063_573870021817620_5656500703368336488_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=NNPlDeA6Uk4Q7kNvwFIQarV&_nc_oc=Adn7kzZh3W5_ILCGxdNoMamHG9wva1yLSfBXQEZsN7wOadgqEXk7fCoyyXajbRO7mWw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfgcfvNGqH0yLnG5GSIGymKFI2K5EjhyKyeXVmSrSwoohQ&oe=692BF949)

    A **Text** gizmo is added to the scene.
  - Position the **Text** gizmo within the scene so that you can read the score while you’re shooting at the target.

    ![Position the Text gizmo so you can read the score](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475549601_641654858372469_2650846579364077855_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fg53vp4Ob3kQ7kNvwH4YRuL&_nc_oc=AdlcT0V7I_f7JQejoQkZ4tuv4ug_UC2BsUzD-JvzcrPVnR6wrIorBhzJHC_40UaatvA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afg9iNb9RdrVgPU0B9fQ8u7a3kgyyDx0tF1lCJXK0rkh2w&oe=692BF9B4)

    You’ll need to rotate the **Text** gizmo so that the text displays in the correct orientation.
- Update your script to use the **Text** gizmo. Remember, if you want to reference an entity property within a script, then you need to add that property to the `propsDefinition`. Add a `scoreView` property to `propsDefinition`.

  ```vs
  static propsDefinition = {
      launcher: {type: hz.PropTypes.Entity},
      scoreView: {type: hz.PropTypes.Entity}
  };
  ```
- To be able to use the `scoreView` property, you need a reference to `scoreView` as its specific type: `TextGizmo`. Store a reference to the `scoreGizmo` object in your `start()` function.

  ```vs
  // Store a reference to scoreView as its specific type: TextGizmo.
  let scoreGizmo = this.props.scoreView?.as(hz.TextGizmo);
  ```
- Update the scoreboard text by adding a single statement beneath the `console.log` statement that calls the `scoreGizmo.text.set()` function.

  ```vs
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

  ```vs
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

  ![The scoreView property appears in the property panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464222401_573870035150952_285145257509364434_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=2XZWGvRG6xoQ7kNvwFY0zoC&_nc_oc=AdnRxDb3n_K-6lpVtIklPcGSG5zOaKuty9zOZZ2LF2r7uf8M_ef1HHrs0w3I46TfQZM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afh9fmNiaar1uC1noLanCqlB8gUUXxQLwjJ9RtHT7Lb-PA&oe=692BF6B5)

  **Note:** You might have to deselect the Rifle, and then reselect it if this new property doesn’t appear.
- Set the value of `scoreView` to the Text gizmo that you added to the scene. Click the drop-down selector beside the label **scoreView**, and select “Text”.

  ![Set the value to the Text gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464088168_573870068484282_6798580279511898058_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=6oAyCGsJVQMQ7kNvwFmKV5V&_nc_oc=Admf-ECqnAgSI6XzRiI3fJWPl4bC5VfB6EGAxyXnzIaLCNw4cPZTwiCb0JexnOp4HTg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afj_4u9snZTjN1pNlkgXGDLGzbFesau7Nir8M5Ewd4hJUQ&oe=692BE04B)
- Test your world.

  - In the desktop editor, select the **Console** tab at the bottom of the screen.
  - Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.
  - Walk over to the rifle and grab it, and use it to take several shots at the skeleton.

    ![Rack up some points by shooting the target](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475293293_641654835039138_2953793375639169747_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Sx_SDjbRKOwQ7kNvwFxiMAX&_nc_oc=AdlEInc-K_ukITTdthmMHTe85icTm2AOTd47jji8oMVRZwlojcNojSdFYkbcDR-NfNU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfgOW55NjCDwHqaEOg7gRNCtkOA2TFmuJ2CpoGYEgYFeAw&oe=692BFA86)

    You should see your score floating in space, and it should increment each time you shoot the skeleton.

### Section 10: Create a second rifle

In this section, you’ll convert your Rifle/ProjectileLauncher combination into a Template Asset, and then you’ll use that asset to create another rifle.

- From the Hierarchy, select the Rifle. This object has the script attached to it, and it’s also the parent of the ProjectileLauncher.
- Right-click the Rifle object in the Hierarchy, and from the menu that appears, select **Create Asset**.

  ![Turn the Rifle object into an asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464006274_573869955150960_8083174888610967206_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=XGg5pAgEXvcQ7kNvwHz2rTl&_nc_oc=AdnjyoMKdaxnP5sjp87z5V2HhaWioyELjKhRyC_o2Ts0o7ie9g9HLhqyx6zK1bLTNNM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afj8iAAXZmzbAOErF1LMkXkaYXdZapBWcDV99aog5ZXpOQ&oe=692C01B5)

  The **Create New Asset** dialog appears.
- Type a name for the asset, and type a description of the asset, and then click **Create**.

  ![Fill in the asset name and the description](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473721798_631480272723261_8456815458843473069_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=rsi1oXfN8uAQ7kNvwEyb_j4&_nc_oc=AdnDd_GhouJ2r5cB-CVMpJyi5CL72QmzaP_6BVMI5AR130oevWtSkVvH4MGsPE-wbjQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfjoQ5MvGBmr32mVxGaxGTNTI5iXKGomMy645oRetcZuUA&oe=692BDC65)
- Open the **Assets** tab, and then select the **My Assets** folder. You’ll see your second rifle asset there.

  ![Your new asset appears in your My Assets folder in your Private Assets Library](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464099449_573869905150965_6806556283750141783_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=EuXgQKzzlakQ7kNvwFOjIKB&_nc_oc=AdmBTVuutFfTBvsmCv7aJWiG4eg1J6KHA747hsZ--3vSfhg7LqC66Jy38BlrRt4COqk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_Afj4hVlgPYiT-JkC3T5LSu_VTrKl0IsUGGR1lylnnsRX0g&oe=692C0E9A)
- Click and drag the new AutoRifle asset, and drop it anywhere in the scene.

  ![Place the new Rifle anywhere in the scene](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475226479_641654815039140_955495808021670869_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=V7b_JcEhwLIQ7kNvwGoDtTs&_nc_oc=AdmXgf9rTfZs1Ngg-I2yGz4SOI4sp3AVdSSjLehSLENbAG4UJ0360fvUytoWtk4BqF8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rrlmmi1JPI9czGN_ZqeeIg&oh=00_AfiwwH-xU6JIQshMeI9kbReldgIHx_GemyXaEmbPK66pDw&oe=692C0D40)
- Test your world. Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the second rifle.

  Notice that you can use either rifle to shoot the skeleton and generate a score. Each rifle has its own score, which means the text box swaps between the scores as you swap rifles.

You’re done! You’ve completed building a game in Meta Horizon Worlds! In the next section (which is optional), you’ll try running your game in 3D on a Meta Quest headset.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

* Try the [Batting cage tutorial](/horizon-worlds/learn/documentation/get-started/batting-cage-tutorial) now that you’ve created your first world.
* Learn about the desktop editor with the [Introduction to the desktop editor](/horizon-worlds/learn/documentation/desktop-editor/getting-started/introduction-to-desktop-editor).
* Learn about the other tools available by reading our [Tools overview](/horizon-worlds/learn/documentation/get-started/tools-overview).
* Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.