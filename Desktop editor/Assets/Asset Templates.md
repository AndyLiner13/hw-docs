Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/asset-templates

# Asset Templates

An asset template is an asset that has the type “Template”. You can create one from a complex object in your Hierarchy. Asset templates work just like legacy assets (like a 3D Model), except that they include powerful change propagation and versioning features.

Like legacy assets, asset templates can include:

* Multiple objects in a hierarchy, with a root object and child objects.
* Properties that define behaviors. For example, grabbables, and objects with physics.
* An attached script component.

But in addition to these features, asset templates also support the following:

| Feature | Description |
| --- | --- |
| Change Propagation | When you need to update all of the entities spawned from an asset template, you don’t have to update each instance by hand. Instead, you can update the asset template itself, then publish your changes, and they’ll propagate to all of the instances.   This synchronizes your changes across all of the worlds where you used that asset template. |
| Property Overrides | Allows you to customize asset template instances by overriding inherited property values.    If you want to apply those changes to all of the other instances of the asset template, you can push them back to the asset template, and then republish. |
| Versioning | Each time you publish a change to an asset template, it creates a new version of that asset template. This version information is added to the version history of changes.    Keeping track of the version history lets you revert to any previous version of the asset template. |

> **Note**: Meta Horizon Worlds Asset Templates are similar to [Prefabs in Unity](https://docs.unity3d.com/Manual/Prefabs.html).

## When to use an asset template

Asset templates are useful when you want to reuse an asset multiple times in your worlds, and you want the ability to update all of the instances in one-fell-swoop.

You can create entities from your asset template, and when you make changes to the asset template, you publish them, and the instance entities are updated. This makes it easy for you to update all of the instances in all of your worlds, using just one operation.

## Example

Consider a scenario where you want to create a forest in your world, and you want to create it using many instances of the same tree.

Now imagine that you need to update all of the tree objects. If you’d created the trees from a legacy asset, then you’d have to manually replace every tree in your forest with an updated one. This could be a lot of work!

But if you created the trees from an asset template, then you could update all of them at the same time just by updating the asset template, and then publishing the changes. The changes are then pushed to all of the instances of the asset template in your world.

## Compatibility & Recommendations

* Asset templates are compatible with anything that can be spawned into the world.
* VR support for asset templates is limited. Overrides to instances of assets done in VR can only be applied to the definition via the Desktop Editor.
* We recommend using only [File-Backed Scripts](../../Scripting/File-Backed%20Scripts.md) (FBS) worlds for the best experience and full functionality. **Non-FBS scripts are not fully supported.** Without file-backed scripts:

  + If you add non-FBS script to the template definition, when editing the template definition you can’t edit the script (it will not show in the script dropdown in properties).
  + If you edit a non-FBS script and/or attach it to an instance of the asset template changes to the script on an instance will not appear as overrides and thus cannot be applied to the template definition and propagated across worlds.
  + If you add a non-FBS to your definition it will duplicate anywhere it’s used in a world.

## Feature walkthrough

This section will go through the general workflow for templates once you are part of the GK. If you prefer this in video form, please see the tutorial video below.

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/453701050_838341574642066_6976185690380477457_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=Q1iibmYTRJgQ7kNvwFjCTi9&_nc_oc=Adno6geWuwL0Gq8u1tS69Nr1yqWVnhxP7IPuyAFjFupvIkDqegR7t9Zj5aQYYxu_FO0&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=FFkZgWq3Md0ZIoR52w8DDA&oh=00_AfmIKue_PsdDbLWkjjTg4tYHWRJwDP5MTTGNxdm_0NaT9A&oe=69377A46)

## Creating a basic asset template

There are two ways to create a template:

* By converting a legacy asset to an asset template. See [Asset Migration](Asset%20Templates.md#asset-migration) section for more information.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_013938_20251211_013938.md)

### Overview
This image depicts a user interface of an asset management tool within a software application. The interface includes a sidebar with folders and a main content area displaying asset thumbnails and metadata.

### Key Elements
- **Sidebar (Left Panel)**:
  - **Folder Structure**: Displays nested folders labeled "All Assets," "My Folders," "My Assets," and "KV test."
  - **Buttons**: Includes "Add New" with a dropdown arrow, and "Removed Assets" with a trash can icon.
  - **Text**: "All Assets," "My Folders," "My Assets," "KV test," "Removed Assets."

- **Main Content Area (Right Panel)**:
  - **Asset Thumbnails**: A grid of icons representing different assets.
    - Each thumbnail has a white icon on a gray background.
    - Some thumbnails have additional icons or indicators:
      - A blue circle with a plus sign on one thumbnail.
      - A yellow triangle warning icon on another.
      - A clock icon on yet another.
      - Two blue circular arrows on adjacent thumbnails.
  - **Metadata**: Below the thumbnails, text indicating "Half-Tube Tem..." and "legacy asset," among others.
  - **Status Bar**: At the bottom, a message states "6 assets in My Assets can be updated to a new format" with a "Review" link highlighted in blue.

### Visual Flow / Relationships
- **Most Prominent Element**: The central grid of asset thumbnails.
- **Arrows/Connectors**: None explicitly shown.
- **Reading Order**: The layout suggests a top-to-bottom, left-to-right scan of the thumbnails followed by the metadata below them.

</details>

<p></p>


* By selecting objects in the scene and creating a new asset template from them.

To begin, first create a basic asset template.

- Add a basic cube to your scene. You can get it from the **Shapes** drop-down menu.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_014032_20251211_014032.md)

### Overview
This image depicts a modal window titled "Shapes" within a user interface, likely a design or modeling software. The window displays various geometric shapes arranged in a grid layout. The interface has a dark theme with light-colored shapes and text for contrast.

### Key Elements
- **Title Bar**: Located at the top of the modal window, labeled "Shapes". Contains a close button ("X") on the right side.
- **Search Bar**: Positioned below the title bar, with a magnifying glass icon indicating a search functionality.
- **Shape Grid**: A 4x3 grid of shape icons, each representing a different geometric form.
  - **Top Row**: Cube, Sphere, Cone, Cylinder.
  - **Second Row**: Ramp, Pyramid, Tube, Half Cylinder.
  - **Third Row**: Half Tube, Faceted Cylinder, Capsule, Torus.
  - **Bottom Row**: Half Torus, Half Sphere, Cube Soft.
- **Selected Shape**: The "Cube" shape is highlighted with a blue border, indicating it is currently selected.
- **Background**: The modal window has a dark gray background, while the shapes themselves are light gray with white edges.

### Visual Flow / Relationships
The shapes are arranged in a grid, with each shape having its own icon and label. The selected shape is visually distinct due to the blue border. There are no arrows or lines connecting the shapes, suggesting a simple, direct navigation through the options.

</details>

<p></p>


- Add a basic sphere to your scene. You can get it from the **Shapes** drop-down menu.
- In the Hierarchy, create an asset out of the two shapes by selecting both of them, and then right clicking on them. In the menu that appears, click **Create Asset**, and then enter the asset details.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_014136_20251211_014136.md)

### Overview
This image depicts a 3D modeling software interface with a menu dropdown open on the left side. The main workspace in the center shows a 3D scene with a cube and a sphere, both with selection handles indicating they are interactive objects. The grid floor and perspective view suggest a 3D modeling environment.

### Key Elements
- **Menu Dropdown**: Located on the left side, it is a black rectangular dropdown menu with white text listing options: "Create Asset," "Delete selection," "Group selection," and "Focus on selection." Each option has a corresponding keyboard shortcut next to it.
- **3D Scene**: In the center, there is a green cube with a brown roof and a white sphere. Both objects have selection handles, suggesting they can be manipulated within the 3D space.
- **Selection Handles**: Red and blue arrows appear on the sphere, indicating rotation and translation axes.
- **Grid Floor**: A light gray grid spans the entire workspace, providing a reference for object placement.
- **Perspective View**: The scene is viewed from a top-down perspective, typical of 3D modeling software.

### Visual Flow / Relationships
The most prominent visual element is the menu dropdown, as it is the focal point of interaction. The 3D scene is secondary but crucial for understanding the context of the software. The selection handles on the objects imply that the user can interact with them, and the grid provides spatial orientation.

</details>

<p></p>



  You can create the asset as a template or as a legacy asset by selecting the asset type. If you choose **Legacy Asset Group**, your asset will not have instancing, property overrides, or change propagation.

You have now successfully created an asset template. The icon for the asset template changed in the Hierarchy. This is one way you can tell that an asset is a template asset.

## Editing Asset Definitions

Asset template definitions are edited in an isolated editing view, similar to how editing prefabs in Unity works. To enter asset definition editing mode, follow these steps:

- Enter asset definition editing mode. Right-click on your newly created asset, and then select **Edit Template Definition**. You can do this from either the Hierarchy, or by right-clicking the asset card in the Asset Library.
- Change the color of the entity via the property panel, or add new entities to the objects, then save the asset definition. This saves a draft of the definition. The he change appear locally in your world. To update the definition, you must publish the draft. After publishing, your changes appear as available updates in other worlds. To propagate changes in these other worlds, open the world and accept these updates. You can see more details under **Drafts**.
- Next, you’ll be prompted with the option to publish your template. Choose to **Save & publish** later.

> **Note**: Ingested assets must be spawned into a world before their definition can be edited. This is because ingested assets are created external to Meta Horizon Worlds and asset properties are applied to spawned instances of assets in a world before being saved to its definition.

## Draft Assets

A draft asset is an asset that has been updated in the current world, but whose changes haven’t yet been published to a new canonical asset version that can be used in other worlds.

- To view draft assets in the current world, click on the asset updates icon at the top left of the editor header.
- A modal will appear. Click on the **Unpublished changes** tab to see a list of all the draft assets in your world.

  **Note**: Anytime you edit an asset it’s stored as a draft.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_014237_20251211_014237.md)

### Overview
This image depicts a user interface showing a list of unpublished changes within an asset management system. The interface includes a header indicating the number of updates and a tabbed view displaying "Unpublished changes." Below this, there are entries listing assets that have been changed, along with the user who made the change, the date and time of the change, and options to discard or publish the changes.

### Key Elements
- **Header**: "Asset Updates" at the top left, "Updates (0)" next to it, and "Unpublished changes (17)" in the center. A "Publish all" button is located on the far right.
- **Tabbed View**: "Unpublished changes" is highlighted with a blue underline, indicating the active tab.
- **List Entries**: Each entry contains:
  - **Asset Icon**: A small icon representing the asset.
  - **Asset Name**: "a" next to the icon.
  - **Changed By**: "jmavra" with a profile picture icon.
  - **Date**: The timestamp of the change.
  - **Action Buttons**: To the right of each entry, there are "Discard" and "Publish" buttons.

### Visual Flow / Relationships
The most prominent visual elements are the list entries, which are arranged vertically. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom. The "Publish all" button is the most prominent interactive element due to its placement and contrasting color.

</details>

<p></p>


- From here you can either discard or publish your draft asset.
  * When you discard a draft of an asset, all asset instances in the current world will automatically switch to the latest major version, as dictated by the asset definition in the asset library.
  * When you publish a draft asset, it will create a new major version of the asset in the asset library.
- Click **Publish** publish the draft asset. You will be presented with a publish modal. You can optionally write a comment to be saved as version notes with the new version, and then when the publishing operation finishes, a new major version of the asset will be saved to asset definition in the asset library.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_014339_20251211_014339.md)

### Overview
This image depicts a modal dialog box within a user interface, specifically a confirmation prompt asking if the user wants to publish a draft asset. The dialog box is centered over the main interface, which includes tabs for "Updates" and "Drafts," and a list of assets on the left side.

### Key Elements
- **Modal Dialog Box**: Located centrally, with a dark gray background and white text.
  - **Title**: "Publish draft?" displayed at the top.
  - **Message**: "You're about to publish draft changes to this asset. This will create a new version of the asset. Would you like to continue?" shown below the title.
  - **Tweaked Properties**: A black box with white text stating "Tweaked some properties."
  - **Buttons**: Two buttons at the bottom, labeled "Cancel" and "Publish." The "Publish" button has a blue background with a loading spinner indicating the action is in progress.
- **Background Interface**: The main interface behind the dialog box shows tabs for "Updates" and "Drafts," with "Drafts" currently active. There is also a list of assets on the left side, with one asset partially visible.
- **Interface Buttons**: Outside the dialog box, there are buttons labeled "Discard" and "Publish" on the right side of the main interface.

### Visual Flow / Relationships
The most prominent visual element is the modal dialog box, which is the focal point of the image. The "Publish" button is highlighted as the primary action to take, while the "Cancel" button serves as an alternative. The interface elements outside the dialog box provide context but are secondary to the main action being prompted.

</details>

<p></p>


- Once the asset is published, click on the **Version History** button in the Asset Details panel to see its version history.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_014441_20251211_014441.md)

### Overview
The image displays a user interface element showing asset details within a template management system. The layout includes a large central image placeholder, metadata fields, version history, and file download options.

### Key Elements
- **Central Image Placeholder**: A gradient background with a white cube icon centered.
- **Metadata Fields**: Located below the image placeholder.
    - **Asset Type**: "Template"
    - **Asset ID**: "853974739610124"
    - **Owner**: "goopitygoopgoop"
    - **Created**: "Nov 30, 2023 at 12:55 PM"
    - **Added By**: "goopitygoopgoop"
    - **Date**: "Dec 4, 2023 at 12:10 PM"
    - **Notes**: "Tweaked some properties"
- **Version History Button**: A rectangular button labeled "Version History" circled in red.
- **Files Section**: Located at the bottom, showing a "Quest" file with a download option.

### Visual Flow / Relationships
The most prominent visual element is the central image placeholder. The metadata fields follow sequentially below it. The "Version History" button is highlighted, drawing attention to it as a key interactive element. The "Files" section is at the very bottom, indicating additional content related to the asset.

</details>

<p></p>


- The version history modal will display all of the major versions of an asset. These are all of the asset versions that have been previously published. If you go into other worlds or share an asset with other users, these are the versions that will be stored on the root asset definition. The asset can be restored to any of these versions at any time.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_014531_20251211_014531.md)

### Overview
This image depicts a version history interface for an asset template. It shows a table with three columns: ID, Added By, Date Added, and Notes. The interface has a dark theme with light-colored text and icons.

### Key Elements
- **ID Column**: Located in the first column, showing IDs 3, 2, and 1.
- **Added By Column**: Contains usernames "goopitygoopgoop" repeated for each entry.
- **Date Added Column**: Displays dates and times for when entries were added.
- **Notes Column**: Contains notes about changes made to the asset template.
- **Current Label**: Positioned next to the ID 3 row, indicating this is the current version.

### Visual Flow / Relationships
The most prominent visual element is the table itself, which is arranged in a grid layout. There are no arrows or lines connecting elements, but the reading order follows the natural progression from left to right within each row.

</details>

<p></p>



## Property Overrides

Property overrides enable you to override the property values on an instance of an asset template in a world. It effectively allows you to disconnect individual property values, while retaining a link to the root asset definition.

To override a property:

- Click on the root level asset template in your world. Review the properties. There shouldn’t be any overrides.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_014632_20251211_014632.md)

### Overview
This image depicts a user interface element showing properties of a sphere object in a game development or 3D modeling software. The layout is structured into sections for properties, debug data, behavior, attributes, and material settings.

### Key Elements
- **Properties Section**: Located at the top, contains a title "Sphere" with a small icon resembling a cube.
- **Debug Data**: Below the properties, a section labeled "Debug Data" with a right-pointing arrow indicating expandable content.
- **Behavior Section**: Contains toggles and dropdown menus for visibility, light reflection, casting shadows, collision properties, and motion settings.
- **Attributes Section**: Includes fields for position, rotation, scale, texture, material roughness, and color.
- **Position Fields**: Show numerical values for X, Y, Z coordinates.
- **Rotation Fields**: Display numerical values for X, Y, Z angles.
- **Scale Fields**: Similar to position fields but show uniform scaling factors.
- **Texture Dropdown**: A small downward-facing triangle indicating a dropdown menu.
- **Material Roughness Slider**: A slider with a value of 0.5 displayed next to it.
- **Color Field**: Displays a swatch with numerical values for RGB components.

### Visual Flow / Relationships
The interface flows vertically, with each section expanding as needed. The toggles and dropdowns are aligned horizontally within their respective sections. The visual hierarchy is clear, with the "Behavior" section being more prominent due to its larger font size compared to the others.

</details>

<p></p>


- Now, create an overridden property value. Edit the object to change its color. You’ll notice that the color label has a bold treatment, as well as a blue dot next to it to indicate that the value has been overridden. In the overrides panel, you will see a property override on the object showing different values for the previous and current color.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_014728_20251211_014728.md)

### Overview
This image displays a user interface element showing various properties of an object, likely within a 3D modeling or game development software. The layout is structured with labeled fields for Position, Rotation, Scale, Texture, Material Roughness, and Color. Each field contains numerical values and some interactive elements like a dropdown menu.

### Key Elements
- **Position**: Located at the top-left, this section includes X, Y, Z coordinates with values `-0.69`, `0`, `0`.
- **Rotation**: Below Position, this section has X, Y, Z rotation values `0`, `180`, `-0.0C`.
- **Scale**: Positioned below Rotation, it shows X, Y, Z scale values `1`, `1`, `1`.
- **Texture**: Situated below Scale, this area features a small downward-pointing triangle indicating a dropdown menu.
- **Material Roughness**: This field is located beneath Texture and displays a value `0.5`.
- **Color**: At the bottom-left, this section includes a color swatch with a hex code `#8B0000` and numerical values `0.20`, `0.03`, `0.10`.

### Visual Flow / Relationships
The elements are arranged in a vertical column, with each property having its own row. The layout is clean and straightforward, with clear labels above each set of values. There are no arrows or lines connecting elements, suggesting a linear reading order from top to bottom.

</details>

<p></p>


- From the property overrides panel, you can either select specific overrides to apply back to the definition, or apply all overrides. When you apply overrides back to the asset template definition, all instances whose matching properties haven’t been overridden will inherit the changes, and a new draft version of the asset will be created.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_014831_20251211_014831.md)

### Overview
This image depicts a user interface showing an object hierarchy on the left side and a property editing table on the right side. The interface appears to be part of a design or 3D modeling software.

### Key Elements
- **Left Panel (Object Hierarchy)**:
  - **Visual description**: A vertical list of objects within a project.
  - **Location**: Left side of the image.
  - **Contents**: 
    - "asset_template" with a minus sign indicating it can be collapsed.
    - "Sphere" highlighted in blue, indicating selection.
    - "Cube" and "Cylinder C" listed below.
  - **Visual styling**: Dark background with light text, blue highlight for selected item.

- **Right Panel (Property Editing Table)**:
  - **Visual description**: A table with columns for Component, Property, Old Value, and New Value.
  - **Location**: Right side of the image.
  - **Contents**: 
    - "Attributes" as the component.
    - "Color" as the property.
    - "Old Value": `(0.93,0.92,0.93,...)`.
    - "New Value": `(0.10,0.92,0.93,...)`.
  - **Visual styling**: Dark background with white text, light gray separators.

- **Buttons at the Bottom**:
  - **Revert All Overrides**: Gray button with white text.
  - **Apply All Overrides**: Blue button with white text.

### Visual Flow / Relationships
- **Most Prominent Visually**: The selected "Sphere" in the left panel.
- **Arrows/Connectors**: None visible.
- **Reading Order**: The left panel is read vertically first, then the right panel is read horizontally.

</details>

<p></p>


- It’s also possible to revert overrides. Reverting override values will revert the asset back to the same state as any draft version that exists, or in the absence of a draft version, the current major version of the asset.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_014924_20251211_014924.md)

### Overview
This image depicts a user interface element showing a dropdown menu with two options: "Apply to definition" and "Revert." The dropdown is triggered by a button labeled "Color" located above it. The interface also includes a slider for "Material Roughness" set at 0.5, and a search bar for attached tags at the bottom.

### Key Elements
- **Dropdown Menu**: A black rectangular dropdown with white text displaying two options: "Apply to definition" and "Revert."
- **Color Button**: A blue circular button with a white dot indicating selection, located to the left of the dropdown.
- **Material Roughness Slider**: A black rectangular slider with a red handle set at 0.5.
- **Search Bar**: A black rectangular search bar with a magnifying glass icon and placeholder text "Search attached tags."
- **Attached Tags Placeholder**: A small plus sign next to the search bar, suggesting the ability to add new tags.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu, as it is the focal point of interaction. The color button is secondary but important for triggering the dropdown. The Material Roughness slider is a static element providing a numerical value. The search bar and attached tags placeholder are at the bottom, serving as input fields for additional functionality.

</details>

<p></p>



**Note:** Property overrides persist even when you update the asset. To test this, you can edit the asset definition, add a new shape to it and then exit. You will see that the color of the sphere will remain even after the update!

## Asset Migration

Assets that were in your asset library before asset templates need to be migrated in order to work with the new template format. This is a very easy process, but may take some time for a larger amount of assets.

The following steps will walk through asset migration:

- You will see a blue icon at the top right corner of an asset card if the asset needs to be migrated. Right click on the asset card, and select **Update Asset** from the menu that appears.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_015008_20251211_015008.md)

### Overview
This image displays a grid layout of asset thumbnails within a user interface, likely part of a digital asset management tool. The assets are arranged in rows and columns, each with a distinct icon and name beneath it.

### Key Elements
- **Visual description**: Each thumbnail contains a geometric shape icon and a corresponding label.
- **Location**: Positioned horizontally across the screen.
- **Contents**: 
    - **Icon**: A geometric shape (cube, sphere, hexagon, etc.).
    - **Label**: Text indicating the asset name (e.g., "Cubetest," "Sphere").
- **Visual styling**: 
    - **Background**: Gradient shades of blue and purple.
    - **Text**: White font for labels.
    - **Icons**: White shapes on a gradient background.

### Visual Flow / Relationships
- **Most prominent visually**: The asset thumbnails are evenly spaced and arranged in a grid.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: Elements are aligned horizontally and vertically, creating a structured grid layout.

</details>

<p></p>


- Alternatively, you can also click on the folder and update all assets in a folder at once by clicking on the link at the bottom right of the asset browser.

**Note**: Ingested asset types don’t have to be migrated, only assets created within Horizon.

## Ingested Asset Types

An important note: ingested (imported) asset types automatically inherit asset versioning. While ingested assets (custom mesh, audio, etc.) are linked, you won’t see the overrides since ingested asset types don’t allow you to apply overrides back to the definition. If you’d like to apply an override to an ingested asset, you can create nested asset templates. These are simply asset templates that are parented to the same root object.

## Unlinking assets from an asset template

Unlinking instances from an asset template removes the connection to the template. The means it prevents the unliked asset from receiving updates from the asset template definition. It also removes the ability to push instance overrides back to the asset template definition.

To unlink an instance from a template:

- Select asset template instance in hierarchy.
- If the template has nested templates:
  - Choose **Unlink instance root** to only unlink the parent template.
  - Choose **Unlink instance root and children** to unlike the parent template and any nested child templates.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_015057_20251211_015057.md)

### Overview
This image depicts a user interface element showing a context menu that appears when interacting with a specific item named "asset_template" within a hierarchical structure labeled "Hierarchy." The menu contains several options for managing the selected asset template.

### Key Elements
- **Visual description**: The menu is a dropdown with a dark background and white text.
- **Location**: Positioned centrally below the "asset_template" item in the left panel.
- **Contents**: 
    - Rename
    - Duplicate
    - Edit Template Definition
    - Delete selection
    - Unparent child objects
    - Unlink instance root
    - Unlink instance root & children
    - Focus on selection
    - Create parent object
- **Visual styling**: The menu has a dark theme with white text and a blue highlight indicating the selected item in the left panel.

### Visual Flow / Relationships
- **Most prominent visually**: The context menu itself.
- **Arrows, lines, connectors**: None visible.
- **Spatial relationships**: The menu is directly beneath the "asset_template" item, and the items within the menu are listed vertically.

</details>

<p></p>



## Attaching scripts to asset templates and updating the definition

You can attach a script to the asset template by:

* Selecting an asset instance and under properties attaching the script as a reference.
* Or, right clicking on the asset to edit the definition and then going to the definition properties and adding the script as a reference.

### Attaching the script to the asset template instance

- Edit a script in the world from the property panel.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_015149_20251211_015149.md)

### Overview
This image depicts a user interface element showing a script management section. It includes a collapsed section header labeled "Script," a checkbox labeled "Attached Script," and a dropdown menu displaying a script name.

### Key Elements
- **Visual description**: The interface element has a dark background with light text and icons.
- **Location**: The element is located at the top of the interface.
- **Contents**: 
  - "Script" is written in white text on a dark gray header.
  - A small downward-pointing triangle icon is next to "Script," indicating that the section can be expanded.
  - "Attached Script" is a checkbox with a blue dot next to it, indicating it is checked.
  - A dropdown menu displays "Script A:ScriptA" with a downward-pointing arrow, suggesting it can be expanded or closed.
- **Visual styling**: The background is dark gray, the text is white, and the checkbox has a blue highlight.

### Visual Flow / Relationships
- The most prominent visual element is the "Script" header.
- There is no arrow or line connecting elements, but the layout suggests a hierarchical relationship where the "Attached Script" checkbox and the dropdown menu are subordinate to the "Script" header.

</details>

<p></p>


- When a script is attached to an asset template, you should see it appear as an override. You will see a blue dot next to **Attached Script** (above image) and two overrides applied: one for the script and one for motion (shown below).

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_015245_20251211_015245.md)

### Overview
The image displays a user interface section within a software application, specifically showing properties related to an asset template. The interface includes a notification about overrides that haven't been applied, along with toggles and dropdown menus for behavior settings.

### Key Elements
- **Notification Box**: Located at the top, highlighted with a red border. Contains a message stating, *"This instance has 2 overrides that haven't been applied to the definition"* with a clickable "Review" link.
- **Debug Data Section**: Below the notification, a section labeled "Debug Data" with a small arrow indicating expandable content.
- **Behavior Toggle**: A toggle switch labeled "Visible" with a blue indicator, located under the "Debug Data" section.
- **Motion Dropdown**: A dropdown menu labeled "Motion" with the option "Animated" selected, situated below the "Behavior" section.
- **Play and Record Buttons**: Two blue buttons labeled "Play" and "Record" at the bottom right corner.

### Visual Flow / Relationships
The most prominent visual element is the notification box due to its size and red border. The elements are arranged vertically, with the notification at the top, followed by the debug data section, then the behavior toggle, motion dropdown, and finally the play and record buttons at the bottom. There are no arrows or lines connecting the elements, but the layout suggests a sequential reading order from top to bottom.

</details>

<p></p>


- Edit the script’s source code by selecting **Open in external editor.** When the script’s source code is updated, this will also appear as an override.
- Publish the script change through overrides. This will update the asset template definition with the script.
- Publish the script change through the overrides panel. This will update the asset template definition with the script changes included in the latest version of the template definition. See the note at the end of this section for more information.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_015336_20251211_015336.md)

### Overview
This image depicts a user interface window titled "Template Overrides." It has a dark theme with a sidebar on the left and a table on the right. The interface allows users to manage overrides for components within a template.

### Key Elements
- **Sidebar (Left Panel)**:
  - **Title**: "OBJECT HIERARCHY"
  - **Tree Structure**: Contains nested objects labeled "asset_template," "Cube," and "Sphere."
  - **Selected Node**: "asset_template" is highlighted in blue with a counter "1" indicating the number of overrides.
  - **Background**: Dark gray with white text.
  
- **Table (Right Panel)**:
  - **Headers**: Columns labeled "COMPONENT," "PROPERTY," "OLD VALUE," and "NEW VALUE."
  - **Row Data**: A single row showing "Script" as the component, "Attached Script" as the property, and timestamps "06/11 04:18 PM" and "06/11 04:22 PM" for old and new values respectively.
  - **Background**: Dark gray with white text.
  
- **Buttons at the Bottom**:
  - **Revert All Overrides**: Gray button with white text.
  - **Apply All Overrides**: Blue button with white text.

### Visual Flow / Relationships
- **Most Prominent Element**: The "asset_template" node in the sidebar.
- **Reading Order**: The sidebar is read from top to bottom, while the table is read from left to right.
- **Spatial Relationships**: The sidebar is on the left, and the table is on the right. The buttons are at the bottom of the interface.

</details>

<p></p>



### Attaching the script to the asset template definition

- Right click on the asset instance (or asset in **Assets**) to edit the definition.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_015428_20251211_015428.md)

### Overview
The image displays a screenshot of a user interface element, specifically a context menu that appears when interacting with a file named "asset_template" within a directory labeled "SpawnPoint."

### Key Elements
- **Visual description**: The context menu has a dark background with white text and red highlights.
- **Location**: The menu is positioned to the right of the highlighted file "asset_template."
- **Contents**:
  - **Rename**: Text only, no additional elements.
  - **Duplicate**: Text only, accompanied by a keyboard shortcut "Ctrl + D."
  - **Edit Template Definition**: Highlighted in red, indicating selection.
  - **Delete selection**: Text only, with a keyboard shortcut "Del."
  - **Unparent child objects**: Partially visible at the bottom, suggesting more options are available but cut off in the image.
- **Visual styling**: The menu uses a dark theme with white text for readability. The "Edit Template Definition" option is emphasized with a red highlight.

### Visual Flow / Relationships
- **Most prominent visually**: The "Edit Template Definition" option is the focal point due to its red highlight.
- **Arrows, lines, connectors**: None present.
- **Spatial relationships**: The menu items are arranged vertically, with each option stacked one above the other. The highlighted option is visually separated from the others by color.

</details>

<p></p>


- Edit a script in the world from the property panel.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_015522_20251211_015522.md)

### Overview
This image depicts a user interface element showing a script management section. It includes a collapsed section header labeled "Script," a checkbox labeled "Attached Script," and a dropdown menu displaying a script name.

### Key Elements
- **Visual description**: The interface element has a dark background with light text and icons.
- **Location**: The element is located at the top of the interface.
- **Contents**: 
  - "Script" is written in white text on a dark gray header.
  - A small downward-pointing triangle icon is next to "Script," indicating that the section can be expanded.
  - "Attached Script" is a checkbox with a blue dot next to it, indicating it is checked.
  - A dropdown menu displays "Script A:ScriptA" with a downward-pointing arrow, suggesting it can be expanded or closed.
- **Visual styling**: The background is dark gray, the text is white, and the checkbox has a blue highlight.

### Visual Flow / Relationships
- The most prominent visual element is the "Script" header.
- There is no arrow or line connecting elements, but the layout suggests a hierarchical relationship where the "Attached Script" checkbox and the dropdown menu are subordinate to the "Script" header.

</details>

<p></p>


- Save and publish the template definition. This will create a new version of the asset that includes the script changes. See the note below for more information.

  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_015621_20251211_015621.md)

### Overview
This image depicts a dialog box within a software interface, specifically for editing a template definition. The dialog box contains text and two actionable buttons.

### Key Elements
- **Dialog Box**: A rectangular pop-up window with rounded corners, located centrally in the image.
  - **Text**: "Editing the template definition for asset_template" is displayed prominently in white text against a dark gray background.
  - **Visual styling**: The background is dark gray, and the text is white for high contrast.
- **Buttons**: Two buttons are present at the bottom of the dialog box.
  - **Discard Button**: Located on the left side, it has a dark gray background with white text that reads "Discard."
  - **Save Button**: Located on the right side, it has a blue background with white text that reads "Save."
- **Background**: The background behind the dialog box is partially visible, showing a pink and gray area which seems to be part of the main interface.

### Visual Flow / Relationships
The dialog box is the most prominent visual element, drawing attention due to its central placement and contrasting colors. The buttons are clearly differentiated by their color and position, indicating a clear call-to-action sequence. There are no arrows or lines connecting elements, suggesting a straightforward linear interaction path.

</details>

<p></p>



**❗️Important** : When you open a new world that uses this asset template, the script change will be included in the asset templates update. If the script in your world is on a different version than what is in the template update, accepting the template update will also update the script to be on the same version.