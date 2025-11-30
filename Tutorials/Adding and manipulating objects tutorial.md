Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/batting-cage-tutorial

# Adding and manipulating objects tutorial

In this tutorial, you’ll learn how to create a simple Meta Horizon Worlds game. The tutorial shows you how to create a world, add assets to it, write scripts to attach to entities to create behavior, and try going to the world on a mobile device and in virtual reality.

The key learning objectives are the following:

* Writing TypeScript code
* Setting entity ownership
* Handling object collisions
* Trying the world on mobile and in virtual reality

## Prerequisites

This tutorial requires you to use the Meta Horizon Worlds desktop editor. See [Install and run the desktop editor](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/install-desktop-editor) for instructions.

## Section 1: Create a new world

In this section, [create a new world](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/creating-a-new-world) for your game.

**Note**: When you’re building your world, Meta Horizon Worlds automatically saves your progress and it’s part of your online save flow.

## Section 2. Create an avatar, a bat, and a ball

In this section, you’ll spawn an avatar into your world, and then you’ll add a baseball bat and a baseball to your world.

- Select the **SpawnPoint** gizmo in the Hierarchy. This is the avatar.

  ![Select the spawn point gizmo in the hierarchy](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462689916_564911232713499_6993527411397223752_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=iU32P2LzHQEQ7kNvwHLtC_C&_nc_oc=AdnXxg5nLO4MKd_BWgoaEdxaIeRIRGU0Nclm1iqNlUli1Ul8jUVfaNX6gzVWXKQFm4c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfihlPSKJOHfXq4Vx4dS-oYz4tIRc7P63yMGGGw9NFmy7g&oe=69464C99)
- Focus the camera on the avatar by pressing the “F” key.

  ![Focus the camera on the avatar](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462608481_564911246046831_3937497365964477693_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=i0jWvLy8G90Q7kNvwFTovGE&_nc_oc=AdmTsr3ShPyeYZiYbA4ifyJwMjNNO1iUYddhLOOktM4OW6xu4Fs3sI51r7k9ksLfzUo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfhkFtNJ7jyTJk7gs5i2lAeruz2i8DYjuwT9L_vxvZW8qw&oe=6946621E)
- Spawn a new cylinder object into the scene, and name it “Bat”. Click **Build** > **Shapes** > **Cylinder**.

  ![Spawn a new cylinder object into the scene](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462701132_564911262713496_1343372135349431875_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=In9ITu8wblwQ7kNvwHr-qAM&_nc_oc=AdnpaWV_490CHzua7CKCx9Wa3bybiEpChjcWKEU78p_bvrv0xCNDrRTOEsWKLBMWTYY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_Afj9hDGa07P0BGRs8UG2n4Vox9eW_D_mlCQxvBLKIt3qMg&oe=69464E31)
- Spawn a new sphere object into the scene, and name it “Ball”. Click **Build** > **Shapes** > **Sphere**. Your Hierarchy should now look like this:

  ![Spawn a nhew sphere object into the scene](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462654269_564911229380166_1772788500717622981_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=77c2lEIKmT8Q7kNvwHL8x6x&_nc_oc=Adl-BI8HCoZBE7r172XhYVTz9XeEM3r8FdEjq-JkHvFdNSeUw8n0VmJp4U5ShNlX3gg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfhvsW1qH7rkmpDuEiKiQXmYTK52uIggOsj0zcJ-0Ml5Jw&oe=6946555D)
- Resize the cylinder to resemble a bat, and place it in front of the spawn point.

  ![Resize the cylinder scale values](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462644158_564911279380161_1594296782694451642_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=tpVOuyJJQlMQ7kNvwGkORXH&_nc_oc=AdlevI8JPnSPweNFSKmi3700BQyb2IHjoYac2edgZXOSdN9EzMzLH25UlRE5d64OWhs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfjL_SmO58FNx5KP5WqVMvakfX1FUQp5niQsosEUDE8_Jg&oe=6946468E)
- Place the bat in front of the spawn point. To move the bat easily, activate the on-screen Position Manipulator Handles by pressing “W”, and then drag the bat to where you want it.

  ![Place the bat in front of the spawnpoint](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462602432_564911236046832_1495750191451500905_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ly4Ocj_H7zIQ7kNvwHK8N1D&_nc_oc=AdkN1WnlIEDwHn5om0OstkAqlqo9KWON4POW_9w1a-n0YnFxm4yCqbdkL1-SH-0VXX0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfjkYBqNs0EpM8N48x-oHfhbDClytLNgLT1ZeHefoof4dQ&oe=6946498E)
- Resize the sphere to make it the approximate size of a baseball.

  ![The resized scale values](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462602083_564911192713503_7226210735996448903_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=i2IZ0Qm-fJUQ7kNvwHJ-x1N&_nc_oc=AdnJ7pCW2iaM6y6ma483fusuGnXZzL4-8n82UPSrHOrE7uisnMqBN3C0RL9EXwUhHZk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_Afg9gYq6IX7CmTOTrCqjJFwTDAhUrCrlL3LqE3CdBJ402A&oe=69462EB4)
- Reposition the ball high in the air, slightly in front of the spawn point.

  ![The ball's new position values](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462683031_564911219380167_3082134887712278052_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=zqogHvy8IrMQ7kNvwEFkPJX&_nc_oc=Adm1QO48rmQxCHhLHt-7MPY1v1iq7FCfNJCfWRY-AcjZtJYiagsXZDdxgYubd-xMCXY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfjeFNBn7TnQ0Mpj2LwiIThEnF9qo0ISvJeeAplnRAEC7A&oe=69464047)

  ![This is what the ball looks like high in the air](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462748814_564911202713502_6576691860851034977_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=eCiFB-oeenEQ7kNvwEJukbF&_nc_oc=Adkm-6HE4K3pJM55w67mcmdMQeZRfMWuhK9LgVvShLTfr8zqbx4JzsHMl_a0dd6HLis&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfiRqb1cYNz93GlPHsNnHqp5JbUBSQ22VvB8yasZ1tECNg&oe=69466016)

  You place the baseball up high because it will take time to fall down to the player, and the player needs this time to grab the bat.
- Set the **Behavior** properties on the ball.

  - Select the Ball object from the Hierarchy.
  - Enable **Collidable**. This ensures that the ball can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Set **Interaction** = “Physics”.
  - Enable **Gravity**, and set it to a custom gravity value to make the ball fall slower so it’s easier for the player to hit. For example, try using a value of “-0.20” instead of the default “-9.81” m/s2.

    ![Enable gravity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462687098_564911276046828_8376701341943687081_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=V_THEcVxESAQ7kNvwFFfVA4&_nc_oc=Adn66F7ZtaoCxjo4wtVDqhDsb0XVGK8RFDX-sfZFCp_ZFW1MTmbeODJf7pG2gVGJo38&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfiNeuU-ovvbtJwDBcTupDluYJZKRNlKTkyhbEhvwNs7YQ&oe=694657BC)
- Set the **Behavior** properties on the bat.

  - Select the Bat object from the Hierarchy.
  - Enable **Collidable**. This ensures that the bat can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Ensure that **Interaction** = “Grabbable”.

    ![Interaction equals grabbable](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462602868_564911266046829_5568516108201599638_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=vuLc8wyH860Q7kNvwGFkYzS&_nc_oc=Adk2xOQFqJvuwdG07jFe3wo33AQrSMjqXFr49qST10j6fu5bKEjbT-V8NqrsZq6TtQ8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfhCm4feNWmAkThhBHUxXbHn5rUKCNZ_dPXAx_u-bK-ChA&oe=694657E7)

When you run the simulation, the player spawns into the world. You can move the avatar over to the bat, and you can grab it, but you can’t swing it yet. The ball falls down a couple of seconds later.

## Section 3. Create the floor, and setup ball reinitialization

In this section, you’ll create the floor, and then configure collisions with it.

If the player swings at the baseball and misses, the ball simply falls to the floor. But when this happens, the ball should automatically move back to its original starting position, and then fall all over again. You need to add the code to accomplish this.

- Spawn a new cube object into the scene, and rename it “Floor”. Click **Build** > **Shapes** > **Cube**. Your Hierarchy should now look like this:

  ![Rename the cube object floor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462748808_564911242713498_8185972744048961801_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=xxka7rrj62MQ7kNvwHnVY_S&_nc_oc=AdmMG_BjrxYi_dujovR8sNneE9jV_P5Fsdz3P1qFH5jEUjm6aAWDgnLthJbVl0zPM3U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_Afg1SmLmOHAM8ONeOumaXTzMrgX16UEfdcZcUHJTsGJHpQ&oe=694639A1)
- Change the dimensions of the Floor object so that it covers a relatively wide playing area.

  ![Position and scale the play area](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/472754953_626753169862638_6178594729083770490_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=bqpDT4V8SqoQ7kNvwF8AU1o&_nc_oc=Admpi35gnlFwYCKvXI5ygRBnKYtbi9yq28n1pMZZleQKTNLqOuuOecNzCxBbnh1pueo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_Afghzd8jb-w9OCXxTUr8KedGMk3kBHrlXwg2tKiJtav7LQ&oe=694648BA)

  ![Your floor should look like this](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462676686_564911212713501_468507077804114298_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=lsz-EaqYTZMQ7kNvwGRR4Go&_nc_oc=Adk-IeDIEJ2VdJ-tEu70ILWfy7mKQPZI9gZhB2YZ1rEBerUysDtKU66qO9nM5JDCVh0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfiuhKLwyrdU0FSwY9zGqiMIHNhrZj2wFDIY9f3NvKCDtA&oe=6946366C)
- Add a **Gameplay Tag** to the Floor object, and name it “floor”.

  ![Name the gameplay tag floor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462608655_564911259380163_1890197524559525651_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=G0Y_in4Vzy8Q7kNvwFPSb0R&_nc_oc=Adl15j9ZF4GJ2AeuN4tO5HxgcS2sWsF1Ucb6uCDRjdEa98ZFNnKHD1HUvynUjbhU5ak&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfiPBH5B1uaYjmdTQJ4jfriWuZ2TpjR_6hwUmp9JwWY7JA&oe=694654B7)
- Select the Ball from the Hierarchy.
- Set the following **More** properties on the Ball.

  - Set **Collision Events From** = “Objects Tagged”.

    ![Collision events from objects tagged](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462701412_564911199380169_7425995930029656028_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ErSYEk0H9gsQ7kNvwH_nn1o&_nc_oc=Adm4wCyW0ueZDTU9yQX0s00bQkbJ0GjRqlt0oHEu1h5PngFPal-JmdXT2jonHEJ-ZNo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfhX0JAz9IOz2K33sKQwyctWmZZXMpFmVjR80XuIOxhAaA&oe=69462C05)
  - Set **Object Tag** = “floor”.

    ![Object tag equals floor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462706481_564911196046836_4280703734366345331_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=BwnVHlBREZ4Q7kNvwENx4_k&_nc_oc=AdlZqMoQ2JW7h9iHGxFsg9XND-uhcO0b1eiW3r4Nz-x9IVVOTbBmintsroF2CYFU5bg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_Afiowe3Wb4s2tNMHZTCpIlgiv0xCZgkCxPztbaiIZ_vlpA&oe=6946343C)
- Create a script to control the Ball’s behavior. The code listens for collisions between the Ball and the Floor. When a collision occurs, the code resets the ball’s position back to its initial starting point, and it resets its velocity back to zero.

  - Click **Scripts** to open the Scripts panel.

    ![The scripts panel opens](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462687098_564911182713504_6689004367218443217_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=s11xq6IRzGcQ7kNvwGWwxcc&_nc_oc=Adnxep1Ft3U44CLIY_xKamyBEHXJpKAvtJztqlQRgea6uMzR8xBM5VJreyZytK7Zkq0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_Afj0j9EVeido_RojBKY8uZ7d-szeCdHddXtX-R4DSuFUew&oe=69465E33)
  - Create a new script by clicking **Create new script**.
  - Name the script “BallScript”, and then press **Enter**. The script is created.

    ![BallScript appears in your list of scripts](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462671462_564911282713494_2780281265974661818_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Oi1-cU0pyJMQ7kNvwH9Fq7B&_nc_oc=AdklHSrqYBmNd_aHlFwKXXKxbMYD5LbAGubb0_LS06rSEAjQ2dTu2MdJLqwrKLUJdms&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfhIYUjANsg4hmHXeuFnFcqE4yljt1s3ywwiUnRHESXAIw&oe=6946402D)
  - Open the script in VS Code. Click the menu icon to the right of the script name, and then select **Open in External Editor**.

    ![Open the script file in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462690751_564911239380165_8519164833044724963_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=crPcaozE8bQQ7kNvwEaYMeO&_nc_oc=AdlBo54_hMkgRD20JdoSfmcwdT5efi11W2E2OovWY89YOCQfyaDOGpG3VBllQ4uEJyI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfiBovBLq7M7-AFyoJlsvuuR9MfHIVp-XU7vUxU6VuNV1Q&oe=69463685)

    VS Code launches, and opens a new TypeScript code file that contains a default class.

    ![The new typescript file opens in VS Code and it contains some default code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462652837_564911249380164_5111626863521496440_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=N2_VqScDVlIQ7kNvwG1p8dM&_nc_oc=AdmkXRILy_DV3jOuQfHrgvjC5uLWeYj4ZM9Xkn28QL9gk6XssuGWUUmw1TTEijKWhAQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfgYpI1oWZcZubRi56agx2f-0dmAWiK1457l0U_mzDa5kQ&oe=6946523A)
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

  ![Attach the BallScript to the Ball object](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462704360_564911222713500_3418776293222919275_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=B1beKhgJ8JgQ7kNvwEDa1P4&_nc_oc=AdkGYjAq7NQU7RaJzVtVgIsQrTuWDodHEqkErPsj0IV6z_yxHn3CuJRxXCChteX3kGk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfjTT-tVbqgX4M5d-LGYhbFmfnrVlOjKw9OelWjZ4a5DSw&oe=69464377)
- Preview your new world in the Meta Horizon Worlds desktop editor. Enter Preview mode by clicking Play on the menu bar.

  ![Click the little person icon to enter Preview mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/476463623_647505964454025_8787956898410179165_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=K0uXeEU96LoQ7kNvwHHyW-F&_nc_oc=AdmoJfCPrLMohjdt70m8morCA40BJFYnsjA3UXrjgI2d1tS30Ifr3_S50VLxjUxpqTw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfjUd2W8l4Oux_UOMsDgEkFmI_2drz0HefdVs1rm1hbKwg&oe=69463261)
- Maneuver the avatar over to the bat using the arrow keys, and then grab it by pressing the “E” key.

  ![This is what you avatar looks like after grabbing the bat](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462694517_564911206046835_4033375668500902553_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=8C2nIM2CMsQQ7kNvwHZjTaY&_nc_oc=Adls4jrjeDnYVfwnWbvzA6fREsYCh-KMMLUSLkKx74eXB7Z_lfvi7z8GEqBNydFPMgU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_Afg2xiIMhx4-TAULfewT5h3lVAi-YDl3UlqYFI1EC4-A6w&oe=694661DB)

  You can’t really do much at this point except walk around holding the bat. As you do, the ball continually keeps dropping out of the sky and falling to the floor.
- Exit Preview mode by pressing **Escape** twice.

## Section 4. Setup baseball/bat collision detection

In this section, you’ll configure collision detection.

- Select the Ball object from the Hierarchy.
- Add a **Gameplay Tag** to the Ball object, and name it “ball”.

  ![The Ball object has a Gameplay Tag named ball](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462704007_564911272713495_8171981578080402896_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=i0GEdKKv-C0Q7kNvwFZnilk&_nc_oc=AdkCNU0Dxr72NbTmh611ft1cOSdDmogd_NEik31KDL0Sfq7yVl0nQSuIi8VQy0CHmgM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_Afi8U2-cDyO7yOWvmbsbtxtQTK1Umhn19LQ9im2KuJbbgg&oe=69465D6F)
- Select the Bat object from the Hierarchy.
- Set the following **More** properties on the Bat object.

  - Set **Collision Events From** = “Objects Tagged”.
  - Set **Object Tag** = “ball”.
- Create a script to control the bat’s behavior. The code listens for collisions between the bat and baseball. When such a collision occurs, the code displays a message pop-up that congratulates the player for successfully hitting the baseball.

  - Click **Scripts** to open the Scripts panel.
  - Create a new script by clicking **Create new script**.
  - Name the script “BatScript”, and then press **Enter**. The new script appears in your scripts list.

    ![You now have two scripts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462718796_564911226046833_3172925499326887543_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=O-a-OvJ4MhUQ7kNvwEZuJ9f&_nc_oc=AdkhT7xFGJCFexlDXPoCN5OS54HsrGloJ4hXqrGaHlkEim09GQhpUAz-dzzAKEOiDms&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfhSoWUSe2gjfLrYrRE5WNtyJ3oca_rCQaysgEsaTUP5mQ&oe=69463D1F)
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

    ![Attach the BatScript to the Bat object](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462687051_564911256046830_3831045490394279727_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ykqb6HNPOlkQ7kNvwGnYnK9&_nc_oc=Adk20Vxy80qsen7u1AmmeVHKspkEjsqdNgF7S5yjPf2HMjwL7rq7dv98vKKpbpaK_3M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfjPt_QCyz0s75FlVhsvlyzPvdOby-f2BBraAtvcCNfYIQ&oe=69465239)

    When the player swings and hits the ball, they’ll see a cheerful message that congratulates them.

    **Note**: You can’t swing the bat in desktop mode. To be able to swing the bat, you must switch to VR.
  - This step is optional for the Batting Cage tutorial.

    To enable restart of this world, set the ball to its original position by resetting it with a secondary action (the button press) whenever the user wants to do so. To implement this, you can create a scripting event for a [button press](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/action-buttons/#how-to-handle-button-presses) and attach it to a [grabbable entity](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/intro-to-grabbable-entities/).

## Section 5. Configure local scripting

In this section, you’ll configure the scripts to run locally.

When the player hits the ball, they take ownership of the entity that the script is attached to. In this case, it’s the Ball object. Transfer of ownership causes script processing to switch from the server to the player’s local device. This improves latency for the player. For more information, see [Ownership in Meta Horizon Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds).

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

  To [play in your world on mobile](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/how-to-test-on-web-and-mobile#mobile), [publish](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/publish-your-world) the world first. Provide the necessary information in the **Publish World** dialog, which can be opened by navigating to the dropdown menu on the menu bar or by clicking **Publish** on the top right.

  Enter the necessary information such as **Name**, **World Rating**, **Comfort Rating**, and **Tags**.

  * You can name your world something unique other than the default name.
  * If you do not wish your world to be visible to the public, ensure that the toggle for **Visible to Public** is turned off.
  * Ensure that mobile is selected as one of the supported devices.
  * Toggle on **Compatible with Web and Mobile**

  Click **Publish** to publish the world.
- Configure the preview device as mobile

  To preview your world on mobile, select **Mobile** as your preview device by going to [Preview Configuration](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/preview-mode#how-to-set-the-preview-configuration). Click the ellipsis button on the menu bar. In **Preview actions**, send a preview build link to your Meta Horizon app.
- Play it on mobile

  Open the Meta Horizon app on your mobile device, find the build link under **Notifications** to play in your world. For more related information, see [Testing worlds on mobile](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/how-to-test-on-web-and-mobile#mobile).

## Section 7. Play in your new world in VR

In this section, you’ll see what it’s like to play your game in 3D in Meta Horizon Worlds on your Meta Quest VR headset.

- Grab your Quest headset, strap it on, and turn it on.
- Launch Meta Horizon Worlds on your headset.
- Navigate to the **Create** page. You can get there by clicking the fourth icon from the left on the menu bar at the bottom of the page.

  ![Click this icon to navigate to the Create page](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462602868_564911186046837_388520816768644606_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=W3vHhEkibTcQ7kNvwGxBbti&_nc_oc=AdnOLmQ6Sb4JmyWxoRwF7sH2fBjHm9tvC8Atx7ymKJv5Ok1x3tXHKgFZxkiBr9psSOc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rmmqdmAh5TwUfuGhDVwXMw&oh=00_AfhOTCfsbVjAIouWuzzRFQpopf1U0ZUEf12fSX_ZhddZGg&oe=69465472)
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

- See the [Tutorial worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds) for more tutorials.
- Learn about the desktop editor with the [Introduction to the desktop editor](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/introduction-to-desktop-editor).
- Learn about the other tools available by reading our [Tools overview](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/tools-overview).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.