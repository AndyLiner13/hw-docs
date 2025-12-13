Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started/create-your-first-world

# Create your first world tutorial, part 1

Welcome to part 1 of the create your first world tutorial. In this tutorial you’ll learn how to create a basic new world, hosting a simple game where you shoot marauding skeletons in a graveyard.

This first part shows you how to create a new world, place an asset in the world, manipulate it using the desktop editor, then preview the world and playtest it on a mobile device.
If you’re looking for the second half of the tutorial, go to the [Create your first world tutorial, part 2](Create%20your%20first%20world%20tutorial,%20part%202.md).

The key things you should learn from this module are the following:

* Setting up your tooling
* Creating a new world
* Selecting assets to use in your world and learning how to manipulate them
* Previewing your world for playtesting
* Playtesting in your world on your mobile device

**Note**: This tutorial assumes that you’ve completed the prerequisites discussed in [Intro Tutorial Overview](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world-intro).

## Step 1: Create a new world

*In this section, you’ll create a new world for your game.*

- Open the Worlds desktop editor.

  <details>
  <summary>The Start button on the app icon</summary>
  
  <p></p>
  
  [The Start button on the app icon](../../image_data/e4b924acbe77e0a547f2f41075c2abdb09e3ec28ce5e5c3a01e8dadd56ad63ce.md)
  
  ### Overview
  The image depicts a user interface for a platform called "Creation Home," which appears to be related to creating worlds or games within a virtual environment. The layout includes a sidebar menu, a promotional banner, and sections for "My worlds" and "Tutorials."
  
  ### Key Elements
  - **Sidebar Menu**: Located on the left side, with options such as "Home," "My worlds," "Tutorials," "Templates," and "Documentation." The "Home" option is highlighted in blue.
  - **Promotional Banner**: Positioned at the top-center, featuring a purple badge with a white checkmark. The text promotes a program offering $50 million for creators in Meta Horizon, encouraging users to join the program.
  - **My Worlds Section**: Below the banner, showing thumbnails of user-created worlds. Each thumbnail has a title and a timestamp indicating when it was last edited.
      - **New world**: Edited 4 months ago.
      - **Wonderful Welcome World**: Edited 4 months ago.
      - **My Simple Shooting Mechanics**: Edited 4 months ago.
      - **Simple Shooting Mechanics**: Edited 6 months ago.
  - **Tutorials Section**: Below the "My worlds" section, displaying tutorials with titles and brief descriptions.
      - **Build Your First Game**: A thumbnail with a red button labeled "Build Your First Game."
      - **Custom UI Examples**: A thumbnail with a green button labeled "Custom UI Examples."
      - **Simple Shooting Mechanics**: A thumbnail with a black button labeled "Simple Shooting Mechanics."
      - **Spawning and Pooling Tutorial World**: A thumbnail with a red heart icon labeled "Spawning and Pooling Tutorial World."
  
  ### Visual Flow / Relationships
  - The most prominent visual elements are the promotional banner and the "My worlds" thumbnails.
  - Arrows or lines are not present, but the layout suggests a linear reading order moving from the top banner down through the sections.
  - Elements are arranged in a grid-like structure, with each thumbnail in its own column under the respective section headers.
  
  </details>
  
  <p></p>
  
  
- On the **Creation Home** page, click **New World**.

  <details>
  <summary>The New World button</summary>
  
  <p></p>
  
  [The New World button](../../image_data/9e7fc7f5f59cfcd8d3e315eeb61e9355add943755f8730c58a429ee9f13d4372.md)
  
  ### Overview
  The image displays a user interface snippet with a dark theme. It includes a prominent call-to-action button labeled "New world," a smaller button labeled "Join now," and a dismissible notification at the bottom.
  
  ### Key Elements
  - **New world button**: Located at the top-center, rectangular shape with rounded corners. The button has a blue background with white text that reads "New world." A red rectangular highlight surrounds the button, indicating selection or focus.
  - **Join now button**: Positioned below the "New world" button, also rectangular with rounded corners. It has a lighter blue background compared to the "New world" button and white text that reads "Join now."
  - **Dismiss button**: Situated at the very bottom, smaller than the others, with a light gray background and white text that reads "Dismiss."
  
  ### Visual Flow / Relationships
  The visual hierarchy is clear, with the "New world" button being the most prominent due to its size and the red highlight. The "Join now" button follows, and the "Dismiss" button is the least prominent. There are no arrows or lines connecting the elements, suggesting a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  
- When the desktop editor opens, click **Rename World** from the main menu.

  <details>
  <summary>The Rename World option</summary>
  
  <p></p>
  
  [The Rename World option](../../image_data/f17f0edc6f11feb7c8a098e55c5bda42e3ab3a250f5fe73e66c5f5f925714c86.md)
  
  ### Overview
  This image depicts a dropdown menu with a list of options. The menu is part of a user interface, likely within a software application. The menu items are arranged vertically, and one specific option is highlighted with a red bounding box.
  
  ### Key Elements
  - **Visual description**: The dropdown menu has a dark background with white text.
  - **Location**: The menu is located on the left side of the screen, extending downward from the top bar.
  - **Contents**: 
      - "Return to Creation Home"
      - "Shutdown server"
      - "View Application Logs"
      - "Launch Typescript Editor"
      - "Publish world"
      - "Rename World" (highlighted with a red bounding box)
      - "Save Backup"
      - "Backups"
      - "Export Geometry"
      - "World capacity"
  - **Visual styling**: The text is in a sans-serif font, and the menu items are separated by thin horizontal lines.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Rename World" option is highlighted with a red bounding box, drawing attention to it.
  - **Arrows, lines, connectors, or implied reading order**: There are no arrows or connectors; the items are read from top to bottom.
  - **Spatial relationships**: Items are stacked vertically, with each item occupying its own line.
  
  </details>
  
  <p></p>
  
  
- Provide a name for your new world

  <details>
  <summary>Providing a name for your new world</summary>
  
  <p></p>
  
  [Providing a name for your new world](../../image_data/c22bba97717ed26c6c0178168969955ef65c34447dada22b230d0929b27da712.md)
  
  ### Overview
  This image depicts a dialog box interface with a form for renaming a world. The form includes a text field for entering a new name and two buttons labeled "Cancel" and "Save."
  
  ### Key Elements
  - **Text Field**: Located in the center, above the buttons. Contains the text "New world" and has a placeholder "9/60" indicating character count limits.
  - **Text Field Placeholder**: "9/60" is displayed next to the text field, indicating the maximum number of characters allowed.
  - **Buttons**: Two buttons are present below the text field. The left button is labeled "Cancel," and the right button is labeled "Save."
  - **Close Button**: A small "X" icon is located at the top-right corner of the dialog box, likely for closing the dialog.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the text field, as it is the primary interactive area. The buttons are arranged horizontally below the text field, with "Cancel" on the left and "Save" on the right. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from left to right.
  
  </details>
  
  <p></p>
  
  

  **Note**: If you do not provide a name for your new world, it will still exist and be saved as normal. However, the next time you open it, it will be called “New World” with the count of how many worlds you’ve created without names appended to it (for instance, “New World 4.” If you do this several times, you may end up with multiple worlds called by similar names, potentially causing confusion. You can always rename it to something else at a later time.
- Click **Save**.

**Note**: Meta Horizon Worlds automatically saves your progress as you go.

## Step 2: Place assets in the scene

Assets are objects that you can place in your world so that players an interact with them. Tables, chairs, laser guns, doors, and so on, are all potentially assets you can use. There are many assets created both by Worlds developers and by other creators that are available in the public asset library, which you’ll use in this tutorial. Public assets are displayed on the **Public Assets** panel of the **Assets Library** tab in the center bottom of the desktop editor. You can also create your own assets, which are stored in the **My Assets** panel of the same tab.

In this section, you will learn how to place an asset from the public assets into your scene. (Just like in a movie, a *scene* is a sequence of continuous action that’s usually oriented around a particular location. Many games consist of many scenes, although this one includes just one).

The **Scene** panel is the large window in the middle of the desktop editor. It shows the scene that you are currently working on, letting you see what it looks like so far. When you add assets to a scene, this is where they appear.
**Note**: To learn more about this part of the UI (user interface), see [Panels and tabs in the desktop editor](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md).

- On the **Asset Library** tab, select **Public Assets**.

  <details>
  <summary>Select **Public Assets**</summary>
  
  <p></p>
  
  [Select **Public Assets**](../../image_data/e128db55fa2cc0eb30d6c41fadee29921c27a988dbfeb3e7804eaec50129c65a.md)
  
  ### Overview
  This image depicts a user interface element within a software application, specifically a sidebar menu. The menu has two main sections labeled "Asset Library" and "Console," with a focus on the "Public Assets" option.
  
  ### Key Elements
  - **Visual description**: A rectangular button with rounded corners.
  - **Location**: Located in the upper left area of the sidebar.
  - **Contents**: Contains a lock icon and the text "Public Assets."
  - **Visual styling**: The button has a dark gray background with a red outline and a white interior. The lock icon is red, and the text is white.
  
  ### Visual Flow / Relationships
  - Most prominent visually: The "Public Assets" button.
  - Spatial relationships: The button is adjacent to the "Asset Library" heading and is part of the larger sidebar layout.
  
  </details>
  
  <p></p>
  
  
- In the search field, search for *Unfinished Graveyard* in the search field.

  <details>
  <summary>The asset search box</summary>
  
  <p></p>
  
  [The asset search box](../../image_data/bfaa5305e6dead61f9665174ed1420e7507eb9103ec662d2e527933974066a37.md)
  
  ### Overview
  This image depicts a user interface of a software application, specifically a section within an asset library. The layout includes a sidebar with navigation options and a main content area displaying search results.
  
  ### Key Elements
  - **Sidebar (Left Panel)**:
    - **Public Assets**: A section labeled "Public Assets" with a lock icon, indicating restricted access.
    - **My Assets**: A folder icon next to "My Assets," suggesting a personal assets section.
  - **Main Content Area (Right Panel)**:
    - **Search Bar**: Located at the top right, with a magnifying glass icon and the placeholder text "unfinished graveyard."
    - **Search Results**: Below the search bar, there is a thumbnail image labeled "Unfinished Gr..." and a small icon with the text "MetaHoriz..." beneath it.
  - **Tabs at the Top**: At the very top, there are tabs labeled "Asset Library," "Console," "Tests," and "Performance."
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The search bar is the most prominent feature as it is centrally located and has a search query entered into it.
  - **Arrows/Connectors**: There are no arrows or connectors visible in this image.
  - **Spatial Relationships**: The sidebar is on the left, while the main content area occupies the right side of the screen. The tabs at the top are horizontally aligned above the search bar.
  
  </details>
  
  <p></p>
  
  
- When the asset is shown, drag it into the **Scene** panel. This will place the the *unfinished graveyard* withing the scene you’re working on.

  <details>
  <summary>Placing the graveyard</summary>
  
  <p></p>
  
  [Placing the graveyard](../../image_data/e63406265f373a2313538d13cdad1c3d6fae2b4fa9878e8f04eb4ea333894551.md)
  
  ### Overview
  This image depicts a user interface of an asset library within a software application. The interface includes a search bar, navigation tabs, and a list of assets. A red arrow points towards a specific area within the interface.
  
  ### Key Elements
  - **Search Bar**: Located at the top center, with a magnifying glass icon and the text "> unfinished graveyard". The background is dark gray.
  - **Navigation Tabs**: Positioned above the search bar, labeled "Asset Library," "Console," "Tests," and "Performance." The "Asset Library" tab is highlighted in white, indicating it is the active tab.
  - **Red Arrow**: A large red arrow pointing from the right side of the screen towards the search bar.
  - **Asset List**: Below the search bar, there is a list of assets. The first item in the list is partially visible, showing a thumbnail image and the text "Unfinished Gr..." followed by a username "MetaHoriz...".
  
  ### Visual Flow / Relationships
  The most prominent visual element is the red arrow, which draws attention to the search bar. The search bar is central and contains the text "> unfinished graveyard". The navigation tabs are arranged horizontally above the search bar, with the "Asset Library" tab being the focal point due to its highlighted status. The asset list is positioned below the search bar, providing a clear hierarchy of elements.
  
  </details>
  
  <p></p>
  
  
- In the **Hierarchy** panel, select **MyFirstWorld**.

  <details>
  <summary>The Hierarchy panel</summary>
  
  <p></p>
  
  [The Hierarchy panel](../../image_data/3faa2f0854379595ee0b6b03ff4f5e3a08a362930efcc4822b7b2fe83223d0ab.md)
  
  ### Overview
  This image depicts a user interface element showing a hierarchical structure, likely within a game development or asset management tool. The main focus is on a search bar at the top and a list of items below it.
  
  ### Key Elements
  - **Search Bar**: Located at the top, spanning horizontally across the width of the interface. It has a dark background with white text and a magnifying glass icon on the left side. The placeholder text reads: "Search hierarchy".
  - **Filter Icon**: Positioned to the right of the search bar, it is a small icon resembling a filter or funnel, indicating a filtering option.
  - **SpawnPoint**: Below the search bar, there is a single item labeled "SpawnPoint". This item is not highlighted and appears as a standard list entry.
  - **MyFirstWorld**: Directly beneath "SpawnPoint", there is a highlighted item labeled "MyFirstWorld". This item is marked with a small icon that resembles a folder or a world symbol, suggesting it might represent a folder or a specific world within the hierarchy.
  - **Expand/Collapse Icon**: To the left of "MyFirstWorld", there is a small arrow icon, which typically indicates the ability to expand or collapse the contents of the folder.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar at the top. The items listed below follow a vertical arrangement, with "SpawnPoint" and "MyFirstWorld" being the only items shown. There are no arrows or lines connecting elements, but the placement suggests a hierarchical relationship where "MyFirstWorld" is a child of "SpawnPoint".
  
  </details>
  
  <p></p>
  
  

  Then, in the **Properties** panel, enter *0*, *0*, *0* for the **Position** and **Rotation** values.

  <details>
  <summary>Changing the position and rotation.</summary>
  
  <p></p>
  
  [Changing the position and rotation.](../../image_data/821e4983ab45703bcd19990a199f75e38038febd06b117b5f091667401c7ec61.md)
  
  ### Overview
  This image depicts a user interface element showing properties of an object named "MyFirstWorld". It includes sections for Debug Data and Attributes, with specific fields for Position, Rotation, Scale, and Billboard settings.
  
  ### Key Elements
  - **Properties Section**: Located at the top, this section displays the name "MyFirstWorld" within a black rectangular box with rounded corners.
  - **Debug Data Section**: Below the Properties section, this section has a header labeled "Debug Data" with a small arrow indicating expandable content.
  - **Attributes Section**: This section is expanded, revealing subfields for Position, Rotation, Scale, and Billboard. Each field contains a label followed by input fields or dropdown menus.
    - **Position Field**: Contains numerical values for X (-21.0), Y (0), and Z (-26.8).
    - **Rotation Field**: Displays numerical values for X (0), Y (0), and Z (0).
    - **Scale Field**: Shows numerical values for X (1), Y (1), and Z (1).
    - **Billboard Dropdown**: Positioned to the right of the Scale field, with the option "None" selected.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the expanded Attributes section. The flow moves from the Properties section down to the Debug Data section, then into the Attributes section. Arrows indicate expandable content, guiding the viewer's eye through the interface.
  
  </details>
  
  <p></p>
  
  

  The **Hierarchy** panel shows you the list of objects in the current scene. You can use this panel to sort and group the objects as needed. By selecting a particular object in the panel, you can see (and edit) the various properties of that object in the **Properties** panel. In this case, by selecting the top level of the hierarchy (**MyFirstWorld**), this allows you to change the position and rotation for all the child objects under that parent object.

  To explore this subject in greater depth, see the [Hierarchy panel overview](../../Desktop%20editor/Hierarchy%20window/Hierarchy%20panel%20overview.md) and the [Properties panel](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-panel).
- Center the graveyard in the scene panel by moving the camera to get a better view. There are many different key shortcuts for doing maneuvering the camera, but the ones you’ll probably use the most are:
  * **Up**: Right-click + E
  * **Down**: Right-click + Q
  * **Left**: Arrow Left, or right-click + A
  * **Right**: Arrow Right, or right-click + D
  * **Forward**: Arrow Up, or right-click (on your mouse) + W
  * **Back**: Arrow Down, or right-click + S

  You can find a full list of the shortcuts by clicking **Keyboard Shortcuts** on the main menu.

  <details>
  <summary>Keyboard shortcuts</summary>
  
  <p></p>
  
  [Keyboard shortcuts](../../image_data/2b9881f63268c6461d20b40119ee2fd8904e9c1ba00cae49d72cb9a95a6c3a1f.md)
  
  ### Overview
  The image displays a dropdown menu with a dark theme, likely from a software interface. The menu contains various options listed vertically, each with a distinct line separating them. A specific option, "Keyboard Shortcuts," is highlighted with a red bounding box.
  
  ### Key Elements
  - **Visual description**: The dropdown menu has a dark background with white text and light gray separators.
  - **Location**: The menu is located on the left side of the screen.
  - **Contents**: The menu items include "Return to Creation Home," "Shutdown server," "View Application Logs," "Launch Typescript Editor," "Publish world," "Save Backup," "Backups," "Export Geometry," "World capacity," "Keyboard Shortcuts," "Player Settings," "[dev-only] Internal Options," and "Quit desktop editor."
  - **Visual styling**: The text is in a sans-serif font, and the separators are thin and light gray.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Keyboard Shortcuts" option is highlighted with a red bounding box, drawing attention to it.
  - **Arrows, lines, connectors, or implied reading order**: There are no arrows or connectors; the items are read from top to bottom.
  - **Spatial relationships**: Items are arranged vertically, with each item occupying its own line. The highlighted option is positioned centrally within the menu.
  
  </details>
  
  <p></p>
  
  

  **Note**: It’s often much easier to work on specific areas of a scene when they’re center-stage. Being able to move the camera can also help you select a particular object when you don’t know the name its been given.
- In the **Hierarchy** panel, select **SpawnPoint**.

  <details>
  <summary>Selecting the SpawnPoint</summary>
  
  <p></p>
  
  [Selecting the SpawnPoint](../../image_data/980ff541897c942b22ed1c6d45d46c4033a757d910798ece4c27e4f18f67e189.md)
  
  ### Overview
  This image depicts a user interface element within a hierarchy management system. The focus is on a specific node labeled "SpawnPoint" within a list of nodes. The interface includes a search bar at the top and a lock icon indicating permissions or status.
  
  ### Key Elements
  - **Search Bar**: Located at the top-left, it has a placeholder text "> Search hierarchy". It is rectangular with rounded corners and a dark background.
  - **Node List**: Below the search bar, there is a list of nodes. The node "SpawnPoint" is highlighted with a red bounding box.
  - **Node Label**: The label "SpawnPoint" is displayed prominently within the red bounding box.
  - **Lock Icon**: Positioned to the right of the "SpawnPoint" label, it indicates some form of permission or status related to the node.
  - **Background**: The background of the interface is dark gray, providing contrast to the lighter elements.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "SpawnPoint" node, which is clearly marked with a red bounding box. The lock icon to its right suggests that this node might be locked or restricted in some way. The search bar at the top allows users to navigate through the hierarchy, implying a hierarchical structure.
  
  </details>
  
  <p></p>
  
  

  This selects the player avatar and lets you move to a new position within the scene.
  **Note**: A *SpawnPoint* is a designated location within game where players appear (or “spawn”) when they enter the world. These are important for managing player entry and movement within the game.
- Focus your camera on the avatar by pressing the **F** key.

  <details>
  <summary>Focusing the camera on the avatar</summary>
  
  <p></p>
  
  [Focusing the camera on the avatar](../../image_data/bd2a2dd5305d3925ca45e62ae88730c2f6e395364df31613f3cfc47e0629f4a8.md)
  
  ### Overview
  The image depicts a 3D-rendered scene featuring a humanoid figure encased within a transparent blue cube. The environment appears to be a dimly lit, possibly abandoned or ruined interior space, with scattered debris and a worn-down floor. A glowing orange object is visible on the left side of the frame, and a small blue icon with a human silhouette is located at the top of the image.
  
  ### Key Elements
  - **Humanoid Figure**: A white, simplified humanoid figure is positioned inside a transparent blue cube. The figure has a neutral pose with one arm extended outward.
  - **Cube**: The cube is transparent with a blue outline, allowing the figure to be seen clearly against the darker background.
  - **Glowing Object**: A small, glowing orange object is situated on the left side of the image, near the bottom-left corner.
  - **Blue Icon**: At the top of the image, there is a small blue circular icon containing a white human silhouette and a downward-pointing arrow.
  - **Background**: The background consists of a dark, textured surface resembling stone or concrete, with some areas appearing cracked or damaged. Debris and scattered objects are scattered across the floor.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the humanoid figure within the cube. The cube is centrally placed, drawing attention to the figure. The glowing object on the left adds a point of interest but does not interact directly with the central figure. The blue icon at the top provides a focal point that could indicate an interactive element or notification.
  
  </details>
  
  <p></p>
  
  
- Select the **Move** tool to move the avatar around the scene.

  <details>
  <summary>The Move tool</summary>
  
  <p></p>
  
  [The Move tool](../../image_data/3113d13f08e7403622539284d88327897a0a97ef1b3cb59525b7cf6acc7df0fa.md)
  
  ### Overview
  This image depicts a small user interface element located at the top of a window or application toolbar. It consists of a blue button with a white plus sign in the center, surrounded by a few other icons.
  
  ### Key Elements
  - **Visual description**: The central element is a blue button with a white plus sign in the middle.
  - **Location**: Positioned centrally within the toolbar area.
  - **Contents**: The button has a white plus sign (`+`) in its center.
  - **Visual styling**: The button has a solid blue background with a white plus sign, and it appears to have a slight shadow effect underneath, giving it a 3D appearance.
  
  - **Visual description**: To the right of the blue button, there are two additional icons.
  - **Location**: These icons are positioned to the right of the blue button.
  - **Contents**: The first icon is a dark gray circle with a white minus sign (`-`). The second icon is another dark gray circle with a white checkmark (`√`).
  - **Visual styling**: Both icons are simple circles with white symbols in the center, and they appear to have a subtle glow effect around them.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The blue button with the white plus sign is the most prominent element due to its central placement and larger size compared to the surrounding icons.
  - **Arrows, lines, connectors, or implied reading order**: There are no arrows, lines, or connectors present in this image. The layout suggests a horizontal reading order from left to right.
  - **Spatial relationships**: The blue button is flanked by the two dark gray icons, which are aligned horizontally with the blue button.
  
  </details>
  
  <p></p>
  
  

  When you click the **Move** tool with the avatar selected, a small three-dimensional (3D) coordinate system appears on the object.

  <details>
  <summary>The 3D coordinate system</summary>
  
  <p></p>
  
  [The 3D coordinate system](../../image_data/8a54003356ee955aec15fe6ba10b55258933594fce5cf91e743b3827ab9fcbec.md)
  
  ### Overview
  The image depicts a 3D model of a human figure within a blue rectangular frame, resembling a virtual environment or simulation interface. The figure is positioned centrally, surrounded by various directional indicators and control points.
  
  ### Key Elements
  - **Human Figure**: A simplified 3D model of a human figure, colored in shades of blue and gray, located at the center of the frame.
  - **Blue Frame**: A rectangular boundary surrounding the figure, outlined in blue, indicating a virtual space or container.
  - **Directional Arrows**: Green upward arrow, red downward arrow, and blue rightward arrow, placed near the figure, suggesting movement or orientation controls.
  - **Control Points**: Small white dots with blue borders appear around the figure, likely representing interactive nodes or control points.
  - **Top-Left Icon**: A blue circular icon with a stylized symbol (possibly a compass or directional indicator) is situated in the top-left corner of the frame.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The central human figure.
  - **Arrows and Control Points**: These elements are arranged around the figure, implying interaction points for movement or manipulation.
  - **Spatial Relationships**: The directional arrows are positioned to indicate movement directions, while the control points suggest interactive elements within the frame.
  
  </details>
  
  <p></p>
  
  

  It has arrows going along the red X (left-right), green Y (up-down), and blue Z (forward-back) directions. You can move the avatar in any of those directions by clicking and dragging on one of the arrows.
- Select the **Rotate** tool to rotate the avatar about its center or pivot point.

  <details>
  <summary>The Rotate tool</summary>
  
  <p></p>
  
  [The Rotate tool](../../image_data/2db7206fc1453a8e407e079865a840e55de37ba1fff86feac68c3cb8011924c0.md)
  
  ### Overview
  This image depicts a small user interface snippet featuring three distinct icons arranged horizontally. The icons are part of a toolbar or menu bar, likely representing different functions or actions within a software application.
  
  ### Key Elements
  1. **Visual description**: A circular icon with a red outline and a white plus sign inside.
     - **Location**: Leftmost position.
     - **Contents**: A white plus sign within a red circle.
     - **Visual styling**: Red outline, white fill, and a plus sign symbol.
     
  2. **Visual description**: A cross-shaped icon with a blue outline.
     - **Location**: Centered between the first and third icons.
     - **Contents**: A blue cross shape.
     - **Visual styling**: Blue outline, white fill, and a cross symbol.
     
  3. **Visual description**: A circular icon with a blue outline and a red background.
     - **Location**: Rightmost position.
     - **Contents**: A red background with a blue circle in the center.
     - **Visual styling**: Blue outline, red fill, and a blue circle symbol.
  
  ### Visual Flow / Relationships
  The three icons are arranged in a horizontal line, suggesting a sequence or a set of related actions. There are no arrows or lines connecting them, implying that they are independent but part of the same interface.
  
  </details>
  
  <p></p>
  
  

  When you click the **Rotate** tool with an object selected, a small three-dimensional (3D) set of angles appears on the object.

  <details>
  <summary>The 3D rotational angles</summary>
  
  <p></p>
  
  [The 3D rotational angles](../../image_data/a7ea1bc281b1b94e9326e95157f768c6e641969d0ad8c33f66808c498aa526bc.md)
  
  ### Overview
  This image depicts a 3D model of a human figure within a transparent blue cube. The figure is partially obscured by a green and red translucent sphere. There is also a small icon resembling a hand pointing upwards located at the top of the image.
  
  ### Key Elements
  - **Human Figure**: A 3D model of a person wearing a pink shirt and blue pants. The figure is positioned centrally within the cube.
  - **Cube**: A transparent blue cube that encloses the figure. It has a grid pattern on its surface.
  - **Sphere**: A translucent sphere with a green lower half and a red upper half. It partially overlaps the figure, obscuring parts of it.
  - **Hand Icon**: A small icon at the top of the image showing a hand with a finger pointing upwards. It is blue with a white outline.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the human figure within the cube. The sphere is positioned above and slightly behind the figure, creating a sense of depth. The hand icon at the top acts as a secondary focal point, drawing attention upward.
  
  </details>
  
  <p></p>
  
  

  Each angle shows the rotation around the center point of the avatar: the red X (horizontal), green Y (vertical), and the blue Z (forward-back) directions. You can rotate the avatar in any of those directions by clicking the angle and dragging it so that the object rotates the desired amount.
- Adjust the camera to view the scene more easily, if needed.

  You can:

  * Orbit the camera around the avatar by holding Alt + the left mouse button while you drag the mouse.
  * Pan the camera using the left and right arrow keys, or by clicking the mouse scroll wheel and dragging the mouse.
  * Zoom in and out by rolling the mouse scroll wheel.
- Use the **Move** and **Rotate** tools to move the avatar so that it will face the front of the tombstones in the graveyard. This will be the player’s starting position.
  <details>
  <summary>Facing the tombstones</summary>
  
  <p></p>
  
  [Facing the tombstones](../../image_data/a2092540e4165c9faf1b8eceda6ec17ac6f0f082e1633477947d12ae6fc3ce50.md)
  
  ### Overview
  This image depicts a first-person view within a video game environment. The player character is centered in the scene, surrounded by a desolate, overgrown area with ruins and sparse vegetation. The interface includes a health bar at the bottom and directional indicators above the character.
  
  ### Key Elements
  - **Character**: A small, blue humanoid figure with a green head is positioned centrally. The character is surrounded by red and blue directional arrows indicating movement options.
  - **Health Bar**: Located at the bottom of the screen, showing a green bar that fills up partially, suggesting the player's current health status.
  - **Directional Arrows**: Red and blue arrows point left, right, up, and down, respectively, indicating possible movement directions.
  - **Background**: The setting is a dilapidated courtyard with stone walls, broken structures, and overgrown plants. The sky is a muted purple, contributing to a gloomy atmosphere.
  - **Foreground**: A green line runs horizontally across the middle of the screen, possibly representing a path or boundary.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the central character, which draws immediate attention due to its size and central placement. The directional arrows provide guidance for navigation. The health bar at the bottom offers a quick overview of the player's condition. The background scenery establishes the setting but does not interact directly with the gameplay elements shown.
  
  </details>
  
  <p></p>
  
  

## Step 3: Previewing your progress

Playtesting your game during and after you’ve finished creating it is an essential part of being a Worlds creator. As experienced developers know, it’s too easy to miss essential things if you don’t playtest it enough.

For additional information on doing this, see [Preview](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md).

- Click the play button to enter preview mode.

  <details>
  <summary>The Play button</summary>
  
  <p></p>
  
  [The Play button](../../image_data/42d0987abf4dad426c74f365a875b93e266c8c1018843632f351c7e1d3900207.md)
  
  ### Overview
  This image depicts a user interface element, specifically a play button within a larger control panel. The play button is highlighted with a red bounding box, indicating its importance or selection status.
  
  ### Key Elements
  - **Play Button**: Circular shape with a white background and a blue play icon in the center. Located in the top-left area of the image.
  - **Background Panel**: A rectangular panel with a light gray background, located to the right of the play button.
  - **Menu Icon**: A small, dark gray square with a vertical line, situated next to the play button.
  - **More Options Menu**: Three vertically aligned dots, likely representing a menu or additional options, positioned at the far right.
  
  ### Visual Flow / Relationships
  The play button is the most prominent element due to the red bounding box. The layout suggests a typical media player interface where the play button is central to initiating playback. The menu icon and more options menu are secondary elements, providing additional functionalities.
  
  </details>
  
  <p></p>
  
  
- Move your avatar around using the arrow keys to get a feel for how your users will experience your world. You can also change the direction the avatar faces using your mouse.

  **Note**: The avatar displayed in the playtest will probably be your own personal avatar. In the actual game, the avatar of the user will be used.

  <details>
  <summary>Moving your avatar around the scene.</summary>
  
  <p></p>
  
  [Moving your avatar around the scene.](../../image_data/e7a8f5b4a65a8350f97aef1a2f42feac042bd49b72698dcc835a5cbc603408c0.md)
  
  ### Overview
  The image depicts a virtual environment resembling a graveyard at dusk or night, with a character standing in the foreground facing away from the viewer. The setting includes tombstones, a stone wall, and a carved pumpkin, contributing to a Halloween theme. The sky has a gradient of purple hues, and the overall atmosphere is eerie and spooky.
  
  ### Key Elements
  - **Character**: A figure with red hair, wearing a brown sweater and gray pants, stands facing away from the viewer towards the tombstones.
  - **Tombstones**: Several green-topped tombstones are arranged in a row in the middle ground.
  - **Stone Wall**: A large stone wall occupies the left side of the image, with a wooden crate placed against it.
  - **Pumpkin**: A carved pumpkin with a jack-o'-lantern face is located near the right side of the image, slightly in front of the stone wall.
  - **Background**: The background features a dark, foggy sky with a gradient of purple hues, and silhouettes of bare trees and a small house with a chimney are visible in the distance.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the character, as they are the focal point of the scene. The tombstones form a secondary line of interest, leading the eye towards the background. The stone wall and pumpkin add depth and context to the setting. There are no explicit arrows or lines connecting elements, but the arrangement suggests a natural flow from the character forward through the tombstones to the distant background.
  
  </details>
  
  <p></p>
  
  
- When you’re done moving your avatar around, exit the preview mode by pressing **Escape** twice.

## Step 4: Completing the graveyard

- In the graveyard, select the back walls leading up to the gate.

  Do this by clicking one wall or post, holding the **Ctrl** key, and then clicking each one until you’ve got them all. Don’t forget the posts between the wall sections! You can also do this by selecting multiple files in the **Hierarchy** panel, but you may find this more difficult both because of the number of items and the obscure object names.

  <details>
  <summary>Select the back walls</summary>
  
  <p></p>
  
  [Select the back walls](../../image_data/156b6a5a6468a778f5e2faf11bac5cd63a8b35fceb4d22be5e2717e1e16bccaa.md)
  
  ### Overview
  This image depicts a scene from a video game or a virtual environment. The setting appears to be a dimly lit, eerie area with a purple and blue gradient background, suggesting a night-time or foggy atmosphere. The scene includes various geometric shapes, trees, and what seems to be a character or object at the bottom right.
  
  ### Key Elements
  - **Geometric Shapes**: Two large, light blue, rectangular structures with a grid-like pattern are positioned horizontally across the middle of the image. These structures appear to be part of a larger framework or puzzle.
  - **Trees**: Several bare, dark tree branches are scattered throughout the scene, contributing to the spooky ambiance.
  - **Background Gradient**: The background transitions from a deep purple at the edges to a lighter blue towards the top right corner.
  - **Character/Entity**: A small, white, humanoid figure is located near the bottom right, possibly the player character or an NPC. There is also a small orange object nearby that could be an item or another character.
  - **Lighting**: A bright green light source is visible at the top center, casting a glow over the scene.
  - **Ground**: The ground is a mix of dark and lighter patches, possibly representing dirt or a surface with some texture.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the geometric shapes and the trees. The geometric shapes are the focal point, with the trees dispersed around them. The lighting from the green light source creates a sense of depth and draws attention upwards. The character at the bottom right adds a sense of scale and interaction potential within the scene.
  
  </details>
  
  <p></p>
  
  

  **Note**: It may be easier to see the individual objects that make up the wall if you select **MyFirstWorld** in the **Hierarchy** panel. This will show the outlines of all the objects in the **Scene** panel.

  <details>
  <summary>Outline of the back walls</summary>
  
  <p></p>
  
  [Outline of the back walls](../../image_data/227e88ac3ea8aa2ee54ac3ce054766e6669592b38d2d55784d700981f93b74b5.md)
  
  ### Overview
  The image depicts a minimalist design featuring a purple background with a faint, ghostly tree pattern. Two rectangular frames are outlined in blue, one on the left and one on the right, both containing smaller rectangles within them. The overall composition suggests a layout or interface design.
  
  ### Key Elements
  - **Visual description**: The background is a solid purple with a subtle, transparent tree pattern.
  - **Location**: The background spans the entire image.
  - **Contents**: The pattern consists of thin, white branches resembling trees.
  - **Visual styling**: The branches are light gray and semi-transparent, creating a ghostly effect.
  
  - **Visual description**: Two blue rectangular outlines are present.
  - **Location**: One rectangle is on the left side, and the other is on the right side of the image.
  - **Contents**: Each rectangle contains smaller rectangles within it.
  - **Visual styling**: The rectangles are outlined in blue, with a thin white border inside them.
  
  </details>
  
  <p></p>
  
  
- Select the **Move** button and then press **Ctrl** + **D** to duplicate these objects. Use the tools that you learned in Step 2 of this tutorial to move the walls to the

  <details>
  <summary>Duplicate the back walls</summary>
  
  <p></p>
  
  [Duplicate the back walls](../../image_data/bbd6061debf605726087afe6af5b0a91a7afd5b5610db3b033252701c07f8733.md)
  
  ### Overview
  The image depicts a 3D-rendered scene with a purple and blue gradient background. The scene includes a foggy environment with buildings, trees, and some geometric shapes. There are also some red, green, and blue arrows indicating directions or points of interest.
  
  ### Key Elements
  - **Background**: A gradient of dark blue to lighter blue and purple, creating a foggy atmosphere.
  - **Buildings**: Several structures resembling houses or small buildings are scattered across the scene. They appear to be part of a village or town.
  - **Trees**: Bare trees are present, contributing to the eerie, foggy ambiance.
  - **Geometric Shapes**: Blue rectangular shapes are positioned near the center-left of the image, possibly representing buildings or platforms.
  - **Arrows**: Red, green, and blue arrows are placed at various points within the scene, likely indicating directions or points of interest.
  - **Lighting**: There are subtle light sources, possibly from the buildings or trees, adding to the atmospheric effect.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the buildings and the geometric shapes. The arrows suggest a navigational or directional focus within the scene. The spatial relationship is somewhat scattered, with no clear central point, but the arrows imply a sense of movement or exploration.
  
  </details>
  
  <p></p>
  
  
- Rotate the walls 180 degrees and line them up with the backside of the gate. Now you have an enclosed graveyard.

  <details>
  <summary>Rotate the walls 180 degrees</summary>
  
  <p></p>
  
  [Rotate the walls 180 degrees](../../image_data/6b9a1ee977c9d20c3eae4846ad53354f9132403ed9c60392f0ea26bfc981de9e.md)
  
  ### Overview
  The image depicts a virtual environment resembling a graveyard at night. The scene includes a fence, a small house, a tree, and some scattered objects. The sky has a gradient of purple hues, suggesting either dusk or dawn.
  
  ### Key Elements
  - **Fence**: A white outline of a rectangular fence is prominently displayed in the foreground. It has vertical posts and horizontal bars.
  - **Small House**: A dark-colored house with a triangular roof is situated towards the right side of the image. It has a green light on its roof.
  - **Tree**: A large, leafless tree stands near the house, adding to the eerie atmosphere.
  - **Scattered Objects**: There are small, indistinct objects scattered around the area, possibly tombstones or other grave markers.
  - **Sky**: The sky is a gradient of purple, transitioning from a lighter shade at the top to a darker hue at the bottom. There is a faint horizontal line of light near the top of the image.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the fence, which frames the scene. The small house and tree are secondary focal points. The scattered objects add detail but are less distinct. The gradient sky creates a sense of depth and mood.
  
  </details>
  
  <p></p>
  
  
- Use the other assets in the world to finish creating the graveyard. Feel free to get creative and add objects from the [asset library](../../VR%20tools/Getting%20started/Use%20the%20Asset%20Library%20in%20Meta%20Horizon%20Worlds.md).

  <details>
  <summary>Add other assets to finish the graveyard</summary>
  
  <p></p>
  
  [Add other assets to finish the graveyard](../../image_data/65b4fd71162d091ac572ebdca31262c05714857d7330277a872d8de825db9b74.md)
  
  ### Overview
  The image depicts a virtual scene set in a graveyard at night. The environment is dimly lit with a purple and blue gradient sky, creating a spooky atmosphere. The graveyard features tombstones, a small house, and some trees without leaves, contributing to the eerie ambiance. There are glowing elements scattered around, adding a mystical touch.
  
  ### Key Elements
  - **Graveyard**: A large area filled with tombstones of varying sizes and shapes. Some tombstones are illuminated with neon lights in colors like green, pink, and orange.
  - **Small House**: Located towards the left side of the image, it has a dark exterior with a light-colored roof. It has a door and windows that are slightly ajar, emitting a faint glow.
  - **Trees**: Bare trees are scattered throughout the graveyard, with one particularly tall tree on the right side of the image.
  - **Glowing Elements**: Neon lights are present on the ground and near the small house, creating a contrast against the dark surroundings.
  - **Sky**: The sky transitions from a deep blue at the top to a lighter purple at the bottom, giving a gradient effect.
  
  ### Visual Flow / Relationships
  The most prominent visual is the graveyard itself, as it occupies the majority of the frame. The small house acts as a focal point on the left, while the glowing elements draw attention due to their bright colors. The trees add depth and dimension to the scene. The overall layout suggests a top-down view of the graveyard, with the viewer looking down upon the area.
  
  </details>
  
  <p></p>
  
  

## Step 5: Play in your world on mobile

- Click the **Publish** button in the upper right of your screen or select **Publish World** from the main menu.

  <details>
  <summary>Selecting **Publish World** from the main menu</summary>
  
  <p></p>
  
  [Selecting **Publish World** from the main menu](../../image_data/3ce738e1eead2d5fac2490c4dcef0ade53a0f4bf30642fc2207efe8ab95023c3.md)
  
  ### Overview
  This image depicts a dropdown menu with several options listed vertically. The menu is part of a user interface, likely a software application or web application, given the context of server management and application logs.
  
  ### Key Elements
  - **Visual description**: The dropdown menu has a dark background with white text and light gray separators between items.
  - **Location**: The dropdown menu is located in the upper left area of the screen, extending downward from the main navigation bar.
  - **Contents**: 
      - "Return to Creation Home"
      - "Shutdown server"
      - "View Application Logs"
      - "Launch Typescript Editor"
      - "Publish world" (highlighted in red)
      - "Save Backup"
      - "Backups"
  - **Visual styling**: The text is in a sans-serif font, and the menu items are evenly spaced. The highlighted item, "Publish world," is bordered by a red rectangle.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Publish world" option, which is highlighted. The items are arranged in a vertical list, with no arrows or lines connecting them. The items are read from top to bottom, as indicated by the natural progression of the list.
  
  </details>
  
  <p></p>
  
  
- In the **Publish World** dialog, complete the required information and any additional details that you want to add.
  The following items are required:
  * **Name**
  * **Age Rating**
  * **Tags**
  * **Availability**
  * **Comfort Rating**

  Ensure that the option you select from the list for **Availability** includes mobile. If you don’t wish your world to be visible to the public, ensure that the **Visible to Public** option is not selected.

  **Note**: Do no select **Members-only world** at this time. Once this is done and the world is published, this cannot be changed.

  <details>
  <summary>The Publish World dialog</summary>
  
  <p></p>
  
  [The Publish World dialog](../../image_data/fb94ee4257c9c807d878c88a3936a7bdb289adef438ac17e247b8e0352b87399.md)
  
  ### Overview
  This image depicts a user interface for publishing a world, likely within a platform that allows users to create and share virtual worlds. The interface includes various fields and options for configuring the world before publication.
  
  ### Key Elements
  - **Preview images**: Three preview images are displayed at the top left, showing different scenes of a virtual world. Each image has a gradient sky and a landscape with trees and mountains.
  - **Status**: Below the preview images, the status is labeled as "Unpublished."
  - **Name (required)**: A text field is present for entering the name of the world, currently filled with "Graveyard."
  - **Description**: A text area for describing the world, with the placeholder text "What can people do in your world?" entered.
  - **World options**: Options related to the world’s visibility and settings are listed below the description field.
      - **Visible to public**: A toggle switch is available to control whether the world is visible in searches or featured.
      - **Beta label**: A toggle switch to enable adding a Beta label to the world.
      - **Members-only world**: A toggle switch to indicate if the world is restricted to members only.
      - **Optimized for Web and Mobile**: A toggle switch to ensure the world is optimized for web and mobile devices.
  - **Age rating (required)**: A field to add an age rating for the world.
  - **Tags (required)**: A field to add tags to make the world easier to find.
  - **Availability (required)**: A dropdown menu to choose which devices the world will be available on.
  - **Comfort rating (required)**: A dropdown menu to rate the comfort level of the world.
  - **Mute assist**: A toggle switch to detect loud sounds and profanity.
  - **Publish button**: A blue button at the bottom right corner labeled "Publish."
  
  ### Visual Flow / Relationships
  The interface is structured with clear sections for different inputs and options. The preview images are the first visual elements, followed by the name and description fields. The world options are grouped together below the description. The publish button is prominently placed at the bottom right, indicating its importance in the workflow.
  
  </details>
  
  <p></p>
  
  
- Click **Publish**.

  <details>
  <summary>Publishing your world</summary>
  
  <p></p>
  
  [Publishing your world](../../image_data/c7d51dd4d50bf912fd9eeef419d6aba0b418108951c5ef27c875aa0cf3cd4214.md)
  
  ### Overview
  This image depicts a user interface section of a settings or configuration page, likely within a web application or software tool. It shows toggle switches and a prominent blue "Publish" button.
  
  ### Key Elements
  - **Toggle Switches**: Two toggle switches are located at the top right. They appear to control features related to the world being managed. The switches are off, indicated by the grayed-out state.
  - **Text Labels**: Above the toggle switches, there are labels describing the toggles' functions:
    - "Members-only world"
    - "Optimized for Web and Mobile"
  - **"Publish" Button**: A large blue rectangular button labeled "Publish" is prominently displayed at the bottom. It is outlined with a red dashed border, suggesting it is the primary action to take.
  - **Background**: The background is dark gray, providing contrast to the lighter-colored text and buttons.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Publish" button due to its size and placement. The toggle switches are secondary elements, positioned above the button. There are no arrows or lines connecting the elements, but the layout suggests a linear reading order moving from top to bottom.
  
  </details>
  
  <p></p>
  
  

  For additional information on publishing your world, see the [Publish](../../Save,%20optimize,%20and%20publish/Publish%20your%20world.md) page.
- Click **Preview tab**.

  <details>
  <summary>Preview Configuration Settings</summary>
  
  <p></p>
  
  [Preview Configuration Settings](../../image_data/48a6c03bc94e1c586bf62d0fc8b6b4fd50c3fc277a93b16bf7f94d0b08fbf1c9.md)
  
  ### Overview
  The image displays a user interface section of a software application, likely related to game development or simulation, given the presence of "Preview device" and "Switch to VR" options. The interface includes navigation tabs at the top and various interactive elements below them.
  
  ### Key Elements
  - **Navigation Tabs**: Located at the top, these tabs include "Build," "Systems," "Preview," "Scripts," and "Gen AI." The "Preview" tab is highlighted with a red bounding box.
  - **Preview Device Button**: Positioned below the navigation tabs, this button has a controller icon and reads "Preview device."
  - **Device Model Dropdown**: Next to the preview device button, this dropdown menu has a phone icon and reads "Device model."
  - **More Options Button**: This button, marked with a gear icon, is labeled "More."
  - **Switch to VR Button**: On the far right, this button features a VR headset icon and reads "Switch to VR."
  - **Menu Icon**: Located in the top-left corner, this icon resembles a hamburger menu.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Preview" tab, as indicated by the red bounding box. The elements are arranged horizontally, with the navigation tabs at the top and the interactive buttons below them. There are no arrows or lines connecting the elements, suggesting a linear reading order from left to right.
  
  </details>
  
  <p></p>
  
  
- From the **Preview Device** list, select **Mobile**.

  <details>
  <summary>Preview Device list</summary>
  
  <p></p>
  
  [Preview Device list](../../image_data/11b982f86b120f3dcab2c10100f90982e1e776958aa0310b1bbb8cc9bd99ced6.md)
  
  ### Overview
  This image depicts a user interface section of a software application, likely related to development or testing, given the presence of options for previewing device models and local environments. The interface includes dropdown menus, buttons, and navigation tabs at the top.
  
  ### Key Elements
  - **Top Navigation Bar**: Located at the very top, spans the width of the interface. Contains tabs labeled "Build," "Systems," "Preview," "Scripts," and "Gen AI." The "Preview" tab is highlighted, suggesting it is currently active.
  - **Dropdown Menu**: Positioned below the "Preview" tab, it is open and displays options "Mobile," "Web," and "None." The dropdown has a dark gray background with white text.
  - **Device Model Dropdown**: Situated next to the "Preview device" label, it features a phone icon and a downward arrow indicating a dropdown menu.
  - **More Options Button**: Located to the right of the device model dropdown, it has a gear icon and a downward arrow, suggesting additional settings or configurations.
  - **Local Environment Dropdown**: Found on the far right, it has a globe icon and a downward arrow, indicating a dropdown for selecting local environments.
  - **Tool Buttons**: Below the dropdowns, there are several icons representing different tools or functions, such as a blue square with a white cursor, a plus sign, a cube, and a square with a line through it.
  - **Search Bar**: Partially visible on the left side, with a magnifying glass icon and the word "Search" next to it.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the open dropdown menu under the "Preview" tab. The dropdown menu is the focal point due to its size and the fact that it is expanded. The tool buttons below the dropdowns are arranged horizontally, and the search bar is positioned to the left. The layout suggests a linear reading order moving from left to right.
  
  </details>
  
  <p></p>
  
  
- From **Preview actions**, select **Send preview build link to the Meta Horizon mobile app**.

  <details>
  <summary>Sending a preview link to your Worlds app</summary>
  
  <p></p>
  
  [Sending a preview link to your Worlds app](../../image_data/dc46eb9d7c3e61d1607d587056588f4110356f7636157cdfc333d68665eb1e41.md)
  
  ### Overview
  This image depicts a user interface element consisting of three circular icons arranged horizontally. The central icon is highlighted with a red bounding box, drawing attention to it.
  
  ### Key Elements
  - **Visual description**: Circular icons with a flat design.
  - **Location**: Horizontally aligned across the top.
  - **Contents**: 
    - Leftmost icon: A globe symbol.
    - Center icon: A refresh symbol.
    - Rightmost icon: A linked chain symbol.
  - **Visual styling**: Icons are simple and minimalistic, with a white fill against a dark gray background.
  
  ### Visual Flow / Relationships
  The central icon is most prominent due to the red bounding box. There are no arrows or lines connecting the elements, suggesting a horizontal navigation or menu layout.
  
  </details>
  
  <p></p>
  
  

  **Note**: If you do not have the Meta Horizon mobile app installed, you can install it and repeat this step, view the published world in your browser, or share the web link with others. For more information, see [Preview device](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#preview-device).
- Open the Meta Horizon app on your mobile device, find the build link under **Notifications** to play in your world.

  For more related information, see [Testing worlds on mobile](../../Mobile%20and%20web/Testing%20worlds%20on%20mobile%20and%20web.md#mobile).

## What’s Next

**Congratulations!** You’ve finished Part 1 of the Introductory Tutorial: Creating Your First World

Now go to the [Part 2 of the tutorial](Create%20your%20first%20world%20tutorial,%20part%202.md) to learn how to import custom models and write your first script.