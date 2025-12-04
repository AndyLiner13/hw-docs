Source: https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world-continued

# Create your first world tutorial, part 2

**Welcome to Part 2 of the Creating Your First World Tutorial**

In this tutorial, you’ll continue to learn how to create a simple game in Horizon Worlds, where you shoot marauding skeletons in a graveyard. Where [Create your first world tutorial, part 1](/hw-mcp-tools/documentation/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md) showed you how to create a new world and build the basics of the game, part 2 will take you a bit farther.
Part 2 shows you how to import custom models, which are which are complex 3D models that are not available in the public asset library. You won’t be creating them here—you’ll use demo assets so you can see how they’re imported. Once you’ve done that, the tutorial shows you how to write a basic script and attach it to the entity to create behavior. The tutorial ends with testing the simple game in virtual reality.

Creating customs models is outside the scope of this tutorial, but if you want to find out more about them, see [Creating a custom model](/hw-mcp-tools/documentation/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

If you’re looking for the first half of the tutorial, go to the [Introductory Tutorial part 1](/hw-mcp-tools/documentation/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md).

The key things you should learn from this module are the following:

* Importing custom models into your world
* Adding entities to your game
* Scripting entity behavior
* Trying your world in virtual reality

**Note**: This tutorial assumes that you’ve completed the prerequisites discussed in [Create your first world tutorial introduction](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-a-new-world-intro).

This part of the tutorial requires that you first complete [part 1](/hw-mcp-tools/documentation/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md), as this is a continutation of that process.

## Step 1: Add a pedestal and a rifle

In part 1 of this tutorial, you created the graveyard. But if you’re going to hunt marauding skeletons, you’ll want to add a rifle and a pedestal to make it easier (otherwise you’d have to use your hands and that gets messy…)

- Download the [Demo Assets](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=hKO1ovie72AQ7kNvwGJghks&_nc_oc=AdmgGg61dbFY7D6JeXP02Zo0GifiRCdi_SWbACohWmOb81WqP5jvBiATxdOd1UBrYyM&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afn4GSc-fhDdXRdDocfJMGDHzkPc_KGdG9EPaF1NyCRg7w&oe=694BE3C5)
  .

  This file is a zip archive that contains a number of pre-made assets that you’ll add to your game (like the rifle).
- Extract the contents of the zip archive. folder.

  a. Open the downloaded zip file.

  b. Click **Extract all**.

  c. Browse to a location for the folder on your local hard drive and click **Extract**.
- Add the pedestal to the scene. To do this, click **My Assets** on the **Asset Library** tab at the bottom of the screen

  ![The My Assets tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515073444_756887460182541_1703766811137744765_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=YZvs0-ZVdHwQ7kNvwFSrbyr&_nc_oc=Adloj9wgmRRbmKjqXWR17C1WkYHR7wNeUaZCBD7A8TwDKOsL9xL1m1TIY9XVDUp2Xks&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmJADq1CU_1pZeM1CDCBgj90i_NqufdwJnUWKW9FTWJWw&oe=694BB897)
- From the **Add New** list, select **3D Model**.

  ![Adding a new 3D model](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366312_756887446849209_4679233969024346019_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=fuqQ6L_vYHYQ7kNvwFeW9IA&_nc_oc=AdnO_xVXADhdY9sbJyCpUhgcvZTcDOYm6iMLai_TEA5XFnRCDlWBjJ0pv5NN9ZKb1qQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AflQhinrrWEw0Chsa8gZaxQ0BaLnLygyrchzLVFT6PzUsQ&oe=694BD98D)
- In the **Import Models** dialog box, enable **Preserve offset pivots** if it isn’t selected already.

  Because of the way they move, certain assets use [offset pivot points](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Assets/Use%20offset%20pivots.md), where the point around which they turn or pivot is offset from the center of the asset. This is so animation of the asset can look natural.

  Ignore the warning the dialog box shows: all the assets that this tutorial works with are [single mesh](https://developers.meta.com/horizon-worlds/ learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models) files.

  ![The Import Models dialog box](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515276565_756887456849208_4413823266568814632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=YKWZ1BjnwuQQ7kNvwHym1sR&_nc_oc=AdlJGE6_t4aiSgxW1jrfHtWRo3GrY94C3F2kNfSTODjNg2Umqy9A2j5tCYbTqLOnXU4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmDQChH08yRfRekYJz2bqMpabMYfj4R7ELjXOvO-UZ-Hg&oe=694BBDCF)
- Click **Choose files on your device**, then navigate to the folder in which you extracted the demo assets.

  ![Choosing the extracted files.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366476_756887433515877_6413619545446559528_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=3C094s_dAYkQ7kNvwFj314M&_nc_oc=Adk61VVcVgQQnav9kX0zphcYPbkgTrxseOIt-bmsWXFd1Sp3Vwwddy-UVS3cMkRYm1A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfnBNjiqcCcjiwi8K8z3DeOn9PIHoTJkxNBtXxKEUK-GgA&oe=694BE3E8)
- From the folder on your hard drive, select the `SingleBlock.fbx` and `StoneBlockKit_BR.png` files, and then click **Open**.
  `SingleBlock.fbx`is the 3D model file (or `.fbx` file) and `StoneBlockKit_BR.png` is its associated texture file. These are the files that make up the pedestal asset.

  ![Select the asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515092034_756887443515876_6027285087868923840_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=hxAv6mUnf2AQ7kNvwGacCV1&_nc_oc=AdlUC2R1T1f-m_mUZTJuB_aeZ6sxmJzIUJuTZegSEljtCslxRXzX-2uoAL3inZD6W9Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afntafzuj_xu6CBufhrVqM4QQoJ5xSgZKbsFRKmGhG9Gow&oe=694BDC5A)

  These are then displayed in the the **Import Models** dialog box.

  ![Asset files displayed in the Import Models dialog](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515097062_756887440182543_8868542573376784040_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z9pyLqOP_HsQ7kNvwGciQzi&_nc_oc=AdnKMrUSlPC-OkEsHcH1X730NV4CX3uqX6KZaPeNBR8HE_W0MZM35MP9lNkDFWKIjqs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afk8cRvugCZP9INvB6wbr0rA5KjFH6wzagUFZ3vqlj_wdg&oe=694BCFEF)
- Click **Import**.

  **Note**: If you decide to leave your world at this point, it’s important to wait for the asset files to be imported into the desktop editor before you leave.

  The SingleBlock asset will appear in your library when it’s been imported

  ![The SingleBlock asset](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515875637_756887453515875_4696101948964392756_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=3Vql1CyFmtwQ7kNvwF6HQi2&_nc_oc=AdmOko1wWs6Em2LOyziXsCUdrscLhUhhB3U8cEzlozFWRFtjgajhkFrPJnijEgC5Qlw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afkc4M9QDztXQFgy8ojiBjy7Q9Y-_eGc1p5ghXu-cEKeeQ&oe=694BCC3A)
- After the asset files have been imported, drag the SingleBlock asset into the scene.

  ![Inserting the asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/514954847_756887450182542_369195396390371839_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Cg3hD7uitAAQ7kNvwH9HqRb&_nc_oc=AdmxL-N0p33GHFjrQ2i20hNocYj2UOmU0CZg9pvDT0JN4b3Bo5xqGPbvfDpRGaWFnKY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afm5z0SrIfX_HBEg9vlzJegSWg1ovgzZz9pUONT2epOpDg&oe=694BB501)

  The SingleBlock asset appears in the **Hierarchy** panel as an object named “SingleBlock”.
- In the Hierarchy, rename the “SingleBlock” object to “Pedestal”.
- Enable **Snap to surfaces** by clicking the **Snap to Surfaces** button. This allows you to easily position the base of the object along the ground.

  ![Click the Snap to surfaces button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464129353_573870105150945_5383089439026099930_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=IxdasYoI71gQ7kNvwGbwUYE&_nc_oc=AdnDr-st2lVPJSfqfUh_n1M4aeLDpd_PzHbc_KHqDcX8H3dn_Pmlhi_i7LDffWaKcKU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfkwawBO-SY0Co45JWIzn33YbORnFCZdUoMdMn7jVrXLbA&oe=694BD9E7)
- With the Pedestal object selected in the Hierarchy, position it by dragging it by the orange dot. You can place the Pedestal anywhere on the ground.

  ![Click and drag the orange dot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475165196_641654818372473_4879658605534264112_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=xPdBsrhQOqAQ7kNvwGB_kAY&_nc_oc=Adkzf3n3mtqf3_O_EEMm1BRS4S5zY2_8DIru3hrgLJsqrAcRTyCeGy6ZpzwMLB-QSXY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfnZD5VEblD2JyMeh-LLWflJjkIpg6pGAFNrx37t-srd8g&oe=694BDE6B)
- Add the rifle asset to the scene.

  a. Open the **Assets** panel by clicking the **Assets** tab.

  b. Click **Add New**, and then click **3D Model**.

  c. In the **Import Models** dialog box, disable **Preserve offset pivots** because the 3D model for the rifle uses [more than one material for the mesh in the FBX file](/hw-mcp-tools/documentation/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Multiple%20Materials%20per%20Mesh.md).

  ![Don't preserve Offset Pivots](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464008566_573870171817605_7978731282074208552_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=LwQeTOekWB4Q7kNvwEJjRSm&_nc_oc=Adk7iaVaFDiXzLadUoe77VXy6bBtgICKSUazBOGXGvlKun4jpomRVYllMmXbhAsJqCM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AflsrrXd1174NGuGT374_pSyCvjesgkfzAJF_9MqYSqGlQ&oe=694BB546)

  d. Select the asset files to import by clicking **Choose files on your device**.

  e. In the file picker window that appears, select the 3D model file (ACWpnBattleRifle.fbx) and its associated texture files (WpnBattleRifleA\_BR.png, WpnBattleRifleA\_MEO.png, WpnIndictator\_BR.png, and WpnIndictator\_MEO.png), and then click **Open**.

  ![Select the five asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464310803_573870025150953_4833471769077242766_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=sPJDT2Eul9cQ7kNvwESvIEP&_nc_oc=AdnkHvQm9lpUbGZsTeEhYUzacOzqCY49yAam_sJMxNyw6Wap-3AQp7jFaXmO5o8WMbs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afmf9-LyKpIqOQO8QJu6XZteMOdUZymrsowiO_5vMiapew&oe=694BD6E8)

  f. In the **Import Models** dialog box, click **Import**. Wait for the asset files to be imported into the desktop editor.

  ![This is what the rifle asset looks like after you import it](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464292127_573870045150951_3415127998518177098_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=1BOjCa-OyX4Q7kNvwFY2iio&_nc_oc=AdlLfFyxD3pcjY-rjGtkt89tlZWDYt4RFrLLkxVugMOjvRzd0eTdMC5hFsFA_Drn3-w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afk3bcztLXd0DMSMczO1N7D8G7TRDOw1pGs45fDmRfiN5Q&oe=694BB803)

  g. Drag the rifle asset into the scene, and place it upon the Pedestal.

  ![The rifle floats over the pedestal](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475232756_641654861705802_4132254507512158168_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=3T52dWr15KQQ7kNvwHBimvT&_nc_oc=AdlWP62W2xkVKE9U-h3QnJSLFFBPiUdeQpFpq0v1yAWExR0sLlCe7MOvhpMH9ga6VJE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afk6yhks67ljX0vzsdBgETgWzlJMwqAiPQgQC-6MgoKsuQ&oe=694BDA57)

  **Note**: If you’re having difficulty positioning the rifle, remember that you can always use the orange surface snapping manipulator to move objects anywhere along the ground. You can activate it by pressing the “W” key. Optionally, using “Ctrl+G” lets you group the pedestal and rifle as one object, so you can move them together.
- In the Hierarchy, rename the “ACWpnBattleRifle” object to “Rifle”.

Your Hierarchy should now look like this.

![Notice that the rifle object contains two child objects](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475582112_641654881705800_8956813367946191943_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=pd-h0NNBXdMQ7kNvwGDXLTR&_nc_oc=Adk7vQzTsjz8k9IF4p6RVO6IYzjZLkd_4CcgPpWXbcikqNgipGgdEq0uiCi28fJ4Uzg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfkQF45bXOGA5nnXV2-23SYl5T8LhwZiDWBxy0uESJxV9g&oe=694BC55F)

## Step 2: Make the rifle grabbable

In this section, you’ll learn how to make the rifle grabbable by the avatar.

- Select the Rifle object from the Hierarchy.
- In the Property panel, set the following two property values:

  **Motion** = “Interactive” and **Interaction** = “Grabbable”

  ![Click the drop-down selection list](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/463983859_573870008484288_2943956617777129080_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=5LZB6T2u78MQ7kNvwHQc1YT&_nc_oc=AdlFLJDt_5iFi1JfIB3q8s-77ndZDMBo5R_aGN_h4Kn-SOnrVas0lGoM6LOtZjuhCkg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afl5zH2QgQRhsl94Qpgjzdq9VOmtkoH3naZ1pLsA45Z4Gg&oe=694BD86D)

  **Note:** The **Interaction** property appears only after you set the **Motion** value to “Interactive”.

## Step 3: Try-out your new world

In this section, you’ll try-out your new world to see what it’s like to pick up the rifle.

- Click the Play button on the menu bar to enter preview mode.

  **Note**: Ensure you’ve configured world simulation to start automatically whenever you start the preview mode. Click the the ellipsis icon to open **Preview Configuration** and toggle on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview entry**.

  ![Ensure world simulation is configured to auto start](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481784596_667180549153233_231569701181011321_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=rne4iYVpIqcQ7kNvwEXQVEc&_nc_oc=AdnAoNx6NmOgriGfDM7b9Px_dD-0LZkLMAPUQkrIlXsCjKxxEhcWeWqIaMf30-EGfk4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfkjkNXz0Gsbty2W3B-RhGRixmL3MaNDSek5eKyj0znkqQ&oe=694BD1D0)
- Maneuver the avatar over to the rifle using the arrow keys, and then pick it up by pressing the “E” key.
  ![Press E to pickup the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475655068_641654875039134_3343217904502966675_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=bfMaLtBriowQ7kNvwExz9nO&_nc_oc=Adm5s3jPiEXRIH12Bko9RY0bq9p-yo2I5idy5-UKyapnRLcphTJquLw-OW8OhVtPoJ4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Aflf1RGR3vRta5d2fywhC4aHUJq4jIqaA7Dp_U2WK2w82A&oe=694BDA37)
  The way the avatar holds the rifle looks somewhat awkward, but don’t worry, you’ll soon fix that.
  ![That's not how you hold a rifle!](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475514035_641654871705801_2878061070962689344_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=ucfnbbOC8zUQ7kNvwEXqiKS&_nc_oc=Adnq4TtjOnW7XB015LGfCR2NEyFAlHf5egJHoL9WjyKjmWtgV7rAz9LVcknZ78ae6P4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfnZzrGDLjJwd5yIe-o24EZ0ljm5DMwySLyKP-ONgjFHag&oe=694BCFD5)
- Exit preview mode by pressing Escape twice.
- Fix the way the avatar holds onto the rifle. With the Rifle object selected in the Hierarchy, in the Property panel, scroll down to the **More** section, and enable both **Use VR Grab Anchor** and **Use HWXS Grab Anchor**.
  ![These settings fixe the way the avatar hold onto the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/469860345_607478945123394_6899703159416175623_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=x6RPvF68GAQQ7kNvwH_LABu&_nc_oc=AdlF9s0lyzyePh81oGz_UR6hgnO7OxEr-qY-hC5HMc2WXCA87RHXHiVEysoymN2gCCM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmiV4Wg5wMqQw9ulI7tiYR0EHCPj4xmZWAAhxrq08EyYg&oe=694BCBAB)
- Set a pose to use when the avatar holds onto the rifle. With Rifle selected in the Hierarchy, scroll down through the property list until you see **Avatar Pose**. Click the drop-down menu beside it, and then select **Rifle**.
  ![Select the Rifle Pose](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464342330_573869941817628_7549640582068222270_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=24IKiBcX0tkQ7kNvwHE1J73&_nc_oc=AdnAy9QcdGgoP_mw6sBxgstl2MdovyMgBqQU771Fd1jJi7FwmkjXkkC3nHagC9ivF3I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfkCkE0--qnoSLVKaECjf7-Bt8xlN8K5-s2biJGIoXtu0A&oe=694BD16A)
  Now your avatar can hold onto the rifle properly.
  ![Now the avatar holds the rifle more naturally](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475859865_641654841705804_1105400890562108752_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=-6fTI2Bki4EQ7kNvwGcPXP0&_nc_oc=AdmXqMC2bwzw2Jj2MTHaxJ7Lbo5T0Mq986WmBkaAIEsQbWnc-cD6MybuNMzDwXEvGRM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afmf1ETVn3kq0vY83ENkuifZeUSk0AHdSnx8k3R-Ots4Cw&oe=694BCD2C)
  But the rifle still doesn’t do anything yet.

  ## Step 4: Add a hello world script

  You now have a rifle that you can pick up and move around with, but it still doesn’t do anything. In this section, you’ll make something happen when you fire the rifle. You’ll write code that prints “Hello World” in the **Console** whenever you fire the rifle.
- Open the **Scripts Panel** by clicking the **Scripts** tab.
  ![Click the Scripts Panel drop-down](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/584743195_869065712298048_2337720434141423438_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=XDMjYZOwbXcQ7kNvwH9I78B&_nc_oc=AdmFwEr04h32HjkFTy_V-G4EpSDYmbX0k617vqJI8dm6KSSXVho07q92btGciabdp8c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Aflq4sf8VHqMbzzLt6bfgljQ6OVO1cBeLKHK7dVNGmE9JA&oe=694BB663)
- Open the **Scripts in this world** dialog.
  ![Click the Scripts in this world dropdown](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/584673960_869065708964715_8324097282026536072_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=tyjZci9PokcQ7kNvwEoqAS2&_nc_oc=AdndQQKwXl8BUvrFYGXVno_SPGjBaGgKmc5MB9v43byflbifNRQKZZgtDwqJvTBR7Hg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AflV_pEDyH1muRjjr9eGo7uQznfuJfId4P5MhfzZvrsZKQ&oe=694BD303)
- Create a new script by clicking the plus button.
  ![Click the + button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464284760_573870108484278_5626008342355283582_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=MP3gYBnV55AQ7kNvwG2o4I6&_nc_oc=AdlAEK97XGBfcGawsPVWZUmdJLeRhwDFPPJOA9C6QBERVwHYFA7p4CLZ7fUy8AdOvUY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afkgn_yNe-QZ1mSye-kBEwM75uAu54HlRISXdNtfyMpiNw&oe=694BC848)
- Name your script “Shoot”.
  ![Enter Shoot and then press Enter](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464325206_573869988484290_3165699765154261570_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=16Nbm7NMrdEQ7kNvwGCsGS5&_nc_oc=Adm9K9yodC11rXK5vzjSF9MPSEkQlU-ZSURHTS5YC_wva4dJqFQP9TXP2tGMBRumeAY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmTFY9ALLzMPdflqh7OGN5BEj84vVkgUMWluwaI30nUvg&oe=694BB7CB)**Note:** It takes a few seconds for the script to appear after you’ve inputted the name.
- Open the script in VS Code. Click the menu icon next to the script name, and then select **Open in External Editor**.
  **Note:** Currently, scripts can only be opened in the aforementioned way, from the top dropdown menu.
  ![Click the three vertical dots to see the menu](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464107203_573870138484275_3986572612224730853_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=JGQ9D-fZL0sQ7kNvwFe-UuF&_nc_oc=AdkkLN7tjs0TJKGdwdbzPUtBPOwLkuCayfwnYMv-oQ2xojbHn1BfbrKkZhVcaNA6bAw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afk_jeraAiXNVi24EVRdrbxYYMcJ7VpYrKuqKtq8OvZw3A&oe=694BB518)![Oen the script in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464190660_573870198484269_3483053417967741197_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=3CnFQNHkOUEQ7kNvwG2ex83&_nc_oc=AdlpEW4d6_RjoRiKFDkj_8V-dGBCFCUYxxJsO0ty6583zejRPsiUJ0lL2kAF9W7Tz6g&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmWxmkf6YZSPhanOOYcsnU8YI4WfJS-cCcCnYjtKrXesA&oe=694BB8EF)
  The new script opens in VS Code in a file called `Shoot.ts`. It contains boilerplate code.
  ![This is the default structure of a TypeScript script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464177291_573870041817618_3500120114101619688_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=cTAfOO_dc4sQ7kNvwGQBqoe&_nc_oc=AdlhXLWMwbnvprRY75h8KIdG9QnrLyyjTtBFi8zw4pfR4_rpZCiapd_KwDe6HQNx3sw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfkGbj5jDXuYJ8r6MbzRs5HgmCK7GM8evLqqAoR0HXgnzQ&oe=694BDFEF)**Note:** The `start()` function is called whenever the entity that the script component is attached to is created. At this point though, you haven’t attached this script component to an entity.
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
  ![Click the drop-down selection list to see your script](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464091170_573869985150957_1926137328255172174_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wa2Ot_XREv0Q7kNvwHEJlkw&_nc_oc=AdkwCL3RF4d1_ALLR_wz0WUYEhKuFvXziOCVQ9fs3qy54uOF5_YcO2JgoX6bSJlPEmw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmWccSPdoPcax6m__vEDFDB9UCNk5Ym3mh0rRJp01Xo7w&oe=694BE90A)
  c. Attach the script component by selecting “Shoot:Shoot” from the **Attached Script** drop-down selection list.
  ![Click on Shoot:Shoot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464106799_573870071817615_3222010519411086870_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=bBGTA9FGy_gQ7kNvwHWYJgH&_nc_oc=AdnK2wjWGwF8Ya458O2IkxoUM2RFkrWABShytHxq-oquUqSk-tkcB39irQUPyPKurcE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmLIrV3UZ2bGJQ05nCugNuk2XLVvf7xydr7k3Mtspds_Q&oe=694BB72F)
- Preview your world by clicking the Play button on the menu bar.
  As soon as the Rifle entity is created, the script prints “Hello, World!” to the **Console**.
- End the preview by pressing Escape twice.
- You can see the debug message by clicking the **Console** tab at the bottom of the page.
  ![Hello World! appears down at the bottom of the Message list](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464178601_573870128484276_4374457029334205218_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=SG8Lv3leX3gQ7kNvwFQZvq-&_nc_oc=Adn0c8o5sFCcxIP7LdQaw8a0ynmGH-nU79J0zjcXiJ5dfdkJhPZsrqc7HybLSr2Z7FY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfnOed7kwzcWRBIxwhKPfvdJwIjJaC-AU3HK1SgyhRobJw&oe=694BDFB0)
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
  ![You can clear the error messages](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464347386_573869901817632_7646464504087582755_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=zZhWeCCqhIcQ7kNvwES22hi&_nc_oc=AdnvO-yrsxEcjo_2f-CIzBNMmyTFmwgt1N6sX58vVp-E-yN5g0MAkjoG6C3FbUyP6Fg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmWmLCUshsMeISOkVOEF4meLtbR0a-ZB3uWorYdZwv0Qg&oe=694BC2FD)**Note:** Normally, you shouldn’t see any error messages in the **Console** window. If you do though, then try copying and pasting the code instead of typing it yourself.
- Preview your world by clicking the Play button.
- Walk over to the rifle and grab it.
- Fire the rifle several times by clicking the **A** button on the screen. As you fire the rifle, notice that a “boom!” message appears in the **Console** window along with the number of times that the message appeared.
  ![Look at all the booms!](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464389048_573870095150946_7738181260387489635_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=IWAqr5vr-X8Q7kNvwEcSX-M&_nc_oc=AdlSTBMcdDruFmO_1EmFc9zH_hedaCIWGt184h8Q7vwCBqVpKBb9MzEOVr8rLasA_AA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AflIuBK_VmcMuYYyJwpsxSMjzNM1YRazuoYR7tGhViGCdg&oe=694BB929)
- End the simulation by pressing Escape.

  ## Step 6: Add a projectile launcher to the rifle

  You now have a rifle that you can pick up and carry around, but it doesn’t actually do anything except print debug messages. In this section, you’ll make the rifle launch projectiles.
- Select the Rifle from the Hierarchy.
- Focus on the Rifle in the scene by pressing the “F” key.
- Click the **Build** button.
  ![Click the drop-down button](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/587517516_869065705631382_2688631765762109807_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=RH8NTYdfeEgQ7kNvwHt0DNX&_nc_oc=Adn8hAEZ3C3jktkYh8Pn9piNZ1Eix-_rxN8yu9Pn4IsO8fh89pPl2DHxfmQB6LVjWgY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfnxZq5bA5TjLJlKWJIMUQS24gGY6P0IwDVEmO2VaDItRw&oe=694BC9AA)
- Select **Projectile Launcher** from Interactions.
  ![The icon for the projectile launcher gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/584318256_869065718964714_7972938540362052917_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=jC4Y9eER3bcQ7kNvwGO9Zzv&_nc_oc=AdntLNA4wTtCAGcpTa7x7ZZhcZoYSIlHSTWjwZGLnyBaOssYRDmE-D_uYNbj_b5URE8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmvBDX9hwiZRdELMVGKU8ZY-0P0sch9IQ6FBCQCqSVdew&oe=694BD9E8)
  The **Projectile Launcher** gizmo appears in the scene, and in the Hierarchy. Pressing the “F” key while the object is selected brings the object to focus.
- Close the **Build** panel.
- Attach the ProjectileLauncher to the Rifle by making it a child of the Rifle. In the Hierarchy, drag the projectile launcher, and drop it onto the Rifle.
  ![Drag and drop](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464060217_573869908484298_3061206173699646062_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z5RUwnxVl-gQ7kNvwHeeZ3t&_nc_oc=Adm47x1cOScDf_Tvc3-vIGlUjOrnRPhLfQNN4hG0bPC1zLVdIM5oaBpOKNEae8LlVkU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afnx5rt2few5GdcySUQE0X9UXL_AklQIQuSbaf-8sSP3vg&oe=694BDA76)
  The ProjectileLauncher should appear indented in the hierarchy since it’s now a child object of the Rifle object. You can expand the hierarchy by clicking the triangle.
  ![It's now one of the Rigle's children](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464190942_573870178484271_3293882596374239688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=vokkf2FvR2YQ7kNvwFLLyg-&_nc_oc=AdlXg69xSnBrkNO0AMQPMdz1X87lyuz7WIOs7px2gwonQdKkvLcIHfiZ3Aqzq_I0j1Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfnX0Tatk_lDaCOWv6emO5lzv9-d2FbJfxpSGGvxDfENVQ&oe=694BD752)
  With the ProjectileLauncher selected in the Hierarchy, position it relative to the Rifle.
- Adjust the Position values of the projectile so it aligns with the aim of the rifle.
  ![Align the projectile with the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475194437_641654878372467_7693479725163060948_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=_6Xx8UC2KTEQ7kNvwHx7CAd&_nc_oc=Adn8XyK1dOcZnN6XCrpxqAZzNrPFjHRF1Azc9byvwKu6rOj2QvZjNa1v7raN25LG66Q&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AflLQuW8LdgxT4j7Y-4yroNO2Nf_wqJ7TLvFY3h0PiMd1g&oe=694BC4BC)
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

  ![There is a launcher property in the property panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464076144_573870208484268_3571774494949796316_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=tC_8a_PjDuUQ7kNvwGv21lR&_nc_oc=AdlWaHvwv7Vm-OWBbPTjYmm7TzGQGJxJxwHQtMCav5DC8iHTblguTLsCGlPcJMCaCyA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmTYnu_eBOaCvdpPwPw_lgYdvaXmUli4SBlpWrL29sKCw&oe=694BC405)

  **Note:** You might have to deselect and then reselect the Rifle object if this new property doesn’t appear.
- Set this **launcher** property to the **ProjectileLauncher** object. Click on the field beside **launcher**, and then select **ProjectileLauncher** from the list that appears.

  ![Select ProjectileLauncher](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464035648_573870011817621_4324077274258554259_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=43YNveEToVsQ7kNvwHZW86V&_nc_oc=AdldAEBvIpVMXV0ven7-Ccw4issTNBpta0nEtyIg5NnzZ380YbU4g1KxfoDUhtnptPc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfnmbKo8hfOk1ChEttPWeO_ft7_nyr5eYD0GiiPxQjYUFw&oe=694BE7CE)
- Preview your world by clicking the Play button.
- Walk over to the rifle, grab it, and then click the mouse button. Notice what happens, a shot appears to come out of the rifle when you pull the trigger. Next, you’ll update your script to accumulate points whenever the player hits the target.

  ![A shot appears to come out of the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475273504_641654838372471_3353505584347988670_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=KD4McgKxeO4Q7kNvwEI4C68&_nc_oc=AdnMGklWlXFDiUaprcuMJYvPjnJnjeuszGcicmvTCONsz2Juz8Pn7EBK0ZiAw-qj-dQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfkYJYXNrXLoIh6DDJ-XgVIteEVnCvcN_7ZlUiwjzRtjtQ&oe=694BE1FD)
- Exit Preview mode by pressing Escape.

### Section 8: Count points whenever you hit the target

In this section, you’ll update the script so that you score a point each time you hit the target.

- In the desktop editor, select the SpawnPoint in the Hierarchy.
- Click **Asset Library** > **Public Assets** under the Scene pane.
- In the Search field, enter “skeletoncrayta” to find the skeleton.

  ![Pirate skeleton](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464152935_573869948484294_7911900688495928080_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=zEE8O1zbKl0Q7kNvwGTyt0s&_nc_oc=Adm30uqzJVizGjQ30FbINbtxY3bYACd4UGXEYWYlO3fHQEDWnM5fe6zkawcWCtLeu3o&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afki-05MZCKX4ToFOtW0H7PXc-BESjHlvYSX1pZWBA_iEA&oe=694BD282)

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

    ![Every time to hit the target, the score increments](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475121433_641654885039133_2447663056588542102_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=p-BOmELxOYsQ7kNvwH3dhTt&_nc_oc=Admy2vV5HIo9RvU_1VkqLOyJqOMrAW4AKY_8PVBaHuSv6M4ioqD3FDlLJe9eGWcOpWE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfnBe4W6xqT3S-cd2UPKSEb_--T4c6iG3v1D7V2XXEpmgw&oe=694BC62B)

    Every time you hit the skeleton, a message prints to the **Console** that tells you how many points you’ve scored. If a shot doesn’t hit the skeleton, then the console message simply doesn’t appear.

### Section 9: Display the score

In this section, you’ll revise your script so that the score appears in the game.

- Add a **Text** gizmo to your scene.

  - Click the **Build** panel.

    ![Build an entity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/587517516_869065705631382_2688631765762109807_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=RH8NTYdfeEgQ7kNvwHt0DNX&_nc_oc=Adn8hAEZ3C3jktkYh8Pn9piNZ1Eix-_rxN8yu9Pn4IsO8fh89pPl2DHxfmQB6LVjWgY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfnxZq5bA5TjLJlKWJIMUQS24gGY6P0IwDVEmO2VaDItRw&oe=694BC9AA)
  - Select **Text**.

    ![Select the Text icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/584304762_869065562298063_4509520630112735143_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=htFEuuiwHGoQ7kNvwEc6-gG&_nc_oc=AdmiwwxoJcEkfZhrqcrnTOiRcOXgbHyUPA7jWLQ2NZ2xrXi9r4eyTfRvDnqLF1QkLfg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afkk-olBYoBRjbsaNinxRnswSm8WO6SlcJlZ-R211s03mw&oe=694BD1A1)

    A **Text** gizmo is added to the scene.
  - Position the **Text** gizmo within the scene so that you can read the score while you’re shooting at the target.

    ![Position the Text gizmo so you can read the score](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475549601_641654858372469_2650846579364077855_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=MHxz0EqL4LUQ7kNvwFsqwBF&_nc_oc=Adk1_XVzeMtcGYT3uv5ZI1E7vBqIJOaGOWQJMT-uKfEDDvBMAMtzrlv9FTfbORQJqMs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfnQR1yMsJZcgSSj2gekL1POyAwxIzOWNEG1524S7mjbEg&oe=694BD5F4)

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

  ![The scoreView property appears in the property panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464222401_573870035150952_285145257509364434_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Nw6Pi9hAg4UQ7kNvwFYi0vZ&_nc_oc=Adk_NRwyF3BlzSaiw1RXlG_4KPMKi3dfjg0abF0boSar7VrUAmqRSvVbM4CVmQQbieo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AflMAvRHQ7v8wc8u2PRKfU96CNja-Llxn3wBaRDr37cYaA&oe=694BD2F5)

  **Note:** You might have to deselect the Rifle, and then reselect it if this new property doesn’t appear.
- Set the value of `scoreView` to the Text gizmo that you added to the scene. Click the drop-down selector beside the label **scoreView**, and select “Text”.

  ![Set the value to the Text gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464088168_573870068484282_6798580279511898058_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=t9UjPGwoiSoQ7kNvwGUCH9x&_nc_oc=Adk8a0QZXvJ6q4NC_58ujqf1usaRHETtqPfZhgEkKZfDdBuzMvxmMsLDykxuHACgZY4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfmW9HdPgBt0JbxcbR62YRgH4P2rJVBsQ4OICZzXfTTBeg&oe=694BBC8B)
- Test your world.

  - In the desktop editor, select the **Console** tab at the bottom of the screen.
  - Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.
  - Walk over to the rifle and grab it, and use it to take several shots at the skeleton.

    ![Rack up some points by shooting the target](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475293293_641654835039138_2953793375639169747_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=zPZ1T7P1ZvUQ7kNvwFIh5P9&_nc_oc=AdnSWzvR9IvEMEcn_xGsvTasRN_1XYkKcZEVUnrc2dOdEu2PDZmRoydxihEWFVeNUYM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfkXHo-QG3PT77eZezto6xqxWLqu0y_n7nGUGLH9yIDdDw&oe=694BD6C6)

    You should see your score floating in space, and it should increment each time you shoot the skeleton.

### Section 10: Create a second rifle

In this section, you’ll convert your Rifle/ProjectileLauncher combination into a Template Asset, and then you’ll use that asset to create another rifle.

- From the Hierarchy, select the Rifle. This object has the script attached to it, and it’s also the parent of the ProjectileLauncher.
- Right-click the Rifle object in the Hierarchy, and from the menu that appears, select **Create Asset**.

  ![Turn the Rifle object into an asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464006274_573869955150960_8083174888610967206_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=KUdX1nOWv_cQ7kNvwEVlsRJ&_nc_oc=AdmOppZ4Ntw7yOn5IRVWIFAzl0P7ekKowXPYmGK-qoA3BlHlN2KvkB8bHPNHp6bXnOY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfkrL-UJd1pMZwMzVamuF9-F4bphaM2aHBrDkxIfgGH6AQ&oe=694BDDF5)

  The **Create New Asset** dialog appears.
- Type a name for the asset, and type a description of the asset, and then click **Create**.

  ![Fill in the asset name and the description](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473721798_631480272723261_8456815458843473069_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=fmkrH-xMA7wQ7kNvwHUX7kQ&_nc_oc=AdmT0owbudj_5Y9zwtMvbklAM4q-2O2q_Pm_u7IwZnOg7uTZqqvwXml78Cl114Bux9I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfkCeU9gCJnQr0qzTbJSzw1ag3Woi9p9JgjsAx7bJ3Hl9A&oe=694BB8A5)
- Open the **Assets** tab, and then select the **My Assets** folder. You’ll see your second rifle asset there.

  ![Your new asset appears in your My Assets folder in your Private Assets Library](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464099449_573869905150965_6806556283750141783_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=kBGRncpP2TAQ7kNvwE1p-IA&_nc_oc=AdlqpGdcToBNb-W0QPd0HksmKrcNoF8mJswEigC-U-FdyWjscpbgnIkqpPlS_HJEptM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_AfkAx_9ImEGDewOHUcs-ScLN6_bFqXTZpT-SslXQU8aQWQ&oe=694BEADA)
- Click and drag the new AutoRifle asset, and drop it anywhere in the scene.

  ![Place the new Rifle anywhere in the scene](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475226479_641654815039140_955495808021670869_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=KjwMOC7nRF4Q7kNvwGmBxSv&_nc_oc=AdmX0r5xwDn_Y3ykVKjHirtJlPiSy6lXpcDa4W4HZE06na60MOk7Bjyw_DlFyicE1A8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ekShegny2riGs6H-MEBTdg&oh=00_Afm3zyzVj9wzUj4rrSOK3sq1UPM3GvnZykRtzttKKzIwGw&oe=694BE980)
- Test your world. Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the second rifle.

  Notice that you can use either rifle to shoot the skeleton and generate a score. Each rifle has its own score, which means the text box swaps between the scores as you swap rifles.

You’re done! You’ve completed building a game in Meta Horizon Worlds! In the next section (which is optional), you’ll try running your game in 3D on a Meta Quest headset.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

* Try the [Batting cage tutorial](/hw-mcp-tools/documentation/hw-docs/Tutorials/Adding%20and%20manipulating%20objects%20tutorial.md) now that you’ve created your first world.
* Learn about the desktop editor with the [Introduction to the desktop editor](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
* Learn about the other tools available by reading our [Tools overview](/hw-mcp-tools/documentation/hw-docs/Get%20started/Tools%20overview.md).
* Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.