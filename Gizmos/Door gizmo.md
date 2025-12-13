Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-portal-gizmo

# Door gizmo

The door gizmo is part of a suite of tools called [gizmos](About%20gizmos.md), which are designed to enhance the creation and interaction capabilities within Meta Horizon Worlds.

The door gizmo in Meta Horizon Worlds allows you to place a door in the virtual world, configure its properties to link your world with another published world, and as a result, enables players to interact with the door and travel from one world to another.

**Note**: While you can access and use the door gizmo in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), this topic focuses on the creator experience in the [desktop editor](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).

## Access the door gizmo

In the Meta Horizon Worlds desktop editor, do the following to access the door gizmo:

- In the desktop editor while in Build mode, select **Build** > **Gizmos** from the menu bar, search for “Door” in the search field.
- Select the door gizmo and drag it into the scene.
- You can now edit the new door gizmo properties in the **Properties** panel.

## Properties

The door gizmo is an entity. All objects in a world are represented by [entities](../Reference/core/Classes/Entity.md). Entities have their respective properties such as position, rotation, and scale.

In the **Properties** panel, edit the door gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

Additionally, the door gizmo displays the destination world’s name, its thumbnail image, and a **Change** button for changing the destination.

To change the door’s destination, click **Change**. Search for public worlds as the door’s destination.

The **Visible** toggle controls the visibility of the gizmo in the world.

<details>
<summary>Door gizmo properties panel</summary>

<p></p>

[Door gizmo properties panel](../image_data/5af72426181839abedac7e5ae1ac28ad8e60524d6d2a05f13e62df03381af7f6.md)

### Overview
This image depicts a user interface element showing properties and attributes of a "Door" object within a game or application. The layout includes a header, a property panel, and a preview section.

### Key Elements
- **Header**: Located at the top, labeled "Properties." Contains a small icon resembling a door and a text field with "[Door]" inside.
- **Debug Data Section**: Below the header, a section titled "Debug Data" with a plus sign indicating expandable content.
- **Attributes Section**: Expands under "Debug Data," showing "Position," "Rotation," and "Scale" with numerical values next to them.
- **Door Section**: Below the Attributes, a section labeled "Door" with a subtitle "Current Destination: My First World P1 and 2." Contains a small thumbnail image of a game environment and a "Change" button next to it.
- **Visible Toggle**: At the bottom right, a toggle switch labeled "Visible."

### Visual Flow / Relationships
The most prominent visual elements are the "Attributes" section and the "Door" section. The "Attributes" section is expanded, making its contents more noticeable. The "Door" section is below and to the right of the "Attributes" section, with the thumbnail image and "Change" button positioned side-by-side. The "Visible" toggle is located far to the right, at the bottom of the interface.

</details>

<p></p>



## Travel to another world using the door gizmo

While using the door gizmo, keep in mind of the following:

* Both worlds must be published.
* Ensure to enter the exact name of the destination world.
* Ensure that the two worlds do not have the same name.
* Players need to press the trigger on the door and then press **Go** to initiate the travel.

The following outlines the steps to travel to another world using the door gizmo:

- After you’ve configured the door gizmo in the desktop editor, [publish](../Save,%20optimize,%20and%20publish/Publish%20your%20world.md) the world. For an example of publishing a world on mobile, see [Play in your world on mobile](../Tutorials/Getting%20started/Create%20your%20first%20world%20tutorial,%20part%201.md#section-4-play-in-your-world-on-mobile).
- Visit the published world with the door gizmo on mobile, web or VR.
- Approach the door gizmo and interact with it by clicking the trigger.
- Click the **Go** button on the door gizmo to travel to the linked world. Wait for the new world to load. This may take a few seconds.
- Once the loading is complete, you’ll arrive in the new world and start exploring.

The following image shows the player in front of the door gizmo. Pressing the trigger, and then **Go** will teleport the player to the designated world.

**Note**: Travel is not supported when you’re in the play mode of the desktop editor.

<details>
<summary>Door gizmo in the play mode</summary>

<p></p>

[Door gizmo in the play mode](../image_data/0e08f12e75d606f9cb4b95d179a700d4b566252bbefce464563cccde944ce918.md)

### Overview
The image depicts a virtual environment where a character is interacting with a large, rectangular object resembling a door or terminal. The character is facing away from the viewer, wearing a pink hoodie and light blue pants. The object has a dark frame and a purple-lit interior, suggesting a futuristic or high-tech setting. There is a button labeled 'E' on the object, which the character appears to be interacting with.

### Key Elements
- **Character**: A figure with blue and pink hair tied up in a bun, wearing a pink hoodie and light blue pants. The character is positioned centrally but slightly angled towards the right side of the image.
- **Object**: A large rectangular device with a dark frame and a purple-lit interior. It has a button labeled 'E' in white text on a black background.
- **Button**: A black rectangular button with the letter 'E' in white. It is located near the center of the object, slightly below the top edge.
- **Background**: The scene is set against a simple, light blue gradient sky and a flat, light gray ground, giving the impression of an open space or a virtual world.

### Visual Flow / Relationships
The most prominent visual element is the character, as they are the focal point of the interaction. The button on the object is the secondary focus, indicating that the character is likely interacting with it. The object itself is the largest element in the image, drawing attention due to its size and the glowing purple light within it.

</details>

<p></p>



## What’s next?

Try the following related topic:

* [Travel via doors and links](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#travel-doors-and-links)
* [Meta Horizon Creator Program creator manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#door-gizmo)