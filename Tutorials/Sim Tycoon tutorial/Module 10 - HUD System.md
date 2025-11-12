Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/sim-tycoon-tutorial/module-10-hud-system

Learn

# Module 10 - HUD System

The HUD (Heads-Up Display) system provides real-time visual feedback to players about their current state, resources, tools, and progress. It creates an engaging and informative user interface that keeps players informed about their game status.

## System components

### HUD.ts

The HUD script manages the visual interface elements that overlay the player’s view. It displays critical information and provides feedback for player actions.

Key features:

* **Resource Display**: Real-time inventory and capacity information
* **Currency Tracking**: Current currency amounts and conversion rates
* **Tool Status**: Current tool information, durability, and upgrade options
* **Progress Indicators**: Mining progress, extraction status, and achievements
* **Interactive Elements**: Buttons and controls for player actions

### HUD properties

The HUD system tracks and displays:

* **resourceCounters**: Current amounts of wood, stone, crystal, and other resources
* **currencyDisplays**: Green, blue, purple, and red currency balances
* **toolInformation**: Current tool tier, durability, and stats
* **capacityIndicators**: Current inventory usage vs. maximum capacity
* **progressBars**: Mining progress, extraction timers, and other activities
* **notifications**: Achievement unlocks, upgrade availability, and system messages

## Display elements

### Resource counters

The HUD shows current resource inventory:

* **Wood Counter**: Number of wood resources in inventory
* **Stone Counter**: Current stone resource count
* **Crystal Counter**: Crystal resources available
* **Capacity Bar**: Visual representation of inventory fullness

### Currency displays

Real-time currency tracking:

* **Green Currency**: Basic currency from wood conversion
* **Blue Currency**: Intermediate currency from stone conversion
* **Purple Currency**: Advanced currency from crystal conversion
* **Red Currency**: Premium currency from rare resource conversion

### Tool information panel

Current tool status display:

* **Tool Name**: Currently equipped tool identification
* **Tool Tier**: Current upgrade level and progression
* **Durability Bar**: Tool health and usage remaining
* **Efficiency Stats**: Tool performance metrics

### Progress indicators

Activity feedback systems:

* **Mining Progress**: Real-time mining action progress
* **Extraction Timer**: Countdown for resource extraction completion
* **Respawn Timers**: When resource nodes will become available again
* **Upgrade Progress**: Progress toward next tool tier

## Interactive elements

### Action buttons

Touch-friendly controls for mobile devices:

* **Mine Button**: Primary action for resource extraction
* **Store Access**: Quick access to store interface
* **Tool Management**: Equipment and upgrade controls
* **Menu Navigation**: Settings and world navigation

### Information panels

Expandable information displays:

* **Tool Comparison**: Stats comparison for upgrade decisions
* **Resource Values**: Current conversion rates and market information
* **Achievement Progress**: Goal tracking and milestone indicators
* **Help System**: Contextual tips and tutorials

## Integration with other systems

### SimPlayer integration

* HUD receives real-time updates from SimPlayer state changes.
* Tool equipment changes immediately update HUD displays
* Resource collection automatically updates counters
* Currency changes reflect instantly in displays

### Resource system integration

* Mining actions trigger progress bar updates
* Resource collection updates inventory displays
* Capacity warnings when approaching limits
* Node respawn timers from ResourceNode system

### Store system integration

* Purchase confirmations and feedback
* Currency deduction notifications
* Tool upgrade previews and comparisons
* Availability notifications for new items

## Mobile optimization

### Touch-friendly design

The HUD is specifically designed for mobile devices:

* **Large Buttons**: Easy to tap with fingers
* **Clear Spacing**: Prevents accidental touches
* **High Contrast**: Readable in various lighting conditions
* **Responsive Layout**: Adapts to different screen sizes

### Performance optimization

Mobile-specific optimizations:

* **Efficient Updates**: Minimal redraw operations
* **Battery Friendly**: Optimized refresh rates
* **Memory Conscious**: Lightweight display elements
* **Network Efficient**: Minimal data usage for updates

## Customization guide

### Modifying display elements

- Locate the HUD.ts script.
- Find the display component you want to modify.
- Adjust properties like:
  * Position and size of UI elements
  * Colors and visual styling
  * Update frequency and triggers
  * Animation effects and transitions

### Adding new displays

- Define the new display element in HUD.ts.
- Create update functions for the new element.
- Integrate with relevant game systems for data.
- Add visual styling and positioning.
- Test on mobile devices for usability.

### Creating custom notifications

- Design notification system architecture.
- Implement trigger conditions for notifications.
- Create visual and audio feedback systems.
- Add persistence for important notifications.
- Integrate with achievement and progress systems.

## Visual design guidelines

### Consistency principles

* **Color Scheme**: Consistent color coding throughout the interface
* **Typography**: Readable fonts and appropriate sizing
* **Spacing**: Uniform spacing and alignment
* **Animation**: Smooth transitions and feedback animations

### Accessibility considerations

* **Color Blind Support**: Alternative indicators beyond color
* **Font Size**: Appropriate sizing for mobile viewing
* **Contrast Ratios**: High contrast for visibility
* **Clear Icons**: Universally understandable symbols

## Performance monitoring

### Update optimization

The HUD system optimizes performance through:

* **Selective Updates**: Only refresh changed elements
* **Batched Operations**: Group multiple updates together
* **Frame Rate Management**: Maintain smooth 60fps performance
* **Memory Pooling**: Reuse UI elements efficiently

### Mobile performance

Specific mobile optimizations:

* **GPU Acceleration**: Hardware-accelerated rendering where possible
* **Texture Management**: Efficient sprite and texture usage
* **Draw Call Optimization**: Minimize rendering operations
* **Battery Impact**: Minimize CPU usage for longer play sessions

## Testing and validation

### Cross-device testing

* **Screen Sizes**: Test on various mobile device screen sizes
* **Resolution Scaling**: Ensure proper scaling across different resolutions
* **Performance Testing**: Validate smooth operation on lower-end devices
* **Touch Responsiveness**: Verify all interactive elements work properly

### User experience validation

* **Readability Testing**: Ensure all text is clearly readable
* **Touch Target Sizing**: Verify buttons are appropriately sized
* **Information Hierarchy**: Check that important information is prominently displayed
* **Flow Testing**: Validate smooth user interaction patterns

## Best practices

### Design principles

* **Clarity First**: Information should be immediately understandable
* **Minimal Clutter**: Only show essential information by default
* **Contextual Relevance**: Display information relevant to the current activity.
* **Consistent Feedback**: Provide clear feedback for all player actions

### Technical implementation

* **Modular Design**: Create reusable UI components
* **Event-Driven Updates**: Use efficient event systems for updates
* **Error Handling**: Graceful degradation when systems fail
* **Documentation**: Clear documentation for future modifications

### User experience

* **Progressive Disclosure**: Advanced information available but not overwhelming
* **Customization Options**: Allow players to adjust display preferences
* **Learning Curve**: Design for both new and experienced players
* **Accessibility**: Ensure the interface works for all players