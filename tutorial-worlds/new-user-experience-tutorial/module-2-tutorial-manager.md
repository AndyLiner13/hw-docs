Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/new-user-experience-tutorial/module-2-tutorial-manager

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

  ![Tutorial Controller Entity](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/547679779_817222434149043_6622080645159375496_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Mh9ngXkO0-8Q7kNvwHEwP-w&_nc_oc=AdkG4mZUXON08lT4D5Z37N-ouRE7S2V98f8PVbphFlebKQLReDf9dJVka8cbQf0oz1U&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TNOBi3IKp-Uzv1Uc1kyvAA&oh=00_AfjT0xdD2_vkXZMyNJpIFEVt8fu_VSDgldts4O6OjXvpPQ&oe=692C107A)
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

  ![Tutorial Slide Properties](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/549296546_817222437482376_6243435734742365644_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=-6fl5CY_gNwQ7kNvwFE3DTb&_nc_oc=AdmEyXKfm7Y9XPCKYCOrZQe1mEkvPoxC9nqV-7pKPk79ksuUA0xQxILxkBOGC98Ar5M&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TNOBi3IKp-Uzv1Uc1kyvAA&oh=00_AfhWTUHC1Z-zt7nVQpELa9fi4Z6Bu2rVtS5fqRNd-qVEIQ&oe=692BF71E)
- **Understanding slide sorting and loading**: The TutorialController automatically:
  * Searches all child entities for `TutorialSlide` components
  * Sorts slides by their `order` property (ascending)
  * Converts slide data to Horizon’s `InfoSlide` format
  * Stores the organized slideshow for presentation

### Advanced tutorial slide features

- **Dynamic content modification**: The `TutorialSlide.ts` script supports runtime content changes through public methods:

  ```vs
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

![Tutorial Slide Example](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/548904179_817222384149048_3185233713188373063_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=daOBjQmpp9AQ7kNvwFV4-dO&_nc_oc=Adl2V46Sco6_umxONsIigLUnKb-6LDAsveAqxx_AH-0mt3HYWvMY2LA1gcYH2Df5L5E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TNOBi3IKp-Uzv1Uc1kyvAA&oh=00_AfhCirp6NlzaqOEA_F9GKtQS5Msabry24t4KmtT8jX2eJQ&oe=692C0713)

With a comprehensive tutorial slide system in place, you can provide structured, professional onboarding experiences that guide players through your world’s features using interactive slideshow presentations that leverage Horizon’s native tutorial capabilities.