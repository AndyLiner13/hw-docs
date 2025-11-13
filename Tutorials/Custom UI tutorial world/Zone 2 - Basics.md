Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-tutorial-world/zone-2-basics

Learn

# Zone 2 - Basics

This zone covers fundamental Custom UI components that form the building blocks of more complex interfaces.

## Station #4: Basic Button

The basic button is about as basic as it gets. When a user interacts with the button, it sends a CodeBlock event to an entity defined in the property panel. You can set up the receiving object to increment a counter or unlock a door using CodeBlock events.

### Script Overview

This documentation covers a two-part demo that shows how to create a versatile button component and use it to trigger events that can be listened to by other components in the scene.

* **`BasicButton`**: This script defines a generic UI component that encapsulates a single customizable button. It’s built to be a reusable asset. It takes a series of properties, including a targetEntity and uses the cuiButton library to render itself. When the button is released, it sends a custom CodeBlock event called `sendMessageEvent` to the targetEntity.
* **`BasicButtonDemo`**: This script is a standard Horizon component designed to showcase the basic button’s functionality. It acts as the event listener. It connects to the `sendMessageEvent` on its own entity and, upon receiving the event, updates the text of a linked text gizmo with a message. This demonstrates a common pattern of UI components sending messages to non-UI components to separate the view from the model.

### Properties

#### BasicButton Properties

![BasicButton Properties](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/549506913_817392020798751_1832182747135807666_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=QZ2NObdEResQ7kNvwEJQSCl&_nc_oc=AdmAV7XZ_Q4ioJX9tqMsjl26KKCCiQIfsTHUwpWg-6QWVAdj5-CNbfE6XvaqQPD8VlA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pQIOAfky9D_P9iqiZ-_wgQ&oh=00_AfjioiZR_p6924Mq6rzJhg4xSrBHEWmLW_dw1thVPwJoKQ&oe=692F991C)

* **`targetEntity`**: An entity that specifies which entity will receive the `sendMessageEvent` when the button is released.
* **`ID`**: A string that provides a unique identifier for this button. This ID is included in the `sendMessageEvent` payload.
* **`title`**: A string that sets the text displayed above the button.
* **`buttonText`**: A string that sets the text displayed on the button itself.
* **`pressSound`**: An entity linked to an audio gizmo to be played when the button is pressed.
* **`releaseSound`**: An entity linked to an audio gizmo to be played when the button is released.
* **`theme`**: A number that selects a predefined color theme for the UI panel.

### Network Events

This demo uses a custom CodeBlock event to communicate between the button UI and the game logic component.

* **`sendMessageEvent`**: A custom event created in `BasicButton`. Its payload consists of a Player entity (the player who triggered the event) and a string (the button’s unique ID).

### Methods

#### BasicButton Methods

* **`onPress()`**: A callback that plays the `pressSound` for the interacting player.
* **`onRelease()`**: A callback that plays the `releaseSound` and sends the `sendMessageEvent` to the designated `targetEntity`.
* **`BasicButtonSetTitle()`**, **`BasicButtonSetButtonText()`**, **`BasicButtonSetTarget()`**: These are public methods that allow other scripts to dynamically change the UI text and the event target at runtime.

## Station #5: Timer

Timers are very common in games. This timer example illustrates two different variations.

* Countdown timer – This timer counts down from a predefined time. Use a countdown timer to display how much time remains before a round or a cooldown ends.
* Stopwatch – This timer starts at zero and counts up until it’s stopped. Use the stopwatch for races and time trials.

### Script Overview

This demo showcases `Timer` and `TimerDemo` scripts. The `Timer` component is a reusable UI element that handles all aspects of displaying a timer, while the `TimerDemo` component is a non-UI script that orchestrates the timer’s behavior by listening to events in the world.

### Properties

#### Timer Properties

* **`theme`**: A number used to select a predefined color theme for the UI.

#### TimerDemo Properties

* **`trigger1-4`**: Four entity properties that link to in-world trigger entities. These triggers are used to activate different timer functions.
* **`cuiGizmo`**: An entity that links to the entity containing the Timer UI component. This is the target that `TimerDemo` will control.
* **`duration`**: A number that sets the default duration for the timer.

### Methods

#### Timer Methods

* **`TimerStartCountDown(duration?)`**: A public method that starts the timer counting down from a specified duration.
* **`TimerStart(duration?)`**: A public method that starts the timer counting up. If a duration is provided, it will stop when that duration is reached.
* **`TimerReset()`**: A public method that stops the timer and resets its display to 00:00.
* **`TimerSetDuration(duration?)`**: A public method that sets the default duration for the timer.

## Station #6: Dialog Prompt

In-game characters can provide useful information by communicating with players. Use this Custom UI to display a variable amount of pages for character dialog.

### Script Overview

* **`DialogPrompt.ts`**: Its purpose is to render dynamic, multi-page content from a structured JSON source. It’s responsible for the UI layout, including the header, navigation buttons, and a dynamic content list.
* **`DialoguePromptDemo.ts`**: This is the main game logic script that acts as the controller. It links to the DialogPrompt UI component and provides the JSON data to be displayed.

### Properties

#### DialogPrompt Properties

* **`theme`**: A number property used to select a predefined visual theme for the UI.

#### DialoguePromptDemo Properties

* **`cuiGizmo`**: An entity property that serves as a reference to the entity containing the DialogPrompt UI component.
* **`jSONdata`**: A string property that holds the JSON string to be displayed. This allows creators to easily change the dialogue content directly within the editor.

### Data Interfaces

The DialogPrompt script defines several TypeScript interfaces to specify the expected structure of the JSON data:

* **`ItemData`**: Represents a single item to be displayed on a page. It includes a type property to tell the UI how to render the data.
* **`PageData`**: Represents a single page of content. It contains a page\_number and an items array of ItemData objects.

## API Example #2: Buttons

This Custom UI example demonstrates different colored buttons. The demo shows color variations available in the Custom UI API. All of these colors can be changed in code.

### Script Overview

The `cuiButton` and `ButtonTest` scripts demonstrate how to create reusable UI components that can be customized with different styles and behaviors.

* **`cuiButton`**: This script is a library of helper functions for creating different types of buttons. It provides a clean, abstract interface that other scripts can use without needing to know the low-level UI implementation details.
* **`ButtonTest`**: This demo script is a UIComponent that acts as the controller for the demo. It controls what buttons to display, what their labels should be, and what they should do when clicked.