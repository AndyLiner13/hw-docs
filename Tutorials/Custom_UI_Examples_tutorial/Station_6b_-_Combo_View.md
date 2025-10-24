# Station 6b - Combo View
...
## Assets


• Station06b-CustomUI: CustomUI gizmo
  • Visible: true
  • Script: the script that defines the custom UI elements must be attached.
• Station06b-ComboView: script
  • This script defines the customUI object and loads referenced objects.

  
...
...
# Station 6b - Combo View
...
## Script

  
### Station06b-ComboView


• This script includes more constructor `View()` object declarations: The structure of the UI is as follows:
  • UIComponentViewCombo class
   • `Text()`
   • `viewNestedCombo()`: `flexDirection = "column"`
    • `viewNestedRow()`: `flexDirection = "row"`
     • `Text()` instance
     • `viewSimple()`: `flexDirection` is not specified
      • `Text()` instance
      • `MyButton()` instance
     • `MyButton()` instance
     • `viewSimple()`:
      • `Text()` instance
      • `MyButton()` instance
    • `View()` instance: This view is declared inline and not as a constructor
     • `viewNestedCol()`: `flexDirection = "column"`
      • `Text()` instance
      • `viewSimple()`: `flexDirection` is not specified
  ...
...
# Station 6b - Combo View
...
## Script

  
### Station06b-ComboView
...
      • `Text()` instance
      • `MyButton()` instance
      • `viewSimple()`: `flexDirection` is not specified
      • `Text()` instance
      • `MyButton()` instance
      • `ViewBorder()`: `flexDirection` is not specified
      • `Text()` instance
     • `viewNestedCol()`: `flexDirection = "column"`
      •  `Text()` instance
      • `viewSimple()`: `flexDirection` is not specified
      • `Text()` instance
      • `MyButton()` instance
      • `viewSimple()`: `flexDirection` is not specified
      • `Text()` instance
      • `MyButton()` instance
      • `ViewBorder()`: `flexDirection` is not specified
      • `Text()` instance
     • `viewNestedCol()`: `flexDirection = "column"`
  ...
...
# Station 6b - Combo View
...
## Script

  
### Station06b-ComboView
...
      • `Text()` instance
      • `viewSimple()`: `flexDirection` is not specified
      • `Text()` instance
      • `MyButton()` instance
      • `viewSimple()`: `flexDirection` is not specified
      • `Text()` instance
      • `MyButton()` instance
      • `ViewBorder()`: `flexDirection` is not specified
      • `Text()` instance
  ...
...
# Station 6b - Combo View
...
## Key Learnings

  
### Meta Horizon Worlds learnings


• Building combinations of constructor `View()` objects to assemble more complex interfaces.

  
...
...
# Station 6b - Combo View
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
# Station 6b - Combo View
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
# Station 6b - Combo View
...
## Key Learnings

  
### Meta Horizon Worlds learnings
...
### TypeScript coding
...
...
# Station 6b - Combo View
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-examples-tutorial%2Fstation-6b-combo-view%2F)
...
# Station 6b - Combo View

 This station demonstrates how you can combine multiple nested view objects to
assemble groups of elements in your user interface. In the previous example, the `View()` objects were created as constructors, which allows them to be referenced
multiple times. Since the entire column was created as a constructor, it can be reused
as well, which results in the side-by-side Flex Column objects in the following
image. In this manner, you can build sophisticated user interfaces by assembling core
UI widgets as constructor `View()` objects and combining them together to build more sophisticated objects, which
can be referenced from a library. Think, for example, of a Confirmation Dialog
...
...
# Station 6b - Combo View
...
created as a set of constructor `View()` objects. ![Image of Station 6b](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475767631_646003161270972_6759271736042486324_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=VtcGvsfWv_8Q7kNvwHxvSkF&_nc_oc=Admm9DtOi64aPXl9CJWu5jnsa41RrqAYqCev6SoqFZNAv0q7Qe5NtYxmBCMrB0P-b0Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=4apEOkD6rP7W_4OgzVpsYw&oh=00_Afcy4fe...
...
# Station 6b - Combo View
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
# Station 6b - Combo View
...
