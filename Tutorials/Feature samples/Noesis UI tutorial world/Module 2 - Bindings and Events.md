Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/noesis-ui-tutorial-world/module-2-bindings-and-events

# Module 2 - Bindings and Events

Data binding in NoesisGUI allows you to connect UI elements in XAML to properties and data in your TypeScript scripts. This enables dynamic updates: when your script changes a value, the UI updates automatically, and vice versa.

Note

 All code examples in this tutorial are complete and ready to test. The examples located in Module 2 demonstrate binding and event concepts - no additional code is required.

## Common Data Binding Patterns

### Property Binding

<details>
<summary>Property Binding</summary>

<p></p>

[Property Binding](../../../image_data/947f6788c12bd0473233b9b02ae21da12c2f1b99ae6281b26c5c7257031267e9.md)

### Overview
This image depicts a user interface design workspace within a software application, likely a UI builder or designer tool. The central area showcases a custom-designed button with various states and progress bars, while the right side displays properties and layout settings for a progress bar control.

### Key Elements
- **Title Bar**: Located at the top, contains the title "CUSTOM UI TEXTURED BUTTON" in white text on a dark blue background.
- **Design Area**: Central part of the image shows a light beige background with a textured border. It includes multiple interactive elements such as buttons labeled "REPAIR," "DESTROY," and "NEED REPAIR!" along with progress bars.
  - **Progress Bars**: Three progress bars are visible, each with a different color scheme and percentage completion indicated by numbers above them (57%, 34%, and 33%).
  - **Buttons**: Two buttons labeled "REPAIR" and one labeled "DESTROY" are present.
  - **Need Repair Button**: A button with a red and black gradient, labeled "NEED REPAIR!" with a small icon resembling a hammer.
  - **Destroy Button**: A button with a green and black gradient, labeled "DESTROY" with a small icon resembling a hammer.
  - **Repair Button**: A button with a blue gradient, labeled "REPAIR" with a small icon resembling a hammer.
- **Properties Panel**: On the right side, there is a properties panel displaying settings for a progress bar named "Repair_Progress_Bar." It includes fields for value, minimum, maximum, orientation, width, height, margin, and row settings.

### Visual Flow / Relationships
The design area is the focal point, with the properties panel providing contextual information about the selected element. The layout suggests a workflow where designers can create and customize UI elements before applying them to a project.

</details>

<p></p>



Connects a UI element’s property (like Text or Value) to a value in your data context.

**XAML Example:**

```
<TextBlock Text="{Binding Path=resultText}" />
<ProgressBar Value="{Binding Path=progression[0]}" />
```