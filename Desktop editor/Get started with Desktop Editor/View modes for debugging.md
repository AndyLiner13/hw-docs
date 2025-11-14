Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/view-modes-for-debugging

# View modes for debugging

Debugging view modes in desktop editor can help you debug your world. Its features include:

* Wireframe viewing options that give you visibility into the geometric complexity of your meshes.
* A collision view mode that helps you understand how players will be able to interact with objects in your world.
* An overdraw view mode that helps you see where the same pixels are being drawn more than once.

## Opening in desktop editor

To open the view modes menu, select the view icon on the right side of the toolbar.

![The debugging view mode icon](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/485353085_677084098162878_564880857810169754_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=mH9ArLM-lQcQ7kNvwGLjxna&_nc_oc=AdkafMqp7uHotbZidj8hqdLy4IP68So192DtcgiOQbwh0YdjEbs1mDPZwtnIKkw2_ZQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=jdxgWU3Tj0AFapOxTGpL-g&oh=00_Afiy5iuHVuPJeBCiEy5xa8Jqu0y6ks0RsPwANHsFhhV4_A&oe=693144AB)

Hovering your cursor over each option reveals a description of the view mode. See [Available view modes](https://developers.meta.com/horizon-worlds/learn/documentation/view-modes-for-debugging) for further details. After selecting an option, the view mode will be displayed inside the dropdown button. Hovering over this dropdown button will also show you the active view mode.

![List of Available viewmodes](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484836232_677084111496210_6923534349643550921_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=DonjZmslVnIQ7kNvwET9pB8&_nc_oc=AdmwJLgXFOBfKdzZPSJ4AmZjUuBbrQPfXNtVHChn0AgK9N0UKeTpOP4fky-ar0cIpHw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jdxgWU3Tj0AFapOxTGpL-g&oh=00_Afj5iywCnfdtAMcy2kmqDkDmEWMe78jfeEbLB9y5TcQHsw&oe=69312810)

### Opening in VR

In VR, first [Enable the Utilities Menu](/hw-docs/Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md), then open your wearable and select the desired view mode.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75348041_964519652195117_6384169750030954787_n.gif?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=SRLeGuOu0MkQ7kNvwEoJSwZ&_nc_oc=AdmygnBSf67fHvKu2KdJtgo3Vobr15CY3nvYkIwXIm-xOQjuslwntXddxwAeV2CGXPY&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfgHm7gmHCB6AZiV4E9Uoi6EbA2KR2KfCZdt_D_Zn95kJA&oe=6931287A)

## Available view modes

| View mode | Description |
| --- | --- |
| **Shaded** | - Texture only.   - This is the default view that shows meshes with their textures available. |
| **Wireframe** | - Wireframe only.   - Use this to view your world’s geometric complexity. It allows you to see through meshes for debugging unintended overlaps between objects. |
| **Solid wireframe** | - Wireframe over a solid material.   - This option places a solid material underneath the wireframe, it’s useful for displaying objects that are apart and distinguishing which objects are closer to the camera. |
| **Shaded wireframe** | - Wireframe over the object’s texture.   - Use this view to understand how textures are affected by their underlying mesh geometry and debug texture issues that may be caused by the meshes underneath them.   - **Note:** There is a known bug in the desktop editor where jumping to Preview mode while Shaded Wireframe mode is active causes the player to pass through geometry. |
| **Collision** | - Shows object colliders.   - Use this view to see which objects have colliders. You can also use this to optimize the performance of a world to disable collisions on objects that players can’t reach, reducing the overall complexity. |
| **Overdraw** | - Shows pixel overdraw.   - Use this view to see where the same pixels are being drawn more than once in a scene so you can better optimize your world.   - See the [Overdraw view mode](#overdraw-view-mode) section for more information. |

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

![Default shaded view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484854812_677084104829544_7156692161690434146_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=YxpJpkxGQm0Q7kNvwFmD9qZ&_nc_oc=Adlm2DJuF7d6jurNXI2CYP71PsXAyGMXaC-FMnSLvSvZHO1jCWfvmrihxBi4luhc0pE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=jdxgWU3Tj0AFapOxTGpL-g&oh=00_Afj03QNl7wmgqLm8BMLzGYj05NCPt20EcoNEPqy5L4-Erw&oe=69312622)*Shaded (default) view mode.*

**Wireframe view** mode allows you to see through 3D models to get a high level view of your world’s geometric complexity and identify unintended overlaps between models in your world.

![Wireframe view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485027199_677084101496211_3942768371206233632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=n58-wu78PnYQ7kNvwElROEQ&_nc_oc=Adma5QCjwknkZk_OQkKomL_tJz5XBRmZqtMXfGtuqu3vC4bozcjaXksYkX2QeOW4tHg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=jdxgWU3Tj0AFapOxTGpL-g&oh=00_AfgT1_zwHfZyVfe455tgfYMWeqIWo5KTt2Ba3BCSi7U1qw&oe=693137DE)*Wireframe view mode.*

**Solid wireframe view** mode places a solid material underneath the wireframe. Use this view mode to help you tell objects apart more clearly and distinguish which objects are closer to the camera while in wireframe view.

![Solid wireframe view mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484850704_677084091496212_497250801397507062_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=fFTeXoU9-qAQ7kNvwE4y2Vd&_nc_oc=Adk096jfGT1XlR-NtmprkeVMV1YicqFkKjJFN0_E--IXV9ROT9YXq9HuUFOjM4YdYSc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jdxgWU3Tj0AFapOxTGpL-g&oh=00_Afgl5YIvQbTy8TDdb04mqLmY87VIXl4VKgIulC8QYSUrWQ&oe=69313357)*Solid wireframe view mode.*

**Shaded wireframe view** mode shows the object’s texture underneath the wireframe. Use this view mode to help you understand how textures are affected by their underlying 3D models and debug texture issues that may be caused by the meshes underneath them.

![Shaded wireframe view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485768707_677084114829543_6632284219993419295_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Iz3sXXjekAAQ7kNvwGEOPWc&_nc_oc=AdkaCFV-L422Q7cQfXtQWtjD2BrA3wCi5OQFod6nblvgHtgUuU27ISeD2SpuQ6JydQA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=jdxgWU3Tj0AFapOxTGpL-g&oh=00_AfhP-3aT2GgviutzkGSDTWJSgaJeRPDf8YdQSav0JYIJYQ&oe=693114DB)*Shaded wireframe view mode.*

## Collision view mode

**Collision view** mode helps you identify which objects in your world have colliders. Use this view mode to optimize your world’s performance by disabling colliders on objects that players can’t reach or resizing colliders only to where they are necessary.

### Use collision view mode to optimize your world

In collision view mode, colliders are visualized using a semi-transparent colored material.

![Collision view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484831925_677084094829545_4062895164199937649_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=lHH6fbEwNlsQ7kNvwHa2pCZ&_nc_oc=Adnwac4R25DxTYa8-0d_puUNlnY-N27C68-TNWVKwDBHy8kKxX2FJ-QdB81bhlvf3QQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=jdxgWU3Tj0AFapOxTGpL-g&oh=00_AfguVlHMfkkjKEgtut_Xbchhm1lux1JpNzaxBwyCIvdEug&oe=69312300)*Collision view mode.*

## Overdraw view mode

**Overdraw view** mode helps you see where the same pixels are being drawn more than once in a scene so you can better optimize your world. Turning on overdraw view mode shows where meshes overlap so you can change, remove, or reposition geometries to make your world more performant.

### Use overdraw view mode to optimize your world

In overdraw view mode, you can see where geometries overlap the most in your world by looking for the areas that are most opaque. Each occurrence of overdraw is a place where unnecessary pixels are being drawn. You can optimize your world by modifying your meshes and optimizing your layout to minimize overdraw.

![Overdraw view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484810609_677084108162877_6307321041192439066_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=QUi2TyxrzmkQ7kNvwGjpehD&_nc_oc=AdnuNELcTV6NCZUUAKqGgZXoTUBGPoBuFUlLJYzkb6_hWIjciqZC5bDdZzZqgd5gxVY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=jdxgWU3Tj0AFapOxTGpL-g&oh=00_AfhL_Zo9542BugNIMu9sN4i9LsVWO-mc91CyoK-goh8hqw&oe=6931324F)*Overdraw view mode.*