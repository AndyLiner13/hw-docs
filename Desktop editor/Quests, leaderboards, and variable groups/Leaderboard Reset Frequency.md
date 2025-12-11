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

[All image details and metadata](../../../../images/output/img_20251211_085441_20251211_085441.md)

### Overview
This image depicts a user interface screen from a game development tool, specifically showing the Leaderboards section under the Systems menu. The layout includes a sidebar with menu options and a main content area displaying leaderboard information.

### Key Elements
- **Sidebar Menu**: Located on the left side, with a dark background and white text. Contains four menu items: Systems, Quests, Leaderboards, Player Variables, and Variable Groups. The "Leaderboards" option is highlighted with a purple underline.
- **Main Content Area**: Positioned on the right, with a dark background and white text. Displays the title "Leaderboards" at the top. Below that, it shows "World Leaderboards (2/3)" indicating the current progress out of three worlds. There are two leaderboard entries listed: "leaderboard1" marked as "Daily" and "leaderboard2" marked as "Never resets." Each entry has a small trophy icon next to it. To the right of the leaderboards, there is a "Create Leaderboard" button in a purple rectangle, and a dropdown menu labeled "A-Z" for sorting.
- **Footer Bar**: At the bottom, there is a footer bar with several icons representing different functionalities such as world selection, scripting, and settings. The time displayed is "12:49 PM."

### Visual Flow / Relationships
The most prominent visual elements are the sidebar menu and the main content area. The sidebar is static and serves as a navigation tool, while the main content area dynamically displays leaderboard information. The footer bar at the bottom provides quick access to various tools and settings. Arrows or lines connecting elements are not present, but the layout suggests a linear reading order moving from left to right and then down the page.

</details>

<p></p>


  - Either create a new leaderboard by selecting **Create Leaderboard**, or edit an existing leaderboard by selecting **Edit**.
    <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_085543_20251211_085543.md)

### Overview
This image depicts a user interface for managing leaderboards within a game development tool. The main focus is on the "Edit Leaderboard" modal window, which allows users to customize leaderboard settings. The interface includes a sidebar menu on the left and a central content area displaying leaderboard options and settings.

### Key Elements
- **Sidebar Menu**: Located on the left side, it has a dark background with white text and icons. The menu items include "Systems," "Quests," "Leaderboards," "Player Variables," and "Variable Groups." The "Leaderboards" option is highlighted, indicating it is currently selected.
- **Central Content Area**: This area displays the "World Leaderboards" section, showing two leaderboard entries labeled "Daily" and "Never." Each entry has a trophy icon next to it.
- **Modal Window**: Overlaid on the central content area, this window is titled "Edit Leaderboard." It contains fields for "Name," "Sort Order," "Reset frequency," and "Reset persistent variable (optional)." There are also buttons for "Cancel" and "Save."
- **Action Buttons**: Located at the bottom of the modal window, these buttons allow users to cancel changes or save them.
- **Background**: The background of the entire interface is a gradient of light blue to white, giving a clean and modern look.

### Visual Flow / Relationships
The most prominent visual element is the "Edit Leaderboard" modal window, as it is centrally located and occupies a significant portion of the screen. The sidebar menu provides navigation options, while the leaderboard entries in the central area offer specific data points. The action buttons at the bottom of the modal window suggest a clear call-to-action sequence.

</details>

<p></p>


  - Beside **Reset frequency**, select the interval that you want. This can be Daily, Weekly, or Monthly. The value defaults to Never.
    <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_085650_20251211_085650.md)

### Overview
This image depicts a user interface for managing leaderboards within a system, likely part of a game development tool or platform. The interface includes a sidebar menu on the left and a main content area on the right displaying leaderboard settings. A dropdown menu for reset frequency is open, showing options such as "Never," "Daily," "Weekly," and "Monthly."

### Key Elements
- **Sidebar Menu**: Located on the left side, with a dark background and white text. Contains options like "Systems," "Quests," "Leaderboards," "Player Variables," and "Variable Groups." The "Leaderboards" option is highlighted with a purple underline.
- **Main Content Area**: On the right, the title "Leaderboards" is displayed at the top. Below it, there are two leaderboard entries labeled "leaderboard" with icons resembling trophies. The first entry has a "Daily" reset frequency, and the second has a "Never" reset frequency. There are fields for "Name" and "Sort Order," both currently set to "leaderboard" and "Descending," respectively. A dropdown menu for sorting order is partially visible.
- **Dropdown Menu**: Opened in the lower right, showing reset frequency options ("Never," "Daily," "Weekly," "Monthly") with descriptions underneath each option.
- **Create Leaderboard Button**: Located at the top right corner, with a blue background and white text.
- **Edit Leaderboard Button**: Positioned near the top right, with a white background and black text.
- **Cancel Button**: At the bottom of the main content area, with a light gray background and black text.
- **Time Display**: At the very bottom, showing "12:49 PM."
- **Grid Background**: A light gray grid pattern serves as the background for the entire interface.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu for reset frequency, which is open and draws attention due to its lighter background compared to the rest of the interface. The main content area is structured with clear sections for leaderboard management, and the sidebar menu provides navigation options. The time display at the bottom is a static element that does not interact with the interface but provides context about when the screenshot was taken.

</details>

<p></p>


  - Save your changes by selecting **Save**.
- Optional: Link a player’s persistent variable to the leaderboard reset.

  - Set **Reset persistent variable (optional)** to Yes.
    <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_085807_20251211_085807.md)

### Overview
This image depicts a user interface for editing leaderboards within a game development tool. The main focus is on a modal window titled "Edit Leaderboard," which contains various settings for configuring a leaderboard. The interface includes options for naming the leaderboard, sorting order, reset frequency, and resetting a persistent variable.

### Key Elements
- **Left Panel**: Contains a sidebar with navigation options labeled "Systems," "Quests," "Leaderboards," "Player Variables," and "Variable Groups." The "Leaderboards" option is highlighted, indicating it is currently selected.
- **Central Panel**: Displays a list of leaderboards under the heading "World Leaderboards." Two leaderboards are partially visible, each with a trophy icon and a label indicating daily or never reset frequency.
- **Modal Window**: Overlays the central panel, titled "Edit Leaderboard." It includes fields for "Name," "Sort Order," "Reset frequency," and a toggle switch for "Reset persistent variable."
- **Buttons**: Two buttons at the bottom of the modal window, labeled "Cancel" and "Save."
- **Icons**: A trophy icon next to the "leaderboard" field in the modal window.
- **Dropdowns**: A dropdown menu for sorting order and reset frequency.
- **Toggle Switch**: A toggle switch for enabling or disabling the reset of a persistent variable.
- **Text Fields**: Input fields for entering the leaderboard name and selecting a persistent variable.
- **Action Buttons**: A "Create Leaderboard" button in the top right corner of the central panel.

### Visual Flow / Relationships
The most prominent visual element is the "Edit Leaderboard" modal window, which is centrally located and takes up a significant portion of the screen. The action buttons ("Cancel" and "Save") are positioned at the bottom of the modal window, suggesting that users should interact with them after making changes. The dropdown menus for "Sort Order" and "Reset frequency" are adjacent to their respective labels, facilitating easy selection. The toggle switch for the persistent variable is placed to the right of its label, maintaining a clear relationship between the label and the control.

</details>

<p></p>


  - Select a persistent variable from one of the variable groups attached to this world.
    > **Note** : You can link only persistent variables with a number data type.
    > <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_085911_20251211_085911.md)

### Overview
The image depicts a user interface element within a virtual environment, specifically a modal window titled "Variable Groups." The modal is part of a larger interface that includes a sidebar menu labeled "Systems," offering options such as "Quests," "Leaderboards," "Commerce," and "Variable Groups."

### Key Elements
- **Modal Window Title**: "Variable Groups" located at the top of the modal.
- **Search Bar**: Positioned below the title, with placeholder text "Search."
- **Persistent Variable Groups**: Two groups are listed:
  - **hh3**: Displays "0 Persistent Variables."
  - **hh1**: Displays "1 Persistent Variable," highlighted with a blue border indicating selection.
- **Navigation Arrows**: Rightward-pointing arrows next to each group name.
- **Cancel Button**: Located at the bottom left of the modal.
- **Attach Button**: Partially visible at the bottom right of the modal.
- **Background**: A blurred landscape with green hills, trees, and a blue sky.

### Visual Flow / Relationships
- **Most Prominent Element**: The "Variable Groups" modal window.
- **Arrows**: Rightward-pointing arrows suggest navigation or selection actions.
- **Spatial Relationships**: The modal is centered over the sidebar menu, which is partially visible behind it.

</details>

<p></p>


  - Save your changes by selecting **Save**.

## How leaderboard frequency affects world visitors

* All leaderboard entries are cleared on reset.
* Any user entries to the linked player persistent variable are set to zero.
* The Leaderboard gizmo shows a reset countdown for any leaderboard that periodically resets.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_090002_20251211_090002.md)

### Overview
This image depicts a leaderboard interface with a clean design, featuring a navigation bar at the bottom and a reset timer notification above it.

### Key Elements
- **Header**: Located at the top-center, features a circular badge with a trophy icon and a star inside, indicating achievement or ranking.
- **Title**: Positioned below the header, reads "Leaderboard" in bold black font.
- **Reset Timer**: Situated beneath the title, states "Resets in 2 days," accompanied by a small clock icon.
- **Navigation Bar**: At the bottom, contains four tabs labeled "Global," "My Rank," "Session," and "Mutuals." Each tab has a rounded rectangular shape with a gradient blue background.

### Visual Flow / Relationships
The most prominent visual element is the "Leaderboard" title, which draws attention due to its size and bold font. The reset timer provides context about the leaderboard's periodic updates. The navigation bar at the bottom offers options for users to switch between different leaderboard views.

</details>

<p></p>



* If there are active users in a world when a leaderboard is scheduled to reset, then all leaderboard(s) scheduled to reset at that time automatically reset.
* If there are no users in the world at the time of the reset, then the reset happens silently, and changes are reflected the next time a player enters the world.

## Known Issue

The effect of a leaderboard reset takes time to propagate to the gizmo due to propagation delay. In most cases, this delay goes unnoticed. But in a scenario where there are active players updating their leaderboard scores at reset time, there might be a few second delay before all entries are cleared.