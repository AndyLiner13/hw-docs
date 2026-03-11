---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started/create-your-first-world-continued
---

# [Create your first world tutorial, part 2](#create-your-first-world-tutorial-part-2)

**Welcome to Part 2 of the Creating Your First World Tutorial**

In this tutorial, you’ll continue to learn how to create a simple game in Horizon Worlds, where you shoot marauding skeletons in a graveyard. Where [Create your first world tutorial, part 1](Create%20your%20first%20world%20tutorial%2C%20part%201.md) showed you how to create a new world and build the basics of the game, part 2 will take you a bit farther. Part 2 shows you how to import custom models, which are complex 3D models that are not available in the public asset library. You won’t be creating them here—you’ll use demo assets so you can see how they’re imported. Once you’ve done that, the tutorial shows you how to write a basic script and attach it to the entity to create behavior. The tutorial ends with testing the simple game in virtual reality.

Creating customs models is outside the scope of this tutorial, but if you want to find out more about them, see [Creating a custom model](../../Custom%20models%20\(FBX\)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

If you’re looking for the first half of the tutorial, go to the [Introductory Tutorial part 1](Create%20your%20first%20world%20tutorial%2C%20part%201.md).

The key things you should learn from this module are the following:

- Importing custom models into your world
- Adding entities to your game
- Scripting entity behavior
- Trying your world in virtual reality

**Note**: This tutorial assumes that you’ve completed the prerequisites discussed in [Create your first world tutorial introduction](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-a-new-world-intro).

This part of the tutorial requires that you first complete [part 1](Create%20your%20first%20world%20tutorial%2C%20part%201.md), as this is a continutation of that process.

## [Step 1: Add a pedestal and a rifle](#step-1-add-a-pedestal-and-a-rifle)

In part 1 of this tutorial, you created the graveyard. But if you’re going to hunt marauding skeletons, you’ll want to add a rifle and a pedestal to make it easier (otherwise you’d have to use your hands and that gets messy…)

1. Download the [Demo Assets](../../_assets/misc/57c2704c3a8466018227d9aa647b44f7f8c205c5e4eadbd16c3112a0374cbfbf.zip) .

   This file is a zip archive that contains a number of pre-made assets that you’ll add to your game (like the rifle).

2. Extract the contents of the zip archive. folder.

   a. Open the downloaded zip file.

   b. Click **Extract all**.

   c. Browse to a location for the folder on your local hard drive and click **Extract**.

3. Add the pedestal to the scene. To do this, click **My Assets** on the **Asset Library** tab at the bottom of the screen

   ![The My Assets tab](../../_assets/images/0b0658748865fb21384143a8c65922fd76f0027b9f21f351c060502bafdab7bf.png)

4. From the **Add New** list, select **3D Model**.

   ![Adding a new 3D model](../../_assets/images/b1a8b123ddfdef882053acce89e67b2618553d5b96f8b1449cfbc053ff9a836a.png)

5. In the **Import Models** dialog box, enable **Preserve offset pivots** if it isn’t selected already.

   Because of the way they move, certain assets use [offset pivot points](../../Desktop%20editor/Assets/Use%20offset%20pivots.md), where the point around which they turn or pivot is offset from the center of the asset. This is so animation of the asset can look natural.

   Ignore the warning the dialog box shows: all the assets that this tutorial works with are [single mesh](https://developers.meta.com/horizon-worlds/%20learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models) files.

   ![The Import Models dialog box](../../_assets/images/9d8985fa30ef5e432c2ccb2e311f1bb0cec5adedf5838c9eaf485838ff2d86c8.png)

6. Click **Choose files on your device**, then navigate to the folder in which you extracted the demo assets.

   ![Choosing the extracted files.](../../_assets/images/d0a074819d8772ac4e85a4e2399c3c2ab91b129bfff5ed4adfe4ce0ef6d7e341.png)

7. From the folder on your hard drive, select the `SingleBlock.fbx` and `StoneBlockKit_BR.png` files, and then click **Open**. `SingleBlock.fbx`is the 3D model file (or `.fbx` file) and `StoneBlockKit_BR.png` is its associated texture file. These are the files that make up the pedestal asset.

   ![Select the asset files](../../_assets/images/62a0ec3de3ba1453c05603d0d970c7f2701d9afe9b192987cdb5a14642b01030.png)

   These are then displayed in the the **Import Models** dialog box.

   ![Asset files displayed in the Import Models dialog](../../_assets/images/028cb17725d0cb9f716090c8b7b2ee54a68e8222a71f6b97e15f5da6a63f8e0f.png)

8. Click **Import**.

   **Note**: If you decide to leave your world at this point, it’s important to wait for the asset files to be imported into the desktop editor before you leave.

   The SingleBlock asset will appear in your library when it’s been imported

   ![The SingleBlock asset](../../_assets/images/e2765dd00859e6f50132f86000554ec318c97696cc7ce3adb1f06de6756e26d9.png)

9. After the asset files have been imported, drag the SingleBlock asset into the scene.

   ![Inserting the asset](../../_assets/images/91c6184aaef4888b28a6b49ff6a5c53becca862ec4ed37f6aa54f0a92325d427.png)

   The SingleBlock asset appears in the **Hierarchy** panel as an object named “SingleBlock”.

10. In the Hierarchy, rename the “SingleBlock” object to “Pedestal”.

11. Enable **Snap to surfaces** by clicking the **Snap to Surfaces** button. This allows you to easily position the base of the object along the ground.

    ![Click the Snap to surfaces button](../../_assets/images/76c9530f884c28871c1014d262dc2c7921eef4f7255fb76ee33ca82dd79308ad.png)

12. With the Pedestal object selected in the Hierarchy, position it by dragging it by the orange dot. You can place the Pedestal anywhere on the ground.

    ![Click and drag the orange dot](../../_assets/images/57a2a5833074a0ed14ea22bf8a6d8c6e3cd693e8400448cae963de211116d3d3.png)

13. Add the rifle asset to the scene.

    a. Open the **Assets** panel by clicking the **Assets** tab.

    b. Click **Add New**, and then click **3D Model**.

    c. In the **Import Models** dialog box, disable **Preserve offset pivots** because the 3D model for the rifle uses [more than one material for the mesh in the FBX file](../../Custom%20models%20\(FBX\)/Creating%20custom%20models%20for%20Horizon%20Worlds/Multiple%20Materials%20per%20Mesh.md).

    ![Don't preserve Offset Pivots](../../_assets/images/6b2f0ca1effce693a14302eb45f2a1ccb4055595ff909c740a178d04c789c8b5.png)

    d. Select the asset files to import by clicking **Choose files on your device**.

    e. In the file picker window that appears, select the 3D model file (ACWpnBattleRifle.fbx) and its associated texture files (WpnBattleRifleA\_BR.png, WpnBattleRifleA\_MEO.png, WpnIndictator\_BR.png, and WpnIndictator\_MEO.png), and then click **Open**.

    ![Select the five asset files](../../_assets/images/10a7f262a4abc0685fe4746a30b99a1f728f7f993de30f8289a2b884f0792213.png)

    f. In the **Import Models** dialog box, click **Import**. Wait for the asset files to be imported into the desktop editor.

    ![This is what the rifle asset looks like after you import it](../../_assets/images/acb25e44ed6c95261721d117ce2d6611976bb88be6a414efbfd2a3c3f14e6f9e.png)

    g. Drag the rifle asset into the scene, and place it upon the Pedestal.

    ![The rifle floats over the pedestal](../../_assets/images/5d65dec614664ce20c542361ff54a615232a7b6a3c61db7797c63d4b5d97e2e3.png)

    **Note**: If you’re having difficulty positioning the rifle, remember that you can always use the orange surface snapping manipulator to move objects anywhere along the ground. You can activate it by pressing the “W” key. Optionally, using “Ctrl+G” lets you group the pedestal and rifle as one object, so you can move them together.

14. In the Hierarchy, rename the “ACWpnBattleRifle” object to “Rifle”.

Your Hierarchy should now look like this.

![Notice that the rifle object contains two child objects](../../_assets/images/18c382e4789288f75b23ee2a26fdccdb8bdab3f6e702879ce2a45f80f3f32605.png)

## [Step 2: Make the rifle grabbable](#step-2-make-the-rifle-grabbable)

In this section, you’ll learn how to make the rifle grabbable by the avatar.

1. Select the Rifle object from the Hierarchy.

2. In the Property panel, set the following two property values:

   **Motion** = “Interactive” and **Interaction** = “Grabbable”

   ![Click the drop-down selection list](../../_assets/images/6f2acf823cd4237a52f97b71b76930a5d266f0fc4cb85d7076e752e3daa45dc0.png)

   **Note:** The **Interaction** property appears only after you set the **Motion** value to “Interactive”.

## [Step 3: Try-out your new world](#step-3-try-out-your-new-world)

In this section, you’ll try-out your new world to see what it’s like to pick up the rifle.

1. Click the Play button on the menu bar to enter preview mode.

   **Note**: Ensure you’ve configured world simulation to start automatically whenever you start the preview mode. Click the the ellipsis icon to open **Preview Configuration** and toggle on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview entry**.

   ![Ensure world simulation is configured to auto start](../../_assets/images/5a7cfe26630ec432a95eae3189efc3266155db73acfac97db208e7361a2036a1.png)

2. Maneuver the avatar over to the rifle using the arrow keys, and then pick it up by pressing the “E” key. ![Press E to pickup the rifle](../../_assets/images/6b87043ab9adedb07adfa5eb224d5370c69201145cf70ca280ec2f6cf4aaa299.png) The way the avatar holds the rifle looks somewhat awkward, but don’t worry, you’ll soon fix that. ![That's not how you hold a rifle!](../../_assets/images/b28a547e2b085cf9bc594e1fbd83cc984ac7f5f25ae2c48dac8e2342df883d35.png)

3. Exit preview mode by pressing Escape twice.

4. Fix the way the avatar holds onto the rifle. With the Rifle object selected in the Hierarchy, in the Property panel, scroll down to the **More** section, and enable both **Use VR Grab Anchor** and **Use HWXS Grab Anchor**. ![These settings fixe the way the avatar hold onto the rifle](../../_assets/images/6bee5520eecb52b727467dfa1a61232390b788ecd9d3f177c43f537fef1234aa.png)

5. Set a pose to use when the avatar holds onto the rifle. With Rifle selected in the Hierarchy, scroll down through the property list until you see **Avatar Pose**. Click the drop-down menu beside it, and then select **Rifle**. ![Select the Rifle Pose](../../_assets/images/0df8bd64de112704285dd020892cbb6423fbdbd636d0c44e4e08aff684fa4fb5.png) Now your avatar can hold onto the rifle properly. ![Now the avatar holds the rifle more naturally](../../_assets/images/ddd728135258042370fc0f8403f726d067e6cfa3093bb497ad9695624ce1ae63.png) But the rifle still doesn’t do anything yet.

   ## [Step 4: Add a hello world script](#step-4-add-a-hello-world-script)

   You now have a rifle that you can pick up and move around with, but it still doesn’t do anything. In this section, you’ll make something happen when you fire the rifle. You’ll write code that prints “Hello World” in the **Console** whenever you fire the rifle.

6. Open the **Scripts Panel** by clicking the **Scripts** tab. ![Click the Scripts Panel drop-down](../../_assets/images/8f3bfbc22b1fb94db76fdf61d9471918bf8b6b0863e77e92600c51e9c8e15e87.png)

7. Open the **Scripts in this world** dialog. ![Click the Scripts in this world dropdown](../../_assets/images/4b0a6d6eb5b19ab8ed7b3242aed6c65ef116d2f3f3f8d3e5c44183a9262e9e75.png)

8. Create a new script by clicking the plus button. ![Click the + button](../../_assets/images/9d51d595ba982f40851e16c007edb413684ab120a7504d82f022d96548828415.png)

9. Name your script “Shoot”. ![Enter Shoot and then press Enter](../../_assets/images/6b221b9b79b8353257fc513d2473edbed5e14dfd0b4601f7b5273acd723f2f31.png)**Note:** It takes a few seconds for the script to appear after you’ve inputted the name.

10. Open the script in VS Code. Click the menu icon next to the script name, and then select **Open in External Editor**. **Note:** Currently, scripts can only be opened in the aforementioned way, from the top dropdown menu. ![Click the three vertical dots to see the menu](../../_assets/images/562ef683b582cad1fe26fad94ecee13ff3d26cfb96a8bbe987ad7fc0cfade112.png)![Oen the script in VS Code](../../_assets/images/e9c7f7ca838444a41fcb49cdd1b757048b8461f5d02254b9f15ddf4ccd0e829a.png) The new script opens in VS Code in a file called `Shoot.ts`. It contains boilerplate code. ![This is the default structure of a TypeScript script](../../_assets/images/a3db56c7349491fbf2a59be442b54a8541901429f5f2e62bc7f556a05f85267e.png)**Note:** The `start()` function is called whenever the entity that the script component is attached to is created. At this point though, you haven’t attached this script component to an entity.

11. Add the following debug statement to the `start()` function. When the entity that this script component is attached to is created, this statement prints “Hello World!” to the **Console**.
    ```typescript
    start() {

        console.log("Hello, World!");

    }
    ```

12. Save the script file. You can press “Ctrl+S”.

13. In the desktop editor, attach your script component to the rifle entity. a. Select the Rifle object from the Hierarchy. b. In the Properties pane, scroll down to the **Scripts** section. ![Click the drop-down selection list to see your script](../../_assets/images/82631b553248cebe524dedd5830f83480f821dfc4cdde2f86cb30b6865ace5f9.png) c. Attach the script component by selecting “Shoot:Shoot” from the **Attached Script** drop-down selection list. ![Click on Shoot:Shoot](../../_assets/images/d1bf4cf64dd1cdfe2eb878e8e575ebfc53c826f375f129d18c933e9439922788.png)

14. Preview your world by clicking the Play button on the menu bar. As soon as the Rifle entity is created, the script prints “Hello, World!” to the **Console**.

15. End the preview by pressing Escape twice.

16. You can see the debug message by clicking the **Console** tab at the bottom of the page. ![Hello World! appears down at the bottom of the Message list](../../_assets/images/e0cd375b974154c7c5d4e9ccbc25e2f3448694a1ef141b1214a822a0bae403e4.png) You’ve made your world interactive. The script outputs the message “Hello, World!” to the **Console**.

    ## [Step 5: Refine your script](#step-5-refine-your-script)

    But you really want the interaction to occur when you pull the trigger, not simply when the rifle is created. In this section, you’ll revise your script to print a message when you pull the trigger. When the rifle is created, an event is also created that fires each time you pull the trigger.

17. Replace the code in the `start()` function with the following code:
    ```typescript
    start() {

        // React to an event when the user pulls the trigger.

        this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, (player: hz.Player) => {

            console.log("boom!");

        });

    }
    ```

18. Save your script. When editing your script, errors might appear in the **Console**. When this happens, you can clear the error messages from the **Console** by clicking **Clear**. ![You can clear the error messages](../../_assets/images/f11de500ba2ab0d91a6e86285b76d86501b8d1efa5937e3a4c052d53b82d4c97.png)**Note:** Normally, you shouldn’t see any error messages in the **Console** window. If you do though, then try copying and pasting the code instead of typing it yourself.

19. Preview your world by clicking the Play button.

20. Walk over to the rifle and grab it.

21. Fire the rifle several times by clicking the **A** button on the screen. As you fire the rifle, notice that a “boom!” message appears in the **Console** window along with the number of times that the message appeared. ![Look at all the booms!](../../_assets/images/95f0516bf54cfeb26ea7d0381edb0581d6b8c75fbe0235e84ba3631dc07976d0.png)

22. End the simulation by pressing Escape.

    ## [Step 6: Add a projectile launcher to the rifle](#step-6-add-a-projectile-launcher-to-the-rifle)

    You now have a rifle that you can pick up and carry around, but it doesn’t actually do anything except print debug messages. In this section, you’ll make the rifle launch projectiles.

23. Select the Rifle from the Hierarchy.

24. Focus on the Rifle in the scene by pressing the “F” key.

25. Click the **Build** button. ![Click the drop-down button](../../_assets/images/df5cd6a5d93f7ca6d8fa4216ab1cf22b29f08c8f0a797be38419727e4672c16d.png)

26. Select **Projectile Launcher** from Interactions. ![The icon for the projectile launcher gizmo](../../_assets/images/74d7cdf37af02c127c89a159d47c1ca2a7ac27870d1233feef7bf1ac5298be01.png) The **Projectile Launcher** gizmo appears in the scene, and in the Hierarchy. Pressing the “F” key while the object is selected brings the object to focus.

27. Close the **Build** panel.

28. Attach the ProjectileLauncher to the Rifle by making it a child of the Rifle. In the Hierarchy, drag the projectile launcher, and drop it onto the Rifle. ![Drag and drop](../../_assets/images/13580237b1d8e5711ba4f37104e380d7a5a0b5c7018d781aa54c8a9fc5d1cbfe.png) The ProjectileLauncher should appear indented in the hierarchy since it’s now a child object of the Rifle object. You can expand the hierarchy by clicking the triangle. ![It's now one of the Rigle's children](../../_assets/images/20447f2bcc3b032dc5d6c2a4993566312e900a93110deee0525ea080bf1c0ba8.png) With the ProjectileLauncher selected in the Hierarchy, position it relative to the Rifle.

29. Adjust the Position values of the projectile so it aligns with the aim of the rifle. ![Align the projectile with the rifle](../../_assets/images/48eef22a3a3a701203f5b405b70596523a902c48fbe9577c5a8e07622f851b6e.png) These adjustments in settings ensure that the projectile launcher appears at the front of the rifle, and that projectiles fire in the forward direction. Additionally, to make the projectiles easier to see, adjust **Scale** and **Trail Length Scale** based on your preference. Everything is now hooked up. Next, you’ll edit the code to make the rifle interactive.
    ### [Section 7: Hook up the projectile launcher](#section-7-hook-up-the-projectile-launcher)

Earlier in this tutorial, you got a debug message to appear when you pulled the trigger on the rifle. In this section, you’ll update your script to use the projectile launcher whenever you pull the trigger.

1. To use the projectile launcher, you need to reference it in your script. Update the **Shoot** class’s **propsDefinition** with the following statement:

   ```typescript
   class Shoot extends hz.Component<typeof Shoot> {



       static propsDefinition = {

           launcher: {type: hz.PropTypes.Entity}

       };
   ```

2. Add a statement to the `start()` function that creates a reference to the projectile launcher gizmo.

   ```typescript
   start() {



       // Store a reference to the projectile gizmo in the launcherGizmo variable.

       let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);
   ```

   With a reference to the `launcherGizmo`, you can call a function on it (`launchProjectile()`) to launch a projectile whenever you pull the trigger.

3. Add a statement just before the `start()` function that adds a property for holding the launcher options.

   ```typescript
   // The options to use when launching the projectile.

   launcherOptions: hz.LaunchProjectileOptions = {speed: 50};
   ```

4. Add a statement to the **OnIndexTriggerDown** event for launching a projectile.

   ```typescript
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

5. Save your script.

6. In the desktop editor, select the Rifle object from the Hierarchy.

7. In the Property pane, scroll down to the **Scripts** section. Notice that there is now a `launcher` property that you can set. This property appears because you added it to the `propsDefinition` in your script.

   ![There is a launcher property in the property panel](../../_assets/images/43ca15ea23928c752d44bd15003e0e1c64cf21cdfdf91050ddf6667d3ecca010.png)

   **Note:** You might have to deselect and then reselect the Rifle object if this new property doesn’t appear.

8. Set this **launcher** property to the **ProjectileLauncher** object. Click on the field beside **launcher**, and then select **ProjectileLauncher** from the list that appears.

   ![Select ProjectileLauncher](../../_assets/images/da4a1bbdfeaca077b23942f84a6252ef18fc68b96dbe2eb45cd81917ade54ad7.png)

9. Preview your world by clicking the Play button.

10. Walk over to the rifle, grab it, and then click the mouse button. Notice what happens, a shot appears to come out of the rifle when you pull the trigger. Next, you’ll update your script to accumulate points whenever the player hits the target.

    ![A shot appears to come out of the rifle](../../_assets/images/1b220291eb707fd45571241097b8cc5ccf43be7451293e06bffe43a0801153e2.png)

11. Exit Preview mode by pressing Escape.

### [Section 8: Count points whenever you hit the target](#section-8-count-points-whenever-you-hit-the-target)

In this section, you’ll update the script so that you score a point each time you hit the target.

1. In the desktop editor, select the SpawnPoint in the Hierarchy.

2. Click **Asset Library** > **Public Assets** under the Scene pane.

3. In the Search field, enter “skeletoncrayta” to find the skeleton.

   ![Pirate skeleton](../../_assets/images/89ab479f244f63da4ebe3fb8a71ca69fb9f3b52f61626018137b67f3627dd1f7.png)

   A skeleton object named [UnityAssetBundleGizmo](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/unity-assetbundles/horizon-unity-assetbundles-overview) is added to your Hierarchy, and appears in your scene.

4. Rename the skeleton object from “UnityAssetBundleGizmo” to “Target”.

5. Position the target anywhere in the scene.

6. Update your script so that whenever a projectile hits an object, a point is added to your score. You’ll need to add a variable to track the current point value, and to initialize its value to zero. Add the following statement near the top of your class, just above the `start()` function.

   ```typescript
   // Keep track of the user's score.

   points: number = 0;
   ```

7. Add another event listener inside the `start()` function that fires whenever a projectile hits an object. Copy the following statements to the end of the `start()` function.

   ```typescript
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

   ```typescript
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

8. Save your script.

9. Test your world.

   1. In the desktop editor, select the **Console** tab at the bottom of the screen.

   2. Click the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.

   3. Walk over to the rifle, pick it up, and then fire several shots at the skeleton.

      ![Every time to hit the target, the score increments](../../_assets/images/058e52fa83241839b6ca0edb5d50efab0296bc0ac182d3c6b5f3543f4525fd79.png)

      Every time you hit the skeleton, a message prints to the **Console** that tells you how many points you’ve scored. If a shot doesn’t hit the skeleton, then the console message simply doesn’t appear.

### [Section 9: Display the score](#section-9-display-the-score)

In this section, you’ll revise your script so that the score appears in the game.

1. Add a **Text** gizmo to your scene.

   1. Click the **Build** panel.

      ![Build an entity](../../_assets/images/df5cd6a5d93f7ca6d8fa4216ab1cf22b29f08c8f0a797be38419727e4672c16d.png)

   2. Select **Text**.

      ![Select the Text icon](../../_assets/images/f48b0a13b38ff5fa1bd080f27a67dfa876d05f0e6ca7613dde37fed4629f3d59.png)

      A **Text** gizmo is added to the scene.

   3. Position the **Text** gizmo within the scene so that you can read the score while you’re shooting at the target.

      ![Position the Text gizmo so you can read the score](../../_assets/images/2f47b90efbcb72845854a1ec3df6885d2bf758c35cf71294eb2068d7404aad36.png)

      You’ll need to rotate the **Text** gizmo so that the text displays in the correct orientation.

2. Update your script to use the **Text** gizmo. Remember, if you want to reference an entity property within a script, then you need to add that property to the `propsDefinition`. Add a `scoreView` property to `propsDefinition`.

   ```typescript
   static propsDefinition = {

       launcher: {type: hz.PropTypes.Entity},

       scoreView: {type: hz.PropTypes.Entity}

   };
   ```

3. To be able to use the `scoreView` property, you need a reference to `scoreView` as its specific type: `TextGizmo`. Store a reference to the `scoreGizmo` object in your `start()` function.

   ```typescript
   // Store a reference to scoreView as its specific type: TextGizmo.

   let scoreGizmo = this.props.scoreView?.as(hz.TextGizmo);
   ```

4. Update the scoreboard text by adding a single statement beneath the `console.log` statement that calls the `scoreGizmo.text.set()` function.

   ```typescript
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

5. Save your script.

   Your complete script should now look like this.

   ```typescript
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

6. In the desktop editor, select the Rifle object from the Hierarchy.

7. Scroll to the **Scripts** section of the **Property** panel. Since you added `scoreView` to `propsDefinition` in your script, this property now appears in the **Scripts** section of the **Property** panel.

   ![The scoreView property appears in the property panel](../../_assets/images/454c0e7301e4bc68f31f4c62c496d179fc0d4f574f0497f108a5f460948fe7d9.png)

   **Note:** You might have to deselect the Rifle, and then reselect it if this new property doesn’t appear.

8. Set the value of `scoreView` to the Text gizmo that you added to the scene. Click the drop-down selector beside the label **scoreView**, and select “Text”.

   ![Set the value to the Text gizmo](../../_assets/images/ac44a843f74f0c3bc47afbc8113eceb8474fdc887a624d8e73c502a0aacdfbf3.png)

9. Test your world.

   1. In the desktop editor, select the **Console** tab at the bottom of the screen.

   2. Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.

   3. Walk over to the rifle and grab it, and use it to take several shots at the skeleton.

      ![Rack up some points by shooting the target](../../_assets/images/2b9f0eba7a250412d2bef20b726541592a03479e860124b4805eac4d06ca1043.png)

      You should see your score floating in space, and it should increment each time you shoot the skeleton.

### [Section 10: Create a second rifle](#section-10-create-a-second-rifle)

In this section, you’ll convert your Rifle/ProjectileLauncher combination into a Template Asset, and then you’ll use that asset to create another rifle.

1. From the Hierarchy, select the Rifle. This object has the script attached to it, and it’s also the parent of the ProjectileLauncher.

2. Right-click the Rifle object in the Hierarchy, and from the menu that appears, select **Create Asset**.

   ![Turn the Rifle object into an asset](../../_assets/images/ad94ea21fad900faae4ede7bbbfb169fa3baf18380beccc5bfb57663e90f315a.png)

   The **Create New Asset** dialog appears.

3. Type a name for the asset, and type a description of the asset, and then click **Create**.

   ![Fill in the asset name and the description](../../_assets/images/b3ef118ff9df4bb83411b9466902ea283de51d5c64d2a81eca36a3234e3ce398.png)

4. Open the **Assets** tab, and then select the **My Assets** folder. You’ll see your second rifle asset there.

   ![Your new asset appears in your My Assets folder in your Private Assets Library](../../_assets/images/a8a9438558dae1c21a6599277f154f468c748a4197900b7c0032da7009aaf3b9.png)

5. Click and drag the new AutoRifle asset, and drop it anywhere in the scene.

   ![Place the new Rifle anywhere in the scene](../../_assets/images/13f70a4b68008620f662221bc0de3a6c0692fd922f386b6cf493e0025f5b7e02.png)

6. Test your world. Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the second rifle.

   Notice that you can use either rifle to shoot the skeleton and generate a score. Each rifle has its own score, which means the text box swaps between the scores as you swap rifles.

You’re done! You’ve completed building a game in Meta Horizon Worlds! In the next section (which is optional), you’ll try running your game in 3D on a Meta Quest headset.

## [What’s next?](#whats-next)

To learn more about Meta Horizon Worlds, try the following:

- Try the [Batting cage tutorial](../Adding%20and%20manipulating%20objects%20tutorial.md) now that you’ve created your first world.
- Learn about the desktop editor with the [Introduction to the desktop editor](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools overview](../../Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.

