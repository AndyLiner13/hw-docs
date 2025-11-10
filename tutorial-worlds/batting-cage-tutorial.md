Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/batting-cage-tutorial

# Adding and manipulating objects tutorial

In this tutorial, you’ll learn how to create a simple Meta Horizon Worlds game. The tutorial shows you how to create a world, add assets to it, write scripts to attach to entities to create behavior, and try going to the world on a mobile device and in virtual reality.

The key learning objectives are the following:

* Writing TypeScript code
* Setting entity ownership
* Handling object collisions
* Trying the world on mobile and in virtual reality

## Prerequisites

This tutorial requires you to use the Meta Horizon Worlds desktop editor. See [Install and run the desktop editor](/horizon-worlds/learn/documentation/get-started/install-desktop-editor) for instructions.

## Section 1: Create a new world

In this section, [create a new world](/horizon-worlds/learn/documentation/desktop-editor/getting-started/creating-a-new-world) for your game.

**Note**: When you’re building your world, Meta Horizon Worlds automatically saves your progress and it’s part of your online save flow.

## Section 2. Create an avatar, a bat, and a ball

In this section, you’ll spawn an avatar into your world, and then you’ll add a baseball bat and a baseball to your world.

- Select the **SpawnPoint** gizmo in the Hierarchy. This is the avatar.

  ![Select the spawn point gizmo in the hierarchy](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462689916_564911232713499_6993527411397223752_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=MT5CcL70bFoQ7kNvwH9tHYJ&_nc_oc=Adlvn8G32DtBWEgA48lcgVEttdgfN0i4rqk10VacnYXArdNdizZb0Xk-tg2jT_BC2kA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afg6e1xNKcTOeIMUPd9F2dFHueuiNQrPPU3HulYcr-sxbw&oe=692BEE99)
- Focus the camera on the avatar by pressing the “F” key.

  ![Focus the camera on the avatar](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462608481_564911246046831_3937497365964477693_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=LcLPvaA-J70Q7kNvwGlwEUk&_nc_oc=AdlHadfNPSguoqqnx8M-EyMkq57lvvX03pCo1LXG8qXE2S7QKjSzHs9gNLEUpEJJF04&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfhvAst261v5UqPQ1iKG1KFhAw_r4HssK7S9Lyg6gbqLew&oe=692C041E)
- Spawn a new cylinder object into the scene, and name it “Bat”. Click **Build** > **Shapes** > **Cylinder**.

  ![Spawn a new cylinder object into the scene](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462701132_564911262713496_1343372135349431875_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Zn5tO2mogoIQ7kNvwGe1B4z&_nc_oc=AdlB3Z-tlqkfbCWlZNn6RzAqYuXuQqp1RzsO9Z6D3N9W15eOYZfy3vzNSLm2PTO87T0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afhr0uBnJigvuRN-ufHz7D59oPrARAV0vJ0XDoMeUURw6w&oe=692BF031)
- Spawn a new sphere object into the scene, and name it “Ball”. Click **Build** > **Shapes** > **Sphere**. Your Hierarchy should now look like this:

  ![Spawn a nhew sphere object into the scene](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462654269_564911229380166_1772788500717622981_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=U2QuB1UMcCUQ7kNvwFx6NrV&_nc_oc=AdnIh7vLEsFZ2DkT0KJV1BKTqTYClsID5nyXEJiRTTb5EZMzJkdgqdi266YEYglqeEU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afjwg-DsoVI8tll8yMdq05VuVTHw1iLZeWtlglyWvWJ1HQ&oe=692BF75D)
- Resize the cylinder to resemble a bat, and place it in front of the spawn point.

  ![Resize the cylinder scale values](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462644158_564911279380161_1594296782694451642_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Bf_ocNaWvZwQ7kNvwGvG1ip&_nc_oc=AdkZJl0Rva3735IOGe8xuv9tCa8awcx3q6zYueO6FsHPyngJYkJVbjnDuHKlW2_3Pf8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfgiK_ygl1qhTh0B1mB3O9dT_VZY4Gnj756btjqrFLilEQ&oe=692BE88E)
- Place the bat in front of the spawn point. To move the bat easily, activate the on-screen Position Manipulator Handles by pressing “W”, and then drag the bat to where you want it.

  ![Place the bat in front of the spawnpoint](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462602432_564911236046832_1495750191451500905_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=vX-fZJ5Jp5MQ7kNvwF18oYx&_nc_oc=AdkoOYOQa7WTdQrMnWMVXhPO15v2cj5a09iKwapoDZtMYtDqf9ke68hme9uVGvDb4b4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afgh_kai5C0S_NK25J5R38fFUdCvfq0IXJ2OSGq0oFRtZA&oe=692BEB8E)
- Resize the sphere to make it the approximate size of a baseball.

  ![The resized scale values](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462602083_564911192713503_7226210735996448903_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=rU539in9wm0Q7kNvwFnx33Q&_nc_oc=AdlWCBHhCq28s7wYC6XViDcbuCZSGZzOaQipFQjboMUTH2eYlnZ8HcRfXD36N_jcAuw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfjGO_6-kBjMiwK2jm4UViFUHbsb0i-9WtTVe1UN4YX_XQ&oe=692C08F4)
- Reposition the ball high in the air, slightly in front of the spawn point.

  ![The ball's new position values](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462683031_564911219380167_3082134887712278052_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=tMd3PC6JwDoQ7kNvwEZ8eG_&_nc_oc=Adm9wJvISXmQLJO6-2s4ifjx9TP3cUDoUkA3JBoC5Qf2QKsZptbGcNEBuWduS585itE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfipSEkujlier4kEIXDzeoYHy1-LLjB1Xxrtv9tFPD5x0g&oe=692BE247)

  ![This is what the ball looks like high in the air](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462748814_564911202713502_6576691860851034977_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=dO3hLyaiFS8Q7kNvwFVZrfp&_nc_oc=AdmfsdDRsogkm3mReHagxRrA6hLEnEtyzPp_Dg1AIhN5siWsXACJG_hbWSLwyRZSUp4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfhK2JJW9qM6EDEpUR_kGDKpeYjVFtrUE-MehPipUzTWbg&oe=692C0216)

  You place the baseball up high because it will take time to fall down to the player, and the player needs this time to grab the bat.
- Set the **Behavior** properties on the ball.

  - Select the Ball object from the Hierarchy.
  - Enable **Collidable**. This ensures that the ball can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Set **Interaction** = “Physics”.
  - Enable **Gravity**, and set it to a custom gravity value to make the ball fall slower so it’s easier for the player to hit. For example, try using a value of “-0.20” instead of the default “-9.81” m/s2.

    ![Enable gravity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462687098_564911276046828_8376701341943687081_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=M3gdCtICmLYQ7kNvwFMqqd6&_nc_oc=AdldL910S2ErMN9iuRNt2qnWtCtHdjKnER7fAPTeHTYqPwe0zHftFsUXk0iwY_cjwwY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfgFI6jin5Fa4IEpeKcfbmPCuHsPHYyu64dMuRj3P4buPQ&oe=692BF9BC)
- Set the **Behavior** properties on the bat.

  - Select the Bat object from the Hierarchy.
  - Enable **Collidable**. This ensures that the bat can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Ensure that **Interaction** = “Grabbable”.

    ![Interaction equals grabbable](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462602868_564911266046829_5568516108201599638_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=4yGRevJAXiUQ7kNvwEqDuya&_nc_oc=AdnMwgO7rbK859U4SR4HLvvIW4JE9er5NxfdKCWdCaXjxEnsnwszXG1RgcdgGKnhq2s&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afjkm84zPwDgAKrZgGbUOWzH2Azd17oiPqWDA4As5IiiGQ&oe=692BF9E7)

When you run the simulation, the player spawns into the world. You can move the avatar over to the bat, and you can grab it, but you can’t swing it yet. The ball falls down a couple of seconds later.

## Section 3. Create the floor, and setup ball reinitialization

In this section, you’ll create the floor, and then configure collisions with it.

If the player swings at the baseball and misses, the ball simply falls to the floor. But when this happens, the ball should automatically move back to its original starting position, and then fall all over again. You need to add the code to accomplish this.

- Spawn a new cube object into the scene, and rename it “Floor”. Click **Build** > **Shapes** > **Cube**. Your Hierarchy should now look like this:

  ![Rename the cube object floor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462748808_564911242713498_8185972744048961801_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=HO15EjBAok8Q7kNvwFCfiF9&_nc_oc=AdmMxflMGBQJV3GMuz1oQ-0k8X5MEiAqhI7W1iSLPB1Ry-iLVlj7ypwPfIwr_oGA9hg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfjGWswWR1FIbiJPMcV1AXZAine5-utTyfC0pFJ0D_sbPA&oe=692BDBA1)
- Change the dimensions of the Floor object so that it covers a relatively wide playing area.

  ![Position and scale the play area](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/472754953_626753169862638_6178594729083770490_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=zqF1Gr9Bvy4Q7kNvwFQf366&_nc_oc=Adl6vLHfkXe9laRo_Ev0zIAIoPEJ78f7oJXmmbBSoMFdpsuUjc1FqbzLcG_uVR1oq4Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfjYecDK_LP-RO7pCTCwIJNMGF9l93JmNJ3zG5RyPIWIHg&oe=692BEABA)

  ![Your floor should look like this](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462676686_564911212713501_468507077804114298_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=xPqA4PLe1fYQ7kNvwHeodJP&_nc_oc=AdlFfBJOu6JKvqUA1j56ZtnzwFjk078KUOZRfRrrX5mTn8w1ZsPTqSYvfssTxjWfI3A&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfiV6s5OSteMbsKZmNAUMeIbWQdUK_6UPu6sHod5eEtwyg&oe=692BD86C)
- Add a **Gameplay Tag** to the Floor object, and name it “floor”.

  ![Name the gameplay tag floor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462608655_564911259380163_1890197524559525651_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=uXI1-R_xSo0Q7kNvwFAZ0Mi&_nc_oc=Adn4vsiC7yRYPgo21u10OUjl3Suaz7zZHeFA4igts7lCsjHiCgiaOBeWj5deWduvNMs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afhu7rvKRc0pXhsJssd1CVOB_9Hws3nyEUnWKk83ub4MTA&oe=692BF6B7)
- Select the Ball from the Hierarchy.
- Set the following **More** properties on the Ball.

  - Set **Collision Events From** = “Objects Tagged”.

    ![Collision events from objects tagged](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462701412_564911199380169_7425995930029656028_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=l8QlOTAktHgQ7kNvwEQnRNm&_nc_oc=Adn6CrjL29XDmwnnm3AI9WdtTrvNvILBfZ_Rs4YynlYQnKBmQKjNyEfZq6fBuje3pJs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfgShmdNOA9yMi8DKMQsoLPMe7G4m0pOrru6E9cEkH3_mg&oe=692C0645)
  - Set **Object Tag** = “floor”.

    ![Object tag equals floor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462706481_564911196046836_4280703734366345331_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=jmU0lWxV2HcQ7kNvwFu9e4C&_nc_oc=Adl5zI_lfbbJ0EqQgt96KI5-aeXNeLWyMMvZk7ypyCX6roOBp5j-Lr3RPYNllcGdQRI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afg0wfInsAeRHLEnyPYU8dUnfg0l2Gn8dk2bXMJc7TbdsQ&oe=692C0E7C)
- Create a script to control the Ball’s behavior. The code listens for collisions between the Ball and the Floor. When a collision occurs, the code resets the ball’s position back to its initial starting point, and it resets its velocity back to zero.

  - Click **Scripts** to open the Scripts panel.

    ![The scripts panel opens](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462687098_564911182713504_6689004367218443217_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=YJ7pI7t5f44Q7kNvwFE32ix&_nc_oc=AdlBV4n_LWmzPVVayZyIl-QMqoT4TMwL64UHAMwi_ELNFf96ngibFwuQD2lgoxVU0eM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfhlpVbsw4G-QoVLi14x1O3yaLrE2bzAXsIMSAz7GHGAlA&oe=692C0033)
  - Create a new script by clicking **Create new script**.
  - Name the script “BallScript”, and then press **Enter**. The script is created.

    ![BallScript appears in your list of scripts](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462671462_564911282713494_2780281265974661818_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=4u1O0pukzCEQ7kNvwFaJ6Rz&_nc_oc=AdkR_er8ZqGz6jdXhgOdk9UCko0EwLKAq4LOBhdOXlV5pXk6tudQPWmqlsss20vYgTQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfgpTMWmP_LnMTC8CNcTXAeNNn6Ajo4sSUoEdcqRfE0edw&oe=692BE22D)
  - Open the script in VS Code. Click the menu icon to the right of the script name, and then select **Open in External Editor**.

    ![Open the script file in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462690751_564911239380165_8519164833044724963_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=h4YWll51QNYQ7kNvwFNc2wK&_nc_oc=AdlgXZAIuwDWauY9gEEmiv10Q_yPCGJdWBqO8ASCNnnc0qT6U59B3hjXKeYnijR_7Ik&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfgIoeqDgfUv0Cpo_EbNdxr8U4B1voh-Cig7GtaGNfvVcQ&oe=692BD885)

    VS Code launches, and opens a new TypeScript code file that contains a default class.

    ![The new typescript file opens in VS Code and it contains some default code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462652837_564911249380164_5111626863521496440_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=V54KdJcHhmkQ7kNvwG5GL7B&_nc_oc=AdkIaZl3XIUz2ZelvrWHAOQ1itK0PMwFIcsu_WbyM9ydn2__rscjP3gjmVbpuhOMvVc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfheMtTop7TNdM4_aSZImuLeYyVqDAnn3PhFK04hvz2_xA&oe=692BF43A)
  - Copy the following code snippet, and paste it on top of the default code in VS Code, and then save it.

    ```vs
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

  ![Attach the BallScript to the Ball object](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462704360_564911222713500_3418776293222919275_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=YVyEi75B37oQ7kNvwGRxdaC&_nc_oc=AdkHNehDCbwL1vDlSeCVgKE1AZK4Fh9vO69hE_T2qCHEM2uqR4E1eo_69G5VA2Fx3S8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfiaForIQIMNETM0SXhiscSh7DO40K8AG0csV3IMqAHkRQ&oe=692BE577)
- Preview your new world in the Meta Horizon Worlds desktop editor. Enter Preview mode by clicking Play on the menu bar.

  ![Click the little person icon to enter Preview mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/476463623_647505964454025_8787956898410179165_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=kHCIPEk3OqkQ7kNvwFmdiLa&_nc_oc=AdnhJFmgSUVa3RMJfZz7YvOSyRNl2RU3TS05U8ji29FdeGr12Rm3KxN94c8qyrZ_2wY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afjm9c_fT6zqKcGfEmMRcjQu3rOs5AmiV29WhFmB33RusQ&oe=692C0CA1)
- Maneuver the avatar over to the bat using the arrow keys, and then grab it by pressing the “E” key.

  ![This is what you avatar looks like after grabbing the bat](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462694517_564911206046835_4033375668500902553_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=z5ygmTtI2RkQ7kNvwF3E44t&_nc_oc=AdkkZWAb0s3Vbr0rxBRST8GzIrm9kO-Z0idSg_Tsmk4R1zlvDReMJTJRQT2Pnl5NFbU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afj289fSruW1EJWnJGmphWlDJNQAJi2whIf7TgkWASKSPw&oe=692C03DB)

  You can’t really do much at this point except walk around holding the bat. As you do, the ball continually keeps dropping out of the sky and falling to the floor.
- Exit Preview mode by pressing **Escape** twice.

## Section 4. Setup baseball/bat collision detection

In this section, you’ll configure collision detection.

- Select the Ball object from the Hierarchy.
- Add a **Gameplay Tag** to the Ball object, and name it “ball”.

  ![The Ball object has a Gameplay Tag named ball](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462704007_564911272713495_8171981578080402896_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=X9LevuITBGUQ7kNvwEj1WHv&_nc_oc=Adk_4BK1xv6Amva87Sk0h37kQZX60fw9J2C2Zipi3vP149OVmjkYwokP0yoBSA3GAnU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfjHLjdRsgK6XY2Tmf_yTtXDt_gcAII3OI6n7LKViHHeIQ&oe=692BFF6F)
- Select the Bat object from the Hierarchy.
- Set the following **More** properties on the Bat object.

  - Set **Collision Events From** = “Objects Tagged”.
  - Set **Object Tag** = “ball”.
- Create a script to control the bat’s behavior. The code listens for collisions between the bat and baseball. When such a collision occurs, the code displays a message pop-up that congratulates the player for successfully hitting the baseball.

  - Click **Scripts** to open the Scripts panel.
  - Create a new script by clicking **Create new script**.
  - Name the script “BatScript”, and then press **Enter**. The new script appears in your scripts list.

    ![You now have two scripts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462718796_564911226046833_3172925499326887543_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Vprd8DcMgVUQ7kNvwFMN2Uw&_nc_oc=AdlH0d9i-KgId9AW4YKFAmsBPeYKOCEfuvUrgf3UcxcP5_c651vLuPLa18Rac61fE3Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_AfgeNcMAymzgPVzmWJGGMY-YbmtjRfxicmqxDSnNYECDsA&oe=692BDF1F)
  - Open the script in VS Code by clicking the menu icon next to the script name, and then selecting **Open in External Editor**.
  - Copy the following code snippet, and paste it on top of the default code, and then save it.

    ```vs
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

    ![Attach the BatScript to the Bat object](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462687051_564911256046830_3831045490394279727_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=kBDY5tnYWGsQ7kNvwG0Rms5&_nc_oc=AdkXOC78lli24RRGbKpyM4RssBQoocrzNvqg3xc6E3K0MJhyzTGQPpRYrQyP3EQXfe0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afih_PlMlYV83G3T9e67bJ0fUI7zIUFf1YvNH7PiK-7Wgw&oe=692BF439)

    When the player swings and hits the ball, they’ll see a cheerful message that congratulates them.

    **Note**: You can’t swing the bat in desktop mode. To be able to swing the bat, you must switch to VR.
  - This step is optional for the Batting Cage tutorial.

    To enable restart of this world, set the ball to its original position by resetting it with a secondary action (the button press) whenever the user wants to do so. To implement this, you can create a scripting event for a [button press](/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/action-buttons/#how-to-handle-button-presses) and attach it to a [grabbable entity](/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/intro-to-grabbable-entities/).

## Section 5. Configure local scripting

In this section, you’ll configure the scripts to run locally.

When the player hits the ball, they take ownership of the entity that the script is attached to. In this case, it’s the Ball object. Transfer of ownership causes script processing to switch from the server to the player’s local device. This improves latency for the player. For more information, see [Ownership in Meta Horizon Worlds](/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds).

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

    ```vs
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

  ```vs
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

  To [play in your world on mobile](/horizon-worlds/learn/documentation/create-for-web-and-mobile/how-to-test-on-web-and-mobile#mobile), [publish](/horizon-worlds/learn/documentation/save-optimize-and-publish/publish-your-world) the world first. Provide the necessary information in the **Publish World** dialog, which can be opened by navigating to the dropdown menu on the menu bar or by clicking **Publish** on the top right.

  Enter the necessary information such as **Name**, **World Rating**, **Comfort Rating**, and **Tags**.

  * You can name your world something unique other than the default name.
  * If you do not wish your world to be visible to the public, ensure that the toggle for **Visible to Public** is turned off.
  * Ensure that mobile is selected as one of the supported devices.
  * Toggle on **Compatible with Web and Mobile**

  Click **Publish** to publish the world.
- Configure the preview device as mobile

  To preview your world on mobile, select **Mobile** as your preview device by going to [Preview Configuration](/horizon-worlds/learn/documentation/desktop-editor/getting-started/preview-mode#how-to-set-the-preview-configuration). Click the ellipsis button on the menu bar. In **Preview actions**, send a preview build link to your Meta Horizon app.
- Play it on mobile

  Open the Meta Horizon app on your mobile device, find the build link under **Notifications** to play in your world. For more related information, see [Testing worlds on mobile](/horizon-worlds/learn/documentation/create-for-web-and-mobile/how-to-test-on-web-and-mobile#mobile).

## Section 7. Play in your new world in VR

In this section, you’ll see what it’s like to play your game in 3D in Meta Horizon Worlds on your Meta Quest VR headset.

- Grab your Quest headset, strap it on, and turn it on.
- Launch Meta Horizon Worlds on your headset.
- Navigate to the **Create** page. You can get there by clicking the fourth icon from the left on the menu bar at the bottom of the page.

  ![Click this icon to navigate to the Create page](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462602868_564911186046837_388520816768644606_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=3mvsucEyrpAQ7kNvwGzaBBA&_nc_oc=Adn0MNMcewZvjR1xtwOuMR0f4i-c0mQyxTa8mvOLkJ0_y9o5IzEXhu3_vvzYxdlSPpE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8vDissFaJyhGk3kl5gvjuw&oh=00_Afgq_pQO0zhnj4AKsYk0OhgOjzvZ6FzO-sbLTMwgKQsEzQ&oe=692BF672)
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

- See the [Tutorial worlds](/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds) for more tutorials.
- Learn about the desktop editor with the [Introduction to the desktop editor](/horizon-worlds/learn/documentation/desktop-editor/getting-started/introduction-to-desktop-editor).
- Learn about the other tools available by reading our [Tools overview](/horizon-worlds/learn/documentation/get-started/tools-overview).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.