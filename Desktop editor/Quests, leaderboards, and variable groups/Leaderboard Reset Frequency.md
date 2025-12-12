Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/leaderboard-reset-frequency

# Leaderboard Reset Frequency

Important

 This feature is not available to all creators.

## Overview

Horizon’s Leaderboard Reset Frequency feature lets you set an option to reset a leaderboard at periodic intervals. You can configure the reset interval to one of the following values:

* **Daily**: Resets every day at 12:00 AM Pacific Time.
* **Weekly**: Resets every Monday at 12:00 AM Pacific Time (every Sunday night).
* **Monthly**: Resets on the 1st day of every calendar month at 12:00 AM Pacific Time.
* **Never**: Never resets. This is the default setting.

## Linking persistent variables

If you use a persistent variable to store a player’s scores in the leaderboard, then you can link the persistent variable so that it’s reset along with the leaderboard. In addition, if a player’s persistent variable is linked, all player entries for the persistent variable become zero when the leaderboard resets.

## How to set the leaderboard frequency

Learn the workflow involved in setting the leaderboard frequency by following these steps.

- Choose a reset cadence for a new or existing leaderboard.
  - In the CUI, navigate to **Systems** > **Leaderboards**.
    <details>
    <summary>Image Content</summary>
    
    <p></p>
    
    [All image details and metadata](../../image_data/ceead21b06f6b0338e0ffecc10d87a29d729c41f68d364297fa0b2368499affa.md)
    
    ### Overview
    This image depicts a user interface screen from a game development tool or platform. It shows a sidebar menu on the left and a main content area on the right. The main content area is focused on managing leaderboards within a game world.
    
    ### Key Elements
    - **Sidebar Menu (Left Panel)**:
      - **Visual description**: A vertical menu with rounded corners and a dark background.
      - **Location**: Left side of the image.
      - **Contents**: Contains options labeled "Systems," "Quests," "Leaderboards," "Player Variables," and "Variable Groups." "Leaderboards" is highlighted, indicating it is currently selected.
      - **Visual styling**: Dark gray background, white text, and a subtle shadow effect.
    
    - **Main Content Area (Right Panel)**:
      - **Visual description**: A large rectangular panel with rounded corners and a dark background.
      - **Location**: Right side of the image.
      - **Contents**: Displays "Leaderboards" at the top, followed by "World Leaderboards (2/3)" and a brief description underneath. Two leaderboard entries are listed: "leaderboard1" marked as "Daily" and "leaderboard2" marked as "Never resets."
      - **Visual styling**: Dark gray background, white text, and small purple trophy icons next to each leaderboard entry.
    
    - **Action Buttons**:
      - **Create Leaderboard Button**: Located at the top right corner of the main content area.
        - **Visual description**: A blue button with white text.
        - **Location**: Top right corner of the main content area.
        - **Contents**: Text reads "Create Leaderboard."
        - **Visual styling**: Blue background, white text, and a subtle shadow effect.
    
    - **Sorting Dropdown**:
      - **Visual description**: A dropdown menu located to the right of the "Create Leaderboard" button.
        - **Location**: Top right corner of the main content area.
        - **Contents**: Text reads "A-Z" with a downward arrow indicating a dropdown.
        - **Visual styling**: Dark gray background, white text, and a thin black border.
    
    - **Icons and Actions**:
      - **Edit and Delete Icons**: Located to the right of each leaderboard entry.
        - **Visual description**: Two icons, one for edit and one for delete.
        - **Location**: To the right of each leaderboard entry.
        - **Contents**: The edit icon resembles a pencil, and the delete icon resembles a trash can.
        - **Visual styling**: White icons on a dark gray background.
    
    - **Footer Bar**:
      - **Visual description**: A horizontal bar at the bottom of the image containing various icons and a clock.
        - **Location**: Bottom of the image.
        - **Contents**: Icons include a cube, wrench, shopping bag, globe, settings gear, code snippet, and another gear icon.
        - **Visual styling**: Dark gray background, white icons, and a subtle shadow effect.
    
    ### Visual Flow / Relationships
    - **Most Prominent Element**: The main content area displaying the leaderboards.
    - **Arrows and Lines**: No arrows or lines are present.
    - **Spatial Relationships**: The sidebar menu is adjacent to the main content area, and the footer bar is at the bottom of the image. The action buttons and sorting dropdown are positioned above the main content area.
    
    </details>
    
    <p></p>
    
    
  - Either create a new leaderboard by selecting **Create Leaderboard**, or edit an existing leaderboard by selecting **Edit**.
    <details>
    <summary>Image Content</summary>
    
    <p></p>
    
    [All image details and metadata](../../image_data/b6d7ba4469d4f0fc8d09160557e4c2da779856b07d05bcd0a321ade0b775ca96.md)
    
    ### Overview
    This image depicts a user interface from a game development tool or platform, specifically focusing on the "Leaderboards" section under the "Systems" menu. The interface allows users to manage and edit leaderboards within a game world. The main focus is on the "Edit Leaderboard" dialog box, which contains fields for naming the leaderboard, sorting order, reset frequency, and resetting persistent variables.
    
    ### Key Elements
    - **Left Panel**: Displays a sidebar with options such as "Systems," "Quests," "Leaderboards," "Player Variables," and "Variable Groups." The "Leaderboards" option is highlighted, indicating the current selection.
      - **Visual description**: A vertical menu with rounded corners.
      - **Location**: Left side of the screen.
      - **Contents**: Text labels for each menu item.
      - **Visual styling**: Dark background with white text and purple highlights.
    
    - **Main Content Area**: Shows the "World Leaderboards" section with two predefined leaderboards labeled "leaderboard" and "leaderboard."
      - **Visual description**: A grid layout with icons and text.
      - **Location**: Center-left of the screen.
      - **Contents**: Leaderboard names, icons, and dropdown menus for sorting and reset frequency.
      - **Visual styling**: Dark background with light text and purple icons.
    
    - **Dialog Box**: Overlays the main content area, titled "Edit Leaderboard."
      - **Visual description**: A modal dialog with rounded corners.
      - **Location**: Center-right of the screen.
      - **Contents**: Fields for "Name," "Sort Order," "Reset frequency," and "Reset persistent variable."
        - **Name**: Placeholder text "leaderboard:".
        - **Sort Order**: Dropdown menu set to "Descending."
        - **Reset frequency**: Dropdown menu set to "Never."
        - **Reset persistent variable**: Toggle switch set to "No."
      - **Visual styling**: Dark background with light text and purple accents.
    
    - **Buttons**: Two buttons at the bottom of the dialog box.
      - **Visual description**: Rounded rectangular shapes.
      - **Location**: Bottom of the dialog box.
      - **Contents**: "Cancel" and "Save" labels.
      - **Visual styling**: Dark background with white text and purple accents.
    
    - **Top Bar**: Contains the title "Leaderboards" and a "Create Leaderboard" button.
      - **Visual description**: Horizontal bar with text and a button.
      - **Location**: Top right of the screen.
      - **Contents**: Title text and button label.
      - **Visual styling**: Dark background with white text and purple button.
    
    - **Right Panel**: Contains sorting dropdown and icons for editing and deleting leaderboards.
      - **Visual description**: Vertical panel with icons and dropdown menus.
      - **Location**: Right side of the screen.
      - **Contents**: Sorting dropdown ("A-Z") and icons for edit and delete operations.
      - **Visual styling**: Dark background with light text and purple icons.
    
    ### Visual Flow / Relationships
    - **Most Prominent Element**: The "Edit Leaderboard" dialog box.
    - **Arrows/Connectors**: None.
    - **Reading Order**: The user would typically start by selecting a leaderboard from the main content area, then interact with the dialog box to edit its settings before saving changes.
    
    </details>
    
    <p></p>
    
    
  - Beside **Reset frequency**, select the interval that you want. This can be Daily, Weekly, or Monthly. The value defaults to Never.
    <details>
    <summary>Image Content</summary>
    
    <p></p>
    
    [All image details and metadata](../../image_data/b5acdb0a7fd6603fb066602217e647e229531287ac16df27ad920b205a47ef63.md)
    
    ### Overview
    The image depicts a user interface screen from a game development tool or platform, specifically focusing on the "Leaderboards" section under the "Systems" menu. The screen shows options for managing leaderboards within a game world, with a dropdown menu open showing reset frequency options.
    
    ### Key Elements
    - **Left Panel**: A vertical navigation menu labeled "Systems" with options such as "Quests," "Leaderboards," "Player Variables," and "Variable Groups." The "Leaderboards" option is highlighted.
    - **Main Content Area**: Displays the title "Leaderboards" at the top, followed by "World Leaderboards (2/2)" indicating that two out of two worlds have leaderboards defined. Below this, there are two leaderboard entries with icons resembling trophies and labels "Daily" and "Never."
    - **Dropdown Menu**: Opened below the main content area, showing reset frequency options: "Never," "Daily," "Weekly," and "Monthly." The "Daily" option is currently selected.
    - **Input Fields**: Text fields for "Name" and "Sort Order" are present but empty.
    - **Buttons**: A "Cancel" button is visible at the bottom of the main content area.
    - **Header**: The top right corner has a "Create Leaderboard" button.
    - **Sorting Dropdown**: An "A-Z" dropdown for sorting leaderboards is located near the top right.
    
    ### Visual Flow / Relationships
    - The most prominent visual element is the dropdown menu showing reset frequency options.
    - The dropdown menu is spatially related to the main content area, which contains the leaderboard settings.
    - The layout follows a standard form-based interface design, with inputs and options arranged in a grid-like structure.
    
    </details>
    
    <p></p>
    
    
  - Save your changes by selecting **Save**.
- Optional: Link a player’s persistent variable to the leaderboard reset.

  - Set **Reset persistent variable (optional)** to Yes.
    <details>
    <summary>Image Content</summary>
    
    <p></p>
    
    [All image details and metadata](../../image_data/a77646d1ae643aef27554fccf6b7a527a102df61c5543d5acbbd83a7324ff8e2.md)
    
    ### Overview
    The image displays a user interface for managing leaderboards within a game development tool. The main focus is on the "Edit Leaderboard" modal window, which allows users to configure various settings for a leaderboard. The interface includes a sidebar menu on the left, a world leaderboard section in the middle, and a floating action button at the top right for creating new leaderboards.
    
    ### Key Elements
    - **Sidebar Menu**: Located on the left side of the screen. Contains options such as "Systems," "Quests," "Leaderboards," "Player Variables," and "Variable Groups." The "Leaderboards" option is highlighted, indicating it is currently selected.
    - **World Leaderboard Section**: Positioned centrally, showing a world leaderboard titled "World Leaderboard" with a subtitle "Define world-specific leaderboards." Two leaderboard entries are visible, each with a trophy icon and a daily reset frequency indicator.
    - **Edit Leaderboard Modal**: A floating window in the center-right area of the screen. It contains fields for editing a leaderboard, including "Name," "Sort Order," "Reset frequency," and an option to "Reset persistent variable (optional)." There are also buttons for "Cancel" and "Save."
    - **Create Leaderboard Button**: Located at the top-right corner of the screen, above the "Edit Leaderboard" modal. It is a blue button labeled "Create Leaderboard."
    - **Sorting Dropdown**: Positioned next to the "Edit Leaderboard" title, offering sorting options via a dropdown menu labeled "A-Z."
    
    ### Visual Flow / Relationships
    - **Most Prominent Element**: The "Edit Leaderboard" modal window.
    - **Arrows/Connectors**: None visible.
    - **Spatial Relationships**: The sidebar menu is static and unchanging, while the central leaderboard section and the floating edit modal provide dynamic interaction points. The "Create Leaderboard" button is separate but related to the main functionality.
    
    </details>
    
    <p></p>
    
    
  - Select a persistent variable from one of the variable groups attached to this world.
    > **Note** : You can link only persistent variables with a number data type.
    > <details>
    > <summary>Image Content</summary>
    > 
    > <p></p>
    > 
    > [All image details and metadata](../../image_data/f25aaeb23df7f540039250c747fa9c5764c20ba21773abcc213d1e0bf7a80751.md)
    > 
    > ### Overview
    > The image depicts a user interface element within a virtual environment, likely a game or simulation. It shows a modal window titled "Variable Groups," which allows the user to select a persistent variable from a list. The background features a stylized landscape with trees, hills, and a clear sky, suggesting a virtual world setting.
    > 
    > ### Key Elements
    > - **Modal Window Title**: "Variable Groups"
    > - **Modal Window Content**: 
    >   - **Search Bar**: Located at the top of the modal window.
    >   - **Persistent Variable List**: Contains two entries:
    >     - **hh3**: "0 Persistent Variables"
    >     - **hh1**: "1 Persistent Variable"
    >       - This entry is highlighted with a blue border, indicating selection.
    > - **Buttons**: Two buttons labeled "Cancel" and "Attach" are located at the bottom of the modal window.
    > - **Background**: A stylized landscape with green hills, trees, and a blue sky.
    > 
    > ### Visual Flow / Relationships
    > - **Most Prominent Element**: The modal window itself, as it is the focal point of the image.
    > - **Arrows/Connectors**: None.
    > - **Spatial Relationships**: The modal window is centered over the landscape background, with the sidebar menu partially visible on the left side.
    > 
    > </details>
    > 
    > <p></p>
    > 
    > 
  - Save your changes by selecting **Save**.

## How leaderboard frequency affects world visitors

* All leaderboard entries are cleared on reset.
* Any user entries to the linked player persistent variable are set to zero.
* The Leaderboard gizmo shows a reset countdown for any leaderboard that periodically resets.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/26379f7adc449b2a155e607232244b5cb34cb38e442bbe8b6da35bf8fa709c63.md)

### Overview
This image depicts a leaderboard interface with a clean design, featuring a circular badge at the top and several interactive buttons below the title.

### Key Elements
- **Circular Badge**: Located at the top-center, it contains a trophy icon with a star inside, enclosed within a white circle. The badge has a gold border.
- **Title**: Positioned centrally below the badge, the word "Leaderboard" is displayed in bold black font.
- **Reset Notice**: Below the title, a small text states "Resets in 2 days," accompanied by a clock icon.
- **Navigation Buttons**: At the bottom, there are four blue oval-shaped buttons labeled "Global," "My Rank," "Session," and "Mutuals."

### Visual Flow / Relationships
The most prominent visual element is the title "Leaderboard." The reset notice is secondary but still noticeable due to its placement below the title. The navigation buttons are arranged horizontally beneath the title, suggesting a linear reading order from left to right.

</details>

<p></p>



* If there are active users in a world when a leaderboard is scheduled to reset, then all leaderboard(s) scheduled to reset at that time automatically reset.
* If there are no users in the world at the time of the reset, then the reset happens silently, and changes are reflected the next time a player enters the world.

## Known Issue

The effect of a leaderboard reset takes time to propagate to the gizmo due to propagation delay. In most cases, this delay goes unnoticed. But in a scenario where there are active players updating their leaderboard scores at reset time, there might be a few second delay before all entries are cleared.