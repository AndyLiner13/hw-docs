Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/new-user-experience-tutorial/module-4-quest-and-dialogue

# Module 4 - Quest and Dialogue

In this module we will cover how to build a complete quest experience that combines quest management, dialogue systems, and visual waypoint indicators to create engaging player journeys in your world.

The Quest Experience encompasses the full player journey from quest discovery through completion. It combines quest tracking, NPC dialogue interactions, visual waypoint indicators, and reward systems to create seamless objective-driven gameplay. This integrated approach ensures players understand their goals, know where to go, and feel rewarded for their progress.

The complete quest system integrates multiple components working together: NPCs provide context through dialogue, visual waypoints guide players to locations, quest managers track progress, and UI systems provide feedback. This creates a cohesive experience where players are never confused about their objectives or next steps.

You may want to add this complete quest system to your world to provide players with engaging storylines, clear navigation, structured progression, and satisfying completion experiences that keep them engaged throughout their journey.

In the tutorial world the quest experience works with the following included scripts:

**Core Quest Management:**

* `QuestManager.ts` - Manages overall quest tracking and player progress
* `Quest.ts` - Represents individual quest entities and their properties
* `QuestTrigger.ts` - Triggers quest start or completion events

**User Interface Systems:**

* `UIQuestComplete.ts` - Displays quest completion messages and rewards
* `UICurrentQuests.ts` - Shows active quests on the player’s screen
* `UIQuestStartDialogue.ts` - Displays quest prompts and dialogue options

**Visual Navigation:**

* `QuestWaypointController.ts` - Manages visual waypoint indicators for quest locations
* `TestSendEventQuest.ts` - Demo script for waypoint activation

**NPC Dialogue System:**

* `DialogueNode.ts` - Represents individual dialogue nodes in the conversation tree
* `DialogueNodeOption.ts` - Handles player response options within dialogue nodes
* `DialogueNPC.ts` - Manages overall dialogue system for NPCs and integration with other systems
* `DialogueTreeCustomUI.ts` - Displays dialogue trees and manages the user interface

**Integration Components:**

* `CameraManagerLocal.ts` - Handles camera changes during quest events

## Build a complete quest experience

Creating a complete quest experience involves multiple integrated systems working together to guide players from quest discovery through completion. This section provides a comprehensive approach to building engaging quest journeys.

The quest experience follows this player journey: **Discovery** (finding NPCs/quests) → **Dialogue** (learning objectives) → **Navigation** (finding quest locations) → **Completion** (achieving objectives) → **Reward** (feedback and progression).

### Phase 1: Core quest infrastructure

Begin by establishing the foundational quest management system:

- **Create the quest container hierarchy**: Navigate to your world hierarchy and create a empty object for the **QuestsContainer** entity. This will serve as the parent for all quest entities and the central hub for quest management.

  <details>
  <summary>Quests container entity</summary>
  
  <p></p>
  
  [Quests container entity](../../../image_data/b5a3892fbc0c93d796705a45c4f614fd0e1927d3bbf22c5c9844386824b177bf.md)
  
  ### Overview
  This image depicts a user interface element resembling a form or settings panel for configuring a quest within a game or application. The layout is structured with labeled fields and input areas for various quest attributes.
  
  ### Key Elements
  - **id**: Located in the top-left area, this field contains the text "test".
  - **title**: Positioned below the id field, this section has the placeholder text "Test title".
  - **description**: Situated beneath the title, this area displays the text "Tasks show text an".
  - **optional**: A toggle switch is placed to the right of the description field, indicating an optional setting.
  - **reward**: Below the optional toggle, this field shows the number "100".
  - **primaryColor**: A color swatch is shown next to the reward field, with a hex value of #000000 (black).
  - **secondaryColor**: Another color swatch is displayed below the primary color, with a hex value of #00FF00 (green).
  
  ### Visual Flow / Relationships
  The form is organized in a vertical sequence, with each attribute listed sequentially. The toggle switch is aligned to the right of its respective label, creating a clear distinction between the label and the control. The color swatches are positioned to the left of their corresponding labels, providing a visual cue for which color relates to which attribute.
  
  </details>
  
  <p></p>
  
  
- **Setup quest management**: In the **Properties** panel for your QuestsContainer, attach the `QuestManager.ts` script. Configure the quest blocking behavior and timing for new quest indicators. This script manages all quest tracking, player progress, and integration with other systems.
- **Define individual quests**: Create quest entities as children of the QuestsContainer. For each quest, attach the `Quest.ts` script and configure properties including:

  * **Quest ID**: Unique identifier for the quest
  * **Title and Description**: Player-facing quest information
  * **Quest Type**: Tutorial or side quest classification
  * **Completion Criteria**: What players need to accomplish

### Phase 2: NPC dialogue integration

Connect your quests to interactive NPCs that provide context and story:

- **Create quest-giving NPCs**: Navigate to the **Asset Library** and locate the **NPC** asset (such as the **UAB - Robot NPC** used in the tutorial). Drag the NPC asset into your world and position it where you want players to discover quests.
  * **Character Name**: Display name for the NPC
  * **Start Dialogue Trigger**: Position where players interact to begin conversations
  * **Enable Dialogue Trigger**: Set up triggers for dialogue activation
  * **Quest Integration**: Connect to quest manager for automatic quest starting
- **Setup dialogue tree structure**: Create dialogue nodes as child entities of your NPC. For each dialogue interaction, you’ll need:
  * **Root dialogue node**: Create a dialogue node named “start” (or the system will use the first child). Attach the `DialogueNode.ts` script and set the **NPCText** property for the initial dialogue content.
  * **Player response options**: For each dialogue node requiring player responses, create **DialogueNodeOption** child entities and attach the `DialogueNodeOption.ts` script. Configure:
    + **AnswerText**: The text players will see for their response choice
    + **NextNode**: The dialogue node to jump to if this option is selected (leave empty if dialogue ends)
    + **EndsDialogue**: Set to true if this option should end the conversation
  * **Multiple choice support**: You can create up to 3 response options per dialogue node by duplicating NodeOption objects

  <details>
  <summary>Dialogue tree structure</summary>
  
  <p></p>
  
  [Dialogue tree structure](../../../image_data/ea25f300b7196f50b9eb0fbac58da821e2acfed53fee4c68688b80078f9cd476.md)
  
  ### Overview
  This image depicts a tree-like structure of nodes within a user interface, likely part of a dialogue or decision-making system. The nodes are organized hierarchically, with some nodes expanded to reveal child nodes.
  
  ### Key Elements
  - **Tree Structure**: A hierarchical list of nodes.
    - **Start**: A parent node with two child nodes labeled "Node 1 Answer 1" and "Node 1 Answer 2".
    - **Node 0**: A parent node with two child nodes labeled "Node 1 Answer 1" and "Node 1 Answer 2".
    - **Node 1**: A parent node with two child nodes labeled "Node 1 Answer 1" and "Node 1 Answer 2".
    - **Node 2**: A parent node with one child node labeled "Node 2 Answer 1".
  - **Nodes Expansion**: Some nodes are expanded to show their child nodes.
  - **Icons**: Each node has a small icon next to its name, which appears to be a folder icon.
  - **Text**: All text is in a monospaced font, with the node names in a lighter color than the answers.
  - **Background**: The background is dark gray, providing contrast to the lighter text and icons.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The expanded nodes showing their child nodes.
  - **Arrows/Connectors**: None visible.
  - **Spatial Relationships**: Nodes are arranged in a vertical list, with parent nodes above their children. Expanded nodes reveal their children beneath them.
  
  </details>
  
  <p></p>
  
  
- **Configure dialogue UI system**: Set up the visual presentation by attaching the `DialogueTreeCustomUI.ts` script to handle dialogue display. This script automatically:
  * Manages text display for character names and dialogue content
  * Shows up to 3 player response options
  * Spawns automatically within the **DialogueNPC** component
  * Adapts dialogue colors based on quest type (tutorial vs. side quest)
- **Integrate with quest system**: Configure the `DialogueNPC.ts` script to work with other systems by setting:
  * **TriggerToEnableOnEnd**: Optional trigger to activate when dialogue completes
  * **TriggerToEnableOnEnd2**: Additional trigger for complex quest chains
  * **Quest Manager Integration**: Automatic connection to quest starting events
  * **Arrow System Integration**: Coordination with waypoint arrow assignments

### Phase 3: Visual waypoint guidance

Implement waypoint indicators to guide players to quest locations:

- **Setup quest waypoints**: Navigate to the **Asset Library** and locate quest waypoint assets. Place **Asset Pool Gizmos** at quest locations and attach the `QuestWaypointController.ts` script. Configure waypoints to:
  * **Trigger Zones**: Define completion areas for quest objectives
  * **Visual Effects**: Customize particle effects for indoor/outdoor environments
  * **Player Ownership**: Ensure per-player waypoint visibility
  * **Event Integration**: Connect to quest system for automatic activation

  <details>
  <summary>Waypoint setup</summary>
  
  <p></p>
  
  [Waypoint setup](../../../image_data/7e5de94f8abca47b7648cbe6dd705073d6a2805b379c7374415e6798e07583e9.md)
  
  ### Overview
  This image depicts a user interface element from a software application, specifically a dropdown menu within a settings or configuration panel. The panel includes various attributes and options related to particle effects, as indicated by the text "PrototypeParticleFx" at the top.
  
  ### Key Elements
  - **Dropdown Menu**: Located in the center-right area of the image. It contains a list of items: "vfx-exclamation," "vfx-arrows," "vfx-circularglow," "vfx-halo." The item "vfx-exclamation" is highlighted with a checkmark, indicating it is selected.
  - **Attributes Section**: Positioned above the dropdown menu, containing fields labeled "Position," "Rotation," and "Scale." Each field has numerical values next to them.
  - **Emission Section**: Below the Attributes section, with labels such as "Prefab Name," "Play on Start," "Looping," and "Preview." The "Custom FX Properties" option is partially visible.
  - **Gameplay Tags Section**: At the bottom, partially obscured by the dropdown menu, with a label "Gameplay Tags."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the dropdown menu, which is the focal point due to its central placement and the checkmark indicating selection. The Attributes section is secondary but still important, providing contextual information about the particle effect being configured. The Emission and Gameplay Tags sections are less prominent but offer additional configuration options.
  
  </details>
  
  <p></p>
  
  
- **Configure waypoint behavior**: Set up waypoint parameters including:
  * **isOutsideWaypoint**: Enable scaling for outdoor locations
  * **waypointVFX**: Customize visual appearance (exclamation points, arrows, halos)
  * **Event Listeners**: Configure responses to `WaypointEvents.activeQuestWaypoint`

### Phase 4: Quest progression and completion

Implement triggers and UI systems for quest advancement:

- **Create progression triggers**: Use **Build > Gizmos > Trigger Zone** to place quest triggers throughout your world. Attach the `QuestTrigger.ts` script and configure:
  * **Quest ID**: Link to specific quest objectives
  * **Operation Type**: Set to ‘start’ or ‘complete’ based on function
  * **Integration Points**: Connect with dialogue completion and waypoint systems
- **Setup UI feedback systems**: Configure quest user interface components:
  * **Active Quests Display**: Attach `UICurrentQuests.ts` to show ongoing objectives
  * **Completion Feedback**: Use `UIQuestComplete.ts` for reward messages
  * **Quest Prompts**: Implement `UIQuestStartDialogue.ts` for quest acceptance UI

### Phase 5: Testing and integration

Verify the complete quest experience works seamlessly:

- **Test the quest flow**: Walk through the complete player journey:
  * **Discovery**: Approach NPCs and trigger dialogue
  * **Acceptance**: Navigate quest prompts and accept objectives
  * **Navigation**: Follow waypoints to quest locations
  * **Completion**: Achieve objectives and observe completion feedback
  * **Progression**: Verify quest state updates and system integration

  <details>
  <summary>Quest flow testing</summary>
  
  <p></p>
  
  [Quest flow testing](../../../image_data/2d5543a411871e3f42f46382316dfffb757937f9e66b9589ea410a43b1531ebe.md)
  
  ### Overview
  The image depicts a user interface segment from a game or application tutorial. It features a dialogue box with text and a NPC speaker icon, along with a "Skip" button at the top right corner. The background is a tiled wall with a yellowish hue.
  
  ### Key Elements
  - **Dialogue Box**: Located centrally, with a blue background and white text. Contains information about NPCs and dialogues.
    - **Text**: "Dialogues can be tied to NPCs and assign T... Dialogues can also trigger events to... See 'DialogueNPC.ts' and 'Quest.ts' for how to implement this asset."
    - **Visual styling**: Blue background, white text, rounded corners.
  - **NPC Speaker Icon**: Positioned above the dialogue box, featuring a small robot-like figure with a speech bubble.
    - **Text**: "NPC Speaker"
    - **Visual styling**: Yellow background, circular shape, small robot icon.
  - **Speech Bubble**: A light brown, oval-shaped speech bubble containing text.
    - **Text**: "Dialogues can also trigger events to..."
    - **Visual styling**: Light brown background, curved edges.
  - **Second Speech Bubble**: A smaller, blue speech bubble with white text.
    - **Text**: "...assign a task."
    - **Visual styling**: Blue background, white text, rounded corners.
  - **Skip Button**: Located at the top right corner, with a gray background and white text.
    - **Text**: "Skip"
    - **Visual styling**: Gray background, white text, rectangular shape.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The NPC Speaker icon and the dialogue box.
  - **Arrows/Connectors**: None visible.
  - **Spatial Relationships**: The NPC Speaker icon is above the dialogue box, which contains the main text. The speech bubbles extend from the dialogue box, indicating dialogue content. The Skip button is separate and positioned to the top right.
  
  </details>
  
  <p></p>
  
  
- **Validate integration points**: Ensure all systems work together:
  * Dialogue completion triggers quest starts
  * Quest activation spawns waypoints
  * Quest completion removes waypoints and shows rewards
  * UI systems provide clear feedback at each stage

Once your quest experience is implemented, players will have a complete guided journey from quest discovery through completion. The integrated systems ensure players always know their objectives, understand how to reach them, and feel rewarded for their progress.

With a complete quest experience in place, you can create engaging player journeys that combine storytelling, clear navigation, and satisfying progression to keep players engaged throughout their time in your world.