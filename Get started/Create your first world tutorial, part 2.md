Source: https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world-continued

# Create your first world tutorial, part 2

**Welcome to Part 2 of the Creating Your First World Tutorial**

In this tutorial, you’ll continue to learn how to create a simple game in Horizon Worlds, where you shoot marauding skeletons in a graveyard. Where [Create your first world tutorial, part 1](/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md) showed you how to create a new world and build the basics of the game, part 2 will take you a bit farther.
Part 2 shows you how to import custom models, which are which are complex 3D models that are not available in the public asset library. You won’t be creating them here—you’ll use demo assets so you can see how they’re imported. Once you’ve done that, the tutorial shows you how to write a basic script and attach it to the entity to create behavior. The tutorial ends with testing the simple game in virtual reality.

Creating customs models is outside the scope of this tutorial, but if you want to find out more about them, see [Creating a custom model](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

If you’re looking for the first half of the tutorial, go to the [Introductory Tutorial part 1](/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md).

The key things you should learn from this module are the following:

* Importing custom models into your world
* Adding entities to your game
* Scripting entity behavior
* Trying your world in virtual reality

**Note**: This tutorial assumes that you’ve completed the prerequisites discussed in [Create your first world tutorial introduction](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-a-new-world-intro).

This part of the tutorial requires that you first complete [part 1](/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md), as this is a continutation of that process.

## Step 1: Add a pedestal and a rifle

In part 1 of this tutorial, you created the graveyard. But if you’re going to hunt marauding skeletons, you’ll want to add a rifle and a pedestal to make it easier (otherwise you’d have to use your hands and that gets messy…)

- Download the [Demo Assets](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=4kUF2spOTiMQ7kNvwFpoUkQ&_nc_oc=AdlwAKMXDVe9JrOCiFP20XspS-og2thSwT8LRA_6JC1uh3PZK8p9maRFKiGKearIuB0&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfjeXAP_mofibLaZhUrUEBdtTh1t9d-GeutE_m_eKJUk7Q&oe=6930A4C5)
  .

  This file is a zip archive that contains a number of pre-made assets that you’ll add to your game (like the rifle).
- Extract the contents of the zip archive. folder.

  a. Open the downloaded zip file.

  b. Click **Extract all**.

  c. Browse to a location for the folder on your local hard drive and click **Extract**.
- Add the pedestal to the scene. To do this, click **My Assets** on the **Asset Library** tab at the bottom of the screen

  ![The My Assets tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515073444_756887460182541_1703766811137744765_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=QCvfXeu0088Q7kNvwFJERZg&_nc_oc=AdndKSyz9r1kjrBqXX1dajNliG4kKfCvTOOIh2uXAwH-VHCMjGUPpzCCY6viTlTddso&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afiim0Y-CbOn6vEdRpWC5hzMsSIQFMAMCarLaaWbrRuhTQ&oe=6930B1D7)
- From the **Add New** list, select **3D Model**.

  ![Adding a new 3D model](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366312_756887446849209_4679233969024346019_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=G7eEjCj8_wcQ7kNvwGleqkZ&_nc_oc=AdlDOg2oD6NU4sf7sfUWX6su1Z0MKUIXJt9tNih4p3TvUSuxyEP6vtt_8VDmfTvdf_Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afip15Aj_hR7yS0JAjF3wsFf0juIHony1C5w1jvSdZa1Sw&oe=69309A8D)
- In the **Import Models** dialog box, enable **Preserve offset pivots** if it isn’t selected already.

  Because of the way they move, certain assets use [offset pivot points](/hw-docs/Desktop%20editor/Assets/Use%20offset%20pivots.md), where the point around which they turn or pivot is offset from the center of the asset. This is so animation of the asset can look natural.

  Ignore the warning the dialog box shows: all the assets that this tutorial works with are [single mesh](https://developers.meta.com/horizon-worlds/ learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models) files.

  ![The Import Models dialog box](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515276565_756887456849208_4413823266568814632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=-CeB540cfucQ7kNvwFl-g19&_nc_oc=AdmWUN-yQhvyuSqjd6lbbGKOI8pa9L4B1BqIQXlcogrn5i_BFQ7AaXkQSwXUNmTPXV8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgkIOeTy3aKGcVFc_sJ8EFmCcR4Qbf1su36P7M8szTxXw&oe=6930B70F)
- Click **Choose files on your device**, then navigate to the folder in which you extracted the demo assets.

  ![Choosing the extracted files.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366476_756887433515877_6413619545446559528_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=VxIfbfj_DPwQ7kNvwGrlaC0&_nc_oc=AdnNtEvy7Tik5LbXQVgUtn2GqFuI0W3FRnuE-zMv-oai9kKl2wi2BZm2Pu0FgzBCEb8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afgl-9_-0Ky2eeMS4czc7-E5VdxRu9R8WKnWGYSO20qy6g&oe=6930A4E8)
- From the folder on your hard drive, select the `SingleBlock.fbx` and `StoneBlockKit_BR.png` files, and then click **Open**.
  `SingleBlock.fbx`is the 3D model file (or `.fbx` file) and `StoneBlockKit_BR.png` is its associated texture file. These are the files that make up the pedestal asset.

  ![Select the asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515092034_756887443515876_6027285087868923840_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=sjP0hfOmKDcQ7kNvwEgV4Zo&_nc_oc=Adn6lvld5FfFK31lhPjFxNkfAVjNrVPXmM0l2dq2IQxO2iArJRHfZ8A-iPLAkr25N-U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfjzTYtZoqKe-YqZjWtBogI3CRi-F7g9feRg3X9z5vxbRg&oe=69309D5A)

  These are then displayed in the the **Import Models** dialog box.

  ![Asset files displayed in the Import Models dialog](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515097062_756887440182543_8868542573376784040_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=6wnjzoZXXJcQ7kNvwFCTxvc&_nc_oc=AdluL5mGnhYSuWCyJ_0Gu2z1jnK63ZN8HuOgQ8gQHucDLKNeq3iPMkO3eVPYWI6n0gs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afh-1l0OImvSMPrd9mv2CUgOV1x7jA4dQw7q6pHoWFFfsA&oe=6930C92F)
- Click **Import**.

  **Note**: If you decide to leave your world at this point, it’s important to wait for the asset files to be imported into the desktop editor before you leave.

  The SingleBlock asset will appear in your library when it’s been imported

  ![The SingleBlock asset](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515875637_756887453515875_4696101948964392756_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=hci0LkLHANEQ7kNvwEJFm1X&_nc_oc=AdkzSqBq1egGSZWW25UtEW0LAgY8ZVroLtDrLavQmA-fgVSWyrvinMX-UOr-6fUg7Xs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfimVfqyjS_RS_BsqM6U9SesPB6XvTyAyjN1td0fa4lb5Q&oe=6930C57A)
- After the asset files have been imported, drag the SingleBlock asset into the scene.

  ![Inserting the asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/514954847_756887450182542_369195396390371839_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=8BzSNKlhrnIQ7kNvwHDEceF&_nc_oc=AdkqN5yaQ4lLeYl61w3BFrkpBV1Uc9U_KlIOiH6z5nw39CpKThrQSh2bmqkzlqxhaMI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhL4vCCVib95jNT6FUP3q9iDAL8zaK-L2EHMg2rWVsc8Q&oe=6930AE41)

  The SingleBlock asset appears in the **Hierarchy** panel as an object named “SingleBlock”.
- In the Hierarchy, rename the “SingleBlock” object to “Pedestal”.
- Enable **Snap to surfaces** by clicking the **Snap to Surfaces** button. This allows you to easily position the base of the object along the ground.

  ![Click the Snap to surfaces button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464129353_573870105150945_5383089439026099930_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=FSR7UNUEg5IQ7kNvwFb1yu4&_nc_oc=AdnkhiQPwQ4RdpriDzj31O5Gc00nKIrLQ5dduDMbggx5dSLjc7NDQo8uNnsviwndlEQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afi1EW58WGln303sm26s9YqPOPSRpbrXUb1OHOEd8KDLnw&oe=69309AE7)
- With the Pedestal object selected in the Hierarchy, position it by dragging it by the orange dot. You can place the Pedestal anywhere on the ground.

  ![Click and drag the orange dot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475165196_641654818372473_4879658605534264112_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=SLzxQQau60IQ7kNvwFi5C1k&_nc_oc=Adk16ZXz8HofXwZ3e9GjBzo3FjU4oXLD6HBki4caUzCSSlG2g7va3I5ajBhjRaq3pWQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhEE_S_UGxplTHbPdE2yRKwK01VFjghltk5e6AtUyrBiQ&oe=69309F6B)
- Add the rifle asset to the scene.

  a. Open the **Assets** panel by clicking the **Assets** tab.

  b. Click **Add New**, and then click **3D Model**.

  c. In the **Import Models** dialog box, disable **Preserve offset pivots** because the 3D model for the rifle uses [more than one material for the mesh in the FBX file](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Multiple%20Materials%20per%20Mesh.md).

  ![Don't preserve Offset Pivots](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464008566_573870171817605_7978731282074208552_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=9LkT9eU9pjMQ7kNvwGmcS1a&_nc_oc=AdkJrfXtk9L0yl2-JtBNEIf7eRQBxmibUjZhWARomG1GQAjjGSMxYh9k0D9x6xl3wMM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhFMVEU8cOF3iWYsT1s1VP5ExzmGFy1aJaxOn7nZqkGzA&oe=6930AE86)

  d. Select the asset files to import by clicking **Choose files on your device**.

  e. In the file picker window that appears, select the 3D model file (ACWpnBattleRifle.fbx) and its associated texture files (WpnBattleRifleA\_BR.png, WpnBattleRifleA\_MEO.png, WpnIndictator\_BR.png, and WpnIndictator\_MEO.png), and then click **Open**.

  ![Select the five asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464310803_573870025150953_4833471769077242766_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=UU0znRx0bCYQ7kNvwGCj-w8&_nc_oc=AdmzGlo225MAYu12aIa2rMQSSIawkpPTZg3L88EceYDW4o0PBJydnrOrrP2wG2D75cs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfjggGjvRy4n1tt63Exaz-qZwY6ioHcWJ3KQWdbT0T_qAw&oe=693097E8)

  f. In the **Import Models** dialog box, click **Import**. Wait for the asset files to be imported into the desktop editor.

  ![This is what the rifle asset looks like after you import it](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464292127_573870045150951_3415127998518177098_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=pEYOc9mQJDUQ7kNvwHzNiVw&_nc_oc=AdmL9N2FUwpSp3OIk_OFIG4Wy71FHGXkwvdpT5xwFrm6rE8k_8emKED7eNobRdV5E-I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afjk5eMXx0VAy7b6Q4pB6_xD4SZizv1TDHcALZ2FDpBaXQ&oe=6930B143)

  g. Drag the rifle asset into the scene, and place it upon the Pedestal.

  ![The rifle floats over the pedestal](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475232756_641654861705802_4132254507512158168_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=c13_GnRbddQQ7kNvwE2J3TR&_nc_oc=AdmJ5XRpNQxtmNBOcIqbHbojC4CESdw3LX5OY962xkS4NE7CDvjpWzsR7rgfsW5HT9E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afj0ZX8kybfOSeHQao2AYRz_0xil0VK3hCJLcZnYIu3l3A&oe=69309B57)

  **Note**: If you’re having difficulty positioning the rifle, remember that you can always use the orange surface snapping manipulator to move objects anywhere along the ground. You can activate it by pressing the “W” key. Optionally, using “Ctrl+G” lets you group the pedestal and rifle as one object, so you can move them together.
- In the Hierarchy, rename the “ACWpnBattleRifle” object to “Rifle”.

Your Hierarchy should now look like this.

![Notice that the rifle object contains two child objects](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475582112_641654881705800_8956813367946191943_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Givjaxyj4KAQ7kNvwEKe3VF&_nc_oc=AdmCnjk7TgKLvMFcRLaM3NTMjZZbwBc5fnajP7HbHAJl3wa8n44qum0TScx1J_YsOQE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhR1DVPUoxHpfhhURoatAMRmr2ITz8AvKRoyUsrnx87gA&oe=6930BE9F)

## Step 2: Make the rifle grabbable

In this section, you’ll learn how to make the rifle grabbable by the avatar.

- Select the Rifle object from the Hierarchy.
- In the Property panel, set the following two property values:

  **Motion** = “Interactive” and **Interaction** = “Grabbable”

  ![Click the drop-down selection list](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/463983859_573870008484288_2943956617777129080_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=59aRp1CxV_8Q7kNvwFwSZnG&_nc_oc=AdkhE09QK8HGmmZo_4ELxfDzvfR_8hnA45XnZ3gHsgB_hr9QrpE-E4yDYHcYHYLgSFc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhoHgcCsicYil4bJ0czPUMb8GzISVfDEBloE7baJO0pqw&oe=6930996D)

  **Note:** The **Interaction** property appears only after you set the **Motion** value to “Interactive”.

## Step 3: Try-out your new world

In this section, you’ll try-out your new world to see what it’s like to pick up the rifle.

- Click the Play button on the menu bar to enter preview mode.

  **Note**: Ensure you’ve configured world simulation to start automatically whenever you start the preview mode. Click the the ellipsis icon to open **Preview Configuration** and toggle on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview entry**.

  ![Ensure world simulation is configured to auto start](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481784596_667180549153233_231569701181011321_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=DSxp4WXg8XQQ7kNvwEkj5XV&_nc_oc=AdmpfbDVzwAmjTU0fbF7vulF0iLfmYEXOvBIXbaq9nSfIwna6TwNBERcpy6ST7Un_sU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfjQc0FNQhXsWLZNj2tHURpt45rzXnPfd85DRaD-vz7wEQ&oe=6930CB10)
- Maneuver the avatar over to the rifle using the arrow keys, and then pick it up by pressing the “E” key.
  ![Press E to pickup the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475655068_641654875039134_3343217904502966675_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=RxmobDzxYUoQ7kNvwGwTJsB&_nc_oc=Adl8WFrJevGj5BfIPqPslCh2y6rFrtVOxEPOw7hqM8NfLD1cIAMvIstOy4MvLEuzSuk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afjtf8hG-qfa9YhAXu-nBki9CqLNlJk1u0eH2ARYsMlz5Q&oe=69309B37)
  The way the avatar holds the rifle looks somewhat awkward, but don’t worry, you’ll soon fix that.
  ![That's not how you hold a rifle!](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475514035_641654871705801_2878061070962689344_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=qITx9c2PAmAQ7kNvwFWDVGH&_nc_oc=AdmuUC-LN5T2-9giWGDOh6y6tfv9t5meRXIKdxc8JpeFyMcpA0tr48MpbY3QtQfXhf0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfihH3uWLV4D1bOJ7J6Evh4Xq87dN8BB9aN3gaE3ek1StQ&oe=6930C915)
- Exit preview mode by pressing Escape twice.
- Fix the way the avatar holds onto the rifle. With the Rifle object selected in the Hierarchy, in the Property panel, scroll down to the **More** section, and enable both **Use VR Grab Anchor** and **Use HWXS Grab Anchor**.
  ![These settings fixe the way the avatar hold onto the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/469860345_607478945123394_6899703159416175623_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=oscwwq1gtNMQ7kNvwFyAMpN&_nc_oc=Adk1CdKhvjtDmo7vKS1PM_tYvOAbtzvLFHJfG5nlTjiQExYqUD3XAE89CVd9f_Yh4gM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgEBtQtdzi8OYptwSUe5wJrzj79ZAbCJYUMMwZzgJ6Y3w&oe=6930C4EB)
- Set a pose to use when the avatar holds onto the rifle. With Rifle selected in the Hierarchy, scroll down through the property list until you see **Avatar Pose**. Click the drop-down menu beside it, and then select **Rifle**.
  ![Select the Rifle Pose](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464342330_573869941817628_7549640582068222270_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=VDdHR09oCcQQ7kNvwE1Z_-p&_nc_oc=AdnX3vxbq4-hBxZokFUl5g3aEvorDlzeEZOewlAnvvB3zyBJDf8wPBXWNVsEuV4NhHs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgJFShFlgvkJ8THfnnEQmWWNMPCYG2k1ibMOZU6hGvUoQ&oe=6930CAAA)
  Now your avatar can hold onto the rifle properly.
  ![Now the avatar holds the rifle more naturally](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475859865_641654841705804_1105400890562108752_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=sjeIAY-KtTcQ7kNvwHFutmn&_nc_oc=Adlridaxcz4OmcHq4FIQUuFPS8YJ_DTyn1AiK6Zx0jzHgamhQjT-lCGtnYZoJ5k8-zM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afi8l2S4pGgCfSQZXK3b8yo_0yhC9Q6eFi9xUYO82e1_1w&oe=6930C66C)
  But the rifle still doesn’t do anything yet.

  ## Step 4: Add a hello world script

  You now have a rifle that you can pick up and move around with, but it still doesn’t do anything. In this section, you’ll make something happen when you fire the rifle. You’ll write code that prints “Hello World” in the **Console** whenever you fire the rifle.
- Open the **Scripts Panel** by clicking the **Script Panel** drop-down. The **Scripts** dialog appears.
  ![Click the Scripts Panel drop-down](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/463979710_573870158484273_6956393922882678343_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=iMwVpTmeUMwQ7kNvwGhQEzs&_nc_oc=Adn4QT8cpDMWhYA1cvsxAc9Uoe4Um5R_MFNd796gOMtoemNPB2VI3m0t90aNOvaNjKs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfiJ6UzXnLSu1TTEbeGnTf5tS9-kQBc2yZeZ5n9F--wuyA&oe=6930A66F)
- Create a new script by clicking the plus button.
  ![Click the + button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464284760_573870108484278_5626008342355283582_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=_57T7Pg8ZHEQ7kNvwGCkQeR&_nc_oc=AdngYwLQAhQKvMV53_tiykVrHx0VgZAMidJQfB-EChGQth_baX9UhRto6nf15i-hPKQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgzJnqTJuBXfTLtL0WsSzoQ-21w1BrTgLYX4NiScJNz0g&oe=6930C188)
- Name your script “Shoot”.
  ![Enter Shoot and then press Enter](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464325206_573869988484290_3165699765154261570_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=SIapxnaVgpsQ7kNvwGwJ6gE&_nc_oc=Adn30NHrtHXOM4y8zhFXqCAVSymEH4GiMQ4syG3arh0Hp8qk_bcvzdee9gPZic9xwxo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfjCD63zy8Rcz5fVL47RuZGzTxaSrnfWEvQ2Zky3XnAJ0A&oe=6930B10B)**Note:** It takes a few seconds for the script to appear after you’ve inputted the name.
- Open the script in VS Code. Click the menu icon next to the script name, and then select **Open in External Editor**.
  **Note:** Currently, scripts can only be opened in the aforementioned way, from the top dropdown menu.
  ![Click the three vertical dots to see the menu](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464107203_573870138484275_3986572612224730853_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=XQj8-Ly6kkIQ7kNvwGqd4H_&_nc_oc=AdnxPRBNMMUjBNabg9DEJ-LupFfyR4-ND5ZjzUVKfF5dY3HDR3kN0VB5Gc8BFBdgW4U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afjh8sO_JEUORxW6BlY7IVJ66b3mCOCv51gF5slA2JsfOQ&oe=6930AE58)![Oen the script in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464190660_573870198484269_3483053417967741197_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=ph46KUO2EdsQ7kNvwGE5UxV&_nc_oc=AdnDmGXC7f0egCdCr2LXPQ_PjIbicrCSju5r5LyuDS7w88qNu2YQCI5ubpjDcopdDzg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afi9lAMEcYpEhWZ6XugQEODFbrl2paSG8MtyYGbGZLTbYg&oe=6930B22F)
  The new script opens in VS Code in a file called `Shoot.ts`. It contains boilerplate code.
  ![This is the default structure of a TypeScript script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464177291_573870041817618_3500120114101619688_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=uc1jNo-vu-sQ7kNvwHLoK09&_nc_oc=AdnAhvbD7kxHyoxHKsU83N9fuBkM1Q8J75f5O16Uq4KTUDeQ0BM29UUPXixj_hEz3eQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfjKyhesqt37G8cLiVg1aDxuEy0MM-jyewkpq0ctyBWdiA&oe=6930A0EF)**Note:** The `start()` function is called whenever the entity that the script component is attached to is created. At this point though, you haven’t attached this script component to an entity.
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
  ![Click the drop-down selection list to see your script](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464091170_573869985150957_1926137328255172174_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=cz3wosg5D-IQ7kNvwFYE_DN&_nc_oc=AdlttKvfA8XcZjuz-rmBVZ5MUgtdXMhAv0RX2xzIEgqq1si19HSbxm5F6fZYQnnJefc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgaEdYsRW7cnKgh9keIbEm7sQ3IZaxE_3TTTxi7NhvqHA&oe=6930AA0A)
  c. Attach the script component by selecting “Shoot:Shoot” from the **Attached Script** drop-down selection list.
  ![Click on Shoot:Shoot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464106799_573870071817615_3222010519411086870_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=p-wsTRiskuUQ7kNvwHcjIV2&_nc_oc=Admdf9KaDcSX_M_RnNk9OSzNfVO0Map-RaZmrrB8rMJ6M1b4kEd78uufvIJbNm4Ap6U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfiAqHqT_mP3y78I7yngRAn2pKngQijDwTlRZxm75-CzTw&oe=6930B06F)
- Preview your world by clicking the Play button on the menu bar.
  As soon as the Rifle entity is created, the script prints “Hello, World!” to the **Console**.
- End the preview by pressing Escape twice.
- You can see the debug message by clicking the **Console** tab at the bottom of the page.
  ![Hello World! appears down at the bottom of the Message list](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464178601_573870128484276_4374457029334205218_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=PmlYztYzuIwQ7kNvwFODjCc&_nc_oc=AdktOnl-qJ-CH2QkF3MLZpJDp0APL092yW_PlmFITwpb5pCBy6b5499-Xuqun16-S5g&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgkhuS8s9FvgwK4UTS8JXMQp4Ibi0rKmwz3yH8n54KCvQ&oe=6930A0B0)
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
  ![You can clear the error messages](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464347386_573869901817632_7646464504087582755_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=7l5ez_iuL6EQ7kNvwHNCXxB&_nc_oc=Adn4ip1IUOY2sTL69xHNRd7kfLkQIN8La9pkdsLV_k-wD43SLtdLc2C2zzCTisWkUbg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhMFvdXRAq5eL2R_kq4WUFk8KUQvVWkLPx5Qwuv6glL9w&oe=6930BC3D)**Note:** Normally, you shouldn’t see any error messages in the **Console** window. If you do though, then try copying and pasting the code instead of typing it yourself.
- Preview your world by clicking the Play button.
- Walk over to the rifle and grab it.
- Fire the rifle several times by clicking the **A** button on the screen. As you fire the rifle, notice that a “boom!” message appears in the **Console** window along with the number of times that the message appeared.
  ![Look at all the booms!](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464389048_573870095150946_7738181260387489635_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=iXlbikyagSIQ7kNvwFo0s_v&_nc_oc=AdnvEi88e3x7qIY6-yHrG0gY1J4C9tYS3cHTvupyOsmzSAAy8jkKUk3lSNUXDrrGnxM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhJ5OvPfb14RkzpE0CwntxwoFsNRdylpT24jLyfStqEmA&oe=6930B269)
- End the simulation by pressing Escape.

  ## Step 6: Add a projectile launcher to the rifle

  You now have a rifle that you can pick up and carry around, but it doesn’t actually do anything except print debug messages. In this section, you’ll make the rifle launch projectiles.
- Select the Rifle from the Hierarchy.
- Focus on the Rifle in the scene by pressing the “F” key.
- Click the **Build** button.
  ![Click the drop-down button](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464331432_573869915150964_3815683403137700120_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=4DQTLVUcsK8Q7kNvwGijqBT&_nc_oc=AdmuAtNbGRKnhmMP6fQlbVmPNz9Yle0NqppGT-U9VUQNPF_sogcgSHqaXtpztlfutJo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhjelJWGaHmgmi0r-KrGe9Y91nwOrAcxM7Hit0S58bOSA&oe=6930A01A)
- From the drop-down menu that appears, select **Gizmos**.
  ![Click Gizmos](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464197626_573869951817627_8947530193925354975_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=k3R3D-lt5CIQ7kNvwEoyA2c&_nc_oc=AdndBA4WWciEK3ovb-NAkXvJbgcQdBqPL9H9F04znR2F92D-cj7J2zcKwjGcSJqeIAE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhiO2LZVTnfR96seNP1oeqNqsx5QpadeQob1RZU9l5O3Q&oe=69309B69)
- Select **Projectile Launcher**.
  ![The icon for the projectile launcher gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464179364_573869968484292_6347379331044320910_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=IDd-jNg9SaIQ7kNvwEknJUd&_nc_oc=AdlC1jrmABfff6V33FGIdwnmzbTN6CCBAjU9P8QwAXpcQBWFChJ9XOwE6ThABkHILvA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgyUA_fLusuVIDHOhXsHOU8oytz76Cu2XLDAiLWUlBrlA&oe=69309CA7)
  The **Projectile Launcher** gizmo appears in the scene, and in the Hierarchy. Pressing the “F” key while the object is selected brings the object to focus.
- Close the **Build Gizmos** panel.
- Attach the ProjectileLauncher to the Rifle by making it a child of the Rifle. In the Hierarchy, drag the projectile launcher, and drop it onto the Rifle.
  ![Drag and drop](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464060217_573869908484298_3061206173699646062_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=lbLdST2Qn3cQ7kNvwG5j8s9&_nc_oc=Adlb_xW_3wcjJjGugtlPsefSoSDJXB52N0ieCp7EPtcbL7Z0SmwyuzcwwvrcuExE5_E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfiRd4shroMd8rThKxIUPIop7jyMzDQbWXdEe5fhk-doWA&oe=69309B76)
  The ProjectileLauncher should appear indented in the hierarchy since it’s now a child object of the Rifle object. You can expand the hierarchy by clicking the triangle.
  ![It's now one of the Rigle's children](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464190942_573870178484271_3293882596374239688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=gf9hqns6EGEQ7kNvwGqn7nq&_nc_oc=AdnZhnbe9EndfpurGgE0tPM6P2ZbyKuHEn5IAZzQ9kN_5TD0cEviRxVHoSEpZHfd3p4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgcRZwnBZAiItIAtCkJr-GsWEv4zfcHz0Ra5qkUeTYqSQ&oe=69309852)
  With the ProjectileLauncher selected in the Hierarchy, position it relative to the Rifle.
- Adjust the Position values of the projectile so it aligns with the aim of the rifle.
  ![Align the projectile with the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475194437_641654878372467_7693479725163060948_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=3Yf3T1uy52oQ7kNvwHQ1GqB&_nc_oc=Adlld33OOAjvYyUzPk52vGO14e6lQ7ER6YsSLQlvrfGIQIl9NW9czpDw4kieJHgVDwI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfiiRmtlW5NX4eGO9he2fSiCxlVr66Nlhn6u25D1k7mlcw&oe=6930BDFC)
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

  ![There is a launcher property in the property panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464076144_573870208484268_3571774494949796316_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=r5ul8EeggSEQ7kNvwEVRb3r&_nc_oc=Adm-vq9ztJeGxoTFjUDpqoewetrHmqIB4AyxCKoh1neC5qslTuVWrzTbdHHnQWvRkmw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfigyvjVIjJcnLLWtuclbmKh0MYSfadotSbrmsZ2vSzlyw&oe=6930BD45)

  **Note:** You might have to deselect and then reselect the Rifle object if this new property doesn’t appear.
- Set this **launcher** property to the **ProjectileLauncher** object. Click on the field beside **launcher**, and then select **ProjectileLauncher** from the list that appears.

  ![Select ProjectileLauncher](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464035648_573870011817621_4324077274258554259_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=hABUkB8tzqkQ7kNvwFLv6sA&_nc_oc=AdkY3c9HTUPZkQg7ieyEWU4OVmneKNd28x_ojwNCekrjFXOIovPpVGVW6VehEUWCuKQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfjpMEvf219kmBXm2F-KDvhBx0dq3PT47QW0EUFttDp0Rg&oe=6930A8CE)
- Preview your world by clicking the Play button.
- Walk over to the rifle, grab it, and then click the mouse button. Notice what happens, a shot appears to come out of the rifle when you pull the trigger. Next, you’ll update your script to accumulate points whenever the player hits the target.

  ![A shot appears to come out of the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475273504_641654838372471_3353505584347988670_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=kA8SVyPYFdUQ7kNvwEzpFaL&_nc_oc=Adlhly85eZjyMxrHqk1sl31wzWwOB8a4CQtgUC_0ZNMT6Psgpb6OhuSjakYYEgqW8Ks&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_Afis0itthfwfmxD-f1yB9TJCjVPh9crBunCH1TNY_dto6g&oe=6930A2FD)
- Exit Preview mode by pressing Escape.

### Section 8: Count points whenever you hit the target

In this section, you’ll update the script so that you score a point each time you hit the target.

- In the desktop editor, select the SpawnPoint in the Hierarchy.
- Click **Asset Library** > **Public Assets** under the Scene pane.
- In the Search field, enter “skeletoncrayta” to find the skeleton.

  ![Pirate skeleton](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464152935_573869948484294_7911900688495928080_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=V-5GhvM4pacQ7kNvwFl7x0M&_nc_oc=AdlX9ndYbebBHEdyH1Tpdje-AxbKE217n9x8rGOjX_rSyb_eShRR5AuDlZOrForkz4U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgvxULIjEMl6aPe8qgokRKz6UkBlBf0B5ioYnVAkwGIjw&oe=6930CBC2)

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

    ![Every time to hit the target, the score increments](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475121433_641654885039133_2447663056588542102_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=hHkBKHcwC8IQ7kNvwEM8Fbm&_nc_oc=AdlRuMiNq4TYsnsa94kh3tICSsrwqoB7w8KqvAHNZyGfbBjojcCvnrT2c8l0raunQb4&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfiAd44lpX2kbQ8v7gtZZSTov4tqXyZdmFHtDYDIEeEP1w&oe=6930BF6B)

    Every time you hit the skeleton, a message prints to the **Console** that tells you how many points you’ve scored. If a shot doesn’t hit the skeleton, then the console message simply doesn’t appear.

### Section 9: Display the score

In this section, you’ll revise your script so that the score appears in the game.

- Add a **Text** gizmo to your scene.

  - Click the **Build** drop-down.

    ![Build an entity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464331432_573869915150964_3815683403137700120_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=4DQTLVUcsK8Q7kNvwGijqBT&_nc_oc=AdmuAtNbGRKnhmMP6fQlbVmPNz9Yle0NqppGT-U9VUQNPF_sogcgSHqaXtpztlfutJo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhjelJWGaHmgmi0r-KrGe9Y91nwOrAcxM7Hit0S58bOSA&oe=6930A01A)
  - Select **Gizmos**.

    ![Select Gizmos from the list](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464197626_573869951817627_8947530193925354975_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=k3R3D-lt5CIQ7kNvwEoyA2c&_nc_oc=AdndBA4WWciEK3ovb-NAkXvJbgcQdBqPL9H9F04znR2F92D-cj7J2zcKwjGcSJqeIAE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhiO2LZVTnfR96seNP1oeqNqsx5QpadeQob1RZU9l5O3Q&oe=69309B69)
  - Select **Text**.

    ![Select the Text gizmo](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464276063_573870021817620_5656500703368336488_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=jMKGIbzBzgYQ7kNvwFwIBlF&_nc_oc=AdltrB7yzr0-HE5pPMg5YhWScqI8Q8tN5h3EbcNQ3ToOta6UlqKm0AeE8ZWtiV1cwsc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfiOM87CYKc4CF0S_KkITM0G3W6-Wpm2dyahehY1S7qbwQ&oe=69309689)

    A **Text** gizmo is added to the scene.
  - Position the **Text** gizmo within the scene so that you can read the score while you’re shooting at the target.

    ![Position the Text gizmo so you can read the score](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475549601_641654858372469_2650846579364077855_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=QT_rzpJR2P8Q7kNvwHoBUeP&_nc_oc=AdmZmUob9cWAMwN94bDKelmfs28b7YZ7NYdGFCx0j4VkENtx0TDCE98gH2xVxytvMw4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhOTNzl4VTGcUSHUmYvQTXW_aQDx7IbOqrZWX5tN-Narg&oe=693096F4)

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

  ![The scoreView property appears in the property panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464222401_573870035150952_285145257509364434_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=RKpuyK8lN_UQ7kNvwHGvxG5&_nc_oc=AdnuSwqDhPMB2ZCHeTrhWRu5un854sT20QCmQI1H1SAsyMq9SKqeIqhEQbwP8HtDABQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfihM8frIye57bM24N1rThViZkZEllmvwUkJMejtqMpCUg&oe=6930CC35)

  **Note:** You might have to deselect the Rifle, and then reselect it if this new property doesn’t appear.
- Set the value of `scoreView` to the Text gizmo that you added to the scene. Click the drop-down selector beside the label **scoreView**, and select “Text”.

  ![Set the value to the Text gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464088168_573870068484282_6798580279511898058_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=RCzqnXQBrQMQ7kNvwFTrFFs&_nc_oc=AdlguDmZKzSxs7ERq5KPP2IgfyxEsashzno05GZACR375y-tfLsTwpXwZQQAtVqyqes&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfjZdVCz96YRcaYhJtdq6-RvJ7LoP9VhKemcm6Liy6xuAQ&oe=6930B5CB)
- Test your world.

  - In the desktop editor, select the **Console** tab at the bottom of the screen.
  - Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.
  - Walk over to the rifle and grab it, and use it to take several shots at the skeleton.

    ![Rack up some points by shooting the target](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475293293_641654835039138_2953793375639169747_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=pc7ltrcgGAkQ7kNvwGcjJIk&_nc_oc=AdkrZ_NDMRb8q_7UT4A8IGbDLZvBOE4N4hqa5U6T2kR2DEixvGtlW3xMjYZK5kOEzu8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgDMetZD-dpYASeLm1d4TPwQCSXQW-2gH55yWskrmYXHA&oe=693097C6)

    You should see your score floating in space, and it should increment each time you shoot the skeleton.

### Section 10: Create a second rifle

In this section, you’ll convert your Rifle/ProjectileLauncher combination into a Template Asset, and then you’ll use that asset to create another rifle.

- From the Hierarchy, select the Rifle. This object has the script attached to it, and it’s also the parent of the ProjectileLauncher.
- Right-click the Rifle object in the Hierarchy, and from the menu that appears, select **Create Asset**.

  ![Turn the Rifle object into an asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464006274_573869955150960_8083174888610967206_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=0Dbr9Ggoe3MQ7kNvwFI4THZ&_nc_oc=Adkq99oOoLaWZc3-08rwSfvSsSd1kXQ2T8V4XPA1Njvh5YKYLdVJjVHsRsY6LLsffaQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfiBOOFf0F80hfXKWKyEE_4g0s3gv3IC5yFYd6gEkEHY_g&oe=69309EF5)

  The **Create New Asset** dialog appears.
- Type a name for the asset, and type a description of the asset, and then click **Create**.

  ![Fill in the asset name and the description](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473721798_631480272723261_8456815458843473069_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Lx0He5h8JnkQ7kNvwFhPvdD&_nc_oc=AdnUXli-dL9ADWJ8wIHNgFhRlK8EQ_PiEJlptXkJSTdNrlCwTXtgHGbzh4zqsyNLEkI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfhB6Q0YngJTsOn_mD1AaOd8wEwOY1A0Bw6uEHc4-FdWow&oe=6930B1E5)
- Open the **Assets** tab, and then select the **My Assets** folder. You’ll see your second rifle asset there.

  ![Your new asset appears in your My Assets folder in your Private Assets Library](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464099449_573869905150965_6806556283750141783_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=5O3RdoeJs7YQ7kNvwHBjqUL&_nc_oc=Admy5W2L2p98NPrWX6guYfRcu9INy4CRmU8Q2NiUYj1FLrmspLQ2OLZoRWSlrhlUn6o&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgZj1zQ_mD1dOg3W_VK7kCYIj-QUA9v8Hnm_KdiklPgIA&oe=6930ABDA)
- Click and drag the new AutoRifle asset, and drop it anywhere in the scene.

  ![Place the new Rifle anywhere in the scene](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475226479_641654815039140_955495808021670869_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=8ABufPhftacQ7kNvwEQoDmP&_nc_oc=AdkXhbadYcJlm-aGrhp4iUi2he42Nu2S2kGJu3-Ymdq0ulGbnmRsaLr91b6dY2355BI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uO9z2X7UjpPzslQvh4fnQ&oh=00_AfgSgkkZylN6hPP83pEcqSuzTwj_e9oPQSnF62nWVM7kmg&oe=6930AA80)
- Test your world. Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the second rifle.

  Notice that you can use either rifle to shoot the skeleton and generate a score. Each rifle has its own score, which means the text box swaps between the scores as you swap rifles.

You’re done! You’ve completed building a game in Meta Horizon Worlds! In the next section (which is optional), you’ll try running your game in 3D on a Meta Quest headset.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

* Try the [Batting cage tutorial](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/batting-cage-tutorial) now that you’ve created your first world.
* Learn about the desktop editor with the [Introduction to the desktop editor](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
* Learn about the other tools available by reading our [Tools overview](/hw-docs/Get%20started/Tools%20overview.md).
* Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.