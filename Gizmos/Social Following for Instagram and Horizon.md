Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/profiles-to-follow-asset-template

# Social Following for Instagram and Horizon

## Overview

The new Social Following feature enables Horizon World creators to seamlessly connect and promote their Instagram and Horizon profiles to their Worlds. This allows visitors to easily follow creators’ social accounts directly from within Horizon Worlds, reducing friction and enhancing creator engagement.

<details>
<summary>Social Following Asset Template in editor</summary>

<p></p>

[Social Following Asset Template in editor](../image_data/c9572209a8387d62a7a9c24bcd0d12c21168861d5213877864a674bc255a3895.md)

### Overview
The image depicts a virtual environment featuring a character standing on a wooden dock next to a blue wall with a shingled roof. There are interactive elements overlaid on the scene, suggesting a user interface for social interaction or exploration.

### Key Elements
- **Character**: A male avatar wearing a patterned shirt, dark pants, and sandals stands facing right. The avatar has short hair and glasses.
- **Background**: A rocky cliff and a body of water are visible in the distance.
- **Interactive Overlay**: 
  - **Follow Button**: A blue rectangular button labeled "Follow" is positioned at the top right.
  - **Like Icon**: A circular icon with a thumbs-up symbol is located below the Follow button.
  - **Comment Bubble**: A white speech bubble is situated to the right of the Like icon.
  - **Interaction Button**: A small black square with the letter "E" and a hand cursor icon is placed near the center-left of the screen.
  - **Navigation Arrow**: A white arrow pointing downward is shown below the interaction button.
  - **Highlight**: A blue rectangular highlight surrounds the lower part of the wall, possibly indicating an interactive area or a point of interest.

### Visual Flow / Relationships
- **Most Prominent Element**: The Follow button is the most visually prominent due to its placement and color contrast.
- **Arrows and Lines**: The downward-pointing arrow suggests a potential drop-down menu or further interaction.
- **Spatial Relationships**: The elements are arranged in a vertical sequence, with the Follow button at the top, followed by the Like icon, then the Comment Bubble, and finally the Interaction Button and Navigation Arrow.

</details>

<p></p>



## Key benefits

* Increases creators’ social followers and engagement.
* Reduces friction for users to follow creators (no need to remove headset or switch devices).
* Provides a standardized, privacy-respecting way to display and interact with social handles.

## Feature highlights

* **Asset Template for Social Handles:**
  Creators can add their Instagram handles and Horizon profiles via an asset template in the HUR editor.
* **In-World Follow Panel:**
  Users can interact with the asset template in a World, opening a Panel UI (PUI) that displays the creator’s social handles. From here, users can click “Follow” to follow the creator on Instagram or Horizon.

## How it works

### For creators

There are 2 ways you can make use of the Social Following feature:

* Using the ready made Social Following asset template, which can be customized.
* Using the [`showProfilesToFollow`](../Reference/social/Classes/Social.md) API in your own assets.

### Use the Social Following asset template

You can add social handles to your World using the Social Following asset template. To do so, use the following process:

- In the HUR editor, go to the **Asset Library**.
- Search for **Social Following** and add the asset to your World.
- Enter your Instagram handles and/or Horizon profiles in the asset configuration.
- Save and publish your World.

<details>
<summary>Social Following Asset Template in editor</summary>

<p></p>

[Social Following Asset Template in editor](../image_data/68e94e90f1da3f5ee0b7087c39a0f58bf9307dc99fff9c00d775b41f7cf22007.md)

### Overview
This image depicts a 3D modeling environment within a software interface, likely a game development tool. The central focus is a transparent cube with a blue "Follow" button and a smaller interactive icon resembling a thumbs-up and a speech bubble. The interface includes various panels and tools around the workspace.

### Key Elements
- **Central Cube**: A transparent green cube with a blue "Follow" button at the top and a smaller interactive icon below it. The icon consists of a thumbs-up symbol and a speech bubble.
- **Interactive Icon**: Located within the cube, the icon has a blue outline and a white fill. It features a thumbs-up symbol and a speech bubble.
- **Follow Button**: Positioned above the interactive icon, it is a rectangular blue button with the word "Follow" in white text.
- **Grid Background**: A light gray grid serves as the background, indicating a 3D space.
- **Left Panel**: Contains a tree-like structure labeled "Hierarchy" with nodes such as "SpawnPoint" and "Social Following (preview)".
- **Right Panel**: Displays properties related to the selected object, including attributes, behavior, and gameplay tags.
- **Bottom Panel**: Includes tabs labeled "Asset Library", "Console", "Tests", "NPC Debugger", and "Performance".

### Visual Flow / Relationships
The most prominent visual element is the central cube, which contains the interactive icon and follow button. The interactive icon is nested within the cube, and the follow button is positioned above it. The layout suggests a hierarchical relationship between the elements, with the cube serving as a container for the interactive icon and follow button. The grid background provides a sense of depth and spatial orientation.

</details>

<p></p>



Once added, the asset template appears as a standardized UI element in your World. Users can view your linked social accounts and follow you with a single click.

### Use the TypeScript API

For creators who want more control or wish to build custom social experiences, the [`showProfilesToFollow`](../Reference/social/Classes/Social.md) method from `horizon/social` API is now publicly available. This API allows you to show a panel with follow buttons for your social profiles in Instagram and Horizon.

To use the TypeScript API:

- Import the required modules from `horizon/social`:

  ```
  import { Social, SocialPlatformType, ProfileToFollow } from "horizon/social";
  ```
- Define the profiles you want to promote:

  ```
  const profilesToFollow: Array<ProfileToFollow> = [
    {
      profileHandle: "yourInstagramUsername",
      platform: SocialPlatformType.INSTAGRAM,
    },
    {
      profileHandle: "yourHorizonAlias",
      platform: SocialPlatformType.HORIZON,
    }
  ];
  ```
- Show the follow panel to the local player:

  ```
  const result = await Social.showProfilesToFollow(this.world.getLocalPlayer(), profilesToFollow);
  console.log(`Success: ${result.success}`);
  ```

### For users

Users can follow creators’ social profiles directly from within a World. To do so, use the following process:

- Approach the Social Following asset in a World.
- Click the asset to open the follow panel.
- Click **Follow** for the Instagram or Horizon account you want to follow.

<details>
<summary>Social Following panel view</summary>

<p></p>

[Social Following panel view](../image_data/b1d71d6d1bce2a8503b9eb98e9c6bc9df8580cf8c2e9bdfd2a18f52d46e45dc8.md)

### Overview
This image depicts a pop-up window titled "Creator picks to follow" with a list of social media profiles to follow. The layout is structured with user profiles and corresponding "Follow" buttons.

### Key Elements
- **Title**: "Creator picks to follow" located at the top of the pop-up.
- **Close Button**: An 'X' icon located at the top right corner of the pop-up.
- **Profile 1**: 
  - **Visual description**: A circular icon with a white circle on a black background.
  - **Location**: Top-left of the first profile card.
  - **Contents**: "@MetaHorizon" and "Horizon".
  - **Visual styling**: Black background, white text.
- **Profile 2**: 
  - **Visual description**: A blue infinity symbol icon.
  - **Location**: Top-left of the second profile card.
  - **Contents**: "@meta" and "Instagram".
  - **Visual styling**: Blue background, white text.
- **Profile 3**: 
  - **Visual description**: A circular icon with a white circle on a black background.
  - **Location**: Top-left of the third profile card.
  - **Contents**: "@metahorizon" and "Instagram".
  - **Visual styling**: Black background, white text.
- **Profile 4**: 
  - **Visual description**: A red square with a black sunglasses icon.
  - **Location**: Top-left of the fourth profile card.
  - **Contents**: "@raybanmeta" and "Instagram".
  - **Visual styling**: Red background, black text.
- **Follow Buttons**: 
  - **Visual description**: Rounded rectangular buttons labeled "Follow".
  - **Location**: To the right of each profile card.
  - **Contents**: Text "Follow".
  - **Visual styling**: Gray background for the first button, dark gray for the second, and black for the third and fourth buttons.
- **Background**: A light gray gradient background for the pop-up itself.

### Visual Flow / Relationships
The pop-up is the most prominent visual element, with the profiles listed vertically. Each profile card contains a profile icon, username, and platform name. The "Follow" buttons are aligned to the right of each profile card. There are no arrows or lines connecting the elements, but the vertical arrangement implies a sequential reading order.

</details>

<p></p>



Users will follow the Instagram accounts using their linked Instagram in their Meta Accounts.

## Frequently Asked Questions

**Q: Can I link more than one social account?**
**A:** Yes, you can link both Instagram and Horizon accounts. Only public accounts are supported.

**Q: What if a user doesn’t have a linked social account?**
**A:** Following is only available for users who have linked their accounts (Instagram and Horizon) in their Meta Account center.

**Q: Is this feature available on all platforms?**
**A:** The feature is available to all users in VR, desktop, and mobile (via the Meta Horizon App).

**Q: Can I link Facebook accounts or pages, or Discord servers, so users can follow those?**
**A:** We are actively exploring other links to support to help creators build their communities.