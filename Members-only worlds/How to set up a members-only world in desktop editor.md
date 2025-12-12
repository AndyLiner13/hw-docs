Source: https://developers.meta.com/horizon-worlds/learn/documentation/members-only-worlds/how-to-set-up-a-membersonly-world

# How to set up a members-only world in desktop editor

Members-only worlds deprecated

 Members-only worlds have been deprecated. With the launch of Home Worlds, we recommend using home worlds for private, membership-based experiences. For more information about Home Worlds, please refer to the updated Horizon Worlds documentation.

**Note**: Members-only worlds come with specific responsiblities and best practices. Learn more about [governance responsibilities](Creator%20governance%20responsibilities%20for%20members-only%20worlds%20in%20Meta%20Horizon%20Worlds.md), [governance best practices](Members-only%20worlds%20governance%20best%20practices%20in%20Meta%20Horizon%20Worlds.md), and [how to manage reports](Manage%20reports%20for%20members-only%20worlds%20in%20Meta%20Horizon%20Worlds.md) for members-only worlds.

## Members-only worlds

Members-only worlds are a type of closed space, that is membership-based. World creators and admins select who is able to join their world. Learn more about [members-only worlds](https://www.meta.com/help/quest/articles/horizon/explore-horizon-worlds/members-only-worlds/).

## Members-only world setup

Once a creator has completed the standard world creation flow and is ready to publish their world, they can take the following steps to enable membership for a world:

- From the desktop editor, navigate to the three-dot menu and select **Publish World**

  <details>
  <summary>Publish World</summary>
  
  <p></p>
  
  [Publish World](../image_data/d35df1ab1536b27da2324eb46a23a795e4bcde6d761be7339c1f3c2809ef1de9.md)
  
  ### Overview
  This image depicts a dropdown menu that appears when clicking on a menu icon in a user interface. The menu contains several options related to world management and publishing within a software application.
  
  ### Key Elements
  - **Menu Icon**: Located at the top-left corner, it is a white hamburger menu icon with a blue dropdown arrow.
  - **Menu Title**: "Build" is displayed next to the menu icon, indicating the category of the dropdown.
  - **Menu Options**: Listed vertically under the "Build" title, the options include:
    - Return to Creation Home
    - View Application Logs
    - Launch Typescript Editor
    - Publish World (highlighted in yellow)
    - Rename World
    - Save Backup
    - Backups
    - Export Geometry
    - World capacity
  - **Highlighted Option**: "Publish World" is highlighted with a yellow bounding box, suggesting it is the current focus or selection.
  
  ### Visual Flow / Relationships
  The menu items are arranged in a vertical list, with each option clearly separated by a thin horizontal line. The "Publish World" option is emphasized by being highlighted, drawing attention to it as the primary action in this context.
  
  </details>
  
  <p></p>
  
  
- Toggle the **Members-only** setting to **On**.

  <details>
  <summary>Members-only setting</summary>
  
  <p></p>
  
  [Members-only setting](../image_data/013cea82d03450ee61174b4317c30d0538f89a136e56444c0ce560f6352d711b.md)
  
  ### Overview
  This image depicts a user interface for publishing a world, likely within a platform that allows users to create and share virtual worlds. The interface includes various fields and options for configuring the world before publication.
  
  ### Key Elements
  - **Thumbnail Section**: Located at the top-left, featuring a placeholder image with the text "NPC Examples." Below the image, there's a notification stating "Thumbnail editing is disabled due to in-progress A/B testing."
  - **Status**: Positioned below the thumbnail, indicating the world is "Unpublished."
  - **Name Field**: A text input field labeled "Name (required)" with the placeholder text "NPC Test World."
  - **Description Field**: An input area for describing the world, currently empty.
  - **Publish Button**: A blue button labeled "Publish" located at the bottom-right.
  - **Options Section**: On the right side, there are several toggle switches for various settings such as "Comfort rating," "Visible to public," "Beta label," "Members-only world," "Moderator presence required," and "Optimized for Web and Mobile."
  - **Rating Section**: At the top-right, there's a rating field marked as required, with a note that tags are also required. There's a button to select tags.
  - **Availability Section**: Below the rating, there's a dropdown menu labeled "All (Mobile, web, VR)" indicating device availability.
  - **Other Settings**: Additional settings include "Mute assist," "Visible to public," "Beta label," and "Members-only world."
  
  ### Visual Flow / Relationships
  The interface is structured with a clear hierarchy. The thumbnail and status are prominently displayed at the top-left. The name and description fields are below the thumbnail. The publish button is at the bottom-right, making it easily accessible. The settings are grouped into sections on the right side, with each setting having its own toggle switch. The rating and tags sections are at the top-right, drawing attention to them as required fields.
  
  </details>
  
  <p></p>
  
  
- Once enabled, a setting option will display for Moderator presence required.

  <details>
  <summary>Moderator presence required setting</summary>
  
  <p></p>
  
  [Moderator presence required setting](../image_data/dc3af3492d684e34fdd58ae1fe3515edc1c90fbcec6c45a483ad3eaa1a09cfda.md)
  
  ### Overview
  This image depicts a user interface for publishing a world, likely within a platform that allows users to create and share virtual worlds. The interface includes various fields and toggles for configuring the world's settings before publication.
  
  ### Key Elements
  - **Thumbnail Section**: Located at the top-left, featuring a placeholder image with the text "NPC Examples." Below the image, there's a notification stating "Thumbnail editing is disabled due to in-progress A/B testing."
  - **Status**: Positioned below the thumbnail, indicating the world is "Unpublished."
  - **Name Field**: A text input field labeled "Name (required)" with the placeholder text "NPC Test World."
  - **Description Field**: A text area labeled "Description" with the prompt "What can people do in your world?"
  - **Publish Button**: Located at the bottom-right, labeled "Publish."
  - **Rating Section**: Positioned at the top-right, requiring a rating input.
  - **Tags Section**: Requires tags to be added for easier discovery.
  - **Availability Section**: Allows choosing devices the world will be available on.
  - **Comfort Rating**: Set to "Comfortable."
  - **Mute Assist Toggle**: A toggle switch for enabling Mute Assist.
  - **Visible to Public Toggle**: A toggle switch for making the world visible in searches.
  - **Beta Label Toggle**: A toggle switch for adding a Beta label.
  - **Members-only World Toggle**: A toggle switch for setting the world as members-only.
  - **Moderator Presence Required Toggle**: A toggle switch highlighted with a yellow border, indicating its importance.
  - **Optimized for Web and Mobile Toggle**: A toggle switch for optimizing the world for web and mobile platforms.
  
  ### Visual Flow / Relationships
  The interface is structured in a grid layout, with key elements grouped logically. The most prominent elements are the "Publish" button and the "Moderator presence required" toggle, which are emphasized through highlighting. The form fields are arranged from top to bottom, left to right, with clear labels and input areas.
  
  </details>
  
  <p></p>
  
  

* The default for this setting is **Off**, which means that members can visit the members-only world without a moderator present.
* Toggling this **On** means members cannot visit the members-only world without a moderator present.

**Note**: If a member attempts to enter a members-only world where moderator presence is required and a moderator is not present, a notification will display and explain that the world is unavailable.

During the alpha test period, all members-only worlds will remain hidden from search and world menus; members-only worlds will only be visible to those invited by the creator to join the world as a member.

## Additional features of members-only worlds

* Once a world is designated a members-only world, it cannot be converted it to a public world.
* Members-only worlds can be duplicated, but the membership list and world privacy settings will not carry over to the new world.
* Members-only worlds can currently support up to 150 members and 25 members visiting the world at a single time.
  **Note**: The maximum concurrent visitor count depends on [world capacity limits](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/World%20Capacity%20dialog.md).
* Collaborators (including testers, editors, and moderators) are considered members and count towards the 150 world member cap and number of concurrent members.
* During the alpha, members-only worlds are restricted to a single instance and do not support events. At this time, events cannot be scheduled and hosted in your members-only world.

## Invite Members and Select Roles (Tester, Editor, Moderator)

World creators can invite members and collaborators to their members-only worlds using the Collaborator Management menu and clicking **Invite People**.

<details>
<summary>List of collaborators available</summary>

<p></p>

[List of collaborators available](../image_data/01a107e9a32f0b7e6ec05d8ba5d45c07f30b2e91900ffc6cf4219be1137bd270.md)

### Overview
This image depicts a user interface section within a collaborative platform, likely related to world-building or game development, given the mention of "Horizon." The interface shows options for managing collaborators and inviting people into a project.

### Key Elements
- **Collaborators Section**: Located at the top left, labeled "Collaborators (0)" with a blue underline indicating selection.
- **Invites Section**: Positioned next to the Collaborators section, labeled "Invites (0)".
- **Invite Button**: A blue button labeled "Invite people" situated to the right of the Invites section.
- **User Profile**: Below the Collaborators section, showing a profile picture and username "nmontefusco (You)".
- **Owner Label**: To the far right of the profile, the word "Owner" is displayed.
- **No Collaborators Message**: Centered below the profile, stating "No collaborators yet," followed by a message encouraging collaboration and testing.
- **Avatar Icon**: A gray icon depicting two silhouettes, placed above the "No collaborators yet" message.

### Visual Flow / Relationships
The most prominent visual element is the "Collaborators" section, as indicated by the blue underline. The "Invite people" button is secondary but important for initiating collaboration. The spatial relationship is linear, moving from the left (Collaborators) to the right (Owner label).

</details>

<p></p>



See the documentation on [Collaborator Management](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Collaborator%20Management.md) for more information.

The world creator, members, and moderators do not need to follow each other to be part of the same members-only world. Members-only worlds feature a **moderator** role. World members with this role can mute someone globally or temporarily remove members from the world.

World creators will remain the responsible party for anything that occurs in their world.it is important to assign moderator roles to members who are trusted.

Anyone invited to join a members-only world can hold a combination of roles including:

| **Role** | **Description** |
| --- | --- |
| Member | Can visit a published members-only world, but cannot modify or publish it. |
| Collaborator | A collaborator can be any combination of the following three different roles:  - Tester: Can go to an unpublished world, but can only review it. They can’t edit, copy, invite, manage collaboration or publish.  - Editor: Can go to an unpublished world, edit it, and view feedback. They can’t copy, invite, manage collaboration or publish.  - Moderator: Can visit published worlds, but cannot modify them. Can mute or remove members from the world. |