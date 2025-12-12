Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/daily-rewards-asset-template

# Daily Rewards Asset Template

<details>
<summary>Daily Rewards Asset Template</summary>

<p></p>

[Daily Rewards Asset Template](../image_data/54cfd7372f6dfc7b2e1fe7d9327a75b03ba2f7fd0662ebe724ea9364e550f836.md)

### Overview
This image depicts a user interface element showing daily rewards in a game or application. It includes a grid layout with five reward slots, each representing a day of the week, and a countdown timer at the bottom indicating when the next reward will be available.

### Key Elements
- **Title**: "My Daily Rewards" located at the top-left corner.
- **Reward Slots**: There are five reward slots arranged horizontally across the screen.
  - **Day 2**: Contains an image of a green potion bottle labeled "1x Green Potion."
  - **Day 3**: Contains an image of a green potion bottle labeled "2x Green Potion."
  - **Day 4**: Contains an image of a pink potion bottle labeled "1x Green Potion."
  - **Day 5**: Contains an image of a pie labeled "1x Green Potion."
- **Countdown Timer**: Located at the bottom-center of the screen, displaying "Next Reward in 16:58:15."

### Visual Flow / Relationships
The most prominent visual element is the title at the top. The reward slots are arranged in a horizontal line, with the countdown timer positioned below them. There are no arrows or lines connecting the elements, but the arrangement suggests a linear progression through the days.

</details>

<p></p>



Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../MHCP%20program/Monetization/Monetization%20opportunities.md).

The Daily Rewards Asset Template allows users to be granted rewards for each day they log in to your world helping improve retention and engagement.

The Daily Rewards Asset Template can be configured to grant in-world items created in the **Systems > Commerce** menu. For more information on creating in-world items, visit the [In-World Purchase Guide](../MHCP%20program/Monetization/In-world%20purchase%20guide.md#creating-an-item).

Behind the scenes, the world inventory stores how many of each in-world item is owned by each player. While the Daily Rewards Asset Template interfaces with the world inventory automatically, you can use [World Inventory TypeScript APIs](../Reference/core/Classes/WorldInventory.md) to manually query, grant, and consume in-world items in a player’s world inventory.

## Access the Daily Rewards Asset Template

To access the Daily Rewards Asset Template: In the desktop editor, enter the Build mode and select **Asset Library > Public Assets** from the bottom menu bar. Next, search for “Daily Rewards” in the search field. Finally, select the Daily Rewards Asset Template and drag it into the scene. You can now edit the new asset template properties in the **Properties** panel.

<details>
<summary>Finding the Daily Rewards Asset Template</summary>

<p></p>

[Finding the Daily Rewards Asset Template](../image_data/e4d8b7c4c08576276c082cd6ad8242c87a593bb830cc94aec9d9489ba32c37e3.md)

### Overview
This image depicts a user interface of an asset library within a software application. The layout includes a sidebar with navigation options, a search bar, and a grid of asset thumbnails. The interface is designed for managing and searching through assets related to daily rewards.

### Key Elements
- **Sidebar (Left Panel)**:
  - **Public Assets**: A section labeled "Public Assets" with a lock icon, indicating restricted access.
  - **My Assets**: A folder icon next to "My Assets," suggesting a personal asset collection area.
- **Main Content Area (Center)**:
  - **Search Bar**: Located at the top, with a magnifying glass icon and the placeholder text "daily rewards." There are also sorting options ("Name (A-Z)") and filter options ("All" and "Creator").
  - **Asset Thumbnails**: Three identical thumbnails are displayed, each showing a star icon within a circle, with a wrench symbol underneath. The text beneath each thumbnail reads "Daily Rewards..." followed by a partially obscured creator name starting with "MetaHoriz...".

### Visual Flow / Relationships
- **Most Prominent Element**: The search bar is the most prominent feature due to its central placement and the placeholder text prompting user interaction.
- **Arrows/Connectors**: No arrows or connectors are present in the image.
- **Spatial Relationships**: The sidebar is on the left, the search bar is at the top, and the asset thumbnails are arranged horizontally below the search bar.

</details>

<p></p>



## Daily Rewards Asset Template properties

The Daily Rewards Asset Template properties can be configured in the **Properties** panel or through scripting.

Note

In order to save the state of the daily rewards for each player, you will need to create a new Persistent Variable of type *Object* and assign it’s key under the Daily Rewards Asset Template properties. Find out how to create and use Persistent Variables [here](../Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Variable%20groups/Managing%20Persistent%20Variables%20Associated%20with%20a%20Variable%20Group.md).

### Visual and interaction

Here you can change the following:

* **Id**: ID of the daily rewards. Used to differentiate between multiple daily rewards in the same world.
* **Displayed Title**: Tile displayed in the top-left corner of the daily rewards UI.
* **Displayed Title Icon**: Select an icon to display next to the daily rewards title.
* **Persistent Object Variable**: Id of the Persistent Variable of type *Object* used to store the event state. See the note above for details on how to create it.
* **Daily Rewards Activation**: Whether the daily rewards system is active (default *true*). Set this to *false* when you prefer to enable it via the TypeScript API.
* **Auto Repeat**: Indicates if the daily rewards automatically restarts after the player has collected all rewards available (default *true*).
* **Show Timer**: Whether the timer with the remaining time for the next reward to be available should be shown (default *true*).
* **Reset Streak If Day Is Missed**: Whether missing a day resets the player’s streak (default *false*).
* **Day X Reward SKU**: The SKU of an item you want to award the player for logging in on day X.
* **Day X Reward Quantity**: The quantity of the chosen award item to be granted.
* **Day X Reward Thumbnail**: The thumbnail of the chosen award item to be granted.

### Daily Rewards items

To use the Daily Rewards Asset Template, you will need to create in-world items through the **Systems > Commerce** menu. Once you have done this, you can add these items to the awards list using the Daily Rewards Asset Template properties.

You can use the Daily Rewards Asset Template properties to configure which in-world items to grant on each day and their respective quantities.

## Scripting

You can interface with the Daily Rewards Asset Template directly through TypeScript and fully customize the feature’s behavior. Please refer to the [World Inventory TypeScript APIs](https://developers.meta.com/horizon-worlds/reference/2.0.0/experimental_worldinventory) documentation for more information on the economy APIs.