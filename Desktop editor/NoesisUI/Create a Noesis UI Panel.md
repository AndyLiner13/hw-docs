Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/noesis-ui/create-a-noesis-ui-panel

# Create a Noesis UI Panel

This guide demonstrates how to create 2D UI panels using NoesisUI—a robust 2D UI framework integrated into the desktop editor. With Noesis Studio, you can visually design UI panels and enjoy faster rendering and richer features compared to coding UIs entirely in TypeScript.

## What is NoesisUI?

NoesisUI is a new 2D UI solution integrated into the Horizon Editor that enables creators to build more compelling, creative, and performant 2D UI panels. It leverages Noesis Studio, a WYSIWYG visual editor, to simplify the creation process and provide richer features for 2D UI design.

### Why use NoesisUI?

* More performant: NoesisUI offers significantly improved rendering performance for 2D UI components compared to previous solutions.
* Richer 2D UI: Built using Noesis Studio, it supports a richer feature set for 2D UI panels.
* Easier to create: The WYSIWYG visual editor in Noesis Studio makes building 2D UI panels easier and more intuitive.

Creators will need to download Noesis Studio (a beta product fully licensed by Meta) to build their 2D UI panels. No additional license or payment is required.

## Prerequisites

* Download and install [**Noesis Studio**](https://www.noesisengine.com/studio/) (available through Meta—no extra licensing needed).

## Design a UI Panel in Noesis Studio

- Open **Noesis Studio**.
- Design your UI panel using the visual WYSIWYG editor.
- Preview your UI directly in the studio.
- Save your project when you’re satisfied.

For more information about designing a UI panel in Noesis studio, check the [NoesisGUI documentation](https://www.noesisengine.com/docs/Gui.Core.Index.html).

## Import the Noesis Project

Once your project is created in Noesis, use the following process to add it to your world.

- Launch the **desktop editor**.
- Import your Noesis project into the **My Assets** panel.

* **Important**: Make sure to save the Noesis project into an empty folder. When uploaded into the Horizon desktop editor, the whole folder will be compressed and uploaded as a single asset. This includes all images, media files, and XAML files used in the project.

- Add your Noesis panel into your world. To do so you have two options:

* **Option 1:** Drag the Noesis project from **My Assets** into the scene—this creates a NoesisUI component.
* **Option 2:** Use **Build > Gizmos** in the menu to create a NoesisUI gizmo manually.

## Configure the NoesisUI Component

Select your NoesisUI gizmo in the **Hierarchy** panel, then adjust these properties in the **Properties** panel:

* **Noesis Project:** Assign your imported project asset.
* **Root XAML:** Choose the primary XAML file for your UI.
* **Display Mode:**
  + *Spatial Default*: UI panel appears in-world.
  + *Screen Overlay*: UI appears as a HUD/screen overlay.
* **Width/Height:** Set the UI texture size.
* **Show Backpanel***(Spatial only)*: Toggle a backing panel.
* **Back Panel Color:** Choose the color for the back panel.
* **Input Mode***(Screen Overlay only)*:
  + *No Interaction*: UI is not interactive.
  + *Interactive, blocking*: UI captures all input—useful for modal dialogs.
  + *Interactive, nonblocking*: UI allows game input to pass through.
* **Render Order:** Set overlay stacking priority (higher = on top).

## Attach a script for interactivity

- Select your NoesisUI gizmo.
- In **Properties**, click **Attach Script**.
- Choose **New Noesis UI Script** (execution mode should be **Shared**).

[Attach script for Noesis UI script](https://developers.meta.com/horizon-worlds/images/noesis-ui-1.png)

Learn more about **Shared Mode Noesis** scripts [here](Shared%20Mode%20for%20Noesis%20UI%20Scripts.md).

## Enable UI interactions

Define interactive elements in XAML, then handle them in your script’s `dataContext`. **Example button in XAML:**

```
<Grid>
  <Button Width="60" Height="40" Content="Say Hello" Command="{Binding SayHelloCommand}" />
  <Button Width="60" Height="40" Content="Say Hello John" Command="{Binding SayHelloJohnCommand}" CommandParameter="John" />
</Grid>
```

**Attach a command in TypeScript:**

```
this.gizmo.as(NoesisGizmo).dataContext = {
  SayHelloCommand: function() {
    console.log("Hello from NoesisUI");
  }

  SayHelloJohnCommand: function(name: string) {
    console.log(`Hello from NoesisUI, ${name}`);
  }
}
```

## MouseMove event handling

Connect Noesis UI mouse movement events to your TypeScript logic to enable interactive UI features such as dragging, custom cursors, and dynamic feedback.

### XAML example: MouseMove event binding

Bind the `MouseMove` event to a command in your data context. The following example updates a rectangle’s position as you move the mouse:

```
<Page
 xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
 xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
 xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
 xmlns:b="http://schemas.microsoft.com/xaml/behaviors"
 mc:Ignorable="d"
 d:DesignWidth="1920"
 d:DesignHeight="1080"
 Background="#FF3D5052">
 <Grid Width="1920" Height="1080">
   <Rectangle Stroke="#FF000000" Width="50" Height="50" Fill="#FF0089C0" RadiusX="25" RadiusY="25" Margin="-25,-25,-25,-25" HorizontalAlignment="Left" VerticalAlignment="Top">
     <Rectangle.RenderTransform>
       <TransformGroup>
         <TranslateTransform X="{Binding Path=pos.x}" Y="{Binding Path=pos.y}"/>
       </TransformGroup>
     </Rectangle.RenderTransform>
   </Rectangle>
 </Grid>
 <b:Interaction.Triggers>
   <b:EventTrigger EventName="MouseMove">
     <b:InvokeCommandAction Command="{Binding Path=mouseMove}" PassEventArgsToCommand="True"/>
   </b:EventTrigger>
 </b:Interaction.Triggers>
</Page>
```

### TypeScript example: Handling MouseMove

Set up your data context in TypeScript to handle the mouse movement and update the UI:

```
const dataContext = {
 pos: {
   x: 100,
   y: 200,
 },
 mouseMove: (args: unknown) => {
   const { position } = args as { position: { x: number, y: number } };
   console.log("Mouse move", position);
   Object.assign(dataContext.pos, position);
 }
};
this.entity.as(NoesisGizmo).dataContext = dataContext;
```

### Explanation

* **XAML**: The `<b:EventTrigger>` listens for `MouseMove` events and invokes the `mouseMove` command, passing event arguments.
* **TypeScript**: The `mouseMove` function receives the mouse position (`{x, y}`) and updates the `pos` property, which is bound to the rectangle’s transform in XAML.

### Use cases

* **Draggable UI Elements**: Move shapes, panels, or controls in response to mouse movement.
* **Custom Cursor**: Track and display a custom cursor or highlight under the mouse.
* **Interactive Feedback**: Show tooltips, hover effects, or context menus at the mouse position.

### Demo

You can see a working example here:

![MouseMove Event example](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/499304131_893860719986354_6580421482938489396_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=OUFXNmaE9HsQ7kNvwGOh2Dl&_nc_oc=AdmZixr75V4H_FEt6NCVDe7e83RarRT9bidctEAc2J3U34d-D7UXEEltABObQz18wFA&_nc_zt=28&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfpQJqKKQYm9dRPQfc7J-IoU5HtfG6rPWHgCxumxjhfghA&oe=69840634)

## Command param tutorial

This tutorial explains how to use command parameters in HUR Noesis, enabling you to pass values from XAML UI elements (like buttons) to your TypeScript logic. You’ll find XAML and TypeScript examples, a short explanation, and practical use cases.

### Overview

Command parameters allow you to send custom data (such as strings, numbers, or objects) from your XAML UI to your TypeScript handlers. This is useful for building interactive and dynamic UIs.

### XAML example: Passing command parameters

You can specify a `CommandParameter` on UI elements like `<Button>`. The value will be sent to your handler when the command is invoked.

```
<Page
 xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
 xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
 xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
 xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
 mc:Ignorable="d"
 d:DesignWidth="1920"
 d:DesignHeight="1080"
 Background="#FF0099FF">
 <Grid>
   <Button Command="{Binding Path=OnButtonClickString}" CommandParameter="Hello" Width="300" Height="300" Margin="810,390" Content="Button String"/>
   <Button Command="{Binding Path=OnButtonClickNoParam}" Width="300" Height="300" Margin="1110,390,510,390" Content="ButtonNoParam"/>
   <Button Command="{Binding Path=OnButtonClickNumber}" CommandParameter="123" Width="300" Height="300" Margin="510,390,1110,390" Content="Button Number"/>
   <TextBlock Text="{Binding Path=Label}" TextWrapping="Wrap" Margin="510,327,510,695" FontSize="48"/>
 </Grid>
</Page>
```

### TypeScript example: Handling command parameters

Set up your data context in TypeScript to handle commands with or without parameters:

```
const dataContext = {
 Label: "Hello World",
 OnButtonClickString: (param: string) => {
   dataContext.Label = "OnButtonClickString " + param;
 },
 OnButtonClickNumber: (param: number) => {
   dataContext.Label = "OnButtonClickNumber " + param;
 },
 OnButtonClickNoParam: () => {
   dataContext.Label = "OnButtonClickNoParam";
 },
 OnCheckbox: (param: unknown) => {
   dataContext.Label = "OnCheckbox " + param;
 }
};
this.entity.as(NoesisGizmo).dataContext = dataContext;
```

### Explanation

* **XAML**: The `CommandParameter` property on a button passes its value to the bound command when clicked.
* **TypeScript**: The handler function receives the parameter and can use it to update the UI or perform logic. If no parameter is provided, the handler is called without arguments.

### Use cases

* **Dynamic Button Actions**: Pass different values to a single handler for context-aware actions.
* **Form Controls**: Send checkbox or input values to your logic.
* **Contextual UI Updates**: Update labels, states, or other UI elements based on the parameter.

### Demo

See a working example here:

![MouseMove Event example](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/499298150_1967665127426257_5329898611576816400_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=PmCdsNtQY9sQ7kNvwFMPnjq&_nc_oc=AdkBoNIt1uwuw-AF3Q4VRTdeFDAjrmv5rj-30aEydWCQCCgMEQLlZY8hFvwRrwBxXeo&_nc_zt=28&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_Afqklhw7g1G9wDQ-gb_kGun8OVx5y9QgWYPMCba0nJ0d-Q&oe=6983FD2F)

## Noesis Features Support

Noesis provides a broad set of features. The implementation for the desktop editor includes a defined subset of these features. The support status of each Noesis feature is detailed in the comprehensive table below:

| Noesis Feature | Desktop Editor Support Status |
| --- | --- |
| Styles/Templates | Fully supported. **Note**: All identifiers should be unique |
| Components | Will not be supported. |
| Paths(shapes) | Supported. **Note**: Use with caution due to performance implications |
| Data Bindings | Supported |
| Commands | Supported |
| [Fonts](Noesis%20UI%20Fonts%20Usage.md) | Support for a limited number of approved fonts. |
| Nine-slicing | Will not be supported. |
| Extensions requiring C#/C++ code injection: custom components, user controls, external plugins, and additional brushes | Will not be supported. |
| Switching between XAMLS | Supported. |
| Dynamically created XAMLs | Will not be supported. |