Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/avatar-override-tutorial-world/module-1-introduction

# Module 1 - Introduction

![Avatar Override Tutorial World thumbnail](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/556064064_828614589676494_370276187367745199_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Cn3k9Ry6QgIQ7kNvwH0Jaow&_nc_oc=AdnUKje6rIxwgkhbGhyokZ-vgc8LR-bWizUwURBPyWhEl_6yF6K2k0IPTM6fIRJ4YzA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CP8g-pSo6pKETiuRnIIQ1w&oh=00_AfliVVeyaRBOGYE1NuV4Oxhp6vh6dCPiSCW_GD1qu2kSKA&oe=694BC6EA)

Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](/hw-mcp-tools/documentation/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Access%20Tutorial%20Worlds.md).

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/hw-mcp-tools/documentation/hw-docs/MHCP%20program/Monetization/Monetization%20opportunities.md).

Note

For detailed platform documentation on Avatar Overrides, see the [Avatar Item Overrides](https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/avatar-item-overrides) page.

## Welcome to the Avatar Override Tutorial

This tutorial world is a multiplayer dress-up and catwalk experience designed to help creators understand and implement avatar customization features in Horizon Worlds. Players can equip outfits in a dress-up area, then take turns showcasing their avatars on a catwalk, where other players can vote using on-screen elements. The top avatars are displayed in a winners’ circle before the cycle repeats.

## What You’ll Build

* **Avatar customization system** - Players can equip different clothing items and outfits using creator-controlled digital goods
* **Multiplayer showcase mechanics** - Sequential player presentations on a catwalk stage with camera control
* **Voting system** - Players vote for their favorite outfits with real-time feedback and on-screen UI elements
* **Game flow management** - Automated transitions between lobby, showcase, and results phases
* **Winner celebration** - Podium placement for 1st, 2nd, and 3rd place winners

## Key Learning Objectives

By completing this tutorial, you will understand how to:

* Create and access wearable avatar items for your worlds
* Implement interactive outfit systems using the `setAvatarOverrides` API
* Use Equip, Reset, and Check Triggers with TypeScript to control avatar equips and game logic
* Handle avatar compatibility and conflicts using canApplyOverride APIs
* Build interactive UI components for voting and outfit selection
* Manage player positioning and camera control during showcases
* Develop coordinated multiplayer game states and transitions

## Tutorial Structure

- **Setup** - Configure avatar items and in-world entities
- **Core Scripts** - Overview of the game system architecture
- **Game Manager** - Central state management and game flow
- **Player Manager** - Player positioning and teleportation
- **UI Systems** - Interactive components for player engagement
- **Voting System** - Multiplayer voting mechanics and results
- **Game Utilities** - Helper functions and shared resources
- **Summary** - Extension ideas and next steps

## Before You Begin

### Prerequisites

* Ensure you are a member of the Meta Horizon Creator Program (MHCP) and have accepted the monetization Terms of Service
* Basic knowledge of Horizon Worlds scripting and TypeScript
* Understanding of avatar systems in Horizon Worlds
* Review the official [Tutorial Prerequisites](/hw-mcp-tools/documentation/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Tutorial%20Prerequisites.md)

### Enable World Sim and Auto-start

The Custom UI instructions within the tutorial are generated entirely from TypeScript code. In the desktop editor after you have opened the tutorial, click the **World Sim On** button and then click the three-dot menu in the toolbar. Enable the following settings:

* Auto-start simulation on Preview entry
* Auto-stop simulation on Preview exit

![World Sim settings screenshot](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/555482413_828614579676495_1469154043201174359_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=uIgJVCqqNg8Q7kNvwHsaiGT&_nc_oc=AdniV6HUFiRhMK_Z272dwyCJ95ZCQ6sEfGJ02RETC0QTVRIfp8lZrROE_tf6B6TVGb0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=CP8g-pSo6pKETiuRnIIQ1w&oh=00_AfmBttCdBatKYEmxBcRL6JlD6t48DVnPY_Is4IhRbxa58A&oe=694BB61C)

## Learning Pathways

### Follow Along

You can follow along with the steps of the tutorial content by using a copy of the world. After you have copied the world, you can compare the steps of the tutorial to the completed world.

**Desktop editor:** To create a copy of this tutorial world from the desktop editor, click **Tutorials** in Creation Home and then select **Avatar Override Tutorial World**.

**VR headset:** To build the world described in this tutorial, make your own copy of the **Avatar Override Tutorial World** from the **Tutorials** tab in the **Create** menu.

![Screenshot of selecting tutorial world in Desktop Editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/558311413_828614603009826_3691302933105413792_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=XdKYX_EDSmAQ7kNvwHsYQ3n&_nc_oc=Adkb_xc7ujhcaftzkENHzNGDPCGK5f65nQfafoIgT42HHzpNKnFSxZMKCISrUjU5s_Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=CP8g-pSo6pKETiuRnIIQ1w&oh=00_Afl4yNvgXlob5ZMMs5alfM3JXZi5DtrmuE5wzrZ9gj0rgQ&oe=694BBFED)

### Explore the Complete World

You can check out the final version of the tutorial world by selecting the completed examples world in the ‘Tutorials’ tab inside Meta Horizon Worlds.

**Related documentation and resources:**

* [Avatar Item Overrides](https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/avatar-overrides)
* [Avatar Clothing Creation](https://horizon.meta.com/creator/avatars/create_new_item)