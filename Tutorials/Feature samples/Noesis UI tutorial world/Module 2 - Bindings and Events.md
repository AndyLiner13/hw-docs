---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/noesis-ui-tutorial-world/module-2-bindings-and-events
---

# Module 2 - Bindings and Events

Data binding in NoesisGUI allows you to connect UI elements in XAML to properties and data in your TypeScript scripts. This enables dynamic updates: when your script changes a value, the UI updates automatically, and vice versa.

Note

 All code examples in this tutorial are complete and ready to test. The examples located in Module 2 demonstrate binding and event concepts - no additional code is required.

## Common Data Binding Patterns

### Property Binding

![Property Binding](../../../_assets/images/d302a9ed3ae2c05c1f80003e31d0c3d1ba4200b7aab9090027cf9622034102de.png)

Connects a UI element’s property (like Text or Value) to a value in your data context.

**XAML Example:**

```
<TextBlock Text="{Binding Path=resultText}" />
<ProgressBar Value="{Binding Path=progression[0]}" />
```