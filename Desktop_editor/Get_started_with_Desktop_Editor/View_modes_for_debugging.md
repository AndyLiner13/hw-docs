# View modes for debugging

 Debugging view modes in desktop editor can help you debug your world. Its
features include:
• Wireframe viewing options that give you visibility into the geometric complexity
of your meshes.
• A collision view mode that helps you understand how players will be able to
interact with objects in your world.
• An overdraw view mode that helps you see where the same pixels are being drawn
more than once.

  
## Opening in desktop editor

 To open the view modes menu, select the view icon on the right side of the
toolbar. Hovering your cursor over each option reveals a description of the view mode.
See [Available view modes](https://developers.meta.com/horizon-worlds/learn/documentation/view-modes-for-debugging#available-view-modes) for further details. After selecting an option, the view mode will be displayed
inside the dropdown button. Hovering over this dropdown button will also show
you the active view mode. ![List of Available viewmodes](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484836232_677084111496210_6923534349643550921_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=6gGvUvDgXmwQ7kNvwH6w3uv&_nc_oc=AdkfNSX6x58_9jR8xX4OYZtzDaGkQY8UWqI1xnJRWP4uekuFf8pO2rghti1mz_SLLzA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6MPM-D7Z8i9RXsM5mwRc6Q&oh=00_AfeT7OVhZJ...
### Opening in VR

 In VR, first [Enable the Utilities Menu](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/enable-the-utilities-menu/), then open your wearable and select the desired view mode.![Image](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75348041_964519652195117_6384169750030954787_n.gif?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=9nPS57ZCrn4Q7kNvwG3fwAO&_nc_oc=AdkER9EKH8OEQ0dFciJnZ8pm9T9rP1YfylMBrRplOKU5dx98vkMqqX8TwJe5hfbVFJk&_nc_zt=3&_nc...
## Available view modes


|  |
|  |
| Shaded | - Texture only. - This is the default view that shows meshes with their textures available. |
| Wireframe | - Wireframe only. - Use this to view your world’s geometric complexity. It allows you to see through meshes for debugging unintended overlaps between objects. |
| Solid wireframe | - Wireframe over a solid material. - This option places a solid material underneath the wireframe, it’s useful for displaying objects that are apart and distinguishing which objects are closer to the camera. |
| Shaded wireframe | - Wireframe over the object’s texture. - Use this view to understand how textures are affected by their underlying mesh geometry and debug texture issues that may be caused by the meshes underneath them. - Note: There is a known bug in the desktop editor where jumping to Preview mode while Shaded Wireframe mode is active causes the player to pass through geometry. |
| Collision | - Shows object colliders. - Use this view to see which objects have colliders. You can also use this to optimize the performance of a world to disable collisions on objects that players can’t reach, reducing the overall complexity. |
| Overdraw | - Shows pixel overdraw. - Use this view to see where the same pixels are being drawn more than once in a scene so you can better optimize your world. - See the Overdraw view mode section for more information. |

## Keyboard shortcuts

 These numeric keys provide shortcuts to the different view modes:
• 1: Shaded
• 2: Wireframe
• 3: Solid wireframe
• 4: Shaded wireframe
• 5: Collision
• 6: Overdraw

  
## Wireframe view mode

 Wireframe view mode helps you see the geometric complexity of your 3D models.
You can use this view mode to assess which 3D models should be simplified to make
your world more performant if you’re running into performance issues.  
### Use wireframe view mode to optimize your world

 Wireframe view mode comes in three variants:
• Wireframe.
• Solid wireframe.
• Shaded wireframe.
 For reference, the screenshot below displays a scene in the default Shaded view mode: ![Default shaded view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484854812_677084104829544_7156692161690434146_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ej6-J5vbtScQ7kNvwEO-N-s&_nc_oc=AdnOT_z8Tq4KHszTBfl6vUpOYgDXZJg2gS2-txbdFpDPgb0oFKC2AATia5mTAk_rLSk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6MPM-D7Z8i9RXsM5mwRc...
Shaded (default) view mode. Wireframe view mode allows you to see through 3D models to get a high level view of your
world’s geometric complexity and identify unintended overlaps between models in your
world. ![Wireframe view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485027199_677084101496211_3942768371206233632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=o1o7GF8LzDAQ7kNvwFuR3NL&_nc_oc=Adl5Rci0y4e6TkosUehoN2bcpA0tTtFRf-Tbonw-RH3WXI4Jj-pLbGg0AeoH3PScaSA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6MPM-D7Z8i9RXsM5mwRc6Q&oh=00_AffaVvvdf...
Wireframe view mode. Solid wireframe view mode places a solid material underneath the wireframe. Use this view mode to
help you tell objects apart more clearly and distinguish which objects are closer
to the camera while in wireframe view. ![Solid wireframe view mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484850704_677084091496212_497250801397507062_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=fAOMoBK6RZ0Q7kNvwGX6ipm&_nc_oc=AdkJEGm5XkMs_Vqg8yH0Ix0kaiF9sLZRBZr3Id4DpzB-GiyGmEArhrl0LlsJ0xOb97Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6MPM-D7Z8i9RXsM5mwRc6Q...
Solid wireframe view mode. Shaded wireframe view mode shows the object’s texture underneath the wireframe. Use this view mode to
help you understand how textures are affected by their underlying 3D models and
debug texture issues that may be caused by the meshes underneath them. ![Shaded wireframe view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485768707_677084114829543_6632284219993419295_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=T8AIYDqJWOQQ7kNvwHEpSkD&_nc_oc=AdlPwrpYn99cIm0DiKbB4CkVKr73kXIWiglO26fteDcNzkHwaJUNjgbDZOCJ1XTzSrU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6MPM-D7Z8i9RXsM5mwR...
Shaded wireframe view mode.  
## Collision view mode

 Collision view mode helps you identify which objects in your world have colliders. Use this
view mode to optimize your world’s performance by disabling colliders on objects
that players can’t reach or resizing colliders only to where they are necessary.  
### Use collision view mode to optimize your world

 In collision view mode, colliders are visualized using a semi-transparent
colored material. ![Collision view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484831925_677084094829545_4062895164199937649_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=K6doPObY-00Q7kNvwFRDI65&_nc_oc=AdnLbADubqzNHqJmR5LsmZc1SNUDvvvP_zralzG_evZ773tGK26oiTb2Mg7YQHk-gRg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6MPM-D7Z8i9RXsM5mwRc6Q&oh=00_AfeQRm5wPD...
Collision view mode.  
## Overdraw view mode

 Overdraw view mode helps you see where the same pixels are being drawn more than once in a
scene so you can better optimize your world. Turning on overdraw view mode shows
where meshes overlap so you can change, remove, or reposition geometries to make
your world more performant.  
### Use overdraw view mode to optimize your world

 In overdraw view mode, you can see where geometries overlap the most in your
world by looking for the areas that are most opaque. Each occurrence of overdraw is
a place where unnecessary pixels are being drawn. You can optimize your world
by modifying your meshes and optimizing your layout to minimize overdraw. ![Overdraw view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484810609_677084108162877_6307321041192439066_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=d5KJKcT576oQ7kNvwFuKCa8&_nc_oc=AdneZn8vBA-DekU19nGzGU2f-aY3ZIsPMYPfEJBabg9XyRJiGW5y1WHCwAwzWT-mUxM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6MPM-D7Z8i9RXsM5mwRc...
Overdraw view mode.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
