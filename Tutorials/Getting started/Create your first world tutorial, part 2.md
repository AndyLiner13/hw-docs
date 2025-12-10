Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started/create-your-first-world-continued

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

- Download the [Demo Assets](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=A33KkoztyZEQ7kNvwG6rAxL&_nc_oc=Adl3n6SUotMwNGO9mm8lMit1EwvTlJ4bpN5Advgyftp7MeW_UrAhzZCSnoyi7swkqPM&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfnBpFKihl5Qj1YKTV2n71eVYYHve_jHRftiEKRyYGxGNw&oe=69540505)
  .

  This file is a zip archive that contains a number of pre-made assets that you’ll add to your game (like the rifle).
- Extract the contents of the zip archive. folder.

  a. Open the downloaded zip file.

  b. Click **Extract all**.

  c. Browse to a location for the folder on your local hard drive and click **Extract**.
- Add the pedestal to the scene. To do this, click **My Assets** on the **Asset Library** tab at the bottom of the screen

  ![The My Assets tab](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515073444_756887460182541_1703766811137744765_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=V2bxMxFsDVQQ7kNvwHzjLCN&_nc_oc=AdkHxoDLg-IzgnVH8sUz2oEdMPnDddpybfPWnQ9G8Ytvaiuxkk-S_5Et7yK8y-tNaK4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AflesEXkY36wIMEx8IGNPtl45Da_Pw4tHd-8QnUdrnq_1w&oe=69541217)
- From the **Add New** list, select **3D Model**.

  ![Adding a new 3D model](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366312_756887446849209_4679233969024346019_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZW5XVAz8rgEQ7kNvwFdK6ph&_nc_oc=AdkV4RE71q8jFzBInw91ivV9Gun-pVWFiQT8B4EBBan4x_jScvtASl02IQ3XJm5WFmU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AflT8OIdQl2p0obbsURO231n57hz-j8njF6McGy2UT0xXw&oe=6953FACD)
- In the **Import Models** dialog box, enable **Preserve offset pivots** if it isn’t selected already.

  Because of the way they move, certain assets use [offset pivot points](/hw-docs/Desktop%20editor/Assets/Use%20offset%20pivots.md), where the point around which they turn or pivot is offset from the center of the asset. This is so animation of the asset can look natural.

  Ignore the warning the dialog box shows: all the assets that this tutorial works with are [single mesh](https://developers.meta.com/horizon-worlds/ learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models) files.

  ![The Import Models dialog box](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515276565_756887456849208_4413823266568814632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=b81myc4MgsYQ7kNvwF28TWI&_nc_oc=AdlUSKzbJPtVLjJrssx54S0NT3JGYxnFEGRseLwrJRKSrI2IIEMW1AhWuzP4Byfk1uk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnXRrV9M6Ye_sot9-ABbCdrw0Yi1GCl-7VLGz_mHh8-hg&oe=6954174F)
- Click **Choose files on your device**, then navigate to the folder in which you extracted the demo assets.

  ![Choosing the extracted files.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/514366476_756887433515877_6413619545446559528_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=xwoBPdf7CQAQ7kNvwHovdZu&_nc_oc=Admso-Bl9Rc5NlgaHUjIpvD7nNSIdh-Wasw7NDzHLq7M0Nv91snEgrDYUlb0epYzmd0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmRoxVsBei4en1fAUwr6s40lm_bB-hveSi8ei2I-kN2UA&oe=69540528)
- From the folder on your hard drive, select the `SingleBlock.fbx` and `StoneBlockKit_BR.png` files, and then click **Open**.
  `SingleBlock.fbx`is the 3D model file (or `.fbx` file) and `StoneBlockKit_BR.png` is its associated texture file. These are the files that make up the pedestal asset.

  ![Select the asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515092034_756887443515876_6027285087868923840_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=ux5MpX-9dyIQ7kNvwF_dX-l&_nc_oc=AdlHl59UeaOG6h3DfFwyrgiuUPxt1Xa38Xyc21Pm42yq9rAuiElyBPEECA4XJVAjZGM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfkXsIdCHpVdc1nDFJl6Z7sxf7qpkPuwyStdVk5WrHgpgw&oe=6953FD9A)

  These are then displayed in the the **Import Models** dialog box.

  ![Asset files displayed in the Import Models dialog](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/515097062_756887440182543_8868542573376784040_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=wrM-WcdaW2gQ7kNvwEqrjLu&_nc_oc=Adkh3g685zwbOteEkgn5RWFoJZwgdWFlutpY9TYPHCjr88QnsMWAvgqPJ5HdV-p5H1A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afn1WjA5621ewmgMIwch87Dsv8wqSHOn4xNh63eEiHYJOw&oe=6954296F)
- Click **Import**.

  **Note**: If you decide to leave your world at this point, it’s important to wait for the asset files to be imported into the desktop editor before you leave.

  The SingleBlock asset will appear in your library when it’s been imported

  ![The SingleBlock asset](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/515875637_756887453515875_4696101948964392756_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=FKZ554SXswkQ7kNvwFCMx4x&_nc_oc=AdnE4I32o-jDw0qYjoCASRYxdt-ACDnLemeiWT6F46hvgbVu-xtDTKwtK-GHTLXB6Xc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmQziNTU_A4yACzD3nbxsAM0PbU_FF-I3LFwO0HxITivw&oe=695425BA)
- After the asset files have been imported, drag the SingleBlock asset into the scene.

  ![Inserting the asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/514954847_756887450182542_369195396390371839_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Aj-Cbu6xaBEQ7kNvwFPVyGV&_nc_oc=AdkQt3MluvQ7njSAq8OkBTQcenNdUuarZUigI8CLaNJ3PdDGgZtw0v8N4ZPt3f39BLY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AflSrkX7gA9H5xzRcZRP5w5ZZ6iQHRQcYRZPNkIutELO1A&oe=69540E81)

  The SingleBlock asset appears in the **Hierarchy** panel as an object named “SingleBlock”.
- In the Hierarchy, rename the “SingleBlock” object to “Pedestal”.
- Enable **Snap to surfaces** by clicking the **Snap to Surfaces** button. This allows you to easily position the base of the object along the ground.

  ![Click the Snap to surfaces button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464129353_573870105150945_5383089439026099930_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=HRnYKLK-YH8Q7kNvwGpEQpM&_nc_oc=Adk2LaG8KYJVkuxh3qPYlsNx2XOjSX2V-esudok_bKkxyyBf6tXP1MdALFmVjHF8rmM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afky6zeDRG3_2zz44aY-PT0EvW15sSBhVUktKdABY6QIsg&oe=6953FB27)
- With the Pedestal object selected in the Hierarchy, position it by dragging it by the orange dot. You can place the Pedestal anywhere on the ground.

  ![Click and drag the orange dot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475165196_641654818372473_4879658605534264112_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Xo0wDIS_szUQ7kNvwFTk7RO&_nc_oc=AdkkcaqxFN9EQ15E-LrwKzry58Z8SuHIAFfjD8hUILWq6D1x_9YTlsH9vslUX4XNY7Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfkMtmSRdRDGdxvJ8R2q6uuxk1bCb1LHrHIK-6EKTe5Naw&oe=6953FFAB)
- Add the rifle asset to the scene.

  a. Open the **Assets** panel by clicking the **Assets** tab.

  b. Click **Add New**, and then click **3D Model**.

  c. In the **Import Models** dialog box, disable **Preserve offset pivots** because the 3D model for the rifle uses [more than one material for the mesh in the FBX file](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Multiple%20Materials%20per%20Mesh.md).

  ![Don't preserve Offset Pivots](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464008566_573870171817605_7978731282074208552_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=_lRzS0jc_6sQ7kNvwGFb1PU&_nc_oc=AdlrVcjFSoH3ytHLjUBBEsOikxYeOIyC71kYMPaHAHVMuQzZ_uoVnMznOoNltd2-1-s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnZvKfIY-5Li06myRrjTrYWWActvRrpqmV45rBHiM4K0A&oe=69540EC6)

  d. Select the asset files to import by clicking **Choose files on your device**.

  e. In the file picker window that appears, select the 3D model file (ACWpnBattleRifle.fbx) and its associated texture files (WpnBattleRifleA\_BR.png, WpnBattleRifleA\_MEO.png, WpnIndictator\_BR.png, and WpnIndictator\_MEO.png), and then click **Open**.

  ![Select the five asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464310803_573870025150953_4833471769077242766_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=iJ9qQvQnGHEQ7kNvwFV9uRz&_nc_oc=AdnoRropH6sbq9Tt1qFkOEPRWf9_lg9naXneglAFxhdisuKK41-pYdU8POWe-4DY5xE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afk4eKczzvyZUVa2av0entbaCDWoFX2ACIs5ERQ75em3cQ&oe=6953F828)

  f. In the **Import Models** dialog box, click **Import**. Wait for the asset files to be imported into the desktop editor.

  ![This is what the rifle asset looks like after you import it](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464292127_573870045150951_3415127998518177098_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=LrDNCXuB6vYQ7kNvwEkGg84&_nc_oc=AdkiQX5y6OUBWuUFAdxBdE5SEvbHTm2tvKMehl9l7w_qcLmUq32Iywgv5uVeuxo0o1k&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmeK9fMt4XRSow9PHXUyen8G910hmEW-htmSMQXUD1qLA&oe=69541183)

  g. Drag the rifle asset into the scene, and place it upon the Pedestal.

  ![The rifle floats over the pedestal](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475232756_641654861705802_4132254507512158168_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=GVaOZurCQIgQ7kNvwFu__3n&_nc_oc=AdlBPiwTUganBYl7kVDVDU9LraEWrw5p1jcRAQSQJi6OMvvORCu9kKs2ukQCn-7HpSM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmqpSWBX09xtIpVAgjYaiak5dL8L2F5zbH4MSFyDKo0Cg&oe=6953FB97)

  **Note**: If you’re having difficulty positioning the rifle, remember that you can always use the orange surface snapping manipulator to move objects anywhere along the ground. You can activate it by pressing the “W” key. Optionally, using “Ctrl+G” lets you group the pedestal and rifle as one object, so you can move them together.
- In the Hierarchy, rename the “ACWpnBattleRifle” object to “Rifle”.

Your Hierarchy should now look like this.

![Notice that the rifle object contains two child objects](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475582112_641654881705800_8956813367946191943_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=oiMIR2RKtCUQ7kNvwEWLMGh&_nc_oc=AdmzTvTt3mWbHDeP3Yi-VyNBkjnPjBb_J5t5nkjdzW0fxZpZ6MWICQvZocUj_KE_5cY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmgTR1Dpc5OugDU1ZneWshyKbyBBE_eMdcEq9LtpQ524A&oe=69541EDF)

## Step 2: Make the rifle grabbable

In this section, you’ll learn how to make the rifle grabbable by the avatar.

- Select the Rifle object from the Hierarchy.
- In the Property panel, set the following two property values:

  **Motion** = “Interactive” and **Interaction** = “Grabbable”

  ![Click the drop-down selection list](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/463983859_573870008484288_2943956617777129080_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=AFUBN5lLbPAQ7kNvwGfNj94&_nc_oc=Adk2_urU7Ar3ysMmapZ__LkLZaHN2QP8_Q__OIDAQvjp9sxbfNjxwll9sEBbkt3io5U&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnlzaogFNNI-mqNtXBjqBijFiS27wjFHO7CbiymWx8z3w&oe=6953F9AD)

  **Note:** The **Interaction** property appears only after you set the **Motion** value to “Interactive”.

## Step 3: Try-out your new world

In this section, you’ll try-out your new world to see what it’s like to pick up the rifle.

- Click the Play button on the menu bar to enter preview mode.

  **Note**: Ensure you’ve configured world simulation to start automatically whenever you start the preview mode. Click the the ellipsis icon to open **Preview Configuration** and toggle on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview entry**.

  ![Ensure world simulation is configured to auto start](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481784596_667180549153233_231569701181011321_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=Eg4SD4CVNxgQ7kNvwFs-1lr&_nc_oc=AdksivvG6qreny6XNs8XohmwPiBnUCS4V2CLaWZvf6VQoctimh2MiRP9TyrXTHdbiKg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmolaCOO0DPwu33tzk9WKMdsZonqqTTzAHliqfKfmAjAQ&oe=6953F310)
- Maneuver the avatar over to the rifle using the arrow keys, and then pick it up by pressing the “E” key.
  ![Press E to pickup the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475655068_641654875039134_3343217904502966675_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=YvIrqebfFusQ7kNvwEsgA0l&_nc_oc=Adm21GxX9OjnfDO4ybE1H2bhHTko92R-z2evqa_EIX27L3VLrD5zcsLzDwCqdNWj5Yg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnozdU5EVx2zaNI_8j4Fsy098LeTLCX1BEJHbajR5gHfg&oe=6953FB77)
  The way the avatar holds the rifle looks somewhat awkward, but don’t worry, you’ll soon fix that.
  ![That's not how you hold a rifle!](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475514035_641654871705801_2878061070962689344_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=CZ5ynlj_o24Q7kNvwFCzdlX&_nc_oc=AdkTK6AJevdmhXS-zyLKXE3rl2xYkBAO0EqvmVSqDsFpPp4y-uVf3FyCY64UNm9fGSU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afmg9iinU6XEmv12zTBbw4AhAHm6QutwSCfMlYYnArQ3fw&oe=69542955)
- Exit preview mode by pressing Escape twice.
- Fix the way the avatar holds onto the rifle. With the Rifle object selected in the Hierarchy, in the Property panel, scroll down to the **More** section, and enable both **Use VR Grab Anchor** and **Use HWXS Grab Anchor**.
  ![These settings fixe the way the avatar hold onto the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/469860345_607478945123394_6899703159416175623_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=95rlm8p_wCoQ7kNvwHZh3gk&_nc_oc=AdlSvrFsviS8Iyffg40OQi0c541URzDhQvIfoJuyvQj3RURMG8vcTxIKtOeXe9WI_Qs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmUy9s-4fFyD5FDPwlGf91CTTXomIIA809p3jTgizPy1g&oe=6954252B)
- Set a pose to use when the avatar holds onto the rifle. With Rifle selected in the Hierarchy, scroll down through the property list until you see **Avatar Pose**. Click the drop-down menu beside it, and then select **Rifle**.
  ![Select the Rifle Pose](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464342330_573869941817628_7549640582068222270_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=kxBCJCsv1hgQ7kNvwEtyuYv&_nc_oc=Adn3_rxOAi-qzh1RxKQPOpmYa4DoPh7yJfU9yvSaOA77QnHxx8mkM0147Lj0o_Es9Ug&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnjkPDuJCIyFPzmB4uKj48xDMx36dxbbMqyxals-8JDrg&oe=6953F2AA)
  Now your avatar can hold onto the rifle properly.
  ![Now the avatar holds the rifle more naturally](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475859865_641654841705804_1105400890562108752_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=6EMjLV9OCdIQ7kNvwEr_Rwk&_nc_oc=Admd5P21x3xX3dYKp9n2JXufV0VEEivY6WQF-Zx5I0xRfht2xRDK8jKGYNAap8jdvWo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmoCgW5PJa5-8YATQyv8x62Qk5Bm6kpk_95P3DmnztFFg&oe=695426AC)
  But the rifle still doesn’t do anything yet.

  ## Step 4: Add a hello world script

  You now have a rifle that you can pick up and move around with, but it still doesn’t do anything. In this section, you’ll make something happen when you fire the rifle. You’ll write code that prints “Hello World” in the **Console** whenever you fire the rifle.
- Open the **Scripts Panel** by clicking the **Scripts** tab.
  ![Click the Scripts Panel drop-down](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/584743195_869065712298048_2337720434141423438_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=OfhgRJqIBNgQ7kNvwH3lHvO&_nc_oc=AdnKAL0ery3MfritKYA_uFRscyH6H4hXeeLcgn5bO-wu2LAPVDvqMw3vnbJvHvbx_bU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfkRLOsO-8qi_ptbMWn-78ClrtUtze61TUCVP6r0M77MOA&oe=69540FE3)
- Open the **Scripts in this world** dialog.
  ![Click the Scripts in this world dropdown](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/584673960_869065708964715_8324097282026536072_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=JvZ24EHnXd0Q7kNvwHE09-g&_nc_oc=AdnNrRBwv0IHLGCIr2eBZwmajk2peAH63ISL_W-lZkXHbXr7cR68QOqDTCkFzth2yqo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfkOoHT0tH8ayilyFH8tOKoK5-doTn9SJWVX94QHwcPxEw&oe=6953F443)
- Create a new script by clicking the plus button.
  ![Click the + button](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464284760_573870108484278_5626008342355283582_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=KEMPlBSOjoYQ7kNvwEHM4ux&_nc_oc=AdkTkyTc6xVu_hMtmenAqvfXzjOv1-XWSjlm5zTbb60jbfdz7ijqediun7j7EvjWa4A&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AflvaByJMySoTJEA02kcrSeYWbFnwevBnvyF_TiRywOVhA&oe=695421C8)
- Name your script “Shoot”.
  ![Enter Shoot and then press Enter](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464325206_573869988484290_3165699765154261570_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=oGCzlLfXihcQ7kNvwHgIB0O&_nc_oc=AdkBSQT53g4xRGc1yqR6k-iJpSC_UE8kI_GZStYThV0PME-61Z1xs1Pq78mLSdN7WpE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfkHiYxRq4obVGZ-AgSt55LBzbheB_QTpyz1IHpsRNB57g&oe=6954114B)**Note:** It takes a few seconds for the script to appear after you’ve inputted the name.
- Open the script in VS Code. Click the menu icon next to the script name, and then select **Open in External Editor**.
  **Note:** Currently, scripts can only be opened in the aforementioned way, from the top dropdown menu.
  ![Click the three vertical dots to see the menu](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464107203_573870138484275_3986572612224730853_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=JR7lsd_6bLcQ7kNvwGS7_RO&_nc_oc=Adl676XWNWOS1lj9TURdrUO6kuETwjXfc2YmgzCD0y-fgunNGeuPnzUnW5G5ISjDymU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnUJldcUFhcaXj9PStBq6phhi-plr9_IQkBiASbZ4An3w&oe=69540E98)![Oen the script in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464190660_573870198484269_3483053417967741197_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=eq9WpFIWZsAQ7kNvwE9Bx8g&_nc_oc=AdnQCZaV1iQMphQ7s8XzUORkyqZ9IvVPhqjkHRnP2zJKxxUgGn8FXNmjdquueeAophk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AflMy98iygmVC1GCEIzmuCmdDuDvf1XaY5gqLuLr0KtVbA&oe=6954126F)
  The new script opens in VS Code in a file called `Shoot.ts`. It contains boilerplate code.
  ![This is the default structure of a TypeScript script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464177291_573870041817618_3500120114101619688_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=oKXh-dpLzVUQ7kNvwF4YpAu&_nc_oc=Adm6xihLnWQXFWFhA7FRzYMXIM-vktKCmU1Kqgew81DYuu37RbdsinwflhCXRiq_na8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afnzv9DkhJ7SPesXich0lOpmc0TwnVa4NCPGoPbDLdTebQ&oe=6954012F)**Note:** The `start()` function is called whenever the entity that the script component is attached to is created. At this point though, you haven’t attached this script component to an entity.
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
  ![Click the drop-down selection list to see your script](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464091170_573869985150957_1926137328255172174_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=SRtgabLfKcoQ7kNvwFHkqIn&_nc_oc=Admwk4WWiliw-pfYSA50d-95wI-EUabrHTClUKH8JNhLRh_Kgx2qJ2_As-teJRQGUQE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnObwwybisg8_pa4_2JIB1HgxanF-eQF8txECDpfqBeyg&oe=69540A4A)
  c. Attach the script component by selecting “Shoot:Shoot” from the **Attached Script** drop-down selection list.
  ![Click on Shoot:Shoot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464106799_573870071817615_3222010519411086870_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=5VRCNIolugAQ7kNvwGZHHSH&_nc_oc=AdlPmrB3NCtyWfrryZkhhUBJuYnsbGK3CSACQ_bS_KPxoFWWmzdjKcI-Xrq8TM76n80&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfkY0LoxHPApCIT-pw1amfLgk3uhMuOmV4DXIQ5HT2jn4w&oe=695410AF)
- Preview your world by clicking the Play button on the menu bar.
  As soon as the Rifle entity is created, the script prints “Hello, World!” to the **Console**.
- End the preview by pressing Escape twice.
- You can see the debug message by clicking the **Console** tab at the bottom of the page.
  ![Hello World! appears down at the bottom of the Message list](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464178601_573870128484276_4374457029334205218_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=eGaxU2R8tNYQ7kNvwF7QNqA&_nc_oc=AdmmUsPgynk5TcAndf31rgr9nMldNcC16xtadD_WT0XArUO2OGfva34c882HIGgoKe0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfkTEizrjapdTlxLL3_xS2jkPUsNn3uILA5UorGcCAH7xg&oe=695400F0)
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
  ![You can clear the error messages](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464347386_573869901817632_7646464504087582755_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=YobNAAb_4c4Q7kNvwED_ntw&_nc_oc=AdlQRXK2bxiYznrFB7u0znQie1adcQ-ILiF81I6ckvu_jxN7O2tlFATuON3FzJli3FA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfkIyhzrRuVbNr5Pze3PcKN7Xc2WhlT9Yx4xK6kNg5olPQ&oe=69541C7D)**Note:** Normally, you shouldn’t see any error messages in the **Console** window. If you do though, then try copying and pasting the code instead of typing it yourself.
- Preview your world by clicking the Play button.
- Walk over to the rifle and grab it.
- Fire the rifle several times by clicking the **A** button on the screen. As you fire the rifle, notice that a “boom!” message appears in the **Console** window along with the number of times that the message appeared.
  ![Look at all the booms!](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464389048_573870095150946_7738181260387489635_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=iyiSiSjVgagQ7kNvwEp-O-1&_nc_oc=AdlU7Y5wDnE21pmRsOR2ifVV1U84a5LpN5_TRJmp6q6lsubfXp1GunPGdizIrHv6ZTg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmFcE0hbCEAd13QMIHgs0dwzGR0Ztjan0eAqP4JKChhFw&oe=695412A9)
- End the simulation by pressing Escape.

  ## Step 6: Add a projectile launcher to the rifle

  You now have a rifle that you can pick up and carry around, but it doesn’t actually do anything except print debug messages. In this section, you’ll make the rifle launch projectiles.
- Select the Rifle from the Hierarchy.
- Focus on the Rifle in the scene by pressing the “F” key.
- Click the **Build** button.
  ![Click the drop-down button](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/587517516_869065705631382_2688631765762109807_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=5Q606w9955QQ7kNvwF-doa6&_nc_oc=Adnw_VVhP9VCHf8v9PKmBcGj3HXZ2VnH2_YKcKnPRK5_x1_tNSHzlfJuQvw8VkU3XKw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmGAOSoq6AoEtO3fOXcXDnC0uKZS0VRgv9PZdktCxzN2Q&oe=6954232A)
- Select **Projectile Launcher** from Interactions.
  ![The icon for the projectile launcher gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/584318256_869065718964714_7972938540362052917_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=d_2MJCDibOQQ7kNvwEmoR-s&_nc_oc=AdnJ28cdKCUrT87LxTsfa6P-SEgPE981W4ZQtWPzdx0bMGuqEG72INsCsNRSIPuTRYQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnZ4lbiyQt8sLel3vDqPNc-VqJcqIK5rPb2IgGOi0GbvQ&oe=6953FB28)
  The **Projectile Launcher** gizmo appears in the scene, and in the Hierarchy. Pressing the “F” key while the object is selected brings the object to focus.
- Close the **Build** panel.
- Attach the ProjectileLauncher to the Rifle by making it a child of the Rifle. In the Hierarchy, drag the projectile launcher, and drop it onto the Rifle.
  ![Drag and drop](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464060217_573869908484298_3061206173699646062_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=StWG8-2GYykQ7kNvwFe6ouC&_nc_oc=AdmBzNByT0P1kRFIUx5xN3U6KzgyVfhom6fGNzb3NMKUhzdEPpv3BDs67hmVQLaxNbY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afmhr66E_uIQVbpsTPp29yqGRtBCptn1EGz6zNgVpbAK1g&oe=6953FBB6)
  The ProjectileLauncher should appear indented in the hierarchy since it’s now a child object of the Rifle object. You can expand the hierarchy by clicking the triangle.
  ![It's now one of the Rigle's children](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464190942_573870178484271_3293882596374239688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=9C2P0k65vZMQ7kNvwEo0sVs&_nc_oc=AdkzeGSNo5Z59B_bdmoBXkhag6_Qj0pBMucHS3ZTF0PXxAxg63W_Vv5qxr8AIm-4nac&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnT9Rd54gI_Uc2a-a5n8idJhTB-BXD1KOJDUfa_4M5xqA&oe=6953F892)
  With the ProjectileLauncher selected in the Hierarchy, position it relative to the Rifle.
- Adjust the Position values of the projectile so it aligns with the aim of the rifle.
  ![Align the projectile with the rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475194437_641654878372467_7693479725163060948_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=wrgIPR0L73AQ7kNvwHXMBqb&_nc_oc=AdmicOdty4OXFeV1cUMgwstv6wHoWAISw98QDH4PjD03Yiy_uCxcLFGgaswXHaeVKbk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Aflk47gJT42PQYh-PmaWKHbmW0YgpBEd2gJKG3y03aggVQ&oe=69541E3C)
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

  ![There is a launcher property in the property panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464076144_573870208484268_3571774494949796316_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=54zMnJ1XRjMQ7kNvwE9bm4D&_nc_oc=AdkY9cDgeUa951EUtzj6K-cgtsQ2kx_9wI5jn3wZmnMHh-epTWqQq7dNhOdPXTOclqw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Aflg2dZLYr54mMr58T1pP5aqHqa8l49Rvm0FTJA2fLBDLw&oe=69541D85)

  **Note:** You might have to deselect and then reselect the Rifle object if this new property doesn’t appear.
- Set this **launcher** property to the **ProjectileLauncher** object. Click on the field beside **launcher**, and then select **ProjectileLauncher** from the list that appears.

  ![Select ProjectileLauncher](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464035648_573870011817621_4324077274258554259_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=nv52gI2Ry4MQ7kNvwFl1bLa&_nc_oc=AdmMzu2MOf4kM0jb1wiPhEoRAqL-k1IFUlAXruCAarfofNlMvItn-xGVFBbhKgCFHkM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afk8M1PTBvD77uhO79BYIHaUQV7gkJBjzqSNMpWCwnPK1Q&oe=6954090E)
- Preview your world by clicking the Play button.
- Walk over to the rifle, grab it, and then click the mouse button. Notice what happens, a shot appears to come out of the rifle when you pull the trigger. Next, you’ll update your script to accumulate points whenever the player hits the target.

  ![A shot appears to come out of the rifle](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475273504_641654838372471_3353505584347988670_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=p4aKfTYHhDgQ7kNvwEFfHvb&_nc_oc=AdnKQE7hoeCJghKbxJ2rYyG9Xcos5PeBijrJjieP039hX6hOjkVZu7Q_zFm22bZkq9M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afk3W5WfICe6m2NZyBBQU8HP-b2zc0fXelMwgNQyiETNjw&oe=6954033D)
- Exit Preview mode by pressing Escape.

### Section 8: Count points whenever you hit the target

In this section, you’ll update the script so that you score a point each time you hit the target.

- In the desktop editor, select the SpawnPoint in the Hierarchy.
- Click **Asset Library** > **Public Assets** under the Scene pane.
- In the Search field, enter “skeletoncrayta” to find the skeleton.

  ![Pirate skeleton](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464152935_573869948484294_7911900688495928080_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=-LkIPJ4hAJ8Q7kNvwEz_44F&_nc_oc=AdkdONtujoNMXy-FTuFYeqbaRw7Xxzk0oglm_P_GKDhi0TV0QNZr2s0wNXMMn67H8b8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnU0OrKYaip9jQcdFa89zcyEyyy-AUXqL12-RyA_kThvw&oe=6953F3C2)

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

    ![Every time to hit the target, the score increments](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475121433_641654885039133_2447663056588542102_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=8DbLanumDTsQ7kNvwHD9q6z&_nc_oc=AdkCLWz2y2wjPWzF2gqiqGr0EI7d6kVXOHHu4EKhD9NJVdygR9vxuIdVBkcH7kVIp10&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnFE0oLqaeM-LGdinj5fR7bJuJE0cSUQLD55ZL-OPEMgQ&oe=69541FAB)

    Every time you hit the skeleton, a message prints to the **Console** that tells you how many points you’ve scored. If a shot doesn’t hit the skeleton, then the console message simply doesn’t appear.

### Section 9: Display the score

In this section, you’ll revise your script so that the score appears in the game.

- Add a **Text** gizmo to your scene.

  - Click the **Build** panel.

    ![Build an entity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/587517516_869065705631382_2688631765762109807_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=5Q606w9955QQ7kNvwF-doa6&_nc_oc=Adnw_VVhP9VCHf8v9PKmBcGj3HXZ2VnH2_YKcKnPRK5_x1_tNSHzlfJuQvw8VkU3XKw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmGAOSoq6AoEtO3fOXcXDnC0uKZS0VRgv9PZdktCxzN2Q&oe=6954232A)
  - Select **Text**.

    ![Select the Text icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/584304762_869065562298063_4509520630112735143_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=sgcAYst8sVgQ7kNvwFUaGZc&_nc_oc=AdnifxeuBsEVIlShBhyaPnAxyCGxk8fwhxxWDuq-jNmQX5Lh5GANtkcO1H8i0GtzKz8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afn9L45Z14BAeIgo9YGDAm2u2-34GQC5YtzUSDlSgMZT6w&oe=6953F2E1)

    A **Text** gizmo is added to the scene.
  - Position the **Text** gizmo within the scene so that you can read the score while you’re shooting at the target.

    ![Position the Text gizmo so you can read the score](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475549601_641654858372469_2650846579364077855_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ADsaQX4KSIUQ7kNvwGPvzVR&_nc_oc=AdkTHBXqPbQ72IJTmT0ez6_0RJHFjxKlEAOkZ7D4iZJaE5hRIzvhd5kThD0RXIQb2Gc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfkvxbxlgwWFV_OMx43w20oW4d_3HSoy6o1Cp6P9KXu1GQ&oe=6953F734)

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

  ![The scoreView property appears in the property panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464222401_573870035150952_285145257509364434_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=T8WFtXOfkKMQ7kNvwGWbP1k&_nc_oc=Admovwc2DvD-FpHPzMe4BrfYZzNm2oZxTlAu5W5gNypxExYPZUqFuqhDTW6NuKmPYqI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afnp9DxPhWMxtYAfbnkApir99pQILvheCzgs-vbOazo6Xg&oe=6953F435)

  **Note:** You might have to deselect the Rifle, and then reselect it if this new property doesn’t appear.
- Set the value of `scoreView` to the Text gizmo that you added to the scene. Click the drop-down selector beside the label **scoreView**, and select “Text”.

  ![Set the value to the Text gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/464088168_573870068484282_6798580279511898058_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=YNXGyOhsUK4Q7kNvwFuASgC&_nc_oc=Adk_edec7hTDCTtNdz0L3ZssnpFJaMUlR9CrgYlvS0uGh4ETkaKKVNz7tXJgjywz-GQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnzQ0szC1WmvRsoeM55xQtXUDP4Y6LFjAlXBIeDt7K17A&oe=6954160B)
- Test your world.

  - In the desktop editor, select the **Console** tab at the bottom of the screen.
  - Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.
  - Walk over to the rifle and grab it, and use it to take several shots at the skeleton.

    ![Rack up some points by shooting the target](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475293293_641654835039138_2953793375639169747_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=pITtdkHIEVMQ7kNvwFyc-eE&_nc_oc=Adl2BRmUmdfF75-FrdpYXiVhAV2KmMaEhyh6n7ggDhqQsELtv3z3WNJOzRA7PDLkhJU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfnQE1oIWQ7kqudMWuToIdtbCEzgP5gzlZyuWk7H2JvjjA&oe=6953F806)

    You should see your score floating in space, and it should increment each time you shoot the skeleton.

### Section 10: Create a second rifle

In this section, you’ll convert your Rifle/ProjectileLauncher combination into a Template Asset, and then you’ll use that asset to create another rifle.

- From the Hierarchy, select the Rifle. This object has the script attached to it, and it’s also the parent of the ProjectileLauncher.
- Right-click the Rifle object in the Hierarchy, and from the menu that appears, select **Create Asset**.

  ![Turn the Rifle object into an asset](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/464006274_573869955150960_8083174888610967206_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=lmiqqQjposIQ7kNvwHVt9Xq&_nc_oc=Adm_JpA2DQIVqc3F0VrdGrB0M7bPwaXPAeozYQdPAlna-QzaHtd69FE6jH10Ujt8uho&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afkk37Xg-L61fNHvqpAuG6Syn2eNZHaVzJaAdhq7mGEI6g&oe=6953FF35)

  The **Create New Asset** dialog appears.
- Type a name for the asset, and type a description of the asset, and then click **Create**.

  ![Fill in the asset name and the description](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473721798_631480272723261_8456815458843473069_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=8325UgOcLJEQ7kNvwHv1oSI&_nc_oc=AdmnuMzrcj4CvIHmB8yk8VQjht5FbGxqPW3yW6mlWOwRD0RpMOX7-u6BBEYzy--GzY4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfmpU3QaAxjRmpZXQb87DMG5GfJxWs5_M_uFAB8ip-Zbww&oe=69541225)
- Open the **Assets** tab, and then select the **My Assets** folder. You’ll see your second rifle asset there.

  ![Your new asset appears in your My Assets folder in your Private Assets Library](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464099449_573869905150965_6806556283750141783_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=dc6uSjHUfOkQ7kNvwFq93dd&_nc_oc=AdndNcstLxSugUIm6WJBoF8BZIczJBYiu4mwkQ4Bg3O3ANgRCy7xlvjGujt6dLLy61Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_Afnh1Eq_m5NQI9s4-Y8njvKCQDinJcI-arVf_9UrBLn5Fg&oe=69540C1A)
- Click and drag the new AutoRifle asset, and drop it anywhere in the scene.

  ![Place the new Rifle anywhere in the scene](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475226479_641654815039140_955495808021670869_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=zmdAZGiPBkoQ7kNvwEmKEF2&_nc_oc=AdmPa9mywla2j2kJvDCLgVAOReH3Rzp8x_GkSh5rt8ta6pt7q8AsmUDSTW8_c_horeE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AJke5iV8gQRyEZQwSXVvLw&oh=00_AfkHp3NO_u5TQqliMRy0nv7gD8ZnhEm6eHn5If1us0R1fg&oe=69540AC0)
- Test your world. Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the second rifle.

  Notice that you can use either rifle to shoot the skeleton and generate a score. Each rifle has its own score, which means the text box swaps between the scores as you swap rifles.

You’re done! You’ve completed building a game in Meta Horizon Worlds! In the next section (which is optional), you’ll try running your game in 3D on a Meta Quest headset.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

* Try the [Batting cage tutorial](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/batting-cage-tutorial) now that you’ve created your first world.
* Learn about the desktop editor with the [Introduction to the desktop editor](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
* Learn about the other tools available by reading our [Tools overview](/hw-docs/Get%20started/Tools%20overview.md).
* Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.