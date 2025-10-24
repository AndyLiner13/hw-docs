# Zone 1 - Option Lists
...
## Station #1: Toggle List
...
### Script Overview

 The `ToggleList` and `ToggleListDemo` scripts are a set of tools that work together to create an interactive UI panel
with a group of toggles.
• `ToggleList`: This script is a UIComponent that acts as the blueprint for the UI itself. It
defines how the toggles and the panel look and how they react to user input. It
is a self-contained widget that can be placed in your game world.
• `ToggleListDemo`: This script is a standard Component that acts as the "wiring" or a controller
for the ToggleList gizmo. It links the UI to physical objects and events in the
game world, such as triggers, and provides a way to control the UI
programmatically.

  
...
...
# Zone 1 - Option Lists
...
## Station #1: Toggle List
...
### Properties

  
#### ToggleList Properties


• theme: A numeric property of type `hz.PropTypes.Number`. The script uses this number in a switch statement to select from a set of
predefined cuiThemeStyle objects, dynamically changing the color scheme of the
entire UI at runtime.

  
...
...
# Zone 1 - Option Lists
...
## Station #1: Toggle List
...
### Properties
...
#### ToggleListDemo Properties

 These properties are all of type `hz.PropTypes.Entity` or `hz.PropTypes.String` and are used to link the script to specific entities and data.
• `trigger1, trigger2`, etc.: These properties link to Entity objects in the game world that have a
Trigger component. They are used to detect when a player enters the trigger’s
volume.
• `cuiGizmo`: A critical property that links to the specific Entity containing the
ToggleList UI component. The `ToggleListDemo` script uses this reference to get a handle to the `ToggleList` script itself using `getComponents()`.
• `label1, label2`, etc.: String properties used to set the initial text labels for each toggle.
These values are passed to the `ToggleList`’s ToggleListUpdateText method at startup.
...
...
# Zone 1 - Option Lists
...
## Station #1: Toggle List
...
### Properties
...
#### ToggleListDemo Properties
...
• `value1, value2`, etc.: Boolean properties that set the starting true (checked) or false
(unchecked) state for each toggle. The start method uses these to initialize the UI via
`ToggleListSetLine`.
• `triggerVisual1, triggerVisual2`, etc.: These properties link to Entity objects that are used as visual
feedback. The script changes their color property to match the checked state of the
corresponding toggle.
...
...
# Zone 1 - Option Lists
...
## Station #1: Toggle List
...
### Properties

  
#### ToggleList Properties
...
#### ToggleListDemo Properties
...
...
# Zone 1 - Option Lists
...
## Station #1: Toggle List
...
### Network Events


• `ToggleListDemo` subscribes to a built-in event called `OnPlayerEnterTrigger` using `cuiSetupTrigger`. This event is a CodeBlock event that is automatically triggered by the Horizon
engine when a player’s avatar enters a designated trigger area.
• When this event occurs, the `cuiSetupTrigger` function is called which then executes a series of functions provided to it as
parameters.

  
### Methods

  
#### ToggleList Methods


• `ToggleListUpdateText()`: A public method that takes an index and a string as arguments. It
programmatically changes the text label of the toggle at the specified index.
• `ToggleListSetLine()`: A public method that takes an index and a boolean status. It programmatically
updates the checked state of a toggle.
• `ToggleListGetLine()`: A public method that returns the current boolean status of a toggle at a given
index.

  
...
...
# Zone 1 - Option Lists
...
## Station #1: Toggle List

 The toggle list is a CUI with four line items. These four line items can be
toggled on or off via interacting with the Custom UI or via a function call. Toggle lists are used to give options to players where any option can be
independent of each other option.  
### Script Overview
...
### Properties
...
### Network Events
...
### Methods
...
...
# Zone 1 - Option Lists
...
## Station #2: Radio List

 Similar to the Toggle List, the Radio List provides players the ability to
select one of the four items. In this case, one and only one option can be selected.
Selecting another item automatically disables the others.  
## Station #3: Task List

 This Custom UI example displays a checklist of tasks for players to complete.
Via a toggle in the Properties panel, you can set whether items are marked as
completed when a code event happens or allow players to check off items themselves.  
...
...
# Zone 1 - Option Lists
...
## API Example #1: Options

 This API example is not intended to be used as an asset to drop into a world. It
is designed to show the differences between the three option list demos all in
one place.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
...
...
# Zone 1 - Option Lists
...
## API Example #1: Options
...
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Zone 1 - Option Lists
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-tutorial-world%2Fzone-1-option-lists%2F)
...
# Zone 1 - Option Lists

 This zone focuses on various types of option lists that provide players with
interactive choices.  
## Station #1: Toggle List
...
## Station #2: Radio List
...
## Station #3: Task List
...
## API Example #1: Options
...
## Additional Links
...
      Learn
# Zone 1 - Option Lists
...
