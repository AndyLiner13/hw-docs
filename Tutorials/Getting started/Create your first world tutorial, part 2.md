Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started/create-your-first-world-continued

# Create your first world tutorial, part 2

**Welcome to Part 2 of the Creating Your First World Tutorial**

In this tutorial, you’ll continue to learn how to create a simple game in Horizon Worlds, where you shoot marauding skeletons in a graveyard. Where [Create your first world tutorial, part 1](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world) showed you how to create a new world and build the basics of the game, part 2 will take you a bit farther.
Part 2 shows you how to import custom models, which are which are complex 3D models that are not available in the public asset library. You won’t be creating them here—you’ll use demo assets so you can see how they’re imported. Once you’ve done that, the tutorial shows you how to write a basic script and attach it to the entity to create behavior. The tutorial ends with testing the simple game in virtual reality.

Creating customs models is outside the scope of this tutorial, but if you want to find out more about them, see [Creating a custom model](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

If you’re looking for the first half of the tutorial, go to the [Introductory Tutorial part 1](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world).

The key things you should learn from this module are the following:

* Importing custom models into your world
* Adding entities to your game
* Scripting entity behavior
* Trying your world in virtual reality

**Note**: This tutorial assumes that you’ve completed the prerequisites discussed in [Create your first world tutorial introduction](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-a-new-world-intro).

This part of the tutorial requires that you first complete [part 1](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world), as this is a continutation of that process.

## Step 1: Add a pedestal and a rifle

In part 1 of this tutorial, you created the graveyard. But if you’re going to hunt marauding skeletons, you’ll want to add a rifle and a pedestal to make it easier (otherwise you’d have to use your hands and that gets messy…)

- Download the [Demo Assets](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=A33KkoztyZEQ7kNvwFhQyY8&_nc_oc=AdkqPZBJe8M2kmXc7vEBUGc8__6emxNDrL7oEx85XGa-ODISrV8jM95UX7qYGPEdotGcHkJcbeeMWnmhPFHXrGEH&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfkfjsOrUvJHbF1wB3GZUo7NnzrbyUV2hBzeDL5h_n979Q&oe=69558EC5)
  .

  This file is a zip archive that contains a number of pre-made assets that you’ll add to your game (like the rifle).
- Extract the contents of the zip archive. folder.

  a. Open the downloaded zip file.

  b. Click **Extract all**.

  c. Browse to a location for the folder on your local hard drive and click **Extract**.
- Add the pedestal to the scene. To do this, click **My Assets** on the **Asset Library** tab at the bottom of the screen

  ![The My Assets tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515073444_756887460182541_1703766811137744765_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=sEZ70eaSR-0Q7kNvwGXtP6a&_nc_oc=AdlA898hiHt_F83KVR2wzKYaRbvyMjRKM8iLqzK-4F8QUpLRckcHqsZtSr1nOwP0fGY9mxNoOkuSFCVGXRS4VXdh&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afl_B83Rt5ZDQVHjua19Cd-KZCABks8hKq5crlLDgMnzHA&oe=69559BD7)
- From the **Add New** list, select **3D Model**.

  ![Adding a new 3D model](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366312_756887446849209_4679233969024346019_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZW5XVAz8rgEQ7kNvwEXw_pU&_nc_oc=AdlOKRMc2S4HUnEZk4urGCgU_nCxrm-B-YoVVB2RY8JX6Mcryky-GCUBftaboNEL3cc_VbDSNXl4hXIB5crTSb0e&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkNdbQCI8p5v6j5a1hDeSd8GUd4zFweNQZrQz7S2QjdmQ&oe=6955848D)
- In the **Import Models** dialog box, enable **Preserve offset pivots** if it isn’t selected already.

  Because of the way they move, certain assets use [offset pivot points](../../Desktop%20editor/Assets/Use%20offset%20pivots.md), where the point around which they turn or pivot is offset from the center of the asset. This is so animation of the asset can look natural.

  Ignore the warning the dialog box shows: all the assets that this tutorial works with are [single mesh](https://developers.meta.com/horizon-worlds/ learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models) files.

  ![The Import Models dialog box](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515276565_756887456849208_4413823266568814632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=b81myc4MgsYQ7kNvwGtUyA7&_nc_oc=AdlefnrabACsC2OF0am1tfdDaD1omCXDfgFTpPUG7RpggGD5xtuBzK6HZUVaZgFBbutCxLoD7yrBjsGzYo2hlloT&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfklBiXFcElXabmO65qNHakLfAL1-yLlCyeWVDEeVcia5w&oe=6955A10F)
- Click **Choose files on your device**, then navigate to the folder in which you extracted the demo assets.

  ![Choosing the extracted files.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366476_756887433515877_6413619545446559528_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ef6grXwiOMYQ7kNvwHIdXZD&_nc_oc=AdnDFWSJG-eqHyPiFqok428CP-yClBH0lDhYMHPiwCCE6r6nnT4foQo0nCFOPklgLxev5HtqYO4-B73a12klx4ZL&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afk56xbDA14MeVOdvicbACp8ZQm_QmYjVqAMHfnS_jf38A&oe=69558EE8)
- From the folder on your hard drive, select the `SingleBlock.fbx` and `StoneBlockKit_BR.png` files, and then click **Open**.
  `SingleBlock.fbx`is the 3D model file (or `.fbx` file) and `StoneBlockKit_BR.png` is its associated texture file. These are the files that make up the pedestal asset.

  ![Select the asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515092034_756887443515876_6027285087868923840_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=r_eIcHnvpwEQ7kNvwGAqeD8&_nc_oc=AdnJf2zakeV2quc89UZrZAwqIzVRukJqRNfKORvh4G2tDU9TXGl1hYDwkk55duH0LIrchrHW5blat_5Cv39M9Pl_&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Aflz1c5_2AJI_PejPXiu5_Wm8fmJ00IYDsA4bu5UAyG_Pw&oe=6955875A)

  These are then displayed in the the **Import Models** dialog box.

  ![Asset files displayed in the Import Models dialog](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515097062_756887440182543_8868542573376784040_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=-EOQtJ5WVEIQ7kNvwFZ-qdC&_nc_oc=AdlwnyhPo8oIaA7yUrEwKAx6yRU3W3-sdt1MlijWLIsWg622_ry8-FlWnOYFLgwNM5IXWCCHNNAl7OxLtIx9fmLo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afljc9K2UINDl9oLxA2p1qSNcvx3qw0g1OTEaCtQB3A0cQ&oe=69557AEF)
- Click **Import**.

  **Note**: If you decide to leave your world at this point, it’s important to wait for the asset files to be imported into the desktop editor before you leave.

  The SingleBlock asset will appear in your library when it’s been imported

  ![The SingleBlock asset](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515875637_756887453515875_4696101948964392756_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=qGIVh-QDsnwQ7kNvwGGzmE9&_nc_oc=Adk6iDAj4KgDBcep3rXqjkbGcXrWs3kXv7SZ6EUZ_y3X5HK4UEDRfgpUzbNtC7J_90iIMtPwssAMcilv6J9Aqweq&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afnyj32HafDD1iR70AsGw4MHQbFwHqNJ5qUXcIqeHZcCQQ&oe=6955773A)
- After the asset files have been imported, drag the SingleBlock asset into the scene.

  ![Inserting the asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/514954847_756887450182542_369195396390371839_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Aj-Cbu6xaBEQ7kNvwE-cHe-&_nc_oc=AdlWs6b_dBaJT7pyrzYVTtbCStkwM1bled7n2q6iSaICJuoTFEh_kN1ZJ7hiq6XMM28M48QJviqR86eBu8MWknC5&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfnSvA-qimj1rh0qeIDsCnk5zLrCTT6VEtH8UN22spogiw&oe=69559841)

  The SingleBlock asset appears in the **Hierarchy** panel as an object named “SingleBlock”.
- In the Hierarchy, rename the “SingleBlock” object to “Pedestal”.
- Enable **Snap to surfaces** by clicking the **Snap to Surfaces** button. This allows you to easily position the base of the object along the ground.

  ![Click the Snap to surfaces button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464129353_573870105150945_5383089439026099930_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=HRnYKLK-YH8Q7kNvwFtiUWz&_nc_oc=Adkgm346GHFyiRxgI4K3KJs6fVAF_uYs-bcciwHS4ba2cwMJQiMKrhIjqUoet7r4R-XJ2X-nIXxfkt3BravUvORg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfljIFOFc0cjGBtPv9J46ugBhIfLCAZ-ZtqfuZJHGVqkzA&oe=695584E7)
- With the Pedestal object selected in the Hierarchy, position it by dragging it by the orange dot. You can place the Pedestal anywhere on the ground.

  ![Click and drag the orange dot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475165196_641654818372473_4879658605534264112_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Xo0wDIS_szUQ7kNvwHaWSUK&_nc_oc=Adm3UL5Xa7-A8Q-LgrCAXCcGFH9wBGeiqap5R05zBPup3c6rYsYal3sEQfcbboJL1D_S_sWbsfTX6PyQYiVTu70P&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afn2sah8HcmitcrdM4o69yIHemyltPug5xw6qTHQ5ovAYQ&oe=6955896B)
- Add the rifle asset to the scene.

  a. Open the **Assets** panel by clicking the **Assets** tab.

  b. Click **Add New**, and then click **3D Model**.

  c. In the **Import Models** dialog box, disable **Preserve offset pivots** because the 3D model for the rifle uses [more than one material for the mesh in the FBX file](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Multiple%20Materials%20per%20Mesh.md).

  ![Don't preserve Offset Pivots](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464008566_573870171817605_7978731282074208552_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=_lRzS0jc_6sQ7kNvwHjw82z&_nc_oc=AdkDTGUtOTv2_sq1wLe2ExzO9SAg4XdyNXNP-HbPf0R8MSpwBJmiMRc9v8359AgJsKhmvw5_J9fkm2ZRd-3ZCs9X&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afljx1kg2BWMUCd1XZ_SVtlYMjd2GP5qvONAcGl10k4VBA&oe=69559886)

  d. Select the asset files to import by clicking **Choose files on your device**.

  e. In the file picker window that appears, select the 3D model file (ACWpnBattleRifle.fbx) and its associated texture files (WpnBattleRifleA\_BR.png, WpnBattleRifleA\_MEO.png, WpnIndictator\_BR.png, and WpnIndictator\_MEO.png), and then click **Open**.

  ![Select the five asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464310803_573870025150953_4833471769077242766_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=fCO1vN64CbgQ7kNvwGl7Yx5&_nc_oc=AdmLcU8k7qc-A81qwLN6h_e6ZHXcutJdxkDR97RmhO60NsY85CSuRK2-NHF_udKdBsBRB5G7-hxaFKGDJA1Me1OS&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkYiMaJrTMXA9bKhSq9Evjzq6QOUS_JRkaOJ_6FiLm3ng&oe=695581E8)

  f. In the **Import Models** dialog box, click **Import**. Wait for the asset files to be imported into the desktop editor.

  ![This is what the rifle asset looks like after you import it](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464292127_573870045150951_3415127998518177098_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=LrDNCXuB6vYQ7kNvwGM8yGs&_nc_oc=AdlzjiGUMBHMfEjLxoRnwF4JBrLhIUvSC7GMoYtK8lh2dMkjexKKBZ8SapVtDdY2WYoyYadpEE4AImP1FwvkBBqE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afl5hW1trb_w0BoMYSbILJBbdUnsp6JOWbEmZ00n9Qt1mg&oe=69559B43)

  g. Drag the rifle asset into the scene, and place it upon the Pedestal.

  ![The rifle floats over the pedestal](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475232756_641654861705802_4132254507512158168_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=GVaOZurCQIgQ7kNvwEsh813&_nc_oc=Adkt0zDs4VCTR7USVtiFXx87-VhDuYgXloswh5vyTki-o7tJz_MMOdbRvuglF9dR_1HTXxS8RByLerKOz9tb0hBe&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AflIlYAHnXUtERMrOmyiSPQvL7yMo3CxfU0-OZILwyGlDg&oe=69558557)

  **Note**: If you’re having difficulty positioning the rifle, remember that you can always use the orange surface snapping manipulator to move objects anywhere along the ground. You can activate it by pressing the “W” key. Optionally, using “Ctrl+G” lets you group the pedestal and rifle as one object, so you can move them together.
- In the Hierarchy, rename the “ACWpnBattleRifle” object to “Rifle”.

Your Hierarchy should now look like this.

![Notice that the rifle object contains two child objects](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475582112_641654881705800_8956813367946191943_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=2NVQ04KrhbIQ7kNvwGj35UW&_nc_oc=AdnEDO-9Gz6VvX5PO_kYR_6K6orphBp3r1Ls0TqzmkiXa19en_XTTHo4bL6w4L0E7jgGJoNNE117sTa77ZTS7csX&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afk1EEEwMAwjapVyJcBckLPO8QsIu9-toyu3YOZ7E1W5Rg&oe=6955705F)

## Step 2: Make the rifle grabbable

In this section, you’ll learn how to make the rifle grabbable by the avatar.

- Select the Rifle object from the Hierarchy.
- In the Property panel, set the following two property values:

  **Motion** = “Interactive” and **Interaction** = “Grabbable”

  ![Click the drop-down selection list](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/463983859_573870008484288_2943956617777129080_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=99Q4TqFdiIMQ7kNvwEayGDa&_nc_oc=AdmFV3Tqu8sDRsCznwQjwFadK2lSQwANw8ResrwKacToPnEKYDL-P5LxkUZyIJ_8XAj5B6-ihmo2YFeg6aDA_usg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfmDrh5BtRfD09itwpD1y_fYski2HBA-2DwsuN42DzTAtA&oe=6955836D)

  **Note:** The **Interaction** property appears only after you set the **Motion** value to “Interactive”.

## Step 3: Try-out your new world

In this section, you’ll try-out your new world to see what it’s like to pick up the rifle.

- Click the Play button on the menu bar to enter preview mode.

  **Note**: Ensure you’ve configured world simulation to start automatically whenever you start the preview mode. Click the the ellipsis icon to open **Preview Configuration** and toggle on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview entry**.

  ![Ensure world simulation is configured to auto start](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481784596_667180549153233_231569701181011321_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=UmxSDMBUEJoQ7kNvwFy87DA&_nc_oc=AdmVyk45i5Lz4z7B9CFNqGzfN2KDH2BSWGMO4GtUt4mIrAIe6r9uSj9PN-4ytGr2grI3fpnqvuMaE8TJlJRuTIAD&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfnnU4UPNWOwIYYXunRy96KFNsTBUNgKbtpGvJJZ5ZTQtA&oe=69557CD0)
- Maneuver the avatar over to the rifle using the arrow keys, and then pick it up by pressing the “E” key.
  ![Press E to pickup the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475655068_641654875039134_3343217904502966675_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=xrUTX0ZRlEIQ7kNvwHbIlu6&_nc_oc=AdlvmH95IPjYUcuAaZjkpZLHpLrl9O8YiM5jlW00EmAYoq1gv2tANAkatKGJgxJ_ctfzA2kk_MB8igN0pahlxoKc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfllTiTrVjJiWYOle3QHaAjupn-Xx8P_J_FxzOnxEmraVA&oe=69558537)
  The way the avatar holds the rifle looks somewhat awkward, but don’t worry, you’ll soon fix that.
  ![That's not how you hold a rifle!](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475514035_641654871705801_2878061070962689344_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=-aQCN6ltuusQ7kNvwGwgl-B&_nc_oc=Adm7_rr8tiQ2O66Z5ci9i7-PLVBEKaRaK_GeBhhXUhCZBNwNzCpTfW6_8mD1hsj_469Joa-RE_RhnywnsUW2RDRk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfncVwkIYb7i7BGlfs904lsIwojTX4cp5_6VkstjEiujrA&oe=69557AD5)
- Exit preview mode by pressing Escape twice.
- Fix the way the avatar holds onto the rifle. With the Rifle object selected in the Hierarchy, in the Property panel, scroll down to the **More** section, and enable both **Use VR Grab Anchor** and **Use HWXS Grab Anchor**.
  ![These settings fixe the way the avatar hold onto the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/469860345_607478945123394_6899703159416175623_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=95rlm8p_wCoQ7kNvwEep9J5&_nc_oc=AdlY-OBjgx2bcRusSKTQmPZJQuf5_NEIinw8mGF4nMTU3CJL-k0LPq_eNQ_uw4420H1fhZuxzhqaDA3HJsGyrCPp&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AflFOiWpUmVhzaFIhj_lfrYocDaXl_slNf2Ry1wA3U8tUQ&oe=695576AB)
- Set a pose to use when the avatar holds onto the rifle. With Rifle selected in the Hierarchy, scroll down through the property list until you see **Avatar Pose**. Click the drop-down menu beside it, and then select **Rifle**.
  ![Select the Rifle Pose](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464342330_573869941817628_7549640582068222270_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=kxBCJCsv1hgQ7kNvwEdoJLm&_nc_oc=AdlaXSlzqrIbDo0ASXNMyKpjtS7YVHNfWxHrc1uH4XJqUYY0WTD7ih89EsgNfpohwf90RsiasuOavBzdvRHNyi2A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkM3A4KhlyrdKf8P7xgCCvfU_kW9S8qSbzGSWX7jSqFig&oe=69557C6A)
  Now your avatar can hold onto the rifle properly.
  ![Now the avatar holds the rifle more naturally](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475859865_641654841705804_1105400890562108752_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=9Uo2-v9pMnMQ7kNvwEEsvmL&_nc_oc=AdliaYO2tLFKz6WhB0Hlb183uW1YVGn-SaPw-10a3MyxGTXJZw1HSDKGV3kPLN53LeyB87XJs_PdJwX_FQ744vU-&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfmV008hKI0FBRSLhQWWvXVSI-JBXEpm5K_mvhh9hTtVQQ&oe=6955782C)
  But the rifle still doesn’t do anything yet.

  ## Step 4: Add a hello world script

  You now have a rifle that you can pick up and move around with, but it still doesn’t do anything. In this section, you’ll make something happen when you fire the rifle. You’ll write code that prints “Hello World” in the **Console** whenever you fire the rifle.
- Open the **Scripts Panel** by clicking the **Scripts** tab.
  ![Click the Scripts Panel drop-down](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/584743195_869065712298048_2337720434141423438_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=kPRSKizPbGcQ7kNvwG7BPJ9&_nc_oc=Adn-IdGr3OT_YtcKNWASkUB_itdWnV3Egn4ocOfaC9QEL9-2p1IgKqrwYerPQ5QPsfdr7HGRmjVGtgMsbrl5slrM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkbaRZAaVaWZBigYATuNTZhh18HZZk908cZUHOvPrU4cg&oe=695599A3)
- Open the **Scripts in this world** dialog.
  ![Click the Scripts in this world dropdown](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/584673960_869065708964715_8324097282026536072_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=kcl3hdYYIwYQ7kNvwHoWU_b&_nc_oc=Adk_pEJZL7cZZTlUBxuoF9yfVfCdmifsTmbJoaKnMFo6zTcC8J2XCYomjsqQy2MPccy-kTSGAlebBmhEMd9TKJo0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfmzuqxXWneSPmoPVvALdBqUkXhjpq6aWzTUKp8aPlh9uQ&oe=69557E03)
- Create a new script by clicking the plus button.
  ![Click the + button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464284760_573870108484278_5626008342355283582_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y2ZLXeSZYPIQ7kNvwHaLe1Q&_nc_oc=AdllxHoJuHKUsmu5cFZu0T5ok2n29MySBCNW3CNKv8yEb8W6wsjFZM5SDAJUSU1IwyOFCR-0B-3IxcPZPxhwBWLu&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afm8lj2nFC1luQuwGuQN3BYONSzSLkkmgc8Ml96hz6q3kQ&oe=69557348)
- Name your script “Shoot”.
  ![Enter Shoot and then press Enter](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464325206_573869988484290_3165699765154261570_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=oGCzlLfXihcQ7kNvwHIqKF9&_nc_oc=AdmHYL31QA6e2XeoT6gaQcxbkPtMzBRN0RZR4jAiUcI-FyOyQNvkASFR_gyGHmOenNabGNY8SU_K1X2ue6Ojd4Mt&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afk8NoFghUL2-nFO3FOBFLy9OwRJNl9SeJYTaIbur0yS2Q&oe=69559B0B)**Note:** It takes a few seconds for the script to appear after you’ve inputted the name.
- Open the script in VS Code. Click the menu icon next to the script name, and then select **Open in External Editor**.
  **Note:** Currently, scripts can only be opened in the aforementioned way, from the top dropdown menu.
  ![Click the three vertical dots to see the menu](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464107203_573870138484275_3986572612224730853_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=JR7lsd_6bLcQ7kNvwH3gpH9&_nc_oc=AdmfqmlmRBl8-2kB2QnUq5AATYtkn5uMTyTDXclbewkbsIOBgU50_4yTjWlnJnXcqbZ_D7nYI0CoobDiuqHCfzSV&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfnDgo1RtGHrTFPMk9va4bfzbeL5r_MJvtgVa5OghFLAWA&oe=69559858)![Oen the script in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464190660_573870198484269_3483053417967741197_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=eq9WpFIWZsAQ7kNvwHllW7B&_nc_oc=AdmopEZ2pzF_7Qo2q-oqkKaCGvBGP6ItDbjsMgFPeAnVf7VgF2Ej1pqvuzXXNVX_hYYN6eFV7frtjr1lg23S7Bdy&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfnZgb5Gt0lmBtq3xxabBRWsdj_kx45r2JjINxxFgjg8iQ&oe=69559C2F)
  The new script opens in VS Code in a file called `Shoot.ts`. It contains boilerplate code.
  ![This is the default structure of a TypeScript script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464177291_573870041817618_3500120114101619688_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=df3yet7VQ3gQ7kNvwHLkYaz&_nc_oc=Adkg3k1S2N2Tdk2359Xa7foMKXVt7wdmpGb-qA-9IsPCyAv1eXgMMgAqebLaA7RZ_Q87VgziZ5Z3WK577atc2Bdv&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afkw7mpCGlVPcw06Y_R9k6GvyIrt_HdZjyKJh7_6xhoE_g&oe=69558AEF)**Note:** The `start()` function is called whenever the entity that the script component is attached to is created. At this point though, you haven’t attached this script component to an entity.
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
  ![Click the drop-down selection list to see your script](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464091170_573869985150957_1926137328255172174_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=SRtgabLfKcoQ7kNvwHSer9r&_nc_oc=Adl1FIeypC17aK8040S_nH4Sq_o2p9Qd2fdbTHZg7Yddb7hS5SCyp3P9I39n2bnQJtmoUaRRUpAxEqJWN8rs3AH6&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkLoVVjLVTKYiJ_F0RYR6EsS25vfsAcIVY-Aje2oW0VDg&oe=6955940A)
  c. Attach the script component by selecting “Shoot:Shoot” from the **Attached Script** drop-down selection list.
  ![Click on Shoot:Shoot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464106799_573870071817615_3222010519411086870_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=5VRCNIolugAQ7kNvwEFyNgR&_nc_oc=AdkYiZ3FNlifQjH1P25G_B0JM_9v2Pvyj9ltZcmSm7VDFIMq_epI0gPFsDIr0rLus1g1gmR1L2mNN_s0UxNJR_MQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfniVhtg4VU3sqRpooxj9EpSxv8eaVVWnkvc5eFe0zUk8A&oe=69559A6F)
- Preview your world by clicking the Play button on the menu bar.
  As soon as the Rifle entity is created, the script prints “Hello, World!” to the **Console**.
- End the preview by pressing Escape twice.
- You can see the debug message by clicking the **Console** tab at the bottom of the page.
  ![Hello World! appears down at the bottom of the Message list](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464178601_573870128484276_4374457029334205218_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=eGaxU2R8tNYQ7kNvwG-7RB-&_nc_oc=Adn-LIc12TMjROtvZIEvkQAFlRgDLP6V_1fgA0vnTRqS9fnpZTQB0y3aZ8G9YCuIX9-otxHsjMxXY8QyvVeRPe1R&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afl6bPIrDvPdIOKhUwwKGFOP644_RjDGs83dQK1uKSsghA&oe=69558AB0)
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
  ![You can clear the error messages](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464347386_573869901817632_7646464504087582755_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=R21-uRpdaoUQ7kNvwFKkZ4F&_nc_oc=Adm2MYLn6dDQz2HBgMx2ome-S4sx9vTwHtWG_B7HYAfF8-rydMysktZzU_ky8IUf3A7-vPrPmRYeF10AtSfQsUBT&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkXpwg_W68OBTpZtC4KreWpkQRmPh1Qwzqr504mu8_YdQ&oe=69556DFD)**Note:** Normally, you shouldn’t see any error messages in the **Console** window. If you do though, then try copying and pasting the code instead of typing it yourself.
- Preview your world by clicking the Play button.
- Walk over to the rifle and grab it.
- Fire the rifle several times by clicking the **A** button on the screen. As you fire the rifle, notice that a “boom!” message appears in the **Console** window along with the number of times that the message appeared.
  ![Look at all the booms!](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464389048_573870095150946_7738181260387489635_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Qky3AkO2ClUQ7kNvwH1ypOT&_nc_oc=AdlnUWw_xwYNdURXFsvczRHCAPCQuo0dG8-8Cy_tyCsyiZczz-neMBdhLoLA6k8Rlb5WlExb4KMbKYl4YpO_jdvh&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkmSDtpcWDfXNiZrUxJrq0EmB7KZG7sQi9L41uVXy_ofQ&oe=69559C69)
- End the simulation by pressing Escape.

  ## Step 6: Add a projectile launcher to the rifle

  You now have a rifle that you can pick up and carry around, but it doesn’t actually do anything except print debug messages. In this section, you’ll make the rifle launch projectiles.
- Select the Rifle from the Hierarchy.
- Focus on the Rifle in the scene by pressing the “F” key.
- Click the **Build** button.
  ![Click the drop-down button](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/587517516_869065705631382_2688631765762109807_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=5Q606w9955QQ7kNvwGih-Ll&_nc_oc=AdkEivYH1hHtKp1cx1O6qbdfBj8F9190BvKC6EvWVn2SXctar0_4-5gysuC53XOqj9lTcuCrbqkPipABqlYwMGxg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfngffhjH4BzyXm4PR-nV6ln4p8SWFPEdA2e96f5lCICIw&oe=695574AA)
- Select **Projectile Launcher** from Interactions.
  ![The icon for the projectile launcher gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/584318256_869065718964714_7972938540362052917_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=d_2MJCDibOQQ7kNvwEKkkn3&_nc_oc=AdntpFOeJ97UdPnG4cgKY2bFKs5b0zb05GGxYyebwrYWFsO-9-rtwfhw-UFoFUlCgI0jks236S-2yTQd3mTN4TqV&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afm42Ds-0vgkgg9Jwvaq7TNGpOkerOwCep5qcwUIDcoYQQ&oe=695584E8)
  The **Projectile Launcher** gizmo appears in the scene, and in the Hierarchy. Pressing the “F” key while the object is selected brings the object to focus.
- Close the **Build** panel.
- Attach the ProjectileLauncher to the Rifle by making it a child of the Rifle. In the Hierarchy, drag the projectile launcher, and drop it onto the Rifle.
  ![Drag and drop](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464060217_573869908484298_3061206173699646062_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=StWG8-2GYykQ7kNvwE4SLuL&_nc_oc=Adk_d9xHG1aee80nKHcD-CKxIVA9WgOWBYy8GnoV_9AmDQGaQcGxmdoWwOmVmG79CrGCZ7Gk7FkDt2je6FlBZLsP&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfmdSpepigBRt24R66X4PTP2pzipunSVtuOc5GxmFtPvbw&oe=69558576)
  The ProjectileLauncher should appear indented in the hierarchy since it’s now a child object of the Rifle object. You can expand the hierarchy by clicking the triangle.
  ![It's now one of the Rigle's children](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464190942_573870178484271_3293882596374239688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=9C2P0k65vZMQ7kNvwEtijPF&_nc_oc=AdnnZt5SInQfWHhq6gFymq5BQWuLIyAHQrCJf8he0NiZGUIB6Rvt7v1D4Cq_PKZ40EaY6xt-g0MfM3W8Icnsdw9q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afk9Q_diovricUk9cwhzHlL9ngqRyOgKwYTaY64UQxic5A&oe=69558252)
  With the ProjectileLauncher selected in the Hierarchy, position it relative to the Rifle.
- Adjust the Position values of the projectile so it aligns with the aim of the rifle.
  ![Align the projectile with the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475194437_641654878372467_7693479725163060948_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=wrgIPR0L73AQ7kNvwE_nl3o&_nc_oc=AdlUuGdyIkBOzkqjd-nWFPdERTRbI6q90n05qOeJ2G6OmxvGvwM4tXjwYKopJmrOD_-zK24CQ0A9B6wj37jLnsVf&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afmw_Sw9I6pQJyylAG9qINROo1QozqHmI1X7H54oRwO8Jg&oe=69556FBC)
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

  ![There is a launcher property in the property panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464076144_573870208484268_3571774494949796316_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=5VC6Hr-Zp8wQ7kNvwHhYovx&_nc_oc=Adl96cPaxks6cTH6zVs6HnFbHY7wp6H9BB3Isjgvv_3edZ2FNdXailfFY9w13cMvsnRLD_-eS16qNVnAKFT73O-E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afl1AOwyeRWSH_FT3aNKFWUcM2EVZhVmvkMgMaA_yvRSPA&oe=69556F05)

  **Note:** You might have to deselect and then reselect the Rifle object if this new property doesn’t appear.
- Set this **launcher** property to the **ProjectileLauncher** object. Click on the field beside **launcher**, and then select **ProjectileLauncher** from the list that appears.

  ![Select ProjectileLauncher](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464035648_573870011817621_4324077274258554259_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=nv52gI2Ry4MQ7kNvwHlgkUX&_nc_oc=AdncxJioTg0BfxBIeGQNDdARPks-ginFYimGGwnu_y4HJg1eJalsVLKke5qWa5SGV6zH8nHJBZ6Jin8zvAK8iumy&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afmm6sp-KjMn3cdq_YHyva7lqpEfiK_qAQpB6pKKN7aUYg&oe=695592CE)
- Preview your world by clicking the Play button.
- Walk over to the rifle, grab it, and then click the mouse button. Notice what happens, a shot appears to come out of the rifle when you pull the trigger. Next, you’ll update your script to accumulate points whenever the player hits the target.

  ![A shot appears to come out of the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475273504_641654838372471_3353505584347988670_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=p4aKfTYHhDgQ7kNvwEKX-7l&_nc_oc=AdkzkkR_km94kvrJfjSbcfaMZyuKsMylP-9nDaItAGeDpZeYadlrhBIath0y4llTqjsy2NUULzfKPcvqfMfaB3eE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfmcMvuQyDZLHYFmpLbHqglDn8zAykGQv2V0HTAglpVH7A&oe=69558CFD)
- Exit Preview mode by pressing Escape.

### Section 8: Count points whenever you hit the target

In this section, you’ll update the script so that you score a point each time you hit the target.

- In the desktop editor, select the SpawnPoint in the Hierarchy.
- Click **Asset Library** > **Public Assets** under the Scene pane.
- In the Search field, enter “skeletoncrayta” to find the skeleton.

  ![Pirate skeleton](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464152935_573869948484294_7911900688495928080_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=-LkIPJ4hAJ8Q7kNvwGLt2zN&_nc_oc=AdnUbcal4xamNpB1Yx3D8i6G0S_mvFGcnSsuMs7IdWR8sTpm2XZi1wQX4wCse6rCVXVe3BHdcuuCIJUd2RkVoyta&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkHTvVW_Y5ZKZZJ_gYVGJrqIB6riq_gc0vc8vQ1cHor-w&oe=69557D82)

  A skeleton object named [UnityAssetBundleGizmo](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/unity-assetbundles/horizon-unity-assetbundles-overview) is added to your Hierarchy, and appears in your scene.
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

    ![Every time to hit the target, the score increments](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475121433_641654885039133_2447663056588542102_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=8DbLanumDTsQ7kNvwHye38s&_nc_oc=AdlxwcuSUt7iyesV-MuREEZapvnPKJOZCr85-zUVaXvBoq73xo4DzzUNY1t9GqK6TgS4sHqT6bba8BfeFEGuO8xw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkGlJwBtcugv3gLexC0sonijGrZJaz5CVdJ8CegjIC-Ew&oe=6955712B)

    Every time you hit the skeleton, a message prints to the **Console** that tells you how many points you’ve scored. If a shot doesn’t hit the skeleton, then the console message simply doesn’t appear.

### Section 9: Display the score

In this section, you’ll revise your script so that the score appears in the game.

- Add a **Text** gizmo to your scene.

  - Click the **Build** panel.

    ![Build an entity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/587517516_869065705631382_2688631765762109807_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=5Q606w9955QQ7kNvwGih-Ll&_nc_oc=AdkEivYH1hHtKp1cx1O6qbdfBj8F9190BvKC6EvWVn2SXctar0_4-5gysuC53XOqj9lTcuCrbqkPipABqlYwMGxg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfngffhjH4BzyXm4PR-nV6ln4p8SWFPEdA2e96f5lCICIw&oe=695574AA)
  - Select **Text**.

    ![Select the Text icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/584304762_869065562298063_4509520630112735143_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=DPRrPJngzO0Q7kNvwH7Oq4H&_nc_oc=AdmdreYm2UYmTj34TIQ5VufKr33DODKJcnh825RYh4TDdyH54IRAiqyE0461ySzxUBwvaNOW7ux3xL2Zil4uZrub&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AflozRuwBl_Npgo6zsfEUHK4_3KY1wDA8NVrF7JjpSe5GA&oe=69557CA1)

    A **Text** gizmo is added to the scene.
  - Position the **Text** gizmo within the scene so that you can read the score while you’re shooting at the target.

    ![Position the Text gizmo so you can read the score](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475549601_641654858372469_2650846579364077855_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ADsaQX4KSIUQ7kNvwFfVFRw&_nc_oc=AdlKil-kA54xPNV0sQ7Du576_oZrnYETEJhZwmGbkYXhHoMln2Z3zahRda7-WadgKKUJg_2N5hhtYU0ek8tPTult&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfnLRQcIxefjkKngw6NhhnqgtFgT8Rn48rL37199uktHKg&oe=695580F4)

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

  ![The scoreView property appears in the property panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464222401_573870035150952_285145257509364434_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=nHDDjmaamH0Q7kNvwG2oE16&_nc_oc=AdlkSej9DlZel8bmVB05Cn1cZ80vA8dkb-PQeVt7pjyJX3L6tVpeRkYVrGjj_mTnchLoyiD3ZNaqMW4DR8tCgcV5&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AflD0uVdT1MIQqzYZNAilbZc4whGi86cL9egaoSEyHJPSQ&oe=69557DF5)

  **Note:** You might have to deselect the Rifle, and then reselect it if this new property doesn’t appear.
- Set the value of `scoreView` to the Text gizmo that you added to the scene. Click the drop-down selector beside the label **scoreView**, and select “Text”.

  ![Set the value to the Text gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464088168_573870068484282_6798580279511898058_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=i7N5-bcsTpwQ7kNvwGcXku-&_nc_oc=AdmfjQ_wkPKFnj0tuf53vwQPzHritVMNe2fqJ63AaVOp1aj9cfLplStL6KQKIf8YevwVu3Nq8CtYYAGxQ7xjsU2Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AflgiartBgi6Y_VFjg-o15PNHPlDEeURDKlykzGXDXGoTg&oe=69559FCB)
- Test your world.

  - In the desktop editor, select the **Console** tab at the bottom of the screen.
  - Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.
  - Walk over to the rifle and grab it, and use it to take several shots at the skeleton.

    ![Rack up some points by shooting the target](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475293293_641654835039138_2953793375639169747_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=pITtdkHIEVMQ7kNvwGkuabL&_nc_oc=Adm08hp_EW6B76lcJfqOq0gvAti8AHMk5veuRkfUrnWKjGX_36yPMiNDl1CQHU6CR2y6nbbc4XUTvL2VW0cfDv98&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkD9lqZqDVR3llU1mX4o2QxGFZvtWNCJaCDfrL-itZDXA&oe=695581C6)

    You should see your score floating in space, and it should increment each time you shoot the skeleton.

### Section 10: Create a second rifle

In this section, you’ll convert your Rifle/ProjectileLauncher combination into a Template Asset, and then you’ll use that asset to create another rifle.

- From the Hierarchy, select the Rifle. This object has the script attached to it, and it’s also the parent of the ProjectileLauncher.
- Right-click the Rifle object in the Hierarchy, and from the menu that appears, select **Create Asset**.

  ![Turn the Rifle object into an asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464006274_573869955150960_8083174888610967206_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=WOVBzAX_M5kQ7kNvwHUBplG&_nc_oc=AdkD27AiAlETSHCLrzRFCqd_HrxL6D54I6hg1yZP1Escs289rcjoqXmTHZ-_C1XlPXkVQj7DqNK72xMArL5WsFOj&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AflFYtVSXgF9dsMJuODMuwdfVWdtq5ASPK6h7hDlJt1g9w&oe=695588F5)

  The **Create New Asset** dialog appears.
- Type a name for the asset, and type a description of the asset, and then click **Create**.

  ![Fill in the asset name and the description](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473721798_631480272723261_8456815458843473069_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=vLMRvyVNIkIQ7kNvwGBPpMD&_nc_oc=AdmAgcsIGSj4NkUR4X80o-QywUuaHvuPsrUkwYrRhEaTk3Qn9AmY0vRKZKjkKwcEXgxHCpp0flPHWa5krf0O19U6&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfkJedjQ--wS4j_gFWW-2iWlyLL9LViXHsV-MPFhvembsQ&oe=69559BE5)
- Open the **Assets** tab, and then select the **My Assets** folder. You’ll see your second rifle asset there.

  ![Your new asset appears in your My Assets folder in your Private Assets Library](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464099449_573869905150965_6806556283750141783_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=QUpqXuTR1AAQ7kNvwGfIXHH&_nc_oc=Adk7UQ-CenJP22vUoxYOoKxDAABhp1cg8OhnKOUczurvzxJC1VEWEFxDim0t8lmp7OLcIWUTDbDDpINel7ba47gS&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_AfnLV0lZm2aQ4lDQO8P30N766YcUtQk0a1W5ufUBQ-UyDg&oe=695595DA)
- Click and drag the new AutoRifle asset, and drop it anywhere in the scene.

  ![Place the new Rifle anywhere in the scene](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475226479_641654815039140_955495808021670869_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=zmdAZGiPBkoQ7kNvwE2exFg&_nc_oc=Adkvx8fQWhirer1U01weuzaQjv4pjDmF8jcNuk102QP0BS-4QDS5Wh3csYjbF4yatDp6pti8FlrZegao0UBoNnm0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cJaW3LQuW4ATu2eRSk_nsw&oh=00_Afn-xv0pzKhrFRssDfUnr_0i3xSPtrAkTUQ8_6jtvJI9Gg&oe=69559480)
- Test your world. Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the second rifle.

  Notice that you can use either rifle to shoot the skeleton and generate a score. Each rifle has its own score, which means the text box swaps between the scores as you swap rifles.

You’re done! You’ve completed building a game in Meta Horizon Worlds! In the next section (which is optional), you’ll try running your game in 3D on a Meta Quest headset.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

* Try the [Batting cage tutorial](../Adding%20and%20manipulating%20objects%20tutorial.md) now that you’ve created your first world.
* Learn about the desktop editor with the [Introduction to the desktop editor](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
* Learn about the other tools available by reading our [Tools overview](../../Get%20started/Tools%20overview.md).
* Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.