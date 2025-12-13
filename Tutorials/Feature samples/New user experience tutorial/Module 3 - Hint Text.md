Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/new-user-experience-tutorial/module-3-hint-text

# Module 3 - Hint Text

In this module, we will cover how hint text works and how to use it to help onboard new users to your world.

Hint text can be used to display notification messages to players in your game world. You can use hint text to provide reminders or nudge players toward goals and objectives with different notification layouts based on message length and whether a title is included.

In the New User Experience Tutorial (NUX) world, hint text is used to display notifications to players when they enter a trigger area. The hint text system is designed to be flexible and scalable for different player counts. It also supports multiple notification layouts and dynamic font sizing. The system works on both mobile and desktop platforms.

The hint text system works with the following scripts included in the tutorial world:

* `HintText.ts` — Handles the UI for displaying notifications with dynamic font sizing and multiple layouts
* `HintTextTrigger.ts` — Displays notification text when players enter a trigger area

The Hint Text system supports the following features:

* Dynamic font sizing based on message length
* Multiple UI layouts for different notification types
* Countdown timer for time-sensitive messages
* Customizable background colors
* Mobile and desktop adjustments
* Support for up to three players (expandable by duplicating components)

## Implement Hint Text components

In the New User Experience (NUX) tutorial world, Hint Text appears when players enter trigger zones and automatically adapts its layout and font size based on message length. The system provides multiple notification layouts for optimal readability across different scenarios.

The Hint Text system uses a trigger-based approach where `HintTextTrigger.ts` detects player entry and sends notification events to `HintText.ts` for UI display.

### Setup the Hint Text system

To implement a complete hint text system, use the following process:

- **Create the hint text trigger zone**: Navigate to **Build** > **Gizmos**, select the **Trigger Zone** gizmo and position it where you want to display notifications to players. This trigger will detect when players enter the area and activate the hint text display.

  <details>
  <summary>Hint Text Trigger zone</summary>
  
  <p></p>
  
  [Hint Text Trigger zone](../../../image_data/03b4781138c6db8538df7a7e8f296b13aa052098b5c49ec0a01621266b3f3cc5.md)
  
  ### Overview
  This image depicts a user interface element, specifically a settings panel or configuration screen, likely part of a game or application. It shows a section with a title "HintTextTrigger:HintTextTrig..." partially cut off, indicating a larger context that is not fully visible. The panel contains several fields for inputting custom parameters related to hint text triggers.
  
  ### Key Elements
  - **Title**: Located at the top-left corner, partially obscured but reads "HintTextTrigger:HintTextTrig...". This suggests the panel is for configuring a specific feature related to hint text triggers.
  - **Custom Title Field**: Positioned below the title, this field has a label "customTitle" and a text input area labeled "Hint Text". The input area is filled with the text "Hint Text".
  - **Custom Message Field**: Below the custom title field, this section has a label "customMessage" and a text input area containing the text "Show players hints".
  - **Amount Time Field**: At the bottom, this field has a label "amountTime" and a numeric input area showing the value "5".
  
  ### Visual Flow / Relationships
  The elements are arranged vertically, with each field having a label above it. There are no arrows or lines connecting the elements, suggesting a linear reading order from top to bottom. The fields are aligned horizontally within their respective rows.
  
  </details>
  
  <p></p>
  
  
- **Configure the trigger script**: Attach the `HintTextTrigger.ts` script to your trigger zone. Configure the trigger properties in the inspector:
  * **customTitle**: Title of the notification (can be empty for message-only notifications)
  * **customMessage**: Main message content to display to players (default: “Welcome to the world!”)
  * **amountTime**: Duration in seconds the notification should remain visible (default: 5 seconds)

  **Note**: The script automatically sends a network broadcast event when players enter the trigger area.
- **Create the hint text UI handler**: Create an empty object in your scene to house the hint text display system. Navigate to **Build** > **Gizmos** and add a **Custom UI** gizmo to this object.
- **Setup the UI script**: Attach the `HintText.ts` script to your Custom UI gizmo. Configure the essential properties:
  * **playerIndex**: Set to 0, 1, or 2 to assign this hint text component to a specific player (supports up to 3 players by default)
  * **openSFX/closeSFX**: Optional audio entities to play when notifications appear/disappear
  * **Font Size Properties**: Configure dynamic font sizing for different message lengths:
    + **smallTitleFontSize/smallMessageFontSize**: Used for messages under 50 characters (default: 28/16)
    + **normalTitleFontSize/normalMessageFontSize**: Used for messages 50-100 characters (default: 28/14)
    + **bigTitleFontSize/bigMessageFontSize**: Used for messages over 100 characters (default: 28/12)

  <details>
  <summary>Hint Text Properties</summary>
  
  <p></p>
  
  [Hint Text Properties](../../../image_data/53f599ff21d98a4160dcd1ac228db6f27105fffdb41c509ea40c5a617e04ba3c.md)
  
  ### Overview
  This image depicts a user interface element, specifically a settings panel or configuration screen, likely part of a software application. It includes a header labeled "HintText:HintText," followed by several adjustable font sizes for different text types.
  
  ### Key Elements
  - **Header**: Located at the top-left corner, reads "HintText:HintText."
  - **Input Field**: Positioned below the header, contains the text "0." This field appears to be editable.
  - **Toggle Switches**: Two toggle switches are present beneath the input field. They are labeled "openSFX" and "closeSFX," both showing the same audio graph icon and a circular toggle switch indicator.
  - **Font Size Settings**: Below the toggle switches, there are six adjustable font size settings labeled as "smallTitleFontSize," "smallMessageFontSize," "normalTitleFontSize," "normalMessageFontSize," "bigTitleFontSize," and "bigMessageFontSize." Each setting has a corresponding value displayed next to it.
  
  ### Visual Flow / Relationships
  The layout is structured with a clear vertical arrangement. The header is the most prominent element, followed by the input field, then the toggle switches, and finally the font size settings. There are no arrows or lines connecting elements, suggesting a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  
- **Configure advanced features** (Optional):
  * **Countdown Support**: Send messages with format “Countdown: X” to activate countdown timer functionality
  * **Background Colors**: Use the `bgColor` parameter in network events to customize notification background colors
  * **Multiple Player Support**: Duplicate the hint text UI objects and set different playerIndex values (0, 1, 2) for each player
  * **Device Adaptation**: The system automatically adjusts UI layout for mobile vs desktop players

### Understanding the notification layouts

The `HintText.ts` script automatically selects the optimal notification layout based on message length:

* **Messages < 50 characters**: Uses small layout with larger fonts for high readability
* **Messages 50-100 characters**: Uses normal layout with medium fonts
* **Messages > 100 characters**: Uses big layout with smaller fonts to fit content

### Advanced implementation notes

**Event System**: The system uses `UIEvents.notification` network events to communicate between trigger and display components. You can manually send these events from other scripts using:

```
this.sendNetworkBroadcastEvent(UIEvents.notification, {
  player: [playerArray],
  title: 'Your Title',
  message: 'Your Message',
  time: 5,
  bgColor: '#0288d1',
});
```

**Player Assignment**: The component automatically assigns itself to players based on the `playerIndex` property when they enter the world. Ensure you have separate hint text components for each player if supporting multiplayer.

### Testing your hint text implementation

Once your hint text system is implemented, test it by:

- **Trigger Testing**: Walk into the trigger zones and verify notifications appear with correct content
- **Layout Testing**: Test with different message lengths to ensure appropriate layouts are selected
- **Timing Testing**: Verify notifications display for the configured duration and dismiss properly
- **Multiplayer Testing**: If supporting multiple players, test that each player sees their assigned notifications
- **Audio Testing**: Confirm opening and closing sound effects play correctly (if configured)

<details>
<summary>Hint Text Testing</summary>

<p></p>

[Hint Text Testing](../../../image_data/af60e9b12e4ae00171e1b1005e456cac76597af50445b9a567ca9b50e95cbdf2.md)

### Overview
The image depicts a virtual environment with a character and a floating interface element. The character appears to be in a corridor with tiled walls and flooring. There is a blue rectangular interface element on the left side displaying text, and another blue rectangular element at the bottom showing a message. A small robot-like figure is also visible near the left interface element.

### Key Elements
- **Left Interface Element**: Located on the left side of the image, it has a blue background with white text. Contains information about implementing an asset named "ArrowAssignManager.ts". The text includes phrases like "VFXs can be set to guide player to key locations." and "Asset Name: NUX - NPCDialogueTree."
- **Character**: Positioned centrally in the image, facing away from the viewer. The character is wearing a brown hat, a black jacket, and light-colored pants. The character's posture suggests movement, as one leg is extended forward.
- **Bottom Interface Element**: A blue rectangle at the bottom of the image contains the text "Waypoint reached!" in white font.
- **Robot Figure**: A small, yellow and orange robot-like figure is located near the left interface element, appearing to be floating above the floor.

### Visual Flow / Relationships
The most prominent visual elements are the interface elements and the character. The interface elements provide contextual information, while the character's movement is implied by its stance. The robot figure adds a dynamic element to the scene. The layout suggests a user interface within a game or simulation environment.

</details>

<p></p>



With a complete hint text system in place, you can provide contextual guidance and reminders that adapt to different message lengths and player scenarios, improving the onboarding experience for new users in your world.