# SpringOptions type

The spring physics settings for an entity. Spring physics moves an entity as if it were attached to a spring.

## Signature

```typescript
export declare type SpringOptions = {
    stiffness: number;
    damping: number;
    axisIndependent: boolean;
};
```

## Remarks

For more information, see [PhysicalEntity.springPushTowardPosition()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_physicalentity#springpushtowardposition) and [PhysicalEntity.springSpinTowardRotation()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_physicalentity#springspintowardrotation).

- `stiffness`: The stiffness of the spring, which controls the amount of force applied to the object.
- `damping`: The damping ratio of the string, which reduces oscillation.
- `axisIndependent`: true if the object's motion is parallel to the push direction; false otherwise.