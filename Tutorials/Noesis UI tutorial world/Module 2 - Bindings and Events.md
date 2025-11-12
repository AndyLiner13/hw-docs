Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-2-bindings-and-events

Learn

# Module 2 - Bindings and Events

Data binding in NoesisGUI allows you to connect UI elements in XAML to properties and data in your TypeScript scripts. This enables dynamic updates: when your script changes a value, the UI updates automatically, and vice versa.

Note

 All code examples in this tutorial are complete and ready to test. The examples located in Module 2 demonstrate binding and event concepts - no additional code is required.

## Common Data Binding Patterns

### Property Binding

![Property Binding](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/577456482_855959393608680_4530106689463455280_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=QSAICFB3a2QQ7kNvwEgZc4l&_nc_oc=Adkcw8Du9CKq4RwM38fobX3ql9ZG_wZD0ppwX-wfKebQ-7UvNHzEnLgFsG_NWVTeJJU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=q7BJuDEqJBU3hnS7DuF68A&oh=00_AfjyS86hzjIIcAp1ZKCRFcJ83p2J1V-IZ_a4zOfqGEbOrA&oe=692E9206)

Connects a UI element’s property (like Text or Value) to a value in your data context.

**XAML Example:**

```
<TextBlock Text="{Binding Path=resultText}" />
<ProgressBar Value="{Binding Path=progression[0]}" />
```