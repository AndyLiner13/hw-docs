Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-examples-tutorial/station-6a-column-view

# Station 6a - Column View

The examples in Station 6 demonstrate how to organize your customUI panel into rows and columns. In these examples, you can use the flexDirection styling attribute to orient your `View()` objects horizontally and vertically.

In this example, a set of UI elements is organized in a vertical column. Note the behavior of the buttons here: hover states are shared.

![Image of Station 06a](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475464828_646003191270969_1422741377733593386_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=RbVvlv_3nzMQ7kNvwGUp1hF&_nc_oc=AdnYJj4RslYKMNOxoev9rgVZyYzMkyxTR8Gt2KDCM7sGmbW2A2WET9yxyF1CfYFtq8g&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=06_SG2wgjJhf_r_EFsD4Kg&oh=00_AfhyvHPbWBR5PM0smvcW2ZyNDjeRmYQwnNqFOd14IVE30A&oe=692FABE1)

## Assets

* **Station06a-CustomUI: CustomUI gizmo**
  + Visible: true
  + Script: the script that defines the custom UI elements must be attached.
* **Station06a-ColumnView: script**
  + This script defines the customUI object and loads referenced objects.

## Script

### Station06a-ColumnView

* This script introduces the structures for building independent reusable `View()` objects.
  + You can build constructors of views as a form of templatizing your customUI objects. Example:

```
const viewSimple = View({
  children: [
    Text({text: "I am a Text child in a View", style: {margin: 10}}),
    MyButton({
      label: "Button",
      baseColor: "green",
      onClick: () => {},
      style: {
        //backgroundColor: "#CF1313",
      },
    }),
  ],
  style: {
    alignItems: "center",
    height: 100,
    backgroundColor: "black",
    margin: 10,
  },
});
```

* The above `viewSimple` view constructor is reused twice in the vertically oriented customUI panel
* The `viewBorderTaper` view constructor introduces some additional styling properties. In Visual Studio Code, right-click a property name and select **Go to Definition** to review its usage and the related styling parameters for the `ViewStyle` object.
* The viewNestedCol view assembles two instances of the `viewSimple` constructor view and `viewBorderTaper` constructor view into a vertical layout.

```
const viewNestedCol = View({
  children: [
    Text({text: "Flex Column"}),
    viewSimple,
    viewSimple,
    viewBorderTaper,
  ],
  style: {
    flexDirection: "column",
    //alignItems: "center",
    borderColor: "pink",
    borderWidth: 8,
  },
});
```

* The children array lists the objects in sequence of appearance in the `View()` object.
* The key property is `flexDirection`, which is set to `"column"` to align the children vertically.
* View constructors that are unused in this example are commented out. These are explored in the other examples in Station 6.
* The UIComponentViewCol class definition is very simple. Its children array is a reference to the viewNestedCol view, which assembles the sub-view objects into a vertical array.

## Key Learnings

### Meta Horizon Worlds learnings

* `flexDirection` property to arrange customUI layout
* Building `View()` objects as a constructor, which enables them to be referenced as templatized entities in your layouts.
* In your world, you can experiment with removing comments around some of the other constructors to experiment with them in your custom UI layout.

### TypeScript coding

* None.