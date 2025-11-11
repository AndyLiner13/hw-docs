Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/world-capacity

# World Capacity dialog

## Viewing the World capacity guidelines dialog

The World capacity guidelines dialog shows you how close your world is to meeting or exceeding the capacity limits of a World. To access the World Capacity dialog, open the **Main Menu** and select **World Capacity**.

![World Capacity menu item](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493703357_717633330774621_7408317430748065666_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=hdftfVN40PcQ7kNvwHmjzAG&_nc_oc=AdlsCuG2qNsK7lldep8zLOi1BMRvsTs1M-_v_U1Ib6BgbwZl1SIfebODYeoINuYrqWQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kSIPmPugxtJm3UfGU0IBNA&oh=00_AfhwcRcDAzHft3oAR6Xc1zd0orggltwVePun2iROept5jw&oe=692BEB30)

The World capacity guidelines dialog shows you the used capacity, as a percentage, of four major categories: Objects, Simulation and animation, World vertex count, and Sounds. If you at more than 75% of the capacity limit for any of these categories, you will see a yellow bar for the category. If you are at more than 100% of the capacity limit for any of these categories, you will see a red bar and an error message.

Note

 The World vertex count category is incorrectly named in the dialog as world tricount. This will be fixed soon.

![World capacity dialog](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495375229_717633327441288_7014509691232050718_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=NNXviBJJbQgQ7kNvwEbU1Bc&_nc_oc=AdkEuiBEj7khEHCogJnwa__YNn901IppI4BBSO5X9x2IEs1jfMYsXRIbzcag06g80aM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kSIPmPugxtJm3UfGU0IBNA&oh=00_AfhjxGdBFs-iuLQhEDs5BvJVLcMFPb3IDfT-dywdHi23tA&oe=692BEC3F)
*World capacity dialog*

![World capacity with Sounds at yellow](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/492508614_717633320774622_186645589074315552_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=xudX7OUEVKoQ7kNvwFUVzt1&_nc_oc=AdkLVKlBDVDSKaHbQBE5Ed_TV3yNPfDxFDaqY4pTClTJcd6SPsQMRGr7tiegnz8IhBw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kSIPmPugxtJm3UfGU0IBNA&oh=00_AfitD_ecKeQJCh39jBr4FyZr1_FajLck6WpqtSZifIUbnQ&oe=692C0C7B)
*World capacity dialog with Sounds at yellow*

![World capacity with vertex count at 407% and error message](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493105892_717633324107955_9093427791641727680_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=WpkU-p6QLt0Q7kNvwGd_K1C&_nc_oc=AdnrW4PSPyP3L13tHNgngSWGdNkJjNssax4afJzEwkhfpCkPcNIl3sBEAbYM6c86ZUk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kSIPmPugxtJm3UfGU0IBNA&oh=00_AfgfYdJps21Vl1N6Hl9YpuxCKV3B7NtpMtSPVmAT30WD3Q&oe=692BDCEF)
*World capacity with vertex count at 407% and error message*

## Understanding capacity limits

The capacity limits shown in this dialog are a quick snapshot of the current capacity of your world. There are other factors related to world capacity that are not shown in this dialog. To understand world capacity in more detail, see [Performance limits for a world](/hw-docs/performance-best-practices-and-tooling/performance-limits-for-a-world).

### Objects

The objects category is the number of objects in your world that contain a mesh. The hard limit for these objects is 3000.

### Simulation and animation

The simulation and animation category is a shared bucket of objects related to simulation and animation. These objects are counted based on estimated simulation time, with a total limit of 4.2ms. They include:

* **Dynamics** - Each dynamics (moving) object counts as 0.0121ms.
* **Triggers** - Each trigger object counts as 0.002ms.
* **VFX** - Each VFX object has its own estimated simulation time, from 0.0059ms to 0.1ms.
* **Physics** - Each physics object counts as 0.008ms.
* **Texts** - Each text object counts as 0.0035ms.
* **Players** - The estimated simulation time for the [maximum allowed players](/hw-docs/desktop-editor/settings-modifications/player-settings-modification) in the world, ranging from 0.0ms for 1-4 players up to 2.8ms for 20-32 players.

### World vertex count

The world vertex count is the number of vertices currently rendered in your world. This includes all the vertices in your world, even the ones that may be culled by being out of view. You can have at most 125,000 vertices in a world.

You can reduce vertices by using simpler meshes. See the section for “Highly detailed meshes” in [GPU best practices](/hw-docs/performance-best-practices-and-tooling/performance-best-practices/gpu-best-practices#highly-detailed-meshes).

### Sounds

The sounds category counts the memory used by sounds in your world. The hard limit for this category is 15,000 kilobytes.