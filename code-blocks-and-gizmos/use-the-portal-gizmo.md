Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-portal-gizmo

# Door gizmo

The door gizmo is part of a suite of tools called [gizmos](/hw-docs/code-blocks-and-gizmos/about-gizmos), which are designed to enhance the creation and interaction capabilities within Meta Horizon Worlds.

The door gizmo in Meta Horizon Worlds allows you to place a door in the virtual world, configure its properties to link your world with another published world, and as a result, enables players to interact with the door and travel from one world to another.

**Note**: While you can access and use the door gizmo in the [VR tool](/hw-docs/vr-creation/getting-started/create-a-new-world-in-horizon), this topic focuses on the creator experience in the [desktop editor](/hw-docs/desktop-editor/getting-started/introduction-to-desktop-editor).

## Access the door gizmo

In the Meta Horizon Worlds desktop editor, do the following to access the door gizmo:

- In the desktop editor while in Build mode, select **Build** > **Gizmos** from the menu bar, search for “Door” in the search field.
- Select the door gizmo and drag it into the scene.
- You can now edit the new door gizmo properties in the **Properties** panel.

## Properties

The door gizmo is an entity. All objects in a world are represented by [entities](/horizon-worlds/reference/2.0.0/core_entity). Entities have their respective properties such as position, rotation, and scale.

In the **Properties** panel, edit the door gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

Additionally, the door gizmo displays the destination world’s name, its thumbnail image, and a **Change** button for changing the destination.

To change the door’s destination, click **Change**. Search for public worlds as the door’s destination.

The **Visible** toggle controls the visibility of the gizmo in the world.

![Door gizmo properties panel](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/494960168_710920418112579_1665985283251277521_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=w3W6zIIduPQQ7kNvwG6hCCt&_nc_oc=AdksShDTp1nOfuieWQRT77XC-wLt5D3Tiw6nX1WnWlfS87eJMz2VzkPWZiSWGuI3TMg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=InjYoGqcmxadkn2eVvK1bA&oh=00_AfjUcJD4RNRj1axtq2LmBH8bz6evOJ6XDQlMjsWmoOHfqQ&oe=692C06C9)

## Travel to another world using the door gizmo

While using the door gizmo, keep in mind of the following:

* Both worlds must be published.
* Ensure to enter the exact name of the destination world.
* Ensure that the two worlds do not have the same name.
* Players need to press the trigger on the door and then press **Go** to initiate the travel.

The following outlines the steps to travel to another world using the door gizmo:

- After you’ve configured the door gizmo in the desktop editor, [publish](/hw-docs/save-optimize-and-publish/publish-your-world) the world. For an example of publishing a world on mobile, see [Play in your world on mobile](/hw-docs/get-started/create-your-first-world#section-4-play-in-your-world-on-mobile).
- Visit the published world with the door gizmo on mobile, web or VR.
- Approach the door gizmo and interact with it by clicking the trigger.
- Click the **Go** button on the door gizmo to travel to the linked world. Wait for the new world to load. This may take a few seconds.
- Once the loading is complete, you’ll arrive in the new world and start exploring.

The following image shows the player in front of the door gizmo. Pressing the trigger, and then **Go** will teleport the player to the designated world.

**Note**: Travel is not supported when you’re in the play mode of the desktop editor.

![Door gizmo in the play mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/494753285_710920421445912_6107526059820057792_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=D-wcQVhBjpMQ7kNvwEc6mOJ&_nc_oc=AdlTnELO-tTPDt_KYz1ZWrQQtL8Z68GwK7KKWYx0F02OfySybhCP5HUWMYV3kcacebc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=InjYoGqcmxadkn2eVvK1bA&oh=00_Afjh4Fm9jZFm2cjaIsDsGQF3pkLxCRyBQLLkS4f9vYNIbg&oe=692BE8D6)

## What’s next?

Try the following related topic:

* [Travel via doors and links](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#travel-doors-and-links)
* [Meta Horizon Creator Program creator manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#door-gizmo)