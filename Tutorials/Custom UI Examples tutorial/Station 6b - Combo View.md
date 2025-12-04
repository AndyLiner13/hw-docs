Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-examples-tutorial/station-6b-combo-view

# Station 6b - Combo View

This station demonstrates how you can combine multiple nested view objects to assemble groups of elements in your user interface.

In the previous example, the `View()` objects were created as constructors, which allows them to be referenced multiple times. Since the entire column was created as a constructor, it can be reused as well, which results in the side-by-side Flex Column objects in the following image.

In this manner, you can build sophisticated user interfaces by assembling core UI widgets as constructor `View()` objects and combining them together to build more sophisticated objects, which can be referenced from a library. Think, for example, of a Confirmation Dialog created as a set of constructor `View()` objects.

![Image of Station 6b](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475767631_646003161270972_6759271736042486324_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=W0_MT_QcysEQ7kNvwEs1EuW&_nc_oc=AdnEwKhWmuLpdNsfjeAedQcmLq-rRgBqxZmwUf6WH-1Lkz4M_XmHoSgHipFAoHrL0xQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=fBJkSIq_UMhoEKYreH-qGQ&oh=00_AfkOcimn8k5EPHBYYS5vPiSKNBMFZiw5OyHPbkBG0S4pjQ&oe=694BE556)

## Assets

* **Station06b-CustomUI: CustomUI gizmo**
  + Visible: true
  + Script: the script that defines the custom UI elements must be attached.
* **Station06b-ComboView: script**
  + This script defines the customUI object and loads referenced objects.

## Script

### Station06b-ComboView

* This script includes more constructor `View()` object declarations: The structure of the UI is as follows:
  + UIComponentViewCombo class
    - `Text()`
    - `viewNestedCombo()`: `flexDirection = "column"`
      * `viewNestedRow()`: `flexDirection = "row"`
        + `Text()` instance
        + `viewSimple()`: `flexDirection` is not specified
          - `Text()` instance
          - `MyButton()` instance
        + `MyButton()` instance
        + `viewSimple()`:
          - `Text()` instance
          - `MyButton()` instance
      * `View()` instance: This view is declared inline and not as a constructor
        + `viewNestedCol()`: `flexDirection = "column"`
          - `Text()` instance
          - `viewSimple()`: `flexDirection` is not specified
            * `Text()` instance
            * `MyButton()` instance
          - `viewSimple()`: `flexDirection` is not specified
            * `Text()` instance
            * `MyButton()` instance
          - `ViewBorder()`: `flexDirection` is not specified
            * `Text()` instance
        + `viewNestedCol()`: `flexDirection = "column"`
          - `Text()` instance
          - `viewSimple()`: `flexDirection` is not specified
            * `Text()` instance
            * `MyButton()` instance
          - `viewSimple()`: `flexDirection` is not specified
            * `Text()` instance
            * `MyButton()` instance
          - `ViewBorder()`: `flexDirection` is not specified
            * `Text()` instance
        + `viewNestedCol()`: `flexDirection = "column"`
          - `Text()` instance
          - `viewSimple()`: `flexDirection` is not specified
            * `Text()` instance
            * `MyButton()` instance
          - `viewSimple()`: `flexDirection` is not specified
            * `Text()` instance
            * `MyButton()` instance
          - `ViewBorder()`: `flexDirection` is not specified
            * `Text()` instance

## Key Learnings

### Meta Horizon Worlds learnings

* Building combinations of constructor `View()` objects to assemble more complex interfaces.

### TypeScript coding

* None.