Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/batting-cage-tutorial

# Adding and manipulating objects tutorial

In this tutorial, you’ll learn how to create a simple Meta Horizon Worlds game. The tutorial shows you how to create a world, add assets to it, write scripts to attach to entities to create behavior, and try going to the world on a mobile device and in virtual reality.

The key learning objectives are the following:

* Writing TypeScript code
* Setting entity ownership
* Handling object collisions
* Trying the world on mobile and in virtual reality

## Prerequisites

This tutorial requires you to use the Meta Horizon Worlds desktop editor. See [Install and run the desktop editor](/hw-docs/Get%20started/Install%20the%20desktop%20editor.md) for instructions.

## Section 1: Create a new world

In this section, [create a new world](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Create%20a%20New%20World.md) for your game.

**Note**: When you’re building your world, Meta Horizon Worlds automatically saves your progress and it’s part of your online save flow.

## Section 2. Create an avatar, a bat, and a ball

In this section, you’ll spawn an avatar into your world, and then you’ll add a baseball bat and a baseball to your world.

- Select the **SpawnPoint** gizmo in the Hierarchy. This is the avatar.

  ![Select the spawn point gizmo in the hierarchy](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462689916_564911232713499_6993527411397223752_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=u7dmm99Ukf0Q7kNvwGWhNQP&_nc_oc=AdkM47sPIifuB-lJTe-PMRholAwE21w15nllpVFdy5CI0qTwV3SGrGfC4KgViSU95yY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfhL5jjlsZXHPLMmRrAYauWQG5ReEtFOt6zD6c9teFMleg&oe=69313499)
- Focus the camera on the avatar by pressing the “F” key.

  ![Focus the camera on the avatar](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462608481_564911246046831_3937497365964477693_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=EqIlP7B-5fQQ7kNvwFg2m3U&_nc_oc=Adni_2igehLH-JrN4hnqsbP9ZzXGDSHqjOHGBRiFP7Q5N7FICpS3gv0FGhScbtql2Ug&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfgRpLd9jERXenyyLk85rOigkhLuTwNY55yoZl_hK1BxCA&oe=69314A1E)
- Spawn a new cylinder object into the scene, and name it “Bat”. Click **Build** > **Shapes** > **Cylinder**.

  ![Spawn a new cylinder object into the scene](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462701132_564911262713496_1343372135349431875_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=05i3ue69p1EQ7kNvwEyCTPf&_nc_oc=AdkRfolcDP7gDxM13fHSpPWIHyP9p4BxiQmYJOAJ20AHegIsHIXXyyGRmE5B7Eva5PI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afg678muJVTPJWiA91PPBrxXhQTeuOrt1H09oMrwEE2EmA&oe=69313631)
- Spawn a new sphere object into the scene, and name it “Ball”. Click **Build** > **Shapes** > **Sphere**. Your Hierarchy should now look like this:

  ![Spawn a nhew sphere object into the scene](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462654269_564911229380166_1772788500717622981_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=qioEAxjPRckQ7kNvwHW5yo1&_nc_oc=AdnB3GZxeJo_PmFimXVKbhxuF1J7obqLLpIwQaRK6HFyPT9RG3ulaPv4bmlcE9Yji-E&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfhnSRtamS9Frl5O1sPahCIom54PPgt5U7GqWF2x9jLG_w&oe=69313D5D)
- Resize the cylinder to resemble a bat, and place it in front of the spawn point.

  ![Resize the cylinder scale values](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462644158_564911279380161_1594296782694451642_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=OusfSnKrTekQ7kNvwGiEU4t&_nc_oc=AdnjtxNy7VRLIGuKH4m4-_R5rhSCg912NmUBbgdegqLiLUlUJnqz3LnMIoDDIU-qdhs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afg0gnNw_PGs-6Vm1lcHsrcVpm9arILxrHpqW8iu06wYNQ&oe=69312E8E)
- Place the bat in front of the spawn point. To move the bat easily, activate the on-screen Position Manipulator Handles by pressing “W”, and then drag the bat to where you want it.

  ![Place the bat in front of the spawnpoint](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462602432_564911236046832_1495750191451500905_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=OJYBVr3OwKEQ7kNvwFPsfsG&_nc_oc=AdlHlYiPskbu99ymeySntVbicKMyUkF6AQP1uyo5aLU48vgcEG7_mddKrV4e8uLX0io&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afj40P-vhMYFnGsiQi8Gh3-XEfGedspz3IIR7yULd_3vYw&oe=6931318E)
- Resize the sphere to make it the approximate size of a baseball.

  ![The resized scale values](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462602083_564911192713503_7226210735996448903_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=akUaLwe3Dr4Q7kNvwG0_bzn&_nc_oc=Adma6Vg0xlo_Gc-tNS5bacQVS5w9aB4mj0fkM9maEFuVX36wg_YGane-Kk7cZTIM1OM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afg_32uW4Ibt96_S7P_ublD-huFMCasCd2B4bdqjdUF8rg&oe=693116B4)
- Reposition the ball high in the air, slightly in front of the spawn point.

  ![The ball's new position values](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462683031_564911219380167_3082134887712278052_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=WqEhRRF84SwQ7kNvwEDeesh&_nc_oc=AdmkSq_6kahxLWr3L-m50CI2yrvkpJrALhznQhWqsfvilucKKrs-s4R8xRexyMrV97I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfgmdQZiq0l0U-oZNAgKsL2HmP8bPbM7_iUB6AxyluMM8Q&oe=69312847)

  ![This is what the ball looks like high in the air](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462748814_564911202713502_6576691860851034977_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=QgX7hBAZVesQ7kNvwGZDyqE&_nc_oc=Adn6lfFk0NP1bHo7krWTtXS1odChpk_no27sm5zVafr3d8D3jZsVH9t-O4fNCMuK_vw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfjfybwRPn3aW_6Q9gXqs_enKGOi1V614QNIeO_3nAkTTg&oe=69314816)

  You place the baseball up high because it will take time to fall down to the player, and the player needs this time to grab the bat.
- Set the **Behavior** properties on the ball.

  - Select the Ball object from the Hierarchy.
  - Enable **Collidable**. This ensures that the ball can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Set **Interaction** = “Physics”.
  - Enable **Gravity**, and set it to a custom gravity value to make the ball fall slower so it’s easier for the player to hit. For example, try using a value of “-0.20” instead of the default “-9.81” m/s2.

    ![Enable gravity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462687098_564911276046828_8376701341943687081_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=WGsv55wCnLoQ7kNvwEElLYC&_nc_oc=AdknNSY4OjdgCe2uTqUPMV_ThxI1NUhCdborvgRcT3Th0gWGWZxJXDGFQiodOCou3MM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfhBTYMTc3EPjmCN6mBoMygbE-0VykNsCEOB4Z5Sls4Z2Q&oe=69313FBC)
- Set the **Behavior** properties on the bat.

  - Select the Bat object from the Hierarchy.
  - Enable **Collidable**. This ensures that the bat can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Ensure that **Interaction** = “Grabbable”.

    ![Interaction equals grabbable](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462602868_564911266046829_5568516108201599638_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=IonnERnwVYoQ7kNvwHMuDag&_nc_oc=AdmYzfYmK3yCS6xRkVe2TufnRolOwrkyOCkPyV2pTweOAAvl7f9_IQpTZEgyRQeF5tM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afjf9W0YOIxRdjxvXu2b-glqUUPydhgP_6GtxHy8NOIIGw&oe=69313FE7)

When you run the simulation, the player spawns into the world. You can move the avatar over to the bat, and you can grab it, but you can’t swing it yet. The ball falls down a couple of seconds later.

## Section 3. Create the floor, and setup ball reinitialization

In this section, you’ll create the floor, and then configure collisions with it.

If the player swings at the baseball and misses, the ball simply falls to the floor. But when this happens, the ball should automatically move back to its original starting position, and then fall all over again. You need to add the code to accomplish this.

- Spawn a new cube object into the scene, and rename it “Floor”. Click **Build** > **Shapes** > **Cube**. Your Hierarchy should now look like this:

  ![Rename the cube object floor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462748808_564911242713498_8185972744048961801_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=whsA_bvSGwYQ7kNvwGxWrgW&_nc_oc=AdnWM5gqD11lnrL-qwF5d5Tklt9tfBIPiKeRjsGU3pzTeLdDH5r4d_hkUnkNAPqoR4Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfjLVyMdRnCjRIVGdT_-w4NGpAFyHJpnsi7kSjf3UuutFg&oe=693121A1)
- Change the dimensions of the Floor object so that it covers a relatively wide playing area.

  ![Position and scale the play area](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/472754953_626753169862638_6178594729083770490_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=YFDQ1o5OIIYQ7kNvwGmXqQU&_nc_oc=AdmHVz4Q-QK1zfdYX0-HncFh4BvGLABzvCyfm6b-_RviajAbfHaImSrKMKoWIf0vUNE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afj8EMxLPoku5lVsYpud7arV-sxNP_DnSkLRGi7FsHeHAQ&oe=693130BA)

  ![Your floor should look like this](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462676686_564911212713501_468507077804114298_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Mg5weHA-Eo8Q7kNvwHA8qU7&_nc_oc=Admj6mM-_g9NILcKOYkjLlLIaj3NufCjvl4nAf4LvvuCBYwC91CP2p1vUMhY4n3EQqk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfihOcWqVbHjaNCSHYj1im5u9lgVN42c8UOVhELn3yjGiA&oe=69311E6C)
- Add a **Gameplay Tag** to the Floor object, and name it “floor”.

  ![Name the gameplay tag floor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462608655_564911259380163_1890197524559525651_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=zEu2B5Puco8Q7kNvwEh7e5Y&_nc_oc=AdkFaSAWeLOKYDfFYciti43ls3USEBedGjRM01IydaYmpdPKJdKSpb-C-A1tiR5031c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afi8ciqUxyXmD4zQ43zISKLWh0nfQtEuSoUkq35Yw-uy8w&oe=69313CB7)
- Select the Ball from the Hierarchy.
- Set the following **More** properties on the Ball.

  - Set **Collision Events From** = “Objects Tagged”.

    ![Collision events from objects tagged](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462701412_564911199380169_7425995930029656028_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=HCFLgOcohPcQ7kNvwF0khr6&_nc_oc=Adm34HQGKplPPaYDuhF_Js34_mPV2Vq543U5qfksot29VvC57r3UvYzK9brKjMWVuXg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfjMG05AQcUjGy1954wRVHAD3ZjtDSaIBcf7ZsxHr6Uihg&oe=69311405)
  - Set **Object Tag** = “floor”.

    ![Object tag equals floor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462706481_564911196046836_4280703734366345331_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=t00YAGaIgp4Q7kNvwFJ5vcW&_nc_oc=Adm8yM2xBA_Y5LOKjl9p4yQTOY3xhVY9xB3Iok_Jvfn1M0RVx95Wo2cP5_0QIKsV7mM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfgyGoEvad57eoj2eH_6v8tm2aL9qBj2vjSGBBrnh1XqLw&oe=69311C3C)
- Create a script to control the Ball’s behavior. The code listens for collisions between the Ball and the Floor. When a collision occurs, the code resets the ball’s position back to its initial starting point, and it resets its velocity back to zero.

  - Click **Scripts** to open the Scripts panel.

    ![The scripts panel opens](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462687098_564911182713504_6689004367218443217_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=oEK1_u-hZkYQ7kNvwHC6kFg&_nc_oc=AdlQNbnKCyrAF5cbGSTjI-fkpkRHuQNEMuPgMXgbx9Bfcu-IXjdC1Q3Cy60rDiFi3jA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfgIozSvRYg0d_9u8ZPDeDuR_5IFIZam_pASUl9iLYudyQ&oe=69314633)
  - Create a new script by clicking **Create new script**.
  - Name the script “BallScript”, and then press **Enter**. The script is created.

    ![BallScript appears in your list of scripts](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462671462_564911282713494_2780281265974661818_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=aJw0A5aHzxcQ7kNvwEHSv6I&_nc_oc=AdlfMbqUuA3vRKg3bqxqt1Wz0PlZBvsuWHCptaMlIbkIQZcFJLY07uEtQ9YGqSh6ck0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfieXbYygbiSEKO17yT2u6ig30FyzhiAu6bfK9Tge5OWJQ&oe=6931282D)
  - Open the script in VS Code. Click the menu icon to the right of the script name, and then select **Open in External Editor**.

    ![Open the script file in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462690751_564911239380165_8519164833044724963_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=fNdDIEhfolAQ7kNvwEyHCeI&_nc_oc=AdnaWjaoZ4OwvV3UFKZTwucPRNxUsblwOf7Wn3X2U7yl5VWXkr3KLSPDjljrMomM9WQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afjx4aV7ZcXQ2_FbDlUHT6zhXEfhUCgpvr8fSjsH9dkMnw&oe=69311E85)

    VS Code launches, and opens a new TypeScript code file that contains a default class.

    ![The new typescript file opens in VS Code and it contains some default code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462652837_564911249380164_5111626863521496440_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=dx6AyodcRfUQ7kNvwF9Ypvs&_nc_oc=Adn6jxloB5s3nLAZ6USI4ONRF4DTTvEWxbjRCtBhPvWshIHl-ZSeayXzEhy6CbBtkLs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfjBpADUy0gGLcwsU10Nao2KHLBYlqu4YU425Vo7wkmCLw&oe=69313A3A)
  - Copy the following code snippet, and paste it on top of the default code in VS Code, and then save it.

    ```
     import * as hz from 'horizon/core';

     class BallScript extends hz.Component<typeof BallScript> {

         static propsDefinition = {};

         originalPosition: hz.Vec3 = hz.Vec3.zero;

         start() {
             // Set the original position of the ball so you know where to respawn.
             this.originalPosition = this.entity.position.get();

             // Listen for ball collisions with any other entity.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnEntityCollision,
               (collidedWith: hz.Entity, collisionAt: hz.Vec3, normal: hz.Vec3,
                 relativeVelocity: hz.Vec3, localColliderName: string, otherColliderName: string) => {

                     // Move the baseball back to its original starting position.
                     this.entity.position.set(this.originalPosition!);

                     // Reset the baseball’s speed to zero.
                     this.entity.as(hz.PhysicalEntity)?.zeroVelocity();
               });
         }
     }

     hz.Component.register(BallScript);
    ```
- Attach the BallScript to the Ball object.

  ![Attach the BallScript to the Ball object](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462704360_564911222713500_3418776293222919275_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Wth1lnDd2FsQ7kNvwH9YHqV&_nc_oc=AdlbBndK93d3s9Nkx001d1l9WHpWHohJ7J6c6xofi_sDw2duMQw95Peu3Zrxg6sXYMA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfglQi60SYqisZwxFzNrBQrScbQ2f1hhF-_DcbJlu552lg&oe=69312B77)
- Preview your new world in the Meta Horizon Worlds desktop editor. Enter Preview mode by clicking Play on the menu bar.

  ![Click the little person icon to enter Preview mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/476463623_647505964454025_8787956898410179165_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=t0wZt3O-IBsQ7kNvwHIPXL2&_nc_oc=AdlU2xt4GGeHMSEi0NMkx1lG_d0S6cedppQmrDQgjomupUqoslMEJ4e2KoPVyuqdHa0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfhVeU70phheA841Y4-1gdKceU2JG_CdqOfhXbr4XtHSfg&oe=69311A61)
- Maneuver the avatar over to the bat using the arrow keys, and then grab it by pressing the “E” key.

  ![This is what you avatar looks like after grabbing the bat](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462694517_564911206046835_4033375668500902553_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=NCWh5iA1B0QQ7kNvwHqBkK4&_nc_oc=AdlgEb97Z08be6LRsXAdFm4vZuK5T3ctahSHVcsplN3ePdgLJXPN39UWuOnHjOEioPs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfgtKLZGPv1hKVpUkCjp0AX9hxIwvVMOuQIRI8e76jLZAA&oe=693149DB)

  You can’t really do much at this point except walk around holding the bat. As you do, the ball continually keeps dropping out of the sky and falling to the floor.
- Exit Preview mode by pressing **Escape** twice.

## Section 4. Setup baseball/bat collision detection

In this section, you’ll configure collision detection.

- Select the Ball object from the Hierarchy.
- Add a **Gameplay Tag** to the Ball object, and name it “ball”.

  ![The Ball object has a Gameplay Tag named ball](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462704007_564911272713495_8171981578080402896_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=4jVA4FvbeqMQ7kNvwGTtG00&_nc_oc=AdlZUkqio3xw__QwRKfcQ9HCaG0NMYrC92jiRLXIJSFpcu5Y0Gc5Jq_Sn8jEhCD7T1A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afg1wbK62AIOnbK9WokcUAEhOD9uMm_eaH5N9AkAv3ll5A&oe=6931456F)
- Select the Bat object from the Hierarchy.
- Set the following **More** properties on the Bat object.

  - Set **Collision Events From** = “Objects Tagged”.
  - Set **Object Tag** = “ball”.
- Create a script to control the bat’s behavior. The code listens for collisions between the bat and baseball. When such a collision occurs, the code displays a message pop-up that congratulates the player for successfully hitting the baseball.

  - Click **Scripts** to open the Scripts panel.
  - Create a new script by clicking **Create new script**.
  - Name the script “BatScript”, and then press **Enter**. The new script appears in your scripts list.

    ![You now have two scripts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462718796_564911226046833_3172925499326887543_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZqC24wMNnsUQ7kNvwFISlsm&_nc_oc=AdletAahuT4wbitCt-HsH3PivUlPeQvrgoCT7ATj0l6dzqtSgh2rRkGK0_vvhtt2Uvo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_AfiCL-JsjxrDjXz9lQtfFiHojjCPK95nl6eFAoOPgkeYcg&oe=6931251F)
  - Open the script in VS Code by clicking the menu icon next to the script name, and then selecting **Open in External Editor**.
  - Copy the following code snippet, and paste it on top of the default code, and then save it.

    ```
     import * as hz from 'horizon/core';

     class BatScript extends hz.Component<typeof BatScript> {

         static propsDefinition = {};

         batHolder: hz.Player | null = null;

         start() {
             // Set the player holding the bat when they grab the bat.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabStart, (isRightHand: boolean, player: hz.Player) => {
                 this.batHolder = player;
             });

             // Reset the player holding the bat when they let go of it.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabEnd, (player: hz.Player) => {
                 this.batHolder = null;
             });

             // Listen for bat/ball collisions.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnEntityCollision,
               (collidedWith: hz.Entity, collisionAt: hz.Vec3, normal: hz.Vec3,
                 relativeVelocity: hz.Vec3, localColliderName: string, otherColliderName: string) => {
                     if (this.batHolder) {
                         this.world.ui.showPopupForPlayer(this.batHolder, "Good job hitting the ball!", 5);
                     }
             });
         }
     }

     hz.Component.register(BatScript);
    ```
  - Select the Bat object from the Hierarchy, then navigate to **Properties** > **Scripts**, and then attach the BatScript to the Bat object.

    ![Attach the BatScript to the Bat object](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462687051_564911256046830_3831045490394279727_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=qlZxaSJI1WIQ7kNvwESGP5S&_nc_oc=AdnYCil2TWrstw-njkxHxOtIv-oI9ywmEY03BnFGcUsX0c5yftcHHbPUh8gQ0k5xqyo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afji04YD2ePHg7JA2cSZKJ8wEsvtQhN3E_xXCWdCRwIJzQ&oe=69313A39)

    When the player swings and hits the ball, they’ll see a cheerful message that congratulates them.

    **Note**: You can’t swing the bat in desktop mode. To be able to swing the bat, you must switch to VR.
  - This step is optional for the Batting Cage tutorial.

    To enable restart of this world, set the ball to its original position by resetting it with a secondary action (the button press) whenever the user wants to do so. To implement this, you can create a scripting event for a [button press](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Action%20Buttons.md#how-to-handle-button-presses) and attach it to a [grabbable entity](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Introduction%20To%20Grabbable%20Entities%20On%20Mobile%20And%20Web.md).

## Section 5. Configure local scripting

In this section, you’ll configure the scripts to run locally.

When the player hits the ball, they take ownership of the entity that the script is attached to. In this case, it’s the Ball object. Transfer of ownership causes script processing to switch from the server to the player’s local device. This improves latency for the player. For more information, see [Ownership in Meta Horizon Worlds](/hw-docs/Scripting/Local%20scripting/Ownership%20in%20Meta%20Horizon%20Worlds.md).

- Change the Execution Mode of both the Ball and Bat scripts to “Local”.

  - Select the BallScript script from the Hierarchy.
  - In the **Properties Panel**, set **Script Execution Mode** = “Local”.
  - Select the BatScript script from the Hierarchy.
  - In the **Properties Panel**, set **Script Execution Mode** = “Local”.
- Update the BatScript script with the following revisions.

  - Adds a property that takes in the Ball entity.
  - Assigns the ball entity to the script property “ball”.
  - Transfers ball ownership to the player whenever they grab the bat.
  - Transfers ball ownership to the server when the player releases the bat.
  - Adds a `receiveOwnership()` method that preserves the value of `batHolder` when the script changes ownership.
  - Adds the `transferOwnership()` and `receiveOwnership()` methods that preserve the value of `originalPosition` when the entity changes ownership.

    This is what your BatScript should look like at this point:

    ```
     import * as hz from 'horizon/core';

     type State = {};

     class BatScript extends hz.Component<typeof BatScript> {

         static propsDefinition = {
             ball: {type: hz.PropTypes.Entity}
         };

         batHolder: hz.Player | null = null;

         start() {

             // Set the player holding the bat when they grab the bat.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabStart, (isRightHand: boolean, player: hz.Player) => {
                 this.batHolder = player;

                 // Set the ball's owner to the player so that interactions with
                 // the ball execute on the player's client with reduced latency. The bat's
                 // ownership is implicitly transferred to the player upon grab.
                 this.props.ball?.owner.set(player);
             });

             // Reset the player holding the bat when they let go of it.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabEnd, (player: hz.Player) => {
                 this.batHolder = null;

                 // Reset the ball's ownership to the player.
                 this.props.ball?.owner.set(this.world.getServerPlayer());
             });

             // Listen for the bat colliding with the ball.
             // [...] omitted, same as in the previous step.

             // After grabbing the bat, ball ownership transfers. This means you
             // must ensure that batHolder stays set correctly.
             override receiveOwnership(state: State, fromPlayer: hz.Player, toPlayer: hz.Player): void {
                 this.batHolder = toPlayer;
             }

             override transferOwnership(fromPlayer: hz.Player, toPlayer: hz.Player): State {
                 return {};
             }
         }

     hz.Component.register(BatScript);
    ```
- Update the BallScript script with the following revisions.

  ```
   import * as hz from 'horizon/core';

   type State = {
       originalPosition: hz.Vec3
   }

   class BallScript extends hz.Component<typeof BallScript> {

       static propsDefinition = {};

       originalPosition: hz.Vec3 = hz.Vec3.zero;

       start() {

         // Set the original position of the ball so you know where to respawn.
         this.originalPosition = this.entity.position.get();

         // Listen for ball collisions with the ground.
         this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnEntityCollision,
           (collidedWith: hz.Entity, collisionAt: hz.Vec3, normal: hz.Vec3,
             relativeVelocity: hz.Vec3, localColliderName: string, otherColliderName: string) => {

               // Move the ball back to its starting position.
               this.entity.position.set(this.originalPosition!);

               // Reset the ball's velocity.
               this.entity.as(hz.PhysicalEntity).zeroVelocity();
             }
         );
       }

       // Get the original position of the ball so that it respawns in the same place.
       override receiveOwnership(state: State, fromPlayer: hz.Player, toPlayer: hz.Player): void {
         this.originalPosition = state.originalPosition;
       }

       // Pass the ball's orginal position to the new owner.
       override transferOwnership(fromPlayer: hz.Player, toPlayer: hz.Player): State {
         return {originalPosition: this.originalPosition!};
       }
   }

   hz.Component.register(BallScript);
  ```

  When the player grabs the bat, they take ownership of the Bat entity. This causes the script component attached to the bat to execute locally on the player’s device (VR headset, web, and mobile). This provides a better visual experience for the player because there is no latency incurred in transmitting rendered scenes from the server to the player’s device.

## Section 6. Play in your new world on mobile

- Publish your world

  To [play in your world on mobile](/hw-docs/Mobile%20and%20web/Testing%20worlds%20on%20mobile%20and%20web.md#mobile), [publish](/hw-docs/Save,%20optimize,%20and%20publish/Publish%20your%20world.md) the world first. Provide the necessary information in the **Publish World** dialog, which can be opened by navigating to the dropdown menu on the menu bar or by clicking **Publish** on the top right.

  Enter the necessary information such as **Name**, **World Rating**, **Comfort Rating**, and **Tags**.

  * You can name your world something unique other than the default name.
  * If you do not wish your world to be visible to the public, ensure that the toggle for **Visible to Public** is turned off.
  * Ensure that mobile is selected as one of the supported devices.
  * Toggle on **Compatible with Web and Mobile**

  Click **Publish** to publish the world.
- Configure the preview device as mobile

  To preview your world on mobile, select **Mobile** as your preview device by going to [Preview Configuration](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md). Click the ellipsis button on the menu bar. In **Preview actions**, send a preview build link to your Meta Horizon app.
- Play it on mobile

  Open the Meta Horizon app on your mobile device, find the build link under **Notifications** to play in your world. For more related information, see [Testing worlds on mobile](/hw-docs/Mobile%20and%20web/Testing%20worlds%20on%20mobile%20and%20web.md#mobile).

## Section 7. Play in your new world in VR

In this section, you’ll see what it’s like to play your game in 3D in Meta Horizon Worlds on your Meta Quest VR headset.

- Grab your Quest headset, strap it on, and turn it on.
- Launch Meta Horizon Worlds on your headset.
- Navigate to the **Create** page. You can get there by clicking the fourth icon from the left on the menu bar at the bottom of the page.

  ![Click this icon to navigate to the Create page](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462602868_564911186046837_388520816768644606_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=kYbbu7nLuacQ7kNvwGRrD96&_nc_oc=Adku3HLTC3Qt4Gjdw9SlvrG5oDQ-RJzdQSowYBXYPcVNEebs5EuRU-aIp6HTfuK1pV0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=pC7wclWlBxPcHurS4BYZlg&oh=00_Afh1T7OmWl7UB9DQmuLLn4IzELK8p-Ra3BYTDG720p-l-g&oe=69313C72)
- Locate the world that you just created, and then click it to launch it on your Quest VR headset.
- Step up and grab the bat by pressing the secondary trigger on the right Quest controller.
- Swing the bat and try to hit the ball. You can swing the bat by swinging your right arm while holding the secondary trigger down. When you hit the ball, watch for the message: “Good job hitting the ball!”.

  If you lose the ball, and you need to reset your progress, you can:

  - Press the menu button on your left controller to open the Personal User Interface (PUI).
  - Choose the **Worlds** tab from the PUI menu.
  - Locate your world, and then select it.
  - Look for the **Reset World Progress** option, and then confirm that you want to reset your progress.

  **Note:** Resetting world progress deletes all of your progress in the world, including any items or achievements you’ve earned.

*You’ve completed this playtest - Congratulations!*

## Exercises

The following list contains suggestions for additional exercises.

* Reposition the ball’s starting position so that it spawns immediately above the player, wherever the player happens to be.
* Add a sound effect that plays whenever the player hits the baseball.
* Instead of using primitive meshes for the bat and baseball, try using higher quality meshes instead.
* Add a target for the player to aim for when they hit the baseball.
* Track the player’s score whenever they hit the target.
* Store the scores in a leaderboard.
* Make the bat easier to grab by adding explicit grab handles to it.
* When the player releases the bat, make it automatically attach to their hip.
* Spawn a new bat and ball for additional players that enter the world.
* Update your code to add support for desktop and mobile users.

## What’s next?

To learn more about Horizon, try the following:

- See the [Tutorial worlds](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Access%20Tutorial%20Worlds.md) for more tutorials.
- Learn about the desktop editor with the [Introduction to the desktop editor](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools overview](/hw-docs/Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.