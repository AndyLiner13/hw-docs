Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-2-bindings-and-events

Learn

# Module 2 - Bindings and Events

Data binding in NoesisGUI allows you to connect UI elements in XAML to properties and data in your TypeScript scripts. This enables dynamic updates: when your script changes a value, the UI updates automatically, and vice versa.

Note

 All code examples in this tutorial are complete and ready to test. The examples located in Module 2 demonstrate binding and event concepts - no additional code is required.

## Common Data Binding Patterns

### Property Binding

![Property Binding](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/577456482_855959393608680_4530106689463455280_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=xPXC3q7o2cQQ7kNvwFNbHC2&_nc_oc=Adnu7RjrNt6RXkCnCQIFNNMjHP-vhzYRIjMWLv0kmwkBSaiUkJ6QyySae_NBBP_UHvQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=s6L-M17ny9qfacE1gPWbMQ&oh=00_AfiU2McJLv3FqBdcY7FGOXKlTT6nUOyFc3U-3CBoHEUz0A&oe=692FAB46)

Connects a UI element’s property (like Text or Value) to a value in your data context.

**XAML Example:**

```
<TextBlock Text="{Binding Path=resultText}" />
<ProgressBar Value="{Binding Path=progression[0]}" />
```