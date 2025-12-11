Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/view-modes-for-debugging

# View modes for debugging

Debugging view modes in desktop editor can help you debug your world. Its features include:

* Wireframe viewing options that give you visibility into the geometric complexity of your meshes.
* A collision view mode that helps you understand how players will be able to interact with objects in your world.
* An overdraw view mode that helps you see where the same pixels are being drawn more than once.

## Opening in desktop editor

To open the view modes menu, select the view icon on the right side of the toolbar.

![The debugging view mode icon](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/485353085_677084098162878_564880857810169754_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=sQB3DahOLjcQ7kNvwErKihh&_nc_oc=AdnGL6rXcJEucCHa6WKwdrPNA4-FEfSfBHqJP_4CWsNJPCdy6kjPhJ3BlXIooUYIhhECifadX9bQZ5N0EAvtEBrZ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=-AeCUdGUvRY0rPzFUtv2wQ&oh=00_AfnGaZlFUu3JNaEOybQ2_7KpnASlcyaLDPic5GJhAEKRnA&oe=695585EB)

Hovering your cursor over each option reveals a description of the view mode. See [Available view modes](https://developers.meta.com/horizon-worlds/learn/documentation/view-modes-for-debugging#available-view-modes) for further details. After selecting an option, the view mode will be displayed inside the dropdown button. Hovering over this dropdown button will also show you the active view mode.

![List of Available viewmodes](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484836232_677084111496210_6923534349643550921_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=QfU-DwLnB2UQ7kNvwH2odn5&_nc_oc=AdkXFmQyXA_63qA8ArYzipUTvpAuGxfPD0E6v-g6Tl0e8iYFAINKw06oMRyqXsLznwL9HhiRzaEzF6bNR8YFJJtQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-AeCUdGUvRY0rPzFUtv2wQ&oh=00_AfmncsqM3hOgPCojy6RyEBHqhAJkn2SiUCxewFzkZ_G0tw&oe=6955A190)

### Opening in VR

In VR, first [Enable the Utilities Menu](../../Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md), then open your wearable and select the desired view mode.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75348041_964519652195117_6384169750030954787_n.gif?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=wbnxDB4JaLUQ7kNvwGIFyNE&_nc_oc=AdnewBbPcAcYHDo1YS3PzJTR0Qrji3vFUFfk_IqbvSlxZq0-D5FpdlY_KRHu845g2tk5If5hqaHYvBmZwak0sQJH&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afk-l8dIz4jDmubbioakMqvXiFg0qYXn5TpsSqWzZpP73Q&oe=6955A1FA)

## Available view modes

| View mode | Description |
| --- | --- |
| **Shaded** | - Texture only.   - This is the default view that shows meshes with their textures available. |
| **Wireframe** | - Wireframe only.   - Use this to view your world’s geometric complexity. It allows you to see through meshes for debugging unintended overlaps between objects. |
| **Solid wireframe** | - Wireframe over a solid material.   - This option places a solid material underneath the wireframe, it’s useful for displaying objects that are apart and distinguishing which objects are closer to the camera. |
| **Shaded wireframe** | - Wireframe over the object’s texture.   - Use this view to understand how textures are affected by their underlying mesh geometry and debug texture issues that may be caused by the meshes underneath them.   - **Note:** There is a known bug in the desktop editor where jumping to Preview mode while Shaded Wireframe mode is active causes the player to pass through geometry. |
| **Collision** | - Shows object colliders.   - Use this view to see which objects have colliders. You can also use this to optimize the performance of a world to disable collisions on objects that players can’t reach, reducing the overall complexity. |
| **Overdraw** | - Shows pixel overdraw.   - Use this view to see where the same pixels are being drawn more than once in a scene so you can better optimize your world.   - See the [Overdraw view mode](View%20modes%20for%20debugging.md#overdraw-view-mode) section for more information. |

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

![Default shaded view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484854812_677084104829544_7156692161690434146_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=KifcAztmi78Q7kNvwFOFfrh&_nc_oc=Adm9HSZSjW5Honvs-mfI1k4iyFrJqvXH9eGtU2H4ZhtMfW2Mfub9JrtZK9zewe6vKYezcssV_ay4ABw4E-4ST4kg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-AeCUdGUvRY0rPzFUtv2wQ&oh=00_Afk4iVq9z8lBG2Do_000NIW278PifqqmPsqC3hmPxTkEqA&oe=69559FA2)*Shaded (default) view mode.*

**Wireframe view** mode allows you to see through 3D models to get a high level view of your world’s geometric complexity and identify unintended overlaps between models in your world.

![Wireframe view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485027199_677084101496211_3942768371206233632_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=vK4NjuIjiJkQ7kNvwHv_16p&_nc_oc=AdnUO5xeDVJfml9fXU_QXyt6Fg1SHm-Jc2zJIXxmpqf7jCOMEz44-7QeOj-9BS_yCutt9jUjA2_JxvZ01Qhovuyk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-AeCUdGUvRY0rPzFUtv2wQ&oh=00_AfnDNk19o4WFfu6r6FLT5nYGPIpwehXG8O7tsuCWgplgUA&oe=6955791E)*Wireframe view mode.*

**Solid wireframe view** mode places a solid material underneath the wireframe. Use this view mode to help you tell objects apart more clearly and distinguish which objects are closer to the camera while in wireframe view.

![Solid wireframe view mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484850704_677084091496212_497250801397507062_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Wk4RlUTY-EIQ7kNvwHruVzw&_nc_oc=AdllOaYtTd1D5r61aRYHzRWskno4sXMWMX2nWCfM85kfsaE3BCeD86AAt5NXv12O-xq6pWrRg9sX0pw4Lrr-ExK0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-AeCUdGUvRY0rPzFUtv2wQ&oh=00_AfmdpB60PZiSK6UzyNyCrbA2N9Hs-WmZRlQtGY2EmGU5uA&oe=69557497)*Solid wireframe view mode.*

**Shaded wireframe view** mode shows the object’s texture underneath the wireframe. Use this view mode to help you understand how textures are affected by their underlying 3D models and debug texture issues that may be caused by the meshes underneath them.

![Shaded wireframe view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/485768707_677084114829543_6632284219993419295_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=qryhTSsKnaMQ7kNvwGsnC81&_nc_oc=AdlVYzYZm35mzuiDbn89ZcLfgNuOkuzIZ0i4tBarkBP8y9sGjxf808sGdi-zGssmT3KWO8f68I8yLErbICoIZJAV&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-AeCUdGUvRY0rPzFUtv2wQ&oh=00_AfmpRSbaUbL8wGrM9Q61JDKj8DYNsioMvR7BzPK5n9A-tw&oe=69558E5B)*Shaded wireframe view mode.*

## Collision view mode

**Collision view** mode helps you identify which objects in your world have colliders. Use this view mode to optimize your world’s performance by disabling colliders on objects that players can’t reach or resizing colliders only to where they are necessary.

### Use collision view mode to optimize your world

In collision view mode, colliders are visualized using a semi-transparent colored material.

![Collision view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484831925_677084094829545_4062895164199937649_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=l3_KKZ__CWMQ7kNvwFS4qVg&_nc_oc=AdnAAf8R7uKoxjs5k9xgLajsyQZ_Rof-PuPIHFNuP5TiQ2CfOmanhog9bQTCHoMyDjBfQEliKShZv3mQgzzJEoS-&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-AeCUdGUvRY0rPzFUtv2wQ&oh=00_AfnlB6zIS7LBfS0g9uHryn7Wv31UIsUsRHtdw56rFbao7A&oe=69559C80)*Collision view mode.*

## Overdraw view mode

**Overdraw view** mode helps you see where the same pixels are being drawn more than once in a scene so you can better optimize your world. Turning on overdraw view mode shows where meshes overlap so you can change, remove, or reposition geometries to make your world more performant.

### Use overdraw view mode to optimize your world

In overdraw view mode, you can see where geometries overlap the most in your world by looking for the areas that are most opaque. Each occurrence of overdraw is a place where unnecessary pixels are being drawn. You can optimize your world by modifying your meshes and optimizing your layout to minimize overdraw.

![Overdraw view mode](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484810609_677084108162877_6307321041192439066_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=phVvsNJnYlUQ7kNvwFOICPe&_nc_oc=Adn2DXqxv6hRyXeoBKvPMtAM9tOATqMYlbQIE4een4CzTp8HUibmgv2TSfsrvm2eKGX3xU10xhM-8V47mQHpwzjy&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-AeCUdGUvRY0rPzFUtv2wQ&oh=00_AfkZN15BEhcGXBR2hDKtBIE0us9DDhG68uIJH1MJHK-QXw&oe=6955738F)*Overdraw view mode.*