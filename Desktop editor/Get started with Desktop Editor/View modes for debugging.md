Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/view-modes-for-debugging

# View modes for debugging

Debugging view modes in desktop editor can help you debug your world. Its features include:

* Wireframe viewing options that give you visibility into the geometric complexity of your meshes.
* A collision view mode that helps you understand how players will be able to interact with objects in your world.
* An overdraw view mode that helps you see where the same pixels are being drawn more than once.

## Opening in desktop editor

To open the view modes menu, select the view icon on the right side of the toolbar.

![The debugging view mode icon](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/485353085_677084098162878_564880857810169754_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=YVgJIfKqKV4Q7kNvwFbO19N&_nc_oc=AdlAbnYhLSMl6gJzfSUPsH4qLE4AsaDQKs0RJWDnIAaC90mGFz4uBwP6zk40cZfq-_Y&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=-X3m7dOXY9A2lMq6mgXTcg&oh=00_AfnbUx-FiOWNJop59rqbY_EKunhBEt_Ux8mIbSNMqlCw8g&oe=694BDAEB)

Hovering your cursor over each option reveals a description of the view mode. See [Available view modes](https://developers.meta.com/horizon-worlds/learn/documentation/view-modes-for-debugging#available-view-modes) for further details. After selecting an option, the view mode will be displayed inside the dropdown button. Hovering over this dropdown button will also show you the active view mode.

![List of Available viewmodes](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484836232_677084111496210_6923534349643550921_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=WxeGckS2bCkQ7kNvwFBtMG8&_nc_oc=Adlp-op8fDgEulD46JL46IL56wV-hAqOFRo0fQQ_s6f1Xi1T2aOvpXe3nID8YypXQUs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-X3m7dOXY9A2lMq6mgXTcg&oh=00_AfmBV3J7j4RO-ptNcOCXNBM43108QYBTUjCnSr3TPLrRsQ&oe=694BBE50)

### Opening in VR

In VR, first [Enable the Utilities Menu](/hw-docs/Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md), then open your wearable and select the desired view mode.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75348041_964519652195117_6384169750030954787_n.gif?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=mkv6sHwIPCAQ7kNvwHMp0vj&_nc_oc=Adm9j_GBOw9pkYHEDpoxNR5GMTGuLT7gQndQ_vuzZQWuqoQitSAo3PRFh9jFkOqI8NQ&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afn9pmGrF1JJh1pgbf5AnJaZUbNMKXG5f3W2cAoSN-eUxQ&oe=694BBEBA)

## Available view modes

| View mode | Description |
| --- | --- |
| **Shaded** | - Texture only.   - This is the default view that shows meshes with their textures available. |
| **Wireframe** | - Wireframe only.   - Use this to view your world’s geometric complexity. It allows you to see through meshes for debugging unintended overlaps between objects. |
| **Solid wireframe** | - Wireframe over a solid material.   - This option places a solid material underneath the wireframe, it’s useful for displaying objects that are apart and distinguishing which objects are closer to the camera. |
| **Shaded wireframe** | - Wireframe over the object’s texture.   - Use this view to understand how textures are affected by their underlying mesh geometry and debug texture issues that may be caused by the meshes underneath them.   - **Note:** There is a known bug in the desktop editor where jumping to Preview mode while Shaded Wireframe mode is active causes the player to pass through geometry. |
| **Collision** | - Shows object colliders.   - Use this view to see which objects have colliders. You can also use this to optimize the performance of a world to disable collisions on objects that players can’t reach, reducing the overall complexity. |
| **Overdraw** | - Shows pixel overdraw.   - Use this view to see where the same pixels are being drawn more than once in a scene so you can better optimize your world.   - See the [Overdraw view mode](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/View%20modes%20for%20debugging.md#overdraw-view-mode) section for more information. |

## Keyboard shortcuts

These numeric keys provide shortcuts to the different view modes:

* 1: Shaded
* 2: Wireframe
* 3: Solid wireframe
* 4: Shaded wireframe
* 5: Collision
* 6: Overdraw

## Wireframe view mode

Wireframe view mode helps you see the geometric complexity of your 3D models. You can use this view mode to assess which 3D models should be simplified to make your world more performant if you’re running into performance issues.

### Use wireframe view mode to optimize your world

Wireframe view mode comes in three variants:

* Wireframe.
* Solid wireframe.
* Shaded wireframe.

For reference, the screenshot below displays a scene in the default **Shaded view** mode:

![Default shaded view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484854812_677084104829544_7156692161690434146_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=y1PAndJ043MQ7kNvwEmL7y-&_nc_oc=AdkBUiuPpyYDsXxNfqrgHD1CewE2ZuqN9st76gYcRIvz6pSmtthUR6dsgFqxT9El6kk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-X3m7dOXY9A2lMq6mgXTcg&oh=00_AfkWC6ndVXbXpz7KpU7jMYke0WVldl-ho7h7E9wUoExt4g&oe=694BBC62)*Shaded (default) view mode.*

**Wireframe view** mode allows you to see through 3D models to get a high level view of your world’s geometric complexity and identify unintended overlaps between models in your world.

![Wireframe view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485027199_677084101496211_3942768371206233632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=FfV9WYEMzFQQ7kNvwHPYOay&_nc_oc=AdlDfzvT9ar17Gx-Hk2xinSgOhz0GVEHnSon-i5hzCTuR8-YrJ3UyPCRnj-OQFR-OMY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-X3m7dOXY9A2lMq6mgXTcg&oh=00_AflcDEQybWZVIShLfGfxz1euR1s2C2g3Q7OGsqV_PMqxtg&oe=694BCE1E)*Wireframe view mode.*

**Solid wireframe view** mode places a solid material underneath the wireframe. Use this view mode to help you tell objects apart more clearly and distinguish which objects are closer to the camera while in wireframe view.

![Solid wireframe view mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484850704_677084091496212_497250801397507062_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=lbESJFCKDu0Q7kNvwH-_Udd&_nc_oc=AdlAJi__bgM18eJ3fvaHMOVs1dDqTBLhwodb-xIXRjogIpvZdjdU5Ix8Trgo69Lb76s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-X3m7dOXY9A2lMq6mgXTcg&oh=00_Afml5hj5GC2Pu2Xum11w2-2L47h2q8M9SoZEZbeaC6iJ9w&oe=694BC997)*Solid wireframe view mode.*

**Shaded wireframe view** mode shows the object’s texture underneath the wireframe. Use this view mode to help you understand how textures are affected by their underlying 3D models and debug texture issues that may be caused by the meshes underneath them.

![Shaded wireframe view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485768707_677084114829543_6632284219993419295_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=dtoyulmOdd4Q7kNvwHASmns&_nc_oc=AdnsKSOnyFNljfuainH585IfjTz6-Eko1-o3oHZ7R4iB94j07Wj5flsenOkb5h867m0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-X3m7dOXY9A2lMq6mgXTcg&oh=00_Afkuy8AeB0FNAYYON5rUGdVKNIkPEcG-tGDpEU9FSth-UQ&oe=694BE35B)*Shaded wireframe view mode.*

## Collision view mode

**Collision view** mode helps you identify which objects in your world have colliders. Use this view mode to optimize your world’s performance by disabling colliders on objects that players can’t reach or resizing colliders only to where they are necessary.

### Use collision view mode to optimize your world

In collision view mode, colliders are visualized using a semi-transparent colored material.

![Collision view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484831925_677084094829545_4062895164199937649_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=XJ-_KznF3c8Q7kNvwEuvfYB&_nc_oc=AdkgbZvTjvmBzc65BAvSa8OQwLJZyIy-OKJjWwt83a4PfodGAw9KS8id6O91pgsMON8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-X3m7dOXY9A2lMq6mgXTcg&oh=00_Afl3ILR5x6ILbmMrg7N_PCnaMHpaAW7el_HQgXeoDsXX7Q&oe=694BB940)*Collision view mode.*

## Overdraw view mode

**Overdraw view** mode helps you see where the same pixels are being drawn more than once in a scene so you can better optimize your world. Turning on overdraw view mode shows where meshes overlap so you can change, remove, or reposition geometries to make your world more performant.

### Use overdraw view mode to optimize your world

In overdraw view mode, you can see where geometries overlap the most in your world by looking for the areas that are most opaque. Each occurrence of overdraw is a place where unnecessary pixels are being drawn. You can optimize your world by modifying your meshes and optimizing your layout to minimize overdraw.

![Overdraw view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484810609_677084108162877_6307321041192439066_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZNoCilmWYZAQ7kNvwGfokaj&_nc_oc=Adl2BKGIF78sDyBxnaqQK3Y1LqujZ3oJ3eDy-yvNp9t45EYu3tcb4y1Co7HtHxw_UrU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-X3m7dOXY9A2lMq6mgXTcg&oh=00_Aflcf23XC335DVhyrPRn_m_PXalgUZYaPWh6ZEtOTfXbsw&oe=694BC88F)*Overdraw view mode.*