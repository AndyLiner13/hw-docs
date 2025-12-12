Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/getting-started-with-custom-model-import

# Getting started with 3D model import

## Custom model files

A custom 3D model is composed of multiple files, all of them must be specified when importing a 3D model into the desktop editor. The files include:

* An [FBX](https://en.wikipedia.org/wiki/FBX) file. This is the 3D model file format. It contains the 3D mesh along with scene data such as cameras, lighting, geometry, materials, and animations.
* One or more [PNG](https://en.wikipedia.org/wiki/PNG) files. These are image files, containing textures that map onto the model to make the spawned object look more realistic.

For example, you need to import five files in order to import this rifle asset:

<details>
<summary>Image shows a 3D model of a futuristic rifle</summary>

<p></p>

[Image shows a 3D model of a futuristic rifle](../image_data/175112b7f57806d57c0494c4d58a34b8fe7297245057b474ba00c6da1d002b66.md)

### Overview
The image depicts a futuristic-looking weapon or device with a sleek, angular design. It has a predominantly metallic finish with some orange accents. The object is set against a simple, light-colored background that resembles a desert landscape.

### Key Elements
- **Visual description**: The object is a rectangular, elongated shape with a pointed tip at one end and a handle-like grip at the other.
- **Location**: The object is centrally positioned in the image.
- **Contents**: The device features a series of buttons, switches, and a scope-like sight at the front. There are also orange highlights on the sides near the handle.
- **Visual styling**: The metal parts appear to have a brushed texture, while the orange areas have a glossy finish. The overall color scheme includes silver, gray, and orange.

### Visual Flow / Relationships
- **Most prominent visually**: The central rectangular body of the device.
- **Spatial relationships**: The device is symmetrical, with the handle on one side and the scope on the other. There are no arrows or lines indicating a specific reading order.

</details>

<p></p>



## Import a custom model asset

Follow this procedure to import a custom model asset, spawn an object from it, and add it to your scene.

**Note**: To complete this procedure, you need a custom 3D model (an FBX file and one or more PNG texture files) to import. If you don’t have a 3D model, you can get demo assets [here](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=A33KkoztyZEQ7kNvwG6rAxL&_nc_oc=Adl3n6SUotMwNGO9mm8lMit1EwvTlJ4bpN5Advgyftp7MeW_UrAhzZCSnoyi7swkqPM&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AflwYTOj5VoRK79kJrxnCexkHDRo_5DnT8dmVJfAQ3t2IQ&oe=69558EC5)
.

- From the Desktop Editor, click the **Asset Library** tab at the bottom of the screen and select **My Assets**.

  <details>
  <summary>Click on the Asset Library tab to open the Personal Asset Library</summary>
  
  <p></p>
  
  [Click on the Asset Library tab to open the Personal Asset Library](../image_data/0af824844c675e7a046fb18756a3cd1c1e8225f501e7ae760bf54aa45a6bca70.md)
  
  ### Overview
  This image depicts a user interface for managing assets, likely within a digital asset management system. The layout includes a sidebar with navigation options and a central area displaying a message indicating that no assets are currently available in the selected folder.
  
  ### Key Elements
  - **Sidebar Navigation**:
    - **Visual description**: A vertical menu with expandable sections.
    - **Location**: Left side of the image.
    - **Contents**: 
      - "Add New" button with a dropdown arrow.
      - "All Assets" section with a downward arrow indicating expandable content.
        - Subsections include "My Folders," "Shared With Me," and "Removed Assets."
    - **Visual styling**: Dark background with light text and icons.
  
  - **Central Message Area**:
    - **Visual description**: A placeholder message displayed in the main content area.
    - **Location**: Right side of the image.
    - **Contents**: "There are no assets in this folder yet."
    - **Visual styling**: Light text on a dark background.
  
  - **Search Bar**:
    - **Visual description**: A search bar at the top right.
    - **Location**: Top right corner.
    - **Contents**: Placeholder text "Search My Assets."
    - **Visual styling**: Dark background with white text.
  
  - **Folder Icon**:
    - **Visual description**: An icon resembling a folder with a document inside.
    - **Location**: Next to the "My Assets" label in the sidebar.
    - **Contents**: "My Assets" label.
    - **Visual styling**: Gray icon on a dark background.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "My Assets" folder in the sidebar.
  - **Arrows and lines**: Downward arrows next to "All Assets" and "My Folders" indicate expandable sections.
  - **Implied reading order**: The user would typically navigate through the sidebar first before interacting with the central message area.
  
  </details>
  
  <p></p>
  
  
- Add a new asset by clicking **Add New**, and select **3D Model** from the menu.

  <details>
  <summary>The Import Models dialog box appears</summary>
  
  <p></p>
  
  [The Import Models dialog box appears](../image_data/2514ffc9f3067c82d411e2ea760412338fb698532b399f122f2ee99b8bcc9550.md)
  
  ### Overview
  This image depicts a user interface dialog box titled "Import Model(s)" with instructions and options related to importing 3D models into a software application. The dialog includes a warning message, file selection button, and a toggle option for offset pivots.
  
  ### Key Elements
  - **Title**: "Import Model(s)" located at the top-left corner.
  - **Warning Message**: A yellow-highlighted box containing a warning about the offset pivots feature being supported only on single mesh FBX files.
  - **File Selection Button**: A blue button labeled "Choose files on your device" situated below the warning message.
  - **Offset Pivots Toggle**: A toggle switch labeled "Preserve offset pivots" with a description underneath explaining its function.
  - **Buttons**: Two buttons at the bottom, "Cancel" and "Import," with the "Import" button highlighted in blue.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the warning message and the file selection button. The warning message is enclosed in a yellow box, drawing attention to the potential issue. The file selection button is centrally located below the warning message. The toggle switch for offset pivots is positioned below the warning message as well. The "Cancel" and "Import" buttons are at the bottom, with the "Import" button being larger and more prominent than the "Cancel" button.
  
  </details>
  
  <p></p>
  
  
- Select the asset files to import by clicking **+ Choose files on your device** on the dialog window that appears.
- In the file picker window, select the 3D model file and associated texture files; click **Open**.

  <details>
  <summary>Select the five asset files</summary>
  
  <p></p>
  
  [Select the five asset files](../image_data/38df716c5d24f9e50a6b0d565b757d0752ae78b27d61c623598c6b1d227644d6.md)
  
  ### Overview
  This image depicts a file selection dialog box within a file explorer interface. The dialog box contains a list of files and folders, with options to open or cancel the action. The interface includes navigation buttons, a search bar, and a list of files categorized by name, type, and size.
  
  ### Key Elements
  - **Navigation Buttons**: Located at the top-left corner, showing "Desktop" as the current directory.
  - **File List**: Positioned centrally, displaying a list of files and folders with their names, types, and sizes.
      - **Visual description**: Each entry has a thumbnail icon, file name, type, and size.
      - **Contents**: Examples include "ACWpnBattleRifle.fbx" (3D Object, 284 KB), "SingleBlockBR.png" (PNG File, 33 KB), etc.
      - **Visual styling**: Icons are small and located to the left of the file name. The background is white, and the text is black.
  - **Search Bar**: At the top-right, with placeholder text "Search DemoAssets".
  - **Open/Cancel Buttons**: Located at the bottom-right, with "Open" highlighted in blue and "Cancel" in gray.
  - **Directory Path**: At the top-left, showing the path "Desktop > DemoAssets".
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The file list is the most prominent due to its size and central placement.
  - **Arrows/Connectors**: Navigation arrows are present but static, indicating the current directory.
  - **Reading Order**: The interface follows a standard left-to-right, top-to-bottom reading order, starting with the directory path, then the search bar, followed by the file list, and finally the action buttons.
  
  </details>
  
  <p></p>
  
  
- In the dialog box, click **Import**. The following asset icon appears in your **My Assets** folder when the process is complete.

  <details>
  <summary>This is what the rifle asset looks like after you import it</summary>
  
  <p></p>
  
  [This is what the rifle asset looks like after you import it](../image_data/ef9375afae1cc7e22fb7e08d0b75c4b5176850a81746c7bc5279bea9b6ed942c.md)
  
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
  
  

Spawn an instance of the asset by clicking on the icon for the asset, dragging it into the scene, and dropping it anywhere in the scene. A rifle object appears in the scene, and in the hierarchy.

<details>
<summary>The rifle floats over the pedestal</summary>

<p></p>

[The rifle floats over the pedestal](../image_data/f81411e3fcff5c6069f6c7cc4850f247308b590ba297f83bb0b6ab592649c648.md)

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



## Custom model workflows

In this section, you’ll learn about three workflows associated with custom models.

### Creating, saving, and importing custom 3D models

There are several requirements for creating and importing (ingesting) custom 3D models. There are naming conventions for files, specific file types, and texture types. For more information, see [Creating a Custom Model](Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

### Using static lighting to light a custom 3D model

Objects with built-in lighting can not be used in custom model worlds. This can be circumvented by setting up static lighting on a per-object basis using a static lighting gizmo. For more information, see [Static light gizmo](../Gizmos/Static%20light%20gizmo.md).

### Add collision to a custom 3D model

Your world’s performance degrades if you build your world with very detailed, complex 3D models. To improve your performance, Meta recommends that you add a simple collider to your 3D model’s FBX file, which turns it into a collider asset. You can define custom collision shapes in the FBX file. When these colliders are imported into Meta Horizon Worlds, they become collider entities. Collider entities are a new type of entity that are used only for collision. You can use the following types of colliders: **Box**, **Sphere**, **Capsule**, and **Mesh**.

A bonus mesh collider is available in the desktop editor. Although it doesn’t perform as well as the other colliders, it is more flexible and can conform to more complex shapes.

For more information, see the [Collider Ingestion User Guide](Creating%20custom%20models%20for%20Horizon%20Worlds/Collider%20Ingestion%20User%20Guide.md).

## 3D modelling resources

To learn more about 3D modelling, follow these links:

* [Glossary of 3D Terminology](https://www.inf.ed.ac.uk/teaching/courses/cg/Web/intro_graphics/glossary.html)
* [3D Modeling Tool Resources](3D%20Modeling%20Tool%20Resources.md)
* [Custom Model Import Best Practices](Creating%20custom%20models%20for%20Horizon%20Worlds/Best%20practices%20for%20custom%20models.md)

## Known issues

* Custom model worlds don’t support spawning objects at runtime from assets that contain primitive shapes or static entities (entities with motion set to *NONE*). If you attempt to use such objects in your custom model world, you’ll break lighting and visuals, and it will impact your world’s performance.
* You cannot convert a primitive asset world into a custom model world.
* The desktop editor does not support custom shaders.
* When you publish your custom model world, it takes anywhere from one to two minutes for it to be cached. Caching ensures that subsequent visits to your world happen quicker. While your custom model world is being cached, you can still access it and load into your world, but you’ll notice that the load time is noticably longer.
* If caching fails, you’ll receive an email to let you know that your custom model world load time will take longer than normal. To fix this, simply re-publish your custom model world.

To receive the notification email, you must enable [Meta Quest > Email Preferences > App emails > Meta Horizon Worlds > Recommendations](https://secure.oculus.com/my/emails/).

* You can spawn objects from 3D custom models into a primitive asset world, but you won’t be able to publish it. A selection of primitive assets is available to use and publish in your custom model worlds.
* You can add primitive shapes (by clicking **Build > Shapes**) to your custom model world, but only for greyboxing. That is, you can’t use primitive shapes to build your entire world. You can always use custom 3D models to build your world after you’ve laid-out your design.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

- [Create your first world](../Tutorials/Getting%20started/Create%20your%20first%20world%20tutorial,%20part%201.md) using our step-by-step tutorial.
- If you have issues when running the desktop editor, see [Desktop Editor Troubleshooting](../Desktop%20editor/Help%20and%20reference/Desktop%20editor%20troubleshooting.md)
- Learn about the desktop editor with the [Introduction to the Desktop Editor](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools Overview](../Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/) to learn about our program benefits.