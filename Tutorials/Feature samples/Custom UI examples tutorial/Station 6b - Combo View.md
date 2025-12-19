Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/custom-ui-examples-tutorial/station-6b-combo-view

# Station 6b - Combo View

This station demonstrates how you can combine multiple nested view objects to assemble groups of elements in your user interface.

In the previous example, the `View()` objects were created as constructors, which allows them to be referenced multiple times. Since the entire column was created as a constructor, it can be reused as well, which results in the side-by-side Flex Column objects in the following image.

In this manner, you can build sophisticated user interfaces by assembling core UI widgets as constructor `View()` objects and combining them together to build more sophisticated objects, which can be referenced from a library. Think, for example, of a Confirmation Dialog created as a set of constructor `View()` objects.

<details>
<summary>Image of Station 6b</summary>

<p></p>

[Image of Station 6b](../../../image_data/6893bdae9b6d34a7af1b73b860c5a44ce2c51a0ebc51f433a0ba969bd3917d00.md)

### Overview
The image displays a user interface (UI) layout demonstration titled "Station 06 - Flexible Layouts." It showcases two main sections: one labeled "Flex Row" and another labeled "Flex Column," both containing text children within views and buttons. The layout is set against a tiled yellow background with a grid overlay.

### Key Elements
- **Title**: "Station 06 - Flexible Layouts" located at the top-left corner.
- **Main Section**: A blue rectangular area with a white border, containing two rows of content.
  - **Top Row**: Contains two black rectangular blocks with green buttons labeled "Button." Each block has text above it that reads "I am a Text child in a View."
  - **Bottom Row**: Contains three red-bordered black rectangular blocks with green buttons labeled "Button." Each block has text above it that reads "I am a Text child in a View." Below each block, there is additional text that says "I can haz Borders!" in a red-bordered black rectangle.
- **Background**: A tiled yellow background with a grid overlay.

### Visual Flow / Relationships
- **Most Prominent Element**: The blue rectangular area containing the content.
- **Arrows/Connectors**: None.
- **Spatial Relationships**: The content is arranged in a grid-like structure within the blue rectangle, with the Flex Row and Flex Column sections clearly delineated.

</details>

<p></p>



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