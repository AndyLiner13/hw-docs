Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/media-board-gizmo

# Media board gizmo

Note

You will need to be a member of [Meta Horizon Creator Program](../MHCP%20program/Welcome%20to%20the%20Meta%20Horizon%20Creator%20Program.md) to access the media board gizmo.

The media board [gizmo](About%20gizmos.md) allows you to display the top 30 photos from a world. Adding a media board can show players how others have interacted with the world and encourage players to post their own photos to the world. The media board auto-rotates through photos unless a player is interacting with it.

Players in a world can react to media displayed on the media board with the **Like** button, which triggers a thumbs up emote. They can also share their own photos with the **Add post** button. The following image illustrates the description of the media board gizmo.

<details>
<summary>An screenshot of the media board gizmo</summary>

<p></p>

[An screenshot of the media board gizmo](../image_data/0810f8d83d2b5e4197909d82878810384696c0dbae69d3ef03ee95f9fdf23319.md)

### Overview
This image depicts a social media-style post featuring a virtual character in a stylized environment. The central focus is a 3D-rendered avatar standing in front of a futuristic backdrop. The interface includes interactive elements such as a like counter, a profile picture icon, and navigation arrows.

### Key Elements
- **Avatar**: A 3D character wearing a dark blue shirt and black pants, holding a large, metallic object resembling a trophy or award.
- **Background**: A sci-fi setting with geometric structures, floating crystals, and a basketball hoop in the distance.
- **Profile Picture Icon**: Located at the top-center, showing a circular icon with a green border and a white image of a camera.
- **Like Counter**: Positioned at the bottom-right corner, displaying "72" likes.
- **Navigation Arrows**: Blue circular arrows with white directional indicators are located at the bottom-left and bottom-right corners.
- **Post Text**: At the bottom-left, "@Bobby_VR" and the caption "dressed to kill."
- **Add Post Button**: A white button with a plus sign and the text "Add post" is situated at the bottom-center.

### Visual Flow / Relationships
The most prominent visual element is the avatar, which is centrally placed within the frame. The background elements are arranged around the avatar, creating a sense of depth. The like counter and navigation arrows are secondary elements that provide interaction points. The post text and add post button are positioned at the bottom, ensuring they are easily accessible.

</details>

<p></p>



Each player sees a personalized set of 30 photos, selected from photos that are included in the approved world posts. Photos from others that the player follows and photos with a high **Like** count are prioritized for the media board.

## Access the media board gizmo

While you can access and configure the gizmos in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the media board gizmo from the desktop editor and add it to the [scene pane](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “media board” in the search field.
- Select the media board gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [**Properties panel**](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

**Note:** There is a known issue where media boards appear smaller than expected in desktop. The size in VR is correct.

## Properties

The media board gizmo is an entity. All objects in a world are represented by entities. [Entities](../Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

In the **Behavior** section, additional properties are available to customize the media board gizmo.

**Pinned Page** controls the number of photos that can be listed; up to 30 photos can be listed.

**Panel UI Mode** controls the gizmo’s appearance and style.

**LoD radius** controls the distance, in meters, that the media board appears for players. If set to 0, the panel always appears. Otherwise, the panel appears when a player is within the specified radius.

**Deterministic Ranking** ranks photos by recency rather than likes.

For more information on the media board gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#media-board-gizmo).

## Approve or reject photos

Once you approve a photo, it becomes available on the media board and visible to the public. The following steps show you how to approve photos for a world from the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md).

- Open the Creation page.
- Click on **Posts & feedback**.
- You see a list of posts. Use the dropdown menu on the top right to filter to only pending posts.
- Pending posts have 3 buttons: **Approve**, **Reject**, and **Report**.
- Select the **Approve** button to makes a photo visible on a media board.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/44a65d7587c28eb7224e575ec4b83389aba502bc572e91382f8c7177fad39312.md)

### Overview
This image depicts a virtual environment interface, likely from a virtual reality or augmented reality application. The central focus is a floating window with a user interface layout, surrounded by avatars and interactive elements. The background features a stylized sky with clouds, suggesting an outdoor setting within the virtual space.

### Key Elements
- **Central Window**: Located in the center, this is the primary interface element. It has a light blue header with a close button (`×`) on the right side. Below the header, the title reads `"cliu2 test"` followed by some smaller text indicating user information and options.
- **User Interface Buttons**: Within the central window, there are four rectangular buttons with icons and text. From left to right, the buttons read:
  - `Message people`
  - `Post & Feedback`
  - `Settings`
  - `Help & Support`
- **Avatar Panel**: On the left side, there is a vertical panel containing an avatar of a person with a name tag below it. The name tag reads `"cliu2 test"` and includes a small icon next to it.
- **Hand Gesture**: A hand gesture is visible at the bottom center, suggesting interaction with the interface.
- **Right Panel**: On the far right, there is another vertical panel displaying a list of users with their avatars and names. This panel seems to represent a chat or social feed.

### Visual Flow / Relationships
The most prominent visual element is the central window, which draws attention due to its larger size and central placement. The hand gesture suggests interactivity, implying that the user can engage with the interface. The avatar panels on both sides provide additional context about the user's interactions and connections within the virtual environment.

</details>

<p></p>



Conversely, to remove a photo from the media board once it’s been approved, follow these steps to reject it from the approved posts.

- Open the Creation page.
- Click on **Posts & feedback**.
- Once you see a list of posts, use the dropdown menu on the top right to filter to approved posts.
- Click the **Reject** button, which appears to the left of the three-dot menu.

## What’s next?

Now that you’ve been introduced to the media board gizmo, further your learning with related developer guides:

* [Meta Horizon Creator Program’s creator manual on the media board gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#media-board-gizmo)