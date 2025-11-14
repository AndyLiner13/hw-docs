Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/world-capacity

# World Capacity dialog

## Viewing the World capacity guidelines dialog

The World capacity guidelines dialog shows you how close your world is to meeting or exceeding the capacity limits of a World. To access the World Capacity dialog, open the **Main Menu** and select **World Capacity**.

![World Capacity menu item](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493703357_717633330774621_7408317430748065666_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=-9EQR1fODGkQ7kNvwHHsQR6&_nc_oc=AdmN4EUTihVmSXHE84Mm0skiegU31_zPML_bEVNtJCHB6PGQ-o4a0rXlFGGjIq_4maQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=wfRtniw7vH2N0g6DvgmTrg&oh=00_Aficxe9S-UEmHQnvg3TYN18IngwYCdb3Z46A1rFSwbEYkg&oe=69313130)

The World capacity guidelines dialog shows you the used capacity, as a percentage, of four major categories: Objects, Simulation and animation, World vertex count, and Sounds. If you at more than 75% of the capacity limit for any of these categories, you will see a yellow bar for the category. If you are at more than 100% of the capacity limit for any of these categories, you will see a red bar and an error message.

Note

 The World vertex count category is incorrectly named in the dialog as world tricount. This will be fixed soon.

![World capacity dialog](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495375229_717633327441288_7014509691232050718_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=h-r-Rgc7J0kQ7kNvwEjHQyS&_nc_oc=AdnnZkWcElpEoqxshD_PFetC9LOSQv5LGBQRUcEvseQkecJ2DpwpXHAp51gtTicoHRk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=wfRtniw7vH2N0g6DvgmTrg&oh=00_Afjf-Z23vt8835WUrK7WUQKkspWjk-fc-cAxwYRdYixnTA&oe=6931323F)
*World capacity dialog*

![World capacity with Sounds at yellow](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/492508614_717633320774622_186645589074315552_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=6nW2BQHQfj0Q7kNvwGVzFdK&_nc_oc=AdmpiWm0riHXo1qNLUjEtBj4b3kB3qHashjNHAzad0Bjy_sMs3HMdSOtlC_1l4eYxQg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=wfRtniw7vH2N0g6DvgmTrg&oh=00_AfgS1ZpvStV8JZ_iz4JGMx6GgVRKFLCI1ktJby8gEN04DA&oe=69311A3B)
*World capacity dialog with Sounds at yellow*

![World capacity with vertex count at 407% and error message](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493105892_717633324107955_9093427791641727680_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=a8p7MNspZ2MQ7kNvwGAp1xJ&_nc_oc=Adlel_JY2OxIGc79jycnDpZ8yDio5xoH1QSJVjECZaJCFlNJjqT2VMbqQfW_-l8EOWM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=wfRtniw7vH2N0g6DvgmTrg&oh=00_Afhp8yfw6tYY3rb26z6r6AAl6jsld93wONI9vbs2O4MJsw&oe=693122EF)
*World capacity with vertex count at 407% and error message*

## Understanding capacity limits

The capacity limits shown in this dialog are a quick snapshot of the current capacity of your world. There are other factors related to world capacity that are not shown in this dialog. To understand world capacity in more detail, see [Performance limits for a world](/hw-docs/Performance/Performance%20limits%20for%20a%20World.md).

### Objects

The objects category is the number of objects in your world that contain a mesh. The hard limit for these objects is 3000.

### Simulation and animation

The simulation and animation category is a shared bucket of objects related to simulation and animation. These objects are counted based on estimated simulation time, with a total limit of 4.2ms. They include:

* **Dynamics** - Each dynamics (moving) object counts as 0.0121ms.
* **Triggers** - Each trigger object counts as 0.002ms.
* **VFX** - Each VFX object has its own estimated simulation time, from 0.0059ms to 0.1ms.
* **Physics** - Each physics object counts as 0.008ms.
* **Texts** - Each text object counts as 0.0035ms.
* **Players** - The estimated simulation time for the [maximum allowed players](/hw-docs/Desktop%20editor/Settings/Player%20Settings%20Modification.md) in the world, ranging from 0.0ms for 1-4 players up to 2.8ms for 20-32 players.

### World vertex count

The world vertex count is the number of vertices currently rendered in your world. This includes all the vertices in your world, even the ones that may be culled by being out of view. You can have at most 125,000 vertices in a world.

You can reduce vertices by using simpler meshes. See the section for “Highly detailed meshes” in [GPU best practices](/hw-docs/Performance/Performance%20best%20practices/GPU%20best%20practices.md#highly-detailed-meshes).

### Sounds

The sounds category counts the memory used by sounds in your world. The hard limit for this category is 15,000 kilobytes.