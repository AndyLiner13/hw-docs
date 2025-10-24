# Zone 3 - Bars
...
## Station #7: Loading Bar
...
### Script Overview

 This demo features a simple yet effective loading bar system composed of two
distinct components.
• `LoadingBar.ts`: This UI component extends ui.UIComponent. Its sole responsibility is to render
and animate the visual representation of a loading bar.
• `LoadingBarDemo.ts`: This main game logic script extends `hz.Component`. It acts as the controller for the demo. It defines references to the
LoadingBar UI gizmo and several in-world triggers.

  
...
...
# Zone 3 - Bars
...
## Station #7: Loading Bar
...
### Properties

  
#### LoadingBar Properties


• theme: A number property used to select one of three predefined visual themes for the
UI (default, green, or yellow).

  
#### LoadingBarDemo Properties


• `trigger1–trigger4`: Four entity properties that serve as references to the physical trigger
entities in the world. When a player enters one of these triggers, the loading bar
animation is activated.
• `cuiGizmo`: An entity property that links the game logic to the UI component. This is the
reference to the entity in the world that holds the LoadingBar component.

  
### Methods

  
#### LoadingBar.ts Methods


• `startLoadingBar(timeInMS)`: A public method that external scripts call to start the loading animation. It
uses a repeating timer to incrementally increase the progressValue over the
specified duration.

  
...
...
# Zone 3 - Bars
...
## Station #7: Loading Bar

 The loading bar is a useful tool to cover times when the world is loading. If
the world needs to load a new room, for example, this UI can be displayed so
players know the world is still running. Set how long the loading bar needs to be
displayed, and the bar will take that long to fill up.  
### Script Overview
...
### Properties
...
### Methods
...
...
# Zone 3 - Bars
...
## Station #8: Enemy Health Bar
...
### Script Overview

 This demo showcases a dynamic and responsive health bar system that includes a
name and a color-coded bar. The system is split into two components to separate
the user interface from the game logic that controls it.
• `HealthBar.ts`: This UI component extends UIComponent to handle the visual display and
animation of the health bar. A key feature is a derived binding that automatically
changes the bar’s color (from green to yellow to red) based on the health
percentage.
• `HealthBarDemo.ts`: This is the main game logic script that extends `hz.Component`. It acts as the controller for the demo.

  
...
...
# Zone 3 - Bars
...
## Station #8: Enemy Health Bar
...
### Properties

  
#### HealthBar Properties


• theme: A number property used to select one of three predefined visual themes for the
UI (default, green, or yellow).
• showPercentage: A boolean that determines whether the health bar should display the percentage
text.

  
#### HealthBarDemo Properties


• trigger1–trigger4: Four entity properties that serve as references to the physical trigger
entities in the world. When a player enters one of these triggers, the health bar’s
value is changed.
• cuiGizmo: An entity property that links the game logic to the UI component.

  
...
...
# Zone 3 - Bars
...
## Station #8: Enemy Health Bar
...
### Methods

  
#### HealthBar.ts Methods


• `updateName(name)`: A public method that external scripts can call to change the name displayed
above the health bar.
• `updateHealthBar(newPercentHealth)`: A public method that external scripts use to set the target health value.

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Zone 3 - Bars
...
## Station #8: Enemy Health Bar
...
### Methods

  
#### HealthBar.ts Methods
...
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
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
# Zone 3 - Bars
...
## Station #8: Enemy Health Bar

 The health bar is a critical informational tool in many games, especially those
with combat. The health bar in this example is positioned over the enemy’s head
so all players can view their health. If you set the health bar to a new value,
the bar will automatically adjust to that number. The health bar changes color
based on the entity’s health.  
### Script Overview
...
### Properties
...
### Methods
...
...
# Zone 3 - Bars
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-tutorial-world%2Fzone-3-bars%2F)
...
# Zone 3 - Bars

 This zone focuses on progress bars and loading indicators that provide visual
feedback to players.  
## Station #7: Loading Bar
...
## Station #8: Enemy Health Bar
...
## Additional Links
...
      Learn
# Zone 3 - Bars
...
