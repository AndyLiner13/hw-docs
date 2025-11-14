Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/aim-direction

# Aim Direction

## Overview

You can use the **GrabbableAim** property to specify the direction a weapon points when it’s held. Without this, the firing direction of the weapon is driven by animation, which leads to unpredictable results. The aim direction allows you to specify a true aiming reference for projectile launchers that are linked to a grabbable entity, for web and mobile players.

For example, a shotgun setup is displayed below:

![An example shotgun asset that uses the grabbable aim property.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/492655308_705052888699332_2797759283830252011_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=myvOgCHNNyoQ7kNvwG6zRI3&_nc_oc=AdmTO7hsHnl4-OmCtmoD35dWQ0btf_GIE1z-dKigRieDw37HVPxJ4yLjcj8qegUYJeE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WmYVpSjr8wNliZwagJIQXw&oh=00_AfhTvbNoru6sQe6jDLLcLN0d4vsEYR_kiYXFwXqkJBmjfQ&oe=69312931)

### GrabbableAim property

The **GrabbableAim** property represents the position and orientation in which bullets travel, and you can click and drag it into a new position. This setting ensures that the gun aims towards the reticle in the center of the screen, while maintaining any **ProjectileLauncher** offsets for web and mobile players.

From the desktop editor, when a grabbable object is selected you can adjust the GrabbableAim property from the **More** section by enabling **Use VR Grab Anchor**. You can then adjust the **Grab Aim Position** and the **Grab Aim Rotation**.

![The editable properties for an object that uses a VR Grab Anchor.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/491926812_705052892032665_6243466676556598810_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=OmAeE_hiXD0Q7kNvwE6JYXb&_nc_oc=AdkBmUUUbfeJjbWpZn_zuk6GSIgLBW3-xh1IVEbBwcKphOxf6m8o1sffc7qQhOQG9SA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=WmYVpSjr8wNliZwagJIQXw&oh=00_AfhBtjZX7fNk_y2tk8xYzlfWsvjqPCglRcDkSLlIukmYpw&oe=69311917)

Grab Aim Position and Rotation only apply to projectile launchers owned by the player. Make sure to set the player as the owner of the projectile launcher during grab for this feature to work correctly. Setting the local player as the owner of the launcher also provides a better player experience, giving the player instant projectile launcher feedback.