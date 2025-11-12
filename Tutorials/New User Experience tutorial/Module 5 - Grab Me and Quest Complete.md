Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/new-user-experience-tutorial/module-5-grab-me-and-quest-complete

Learn

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

  ![Grabbable component](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/547398969_817222400815713_3117991424714731156_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=FaCW-nICHZoQ7kNvwFLwR2w&_nc_oc=AdkW9EFlaFGRP8F62QjcQ5QXHr92pQa6bhohqZX4PN3DsHDTQQMhLUAFlIoHDnVMG4w&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rgVCl4sYXdIr6XvqNXcBQA&oh=00_AfgUOBvxHNlsJLIjQpPrh4teAWXthJ3wog8GYCyyB7b6ww&oe=692EA158)
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

  ![Gem visibility management](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/548202015_817222397482380_7620243394072184193_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=EQ7ixic5phsQ7kNvwGFGhK4&_nc_oc=Adml4LOSNkhyWuoYC15WC20gCkas6anKUUD1koyjbfJxvk-UvJ8K4RDrRfr33D7kVXs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rgVCl4sYXdIr6XvqNXcBQA&oh=00_AfinshayugPAMxv3Pdci4IYptBDtY3yFQBma-6vTRmgjHg&oe=692E95CD)
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

![Testing VFX](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/550033521_817222407482379_9082773625982791037_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=IcbVDWRzrN8Q7kNvwFPYrk1&_nc_oc=AdmlLEsJFEaO0r6MgWjWlrSHLDMYApC8ErY6DR955qYguyTEIMWBojDS0otYan5xNl0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rgVCl4sYXdIr6XvqNXcBQA&oh=00_AfjA7wpYPsMjdVhwUORXss_zn11GENK1-pItHqyzhtGUdA&oe=692EAD78)

With a comprehensive “Grab Me” VFX system in place, you can create engaging visual cues that guide players to important objects while properly handling multiplayer scenarios and quest integration. The system provides both simple highlighting for tutorials and advanced collectible management for complex gameplay scenarios.