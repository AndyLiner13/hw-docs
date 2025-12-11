Source: https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/collider-visualization-user-guide

# Collider Visualization User Guide

Creators can now visualize their collision meshes in VR so they can better manage collision issues, player movement and performance. Using the wearable on the wrist, it’s possible to toggle this feature to see colliders as colored meshes. Different colors distinguish the collision for static meshes vs non static meshes (rigid bodies, grabbables, etc.).

**Note:** The [Utilities menu must be enabled](../../Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md) before continuing.

## How does it work?

After the utilities menu is enabled. You will find the “Collision” button. Use your cursor to select the button and toggle the collision visualization.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452702804_512500417954581_4537301140043221409_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=2wpRj4_lZ3kQ7kNvwEo0Vv_&_nc_oc=AdkNpxQxHIsw_wbY7sHADYt7g43C5nGA3Ay7kqRHWTDwUfcXihTMp-Bt-2RU5clBEFk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=IrPGJzwvCoGt-fWPJbjW0A&oh=00_AfnPft-HGzuTsV-ela0xFjulqXRvh8aXBVKWQqIHMiJ90Q&oe=694BCCBB)

With “Collision” turned on, your world will display collision meshes up to 50 units away. To test this out, you can open the property panel of an object and toggle the “Collidable” option and notice the collision mesh appear and disappear. Static objects will have an orange collision mesh, while dynamic objects will have a purple mesh.

Note that purple meshes for dynamic objects are a concave representation of the actual collision mesh, which may be convex instead. For example, if you have a bucket with a convex collision mesh, the purple visualization would appear concave, making it seem like you could drop objects inside even if that’s not actually possible.

## Hints and Tips

This tool can be handy to investigate at a glance how players interact with the environment, for example whether the chairs around a table will block the users from reaching the table or how players can walk on objects with complex shapes.

Another use case is optimizing the performance of your world by disabling collisions on objects that can’t be reached by players. Once you have identified which areas of the world are not reachable, you can turn on collision meshes to quickly see which objects have collision meshes in the area.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452907966_512500364621253_6194447675355151111_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=NiFCXHwn970Q7kNvwHmZNdG&_nc_oc=AdnP3b0SUI_KFBTgvoheRQWyeCVTyPetIi1AXs4t2Ktumq0Z53b9Cou17uWwbrUyW50&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=IrPGJzwvCoGt-fWPJbjW0A&oh=00_AflZa2grqFfnujf0skFMPnStj4anqnYiFgQZoR3mHP7ovg&oe=694BDECA)

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452672912_512500404621249_6961473514961222830_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=TcwFBs3w7rsQ7kNvwGJlbph&_nc_oc=Adm2xWzQseyD8DWo-D9qbucOZBjy0KiiisnAeis3QE-ZUjpCc4pKmrAiWE85lMi51Yk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=IrPGJzwvCoGt-fWPJbjW0A&oh=00_AfkGObkJgjBXwvwqICISGCA89WoG5LSJGz8REPECDU8bJA&oe=694BEE1E)