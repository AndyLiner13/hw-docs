Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-2-bindings-and-events

# Module 2 - Bindings and Events

Data binding in NoesisGUI allows you to connect UI elements in XAML to properties and data in your TypeScript scripts. This enables dynamic updates: when your script changes a value, the UI updates automatically, and vice versa.

Note

 All code examples in this tutorial are complete and ready to test. The examples located in Module 2 demonstrate binding and event concepts - no additional code is required.

## Common Data Binding Patterns

### Property Binding

![Property Binding](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/577456482_855959393608680_4530106689463455280_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=QSAICFB3a2QQ7kNvwEgZc4l&_nc_oc=Adkcw8Du9CKq4RwM38fobX3ql9ZG_wZD0ppwX-wfKebQ-7UvNHzEnLgFsG_NWVTeJJU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=femW61w5rj_8IqAjnogVww&oh=00_AfghVr9uib0vKy9TCqZKTPmR8R6pH-BtfUJFqR3Uo_mO9w&oe=692BEF06)

Connects a UI element’s property (like Text or Value) to a value in your data context.

**XAML Example:**

```vs
<TextBlock Text="{Binding Path=resultText}" />
<ProgressBar Value="{Binding Path=progression[0]}" />
```

---

### ItemsSource Binding

![NoesisGUI ItemsSource Binding](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/576311728_855959390275347_3418195227986653603_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=rFsvf94DZBIQ7kNvwHWydUi&_nc_oc=AdmebQj9bWI4b-0_A9cj_dsMgEpdyNQHue_OF0_J4kTBlzk-hgobMxND7qUMccFGorY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=femW61w5rj_8IqAjnogVww&oh=00_AfiH6qFJkIWkvbzcwhdGjOT0uWHvvRtfEXncfc_sTgNBjQ&oe=692C0F61)

Binds a collection in your data context to a list UI element.

**XAML Example:**

```vs
<ListBox ItemsSource="{Binding Path=questList}" />
```

---

### Command Binding

![NoesisGUI Command Binding](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/574366299_855959366942016_8286597887196755886_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=GqqlLc3zJ5cQ7kNvwFitbJO&_nc_oc=AdnyiRZNlIR5Avr_ME6Q6Yyq2AgWzS5a-KLYQ6XLbjrKRVLehJBX2io9zvT0r0gbqQ0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=femW61w5rj_8IqAjnogVww&oh=00_AfjKpYLNR_xu12QdJiZXyLdEQe7aihxKSjktG1EvC8XNLw&oe=692BDE49)

Binds a UI event (like a button click) to a function in your data context.

**XAML Example:**

```vs
<Button Command="{Binding Path=events.acceptEvent}" />
```

---

## Events

Events in NoesisGUI are actions triggered by user interaction (like button clicks, toggles, etc.). In XAML, you bind these events to commands defined in your TypeScript data context.

### Steps to Connect an Event

**1. Define an event handler in TypeScript:**

In your TypeScript component, add a function that will handle the event. Then, include it in your data context’s events object.

```_ar4n
private dataContext = {
    events: {
        acceptEvent: () => this.acceptEventTriggered(),
        cancelEvent: () => this.cancelEventTriggered()
    }
};
```

**2. Bind the event in XAML:**

In your XAML file, bind the UI element’s Command property to the event you defined in your data context.

```vs
<Button Content="Accept" Command="{Binding Path=events.acceptEvent}" />
<Button Content="Cancel" Command="{Binding Path=events.cancelEvent}" />
```

**3. Handle the event in TypeScript:**

Inside your event handler, update any properties in your data context and call your UI update method so the changes are reflected in the UI.

```_ar4n
private acceptEventTriggered(): void {
    this.dataContext.resultText = "Accepted!";
    this.updateUI();
}
```