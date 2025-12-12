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

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/453701050_838341574642066_6976185690380477457_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=P4puASVXfXYQ7kNvwHjDsgp&_nc_oc=AdnoJqkS-V3KSYeYxadj6AqE_pHa3-O3dCGc8aTVobZvpTzA0IfdoH9uzi3Ceyrcf7i_ZszmJrWEeQkKTFFVgQBR&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_Afkf1XBSxEtei4bVST7IZViUDHKmWIXeVDPOjmob7eSX4A&oe=69412546)

## Creating a basic asset template

There are two ways to create a template:

* By converting a legacy asset to an asset template. See [Asset Migration](Asset%20Templates.md#asset-migration) section for more information.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/82fb9e47a8814266b8c612b99c121cccb43f4b2aaff51c7d4be801fc51ddc156.md)
  
  ### Overview
  This image depicts a user interface of an asset management tool within a software application. The layout includes a sidebar with folders and a main content area displaying asset thumbnails and names. There are also interactive elements such as buttons and a notification banner at the bottom.
  
  ### Key Elements
  - **Sidebar (Left Panel)**:
    - **Visual description**: A vertical navigation panel with expandable folders.
    - **Location**: Left side of the screen.
    - **Contents**: Contains folders labeled "All Assets," "My Folders," "My Assets," and "KV test." The "My Assets" folder is expanded.
    - **Visual styling**: Dark gray background with white icons and text.
  
  - **Main Content Area (Center)**:
    - **Visual description**: A grid of asset thumbnails with names underneath.
    - **Location**: Center of the screen.
    - **Contents**: Each thumbnail has a unique icon representing the asset type, followed by the asset name. Some thumbnails have additional icons or indicators next to them.
    - **Visual styling**: Gray background with white icons and text. Some thumbnails have blue circular icons with arrows, indicating updates or actions.
  
  - **Notification Banner (Bottom)**:
    - **Visual description**: A red banner with white text.
    - **Location**: Bottom of the screen.
    - **Contents**: States "6 assets in My Assets can be updated to a new format" and includes a "Review" button.
    - **Visual styling**: Red background with white text and a blue button.
  
  - **Search Bar (Top Right)**:
    - **Visual description**: A search bar with a magnifying glass icon.
    - **Location**: Top right corner.
    - **Contents**: Placeholder text "Search My Assets."
    - **Visual styling**: White background with black text and a blue magnifying glass icon.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The main content area displaying asset thumbnails.
  - **Arrows and Lines**: Blue circular icons with arrows indicate updates or actions for specific assets.
  - **Spatial Relationships**: Elements are arranged in a grid layout within the main content area. The notification banner is positioned at the bottom, and the search bar is at the top right.
  
  </details>
  
  <p></p>
  
  
* By selecting objects in the scene and creating a new asset template from them.

To begin, first create a basic asset template.

- Add a basic cube to your scene. You can get it from the **Shapes** drop-down menu.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/f7a961780754f2e8d83a3e06ed8f44ddab8d3396bc37039b3147d248e1c1ccae.md)
  
  ### Overview
  This image depicts a modal window titled "Shapes" within a software interface. The window displays various geometric shapes represented as icons with corresponding labels underneath them. The layout is grid-based, with shapes arranged in rows and columns. The window has a dark background with lighter-colored shapes and labels for contrast.
  
  ### Key Elements
  - **Modal Window Title**: "Shapes" located at the top-left corner.
  - **Close Button**: A small "X" icon located at the top-right corner of the modal window.
  - **Search Bar**: A rectangular search bar with a magnifying glass icon located just below the title.
  - **Shape Icons**: There are twelve shape icons arranged in a 3x4 grid.
      - **Cube**: Located in the first row, first column.
      - **Sphere**: Located in the first row, second column.
      - **Cone**: Located in the first row, third column.
      - **Cylinder**: Located in the first row, fourth column.
      - **Ramp**: Located in the second row, first column.
      - **Pyramid**: Located in the second row, second column.
      - **Tube**: Located in the second row, third column.
      - **Half Cylinder**: Located in the second row, fourth column.
      - **Half Tube**: Located in the third row, first column.
      - **Faceted Cylinder**: Located in the third row, second column.
      - **Capsule**: Located in the third row, third column.
      - **Torus**: Located in the third row, fourth column.
      - **Half Torus**: Located in the fourth row, first column.
      - **Half Sphere**: Located in the fourth row, second column.
      - **Cube Soft**: Located in the fourth row, third column.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the modal window itself. The shapes are arranged in a grid layout, with each shape having its own icon and label. The search bar is positioned above the grid, suggesting that users can search for specific shapes. The shapes are evenly spaced, and the labels are placed directly beneath their respective icons. There are no arrows or lines connecting the elements, indicating a straightforward reading order from left to right and top to bottom.
  
  </details>
  
  <p></p>
  
  
- Add a basic sphere to your scene. You can get it from the **Shapes** drop-down menu.
- In the Hierarchy, create an asset out of the two shapes by selecting both of them, and then right clicking on them. In the menu that appears, click **Create Asset**, and then enter the asset details.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/43bcbff7ec608367dbe10cf568d60fb9c578e42c6a0f983ccb21901ca334346b.md)
  
  ### Overview
  The image depicts a 3D modeling software interface, specifically showing a menu that has been opened from the left side of the screen. The main workspace displays a 3D scene with a cube and a sphere, along with a grid floor and a blue sky background. There are also some UI elements indicating selection tools and a small avatar at the bottom of the screen.
  
  ### Key Elements
  - **Menu**: Located on the left side of the screen, it is a vertical dropdown menu with options such as "Create Asset," "Delete selection," "Group selection," and "Focus on selection." The menu has a dark background with white text.
  - **3D Scene**: In the center and right of the screen, there is a 3D environment with a cube and a sphere. The cube is green with a brown top, and the sphere is white with a blue dot on it. There are also axis indicators (red, green, and blue arrows) around the sphere.
  - **Grid Floor**: A light gray grid is visible at the bottom of the screen, representing the floor plane.
  - **Avatar**: A small blue figure with a white head is located near the bottom center of the screen.
  - **Background**: The background is a gradient of blue, representing the sky.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The menu on the left side.
  - **Spatial Relationships**: The menu is positioned on the left, while the 3D scene occupies the central and right areas of the screen. The grid floor spans the entire width of the screen at the bottom. The avatar is placed near the bottom center.
  
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
  
  [All image details and metadata](../../image_data/605e10739de871c736d8bbc32851236caa74a4948a83069cd49a3a3b165c668c.md)
  
  ### Overview
  This is a screenshot of a user interface displaying a list of unpublished changes within an asset management system. The interface includes a header indicating the presence of updates and unpublished changes, along with options to publish or discard changes. The layout is structured with columns for asset name, changed by, and date.
  
  ### Key Elements
  - **Header**: "Asset Updates" at the top left, "Unpublished changes (17)" in the center, and "Publish all" button on the right.
  - **Column Headers**: "ASSET," "CHANGED BY," and "DATE" appear at the top of the list.
  - **List Items**: Each item contains an icon, an asset name ("a"), a username ("jmavra"), and a timestamp.
      - **Visual description**: Icons are small, square, and gray with a white symbol inside.
      - **Location**: Top-left corner of each list item.
      - **Contents**: "a" (asset name), "jmavra" (username), and timestamps.
      - **Visual styling**: Gray icons, white text, and blue timestamps.
  - **Buttons**: "Discard" and "Publish" buttons next to the last list item.
      - **Visual description**: Blue rectangular buttons with white text.
      - **Location**: Right side of the last list item.
      - **Contents**: "Discard" and "Publish" labels.
      - **Visual styling**: Blue background, white text, and rounded corners.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The list items with timestamps and usernames.
  - **Arrows/lines/connectors**: None.
  - **Spatial relationships**: List items are arranged vertically, with each item having its own row. Buttons are aligned horizontally next to the last list item.
  
  </details>
  
  <p></p>
  
  
- From here you can either discard or publish your draft asset.
  * When you discard a draft of an asset, all asset instances in the current world will automatically switch to the latest major version, as dictated by the asset definition in the asset library.
  * When you publish a draft asset, it will create a new major version of the asset in the asset library.
- Click **Publish** publish the draft asset. You will be presented with a publish modal. You can optionally write a comment to be saved as version notes with the new version, and then when the publishing operation finishes, a new major version of the asset will be saved to asset definition in the asset library.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/8ca522887fb2d00562d3712dd8c4f2d9b6280a07a32a2229b556016ebdf293e2.md)
  
  ### Overview
  This image depicts a modal dialog box within a user interface, specifically a prompt asking the user if they want to publish a draft asset. The dialog box is centered over the main interface, which includes tabs for "Updates" and "Drafts," and a list of assets on the left side.
  
  ### Key Elements
  - **Modal Dialog Box**: A rectangular box with rounded corners, located centrally over the main interface.
    - **Title**: "Publish draft?" displayed at the top.
    - **Content**: A message explaining that the user is about to publish draft changes to an asset, creating a new version.
    - **Message**: "Tweaked some properties" is highlighted in a black box below the message.
    - **Buttons**: Two buttons at the bottom of the dialog box, labeled "Cancel" and "Publish." The "Publish" button has a blue background with a loading spinner indicating it is currently active.
  - **Background Interface**: The main interface behind the dialog box shows tabs for "Updates" and "Drafts," with "Drafts" being active. There is also a list of assets on the left side, with one asset partially visible.
  - **Interface Elements**: Buttons labeled "Discard" and "Publish" are visible outside the dialog box, suggesting actions related to the draft asset.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the modal dialog box, which is the focal point of the image. The dialog box is positioned above the main interface, ensuring it captures attention. The "Publish" button is the most interactive element, as it is highlighted and in a loading state, indicating the current action. The "Cancel" button is less prominent but still clearly visible.
  
  </details>
  
  <p></p>
  
  
- Once the asset is published, click on the **Version History** button in the Asset Details panel to see its version history.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/842eb089525b5eef51511e18332c310d668ce673071014f422d7f956b14c80b0.md)
  
  ### Overview
  The image displays a user interface element titled "Asset details." It includes a preview area, metadata fields, version history, and file download options.
  
  ### Key Elements
  - **Preview Area**: Located at the top, it features a gradient background transitioning from blue to purple, with a white cube logo centered within it.
  - **Metadata Fields**: Below the preview area, there are fields labeled "Asset Type," "Asset ID," "Owner," and "Created." The "Asset Type" field contains the word "Template," while the "Asset ID" field has a placeholder icon followed by a long numerical ID.
  - **Version History Section**: Positioned below the metadata fields, it shows a collapsed section labeled "Versions." Inside, there is a note stating "Tweaked some properties" and a button labeled "Version History."
  - **Download Button**: At the bottom, there is a button labeled "Download" with a download icon next to it.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the preview area, which draws attention due to its large size and central placement. The metadata fields follow sequentially below the preview. The "Version History" section is highlighted with a red circle, indicating its importance. The download button is located at the very bottom, completing the layout.
  
  </details>
  
  <p></p>
  
  
- The version history modal will display all of the major versions of an asset. These are all of the asset versions that have been previously published. If you go into other worlds or share an asset with other users, these are the versions that will be stored on the root asset definition. The asset can be restored to any of these versions at any time.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/b096801718fb9af1862c44a3ab0c4f8dd79b2d898568297c8af0b0f7078c1140.md)
  
  ### Overview
  This image displays a version history interface for an asset template. It includes a table listing changes made to the asset over time, with columns for ID, Added By, Date Added, and Notes. The interface has a dark theme with light-colored text and icons.
  
  ### Key Elements
  - **Header**: "Version history: asset_template" at the top.
  - **Table Headers**: "ID," "ADDED BY," "DATE ADDED," and "NOTES."
  - **Rows**: Three rows are visible, each representing a change to the asset.
      - **Row 1**: Contains an ID (3), username ("goopitygoopgoop"), date added ("Dec 4, 2023 at 12:10 PM"), and notes ("Tweaked some properties").
      - **Row 2**: Contains an ID (2), username ("goopitygoopgoop"), date added ("Dec 4, 2023 at 8:36 AM"), and no notes.
      - **Row 3**: Contains an ID (1), username ("goopitygoopgoop"), date added ("Nov 30, 2023 at 12:55 PM"), and no notes.
  - **User Avatar**: A small circular icon next to each username.
  - **ID Box**: A small box with a purple cube icon and a number indicating the ID.
  - **Current Label**: A small rectangular label saying "Current" next to the row with ID 3.
  
  ### Visual Flow / Relationships
  The interface is structured as a table with a clear hierarchical layout. The most prominent visual element is the table itself, which is divided into columns and rows. There are no arrows or lines connecting elements, but the reading order follows the standard left-to-right, top-to-bottom sequence typical of tables.
  
  </details>
  
  <p></p>
  
  

## Property Overrides

Property overrides enable you to override the property values on an instance of an asset template in a world. It effectively allows you to disconnect individual property values, while retaining a link to the root asset definition.

To override a property:

- Click on the root level asset template in your world. Review the properties. There shouldn’t be any overrides.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/65b4999783acdd8df522c3441bd882afce4740ee509266be4c26000594459b6d.md)
  
  ### Overview
  This image depicts a user interface element showing properties of a sphere object in a game development or 3D modeling software. The layout is structured into sections for properties, debug data, behavior, attributes, and material settings.
  
  ### Key Elements
  - **Properties Section**: Located at the top, contains a title "Sphere" within a black rectangular input field.
  - **Debug Data Section**: Below the properties, indicated by a downward arrow, suggesting expandable content.
  - **Behavior Section**: Contains toggles for visibility, light reflection, casting shadows, and collision properties.
  - **Attributes Section**: Includes fields for position, rotation, scale, texture, material roughness, and color.
  - **Position Fields**: Show numerical values for X, Y, Z coordinates.
  - **Rotation Fields**: Display numerical values for X, Y, Z angles.
  - **Scale Fields**: Similar to position fields but with different numerical values.
  - **Texture Field**: A dropdown menu next to a label indicating texture selection.
  - **Material Roughness Field**: Displays a numerical value.
  - **Color Field**: Shows a swatch with numerical values for RGB components.
  
  ### Visual Flow / Relationships
  The interface is organized hierarchically with expandable sections. The most prominent elements are the toggle switches under the Behavior section, as they are visually distinct and interactive. The flow moves from general properties to specific attributes, with each section clearly delineated by headers and expandable arrows.
  
  </details>
  
  <p></p>
  
  
- Now, create an overridden property value. Edit the object to change its color. You’ll notice that the color label has a bold treatment, as well as a blue dot next to it to indicate that the value has been overridden. In the overrides panel, you will see a property override on the object showing different values for the previous and current color.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/ac6b4b58282880fdedcf474099d171c656a0450232846761609935a63a53fbcc.md)
  
  ### Overview
  This image displays a user interface element showing properties settings for an object or model. It includes fields for adjusting position, rotation, scale, texture, material roughness, and color. The layout is structured with labels and input fields arranged vertically.
  
  ### Key Elements
  - **Position**: Located at the top left, contains X, Y, Z coordinates with input fields.
      - **Visual description**: Input fields with placeholder text.
      - **Location**: Top-left corner.
      - **Contents**: Placeholder text `-0.69`, `0`, `0`.
      - **Visual styling**: Dark background with white text, black input fields.
  - **Rotation**: Below Position, similar layout with X, Y, Z coordinates.
      - **Visual description**: Input fields with placeholder text.
      - **Location**: Directly below Position.
      - **Contents**: Placeholder text `0`, `180`, `-0.0C`.
      - **Visual styling**: Same as Position.
  - **Scale**: Below Rotation, with X, Y, Z coordinates.
      - **Visual description**: Input fields with placeholder text.
      - **Location**: Directly below Rotation.
      - **Contents**: Placeholder text `1`, `1`, `1`.
      - **Visual styling**: Same as Position.
  - **Texture**: Below Scale, with a downward arrow indicating a dropdown menu.
      - **Visual description**: A small downward arrow next to a label.
      - **Location**: Below Scale.
      - **Contents**: Label `Texture`.
      - **Visual styling**: Dark background with white text, light gray arrow.
  - **Material Roughness**: Below Texture, with a value field.
      - **Visual description**: A numeric input field with a value.
      - **Location**: Below Texture.
      - **Contents**: Value `0.5`.
      - **Visual styling**: Light gray background with black text.
  - **Color**: Below Material Roughness, with a color swatch and numerical values.
      - **Visual description**: A color swatch with a hex code and three numerical values.
      - **Location**: Below Material Roughness.
      - **Contents**: Color swatch with hex code `#8B0000` (dark red), and numerical values `0.20`, `0.03`, `0.10`.
      - **Visual styling**: Dark red swatch, light gray background for numerical values.
  
  ### Visual Flow / Relationships
  The elements are arranged vertically, with each property having its own label and input field. The layout is linear, moving from top to bottom. There are no arrows or connectors, and the reading order follows the vertical arrangement.
  
  </details>
  
  <p></p>
  
  
- From the property overrides panel, you can either select specific overrides to apply back to the definition, or apply all overrides. When you apply overrides back to the asset template definition, all instances whose matching properties haven’t been overridden will inherit the changes, and a new draft version of the asset will be created.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/73fed3df1147c82b477df155eda6cf5e5972c85fc94e6a14a74dee915e71f14e.md)
  
  ### Overview
  This image depicts a user interface element showing an object hierarchy on the left side and a table on the right side displaying property changes. The left side has a tree-like structure with expandable nodes, while the right side shows a table with columns for component, property, old value, and new value.
  
  ### Key Elements
  - **Left Panel (Object Hierarchy)**:
    - **Visual description**: A vertical list with expandable nodes.
    - **Location**: Left side of the image.
    - **Contents**: Nodes labeled as "asset_template," "Sphere," "Cube," and "Cylinder C."
    - **Visual styling**: Dark background with light text, blue highlight when expanded or selected.
  
  - **Right Panel (Table)**:
    - **Visual description**: A table with headers for component, property, old value, and new value.
    - **Location**: Right side of the image.
    - **Contents**: 
      - **Row 1**: 
        - **Component**: Empty checkbox.
        - **Property**: Attributes.
        - **Old Value**: `(0.93,0.92,0.93,...)`
        - **New Value**: `(0.10,0.92,0.93,...)`
      - **Row 2**: 
        - **Component**: Empty checkbox.
        - **Property**: Color.
        - **Old Value**: `(0.93,0.92,0.93,...)`
        - **New Value**: `(0.10,0.92,0.93,...)`
    - **Visual styling**: Dark background with light text, blue highlight for the "Sphere" node.
  
  - **Buttons at the Bottom**:
    - **Revert All Overrides**: Gray button with white text.
    - **Apply All Overrides**: Blue button with white text.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Sphere" node under "asset_template" is highlighted, indicating selection.
  - **Arrows/Connectors**: None.
  - **Reading order**: The left panel is read vertically first, then the right panel is read horizontally from left to right.
  
  </details>
  
  <p></p>
  
  
- It’s also possible to revert overrides. Reverting override values will revert the asset back to the same state as any draft version that exists, or in the absence of a draft version, the current major version of the asset.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652316_512500674621222_1012367075903542989_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=0k7qfoopEBEQ7kNvwF9zYjR&_nc_oc=AdkmLLprS52lgZTBAjHtW39qFWYa7up2MsxqoaUln4TvTd0jofMdYwKJ7gFbVjvVogFsFyIzqI3FmYXchZ3160pB&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfmeJd8cAwis9ZjgCQ5TEnzlCOmXPBeLE2SNXL8UHnU2mg&oe=6955827B)

**Note:** Property overrides persist even when you update the asset. To test this, you can edit the asset definition, add a new shape to it and then exit. You will see that the color of the sphere will remain even after the update!

## Asset Migration

Assets that were in your asset library before asset templates need to be migrated in order to work with the new template format. This is a very easy process, but may take some time for a larger amount of assets.

The following steps will walk through asset migration:

- You will see a blue icon at the top right corner of an asset card if the asset needs to be migrated. Right click on the asset card, and select **Update Asset** from the menu that appears.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452665936_512500581287898_7545021707173957534_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=q5oIYnWxl24Q7kNvwEuibBx&_nc_oc=AdkuCN9hdpBgHz0MEkuhJCA9_MSURZa1emetWh9fpfjahiaOa5OETPI_Zpup1aOxWTL6Gusc5KC4ONjOVhtiCP5u&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_Aflf1W5naNOw4R3ShHOb09nmLfWIdUjC84AxIhSrWijRsg&oe=69558B24)
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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934219_512500594621230_5600854580075909703_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=iSynghBUPcMQ7kNvwFGpOT0&_nc_oc=AdleH61TLORItXDEJ_1d1JpDrIjz-DA2gOoZn991nohJLHtLL5gVZOHplCghGHxeuQZjj8V5xOXWCC3OPf7iJOLd&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfnWNlPpEk1YdU5OXsCVl6dAu15I80UWAINvuRmI1_aBjA&oe=69557CCE)

## Attaching scripts to asset templates and updating the definition

You can attach a script to the asset template by:

* Selecting an asset instance and under properties attaching the script as a reference.
* Or, right clicking on the asset to edit the definition and then going to the definition properties and adding the script as a reference.

### Attaching the script to the asset template instance

- Edit a script in the world from the property panel.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452953164_512500601287896_1058603146175003068_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=4f_Pn-02kY8Q7kNvwGwYra4&_nc_oc=Adm_kbYMzaNnjSy1cCM9tXrKo45ADQCc0ujXxGGRgtvIMKiWWAqL8I9Vk249GFP1jO0WFd3QfOGJgdoD3RGEBNLX&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AflGP3T4RSkGcafYV8_if6WAQBZbtRoLSVyXQM_zlkmi1g&oe=69557D4E)
- When a script is attached to an asset template, you should see it appear as an override. You will see a blue dot next to **Attached Script** (above image) and two overrides applied: one for the script and one for motion (shown below).

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452652931_512500564621233_8795829224957538121_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=wyrsesuufpYQ7kNvwFjykc2&_nc_oc=AdnNS0ngeRBADn2v24peiEIVZdD3awg8P3Jm35I3z1G5_ejcmhp7gWQ5qoGAyzJ6M7b1tfjYFD67Xf6l6iLQp4m1&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfnmNpM-Kbr3gy0CGD8udpYHMnhTGT2j4RQQRFD06rsZew&oe=6955863A)
- Edit the script’s source code by selecting **Open in external editor.** When the script’s source code is updated, this will also appear as an override.
- Publish the script change through overrides. This will update the asset template definition with the script.
- Publish the script change through the overrides panel. This will update the asset template definition with the script changes included in the latest version of the template definition. See the note at the end of this section for more information.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652238_512500577954565_6836600478890992788_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=VI6vp15mMf0Q7kNvwFx8OoB&_nc_oc=AdkBTDbgxA2YcLF9Qh2VOvsP1ewBC279DJigGfWRUd3WYmVp9Cfb-jmicoeAc21mTu6yaRWvD8-iixEXAaEcnYyF&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AflcdWwLLp9T7ltwr11aOsXurJ3wO77JqdF8gbtyy28JjQ&oe=69559AB3)

### Attaching the script to the asset template definition

- Right click on the asset instance (or asset in **Assets**) to edit the definition.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452951204_512500597954563_4508069784119552394_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=jXfTUkKYNbsQ7kNvwGx1U6I&_nc_oc=AdlJyMbShYTDerB7lzwtPBtQjm9NxAcQhKiFlheIssXnHa7uwc7UAfrueY2QA0rXOZH8-jm2B19URWPY2FnIukqL&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AflIKn2UTXfdETLcI_NK9BGOqSzchLadh-0d9k9SCrlH8w&oe=6955A167)
- Edit a script in the world from the property panel.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452054064_512500541287902_5048148391692387350_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=7aVr431WrCgQ7kNvwFzMr4Y&_nc_oc=AdmGrfjPsNo_UjOIvk2HecdPYiZk71T_zL6jlVradY08-9_AKpbnLoytxw9-BLYcftzMaxGlZRSaK5dMvIOboTXP&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfllW7MDT7mScSQVBcGaVlbMupF77ZOef7MxQkiYADMcQQ&oe=69556DBC)
- Save and publish the template definition. This will create a new version of the asset that includes the script changes. See the note below for more information.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452757259_512500557954567_7387970478247480678_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=1KoEizJlcAwQ7kNvwHyW1B7&_nc_oc=AdmrERiIE4EgBv-8UmQ0IS-8NLPdKcdArKTUGvxgp1Yqo74HjtA8bG77jBHueouUuBqPACPYdAsTJ08zYnwLMc7a&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=GIvhmXZkUX_ZP6-4SBWB8A&oh=00_AfnqpKkwkjJc5JJ5z89mHovwn7G_-RHNhKJr_7CJOrl7eA&oe=695588BF)

**❗️Important** : When you open a new world that uses this asset template, the script change will be included in the asset templates update. If the script in your world is on a different version than what is in the template update, accepting the template update will also update the script to be on the same version.