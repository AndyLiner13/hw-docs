Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/batting-cage-tutorial

# Adding and manipulating objects tutorial

In this tutorial, you’ll learn how to create a simple Meta Horizon Worlds game. The tutorial shows you how to create a world, add assets to it, write scripts to attach to entities to create behavior, and try going to the world on a mobile device and in virtual reality.

The key learning objectives are the following:

* Writing TypeScript code
* Setting entity ownership
* Handling object collisions
* Trying the world on mobile and in virtual reality

## Prerequisites

This tutorial requires you to use the Meta Horizon Worlds desktop editor. See [Install and run the desktop editor](../Get%20started/Install%20the%20desktop%20editor.md) for instructions.

## Section 1: Create a new world

In this section, [create a new world](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Create%20a%20New%20World.md) for your game.

**Note**: When you’re building your world, Meta Horizon Worlds automatically saves your progress and it’s part of your online save flow.

## Section 2. Create an avatar, a bat, and a ball

In this section, you’ll spawn an avatar into your world, and then you’ll add a baseball bat and a baseball to your world.

- Select the **SpawnPoint** gizmo in the Hierarchy. This is the avatar.

  ![Select the spawn point gizmo in the hierarchy](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462689916_564911232713499_6993527411397223752_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=PhJmBk8K5AIQ7kNvwE_g_Cv&_nc_oc=AdkSdRTJOFbmHmU96QNdS67htcjWlzJl2jq9NS-0mGXjwUNEdE5OuPsgjv10WKfLz50&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfluoCf17MCVQMEMhShSn6ZBjQPZLe61fw22t0tbNx7JkQ&oe=694BCAD9)
- Focus the camera on the avatar by pressing the “F” key.

  ![Focus the camera on the avatar](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462608481_564911246046831_3937497365964477693_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=GhPARTIEjJIQ7kNvwE39BHi&_nc_oc=AdlHy_CkCxjyLbzd6TVqXKRUrJvOgowAfddInU5x20hNsKhycR8f719zPmd4adDi7ZU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfnzmeKc1PeSES3V9qxBeSEKt8jinu7HBjDAuchqquA6kw&oe=694BE05E)
- Spawn a new cylinder object into the scene, and name it “Bat”. Click **Build** > **Shapes** > **Cylinder**.

  ![Spawn a new cylinder object into the scene](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462701132_564911262713496_1343372135349431875_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=xjyiDlx3MsEQ7kNvwGaLPqx&_nc_oc=AdkTnJKeZo3w4BgswulMUNfU96a7I1cXiA8xH_0qlQaiSRQobcQam8_5QE9CY1lgE2A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Afme7b3uEjICWEEZo0-rgaS1Ttd3LRJTYkXPqLL9SWTU1g&oe=694BCC71)
- Spawn a new sphere object into the scene, and name it “Ball”. Click **Build** > **Shapes** > **Sphere**. Your Hierarchy should now look like this:

  ![Spawn a nhew sphere object into the scene](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462654269_564911229380166_1772788500717622981_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Rlf1rQ6LUzcQ7kNvwHeaMBD&_nc_oc=AdlU5XHLB5dVhAejoLCYeKgjaS0fAXOgVLuNAxRJhHzFjIQGVdDNBBLeuVIA1AyD1hc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Afk_dQud6J3F0YySifETaH_Bhv_M2qXnb9ylpBISY6ET2A&oe=694BD39D)
- Resize the cylinder to resemble a bat, and place it in front of the spawn point.

  ![Resize the cylinder scale values](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462644158_564911279380161_1594296782694451642_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=cqFIQeSOyHMQ7kNvwHrfUXd&_nc_oc=AdnmS9hSZdQg56-KwDs9luLDfFvP91HScaYvArm8uFlbtIjD9iJEcZ5OStBPDQaddks&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfluEFbpvGn0zmdmnn-y757Y5I444W_69N9YIO6L6nkA-A&oe=694BC4CE)
- Place the bat in front of the spawn point. To move the bat easily, activate the on-screen Position Manipulator Handles by pressing “W”, and then drag the bat to where you want it.

  ![Place the bat in front of the spawnpoint](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462602432_564911236046832_1495750191451500905_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=pUt0ha6yLooQ7kNvwFtewvF&_nc_oc=AdkPp4_cbqDr17P2vwe7b-HahmusVQ-OtcZPkZKB0Q58zr5aPOJVtA6Xy54ir1HRKdo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfkPqD4FpKaAqWOGluWMiXD7UagG1UXC1L3hxkhz-BHYgQ&oe=694BC7CE)
- Resize the sphere to make it the approximate size of a baseball.

  ![The resized scale values](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462602083_564911192713503_7226210735996448903_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=DcPxs96ylc8Q7kNvwGXGjzw&_nc_oc=Adkt3T03Ym3lplpY4nI3o-tjqvju6X55rBjrwr7yEefXEuDsrfsuzuvZFwXlFwpRZBE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AflSVQCpUzWntM04BdeN175Hls9TidJck0cUQoskmrM2tA&oe=694BE534)
- Reposition the ball high in the air, slightly in front of the spawn point.

  ![The ball's new position values](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462683031_564911219380167_3082134887712278052_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=jIHwyg76SY4Q7kNvwFbMF4u&_nc_oc=AdnV34LY8i2fRGXh0QwKdtKjSltWZPzT0K5tU5_WEn8I7W8m95zjYHrl_zsrLis17-w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfmonR1fGibmGiWANnm6Y-pn1b5iJM3ExhesEfMhLN6P_A&oe=694BBE87)

  ![This is what the ball looks like high in the air](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462748814_564911202713502_6576691860851034977_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=cwKwunzkIOIQ7kNvwGwgNbC&_nc_oc=AdlU5zr2A3YCItrtdzCexxdWAuakVXszp4qptc8hxAM9M-fQRQNL9hdA--J4W1sSd5E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Afltht_A60yKt92DoNgJjs408T1nKZCbOPT4JrQa3Z2bTA&oe=694BDE56)

  You place the baseball up high because it will take time to fall down to the player, and the player needs this time to grab the bat.
- Set the **Behavior** properties on the ball.

  - Select the Ball object from the Hierarchy.
  - Enable **Collidable**. This ensures that the ball can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Set **Interaction** = “Physics”.
  - Enable **Gravity**, and set it to a custom gravity value to make the ball fall slower so it’s easier for the player to hit. For example, try using a value of “-0.20” instead of the default “-9.81” m/s2.

    ![Enable gravity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462687098_564911276046828_8376701341943687081_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=iQlJ8Z1VTxEQ7kNvwG1aGvT&_nc_oc=AdnnX69VeVVpESRkOqqmaiyOMVzGuzZwPleSDf2598aiJEeyAiTjWGD-b6Z5-r7eV5Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AflEHePfG-QrsX48aY_e3uhqxjo8liam0Jpn6Qqnq7VRhQ&oe=694BD5FC)
- Set the **Behavior** properties on the bat.

  - Select the Bat object from the Hierarchy.
  - Enable **Collidable**. This ensures that the bat can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Ensure that **Interaction** = “Grabbable”.

    ![Interaction equals grabbable](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462602868_564911266046829_5568516108201599638_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=7P_5ICCzgHUQ7kNvwGRNZMo&_nc_oc=AdnUkkboUdL_TbRatrq2HHd4ngftA2APlH9VIwK2NMPFWDkfVEd8rz-jHeAvOCf5YsY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfkyirZs4ZAOYbJx87BNxykO9RtHfdzAIHnNwGZNqsmK5Q&oe=694BD627)

When you run the simulation, the player spawns into the world. You can move the avatar over to the bat, and you can grab it, but you can’t swing it yet. The ball falls down a couple of seconds later.

## Section 3. Create the floor, and setup ball reinitialization

In this section, you’ll create the floor, and then configure collisions with it.

If the player swings at the baseball and misses, the ball simply falls to the floor. But when this happens, the ball should automatically move back to its original starting position, and then fall all over again. You need to add the code to accomplish this.

- Spawn a new cube object into the scene, and rename it “Floor”. Click **Build** > **Shapes** > **Cube**. Your Hierarchy should now look like this:

  ![Rename the cube object floor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462748808_564911242713498_8185972744048961801_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=rXyQAmKhQH0Q7kNvwFbNLkI&_nc_oc=AdkP05chQjSb5B9pAz6BFhr9hhwYvBe2R-rwy5_CQWsDkKFlsp31Cv7LuSgQarEBcX0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Afl3lNSBgjntUXJVehfJB_2MfBxWNvp1mKRpG92KOxHKyA&oe=694BB7E1)
- Change the dimensions of the Floor object so that it covers a relatively wide playing area.

  ![Position and scale the play area](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/472754953_626753169862638_6178594729083770490_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=lT2mgZVYfjkQ7kNvwFlo0RM&_nc_oc=Adlj3xhyYR8oFZ9c1-ACDTq2VLUam9YPcRdCosEpdWDtvg1BzviQVJ4FhadbrqYKs6Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Afm7dbBCyfyx1JzpqKGn5SEjihb8V7OuH6FDeD4OfYhYBQ&oe=694BC6FA)

  ![Your floor should look like this](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462676686_564911212713501_468507077804114298_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=hs08Qtwn0C4Q7kNvwH1wUw2&_nc_oc=Adn7Co3hrSUYBovJKcajXKD8BBPmKXuzRUzwzAra7awlQ_QRr5f1TDxY5OnJ5tsEnVo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfkmbKx7GbckHRIHAgXO5dPuI3CfW4R_1yiwkim7XjXJEQ&oe=694BB4AC)
- Add a **Gameplay Tag** to the Floor object, and name it “floor”.

  ![Name the gameplay tag floor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462608655_564911259380163_1890197524559525651_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=XFtQP6XWUCkQ7kNvwEJuOnl&_nc_oc=AdnbtuaMDLpcjgbWCdoHmhrZUWHtFXaUseSGdhBuSUG6rnRyVP0ZZNhDt40n_G_DtVY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Afmog6hlMWWGEx7zgh1-porw6G5W8kSNuvUgmMOh0LWLUQ&oe=694BD2F7)
- Select the Ball from the Hierarchy.
- Set the following **More** properties on the Ball.

  - Set **Collision Events From** = “Objects Tagged”.

    ![Collision events from objects tagged](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462701412_564911199380169_7425995930029656028_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=GBRpU6eWb5YQ7kNvwF7bDWr&_nc_oc=AdnGVE8NVA-gLYmz5P9BIhCLOq6QCmelFUKc9J0MoEaPl4G8J63QEuvOlX6qFT80Lx8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Afn5Tu0uWLP_xzSu27uL1BuD8BUnFlCXjlqwAgEfyhVf9A&oe=694BE285)
  - Set **Object Tag** = “floor”.

    ![Object tag equals floor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462706481_564911196046836_4280703734366345331_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=uOGme3JlYtEQ7kNvwGL0b-K&_nc_oc=AdnvVFx0buLyFj8h-qXve0M_8Gbq54qAKffIrfKdvS599CG2OSLhbmPrY4gvW26bl00&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Afkt-7838qz0qE_VajGgo7oFdaYSpaZjQh9CgZhR1pQB7Q&oe=694BEABC)
- Create a script to control the Ball’s behavior. The code listens for collisions between the Ball and the Floor. When a collision occurs, the code resets the ball’s position back to its initial starting point, and it resets its velocity back to zero.

  - Click **Scripts** to open the Scripts panel.

    ![The scripts panel opens](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462687098_564911182713504_6689004367218443217_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=nCZw61zrHBkQ7kNvwFUJ0d0&_nc_oc=AdmWDjbRA8lsOoTm_hrmq55Zry4RRs3BTEkh2wqVHeQ2YzwGZ2HrqiAAkhWt0seuV0Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfnsdAFZgxkrqAMVTVYb1362bKx5PtCGP1xXjgKR_NDdow&oe=694BDC73)
  - Create a new script by clicking **Create new script**.
  - Name the script “BallScript”, and then press **Enter**. The script is created.

    ![BallScript appears in your list of scripts](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462671462_564911282713494_2780281265974661818_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ao6HmSVx_qsQ7kNvwF9JPrO&_nc_oc=Adn5PwKPXEXFxUiM_zzjKhIkXzyzKP4Cg2ha5_f2D9E3g3496G-Xnin9W4wjC9fO7k8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AflBt3xJBuY1_oIKIEclm7YknfNeWWcs3TCx5AYLZRHrEQ&oe=694BBE6D)
  - Open the script in VS Code. Click the menu icon to the right of the script name, and then select **Open in External Editor**.

    ![Open the script file in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462690751_564911239380165_8519164833044724963_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=lZPo-zdFqDEQ7kNvwGpmKV4&_nc_oc=Adn-u2w2yTkb9n6jbe3duL1AjTcRrbtlKas43mtY-KxFeu4tG5XvpAv1DaQNzj5aclw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfnVgZCla22yUGJwdsfEuNxTQtEW3Y4vhwdp8KTtqxGeWA&oe=694BB4C5)

    VS Code launches, and opens a new TypeScript code file that contains a default class.

    ![The new typescript file opens in VS Code and it contains some default code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462652837_564911249380164_5111626863521496440_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=bUFhJumylDgQ7kNvwFH4J2x&_nc_oc=AdkE2prN90D8CHILlYB5hVs5fFXIDI0MUbs_xMk6M2nUuwXiGCP5ZpyoCU0D3gROX8o&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Afm85zVDku4cu3g3m-zuY5mippIv9vauL1ThIG8Ia_8h3w&oe=694BD07A)
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

  ![Attach the BallScript to the Ball object](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462704360_564911222713500_3418776293222919275_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=h7I_qNB4UE8Q7kNvwFjGz6j&_nc_oc=Adm8bvap6QeSqzqO4v6uQttjW5u4xdVjyvRL-B7X2Isf1MI4PYL0CtqmtFXfBIjHw9o&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfnZMic9OLh2dEm-4ptP0C45FT11t9e1p-t4_jWP2U-0qg&oe=694BC1B7)
- Preview your new world in the Meta Horizon Worlds desktop editor. Enter Preview mode by clicking Play on the menu bar.

  ![Click the little person icon to enter Preview mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/476463623_647505964454025_8787956898410179165_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=jyyu4xkGxWcQ7kNvwEWAl16&_nc_oc=AdmFSFWFFyjS8wdEHicR-pU_Wz01fEhvcNqD9TFsSHYa_KSX36bgrD4d3iq0TPeJ5Z0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfnRHnL_ZhduaXz2-urhvpLENrTAAa_YWYqosvrRYowYaw&oe=694BE8E1)
- Maneuver the avatar over to the bat using the arrow keys, and then grab it by pressing the “E” key.

  ![This is what you avatar looks like after grabbing the bat](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462694517_564911206046835_4033375668500902553_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=kEQDSNZ0T6sQ7kNvwEbKsxC&_nc_oc=Adk3S3ibKuSXs2Tzq8FjuvrWFfacTGLlVEw7tivju1Bm3QugxGMIE7JWI8u2OLtMuFs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Aflh-PF10rlS1HNHy0Y2KmnPo_rFOmnieWsymW5dQl_TUg&oe=694BE01B)

  You can’t really do much at this point except walk around holding the bat. As you do, the ball continually keeps dropping out of the sky and falling to the floor.
- Exit Preview mode by pressing **Escape** twice.

## Section 4. Setup baseball/bat collision detection

In this section, you’ll configure collision detection.

- Select the Ball object from the Hierarchy.
- Add a **Gameplay Tag** to the Ball object, and name it “ball”.

  ![The Ball object has a Gameplay Tag named ball](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462704007_564911272713495_8171981578080402896_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=QAMTOB2kBwEQ7kNvwH_IzJr&_nc_oc=AdnycVmxt-UkfTRepvAkocIvCqfzFwwBOtNkgMeOyR1rbAMZsmAaoatqFjGR64RJyVk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfkiE1CVwLLiCgUJ90eBhchNeI-rU5v6rUURH3Osed504g&oe=694BDBAF)
- Select the Bat object from the Hierarchy.
- Set the following **More** properties on the Bat object.

  - Set **Collision Events From** = “Objects Tagged”.
  - Set **Object Tag** = “ball”.
- Create a script to control the bat’s behavior. The code listens for collisions between the bat and baseball. When such a collision occurs, the code displays a message pop-up that congratulates the player for successfully hitting the baseball.

  - Click **Scripts** to open the Scripts panel.
  - Create a new script by clicking **Create new script**.
  - Name the script “BatScript”, and then press **Enter**. The new script appears in your scripts list.

    ![You now have two scripts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462718796_564911226046833_3172925499326887543_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=6anpSfHLpRsQ7kNvwFxfd_C&_nc_oc=AdlfO9X-Z1yv8FLfQWKo2Go7ZtFiVPOa-j3qB-2Hf7ht98h2MmkljJ2eyDOjyTZeN2Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfnkYVpN8TKwOeXahguOP4TQx9RP3gikAhCh8p4g4f5v4Q&oe=694BBB5F)
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

    ![Attach the BatScript to the Bat object](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462687051_564911256046830_3831045490394279727_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=IP-gPIfYCRAQ7kNvwG2VxfX&_nc_oc=AdkJTHdmXQLAyy4z8n6iSHZDmWSdUXPhHQGhAay0OINfMMMctI65Kh1uwA8jWpDvVVc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_Afl8fWKIxFDikJYvId1-ivsPemJbtGtvVBJ1qeiU9UiLSg&oe=694BD079)

    When the player swings and hits the ball, they’ll see a cheerful message that congratulates them.

    **Note**: You can’t swing the bat in desktop mode. To be able to swing the bat, you must switch to VR.
  - This step is optional for the Batting Cage tutorial.

    To enable restart of this world, set the ball to its original position by resetting it with a secondary action (the button press) whenever the user wants to do so. To implement this, you can create a scripting event for a [button press](../Mobile%20and%20web/Grabbable%20entities/Action%20Buttons.md#how-to-handle-button-presses) and attach it to a [grabbable entity](../Mobile%20and%20web/Grabbable%20entities/Introduction%20To%20Grabbable%20Entities%20On%20Mobile%20And%20Web.md).

## Section 5. Configure local scripting

In this section, you’ll configure the scripts to run locally.

When the player hits the ball, they take ownership of the entity that the script is attached to. In this case, it’s the Ball object. Transfer of ownership causes script processing to switch from the server to the player’s local device. This improves latency for the player. For more information, see [Ownership in Meta Horizon Worlds](../Scripting/Local%20scripting/Ownership%20in%20Meta%20Horizon%20Worlds.md).

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

  To [play in your world on mobile](../Mobile%20and%20web/Testing%20worlds%20on%20mobile%20and%20web.md#mobile), [publish](../Save,%20optimize,%20and%20publish/Publish%20your%20world.md) the world first. Provide the necessary information in the **Publish World** dialog, which can be opened by navigating to the dropdown menu on the menu bar or by clicking **Publish** on the top right.

  Enter the necessary information such as **Name**, **World Rating**, **Comfort Rating**, and **Tags**.

  * You can name your world something unique other than the default name.
  * If you do not wish your world to be visible to the public, ensure that the toggle for **Visible to Public** is turned off.
  * Ensure that mobile is selected as one of the supported devices.
  * Toggle on **Compatible with Web and Mobile**

  Click **Publish** to publish the world.
- Configure the preview device as mobile

  To preview your world on mobile, select **Mobile** as your preview device by going to [Preview Configuration](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#how-to-set-the-preview-configuration). Click the ellipsis button on the menu bar. In **Preview actions**, send a preview build link to your Meta Horizon app.
- Play it on mobile

  Open the Meta Horizon app on your mobile device, find the build link under **Notifications** to play in your world. For more related information, see [Testing worlds on mobile](../Mobile%20and%20web/Testing%20worlds%20on%20mobile%20and%20web.md#mobile).

## Section 7. Play in your new world in VR

In this section, you’ll see what it’s like to play your game in 3D in Meta Horizon Worlds on your Meta Quest VR headset.

- Grab your Quest headset, strap it on, and turn it on.
- Launch Meta Horizon Worlds on your headset.
- Navigate to the **Create** page. You can get there by clicking the fourth icon from the left on the menu bar at the bottom of the page.

  ![Click this icon to navigate to the Create page](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462602868_564911186046837_388520816768644606_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=6ub7QMc21ccQ7kNvwFLZzDW&_nc_oc=Adn7sfNPEqrJuuP0vrHZp9yi0TKYMEgsHT7atPmpkMiV_Kkef8Evn5l9zwThIphptQc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ax5bQnGXQqvnFq5_3KBwIQ&oh=00_AfmgUAR6T0M-Q9TzwrGQ066egwnJ-x0VoE0TfQHHcfetEA&oe=694BD2B2)
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

- See the [Tutorial worlds](Getting%20started%20with%20tutorial%20worlds/Access%20Tutorial%20Worlds.md) for more tutorials.
- Learn about the desktop editor with the [Introduction to the desktop editor](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools overview](../Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.