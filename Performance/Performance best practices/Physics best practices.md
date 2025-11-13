Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/physics-best-practices

# Physics best practices

## Collidable objects

Collidable objects in the world require physics processing to determine if something is interacting with them. Optimize physics processing by disabling colliders on any objects that aren’t interacted with or are outside the game play areas. In manual traces, large numbers of colliders will be reflected in Physics.Simulate times. If you have access to developer builds of Meta Horizon Worlds, the number of colliders in the world will be broken out in the Physics::Overlaps # trace. As a rule of thumb, the number of overlaps should be kept below 400.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452877335_512527657951857_3801136528294471333_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=P5UsZ-fCYusQ7kNvwGEY8Uz&_nc_oc=Adlt6h1qMjA0ihFGLAptZjenkgbUCCHl4Y7c8voCp-sVdsOWKRyTOwAMT6JMMvS3RMU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EVnqlHgqlb-TbMLFAt3amg&oh=00_AfhjlDdJWhquj8CizNRzwFKGS0cEXXJ9en2e67S9H19jYg&oe=692FB6D9)

*UpdateRunner::PrePhysicsUpdate and UpdateRunner::Physics.Simulate in high collider world*

To view colliders in the world, toggle **Collision** in the **Utilities** menu. This highlights all collidable objects in the world with an orange tint.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452946039_512527631285193_2371780646691338084_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=bZpqnlCH4TQQ7kNvwGugvYv&_nc_oc=AdmoBjBMaKv23nr7lceR6aiM-GKRQ13B0JVimc-5VbpCgsD1XrhHFZPW_Vd6SLOVEH8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EVnqlHgqlb-TbMLFAt3amg&oh=00_Afg2WfcPUsLA1skB6Gck-eBk7pfwnmg1jjUZUT77A3ZyuA&oe=692FC0FD)

*Collision in the Utilities menu*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452756686_512527627951860_2329805199404162916_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=_3e9wh_EAIEQ7kNvwG8BBTu&_nc_oc=AdmZXyHATQg_oe6zOJ36tAOKEmnyyg8Sd7Xz9IiOJ46xI62HDMDitFOUZCuWIgQaH1c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EVnqlHgqlb-TbMLFAt3amg&oh=00_AfifECERkVHIOtLOtfwnw9ZyqqDJLFAKLO9JQFimxI9YtA&oe=692FA601)

*Collision off*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452753829_512527634618526_2579740434491253389_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=oDpvH4236qQQ7kNvwHnBpZx&_nc_oc=AdlAZmpo7C0sGfCZm-mjn_o7zfMIUpM94l80pz4bIRDuVnHTaSEZZzyVmhx5wnvizgc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EVnqlHgqlb-TbMLFAt3amg&oh=00_AfjItwR2ZOqMGpdb5eJYMqlMj23u7KgjntYW6Lt-DT8CNA&oe=692FB58C)

*Collision on*

With highly detailed objects in play, disable the detailed colliders, then wrap the detailed object in a primitive collider such as a cube (best), sphere, or capsule collider. This only requires one physics test for collision and usually results in no loss of functionality or visual fidelity.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665277_512527621285194_3611445575214330481_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=4m6F0VWD07AQ7kNvwGppEqH&_nc_oc=Adk_0ZrOy5dDYFHhcusW-Kva1Y6x3c-f2Mu1lhfzI71abumqNgDkN8ti7gmTGsMcz0Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EVnqlHgqlb-TbMLFAt3amg&oh=00_AfidDo_TUyh0Yit8Okzeh8r1vX9k-2birvbvzEyaXoQDBw&oe=692F9B65)

*Complex object made of non-collidables with simple collidable cube*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863867_512527617951861_5367078100115098540_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=16AE1pS7zGIQ7kNvwEsOTRk&_nc_oc=Adkfg43R2A3bP-3yvqad2cde1-oHAKGFrIynM50TVFxvoGH5_9MHi75V-7-v6zS-0MY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EVnqlHgqlb-TbMLFAt3amg&oh=00_AfgFYpLXamjvSX5VvPqrtG6M2FAYj3n-MB47nWvd4RisAA&oe=692FAD85)

*Enclosed in a non-visible collidable object*

For best performance, you should attempt to leverage primitive colliders (as shown below). The only exception is for things that you collide with very often/all-the-time may be better as a single, large mesh. Testing can help determine which gives better performance.

This is especially true for worlds that are using [Custom Model Import](/hw-docs/Custom%20models%20(FBX)/Getting%20started%20with%203D%20model%20import.md), as using non-mesh colliders and non-primitive colliders will incur an additional, high, and spiking cost associated with rendering.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452910318_512527614618528_4434551703431817239_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=MsKxXjKkCu4Q7kNvwH4lery&_nc_oc=Adlm3WmRDQ-jmWISTcnwpvtJq_ZfVTI2sZtERqza4GI9FLtoBlkzhCque2a6hTuZU1Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EVnqlHgqlb-TbMLFAt3amg&oh=00_AfiUcZI5Pkvtv4X4fccUYzAwQCJuhs19h-Ss4hA44zT74A&oe=692FBC7A)

*World Editor showing raw primitive colliders*

## Grabbables

In order for grabbables to have good performance, it is important to minimize the number of collidable components on the grabbable object. For a rule of thumb, the maximum number of collidable components any grabbable should have is 2.

## Triggers

The number of triggers in the world has a runtime cost associated with it. This is seen by an increase in *Physics.Simulate* and the *TriggerRuntimeIntegration::Update* markers. Active triggers still have a runtime cost in the world even if they are inaccessible to the player.

Even objects outside the player area that have a trigger will still contribute to frame time.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452954317_512527611285195_3156202454148406245_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=pMH28jJ85IMQ7kNvwFndFEo&_nc_oc=AdnKfOxIOKh7xtdohqMX06CXK_tpWlOC7GyId_RSz9nmRaX7pj4fsWuw9UU_AvvbyzI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EVnqlHgqlb-TbMLFAt3amg&oh=00_AfhNhHgqN0bjOz8beJbP1fAvVNumnlEr0l2Fe6OAVL6HmQ&oe=692FC682)

For best performance, disable triggers far away from the player, in areas like buildings (until the player enters the building), and areas inaccessible to the player.

## Collidable property

Entities when using the Scripting API have a [collidable property](/hw-docs/Reference/core/Classes/Entity.md) that can be enabled or disabled. In worlds where the physics cost is high, and players are collectively moved to another area such as PvP worlds, consider setting the collidable property to false to turn off the colliders in areas the players aren’t present. Since this is a bridge call, as mentioned in the [CPU and TypeScript optimization and best practices](/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#typescript-optimization), ensure these are spread across several frames to reduce any spikes during gameplay.