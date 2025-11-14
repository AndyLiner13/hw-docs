Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/physics-best-practices

# Physics best practices

## Collidable objects

Collidable objects in the world require physics processing to determine if something is interacting with them. Optimize physics processing by disabling colliders on any objects that aren’t interacted with or are outside the game play areas. In manual traces, large numbers of colliders will be reflected in Physics.Simulate times. If you have access to developer builds of Meta Horizon Worlds, the number of colliders in the world will be broken out in the Physics::Overlaps # trace. As a rule of thumb, the number of overlaps should be kept below 400.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452877335_512527657951857_3801136528294471333_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=P5UsZ-fCYusQ7kNvwGEY8Uz&_nc_oc=Adlt6h1qMjA0ihFGLAptZjenkgbUCCHl4Y7c8voCp-sVdsOWKRyTOwAMT6JMMvS3RMU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=x0fxwCYtPNZiWklir8sMfw&oh=00_AfiiT2QRgKEB3B9o-SbN3pg3Lndwy2L-9b2I8uZBTTg66g&oe=69314099)

*UpdateRunner::PrePhysicsUpdate and UpdateRunner::Physics.Simulate in high collider world*

To view colliders in the world, toggle **Collision** in the **Utilities** menu. This highlights all collidable objects in the world with an orange tint.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452946039_512527631285193_2371780646691338084_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZLvBygNnxYcQ7kNvwEuuWDB&_nc_oc=Adl-uOBqJx59LHETL-8axCPLK223Y8u2N5uJUmFfLMDr_GmWUiuW2MP44eUGT9K4dU0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=x0fxwCYtPNZiWklir8sMfw&oh=00_AfjrB_F6sVwgMN7NEXxvGz_l924toa59iz3sa7aITxw-sA&oe=69314ABD)

*Collision in the Utilities menu*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452756686_512527627951860_2329805199404162916_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=zeKSiQWLC0kQ7kNvwHaXVRU&_nc_oc=Adl9Gd6JxMAb3OZEHcIwmPyOsYmXAwJAToHHg_Oyw48PtZHgv_Dsmel7UCmjFVSsu7o&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=x0fxwCYtPNZiWklir8sMfw&oh=00_AfhI_SwXP-8T4yE9bqHYyFeaBsejyWaU4zPnijL7PsV_vQ&oe=69312FC1)

*Collision off*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452753829_512527634618526_2579740434491253389_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=oDpvH4236qQQ7kNvwHnBpZx&_nc_oc=AdlAZmpo7C0sGfCZm-mjn_o7zfMIUpM94l80pz4bIRDuVnHTaSEZZzyVmhx5wnvizgc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=x0fxwCYtPNZiWklir8sMfw&oh=00_AfhUfxZLZv6ZMIO-n8LZrl_UqpLvaDRlN0TuE-164ktwew&oe=69313F4C)

*Collision on*

With highly detailed objects in play, disable the detailed colliders, then wrap the detailed object in a primitive collider such as a cube (best), sphere, or capsule collider. This only requires one physics test for collision and usually results in no loss of functionality or visual fidelity.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665277_512527621285194_3611445575214330481_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=0FDwnWvBhssQ7kNvwHdAOTO&_nc_oc=AdnKPvjkzuyLIAYEyX1nKwljgX1OSXYMT6q36njjAkPI3nlQ9_WgXbvGV2b3ibRoUQ8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=x0fxwCYtPNZiWklir8sMfw&oh=00_AfgH1r0iCB_J0mkL7fnzg9fSsA4MQZAjkVZIBsugwzFlZA&oe=69312525)

*Complex object made of non-collidables with simple collidable cube*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863867_512527617951861_5367078100115098540_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=16AE1pS7zGIQ7kNvwEsOTRk&_nc_oc=Adkfg43R2A3bP-3yvqad2cde1-oHAKGFrIynM50TVFxvoGH5_9MHi75V-7-v6zS-0MY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=x0fxwCYtPNZiWklir8sMfw&oh=00_Afhnof06xEvuwe21ERVT6ghtNmx9RjjixaWZcW3U3FyjkQ&oe=69313745)

*Enclosed in a non-visible collidable object*

For best performance, you should attempt to leverage primitive colliders (as shown below). The only exception is for things that you collide with very often/all-the-time may be better as a single, large mesh. Testing can help determine which gives better performance.

This is especially true for worlds that are using [Custom Model Import](/hw-docs/Custom%20models%20(FBX)/Getting%20started%20with%203D%20model%20import.md), as using non-mesh colliders and non-primitive colliders will incur an additional, high, and spiking cost associated with rendering.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452910318_512527614618528_4434551703431817239_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=flV1oInOZIMQ7kNvwH860JB&_nc_oc=AdkdTFVOwI4tS4kPlSBj3hVMdDGiafEA6aUewJ6taBphAIqsY3nx2YRjaHjQP1H1tmA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=x0fxwCYtPNZiWklir8sMfw&oh=00_AfhQTPkblUkayT55Yax0rxxz9BiGtTCQ9UyF4RPHSF9RCQ&oe=6931463A)

*World Editor showing raw primitive colliders*

## Grabbables

In order for grabbables to have good performance, it is important to minimize the number of collidable components on the grabbable object. For a rule of thumb, the maximum number of collidable components any grabbable should have is 2.

## Triggers

The number of triggers in the world has a runtime cost associated with it. This is seen by an increase in *Physics.Simulate* and the *TriggerRuntimeIntegration::Update* markers. Active triggers still have a runtime cost in the world even if they are inaccessible to the player.

Even objects outside the player area that have a trigger will still contribute to frame time.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452954317_512527611285195_3156202454148406245_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=XHpXbLxuYd0Q7kNvwEPPWT6&_nc_oc=AdkWxCjLpTqg3A6_xrT2a44-Bp9J5B3Or-cQrf-5RB8Iod-eqdhD-ARU9zn-1MSAvTU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=x0fxwCYtPNZiWklir8sMfw&oh=00_AfhoMG3tOHgPjMOmvE3kGtxtNHhtvEfdFBBb5io6oJ0NZw&oe=69311802)

For best performance, disable triggers far away from the player, in areas like buildings (until the player enters the building), and areas inaccessible to the player.

## Collidable property

Entities when using the Scripting API have a [collidable property](/hw-docs/Reference/core/Classes/Entity.md) that can be enabled or disabled. In worlds where the physics cost is high, and players are collectively moved to another area such as PvP worlds, consider setting the collidable property to false to turn off the colliders in areas the players aren’t present. Since this is a bridge call, as mentioned in the [CPU and TypeScript optimization and best practices](/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#typescript-optimization), ensure these are spread across several frames to reduce any spikes during gameplay.