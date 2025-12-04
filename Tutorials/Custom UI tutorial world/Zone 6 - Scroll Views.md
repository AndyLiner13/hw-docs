Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-tutorial-world/zone-6-scroll-views

# Zone 6 - Scroll Views

This zone demonstrates scrollable UI components that can display large amounts of content in a compact interface.

## Station #15: Basic Text Scroll

Use a scroll view to display a block of text that is too large to fit into one screen. Although the initial screen size may seem limited, you can display a lot of text because the text box scrolls. Some use cases include displaying instructions or delivering game lore.

### Script Overview

This demo illustrates a text panel that can display large amounts of text in a scrollable view. It consists of two scripts, `ScrollText` and `ScrollTextDemo`. The `ScrollText` component is a reusable UI element that handles the creation and management of the scrollable text panel itself. The `ScrollTextDemo` component acts as a controller, responding to in-world triggers to dynamically change the text and visual state of the `ScrollText` component.

### Properties

#### ScrollText Properties

![ScrollText Properties](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/550063755_817392034132083_2699501986451496552_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=k7W1roA_y2gQ7kNvwGsWOYK&_nc_oc=AdkkpEhzDcIfSyco0UZ9CUEnV-cmKCWsIKP3kJkQWzEq97sjiShmosewzSKhPislCPU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=YuLiosZ0MWwziVKdVABKPw&oh=00_AflvBUg-GISJeCitPwyq1dtLlUKak5E3Sh9Oq_SKdYzhEA&oe=694BD56C)

* **`text`**: A string containing the default text to be displayed.
* **`theme`**: A number to select a predefined color theme for the UI panel.

#### ScrollTextDemo Properties

* **`trigger1`**: An entity that links to the first in-world trigger.
* **`trigger2`**: An entity that links to the second in-world trigger.
* **`triggerVisual1`**: An entity that links to a visual object that provides feedback for the first trigger.
* **`triggerVisual2`**: An entity that links to a visual object that provides feedback for the second trigger.
* **`cuiGizmo`**: An entity that links to the entity containing the ScrollText UI component.
* **`text`**: A string that holds the text to be displayed when the second state is active.

### Methods

#### ScrollText Methods

* **`ScrollTextSetText(text?)`**: A public method that allows other scripts to update the text content of the panel. When this method is called, it sets the currentText binding and then recalculates and sets the scrollHeight binding.

## Station #16: Advanced Scroll View

The advanced scroll view can handle a variety of text formats, layouts, images, and more. The increased capability means a more complex Custom UI. The formatted JSON data files gives you full control on displaying information.

### Script Overview

* **`cuiUtil.ts`**: A utility script that provides a reusable framework for connecting in-world events to state-change logic.
* **`ScrollList.ts`**: Another UI component that renders a dynamic, scrollable list. Its primary function is to combine multiple data sets from different sources into a single, cohesive, scrollable view.
* **`ScrollListDemo.ts`**: This is the game logic component that acts as controllers. It links in-world triggers to the ScrollList component.

### Properties

#### ScrollList Properties

* **theme**: A number used to select a predefined color theme (blue, green, or yellow) for the UI panel.

#### ScrollListDemo Properties

* **`trigger1–trigger4`**: Four entity properties that link to in-world triggers.
* **t`riggerVisual1 - triggerVisual4`**: Four entity properties that link to visual entities that change color based on the state of their corresponding trigger.
* **`cuiGizmo`**: An entity that links to the entity holding the respective UI component.

### Methods

#### ScrollList Methods

* **`ScrollListAdd(id, data, player?)`**: A public method to add a new list of items from a JSON string.
* **`ScrollListDelete(id, player?)`**: A public method to remove a list by its ID.