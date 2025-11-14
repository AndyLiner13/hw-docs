Source: https://developers.meta.com/horizon-worlds/learn/documentation/members-only-worlds/how-to-set-up-a-membersonly-world

# How to set up a members-only world in desktop editor

Members-only worlds deprecated

 Members-only worlds have been deprecated. With the launch of Home Worlds, we recommend using home worlds for private, membership-based experiences. For more information about Home Worlds, please refer to the updated Horizon Worlds documentation.

**Note**: Members-only worlds come with specific responsiblities and best practices. Learn more about [governance responsibilities](https://developers.meta.com/horizon-worlds/learn/documentation/safety-and-privacy/creator-responsibilities-members-only-worlds), [governance best practices](/hw-docs/Members-only%20worlds/Members-only%20worlds%20governance%20best%20practices%20in%20Meta%20Horizon%20Worlds.md), and [how to manage reports](/hw-docs/Members-only%20worlds/Manage%20reports%20for%20members-only%20worlds%20in%20Meta%20Horizon%20Worlds.md) for members-only worlds.

## Members-only worlds

Members-only worlds are a type of closed space, that is membership-based. World creators and admins select who is able to join their world. Learn more about [members-only worlds](https://www.meta.com/help/quest/articles/horizon/explore-horizon-worlds/members-only-worlds/).

## Members-only world setup

Once a creator has completed the standard world creation flow and is ready to publish their world, they can take the following steps to enable membership for a world:

- From the desktop editor, navigate to the three-dot menu and select **Publish World**

  ![Publish World](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/499620645_724961260041828_8815701815660985866_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q6ucLaWPWFgQ7kNvwH8T14H&_nc_oc=AdkXKEWO5c7eFDacTwCl9b0p3lzucMDfMYqq94UzNNYh8_alcgQ6FR5vvBozNpsThaU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FuRSduxx1AxDEODDjjdOGA&oh=00_AfiZjFh5yYM410oHk7tVajCzl-hfhmoE3X3xVH9KU6lspQ&oe=6930C4F7)
- Toggle the **Members-only** setting to **On**.

  ![Members-only setting](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/500247526_724961256708495_6173277232744077270_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=2IyA8Cwja80Q7kNvwF_wFUw&_nc_oc=AdnkOVgiHw8-S1OpOpqLqNpnyLdYBHufTfb0XDagpafB45xa4qHoU93Xc_Pjq2MdLiw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=FuRSduxx1AxDEODDjjdOGA&oh=00_AfgHuxnb-9ZLyNIBng9FQ46wbtQo9Vs0k3BiMzCgRBZ-ow&oe=6930B5A8)
- Once enabled, a setting option will display for Moderator presence required.

  ![Moderator presence required setting](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/499378683_724961263375161_8821108538535166304_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=TZozHbdqW70Q7kNvwHdlzOX&_nc_oc=Adkx6ELzaG-N2tyVJ56VQCGvjkj07ICv0eSb2Za4kj1YTtl-5cscFQXnRyrc8JriwWo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=FuRSduxx1AxDEODDjjdOGA&oh=00_AfgkhvaNNJHEyVfZR6-e1OMzPy7AjFdKsuyh6PERgrrN0A&oe=6930B4EF)

* The default for this setting is **Off**, which means that members can visit the members-only world without a moderator present.
* Toggling this **On** means members cannot visit the members-only world without a moderator present.

**Note**: If a member attempts to enter a members-only world where moderator presence is required and a moderator is not present, a notification will display and explain that the world is unavailable.

During the alpha test period, all members-only worlds will remain hidden from search and world menus; members-only worlds will only be visible to those invited by the creator to join the world as a member.

## Additional features of members-only worlds

* Once a world is designated a members-only world, it cannot be converted it to a public world.
* Members-only worlds can be duplicated, but the membership list and world privacy settings will not carry over to the new world.
* Members-only worlds can currently support up to 150 members and 25 members visiting the world at a single time.
  **Note**: The maximum concurrent visitor count depends on [world capacity limits](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/World%20Capacity%20dialog.md).
* Collaborators (including testers, editors, and moderators) are considered members and count towards the 150 world member cap and number of concurrent members.
* During the alpha, members-only worlds are restricted to a single instance and do not support events. At this time, events cannot be scheduled and hosted in your members-only world.

## Invite Members and Select Roles (Tester, Editor, Moderator)

World creators can invite members and collaborators to their members-only worlds using the Collaborator Management menu and clicking **Invite People**.

![List of collaborators available](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484350008_671766008694687_8427404570089073584_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=rfwyxjZd3V0Q7kNvwHimBod&_nc_oc=AdmV6SJU3RZPQFRp22sN8tCgiSYWl3Y8ry4YcT2bNY5M74MiJSJB-xG_EVG9bs4We3E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FuRSduxx1AxDEODDjjdOGA&oh=00_AfjM1GgBF9Y1I3kX8ggRXGfd7I-vrmlqjoTa9R3fChvUDA&oe=6930B61E)

See the documentation on [Collaborator Management](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Collaborator%20Management.md) for more information.

The world creator, members, and moderators do not need to follow each other to be part of the same members-only world. Members-only worlds feature a **moderator** role. World members with this role can mute someone globally or temporarily remove members from the world.

World creators will remain the responsible party for anything that occurs in their world.it is important to assign moderator roles to members who are trusted.

Anyone invited to join a members-only world can hold a combination of roles including:

| **Role** | **Description** |
| --- | --- |
| Member | Can visit a published members-only world, but cannot modify or publish it. |
| Collaborator | A collaborator can be any combination of the following three different roles:  - Tester: Can go to an unpublished world, but can only review it. They can’t edit, copy, invite, manage collaboration or publish.  - Editor: Can go to an unpublished world, edit it, and view feedback. They can’t copy, invite, manage collaboration or publish.  - Moderator: Can visit published worlds, but cannot modify them. Can mute or remove members from the world. |