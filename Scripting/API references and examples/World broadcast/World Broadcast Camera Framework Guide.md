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

![Static Zone](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/580475573_862854959585790_4049440863384266801_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=hHooAdEBgl4Q7kNvwF-ps5W&_nc_oc=AdlRnREw5yI8JnEttfcxmHbzUwCp1xoinI0NDSDj3ku9XzF36_X2K3xckv5mOKe7l2vIYwt89HqNzjOm15-B3HCE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=xFM1qLek-xzv0Q-JCKDfVQ&oh=00_AfmaV2pvnH8etVBGFDlCGPVj1MYRt_aE_vNAqx9gpfr9Kg&oe=6955725B)

### Camera Trigger Preset

This preset includes:

* A fully connected Camera Controller
* The Camera Registry
* A single Camera Trigger Zone with capabilities connected as child entities

To add more camera zones, duplicate the Camera Trigger Zone entity. Ensure each zone has a unique id, or leave the `zoneId` field empty to generate a unique id automatically.

![Trigger Zone](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/581160962_862854956252457_5624530874400437713_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=lr6ZlzaOxmoQ7kNvwHzsVTv&_nc_oc=Adnf8M2V8CkYxV2mB1EbZ99aDZLeqyJmauiCdrJnhApU1oh-_grlX8DghjIxEjzWkMIziG1PWWx1Hk4iVKOyuEKC&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=xFM1qLek-xzv0Q-JCKDfVQ&oh=00_AflU2B2BR-3ATSqYCWPwBWFahfVNnLUDPui3k3dQ5zUJ1Q&oe=69557A0B)

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