Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/aim-direction

# Aim Direction

## Overview

You can use the **GrabbableAim** property to specify the direction a weapon points when it’s held. Without this, the firing direction of the weapon is driven by animation, which leads to unpredictable results. The aim direction allows you to specify a true aiming reference for projectile launchers that are linked to a grabbable entity, for web and mobile players.

For example, a shotgun setup is displayed below:

<details>
<summary>An example shotgun asset that uses the grabbable aim property.</summary>

<p></p>

[An example shotgun asset that uses the grabbable aim property.](../../image_data/e68794c5999ebe6c0746d33bba2ef140235737d67542f5023340c8b0e97890ee.md)

### Overview
The image appears to be a screenshot from a video game or interactive simulation. It features a first-person view of a character's hand interacting with objects in a virtual environment. The scene includes a store named "COOL KID'S" in the background, with various items displayed on shelves. The focus is on the hand and its interaction with a grabbable object labeled "GrabbableAim."

### Key Elements
- **Hand**: A blue hand is prominently displayed in the foreground, with a red circle highlighting a specific area near the palm. The hand is interacting with a small white cube labeled "GrabbableAim."
- **GrabbableAim**: A small white cube with a yellow circle around it, indicating it is the target of the hand's interaction.
- **GrabAnchor**: A label at the bottom right corner of the image points to a specific area on the hand, likely indicating the point of interaction or attachment.
- **Background**: The setting is a store named "COOL KID'S," with green walls and shelves displaying various items. The shelves are partially transparent, allowing a view into the store's interior.
- **Store Sign**: The sign above the shelves reads "COOL KID'S" in large orange letters.
- **Shelves**: Green shelves with items such as books and other objects are visible in the background.

### Visual Flow / Relationships
- **Most Prominent**: The hand and the "GrabbableAim" cube are the most prominent elements due to the red circle highlighting the hand's interaction area.
- **Arrows/Connections**: There are no explicit arrows or connections between elements.
- **Spatial Relationships**: The hand is in the foreground, while the shelves and store sign are in the background. The "GrabbableAim" cube is positioned within the hand's reach, suggesting an interaction point.

</details>

<p></p>



### GrabbableAim property

The **GrabbableAim** property represents the position and orientation in which bullets travel, and you can click and drag it into a new position. This setting ensures that the gun aims towards the reticle in the center of the screen, while maintaining any **ProjectileLauncher** offsets for web and mobile players.

From the desktop editor, when a grabbable object is selected you can adjust the GrabbableAim property from the **More** section by enabling **Use VR Grab Anchor**. You can then adjust the **Grab Aim Position** and the **Grab Aim Rotation**.

<details>
<summary>The editable properties for an object that uses a VR Grab Anchor.</summary>

<p></p>

[The editable properties for an object that uses a VR Grab Anchor.](../../image_data/fe98f6b96b23b880eca1510638bf1ea7c78249cc3661438c745706e2fc519d23.md)

### Overview
This image depicts a settings interface with various toggles and input fields related to VR interaction settings. The interface has a dark theme with light text and interactive elements highlighted.

### Key Elements
- **Use VR Grab Anchor Toggle**: Located in the middle section, this toggle is enabled as indicated by the blue color and checkmark. It is surrounded by a yellow rectangle for emphasis.
- **Grab Aim Position Input Fields**: Below the toggle, there are three input fields labeled X, Y, Z for setting the grab aim position. These fields are also highlighted with a yellow rectangle.
- **Grab Aim Rotation Input Fields**: Similar to the grab aim position fields, these are located below and also highlighted with a yellow rectangle.
- **Collision Events From Dropdown**: Positioned at the top right, this dropdown menu is set to "Nothing." It is part of the "More" section.
- **Use Grab Lock Toggle**: Located above the "Use VR Grab Anchor" toggle, this toggle is also enabled.
- **Use Per Hand Grab Anchors Toggle**: Below the "Use VR Grab Anchor" toggle, this toggle is disabled as indicated by the gray color and lack of checkmark.
- **Use HWXS Grab Anchor Toggle**: Below the "Use Per Hand Grab Anchors" toggle, this toggle is also disabled.

### Visual Flow / Relationships
The most prominent elements are the toggles and input fields related to VR grab anchors. The layout follows a vertical flow, with each setting grouped logically under headings. Arrows or lines are not present, but the visual hierarchy is clear through the use of highlighting and placement.

</details>

<p></p>



Grab Aim Position and Rotation only apply to projectile launchers owned by the player. Make sure to set the player as the owner of the projectile launcher during grab for this feature to work correctly. Setting the local player as the owner of the launcher also provides a better player experience, giving the player instant projectile launcher feedback.