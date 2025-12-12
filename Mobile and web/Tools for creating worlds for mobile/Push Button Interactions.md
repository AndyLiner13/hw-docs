Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/tools-for-creating-worlds-for-mobile/push-button-interactions

# Push Button Interactions

To create pushable buttons in Meta Horizon Worlds, it’s a common practice to use a Trigger Zone just above the button. When the player puts their hand in the Trigger Zone, it causes the world to behave as if they pressed the button.

This scenario looks like this:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/047f20975fe2b1bb728c7082753b8f1e13fa1b51c3f0aad976fc2b6958605d41.md)

### Overview
The image depicts a 3D-rendered scene with a character model, a cube, and a small icon in the sky. The environment appears to be a simple grid floor with a gradient blue sky in the background.

### Key Elements
- **Character Model**: A humanoid figure with a simplified design, standing on the right side of the image. The figure has a light blue body and a darker blue lower half. It is positioned with one hand on its hip and the other arm slightly bent.
- **Cube**: Located on the left side of the image, placed on a white pedestal. The cube has a red base and a transparent green top layer.
- **Icon in Sky**: A circular icon located at the top right of the image. It features a blue background with a white human figure and an arrow pointing downwards.
- **Grid Floor**: A light gray grid pattern covers the entire floor, extending into the distance.

### Visual Flow / Relationships
The most prominent visual element is the character model, which is positioned towards the right. The cube is secondary but still noticeable due to its distinct color and placement. The icon in the sky is the least prominent but stands out due to its circular shape and contrasting colors against the sky.

</details>

<p></p>



Since web and mobile players don’t directly control their hands, it’s difficult for them to put their avatar within the Trigger Zone (unless they jump on it). To overcome this limitation, you can enable the setting **Selectable in screen mode** on the Trigger Zone:

- Open your creator menu and select **Gizmos**.
- Select **Trigger Zone**.
- Grab your Trigger Zone gizmo and move up on your right thumbstick to select **...Properties**.
- Turn on the toggle next to **Selectable in Screen Mode**.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/25fe3fe19487046b6c2d298d03e42bf880748fc70a329162ed6ada47888b6118.md)

### Overview
The image displays a 3D modeling interface with a scene on the left side and a settings panel on the right side. The left side shows a 3D model of a cube with a transparent top layer, placed on a white rectangular base. The right side contains a settings panel with various options under the "Behavior" and "Attributes" categories.

### Key Elements
- **Left Side (Scene)**: A 3D model of a cube with a transparent top layer, placed on a white rectangular base. The cube has a red interior and a brown bottom layer.
- **Right Side (Settings Panel)**:
  - **Behavior Section**:
    - **Enabled**: A toggle switch is enabled.
    - **Trigger On**: Set to "Players".
    - **Object Tag**: A field with placeholder text.
    - **Selectable in Screen Mode**: A toggle switch is enabled.
    - **Interaction Prompt Icon**: Set to "Interact".
    - **Focus when selected**: A toggle switch is disabled.
  - **Attributes Section**:
    - **Position**: Values displayed as X: 0, Y: 0.55, Z: 0.
    - **Rotation**: Values displayed as X: 0, Y: 180, Z: -0.0C.
    - **Scale**: Values displayed as X: 0.7, Y: 0.05, Z: 0.7.
  - **GameplayTags Section**: A search bar labeled "Search attached tags".

### Visual Flow / Relationships
- The most prominent visual element is the "Selectable in Screen Mode" toggle switch, highlighted with a red rectangle.
- There are no arrows or lines connecting elements, but the layout suggests a sequential reading order moving from left to right and then down the page.

</details>

<p></p>

 This image is taken from the Desktop Editor, but the same functionality is available in the Properties panel for entities in VR build mode. The Desktop Editor is only available to creators with access to advanced tooling.

The result enables web and mobile players to look towards the Trigger Zone and press **E** on web, or tap the button on mobile, to fire the **OnPlayerEnteredTrigger** event for that Trigger Zone.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e7eefd427462c3951d461d9637be8d393101db615a49b69f36006bb2f3fd561c.md)

### Overview
The image depicts a 3D-rendered scene featuring a character standing facing a yellow rectangular object with a button labeled 'E' on it. The character is wearing a light gray jacket with black accents and light blue pants. The environment appears to be a simple grid floor, suggesting a virtual or game-like setting.

### Key Elements
- **Character**: A 3D model of a person with short brown hair, wearing a light gray jacket with black accents and light blue pants. The character is positioned facing away from the viewer towards the yellow object.
- **Yellow Object**: A rectangular object with a greenish-yellow top and a dark gray bottom. It has a button labeled 'E' on its surface, which is highlighted with a white cursor pointing at it.
- **Cursor**: A white hand cursor is positioned over the 'E' button, indicating interaction.

### Visual Flow / Relationships
The most prominent visual element is the yellow object with the 'E' button. The character is positioned in front of it, suggesting that the player is interacting with the object. The cursor indicates that the player is about to press the 'E' button.

</details>

<p></p>

 This image is taken from the Desktop Editor, but the same functionality is available in the Properties panel for entities in VR build mode. The Desktop Editor is only available to creators with access to advanced tooling.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/4ee3202945c94721dbcd6ea3d019faf57aeea829fee4c4e395c3fb6e2810f9c3.md)

### Overview
The image depicts a virtual environment with two human-like figures pointing at objects. The scene includes a white rectangular object with a small cube on top, and another similar object with a sphere on top. Both objects have directional arrows indicating movement axes. The background is a simple grid floor with a gradient sky.

### Key Elements
- **Human-like figure (left)**: Positioned on the left side of the image, pointing towards the white rectangular object. The figure has a blue body with a darker blue outline.
- **Human-like figure (right)**: Positioned on the right side of the image, pointing towards the white rectangular object with a sphere on top. The figure has a blue body with a darker blue outline.
- **White rectangular object (left)**: Located centrally on the left side of the image. It has a small cube on top and green and red directional arrows pointing up, down, left, and right.
- **White rectangular object (right)**: Located centrally on the right side of the image. It has a sphere on top and green and red directional arrows pointing up, down, left, and right.
- **Directional arrows**: Green arrows point left and right, red arrows point up and down, and blue arrows point upwards.
- **Sphere**: A transparent sphere with a small cube inside it, located on the right rectangular object.
- **Cube**: A small cube is placed on top of both rectangular objects.
- **Background**: A gradient sky with a light blue color and a tiled floor with a grayish tone.

### Visual Flow / Relationships
- **Most prominent visually**: The two human-like figures pointing at the objects.
- **Arrows**: The directional arrows indicate movement axes for the objects.
- **Spatial relationships**: The objects are positioned symmetrically on either side of the image, with the figures pointing towards them.

</details>

<p></p>

**Note:** If you place your **Trigger Zone** inside or behind a collidable object, the collider will prevent web and mobile users from interacting with it. When you set a trigger to **Selectable in Screen Mode**, make sure the trigger zone is bigger than the object, or turn the object’s collidability off.

## Configurable Interaction Range

The interaction range for Trigger Zones can be configured to control how close a player must be to interact with the button. Adjusting this range allows you to fine-tune the user experience for different types of interactions and device inputs.

By increasing the interaction range, you make it easier for players—especially on web and mobile platforms—to trigger the button without needing precise positioning. Conversely, reducing the range can require more deliberate player movement, which may be desirable for certain gameplay mechanics.

The interaction range setting is available in the Properties panel of the Trigger Zone entity, allowing creators to customize the effective distance at which the OnPlayerEnteredTrigger event fires.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e3f8e96b1da19090163116c44f60abe1a6359893ff5d09d0a0573510b0bb99c3.md)

### Overview
This image depicts a user interface element, specifically a settings panel within a game development environment. The panel is titled "Behavior" and contains several configuration options related to object interaction. The layout is structured with labels on the left and corresponding input fields or toggles on the right.

### Key Elements
- **Panel Title**: "Behavior"
  - **Location**: Top-left corner of the panel
  - **Contents**: Text in a bold, sans-serif font
  - **Visual styling**: Dark gray background, white text
- **Enabled Toggle**: A blue toggle switch
  - **Location**: Right side of the panel, below the title
  - **Contents**: "Enabled" text next to the toggle
  - **Visual styling**: Blue background, white checkmark
- **Trigger On Dropdown**: A dropdown menu labeled "Players"
  - **Location**: Below the Enabled toggle
  - **Contents**: "Players" text
  - **Visual styling**: Dark gray background, white text
- **Object Tag Input**: An input field
  - **Location**: Below the Trigger On dropdown
  - **Contents**: Empty input field
  - **Visual styling**: Dark gray background, white placeholder text
- **Selectable in Screen Mode Toggle**: A blue toggle switch
  - **Location**: Below the Object Tag input
  - **Contents**: "Selectable in Screen Mode" text next to the toggle
  - **Visual styling**: Blue background, white checkmark
- **Interaction Prompt Icon Dropdown**: A dropdown menu labeled "Interact"
  - **Location**: Below the Selectable in Screen Mode toggle
  - **Contents**: "Interact" text
  - **Visual styling**: Dark gray background, white text
- **Interaction Distance Input**: An input field displaying "2.50"
  - **Location**: Below the Interaction Prompt Icon dropdown
  - **Contents**: "2.50" text
  - **Visual styling**: Dark gray background, white text

### Visual Flow / Relationships
The panel is organized in a vertical list format. Each setting has a label on the left and an interactive element (toggle, dropdown, or input field) on the right. The elements are aligned vertically, with no arrows or lines connecting them. The most prominent visual is the "Enabled" toggle due to its placement at the top and distinct color contrast.

</details>

<p></p>

