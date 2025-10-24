# Station 3 - Scrollable UI
...
## Assets


• Station03-CustomUI: CustomUI gizmo
  • Visible: true
  • Script: the script that defines the custom UI elements must be attached.
• Station03-ScrollingUI: script
  • This script defines the customUI object and loads the image referenced in the
CustomUI gizmo properties panel.
• StationAll-CustomUI-Library: script
  • Some elements of this library file are imported in the script.

  
...
...
# Station 3 - Scrollable UI
...
## Script

  
### Station03-ScrollingUI

 The static components are consistent with Text and Image assets that have been
used in previous examples. When building out the structure, you need to pay
attention to the `flexDirection` property, which defines how to organize the child objects within a View. Below is the definition of the ScrollView object:  
```
const MyScrollView = ui.ScrollView({
  children: [
    ui.Text({
      text: 'This is a line of content about Lorem Ipsum.\n\nThis maybe one, too.\n\n',
      style: {fontFamily: 'Anton', fontSize: 18, color: 'gray'},
    }),
    ui.Text({
      text: 'Lorem ipsum ... laborum.\n\n',
      style: {fontFamily: 'Anton', fontSize: 18, color: 'gray'},
    }),
    ui.Text({
      text: 'Lorem ipsum ... laborum.\n\n',
...
...
# Station 3 - Scrollable UI
...
## Script

  
### Station03-ScrollingUI
...
      style: {fontFamily: 'Anton', fontSize: 18, color: 'gray'},
    }),
    ui.Text({
      text: 'Lorem ipsum ... laborum.\n\n',
      style: {fontFamily: 'Anton', fontSize: 18, color: 'gray'},
    }),
  ],

  // contentContainerStyle defines properties of the ScrollView object's container.
  contentContainerStyle: {height: 1200, alignItems: 'flex-start'},
  horizontal: false,
  style: {
    height: 300,
    width: 200,
  },
});
```
 In the above, the child objects of a `ScrollView()` are defined exactly like a `View()` object. The key differences are in the styling properties.
• The style element defines the height and width of the part of the ScrollView
object that is visible in the custom UI. This is the window into the scrolling
view.
...
...
# Station 3 - Scrollable UI
...
## Script

  
### Station03-ScrollingUI
...
  • These values must be less than the panelHeight and panelWidth values defined for
the class.
• The contentContainerStyle object defines two things:
  • Height: The overall height of the scrolling view. Since this value (`1200`) is greater than the window height (`300`), scrollbars are inserted to enable players to scroll to see the entire view.
   • Note that the scrollbars are dependent only on these values; if there is
insufficient content to require scrolling, the scrollbars are still displayed. You can
experiment by commenting out some of the ui.Text lines in the above definition.
You may wish to adjust the overall height value accordingly.
   • The overall height value for the scrolling view (`1200`) can be more than or less than the `panelHeight` value for the class.
  • alignItems: This value defines how child objects flow in the axis that is not the
...
...
# Station 3 - Scrollable UI
...
## Script

  
### Station03-ScrollingUI
...
predominant one. Since the above ScrollView object flows vertically, this value defines
how the object flows horizontally. See the object definition in the API code for
details.
• Orientation: The orientation of the content pane: horizontal = false means that the pane is
oriented vertically. This is the default.
...
...
# Station 3 - Scrollable UI
...
## Key Learnings

  
### Meta Horizon Worlds learnings

 How to deploy a ScrollView object in a custom UI.  
 ...
...
# Station 3 - Scrollable UI
...
## Key Learnings
...
### TypeScript learnings

 You can import an entire API module as a named reference. At the top of the
script:  `import` `*` `as` ui `from` `'horizon/ui'`;` Whenever you wish to reference a component from the `/ui` module, you preface the reference with the value: `ui`. Example: Note the references to the `View()` and `Text()` components from the ui module.  
```
initializeUI() {
  return ui.View({
    children: [
      ui.Text({
        text: "Lord Lorem Ipsum" ,
        style: {
          fontFamily: "Anton",
          color: "blue",
          fontSize: 28,
          fontWeight: "bold",
          alignContent: "center"
        }
})
```
    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)
    ...
...
# Station 3 - Scrollable UI
...
## Key Learnings
...
### TypeScript learnings
...
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
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
...
...
# Station 3 - Scrollable UI
...
## Key Learnings
...
### TypeScript learnings
...
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Station 3 - Scrollable UI
...
## Key Learnings

  
### Meta Horizon Worlds learnings
 ...
### TypeScript learnings
...
...
# Station 3 - Scrollable UI
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-examples-tutorial%2Fstation-3-scrollable-ui%2F)
...
# Station 3 - Scrollable UI

 This station demonstrates how to create a custom UI that can be scrolled. It’s
pretty simple; instead of using a View object, you deploy a ScrollView object,
...
...
# Station 3 - Scrollable UI
...
which supports a couple of additional attributes. ![Image of Station 03](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475789154_646003197937635_3988288094259662487_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=sigoL8AI3Z0Q7kNvwEWjcK8&_nc_oc=AdnvxYDjb3SVxdLYkfm3nGz4Tq8hJZzp543DOpx13U91V5NGtdAF1zlPaACKYqBzk6o&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=BaWZxu5S7R-kO75L7d0m0A&oh=00_Afca8e7fYkaFjmc_...
...
# Station 3 - Scrollable UI
...
 This UI displays an example biography of Lord Lorem Ipsum, including a title,
picture, picture caption, and body text. In this example, the body text is too long for the displayed panel. To display
the entire body text, the panel height would have to be so large that the UI
would be difficult to review in headset. In this case, the problem is addressed by rendering the body text of His
Lordship in a ScrollView object.  
## Assets
...
## Script
...
## Key Learnings
...
## Additional Links
...
      Learn
# Station 3 - Scrollable UI
...
