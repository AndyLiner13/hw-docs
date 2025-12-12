Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/holster-icon-menu

# Holster Icon Menu

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e37915c27aae4263ff6dc0ff7e31f17f1f6ee1d6419b38f25e30325f5acadc82.md)

### Overview
This image depicts a first-person view within a video game environment. The player character is seen from behind, holding a weapon, with a menu interface displaying various weapon options on the right side of the screen. The background features a desert-like landscape with palm trees, rocky formations, and a colorful sky.

### Key Elements
- **Player Character**: A character with dark hair, wearing a green plaid shirt and blue jeans, is facing away from the viewer. The character is holding a gun.
- **Weapon Menu**: Located on the right side of the screen, circular icons represent different weapons. These include a shotgun, a grenade, a pistol, a sword, and another pistol. Each icon has a number next to it indicating the quantity available (e.g., "3").
- **Background**: The scene is set in a desert environment with palm trees, rocks, and a vibrant sky with clouds and a gradient of colors ranging from pink to blue.
- **UI Elements**: At the top left, there are two icons resembling a microphone and a settings menu. On the top right, there is a menu icon represented by three horizontal lines.
- **Foreground**: There are some small plants and debris scattered around the ground near the character.

### Visual Flow / Relationships
The most prominent visual element is the player character, as the perspective is from behind them. The weapon menu is secondary but highly interactive, suggesting that the player can switch weapons. The background provides context to the setting, while the UI elements offer quick access to game functions.

</details>

<p></p>



The holster icon menu is a menu of UI icons representing items attached to a player’s avatar. Players can use these icons to switch between and equip items. These icons show items that are grabbable entities attached to the player.

**Note**: The holster button to open the holster icon menu will appear if a player has more than one grabbable entity attached.

## Attaching a grabbable entity to a player

For an item to appear in the holster icon menu when it is not equipped you must attach that grabbable entity to the player:

```
this.entity
  .as(hz.AttachableEntity)
  .attachToPlayer(player, AttachablePlayerAnchor.Torso);
```

You can combine attaching the entity with a primary input action API so the player can control the attachment process:

```
this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnIndexTriggerUp,
  (player: Player) => {
    this.entity
      .as(hz.AttachableEntity)
      .attachToPlayer(player, AttachablePlayerAnchor.Torso);
  },
);
```

You can configure how a grabbable entity will show up in the holster icon menu by setting the **Holster Icon** property in the entity properties panel:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/58fac93c94c53146b7147c2c0ed693ae7c9aedf4ac3999ad4a7f59c5994e80e8.md)

### Overview
This image depicts a dropdown menu within a user interface, likely part of a game or application settings screen. The dropdown is open, revealing a list of options related to weapon attachments or customization. The interface has a dark theme with light text for readability.

### Key Elements
- **Dropdown Menu**: Located centrally, with a black background and white text. The menu items include "None," "Ability," "Aim," "Close," "Contract," "Door," "Drink," "Drop," "Holster Icon," and "Punch."
- **Highlighted Option**: "Holster Icon" is highlighted with a red rectangle, indicating selection or focus.
- **Selected Option**: "Punch" is selected under the "Holster Icon" option, shown in a lighter gray background.
- **Toggle Switches**: Two toggle switches are visible at the bottom, labeled "Attach to 2D Screen" and "Keep Ownership On Collision."

### Visual Flow / Relationships
The dropdown menu is the most prominent visual element, drawing attention due to its central placement and the red highlight. The toggle switches at the bottom provide additional interactive elements but are less visually dominant compared to the dropdown.

</details>

<p></p>



* **Default value:** If you don’t specify a value, the holster icon will show the default slot number. <details>
                                                                                                       <summary>Image Content</summary>
                                                                                                       
                                                                                                       <p></p>
                                                                                                       
                                                                                                       [All image details and metadata](../../image_data/61d9210d663a1f1c925758a980b26e21e8b3e29ba3512b447e592c7363bd445e.md)
                                                                                                       
                                                                                                       ### Overview
                                                                                                       This image depicts a 3D-rendered character standing in a grid-like environment. The character is viewed from behind, wearing a patterned sweater and dark pants. There are circular icons at the bottom of the screen, numbered 1, 2, and 3, with additional smaller numbers beneath them.
                                                                                                       
                                                                                                       ### Key Elements
                                                                                                       - **Character**: A 3D model of a person with short brown hair, wearing a sweater with a geometric pattern and dark pants. The character is facing away from the viewer.
                                                                                                       - **Background**: A light green grid floor with darker green lines forming squares.
                                                                                                       - **Circular Icons**: Three large circles at the bottom of the screen, labeled 1, 2, and 3. Each circle contains a smaller number beneath it.
                                                                                                         - **Circle 1**: Contains the number '1' within a blue ring.
                                                                                                         - **Circle 2**: Contains the number '2'.
                                                                                                         - **Circle 3**: Contains the number '3'.
                                                                                                       - **Smaller Numbers**: Below each larger circle, there are smaller numbers corresponding to the larger ones (1, 2, 3).
                                                                                                       
                                                                                                       ### Visual Flow / Relationships
                                                                                                       The most prominent visual elements are the circular icons at the bottom. The character is positioned centrally, with the icons arranged horizontally below. There are no arrows or lines connecting the elements, but the layout suggests a user interface where the circles might represent different actions or selections.
                                                                                                       
                                                                                                       </details>
                                                                                                       
                                                                                                       <p></p>
                                                                                                       
                                                                                                       
* [Action icon value:](Action%20Buttons.md) The holster icon will show the selected action icon.
* **None:** The entity will not be included in the holster icon menu.

To ensure an entity won’t appear in the holster icon menu, you can either:

* Select **None** in the **Holster Icon** property on the grabbable entity.
* Set the **Who Can Grab?** property of the grabbable entity to an empty array of Script assignees to make it impossible to grab.

#### Available Action Icons

The pool of available icons grows continually. The following table lists examples of the icons that you can select for controls on web and mobile.

| Shoot | Reload | Jump | Unholster | Drop | Special | Grab |
| --- | --- | --- | --- | --- | --- | --- |
| Interact | Throw | Ability | Rocket | Airstrike | Swing | Swap |
| Inspect | Open Door | Shield | Aim | Dual Wield | Sprint | Crouch |
| Eat | Drink | Speak | Purchase | Place | Heal |  |