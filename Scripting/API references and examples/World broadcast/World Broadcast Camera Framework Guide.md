Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/world-broadcast/camera-framework-guide

# World Broadcast Camera Framework Guide

## System Setup

### Step 1: Add the Registry Service

Each world using World Broadcast requires exactly one `CameraZoneRegistryService` component.

- Add the `Camera Zone Registry` object from “World Broadcast Camera System - Prefabs”
- The component will auto-initialize as a singleton and requires no additional configuration

### Step 2: Add the Camera Controller

Each world using World Broadcast requires exactly one `CameraController` component. This controller orchestrates the entire camera system.

- Add the `Camera Controller` object from “World Broadcast Camera System - Prefabs”
- Configure the required props:
  * `localBroadcastCamera`: Add the `Local - World Broadcast Camera Object` object from “World Broadcast Camera System - Prefabs”
  * `broadcastCameraUI`: Optional entity for UI overlay

## Component Setup

### Setting Up a Static Camera Zone

- **Create the zone entity**:
  * Add the `Static Camera Zone` object from “World Broadcast Camera System - Prefabs”
- **Create capability entities**: Find these as the “...Capability” objects in “World Broadcast Camera System - Prefabs”.

```
Position Entity:
└── CameraPositionCapability component

Activation Entity:
└── ActivationControlCapability component
```

- **Wire the dependencies**:
  * Set `positionCapabilityEntity` to your position capability object
  * Set `activationCapabilityEntity` to your activation capability object
  * Configure `zoneId` to make each zone readable and easily referenced when using the Camera Controller API
- **Configure positioning**:
  * Option A: Set `transformEntity` to a dedicated camera “transform” entity - you can use an `Empty Object` by creating one with `Build > Empty Object`
  * Option B: Enable `useSelfTransform` to use the zone entity’s position

### Setting Up a Trigger Camera Zone

- **Create the zone entity**:
  * Add the `Camera Trigger Zone` object from “World Broadcast Camera System - Prefabs”
- **Create capability entities**: Find these as the “...Capability” objects in “World Broadcast Camera System - Prefabs”. The Priority Calculator is also in this Asset Folder.

```
Position Entity:
└── CameraPositionCapability component

Priority Entity:
└── PriorityCalculationCapability component
    └── PriorityCalculatorComponent component (It doesn't have to be a child)

Activation Entity:
└── ActivationControlCapability component
```

- **Wire the dependencies**:
  * Set `positionCapabilityEntity` to your position capability object
  * Set `priorityCapabilityEntity` to your priority capability object
  * Set `activationCapabilityEntity` to your activation capability object
- **Configure behavior**:
  * Set `autoActivateOnPlayers` to enable automatic activation
  * Set `minPlayersForActivation` to define the activation threshold
  * Configure `zoneId` for external control

## Configuration Examples

### Simple Static Camera Zone

```
// Zone Entity Configuration
StaticCameraZone:
  - zoneId: "scenic_view_1"
  - zoneType: "static"
  - positionCapabilityEntity: [Position Entity]
  - activationCapabilityEntity: [Activation Entity]

// Position Entity Configuration
CameraPositionCapability:
  - useSelfTransform: true

// Activation Entity Configuration
ActivationControlCapability:
  - isActive: true
  - canBeControlledExternally: true
```

### Player-Responsive Trigger Zone

```
// Zone Entity Configuration
CameraTriggerZone:
  - zoneId: "playground_zone"
  - zoneType: "trigger"
  - autoActivateOnPlayers: true
  - minPlayersForActivation: 1
  - positionCapabilityEntity: [Position Entity]
  - priorityCapabilityEntity: [Priority Entity]
  - activationCapabilityEntity: [Activation Entity]

// Priority Entity Configuration
PriorityCalculationCapability:
  - priorityCalculatorEntity: [Calculator Entity]
  - fallbackPriority: 1
  - minimumPriority: 0

// Calculator Entity Configuration (Optional)
PriorityCalculatorComponent:
  - basePlayerPriority: 1
  - mundanePetPriority: 10
  - fantasticalPetPriority: 100
```

### Custom Positioned Camera

```
// Create a dedicated camera positioning entity
Camera Position Entity:
  - Position: (10, 5, 10)
  - Rotation: (0, 45, 0)

// Zone Configuration
CameraPositionCapability:
  - transformEntity: [Camera Position Entity]
  - useSelfTransform: false
```

## Presets

The presets will be in the folder path “World Broadcast System - Prefabs > Presets”.

### Static Camera Preset

This preset includes:

* A fully connected Camera Controller
* The Camera Registry
* A single Static Camera Zone with capabilities connected as child entities

To add more camera zones, duplicate the Static Camera Zone entity. Ensure each zone has a unique id, or leave the `zoneId` field empty to generate a unique id automatically.

<details>
<summary>Static Zone</summary>

<p></p>

[Static Zone](../../../image_data/a8bc6ec7b186b371f0e581df2c5b5e1070f365ea5189525853d003912916e50b.md)

### Overview
This image depicts a hierarchical menu or tree view interface, likely part of a software application or configuration tool. The layout is structured with nested items under categories, indicated by expandable/collapsible nodes.

### Key Elements
- **Static Camera Zone**
  - **Visual description**: A node with a square icon and a plus sign indicating expandability.
  - **Location**: Top-left corner of the image.
  - **Contents**: Contains two child nodes: "Activation Control Capability" and "Camera Position Capability".
  - **Visual styling**: Dark gray background with white text and a light gray border.

- **Camera Controller**
  - **Visual description**: Another node with a square icon and a plus sign.
  - **Location**: Below the "Static Camera Zone" node.
  - **Contents**: Contains two child nodes: "Default Camera" and "Local - World Broadcast Camera Object".
  - **Visual styling**: Similar to the first node, with a dark gray background, white text, and a light gray border.

- **Camera Zone Registry**
  - **Visual description**: A node with a square icon and a plus sign.
  - **Location**: Below the "Camera Controller" node.
  - **Contents**: Not expanded, showing only the icon and label.
  - **Visual styling**: Same as the previous nodes.

### Visual Flow / Relationships
- **Most prominent visually**: The expandable nodes ("Static Camera Zone" and "Camera Controller") are the most prominent due to their larger size and the plus signs indicating expandability.
- **Arrows/lines/connectors**: There are no explicit arrows or lines connecting the nodes; the indentation suggests a hierarchical relationship.
- **Spatial relationships**: Nodes are arranged vertically, with each node indented beneath its parent node. The expandable nodes are slightly larger than the non-expandable ones.

</details>

<p></p>



### Camera Trigger Preset

This preset includes:

* A fully connected Camera Controller
* The Camera Registry
* A single Camera Trigger Zone with capabilities connected as child entities

To add more camera zones, duplicate the Camera Trigger Zone entity. Ensure each zone has a unique id, or leave the `zoneId` field empty to generate a unique id automatically.

<details>
<summary>Trigger Zone</summary>

<p></p>

[Trigger Zone](../../../image_data/487958a054abe376ffc4b7c1a4951c6850bf71b83c5600279f7db29265c83425.md)

### Overview
The image displays a section of a user interface (UI) that appears to be part of a software application or documentation. It shows a hierarchical list under two main categories: "Camera Trigger Zone" and "Camera Controller." The layout suggests a tree-like structure with expandable nodes.

### Key Elements
- **Camera Trigger Zone**
  - **Priority Calculation Capability**
    - **Visual description**: A checkbox icon next to the text.
    - **Location**: Below the "Camera Trigger Zone" heading.
    - **Contents**: `Priority Calculation Capability`.
    - **Visual styling**: Dark gray checkbox icon, white text, dark blue background.
  - **Activation Control Capability**
    - **Visual description**: A checkbox icon next to the text.
    - **Location**: Below the previous item.
    - **Contents**: `Activation Control Capability`.
    - **Visual styling**: Same as above.
  - **Camera Position Capability**
    - **Visual description**: A checkbox icon next to the text.
    - **Location**: Below the previous item.
    - **Contents**: `Camera Position Capability`.
    - **Visual styling**: Same as above.
- **Camera Controller**
  - **Default Camera**
    - **Visual description**: A checkbox icon next to the text.
    - **Location**: Below the "Camera Controller" heading.
    - **Contents**: `Default Camera`.
    - **Visual styling**: Same as above.
  - **Local - World Broadcast Camera Object**
    - **Visual description**: A checkbox icon next to the text.
    - **Location**: Below the previous item.
    - **Contents**: `Local - World Broadcast Camera Object`.
    - **Visual styling**: Same as above.
  - **Camera Zone Registry**
    - **Visual description**: A checkbox icon next to the text.
    - **Location**: Below the previous item.
    - **Contents**: `Camera Zone Registry`.
    - **Visual styling**: Same as above.

### Visual Flow / Relationships
- The most prominent visual elements are the checkboxes and their corresponding labels.
- There are no arrows or lines connecting elements, indicating a simple hierarchical relationship.
- Elements are arranged in a vertical list under their respective headings, with sub-elements indented beneath them.

</details>

<p></p>



## Troubleshooting

### Common Issues

**Issue**: “Registry service not initialized” error

* **Solution**: Ensure `CameraZoneRegistryService` component exists in your world

**Issue**: Camera zones not appearing in feed

* **Solution**: Check that zones are registering successfully in console logs
* **Debug**: Enable `debugMode: true` on zone components

**Issue**: Priority calculation not working

* **Solution**: Verify `PriorityCalculatorComponent` is properly connected
* **Check**: Ensure `priorityCalculatorEntity` prop is set correctly

**Issue**: Camera positioning errors

* **Solution**: Verify target entities have position/rotation components
* **Alternative**: Use `useSelfTransform: true` for simple positioning

**Issue**: Trigger zones not activating

* **Solution**: Check trigger volume configuration and collision layers
* **Verify**: Ensure `autoActivateOnPlayers` is enabled
* **Check**: Confirm `minPlayersForActivation` threshold is appropriate

**Issue**: External control not working

* **Solution**: Verify `zoneId` is set and unique across all zones
* **Check**: Ensure `canBeControlledExternally` is enabled on activation capability

### Debugging Tips

- **Enable Debug Mode**: Set `debugMode: true` on components for detailed logging
- **Check Console Logs**: Look for registration and validation messages
- **Verify Entity Wiring**: Ensure all capability entities are properly connected
- **Test Activation**: Manually activate/deactivate zones to test behavior
- **Monitor Registry**: Check that zones appear in the registry service logs
- **Validate Capabilities**: Ensure capability entities have the correct components attached

### Performance Issues

**Issue**: Camera switching is slow or laggy

* **Solution**: Limit the number of active trigger zones
* **Check**: Verify caching is working (look for cache hit messages in logs)

**Issue**: High CPU usage

* **Solution**: Reduce frequency of priority calculations
* **Alternative**: Use static zones for fixed monitoring points instead of trigger zones

**Issue**: Memory leaks

* **Solution**: Ensure zones properly unregister when destroyed
* **Check**: Monitor registry size in debug logs