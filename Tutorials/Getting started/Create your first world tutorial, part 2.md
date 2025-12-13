Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started/create-your-first-world-continued

# Create your first world tutorial, part 2

**Welcome to Part 2 of the Creating Your First World Tutorial**

In this tutorial, you’ll continue to learn how to create a simple game in Horizon Worlds, where you shoot marauding skeletons in a graveyard. Where [Create your first world tutorial, part 1](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world) showed you how to create a new world and build the basics of the game, part 2 will take you a bit farther.
Part 2 shows you how to import custom models, which are which are complex 3D models that are not available in the public asset library. You won’t be creating them here—you’ll use demo assets so you can see how they’re imported. Once you’ve done that, the tutorial shows you how to write a basic script and attach it to the entity to create behavior. The tutorial ends with testing the simple game in virtual reality.

Creating customs models is outside the scope of this tutorial, but if you want to find out more about them, see [Creating a custom model](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

If you’re looking for the first half of the tutorial, go to the [Introductory Tutorial part 1](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world).

The key things you should learn from this module are the following:

* Importing custom models into your world
* Adding entities to your game
* Scripting entity behavior
* Trying your world in virtual reality

**Note**: This tutorial assumes that you’ve completed the prerequisites discussed in [Create your first world tutorial introduction](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-a-new-world-intro).

This part of the tutorial requires that you first complete [part 1](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world), as this is a continutation of that process.

## Step 1: Add a pedestal and a rifle

In part 1 of this tutorial, you created the graveyard. But if you’re going to hunt marauding skeletons, you’ll want to add a rifle and a pedestal to make it easier (otherwise you’d have to use your hands and that gets messy…)

- Download the [Demo Assets](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=A33KkoztyZEQ7kNvwFhQyY8&_nc_oc=AdkqPZBJe8M2kmXc7vEBUGc8__6emxNDrL7oEx85XGa-ODISrV8jM95UX7qYGPEdotGcHkJcbeeMWnmhPFHXrGEH&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfkfjsOrUvJHbF1wB3GZUo7NnzrbyUV2hBzeDL5h_n979Q&oe=69558EC5)
  .

  This file is a zip archive that contains a number of pre-made assets that you’ll add to your game (like the rifle).
- Extract the contents of the zip archive. folder.

  a. Open the downloaded zip file.

  b. Click **Extract all**.

  c. Browse to a location for the folder on your local hard drive and click **Extract**.
- Add the pedestal to the scene. To do this, click **My Assets** on the **Asset Library** tab at the bottom of the screen

  <details>
  <summary>The My Assets tab</summary>
  
  <p></p>
  
  [The My Assets tab](../../image_data/0d42bdf6341dfa5f2e089d4fd3ecece5d0e64a593dbd0249ed0a6ed9a67f437c.md)
  
  ### Overview
  The image displays a portion of a user interface, specifically a sidebar menu within a software application. The focus is on the "Asset Library" section, highlighting the "My Assets" folder.
  
  ### Key Elements
  - **Visual description**: A dark-themed sidebar menu with a light gray background for the highlighted section.
  - **Location**: Top-left corner of the image.
  - **Contents**: The text "My Assets" accompanied by a folder icon.
  - **Visual styling**: The folder icon is white, and the text is white against a light gray background. The entire section is bordered by a red dashed line.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "My Assets" folder is highlighted with a red dashed border, drawing attention to it.
  - **Spatial relationships**: The "My Assets" folder is adjacent to the "Public Assets" section above it. Below "My Assets," there is a partially visible section labeled "All Assets."
  
  </details>
  
  <p></p>
  
  
- From the **Add New** list, select **3D Model**.

  <details>
  <summary>Adding a new 3D model</summary>
  
  <p></p>
  
  [Adding a new 3D model](../../image_data/497ee254500f03292273933efba8a1012e638c30aac04dc527a7ec6ab0a94077.md)
  
  ### Overview
  The image displays a user interface element showing a sidebar menu with a dropdown menu open. The sidebar contains two main sections labeled "Public Assets" and "My Assets," both with folder icons preceding them. To the right, a dropdown menu is open under the "Add New" option, listing various asset types.
  
  ### Key Elements
  - **Sidebar Section "Public Assets"**: Located on the left side, this section has a dark gray background with a white folder icon and the text "Public Assets."
  - **Sidebar Section "My Assets"**: Positioned below "Public Assets," this section also has a dark gray background with a white folder icon and the text "My Assets."
  - **Dropdown Menu**: Opened under "Add New," this menu has a dark gray background with white text. It lists four options: "Folder," "3D Model," "Audio," and "Material." The "3D Model" option is highlighted with a red bounding box.
  - **Background**: The overall background is a light gray.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "3D Model" option within the dropdown menu. The dropdown menu is positioned to the right of the sidebar, and the elements are arranged vertically. There are no arrows or lines connecting the elements, but the dropdown menu implies a hierarchical relationship with the "Add New" option above it.
  
  </details>
  
  <p></p>
  
  
- In the **Import Models** dialog box, enable **Preserve offset pivots** if it isn’t selected already.

  Because of the way they move, certain assets use [offset pivot points](../../Desktop%20editor/Assets/Use%20offset%20pivots.md), where the point around which they turn or pivot is offset from the center of the asset. This is so animation of the asset can look natural.

  Ignore the warning the dialog box shows: all the assets that this tutorial works with are [single mesh](https://developers.meta.com/horizon-worlds/ learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models) files.

  <details>
  <summary>The Import Models dialog box</summary>
  
  <p></p>
  
  [The Import Models dialog box](../../image_data/79fe8969ad90be05b58158c60cac2c9e88df12823b6cdf7d1c7212f084219d92.md)
  
  ### Overview
  This image depicts a user interface dialog box titled "Import Model(s)" with various informational and interactive elements related to importing 3D models into a software application.
  
  ### Key Elements
  - **Title Bar**: Located at the top, the title bar reads "Import Model(s)" with a close button ("X") on the right side.
  - **Informational Box**: Positioned above the "Choose files on your device" button, it contains a message explaining that hierarchies are flattened when importing a 3D model, pivot points are centered, and colors can't be modified.
  - **Documentation Link**: Below the informational box, there's a clickable link labeled "Documentation" in blue text.
  - **File Chooser Button**: A large button with a plus sign and the text "Choose files on your device" is situated below the documentation link.
  - **Offset Pivots Warning**: A yellow warning box below the file chooser button states that the offset pivots feature is only supported on single mesh FBX files and may lead to unexpected behavior if the FBX file contains more than one mesh.
  - **Preserve Offset Pivots Toggle**: A toggle switch labeled "Preserve offset pivots" is located beneath the warning box. It indicates whether the original pivot should be preserved during import.
  - **Buttons**: At the bottom, there are two buttons labeled "Cancel" and "Import."
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the title bar, the informational box, and the file chooser button. The warning box and toggle switch provide additional information and options for the user. The buttons at the bottom offer the final actions the user can take regarding the import process.
  
  </details>
  
  <p></p>
  
  
- Click **Choose files on your device**, then navigate to the folder in which you extracted the demo assets.

  <details>
  <summary>Choosing the extracted files.</summary>
  
  <p></p>
  
  [Choosing the extracted files.](../../image_data/cbbef299be2bddaa3ca3a1391134b4c9fbfe173148178923f59d439add2b8f5a.md)
  
  ### Overview
  This image depicts a user interface element that appears to be part of a file upload interface. It includes a description above the element and a button below it for choosing files.
  
  ### Key Elements
  - **Description**: Located at the top of the image, it states: > "Your 3D model must have at least one file in FBX (.fbx) format and one texture file in PNG (.png) format. The maximum file size for each is 50MB." This text is in white against a dark background.
  - **Button**: Positioned centrally below the description, it has a light gray background with rounded corners. Inside the button, there is a blue plus sign followed by the text "> Choose files on your device". The button is outlined with a red dashed border.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the button for choosing files. The description above the button provides context for the action required. There are no arrows or lines connecting elements, but the layout suggests a linear reading order starting from the description and moving towards the button.
  
  </details>
  
  <p></p>
  
  
- From the folder on your hard drive, select the `SingleBlock.fbx` and `StoneBlockKit_BR.png` files, and then click **Open**.
  `SingleBlock.fbx`is the 3D model file (or `.fbx` file) and `StoneBlockKit_BR.png` is its associated texture file. These are the files that make up the pedestal asset.

  <details>
  <summary>Select the asset files</summary>
  
  <p></p>
  
  [Select the asset files](../../image_data/c70d60bcdeaa225de4ebf2a023b6154041d2ada72ef641c6229ae9fdcbbca51a.md)
  
  ### Overview
  This image depicts a file selection dialog box within a software interface, specifically designed for selecting asset files. The dialog box includes a directory path, file thumbnails, and interactive elements such as buttons and checkboxes.
  
  ### Key Elements
  - **Directory Path**: Located at the top, showing the current folder path (`Desktop > assets > DemoAssets`). It includes navigation controls (back, forward, up, down arrows) and a refresh button.
  - **Search Bar**: Positioned above the file thumbnails, allowing users to search for specific files within the directory.
  - **File Thumbnails**: Displayed in a grid layout, showing previews of various files. Two files are highlighted with red borders: `SingleBlock.fbx` and `StoneBlockKit_BR.png`.
  - **File Name Input**: At the bottom left, showing the selected file names (`"StoneBlockKit_BR.png" "SingleBlock.fbx"`).
  - **Model Files Checkbox**: Located at the bottom right, indicating that the selected files are model files.
  - **Open Button**: A large button labeled "Open" at the bottom right, which presumably confirms the selection of the files.
  - **Cancel Button**: Adjacent to the "Open" button, allowing users to cancel the operation.
  
  ### Visual Flow / Relationships
  The most prominent elements are the highlighted files (`SingleBlock.fbx` and `StoneBlockKit_BR.png`). These are visually emphasized through red borders. The file thumbnails are arranged in a grid, with the selected files being the focus. The directory path and search bar provide context for the user, while the "Open" and "Cancel" buttons define the interaction flow.
  
  </details>
  
  <p></p>
  
  

  These are then displayed in the the **Import Models** dialog box.

  <details>
  <summary>Asset files displayed in the Import Models dialog</summary>
  
  <p></p>
  
  [Asset files displayed in the Import Models dialog](../../image_data/5dd3acd30161c18f65c550e9e418ec2b41631e17d709897bf78af3eaae18c5be.md)
  
  ### Overview
  This image depicts a file selection interface within a software application. It shows a button labeled "Choose files on your device" at the top, followed by a list of selected files below.
  
  ### Key Elements
  - **Button**: Located at the top, it has a blue plus sign and the text "Choose files on your device." The button is rectangular with rounded corners.
  - **Selected Files List**: Below the button, there are two entries showing files that have been selected.
    - **SingleBlock.fbx**: This entry includes a green checkmark icon on the left and the filename "SingleBlock.fbx" next to it. There is also a small arrow indicating expandable content.
    - **StoneBlockKit_BR.png**: Similar to the first entry, this one also has a green checkmark icon on the left and the filename "StoneBlockKit_BR.png" next to it. Again, there is a small arrow indicating expandable content.
  - **Close Icons**: Each file entry has a white "X" icon on the far right, likely for removing the file from the selection.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Choose files on your device" button at the top. The selected files are listed below in a vertical sequence. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  
- Click **Import**.

  **Note**: If you decide to leave your world at this point, it’s important to wait for the asset files to be imported into the desktop editor before you leave.

  The SingleBlock asset will appear in your library when it’s been imported

  <details>
  <summary>The SingleBlock asset</summary>
  
  <p></p>
  
  [The SingleBlock asset](../../image_data/3ef5547f5323dd9b9b5f643a236ab723db3efecb040024490a7b5fddcec13ab1.md)
  
  ### Overview
  This image depicts a user interface element from a digital asset management system. It shows a file explorer-style view with folders and assets listed. The layout includes a sidebar with navigation options and a preview area on the right side.
  
  ### Key Elements
  - **Top Bar**: Located at the very top, this bar contains a dropdown labeled "Add New" and breadcrumb navigation indicating the current folder path ("All Assets > My Folders > My Assets").
  - **Sidebar Navigation**: On the left, there are expandable folders labeled "All Assets," "My Folders," and "Shared With Me." Each folder has a folder icon next to its name.
  - **Asset Preview Area**: On the right, there is a preview area showing a thumbnail of an asset named "SingleBlock," which appears to be a geometric shape.
  - **Footer Section**: At the bottom, there is a section labeled "Deleted assets."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "My Assets" folder under "My Folders," as it is expanded and highlighted. The navigation bar at the top provides context for the current view. The asset preview area is positioned to the right of the sidebar, and the footer at the bottom indicates another section of the interface.
  
  </details>
  
  <p></p>
  
  
- After the asset files have been imported, drag the SingleBlock asset into the scene.

  <details>
  <summary>Inserting the asset</summary>
  
  <p></p>
  
  [Inserting the asset](../../image_data/0c18ea3a67b4017ff7133bcb971a7fd6a5bcd11742bc1e4fcb0dc1050244410f.md)
  
  ### Overview
  The image displays a user interface element with a dark background featuring a geometric design and a circular loading icon. Below this, there are navigation tabs and a search bar, along with a smaller interactive element showing a block icon labeled "SingleBlock."
  
  ### Key Elements
  - **Geometric Design**: A large, irregular polygon with orange outlines occupies the upper portion of the image. It has a dynamic, angular appearance.
  - **Loading Icon**: A circular icon with a partial gray circle inside, located within the polygon. It suggests a loading state.
  - **Navigation Tabs**: Located at the bottom of the image, these tabs include "NPC Debugger," "Performance," and "My Folders." The tab "My Assets" is highlighted, indicating the current selection.
  - **Search Bar**: Positioned to the right of the navigation tabs, it contains a magnifying glass icon and the placeholder text "Search My Assets."
  - **Block Icon**: A smaller, lighter-colored square with a white block icon and the text "SingleBlock" below it, situated near the bottom of the image.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the geometric design in the upper part of the image. The loading icon is centrally placed within this design. The navigation tabs are arranged horizontally below the design, with the "My Assets" tab being emphasized. The search bar is positioned to the right of the tabs. The block icon is further down, aligned to the left side of the screen.
  
  </details>
  
  <p></p>
  
  

  The SingleBlock asset appears in the **Hierarchy** panel as an object named “SingleBlock”.
- In the Hierarchy, rename the “SingleBlock” object to “Pedestal”.
- Enable **Snap to surfaces** by clicking the **Snap to Surfaces** button. This allows you to easily position the base of the object along the ground.

  <details>
  <summary>Click the Snap to surfaces button</summary>
  
  <p></p>
  
  [Click the Snap to surfaces button](../../image_data/d395b99cfa5964e52ec3cc84d2327773c0f5d90a20323b32873d65fb6f2141f3.md)
  
  ### Overview
  This image depicts a small interface element, likely part of a software application or tool. It features a button or toggle switch with a label indicating functionality related to snapping objects to surfaces.
  
  ### Key Elements
  - **Visual description**: A rectangular button with rounded corners.
  - **Location**: Positioned centrally in the image.
  - **Contents**: Contains the text "> Snap to surfaces" in white font against a dark gray background.
  - **Visual styling**: The button has a dark gray background with a lighter gray border. The text is white, providing good contrast.
  
  ### Visual Flow / Relationships
  The button is the most prominent element in the image. There are no arrows, lines, or connectors present, suggesting that the focus is solely on the button itself. The button is the only interactive element shown, implying its importance within the interface.
  
  </details>
  
  <p></p>
  
  
- With the Pedestal object selected in the Hierarchy, position it by dragging it by the orange dot. You can place the Pedestal anywhere on the ground.

  <details>
  <summary>Click and drag the orange dot</summary>
  
  <p></p>
  
  [Click and drag the orange dot](../../image_data/f2e83b8b0fcdacea3f054c1308fce7a310b8fa6da6677122d9fc43d498a8f570.md)
  
  ### Overview
  The image depicts a 3D cube with a sphere attached to one of its faces. The cube has a dark gray surface with a lighter gray interior, and the sphere is orange. There are colored arrows pointing outwards from the sphere, indicating directions.
  
  ### Key Elements
  - **Cube**: A rectangular prism with a dark gray exterior and a lighter gray interior. It is positioned centrally in the image.
  - **Sphere**: An orange sphere located at the bottom face of the cube.
  - **Arrows**: Four colored arrows point outward from the sphere. The arrows are green, blue, red, and another red arrow pointing downwards.
  - **Background**: The background is a gradient of dark shades, resembling water or a similar surface.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the cube, as it occupies the central space. The arrows emanate from the sphere, which is attached to the bottom face of the cube. The arrows suggest movement or directionality, but no specific reading order is implied by the layout.
  
  </details>
  
  <p></p>
  
  
- Add the rifle asset to the scene.

  a. Open the **Assets** panel by clicking the **Assets** tab.

  b. Click **Add New**, and then click **3D Model**.

  c. In the **Import Models** dialog box, disable **Preserve offset pivots** because the 3D model for the rifle uses [more than one material for the mesh in the FBX file](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Multiple%20Materials%20per%20Mesh.md).

  <details>
  <summary>Don't preserve Offset Pivots</summary>
  
  <p></p>
  
  [Don't preserve Offset Pivots](../../image_data/24aab608198179de59e8f18d4f8fc3b1039a808ec0c4ac182b01a7ff76cd74e7.md)
  
  ### Overview
  This image depicts a user interface element, specifically a toggle switch with accompanying text. The overall composition is simple, with a focus on the toggle switch and its label.
  
  ### Key Elements
  - **Toggle Switch**: Located in the top-left corner. It is a rectangular element with rounded corners. The switch is currently in the 'off' position, indicated by the white square on the left side of the rectangle.
  - **Text Label**: Positioned to the right of the toggle switch. The text reads: "Preserve offset pivots". Below the main label, there is a smaller, less prominent text that says: "Preserves pivot defined in original asset (if disabled, pivots will be centered)".
  - **Background**: The background is dark gray, providing contrast to the lighter-colored toggle switch and text.
  
  ### Visual Flow / Relationships
  The toggle switch is the most prominent visual element due to its central placement and distinct shape. The text label is secondary but still important as it explains the functionality of the toggle switch. There are no arrows or lines connecting elements, so the relationship is purely textual and positional.
  
  </details>
  
  <p></p>
  
  

  d. Select the asset files to import by clicking **Choose files on your device**.

  e. In the file picker window that appears, select the 3D model file (ACWpnBattleRifle.fbx) and its associated texture files (WpnBattleRifleA\_BR.png, WpnBattleRifleA\_MEO.png, WpnIndictator\_BR.png, and WpnIndictator\_MEO.png), and then click **Open**.

  <details>
  <summary>Select the five asset files</summary>
  
  <p></p>
  
  [Select the five asset files](../../image_data/38df716c5d24f9e50a6b0d565b757d0752ae78b27d61c623598c6b1d227644d6.md)
  
  ### Overview
  This image depicts a file selection dialog box within a file explorer interface. The dialog box contains a list of files and folders, with options to open or cancel the operation.
  
  ### Key Elements
  - **Visual description**: A standard Windows-style file explorer window.
  - **Location**: Top-left corner.
  - **Contents**: "Select asset files" at the top, navigation buttons, and a file list.
  - **Visual styling**: Light gray background, blue folder icons, white text.
  
  ### Visual Flow / Relationships
  - Most prominent visually: The file list and its contents.
  - Arrows, lines, connectors: None.
  - Spatial relationships: Files are listed vertically, with folders expanded to show contents.
  
  </details>
  
  <p></p>
  
  

  f. In the **Import Models** dialog box, click **Import**. Wait for the asset files to be imported into the desktop editor.

  <details>
  <summary>This is what the rifle asset looks like after you import it</summary>
  
  <p></p>
  
  [This is what the rifle asset looks like after you import it](../../image_data/ef9375afae1cc7e22fb7e08d0b75c4b5176850a81746c7bc5279bea9b6ed942c.md)
  
  ### Overview
  This image depicts a small, rectangular icon or button with rounded corners. It has a light gray background with a darker gray accent at the bottom right corner, suggesting a three-dimensional effect. The icon itself is a stylized, geometric shape resembling a triangle or arrow pointing upwards.
  
  ### Key Elements
  - **Visual description**: The icon is a simple geometric shape with a gradient effect.
  - **Location**: Positioned centrally within the icon.
  - **Contents**: The icon contains a white triangle pointing upwards.
  - **Visual styling**: The icon has a light gray background with a darker gray accent at the bottom right corner.
  
  ### Visual Flow / Relationships
  The icon is the most prominent visual element, and there are no arrows, lines, or connectors present. The icon is the sole focus of the image, with no additional elements to interact with or relate to.
  
  </details>
  
  <p></p>
  
  

  g. Drag the rifle asset into the scene, and place it upon the Pedestal.

  <details>
  <summary>The rifle floats over the pedestal</summary>
  
  <p></p>
  
  [The rifle floats over the pedestal](../../image_data/f81411e3fcff5c6069f6c7cc4850f247308b590ba297f83bb0b6ab592649c648.md)
  
  ### Overview
  The image depicts a 3D-rendered scene featuring a gun placed on a purple cube floating above a textured surface resembling water. The overall composition is simple, with a focus on the gun and the cube.
  
  ### Key Elements
  - **Visual description**: The gun is a stylized, futuristic-looking weapon with a sleek design, featuring glowing blue accents.
  - **Location**: The gun is positioned on the top of the purple cube.
  - **Contents**: The gun has a rectangular body with a handle and a barrel, and there are glowing blue lights near the front sight.
  - **Visual styling**: The gun has a metallic finish with blue highlights, and the cube is a solid purple with some wear and tear visible on its surface.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The gun is the focal point due to its size and glowing elements.
  - **Spatial relationships**: The gun is centered on the cube, which is floating above the water-like surface. There are no arrows or lines connecting elements, and the reading order is straightforward, moving from the background to the foreground.
  
  </details>
  
  <p></p>
  
  

  **Note**: If you’re having difficulty positioning the rifle, remember that you can always use the orange surface snapping manipulator to move objects anywhere along the ground. You can activate it by pressing the “W” key. Optionally, using “Ctrl+G” lets you group the pedestal and rifle as one object, so you can move them together.
- In the Hierarchy, rename the “ACWpnBattleRifle” object to “Rifle”.

Your Hierarchy should now look like this.

<details>
<summary>Notice that the rifle object contains two child objects</summary>

<p></p>

[Notice that the rifle object contains two child objects](../../image_data/9b6b0595fc07ea54d5e2aff98b26e9a2236310a9437a56d65942ca6446f53549.md)

### Overview
This image depicts a user interface element showing a hierarchical structure, likely from a game development tool or asset management software. The interface includes a search bar at the top, followed by a tree-like structure displaying various nodes and folders.

### Key Elements
- **Search Bar**: Located at the top, spanning horizontally across the width of the interface. Contains a magnifying glass icon and the placeholder text "> Search hierarchy <".
- **Tree Structure**: Below the search bar, a hierarchical list is displayed. Each node has a small icon next to it, indicating its type (e.g., folder, file).
    - **SpawnPoint**: A node labeled as a folder, indicated by a plus sign.
    - **MyFirstWorld**: A folder node with a plus sign.
    - **WorldGeo**: A node under MyFirstWorld, with a minus sign indicating it can be expanded/collapsed.
    - **Lighting**: Another node under MyFirstWorld, also with a minus sign.
    - **graveyard environment**: A node under MyFirstWorld, with a minus sign.
    - **Pedestal**: A node under MyFirstWorld, with a minus sign.
    - **Rifle**: A node under Pedestal, highlighted in blue, indicating selection or focus. It has a minus sign.
        - **WpnIndicatorA**: A child node under Rifle, with a minus sign.
        - **WpnBodyA**: Another child node under Rifle, with a minus sign.

### Visual Flow / Relationships
The visual hierarchy is clear through the indentation and the presence of plus and minus signs. The search bar is the first interactive element, followed by the expandable/foldable nodes. The selected node "Rifle" is visually distinct due to its blue highlight.

</details>

<p></p>



## Step 2: Make the rifle grabbable

In this section, you’ll learn how to make the rifle grabbable by the avatar.

- Select the Rifle object from the Hierarchy.
- In the Property panel, set the following two property values:

  **Motion** = “Interactive” and **Interaction** = “Grabbable”

  <details>
  <summary>Click the drop-down selection list</summary>
  
  <p></p>
  
  [Click the drop-down selection list](../../image_data/a7a86d02205ad72e78fdd32e55f9241e46637917cde0d8381ae9088b5f0d2697.md)
  
  ### Overview
  This image displays a user interface snippet featuring two interactive elements labeled "Motion" and "Interaction." Each element has a dropdown arrow next to it, indicating that they can be expanded or collapsed.
  
  ### Key Elements
  - **Motion**: Located in the top-left area. Contains the word "Motion" in a light gray font. The dropdown arrow is positioned to the right of the text.
  - **Interactive**: Positioned to the right of "Motion," occupying the same row. It contains the word "Interactive" in a darker gray font, with a dropdown arrow next to it.
  - **Interaction**: Located below "Motion" in the same column. Contains the word "Interaction" in a light gray font. Similar to "Motion," it has a dropdown arrow next to it.
  - **Grabbable**: Positioned below "Interaction," also in the same column. Contains the word "Grabbable" in a darker gray font, with a dropdown arrow next to it.
  
  ### Visual Flow / Relationships
  The elements are arranged in a grid-like structure with two rows and two columns. The dropdown arrows suggest a hierarchical relationship, implying that clicking them would reveal more options or information related to the respective labels.
  
  </details>
  
  <p></p>
  
  

  **Note:** The **Interaction** property appears only after you set the **Motion** value to “Interactive”.

## Step 3: Try-out your new world

In this section, you’ll try-out your new world to see what it’s like to pick up the rifle.

- Click the Play button on the menu bar to enter preview mode.

  **Note**: Ensure you’ve configured world simulation to start automatically whenever you start the preview mode. Click the the ellipsis icon to open **Preview Configuration** and toggle on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview entry**.

  <details>
  <summary>Ensure world simulation is configured to auto start</summary>
  
  <p></p>
  
  [Ensure world simulation is configured to auto start](../../image_data/29d4b5e1aae475fe5466ab4cda8ef1d11d5e6897449d00c5b79b54021159dd63.md)
  
  ### Overview
  This image depicts a user interface element within a development environment, specifically a Unity View configuration panel. The layout includes toggle switches and labels for configuration options related to simulation settings.
  
  ### Key Elements
  - **Top Bar**: Contains a play button icon, a square icon, and a menu icon represented by three vertical dots. The text "[dev-only] Unity View" is displayed next to these icons.
  - **Title Section**: Labeled "Preview Configuration" in white text against a dark background.
  - **Toggle Switches**: Two toggle switches are present under the title. Each switch has a label indicating its function:
    - **Auto-start simulation on Preview entry**: A blue toggle switch with a white circle indicating the current state.
    - **Auto-stop simulation on Preview exit**: Another blue toggle switch with a white circle indicating the current state.
  - **Background**: Dark gray with lighter gray accents around the title and toggle switches.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the toggle switches, as they are the interactive components. The layout follows a standard form-based interface design, with the title above the toggle switches and the toggles aligned horizontally. There are no arrows or lines connecting elements, suggesting a linear reading order moving from left to right.
  
  </details>
  
  <p></p>
  
  
- Maneuver the avatar over to the rifle using the arrow keys, and then pick it up by pressing the “E” key.
  <details>
  <summary>Press E to pickup the rifle</summary>
  
  <p></p>
  
  [Press E to pickup the rifle](../../image_data/b2348f6ab6eb8a379b9f00f74568e18812e075e1710a9aa93403787f8d8201b7.md)
  
  ### Overview
  The image depicts a 3D-rendered scene featuring a character from behind, standing on a textured surface. The character is wearing a pink hoodie and light blue jeans. To the right of the character, there is a floating interface element resembling a hand gesture prompt.
  
  ### Key Elements
  - **Character**: A 3D model of a person viewed from behind, wearing a pink hoodie and light blue jeans. The character has blue hair tied up in a bun.
  - **Hand Gesture Prompt**: Located to the right of the character, this element is a floating interface with a green outline around a white hand icon. It appears to be a gesture recognition prompt, likely for interacting with the environment or another user.
  - **Background**: The ground is a dark, textured surface resembling concrete or asphalt, with some small rocks scattered across it.
  
  ### Visual Flow / Relationships
  The character is the focal point, positioned centrally in the frame. The hand gesture prompt is secondary but prominent due to its floating nature and distinct green outline. There are no arrows or lines connecting elements, suggesting a free-flowing interaction rather than a directed sequence.
  
  </details>
  
  <p></p>
  
  
  The way the avatar holds the rifle looks somewhat awkward, but don’t worry, you’ll soon fix that.
  <details>
  <summary>That's not how you hold a rifle!</summary>
  
  <p></p>
  
  [That's not how you hold a rifle!](../../image_data/a215bbdc4a8b7daf0a243fc17cb6f257561dfd6d6a507c1278fbfaf51d2eccce.md)
  
  ### Overview
  The image depicts a 3D-rendered character standing outdoors during twilight. The character has pink hair tied up in a bun and is wearing a pink hoodie and light blue pants. They are holding a futuristic-looking weapon in their right hand. The background features a gradient sky transitioning from purple to dark blue, suggesting either dawn or dusk.
  
  ### Key Elements
  - **Character**: A female figure with pink hair in a bun, wearing a pink hoodie and light blue pants. She is facing slightly to the right.
  - **Weapon**: A black, sleek, and angular firearm held in her right hand. It has a modern design with a long barrel and a compact body.
  - **Background**: A gradient sky with a darker horizon line, indicating twilight conditions. The ground appears to be a flat, open area with a muted, earthy tone.
  - **Sky**: The sky transitions from a lighter purple near the horizon to a deeper blue higher up, creating a serene atmosphere.
  
  ### Visual Flow / Relationships
  The character is the most prominent visual element, positioned centrally in the frame. The weapon she holds is secondary but still noticeable due to its size and distinct shape. The background serves as a neutral backdrop that contrasts with the character and weapon, emphasizing them as the focal points.
  
  </details>
  
  <p></p>
  
  
- Exit preview mode by pressing Escape twice.
- Fix the way the avatar holds onto the rifle. With the Rifle object selected in the Hierarchy, in the Property panel, scroll down to the **More** section, and enable both **Use VR Grab Anchor** and **Use HWXS Grab Anchor**.
  <details>
  <summary>These settings fixe the way the avatar hold onto the rifle</summary>
  
  <p></p>
  
  [These settings fixe the way the avatar hold onto the rifle](../../image_data/f8a3f2ec41da188565f9c919a7ac456e0ed60d7bf2603fc966cab549fb2d6f8e.md)
  
  ### Overview
  This image displays a settings interface with various configuration options related to collision events and grab anchors. The layout is structured with toggle switches and input fields for adjusting values.
  
  ### Key Elements
  - **Collision Events From**: A dropdown menu labeled "Nothing" indicating no specific collision events are selected.
  - **Use Grab Lock**: A toggle switch with a white background and blue border, currently off.
  - **Use VR Grab Anchor**: A toggle switch with a blue background and white border, currently on.
  - **Grab Anchors**: Multiple input fields for adjusting X, Y, and Z coordinates for grab anchors. Each field has a black background with white text showing "0" for all axes.
  - **Use Per Hand Grab Anchors**: A toggle switch with a white background and gray border, currently off.
  - **Use HWXS Grab Anchor**: A toggle switch with a blue background and white border, currently on.
  - **HWXS Anchors**: Similar to "Grab Anchors," multiple input fields for adjusting X, Y, and Z coordinates for HWXS anchors. Each field has a black background with white text showing "0" for all axes.
  - **Grab Aim Points**: A set of input fields for adjusting X, Y, and Z coordinates for grab aim points. Each field has a black background with white text showing "0" for all axes.
  - **Grab Aim Radius**: A set of input fields for adjusting X, Y, and Z coordinates for grab aim radius. Each field has a black background with white text showing "0" for all axes.
  
  ### Visual Flow / Relationships
  The interface is organized into sections with clear labels. The toggles and input fields are arranged in a grid-like pattern, with the toggles being more prominent due to their larger size and distinct color contrast compared to the input fields.
  
  </details>
  
  <p></p>
  
  
- Set a pose to use when the avatar holds onto the rifle. With Rifle selected in the Hierarchy, scroll down through the property list until you see **Avatar Pose**. Click the drop-down menu beside it, and then select **Rifle**.
  <details>
  <summary>Select the Rifle Pose</summary>
  
  <p></p>
  
  [Select the Rifle Pose](../../image_data/047e0b155e6d8f0a02a85c7c4c2f8a45ca70c63ba0c9810aeb4a99283baaf73d.md)
  
  ### Overview
  This image depicts a vertical menu interface with a list of weapon options. The menu items are arranged vertically, and each item has a corresponding icon next to its name.
  
  ### Key Elements
  - **Visual description**: The menu items are rectangular with rounded corners.
  - **Location**: Each item is located in the center of the image, stacked vertically.
  - **Contents**: 
      - **Default**: Icon resembling a checkmark, text "Default".
      - **Pistol**: Icon resembling a pistol, text "Pistol".
      - **Shotgun**: Icon resembling a shotgun, text "Shotgun".
      - **Rifle**: Icon resembling a rifle, text "Rifle".
      - **RPG**: Icon resembling a rocket launcher, text "RPG".
  - **Visual styling**: The background is dark gray, and the text is white. The icons are simple line art in light gray.
  
  ### Visual Flow / Relationships
  The menu items are arranged in a linear fashion, with no arrows or lines connecting them. The items are read from top to bottom, with the "Rifle" option highlighted, indicating it is currently selected.
  
  </details>
  
  <p></p>
  
  
  Now your avatar can hold onto the rifle properly.
  <details>
  <summary>Now the avatar holds the rifle more naturally</summary>
  
  <p></p>
  
  [Now the avatar holds the rifle more naturally](../../image_data/6a50e811673183270bd61e984d54bdfbde130e4ac5ffd715c73abb4c11c42bd3.md)
  
  ### Overview
  The image depicts a character model in a video game environment. The character is a female figure with blue hair tied up in a bun, wearing a pink hoodie and light blue jeans. She is holding a futuristic-looking weapon with both hands. The background suggests an outdoor setting with muted, purple-tinted lighting, possibly indicating a twilight or foggy atmosphere.
  
  ### Key Elements
  - **Character Model**: A female figure with blue hair in a bun, wearing a pink hoodie and light blue jeans.
  - **Weapon**: Held in both hands, the weapon has a sleek, modern design with a greenish glow near the barrel.
  - **Background**: Outdoor setting with muted purple lighting, suggesting a twilight or foggy environment. There are faint outlines of structures resembling a gate or fence in the distance.
  
  ### Visual Flow / Relationships
  The character is the most prominent visual element, positioned centrally in the frame. The weapon she holds is clearly secondary but significant as it is a focal point due to its design and glowing elements. The background is less detailed and serves as a subdued backdrop to highlight the character and her weapon.
  
  </details>
  
  <p></p>
  
  
  But the rifle still doesn’t do anything yet.

  ## Step 4: Add a hello world script

  You now have a rifle that you can pick up and move around with, but it still doesn’t do anything. In this section, you’ll make something happen when you fire the rifle. You’ll write code that prints “Hello World” in the **Console** whenever you fire the rifle.
- Open the **Scripts Panel** by clicking the **Scripts** tab.
  <details>
  <summary>Click the Scripts Panel drop-down</summary>
  
  <p></p>
  
  [Click the Scripts Panel drop-down](../../image_data/bcce54703002a2f253cc4f7045c1165f7fe6bd62ff42e0aac8652128818edacb.md)
  
  ### Overview
  This image depicts a user interface section of a software application, specifically highlighting a tab labeled "Scripts." The layout includes navigation options such as "Build," "Systems," "Preview," and "Gen AI." Below the tabs, there's a sidebar labeled "Hierarchy" with a search bar underneath it.
  
  ### Key Elements
  - **Tabs**: Located at the top of the interface. The "Scripts" tab is highlighted with a red bounding box.
    - **Visual description**: Rectangular shape with rounded corners.
    - **Location**: Top-center of the interface.
    - **Contents**: Text "Scripts" in white font.
    - **Visual styling**: Black background with white text, bordered by a red highlight.
  - **Navigation Menu**: Located in the top-left corner.
    - **Visual description**: Three horizontal lines indicating a menu icon.
    - **Location**: Left side of the interface.
    - **Contents**: Not explicitly shown but assumed to be a menu for additional options.
    - **Visual styling**: White icon on a black background.
  - **Sidebar**: Located on the left side of the interface.
    - **Visual description**: Dark gray background with white text.
    - **Location**: Left side of the interface.
    - **Contents**: Text "Hierarchy" and a search bar labeled "Search hierarchy."
    - **Visual styling**: White text on a dark gray background.
  - **Tool Buttons**: Located on the right side of the interface.
    - **Visual description**: Various icons representing different functions.
    - **Location**: Right side of the interface.
    - **Contents**: Icons include a blue cursor, a plus sign, a star, a gear, and a downward arrow.
    - **Visual styling**: White icons on a dark gray background.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Scripts" tab, which is highlighted. The navigation menu is secondary, providing additional options. The sidebar is for hierarchical organization, and the tool buttons offer quick access to various functions. The layout follows a standard top-to-bottom, left-to-right flow.
  
  </details>
  
  <p></p>
  
  
- Open the **Scripts in this world** dialog.
  <details>
  <summary>Click the Scripts in this world dropdown</summary>
  
  <p></p>
  
  [Click the Scripts in this world dropdown](../../image_data/310be9b468b92606df3b594276cdea9ce7b69ef5fec2e06ef5fa4a9de12cb7b3.md)
  
  ### Overview
  This image depicts a user interface section of a software application, specifically a menu bar or toolbar with various options and buttons. The focus is on a dropdown menu labeled "Scripts in this world."
  
  ### Key Elements
  - **Dropdown Menu**: Located in the center-left area, highlighted with a red bounding box. It has a dark gray background with white text that reads "{ } Scripts in this world". There is a downward-pointing arrow indicating a dropdown functionality.
  - **Menu Items**: To the right of the dropdown menu, there are additional menu items labeled "Script conflicts", "Script settings", and "Open in explorer". These items have a lighter gray background compared to the dropdown menu.
  - **Navigation Icons**: On the far left, there is a menu icon represented by three horizontal lines stacked vertically.
  - **Tabs**: At the top, there are tabs labeled "Build", "Systems", "Preview", and "Scripts". The "Scripts" tab is highlighted, suggesting it is the active tab.
  - **Gen AI Label**: In the upper right corner, there is a label "Gen AI" with a small icon resembling a dog's head.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the dropdown menu in the center-left. The dropdown arrow suggests that clicking it would reveal more options. The navigation icons and tabs are arranged horizontally at the top, providing a clear navigation path. The menu items to the right of the dropdown are aligned horizontally as well.
  
  </details>
  
  <p></p>
  
  
- Create a new script by clicking the plus button.
  <details>
  <summary>Click the + button</summary>
  
  <p></p>
  
  [Click the + button](../../image_data/ab9bf118cc74b1229d412ad4ffb3c09e543d11aabc6918bbefd007309f045ada.md)
  
  ### Overview
  This image depicts a user interface element within a software application, specifically a section related to scripting. The visual includes a search bar, a button for creating new scripts, and some additional settings options.
  
  ### Key Elements
  - **Search Bar**: Located at the top-left, it has a magnifying glass icon indicating a search function. The placeholder text reads "> Create new script".
  - **Plus Button**: Positioned next to the search bar, it is a simple plus sign (+) icon, likely for adding new items.
  - **Settings Icon**: A gear icon located to the right of the plus button, suggesting access to settings or preferences.
  - **More Options Menu**: Three vertical dots on the far right, typically indicating more options or a menu.
  - **Background**: The background is dark, possibly black or very dark gray, which contrasts with the lighter text and icons.
  
  ### Visual Flow / Relationships
  The most prominent visual is the search bar, as it is the largest and most central element. The plus button and settings icon are secondary but still important. The more options menu is less prominent but still noticeable. There are no arrows or lines connecting these elements, so the relationship is primarily spatial and hierarchical based on their placement.
  
  </details>
  
  <p></p>
  
  
- Name your script “Shoot”.
  <details>
  <summary>Enter Shoot and then press Enter</summary>
  
  <p></p>
  
  [Enter Shoot and then press Enter](../../image_data/72770473f41fb789743cac61f53421f01e9cd5498477fb502c7354d14992cdc3.md)
  
  ### Overview
  This image depicts a simple user interface element, specifically a text input field within a form or application interface. The field contains a placeholder text and a counter indicating the number of characters remaining out of a total limit.
  
  ### Key Elements
  - **Input Field**: A rectangular text box located centrally in the image. It has a dark gray background with a lighter gray border.
  - **Placeholder Text**: Inside the input field, the text "Shoot" is displayed in a light gray color.
  - **Counter**: Positioned to the right of the input field, showing "5/128". This indicates that the user can enter up to 128 characters.
  - **Clear Button**: A small 'X' icon located at the far right of the input field, suggesting the ability to clear the input.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the input field itself. The counter and clear button are secondary elements that provide additional functionality related to the input field. There are no arrows or lines connecting these elements, implying a linear reading order where users first interact with the input field before considering the counter and clear button.
  
  </details>
  
  <p></p>
  
  **Note:** It takes a few seconds for the script to appear after you’ve inputted the name.
- Open the script in VS Code. Click the menu icon next to the script name, and then select **Open in External Editor**.
  **Note:** Currently, scripts can only be opened in the aforementioned way, from the top dropdown menu.
  <details>
  <summary>Click the three vertical dots to see the menu</summary>
  
  <p></p>
  
  [Click the three vertical dots to see the menu](../../image_data/a9ce9190bab591a60d45f4f2fd62ebdf6a226ee0c386c422511a9a7019f2ee46.md)
  
  ### Overview
  This image depicts a small interface element, likely part of a software application or a web page, showing a file or project status bar. The bar contains text indicating the name of a file or project ("Shoot"), its save time ("Saved at 3:24:43 PM"), and a compilation status ("Compiled").
  
  ### Key Elements
  - **Visual description**: A rectangular bar with rounded corners.
  - **Location**: Top right corner of the image.
  - **Contents**: 
      - "Shoot" (project name)
      - "Saved at 3:24:43 PM"
      - "Compiled"
  - **Visual styling**: Dark background with light text for contrast. The text is in a sans-serif font.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the text indicating the project name and status. There are no arrows or lines connecting elements, suggesting a simple informational display without interactive components.
  
  </details>
  
  <p></p>
  
  <details>
  <summary>Oen the script in VS Code</summary>
  
  <p></p>
  
  [Oen the script in VS Code](../../image_data/a1a6ca370d1d0960c49f2b8fe8c28c0d7e04114e733971e8e033e60595f864d0.md)
  
  ### Overview
  This image depicts a screenshot of a user interface with a dark theme, likely from a software application. It shows a menu with three options listed vertically.
  
  ### Key Elements
  - **Visual description**: The elements are text labels within a dark background.
  - **Location**: The elements are arranged vertically in the center of the image.
  - **Contents**: 
      - "Recompile"
      - "Open in External Editor"
      - "Spawn New Gizmo"
  - **Visual styling**: The text is white, and the background is a dark grayish-black.
  
  ### Visual Flow / Relationships
  The elements are arranged in a vertical list, with no arrows or lines connecting them. The text is aligned to the left, and there is no implied reading order beyond the natural vertical arrangement.
  
  </details>
  
  <p></p>
  
  
  The new script opens in VS Code in a file called `Shoot.ts`. It contains boilerplate code.
  <details>
  <summary>This is the default structure of a TypeScript script</summary>
  
  <p></p>
  
  [This is the default structure of a TypeScript script](../../image_data/013d23db6a4b3186cc1b0926693468f3a4fd03b8dc9f6c2c7ec12d7588fb2a92.md)
  
  ### Overview
  This image shows a code snippet within a code editor interface. The content appears to be written in TypeScript, as indicated by the "TS" at the top left corner. The code defines a class named `Shoot` that extends another class (`hz.component`) and includes a static method `start`.
  
  ### Key Elements
  - **Visual description**: A code editor window with syntax highlighting.
  - **Location**: Top-left corner.
  - **Contents**: "TS Shoot.ts" indicating the file name.
  - **Visual styling**: Dark theme with syntax highlighting for keywords and comments.
  
  - **Visual description**: Code editor window with a light gray background.
  - **Location**: Main area of the image.
  - **Contents**: Code snippet starting with `import * as hz from 'horizon/core';`.
  - **Visual styling**: Light gray background, syntax highlighting for keywords and comments.
  
  - **Visual description**: Code editor window with a dark theme.
  - **Location**: Bottom-left corner.
  - **Contents**: "hz.Component.register(Shoot);".
  - **Visual styling**: Dark theme with syntax highlighting for keywords and comments.
  
  ### Visual Flow / Relationships
  - Most prominent visually: The code snippet itself.
  - Arrows, lines, connectors: None.
  - Spatial relationships: The code snippet is the central focus, with the file name at the top and the registration statement at the bottom.
  
  </details>
  
  <p></p>
  
  **Note:** The `start()` function is called whenever the entity that the script component is attached to is created. At this point though, you haven’t attached this script component to an entity.
- Add the following debug statement to the `start()` function. When the entity that this script component is attached to is created, this statement prints “Hello World!” to the **Console**.

  ```
  start() {
      console.log("Hello, World!");
  }
  ```
- Save the script file. You can press “Ctrl+S”.
- In the desktop editor, attach your script component to the rifle entity.
  a. Select the Rifle object from the Hierarchy.
  b. In the Properties pane, scroll down to the **Scripts** section.
  <details>
  <summary>Click the drop-down selection list to see your script</summary>
  
  <p></p>
  
  [Click the drop-down selection list to see your script](../../image_data/4aec765875f43752d2290ebf07530ef20e208ac1c9a232b4c833d9bc6d5176f0.md)
  
  ### Overview
  This image depicts a user interface element showing a script attachment status within a software application. The layout includes a header indicating the presence of a script, followed by a dropdown menu showing the current selection status.
  
  ### Key Elements
  - **Header**: Located at the top-left corner, labeled as "Script."
  - **Dropdown Menu**: Positioned to the right of the header, displaying the text "Attached Script" and a dropdown arrow indicating a selection can be made.
  - **Status Indicator**: Below the header, the word "None" is displayed next to a dropdown arrow, suggesting that no script has been attached yet.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the dropdown menu, which draws attention due to its placement and the dropdown arrow indicating interactivity. The header provides context, while the status indicator clearly communicates the current state of the script attachment.
  
  </details>
  
  <p></p>
  
  
  c. Attach the script component by selecting “Shoot:Shoot” from the **Attached Script** drop-down selection list.
  <details>
  <summary>Click on Shoot:Shoot</summary>
  
  <p></p>
  
  [Click on Shoot:Shoot](../../image_data/d5bbebdde2a809c6a436b2c709efb02bc0e1463a07b526e50a359ea83f409fcf.md)
  
  ### Overview
  This image depicts a portion of a user interface, specifically a dropdown menu item selection area. The focus is on a single option labeled "Shoot:Shoot" which has been clicked, as indicated by the highlighted cursor.
  
  ### Key Elements
  - **Visual description**: A rectangular button with rounded corners.
  - **Location**: Positioned centrally within the image.
  - **Contents**: Contains the text "Shoot:Shoot" in a sans-serif font.
  - **Visual styling**: The button has a light gray background with a darker gray border. The text is black, and there is a small downward-pointing arrow icon next to the text indicating a dropdown functionality.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Shoot:Shoot" button.
  - **Spatial relationships**: The button is surrounded by a faint shadow effect, suggesting a slight elevation above the background. There are no connecting lines or arrows, implying a simple linear interaction sequence.
  
  </details>
  
  <p></p>
  
  
- Preview your world by clicking the Play button on the menu bar.
  As soon as the Rifle entity is created, the script prints “Hello, World!” to the **Console**.
- End the preview by pressing Escape twice.
- You can see the debug message by clicking the **Console** tab at the bottom of the page.
  <details>
  <summary>Hello World! appears down at the bottom of the Message list</summary>
  
  <p></p>
  
  [Hello World! appears down at the bottom of the Message list](../../image_data/358d479db7710df0122efe8cb573ea9382f754327b3a9a11c530196025035542.md)
  
  ### Overview
  This image depicts a console interface within a software application, likely a development environment or IDE. The console displays messages related to TypeScript compilation and script execution. The layout includes a header, a message area with log entries, and a navigation bar at the top.
  
  ### Key Elements
  - **Header**: Located at the very top, the header reads "Console". It has a dark background with white text.
  - **Navigation Bar**: Below the header, there is a navigation bar with options such as "Simulation View", "Clear", and "System". These elements have a light gray background with black text.
  - **Message Area**: This occupies the majority of the console view. It contains log entries with timestamps, icons, and text indicating successful TypeScript compilation and script re-execution. The entries are displayed in alternating light and dark gray backgrounds for readability.
  - **Timestamps**: Each entry includes a timestamp in the format "16:42:18".
  - **Log Entries**: Text entries include messages like "TypeScript compilation has completed successfully." and "[User] Hello, World!."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the message area, which contains the log entries. The navigation bar is less prominent but serves as a control panel for the console functionality. There are no arrows or lines connecting elements, so the visual flow is primarily linear, moving from the header down through the message area.
  
  </details>
  
  <p></p>
  
  
  You’ve made your world interactive. The script outputs the message “Hello, World!” to the **Console**.

  ## Step 5: Refine your script

  But you really want the interaction to occur when you pull the trigger, not simply when the rifle is created. In this section, you’ll revise your script to print a message when you pull the trigger. When the rifle is created, an event is also created that fires each time you pull the trigger.
- Replace the code in the `start()` function with the following code:

  ```
  start() {
      // React to an event when the user pulls the trigger.
      this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, (player: hz.Player) => {
          console.log("boom!");
      });
  }
  ```
- Save your script.
  When editing your script, errors might appear in the **Console**. When this happens, you can clear the error messages from the **Console** by clicking **Clear**.
  <details>
  <summary>You can clear the error messages</summary>
  
  <p></p>
  
  [You can clear the error messages](../../image_data/641ee1df024e578e56294ab844fb8b8f225b6044ad8dcee752a4f376294d1d13.md)
  
  ### Overview
  This image depicts a user interface element within a console or messaging application. It shows a section with various indicators and a button labeled "Clear."
  
  ### Key Elements
  - **Visual description**: A rectangular panel with rounded corners.
  - **Location**: Top-left corner of the image.
  - **Contents**: Contains a button labeled "Clear," a counter for messages ("i 13"), a warning icon ("⚠️"), and a red circle with a white "0" indicating no errors.
  - **Visual styling**: The button has a light gray background with a darker gray border. The counter and icon are white with black text and symbols.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Clear" button.
  - **Arrows/lines/connectors**: None visible.
  - **Spatial relationships**: The "Clear" button is adjacent to the message counter and error indicators.
  
  </details>
  
  <p></p>
  
  **Note:** Normally, you shouldn’t see any error messages in the **Console** window. If you do though, then try copying and pasting the code instead of typing it yourself.
- Preview your world by clicking the Play button.
- Walk over to the rifle and grab it.
- Fire the rifle several times by clicking the **A** button on the screen. As you fire the rifle, notice that a “boom!” message appears in the **Console** window along with the number of times that the message appeared.
  <details>
  <summary>Look at all the booms!</summary>
  
  <p></p>
  
  [Look at all the booms!](../../image_data/fb100bfa9413579e6e4f2f2f123a29f570e3d5a4ae486b0f52ed7a9dcbef5beb.md)
  
  ### Overview
  This image depicts a user interface element, specifically a console or message display area within a software application. The layout includes a header, a message content area, and some interactive elements.
  
  ### Key Elements
  - **Header**: Located at the top, labeled "Console". It has a black background with white text.
  - **Clear Button**: Positioned to the left of the header, with a light gray background and white text that reads "Clear".
  - **Message Content Area**: Below the header, containing a message with a blue background. The message text starts with "[server] boom..." and includes a timestamp "16:53:18".
  - **Interactive Elements**: 
    - A small icon resembling a lowercase 'i' with a blue background and white text "i".
    - A number "3" displayed in a red circle with a yellow triangle warning symbol.
    - Two circular icons with red backgrounds and white text "0" next to them.
  - **Message Footer**: Below the message content area, there is a footer with a dark gray background. It contains a smaller "i" icon similar to the one above, but with a lighter background and text "i".
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Console" header at the top. The message content area is below it, and the interactive elements are arranged horizontally beneath the message. The footer is positioned at the bottom of the message content area.
  
  </details>
  
  <p></p>
  
  
- End the simulation by pressing Escape.

  ## Step 6: Add a projectile launcher to the rifle

  You now have a rifle that you can pick up and carry around, but it doesn’t actually do anything except print debug messages. In this section, you’ll make the rifle launch projectiles.
- Select the Rifle from the Hierarchy.
- Focus on the Rifle in the scene by pressing the “F” key.
- Click the **Build** button.
  <details>
  <summary>Click the drop-down button</summary>
  
  <p></p>
  
  [Click the drop-down button](../../image_data/50a6e451480f1ab874c6dd924725e382bb5960dfb5a2769a0d5766d8b3bb1f63.md)
  
  ### Overview
  This image depicts a user interface section of a software application, likely related to game development or asset management, given the presence of terms like "Build," "Systems," "Preview," and "Scripts." The interface includes navigation elements, a search bar, and tool icons.
  
  ### Key Elements
  - **Navigation Bar**: Located at the top, spans the width of the interface. Contains a menu icon on the far left, followed by tabs labeled "Build," "Systems," "Preview," and "Scripts." The "Build" tab is highlighted with a red bounding box.
  - **Hierarchy Section**: Below the navigation bar, there's a section labeled "Hierarchy" with a downward arrow indicating expandable content. A search bar is present beneath this section.
  - **Tool Icons**: On the right side, there are several icons representing different tools or functions, such as a cursor, plus sign, star, and others. These icons are arranged horizontally.
  - **Search Bar**: Positioned below the "Hierarchy" section, it contains the placeholder text "Search hierarchy."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Build" tab, which is emphasized by the red bounding box. The hierarchy section is below the navigation bar, and the tool icons are to the right. The search bar is situated beneath the hierarchy section. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from left to right and then down.
  
  </details>
  
  <p></p>
  
  
- Select **Projectile Launcher** from Interactions.
  <details>
  <summary>The icon for the projectile launcher gizmo</summary>
  
  <p></p>
  
  [The icon for the projectile launcher gizmo](../../image_data/3e8f7e4e91a8b6dc66c2563d1742fc454f46b07b1c9dc87474fcf2b362df4f2b.md)
  
  ### Overview
  The image depicts a simple icon with a stylized design. It consists of a dark blue background with a white, abstract shape resembling a stylized letter 'R' or a rocket ship.
  
  ### Key Elements
  - **Visual description**: The icon features a white, abstract shape against a dark blue background.
  - **Location**: The icon is centered within the image.
  - **Contents**: The white shape has a smooth, rounded form with a slight curve at the bottom, giving it a dynamic look.
  - **Visual styling**: The background is solid dark blue (#00008B), and the shape is white (#FFFFFF).
  
  ### Visual Flow / Relationships
  There are no additional elements or relationships depicted in this image. The icon stands alone as the focal point.
  
  </details>
  
  <p></p>
  
  
  The **Projectile Launcher** gizmo appears in the scene, and in the Hierarchy. Pressing the “F” key while the object is selected brings the object to focus.
- Close the **Build** panel.
- Attach the ProjectileLauncher to the Rifle by making it a child of the Rifle. In the Hierarchy, drag the projectile launcher, and drop it onto the Rifle.
  <details>
  <summary>Drag and drop</summary>
  
  <p></p>
  
  [Drag and drop](../../image_data/64b32d31f1e1ec5c6dfa588c758efc31daafa19b95dd6f7a059a3ec71af09f68.md)
  
  ### Overview
  This image depicts a user interface element showing a dropdown menu with two options: "Rifle" and "ProjectileLauncher". The menu is partially open, revealing the second option, which is highlighted. There is also a small icon next to the "ProjectileLauncher" option.
  
  ### Key Elements
  - **Visual description**: The dropdown menu has a rectangular shape with rounded corners.
  - **Location**: The dropdown menu is located in the center of the image, extending horizontally from the left side.
  - **Contents**: 
    - **"Rifle"**: Located at the top of the dropdown menu.
    - **"ProjectileLauncher"**: Located below "Rifle", highlighted with a black background and white text.
    - **Icon**: A small icon resembling a swan is positioned to the right of "ProjectileLauncher".
  - **Visual styling**: The background of the dropdown menu is dark gray (#333333). The text color is white (#FFFFFF). The highlighted option has a black background (#000000).
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "ProjectileLauncher" option is the most prominent due to its highlighted state.
  - **Arrows/lines/connectors**: There are no arrows, lines, or connectors visible in the image.
  - **Spatial relationships**: The options are arranged vertically within the dropdown menu. The icon is positioned to the right of the "ProjectileLauncher" option.
  
  </details>
  
  <p></p>
  
  
  The ProjectileLauncher should appear indented in the hierarchy since it’s now a child object of the Rifle object. You can expand the hierarchy by clicking the triangle.
  <details>
  <summary>It's now one of the Rigle's children</summary>
  
  <p></p>
  
  [It's now one of the Rigle's children](../../image_data/7fac6ec6805f5acd16f8f22d00cb20ecb89a9253245c556a921d9ffb6a43e890.md)
  
  ### Overview
  This image depicts a portion of a user interface, likely from a file explorer or directory listing application. It shows a tree-like structure with expandable nodes, indicating a hierarchical folder structure.
  
  ### Key Elements
  - **Visual description**: The elements are nodes in a tree view.
  - **Location**: These nodes are arranged vertically.
  - **Contents**: Each node contains text labels.
  - **Visual styling**: The nodes have a blue background with white text and a darker blue border.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The nodes are the primary focus.
  - **Arrows/lines/connectors**: There are small arrow icons next to some nodes, suggesting expandable content.
  - **Spatial relationships**: Nodes are stacked vertically, with the top node partially expanded to reveal its contents.
  
  </details>
  
  <p></p>
  
  
  With the ProjectileLauncher selected in the Hierarchy, position it relative to the Rifle.
- Adjust the Position values of the projectile so it aligns with the aim of the rifle.
  <details>
  <summary>Align the projectile with the rifle</summary>
  
  <p></p>
  
  [Align the projectile with the rifle](../../image_data/a462d32babde0173488b3527b1d64ba4757c1287fa0f2595c810dc0fdceb2abb.md)
  
  ### Overview
  The image depicts a scene from a video game or simulation environment. It features a blue cube with axes and a gun positioned near a stone wall. The background includes a dimly lit room with furniture and a fireplace.
  
  ### Key Elements
  - **Blue Cube**: A large, transparent cube with axes marked by red, green, and blue arrows. The cube is centered in the image.
  - **Axes**: Red, green, and blue arrows indicating the x, y, and z axes respectively.
  - **Gun**: A firearm with a scope is located to the right of the cube. It has a black body with some metallic parts.
  - **Stone Wall**: A textured stone wall is situated to the right of the gun.
  - **Background**: The setting appears to be indoors, with a fireplace and wooden furniture visible in the distance.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the blue cube. The gun is secondary but noticeable due to its size and position. The stone wall acts as a boundary between the foreground objects and the background. There are no explicit arrows or lines connecting elements, suggesting a static scene without dynamic interaction.
  
  </details>
  
  <p></p>
  
  
  These adjustments in settings ensure that the projectile launcher appears at the front of the rifle, and that projectiles fire in the forward direction.
  Additionally, to make the projectiles easier to see, adjust **Scale** and **Trail Length Scale** based on your preference.
  Everything is now hooked up. Next, you’ll edit the code to make the rifle interactive.

  ### Section 7: Hook up the projectile launcher

Earlier in this tutorial, you got a debug message to appear when you pulled the trigger on the rifle. In this section, you’ll update your script to use the projectile launcher whenever you pull the trigger.

- To use the projectile launcher, you need to reference it in your script. Update the **Shoot** class’s **propsDefinition** with the following statement:

  ```
  class Shoot extends hz.Component<typeof Shoot> {

      static propsDefinition = {
          launcher: {type: hz.PropTypes.Entity}
      };
  ```
- Add a statement to the `start()` function that creates a reference to the projectile launcher gizmo.

  ```
  start() {

      // Store a reference to the projectile gizmo in the launcherGizmo variable.
      let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);
  ```

  With a reference to the `launcherGizmo`, you can call a function on it (`launchProjectile()`) to launch a projectile whenever you pull the trigger.
- Add a statement just before the `start()` function that adds a property for holding the launcher options.

  ```
  // The options to use when launching the projectile.
  launcherOptions: hz.LaunchProjectileOptions = {speed: 50};
  ```
- Add a statement to the **OnIndexTriggerDown** event for launching a projectile.

  ```
  start() {

      // Store a reference to the projectile gizmo in the launcherGizmo variable.
      let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);

      // Handle the OnIndexTriggerDown event when the user pulls the trigger.
      this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, (player: hz.Player) => {
          console.log("boom!");
          launcherGizmo?.launch(this.launcherOptions);
      });
  }
  ```

  This change made it so that when the Rifle is created, you hook it up to the trigger, but now this event asks the projectile launcher gizmo to launch a projectile instead of just printing “boom”.
- Save your script.
- In the desktop editor, select the Rifle object from the Hierarchy.
- In the Property pane, scroll down to the **Scripts** section. Notice that there is now a `launcher` property that you can set. This property appears because you added it to the `propsDefinition` in your script.

  <details>
  <summary>There is a launcher property in the property panel</summary>
  
  <p></p>
  
  [There is a launcher property in the property panel](../../image_data/a0a830198459bdedb05cde4c863ffdb0c695eb3d4c68f487b55c1990da552ae6.md)
  
  ### Overview
  This image depicts a user interface element, specifically a dropdown menu within a script editor. The interface includes a header labeled "Script," followed by a dropdown menu labeled "Attached Script."
  
  ### Key Elements
  - **Header ("Script")**: Located at the top-left corner. It is a simple text label with no additional elements.
  - **Dropdown Menu ("Attached Script")**: Positioned below the header. It contains the text "Shoot:Shoot" and a downward-pointing arrow indicating that more options can be accessed by clicking.
  - **Dropdown Options**: The dropdown menu has a single visible option labeled "Shoot:Shoot." There is also a placeholder text "None (Object)" suggesting that the dropdown is currently empty or no object is attached.
  - **Launcher Button**: Below the dropdown menu, there is a button labeled "launcher" with a small circular icon next to it. The icon appears to be a gear, typically representing settings or configuration.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the dropdown menu, as it is the largest and most central feature. The dropdown is adjacent to the header but slightly below it. The launcher button is positioned directly below the dropdown, creating a vertical sequence of elements. There are no arrows or lines connecting the elements, so the relationship is purely sequential.
  
  </details>
  
  <p></p>
  
  

  **Note:** You might have to deselect and then reselect the Rifle object if this new property doesn’t appear.
- Set this **launcher** property to the **ProjectileLauncher** object. Click on the field beside **launcher**, and then select **ProjectileLauncher** from the list that appears.

  <details>
  <summary>Select ProjectileLauncher</summary>
  
  <p></p>
  
  [Select ProjectileLauncher](../../image_data/8275a0e82211f311ff3158b52bd8ce7f4d09cd4e12cf51d9cb10896edf99526c.md)
  
  ### Overview
  This image depicts a user interface element, specifically a dropdown menu or list view within a software application. The list contains items that appear to be named components or objects, such as "Rifle," "WpnIndicatorA," "WpnBodyA," and "ProjectileLauncher." The focus is on the "ProjectileLauncher" item, which has been clicked, as indicated by the highlighted cursor.
  
  ### Key Elements
  - **Visual description**: The list items are rectangular with rounded corners.
  - **Location**: The list items are arranged vertically.
  - **Contents**: Each item displays a small icon followed by a label.
      - **"Rifle"**: Icon resembling a rifle, label "Rifle."
      - **"WpnIndicatorA"**: Icon resembling a weapon indicator, label "WpnIndicatorA."
      - **"WpnBodyA"**: Icon resembling a weapon body, label "WpnBodyA."
      - **"ProjectileLauncher"**: Icon resembling a projectile launcher, label "ProjectileLauncher."
  - **Visual styling**: The background is dark gray, and the text is white. The icons are smaller and located to the left of the labels.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "ProjectileLauncher" item is highlighted, indicating it is currently selected or hovered over.
  - **Arrows, lines, connectors**: There are no arrows, lines, or connectors visible in this image.
  - **Spatial relationships**: Items are stacked vertically, with the "ProjectileLauncher" item being the focal point due to its highlighted state.
  
  </details>
  
  <p></p>
  
  
- Preview your world by clicking the Play button.
- Walk over to the rifle, grab it, and then click the mouse button. Notice what happens, a shot appears to come out of the rifle when you pull the trigger. Next, you’ll update your script to accumulate points whenever the player hits the target.

  <details>
  <summary>A shot appears to come out of the rifle</summary>
  
  <p></p>
  
  [A shot appears to come out of the rifle](../../image_data/521c899b4ca4f6cd2aa49a672658e76929cc680129b723826b7e6ddda536549a.md)
  
  ### Overview
  The image depicts a 3D-rendered character from behind, holding a small device that resembles a camera or a handheld device. The character has blue hair tied up in a bun and is wearing a pink hoodie. The background features a gradient sky transitioning from purple at the top to pink near the horizon, with a faint white streak resembling a meteor or comet. The ground is a flat, light gray surface.
  
  ### Key Elements
  - **Character**: A 3D-rendered figure with blue hair tied up in a bun, wearing a pink hoodie. The character is facing away from the viewer.
  - **Device**: A small rectangular object held in the character's hands, resembling a camera or handheld device. It has a green screen-like display.
  - **Sky**: A gradient background transitioning from dark purple at the top to pink near the horizon. There is a faint white streak resembling a meteor or comet.
  - **Ground**: A flat, light gray surface.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the character, as they are the focal point of the image. The device is held in front of the character, suggesting interaction or observation. The sky serves as a backdrop, with the meteor adding a dynamic element to the scene. The ground is plain and does not interact with any other elements.
  
  </details>
  
  <p></p>
  
  
- Exit Preview mode by pressing Escape.

### Section 8: Count points whenever you hit the target

In this section, you’ll update the script so that you score a point each time you hit the target.

- In the desktop editor, select the SpawnPoint in the Hierarchy.
- Click **Asset Library** > **Public Assets** under the Scene pane.
- In the Search field, enter “skeletoncrayta” to find the skeleton.

  <details>
  <summary>Pirate skeleton</summary>
  
  <p></p>
  
  [Pirate skeleton](../../image_data/6f1c0c630805b78655c32d885ec497ce498e7aa658c829448a98f718fa427026.md)
  
  ### Overview
  The image depicts a small, stylized icon featuring a humanoid figure with a mechanical or robotic design. The figure has a blue skull-like head and a metallic body with visible joints and limbs. The background is a light gray gradient, giving the impression of a simple, possibly futuristic or sci-fi theme.
  
  ### Key Elements
  - **Visual description**: The humanoid figure is the central element.
  - **Location**: Positioned centrally within the image.
  - **Contents**: The figure has a blue skull head, metallic limbs, and a body with visible joints.
  - **Visual styling**: The figure is rendered in a metallic silver color with blue accents for the skull and some parts of the body. The background is a light gray gradient.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The humanoid figure.
  - **Spatial relationships**: The figure is isolated against a plain background with no additional elements or connections.
  
  </details>
  
  <p></p>
  
  

  A skeleton object named [UnityAssetBundleGizmo](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/unity-assetbundles/horizon-unity-assetbundles-overview) is added to your Hierarchy, and appears in your scene.
- Rename the skeleton object from “UnityAssetBundleGizmo” to “Target”.
- Position the target anywhere in the scene.
- Update your script so that whenever a projectile hits an object, a point is added to your score. You’ll need to add a variable to track the current point value, and to initialize its value to zero. Add the following statement near the top of your class, just above the `start()` function.

  ```
  // Keep track of the user's score.
  points: number = 0;
  ```
- Add another event listener inside the `start()` function that fires whenever a projectile hits an object. Copy the following statements to the end of the `start()` function.

  ```
  if (launcherGizmo) {
           this.connectCodeBlockEvent(
               launcherGizmo,
               hz.CodeBlockEvents.OnProjectileHitObject,
               (objectHit: hz.Entity, position: hz.Vec3, normal: hz.Vec3) => {
                   this.points = this.points + 1;
                   console.log("You're up to " + this.points + ' points!');
               },
           );
       }
  ```

  Your complete Shoot script should now look like this.

  ```
  import * as hz from 'horizon/core';

  class Shoot extends hz.Component<typeof Shoot> {
    static propsDefinition = {
      launcher: {type: hz.PropTypes.Entity},
    };

    // The options to use when launching the projectile.
    launcherOptions: hz.LaunchProjectileOptions = {speed: 50};

    // Keep track of the user's score.
    points: number = 0;

    start() {
      // Store a reference to the projectile gizmo in the launcherGizmo variable.
      let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);

      // Handle the OnIndexTriggerDown event when the user pulls the trigger.
      this.connectCodeBlockEvent(
        this.entity,
        hz.CodeBlockEvents.OnIndexTriggerDown,
        (player: hz.Player) => {
          console.log('boom!');
          launcherGizmo?.launch(this.launcherOptions);
        },
      );

      if (launcherGizmo) {
           this.connectCodeBlockEvent(
               launcherGizmo,
               hz.CodeBlockEvents.OnProjectileHitObject,
               (objectHit: hz.Entity, position: hz.Vec3, normal: hz.Vec3) => {
                   this.points = this.points + 1;
                   console.log("You're up to " + this.points + ' points!');
               },
           );
       }
    }
  }

  hz.Component.register(Shoot);
  ```
- Save your script.
- Test your world.

  - In the desktop editor, select the **Console** tab at the bottom of the screen.
  - Click the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.
  - Walk over to the rifle, pick it up, and then fire several shots at the skeleton.

    <details>
    <summary>Every time to hit the target, the score increments</summary>
    
    <p></p>
    
    [Every time to hit the target, the score increments](../../image_data/5b158b25d52a35717d12f1359e0bb8be9be1a240500a7609125cbf74dc765247.md)
    
    ### Overview
    This image depicts a scene from a video game or simulation environment. The central focus is on a character standing in a courtyard-like area, facing away from the viewer. There is another character in the background, dressed in a skeleton-like outfit. The interface at the bottom suggests this is a development or testing environment, as indicated by the tabs labeled "Assets," "Console," and "Tests."
    
    ### Key Elements
    - **Foreground Character**: A character wearing a pink hoodie and blue pants, holding a device in their right hand. Located centrally in the image.
    - **Background Character**: A skeleton-like figure standing near a stone pillar. Positioned towards the right side of the image.
    - **Circular Interface Element**: A circular element resembling a controller or selection indicator, located at the bottom left.
    - **Interface Tabs**: Tabs labeled "Assets," "Console," and "Tests" are visible at the bottom of the screen.
    - **Chat Window**: A chat window displaying messages from users, with timestamps indicating server communication. Located at the bottom left.
    
    ### Visual Flow / Relationships
    The most prominent visual element is the foreground character, as they are the focal point of the image. The background character adds depth to the scene. The circular interface element draws attention due to its central placement and distinct shape. The chat window provides contextual information about user interactions within the game or simulation.
    
    </details>
    
    <p></p>
    
    

    Every time you hit the skeleton, a message prints to the **Console** that tells you how many points you’ve scored. If a shot doesn’t hit the skeleton, then the console message simply doesn’t appear.

### Section 9: Display the score

In this section, you’ll revise your script so that the score appears in the game.

- Add a **Text** gizmo to your scene.

  - Click the **Build** panel.

    <details>
    <summary>Build an entity</summary>
    
    <p></p>
    
    [Build an entity](../../image_data/50a6e451480f1ab874c6dd924725e382bb5960dfb5a2769a0d5766d8b3bb1f63.md)
    
    ### Overview
    This image depicts a user interface section of a software application, likely related to game development or asset management, given the presence of terms like "Build," "Systems," "Preview," and "Scripts." The interface includes navigation elements, a search bar, and tool icons.
    
    ### Key Elements
    - **Navigation Bar**: Located at the top, spans the width of the interface. Contains a menu icon on the far left, followed by tabs labeled "Build," "Systems," "Preview," and "Scripts." The "Build" tab is highlighted with a red bounding box.
    - **Hierarchy Section**: Below the navigation bar, there's a section labeled "Hierarchy" with a downward arrow indicating expandable content. A search bar is present beneath this section.
    - **Tool Icons**: On the right side, there are several icons representing different tools or functions, such as a cursor, plus sign, star, and others. These icons are arranged horizontally.
    - **Search Bar**: Positioned below the "Hierarchy" section, it contains the placeholder text "Search hierarchy."
    
    ### Visual Flow / Relationships
    The most prominent visual element is the "Build" tab, which is emphasized by the red bounding box. The hierarchy section is below the navigation bar, and the tool icons are to the right. The search bar is situated beneath the hierarchy section. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from left to right and then down.
    
    </details>
    
    <p></p>
    
    
  - Select **Text**.

    <details>
    <summary>Select the Text icon</summary>
    
    <p></p>
    
    [Select the Text icon](../../image_data/39be8fc7f0fbf89661c1d65c25491a167f4537e28fac6b271fa265c519c14851.md)
    
    ### Overview
    This image depicts a simple interface element consisting of a text label and a text field. The layout is minimalistic, with the text field positioned below the label.
    
    ### Key Elements
    - **Visual description**: A rectangular text field with rounded corners.
    - **Location**: Below the label.
    - **Contents**: Contains the word "Text".
    - **Visual styling**: Light gray background, dark gray border, and white text.
    
    - **Visual description**: A label with a large "T" symbol.
    - **Location**: Top-left corner.
    - **Contents**: The letter "T".
    - **Visual styling**: Dark gray background, white text, and a subtle shadow effect.
    
    ### Visual Flow / Relationships
    - **Most prominent visually**: The text field containing "Text".
    - **Spatial relationships**: The label is positioned above the text field, indicating that the text field is meant to receive input related to the label.
    
    </details>
    
    <p></p>
    
    

    A **Text** gizmo is added to the scene.
  - Position the **Text** gizmo within the scene so that you can read the score while you’re shooting at the target.

    <details>
    <summary>Position the Text gizmo so you can read the score</summary>
    
    <p></p>
    
    [Position the Text gizmo so you can read the score](../../image_data/3e077ddadbab54392f62d77990c80fe33f79145b6b8853c68237da31024d3117.md)
    
    ### Overview
    This image depicts a scene from a video game or virtual environment. It features two characters standing in a desolate, purple-hued landscape with floating cubes and a tree in the background. The overall composition suggests a fantasy or sci-fi setting.
    
    ### Key Elements
    - **Character A**: Located towards the left side of the image, wearing dark clothing with a hood. The character is facing slightly towards the right.
    - **Character B**: Positioned further back and to the right, appearing as a translucent blue figure with a white face, seemingly gesturing or pointing towards Character A.
    - **Floating Cubes**: There are several small, white cubes scattered around the scene, some near the characters and others floating in mid-air.
    - **Background**: The backdrop includes a large, dark tree and a wall with a gate, set against a purple sky with faint clouds.
    
    ### Visual Flow / Relationships
    The most prominent visual elements are the characters and the floating cubes. The characters are positioned to interact with each other, while the cubes add a sense of dynamic movement. The background elements provide context but are less central to the interaction.
    
    </details>
    
    <p></p>
    
    

    You’ll need to rotate the **Text** gizmo so that the text displays in the correct orientation.
- Update your script to use the **Text** gizmo. Remember, if you want to reference an entity property within a script, then you need to add that property to the `propsDefinition`. Add a `scoreView` property to `propsDefinition`.

  ```
  static propsDefinition = {
      launcher: {type: hz.PropTypes.Entity},
      scoreView: {type: hz.PropTypes.Entity}
  };
  ```
- To be able to use the `scoreView` property, you need a reference to `scoreView` as its specific type: `TextGizmo`. Store a reference to the `scoreGizmo` object in your `start()` function.

  ```
  // Store a reference to scoreView as its specific type: TextGizmo.
  let scoreGizmo = this.props.scoreView?.as(hz.TextGizmo);
  ```
- Update the scoreboard text by adding a single statement beneath the `console.log` statement that calls the `scoreGizmo.text.set()` function.

  ```
  this.connectCodeBlockEvent(
    launcherGizmo,
    hz.CodeBlockEvents.OnProjectileHitObject,
    (objectHit: hz.Entity, position: hz.Vec3, normal: hz.Vec3) => {
       this.points = this.points + 1;
       console.log("You're up to " + this.points + ' points!');
       scoreGizmo?.text.set(this.points + ' points');
    },
  );
  ```
- Save your script.

  Your complete script should now look like this.

  ```
  import * as hz from 'horizon/core';

  class Shoot extends hz.Component<typeof Shoot> {
    static propsDefinition = {
      launcher: {type: hz.PropTypes.Entity},
      scoreView: {type: hz.PropTypes.Entity},
    };

    // The options to use when launching the projectile.
    launcherOptions: hz.LaunchProjectileOptions = {speed: 50};

    // Keep track of the user's score.
    points: number = 0;

    start() {
      // Store a reference to the projectile gizmo in the launcherGizmo variable.
      let launcherGizmo = this.props.launcher?.as(hz.ProjectileLauncherGizmo);

      // Store a reference to scoreView as its specific type: TextGizmo.
      let scoreGizmo = this.props.scoreView?.as(hz.TextGizmo);

      // Handle the OnIndexTriggerDown event when the user pulls the trigger.
      this.connectCodeBlockEvent(
        this.entity,
        hz.CodeBlockEvents.OnIndexTriggerDown,
        (player: hz.Player) => {
          console.log('boom!');
          launcherGizmo?.launch(this.launcherOptions);
        },
      );

      if (launcherGizmo) {
          this.connectCodeBlockEvent(
              launcherGizmo,
              hz.CodeBlockEvents.OnProjectileHitObject,
              (objectHit: hz.Entity, position: hz.Vec3, normal: hz.Vec3) => {
                  this.points = this.points + 1;
                  console.log("You're up to " + this.points + ' points!');
                  scoreGizmo?.text.set(this.points + ' points');
              },
          );
      }
    }
  }

  hz.Component.register(Shoot);
  ```
- In the desktop editor, select the Rifle object from the Hierarchy.
- Scroll to the **Scripts** section of the **Property** panel. Since you added `scoreView` to `propsDefinition` in your script, this property now appears in the **Scripts** section of the **Property** panel.

  <details>
  <summary>The scoreView property appears in the property panel</summary>
  
  <p></p>
  
  [The scoreView property appears in the property panel](../../image_data/afaa08b4cab4acdb6aa08f9844332a449872dbbecbc8003f6e245c948d3cc083.md)
  
  ### Overview
  This image depicts a user interface element, specifically a settings or configuration panel related to a script. The layout includes a header, a dropdown menu, and some input fields.
  
  ### Key Elements
  - **Header**: Located at the top-left corner, labeled "Script". It has a dark gray background with white text.
  - **Dropdown Menu**: Positioned to the right of the header, with a dark gray background and white text. The text reads "Attached Script" followed by a dropdown arrow indicating a selection can be made.
  - **Dropdown Selection**: Below the dropdown menu, the selected option is displayed as "Shoot:Shoot".
  - **Input Fields**: Two input fields are present below the dropdown. The first field is labeled "launcher" with a placeholder text "ProjectieLafun..." truncated due to length. The second field is labeled "scoreView" with the value "None (Object)" displayed.
  - **Icons**: A small icon resembling a person is placed next to the "launcher" field.
  - **Background**: The overall background is a light gray, providing contrast to the darker elements.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the dropdown menu, as it is the focal point of interaction. The input fields are secondary elements, arranged vertically beneath the dropdown. There are no arrows or lines connecting elements, suggesting a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  

  **Note:** You might have to deselect the Rifle, and then reselect it if this new property doesn’t appear.
- Set the value of `scoreView` to the Text gizmo that you added to the scene. Click the drop-down selector beside the label **scoreView**, and select “Text”.

  <details>
  <summary>Set the value to the Text gizmo</summary>
  
  <p></p>
  
  [Set the value to the Text gizmo](../../image_data/e636e18d176ab305767a00dbf28f3b40a6a0cb2bd4fdcf926a8cbb8147ed14d8.md)
  
  ### Overview
  This image depicts a user interface element, specifically a control or setting area within a software application. It includes a label, a toggle switch, and a small icon.
  
  ### Key Elements
  - **Label ("scoreView")**: Located at the top-left corner. The text is in a light gray color against a dark background.
  - **Toggle Switch**: Positioned to the right of the label. It has a dark gray background with a lighter gray handle that can be moved to change its state.
  - **Icon**: A small circular icon with a white border and a black center, located next to the toggle switch.
  
  ### Visual Flow / Relationships
  The toggle switch is the most prominent element due to its central placement and distinct shape. The label is positioned above the toggle switch, indicating that the toggle switch likely controls the "scoreView" setting. There are no arrows or lines connecting elements, suggesting a simple linear interaction flow.
  
  </details>
  
  <p></p>
  
  
- Test your world.

  - In the desktop editor, select the **Console** tab at the bottom of the screen.
  - Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the rifle.
  - Walk over to the rifle and grab it, and use it to take several shots at the skeleton.

    <details>
    <summary>Rack up some points by shooting the target</summary>
    
    <p></p>
    
    [Rack up some points by shooting the target](../../image_data/0d88f6dfa9db8817be4c00879d38c9e9ca39422527fa9a2c3c5361eab7e4522b.md)
    
    ### Overview
    This image depicts a scene from a video game or virtual environment. It features two characters in a third-person perspective, with one character in the foreground and another in the background. The setting appears to be an outdoor area with stone structures resembling ancient ruins.
    
    ### Key Elements
    - **Foreground Character**: A character with blue hair tied up in a bun, wearing a pink hoodie and blue jeans. They are holding a small object that resembles a camera or a device.
    - **Background Character**: Another character with teal hair, dressed in dark clothing, standing near some stone structures.
    - **Text**: The text "2 points" is prominently displayed at the top left corner of the image.
    - **Environment**: The ground is a mix of dirt and stones, and there are stone pillars in the background, suggesting an ancient or historical setting.
    
    ### Visual Flow / Relationships
    The foreground character is the most prominent visually due to their central placement and the fact that they are facing towards the viewer. The background character is less prominent but still noticeable. There are no explicit arrows or lines connecting the elements, but the positioning suggests a natural flow from the foreground character to the background character.
    
    </details>
    
    <p></p>
    
    

    You should see your score floating in space, and it should increment each time you shoot the skeleton.

### Section 10: Create a second rifle

In this section, you’ll convert your Rifle/ProjectileLauncher combination into a Template Asset, and then you’ll use that asset to create another rifle.

- From the Hierarchy, select the Rifle. This object has the script attached to it, and it’s also the parent of the ProjectileLauncher.
- Right-click the Rifle object in the Hierarchy, and from the menu that appears, select **Create Asset**.

  <details>
  <summary>Turn the Rifle object into an asset</summary>
  
  <p></p>
  
  [Turn the Rifle object into an asset](../../image_data/d10cb2c75e1e241ddaa415fcee7a91d12de38b25d7ba173ed28ec759df396f43.md)
  
  ### Overview
  This image depicts a screenshot of a user interface element, specifically a contextual menu that appears when interacting with a "Rifle" item within a software application. The menu contains several options related to managing the selected item.
  
  ### Key Elements
  - **Visual description**: The menu has a dark background with white text and light gray highlights.
  - **Location**: The menu is positioned directly beneath the "Rifle" item in the main interface.
  - **Contents**: 
      - **Rename**: Text in white, located at the top of the menu.
      - **Duplicate**: Text in white, located below "Rename".
      - **Create Asset**: Text in white, highlighted with a light gray arrow indicating selection.
      - **Delete selection**: Text in white, located at the bottom of the menu.
  - **Visual styling**: The menu uses a dark theme with white text for readability. The selected option is highlighted with a light gray arrow.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Create Asset" option is highlighted, drawing attention to it as the current selection.
  - **Arrows/lines/connectors**: A light gray arrow points to the "Create Asset" option, indicating it is currently selected.
  - **Spatial relationships**: The menu items are arranged vertically, with each option stacked one below the other.
  
  </details>
  
  <p></p>
  
  

  The **Create New Asset** dialog appears.
- Type a name for the asset, and type a description of the asset, and then click **Create**.

  <details>
  <summary>Fill in the asset name and the description</summary>
  
  <p></p>
  
  [Fill in the asset name and the description](../../image_data/ee5b1cdfdf8949089bd1d57ef7759de1288cf36ed0e96f35970d5f66e6cddcfd.md)
  
  ### Overview
  This image depicts a user interface for creating a new asset within a software application, likely related to game development or asset management. The interface includes fields for entering the asset name, description, and selecting the asset type. There are also folders for organizing assets under different categories.
  
  ### Key Elements
  - **Asset Name**: Located at the top, the field contains the text "AutoRifle".
  - **Description**: Below the Asset Name, this field contains the text "> A rifle asset that spawns, complete with a script component attached to it, and a ProjectileLauncher".
  - **Asset Type**: Positioned to the right of the Description field, it shows "Template Asset" with a dropdown arrow indicating more options.
  - **Folder Structure**: Located below the Asset Type, showing a hierarchical folder structure with expandable sections labeled "All Assets", "My Folders", "My Assets", and "Shared With Me".
  - **Buttons**: At the bottom, there are two buttons labeled "Cancel" and "Create".
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the "Asset Name" and "Description" fields, as they are the primary inputs required for creating the asset. The "Create" button is the next most prominent due to its placement and color contrast. The folder structure is nested and expandable, suggesting a hierarchical organization system.
  
  </details>
  
  <p></p>
  
  
- Open the **Assets** tab, and then select the **My Assets** folder. You’ll see your second rifle asset there.

  <details>
  <summary>Your new asset appears in your My Assets folder in your Private Assets Library</summary>
  
  <p></p>
  
  [Your new asset appears in your My Assets folder in your Private Assets Library](../../image_data/acd86d56afb91642fb43d586df977a59f632fa18d22caa8ce39102c291801ffc.md)
  
  ### Overview
  This image depicts a file explorer interface with a sidebar on the left and a file/folder preview area on the right. The sidebar contains folders and a shared folder, while the preview area displays a single file named "AutoRifle."
  
  ### Key Elements
  - **Sidebar (Left Panel)**:
    - **Folder "All Assets"**: Located at the top-left corner.
    - **Folder "My Folders"**: Below "All Assets," with a downward arrow indicating expandable content.
    - **Folder "My Assets"**: A subfolder under "My Folders," also with a downward arrow.
    - **Folder "Shared With Me"**: Located below "My Folders," with a downward arrow.
  - **Preview Area (Right Panel)**:
    - **File "AutoRifle"**: Positioned on the far right, occupying the preview area. It has a small icon resembling a network or connection symbol above the filename.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The "AutoRifle" file in the preview area.
  - **Arrows**: Downward arrows next to folders indicate expandable content.
  - **Spatial Relationships**: The sidebar is on the left, and the preview area is on the right. The "AutoRifle" file is the focal point in the preview area.
  
  </details>
  
  <p></p>
  
  
- Click and drag the new AutoRifle asset, and drop it anywhere in the scene.

  <details>
  <summary>Place the new Rifle anywhere in the scene</summary>
  
  <p></p>
  
  [Place the new Rifle anywhere in the scene](../../image_data/68cbf4d8209fc5392e2456062f7286f0731583cc8c6f6d4d642b13b8b5eb041a.md)
  
  ### Overview
  This image depicts a scene from a video game or digital environment. It features a character standing in a virtual space with floating objects around them. The background includes a purple sky and some structures resembling futuristic buildings or platforms.
  
  ### Key Elements
  - **Character**: A humanoid figure wearing dark clothing and a helmet stands in the center. They appear to be interacting with the environment.
  - **Floating Objects**: Several white, cube-shaped objects are suspended in mid-air around the character.
  - **Background**: The sky is a gradient of purple hues, and there are silhouettes of structures or platforms in the distance.
  - **Text**: The words "2 points" are prominently displayed at the top left corner of the image.
  
  ### Visual Flow / Relationships
  The character is the most prominent element, positioned centrally. The floating objects are scattered around them, creating a sense of dynamic interaction. The background structures provide depth and context to the setting.
  
  </details>
  
  <p></p>
  
  
- Test your world. Press the Play button to enter preview mode. Your avatar spawns into your world, ready to go and get the second rifle.

  Notice that you can use either rifle to shoot the skeleton and generate a score. Each rifle has its own score, which means the text box swaps between the scores as you swap rifles.

You’re done! You’ve completed building a game in Meta Horizon Worlds! In the next section (which is optional), you’ll try running your game in 3D on a Meta Quest headset.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

* Try the [Batting cage tutorial](../Adding%20and%20manipulating%20objects%20tutorial.md) now that you’ve created your first world.
* Learn about the desktop editor with the [Introduction to the desktop editor](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
* Learn about the other tools available by reading our [Tools overview](../../Get%20started/Tools%20overview.md).
* Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.