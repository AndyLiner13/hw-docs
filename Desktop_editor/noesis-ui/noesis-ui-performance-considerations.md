# Noesis UI Performance Considerations

NoesisUI is designed to enable creators to build more compelling, creative, and performant 2D UI panels. It provides significantly improved rendering performance for 2D UI components compared to previous solutions. When working in the desktop editor, understanding specific configurations and trade-offs is essential for maintaining optimal performance in your world.

## Performance Considerations in the Horizon Editor

When configuring your NoesisUI Gizmo in the Horizon Editor, several properties directly impact the performance and resource consumption of your panel:

### Resolution and Memory Usage (Width & Height)

The Width and Height settings in the NoesisUI Gizmo properties determine the dimensions of the UI rendering texture in pixels. This resolution dictates how sharp your UI appears, but it also directly affects memory usage and rendering performance.

• A 1024 x 1024 panel uses approximately 4 MB of texture memory.
• A 2048 x 2048 panel uses approximately 16 MB of texture memory.
• Using multiple high-resolution panels simultaneously can significantly impact performance.

For optimal performance, creators should adjust panel resolutions based on:
• The number of panels visible in the world.
• The complexity of the UI content.
• The physical size of the panel in the world and the typical viewing distance.

You should also generally match the aspect ratio of your XAML design and, when possible, use power-of-two dimensions (like 512, 1024, or 2048).

### Managing Multiple Panels

When using more than one NoesisUI panel in your world, performance can be heavily affected. Strategies to mitigate this impact include:
• Limiting the number of panels visible simultaneously.
• Disabling panels that are not actively needed.
• Considering lower resolutions for panels that are distant or less important.

### Display Mode and Interaction Costs

The chosen Display Mode influences performance and resource distribution:

| Display Mode | Use Case | Performance Notes |
|--------------|----------|-------------------|
| Spatial Default | Used for UI integrated into the 3D world (e.g., control panels). | Better for UI that multiple players might see. |
| Screen Overlay | Used for Heads-Up Displays (HUDs) or player-specific menus (e.g., health bars). | Typically has a lower performance impact than Spatial Default panels. |

For panels set to Spatial Default mode, raycasting needs careful management to prevent negative performance impact:
• The default Raycast Distance is 3 meters.
• You should avoid setting the raycast distance greater than 10 meters, as a larger distance across multiple UI panels can negatively impact performance.

For both spatial and screen overlay UIs on web and mobile platforms, the Focus Prompt Distance (when applicable) is also restricted to a range between 0 and 10 meters due to performance considerations.