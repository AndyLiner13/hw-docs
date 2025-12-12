Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/asset-spawning-reference

# Asset Spawning Reference

## Overview

Every world in Horizon is saved as a world snapshot. The snapshot contains a list of shapes, scripts, gizmos, and how they are all organized. When you edit a world in build mode a new snapshot is generated.

**Note:** If you ever make a mistake, you can use the [My Creations Page](https://horizon.meta.com/creator/worlds_all/?locale=en_US) to revert a world back to a previous snapshot.

An **asset** is a collection of objects and scripts that you can save outside of all of your world snapshots. For example, you can make a hat, save it in your Asset Library, and then delete the hat from the world you made it in. In the future you can then add that hat to any world by pulling it out of your Asset Library in build mode. A copy of that asset is then saved in that world’s current snapshot.

**Note:** If you edit the asset in the library, the copy you just created is not updated.

Scripts can load and unload assets into a running instance without the asset needing to be stored in the world’s snapshot. You can have a world that has 1000 outfits (which would likely be over capacity) by choosing which of them to dynamically load while the world is running in an instance.

To load objects into a running world instance you **spawn an asset**. This loads in a copy of that asset as a collection of new objects and scripts. To unload that copy, you **delete the spawned object(s)**, therefore despawning that copy of the asset.

This feature makes it possible to spawn in items such as scenery, wearables, interactive objects, and more, but only when you actually need them. For example, a world could unload portions of a map to free up capacity to then load in others.

As another example, you don’t need to make 10 copies of a hat, instead you can make the asset once and put it in your asset library. Then, without having any copies in the world snapshot, you can spawn in as many as you need as long as the spawned objects stay under 100% on all capacity meters.

**Spawning** is similar to placing objects, gizmos and assets from your build menu in build mode except that it does not modify the save-state of the world.

**Deleting spawned objects** is similar to deleting objects/gizmos/assets in build mode.

## Spawning Considerations

* **Keep track of all spawned objects.** If you want to delete spawned objects then you need to keep track of them. At minimum, when you spawn in an object you should store it in a script variable or list so that you can reference it in the delete spawned object code block. Capacity limits are still in effect even though the spawning occurs in play mode.

  Each asset has a record of how much capacity it needs on each meter such as objects, complexity, vfx. When the asset spawns, it takes up the capacity on each of those meters. If spawning the asset would take any of the meters over 100% then the spawn will fail.

  **Note:** Currently there is no way to detect a failure and no way to see how much capacity an asset needs other than to remove the asset in build mode and look at the relative change in the meters.
* **Asset spawning follows all the same capacity rules as build mode.** If you publish a world with 90% object capacity and then have that world spawn assets in publish mode, the 90% object capacity will keep increasing until it hits 100% after which no new assets will spawn. At that point you would need to despawn previously spawned objects to free the object capacity again.
* **Make assets self-contained.** Assets must be entirely contained to work properly, whether imported in build mode or spawning in scripts. This means that all referenced objects and script gizmos attached to objects must be contained within the asset.

  Assets currently cannot include persistent gizmos such as leaderboards and achievements since they would not be self-contained. When an asset is spawned, the scripts are renamed to prevent name clashes similar to when you pull out the asset from the library.
* **Be mindful of asset size.** Larger assets will take longer to spawn and once they do spawn, the lighting calculation will take longer to settle.

## Current Limitations (as of June 2022)

* **Only spawn single-group assets.** There are currently issues with spawning assets that are not a single group. The event callback doesn’t reference all spawned objects. There is no way to delete all the spawned objects, and the spawned objects will not be correctly positioned or rotated. You should only spawn assets where all objects are grouped together into a single group.
* **No failure detection.** If an asset fails to spawn there is no way to detect such failure.
* **Not all gizmos can be included.** Since assets must be self contained you cannot use any gizmos that reference specific world data. This means that you cannot use the leaderboard gizmo in an asset and cannot use leaderboard code blocks in a script used inside an asset. The same rule applies to the gizmo and code blocks for achievements and to the code blocks for persistent variables.
* **Existing instances won’t get updates to an asset.** If you modify an asset, new instances of your world will get the updated asset. Any already-running world instances will continue to spawn the version that existed when the instance started. There is currently no way to force an already running instance to refresh or update assets.
* **Wait a frame before sending messages.** Currently you can’t send events to objects in the same frame they were spawned. There is a bug where these events get ignored. When you get a reference to a spawned object you need to send any messages to it with a delay or on a later frame. The bug only occurs right when the object spawns, so after that one frame you can send events to the object as normal.
* **Assets cannot be scaled when spawned.** The spawn asset code block allows you to specify the position and rotation but not the scale. If you want to scale a spawned asset it will need to be dynamic. The same applies to changing colors or other properties.

## How To Spawn Assets

- **Create an asset variable in a script.** To spawn an asset you need a script with an asset variable which you will set to contain an asset in step 5. You can call this variable whatever you like, for example “hatAsset”, “hat”, “asset”.
- **Apply the script to an object.** The script from step 1 needs to be on an object as like any other script. That object will run the code blocks that spawn the asset.
- **Open the scripted object’s property Panel.** Open the property panel of the object from step. From here you will see the Asset Variable field as empty in the variables section of the property panel.
- **Find the asset in the Asset Library.** From your build menu navigate to your asset library, then navigate to the asset you want to spawn. Select the view info icon on that asset.
- **Connect the reference pill.** On the property panel you opened in step 4, scroll down to see the asset reference pill (blue in color with the asset name){picture}. Select and drag this reference pill to the Asset Variable field “empty” on the objects property panel where the script was applied in step 3. The field will have the variable name that you chose in step 1.

  **Note:** Unlike object references, there is no wire drawn back to the asset in the asset library, just the name of the asset is shown in the variable value field.
- **Spawn the Asset.** The script from step 1 can now use the spawn asset code block. You can use the variable that you created in step 1 to specify what to spawn.

  **Note:** You can have one script spawn many different types of assets. You need to wire them all to different variables in the script.

## Code blocks

### Spawn Asset

Actions ➤ Object ➤ spawn asset

Spawn a new instance of an asset into a running world. The spawn may fail if there isn’t enough capacity available.

#### Appearance in Library

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/a81d726a1f59c5b6516ef98227013a4c3c8c9af649757d94fa353dbcc69714f9.md)

### Overview
The image displays a single rectangular button with rounded corners, set against a solid background. The button contains text that reads "spawn asset."

### Key Elements
- **Visual description**: The button has a rounded rectangular shape.
- **Location**: Positioned centrally within the image.
- **Contents**: Contains the text "spawn asset" in lowercase letters.
- **Visual styling**: The button has a gradient fill transitioning from a lighter shade at the top to a darker shade at the bottom. The text is white, providing good contrast against the darker background.

### Visual Flow / Relationships
The button is the sole focus of the image, with no additional elements or connections to other parts of the interface. There are no arrows, lines, or implied reading orders.

</details>

<p></p>



#### Appearance in Composition Pane

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/f37136eacb86cdb1cea5b9b7d3792052d02de362d4accdb1c1d3d88bac13c9c0.md)

### Overview
This image displays a user interface element that appears to be part of a graphical user interface (GUI) for a software application. It consists of a series of interactive buttons and text elements arranged horizontally against a dark blue background.

### Key Elements
- **Visual description**: The elements are circular buttons with white text inside them.
- **Location**: These elements are arranged horizontally across the width of the image.
- **Contents**: 
    - "Spawn asset"
    - "asset at"
    - "position"
    - "using"
    - "rotation"
    - "with event"
    - "event" with a downward arrow indicating a dropdown menu
    - "sent to"
    - "object"
- **Visual styling**: The buttons have a rounded rectangular shape with a white background and black text. The "event" button has a darker background compared to the others, suggesting it might be a dropdown menu indicator.

### Visual Flow / Relationships
- **Most prominent visually**: The "event" button with the downward arrow, as it stands out due to its darker background and distinct shape.
- **Arrows, lines, connectors**: There are no arrows or lines connecting the elements.
- **Spatial relationships**: The elements are aligned horizontally, with each one occupying roughly equal space within the row.

</details>

<p></p>



#### Parameters

|  |  |
| --- | --- |
|  | The asset to spawn. |
|  | The location the object should be at when it spawns. If the spawned object is static then it cannot be moved again from this location. |
|  | The orientation the object should have when it spawns. If the spawned object is static then it cannot be rotated again from this orientation. |
|  | The callback event. When the object finishes spawning, this event will be sent to the variable. The event is sent with the parameter. |
|  | The receiver object. When the object finishes spawning the event will be sent to this object along with an object parameter containing the newly spawned object. |

### Delete Spawned Object

Actions ➤ Object ➤ delete spawned object

Delete an object that was previously spawned, removing the objects and freeing up their capacity.

#### Appearance in Library

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/979fe24590ccb8d27f44c6cd9a5e0f200559d50a0a75bb52bba769ac595db530.md)

### Overview
This image depicts a rectangular button with rounded corners containing text that reads "delete spawned object."

### Key Elements
- **Visual description**: The button has a rectangular shape with rounded edges.
- **Location**: Positioned centrally in the image.
- **Contents**: The text "delete spawned object" is written in white font.
- **Visual styling**: The button has a solid purple background with no gradients or additional textures. The text is centered within the button.

### Visual Flow / Relationships
The button is the most prominent element in the image, as there are no other elements to interact with or connect to.

</details>

<p></p>



#### Appearance in Composition Pane

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/38bd08cd5df3043f2008a340fd72ad8c57b3c7cd9dd338d5d684d750f153e065.md)

### Overview
This image depicts a user interface element, specifically a button with two distinct sections. The overall composition is simple, with a blue background and white text/icons.

### Key Elements
- **Left Section**: A rectangular area with rounded corners, containing the text "delete spawned object". The text is white and centered within the blue rectangle.
- **Right Section**: A circular area with rounded corners, containing the word "object". This section is also blue but has a lighter shade compared to the left section. The text "object" is white and positioned towards the right side of the circle.

### Visual Flow / Relationships
The most prominent visual element is the rectangular section on the left due to its larger size and central placement. There is no arrow or line connecting the two sections, suggesting they are separate but related components. The circular section on the right is smaller and positioned to the right of the rectangular section, indicating a secondary action or label associated with the primary action.

</details>

<p></p>



#### Parameters

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/5f8017c829b687c117f1c396c73b6bec97ff5d3e611bf48b836805beac09e551.md)

### Overview
This image depicts a user interface element consisting of two buttons placed side-by-side within a larger rectangular container. The container has a gradient blue background.

### Key Elements
- **Left Button**: 
  - **Visual description**: A rectangular button with rounded corners.
  - **Location**: Positioned on the left side of the container.
  - **Contents**: Contains the text "delete spawned object" in white font.
  - **Visual styling**: The button has a solid blue background with no additional borders or highlights.
- **Right Button**: 
  - **Visual description**: A rounded rectangular button with a gradient blue background.
  - **Location**: Positioned on the right side of the container.
  - **Contents**: Displays an icon resembling a cube with a hollow center next to the word "object" in white font.
  - **Visual styling**: The button has a gradient blue background with a subtle shadow effect underneath, giving it a slightly raised appearance.

### Visual Flow / Relationships
The most prominent visual element is the left button due to its larger size and placement. There are no arrows or lines connecting the elements, but the layout suggests a sequential interaction where one might click the left button first before interacting with the right button.

</details>

<p></p>



|  |  |
| --- | --- |
|  | The object to delete. This Object must have been spawned using the spawn asset code block. |

### Examples

#### Spawn an object when grabbed

**What it does:** This example spawns a hidden temple whenever a player grabs an object. The temple despawns if the player lets go of the object.

**How it works:** When a person grabs the object the script is run, the hiddenTemple asset spawns and specifies that the event spawned be sent to self when the spawn completes. When the spawned event is received the spawned object is saved in a variable, so that it can despawn when the object is released.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/751917fccd41961d0220b664d7fc49a1b06057ded7d4bf4e4d7647d78370e28f.md)

### Overview
This image depicts a visual programming interface with a focus on scripting logic blocks. The interface includes a script editor on the left and a variables panel on the right. The script editor contains a sequence of interconnected blocks representing conditional statements and actions related to object interactions.

### Key Elements
- **Script Editor (Left Panel)**:
  - **Block 1**: "when object is grabbed by player"
    - **Visual description**: A rectangular block with rounded corners.
    - **Location**: Top-left area of the script editor.
    - **Contents**: Contains a green icon resembling a person and the text "player".
    - **Visual styling**: Green background, white text, bordered edges.
  - **Block 2**: "Spawn asset hiddenTemple at 0 0 0 using 0 0 0 with event spawned sent to self"
    - **Visual description**: A long rectangular block with multiple colored segments.
    - **Location**: Below Block 1.
    - **Contents**: Includes various icons and text such as "hiddenTemple", "0 0 0", "spawned", "self".
    - **Visual styling**: Segmented into different colors (blue, green, red, purple), with white text on some segments.
  - **Block 3**: "when spawned is received with obj + New Param"
    - **Visual description**: A rectangular block with a blue background.
    - **Location**: Below Block 2.
    - **Contents**: Contains a blue icon resembling a cube and the text "obj", followed by a plus sign and "New Param".
    - **Visual styling**: Blue background, white text, bordered edges.
  - **Block 4**: "set spawnedObject to obj"
    - **Visual description**: A rectangular block with a blue background.
    - **Location**: Below Block 3.
    - **Contents**: Contains a blue icon resembling a cube and the text "spawnedObject" and "obj".
    - **Visual styling**: Blue background, white text, bordered edges.
  - **Block 5**: "when object is released by player"
    - **Visual description**: A rectangular block with rounded corners.
    - **Location**: Below Block 4.
    - **Contents**: Contains a green icon resembling a person and the text "player".
    - **Visual styling**: Green background, white text, bordered edges.
  - **Block 6**: "delete spawned object spawnedObject"
    - **Visual description**: A rectangular block with a blue background.
    - **Location**: Below Block 5.
    - **Contents**: Contains a blue icon resembling a cube and the text "spawnedObject".
    - **Visual styling**: Blue background, white text, bordered edges.
- **Variables Panel (Right Panel)**:
  - **Block 1**: "hiddenTemple"
    - **Visual description**: A circular icon resembling a cube with a blue background.
    - **Location**: Top-right area of the variables panel.
    - **Contents**: Text "hiddenTemple".
    - **Visual styling**: Blue background, white text, bordered edges.
  - **Block 2**: "spawnedObject"
    - **Visual description**: A circular icon resembling a cube with a blue background.
    - **Location**: Below Block 1.
    - **Contents**: Text "spawnedObject".
    - **Visual styling**: Blue background, white text, bordered edges.

### Visual Flow / Relationships
- **Most Prominent Visually**: The script editor blocks are the most prominent due to their larger size and central placement.
- **Arrows/Connectors**: There are no explicit arrows or connectors between the blocks.
- **Spatial Relationships**: Blocks are arranged vertically, with each block stacked below the previous one. The variables panel is positioned to the right of the script editor.

</details>

<p></p>



#### Updated Assets Only Appear In New Instances

One benefit of spawning is that you can modify an asset and have it update in all the worlds that reference it. However, once a world instance starts, asset versions are frozen for that instance.

Only instances of worlds created after updating the asset will see the updates. Instances that were running when the modification was made will continue to spawn in the version of the asset that existed when those instances started. Updating an asset does not require worlds that use it to be republished. Any new instances will get the updated asset.

**Note:** This impacts build mode (as of June 2022). Updating the asset in build mode does not update the spawning asset in that instance of build mode. Either that instance of build mode needs to be closed by leaving build mode instance or you can create a new asset hence getting around the asset being frozen for that instance of build mode.

#### Example Uses of Spawning

**Spawning environment gizmos:** In published mode, spawning in environment blocks with different properties will take effect in your world the moment they are spawned. If your world has no environment gizmos in it, you can spawn them in and out by changing the sky from day to night or by turning the fog on or off. This makes it possible to create **dynamic environments**.

**Spawning static assets:** If objects are marked as static (their motion type is “none”) then when they are put into an asset they will still be static when they spawn. If you spawn in a static asset that contains emissive objects, then once it spawns, the objects will cast light into the world. This allows you to load and unload lights without using dynamic lighting.

**Note:** Spawning takes time to happen whereas dynamic lights are instantaneous.

You can spawn in and out of sections of the world as people move around it. This allows you to simulate a much larger world but only if the visitors stay close enough together. This makes it possible to create **procedural environments and loading levels**.

**Spawning animated/dynamic assets:** When dynamic assets are spawned, the resulting objects will receive the **when world is started event** and start up as usual. For example, the asset will fall due to gravity or auto-play an animation if **play on start** is enabled. You can spawn and despawn dynamic objects as a way to create achievements for instance, you can despawn a hat and spawn in a cooler one.

To create variety you can choose which car you want to drive or create variance in NPCs. This makes it possible to create wearable costumes, rewards, weapon skins, unlockable items, and more.

## FAQs

**Q) Can I send events to spawned assets?**

A) Yes, but currently you will want to use a delay for any initial events right after the spawn. After that you can use any events or delayed events as usual.

**Q) Can I receive events from spawned assets?**

A) Yes, once assets spawn in they act like any other object and can send and receive events. When the asset spawns, you can send events to the spawned object to connect it to other objects in the world. Likewise, the spawned object can interact with triggers, collisions, be grabbed, and so on.

**Q) Can I spawn assets from a non-owner or non-editor’s asset library in my world?**

A) Yes, once the reference to the asset is made in the asset variables you can spawn in assets from anyone even if they are no longer an editor on your world.

**Q) Can I spawn doors as an asset?**

A) Yes, but the doors will only work if the owner of that world is an editor or tester in your world.

**Q) Do spawned objects impact the “dynamics” gauge of the capacity meter?**

A) Yes, but only if the assets themselves are dynamic. Spawning and despawning assets is not like setting visibility on an object in a script. If an asset is marked as static then spawning it in will not impact the dynamics meter. If the object has interaction or physics enabled or is a text or FX gizmo then it will.