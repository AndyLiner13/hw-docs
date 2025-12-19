Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/avatar-override-tutorial-world/module-1-introduction

# Module 1 - Introduction

<details>
<summary>Avatar Override Tutorial World thumbnail</summary>

<p></p>

[Avatar Override Tutorial World thumbnail](../../../image_data/12f1b589fa8de0eb25d57dd7967b159179b4335dc51ff7dc7f843f27d397f483.md)

### Overview
This image depicts a user interface element within a virtual environment, likely a menu or selection screen. The focus is on a set of options presented as buttons, with a character model in the background.

### Key Elements
- **Avatar Button**: Located at the top, it has a black background with white text that reads "Avatar." It is rectangular and occupies the upper part of the image.
- **Outfit Button**: Positioned below the Avatar button, it has a gradient teal background with white text that reads "Outfit." It is slightly smaller than the Avatar button.
- **Overrides Button**: Situated beneath the Outfit button, it also features a gradient teal background with white text that reads "Overrides." It matches the size and design of the Outfit button.
- **Character Model**: A small blue humanoid figure is positioned on the right side of the image, standing near the bottom-right corner. It appears to be a representation of the avatar being referenced in the menu options.
- **Background**: The backdrop consists of a simple, geometrically structured wall made of orange blocks, and a clear blue sky above.

### Visual Flow / Relationships
The visual hierarchy is established by the placement of the buttons, with the Avatar button being the most prominent due to its larger size and central position. The Outfit and Overrides buttons follow in descending order of prominence. There are no arrows or lines connecting the elements, but the arrangement suggests a sequential reading order from top to bottom.

</details>

<p></p>



Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

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
* Review the official [Tutorial Prerequisites](../../Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md)

### Enable World Sim and Auto-start

The Custom UI instructions within the tutorial are generated entirely from TypeScript code. In the desktop editor after you have opened the tutorial, click the **World Sim On** button and then click the three-dot menu in the toolbar. Enable the following settings:

* Auto-start simulation on Preview entry
* Auto-stop simulation on Preview exit

<details>
<summary>World Sim settings screenshot</summary>

<p></p>

[World Sim settings screenshot](../../../image_data/a72f8fc8b70cd76e9b012cc4e6ab2034a1c40dacd4601db93990e8cd35d51019.md)

### Overview
This image depicts a configuration panel titled "Preview Configuration." It is part of a larger interface, likely related to simulation or preview settings. The panel contains several toggle switches and dropdown menus, along with some action buttons at the bottom.

### Key Elements
- **Panel Title**: "Preview Configuration" located at the top.
- **Toggle Switches**:
  - "Auto-start simulation on Preview entry" with a blue toggle switch indicating it is enabled.
  - "Auto-stop simulation on Preview exit" with a gray toggle switch indicating it is disabled.
- **Dropdown Menu**: "Preview device" with a dropdown arrow next to the word "Web," suggesting options for selecting a different device.
- **Checkbox**: "UI safe zone overlay" with a gray checkbox indicating it is unchecked.
- **Action Buttons**: At the bottom right, there are three circular icons representing different actions: a globe, a refresh, and a reload symbol.
- **Background**: The panel has a dark gray background with white text and light gray accents.

### Visual Flow / Relationships
The most prominent element is the title "Preview Configuration." The toggle switches and dropdown menu are arranged vertically under the title. The action buttons are grouped together at the bottom right. There are no arrows or lines connecting elements, but the layout suggests a logical reading order from top to bottom.

</details>

<p></p>



## Learning Pathways

### Follow Along

You can follow along with the steps of the tutorial content by using a copy of the world. After you have copied the world, you can compare the steps of the tutorial to the completed world.

**Desktop editor:** To create a copy of this tutorial world from the desktop editor, click **Tutorials** in Creation Home and then select **Avatar Override Tutorial World**.

**VR headset:** To build the world described in this tutorial, make your own copy of the **Avatar Override Tutorial World** from the **Tutorials** tab in the **Create** menu.

<details>
<summary>Screenshot of selecting tutorial world in Desktop Editor</summary>

<p></p>

[Screenshot of selecting tutorial world in Desktop Editor](../../../image_data/c0a1a87857efb1c0ede2bcd94de9e260e21f2d4aabb9bfe62dfff661a2fcd927.md)

### Overview
The image displays a user interface for a creation platform, specifically the "Tutorials" section. It features a grid layout of tutorial cards, each representing a different topic related to game development and customization. The interface includes a sidebar with navigation options and a search bar at the top right corner.

### Key Elements
- **Sidebar Navigation**: Located on the left side, it contains links such as "Home," "My worlds," "My events Beta," "Tutorials," "Worlds to remix," and "Documentation." The "Tutorials" link is highlighted with a blue background.
- **Search Bar**: Positioned at the top right, it has a magnifying glass icon and a placeholder text "New world."
- **Tutorial Cards**: These are arranged in a grid format across the main area of the page. Each card has a title, subtitle, and a small preview image. Titles include phrases like "Build Your First Game," "Custom UI Examples," "Simple Shooting Mechanics," among others.
- **Preview Images**: Each card includes a small image that gives a visual preview of the content within the tutorial.
- **Card Layout**: Cards are evenly spaced and aligned horizontally, with some cards stacked vertically when space runs out.

### Visual Flow / Relationships
- **Most Prominent Element**: The tutorial cards are the most prominent due to their size and central placement.
- **Arrows/Connectors**: There are no arrows or connectors visible in the image.
- **Spatial Relationships**: Cards are arranged in a grid pattern, with some cards stacked vertically when the grid fills up. The sidebar navigation is separate but adjacent to the main content area.

</details>

<p></p>



### Explore the Complete World

You can check out the final version of the tutorial world by selecting the completed examples world in the ‘Tutorials’ tab inside Meta Horizon Worlds.

**Related documentation and resources:**

* [Avatar Item Overrides](https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/avatar-overrides)
* [Avatar Clothing Creation](https://horizon.meta.com/creator/avatars/create_new_item)