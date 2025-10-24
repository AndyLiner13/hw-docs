# Collider Visualization User Guide

Creators can now visualize their collision meshes in VR so they can better manage collision issues, player movement and performance. Using the wearable on the wrist, it's possible to toggle this feature to see colliders as colored meshes. Different colors distinguish the collision for static meshes vs non static meshes (rigid bodies, grabbables, etc.).

Note: The [Utilities menu must be enabled](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/enable-the-utilities-menu/) before continuing.

## How does it work?

After the utilities menu is enabled. You will find the "Collision" button. Use your cursor to select the button and toggle the collision visualization. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452702804_512500417954581_4537301140043221409_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=2Daoju6azGUQ7kNvwGszUqt&_nc_oc=AdlcNc6kTeWb0y4HpTKeKTff3VEEeq6jO_1rlTdUNOkw1HieYNmQOhCJH1Hh1OZ808A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=IEi_LFUH51v0X9Afgb9HSw&oh=00_AfelnvknzT8VCsi4rCF...

With "Collision" turned on, your world will display collision meshes up to 50 units away. To test this out, you can open the property panel of an object and toggle the "Collidable" option and notice the collision mesh appear and disappear. Static objects will have an orange collision mesh, while dynamic objects will have a purple mesh.

Note that purple meshes for dynamic objects are a concave representation of the actual collision mesh, which may be convex instead. For example, if you have a bucket with a convex collision mesh, the purple visualization would appear concave, making it seem like you could drop objects inside even if that's not actually possible.

## Hints and Tips

This tool can be handy to investigate at a glance how players interact with the environment, for example whether the chairs around a table will block the users from reaching the table or how players can walk on objects with complex shapes. Another use case is optimizing the performance of your world by disabling collisions on objects that can't be reached by players.

Once you have identified which areas of the world are not reachable, you can turn on collision meshes to quickly see which objects have collision meshes in the area. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452907966_512500364621253_6194447675355151111_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=xzg9oaK4WUwQ7kNvwHNar-L&_nc_oc=Adlex0F0bwwgtOX7mlq_FwAI6JjLouqEk7eOq0Jwid51V1oETT6zBV6-yjrmw0CryUM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=IEi_LFUH51v0X9Afgb9HSw&oh=00_AffmEjKpwtCMIfegQiqp...

![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452672912_512500404621249_6961473514961222830_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=56aNmCkLBlwQ7kNvwGe3XnW&_nc_oc=AdneFVXGU_Tq38g1pfxmf6aOHpp-vrQCMuqJvqLOVYjQkFSr0qNZRnqBLwxRMG3JQ9E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=IEi_LFUH51v0X9Afgb9HSw&oh=00_AfczC-Y0640kDfXjzb2vYVjFMGiPI...
