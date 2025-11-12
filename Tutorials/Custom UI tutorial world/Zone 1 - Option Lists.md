Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-tutorial-world/zone-1-option-lists

Learn

# Zone 1 - Option Lists

This zone focuses on various types of option lists that provide players with interactive choices.

## Station #1: Toggle List

The toggle list is a CUI with four line items. These four line items can be toggled on or off via interacting with the Custom UI or via a function call.

Toggle lists are used to give options to players where any option can be independent of each other option.

### Script Overview

The `ToggleList` and `ToggleListDemo` scripts are a set of tools that work together to create an interactive UI panel with a group of toggles.

* **`ToggleList`**: This script is a UIComponent that acts as the blueprint for the UI itself. It defines how the toggles and the panel look and how they react to user input. It is a self-contained widget that can be placed in your game world.
* **`ToggleListDemo`**: This script is a standard Component that acts as the “wiring” or a controller for the ToggleList gizmo. It links the UI to physical objects and events in the game world, such as triggers, and provides a way to control the UI programmatically.

### Properties

#### ToggleList Properties

* **theme**: A numeric property of type `hz.PropTypes.Number`. The script uses this number in a switch statement to select from a set of predefined cuiThemeStyle objects, dynamically changing the color scheme of the entire UI at runtime.

#### ToggleListDemo Properties

These properties are all of type `hz.PropTypes.Entity` or `hz.PropTypes.String` and are used to link the script to specific entities and data.

* **`trigger1, trigger2`**, etc.: These properties link to Entity objects in the game world that have a Trigger component. They are used to detect when a player enters the trigger’s volume.
* **`cuiGizmo`**: A critical property that links to the specific Entity containing the ToggleList UI component. The `ToggleListDemo` script uses this reference to get a handle to the `ToggleList` script itself using `getComponents()`.
* **`label1, label2`**, etc.: String properties used to set the initial text labels for each toggle. These values are passed to the `ToggleList`’s ToggleListUpdateText method at startup.
* **`value1, value2`**, etc.: Boolean properties that set the starting true (checked) or false (unchecked) state for each toggle. The start method uses these to initialize the UI via `ToggleListSetLine`.
* **`triggerVisual1, triggerVisual2`**, etc.: These properties link to Entity objects that are used as visual feedback. The script changes their color property to match the checked state of the corresponding toggle.

### Network Events

* `ToggleListDemo` subscribes to a built-in event called `OnPlayerEnterTrigger` using `cuiSetupTrigger`. This event is a CodeBlock event that is automatically triggered by the Horizon engine when a player’s avatar enters a designated trigger area.
* When this event occurs, the `cuiSetupTrigger` function is called which then executes a series of functions provided to it as parameters.

### Methods

#### ToggleList Methods

* **`ToggleListUpdateText()`**: A public method that takes an index and a string as arguments. It programmatically changes the text label of the toggle at the specified index.
* **`ToggleListSetLine()`**: A public method that takes an index and a boolean status. It programmatically updates the checked state of a toggle.
* **`ToggleListGetLine()`**: A public method that returns the current boolean status of a toggle at a given index.

## Station #2: Radio List

Similar to the Toggle List, the Radio List provides players the ability to select one of the four items. In this case, one and only one option can be selected. Selecting another item automatically disables the others.

## Station #3: Task List

This Custom UI example displays a checklist of tasks for players to complete. Via a toggle in the Properties panel, you can set whether items are marked as completed when a code event happens or allow players to check off items themselves.

## API Example #1: Options

This API example is not intended to be used as an asset to drop into a world. It is designed to show the differences between the three option list demos all in one place.