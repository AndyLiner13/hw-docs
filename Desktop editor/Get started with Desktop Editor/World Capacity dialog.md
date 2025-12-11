Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/world-capacity

# World Capacity dialog

## Viewing the World capacity guidelines dialog

The World capacity guidelines dialog shows you how close your world is to meeting or exceeding the capacity limits of a World. To access the World Capacity dialog, open the **Main Menu** and select **World Capacity**.

![World Capacity menu item](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493703357_717633330774621_7408317430748065666_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=EC-dBW3QEMIQ7kNvwHY4g9g&_nc_oc=Adlao6oUG4Dr3LZ3f5WgEhqANiJZLUgFcC47Ty1TtYwsGpdykd4Xpel45tXhy0qxpffrbG3qrqm95Fytc2eXPrXM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=PeLGbOE5anZ2DbpztcYqLA&oh=00_AfkWRcm9s_Rd2OWsuTPb1VvWB_YMTJBc9Tif8whcijx_CQ&oe=69557270)

The World capacity guidelines dialog shows you the used capacity, as a percentage, of four major categories: Objects, Simulation and animation, World vertex count, and Sounds. If you at more than 75% of the capacity limit for any of these categories, you will see a yellow bar for the category. If you are at more than 100% of the capacity limit for any of these categories, you will see a red bar and an error message.

Note

 The World vertex count category is incorrectly named in the dialog as world tricount. This will be fixed soon.

![World capacity dialog](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495375229_717633327441288_7014509691232050718_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=uHoP7QZM8-EQ7kNvwFc4DZE&_nc_oc=Adm8nHmPdpqSZ1WMmMplyCbY7eNKc4qTrJr2lLNHGohf2qZvrQCBj7-NwnjxN15NWPSMELN7j8PCVux9jG97cCkt&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=PeLGbOE5anZ2DbpztcYqLA&oh=00_Afl-LVa-Kgqpwr6VOmCWomxx1QAC9sHCUklNKHyscUCd9A&oe=6955737F)
*World capacity dialog*

![World capacity with Sounds at yellow](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/492508614_717633320774622_186645589074315552_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=RW_VV2VT4w8Q7kNvwG1ptRW&_nc_oc=AdnQoRs5LkImdO3O2Pbw2bbaZ1C6vrZQZCg4nOCa8AVrulHm19EqcdDjZ5oN8w3HV46qYSiBvzEgNs64Wy_A1BIZ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=PeLGbOE5anZ2DbpztcYqLA&oh=00_AfmXeA2jYJdlrhmo2hX1R9ZRfjmh8QorsjehApO24njgbw&oe=695593BB)
*World capacity dialog with Sounds at yellow*

![World capacity with vertex count at 407% and error message](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493105892_717633324107955_9093427791641727680_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=H8BafCczwp0Q7kNvwEPsFyz&_nc_oc=AdnIyr4N3cd25izQPfnBWjzhIzCdUasr-VH7mKI5FDHjr23_JWbwW0AIq2b6XRKOsMje3HM0Gh-ziYZqUcCHTXKQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=PeLGbOE5anZ2DbpztcYqLA&oh=00_AfkzTt2ZGMN2BTqR0Rxja2MfWNSobChs3apLXDXEH2xxlA&oe=69559C6F)
*World capacity with vertex count at 407% and error message*

## Understanding capacity limits

The capacity limits shown in this dialog are a quick snapshot of the current capacity of your world. There are other factors related to world capacity that are not shown in this dialog. To understand world capacity in more detail, see [Performance limits for a world](../../Performance/Performance%20limits%20for%20a%20World.md).

### Objects

The objects category is the number of objects in your world that contain a mesh. The hard limit for these objects is 3000.

### Simulation and animation

The simulation and animation category is a shared bucket of objects related to simulation and animation. These objects are counted based on estimated simulation time, with a total limit of 4.2ms. They include:

* **Dynamics** - Each dynamics (moving) object counts as 0.0121ms.
* **Triggers** - Each trigger object counts as 0.002ms.
* **VFX** - Each VFX object has its own estimated simulation time, from 0.0059ms to 0.1ms.
* **Physics** - Each physics object counts as 0.008ms.
* **Texts** - Each text object counts as 0.0035ms.
* **Players** - The estimated simulation time for the [maximum allowed players](../Settings/Player%20Settings%20Modification.md) in the world, ranging from 0.0ms for 1-4 players up to 2.8ms for 20-32 players.

### World vertex count

The world vertex count is the number of vertices currently rendered in your world. This includes all the vertices in your world, even the ones that may be culled by being out of view. You can have at most 125,000 vertices in a world.

You can reduce vertices by using simpler meshes. See the section for “Highly detailed meshes” in [GPU best practices](../../Performance/Performance%20best%20practices/GPU%20best%20practices.md#highly-detailed-meshes).

### Sounds

The sounds category counts the memory used by sounds in your world. The hard limit for this category is 15,000 kilobytes.