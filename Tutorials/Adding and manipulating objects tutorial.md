Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/batting-cage-tutorial

# Adding and manipulating objects tutorial

In this tutorial, you’ll learn how to create a simple Meta Horizon Worlds game. The tutorial shows you how to create a world, add assets to it, write scripts to attach to entities to create behavior, and try going to the world on a mobile device and in virtual reality.

The key learning objectives are the following:

* Writing TypeScript code
* Setting entity ownership
* Handling object collisions
* Trying the world on mobile and in virtual reality

## Prerequisites

This tutorial requires you to use the Meta Horizon Worlds desktop editor. See [Install and run the desktop editor](../Get%20started/Install%20the%20desktop%20editor.md) for instructions.

## Section 1: Create a new world

In this section, [create a new world](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Create%20a%20New%20World.md) for your game.

**Note**: When you’re building your world, Meta Horizon Worlds automatically saves your progress and it’s part of your online save flow.

## Section 2. Create an avatar, a bat, and a ball

In this section, you’ll spawn an avatar into your world, and then you’ll add a baseball bat and a baseball to your world.

- Select the **SpawnPoint** gizmo in the Hierarchy. This is the avatar.

  <details>
  <summary>Select the spawn point gizmo in the hierarchy</summary>
  
  <p></p>
  
  [Select the spawn point gizmo in the hierarchy](../image_data/01031b9c955e6dcc6700132d02639cbbd8d652d0c6bcae84edecbdaeb8173ef7.md)
  
  ### Overview
  This image depicts a user interface element within a hierarchy view. It shows a search bar at the top followed by a list item labeled "SpawnPoint."
  
  ### Key Elements
  - **Search Bar**: Located at the top-left corner. Contains a magnifying glass icon and the placeholder text "> Search hierarchy".
  - **List Item**: Positioned below the search bar. Contains the text "SpawnPoint" with a plus sign icon preceding it.
  - **Cursor**: A white arrow cursor is positioned over the "SpawnPoint" list item, indicating interaction readiness.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "SpawnPoint" list item due to its central placement and the cursor hovering over it. The search bar is secondary but still important as it suggests functionality for searching within the hierarchy.
  
  </details>
  
  <p></p>
  
  
- Focus the camera on the avatar by pressing the “F” key.

  <details>
  <summary>Focus the camera on the avatar</summary>
  
  <p></p>
  
  [Focus the camera on the avatar](../image_data/22a74454d3e8a9ebae85669db5836982a79233efa7145035a8cfbdfa08832295.md)
  
  ### Overview
  This image depicts a 3D modeling software interface, specifically showing a character model within a bounding box. The layout includes a sidebar, a central workspace, and a toolbar at the top.
  
  ### Key Elements
  - **Sidebar (Left Panel)**: Contains a tree-like structure labeled "Hierarchy" with a node named "SpacePoint" highlighted in blue.
  - **Central Workspace**: Shows a 3D grid floor and a sky background. A blue character model is positioned within a transparent blue bounding box.
  - **Toolbar (Top)**: Features various icons, likely for navigation and editing functions, such as play, pause, and settings.
  - **Character Model**: A simple blue humanoid figure with a head, torso, arms, and legs. The character is standing upright and facing slightly to the right.
  - **Bounding Box**: A transparent blue rectangular box surrounds the character, indicating the area being manipulated or selected.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the character model within the bounding box. The toolbar at the top provides contextual tools for interaction, while the sidebar offers hierarchical organization of objects within the scene.
  
  </details>
  
  <p></p>
  
  
- Spawn a new cylinder object into the scene, and name it “Bat”. Click **Build** > **Shapes** > **Cylinder**.

  <details>
  <summary>Spawn a new cylinder object into the scene</summary>
  
  <p></p>
  
  [Spawn a new cylinder object into the scene](../image_data/5efad6705ed7e95d4c0cf8046c6cfc368e2b29f8a3d8cf391dfa803134820a5d.md)
  
  ### Overview
  This image depicts a portion of a user interface, likely from a software application related to design or modeling, given the presence of "Shapes" and "Gizmos" options. The visual is a menu or dropdown with a focus on the "Shapes" option.
  
  ### Key Elements
  - **Visual description**: A dropdown menu with a dark background and light-colored text.
  - **Location**: Top section of the image.
  - **Contents**: The text "Shapes" is highlighted with a cursor arrow pointing towards it.
  - **Visual styling**: Dark gray background, white text, and a subtle drop shadow under the "Shapes" text.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Shapes" option, as indicated by the cursor.
  - **Spatial relationships**: The "Shapes" option is adjacent to another option labeled "Gizmos," which is partially visible below it. There are no arrows or lines connecting elements, suggesting a simple linear reading order.
  
  </details>
  
  <p></p>
  
  
- Spawn a new sphere object into the scene, and name it “Ball”. Click **Build** > **Shapes** > **Sphere**. Your Hierarchy should now look like this:

  <details>
  <summary>Spawn a nhew sphere object into the scene</summary>
  
  <p></p>
  
  [Spawn a nhew sphere object into the scene](../image_data/dcc465d55e072e08df4c4423722b32ceb2c70d0896574881fef223c6676d3139.md)
  
  ### Overview
  This image depicts a user interface element showing a hierarchical structure, likely from a software application. The main focus is on a search bar at the top, followed by a list of items under a heading labeled "Hierarchy."
  
  ### Key Elements
  - **Search Bar**: Located at the top, spanning horizontally across the width of the interface. It has a dark background with a light-colored magnifying glass icon on the left side and a light-colored placeholder text "> Search hierarchy <" inside.
  - **Heading**: Positioned above the search bar, reads "Hierarchy" in white text against a dark background.
  - **Items List**: Below the search bar, there are three items listed vertically:
    - **SpawnPoint**: A small icon resembling a person figure next to the text.
    - **Bat**: A small icon resembling a bat next to the text.
    - **Ball**: A small icon resembling a ball next to the text, highlighted with a blue background indicating selection or active status.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar at the top. The items list is arranged vertically beneath it. There are no arrows or lines connecting the elements, but the vertical arrangement implies a hierarchical relationship. The selected item ("Ball") is visually distinct due to its blue background.
  
  </details>
  
  <p></p>
  
  
- Resize the cylinder to resemble a bat, and place it in front of the spawn point.

  <details>
  <summary>Resize the cylinder scale values</summary>
  
  <p></p>
  
  [Resize the cylinder scale values](../image_data/6686a34b2c426c69d4444c0558655339a6551ce7ab1592f002aa1532deabf8b1.md)
  
  ### Overview
  This image displays a user interface element showing scaling parameters for an object. The layout is simple, with three fields labeled X, Y, and Z, each containing numerical values.
  
  ### Key Elements
  - **X Field**: Located in the first column, contains the value `0.1`.
  - **Y Field**: Located in the second column, contains the value `0.1`.
  - **Z Field**: Located in the third column, contains the value `1`.
  - **Label**: Positioned above the fields, reads "Scale".
  
  ### Visual Flow / Relationships
  The elements are arranged in a grid-like structure with the label "Scale" at the top. The fields are horizontally aligned under the respective labels. There are no arrows or lines connecting the elements, indicating a straightforward reading order from left to right.
  
  </details>
  
  <p></p>
  
  
- Place the bat in front of the spawn point. To move the bat easily, activate the on-screen Position Manipulator Handles by pressing “W”, and then drag the bat to where you want it.

  <details>
  <summary>Place the bat in front of the spawnpoint</summary>
  
  <p></p>
  
  [Place the bat in front of the spawnpoint](../image_data/bc09976c3896ea279986d99e4789881eb0dee47b42556e669eabf14f56373e9d.md)
  
  ### Overview
  This image depicts a 3D scene with a humanoid figure holding a rectangular object. The environment includes a grid floor and a gradient sky background. There are also directional indicators and a small icon at the bottom left corner.
  
  ### Key Elements
  - **Humanoid Figure**: A blue-colored, simplified human form standing upright. It holds a rectangular object horizontally in front of its body.
  - **Rectangular Object**: A light blue rectangle with a red dot near one end and a green arrow pointing upwards attached to it.
  - **Directional Arrows**: Two blue arrows are visible—one pointing left and one pointing right, both attached to the rectangular object.
  - **Gradient Sky**: A light blue gradient sky forms the backdrop.
  - **Grid Floor**: A tiled floor with a light gray grid pattern.
  - **Small Icon**: A small blue icon resembling a plane or aircraft is located at the bottom left corner of the image.
  
  ### Visual Flow / Relationships
  The most prominent visual is the humanoid figure holding the rectangular object. The directional arrows and the green arrow are secondary elements that provide additional information about the object's orientation. The grid floor and gradient sky serve as the background, providing context for the scene.
  
  </details>
  
  <p></p>
  
  
- Resize the sphere to make it the approximate size of a baseball.

  <details>
  <summary>The resized scale values</summary>
  
  <p></p>
  
  [The resized scale values](../image_data/fb16f807bf46d52490eeeaba14fc9ad7457ccde48dd5755831e2fd82576889eb.md)
  
  ### Overview
  This image depicts a small interface element showing scaling parameters for an object in a 3D modeling software. The layout is minimalistic, with a single parameter labeled "Scale" and three numerical values next to it.
  
  ### Key Elements
  - **Visual description**: A rectangular panel with rounded corners.
  - **Location**: Centered horizontally and vertically within the image.
  - **Contents**: Contains the word "Scale" at the top left, followed by three numerical values "X: 0.15", "Y: 0.15", and "Z: 0.15".
  - **Visual styling**: The background is white, the text is black, and there are no additional elements or decorations.
  
  ### Visual Flow / Relationships
  The most prominent feature is the "Scale" label, which draws attention due to its placement at the top left. The numerical values follow sequentially, indicating the scaling factors along the X, Y, and Z axes. There are no arrows or lines connecting these elements, suggesting a linear reading order from left to right.
  
  </details>
  
  <p></p>
  
  
- Reposition the ball high in the air, slightly in front of the spawn point.

  <details>
  <summary>The ball's new position values</summary>
  
  <p></p>
  
  [The ball's new position values](../image_data/beed7c9ba98ff6e95698a72e34074496a730680af8672dcb6f484a9dedfb7c35.md)
  
  ### Overview
  This image displays a simple interface element showing positional coordinates in a coordinate system. The layout consists of a label followed by three numerical values representing X, Y, and Z axes respectively.
  
  ### Key Elements
  - **Label ("Position")**: Located at the top-left corner. It is a plain text label without any additional styling.
  - **X Coordinate**: Positioned next to the label "Position". It shows the value "0".
  - **Y Coordinate**: Positioned next to the X coordinate. It shows the value "5".
  - **Z Coordinate**: Positioned next to the Y coordinate. It shows the value "2".
  
  ### Visual Flow / Relationships
  The elements are arranged in a horizontal line, with the label on the far left and the numerical values aligned to its right. There are no arrows, lines, or connectors indicating a specific reading order.
  
  </details>
  
  <p></p>
  
  

  <details>
  <summary>This is what the ball looks like high in the air</summary>
  
  <p></p>
  
  [This is what the ball looks like high in the air](../image_data/29325384728a9869b644aeebe551097d2a5464cb6c6a2b6da382d0e60167da86.md)
  
  ### Overview
  This image depicts a simple 3D environment with a character holding a pole vaulting pole, preparing to jump over a bar. The scene includes a graphical representation of forces acting on the character, indicated by vectors pointing upwards and to the right.
  
  ### Key Elements
  - **Character**: A small human figure wearing a blue outfit, positioned at the bottom left of the image. The character is holding a pole vaulting pole.
  - **Pole Vault Bar**: A red horizontal bar located near the bottom of the image, slightly to the right of the character.
  - **Vectors**: Three green, red, and blue arrows are shown above the character. The green arrow points upwards, the red arrow points downwards, and the blue arrow points to the right.
  - **Background**: A gradient sky transitioning from light blue at the top to white at the bottom, representing the horizon.
  
  ### Visual Flow / Relationships
  The most prominent visual is the character and the pole vaulting setup. The vectors above the character suggest the forces involved in the jump, with the green arrow indicating upward force, the red arrow suggesting downward force, and the blue arrow indicating horizontal force. The bar is the target for the jump.
  
  </details>
  
  <p></p>
  
  

  You place the baseball up high because it will take time to fall down to the player, and the player needs this time to grab the bat.
- Set the **Behavior** properties on the ball.

  - Select the Ball object from the Hierarchy.
  - Enable **Collidable**. This ensures that the ball can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Set **Interaction** = “Physics”.
  - Enable **Gravity**, and set it to a custom gravity value to make the ball fall slower so it’s easier for the player to hit. For example, try using a value of “-0.20” instead of the default “-9.81” m/s2.

    <details>
    <summary>Enable gravity</summary>
    
    <p></p>
    
    [Enable gravity](../image_data/4457d7c7af0967a86ecdc2dedabe43849a811049f61d5686acf8dfd0482ef5e3.md)
    
    ### Overview
    This image depicts a settings panel for configuring the behavior of an object within a game or simulation environment. The panel is divided into several sections, each with toggle switches and dropdown menus for selecting options.
    
    ### Key Elements
    - **Toggle Switches**: Located on the right side of the panel, these switches control various behaviors. They are blue with white text indicating their status ("Visible", "Collidable", "Gravity").
    - **Dropdown Menus**: Positioned next to the toggle switches, these menus allow selection of specific collision layers ("Collision Layer"), motion types ("Motion"), and interaction modes ("Interaction").
    - **Text Labels**: These labels describe the functionality of the toggles and dropdowns. Examples include "Visible", "Collidable", "Collision Layer", "Motion", "Interaction", "Gravity", and "Use Custom Gravity".
    
    ### Visual Flow / Relationships
    The layout is structured with toggle switches on the right and corresponding labels and dropdown menus on the left. The visual hierarchy is clear, with the toggle switches being the most prominent due to their placement and distinct color contrast against the dark background.
    
    </details>
    
    <p></p>
    
    
- Set the **Behavior** properties on the bat.

  - Select the Bat object from the Hierarchy.
  - Enable **Collidable**. This ensures that the bat can collide with other objects.
  - Set **Motion** = “Interactive”. When you set this value, the **Interaction** property appears.
  - Ensure that **Interaction** = “Grabbable”.

    <details>
    <summary>Interaction equals grabbable</summary>
    
    <p></p>
    
    [Interaction equals grabbable](../image_data/d85f00179eb1bca08ac2853e56181807ff5659f74e5d7ae108f30284b382406d.md)
    
    ### Overview
    This image depicts a user interface element, specifically a settings or configuration panel, likely from a software application. It shows a section titled "Behavior" with several configurable options.
    
    ### Key Elements
    - **Visible**: Located in the top-left area, this option has a toggle switch next to it, indicating whether the behavior is visible or not. The toggle switch is blue with a white checkmark inside.
    - **Collidable**: Positioned below "Visible," this option also features a toggle switch, which is similarly styled as the one above.
    - **Collision Layer**: Situated beneath "Collidable," this option includes a dropdown menu labeled "Everything." The dropdown menu is a light gray rectangle with a downward-pointing arrow on the right side.
    - **Motion**: Below "Collision Layer," this option displays a dropdown menu labeled "Interactive." The dropdown menu is styled identically to the previous one.
    - **Interaction**: Positioned at the bottom, this option shows another dropdown menu labeled "Grabbable." Similar to the others, it has a light gray rectangle with a downward-pointing arrow on the right side.
    
    ### Visual Flow / Relationships
    The elements are arranged vertically, with each option stacked directly below the previous one. The toggle switches are aligned horizontally to the right of their respective labels. The dropdown menus are aligned to the right of their labels as well. There are no arrows or lines connecting the elements, suggesting a linear reading order from top to bottom.
    
    </details>
    
    <p></p>
    
    

When you run the simulation, the player spawns into the world. You can move the avatar over to the bat, and you can grab it, but you can’t swing it yet. The ball falls down a couple of seconds later.

## Section 3. Create the floor, and setup ball reinitialization

In this section, you’ll create the floor, and then configure collisions with it.

If the player swings at the baseball and misses, the ball simply falls to the floor. But when this happens, the ball should automatically move back to its original starting position, and then fall all over again. You need to add the code to accomplish this.

- Spawn a new cube object into the scene, and rename it “Floor”. Click **Build** > **Shapes** > **Cube**. Your Hierarchy should now look like this:

  <details>
  <summary>Rename the cube object floor</summary>
  
  <p></p>
  
  [Rename the cube object floor](../image_data/f35d469d91f0d72955a1a078eadd866ceab553f60e647b137e48638761de8ef6.md)
  
  ### Overview
  This image depicts a user interface element showing a hierarchical structure, likely from a game development tool or asset manager. The interface includes a search bar at the top, followed by a list of items under a heading labeled "Hierarchy."
  
  ### Key Elements
  - **Search Bar**: Located at the top, spanning horizontally across the width of the interface. Contains a placeholder text "> Search hierarchy <".
  - **Items List**: Below the search bar, there is a vertical list of items. Each item has a small icon next to its name.
      - **SpawnPoint**: Icon resembling a rocket, followed by the text "SpawnPoint".
      - **Bat**: Icon resembling a bat, followed by the text "Bat".
      - **Ball**: Icon resembling a ball, followed by the text "Ball".
      - **Floor**: Icon resembling a floor tile, followed by the text "Floor". This item is highlighted, indicating it is currently selected or active.
  - **Icons**: Small icons precede each item name, representing different entities or assets.
  - **Background**: Dark gray background with lighter gray accents around the search bar and item list.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the **selected "Floor" item**, which is highlighted with a blue background. The items are arranged vertically, with no connecting lines or arrows, suggesting a simple list view rather than a tree structure. The search bar is positioned at the top, implying that users can search for specific items within the hierarchy.
  
  </details>
  
  <p></p>
  
  
- Change the dimensions of the Floor object so that it covers a relatively wide playing area.

  <details>
  <summary>Position and scale the play area</summary>
  
  <p></p>
  
  [Position and scale the play area](../image_data/60b8894feb1bff9e924e2c10eeec31047b69fcc24e70b5edea3e7b4e35c7a3d3.md)
  
  ### Overview
  This image depicts a user interface element showing a scale with numerical values for X, Y, and Z axes. The layout is simple and linear, with the scale label at the top and the numerical values aligned horizontally below it.
  
  ### Key Elements
  - **Scale Label**: Located at the top-left corner, the label reads "Scale".
  - **X Value**: Positioned to the right of the scale label, the value is "50". It is displayed in white text against a dark background.
  - **Y Value**: Situated next to the X value, the Y value is "0.05". It also has white text on a dark background.
  - **Z Value**: Positioned to the right of the Y value, the Z value is "50". Similar to the others, it is white text on a dark background.
  - **Background**: The entire interface has a dark background, likely black or very dark gray.
  
  ### Visual Flow / Relationships
  The visual hierarchy is straightforward, with the scale label being the most prominent element due to its placement at the top. The numerical values follow in a horizontal line beneath the label, with no connecting lines or arrows indicating a specific reading order. The elements are aligned horizontally and are evenly spaced.
  
  </details>
  
  <p></p>
  
  

  <details>
  <summary>Your floor should look like this</summary>
  
  <p></p>
  
  [Your floor should look like this](../image_data/f54071c814690a6b0560ac32917fd5dd83e05335d7597973a89b0781c11f5d54.md)
  
  ### Overview
  This image depicts a simple 3D scene with a character performing a jump. The character is mid-air, holding a paddle-like object, suggesting a game or simulation environment. The background is minimalistic, featuring a flat ground and a clear sky.
  
  ### Key Elements
  - **Character**: A small humanoid figure in mid-air, wearing a blue outfit. The character is holding a long, thin object resembling a paddle.
  - **Ground**: A flat, light-colored surface that resembles a playing field or arena.
  - **Sky**: A gradient of light blue, indicating a clear sky.
  - **Paddle**: A long, thin object held by the character, positioned horizontally.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the character in mid-air, which draws immediate attention due to its central placement and dynamic pose. The ground serves as a base for the action, while the sky provides a neutral backdrop. There are no arrows or lines connecting elements, but the implied reading order follows the character's upward movement.
  
  </details>
  
  <p></p>
  
  
- Add a **Gameplay Tag** to the Floor object, and name it “floor”.

  <details>
  <summary>Name the gameplay tag floor</summary>
  
  <p></p>
  
  [Name the gameplay tag floor](../image_data/57069f1cc9dbffca2bc03a3d24ad439366f296eb66256ee177d66ee0979ca1a1.md)
  
  ### Overview
  This image depicts a user interface element within a tagging system, likely part of a game development tool or similar application. The focus is on a search bar and a dropdown menu displaying tags related to gameplay.
  
  ### Key Elements
  - **Search Bar**: Located at the top, spanning horizontally across the interface. It has a light gray background and contains a placeholder text "> Search attached tags". The search bar has a magnifying glass icon on the left side.
  - **Dropdown Menu**: Positioned below the search bar, showing a list of tags. The first tag displayed is "floor", with a small icon resembling a floor symbol next to it. The dropdown menu has a white background with black text.
  - **Add Tag Button**: Situated to the right of the search bar, depicted as a plus sign "+" enclosed in a circle.
  - **Background**: The overall background is dark gray, providing contrast to the lighter elements.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar, which serves as the primary interaction point. The dropdown menu is secondary but closely related, as it provides results based on the search query. The add tag button is a tertiary element, designed to initiate the creation of new tags. There is no explicit visual flow indicated beyond the standard reading order from left to right and top to bottom.
  
  </details>
  
  <p></p>
  
  
- Select the Ball from the Hierarchy.
- Set the following **More** properties on the Ball.

  - Set **Collision Events From** = “Objects Tagged”.

    <details>
    <summary>Collision events from objects tagged</summary>
    
    <p></p>
    
    [Collision events from objects tagged](../image_data/ae56e544971bdfef8c0da13f54c5c7d36510bd01ddde132b307b3031ba2544a2.md)
    
    ### Overview
    This image depicts a dropdown menu within a user interface, specifically a game development tool or editor. The dropdown is part of a settings or configuration panel, as indicated by the surrounding text and options.
    
    ### Key Elements
    - **Dropdown Menu**: Located in the upper right area of the image. It is a vertical list with options.
      - **Visual description**: A rectangular dropdown with rounded corners.
      - **Location**: Positioned to the right of the "More" section heading.
      - **Contents**: Contains the following items:
        > "Objects Tagged"
        > "Nothing"
        > "Players"
        > "Objects Tagged" (selected option, highlighted with a checkmark)
        > "Both"
      - **Visual styling**: The dropdown has a light gray background with black text. The selected item has a subtle shadow effect, making it stand out slightly.
    - **Background**: The background is dark gray, typical of a sidebar or menu area.
    - **Text Alignment**: The text within the dropdown is vertically aligned, with each option centered horizontally.
    
    ### Visual Flow / Relationships
    - **Most Prominent Element**: The selected option "Objects Tagged" is the most prominent due to its highlighted state.
    - **Arrows/Connectors**: There are no arrows or connectors visible in this image.
    - **Spatial Relationships**: The dropdown is nested within a larger interface that includes other settings options like "Collision Events From," "Object Tag," "Who Can Grab?," and "Keep Ownership On."
    
    </details>
    
    <p></p>
    
    
  - Set **Object Tag** = “floor”.

    <details>
    <summary>Object tag equals floor</summary>
    
    <p></p>
    
    [Object tag equals floor](../image_data/6706a95d5f319dc07c394e8ae4c57add8b022e4da338356c1fe4d86dccbefe7e.md)
    
    ### Overview
    This image depicts a user interface element within a software application, specifically a settings or configuration panel. The focus is on a dropdown menu labeled "More" and a text input field related to object tagging.
    
    ### Key Elements
    - **Dropdown Menu**: Located at the top-left corner, it has a dark gray background with white text that reads "Collision Events From". The dropdown arrow is visible next to the text.
    - **Text Input Field**: Positioned to the right of the dropdown menu, it has a light gray background with black text. The placeholder text inside the field says "Objects Tagged".
    - **Object Tag Text Box**: Below the text input field, there is another text box with a light gray background and black text. The text inside this box reads "floor".
    
    ### Visual Flow / Relationships
    The dropdown menu is the most prominent element due to its placement and larger size compared to the text input fields. The text input fields are arranged vertically below the dropdown menu. There are no arrows or lines connecting the elements, indicating a linear reading order from top to bottom.
    
    </details>
    
    <p></p>
    
    
- Create a script to control the Ball’s behavior. The code listens for collisions between the Ball and the Floor. When a collision occurs, the code resets the ball’s position back to its initial starting point, and it resets its velocity back to zero.

  - Click **Scripts** to open the Scripts panel.

    <details>
    <summary>The scripts panel opens</summary>
    
    <p></p>
    
    [The scripts panel opens](../image_data/fa72e24af98408bd12c28bc30973ef31dd501c6fa4c459a0e18f8eed71f083f5.md)
    
    ### Overview
    This image depicts a user interface element within a software application, specifically a section labeled "Scripts." It shows a search bar, a button to create a new script, and a message indicating that no scripts exist currently.
    
    ### Key Elements
    - **Search Bar**: Located at the top-left, it has a magnifying glass icon and a placeholder text "> Search scripts".
    - **Create New Script Button**: Positioned below the search bar, it features a plus sign and the text "Create new script."
    - **Message Box**: Situated beneath the search bar, it displays the text "> This world doesn't have any scripts." The message is enclosed in angled brackets.
    - **Close Button**: A small 'X' icon is located at the top-right corner of the "Scripts" section.
    - **Settings Icon**: A gear icon is positioned next to the search bar, likely representing settings or options related to scripts.
    
    ### Visual Flow / Relationships
    The most prominent visual element is the search bar, as it is the first interactive element users would encounter. The "Create new script" button is secondary but equally important for initiating action. The message box provides feedback, indicating the current state of the scripts section. The settings icon suggests additional functionality or customization options.
    
    </details>
    
    <p></p>
    
    
  - Create a new script by clicking **Create new script**.
  - Name the script “BallScript”, and then press **Enter**. The script is created.

    <details>
    <summary>BallScript appears in your list of scripts</summary>
    
    <p></p>
    
    [BallScript appears in your list of scripts](../image_data/53fc94173857568a3879378b03f11421e822f3a585230e5384657305b1b76904.md)
    
    ### Overview
    This image depicts a user interface element, specifically a text input field or label, likely part of a software application or web interface. The field contains text indicating a script name and a version number.
    
    ### Key Elements
    - **Visual description**: The element has a rectangular shape with rounded corners.
    - **Location**: Positioned centrally in the image.
    - **Contents**: Contains the text "> BallScript" and "10/128".
    - **Visual styling**: The background is dark gray (#333333), and the text is white (#FFFFFF).
    
    ### Visual Flow / Relationships
    The most prominent visual element is the text field itself. There are no arrows, lines, or connectors present. The text is aligned horizontally within the field, and there is no implied reading order beyond the natural progression of reading text from left to right.
    
    </details>
    
    <p></p>
    
    
  - Open the script in VS Code. Click the menu icon to the right of the script name, and then select **Open in External Editor**.

    <details>
    <summary>Open the script file in VS Code</summary>
    
    <p></p>
    
    [Open the script file in VS Code](../image_data/e8ae7cceeab11d53d0b0a773c17c7b8202d903f2b738bd1043d5fb516d93075e.md)
    
    ### Overview
    This image depicts a user interface element, specifically a menu item within a software application. The menu item has a dark background with white text and a light gray arrow indicating a dropdown action.
    
    ### Key Elements
    - **Visual description**: The menu item is rectangular with rounded corners.
    - **Location**: Positioned centrally in the image.
    - **Contents**: Contains the text "Open in External Editor" and a right-pointing arrow.
    - **Visual styling**: The background is dark gray (#333333), the text is white (#FFFFFF), and the arrow is light gray (#CCCCCC).
    
    ### Visual Flow / Relationships
    The most prominent visual element is the menu item itself. There are no arrows or lines connecting elements, but the presence of the arrow suggests that clicking this item would open a dropdown menu. The text is aligned to the left, and the arrow is positioned to the right of the text.
    
    </details>
    
    <p></p>
    
    

    VS Code launches, and opens a new TypeScript code file that contains a default class.

    <details>
    <summary>The new typescript file opens in VS Code and it contains some default code</summary>
    
    <p></p>
    
    [The new typescript file opens in VS Code and it contains some default code](../image_data/2deb8ffaa7196a1543f9b491fc4829ff361a7a95508ed95f82c6a7a5215ebacc.md)
    
    ### Overview
    This image displays a code editor window open to a TypeScript file named `BallScript.ts`. The content is written in TypeScript and includes import statements, class definitions, and a registration statement for a component.
    
    ### Key Elements
    - **Visual description**: Code editor interface.
    - **Location**: Top-left corner.
    - **Contents**: Text content of the code file.
    - **Visual styling**: Dark theme with syntax highlighting.
    
    ### Visual Flow / Relationships
    - Most prominent visually: The code content itself.
    - No arrows or lines connecting elements.
    - Reading order follows the standard left-to-right, top-to-bottom flow typical of code editors.
    
    </details>
    
    <p></p>
    
    
  - Copy the following code snippet, and paste it on top of the default code in VS Code, and then save it.

    ```
     import * as hz from 'horizon/core';

     class BallScript extends hz.Component<typeof BallScript> {

         static propsDefinition = {};

         originalPosition: hz.Vec3 = hz.Vec3.zero;

         start() {
             // Set the original position of the ball so you know where to respawn.
             this.originalPosition = this.entity.position.get();

             // Listen for ball collisions with any other entity.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnEntityCollision,
               (collidedWith: hz.Entity, collisionAt: hz.Vec3, normal: hz.Vec3,
                 relativeVelocity: hz.Vec3, localColliderName: string, otherColliderName: string) => {

                     // Move the baseball back to its original starting position.
                     this.entity.position.set(this.originalPosition!);

                     // Reset the baseball’s speed to zero.
                     this.entity.as(hz.PhysicalEntity)?.zeroVelocity();
               });
         }
     }

     hz.Component.register(BallScript);
    ```
- Attach the BallScript to the Ball object.

  <details>
  <summary>Attach the BallScript to the Ball object</summary>
  
  <p></p>
  
  [Attach the BallScript to the Ball object](../image_data/63a65fd3b471fa67b54721f4c8cb05e7cd2705e35bfd243400bf049281764778.md)
  
  ### Overview
  This image depicts a dropdown menu interface element within a software application. The focus is on a dropdown menu that is currently open, showing options related to scripts.
  
  ### Key Elements
  - **Dropdown Menu**: Located in the upper right area of the interface. It is a rectangular box with rounded corners, containing a list of items.
    - **Visual description**: A dark gray rectangle with a white border.
    - **Location**: Top-right corner of the interface.
    - **Contents**: Contains two items: "None" and "BallScript:BallScript".
    - **Visual styling**: The background is dark gray (#333333), the border is white (#FFFFFF), and the text is black (#000000).
  
  - **Selected Item**: The item "BallScript:BallScript" is highlighted, indicating it has been selected.
    - **Visual description**: The selected item is shown in a lighter shade of gray compared to the unselected items.
    - **Location**: Below the "None" option.
    - **Contents**: The text "BallScript:BallScript" is displayed in black.
    - **Visual styling**: The background is a lighter gray (#444444), the text is black (#000000).
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The selected item "BallScript:BallScript".
  - **Arrows/Connectors**: There are no arrows or connectors visible in this image.
  - **Spatial Relationships**: The dropdown menu is nested within a larger interface element labeled "Attached Script". The "None" option is above the selected item, and both are part of the same dropdown structure.
  
  </details>
  
  <p></p>
  
  
- Preview your new world in the Meta Horizon Worlds desktop editor. Enter Preview mode by clicking Play on the menu bar.

  <details>
  <summary>Click the little person icon to enter Preview mode</summary>
  
  <p></p>
  
  [Click the little person icon to enter Preview mode](../image_data/99297566968cfe893824479c2418d80cc791fdc002dd06048d2fcc1a57cfee0a.md)
  
  ### Overview
  This image depicts a user interface element, specifically a button or icon within a toolbar or menu area. The overall composition includes a blue rectangular button with a white play symbol inside, accompanied by a dropdown menu icon and a label indicating a "Unity View."
  
  ### Key Elements
  - **Visual description**: A blue rectangular button with rounded corners.
  - **Location**: Top-left corner of the image.
  - **Contents**: Contains a white play symbol (`▶`) centered within the button.
  - **Visual styling**: Blue background, white play symbol, no additional borders or gradients.
  
  - **Visual description**: A small black dropdown menu icon located next to the blue button.
  - **Location**: To the right of the blue button.
  - **Contents**: A small black icon resembling a downward-pointing arrow.
  - **Visual styling**: Black icon with a white outline, no additional colors or gradients.
  
  - **Visual description**: A label reading "dev-only Unity View."
  - **Location**: Below the blue button and dropdown icon.
  - **Contents**: Text in a sans-serif font, likely black or dark gray.
  - **Visual styling**: Simple text label with no additional styling or background.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The blue button with the play symbol.
  - **Arrows/lines/connectors**: None.
  - **Spatial relationships**: The blue button is the focal point, with the dropdown icon and label positioned to its right and below, respectively.
  
  </details>
  
  <p></p>
  
  
- Maneuver the avatar over to the bat using the arrow keys, and then grab it by pressing the “E” key.

  <details>
  <summary>This is what you avatar looks like after grabbing the bat</summary>
  
  <p></p>
  
  [This is what you avatar looks like after grabbing the bat](../image_data/aa9ba262b0114d9d338fc3951e44c88cf1ddd5b3e59109d85469e442bbaf08ee.md)
  
  ### Overview
  The image depicts a virtual environment viewed from behind a character. The character is standing on a tiled floor with a grid pattern, facing a large, bright sphere in the distance against a clear sky.
  
  ### Key Elements
  - **Character**: A figure with light gray hair tied back, wearing a dark gray t-shirt and light blue pants. The character is facing away from the viewer.
  - **Sphere**: A large, bright white sphere located in the distance, positioned slightly above and to the right of the character.
  - **Background**: A flat, light blue sky with no clouds, and a tiled floor extending into the horizon.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the character, as they occupy the foreground and are the focal point. The sphere in the distance serves as a secondary focal point, drawing the viewer's eye towards it. There are no arrows or lines connecting elements, but the arrangement suggests a sense of depth and perspective.
  
  </details>
  
  <p></p>
  
  

  You can’t really do much at this point except walk around holding the bat. As you do, the ball continually keeps dropping out of the sky and falling to the floor.
- Exit Preview mode by pressing **Escape** twice.

## Section 4. Setup baseball/bat collision detection

In this section, you’ll configure collision detection.

- Select the Ball object from the Hierarchy.
- Add a **Gameplay Tag** to the Ball object, and name it “ball”.

  <details>
  <summary>The Ball object has a Gameplay Tag named ball</summary>
  
  <p></p>
  
  [The Ball object has a Gameplay Tag named ball](../image_data/96621e6e9a7adc8319f0294b752292583bf2d93f2e59e08dcf4b8c70cf805a49.md)
  
  ### Overview
  This image depicts a user interface element within a tagging system, likely part of a game development tool or similar application. The focus is on a search bar and a tag input field.
  
  ### Key Elements
  - **Search Bar**: Located at the top, spanning horizontally across the width of the interface. It has a placeholder text "> Search attached tags <". The background is light gray, and the text is black.
  - **Tag Input Field**: Positioned below the search bar, taking up the full width of the interface as well. It contains the word "ball" and indicates that there are 4 out of 20 tags attached. The background is white, and the text is black.
  - **Plus Button**: A small circular button with a plus sign (+) located to the right of the search bar. It is light gray with a darker gray outline.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the search bar and the tag input field. The search bar is above the tag input field, suggesting a sequence where users first search for tags before attaching them. There are no arrows or lines connecting elements, but the layout implies a sequential interaction flow.
  
  </details>
  
  <p></p>
  
  
- Select the Bat object from the Hierarchy.
- Set the following **More** properties on the Bat object.

  - Set **Collision Events From** = “Objects Tagged”.
  - Set **Object Tag** = “ball”.
- Create a script to control the bat’s behavior. The code listens for collisions between the bat and baseball. When such a collision occurs, the code displays a message pop-up that congratulates the player for successfully hitting the baseball.

  - Click **Scripts** to open the Scripts panel.
  - Create a new script by clicking **Create new script**.
  - Name the script “BatScript”, and then press **Enter**. The new script appears in your scripts list.

    <details>
    <summary>You now have two scripts</summary>
    
    <p></p>
    
    [You now have two scripts](../image_data/aa1b07d45f58498cc77a400918db9d19dacaf36b81753e88cec165510b00758f.md)
    
    ### Overview
    This image displays two notifications or messages within a digital interface, likely a messaging app or a notification system. The notifications are presented in a clean, modern design with a dark background and light-colored text.
    
    ### Key Elements
    - **Notification 1 (Top)**:
      - **Visual description**: A rectangular box with rounded corners.
      - **Location**: Top-left area of the image.
      - **Contents**: Contains the text "> BallScript\nSaved at 1:07:29 PM - Compiled".
      - **Visual styling**: Dark gray background, white text, and a subtle shadow effect beneath the box.
    - **Notification 2 (Bottom)**:
      - **Visual description**: Another rectangular box with rounded corners.
      - **Location**: Directly below Notification 1.
      - **Contents**: Contains the text "> T@Script\nSaved at 1:14:21 PM - Compiled".
      - **Visual styling**: Similar to Notification 1, with a dark gray background, white text, and a subtle shadow effect.
    
    ### Visual Flow / Relationships
    - **Most prominent visually**: Both notifications are equally prominent as they are the only elements in the image.
    - **Arrows, lines, connectors**: None present.
    - **Spatial relationships**: Notifications are stacked vertically, one above the other, with no additional elements connecting them.
    
    </details>
    
    <p></p>
    
    
  - Open the script in VS Code by clicking the menu icon next to the script name, and then selecting **Open in External Editor**.
  - Copy the following code snippet, and paste it on top of the default code, and then save it.

    ```
     import * as hz from 'horizon/core';

     class BatScript extends hz.Component<typeof BatScript> {

         static propsDefinition = {};

         batHolder: hz.Player | null = null;

         start() {
             // Set the player holding the bat when they grab the bat.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabStart, (isRightHand: boolean, player: hz.Player) => {
                 this.batHolder = player;
             });

             // Reset the player holding the bat when they let go of it.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabEnd, (player: hz.Player) => {
                 this.batHolder = null;
             });

             // Listen for bat/ball collisions.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnEntityCollision,
               (collidedWith: hz.Entity, collisionAt: hz.Vec3, normal: hz.Vec3,
                 relativeVelocity: hz.Vec3, localColliderName: string, otherColliderName: string) => {
                     if (this.batHolder) {
                         this.world.ui.showPopupForPlayer(this.batHolder, "Good job hitting the ball!", 5);
                     }
             });
         }
     }

     hz.Component.register(BatScript);
    ```
  - Select the Bat object from the Hierarchy, then navigate to **Properties** > **Scripts**, and then attach the BatScript to the Bat object.

    <details>
    <summary>Attach the BatScript to the Bat object</summary>
    
    <p></p>
    
    [Attach the BatScript to the Bat object](../image_data/cab8c897303c1eb438df6a43e0d93465071052655a4a791ec66a59059089ff1a.md)
    
    ### Overview
    This image depicts a user interface element showing a dropdown menu within a script editor. The dropdown is part of a larger interface that includes a header labeled "Attached Script" and a selection field indicating "None."
    
    ### Key Elements
    - **Dropdown Menu**: Located in the upper right area of the image. It contains options for selecting scripts.
      - **Visual description**: A rectangular dropdown with rounded corners.
      - **Location**: Top-right corner of the interface.
      - **Contents**: Contains two options: "None" and "BatScript:BatScript."
      - **Visual styling**: Dark background with white text, light gray dropdown arrow.
    - **Header**: Located at the top-left corner.
      - **Visual description**: A header with the text "Attached Script."
      - **Location**: Top-left corner of the interface.
      - **Contents**: Text only.
      - **Visual styling**: Dark background with white text.
    - **Selection Field**: Located next to the dropdown.
      - **Visual description**: A field displaying "None."
      - **Location**: To the right of the dropdown.
      - **Contents**: Text "None."
      - **Visual styling**: Dark background with white text, light gray dropdown arrow.
    - **Highlighted Option**: "BatScript:BatScript" is highlighted in the dropdown menu.
      - **Visual description**: The option is highlighted with a darker background compared to the others.
      - **Location**: Center of the dropdown menu.
      - **Contents**: Text "BatScript:BatScript."
      - **Visual styling**: Darker background with white text.
    
    ### Visual Flow / Relationships
    - **Most Prominent Element**: The highlighted option "BatScript:BatScript" in the dropdown.
    - **Arrows/Connectors**: The dropdown arrow points downward, indicating the direction of the dropdown menu.
    - **Spatial Relationships**: The header is positioned above the selection field, which is to the right of the dropdown menu. The highlighted option is central within the dropdown.
    
    </details>
    
    <p></p>
    
    

    When the player swings and hits the ball, they’ll see a cheerful message that congratulates them.

    **Note**: You can’t swing the bat in desktop mode. To be able to swing the bat, you must switch to VR.
  - This step is optional for the Batting Cage tutorial.

    To enable restart of this world, set the ball to its original position by resetting it with a secondary action (the button press) whenever the user wants to do so. To implement this, you can create a scripting event for a [button press](../Mobile%20and%20web/Grabbable%20entities/Action%20Buttons.md#how-to-handle-button-presses) and attach it to a [grabbable entity](../Mobile%20and%20web/Grabbable%20entities/Introduction%20To%20Grabbable%20Entities%20On%20Mobile%20And%20Web.md).

## Section 5. Configure local scripting

In this section, you’ll configure the scripts to run locally.

When the player hits the ball, they take ownership of the entity that the script is attached to. In this case, it’s the Ball object. Transfer of ownership causes script processing to switch from the server to the player’s local device. This improves latency for the player. For more information, see [Ownership in Meta Horizon Worlds](../Scripting/Local%20scripting/Ownership%20in%20Meta%20Horizon%20Worlds.md).

- Change the Execution Mode of both the Ball and Bat scripts to “Local”.

  - Select the BallScript script from the Hierarchy.
  - In the **Properties Panel**, set **Script Execution Mode** = “Local”.
  - Select the BatScript script from the Hierarchy.
  - In the **Properties Panel**, set **Script Execution Mode** = “Local”.
- Update the BatScript script with the following revisions.

  - Adds a property that takes in the Ball entity.
  - Assigns the ball entity to the script property “ball”.
  - Transfers ball ownership to the player whenever they grab the bat.
  - Transfers ball ownership to the server when the player releases the bat.
  - Adds a `receiveOwnership()` method that preserves the value of `batHolder` when the script changes ownership.
  - Adds the `transferOwnership()` and `receiveOwnership()` methods that preserve the value of `originalPosition` when the entity changes ownership.

    This is what your BatScript should look like at this point:

    ```
     import * as hz from 'horizon/core';

     type State = {};

     class BatScript extends hz.Component<typeof BatScript> {

         static propsDefinition = {
             ball: {type: hz.PropTypes.Entity}
         };

         batHolder: hz.Player | null = null;

         start() {

             // Set the player holding the bat when they grab the bat.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabStart, (isRightHand: boolean, player: hz.Player) => {
                 this.batHolder = player;

                 // Set the ball's owner to the player so that interactions with
                 // the ball execute on the player's client with reduced latency. The bat's
                 // ownership is implicitly transferred to the player upon grab.
                 this.props.ball?.owner.set(player);
             });

             // Reset the player holding the bat when they let go of it.
             this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabEnd, (player: hz.Player) => {
                 this.batHolder = null;

                 // Reset the ball's ownership to the player.
                 this.props.ball?.owner.set(this.world.getServerPlayer());
             });

             // Listen for the bat colliding with the ball.
             // [...] omitted, same as in the previous step.

             // After grabbing the bat, ball ownership transfers. This means you
             // must ensure that batHolder stays set correctly.
             override receiveOwnership(state: State, fromPlayer: hz.Player, toPlayer: hz.Player): void {
                 this.batHolder = toPlayer;
             }

             override transferOwnership(fromPlayer: hz.Player, toPlayer: hz.Player): State {
                 return {};
             }
         }

     hz.Component.register(BatScript);
    ```
- Update the BallScript script with the following revisions.

  ```
   import * as hz from 'horizon/core';

   type State = {
       originalPosition: hz.Vec3
   }

   class BallScript extends hz.Component<typeof BallScript> {

       static propsDefinition = {};

       originalPosition: hz.Vec3 = hz.Vec3.zero;

       start() {

         // Set the original position of the ball so you know where to respawn.
         this.originalPosition = this.entity.position.get();

         // Listen for ball collisions with the ground.
         this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnEntityCollision,
           (collidedWith: hz.Entity, collisionAt: hz.Vec3, normal: hz.Vec3,
             relativeVelocity: hz.Vec3, localColliderName: string, otherColliderName: string) => {

               // Move the ball back to its starting position.
               this.entity.position.set(this.originalPosition!);

               // Reset the ball's velocity.
               this.entity.as(hz.PhysicalEntity).zeroVelocity();
             }
         );
       }

       // Get the original position of the ball so that it respawns in the same place.
       override receiveOwnership(state: State, fromPlayer: hz.Player, toPlayer: hz.Player): void {
         this.originalPosition = state.originalPosition;
       }

       // Pass the ball's orginal position to the new owner.
       override transferOwnership(fromPlayer: hz.Player, toPlayer: hz.Player): State {
         return {originalPosition: this.originalPosition!};
       }
   }

   hz.Component.register(BallScript);
  ```

  When the player grabs the bat, they take ownership of the Bat entity. This causes the script component attached to the bat to execute locally on the player’s device (VR headset, web, and mobile). This provides a better visual experience for the player because there is no latency incurred in transmitting rendered scenes from the server to the player’s device.

## Section 6. Play in your new world on mobile

- Publish your world

  To [play in your world on mobile](../Mobile%20and%20web/Testing%20worlds%20on%20mobile%20and%20web.md#mobile), [publish](../Save,%20optimize,%20and%20publish/Publish%20your%20world.md) the world first. Provide the necessary information in the **Publish World** dialog, which can be opened by navigating to the dropdown menu on the menu bar or by clicking **Publish** on the top right.

  Enter the necessary information such as **Name**, **World Rating**, **Comfort Rating**, and **Tags**.

  * You can name your world something unique other than the default name.
  * If you do not wish your world to be visible to the public, ensure that the toggle for **Visible to Public** is turned off.
  * Ensure that mobile is selected as one of the supported devices.
  * Toggle on **Compatible with Web and Mobile**

  Click **Publish** to publish the world.
- Configure the preview device as mobile

  To preview your world on mobile, select **Mobile** as your preview device by going to [Preview Configuration](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#how-to-set-the-preview-configuration). Click the ellipsis button on the menu bar. In **Preview actions**, send a preview build link to your Meta Horizon app.
- Play it on mobile

  Open the Meta Horizon app on your mobile device, find the build link under **Notifications** to play in your world. For more related information, see [Testing worlds on mobile](../Mobile%20and%20web/Testing%20worlds%20on%20mobile%20and%20web.md#mobile).

## Section 7. Play in your new world in VR

In this section, you’ll see what it’s like to play your game in 3D in Meta Horizon Worlds on your Meta Quest VR headset.

- Grab your Quest headset, strap it on, and turn it on.
- Launch Meta Horizon Worlds on your headset.
- Navigate to the **Create** page. You can get there by clicking the fourth icon from the left on the menu bar at the bottom of the page.

  <details>
  <summary>Click this icon to navigate to the Create page</summary>
  
  <p></p>
  
  [Click this icon to navigate to the Create page](../image_data/f09e809ad8ac47453724b5f8196f0388b92323568c81545cc4a1c440435643e3.md)
  
  ### Overview
  The image depicts a simple circular icon with a white background and a blue circle containing a white icon resembling a person's head with a speech bubble. The icon is centered within the circle.
  
  ### Key Elements
  - **Visual description**: A circular shape with a white background.
  - **Location**: Centered in the image.
  - **Contents**: Contains a smaller blue circle with a white icon that looks like a person's head with a speech bubble.
  - **Visual styling**: The circle has a solid white fill, and the blue circle has a solid blue fill. The white icon is simple and stylized.
  
  ### Visual Flow / Relationships
  There are no arrows, lines, or connectors. The icon is the sole focus, and its placement suggests it could represent a user profile with a message or notification.
  
  </details>
  
  <p></p>
  
  
- Locate the world that you just created, and then click it to launch it on your Quest VR headset.
- Step up and grab the bat by pressing the secondary trigger on the right Quest controller.
- Swing the bat and try to hit the ball. You can swing the bat by swinging your right arm while holding the secondary trigger down. When you hit the ball, watch for the message: “Good job hitting the ball!”.

  If you lose the ball, and you need to reset your progress, you can:

  - Press the menu button on your left controller to open the Personal User Interface (PUI).
  - Choose the **Worlds** tab from the PUI menu.
  - Locate your world, and then select it.
  - Look for the **Reset World Progress** option, and then confirm that you want to reset your progress.

  **Note:** Resetting world progress deletes all of your progress in the world, including any items or achievements you’ve earned.

*You’ve completed this playtest - Congratulations!*

## Exercises

The following list contains suggestions for additional exercises.

* Reposition the ball’s starting position so that it spawns immediately above the player, wherever the player happens to be.
* Add a sound effect that plays whenever the player hits the baseball.
* Instead of using primitive meshes for the bat and baseball, try using higher quality meshes instead.
* Add a target for the player to aim for when they hit the baseball.
* Track the player’s score whenever they hit the target.
* Store the scores in a leaderboard.
* Make the bat easier to grab by adding explicit grab handles to it.
* When the player releases the bat, make it automatically attach to their hip.
* Spawn a new bat and ball for additional players that enter the world.
* Update your code to add support for desktop and mobile users.

## What’s next?

To learn more about Horizon, try the following:

- See the [Tutorial worlds](Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md) for more tutorials.
- Learn about the desktop editor with the [Introduction to the desktop editor](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools overview](../Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.