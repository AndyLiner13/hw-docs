Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/custom-ui-examples-tutorial/station-6a-column-view

# Station 6a - Column View

The examples in Station 6 demonstrate how to organize your customUI panel into rows and columns. In these examples, you can use the flexDirection styling attribute to orient your `View()` objects horizontally and vertically.

In this example, a set of UI elements is organized in a vertical column. Note the behavior of the buttons here: hover states are shared.

<details>
<summary>Image of Station 06a</summary>

<p></p>

[Image of Station 06a](../../../image_data/19a3f44d7665753642563526d318b61e76879869ef80a67c9c12c5586eea8965.md)

### Overview
This image depicts a user interface layout with a title labeled "Flex Column" at the top. Below the title, there are two identical sections containing text and buttons, followed by a single section with a border.

### Key Elements
- **Title**: "Flex Column" located at the top-left corner.
- **Section 1**: 
  - **Visual description**: A black rectangular area with rounded corners.
  - **Location**: Top section within the larger pink-bordered container.
  - **Contents**: Contains white text that reads "I am a Text child in a View" and a green button below it labeled "Button".
  - **Visual styling**: Black background, white text, green button with white text.
- **Section 2**: 
  - **Visual description**: Identical to Section 1 but positioned below Section 1.
  - **Location**: Second section within the larger pink-bordered container.
  - **Contents**: Contains white text that reads "I am a Text child in a View" and a green button below it labeled "Button".
  - **Visual styling**: Same as Section 1.
- **Section 3**: 
  - **Visual description**: A black rectangular area with rounded corners and a red border.
  - **Location**: Bottom section within the larger pink-bordered container.
  - **Contents**: Contains white text that reads "I can haz Borders!".
  - **Visual styling**: Black background, white text, red border with rounded corners.

### Visual Flow / Relationships
- The most prominent visual element is the "Flex Column" title at the top.
- There are no arrows or lines connecting the sections, indicating a simple vertical stacking relationship.
- Sections are arranged vertically, one above the other, with clear separation between them.

</details>

<p></p>



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