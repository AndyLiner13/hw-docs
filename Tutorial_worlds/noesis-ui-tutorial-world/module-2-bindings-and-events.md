# Module 2 - Bindings and Events

Data binding in NoesisGUI allows you to connect UI elements in XAML to properties and data in your TypeScript scripts. This enables dynamic updates: when your script changes a value, the UI updates automatically, and vice versa.

## Common Data Binding Patterns

### Property Binding

Connects a UI element's property (like Text or Value) to a value in your data context.

```xml
<TextBlock Text="{Binding Path=resultText}" />
<ProgressBar Value="{Binding Path=progression[0]}" />
```

### ItemsSource Binding

Binds a collection in your data context to a list UI element.

```xml
<ListBox ItemsSource="{Binding Path=questList}" />
```

### Command Binding

Binds a UI event (like a button click) to a function in your data context.

```xml
<Button Command="{Binding Path=events.acceptEvent}" />
```

## Events

Events in NoesisGUI are actions triggered by user interaction (like button clicks, toggles, etc.). In XAML, you bind these events to commands defined in your TypeScript data context.

### Steps to Connect an Event

1. **Define an event handler in TypeScript**: In your TypeScript component, add a function that will handle the event. Then, include it in your data context's events object.

```typescript
private dataContext = {
    events: {
        acceptEvent: () => this.acceptEventTriggered(),
        cancelEvent: () => this.cancelEventTriggered()
    }
};
```

2. **Bind the event in XAML**: In your XAML file, bind the UI element's Command property to the event you defined in your data context.

```xml
<Button Content="Accept" Command="{Binding Path=events.acceptEvent}" />
<Button Content="Cancel" Command="{Binding Path=events.cancelEvent}" />
```

3. **Handle the event in TypeScript**: Inside your event handler, update any properties in your data context and call your UI update method so the changes are reflected in the UI.

```typescript
private acceptEventTriggered(): void {
    this.dataContext.resultText = "Accepted!";
    this.updateUI();
}
```