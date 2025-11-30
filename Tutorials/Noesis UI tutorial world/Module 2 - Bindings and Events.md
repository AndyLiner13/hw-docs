Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-2-bindings-and-events

# Module 2 - Bindings and Events

Data binding in NoesisGUI allows you to connect UI elements in XAML to properties and data in your TypeScript scripts. This enables dynamic updates: when your script changes a value, the UI updates automatically, and vice versa.

Note

 All code examples in this tutorial are complete and ready to test. The examples located in Module 2 demonstrate binding and event concepts - no additional code is required.

## Common Data Binding Patterns

### Property Binding

![Property Binding](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/577456482_855959393608680_4530106689463455280_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=2AJeNTY05lAQ7kNvwHBdLJo&_nc_oc=Adlp2qn_5mXCQQfsNEVurANjkBSNFh2CoMyN36Loparen8IU4Xw4Ao-KhJf7iXN2OdU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Q8lN2eYLXkCM8d4m4ID1OA&oh=00_AfiUf_Y8edZjTJ1kWNDk-v2NRja8SXzXulPJGEV4AzbmgA&oe=69464D06)

Connects a UI element’s property (like Text or Value) to a value in your data context.

**XAML Example:**

```
<TextBlock Text="{Binding Path=resultText}" />
<ProgressBar Value="{Binding Path=progression[0]}" />
```