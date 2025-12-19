Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/economy-world-tutorial/module-2-setup

# Module 2 - Setup

Requirements

 You will need to be a member of MHCP and have accepted the monetization Terms Of Service in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

## Creating in-world items

In-world items are tied to the world in which they are created, and can only be created by owners and editors of the world. This means that in order for the shop to work as expected the in-world items for this tutorial will need to be created by you.

Follow the [In-World Purchase Guide: Creating An Item](../../../MHCP%20program/Monetization/In-world%20purchase%20guide.md#creating-an-item) to create the following in-world items:

* Apple
* Apple Pie
* Faster Apples
* Faster Pies
* Gem
* Oven

## Consumable vs. durable: What’s the difference?

A consumable in-world item is something that can be granted to a player, and is able to be spent or removed from their world inventory. It is also possible to grant players more than one of the consumable items, making them perfect for soft currencies, and reflective of the way that in-world items are typically used in an economy.

Conversely, a durable item is granted to a player once and is not able to be removed from their inventory. This is obviously a little less appropriate for our situation.

When creating your items, make sure to set each item type to “consumable”, and set Meta credits to “off”.

<details>
<summary>Create in-world item</summary>

<p></p>

[Create in-world item](../../../image_data/660b6cca7d27381bce9d53f4fb16c6589c9732efa22f3bc9d8e15320a3e8f0ea.md)

### Overview
This image depicts a modal dialog box titled "Create an in-world item." It is part of a user interface for creating items within a virtual environment, likely a game or simulation platform. The dialog box contains fields for entering the name and description of the item, along with options for setting a thumbnail image, allowing Meta Credits purchases, and specifying the item type.

### Key Elements
- **Title**: "Create an in-world item" located at the top of the dialog box.
- **Name Field**: Positioned below the title, with the current input being "Apples."
- **Description Field**: Below the name field, containing the text "Tasty and delicious."
- **Thumbnail Section**: Located on the right side, showing a placeholder image of an apple.
- **Meta Credits Option**: A toggle switch next to the text "Allow people to purchase the item using Meta Credits."
- **Item Type Dropdown**: Positioned to the right of the Meta Credits option, currently set to "Consumable."
- **Buttons**: Two buttons at the bottom of the dialog box, labeled "Cancel" and "Create."

### Visual Flow / Relationships
The most prominent visual element is the dialog box itself, which is centered on the screen. The name and description fields are aligned horizontally, with the description field taking up more space due to its larger input area. The thumbnail image is placed to the right of the description field. The Meta Credits toggle and item type dropdown are positioned below the description field, and the buttons are at the very bottom of the dialog box. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from top to bottom.

</details>

<p></p>



Once you have created the items, the **Commerce** panel should list them as follows (though your items will have different SKUs).

<details>
<summary>In-World Items</summary>

<p></p>

[In-World Items](../../../image_data/726eeda0b804b13d15a7b53b5aa9190024bf24fc1d8301a76cfe6b4589c5d32e.md)

### Overview
This image depicts a user interface element showing a list of consumable items within a game or application. The interface includes a search bar at the top, a dropdown menu labeled "Displaying," and a selection of consumable items listed below.

### Key Elements
- **Search Bar**: Located at the top-left, with a magnifying glass icon indicating a search function.
- **Dropdown Menu**: Positioned next to the search bar, labeled "Displaying," offering options such as "In-world Items."
- **Items List**: Below the dropdown, a list of consumable items is displayed:
  - **Apple**: Icon of an apple, labeled as "Consumable - SKU: apple_615786d0"
  - **Apple Pie**: Icon of a pie, labeled as "Consumable - SKU: apple_pie_552444e2"
  - **Faster Apples**: Icon of an apple with a speedometer, labeled as "Consumable - SKU: faster_apples_0c1f8411"
  - **Faster Pies**: Icon of a pie with a speedometer, labeled as "Consumable - SKU: faster_pies_e3e84cde"
  - **Gem**: Icon of a gemstone, labeled as "Consumable - SKU: gem_263b1de0"
  - **Oven**: Icon of an oven, labeled as "Consumable - SKU: oven_fe36a967"

### Visual Flow / Relationships
The visual hierarchy is clear, with the search bar and dropdown menu at the top, followed by the list of items. The items are arranged vertically, with each item having its own icon, label, and SKU number. There are no arrows or lines connecting the elements, but the layout suggests a linear reading order from top to bottom.

</details>

<p></p>



## Creating item thumbnails

To make a thumbnail of an item:

- Search for the item in the Asset Library

<details>
<summary>Searching in Asset Library</summary>

<p></p>

[Searching in Asset Library](../../../image_data/55b03852b5f2574e918a972ab76632dab0055c7760c00016aa9d3ba049b71be8.md)

### Overview
This image depicts a user interface of an asset library, likely within a digital asset management tool or game development software. The interface includes a search bar, filtering options, and a grid of assets displayed below.

### Key Elements
- **Search Bar**: Located at the top right, contains a magnifying glass icon and the word "apple," indicating a search term has been entered.
- **Filter Options**: Positioned next to the search bar, offering sorting criteria such as "Highest rated" and a dropdown menu for selecting filters.
- **Tabs**: At the very top, there are tabs labeled "Asset Library," "Console," "Tests," and "Performance."
- **Navigation Menu**: On the left side, there are two sections: "Public Assets" and "My Assets," both with lock icons suggesting restricted access.
- **Asset Grid**: Below the navigation menu, there are five assets displayed in a grid layout. Each asset has a thumbnail image, a name, and a creator's name.
    - **Asset 1**: A white tree with a lock icon, labeled "Apple Tree W..." under "MetaHorizon..."
    - **Asset 2**: A brown tree with a lock icon, labeled "Apple Tree AU..." under "MetaHorizon..."
    - **Asset 3**: A green tree with a lock icon, labeled "Apple Tree" under "MetaHorizon..."
    - **Asset 4**: A yellowish-brown rotten apple with a lock icon, labeled "Apple Rotten" under "MetaHorizon..."
    - **Asset 5**: A red apple with a lock icon, labeled "Apple" under "MetaHorizon..."
    - **Asset 6**: A red apple without a lock icon, labeled "Red Apple" under "Ivanchuhov."

### Visual Flow / Relationships
The most prominent visual elements are the search bar and the asset grid. The assets are arranged in a grid format, with thumbnails, names, and creators' names clearly visible. There are no arrows or lines connecting elements, but the layout suggests a logical reading order moving from left to right and then down the rows.

</details>

<p></p>



- Drag the item into the world

<details>
<summary>Adding item to the world</summary>

<p></p>

[Adding item to the world](../../../image_data/d6f778dcecfa3f0ba95cd770cb1db86f7e1d8b5059d7735db7b05fec689aebfc.md)

### Overview
The image depicts a 3D modeling environment with a grid floor and a floating red apple model in the center. The interface includes various toolbars at the top and bottom, suggesting a software application for 3D modeling or game development.

### Key Elements
- **Grid Floor**: A large, light gray grid spans the entire floor, serving as a reference for positioning objects.
- **Red Apple Model**: A simple, red, spherical object with a small stem, positioned centrally above the grid.
- **Toolbars**: Located at the top and bottom of the screen, containing various icons and labels such as "Asset Library," "Console," "Tests," and "Performance."
- **Yellow Wall**: A partially constructed wall made of yellow blocks, forming a partial enclosure around the apple.
- **Purple Text Blocks**: Small purple blocks with white text "Aa" placed within the yellow wall structure.

### Visual Flow / Relationships
- **Most Prominent Element**: The red apple model.
- **Spatial Relationships**: The apple is centered above the grid, with the yellow wall partially enclosing it. The grid serves as a reference plane for the apple's position. The toolbars provide contextual information about the application being used.

</details>

<p></p>



- Use the viewport camera to position the item in the center of the frame. You can change the camera speed to make positioning the camera easier.

<details>
<summary>Position item for screenshot.</summary>

<p></p>

[Position item for screenshot.](../../../image_data/7ef2626198ea5ffa3484bc8bbedd2d95685511ad9879fb71aa9cebc6b97f121e.md)

### Overview
The image depicts a 3D modeling environment with a single object—a red apple—hovering above a grid-based workspace. The environment includes a simple wall on the right side and a clear blue sky background. The interface at the bottom suggests this is a 3D modeling software, likely Unity, given the layout and tools available.

### Key Elements
- **Red Apple**: A 3D model of a red apple with a small stem, located centrally above the grid. It has a glossy texture.
- **Grid Workspace**: A large, light gray grid spans the lower half of the image, serving as the work area for 3D modeling.
- **Wall**: A yellow wall with a tiled pattern is positioned on the right side of the grid.
- **Background**: A gradient blue sky fills the upper portion of the image.
- **Interface Elements**: Various toolbars and panels are visible at the top and bottom of the screen, indicating a 3D modeling software interface.

### Visual Flow / Relationships
- **Most Prominent Element**: The red apple is the focal point of the image.
- **Spatial Relationships**: The apple is centered above the grid, with the wall to its right and the sky above. The grid serves as the base for the scene, while the wall adds depth and context.

</details>

<p></p>



- Take a screenshot of the item and save this image locally.
- Upload the image when creating your in-world items.