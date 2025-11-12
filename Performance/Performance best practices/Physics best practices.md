Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/physics-best-practices

Learn

# Physics best practices

## Collidable objects

Collidable objects in the world require physics processing to determine if something is interacting with them. Optimize physics processing by disabling colliders on any objects that aren’t interacted with or are outside the game play areas. In manual traces, large numbers of colliders will be reflected in Physics.Simulate times. If you have access to developer builds of Meta Horizon Worlds, the number of colliders in the world will be broken out in the Physics::Overlaps # trace. As a rule of thumb, the number of overlaps should be kept below 400.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452877335_512527657951857_3801136528294471333_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=M5QHPg-Ri2MQ7kNvwFliUZK&_nc_oc=AdnioKpKZyOywA0RO-XYrkfjxtkZneXUHXqQ2Y8VCFW6BJ7TgzufSpxmr28Vs9RfXnE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AD65_k8A1M7Lm-aLXdMy8A&oh=00_AfjYZASaPEaE30zWeXN3nOkLzLCyDyr4n6SruoEarJsCgg&oe=692E9D99)

*UpdateRunner::PrePhysicsUpdate and UpdateRunner::Physics.Simulate in high collider world*

To view colliders in the world, toggle **Collision** in the **Utilities** menu. This highlights all collidable objects in the world with an orange tint.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452946039_512527631285193_2371780646691338084_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=bZpqnlCH4TQQ7kNvwGugvYv&_nc_oc=AdmoBjBMaKv23nr7lceR6aiM-GKRQ13B0JVimc-5VbpCgsD1XrhHFZPW_Vd6SLOVEH8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AD65_k8A1M7Lm-aLXdMy8A&oh=00_Afik6ALI6_oVqw294NlBgMVfjcW6roB2CYrT5OTH2B69Wg&oe=692EA7BD)

*Collision in the Utilities menu*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452756686_512527627951860_2329805199404162916_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=_3e9wh_EAIEQ7kNvwG8BBTu&_nc_oc=AdmZXyHATQg_oe6zOJ36tAOKEmnyyg8Sd7Xz9IiOJ46xI62HDMDitFOUZCuWIgQaH1c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AD65_k8A1M7Lm-aLXdMy8A&oh=00_Afinvo8kny7KMGTFJQHTb6v14ipZbAJ9swlv4J17esAaFw&oe=692EC501)

*Collision off*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452753829_512527634618526_2579740434491253389_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=zAmPDs5RQFMQ7kNvwFdpIbL&_nc_oc=AdmQzlkIZ8-M3rkJLzD59fSaSk_WVYx-Ff8VSwhcjg0QSzxx488BeZcVWkfqFmDNn8A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AD65_k8A1M7Lm-aLXdMy8A&oh=00_Afh7QRwEaDSOP29pfvQ8OCW0uKbkQaNTtw-ls5h46N0MHg&oe=692E9C4C)

*Collision on*

With highly detailed objects in play, disable the detailed colliders, then wrap the detailed object in a primitive collider such as a cube (best), sphere, or capsule collider. This only requires one physics test for collision and usually results in no loss of functionality or visual fidelity.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665277_512527621285194_3611445575214330481_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=4m6F0VWD07AQ7kNvwGppEqH&_nc_oc=Adk_0ZrOy5dDYFHhcusW-Kva1Y6x3c-f2Mu1lhfzI71abumqNgDkN8ti7gmTGsMcz0Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AD65_k8A1M7Lm-aLXdMy8A&oh=00_AfiVqvs-WrofcIvP-1Jg_GrNtwLt1BIqmLkFDzYUhJbCug&oe=692EBA65)

*Complex object made of non-collidables with simple collidable cube*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863867_512527617951861_5367078100115098540_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=16AE1pS7zGIQ7kNvwEsOTRk&_nc_oc=Adkfg43R2A3bP-3yvqad2cde1-oHAKGFrIynM50TVFxvoGH5_9MHi75V-7-v6zS-0MY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AD65_k8A1M7Lm-aLXdMy8A&oh=00_Afh96P7twO0s_SW1iGzd4lBtCD_5bVrFv8djOm0g3b94bw&oe=692E9445)

*Enclosed in a non-visible collidable object*

For best performance, you should attempt to leverage primitive colliders (as shown below). The only exception is for things that you collide with very often/all-the-time may be better as a single, large mesh. Testing can help determine which gives better performance.

This is especially true for worlds that are using [Custom Model Import](/hw-docs/custom-model-import/getting-started-with-custom-model-import), as using non-mesh colliders and non-primitive colliders will incur an additional, high, and spiking cost associated with rendering.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452910318_512527614618528_4434551703431817239_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=MsKxXjKkCu4Q7kNvwH4lery&_nc_oc=Adlm3WmRDQ-jmWISTcnwpvtJq_ZfVTI2sZtERqza4GI9FLtoBlkzhCque2a6hTuZU1Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AD65_k8A1M7Lm-aLXdMy8A&oh=00_AfhNNDSe01Rdor216xBTsrrdBUFRw5DeONgxXvBRwj3ZCg&oe=692EA33A)

*World Editor showing raw primitive colliders*

## Grabbables

In order for grabbables to have good performance, it is important to minimize the number of collidable components on the grabbable object. For a rule of thumb, the maximum number of collidable components any grabbable should have is 2.

## Triggers

The number of triggers in the world has a runtime cost associated with it. This is seen by an increase in *Physics.Simulate* and the *TriggerRuntimeIntegration::Update* markers. Active triggers still have a runtime cost in the world even if they are inaccessible to the player.

Even objects outside the player area that have a trigger will still contribute to frame time.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452954317_512527611285195_3156202454148406245_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=pMH28jJ85IMQ7kNvwFndFEo&_nc_oc=AdnKfOxIOKh7xtdohqMX06CXK_tpWlOC7GyId_RSz9nmRaX7pj4fsWuw9UU_AvvbyzI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AD65_k8A1M7Lm-aLXdMy8A&oh=00_AfizYOaT4QL9QJEEhsKUprwK7rkBzHmpXYZyE061_ZDmpA&oe=692EAD42)

For best performance, disable triggers far away from the player, in areas like buildings (until the player enters the building), and areas inaccessible to the player.

## Collidable property

Entities when using the Scripting API have a [collidable property](https://developers.meta.com/horizon-worlds/resources/scripting-api/core.entity.collidable.md/?api_version=2.0.0) that can be enabled or disabled. In worlds where the physics cost is high, and players are collectively moved to another area such as PvP worlds, consider setting the collidable property to false to turn off the colliders in areas the players aren’t present. Since this is a bridge call, as mentioned in the [CPU and TypeScript optimization and best practices](/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#typescript-optimization), ensure these are spread across several frames to reduce any spikes during gameplay.