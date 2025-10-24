# Station 4 - Generic Yes/No Dialog
...
## Assets


• Station04-CustomUI: CustomUI gizmo
  • Visible: true
  • Script: the script that defines the custom UI elements must be attached.
• Station04-GenericYesNoDialog: script
  • This script defines the customUI object and loads the image referenced in the
CustomUI gizmo properties panel.
  • It also defines the method by which the panel is filled over a series of frames.
  • Updates are performed every five frames.
• StationAll-CustomUI-Library: script
  • Some elements of this library file are imported in the script.

  
...
...
# Station 4 - Generic Yes/No Dialog
...
## Script

  
### Station04-GenericYesNoDialog

 This customUI creates the two buttons using two calls to a function (`MyButton()`), passing in properties (`MyButtonProps`). In the definition for the function, you can see how properties of the button are
set to both constant value (ALL CAPS) and to variables, which allow for
variation between the two buttons. This function returns a `UINode()`, which is added to the customUI `View()` definition. This node is an instance of a Pressable object, which is a customUI
component that supports the following JavaScript-style events:
• `onClick()`
• `onEnter()`
• `onExit()`
• `onPress()`
• `onRelease()`

 There are definitions or placeholders for definitions for each of these events
in the Pressable definition. In Visual Studio Code, you can right-click these
...
...
# Station 4 - Generic Yes/No Dialog
...
## Script

  
### Station04-GenericYesNoDialog
...
strings and select Go to Definition to learn more. There’s an intermediate construction of a UINode object using the `MyPrompt()` function, which uses a `Text()` element and two calls to `MyButton()` to create the Yes button and the No button, which have slightly different
properties. Placeholder functions are added for what happens when the buttons are clicked: `doYes()` and `doNo()` write a simple log message to the console. `MyPrompt()` is called within the `initializeUI()` method as part of initialize setup of the customUI panel.  
...
...
# Station 4 - Generic Yes/No Dialog
...
## Key Learnings

  
### Meta Horizon Worlds learnings


• The use of a function (`MyButton()`) to return a `UINode()`, which can be added to your customUI panel.
• The Pressable UI component and its JavaScript-style supported events

  
...
...
# Station 4 - Generic Yes/No Dialog
...
## Key Learnings
...
### TypeScript coding


• None.

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
...
...
# Station 4 - Generic Yes/No Dialog
...
## Key Learnings
...
### TypeScript coding
...
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Station 4 - Generic Yes/No Dialog
...
## Key Learnings

  
### Meta Horizon Worlds learnings
...
### TypeScript coding
...
...
# Station 4 - Generic Yes/No Dialog
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-examples-tutorial%2Fstation-4-generic-yes-no-dialog%2F)
...
# Station 4 - Generic Yes/No Dialog

 This station demonstrates how to set up a generic dialog with Yes/No buttons. This customUI panel contains a text message and a Yes button and No button, with
...
...
# Station 4 - Generic Yes/No Dialog
...
placeholders for actions to be taken when each button is pressed. ![Image of Station 4](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/476467445_646003204604301_5473449391228275245_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=85RS3oKYpPcQ7kNvwHweMSM&_nc_oc=AdnuClTQmNJV2lbXQO9g7m02Em7N_B8sahFv2Mlc8GCiecdzdHFDdwisYVlchZHY7B8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2jLsjtcKs2MsLxPLANdyfQ&oh=00_Afd7gSlh_c...
...
# Station 4 - Generic Yes/No Dialog
...
## Assets
...
## Script
...
## Key Learnings
...
## Additional Links
...
      Learn
# Station 4 - Generic Yes/No Dialog
...
