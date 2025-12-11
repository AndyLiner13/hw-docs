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

[Image shows a 3D model of a futuristic rifle](../../../images/output/img_20251211_011159_20251211_011159.md)

### Overview
The image depicts a mechanical device resembling a robotic arm or a tool holder, set against a blurred outdoor background suggesting a desert-like environment. The device has a cylindrical body with multiple components attached, including a central rod and several smaller parts extending outward.

### Key Elements
- **Visual description**: The main component is a cylindrical body with a metallic finish.
- **Location**: Center of the image.
- **Contents**: The cylinder has a series of protrusions and attachments.
- **Visual styling**: The cylinder is primarily silver with some black accents.

- **Visual description**: Several smaller components extend from the main cylinder.
- **Location**: Attached to the sides and bottom of the main cylinder.
- **Contents**: These components appear to be joints or connectors, possibly for articulation.
- **Visual styling**: These parts are also metallic but with a slightly different texture compared to the main cylinder.

- **Visual description**: A blurred background suggests a desert landscape.
- **Location**: Surrounding the main object.
- **Contents**: The background includes sand dunes and possibly some distant structures.
- **Visual styling**: The background is out of focus, with muted earth tones.

### Visual Flow / Relationships
- **Most prominent visually**: The central cylindrical body.
- **Arrows, lines, connectors**: None visible.
- **Spatial relationships**: The smaller components are attached to the main cylinder, suggesting a modular design. The background is static and does not interact with the device.

</details>

<p></p>



## Import a custom model asset

Follow this procedure to import a custom model asset, spawn an object from it, and add it to your scene.

**Note**: To complete this procedure, you need a custom 3D model (an FBX file and one or more PNG texture files) to import. If you don’t have a 3D model, you can get demo assets [here](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=A33KkoztyZEQ7kNvwG6rAxL&_nc_oc=Adl3n6SUotMwNGO9mm8lMit1EwvTlJ4bpN5Advgyftp7MeW_UrAhzZCSnoyi7swkqPM&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AflgazDO9TRBNPYbSEJQOFVqfrargKTDo-CEN4trO-Xcow&oe=69543D45)
.

- From the Desktop Editor, click the **Asset Library** tab at the bottom of the screen and select **My Assets**.

  <details>
<summary>Click on the Asset Library tab to open the Personal Asset Library</summary>

<p></p>

[Click on the Asset Library tab to open the Personal Asset Library](../../../images/output/img_20251211_011304_20251211_011304.md)

### Overview
This image depicts a user interface for managing assets within a digital workspace. The layout includes navigation options, a search bar, and a message indicating the absence of assets in a specific folder.

### Key Elements
- **Navigation Bar**: Located at the top left, contains a menu item labeled "Assets" and a dropdown option "Add New".
- **Folder Structure**: Positioned below the navigation bar, showing a hierarchical view of folders under "All Assets". The folders include "My Folders" and "Shared With Me".
- **Search Bar**: Situated at the top right, with placeholder text "Search My Assets".
- **Message Box**: At the bottom right, displays a message stating "There are no assets in this folder yet".
- **Icon**: A small icon resembling a cube with a checkmark is placed above the message box.

### Visual Flow / Relationships
The most prominent visual element is the folder structure under "All Assets". The message box is the secondary focus, indicating the current status of the folder. The navigation bar and search bar provide contextual information and functionality.

</details>

<p></p>


- Add a new asset by clicking **Add New**, and select **3D Model** from the menu.

  <details>
<summary>The Import Models dialog box appears</summary>

<p></p>

[The Import Models dialog box appears](../../../images/output/img_20251211_011412_20251211_011412.md)

### Overview
This image depicts a user interface dialog box titled "Import Model(s)" with instructions and options related to importing 3D models. The layout includes informational messages, file selection controls, and settings for offset pivots.

### Key Elements
- **Title**: "Import Model(s)" located at the top-left corner.
- **Informational Message**: A rectangular box with a light gray background and a dark gray border, containing a warning icon and text explaining that hierarchies are flattened when importing 3D models, pivot points are centered, and colors can't be modified.
- **File Selection Button**: A blue button labeled "Choose files on your device" situated below the information box.
- **Offset Pivots Section**: A yellow-highlighted area with a warning icon and text stating that the offset pivots feature is only supported on single mesh FBX files and may cause unexpected behavior if the FBX file contains more than one mesh.
- **Preserve Offset Pivots Checkbox**: A blue checkbox labeled "Preserve offset pivots," which, when checked, preserves the pivot defined in the original asset; otherwise, pivots will be centered.
- **Buttons**: Two buttons at the bottom, "Cancel" and "Import," both with white text on a dark gray background.

### Visual Flow / Relationships
The most prominent visual elements are the informational message box and the file selection button. The warning about offset pivots is visually emphasized by its yellow background. The buttons at the bottom are aligned horizontally and are the final interaction points for the user.

</details>

<p></p>


- Select the asset files to import by clicking **+ Choose files on your device** on the dialog window that appears.
- In the file picker window, select the 3D model file and associated texture files; click **Open**.

  <details>
<summary>Select the five asset files</summary>

<p></p>

[Select the five asset files](../../../images/output/img_20251211_011510_20251211_011510.md)

### Overview
This image depicts a file explorer window open to a directory named "DemoAssets" located on the Desktop. The window displays a list of files with their names, types, and sizes. There are also navigation controls at the top and a search bar for finding specific files within the directory.

### Key Elements
- **Navigation Pane**: Located on the left side, showing a tree view of folders and drives. It includes entries like "This PC," "Desktop," "Documents," "Music," "Pictures," "Videos," and "Local Disk (C:)". The "Desktop" folder is highlighted, indicating it is the current selection.
- **File List**: On the right side, a list of files is displayed under the "Desktop" folder. Each entry has a name, type, and size. Examples include "ACWpnBattleRifle.fbx," "SingleBlock.fbx," and various PNG files.
- **Search Bar**: Positioned at the top right, allowing users to search for specific files within the directory.
- **Buttons**: At the bottom right, there are two buttons labeled "Open" and "Cancel."

### Visual Flow / Relationships
The most prominent visual element is the file list, as it occupies the largest area of the interface. The navigation pane is secondary but essential for navigating through directories. The search bar allows for quick filtering of files. The "Open" and "Cancel" buttons at the bottom are interactive elements that allow the user to confirm or cancel their action.

</details>

<p></p>


- In the dialog box, click **Import**. The following asset icon appears in your **My Assets** folder when the process is complete.

  <details>
<summary>This is what the rifle asset looks like after you import it</summary>

<p></p>

[This is what the rifle asset looks like after you import it](../../../images/output/img_20251211_011552_20251211_011552.md)

### Overview
This image depicts a small icon or logo that appears to be part of a user interface element, likely a button or a notification badge. The icon is set against a white background with a subtle shadow effect, giving it a three-dimensional appearance.

### Key Elements
- **Visual description**: The icon consists of a stylized triangle pointing upwards within a rounded rectangle.
- **Location**: Positioned centrally in the image.
- **Contents**: The icon itself is simple and geometric, with no additional text or elements inside.
- **Visual styling**: The icon has a light gray fill with a darker gray outline, creating a clean and modern look.

### Visual Flow / Relationships
The icon is the sole focus of the image, with no other elements or connections to suggest a larger interface or relationship.

</details>

<p></p>



Spawn an instance of the asset by clicking on the icon for the asset, dragging it into the scene, and dropping it anywhere in the scene. A rifle object appears in the scene, and in the hierarchy.

<details>
<summary>The rifle floats over the pedestal</summary>

<p></p>

[The rifle floats over the pedestal](../../../images/output/img_20251211_011641_20251211_011641.md)

### Overview
The image depicts a 3D-rendered scene featuring a rectangular block with a futuristic-looking weapon mounted on top of it. The environment appears to be a simple, flat terrain with a gradient sky in the background.

### Key Elements
- **Rectangular Block**: A large, solid, rectangular object with a matte purple surface. It occupies the lower portion of the image.
- **Weapon**: Positioned on top of the block, the weapon has a sleek, angular design with glowing blue accents. It resembles a sci-fi or cyberpunk-style firearm.
- **Background**: A flat, grayish terrain that extends into the distance. The sky above transitions from a lighter shade at the horizon to a darker hue higher up.

### Visual Flow / Relationships
The most prominent visual element is the rectangular block, which serves as the base for the weapon. The weapon is oriented horizontally across the top of the block, suggesting a focus on the object rather than the environment itself. There are no arrows or lines connecting elements, implying a static arrangement without a specific directional flow.

</details>

<p></p>



## Custom model workflows

In this section, you’ll learn about three workflows associated with custom models.

### Creating, saving, and importing custom 3D models

There are several requirements for creating and importing (ingesting) custom 3D models. There are naming conventions for files, specific file types, and texture types. For more information, see [Creating a Custom Model](../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

### Using static lighting to light a custom 3D model

Objects with built-in lighting can not be used in custom model worlds. This can be circumvented by setting up static lighting on a per-object basis using a static lighting gizmo. For more information, see [Static light gizmo](../Gizmos/Static%20light%20gizmo.md).

### Add collision to a custom 3D model

Your world’s performance degrades if you build your world with very detailed, complex 3D models. To improve your performance, Meta recommends that you add a simple collider to your 3D model’s FBX file, which turns it into a collider asset. You can define custom collision shapes in the FBX file. When these colliders are imported into Meta Horizon Worlds, they become collider entities. Collider entities are a new type of entity that are used only for collision. You can use the following types of colliders: **Box**, **Sphere**, **Capsule**, and **Mesh**.

A bonus mesh collider is available in the desktop editor. Although it doesn’t perform as well as the other colliders, it is more flexible and can conform to more complex shapes.

For more information, see the [Collider Ingestion User Guide](../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Collider%20Ingestion%20User%20Guide.md).

## 3D modelling resources

To learn more about 3D modelling, follow these links:

* [Glossary of 3D Terminology](https://www.inf.ed.ac.uk/teaching/courses/cg/Web/intro_graphics/glossary.html)
* [3D Modeling Tool Resources](../Custom%20models%20(FBX)/3D%20Modeling%20Tool%20Resources.md)
* [Custom Model Import Best Practices](../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Best%20practices%20for%20custom%20models.md)

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

- [Create your first world](../Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md) using our step-by-step tutorial.
- If you have issues when running the desktop editor, see [Desktop Editor Troubleshooting](../Desktop%20editor/Help%20and%20reference/Desktop%20editor%20troubleshooting.md)
- Learn about the desktop editor with the [Introduction to the Desktop Editor](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools Overview](../Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/) to learn about our program benefits.