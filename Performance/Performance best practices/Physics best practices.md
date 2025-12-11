Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/physics-best-practices

# Physics best practices

## Collidable objects

Collidable objects in the world require physics processing to determine if something is interacting with them. Optimize physics processing by disabling colliders on any objects that aren’t interacted with or are outside the game play areas. In manual traces, large numbers of colliders will be reflected in Physics.Simulate times. If you have access to developer builds of Meta Horizon Worlds, the number of colliders in the world will be broken out in the Physics::Overlaps # trace. As a rule of thumb, the number of overlaps should be kept below 400.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452877335_512527657951857_3801136528294471333_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=vb4G2iEcc4oQ7kNvwGFRexz&_nc_oc=Adm3rTqvLV72Skr0X5a1iM7naKzQFBnSrqScEDf2fmak_vjh0bgrsjtcI6enrILKe8c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=jmDFHZ5JfpfvNM5nB_wSMg&oh=00_AfmS334SHkDQC6sUogBLgLetOJ4aQ2LwOMnWZqrVkjOThw&oe=69546899)

*UpdateRunner::PrePhysicsUpdate and UpdateRunner::Physics.Simulate in high collider world*

To view colliders in the world, toggle **Collision** in the **Utilities** menu. This highlights all collidable objects in the world with an orange tint.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452946039_512527631285193_2371780646691338084_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=zPTuzGN8aOgQ7kNvwEX-aOP&_nc_oc=AdkxcwnGu9-RFO07AdnJh94phf9qznY0cNnFTZvU2qIkTUPf1hsFyp2Ovloi_12Qq9k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jmDFHZ5JfpfvNM5nB_wSMg&oh=00_AflamMiAFGOM9warfKBS7xKvbine_dZSOT9x6qM8HdhIUg&oe=69543A7D)

*Collision in the Utilities menu*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452756686_512527627951860_2329805199404162916_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=epfx5sPwYFMQ7kNvwHrEXA_&_nc_oc=Adk9Gr-JlZkyVqcC9ld0kpfXojHgaOHG8Gmo0xXjgI0mYb75NPQHPRRB__WXmR8dXjI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jmDFHZ5JfpfvNM5nB_wSMg&oh=00_AfnRY6IZvMR6IzexOPhN_vvPgAztkuLUrPu7F6m61tZvaw&oe=695457C1)

*Collision off*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452753829_512527634618526_2579740434491253389_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=9rULMwHlqGUQ7kNvwGji1IR&_nc_oc=AdmrsuWTmc0-PsDYbsSNnKiNiSwVXbTlBix_ZpzLse9GtwjZQTyfTMurzHQKBL3wt6g&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=jmDFHZ5JfpfvNM5nB_wSMg&oh=00_Afl5zvsmTdeXfjvZwXnNGm8zTN3d2ixWzOGb4T5frgAf8g&oe=6954674C)

*Collision on*

With highly detailed objects in play, disable the detailed colliders, then wrap the detailed object in a primitive collider such as a cube (best), sphere, or capsule collider. This only requires one physics test for collision and usually results in no loss of functionality or visual fidelity.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665277_512527621285194_3611445575214330481_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=2rpFOrbx_dQQ7kNvwHa5ve9&_nc_oc=AdnXZrr3NdtFL2KkeehayMEJmaFuWZ_J5gMWNLhdVVUvG32oP5jDCNKwQDD9uRxgTUU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=jmDFHZ5JfpfvNM5nB_wSMg&oh=00_AfnFlcvCWoSJ-z-I-Ej7ew4MluSQYS4FEi9QQlmOkEXBLw&oe=69544D25)

*Complex object made of non-collidables with simple collidable cube*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863867_512527617951861_5367078100115098540_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=4iwTJcqgFO4Q7kNvwEtw1ii&_nc_oc=Adk-jBJqbp-adSNX4smcdXL8Kksnu-hKCX2Dn2EQmARXHLLlI4RZ8M7fP2BV10kWNXQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jmDFHZ5JfpfvNM5nB_wSMg&oh=00_AfleCrJIO3irt7MRR2w3PckkZmUu3hGBef0K1634cAI14g&oe=69545F45)

*Enclosed in a non-visible collidable object*

For best performance, you should attempt to leverage primitive colliders (as shown below). The only exception is for things that you collide with very often/all-the-time may be better as a single, large mesh. Testing can help determine which gives better performance.

This is especially true for worlds that are using [Custom Model Import](/hw-docs/Custom%20models%20(FBX)/Getting%20started%20with%203D%20model%20import.md), as using non-mesh colliders and non-primitive colliders will incur an additional, high, and spiking cost associated with rendering.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452910318_512527614618528_4434551703431817239_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=L80rJWG0BfIQ7kNvwExZc0O&_nc_oc=Adl22uzlZoFN2vcCDB7Cb9vyASWL6e2kVPTpvj_z7uFBzujaDf8cGAvjStMOQLDVoOc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jmDFHZ5JfpfvNM5nB_wSMg&oh=00_AflSJcm1rDtbhqCSwOdLJF4Uj19rqco9NPAUmS3vNa3I2A&oe=69546E3A)

*World Editor showing raw primitive colliders*

## Grabbables

In order for grabbables to have good performance, it is important to minimize the number of collidable components on the grabbable object. For a rule of thumb, the maximum number of collidable components any grabbable should have is 2.

## Triggers

The number of triggers in the world has a runtime cost associated with it. This is seen by an increase in *Physics.Simulate* and the *TriggerRuntimeIntegration::Update* markers. Active triggers still have a runtime cost in the world even if they are inaccessible to the player.

Even objects outside the player area that have a trigger will still contribute to frame time.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452954317_512527611285195_3156202454148406245_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=MqKo_cBPPq4Q7kNvwHfRiFw&_nc_oc=AdnLNliFmu3sj0hpt9M7eI9gxQ64i1cKaM3dyn7AS9GiIAbtMruwNjubIBOlU-PgXks&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jmDFHZ5JfpfvNM5nB_wSMg&oh=00_AfmKxVDEbn3gRRcq0eQANBl2HSNtUBWZ1ghePTTCws0uug&oe=69544002)

For best performance, disable triggers far away from the player, in areas like buildings (until the player enters the building), and areas inaccessible to the player.

## Collidable property

Entities when using the Scripting API have a [collidable property](https://developers.meta.com/horizon-worlds/resources/scripting-api/core.entity.collidable.md/?api_version=2.0.0) that can be enabled or disabled. In worlds where the physics cost is high, and players are collectively moved to another area such as PvP worlds, consider setting the collidable property to false to turn off the colliders in areas the players aren’t present. Since this is a bridge call, as mentioned in the [CPU and TypeScript optimization and best practices](/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#typescript-optimization), ensure these are spread across several frames to reduce any spikes during gameplay.