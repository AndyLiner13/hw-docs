Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/custom-ui-examples-tutorial/station-4-generic-yes-no-dialog

# Station 4 - Generic Yes/No Dialog

This station demonstrates how to set up a generic dialog with Yes/No buttons.

This customUI panel contains a text message and a Yes button and No button, with placeholders for actions to be taken when each button is pressed.

<details>
<summary>Image of Station 4</summary>

<p></p>

[Image of Station 4](../../../image_data/ee9a0ab02577c9bc41e7fc80aaab9c5d21750a1a393b8fcdcb5332c0738dffa9.md)

### Overview
This image depicts a simple dialog box interface with two buttons labeled "Yes" and "No." The dialog box is centered on a tiled yellow background with gray grout lines.

### Key Elements
- **Dialog Box**: A rounded rectangular box with a light gray background. It contains text and two buttons.
  - **Text**: "Generic Yes/No Dialog\nClick the Yes or No button:"
    - Location: Centered within the dialog box.
    - Contents: The text is black and clearly readable.
    - Visual styling: Plain font, no additional styling.
  - **Buttons**:
    - **Yes Button**: Green button with white text that reads "Yes."
      - Location: Left side of the dialog box.
      - Contents: Text only.
      - Visual styling: Solid green background, white text, rounded corners.
    - **No Button**: Red button with white text that reads "No."
      - Location: Right side of the dialog box.
      - Contents: Text only.
      - Visual styling: Solid red background, white text, rounded corners.

### Visual Flow / Relationships
- **Most Prominent Element**: The dialog box itself.
- **Arrows/Connectors**: None.
- **Spatial Relationships**: The "Yes" button is to the left of the "No" button, both are aligned horizontally within the dialog box. The text above the buttons is centered above them.

</details>

<p></p>



## Assets

* **Station04-CustomUI: CustomUI gizmo**
  + Visible: true
  + Script: the script that defines the custom UI elements must be attached.
* **Station04-GenericYesNoDialog: script**
  + This script defines the customUI object and loads the image referenced in the CustomUI gizmo properties panel.
  + It also defines the method by which the panel is filled over a series of frames.
  + Updates are performed every five frames.
* **StationAll-CustomUI-Library: script**
  + Some elements of this library file are imported in the script.

## Script

### Station04-GenericYesNoDialog

This customUI creates the two buttons using two calls to a function (`MyButton()`), passing in properties (`MyButtonProps`).

In the definition for the function, you can see how properties of the button are set to both constant value (ALL CAPS) and to variables, which allow for variation between the two buttons.

This function returns a `UINode()`, which is added to the customUI `View()` definition. This node is an instance of a Pressable object, which is a customUI component that supports the following JavaScript-style events:

* `onClick()`
* `onEnter()`
* `onExit()`
* `onPress()`
* `onRelease()`

There are definitions or placeholders for definitions for each of these events in the Pressable definition. In Visual Studio Code, you can right-click these strings and select **Go to Definition** to learn more.

There’s an intermediate construction of a UINode object using the `MyPrompt()` function, which uses a `Text()` element and two calls to `MyButton()` to create the Yes button and the No button, which have slightly different properties.

Placeholder functions are added for what happens when the buttons are clicked: `doYes()` and `doNo()` write a simple log message to the console.

`MyPrompt()` is called within the `initializeUI()` method as part of initialize setup of the customUI panel.

## Key Learnings

### Meta Horizon Worlds learnings

* The use of a function (`MyButton()`) to return a `UINode()`, which can be added to your customUI panel.
* The Pressable UI component and its JavaScript-style supported events

### TypeScript coding

* None.