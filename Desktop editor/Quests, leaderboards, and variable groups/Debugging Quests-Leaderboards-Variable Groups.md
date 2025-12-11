Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/debugging-quests-leaderboards-variable-groups

# Debugging Quests/Leaderboards/Variable Groups

You can use the Desktop Editor to view, create, edit, delete, debug, sort, and search quests, leaderboards, and variable groups, just like you can in VR.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_082901_20251211_082901.md)

### Overview
This image depicts a user interface from a game development environment, likely a scene editor or level builder. The interface includes a hierarchy view on the left, a preview window in the center, and various toolbars at the top and bottom. The preview window shows a 3D environment with a focus on a corridor and a staircase.

### Key Elements
- **Hierarchy View**: Located on the left side, it displays a tree-like structure of objects and assets within the project. Elements include folders labeled "LOBBY," "[ARENA-CORE]," "BROADSIDE," and others. Some elements have lock icons next to them, indicating locked assets.
- **Search Bar**: Below the hierarchy view, there is a search bar labeled "Search hierarchy."
- **Preview Window**: Occupies the central area of the screen, showing a 3D environment with a corridor and a staircase. The environment has a muted color palette with beige, brown, and gray tones.
- **Toolbars**: At the top, there are several toolbars with icons and dropdown menus. These include navigation options ("Navigation," "Quests," "Variable Groups," "Leaderboards"), system-related options ("Build," "Systems," "Preview," "Scripts"), and a Gen AI button. On the right side, there are additional toolbars with camera controls, zoom settings, and other editing tools.
- **Bottom Toolbars**: At the very bottom, there are tabs labeled "Asset Library," "Console," "Tests," "NPC Debugger," and "Performance." There is also a search bar for the Asset Library and a dropdown menu for sorting assets.

### Visual Flow / Relationships
The hierarchy view is the most prominent element on the left, guiding the viewer's attention to the assets and objects within the project. The preview window in the center provides a visual representation of the 3D environment being worked on. The toolbars at the top and bottom offer various functionalities and settings that can be adjusted during the editing process. The layout suggests a workflow where users navigate through the hierarchy, select assets, and then view and edit them in the preview window.

</details>

<p></p>



## Getting Started

The first step for using all procedures in this article is to open the **systems panel**:

- Click the **Systems** dropdown in the top bar.
- Select the feature you want to modify.

## How to debug quests

- Click the “Debug Quests” icon.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_083004_20251211_083004.md)

### Overview
This image depicts a 3D modeling software interface, specifically showing a scene within a game development environment. The central area displays a 3D model of a trailer and a geodesic dome structure against a blue sky backdrop. The left side features a hierarchical structure labeled "Hierarchy," listing various entities such as "SpawnPoint," "Group," "[EntityGroup]," and others. The right side contains a "Properties" panel that currently prompts the user to select an object to view its properties. The top section includes a "Quests" panel with a search bar and a list of quests, one of which is highlighted as "Debug Quests."

### Key Elements
- **Scene Area**: Center of the image shows a 3D model of a trailer and a geodesic dome. The trailer has a white body with a brown roof and a small wooden crate on top. The dome is a white, geometric structure resembling a geodesic dome.
- **Hierarchy Panel**: Left side, dark gray background with white text. Lists entities like "SpawnPoint," "Group," "[EntityGroup]," etc., with some entities marked as "[EntityGroup]" in brackets.
- **Quests Panel**: Top middle, also dark gray with white text. Contains a search bar, a list of quests under "World Quests," and a highlighted quest named "Debug Quests."
- **Properties Panel**: Right side, dark gray with white text. Displays a prompt to "Select an object to view its properties."
- **Background**: A gradient blue sky, suggesting an outdoor environment.

### Visual Flow / Relationships
The visual hierarchy is clear with the scene in the center, the hierarchy on the left, and the quests and properties panels at the top and right respectively. There are no arrows or lines connecting elements, but the layout suggests a typical workflow where users interact with the hierarchy first, then view the scene, and finally adjust properties.

</details>

<p></p>


- Make any modifications required.
- You can also reset all values back to the default value by clicking “Reset all quests”.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_083118_20251211_083118.md)

### Overview
This image depicts a user interface from a game development environment, specifically showing a quest debugging feature. The central focus is a modal dialog titled "Debug Quest," which contains information about current quest states and options to reset quests. The surrounding interface includes panels for hierarchy, quests, and properties, as well as a 3D view of a scene with a vehicle and some geometric shapes.

### Key Elements
- **Left Panel (Hierarchy)**: Located on the left side, it lists various entities and groups within the project. Elements include "SpawnPoint," "Group," "[EntityGroup]," "Sphere," among others.
- **Quests Panel**: Positioned above the hierarchy panel, it displays quests under "World Quests." One quest named "saddas" is highlighted, indicating its selection.
- **Central Modal Dialog ("Debug Quest")**: A dark-colored modal window in the center of the screen. It contains the following elements:
  - **Title**: "Debug Quest"
  - **Message**: "These are your current quest states. Reset your quests to help you test scripts."
  - **Quest Information**: Displays "saddas" along with a ScriptID: "gdsfdfaf."
  - **Toggle Switch**: A toggle switch next to the quest name, currently in the off position.
  - **Buttons**: Two buttons labeled "Cancel" and "Save," with "Save" highlighted in blue.
  - **Reset All Quests Link**: A red link at the bottom that says "Reset all quests."

- **Scene View**: Below the modal dialog, the 3D scene is visible. It features a vehicle with a trailer, placed on a green surface with a white grid pattern, suggesting a development environment layout.
- **Right Panel (Properties)**: On the far right, it prompts users to "Select an object to view its properties."

### Visual Flow / Relationships
The most prominent visual element is the "Debug Quest" modal dialog, which is centrally located and draws immediate attention due to its size and contrasting color against the darker background. The hierarchy and quests panels provide contextual information, while the scene view offers a visual representation of the game world. The buttons within the modal dialog suggest interactive functionality, with the "Save" button being the primary action to confirm changes.

</details>

<p></p>


- Click ‘Save’.