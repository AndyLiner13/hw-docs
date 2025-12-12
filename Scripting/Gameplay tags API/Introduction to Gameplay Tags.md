Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/gameplay-tags-api/introduction-to-gameplay-tags

# Introduction to Gameplay Tags

Gameplay Tags are user-defined labels given to gameplay objects. These labels allow you to define sets of objects e.g., player, respawn, and enemy to identify and manipulate using scripts. This new tag type expands on the current functionality of tags - removing existing pain points - and aligns more closely with industry standards. To learn more about possible use-cases for tags and understand how tags are used in game development, visit the [Unity](https://docs.unity3d.com/Manual/Tags.html) and [Unreal](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/Tags/) documentation on tags. With this update, your entities will automatically migrate to the new field type: “gameplayTags” and be ready for use in scripts.

Gameplay Tags allow you to:

* Assign multiple tags to a single entity (up to 5 tags with a max of 20 characters per tag)
* Manipulate tags using TypeScript e.g. add, remove, set, and compare
* Search with Typescript using AND|OR to find entities with specific tags or sets of tags on a “World” level
* Assign tags to triggers and raycasts
* Filter entities by tags in Desktop Editor

For more information on the Gameplay Tags API and to see example code, see the [API reference doc](Modify%20and%20Retrieve%20Entity%20Tags.md).

## Using Gameplay Tags in Desktop Editor and VR

Since this feature involves multiple moving parts, below are a few different scenarios for modifying and manipulating gameplay tags in Desktop Editor and Build Mode in Meta Horizon Worlds.

To quickly navigate to a specific editing workflow, use the following links:

* [Tag Editing in Desktop](Introduction%20to%20Gameplay%20Tags.md#tag-editing-in-desktop-editor)
* [Tag Editing in VR](Introduction%20to%20Gameplay%20Tags.md#tag-editing-in-vr)
* [Tag Filtering](Introduction%20to%20Gameplay%20Tags.md) (Desktop#tag-filtering-in-desktop-editor)

## Tag Editing in Desktop Editor

Using Desktop Editor, you can search for, add, remove, and modify gameplay tags.

**Search for a tag**

- Navigate to the right-most menu and find the “Gameplay Tags” section
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/f3ebd4281c61d1af243678fe4406a0793a7e92b734bc2b4a0953731be4cdcc72.md)
  
  ### Overview
  The image depicts a 3D modeling environment interface, likely from a game development tool or a 3D asset management software. The central area shows a 3D scene with various geometric shapes arranged on a flat surface. On the left side, there is a hierarchical list of objects, and on the right side, there is a properties panel displaying settings for an object named "Cylinder C."
  
  ### Key Elements
  - **Left Panel (Hierarchy)**: 
    - **Visual description**: A vertical list of objects.
    - **Location**: Left side of the image.
    - **Contents**: Includes objects like "Sphere," "Cube," "Trigger - raycast," and others.
    - **Visual styling**: Dark background with white text and icons.
  
  - **Central Scene**: 
    - **Visual description**: A 3D scene with a flat surface and several colorful cubes scattered around.
    - **Location**: Center of the image.
    - **Contents**: Multiple cubes in red, blue, green, and yellow, some with small spheres attached.
    - **Visual styling**: Simple 3D models with basic textures.
  
  - **Right Panel (Properties)**:
    - **Behavior Section**: 
      - **Visual description**: Settings for visibility, light/shadow, collision, and motion.
      - **Location**: Right side of the image.
      - **Contents**: Options like "Visible," "Light & Shadow," "Collidable," and "Collision Layer."
      - **Visual styling**: Dark background with white text and blue checkboxes.
  
    - **Attributes Section**: 
      - **Visual description**: Position, rotation, scale, texture, material roughness, and color settings.
      - **Location**: Below the Behavior section.
      - **Contents**: Values such as position coordinates (X, Y, Z) and rotation angles.
      - **Visual styling**: Dark background with white text and gray input fields.
  
    - **Gameplay Tags Section**: 
      - **Visual description**: A search bar for tags and a message indicating no tags are attached.
      - **Location**: Bottom part of the right panel.
      - **Contents**: A search bar labeled "Search attached tags" and a message stating "This object has no tags."
      - **Visual styling**: Dark background with white text and a red highlight around the section.
  
  ### Visual Flow / Relationships
  - **Most Prominent Visually**: The central 3D scene.
  - **Arrows/Connectors**: None visible.
  - **Spatial Relationships**: The left panel is a list of objects, the central scene displays the 3D models, and the right panel provides properties for the selected object.
  
  </details>
  
  <p></p>
  
  
- Enter the keyword in the search bar and press enter
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/b9c7d4a064663afd3849c200f7e17fcc130f996b38be119440bcc96bb3cf39d4.md)
  
  ### Overview
  This image depicts a user interface element within a game or application, specifically a section labeled "Gameplay Tags." It includes a search bar, a placeholder tag icon, and a message indicating that no tags are currently assigned to the object.
  
  ### Key Elements
  - **Search Bar**: Located at the top, it has a magnifying glass icon on the left and contains the text "> test". The bar has a dark background with white text.
  - **Placeholder Tag Icon**: Below the search bar, there is a small white icon resembling a tag or label.
  - **Message Text**: Positioned beneath the icon, it reads "This object has no tags."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar, as it is the largest and most central feature. The placeholder tag icon is secondary but still noticeable due to its distinct shape. The message text is the least prominent but serves as a clear indicator of the current state of the object.
  
  </details>
  
  <p></p>
  
  
- Any entities with this tag should appear

**Add a tag**

- Select the object
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/8f493d3345098a21bdef378e89812d71cabc668c6da94064a52944781688244b.md)
  
  ### Overview
  The image depicts a 3D modeling environment interface, likely from a game development tool or a 3D modeling software. The central area shows a 3D scene with various geometric shapes arranged on a platform. On the left side, there is a hierarchical list of objects, and on the right side, there are properties and attributes related to the selected object. A red bounding box highlights a specific area within the scene.
  
  ### Key Elements
  - **Left Panel (Hierarchy)**: Contains a list of objects with names such as "test Sphere," "Cube," "Cylinder C," etc. Each item has a circular icon next to it.
  - **Central Scene**: Shows a 3D environment with a flat ground and a blue sky. Several colored cubes (red, blue, green) are placed on a black platform. A small character model is also visible near the cubes.
  - **Right Panel (Properties)**: Displays properties of the selected object, which is labeled as "Cylinder C." It includes sections for Behavior, Attributes, Gameplay Tags, Physics, and More. The selected object is highlighted with a bounding box in the scene.
  - **Red Bounding Box**: Positioned over the central scene, highlighting a specific area that contains a small character model and some colored cubes.
  
  ### Visual Flow / Relationships
  - The most prominent visual is the central 3D scene.
  - Arrows or lines are not present, but the layout suggests a typical user interface flow where users interact with objects listed on the left and view properties on the right.
  - The red bounding box implies a focus on a particular area within the scene, drawing attention to the highlighted elements.
  
  </details>
  
  <p></p>
  
  
- Navigate to the right-most menu and find the “Gameplay Tags” section
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/f3ebd4281c61d1af243678fe4406a0793a7e92b734bc2b4a0953731be4cdcc72.md)
  
  ### Overview
  The image depicts a 3D modeling environment interface, likely from a game development tool or a 3D asset management software. The central area shows a 3D scene with various geometric shapes arranged on a flat surface. On the left side, there is a hierarchical list of objects, and on the right side, there is a properties panel displaying settings for an object named "Cylinder C."
  
  ### Key Elements
  - **Left Panel (Hierarchy)**: 
    - **Visual description**: A vertical list of objects.
    - **Location**: Left side of the image.
    - **Contents**: Includes objects like "Sphere," "Cube," "Trigger - raycast," and others.
    - **Visual styling**: Dark background with white text and icons.
  
  - **Central Scene**: 
    - **Visual description**: A 3D scene with a flat surface and several colorful cubes scattered around.
    - **Location**: Center of the image.
    - **Contents**: Multiple cubes in red, blue, green, and yellow, some with small spheres attached.
    - **Visual styling**: Simple 3D models with basic textures.
  
  - **Right Panel (Properties)**:
    - **Behavior Section**: 
      - **Visual description**: Settings for visibility, light/shadow, collision, and motion.
      - **Location**: Right side of the image.
      - **Contents**: Options like "Visible," "Light & Shadow," "Collidable," and "Collision Layer."
      - **Visual styling**: Dark background with white text and blue checkboxes.
  
    - **Attributes Section**: 
      - **Visual description**: Position, rotation, scale, texture, material roughness, and color settings.
      - **Location**: Below the Behavior section.
      - **Contents**: Values such as position coordinates (X, Y, Z) and rotation angles.
      - **Visual styling**: Dark background with white text and gray input fields.
  
    - **Gameplay Tags Section**: 
      - **Visual description**: A search bar for tags and a message indicating no tags are attached.
      - **Location**: Bottom part of the right panel.
      - **Contents**: A search bar labeled "Search attached tags" and a message stating "This object has no tags."
      - **Visual styling**: Dark background with white text and a red highlight around the section.
  
  ### Visual Flow / Relationships
  - **Most Prominent Visually**: The central 3D scene.
  - **Arrows/Connectors**: None visible.
  - **Spatial Relationships**: The left panel is a list of objects, the central scene displays the 3D models, and the right panel provides properties for the selected object.
  
  </details>
  
  <p></p>
  
  
- Select the “+” symbol next to the search bar
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/7b6acdd4e08d43e2ddc6ddd926eee64e6d9e273689536ee11587849d1ac15763.md)
  
  ### Overview
  This image depicts a user interface element from a software application, specifically a settings or configuration panel related to gameplay tags and physics audio material. The layout includes a search bar for tags and a dropdown menu for selecting physics audio material.
  
  ### Key Elements
  - **Search Bar**: Located at the top, spanning the width of the panel. It has a placeholder text "> Search attached tags" and a magnifying glass icon indicating a search function. The background is dark gray, and the text is white.
  - **Tag Input Field**: Below the search bar, there is a blue-highlighted input field with a tag icon on the left. The field is empty, and the placeholder text reads "0/20," suggesting a limit of 20 tags can be entered.
  - **Physics Section**: Below the tag input field, there is a section labeled "Physics." This section contains a label "Physics Audio Material" followed by a dropdown menu with the word "None" and a downward arrow, indicating that no selection has been made yet.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar, as it is the first interactive element users would engage with. The tag input field is secondary but crucial for user interaction. The Physics section is less interactive but provides additional configuration options. There are no arrows or lines connecting elements, so the relationship is primarily through the user's interaction with the search bar and tag input field.
  
  </details>
  
  <p></p>
  
  
- Enter tag name into field and press enter
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/1943bbab72aef00d896f4e629214f6786feb9bb1478dde4a0c3b406601630cbf.md)
  
  ### Overview
  This image depicts a user interface element within a software application, specifically a section labeled "Gameplay Tags." It includes a search bar, a tag input field, and a dropdown menu under the "Physics" section.
  
  ### Key Elements
  - **Search Bar**: Located at the top, it has a magnifying glass icon and the placeholder text "> Search attached tags". The background is dark gray, and the text is white.
  - **Tag Input Field**: Below the search bar, there is a blue-highlighted input field containing the text "red". The field has a tag icon on the left side and a counter "3/20" on the right indicating the number of tags attached.
  - **Dropdown Menu**: Underneath the "Physics" section, there is a dropdown menu labeled "None" with a downward arrow, suggesting that users can select a physics audio material.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the tag input field due to its blue highlight. The search bar is above the tag input field, and the dropdown menu is below the "Physics" section. There are no arrows or lines connecting elements, but the layout suggests a sequential reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  
- The tag will now appear under the object’s tags
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/8cfc6b4c115ae83619f8145b353a31f1be20420b552b7495e5ac3b5fde7c3f75.md)
  
  ### Overview
  This image depicts a user interface element from a software application, specifically a section for managing tags related to gameplay and physics settings. The layout includes a search bar, a tag entry field, and a dropdown menu for selecting physics audio material.
  
  ### Key Elements
  - **Search Attached Tags Bar**: Located at the top, this is a rectangular input field with a magnifying glass icon on the left. It contains the placeholder text "> Search attached tags". The background is dark gray, and the text is white.
  - **Tag Entry Field**: Positioned below the search bar, this field has a label "red" next to it. To the right of the label, there are two icons: one resembling a trash can for deleting the tag and another for editing the tag.
  - **Physics Section**: Below the tag entry field, there’s a section labeled "Physics". This section includes a label "Physics Audio Material" followed by a dropdown menu with the option "None".
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar at the top. The tag entry field is directly below it, and the Physics section is further down. There are no arrows or lines connecting these elements, but the layout suggests a logical flow from searching for tags to entering them and then moving on to configuring physics settings.
  
  </details>
  
  <p></p>
  
  

**Remove a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to remove and click on the “-” icon
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/cc8882391f0c667cf84bdddd9ffd5b1d3f84ea46c5f7b8209b2a403b0c63e34a.md)
  
  ### Overview
  This image depicts a user interface element from a software application, specifically a section for managing tags related to gameplay and physics settings. The interface includes a search bar, a list of tags, and a dropdown menu for selecting physics audio material.
  
  ### Key Elements
  - **Search Bar**: Located at the top, it has a magnifying glass icon and the placeholder text "> Search attached tags". It is rectangular with rounded corners and a dark background.
  - **Tags List**: Below the search bar, there are three tags listed: "red", "square", and "blue". Each tag is accompanied by a small icon resembling a tag label.
  - **Add Tag Button**: Positioned to the right of the search bar, it is a plus sign within a circle.
  - **Physics Section**: At the bottom, there is a section labeled "Physics" with a dropdown menu titled "Physics Audio Material". The dropdown currently shows "None".
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar, as it is the first interactive element users would engage with. The tags are arranged vertically beneath the search bar, and the physics section is at the bottom. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  
- The tag will be removed from the object’s tags

**Modify a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to modify and click on the pencil icon
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/93a1462cb41bcde4672bd725da2acc4f6375ad26effcb334a534fb4b430f31a5.md)
  
  ### Overview
  This image depicts a user interface element from a game development tool or asset manager. It shows a section labeled "Gameplay Tags" with a search bar and a list of tags. Below that, there's another section labeled "Physics" with a dropdown menu for selecting a physics audio material.
  
  ### Key Elements
  - **Search Bar**: Located at the top, it has a magnifying glass icon and the placeholder text "> Search attached tags". The background is dark gray, and the text is white.
  - **Tags List**: Below the search bar, there are two tags listed: "red" and "square". Each tag has a small icon resembling a tag label.
  - **Tag Removal Button**: To the right of the "square" tag, there's a small circular button with a minus sign, indicating the option to remove the tag.
  - **Physics Section**: At the bottom, there's a section labeled "Physics" with a dropdown menu labeled "None". The dropdown arrow is pointing downwards, suggesting a list of options is available but not fully visible in the image.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar at the top. The tags list is below it, and the Physics section is at the bottom. There are no arrows or lines connecting these elements, so the relationship is primarily hierarchical, with the search bar as the primary input area, followed by the tags list, and then the Physics section as a secondary setting.
  
  </details>
  
  <p></p>
  
  
- Enter the new tag name or modifications
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/465a7d31e7fb0439acf178b755f8a705ee73fe259491587a248578d97e9a8210.md)
  
  ### Overview
  This image depicts a user interface element from a software application, specifically a section for managing tags related to gameplay and physics settings. The interface includes a search bar, a tag input field, and a dropdown menu for selecting physics audio material.
  
  ### Key Elements
  - **Search Bar**: Located at the top, it has a magnifying glass icon and the placeholder text "> Search attached tags". It is rectangular with rounded corners and a dark background.
  - **Tag Input Field**: Below the search bar, there is a tag input field labeled "red" with a tag icon next to it. The input field is currently active, as indicated by the cursor inside it.
  - **Tag Entry**: The word "round" is typed into the tag input field.
  - **Counter**: To the right of the tag input field, there is a counter showing "5/20", indicating the number of tags entered out of the maximum allowed.
  - **Physics Section**: Below the tag input field, there is a section labeled "Physics" with a dropdown menu titled "Physics Audio Material" set to "None".
  
  ### Visual Flow / Relationships
  The most prominent visual element is the tag input field, which is actively being used. The counter next to it indicates progress within the tagging process. The Physics section is less interactive but still part of the interface. The layout follows a vertical flow, with elements stacked one after another.
  
  </details>
  
  <p></p>
  
  
- Click enter and the tag will update

## Tag Editing in VR

Adding, removing, and modifying tags in VR is a similar process to that of Desktop Editor. The following video shows where to find tags (under Attributes in a game object’s menu) and how to remove, add, and modify them.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453850100_962346978998093_3059839621993216811_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=1-TK9dPm86cQ7kNvwHjbYE5&_nc_oc=AdmuYeAI7MdALWUrh2eC378t2h0Rvc7KnZMt1Tc035DGIeDIvSecXgJyF22mGcdyKTq6JwLA99pT06MvMEbaOLYG&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_Afk6IDU43yMC4zrzYlNL6wOmqYEtwcZuDOrHnrwcTLtZtQ&oe=69412AA3)

## Tag Filtering in Desktop Editor

In the “Hierarchy” menu of Desktop Editor, you’re able to filter entities by their associated tags. To do so, click on the filter icon and select the appropriate tag and watch the list re-populate with only the entities using that tag.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/edaabe9b96c4de2f85aed7df792e3188a45b150013c7e54364ca19197ccaa4d6.md)

### Overview
This image depicts a 3D game development environment interface, specifically a scene editor within a game engine. The central area shows a rendered 3D environment with a skybox background, while the surrounding panels display various tools and settings related to the game development process.

### Key Elements
- **Central Scene View**: A 3D environment featuring a skybox with a gradient sunset, clouds, and a greenish structure resembling a stadium or arena. The scene includes a small red object labeled "WIP" and some blue objects that appear to be player characters or NPCs.
- **Left Panel**: Contains a Hierarchy window showing a list of objects in the scene, such as "Weapon Pulse Projectile Flyby." There are also search and filter options available.
- **Right Panel**: Displays various configuration options under "Launch Config," including settings for sound, volume, pitch, and global attributes. There’s also a "Navigation Tracker" section with a list of completed tasks.
- **Top Bar**: Shows the game mode as "CLIENT," and there are buttons for play, pause, and other controls.
- **Bottom Bar**: Includes a console window displaying error messages and a project explorer on the left side.

### Visual Flow / Relationships
The most prominent visual element is the central scene view, which serves as the focal point. The left panel provides a hierarchical overview of the scene objects, while the right panel offers detailed configuration options. The top bar provides control functions, and the bottom bar includes a console for debugging and project management.

</details>

<p></p>



## Known Issues

* Due to limitations on world builder that do not allow for collection types on Entity fields, tags are stored as a JSON serialized string. To counteract the performance implications of serialization, we’ve introduced a service that caches tags in a readily available set to perform any matching operation on an Entity’s tags.