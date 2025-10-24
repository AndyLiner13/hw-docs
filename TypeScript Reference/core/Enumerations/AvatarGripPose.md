# AvatarGripPose Enum

The type of grip animation assigned to an avatar when holding an object.

## Signature

```typescript
export declare enum AvatarGripPose
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| CarryHeavy | "CarryHeavy" | Generic grip for carrying heavier objects |
| CarryLight | "CarryLight" | Generic grip for carrying lighter objects |
| Default | "Default" | The Default grip type. |
| Driving | "Driving" | Generic grip for driving objects. |
| Fishing | "Fishing" | Held in a fishing grip. |
| Pistol | "Pistol" | Held in a pistol grip. |
| Rifle | "Rifle" | Held in a rifle grip. |
| RPG | "RPG" | Held in an RPG grip. |
| Shield | "Shield" | Held in a shield grip. |
| Shotgun | "Shotgun" | Held in a shotgun grip. |
| Sword | "Sword" | Held in a sword grip. |
| Torch | "Torch" | Held in a torch grip. |

## Examples

### Using Different Avatar Grip Poses

```typescript
// Set grip poses for different object types
function setObjectGripPose(grabbableObject: GrabbableObject, objectType: string) {
    switch (objectType) {
        case "weapon_pistol":
            grabbableObject.setGripPose(AvatarGripPose.Pistol);
            break;
        case "weapon_rifle":
            grabbableObject.setGripPose(AvatarGripPose.Rifle);
            break;
        case "weapon_sword":
            grabbableObject.setGripPose(AvatarGripPose.Sword);
            break;
        case "tool_torch":
            grabbableObject.setGripPose(AvatarGripPose.Torch);
            break;
        case "heavy_item":
            grabbableObject.setGripPose(AvatarGripPose.CarryHeavy);
            break;
        case "light_item":
            grabbableObject.setGripPose(AvatarGripPose.CarryLight);
            break;
        default:
            grabbableObject.setGripPose(AvatarGripPose.Default);
    }
}

// Dynamic grip pose based on object weight
function setWeightBasedGripPose(object: GrabbableObject, weight: number) {
    if (weight > 10) {
        object.setGripPose(AvatarGripPose.CarryHeavy);
    } else if (weight > 2) {
        object.setGripPose(AvatarGripPose.CarryLight);
    } else {
        object.setGripPose(AvatarGripPose.Default);
    }
}
```