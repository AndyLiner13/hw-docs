Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/ai-conversation-tutorial/module-5-exercise-add-your-own-ai-npc

# Module 5 - Exercise - Add Your Own AI NPC

This hands-on exercise guides you through creating and configuring your own AI NPC from scratch.

## Exercise overview

The best way to understand working with the NPCs is to actually work with them and play with the results. This exercise shows you how to add an AI NPC to this example world.

## Step-by-step instructions

### Step 1: Prepare the world

- Launch your clone of the example world in the Desktop Editor.
- Remove the invisible walls in this world which block access to the purple zone. Then add a bridge (same bridge that connects the green and blue zones) or other navigable geometry to connect the blue platform to the purple one.
  <details>
  <summary>Removed invisible walls in tutorial world</summary>
  
  <p></p>
  
  [Removed invisible walls in tutorial world](../../../image_data/833b10d135b561e73f173bf429a9bca3a43ec27b324b92e689f88db757b4f9bd.md)
  
  ### Overview
  This image depicts a virtual environment, likely from a game or simulation, featuring a grid-based layout with various interactive elements and avatars. The scene includes a shop area, colorful blocks, and floating objects resembling drops of liquid.
  
  ### Key Elements
  - **Grid Wall**: A large yellow wall with a grid pattern, located on the left side of the image. It has a blue line running vertically down its center.
  - **Shop Area**: A wooden structure labeled "SHOP" with a blue roof and a small sign that reads "Harmony Bloom." There are two blue cubes stacked on top of the shop.
  - **Floating Objects**: Two purple, teardrop-shaped objects are floating above the central area of the grid wall.
  - **Avatars**: Several small blue avatars are scattered throughout the scene, some near the shop and others near the floating objects.
  - **Colorful Blocks**: Various colored blocks are placed around the scene, including green, pink, and red blocks.
  - **Signage**: A sign on the right side of the image reads "Conversation Zone," indicating a designated area within the environment.
  - **Background**: The background features a light blue sky and a clear horizon.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the grid wall and the floating objects. The blue line on the wall acts as a guide, drawing attention vertically. The avatars are distributed across the scene, suggesting interaction points. The floating objects are positioned centrally, drawing the viewer's eye towards the middle of the image. The shop area is situated on the left, providing a focal point for the left side of the scene.
  
  </details>
  
  <p></p>
  
  
- From the Build menu, place a new NPC gizmo in the purple zone.
  <details>
  <summary>Placed NPC gizmo in tutorial world</summary>
  
  <p></p>
  
  [Placed NPC gizmo in tutorial world](../../../image_data/0d36f1027d7f257f1d3d7c587d427856813b32ebf79ab8696915504c3f68ace3.md)
  
  ### Overview
  This image depicts a user interface element within a software application, likely related to game development or asset management. It shows a search bar and a result listing under a category labeled "Gizmos."
  
  ### Key Elements
  - **Search Bar**: Located at the top, spanning horizontally across the interface. Contains a magnifying glass icon and the text "npc". The background is blue, and the text is white.
  - **Category Label**: "Gizmos" is displayed above the search bar in a lighter font, indicating the current selection or focus area.
  - **Close Button**: A small 'X' icon is positioned to the right of the category label, suggesting the ability to close the current view.
  - **Result Listing**: Below the search bar, there is a single item listed as "NPC". It includes a red icon with a white figure and a downward arrow, indicating a dropdown or expandable content.
  - **Navigation Tabs**: At the very top, there are three tabs labeled "Build," "Systems," and "Scripts," each with a drop-down arrow, suggesting additional options or subcategories.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar, which serves as the focal point for interaction. The category label "Gizmos" is secondary but important for context. The result listing "NPC" is the immediate outcome of the search query. Navigation tabs provide additional context and functionality.
  
  </details>
  
  <p></p>
  
  
- Set the Conversation field to “AI” and then press “Edit Character.”
  <details>
  <summary>Set Conversation field to AI</summary>
  
  <p></p>
  
  [Set Conversation field to AI](../../../image_data/7b482d5b35741e30c43b29faefc5e86d034fa89316282688f4d51110442ce070.md)
  
  ### Overview
  This image depicts a user interface element from a character customization screen, likely within a game or application. The interface allows users to configure various aspects of a character, such as appearance and conversation settings. The layout includes options for selecting a body type, editing the avatar, and adjusting speech bubble settings.
  
  ### Key Elements
  - **Spawn On Start**: Located at the top-left, this option has a toggle switch next to it, indicating whether the character should spawn when the game starts.
  - **Body type**: Positioned above the avatar preview, this section allows selection of a specific body type for the character.
  - **Horizon Avatar**: A dropdown menu is shown here, suggesting that the user can choose from a variety of avatars.
  - **Avatar Preview**: A 3D model of a character wearing a suit is displayed in the center. The avatar is standing upright, facing forward.
  - **Edit Avatar**: A button labeled "Edit Avatar" is situated below the avatar preview, allowing users to modify the character's appearance.
  - **Appearance**: This section is located below the avatar preview, indicating that further customization options for the character's look might be available under this heading.
  - **Conversation**: Below the appearance section, there is a dropdown menu labeled "AI," which suggests that users can select an AI-driven conversation style for the character.
  - **Default Speech Bubble**: Another toggle switch is present here, likely enabling or disabling a default speech bubble for the character.
  - **AI Character**: At the bottom, there is another button labeled "Edit Character," presumably for more advanced customization of the AI-controlled character.
  
  ### Visual Flow / Relationships
  The interface is organized in a vertical list format, with each setting grouped logically. The avatar preview is the focal point, drawing attention to the central area of the screen. The "Edit Avatar" button is positioned directly beneath the avatar, emphasizing its importance. The toggle switches are placed to the right of their respective settings, providing clear visual cues for interaction.
  
  </details>
  
  <p></p>
  
  
- To change the AI NPC’s appearance, click **Edit Avatar**. This will launch a web editor - don’t forget to hit **Done editing** to save your edits before returning to the Desktop Editor. Then you must press the Refresh button to update the in-world appearance of the AI NPC.
- Write a backstory for the AI NPC.
  - You can use Generative AI to generate the backstories which can speed up creation. It may take trial and error to achieve the desired results.
- Write instructions for the AI NPC. These instructions can include phrases such as “Keep answers short, don’t talk much” to influence the AI NPC. Click **Save**.
  - The Conversations panel can be used to iterate the backstory.
- There are several presets for voices available so all your NPCs don’t have to sound alike. Click on the **Voice and Speech** section and make your desired changes and click **Save** again.
  <details>
  <summary>Set AI NPC's appearance and write backstory and instructions</summary>
  
  <p></p>
  
  [Set AI NPC's appearance and write backstory and instructions](../../../image_data/c2c29f0209e284eda29018ca9e6c90fc37c3dd20f9847ec0a425947aa4316555.md)
  
  ### Overview
  This image depicts a user interface from a character creation tool named "Character Builder." The interface is divided into several sections, focusing on personality traits and voice settings for creating a character. The left sidebar contains a list of character voices, while the right side displays options for selecting a voice and adjusting voice parameters.
  
  ### Key Elements
  - **Left Sidebar (Personality)**: Contains a vertical list of character voices with icons and descriptions. Examples include "Cartoonish (villain)," "Outlaw," "The everyman," etc.
    - **Visual description**: Icons resembling avatars, text labels, and descriptions.
    - **Location**: Left side of the screen.
    - **Contents**: Voice names and brief descriptions.
    - **Visual styling**: Dark gray background, white text, and light gray icons.
    
  - **Selected Voice Section**: Displays the currently selected voice as "Cartoonish (villain)" with the description "Calculated, maniacal villain."
    - **Visual description**: Avatar icon, text labels, and a play button.
    - **Location**: Center-right area.
    - **Contents**: Voice name, description, and a play button with a progress bar indicating 0:00.
    - **Visual styling**: White text, blue play button, black progress bar, and a dark gray background.
  
  - **Voice Testing Section**: A text input field prompting users to enter text for voice testing.
    - **Visual description**: Text input field with placeholder text.
    - **Location**: Below the selected voice section.
    - **Contents**: Placeholder text "Please enter the text you'd like to listen to."
    - **Visual styling**: Black background, white text, and a dark gray border.
  
  - **Speed and Pitch Controls**: Sliders for adjusting voice speed and pitch.
    - **Visual description**: Sliders with numerical values and a blue slider handle.
    - **Location**: Below the voice testing section.
    - **Contents**: Numerical values "100" next to sliders.
    - **Visual styling**: White text, blue slider handles, and a dark gray background.
  
  - **Right Sidebar (Conversation)**: Contains a chat window labeled "Conversation" with the prompt "Chat with your character here."
    - **Visual description**: Chat window with a user icon and text input field.
    - **Location**: Right side of the screen.
    - **Contents**: Chat window title and a message input field.
    - **Visual styling**: Light gray background, white text, and a dark gray input field.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The selected voice section is the most prominent due to its central placement and larger size.
  - **Arrows/Connections**: No arrows or connections are visible.
  - **Spatial Relationships**: Elements are arranged in a grid-like structure with the left sidebar on the left, the selected voice section in the center, and the conversation chat on the right.
  
  </details>
  
  <p></p>
  
  
- If you want the AI NPC to directly interact with players, add a trigger volume to your world.
- Attach the `NpcComponent` script to your new AI NPC.
  - Select which game events the AI NPC should react to via the toggles.
  - Set an optional welcome instruction.
  - You can also set the `talkTrigger` field to the trigger volume you created.
- Configure the audio settings for the AI NPC depending on its placement and purpose.
  <details>
  <summary>Set AI NPC's appearance and write backstory and instructions</summary>
  
  <p></p>
  
  [Set AI NPC's appearance and write backstory and instructions](../../../image_data/3d49a15b21106cc9bade04481d0446ec9f49514522ff130735dc2ad61b30ec26.md)
  
  ### Overview
  This image depicts a user interface section labeled "Audio settings." It contains various adjustable parameters related to audio settings, such as volume, distance settings, and toggle switches for specific features. Below the audio settings, there is a section labeled "NpcComponent:NpcCompon..." which includes a trigger button and several toggle switches for different NPC interactions.
  
  ### Key Elements
  - **Audio Volume**: Located at the top right, displayed as a value of "1.00". The element is a small rectangular box with rounded corners.
  - **Audio Is 3D**: A toggle switch located near the top right, showing a blue filled square indicating it is enabled.
  - **Audio Min Distance**: Located below Audio Volume, displaying a value of "5.00". It is a small rectangular box with rounded corners.
  - **Audio Max Distance**: Located below Audio Min Distance, displaying a value of "25.00". It is a small rectangular box with rounded corners.
  - **NpcComponent:NpcCompon...**: A section header with a dropdown arrow indicating expandable content. Below this header, there are several toggle switches and a trigger button.
      - **talkTrigger**: A trigger button with a gear icon and the word "Trigger" next to it. It has a gray background with white text.
      - **equipment**: A toggle switch with a blue filled square indicating it is enabled.
      - **swing**: A toggle switch with a gray background indicating it is disabled.
      - **inventory**: A toggle switch with a blue filled square indicating it is enabled.
      - **store**: A toggle switch with a blue filled square indicating it is enabled.
      - **welcome**: A toggle switch with a blue filled square indicating it is enabled.
  - **Advertise pickaxes**: A button located at the bottom right, with white text on a black background.
  - **Attach script**: A button located at the bottom left, with white text on a blue background.
  
  ### Visual Flow / Relationships
  The visual hierarchy is clear with the "Audio settings" header at the top, followed by the adjustable parameters. The "NpcComponent:NpcCompon..." section is expanded, revealing the toggle switches and trigger button underneath. The buttons and toggles are arranged in a grid-like fashion within the expanded section. The "Advertise pickaxes" button is positioned at the bottom right, while the "Attach script" button is at the bottom left. There are no arrows or lines connecting elements, but the layout suggests a logical reading order from top to bottom and left to right.
  
  </details>
  
  <p></p>
  
  
- Test your world to see how your new AI NPC behaves in response to what you do as a player.

## Tips for Success

* Experiment with different backstories and instructions to get the desired personality
* Test your NPC with various game events to see how it responds
* Adjust audio settings based on the NPC’s location and role in your world
* Use the NPC Debugger (covered in Module 7) to troubleshoot issues