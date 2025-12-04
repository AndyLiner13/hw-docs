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

Learn more about **Shared Mode Noesis** scripts [here](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/NoesisUI/Shared%20Mode%20for%20Noesis%20UI%20Scripts.md).

## Enable UI interactions

Define interactive elements in XAML, then handle them in your script’s `dataContext`.
**Example button in XAML:**

```
<Button Width="60" Height="40" Content="OK" Command="{Binding SayHelloCommand}">
  <Button.ToolTip>Clicking this will submit your request</Button.ToolTip>
</Button>
```

**Attach a command in TypeScript:**

```
this.gizmo.as(NoesisGizmo).dataContext = {
  SayHelloCommand: function() {
    console.log("Hello from NoesisUI");
  }
}
```