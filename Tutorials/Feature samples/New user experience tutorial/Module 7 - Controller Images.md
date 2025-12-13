Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/new-user-experience-tutorial/module-7-controller-images

# Module 7 - Controller Images

In this module we will cover how the Controller Images system works and how to use it to visually teach VR controller inputs using animated motion sequences and static diagrams.

The Controller Images system gives creators the tools to visually teach VR controller inputs using animated motion sequences or static diagrams with highlighted buttons. Designed for onboarding and tutorials, it helps players understand required interactions through clear, customizable controller visuals that support both static instructional panels and dynamic image sequences to show controller movement in action.

This system provides essential visual guidance for VR interactions, ensuring players understand how to use their controllers effectively without confusion or trial-and-error learning.

You may want to add this to your world to teach new VR users how to interact with controllers, demonstrate specific input combinations, or provide visual references for complex gestures and button sequences.

The Controller Images system works with the following scripts included in the tutorial world:

* `ControllerUI.ts` - Creates customizable UI panels with animated or static controller diagrams and supports predefined VR control images
* `SpriteInfo.ts` - Represents individual image sprites with IDs and display order for creating custom animated sequences

## Implement the controller images components

In the New User Experience (NUX) tutorial world, the controller images system creates customizable UI panels that display VR controller instructions through static diagrams or animated sequences. The system includes predefined controller images for common VR inputs and supports custom animation sequences for complex gestures.

The controller images system uses a UI component approach where `ControllerUI.ts` manages the visual presentation and layout, while `SpriteInfo.ts` provides the data structure for custom animated sequences.

### Understanding the controller UI architecture

The `ControllerUI.ts` script provides a highly configurable panel system with these key features:

* **Predefined VR Controls**: Built-in animated sequences for common VR controller buttons (A, B, X, Y, triggers, directional buttons)
* **Custom Animation Support**: Framework for creating custom controller instruction sequences using image sprites
* **Flexible Layout**: Configurable positioning, colors, fonts, and visual styling
* **Interactive Elements**: Optional close buttons and dynamic content updates

### Setup the basic controller UI panel

The `ControllerUI.ts` script creates the foundational UI panel for displaying controller instructions.

- **Create the controller UI entity**: Navigate to your world and create a UI entity where you want controller tutorials to appear. Attach the `ControllerUI.ts` script to this entity.

  <details>
  <summary>Controller UI Entity</summary>
  
  <p></p>
  
  [Controller UI Entity](../../../image_data/39ce99f21e6db2fba53fa712b098935d484792c4196b67f77ce5618234fb5176.md)
  
  ### Overview
  This image depicts a user interface element resembling a form or settings panel within a software application. It includes a header, input fields, and a small icon indicating a dropdown or expandable section.
  
  ### Key Elements
  - **Header**: Located at the top-left corner, it contains a small icon (a triangle with a dot inside) and the text "TutorialImageInfo:Tutorialim..." which seems to be truncated.
  - **Input Fields**: Two rectangular input fields are present below the header. The first field has the label "order" and is filled with the number "1". The second field is labeled "imageId" but is empty.
  - **Icon**: A small icon resembling a dropdown arrow is positioned next to the header, suggesting that clicking it would reveal more options or information related to the "TutorialImageInfo" section.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the header due to its placement at the top. The input fields are arranged vertically below the header. There are no arrows or lines connecting elements, implying a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  
- **Configure panel appearance**: Set up the visual properties in the script inspector:
  * **Panel Layout**: Configure `panelWidth` (default: 1000) and `panelHeight` (default: 300) for appropriate sizing
  * **Background Styling**: Set `backgroundColor` (default: ‘#c59f71’), `backgroundOpacity` (0-1), and border properties (`borderColor`, `borderWidth`, `borderRadius`)
  * **Content Layout**: Choose image position using `isImageLeft` (true for left side, false for right side)
- **Setup content properties**: Configure the text and message display:
  * **Title Configuration**: Set `initialTitle`, `titleColor` (default: ‘#000’), `titleFontSize` (default: 20), and `titleCenterAligned`
  * **Message Configuration**: Set `initialMessage`, `messageColor`, `messageFontSize` (default: 16), and `messageCenterAligned`
  * **Separator Styling**: Configure `separatorColor`, `separatorWidth`, `separatorHeight`, and `separatorMarginBottom`
- **Configure interactive elements**: Set up optional close button:
  * **Close Button**: Toggle `showCloseButton` (default: true), set `closeBackgroundColor` (default: ‘#950303’), `closeColor` (default: ‘#ffffff’), and `closeFontSize`

### Implement predefined VR controller images

The system includes built-in animated sequences for common VR controller inputs with predefined image assets.

- **Select predefined controller input**: Choose one of the available predefined controller animations by setting the corresponding property to `true` (ensure only one is active):
  * **isPredefinedButtonA**: Left controller A button animation (3 frames)
  * **isPredefinedButtonB**: Left controller B button animation (3 frames)
  * **isPredefinedButtonX**: Right controller X button animation (3 frames)
  * **isPredefinedButtonY**: Right controller Y button animation (3 frames)
  * **isPredefinedTriggerLeft**: Left controller trigger/back button animation (3 frames)
  * **isPredefinedTriggerRight**: Right controller trigger/back button animation (3 frames)
  * **isPredefinedDownLeft**: Left controller directional down button animation (3 frames)
  * **isPredefinedDownRight**: Right controller directional down button animation (3 frames)

  <details>
  <summary>Predefined Controller Images</summary>
  
  <p></p>
  
  [Predefined Controller Images](../../../image_data/223944c0a7358e2c9bdf9544da7d2b76e5965d4195431405ba8819fc48c9395a.md)
  
  ### Overview
  This image depicts a settings interface for a user interface controller, likely part of a tutorial or configuration tool. It shows various parameters that can be adjusted, such as sprite frequency, border color, title color, message color, and several boolean switches indicating predefined button states.
  
  ### Key Elements
  - **Parameter List**: A vertical list of parameters with corresponding input fields and toggle switches.
    - **Parameter**: `spriteFrequency`
      - **Visual description**: Text field with a value displayed.
      - **Location**: Left column.
      - **Contents**: `0.25`.
      - **Visual styling**: Black text on a dark background.
    - **Toggle Switches**: Multiple toggle switches with blue indicators.
      - **Visual description**: Small square with a blue indicator.
      - **Location**: Right column.
      - **Contents**: Various parameter names like `isPredefinedButtonA`, `isPredefinedButtonB`, etc.
      - **Visual styling**: Blue indicator on a white square.
    - **Input Fields**: Text fields for entering values.
      - **Visual description**: Black text on a dark background.
      - **Location**: Left column.
      - **Contents**: Values like `#ffffff`, `#0000`, `#c59f71`, etc.
      - **Visual styling**: Black text on a dark background.
    - **Boolean Parameters**: Parameters like `isImageLeft`, `titleCenterAligned`, `messageCenterAligned`, etc.
      - **Visual description**: Toggle switches with blue indicators.
      - **Location**: Right column.
      - **Contents**: Boolean values like `true` or `false`.
      - **Visual styling**: Blue indicator on a white square.
  
  ### Visual Flow / Relationships
  The interface is structured with a clear vertical layout. The left column contains parameter labels and input fields, while the right column contains toggle switches. The toggle switches are aligned vertically under their respective parameters. The input fields are also aligned vertically but are slightly offset to the left compared to the toggle switches.
  
  </details>
  
  <p></p>
  
  
- **Configure animation timing**: Set the `spriteFrequency` property (default: 0.25 seconds) to control how fast the animation cycles through frames. The `isAnimated` property is automatically handled for predefined sequences.

### Create custom animated controller sequences

For custom controller instructions, use the `SpriteInfo.ts` component system to create your own animated sequences.

- **Setup custom animation structure**: Enable custom animations by setting `isAnimated: true` in the ControllerUI script properties.
- **Create sprite info entities**: For each frame in your custom animation sequence:
  * Create an empty child object under your ControllerUI entity
  * Attach the `SpriteInfo.ts` script to each child object
  * Configure the sprite properties:
    + **order**: Set the sequence order (1, 2, 3, etc.) to control frame progression
    + **imageId**: Set the asset ID string for the image to display in this frame
- **Test custom animation**: The system automatically:
  * Loads all child entities with `SpriteInfo` components
  * Sorts frames by the `order` property
  * Creates a smooth animation loop at the specified `spriteFrequency`
  * Cycles continuously through all frames in sequence

### Advanced controller UI features

- **Dynamic content updates**: Use the `trigger()` method to update content dynamically:

  ```
  // Update title and message from other scripts
  controllerUI.trigger('New Title', 'New instruction message');
  ```
- **Custom styling options**: The system supports advanced styling:
  * **Color formats**: Use RGBA values (`"rgba(255,0,0,0.5)"`), hex codes (`"#ff0000"`), or named colors (`"red"`)
  * **Responsive layout**: Content automatically adjusts based on message length and panel size
  * **Image background**: Configure `imageBackgroundColorBinding` for image area styling
- **Animation control methods**: Advanced animation management:
  * **Start animation**: Call `animate(cooldown)` to begin custom animation sequences
  * **Stop animation**: Call `stopAnimation()` to pause and reset to first frame
  * **Load custom images**: Call `loadChildImages()` to refresh sprite sequences

### Implementation best practices

**For Basic VR Teaching**: Use predefined controller images with clear titles and simple messages to teach standard VR interactions.

**For Complex Gestures**: Create custom animated sequences using `SpriteInfo` components to show multi-step controller movements.

**For Tutorial Integration**: Combine with trigger systems to show contextual controller instructions at appropriate tutorial moments.

### Testing your controller images implementation

Once your controller images system is implemented, thoroughly test:

- **Static Display Testing**: Verify panels appear with correct layout, colors, and text formatting
- **Predefined Animation Testing**: Test each predefined controller animation for smooth playback and appropriate timing
- **Custom Animation Testing**: Verify custom sprite sequences load in correct order and animate smoothly
- **Interactive Testing**: Test close button functionality and dynamic content updates
- **Integration Testing**: Confirm controller tutorials integrate properly with other tutorial systems
- **Visual Clarity Testing**: Ensure controller instructions are clear and helpful for new VR users

<details>
<summary>Testing Controller Images</summary>

<p></p>

[Testing Controller Images](../../../image_data/b0791ea8416f5082ea957370fd1cd77044b37f550bcdb2325341890a3f5af855.md)

### Overview
This image depicts a user interface element resembling a notification or message card. It features a profile picture on the left side, a title and message content area in the center, and a close button on the right.

### Key Elements
- **Profile Picture**: Located on the left side, it is a circular icon with a character design. The character has a white hand holding a device with a purple arrow pointing towards a circular element containing a 'Y' symbol.
- **Title**: Positioned centrally above the message content, the word "Title" is displayed.
- **Message Content**: Below the title, the text "This is a message!" is shown.
- **Close Button**: A small red button with a white 'X' is located at the top right corner.

### Visual Flow / Relationships
The most prominent visual element is the profile picture on the left. The title and message content are aligned horizontally beneath the picture. The close button is isolated to the far right, indicating it can be used to dismiss the message.

</details>

<p></p>



With a comprehensive controller images system in place, you can provide clear visual instruction for VR controller usage through both predefined animations for common inputs and custom sequences for complex gestures, significantly improving the onboarding experience for new users in your world.