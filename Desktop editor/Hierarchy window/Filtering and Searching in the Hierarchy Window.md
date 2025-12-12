Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/filtering-and-searching-in-the-hierarchy-window

# Filtering and Searching in the Hierarchy Window

You can filter for:

- Assets and gizmos in your virtual world, including:
  - Properties: Tri-Mesh, SubD (helpful when needing to find and remove SubD assets)
  - Gizmo types
- Objects attached to specific scripts

## Using the filter

The following steps show how to use the filter:

- Click on the filter button next to the Hierarchy Search Bar to open the filter:
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/a9b59d73d2e5e421df35bd195b8a18b3ed16feaa39f3c39bb506c84f1aa38309.md)
  
  ### Overview
  The image displays a user interface element that appears to be part of a software application, specifically a hierarchy viewer with filtering options. The left side shows a list of items within a hierarchy, while the right side presents filter options.
  
  ### Key Elements
  - **Left Panel (Hierarchy List)**:
    - **Visual description**: A vertical list of items.
    - **Location**: Left side of the image.
    - **Contents**: Items include "Spawn Point," "Text," "[Door]," "[Environment]," "Trimesh," "Air Boost End 01," "Dice," "Cube 1," "EntityGroup," "Half Torus D," "Cube Soft," "Trigger," "WorldLeaderboard," "GoalsPanel," and "ProjectileLauncher."
    - **Visual styling**: Dark background with white text, some items have icons next to them.
  
  - **Right Panel (Filter Options)**:
    - **Visual description**: A dropdown menu with filter categories.
    - **Location**: Right side of the image.
    - **Contents**: Options include "Properties," "Attached scripts," and "Gizmo types."
    - **Visual styling**: Dark background with white text, icons next to each option.
  
  - **Search Bar**:
    - **Visual description**: A search bar at the top of the left panel.
    - **Location**: Top-left corner of the left panel.
    - **Contents**: Placeholder text "Search hierarchy."
    - **Visual styling**: Dark background with white placeholder text.
  
  - **Filter Icon**:
    - **Visual description**: A filter icon located above the search bar.
    - **Location**: Top-center of the left panel.
    - **Contents**: A magnifying glass icon.
    - **Visual styling**: Red background with white icon.
  
  - **Red Arrow**:
    - **Visual description**: An arrow pointing towards the filter icon.
    - **Location**: Above the filter icon.
    - **Contents**: A red arrow pointing downward.
    - **Visual styling**: Red color.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The filter icon and the search bar.
  - **Arrows and lines**: The red arrow points to the filter icon.
  - **Spatial relationships**: The filter icon is positioned above the search bar, and the dropdown menu is displayed when the filter icon is interacted with.
  
  </details>
  
  <p></p>
  
  
- The filter provides the following filter categories:
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/ae689f05f3747b61536ab236e49d0240cf04b1eae2de7a8b85c8e2ecd4df2281.md)
  
  ### Overview
  The image displays a user interface with two main sections: a hierarchical structure on the left and a filtering menu on the right. The interface appears to be part of a software tool, possibly related to game development or asset management.
  
  ### Key Elements
  - **Left Panel (Hierarchy)**:
    - **Visual description**: A tree-like structure with expandable nodes.
    - **Location**: Left side of the image.
    - **Contents**: Nodes labeled with items such as "[Spawn Point]", "[Door]", "[Environment]", "Trimesh", "Air Boost End 01", "Dice", "Cube 1", "EntityGroup", "Half Torus D", "Cube Soft", "Trigger", "WorldLeaderboard", "GoalsPanel", and "ProjectileLauncher".
    - **Visual styling**: Dark background with white text and light gray icons.
  
  - **Right Panel (Filtering Menu)**:
    - **Visual description**: A dropdown menu with two sections: "Properties" and "Gizmo types".
    - **Location**: Right side of the image.
    - **Contents**:
      - **Properties**:
        - Tri-Mesh
        - SubD
      - **Attached scripts**:
        - Script1
        - Script2
        - Script3
        - Script4
      - **Gizmo types**:
        - Achievements
        - Audio Graph
        - Avatar Playback
        - Door
        - Dynamic Light
    - **Visual styling**: Dark background with white text and light gray icons.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The hierarchical structure on the left.
  - **Arrows/lines/connectors**: None explicitly shown, but the layout suggests a hierarchical relationship between elements.
  - **Spatial relationships**: The left panel is adjacent to the right panel, with the right panel serving as a filter for the left panel.
  
  </details>
  
  <p></p>
  
  

  * **Properties:** The Properties section allows filtering by the properties of assets, and supports filtering to show only “Tri-Mesh” assets and only “SubD” assets. All Tri-Mesh assets are labeled “Tri-Mesh” so you can verify them.
  * **Attached Scripts:** The Attached Scripts section allows filtering to show only the objects that have the specific selected script attached.
  * **Gizmo types:** Similar to above, the Gizmo Types section allows filtering to gizmos that match the gizmo type selected.
  * **NOTE that filtering uses OR Logic** : Filtering uses “OR” logic across all categories. For example, if you filter by “Script 1” and “Tri-Mesh,” it will display all objects that are “Tri-Mesh” OR have “Script 1” attached OR have *both* “Tri-Mesh” and “Script 1” attached.
    <details>
    <summary>Image Content</summary>
    
    <p></p>
    
    [All image details and metadata](../../image_data/db8f525bbde14b23d08ab26519de421af035b32c8b7d09bc312e334f101f8ed9.md)
    
    ### Overview
    The image displays a user interface with two main sections: a hierarchical list on the left and a filtering panel on the right. The left side shows a search bar at the top followed by a list of items under the heading "Hierarchy." The right side contains a filtering interface with options to filter by properties, attached scripts, and gizmo types.
    
    ### Key Elements
    - **Left Panel (Hierarchy):**
      - **Search Bar:** Located at the top-left, with placeholder text "Search hierarchy."
      - **Results List:** Below the search bar, a list of items labeled as "Spawn Point," "Cube 1," "Cube 2," etc., up to "Cube."
      - **Filter Count:** At the top, indicates "14 results" and "2 filters applied."
    
    - **Right Panel (Filtering):**
      - **Filter Header:** "Filter by" at the top-left.
      - **Properties Section:** Contains checkboxes for "Tri-Mesh" and "SubD."
      - **Attached Scripts Section:** Lists "Script1," "Script2," "Script3," and "Script4."
      - **Gizmo Types Section:** Includes checkboxes for "Sound Effect," "Sound Recorder," "Spawn Point," and "TrailEv."
    
    ### Visual Flow / Relationships
    - **Most Prominent Element:** The search bar in the left panel.
    - **Arrows/Connectors:** None visible.
    - **Reading Order:** The left panel is read vertically first, then horizontally through the list. The right panel is read vertically through the sections.
    
    </details>
    
    <p></p>
    
    

## Using filters to search for object attached to scripts

- Select the Filter button <details>
                           <summary>Image Content</summary>
                           
                           <p></p>
                           
                           [All image details and metadata](../../image_data/30af380877424bb072c2896c4bac9e106e7a5707891f0ec6101b8d82d8861bc7.md)
                           
                           ### Overview
                           This image depicts a small icon resembling a cleaning brush or a vacuum cleaner nozzle, located within a dark rectangular area that appears to be part of a user interface element.
                           
                           ### Key Elements
                           - **Visual description**: The icon resembles a cleaning brush or a vacuum cleaner nozzle, with a handle and a rounded head.
                           - **Location**: Positioned in the upper right corner of the image.
                           - **Contents**: The icon is a simple graphic with no additional text or elements.
                           - **Visual styling**: The icon is white against a dark gray background. There are no borders around the icon itself.
                           
                           ### Visual Flow / Relationships
                           - The icon is the most prominent visual element in the image.
                           - There are no arrows, lines, or connectors present.
                           - The icon is isolated and does not interact with any other elements in the image.
                           
                           </details>
                           
                           <p></p>
                           
                            next to the Hierarchy Search Bar. A list  of scripts available within the world appears.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/b265e51cf40e7a4fa2dfd4afd0b89d75536708d4edac4aca53ae3e77b96ac6fb.md)
  
  ### Overview
  This image depicts a user interface showing a hierarchical structure on the left side and a filter panel on the right side. The left panel displays a tree-like structure with various nodes labeled as "Cube," "Text," "Ramp," among others. The right panel shows a list of items under the heading "Filter," which includes elements like "Scripts" and specific scripts such as "CBToHorizon," "InstructionsRenderer," and others.
  
  ### Key Elements
  - **Left Panel (Hierarchy)**:
    - **Visual description**: A dark-themed sidebar with a tree structure.
    - **Location**: Left side of the image.
    - **Contents**: Nodes labeled "Cube," "Text," "Ramp," etc.
    - **Visual styling**: Dark background with white text and blue highlights for selected nodes ("Half Tube").
    
  - **Right Panel (Filter)**:
    - **Visual description**: A light teal header followed by a black content area listing items.
    - **Location**: Right side of the image.
    - **Contents**: Items listed under "Scripts," such as "CBToHorizon," "InstructionsRenderer," etc.
    - **Visual styling**: Black background with white text, gray buttons for script names.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The selected node "Half Tube" in the left panel.
  - **Arrows/lines/connectors**: None visible.
  - **Spatial relationships**: The left panel is a sidebar, and the right panel is a filter panel. The right panel is positioned to the right of the left panel, and the items in the filter are listed vertically.
  
  </details>
  
  <p></p>
  
  
- Selecting one of the script names will update the Hierarchy to show objects attached to the selected script.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/fd9e6ff1b3d2f517e6f5d82259ea19804086aabce8c563acdc87381d36bb7ca4.md)
  
  ### Overview
  This image depicts a user interface element showing a filtered list of scripts within a software application. The interface includes a search bar at the top left, a sidebar labeled "Hierarchy," and a main content area displaying a list of scripts under a "Filter" heading.
  
  ### Key Elements
  - **Search Bar**: Located at the top left, with a magnifying glass icon indicating a search function.
  - **Sidebar ("Hierarchy")**: On the left side, it displays "Score Manager" as the only result with a filter applied.
  - **Filter Section**: On the right, titled "Filter," showing a list of scripts with checkboxes next to them. Scripts include "CBToHorizon," "InstructionsRenderer:InstructionsRenderer," "MyTestScript:MyTestScript," "TS_BuiltinEvents:BuiltinCBEvents," "TS_LightArrayManager:Light Array," "TS_ScoreManager:ScoreManager," "TS_ScoreReceiver:ScoreReceiver," and "TS_WorldUpdate:World Update Controller." The script "TS_ScoreManager:ScoreManager" is highlighted with a blue background.
  - **Clear All Button**: Located at the top right of the filter section, with the text "Clear all."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the list of scripts under the "Filter" heading. The scripts are arranged vertically, with checkboxes next to each one. The highlighted script "TS_ScoreManager:ScoreManager" draws attention due to its blue background. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  
- If multiple scripts are selected within this filter, all objects attached with one of the selected scripts will be shown.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/ec2e803a8a19a74d2c0f0bcb7031d4d89a7cfde30eaee19d7e3d3a426282df0d.md)
  
  ### Overview
  This image depicts a user interface element showing a filtered list of scripts within a hierarchy view. The interface includes a search bar at the top, a sidebar with a tree-like structure labeled "Hierarchy," and a main content area displaying a list of filtered scripts.
  
  ### Key Elements
  - **Search Bar**: Located at the top-left, with a magnifying glass icon indicating a search function.
  - **Sidebar**: On the left side, labeled "Hierarchy," containing a tree structure with nodes labeled "Cube," "Group," and others.
  - **Filtered Scripts List**: In the main content area, a list of scripts is displayed under the heading "Filter." Each script entry has a label followed by a colon and a script name. Some entries are highlighted in blue, suggesting they are currently selected or active.
  - **Clear All Button**: Located at the top-right of the filter section, with the text "Clear all."
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the filtered scripts listed in the main content area. The hierarchy sidebar is secondary but still important as it provides context for the scripts shown. The search bar allows users to refine the list further. The clear all button is easily accessible for resetting the filters.
  
  </details>
  
  <p></p>
  
  

## Searching for scripts

- Within the Desktop Editor, view the Hierarchy on the left-hand side of the application.
- Type in the name of the script you’d like to search for - the editor will automatically filter for relevant Scripts matching the keyword provided.
- When selected in the Hierarchy, press the **F key** to automatically move the camera towards the Script Gizmo in-world.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/68cb295e2548069b174f32c310752ebf667222a7c86378e9d9d6542da1bae9bc.md)

### Overview
This image depicts a user interface from a software application, likely a game development environment or a 3D modeling tool. The interface includes a scene view, a hierarchy panel, a script editor, and a properties panel. The scene view shows a 3D environment with a staircase and a character model in the distance.

### Key Elements
- **Hierarchy Panel**: Located on the left side, it lists various nodes or scripts within the project. Elements include "TS_LightStateInput," "TS_ScoreManager," and others.
- **Script Editor**: Positioned centrally, it displays code related to the selected node ("TS_WorldUpdate").
- **Scene View**: The central area of the interface shows a 3D environment with a staircase, a green wall, and a character model in the distance.
- **Properties Panel**: On the right side, it prompts the user to "Select an object to view its properties."

### Visual Flow / Relationships
The most prominent visual elements are the hierarchy panel and the scene view. The scene view is the focal point, showing the 3D environment. The hierarchy panel is secondary but essential for navigation. The properties panel is less prominent but serves as a call-to-action for interaction.

</details>

<p></p>

