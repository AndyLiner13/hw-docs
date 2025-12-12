Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/custom-nux

# Custom tutorial scripting

## Overview

The Custom Tutorial Scripting API allows developers to create custom tutorials for their worlds, providing a seamless and engaging onboarding experience for new visitors to your world. It offers a set of APIs that can be used to create and manage tutorials, including the ability to show info slides, trigger contol button prompts or tooltips and show a generic “toast” notification.

## Tutorial APIs

* [showInfoSlides](Custom%20tutorial%20scripting.md#showinfoslides-api)
* [showInputActionMessage](Custom%20tutorial%20scripting.md#showinputactionmessage-api)
* [showToastMessage](Custom%20tutorial%20scripting.md#showtoastmessage-api)

## showInfoSlides API

The ‘ShowInfo’ API allows developers to convey information to users via a series of connected modal windows, greatly enhancing the onboarding experience in your world. It can be used to display welcome messages, provide critical updates, or deliver important instructions, ensuring users are well-informed about key aspects or new features in your world.

Each info slide can have a localizable title, message, and image. The image is a texture asset with either (width: 808 height: 412) size or (width: 920 height: 280) size in case it’s a header image. To add an image and get the image URI please follow [instructions](../Grabbable%20entities/Custom%20Action%20Button%20Icons.md#uploading-a-custom-texture). The image will be scaled to fit the panel size. The title and message are localizable strings that can be translated into different languages.

### Example

The following example shows how to use the showInfoSlides API.

For more details on the showInfoSlides API, check out our API documentation [here](https://horizon.meta.com/resources/scripting-api/core.player.showinfoslides.md/?api_version=2.0.0).

<details>
<summary>Header banner image example (920x280px)</summary>

<p></p>

[Header banner image example (920x280px)](../../image_data/a404ac42627ab519a2c5409ac36c2f62506258b75c7c2b420578a67748725bfb.md)

### Overview
The image depicts a user interface element that appears to be a modal window or pop-up overlaying a virtual environment. The window contains information about an image size and a title slide, with interactive buttons at the bottom.

### Key Elements
- **Modal Window**: A white rectangular box centered on the screen, serving as the main content area.
  - **Title**: "920 x 280" displayed prominently at the top.
  - **Content Area**: Below the title, the text "Title Slide #1!" is shown, followed by "Image width: 920 height: 280".
  - **Buttons**: Two buttons labeled "Skip" and "Next" are located at the bottom of the window.
    - **"Skip" Button**: Gray background with black text.
    - **"Next" Button**: Black background with white text.
- **Background**: A blurred virtual environment with a grid floor and a gradient sky.
- **Top Bar**: Contains icons for muting audio and accessing additional options, located in the top-left corner.
- **Menu Icon**: A hamburger menu icon is situated in the top-right corner.
- **Navigation Arrow**: A right-pointing arrow is visible on the far-right side of the screen, suggesting navigation functionality.

### Visual Flow / Relationships
- **Most Prominent Element**: The modal window is the focal point, drawing attention due to its central placement and contrasting color against the background.
- **Arrows and Navigation**: The right-pointing arrow implies a directional action, likely related to moving through slides or navigating the virtual environment.
- **Spatial Relationships**: The modal window overlays the virtual environment, indicating it is a secondary layer of interaction within the application.

</details>

<p></p>

<details>
<summary>Body image example (808x412px)</summary>

<p></p>

[Body image example (808x412px)](../../image_data/1950f087afaf29c3e433ef2fd1856914c8483085bde91264bfd3fa321c97ea14.md)

### Overview
The image depicts a user interface element resembling a virtual screen or display within a 3D environment. The central focus is a bright yellow-green rectangle with the dimensions "808 x 412" displayed prominently in the middle. Below this rectangle is a black button labeled "Let's go!" with white text. The surrounding area features a grid-like floor and a gradient sky background. There are also some UI elements in the corners, such as a mute icon, a menu icon, and a back arrow.

### Key Elements
- **Yellow-green Rectangle**: A large rectangular area filled with a solid yellow-green color. It occupies the majority of the screen space.
  - **Location**: Center of the image.
  - **Contents**: Displays the text "808 x 412".
  - **Visual styling**: Solid color, no gradients or textures.
- **Black Button**: A rectangular button located at the bottom of the yellow-green rectangle.
  - **Location**: Below the yellow-green rectangle.
  - **Contents**: Text "Let's go!" in white.
  - **Visual styling**: Black background with white text, rounded corners.
- **Grid Floor**: A light gray grid pattern covering the ground beneath the screen.
  - **Location**: Bottom of the image.
  - **Contents**: A simple grid design.
  - **Visual styling**: Light gray, thin lines forming squares.
- **Gradient Sky**: A gradient transitioning from a lighter blue at the horizon to a darker blue higher up.
  - **Location**: Top of the image.
  - **Contents**: No specific elements, just a gradient effect.
  - **Visual styling**: Smooth transition between shades of blue.
- **UI Icons**: Three circular icons are visible in the top left corner.
  - **Location**: Top left corner.
  - **Contents**: Icons representing a microphone, a three-dot menu, and another icon that appears to be a settings or options icon.
  - **Visual styling**: Circular shapes with icons inside.
- **Menu Icon**: A three-line menu icon is located in the top right corner.
  - **Location**: Top right corner.
  - **Contents**: Three horizontal lines stacked vertically.
  - **Visual styling**: Simple line drawing, dark gray color.

### Visual Flow / Relationships
- **Most Prominent Element**: The yellow-green rectangle with the dimensions "808 x 412".
- **Arrows/Connectors**: None.
- **Reading Order**: The elements appear to follow a linear sequence from top to bottom, starting with the UI icons, then the gradient sky, followed by the grid floor, and finally the yellow-green rectangle and the button below it.

</details>

<p></p>



```
player.showInfoSlides([
  {
    title: 'Title Slide #1!',
    message: 'Image width: 920 height: 280',
    imageUri: 'YOUR_TEXTURE_ASSET_ID',
    style: {
      attachImageToHeader: true,
    },
  },
  {
    title: '',
    message: 'Image width: 808 height: 412',
    imageUri: 'YOUR_TEXTURE_ASSET_ID',
  },
]);
```

## showInputActionMessage API

The `showInputActionMessage` API enables developers to trigger an attention-grabbing animation and display a message above an on-screen button for a specified [player input action](https://horizon.meta.com/resources/scripting-api/core.playerinputaction.md/?api_version=2.0.0). This is particularly useful for button tooltips in timed action prompts and tutorials.

More details about the API can be found [here](https://horizon.meta.com/resources/scripting-api/core.player.showinputactionmessage.md/?api_version=2.0.0)

### Example

<details>
<summary>showInputActionMessage visual example</summary>

<p></p>

[showInputActionMessage visual example](../../image_data/996df67bb57390a7f7fc2813cf6afbb598bfe9d69e49950510b7f24761595944.md)

### Overview
This image depicts a virtual environment interface, likely from a mobile game or simulation app. The central focus is a character standing in a grid-like virtual space, interacting with a large white sphere. The interface includes various controls and prompts for user interaction.

### Key Elements
- **Character**: A male figure with brown hair, wearing a dark gray T-shirt and black pants, facing away from the viewer towards a large white sphere.
- **Sphere**: A large, white, spherical object positioned slightly in front of the character.
- **Prompt**: A speech bubble in the upper right corner reads, "Tap to do something cool!".
- **Control Buttons**: 
  - Bottom left: A circular button with a white dot in the center, possibly representing a camera or recording function.
  - Bottom right: Two circular buttons labeled 'A' and 'B', likely for game controls.
  - Top left: Two circular icons, one with a microphone symbol and another with a three-dot menu.
  - Top right: A menu icon resembling a hamburger menu.

### Visual Flow / Relationships
The most prominent visual is the character and the sphere. The prompt encourages interaction. The control buttons are arranged symmetrically at the bottom, with the camera/recording button on the left and the game controls on the right. The top icons provide additional functionality, but they are less prominent compared to the main character and sphere.

</details>

<p></p>



```
player.showInputActionMessage(
  PlayerInputAction.Jump,
  'Tap to do something cool!',
  5000, // duration in ms
);
```

## showToastMessage API

The `showToastMessage` API allows you to show a generic toast message notification at the top of the screen. The toast message can be used to display a message to the player, such as an alert, notification, or helpful onboarding message. The toast message is displayed for a set duration and then it disappears.

More details about the API can be found [here](https://horizon.meta.com/resources/scripting-api/core.player.showtoastmessage.md/?api_version=2.0.0)

### Example

<details>
<summary>showToastMessage visual example</summary>

<p></p>

[showToastMessage visual example](../../image_data/2397cb0ce1d9dfebf2b3211b3f95db54010a8c4400f694c055f79bf00a112e0e.md)

### Overview
The image depicts a virtual environment with a character standing in the center of a grid floor. The scene includes user interface elements such as a circular control pad, a menu icon, and a custom announcement message at the top. The environment has a simple, clean design with a light blue sky and a neutral gray floor.

### Key Elements
- **Character**: A 3D model of a person wearing a dark shirt and pants, facing away from the viewer. Located centrally in the image.
- **Grid Floor**: A large, light gray grid covering the entire floor, indicating a virtual space.
- **Control Pad**: A circular interface element located on the left side of the image, with a central white circle surrounded by a gray ring.
- **Menu Icon**: A small circular icon with a white silhouette of a person running, located on the right side of the image.
- **Custom Announcement**: A rectangular box at the top center of the image containing the text "> This is a custom announcement!".
- **User Interface Elements**: Two circular icons in the top left corner, one with a microphone symbol and the other with three dots.
- **Background**: A gradient sky transitioning from light blue to white, suggesting a clear day.

### Visual Flow / Relationships
The most prominent visual element is the character in the center. The control pad and menu icon are secondary elements, providing interaction options. The custom announcement box draws attention due to its placement and contrasting color against the light background. The layout suggests a user interface designed for navigation and interaction within a virtual space.

</details>

<p></p>



```
player.showToastMessage(
  'This is a custom announcement!',
  5000, // duration in ms
);
```