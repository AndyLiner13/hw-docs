Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/new-user-experience-tutorial/module-2-tutorial-manager

# Module 2 - Tutorial Manager

In this module we will cover how the Tutorial Manager works and how to use it to create structured slide-based tutorials that help onboard new users to your world.

The Tutorial Slide System enables creators to guide players through step-by-step instructions using interactive slideshow presentations. It leverages Horizon’s **InfoSlide API** to display polished, modal-style tutorials with images, text, and structured navigation. Tutorials can be triggered by player interactions and support modular slide creation for scalable onboarding flows.

This system provides a professional presentation format for teaching game mechanics, world features, or user interface elements through organized, sequential instruction slides.

You may want to add this to your world to provide structured onboarding for new players, teach complex game mechanics through step-by-step guidance, or create contextual help that appears when players unlock new features or areas.

The Tutorial Manager works with the following scripts included in the tutorial world:

* `TutorialController.ts` - Manages tutorial slides and handles trigger-based tutorial activation
* `TutorialSlide.ts` - Represents individual tutorial slides with configurable content and ordering
* `UIHighlight.ts` - Provides UI highlighting for tutorial elements (used with other systems)
* `TutorialManager.ts` - Coordinates overall tutorial flow and player progression

## Implement the tutorial slide system components

In the New User Experience (NUX) tutorial world, the tutorial slide system creates interactive slideshow presentations that players can navigate through using Horizon’s built-in InfoSlide interface. The system automatically loads, sorts, and displays slides when triggered by player interactions.

The tutorial system uses a hierarchical approach where `TutorialController.ts` manages the overall presentation and triggers, while `TutorialSlide.ts` components define individual slide content and ordering.

### Understanding the tutorial slide architecture

The tutorial slide system consists of several key components:

* **TutorialController**: Manages slide loading, sorting, and presentation to players
* **TutorialSlide**: Represents individual slides with content, images, and display properties
* **Trigger Integration**: Connects tutorial activation to player interactions (typically trigger zones)
* **InfoSlide API**: Leverages Horizon’s native slideshow presentation system

### Setup the tutorial controller system

The `TutorialController.ts` script handles the core tutorial management and presentation logic.

- **Create the tutorial controller entity**: Create an empty object in your world to house the tutorial system. Attach the `TutorialController.ts` script to this entity.

  <details>
  <summary>Tutorial Controller Entity</summary>
  
  <p></p>
  
  [Tutorial Controller Entity](../../../image_data/7467fadf2b08eab2af3db84733b143e8a184d3c05265073a6ec0cf2a14dfb3ab.md)
  
  ### Overview
  This image depicts a tree-like directory structure within a user interface, likely part of a software application or tool. The visual is a hierarchical list with expandable/collapsible nodes, indicated by the presence of plus and minus symbols next to some nodes.
  
  ### Key Elements
  - **Visual description**: This is a tree view with expandable/collapsible nodes.
  - **Location**: The entire visual is centered horizontally and vertically within the image.
  - **Contents**: 
      - **Node 1**: "NUX-TutorialManager"
          - **Visual description**: A folder icon with a plus symbol indicating expandability.
          - **Location**: Top-left corner.
          - **Contents**: "NUX-TutorialManager"
          - **Visual styling**: Dark gray folder icon, white plus symbol.
      - **Node 2**: "Tutorial UI"
          - **Visual description**: A folder icon with a plus symbol indicating expandability.
          - **Location**: Below Node 1.
          - **Contents**: "Tutorial UI"
          - **Visual styling**: Dark gray folder icon, white plus symbol.
      - **Node 3**: "Tutorial Basic - 1"
          - **Visual description**: A folder icon with a plus symbol indicating expandability.
          - **Location**: Below Node 2.
          - **Contents**: "Tutorial Basic - 1"
          - **Visual styling**: Dark gray folder icon, white plus symbol.
      - **Node 4**: "Tutorial Slide - 1"
          - **Visual description**: A folder icon with a plus symbol indicating expandability.
          - **Location**: Below Node 3.
          - **Contents**: "Tutorial Slide - 1"
          - **Visual styling**: Dark gray folder icon, white plus symbol.
      - **Node 5**: "Tutorial Slide - 2"
          - **Visual description**: A folder icon with a plus symbol indicating expandability.
          - **Location**: Below Node 4.
          - **Contents**: "Tutorial Slide - 2"
          - **Visual styling**: Dark gray folder icon, white plus symbol.
      - **Node 6**: "Tutorial Slide - 3"
          - **Visual description**: A folder icon with a plus symbol indicating expandability.
          - **Location**: Below Node 5.
          - **Contents**: "Tutorial Slide - 3"
          - **Visual styling**: Dark gray folder icon, white plus symbol.
      - **Node 7**: "Tutorial Trigger"
          - **Visual description**: A folder icon with a plus symbol indicating expandability.
          - **Location**: Below Node 6.
          - **Contents**: "Tutorial Trigger"
          - **Visual styling**: Dark gray folder icon, white plus symbol.
  - **Visual styling**: The background is dark gray, and the folder icons are dark gray with white text and symbols. The expanded node "Tutorial Basic - 1" is highlighted in blue, suggesting selection or focus.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The expanded node "Tutorial Basic - 1" is the most prominent due to its blue highlight.
  - **Arrows/lines/connectors**: There are no arrows, lines, or connectors visible in this image.
  - **Spatial relationships**: Nodes are arranged in a vertical stack, with expandable/collapsible nodes indicated by plus symbols. The expanded node "Tutorial Basic - 1" reveals its child nodes "Tutorial Slide - 1," "Tutorial Slide - 2," and "Tutorial Slide - 3."
  
  </details>
  
  <p></p>
  
  
- **Configure the trigger zone**: Create a **Trigger Zone** gizmo and position it where you want players to activate the tutorial. In the Properties panel for the TutorialController script, assign this trigger zone to the **trigger** property. The script automatically connects to the trigger’s `OnPlayerEnterTrigger` event.
- **Prepare the slide container structure**: The TutorialController automatically searches for `TutorialSlide` components in its child entities. Create child objects under the TutorialController entity to house your individual slides.

### Create and configure tutorial slides

The `TutorialSlide.ts` script defines the content and properties for individual slides in your tutorial presentation.

- **Create individual slide entities**: For each slide in your tutorial:
  * Create an empty child object under the TutorialController entity
  * Attach the `TutorialSlide.ts` script to each child object
  * Configure the slide properties in the entity inspector
- **Configure slide content properties**: Set up the essential content for each slide:
  * **order**: Set the sequence number (1, 2, 3, etc.) to control slide order in the presentation
  * **title**: Set the slide title (default: ‘Tutorial Slide’)
  * **message**: Set the main instructional content (default: ‘This is a tutorial slide.’)
  * **imageURL**: Set the asset ID string for any image to display on the slide (optional)
  * **attachImageToHeader**: Toggle to attach the image to the slide header instead of the body (default: false)

  <details>
  <summary>Tutorial Slide Properties</summary>
  
  <p></p>
  
  [Tutorial Slide Properties](../../../image_data/a94c66db0b8b45aca6fac96304ccc1785ca985429b6586ba24f71c159e32e904.md)
  
  ### Overview
  This image depicts a user interface element resembling a settings or configuration panel for a slide titled "TutorialSlide." It includes several input fields and a toggle switch.
  
  ### Key Elements
  - **Input Field (order)**: Located at the top-left, this field contains the number "1". It has a dark background with white text.
  - **Input Field (title)**: Positioned below the "order" field, this field contains the text "Tutorial". It also has a dark background with white text.
  - **Input Field (message)**: Situated beneath the "title" field, this field displays the text "> It supports title, de". The background is dark, and the text is white.
  - **Input Field (imageUri)**: Below the "message" field, this input field is empty and has a dark background with a placeholder icon indicating no image is attached.
  - **Toggle Switch (attachImageToHeader)**: Positioned at the bottom-right, this switch is currently unchecked. It has a dark background with a white toggle handle.
  
  ### Visual Flow / Relationships
  The elements are arranged in a vertical stack, with each field placed directly below the previous one. There are no connecting lines or arrows, and the layout suggests a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  
- **Understanding slide sorting and loading**: The TutorialController automatically:
  * Searches all child entities for `TutorialSlide` components
  * Sorts slides by their `order` property (ascending)
  * Converts slide data to Horizon’s `InfoSlide` format
  * Stores the organized slideshow for presentation

### Advanced tutorial slide features

- **Dynamic content modification**: The `TutorialSlide.ts` script supports runtime content changes through public methods:

  ```
  // Change slide content dynamically
  tutorialSlide.changeTitle('New Title');
  tutorialSlide.changeMessage('Updated message content');
  tutorialSlide.changeImageUri('1234567890123456'); // Asset ID string
  tutorialSlide.changeAttachImageToHeader(true);
  ```
- **Image and visual configuration**: Configure slide visuals effectively:
  * **Image assets**: Use valid asset ID strings for the `imageUri` property
  * **Header vs body images**: Toggle `attachImageToHeader` to control image placement
  * **Slide styling**: Images and text follow Horizon’s default InfoSlide styling
- **Tutorial flow control**: The system provides several access methods:
  * **Manual Triggering**: Call `tutorialController.playTutorial(player)` from other scripts
  * **Slide Access**: Use `tutorialController.getTutorialSlides()` to retrieve loaded slides
  * **Content refresh**: Call `tutorialController.loadSlides()` to reload and re-sort slides

### Implementation best practices

**For Simple Tutorials**: Create 3-5 slides with clear titles, concise messages, and relevant images to teach basic mechanics.

**For Complex Onboarding**: Structure slides with logical progression, using consistent naming and ordering to build understanding incrementally.

**For Contextual Help**: Combine with other trigger systems to show tutorials when players reach specific areas or unlock features.

### Understanding the tutorial presentation flow

When a player enters the trigger zone, the system:

- **Trigger detection**: TutorialController detects player entry via the assigned trigger zone
- **Slide loading**: Loads and sorts all TutorialSlide components from child entities
- **Format conversion**: Converts slide data to Horizon’s InfoSlide format with proper styling
- **Presentation start**: Calls `player.showInfoSlides()` to display the slideshow to the triggering player
- **Player navigation**: Player can navigate through slides using Horizon’s built-in controls
- **Automatic cleanup**: Slideshow closes when player completes or exits the presentation

### Testing your tutorial slide implementation

Once your tutorial slide system is implemented, thoroughly test:

- **Trigger Testing**: Walk into trigger zones and verify tutorials activate correctly
- **Slide Order Testing**: Confirm slides appear in the correct sequence based on order properties
- **Content Testing**: Verify titles, messages, and images display properly
- **Navigation Testing**: Test slide progression using Horizon’s built-in navigation controls
- **Multi-player Testing**: Ensure tutorials work properly for multiple players simultaneously
- **Visual Testing**: Confirm image placement and text formatting appear as intended

<details>
<summary>Tutorial Slide Example</summary>

<p></p>

[Tutorial Slide Example](../../../image_data/7dde079ed6de15a29ada80917918b9a8cdd4c07823ecaa026d4dab297b6d01ab.md)

### Overview
This image depicts a tutorial pop-up window with navigation controls and a content area. The window is centered on a grid background, suggesting a design interface or a similar environment.

### Key Elements
- **Title**: "Tutorial" located at the top-center of the window.
- **Description**: "It supports title, description and pictures." Located below the title.
- **Navigation Controls**:
  - **Left Arrow**: A circular button with a left-pointing arrow, located on the left side of the window.
  - **Right Arrow**: A circular button with a right-pointing arrow, located on the right side of the window.
- **Buttons**:
  - **Skip Button**: A light gray button labeled "Skip," positioned at the bottom-left of the window.
  - **Next Button**: A black button labeled "Next," positioned at the bottom-right of the window.
- **Indicators**: Three small dots, indicating multiple pages or steps within the tutorial, located near the right arrow.

### Visual Flow / Relationships
The most prominent visual element is the central content area displaying the title and description. Navigation arrows are symmetrically placed on either side, guiding the user to move through the tutorial. The buttons at the bottom provide options to skip or proceed to the next step.

</details>

<p></p>



With a comprehensive tutorial slide system in place, you can provide structured, professional onboarding experiences that guide players through your world’s features using interactive slideshow presentations that leverage Horizon’s native tutorial capabilities.