Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/replacing-primitive-worlds-with-custom-model-worlds

# Replacing Primitive Worlds with Custom Model Worlds

This article explains how to replace existing primitive worlds (the legacy way of building in Meta Horizon Worlds) with worlds built from imported custom models while maintaining the existing world likes, player data, and links to your world.

As a reminder, mixing geometry from primitive and custom model worlds will block publishing. While walking through these steps, it is highly recommended that you use “Replace all” instead of “Merge into” to avoid having primitive models remain in your world.

Before getting started, we recommended that you make a world backup and/or check for a recent world backup. If something isn’t quite right after import, this ensures you have a recent copy of your world to restore from.

## How to Replace your Primitive World with a Custom Model World

- Create a new Custom Model world. If you haven’t done this before [see this Getting Started guide](../Custom%20models%20(FBX)/Getting%20started%20with%203D%20model%20import.md) for Quick Start instructions.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_011734_20251211_011734.md)

### Overview
The image depicts a user interface element within a virtual environment, likely a creation tool for a game or simulation platform. The focus is on a modal window titled "Choose how you'll create," which offers two options for creating content. The background shows a vibrant, colorful landscape with a cityscape and a gradient sky.

### Key Elements
- **Modal Window Title**: "Choose how you'll create"
- **Left Panel**: Contains the option labeled "Primitive Assets" with a description underneath.
- **Right Panel**: Contains the option labeled "Custom Model Import" with a description underneath.
- **Highlighted Option**: "Custom Model Import" is highlighted with a red bounding box.
- **Background**: A blurred view of a virtual world with grass, buildings, and a gradient sky.

### Visual Flow / Relationships
- The most prominent visual element is the modal window.
- There are no arrows or lines connecting elements, but the highlighted option draws immediate attention due to the red bounding box.

</details>

<p></p>


- Navigate to your primitive world (the world to be replaced) via world builder.
- Enter preview mode.
- Open the menu.
- Go to the world details page of your new Custom Model world.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_011858_20251211_011858.md)

### Overview
The image depicts a user interface within a virtual environment, likely a game or simulation platform. It shows a "Create" menu with various options and a list of world creations. There's also a sidebar with user profiles and a floating action button.

### Key Elements
- **Main Interface (Top Left)**: A white rectangular panel labeled "Create." Contains tabs for "Creations," "Tutorials," and "Invites." Below these tabs, there's a grid of world thumbnails with names and edit timestamps.
    - **Visual description**: Rectangular panels with rounded corners.
    - **Location**: Top-left quadrant of the image.
    - **Contents**: Text labels such as "Arcade Octopus (Cloned)," "April Edit 2.0 Playtest," etc.
    - **Visual styling**: White background, blue tabs, black text.
- **Floating Action Button (Center Right)**: A red-highlighted button with two icons inside—a graph and a three-dot menu.
    - **Visual description**: Rectangular button with rounded corners.
    - **Location**: Center-right of the image.
    - **Contents**: Icons resembling a graph and a menu.
    - **Visual styling**: Black background with white icons, red border.
- **Sidebar (Right)**: A vertical panel listing user profiles with avatars and usernames.
    - **Visual description**: Vertical rectangle with rounded corners.
    - **Location**: Right side of the image.
    - **Contents**: Usernames like "Kaitlin," "Jeremy Hance," etc., along with status indicators ("Active," "Offline").
    - **Visual styling**: Light gray background, purple avatars, white text.
- **Background (Top and Right)**: A virtual environment with wooden structures, plants, and a green landscape.
    - **Visual description**: 3D rendered scene with wooden beams and plants.
    - **Location**: Top and right sides of the image.
    - **Contents**: Wooden structures and plants.
    - **Visual styling**: Green grass, brown wood, yellow plants.
- **Hand (Bottom Right)**: A hand holding a controller, partially visible.
    - **Visual description**: Hand with a black controller.
    - **Location**: Bottom-right corner of the image.
    - **Contents**: Hand and controller.
    - **Visual styling**: Skin tone, black controller.

### Visual Flow / Relationships
- The most prominent visual is the "Create" menu.
- Arrows or lines are not present, but the layout suggests a typical user interface flow where users interact with the menu items and the floating action button.
- Elements are arranged in a grid-like structure for the menu, with the sidebar listing vertically.

</details>

<p></p>


- Open the 3-dot menu in the upper right corner.
- Select “Import world”.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_011959_20251211_011959.md)

### Overview
The image depicts a user interface within a virtual environment, likely a platform for creating and managing worlds. A floating menu is prominently displayed, offering options related to world management. The background shows a virtual setting with a gazebo, plants, and a table with decorative items.

### Key Elements
- **Floating Menu**: Located centrally, with a red bounding box highlighting its area. Contains three options: "Duplicate world," "Import world," and "Delete world." The menu has a light gray background with rounded corners and a subtle shadow effect.
- **Background**: Shows a virtual environment with a gazebo structure, string lights, and yellow plants. The ground is green, resembling grass.
- **User Interface Elements**: Below the floating menu, there are tabs labeled "Manage people," "Posts & feedback," "Insights," and "Published world page." These tabs have a light gray background with darker gray borders.
- **Hand Cursor**: Partially visible at the bottom right corner, indicating interaction with the interface.

### Visual Flow / Relationships
- The most prominent visual element is the floating menu, which draws attention due to its central placement and distinct red bounding box.
- Arrows or lines are not present, but the layout suggests a typical user interface flow where users interact with the floating menu to manage their worlds.

</details>

<p></p>


- Select “Replace all”.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_012109_20251211_012109.md)

### Overview
This image depicts a user interface element within a virtual environment, specifically a pop-up window titled "Import World." The window presents options for importing a world into another one, offering choices such as "Merge into" and "Replace all."

### Key Elements
- **Visual description**: A modal dialog box with rounded corners.
- **Location**: Centered over the main interface.
- **Contents**: 
    - Title: "Import World"
    - Subtitle: "Choose the type of world import you want to do."
    - Option 1: "Merge into" (grayed out, indicating it’s not currently selected)
    - Option 2: "Replace all" (selected, highlighted with a red bounding box)
        > "Everything in this world will be replaced with all entities from the one you're importing."
    - Note: "Your world may close and reopen with the new assets once the import is complete."
- **Visual styling**: The dialog has a light gray background with a white content area. The selected option is highlighted with a red bounding box. The buttons "Cancel" and "Continue" are purple with white text.

### Visual Flow / Relationships
- Most prominent visually: The "Replace all" option, as it is highlighted.
- Arrows or lines: None.
- Spatial relationships: The dialog box is centered, with the "Cancel" and "Continue" buttons at the bottom, aligned horizontally.

</details>

<p></p>


- Choose the data you would like to import.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../images/output/img_20251211_012218_20251211_012218.md)

### Overview
This image depicts a user interface element within a virtual environment, specifically a pop-up window titled "Import Data." The window is centered over a blurred background that appears to be part of a game or simulation setting. The pop-up contains options for importing data into a world, with checkboxes for selecting specific types of variables. There are two buttons at the bottom of the pop-up: "Cancel" and "Start Import."

### Key Elements
- **Pop-up Window**: A white rectangular box with rounded corners, positioned centrally over the background.
  - **Title**: "Import Data"
  - **Content**: Contains three checkboxes labeled "Quests," "Persistent Variables," and "Leaderboards," each with a note underneath explaining the import process.
  - **Buttons**: Two buttons at the bottom, "Cancel" and "Start Import," both with a white background and black text.
- **Background**: Blurred, showing a virtual environment with a character model, floating objects, and a chat interface on the right side.
- **Chat Interface**: Located on the right side of the image, partially obscured by the pop-up. It includes user profiles and chat messages.

### Visual Flow / Relationships
The pop-up is the most prominent visual element, drawing attention due to its central placement and contrasting white color against the darker background. The "Start Import" button is slightly more prominent than the "Cancel" button due to its larger size and red background. The chat interface on the right provides contextual information about the virtual environment but does not interact with the pop-up.

</details>

<p></p>


- Select “Start Import”.

Your world’s primitive geometry will be replaced with the new custom model geometry. You may now republish your world when ready!