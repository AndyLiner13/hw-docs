Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/economy-world-tutorial/module-5-adding-daily-claims

# Module 5 - Adding Daily Claims

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

## Integrating the Daily Claims gizmo

Add the Daily Claims gizmo to encourage daily player engagement. Players can claim one free consumable item per day to use in the shop or gameplay.

<details>
<summary>Daily Claims Gizmo</summary>

<p></p>

[Daily Claims Gizmo](../../../image_data/18c8773c7f910e205cea44ac6b4cc3b652b83c2b95373db5d9945a6d7406ce21.md)

### Overview
This image displays a user interface segment titled "Daily Claims," which presents rewards that can be claimed daily. The layout is designed to guide users through a series of rewards over three days.

### Key Elements
- **Title**: "Daily Claims" located at the top-center of the image.
- **Subheading**: "Claim your reward now" positioned just below the title.
- **Rewards Cards**:
  - **Card 1**: A red apple icon labeled "5x Apple" with a lock symbol indicating it’s locked until Day 1.
  - **Card 2**: An image of a slice of apple pie labeled "2x Apple Pie" with a lock symbol indicating it’s locked until Day 2.
  - **Card 3**: A purple gem icon labeled "1x Gem" with a lock symbol indicating it’s locked until Day 3.
- **Navigation Arrows**: A left arrow on the left side and a right arrow on the right side, suggesting the ability to navigate through more options if available.

### Visual Flow / Relationships
The most prominent visual elements are the three reward cards, each representing a different reward for a specific day. The cards are arranged horizontally, with the left arrow indicating previous options and the right arrow indicating next options. There are no arrows connecting the cards, but the arrangement implies a sequential progression through the rewards.

</details>

<p></p>



## Adding the Daily Claims gizmo

- In the desktop editor, enter Build mode and select **Build > Gizmos** from the menu bar.
- Search for “Daily Claims” in the search field.
- Drag the Daily Claims gizmo into the scene. Place it near your shop for visibility.
- Select the gizmo and open the **Properties** panel.

<details>
<summary>Daily Claims Gizmo Location</summary>

<p></p>

[Daily Claims Gizmo Location](../../../image_data/1aeca9d3e573334821525c1786826946ef996cc56d8365d6d3a0d8bdbd0e91f5.md)

### Overview
This image depicts a user interface element within a software application, specifically a menu or sidebar. The main focus is a floating card labeled "Daily Claims," which appears to be a clickable item. The background is blurred, suggesting a list of items that can be interacted with.

### Key Elements
- **Floating Card ("Daily Claims")**: A blue card with rounded corners, containing a white star icon and the text "Daily Claims." It has a slight shadow effect, making it stand out against the darker background.
- **Background**: Blurred, showing a grid-like pattern with various colored squares, likely representing other menu items or options.
- **Search Bar**: Located at the top, with a magnifying glass icon indicating a search functionality.
- **Menu Headers**: At the very top, there are three headers labeled "Build," "Systems," and "Scripts," each with a drop-down arrow, suggesting expandable sections.
- **Close Button**: A small 'X' icon located at the top right corner of the main content area.

### Visual Flow / Relationships
The most prominent visual element is the "Daily Claims" card, as it is centrally placed and has a distinct design compared to the background. The background elements are arranged in a grid layout, and the search bar is positioned above the main content area. The menu headers are aligned horizontally at the top, and the close button is isolated at the top right.

</details>

<p></p>



## Visual and interaction

<details>
<summary>Daily Claims Properties</summary>

<p></p>

[Daily Claims Properties](../../../image_data/08f45d1be5598e10c605b20d236118a9230a9bb370472fd1341b82513112cbb9.md)

### Overview
This image depicts a user interface section of a settings or configuration panel, likely within a software application. The layout includes various settings options, dropdown menus, and input fields. The interface has a dark theme with light text and some interactive elements highlighted.

### Key Elements
- **Displayed Title**: Located at the top-left corner, the text reads "Displayed Title."
- **Persistent variable**: Positioned next to the displayed title, with a dropdown menu labeled "Select."
- **Panel UI Mode**: Located below the persistent variable, with a dropdown menu set to "Light Mode."
- **Behavior**: A section header indicating a group of settings related to behavior.
- **Auto Repeat**: A toggle switch with a blue indicator showing it is enabled.
- **Daily rewards items**: A nested section under the Behavior header, listing daily reward items for three days.
    - **Day 1**: Contains a dropdown menu with "Apple" selected, and an input field showing "5" as the quantity.
    - **Day 2**: Contains a dropdown menu with "Apple Pie" selected, and an input field showing "2" as the quantity.
    - **Day 3**: Contains a dropdown menu with "Gem" selected, and an input field showing "1" as the quantity.

### Visual Flow / Relationships
The interface follows a vertical flow, with each setting grouped logically under headers. The nested "Daily rewards items" section is visually distinct due to its indentation and expanded state, indicating it can be collapsed or expanded. The dropdown menus and input fields are aligned horizontally beneath their respective labels.

</details>

<p></p>



### Configuring rewards

- **Number of days**: Set how many consecutive days players can claim rewards (e.g., 3 days).
- **Reward items**: Choose consumable items that complement your shop and economy. For this tutorial, use items like Apples, Apple Pies, or Gems.
- **Auto-repeat**: Enable to restart the reward cycle after completion.

Example Daily Claims configuration for the Cook Shop economy:

* Day 1: 5x Apples (helps players get started with baking)
* Day 2: 2x Apple Pies (can be traded for gems in the shop)
* Day 3: 1x Gem (can be used to purchase utility power-ups like Faster Pies)

Note

Any changes to the reward configuration will reset all players’ progress on their next login.

# Using claimed items

Players can use claimed items in gameplay, at ovens, or in the shop. This creates a rewarding loop that encourages daily returns.

# Best practices

* Only consumable items are supported for daily claims.
* Ensure reward days are consecutive (no gaps).
* Use unique persistent variables for multiple Daily Claims gizmos.
* Place the Daily Claims gizmo near your shop for maximum visibility and engagement.