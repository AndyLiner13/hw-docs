# World Capacity dialog

  
## Viewing the World capacity guidelines dialog

 The World capacity guidelines dialog shows you how close your world is to
meeting or exceeding the capacity limits of a World. To access the World Capacity
dialog, open the Main Menu and select World Capacity. ![World Capacity menu item](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493703357_717633330774621_7408317430748065666_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=uvInpbePpM4Q7kNvwEZDe10&_nc_oc=AdkjYsMBodYJAxwc67qItji8F3SHnM9PZ3s3gYXXqPxYxPycOTyF7shIDvDHasQWhJs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rdMraG3SHTCr7egTrf-lwg&oh=00_Affdv7p-E45XsfJAykujYAl4_xi...
 The World capacity guidelines dialog shows you the used capacity, as a
percentage, of four major categories: Objects, Simulation and animation, World vertex
count, and Sounds. If you at more than 75% of the capacity limit for any of these
categories, you will see a yellow bar for the category. If you are at more than
100% of the capacity limit for any of these categories, you will see a red bar
and an error message. NoteThe World vertex count category is incorrectly named in the dialog as world
tricount. This will be fixed soon. ![World capacity dialog](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495375229_717633327441288_7014509691232050718_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=G6rvspUDj7MQ7kNvwFQeJLz&_nc_oc=Adm9rb_NgiaJ6MyBUsrgCB8fJ3W3ayEcDzAR99Ukbd-EUOvc5oZEnbeH1oCLWzVGgBY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rdMraG3SHTCr7egTrf-lwg&oh=00_AfdLT0neU6-UJ-i7-TU_17U0Jp3De...
World capacity dialog ![World capacity with Sounds at yellow](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/492508614_717633320774622_186645589074315552_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=_f6Nm2OZ_w0Q7kNvwGTy8Jf&_nc_oc=Adkzh3JM3V4hZsK3MZTFCc4nd669_6w54iyCd4ombZY90yByyTiRepdlkYnHFmrwzkY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rdMraG3SHTCr7egTrf-lwg&oh=00_AfeWuaMiAFYHHVKkBZ1Oi6yJ1gzdDe1XcUrd...
World capacity dialog with Sounds at yellow ![World capacity with vertex count at 407% and error message](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/493105892_717633324107955_9093427791641727680_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=T25gGzWAdXAQ7kNvwEQ1UbV&_nc_oc=AdnP5jNFbfNqYsV2ns4dhX1xiwTu5_rHv4Ui7wIC6qKyfAjeWVHQAr3AmYOEUxfOVcY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rdMraG3SHTCr7egTrf-lwg&oh=00_AfeR55pb92XDpPM8BRJw...
World capacity with vertex count at 407% and error message  
## Understanding capacity limits

 The capacity limits shown in this dialog are a quick snapshot of the current
capacity of your world. There are other factors related to world capacity that are
not shown in this dialog. To understand world capacity in more detail, see [Performance limits for a world](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-limits-for-a-world).  
### Objects

 The objects category is the number of objects in your world that contain a mesh.
The hard limit for these objects is 3000.  
### Simulation and animation

 The simulation and animation category is a shared bucket of objects related to
simulation and animation. These objects are counted based on estimated simulation
time, with a total limit of 4.2ms. They include:
• Dynamics - Each dynamics (moving) object counts as 0.0121ms.
• Triggers - Each trigger object counts as 0.002ms.
• VFX - Each VFX object has its own estimated simulation time, from 0.0059ms to
0.1ms.
• Physics - Each physics object counts as 0.008ms.
• Texts - Each text object counts as 0.0035ms.
• Players - The estimated simulation time for the [maximum allowed players](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/settings-modifications/player-settings-modification) in the world, ranging from 0.0ms for 1-4 players up to 2.8ms for 20-32 players.

  
### World vertex count

 The world vertex count is the number of vertices currently rendered in your
world. This includes all the vertices in your world, even the ones that may be
culled by being out of view. You can have at most 125,000 vertices in a world. You can reduce vertices by using simpler meshes. See the section for “Highly
detailed meshes” in [GPU best practices](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/gpu-best-practices#highly-detailed-meshes).  
### Sounds

 The sounds category counts the memory used by sounds in your world. The hard
limit for this category is 15,000 kilobytes.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
