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

  ![Select the spawn point gizmo in the hierarchy](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462689916_564911232713499_6993527411397223752_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=JVY4_yRKFt0Q7kNvwFcznhM&_nc_oc=AdkPjm4oG-S63sp-SLiSKu5UpS5471hrKeCfK7JFeCE2wvIHKpUPW5Rk-_iYFtAV_x4dFzc249HNvEpcGulssXh4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_Afk6esSUpOXLmM5YTYsrloQQxwnsmgNqC_xd-mYLvBJgzA&oe=695575D9)
- Focus the camera on the avatar by pressing the “F” key.

  ![Focus the camera on the avatar](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462608481_564911246046831_3937497365964477693_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=3P3xEDX0X90Q7kNvwF8zDO-&_nc_oc=Adl2-o9y_2O1Sl5UfPeaK1JixnGb4qTWsuqvGMng5j20jRqmPDaUOvXkCeJHLNuPgCVPcmJZ7nrATgivVrENiEO4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfkI0LzKqUidcPE7zBkzErzvYQ_T6RmyBRt6Rs_ZOlkUyw&oe=69558B5E)
- Spawn a new cylinder object into the scene, and name it “Bat”. Click **Build** > **Shapes** > **Cylinder**.

  ![Spawn a new cylinder object into the scene](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462701132_564911262713496_1343372135349431875_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=4-O_yYT_i0IQ7kNvwF4sawK&_nc_oc=AdkFUZJGb7-IqDEHg_W8LmyxmgyGqPEbYjJnst2Qo7fzRZBg3WfR-aRC6jlg4oA0hUuF8qOgMuVL5wphJhiZ2YQh&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfnUMZ-V4NstPI37TXV7NHjt0LnusIwFJWPrQDiYOhweyg&oe=69557771)
- Spawn a new sphere object into the scene, and name it “Ball”. Click **Build** > **Shapes** > **Sphere**. Your Hierarchy should now look like this:

  ![Spawn a nhew sphere object into the scene](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462654269_564911229380166_1772788500717622981_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=NEfcxiZS30kQ7kNvwGq8zuV&_nc_oc=AdkG6PIUNYi7JmPWwDBsOR4AtLSDa5dAjo4YwYNqa3mGhNqqrhKkzLlNIE-sEPh2-Lx_KWj-gAa0mrXgh5z8BT69&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfnbXOtf0mMJ-CGqtBbrV4Ru82OatxaIQ5sX9GwS2EZFIg&oe=69557E9D)
- Resize the cylinder to resemble a bat, and place it in front of the spawn point.

  ![Resize the cylinder scale values](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462644158_564911279380161_1594296782694451642_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=GOJmpeeVir0Q7kNvwF9oWmq&_nc_oc=AdkEYw5Lb5I_a6Hpd40l1KKJnfHsoBd_3UqJOuScZw9tx5a49RLQD7BLAy0Wsr097CfLaodMHIwptnCJ-7wbAs1a&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AflX1_Owdx936rgJiIZOtl0ri40SUyi-nGUrP5vaS-g5fA&oe=69556FCE)
- Place the bat in front of the spawn point. To move the bat easily, activate the on-screen Position Manipulator Handles by pressing “W”, and then drag the bat to where you want it.

  ![Place the bat in front of the spawnpoint](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462602432_564911236046832_1495750191451500905_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=YnvYmUJ9QEgQ7kNvwECYXCk&_nc_oc=AdkYIZtBqcPOjbf94M0b_d3iwVkulT6ViW60MiMhP6IGDjdY4fOYcy3caBvIBB1ZgZ1AoZauJMj63XRltqqTwY08&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AflnzWjvwD_uQat8sBX460WMPL8c0J3wUdXlavfFvNk_QQ&oe=695572CE)
- Resize the sphere to make it the approximate size of a baseball.

  ![The resized scale values](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462602083_564911192713503_7226210735996448903_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=FDbOcGj9llgQ7kNvwEQV4WL&_nc_oc=AdmaaRUTkIvQAy0SlOkPbb8c17zoHP3SbMLnyazpBGqq6iH7J0oj9t7lezSS0dGfY-5bRRU65tSJrdT3Yroc7MuI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_Afl6pbyB9-iVaHMzQNlMulgOiMVJvM8_zjw0FUoAXRFK4g&oe=69559034)
- Reposition the ball high in the air, slightly in front of the spawn point.

  ![The ball's new position values](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462683031_564911219380167_3082134887712278052_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=LbibbOZAaWQQ7kNvwFDNtVK&_nc_oc=AdnWhjQiBn46Btx62PpkOwAHP9kSR2SxL7fxgETnJVI3ZYYefxaLrVIGv7DFG7pyt3MgulJV14-JLMD8b9TK-zg4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfkTPFfcxPh1zMQFBVll1DERoHRhDQSRRaAS8ztnw3OUqQ&oe=6955A1C7)

  ![This is what the ball looks like high in the air](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462748814_564911202713502_6576691860851034977_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ktiH92qNdusQ7kNvwFrjF6Z&_nc_oc=AdmwJQCTn8xWKlQrJt32-uu5_TbaSbSF110913d2qyWjWioofR8VnxD82RzoKhkSTe4ot2qVjVf9GMnVOovoiGuS&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfnNBd-_xFQwddTQzPcP990J7r8K_ghqwlSAQShoLvvlQw&oe=69558956)

  You place the baseball up high because it will take time to fall down to the player, and the player needs this time to grab the bat.
- Set the **Behavior** properties on the ball.

  - Select the Ball object from the Hierarchy.
  - Enable **Collidable**. This ensures that the ball can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Set **Interaction** = “Physics”.
  - Enable **Gravity**, and set it to a custom gravity value to make the ball fall slower so it’s easier for the player to hit. For example, try using a value of “-0.20” instead of the default “-9.81” m/s2.

    ![Enable gravity](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462687098_564911276046828_8376701341943687081_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=5n2w9EwwT4sQ7kNvwHBUpvw&_nc_oc=Adl2ux8Xudu27TNpCFKnJR3C9AUKFUnKDOuCPABtFDqJwIFCOndpL4I4Cu1Lzaw32iQ9XpL05aeiSx4s9SK7H_zN&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AflPeGqjm8IGFoVlh9gFqvrlvGJsxyuGZTT7ADruegh0qw&oe=695580FC)
- Set the **Behavior** properties on the bat.

  - Select the Bat object from the Hierarchy.
  - Enable **Collidable**. This ensures that the bat can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Ensure that **Interaction** = “Grabbable”.

    ![Interaction equals grabbable](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462602868_564911266046829_5568516108201599638_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=-NZ5ouvhHHkQ7kNvwG9os26&_nc_oc=AdnzwPfdnhT442UdVzgOkBQ-Dqay4t3XugBLfWgreywdgX3W1dwoifdEUawG5PbL-dJCotzchBLNOAghIrRd7pbB&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfkelhNuUUmrxW49EEwTDiWuQO9rQfC4SISfHEPr1VbkfQ&oe=69558127)

When you run the simulation, the player spawns into the world. You can move the avatar over to the bat, and you can grab it, but you can’t swing it yet. The ball falls down a couple of seconds later.

## Section 3. Create the floor, and setup ball reinitialization

In this section, you’ll create the floor, and then configure collisions with it.

If the player swings at the baseball and misses, the ball simply falls to the floor. But when this happens, the ball should automatically move back to its original starting position, and then fall all over again. You need to add the code to accomplish this.

- Spawn a new cube object into the scene, and rename it “Floor”. Click **Build** > **Shapes** > **Cube**. Your Hierarchy should now look like this:

  ![Rename the cube object floor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462748808_564911242713498_8185972744048961801_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=xeywlMhLURQQ7kNvwErzeW9&_nc_oc=AdmVnKEyvOpiVB837Gco7ia-tS7SN33mNKlCZ5Dez6CqRv5bIvSkJPEMvKpku0WGCrSXc1_Pk1Gg0AFFSlT7SyhN&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AflUYov_rDe45LCxApxunLNRZX9bL97FPZPrmCgIf7B-Hg&oe=69559B21)
- Change the dimensions of the Floor object so that it covers a relatively wide playing area.

  ![Position and scale the play area](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/472754953_626753169862638_6178594729083770490_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=gXHdTH2-gpgQ7kNvwEzz6io&_nc_oc=Adm9ADIgiyRQOAAFzRIGJbx3eUjbPnauE6MUZYiAySV9d4gCBZEcRrgRkFOpbr6R1MZD2eav4FlUxxrgGnZbyBuj&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfkyD2Bba9VRz9CcufBPl5gqLrgDABE008OuTDkEulE7Vg&oe=695571FA)

  ![Your floor should look like this](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462676686_564911212713501_468507077804114298_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=96wrYw0_giIQ7kNvwHuJI_3&_nc_oc=Adl50lXVY_mjlQnIzMBPDTzA75gqHGk-M0kFESRWesLu7uyqohbxiIkZa5prllESimKPs8vi_1XrkP0itxy5XgWZ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_Afm5YyIUUdT2XfWx2pvWgmHR8KzjoIelpnsR8Jgd6v6T1w&oe=695597EC)
- Add a **Gameplay Tag** to the Floor object, and name it “floor”.

  ![Name the gameplay tag floor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462608655_564911259380163_1890197524559525651_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=hevUaOCKNNoQ7kNvwFuX41_&_nc_oc=Adm1eQR-uZ3pVhooIJnul8veEcVW3tf-sPEflkK6P9RejFwys2fcm0LMEBbfE4kdpDCz3_k7zaxp-YtFFSR72WlK&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfnH0yP8kb7Qsp8oFFFc8h_r48mfp224-grZ3iIL3zjPsQ&oe=69557DF7)
- Select the Ball from the Hierarchy.
- Set the following **More** properties on the Ball.

  - Set **Collision Events From** = “Objects Tagged”.

    ![Collision events from objects tagged](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462701412_564911199380169_7425995930029656028_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=MmH3T9i0W0wQ7kNvwGwiRIL&_nc_oc=AdllTynEzI4zRgsYU1SAOufiZ-iTVcEslG1p_4ClsZ8q_etU-XXJ3oyyH4Q7jc1UTTwVKETJki30hHhw69LDz1Wd&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_Afki6YuuaJhaCzTSGDUyHMj7EaUs764-G7H8uw4p-5hYCw&oe=69558D85)
  - Set **Object Tag** = “floor”.

    ![Object tag equals floor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462706481_564911196046836_4280703734366345331_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=M9N5eXC9rLMQ7kNvwHKDAfy&_nc_oc=AdnEPOylLF8WTZOKLS32CXqFuKAlAS1_besjd01JgJi_BQeql_MYoI216Vjxc5D2VBCIWy3Fp8628WgbzCxwpd4P&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_Afm1sRbFZxDfJdzst4k8h0evuyIPN5cHH9qa21EYpZ1Irw&oe=695595BC)
- Create a script to control the Ball’s behavior. The code listens for collisions between the Ball and the Floor. When a collision occurs, the code resets the ball’s position back to its initial starting point, and it resets its velocity back to zero.

  - Click **Scripts** to open the Scripts panel.

    ![The scripts panel opens](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462687098_564911182713504_6689004367218443217_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=V_HiT-jCbJ4Q7kNvwEsqHOx&_nc_oc=Admt1UhrmapMM0KT-VImQLw78vTHm9hxSgHP_qkdcLQtPhUng58gr8xzWnwzNCNACam9uNIpmJ2F7TN2efSYcYYn&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfnSTYf7Gx6BHgn5BQ5S09hcx88rVITA-VlNyyhQf2-h_Q&oe=69558773)
  - Create a new script by clicking **Create new script**.
  - Name the script “BallScript”, and then press **Enter**. The script is created.

    ![BallScript appears in your list of scripts](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462671462_564911282713494_2780281265974661818_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=EbHvqzr3f7UQ7kNvwHhh-1P&_nc_oc=Adnwm3rYk4ODDPnUSRH7Cc_JsQH0avzu5Rd139BzUbgizXP0BbplRmeBM9l5CpxzcwMNP8LtIFduQ7LbXREkrIh9&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfnuOtcKfy1RpRohC-_Lnpw6u3wP0pui2cPVTf9Jzgii8g&oe=6955A1AD)
  - Open the script in VS Code. Click the menu icon to the right of the script name, and then select **Open in External Editor**.

    ![Open the script file in VS Code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462690751_564911239380165_8519164833044724963_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=VDQQFJAsfEsQ7kNvwGJgc7R&_nc_oc=AdmAoBnXtdrytiwCTUu_AX8KNQrC17sX28p3LcAXifFr-c446Cj4dwwxvvGGHyJiIokXm2qG1eXSVfO1Et8WbnE6&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_Afk0rmXWf5Ta6p3aKfHxw5pZT6LxcfCWdgH4yxU1RIN-kQ&oe=69559805)

    VS Code launches, and opens a new TypeScript code file that contains a default class.

    ![The new typescript file opens in VS Code and it contains some default code](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462652837_564911249380164_5111626863521496440_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=yWEWU8OY7BMQ7kNvwFDJCuL&_nc_oc=AdkIuFZukxPfRv6CEJPDyHvcvD-twYOOma86nBnGlTkiA8QUZWjvOkhGO4fIVOjVWyXUgmvsninfS0GxFbJRBLeT&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfmVRNj67deXZYsjIZkIb-LDIT7YKS9RlQ1u0k-4JQgleA&oe=69557B7A)
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

  ![Attach the BallScript to the Ball object](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462704360_564911222713500_3418776293222919275_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=jlPGEuLYKFkQ7kNvwGILl9u&_nc_oc=AdnWPHSgoS0_4sDDQCDH8cTZaapKzWUFW05XXVF5dnno44oRnUhqO5nJxY3BUPpCawAKvl_8jb0j9UsCNUOHiEvt&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AflB9zTY5NG4qQCFqFJpcPPRlWorRgA537jkv1wwLNaZjg&oe=69556CB7)
- Preview your new world in the Meta Horizon Worlds desktop editor. Enter Preview mode by clicking Play on the menu bar.

  ![Click the little person icon to enter Preview mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/476463623_647505964454025_8787956898410179165_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=u_ShNy-gOVIQ7kNvwGI4AOG&_nc_oc=AdmA2nbNmSib8bG4NaZOw9Jv1rZ6lfOZ0Fu7YFbbrIof1o3PmpDD33u9EwkPRhU1nmKZzlzIp4AC452sJpuf435v&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_Aflp56AUdMVCQA88xgNqhFV78KHp2DHQ6iFFn-aUDtvIWA&oe=695593E1)
- Maneuver the avatar over to the bat using the arrow keys, and then grab it by pressing the “E” key.

  ![This is what you avatar looks like after grabbing the bat](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462694517_564911206046835_4033375668500902553_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=hJ966iqbBycQ7kNvwFxA86s&_nc_oc=AdkoVdH1W74nPOxaKy6inUl2QZD-vcZjImru7gPj87zfE2gbwaZ3WM5M_w42Yrg5nqWakv-s72GKVeVZSiysl5ri&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfkC_yANbYizQBkvZxyn_-G-wUCppLqK3LGx3rj1y24_6w&oe=69558B1B)

  You can’t really do much at this point except walk around holding the bat. As you do, the ball continually keeps dropping out of the sky and falling to the floor.
- Exit Preview mode by pressing **Escape** twice.

## Section 4. Setup baseball/bat collision detection

In this section, you’ll configure collision detection.

- Select the Ball object from the Hierarchy.
- Add a **Gameplay Tag** to the Ball object, and name it “ball”.

  ![The Ball object has a Gameplay Tag named ball](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462704007_564911272713495_8171981578080402896_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=-sYenczxe7IQ7kNvwF9M-cU&_nc_oc=Adm8n9uXx6XikHt3uG5GC30EZW2MNE4QON6_iR1Ov72EYxthzK8tre929RvhSvNLofdmfDre3ctkRcQtnS7-F_c8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_Afnb0PX28stt9LSzFfufn4rjsQAkiFRAJ2mG9OnNRJOvSA&oe=695586AF)
- Select the Bat object from the Hierarchy.
- Set the following **More** properties on the Bat object.

  - Set **Collision Events From** = “Objects Tagged”.
  - Set **Object Tag** = “ball”.
- Create a script to control the bat’s behavior. The code listens for collisions between the bat and baseball. When such a collision occurs, the code displays a message pop-up that congratulates the player for successfully hitting the baseball.

  - Click **Scripts** to open the Scripts panel.
  - Create a new script by clicking **Create new script**.
  - Name the script “BatScript”, and then press **Enter**. The new script appears in your scripts list.

    ![You now have two scripts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/462718796_564911226046833_3172925499326887543_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=NeGRgSrsQyoQ7kNvwH_T0K3&_nc_oc=AdmjRfkR0vBXrFJ_Gk9sDAc7B3jOErQzfj6_6x2arFJvcNVI4UojkR6H7VT4vn990atSs_oWCj9N6n-QvgepiRBc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfkbaVnsecTku_OJaQ9xMtnN4KYsRTLMPRGzE2xyAlAQ9g&oe=69559E9F)
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

    ![Attach the BatScript to the Bat object](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462687051_564911256046830_3831045490394279727_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=p6975FucWW8Q7kNvwE09uTT&_nc_oc=AdnVKBIhIlg-eQiCbfo4jaPP5_fkpIY5BaY7H2fEfpIocUR5N8n7o5grilEhVEEZtEvBLuHMyfSI4IokSqzavfMj&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AflFqu8hDP98j9bMvRDNxvTWE6H-KzwNrldG9uP1LeCa1A&oe=69557B79)

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

  ![Click this icon to navigate to the Create page](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462602868_564911186046837_388520816768644606_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=APPEhygqjUsQ7kNvwH0JOMw&_nc_oc=Adlqh8dzL6IOgADDfKIKvg8s8lQoaY4ugP3IUh73_I0bJT753sqivGE_ZEtw5OcPdCp0jhq7nPXPtA8Pu2l91yx1&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sflKW7KZ3bDlTQnItdkKjg&oh=00_AfmKynX22BYYk_UYmMMPAB9JHBkm4-WDwJJcmPVRsG5Daw&oe=69557DB2)
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

- See the [Tutorial worlds](Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md) for more tutorials.
- Learn about the desktop editor with the [Introduction to the desktop editor](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools overview](../Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.