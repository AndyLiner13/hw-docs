Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/meta-horizon-worlds-kudos-panel-instructions

# Meta Horizon Worlds: Kudos Panel Instructions

**Note**: This functionality is not currently supported for Meta Horizon Worlds on web and mobile.

Hey Creators! The Meta Horizon Worlds team has created a new “Kudos Panel” asset to help with monetizing your worlds. The Kudos Panel is a ready-to-use component that automatically configures your world with everything you need to allow people to purchase Kudos as a way to show their support for your creations.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/8c9987f4ab859d332d775fe60ad389e0c8307311a1a3af4030c5b22083f4d7c3.md)

### Overview
The image depicts a user interface element that appears to be part of a game or application related to purchasing items. The central focus is a card labeled "Top Kudos Contributors," which seems to display a list of contributors or rewards. Below this card, there are options to purchase Kudos at different levels.

### Key Elements
- **Card (Top Kudos Contributors)**: Located centrally, this card has a light blue background with rounded corners. It contains text indicating contributors but no specific names are visible.
- **Purchase Options**: Below the card, there are three buttons labeled "Level 1," "Level 5," and "Level 10." Each button has a gradient background transitioning from dark blue to lighter blue, with white text indicating the level price ($5.99, $4.99, $9.99 respectively).
- **Background**: The background consists of a grid pattern with a light gray floor and a blue sky, suggesting a virtual environment.

### Visual Flow / Relationships
- **Most Prominent Element**: The "Top Kudos Contributors" card.
- **Arrows/Connections**: There are no arrows or lines connecting elements.
- **Spatial Relationships**: The purchase options are aligned horizontally below the card, with the levels stacked vertically under each button.

</details>

<p></p>



## Benefits of the Kudos Panel

As mentioned above, the Kudos Panel will automatically configure the needed components in your world to allow you to start earning from your creations. When you place a Kudos Panel in your world, it will add the necessary player variables, Kudos leaderboard, and commerce items that will properly configure the required scripts to enable purchases. No additional scripting or coding is required to implement the feature.

Additionally, Creators can edit or tie scripts into the Kudos player variables. This allows you to use Kudos Panel as a starting point for creating your own purchasable items or use Kudos as a gating mechanism for areas of your world with restricted access.

Once created, the Kudos Panel will allow users to purchase Kudos. They are automatically consumed commerce items that will increase the purchaser’s Kudos score. This score is shown on the Kudos Panel leaderboard.

## Kudos Panel Components

The Kudos Panel asset will add the following components to your world:

● **“kudos\_total” player variable:** a persistent player variable to track the total Kudos score for a player. Level 1 Kudos purchase will give 100 Kudos points, level 5 will give 500 Kudos points and level 10 will give 1000 Kudos points.

● **“Kudos” leaderboard:** leaderboard for tracking current Kudos score ranks for all users in this world.

● **Commerce items:** Kudos Panel will create three commerce items with the base names of “Level 1 Kudos”, “Level 5 Kudos”, and “Level 10 Kudos”. These will have the purchase prices of $0.99, $4.99, and $9.99, respectively.

> **NOTE:** If you want to adjust the Kudos commerce item prices, you can! You will need to create new commerce items and update the scripts, text, and In-App Purchase gizmos accordingly.

● **Scripts, In-App Purchase, and leaderboard gizmos:** Kudos Panel also adds all the scripts and visual elements needed to purchase Kudos and show the Kudos score leaderboard.

## How to Use Kudos Panel

In order to access the Kudos Panel, you will need to be part of our Creator Monetization Program and have your payment information properly configured.

The Kudos Panel can only be added to your world once. It is not currently supported to add multiple instances of the Kudos Panel to a single world. If you have previously added a Kudos Panel to your world and fully deleted it, you can add a replacement Kudos Panel to your world.

Adding multiple Kudos Panels to your world will result in Kudos Points being awarded incorrectly and Kudos Leaderboards showing inaccurate Kudos scores.

## Adding a Kudos Panel to your world

To add a Kudos Panel to your world, please do the following:

- Confirm that you have no more than two leaderboards in your world. If you have previously added a Kudos Panel to your world and have a leaderboard called “Kudos” you can skip this step.
- Open the Creation UI and select Assets->Asset Library.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/2e8fd6b14e095c073189e0770f74b5aad21a17febcde7cbdd02f06105b47211c.md)
  
  ### Overview
  This image depicts a user interface (UI) screen from a software application, likely related to game development or asset management. The screen is divided into two main sections: a sidebar on the left and a content area on the right.
  
  ### Key Elements
  - **Sidebar (Left Panel)**:
    - **Visual description**: A vertical menu with a blue header labeled "Build."
    - **Location**: Left side of the screen.
    - **Contents**: Contains multiple categories such as "Platforms," "Characters," "Sounds," "Assets," and "Tools."
    - **Visual styling**: The menu items have a white background with black text, and some items are highlighted in purple, indicating selection.
    
  - **Content Area (Right Panel)**:
    - **Visual description**: A large rectangular area with a dark gray background.
    - **Location**: Right side of the screen.
    - **Contents**: Displays the message "There are no assets in this world. You can create new assets later in any world."
    - **Visual styling**: The text is white, and there is a small icon resembling a camera or photo, which is also white.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The content area displaying the message about assets.
  - **Arrows, lines, connectors**: None visible.
  - **Spatial relationships**: The sidebar is on the left, and the content area occupies the right side of the screen. The content area is larger than the sidebar but both are clearly distinct sections.
  
  </details>
  
  <p></p>
  
  
- Select the Commerce folder.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/cdad28ef7d617c6170b8fbcfc0daa2fbac831c39afbc1c50734a7622be39b677.md)
  
  ### Overview
  This image depicts a user interface (UI) screen from a game or application, likely related to building or asset management. The layout includes a sidebar menu on the left and a main content area on the right. The sidebar contains a list of categories, while the main area displays assets with thumbnails and labels.
  
  ### Key Elements
  - **Sidebar Menu**:
    - **Visual description**: A vertical menu with rounded corners and a light blue background.
    - **Location**: Left side of the screen.
    - **Contents**: Contains categories such as "Build," "Reused," "Structures," "Lights," "Animations," and "Animals."
    - **Visual styling**: Light blue background, white text, and a darker blue border.
  
  - **Main Content Area**:
    - **Visual description**: A grid layout displaying asset thumbnails and labels.
    - **Location**: Right side of the screen.
    - **Contents**:
      - **Top-left thumbnail**: A small model of a structure labeled "The Sailor's World."
      - **Top-right thumbnail**: A small model of a teleporter device labeled "Teleporter Device."
      - **Bottom-left thumbnail**: A small model of a vehicle labeled "Vehicle."
      - **Bottom-right thumbnail**: A small model of a character labeled "Character."
    - **Visual styling**: Each thumbnail has a light gray background with a darker gray border, and the labels are in black text.
  
  - **Navigation Bar**:
    - **Visual description**: A horizontal bar at the bottom with various icons.
    - **Location**: Bottom of the screen.
    - **Contents**: Contains icons for actions like "Save," "Load," "Add," and others.
    - **Visual styling**: White background with colored icons.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The main content area displaying assets.
  - **Arrows, lines, connectors**: None visible.
  - **Spatial relationships**: The sidebar menu is on the left, the main content area is on the right, and the navigation bar is at the bottom. The thumbnails within the main content area are arranged in a grid layout.
  
  </details>
  
  <p></p>
  
  
- Select the Kudos Panel asset and place it in your world.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/149856d5972862db4423dc80cf33699f56c96b3f55036a5007cd19925037b117.md)
  
  ### Overview
  This image depicts a user interface (UI) screen divided into two main sections: "Build" on the left and "Assets" on the right. The layout suggests a design or game development tool where users can manage assets and build components.
  
  ### Key Elements
  - **Left Panel ("Build")**:
    - **Visual description**: A vertical menu with rounded corners.
    - **Location**: Left side of the screen.
    - **Contents**: Contains options such as "Featured," "Environment," "Structures," "Home," "Lights," "Decorations," "Food," "Game Items," "Electronics," "Animals," and "Commerce."
    - **Visual styling**: Dark background with white text and light gray accents.
  
  - **Right Panel ("Assets")**:
    - **Visual description**: A larger area displaying asset thumbnails and a placeholder for placing assets.
    - **Location**: Right side of the screen.
    - **Contents**: Displays two asset thumbnails labeled "Kudos Panel" and "Gunmetal Machine."
    - **Visual styling**: Light gray background with darker gray accents around the thumbnails.
  
  - **Central Area**:
    - **Visual description**: A central area with a placeholder for placing assets.
    - **Location**: Below the "Assets" title and above the thumbnails.
    - **Contents**: A white placeholder with a plus sign and the text "> Place asset" in black.
    - **Visual styling**: White background with black text and a subtle shadow effect.
  
  - **Cursor**:
    - **Visual description**: A white arrow cursor.
    - **Location**: Bottom-right corner of the screen.
    - **Contents**: Indicates interaction readiness.
    - **Visual styling**: Standard white arrow cursor.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Place asset" placeholder in the central area.
  - **Arrows/lines/connectors**: None.
  - **Spatial relationships**: The left panel is vertically aligned with the right panel, and both are separated by a clear margin. The central area is below the "Assets" title and above the thumbnails.
  
  </details>
  
  <p></p>
  
  
- Once the Kudos Panel is placed in your world, Publish your world. The Kudos Panel asset is now ready to use.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/d922fc8d54199e85be422ef06f332eff61ab206bd3686c5369051c86a0d3a118.md)
  
  ### Overview
  This image depicts a user interface element within a virtual environment, likely part of a game or application. It shows a card-like interface with a title, content area, and pricing information.
  
  ### Key Elements
  - **Title Card**: Located at the top, it reads "Top Kudos Contributors." The card has a light gray background with rounded corners and a subtle shadow effect.
  - **Content Area**: Below the title, there's a message stating "No recent Kudos." This text is centered and written in a smaller font compared to the title.
  - **Pricing Section**: At the bottom, there are three levels of Kudos contributors with corresponding prices:
    - Level 1: "$0.99"
    - Level 5: "$4.99"
    - Level 10: "$9.99"
  - **Background**: The background of the interface is a simple grid pattern, suggesting a virtual space or a 3D environment.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the title card, as it draws attention due to its larger size and central placement. The content area follows closely beneath it, providing additional information. The pricing section at the bottom is less prominent but still noticeable due to the use of bold text and distinct separation from the rest of the interface.
  
  </details>
  
  <p></p>
  
  

> **NOTE:** If you do not see these options, it means you have not been correctly added to the Creator Program. You must be invited to join the Creator Program before you can use the Kudos Panel.

### FAQ

**● Can I add multiple Kudos Panels to my world?**

○ No, while the system doesn’t prevent you from adding multiple Kudos Panels to your world, doing so will cause Kudos scores to be updated incorrectly and Kudos leaderboard panels to show incorrect scores.

**● Can I customize the Kudos Panel components once they are placed in my world?**

○ Yes, you can update Kudos Panel components after they have been placed.

○ Common updates include changing the leaderboard gizmo title.

○If you want to adjust the Kudos commerce item prices, you would need to create new commerce items and update the scripts, text, and In-App Purchase gizmos accordingly.

> **NOTE:** If you update the leaderboard name or create new commerce items, those changes will not be automatically reflected in new instances of the Kudos Panel added from the Asset Library.

**● Do Kudos Panel scores reset?**

○ Kudos scores do not automatically reset.

○ If you want to add scripting support to reset Kudos, you are welcome to.

**● Can I remove the Kudos Panel from my world?**

○ Yes, to fully remove the Kudos Panel from your world, delete all the gizmos associated with the Kudos Panel. You will also need to delete the “kudos\_total” player variable, the “Kudos” leaderboard, and the “Level 1 Kudos”, “Level 5 Kudos” and “Level 10 Kudos” commerce items. If visitors have purchased any of these commerce items, you will not be able to delete them, but as long as they are not attached to an In-World Purchase object, visitors will not be able to purchase them.