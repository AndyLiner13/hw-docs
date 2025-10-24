# Station 6a - Column View
...
## Assets


• Station06a-CustomUI: CustomUI gizmo
  • Visible: true
  • Script: the script that defines the custom UI elements must be attached.
• Station06a-ColumnView: script
  • This script defines the customUI object and loads referenced objects.

  
...
...
# Station 6a - Column View
...
## Script

  
### Station06a-ColumnView


• This script introduces the structures for building independent reusable `View()` objects.
  • You can build constructors of views as a form of templatizing your customUI
objects. Example:

  
```
const viewSimple = View({
  children: [
    Text({text: "I am a Text child in a View", style: {margin: 10}}),
    MyButton({
      label: "Button",
      baseColor: "green",
      onClick: () => {},
      style: {
        //backgroundColor: "#CF1313",
      },
    }),
  ],
  style: {
    alignItems: "center",
    height: 100,
    backgroundColor: "black",
    margin: 10,
  },
});
```

• The above `viewSimple` view constructor is reused twice in the vertically oriented customUI panel
• The `viewBorderTaper` view constructor introduces some additional styling properties. In Visual
...
...
# Station 6a - Column View
...
## Script

  
### Station06a-ColumnView
...
Studio Code, right-click a property name and select Go to Definition to review its usage and the related styling parameters for the `ViewStyle` object.
• The viewNestedCol view assembles two instances of the `viewSimple` constructor view and `viewBorderTaper` constructor view into a vertical layout.

  
```
const viewNestedCol = View({
  children: [
    Text({text: "Flex Column"}),
    viewSimple,
    viewSimple,
    viewBorderTaper,
  ],
  style: {
    flexDirection: "column",
    //alignItems: "center",
    borderColor: "pink",
    borderWidth: 8,
  },
});
```

• The children array lists the objects in sequence of appearance in the `View()` object.
• The key property is `flexDirection`, which is set to `"column"` to align the children vertically.
...
...
# Station 6a - Column View
...
## Script

  
### Station06a-ColumnView
...
• View constructors that are unused in this example are commented out. These are
explored in the other examples in Station 6.
• The UIComponentViewCol class definition is very simple. Its children array is a
reference to the viewNestedCol view, which assembles the sub-view objects into a
vertical array.
...
...
# Station 6a - Column View
...
## Key Learnings

  
### Meta Horizon Worlds learnings


• `flexDirection` property to arrange customUI layout
• Building `View()` objects as a constructor, which enables them to be referenced as templatized
entities in your layouts.
• In your world, you can experiment with removing comments around some of the
other constructors to experiment with them in your custom UI layout.

  
...
...
# Station 6a - Column View
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
# Station 6a - Column View
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
# Station 6a - Column View
...
## Key Learnings

  
### Meta Horizon Worlds learnings
...
### TypeScript coding
...
...
# Station 6a - Column View
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-examples-tutorial%2Fstation-6a-column-view%2F)
...
# Station 6a - Column View

 The examples in Station 6 demonstrate how to organize your customUI panel into
rows and columns. In these examples, you can use the flexDirection styling
attribute to orient your `View()` objects horizontally and vertically. In this example, a set of UI elements is organized in a vertical column. Note
...
...
# Station 6a - Column View
...
the behavior of the buttons here: hover states are shared. ![Image of Station 06a](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475464828_646003191270969_1422741377733593386_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=b1CNRzeRXu8Q7kNvwEW4N55&_nc_oc=AdmWfTNVwcFbFcFrOY9nuYQc3hqFA2JdMcVFKU3n86NwY0gyQ5RQPhx7cGxbPkK9x_8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Ag7lEecnIuqKKOAqH_QmUg&oh=00_Aff1jw...
...
# Station 6a - Column View
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
# Station 6a - Column View
...
