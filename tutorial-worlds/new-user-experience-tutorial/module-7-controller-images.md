Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/new-user-experience-tutorial/module-7-controller-images

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

  ![Controller UI Entity](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/549827875_817222387482381_4525873763874741735_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ns7ctYM9qKAQ7kNvwFGjxsP&_nc_oc=AdmnfH391VVbIyKrjevHUJBgU-nIHn2gqJG3a6LWMMSmKE3x9KWuMIUfNuNJU_jFCDc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vFSiRN5LH9DT4Rs6G67Uyw&oh=00_AfjA-oExhLtje4-GJTfIXl2zfbEidaTokcvdwdE4GAOV9g&oe=692BFC14)
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

  ![Predefined Controller Images](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/547371739_817222394149047_8782678546501310627_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=PQ6QPbCWrI8Q7kNvwHbktFK&_nc_oc=Adm6Hu2jX9XdZSGXAxWeTz3hBGsWzbTNT_PM_J1dWx6XhFNf-ZWeTJ-FXt81LWsZ_aM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vFSiRN5LH9DT4Rs6G67Uyw&oh=00_Afj7gsNlCVZjjAUaeyJbSbBDMd9JkHSRAkRsDyholINf-A&oe=692BF830)
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

  ```vs
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

![Testing Controller Images](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/549361582_817222404149046_1524929474160658186_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=eEaoBoQZyP0Q7kNvwGZbPP7&_nc_oc=AdnfHhv9nB3LVugLi6P8ryKhtuz9wd3S10nPcYhM_l_wDuz9Jt5aLkplfLDjMBuZqW0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=vFSiRN5LH9DT4Rs6G67Uyw&oh=00_AfhWY_0VOWwL0mNbMizmET5OdXdlz7vlEgnLl0-evTQDgA&oe=692C0F6D)

With a comprehensive controller images system in place, you can provide clear visual instruction for VR controller usage through both predefined animations for common inputs and custom sequences for complex gestures, significantly improving the onboarding experience for new users in your world.