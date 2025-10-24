# Media board gizmo

## Access the media board gizmo

 While you can access and configure the gizmos in the [VR tool](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon), the following steps show you how to access the media board gizmo from the
desktop editor and add it to the [scene pane](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#scene-pane).
1.  In the desktop editor while in the Build mode, select Build > Gizmos from the menu bar, search for "media board" in the search field.
2.  Select the media board gizmo and drag it into the scene.
3.  You can now edit the new gizmo properties in the [Properties panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#properties-pane).

 Note: There is a known issue where media boards appear smaller than expected in
desktop. The size in VR is correct.  

# Media board gizmo

## Properties

 The media board gizmo is an entity. All objects in a world are represented by
entities. [Entities](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) have their respective properties such as position, rotation, and scale. In the
Properties panel, you can edit the gizmo's transformation fields to configure
its Position, Rotation, and Scale. In the Behavior section, additional properties are available to customize the media board
gizmo. Pinned Page controls the number of photos that can be listed; up to 30 photos can be
listed. Panel UI Mode controls the gizmo's appearance and style. LoD radius controls the distance, in meters, that the media board appears for players. If
set to 0, the panel always appears. Otherwise, the panel appears when a player
is within the specified radius. Deterministic Ranking ranks photos by recency rather than likes. For more information on the media board gizmo properties, see the [MHCP creator's manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#media-board-gizmo).  

# Media board gizmo

## Approve or reject photos

 Once you approve a photo, it becomes available on the media board and visible to
the public. The following steps show you how to approve photos for a world from
the [VR tool](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon).
1. Open the Creation page.
2. Click on Posts & feedback.
3. You see a list of posts. Use the dropdown menu on the top right to filter to
only pending posts.
4. Pending posts have 3 buttons: Approve, Reject, and Report.
5. Select the Approve button to makes a photo visible on a media board.
![Image](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/57568685_9616779308338433_7778029375936424794_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ERFiWVBIotAQ7kNvwFlARVg&_nc_oc=AdnqOrdpZ5UfsnqKcQIOuOj1q9MFjaP1Y1Qw6OStERRBPm_FruQpixC0BO4ISo7kISQ&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfczeUH5gOZFhNa2JgSYrg1kmQ9R3JVtOUx6ijsmXqBGxg&oe=68F99076
 Conversely, to remove a photo from the media board once it's been approved,
follow these steps to reject it from the approved posts.
1. Open the Creation page.
2. Click on Posts & feedback.
3. Once you see a list of posts, use the dropdown menu on the top right to filter
to approved posts.
4. Click the Reject button, which appears to the left of the three-dot menu.

# Media board gizmo

## What's next?

 Now that you've been introduced to the media board gizmo, further your learning
with related developer guides:
• [Meta Horizon Creator Program's creator manual on the media board gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#media-board-gizmo)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

# Media board gizmo

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Fmedia-board-gizmo%2F)

# Media board gizmo

 Note You will need to be a member of [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/welcome) to access the media board gizmo. The media board [gizmo](https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/about-gizmos) allows you to display the top 30 photos from a world. Adding a media board can
show players how others have interacted with the world and encourage players to
post their own photos to the world. The media board auto-rotates through photos
unless a player is interacting with it. Players in a world can react to media displayed on the media board with the Like button, which triggers a thumbs up emote. They can also share their own photos
with the Add post button. The following image illustrates the description of the media board
gizmo. ![An screenshot of the media board gizmo](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452514566_512510187953604_8648481134651688436_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZYvKvOG3NW8Q7kNvwH42CXA&_nc_oc=AdnLOZcbVqS8BDheE6-Ocyz-UDairY0G3BCR4ayy3QIzaFQzKajrz3GpMZg9MEb9vhY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=eSRmI1qO2nvMhHdnrm2fhQ&oh=00_AfcgfFQUch6geEfo67XwBOAsGf99
 Each player sees a personalized set of 30 photos, selected from photos that are
included in the approved world posts. Photos from others that the player follows
and photos with a high Like count are prioritized for the media board.  

## Access the media board gizmo

## Properties

## Approve or reject photos

## What's next?

## Additional Links

      Learn
# Media board gizmo
