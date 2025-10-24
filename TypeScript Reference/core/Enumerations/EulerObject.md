# EulerOrder Enum

Defines the orientation of the x, y, z axis in space.

## Signature

```typescript
export declare enum EulerOrder
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| XYZ | "XYZ" | The orientation is XYZ. |
| XZY | "XZY" | The orientation is XZY. |
| YXZ | "YXZ" | The orientation is YXZ. |
| YZX | "YZX" | The orientation is YZX. |
| ZXY | "ZXY" | The orientation is ZXY. |
| ZYX | "ZYX" | The orientation is ZYX. |

## Examples

### Using Different Euler Orders

```typescript
// Create Euler rotations with different orders
const eulerXYZ = new Euler(45, 30, 60, EulerOrder.XYZ);
const eulerYXZ = new Euler(45, 30, 60, EulerOrder.YXZ);
const eulerZXY = new Euler(45, 30, 60, EulerOrder.ZXY);

// Convert between different orders
function convertEulerOrder(euler: Euler, newOrder: EulerOrder): Euler {
    // Convert to quaternion and back with new order
    const quat = euler.toQuaternion();
    return quat.toEuler(newOrder);
}

// Apply rotation with specific order
function applyRotationWithOrder(entity: Entity, x: number, y: number, z: number, order: EulerOrder) {
    const euler = new Euler(x, y, z, order);
    const quaternion = euler.toQuaternion();
    entity.setRotation(quaternion);
}

// Common rotation orders for different use cases
function setEntityRotation(entity: Entity, pitch: number, yaw: number, roll: number) {
    // YXZ is common for character/camera rotations
    const rotation = new Euler(pitch, yaw, roll, EulerOrder.YXZ);
    entity.setRotation(rotation.toQuaternion());
}
```