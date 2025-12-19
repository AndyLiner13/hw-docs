Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/economy-world-tutorial/module-4-adding-the-shop

# Module 4 - Adding The Shop

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

## Adding the shop to the world

Let’s add a shop to the world using the world shop gizmo.

- From the desktop editor, open the **Build Menu** and select **Gizmos**

<details>
<summary>Select Gizmos</summary>

<p></p>

[Select Gizmos](../../../image_data/d2e63612c57ba1d30e668411a917117c26c1d13dc567d251c202407081168865.md)

### Overview
This image depicts a dropdown menu interface, likely from a software application, showing options under the "Build" tab. The menu is dark-themed with a blue accent for the "Build" tab itself.

### Key Elements
- **Visual description**: The dropdown menu has a dark background with light-colored text and a blue accent for the tab.
- **Location**: The dropdown menu is located beneath the "Build" tab.
- **Contents**: The menu items listed are "Shapes," "Gizmos," "Sounds," "Colliders," "Empty Object," "Sublevel," and "Launch My Horizon Creations...". Each item is separated by a thin horizontal line.
- **Visual styling**: The text is white, and the menu items have a subtle shadow effect, giving them a slight elevation.

### Visual Flow / Relationships
- **Most prominent visually**: The "Gizmos" option is highlighted, indicating it is currently selected or hovered over.
- **Arrows, lines, connectors**: There are no arrows or lines connecting elements within the menu.
- **Spatial relationships**: The menu items are arranged vertically, with each item occupying its own space and separated by horizontal lines.

</details>

<p></p>



- Search or scroll to find the world shop gizmo

<details>
<summary>Find the World Shop gizmo</summary>

<p></p>

[Find the World Shop gizmo](../../../image_data/45c759a834693ec62afcc001d85fad4631d6e145f201ded221cc7bd0e7a851f4.md)

### Overview
This image depicts a user interface element within a software application, specifically a sidebar menu or panel. The main focus is on a section labeled "Gizmos," which contains a search bar and a list of items. The interface has a dark theme with some elements highlighted in lighter colors.

### Key Elements
- **Search Bar**: Located at the top, it is a rectangular input field with a magnifying glass icon on the left side. The placeholder text reads "> Search".
- **Menu Items**: Below the search bar, there are several blurred items listed vertically. These appear to be categories or options within the "Gizmos" section.
- **World Shop Icon**: At the bottom of the visible area, there is a purple square icon with a white storefront graphic and the text "World Shop" underneath it.
- **Menu Headers**: At the very top, there are three headers labeled "Build," "Systems," and "Scripts," each with a drop-down arrow indicating expandable sections.

### Visual Flow / Relationships
The most prominent visual element is the search bar at the top. The items listed under "Gizmos" are arranged vertically, and the "World Shop" icon stands out due to its distinct color and iconography. The menu headers at the top suggest a hierarchical structure, with the search bar serving as a secondary navigation tool.

</details>

<p></p>



- Drag the world shop gizmo into the world, and place it under the “Cook Shop” heading.

<details>
<summary>Drag the shop into the world</summary>

<p></p>

[Drag the shop into the world](../../../image_data/6952fd0df56da2064eff0b652e13cbe6e2ba25fd5ba29ec06fa54bd8fdff37ad.md)

### Overview
The image depicts a virtual environment resembling a shop named "Cook Shop." It features a character labeled as "Trader Bot," a large whiteboard with geometric shapes, and a blue counter in front of the shop.

### Key Elements
- **Shop Sign**: Located at the top of the image, reads "Cook Shop" in bold black letters against a light blue gradient background.
- **Trader Bot**: Positioned near the bottom left, wearing a gray shirt with red sleeves and blue pants. A small label above the character reads "Trader Bot."
- **Whiteboard**: A large rectangular whiteboard occupies the central area. It has a blue border and contains a few geometric shapes: a green arrow pointing up, a red arrow pointing left, and a blue dot.
- **Counter**: A light blue counter spans the bottom of the image, extending horizontally across the foreground.
- **Background**: The shop is set outdoors with a clear sky and distant buildings visible.

### Visual Flow / Relationships
The most prominent visual element is the shop sign at the top. The Trader Bot is secondary but still noticeable due to its placement and label. The whiteboard serves as a focal point in the middle, drawing attention to the geometric shapes. The counter at the bottom acts as a foreground element, separating the viewer from the shop interior.

</details>

<p></p>



- You may find that the gizmo arrives in the world facing the wrong way. Switch to the rotate tool (“E” on the keyboard) and rotate it 180° on the Y-axis (the green arc).

<details>
<summary>Rotate and position the shop accordingly</summary>

<p></p>

[Rotate and position the shop accordingly](../../../image_data/83976ee0e32a44c75b458e28ded9f130d2ba405a8f9f50fb6bb218cf6a403207.md)

### Overview
The image depicts a virtual environment resembling a shop interface, specifically labeled as "Cook Shop." The scene includes a character labeled as "Trader Bot," a graphical user interface (GUI) displaying items for sale, and a background that suggests an outdoor setting with buildings and a clear sky.

### Key Elements
- **Title**: "Cook Shop" is prominently displayed at the top in bold black font against a light blue gradient background.
- **Trader Bot**: A character labeled "Trader Bot" is positioned in front of a counter. The character has a simple design with a gray shirt and red arm accessories. The bot is standing behind a counter with a light blue surface.
- **GUI Interface**: 
  - **Shop Label**: Located above the item grid, the word "Shop" is written in a small font within a white rectangular box.
  - **Item Grid**: Below the "Shop" label, there are eight purple rectangular boxes arranged in a 4x2 grid. Each box contains the text "Item X" where X ranges from 1 to 8. The second box in the first row has a blue arc graphic overlaid on it.
  - **Currency Display**: In the top right corner, there is a diamond icon followed by the number "300," indicating some form of in-game currency.
- **Background**: The background features a light blue sky with a few clouds and a distant building with a circular target-like design.

### Visual Flow / Relationships
- **Most Prominent Element**: The title "Cook Shop" is the most prominent feature due to its large size and central placement.
- **Reading Order**: The visual flow starts with the title, then moves down to the trader bot, and finally to the GUI interface. There are no arrows or lines connecting elements, but the layout suggests a logical progression from the title to the bot to the items for sale.

</details>

<p></p>



## Selling pies for gems

Configure the world shop Gizmo to allow the player to swap 1x pie for 10x gems:

- Select the world shop gizmo you added to the world

<details>
<summary>Select the World Shop gizmo in the world</summary>

<p></p>

[Select the World Shop gizmo in the world](../../../image_data/3b583280a0425e0b3b64eacd9c3988c5c35a988706c3aa195815344b8f119a9c.md)

### Overview
The image depicts a virtual environment within a game or simulation titled "Cook Shop." It features a character standing in front of a shop interface, which displays a grid layout of items labeled as Item 1 through Item 8. The interface has a blue border and a white background. Above the interface, the title "Cook Shop" is prominently displayed. To the left, there is a label indicating "Trader Bot."

### Key Elements
- **Title**: "Cook Shop" at the top, centered, black text on a light blue gradient background.
- **Interface**: A rectangular area with a blue border and a white background, containing a grid of eight purple squares labeled with item numbers.
- **Items**: Eight purple squares labeled "Item 1" to "Item 8," arranged in a 4x2 grid.
- **Arrows**: Green arrow pointing up from "Item 3," red arrow pointing right from "Item 3."
- **Trader Bot**: A label on the left side of the image, with "Trader Bot" written in white text on a gray background.
- **Character**: A humanoid figure with red hair, wearing a gray shirt and blue pants, positioned in front of the interface.
- **Background**: A simple, light-colored room with tiled floors and walls, suggesting an indoor setting.

### Visual Flow / Relationships
- **Most Prominent**: The interface with the grid of items.
- **Arrows**: Implies interaction points, directing attention to "Item 3."
- **Character**: Positioned in front of the interface, likely representing the player or user interacting with the game.

</details>

<p></p>



- In the **Properties** panel, click the**Select item** drop-down menu

<details>
<summary>Configure the first shop item 1</summary>

<p></p>

[Configure the first shop item 1](../../../image_data/f33328ebe50e3cde302fbf4d879b1c994085efcc0cb1783113f7dd3713d7e944.md)

### Overview
This image depicts a user interface section of a game or application, specifically a shop item selection menu. The layout includes options for managing credits, selecting items, and viewing shop items. The interface has a dark theme with light-colored text and interactive elements.

### Key Elements
- **Header Options**: 
  - Display available Meta Credits: A toggle switch is visible next to this option.
  - Display item balance: A dropdown labeled "Select item" is shown.
  - Panel UI mode: Another dropdown labeled "Light Mode" is displayed.
- **Shop Items Section**: 
  - Title: "Shop items" is prominently displayed at the top.
  - Item List: A list of items is shown under "Item 1," each with an icon, name, and description.
    - Faster Pies: In-world item
    - Faster Apples: In-world item
    - Oven: In-world item
    - Gem (Pack of 50): 25 Meta Credits · In-world item
    - Gem: In-world item
    - Apple Pie: In-world item
    - Apple: In-world item
  - Each item has a small icon next to its name and a minus sign to the right, likely for removing items from the selection.
- **Dropdowns**: Two dropdown menus labeled "Select item" are present, one under "Item 1" and another under "Item 7" and "Item 8."

### Visual Flow / Relationships
- **Most Prominent Element**: The shop items list under "Item 1" is the most prominent due to its size and placement.
- **Arrows and Lines**: There are no arrows or lines connecting elements.
- **Spatial Relationships**: Items are arranged vertically within the "Item 1" section, and the dropdowns are aligned horizontally beneath them. The "Item 7" and "Item 8" sections follow the same pattern but are partially cut off.

</details>

<p></p>



- Select **Gem**, and ensure the first **Quantity** text entry is set to “1”

<details>
<summary>Configure the first shop item 2</summary>

<p></p>

[Configure the first shop item 2](../../../image_data/d44a666bb80c865ef826eeabf70c36defe992034452685ca19efcdfec599c42e.md)

### Overview
This image depicts a user interface element from a game or application, specifically a section for selecting items within a shop. The interface includes a dropdown menu for selecting items, quantity fields, and a currency selection option.

### Key Elements
- **Dropdown Menu**: Located in the upper right area, labeled "Gem". Contains a downward-facing arrow indicating a dropdown functionality.
- **Quantity Fields**: Two fields labeled "Quantity" appear below the dropdown menu. Each field contains the number "1".
- **Select Item Dropdown**: Positioned below the first Quantity field, labeled "Redeem with Select item". This is another dropdown menu.
- **Expandable Section**: The "Shop items" heading is expandable, indicated by a downward-facing arrow next to it.
- **Item List**: Below the expandable section, partially visible items include "Item 1" and "Item 2".

### Visual Flow / Relationships
The most prominent visual elements are the dropdown menus and quantity fields. The dropdown menus are arranged vertically, with the currency selection at the top and the item selection below. The quantity fields are aligned horizontally beneath the respective dropdowns. The expandable section allows users to view more items if needed.

</details>

<p></p>



- Click the **Select item** drop-down and choose **Apple Pie**

<details>
<summary>Configure the first shop item 3</summary>

<p></p>

[Configure the first shop item 3](../../../image_data/f2aa4fa545b28373b2319d812a9bb3f3cf9363ea3fb189f197c69936f00741b2.md)

### Overview
This image depicts a user interface element from a game or application, specifically a shop item selection screen. The interface allows the user to select items to redeem with gems. The layout includes a sidebar menu, item selection area, quantity selector, and a search bar.

### Key Elements
- **Sidebar Menu**: Located on the left side, labeled "Shop items." Contains nested items under "Item 1."
- **Item Selection Area**: Below the sidebar, displays a list of items with icons and descriptions.
    - **Faster Pies**
    - **Faster Apples**
    - **Oven**
    - **Gem**
    - **Apple Pie** (highlighted, indicating selection)
    - **Apple**
- **Quantity Selector**: Positioned next to the item selection area, showing "1" as the current quantity.
- **Search Bar**: Above the item selection area, with a magnifying glass icon.
- **Redeem with**: A dropdown menu labeled "Select item," currently set to "Gem."

### Visual Flow / Relationships
The most prominent visual element is the highlighted "Apple Pie" in the item selection area. The items are arranged vertically, with the search bar above them. The quantity selector is adjacent to the item selection area. The sidebar menu is nested under "Item 1."

</details>

<p></p>



- Change the second **Quantity** text entry to “10” (10x Apple Pies = 1x Gem)

<details>
<summary>Configure the first shop item 4</summary>

<p></p>

[Configure the first shop item 4](../../../image_data/2b4e7bebc83b2b24cf100450788580159f71e7aa8b4a6cd81c10b0d31dc102ae.md)

### Overview
This image depicts a user interface segment from a shopping or inventory management application. It shows a list of items available for purchase or redemption, with specific quantities and options to redeem items with other items.

### Key Elements
- **Header**: "Shop items" at the top left, indicating the section of the app.
- **Item 1**: A nested item under the "Shop items" header.
  - **Quantity**: "1" displayed next to "Quantity" on the right side.
  - **Redemption Option**: "Apple Pie" with a downward arrow, suggesting a dropdown menu for selecting redemption options.
  - **Gem**: A small icon with a gem symbol and a downward arrow, likely indicating a dropdown for selecting a gem as a redemption option.
- **Minus Button**: A minus button on the far right, possibly for decreasing the quantity of the item.
- **Item 2**: Partially visible below Item 1, showing another item labeled "Item 2" with a similar layout but obscured content.

### Visual Flow / Relationships
The most prominent visual elements are the nested items under the "Shop items" header. The redemption options and quantity fields are aligned horizontally, with the redemption option being more visually emphasized due to its larger size and distinct iconography compared to the quantity field.

</details>

<p></p>



The gem should now be visible in the shop UI, which also lists the purchase price and currency of the item.

<details>
<summary>Configure the first shop item 5</summary>

<p></p>

[Configure the first shop item 5](../../../image_data/993bac30bb6b5739058deda16230d975178e03c383d8ad3a25f033ab7b6aba4d.md)

### Overview
This image depicts a user interface element resembling a shop or inventory screen. It features a grid layout with labeled items and a currency indicator at the top right corner.

### Key Elements
- **Top Left Corner**: A blue gem icon with a pink gemstone in the center, labeled "1x Gem" beneath it.
- **Top Right Corner**: A white circular icon with a purple diamond symbol and the number "300" next to it.
- **Grid Layout**: A 3x3 grid of item placeholders, each labeled with "Item X" where X ranges from 2 to 7.
- **Background**: The main background is light gray, with a darker gray border around the grid.

### Visual Flow / Relationships
The most prominent visual is the blue gem icon with the pink gemstone, as it stands out due to its distinct color and placement. The grid layout suggests a logical reading order from left to right and then down the rows.

</details>

<p></p>



## Adding utility power-ups: Faster pies and faster apples

Purchaseable utility items are great options to sell in the shop. They increase the player’s earning potential, but still require them to perform the core game loop of collecting apples and baking pies in order to maximize their benefit.

The benefit of utility items like faster pies is that it keeps the perceived value of pies high (as it still requires time investment from the player to bake the pie) while ensuring the player feels rewarded for purchasing the power-up (because they can increase their pie output).

Conversely, if we made pies purchaseable they would become devalued, as players with enough money could just pay to get them, rather than dedicating time in-game.

Let’s add “Faster Pies” and “Faster Apples” to the game. Repeat the steps for adding Gems to the shop, but now add the following items:

- Item 2: 1x Faster Pies should be redeemed with 20x Gems
- Item 3: 1x Faster Apples should be redeemed with 30x Gems

Your world shop properties should now be as follows:

<details>
<summary>Example world shop proerties</summary>

<p></p>

[Example world shop proerties](../../../image_data/e02f987b1722f6649ba4444b1c5f68205096ed4a2d996c42c939773246be5b05.md)

### Overview
This image depicts a user interface segment from a shopping or inventory management system. It shows a list of items available for purchase or redemption, with options to specify quantities and redeem items with gems.

### Key Elements
- **Item 1**:
  - **Visual description**: A row containing item name, quantity selector, and redemption option.
  - **Location**: Top-left corner of the list.
  - **Contents**: 
    - Item Name: "Item 1"
    - Quantity: "1"
    - Redeem with: "Apple Pie"
    - Quantity for redemption: "10"
  - **Visual styling**: Dark background with light text, blue gem icon, and gray minus button.

- **Item 2**:
  - **Visual description**: Another row similar to Item 1 but with a different item name and redemption option.
  - **Location**: Below Item 1.
  - **Contents**: 
    - Item Name: "Item 2"
    - Quantity: "1"
    - Redeem with: "Faster Pies"
    - Quantity for redemption: "20"
  - **Visual styling**: Same as Item 1.

- **Item 3**:
  - **Visual description**: Similar to Items 1 and 2 but with a different item name and redemption option.
  - **Location**: Below Item 2.
  - **Contents**: 
    - Item Name: "Item 3"
    - Quantity: "1"
    - Redeem with: "Faster Apples"
    - Quantity for redemption: "30"
  - **Visual styling**: Same as Items 1 and 2.

- **Expandable Sections**:
  - **Visual description**: Each item has a triangle icon that can be clicked to expand or collapse the details.
  - **Location**: Left side of each item row.
  - **Contents**: The triangle icon indicates expandable content.
  - **Visual styling**: Light gray triangle with a darker gray background.

### Visual Flow / Relationships
- **Most prominent visually**: The expandable sections and the quantity selectors.
- **Arrows/lines/connectors**: None.
- **Implied reading order**: From top to bottom, left to right within each item row.
- **Spatial relationships**: Items are stacked vertically, with each item having its own set of options.

</details>

<p></p>



## Configuring the appearance of the shop

As there are only three items for sale in the shop, you can configure the shop to only show the first three items in the shop UI. This will reduce clutter and make it easier for the player to understand what they can purchase.

With the shop selected, change the following properties in the **Properties** panel:

- **Displayed title**: Cook Shop
- **# Shop Items**: 3
- **Display item balance**: Apple Pie