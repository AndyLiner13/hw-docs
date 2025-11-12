Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/noesis-ui/noesis-ui-configurations

Learn

# Customizing Noesis UI Behavior

This topic describes how you can customize the behavior of NoesisUI panels in **Properties** by configuring settings for display mode, rendering dimensions, interaction modes, and visual appearance.

Find these settings by selecting the NoesisUI gizmo entity in **Hierarchy**. The configuration settings are then shown in **Properties**. You can configure the settings in both the desktop editor and the VR edit mode.

These configurations can only be set statically in **Properties** and cannot be changed at runtime through TypeScript.

## Noesis Project settings

### Noesis Project

Select the asset containing your Noesis project imported from **Noesis Studio**. This asset contains all XAML files and resources for your UI panel.

### Root XAML

Choose the specific XAML file within the Noesis project archive that defines the root of your UI. If your project contains multiple XAML files, this setting determines which one serves as the entry point for the UI panel.

## Display settings

### Display Mode

Choose how the NoesisUI panel is displayed in the world:

* **Spatial Default**: Positions the UI panel in 3D space as a world object. Players can see and interact with the panel from different angles and distances. This mode is ideal for UI panels that are part of the world environment, such as control panels, signs, or interactive screens.
* **Screen Overlay**: Functions as a heads-up display (HUD) or screen overlay that appears directly on the player’s screen. This mode is ideal for player-specific information such as health bars, inventory screens, or menu systems.

### Width and Height

Set the dimensions of the UI rendering texture in pixels. These values determine the resolution of your UI panel, not its physical size in the world.

Higher resolution values produce sharper UI but consume more memory and processing power. The default value is 1024 x 1024 pixels.

For optimal performance:

* Use power-of-two dimensions when possible (512, 1024, 2048)
* Match the aspect ratio of your XAML design
* Consider the viewing distance and physical size of the panel

## Spatial Default mode settings

These settings only apply when Display Mode is set to Spatial Default.

### Show Backpanel

Enable to display a solid back panel behind the NoesisUI content. This provides a background for transparent or semi-transparent UI elements.

When disabled, only the UI content renders, and areas without UI elements are fully transparent.

### Back Panel Color

Set the RGB color for the back panel when Show Backpanel is enabled. Click the color picker to choose a color or enter RGB values manually.

### Raycast

In VR, players interact with spatial UI panels through raycast from their controllers. By default, raycast is automatically enabled when a player is within a certain distance of the UI panel.

When raycast is disabled, the UI panel no longer receives raycast input events, and players cannot interact with the panel.

### Raycast Distance

Control the distance within which a player can interact with the UI panel. The default value is 3 meters.

Avoid setting the raycast distance greater than 10 meters. While there is no strict upper limit, having a larger raycast distance across multiple UI panels can negatively impact performance.

These raycast settings only affect the player experience in VR and are unused for web and mobile experiences.

## Screen Overlay mode settings

These settings only apply when Display Mode is set to Screen Overlay.

### Input Mode

Control how the screen overlay handles player input:

* **No Interaction**: The UI is not interactable. Use this for informational displays that players can see but not interact with.
* **Interactive, blocking**: The UI blocks input to the game world. When the player interacts with the UI, game world interactions are disabled. Use this for modal dialogs, menus, or screens that require the player’s full attention.
* **Interactive, nonblocking**: The UI allows interaction without blocking the game world. Players can interact with the UI while remaining able to move and interact with the world. Use this for HUDs or persistent UI elements.

### Render Order

Determines the stacking order when multiple screen overlays are visible. Higher values render on top of lower values.

Use this setting to control which overlays appear in front when multiple NoesisUI or Custom UI screen overlays are active. For example, a menu overlay with render order 100 appears on top of a HUD with render order 10.

### Focus Prompt

On web and mobile platforms, players do not interact with UI panels through raycast. Instead, players see a prompt when they are within a certain distance from spatial UI panels.

For screen overlays, this setting controls whether the player can focus on the overlay. When disabled, the overlay remains visible but cannot receive input focus.

### Focus Prompt Distance

Control the distance within which the focus prompt is shown to a player. The default value is 2.5 meters, and can be customized with a value between 0 and 10 meters.

This range restriction is due to performance considerations.

## Performance considerations

### Resolution and memory

The Width and Height settings directly affect memory usage and rendering performance:

* A 1024 x 1024 panel uses approximately 4 MB of texture memory
* A 2048 x 2048 panel uses approximately 16 MB of texture memory
* Multiple high-resolution panels can significantly impact performance

Optimize your panel resolutions based on:

* The physical size of the panel in the world
* The typical viewing distance
* The complexity of your UI content
* The number of panels in your world

### Multiple panels

When using multiple NoesisUI panels:

* Limit the number of simultaneously visible panels
* Use appropriate raycast and focus prompt distances
* Consider using lower resolutions for distant or less important panels
* Disable panels that are not currently needed

### Spatial vs Screen Overlay

Choose the appropriate display mode based on your use case:

* **Spatial Default** is better for world-integrated UI that multiple players may see
* **Screen Overlay** is better for player-specific information and HUDs
* Screen overlays typically have lower performance impact than spatial panels