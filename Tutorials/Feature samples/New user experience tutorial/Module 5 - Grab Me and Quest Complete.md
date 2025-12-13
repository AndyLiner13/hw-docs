Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/new-user-experience-tutorial/module-5-grab-me-and-quest-complete

# Module 5 - Grab Me and Quest Complete

In this module we will cover how the “Grab Me” VFX system works and how to use it to guide players to important interactive objects and quest completion objectives.

The “Grab Me” VFX System enables creators to draw player attention to key interactive objects such as items that can be grabbed, collectibles, or quest-related elements. It provides visual cues through sparkle effects and highlighting that help players identify important objects in the environment. The system supports both automatic and manual control of visual effects, ensuring players can easily discover interactive elements.

This system leverages visual effect gizmos and entity management to provide clear, contextual guidance and supports both tutorial and gameplay scenarios where object discovery is crucial for progression.

You may want to add this to your world to help players identify objects that can be grabbed, quest items, collectibles, or any other interactive elements that are essential for gameplay progression or tutorial completion.

The “Grab Me” VFX system works with the following scripts included in the tutorial world:

* `VFXController.ts` - Links visual effects to objects that can be grabbed and controls VFX playback based on grab/drop interactions
* `HideGem.ts` - Manages collectible visibility and sparkle effects for multiplayer scenarios where items should disappear after collection

## Implement the grab me VFX components

In the New User Experience (NUX) tutorial world, the “Grab Me” VFX system provides attention-grabbing particle effects that guide players to interactive objects. The system automatically responds to grab and drop events, making it perfect for tutorials, collectibles, and environmental cues.

The VFX system uses two complementary approaches: `VFXController.ts` for basic grab highlighting and `HideGem.ts` for collectible items that need per-player visibility management.

### Setup the basic VFX controller system

The `VFXController.ts` script links visual effects to objects that can be grabbed and automatically controls playback based on player interactions.

- **Prepare your interactive object**: Identify or create the object that players need to grab. Ensure it has grab functionality enabled through the **Grabbable** component in the **Properties** panel.

  <details>
  <summary>Grabbable component</summary>
  
  <p></p>
  
  [Grabbable component](../../../image_data/c45ea85c61766069c69f321948a4f75457e51178f7c6eb44e0a8f7fc449e603d.md)
  
  ### Overview
  This image depicts a user interface element, specifically a settings panel within a software application. The panel contains various configurable options related to a VFX controller named "VFXController."
  
  ### Key Elements
  - **Panel Title**: Located at the top-left corner, the title reads "**VFXController:VFXController**". This is likely the name of the controller being configured.
  - **Grabble Entity**: Positioned below the title, this section includes a circular icon labeled "**Gem - Purple**" which seems to represent a selectable entity.
  - **ModularSparkleV Gizmo**: Below the grabble entity, there is another circular icon labeled "**ModularSparkleV**". This appears to be another selectable or configurable item.
  - **Local Position Fields**: These fields are located below the gizmos and include sliders for adjusting the local position along the X, Y, and Z axes. The current values shown are **X: 0**, **Y: 2**, and **Z: 0**.
  - **Play On Start Toggle**: A toggle switch labeled "**playOnStart**" is present, indicating whether the effect should play when the scene starts.
  - **Play On Drop Toggle**: Another toggle switch labeled "**playOnDrop**" is positioned below the previous toggle, suggesting similar functionality but for a different event.
  
  ### Visual Flow / Relationships
  The layout is structured vertically with elements grouped logically. The title is the most prominent element, followed by the gizmos, then the position fields, and finally the toggle switches. There are no arrows or lines connecting elements, implying a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  
- **Create the VFX system**: Navigate to your **Asset Library** and add a **VFX Particle Gizmo** to your world. Position it near your interactive object or as a child entity. Configure the particle effect properties (color, size, animation) to create an eye-catching “grab me” indicator.
- **Attach the VFX controller**: Create an empty object to house the VFX control logic. Attach the `VFXController.ts` script and configure the essential properties:
  * **grabbableEntity**: Assign the object that players can grab
  * **vfxGizmo**: Assign your VFX Particle Gizmo entity
  * **localPositionOffset**: Set the offset position relative to the grabbable object (default: 0,0,0)
  * **playOnStart**: Enable to automatically play VFX when the world starts (default: true)
  * **playOnDrop**: Enable to replay VFX when the object is released after being grabbed (default: false)
- **Test basic functionality**: The script automatically:
  * Plays VFX when the world starts (if `playOnStart` is enabled)
  * Stops VFX when a player grabs the object
  * Resumes VFX when the object is dropped (if `playOnDrop` is enabled)
  * Positions the VFX to follow the grabbable object with the specified offset

### Setup collectible gem visibility system

For items that should disappear after being collected (like gems or quest items), use the `HideGem.ts` system for proper multiplayer support.

- **Create collectible trigger zone**: Add a **Trigger Zone** gizmo around your collectible object. This detects when players “collect” the item by entering the trigger area.
- **Configure gem visibility management**: Attach the `HideGem.ts` script to your trigger zone and configure:
  * **gem**: Assign the collectible object entity that should become invisible after collection
  * **modularSparkleVFX**: Assign the VFX entity that should stop playing for players who collect the item

  <details>
  <summary>Gem visibility management</summary>
  
  <p></p>
  
  [Gem visibility management](../../../image_data/393df36b26e0658d13593d47b10c00ca6512b9bf6a67799394dcb68379fc39c9.md)
  
  ### Overview
  This image depicts a user interface element, specifically a settings or configuration panel for hiding entities within a modular system. The layout includes a header, input fields, and a dropdown menu.
  
  ### Key Elements
  - **Header**: Located at the top-left corner, labeled "**HideEntity:**". It has a dark gray background with white text.
  - **Input Field**: Positioned below the header, labeled "**entityToHide**". It has a light gray background with black text.
  - **Dropdown Menu**: Situated next to the input field, labeled "**ModularSparkleV...**". It has a dark gray background with white text.
  - **Icon**: A small icon resembling a gem with a purple hue is placed next to the dropdown menu.
  - **Button**: A circular button with a white background and a thin black border is located to the right of the dropdown menu. It contains the text "**Gem - Purple**".
  
  ### Visual Flow / Relationships
  The most prominent visual element is the header, as it sets the context for the entire panel. The input field and dropdown menu are closely related, indicating that they are part of the same form or configuration process. The icon and button provide additional information or options related to the dropdown selection.
  
  </details>
  
  <p></p>
  
  
- **Understanding per-player visibility**: The `HideGem.ts` script provides sophisticated multiplayer support:
  * **Player tracking**: Maintains a list of players who have collected the item
  * **Selective visibility**: Makes gems visible only to players who haven’t collected them
  * **VFX management**: Stops sparkle effects for players who already have the gem
  * **Cleanup handling**: Properly handles player disconnections and reconnections
  * **Reset functionality**: Provides `ResetGemEvent` for resetting gem states when needed

### Advanced VFX controller features

The `VFXController.ts` script supports advanced usage scenarios:

- **Manual VFX control**: Call `playVfx()` and `stopVfx()` methods from other scripts for custom control:

  ```
  // Play VFX for specific players only
  vfxController.playVfx(true, [player1, player2]);

  // Stop VFX for all players
  vfxController.stopVfx();

  // Update VFX position if grabbable object moves
  vfxController.updateVfxPosition();
  ```
- **Performance considerations**: The script efficiently handles:

  * Transform constraints to make VFX follow moving objects
  * Player-specific VFX visibility for multiplayer scenarios
  * Automatic cleanup when objects are grabbed or dropped

### Implementation best practices

**For Tutorial Objects**: Use `VFXController.ts` with `playOnStart: true` and `playOnDrop: false` to create clear “grab this” indicators that disappear once interacted with.

**For Collectible Items**: Combine both scripts - use `VFXController.ts` for the attention-grabbing effect and `HideGem.ts` for proper multiplayer collection handling.

**For Reusable Objects**: Use `VFXController.ts` with `playOnDrop: true` to make objects continuously highlighted for multiple interactions.

### Testing your VFX implementation

Once your VFX system is implemented, thoroughly test by:

- **Single Player Testing**: Verify VFX plays on start, stops on grab, and resumes on drop as configured
- **Multiplayer Testing**: Test that collectibles properly disappear for players who collect them while remaining visible for others
- **Performance Testing**: Ensure smooth VFX playback without lag, especially with multiple VFX systems active
- **Visual Testing**: Confirm VFX positioning looks natural and draws attention without being distracting
- **Integration Testing**: Verify VFX works properly with quest systems and other tutorial components

<details>
<summary>Testing VFX</summary>

<p></p>

[Testing VFX](../../../image_data/592d3bd68a4ef2081ebf3d2f6bca302eb3d4a27a6761850de0f45bc9bd888ee0.md)

### Overview
The image depicts a user interface element within a game or application, specifically a tutorial or information panel. The panel contains text explaining the functionality of a controller feature called "Grab Me Controller." The background is a bright yellow tiled wall, and the panel itself has a blue background with white text. A pink gem-like object is superimposed over the panel, partially obscuring the text.

### Key Elements
- **Panel Background**: Blue rectangular area with rounded corners, located centrally in the image.
  - **Contents**: White text explaining the Grab Me Controller's function.
    > "The Grab Me Controller simulates item collection. Players can also receive UI feedback of task completion supporting text."
  - **Visual styling**: The text is in a sans-serif font, with a slight shadow effect for readability against the blue background.
- **Text**: White, bold, and centered within the panel.
- **Panel Border**: Thin black border around the blue rectangle.
- **Superimposed Object**: A pink, gem-like object with a shiny surface, placed over the panel.
  - **Location**: Positioned slightly above and to the right of the panel.
  - **Contents**: No text or additional elements.
  - **Visual styling**: The gem has a gradient from light pink to darker pink, with a glossy finish that reflects light.

### Visual Flow / Relationships
- **Most Prominent Element**: The blue panel containing the instructional text.
- **Arrows/Connectors**: None.
- **Spatial Relationships**: The pink gem is the only interactive element, suggesting it might be clickable or a pointer to more information. The panel is static and informational.

</details>

<p></p>



With a comprehensive “Grab Me” VFX system in place, you can create engaging visual cues that guide players to important objects while properly handling multiplayer scenarios and quest integration. The system provides both simple highlighting for tutorials and advanced collectible management for complex gameplay scenarios.