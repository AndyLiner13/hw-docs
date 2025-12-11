Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/physics-best-practices

# Physics best practices

## Collidable objects

Collidable objects in the world require physics processing to determine if something is interacting with them. Optimize physics processing by disabling colliders on any objects that aren’t interacted with or are outside the game play areas. In manual traces, large numbers of colliders will be reflected in Physics.Simulate times. If you have access to developer builds of Meta Horizon Worlds, the number of colliders in the world will be broken out in the Physics::Overlaps # trace. As a rule of thumb, the number of overlaps should be kept below 400.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452877335_512527657951857_3801136528294471333_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=vb4G2iEcc4oQ7kNvwFdYHST&_nc_oc=AdkRvzJx24sF250xLgoafV3lpjLlWa0nZNyBF15W8-yqlcET3-A80-Omld9ca_Wb5aIzLjdoz4iFbCIpmq2KVfIg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CsHYg008CQ8eeHv05dfKMQ&oh=00_AfnyT7EnIRmim9r9x6CUc7SSW1Pfmsb5NqhRD011whI5cg&oe=695581D9)

*UpdateRunner::PrePhysicsUpdate and UpdateRunner::Physics.Simulate in high collider world*

To view colliders in the world, toggle **Collision** in the **Utilities** menu. This highlights all collidable objects in the world with an orange tint.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452946039_512527631285193_2371780646691338084_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=zPTuzGN8aOgQ7kNvwFk42LK&_nc_oc=AdmYlNs1-dYIZEG1Fx-6epk5L1y-1soZSoUnnTw-y6FqeDI2oa_yOSSUE_cVoTRClZq4tiGXtslBy_Ugrxv_D6Mp&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=CsHYg008CQ8eeHv05dfKMQ&oh=00_AfnlHdvRKsvO4TKPJKffPVagJDQyyIIIDyXWXq1SBB9lUg&oe=69558BFD)

*Collision in the Utilities menu*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452756686_512527627951860_2329805199404162916_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=epfx5sPwYFMQ7kNvwHxJXeh&_nc_oc=AdnmBQ8kLivaf1GqjpU4sBscANgZJFikzxWNu9PpEWeVvUwaMTtvLfqdDf03oxJ8ZYQF8cDhG-mWMgYGPXUC426g&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=CsHYg008CQ8eeHv05dfKMQ&oh=00_Afn6_X2g8KdOUpfyenba2lTefNC9RN7rg0pSyoNxgmCSWw&oe=69557101)

*Collision off*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452753829_512527634618526_2579740434491253389_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=9rULMwHlqGUQ7kNvwG0b3M5&_nc_oc=AdkHV6h5utSI6PJie1Cnn-5M_WmWKPL_KChfd76U4pdLtJVAl7VGBKLS33VYUCjda-P6b4_hmVJNccUYrnRdq1qX&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CsHYg008CQ8eeHv05dfKMQ&oh=00_AfkfqKisDAwnA6zFFHOwBRCn_qmNbFZ_0IkjR4EJ4vI_Tw&oe=6955808C)

*Collision on*

With highly detailed objects in play, disable the detailed colliders, then wrap the detailed object in a primitive collider such as a cube (best), sphere, or capsule collider. This only requires one physics test for collision and usually results in no loss of functionality or visual fidelity.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665277_512527621285194_3611445575214330481_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=2rpFOrbx_dQQ7kNvwEAY4JC&_nc_oc=AdmJh56gTyPufWS75Fh7H86B6mxYqKeKCjJozDfzqL3kFnFGHGu5crKEfB6srPDAHKYldTzVYUNoztMo4WU592vV&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CsHYg008CQ8eeHv05dfKMQ&oh=00_AflAgw4M77M-k99ukA2o01QUSCLCWxn9kiuhTBvzSfH3sw&oe=69559EA5)

*Complex object made of non-collidables with simple collidable cube*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863867_512527617951861_5367078100115098540_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=hTZo1Qtzos0Q7kNvwGjtoQa&_nc_oc=AdklpN-xUNE-KuwQS_WPJoOJ73c3-t8HDcAJZZXDst_WUocHLmTpQodVMcj4uWHxn-6ClxucJVfuf4rBnLag4RoN&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=CsHYg008CQ8eeHv05dfKMQ&oh=00_AflRJLiKBofhymqJMp21GGMnUcsZmiD1EjEGD0Q5EjRTNQ&oe=69557885)

*Enclosed in a non-visible collidable object*

For best performance, you should attempt to leverage primitive colliders (as shown below). The only exception is for things that you collide with very often/all-the-time may be better as a single, large mesh. Testing can help determine which gives better performance.

This is especially true for worlds that are using [Custom Model Import](../../Custom%20models%20(FBX)/Getting%20started%20with%203D%20model%20import.md), as using non-mesh colliders and non-primitive colliders will incur an additional, high, and spiking cost associated with rendering.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452910318_512527614618528_4434551703431817239_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=L80rJWG0BfIQ7kNvwF__uEI&_nc_oc=AdnTHtINTNKd2Fh-ynnaLxcCxn6l-qlhdAIn1Bm61MUwbgAzf4I2KWEfzREnJox9JCaN_LiG2lAmttvWYeVAh2Pj&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=CsHYg008CQ8eeHv05dfKMQ&oh=00_Aflx4kBwmOgBvvMI4BXycJga9nkwQHv-OhR_BUtBCfx0kg&oe=6955877A)

*World Editor showing raw primitive colliders*

## Grabbables

In order for grabbables to have good performance, it is important to minimize the number of collidable components on the grabbable object. For a rule of thumb, the maximum number of collidable components any grabbable should have is 2.

## Triggers

The number of triggers in the world has a runtime cost associated with it. This is seen by an increase in *Physics.Simulate* and the *TriggerRuntimeIntegration::Update* markers. Active triggers still have a runtime cost in the world even if they are inaccessible to the player.

Even objects outside the player area that have a trigger will still contribute to frame time.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452954317_512527611285195_3156202454148406245_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=MqKo_cBPPq4Q7kNvwE1oRkf&_nc_oc=AdnXrWf7Bc3fpYX3GANxfSkpblUMSzE6z31gDIxmh9cXbpHAH8Ojm6KFTJBfIGXF6tEK296wA8yCbnfE0VKZLgjv&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=CsHYg008CQ8eeHv05dfKMQ&oh=00_Aflt5xbvVvMr7f9DEP4RB1MqvSkYuFc94vctWZIMrtWUIQ&oe=69559182)

For best performance, disable triggers far away from the player, in areas like buildings (until the player enters the building), and areas inaccessible to the player.

## Collidable property

Entities when using the Scripting API have a [collidable property](https://developers.meta.com/horizon-worlds/resources/scripting-api/core.entity.collidable.md/?api_version=2.0.0) that can be enabled or disabled. In worlds where the physics cost is high, and players are collectively moved to another area such as PvP worlds, consider setting the collidable property to false to turn off the colliders in areas the players aren’t present. Since this is a bridge call, as mentioned in the [CPU and TypeScript optimization and best practices](CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#typescript-optimization), ensure these are spread across several frames to reduce any spikes during gameplay.