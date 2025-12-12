Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/replacing-primitive-worlds-with-custom-model-worlds

# Replacing Primitive Worlds with Custom Model Worlds

This article explains how to replace existing primitive worlds (the legacy way of building in Meta Horizon Worlds) with worlds built from imported custom models while maintaining the existing world likes, player data, and links to your world.

As a reminder, mixing geometry from primitive and custom model worlds will block publishing. While walking through these steps, it is highly recommended that you use “Replace all” instead of “Merge into” to avoid having primitive models remain in your world.

Before getting started, we recommended that you make a world backup and/or check for a recent world backup. If something isn’t quite right after import, this ensures you have a recent copy of your world to restore from.

## How to Replace your Primitive World with a Custom Model World

- Create a new Custom Model world. If you haven’t done this before [see this Getting Started guide](Getting%20started%20with%203D%20model%20import.md) for Quick Start instructions.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../image_data/8d9849ba83192f744dddd6bf4a0bd5cbf66c0ade1dfb26150f278afc7a150e4a.md)
  
  ### Overview
  The image displays a user interface element within a virtual environment, likely a creation tool for a game or simulation platform. It presents options for creating content, specifically focusing on asset selection methods. The interface includes a pop-up window with two selectable options, each described with text and icons.
  
  ### Key Elements
  - **Pop-up Window**: A semi-transparent white rectangle with rounded corners, located centrally over the background.
    - **Title**: "Choose how you'll create"
      - **Visual description**: Text in a bold, sans-serif font.
      - **Location**: Top of the pop-up.
      - **Contents**: "Choose how you'll create"
      - **Visual styling**: Black text on a white background.
    - **Option 1**: "Primitive Assets"
      - **Visual description**: A light gray rectangular box with rounded corners.
      - **Location**: Left side of the pop-up.
      - **Contents**: "Primitive Assets\nUse shapes, templates and a library of assets in Horizon Worlds. If you've created in Horizon before, you've used this method."
      - **Visual styling**: Black text on a light gray background.
    - **Option 2**: "Custom Model Import"
      - **Visual description**: A light gray rectangular box with rounded corners.
      - **Location**: Right side of the pop-up.
      - **Contents**: "Custom Model Import\nImport all your worlds' assets from your favorite 3D creation tool. You won't be able to use assets previously created in Horizon Worlds."
      - **Visual styling**: Black text on a light gray background.
    - **Background**: A blurred view of a virtual environment with a gradient sky, clouds, and a cityscape in the distance.
      - **Visual description**: A soft pink and purple gradient with white clouds and silhouettes of buildings.
      - **Location**: Behind the pop-up.
      - **Contents**: Blurred landscape elements.
      - **Visual styling**: No specific colors mentioned, just a gradient effect.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The pop-up window with the two options.
  - **Arrows/lines/connectors**: None.
  - **Spatial relationships**: The pop-up is centered, with the two options side-by-side. The background is blurred but still visible through the pop-up.
  
  </details>
  
  <p></p>
  
  
- Navigate to your primitive world (the world to be replaced) via world builder.
- Enter preview mode.
- Open the menu.
- Go to the world details page of your new Custom Model world.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../image_data/bcc41d53ae9594ea27f5f2538cd25d1225aed12a07bb4025807c64244f858776.md)
  
  ### Overview
  The image depicts a user interface within a virtual environment, likely a creation or world management screen. The interface includes a list of worlds, a sidebar with user profiles, and interactive elements. The scene is set in a virtual space with a wooden structure and plants in the background.
  
  ### Key Elements
  - **World List**: Located in the left panel, showing various worlds with titles and edit timestamps. Examples include "Arcade Octopus (Cloned)", "April Edit 2.0 Playtest Internal :D", and "Summer Camp". Each world has a thumbnail image and a timestamp indicating when it was last edited.
  - **Sidebar**: Positioned on the right side, displaying user profiles. Profiles include names, usernames, and status indicators ("Active" or "Offline"). The profile of "Kaitlin" is highlighted as active.
  - **Interactive Elements**: A red-highlighted area in the bottom right corner contains two icons, likely for creating or editing content. These icons are small and circular, one resembling a paintbrush and the other a pencil.
  - **User Interface Elements**: At the bottom of the left panel, there are icons for location, favorites, user profile, notifications, and settings. These icons are simple and circular.
  - **Background**: The background features a virtual environment with a wooden structure, string lights, and plants, suggesting a festive or outdoor setting.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The world list in the left panel.
  - **Arrows/Connectors**: None visible.
  - **Spatial Relationships**: The world list is on the left, the sidebar with user profiles is on the right, and the interactive elements are at the bottom right. The layout suggests a horizontal navigation flow.
  
  </details>
  
  <p></p>
  
  
- Open the 3-dot menu in the upper right corner.
- Select “Import world”.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../image_data/68a20952f777e30f27078f5fce1980514b466217eda9b40c93434f4bed17c89d.md)
  
  ### Overview
  The image depicts a user interface within a virtual environment, likely a 3D creation or collaboration platform. The foreground shows a floating menu with options related to world management, while the background displays a partially obscured interface with a world titled "new trimesh world." The scene includes a virtual environment with a wooden structure, string lights, and some decorative elements.
  
  ### Key Elements
  - **Floating Menu**: Located in the center-right area, highlighted with a red rectangle. Contains three options: "Duplicate world," "Import world," and "Delete world."
  - **Background Interface**: Positioned behind the floating menu, showing a world titled "new trimesh world" with options like "Manage people," "Posts & feedback," "Insights," and "Published world page."
  - **Virtual Environment**: The background features a green floor, a wooden structure resembling a gazebo, string lights, and decorative elements such as plants and spheres.
  - **User Interface Elements**: At the bottom of the image, there are icons for location, favorites, people, notifications, and settings.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The floating menu with world management options.
  - **Spatial Relationships**: The floating menu is positioned above the background interface, indicating it is a modal or dropdown menu that overlays the main content. The virtual environment serves as the backdrop, providing context for the interface.
  
  </details>
  
  <p></p>
  
  
- Select “Replace all”.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../image_data/bc9d5091ee6bfb63169892f9820e5511db73a749357d88b19f6c7912593ff124.md)
  
  ### Overview
  This image depicts a user interface element within a virtual environment, specifically a pop-up window titled "Import World." The window presents options for importing a world into another one, with a focus on the "Replace all" option highlighted.
  
  ### Key Elements
  - **Visual description**: A modal dialog box with rounded corners.
  - **Location**: Centered over the main interface.
  - **Contents**: 
      - Title: "Import World"
      - Subtitle: "Choose the type of world import you want to do."
      - Options:
          - "Merge into": Describes merging worlds without replacing entities.
          - "Replace all": Describes replacing everything in the current world with entities from the imported world.
      - Note: "Everything in this world will be replaced with all entities from the one you're importing."
  - **Visual styling**: White background with black text. The "Replace all" option is highlighted with a red bounding box.
  
  ### Visual Flow / Relationships
  - Most prominent visually: The "Replace all" option.
  - Spatial relationships: The "Replace all" option is clearly marked and emphasized through highlighting.
  
  </details>
  
  <p></p>
  
  
- Choose the data you would like to import.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../image_data/f692996acf17831571537bfa9141a7028740f3e84ae8455ed8f61c1073673b95.md)
  
  ### Overview
  This image depicts a user interface element within a virtual environment, specifically a modal dialog box titled "Import Data." The dialog box is centered over a blurred background that appears to be part of a virtual world, featuring avatars, social interactions, and a party setup. The dialog box contains options for importing data into the user's world, with checkboxes for selecting specific types of variables.
  
  ### Key Elements
  - **Dialog Box**: A white rectangular box with rounded corners, positioned centrally over the blurred background.
    - **Title**: "Import Data" (centered at the top).
    - **Content**: Contains three checkboxes with labels:
      - "Quests (includes persistent variables)"
      - "Persistent Variables"
      - "Leaderboards"
    - **Notes**: Below each checkbox, there are notes explaining the implications of selecting those options.
    - **Buttons**: Two buttons at the bottom of the dialog box:
      - "Cancel" (left, white background with black text).
      - "Start Import" (right, pink background with white text).
  
  - **Background**: Blurred, showing a virtual world with avatars, a party setup, and social interaction elements. The background includes a character named "doctorbron," a party creation interface, and a chat window.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The dialog box is the focal point, drawing attention due to its central placement and distinct white color against the darker background.
  - **Arrows/Connectors**: None.
  - **Spatial Relationships**: The dialog box overlays the background, which is out of focus, indicating that the dialog box is the primary interactive element.
  
  </details>
  
  <p></p>
  
  
- Select “Start Import”.

Your world’s primitive geometry will be replaced with the new custom model geometry. You may now republish your world when ready!