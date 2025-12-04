Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/physics-best-practices

# Physics best practices

## Collidable objects

Collidable objects in the world require physics processing to determine if something is interacting with them. Optimize physics processing by disabling colliders on any objects that aren’t interacted with or are outside the game play areas. In manual traces, large numbers of colliders will be reflected in Physics.Simulate times. If you have access to developer builds of Meta Horizon Worlds, the number of colliders in the world will be broken out in the Physics::Overlaps # trace. As a rule of thumb, the number of overlaps should be kept below 400.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452877335_512527657951857_3801136528294471333_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z8WQD9sOww4Q7kNvwFYzyU3&_nc_oc=Adk3lHpTLFC-J5TZBIMnBGjiog4zzX6FoVSjitqmBRNbFO-rb9nWjUi3hGLrvGfiThA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=uKYiF5qok2ArpZ-G-xwsyg&oh=00_Afm9_EjBaw-06nIU6hbLrh0F7-z5WDMDrQuN0TB4DJky1g&oe=694BD6D9)

*UpdateRunner::PrePhysicsUpdate and UpdateRunner::Physics.Simulate in high collider world*

To view colliders in the world, toggle **Collision** in the **Utilities** menu. This highlights all collidable objects in the world with an orange tint.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452946039_512527631285193_2371780646691338084_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=pUQlnmK6zT4Q7kNvwEJ-h4-&_nc_oc=AdnKD6XCbxHFU8DVTPLfJetTEv3Z7ReHYe3Enwy6vC6TpnmMzAkUgtKUfHGLTaw7lIA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=uKYiF5qok2ArpZ-G-xwsyg&oh=00_AfkTz_dTFjvALnX7dLr9TKlajw1q2vbTCQVKUJarzY_M0Q&oe=694BE0FD)

*Collision in the Utilities menu*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452756686_512527627951860_2329805199404162916_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=dTRSHM9XWycQ7kNvwH7FCRd&_nc_oc=AdnOhVh2sA861UeNbdPt3NsNEo_6XQK5G7xQ-2Yu-_lgPuRgfwbEXClfpU9UqTyD1fY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=uKYiF5qok2ArpZ-G-xwsyg&oh=00_AfkjIWp4PepZxxPB7eW_qUY6XiwNmkWFiXvR7-Dp9P3cEg&oe=694BC601)

*Collision off*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452753829_512527634618526_2579740434491253389_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=-lx7MGE0cVoQ7kNvwGikReh&_nc_oc=AdmNEqmhN9D4gaLYeJoyWhFEG8h72EeOd07TQ43siP2YNPS3PNeg8BKiscRKBnTjlbk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=uKYiF5qok2ArpZ-G-xwsyg&oh=00_AfmR414nSuh2G3FrciLmjBnG49cYIMGFNsUuaz8tZnzktA&oe=694BD58C)

*Collision on*

With highly detailed objects in play, disable the detailed colliders, then wrap the detailed object in a primitive collider such as a cube (best), sphere, or capsule collider. This only requires one physics test for collision and usually results in no loss of functionality or visual fidelity.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665277_512527621285194_3611445575214330481_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=lZ8m6QZj97kQ7kNvwH_geh5&_nc_oc=AdkJpYvX12GSSTbg3ep0Z-2KFSrcBuR82HCKmuiPQX8Q4OHtKnr0pk2Swt9YYEDYpE8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=uKYiF5qok2ArpZ-G-xwsyg&oh=00_AfkTzB65j16izwDubdbdkceqUwBfChsJAUp_kGB0HcQTTg&oe=694BBB65)

*Complex object made of non-collidables with simple collidable cube*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863867_512527617951861_5367078100115098540_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fo8ns2pQjqQQ7kNvwFOx7fL&_nc_oc=Adnz1PH_hbb53Ff5Mkj67uMGQ6e1ojhts3GJDrDESgaS0lY65QyQB-NM_yZPjJDduEc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=uKYiF5qok2ArpZ-G-xwsyg&oh=00_AfmUUiOOqSkRRmpDVVofvVJvpSqpoSVCra04yIV5qOFYTA&oe=694BCD85)

*Enclosed in a non-visible collidable object*

For best performance, you should attempt to leverage primitive colliders (as shown below). The only exception is for things that you collide with very often/all-the-time may be better as a single, large mesh. Testing can help determine which gives better performance.

This is especially true for worlds that are using [Custom Model Import](/hw-mcp-tools/documentation/hw-docs/Custom%20models%20(FBX)/Getting%20started%20with%203D%20model%20import.md), as using non-mesh colliders and non-primitive colliders will incur an additional, high, and spiking cost associated with rendering.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452910318_512527614618528_4434551703431817239_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=43rUbDCREqQQ7kNvwGtDzdh&_nc_oc=AdkWRn7nbxtyVV1vgE6XtBfH_SsuRB2_KgQgcY4ryKyHBSxWwjvyJR5cfZISm3ioVno&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=uKYiF5qok2ArpZ-G-xwsyg&oh=00_AfmrgvD23C5145hngDIq5xSNEOKVBeYADEZaGmVZMe2Gbg&oe=694BDC7A)

*World Editor showing raw primitive colliders*

## Grabbables

In order for grabbables to have good performance, it is important to minimize the number of collidable components on the grabbable object. For a rule of thumb, the maximum number of collidable components any grabbable should have is 2.

## Triggers

The number of triggers in the world has a runtime cost associated with it. This is seen by an increase in *Physics.Simulate* and the *TriggerRuntimeIntegration::Update* markers. Active triggers still have a runtime cost in the world even if they are inaccessible to the player.

Even objects outside the player area that have a trigger will still contribute to frame time.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452954317_512527611285195_3156202454148406245_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=bC-7CYJGZXkQ7kNvwGUj-_T&_nc_oc=AdmHgJdyRtvYVkTOB3AXNbB975o73bnRYlEuS5hbZ0g3_5hj9pMscJHyCid_yWS0cbw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=uKYiF5qok2ArpZ-G-xwsyg&oh=00_AfnQX3T4TfYr4Qg1JS2d6KUN2G5hEIzSGTXsdhP1XBmWNA&oe=694BE682)

For best performance, disable triggers far away from the player, in areas like buildings (until the player enters the building), and areas inaccessible to the player.

## Collidable property

Entities when using the Scripting API have a [collidable property](https://developers.meta.com/horizon-worlds/resources/scripting-api/core.entity.collidable.md/?api_version=2.0.0) that can be enabled or disabled. In worlds where the physics cost is high, and players are collectively moved to another area such as PvP worlds, consider setting the collidable property to false to turn off the colliders in areas the players aren’t present. Since this is a bridge call, as mentioned in the [CPU and TypeScript optimization and best practices](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#typescript-optimization), ensure these are spread across several frames to reduce any spikes during gameplay.