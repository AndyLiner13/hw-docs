Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/view-modes-for-debugging

# View modes for debugging

Debugging view modes in desktop editor can help you debug your world. Its features include:

* Wireframe viewing options that give you visibility into the geometric complexity of your meshes.
* A collision view mode that helps you understand how players will be able to interact with objects in your world.
* An overdraw view mode that helps you see where the same pixels are being drawn more than once.

## Opening in desktop editor

To open the view modes menu, select the view icon on the right side of the toolbar.

![The debugging view mode icon](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/485353085_677084098162878_564880857810169754_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=AW4esPIvLp4Q7kNvwG9NIB3&_nc_oc=AdmtJkIlPr0pOzxJOd5ek8PE5Vs24c-hxp1RlY6tMDJHfhG0rOoBL6kUMpXyQdicnjQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=geUzyu3Rha5BKTvnWEddNA&oh=00_AfiLajpMwlXVZCXIDy2NHkR3TuCpWGsn7bQOv93yWQduYg&oe=692BFEAB)

Hovering your cursor over each option reveals a description of the view mode. See [Available view modes](/horizon-worlds/learn/documentation/view-modes-for-debugging#available-view-modes) for further details. After selecting an option, the view mode will be displayed inside the dropdown button. Hovering over this dropdown button will also show you the active view mode.

![List of Available viewmodes](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484836232_677084111496210_6923534349643550921_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=wPiLmP_l_WIQ7kNvwHx34vu&_nc_oc=AdnjET54AMPMFerslh_JC1tHzL1FCvidjWw5jga2BKF1SSRRy7gh8WnPOfCvTfnti2A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=geUzyu3Rha5BKTvnWEddNA&oh=00_AfgT-e7yPCxr1yZAUbeHRA5T9fvZFvW9728ifitrX7oKow&oe=692BE210)

### Opening in VR

In VR, first [Enable the Utilities Menu](/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/enable-the-utilities-menu/), then open your wearable and select the desired view mode.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75348041_964519652195117_6384169750030954787_n.gif?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=fvefzMqTIkQQ7kNvwFstak2&_nc_oc=AdkvgXLofgCoa3jWAeYAlEFIUYsy78KlHBf9UY_9VNvKRB8sKp9zh-Axlpyo3WANbCw&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfjP5P98M0eZ9fRRNCX2GVI9ramoyYQAXaUTxgozKJKLtw&oe=692BE27A)

## Available view modes

| View mode | Description |
| --- | --- |
| **Shaded** | - Texture only.   - This is the default view that shows meshes with their textures available. |
| **Wireframe** | - Wireframe only.   - Use this to view your world’s geometric complexity. It allows you to see through meshes for debugging unintended overlaps between objects. |
| **Solid wireframe** | - Wireframe over a solid material.   - This option places a solid material underneath the wireframe, it’s useful for displaying objects that are apart and distinguishing which objects are closer to the camera. |
| **Shaded wireframe** | - Wireframe over the object’s texture.   - Use this view to understand how textures are affected by their underlying mesh geometry and debug texture issues that may be caused by the meshes underneath them.   - **Note:** There is a known bug in the desktop editor where jumping to Preview mode while Shaded Wireframe mode is active causes the player to pass through geometry. |
| **Collision** | - Shows object colliders.   - Use this view to see which objects have colliders. You can also use this to optimize the performance of a world to disable collisions on objects that players can’t reach, reducing the overall complexity. |
| **Overdraw** | - Shows pixel overdraw.   - Use this view to see where the same pixels are being drawn more than once in a scene so you can better optimize your world.   - See the [Overdraw view mode](/horizon-worlds/learn/documentation/desktop-editor/getting-started/view-modes-for-debugging#overdraw-view-mode) section for more information. |

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

![Default shaded view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484854812_677084104829544_7156692161690434146_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=AdHveXQ3nmoQ7kNvwFN9Oy9&_nc_oc=AdlMzGbyR1--8HHKK-fAatCZAUgKdDOsxbltpbIJ5yYiNNchtgJvAzJUaFnVsAnlqdc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=geUzyu3Rha5BKTvnWEddNA&oh=00_Afjvq4e5U0SGpQ0A1D--OER4lvU78MxcIXNwkfADZf50pA&oe=692BE022)*Shaded (default) view mode.*

**Wireframe view** mode allows you to see through 3D models to get a high level view of your world’s geometric complexity and identify unintended overlaps between models in your world.

![Wireframe view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485027199_677084101496211_3942768371206233632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=sEBh1Bv1yL0Q7kNvwFdzjSz&_nc_oc=Adm5rQ4oFhuknsq7D0WJqUCCYfseNTn568cDQfx07baDkKgy6qXPrkTnHlYFHioBX3I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=geUzyu3Rha5BKTvnWEddNA&oh=00_AfibSraCkYEjvCjKgDNE3WhpnpC3qfmwevpbRqgus4hRVQ&oe=692BF1DE)*Wireframe view mode.*

**Solid wireframe view** mode places a solid material underneath the wireframe. Use this view mode to help you tell objects apart more clearly and distinguish which objects are closer to the camera while in wireframe view.

![Solid wireframe view mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484850704_677084091496212_497250801397507062_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=XKBBtgkGMDkQ7kNvwFoknBw&_nc_oc=AdlXpiU9p8ve7LTaSq7mq-vmeVaJVohfxLszmHShMjm9db9ofLPtBYiitvHvdVIoM8U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=geUzyu3Rha5BKTvnWEddNA&oh=00_AfiGUGiHLowvEY4IRwQYcdlrvqtvRtz0tAfZ8zAm3UN8MA&oe=692BED57)*Solid wireframe view mode.*

**Shaded wireframe view** mode shows the object’s texture underneath the wireframe. Use this view mode to help you understand how textures are affected by their underlying 3D models and debug texture issues that may be caused by the meshes underneath them.

![Shaded wireframe view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485768707_677084114829543_6632284219993419295_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=nyLiFqF0-4AQ7kNvwEVRCj4&_nc_oc=AdlfoldSTDpWPW3Pj8dXFhHPNODMpmjaklTcl2xrf85YSvXMmzuDCL6xuLi_pQ_WdeY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=geUzyu3Rha5BKTvnWEddNA&oh=00_AfhqOq5pQrkUgIAsN_X7dZMl9CmvTLbC0m3GPXk7pZ4Sfw&oe=692C071B)*Shaded wireframe view mode.*

## Collision view mode

**Collision view** mode helps you identify which objects in your world have colliders. Use this view mode to optimize your world’s performance by disabling colliders on objects that players can’t reach or resizing colliders only to where they are necessary.

### Use collision view mode to optimize your world

In collision view mode, colliders are visualized using a semi-transparent colored material.

![Collision view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484831925_677084094829545_4062895164199937649_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=00gXl-x_FIMQ7kNvwEDYD2x&_nc_oc=AdkEsfEIPftXuFhgU7TvBoWWQZ8uVhMYe3UGQtrB3lXz982ZNYST4t5SNyvdgZD-dPg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=geUzyu3Rha5BKTvnWEddNA&oh=00_AfjZVWiD0CNl7ToqlenjnutEMu1u82uJ6dImBNEhuF6Cow&oe=692BDD00)*Collision view mode.*

## Overdraw view mode

**Overdraw view** mode helps you see where the same pixels are being drawn more than once in a scene so you can better optimize your world. Turning on overdraw view mode shows where meshes overlap so you can change, remove, or reposition geometries to make your world more performant.

### Use overdraw view mode to optimize your world

In overdraw view mode, you can see where geometries overlap the most in your world by looking for the areas that are most opaque. Each occurrence of overdraw is a place where unnecessary pixels are being drawn. You can optimize your world by modifying your meshes and optimizing your layout to minimize overdraw.

![Overdraw view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484810609_677084108162877_6307321041192439066_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y7HbAcKunuMQ7kNvwGbF_fb&_nc_oc=Adk6ccLcjYeuYeP4yZwQ7PbM2Yn6s_YI2e5i-IJCwqXWOcLrBi_MPsO5lGYnsBt5d-w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=geUzyu3Rha5BKTvnWEddNA&oh=00_AfiOubuHKlC0Me62NW6fPQOfILK8Pad767t70zTnh3_ktw&oe=692BEC4F)*Overdraw view mode.*