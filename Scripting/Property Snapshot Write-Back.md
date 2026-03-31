# Property Snapshot Write-Back

[TypeScript Components, Properties, and Variables](Get%20started%20with%20TypeScript/TypeScript%20Components,%20Properties,%20and%20Variables.md#entity) teaches entity reads and writes through [ReadableHorizonProperty.get()](../Reference/core/Interfaces/ReadableHorizonProperty.md#get) and [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values). That pattern matters most for writable reference-valued properties such as [Entity.position](../Reference/core/Classes/Entity.md#position), [Entity.rotation](../Reference/core/Classes/Entity.md#rotation), [Entity.scale](../Reference/core/Classes/Entity.md#scale), and [Entity.color](../Reference/core/Classes/Entity.md#color), because mutating the object returned by [ReadableHorizonProperty.get()](../Reference/core/Interfaces/ReadableHorizonProperty.md#get) does not update the world until the changed value is written back with [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values).

## Writable property values are snapshots, not live views

The current [Entity.position](../Reference/core/Classes/Entity.md#position), [Entity.rotation](../Reference/core/Classes/Entity.md#rotation), [Entity.scale](../Reference/core/Classes/Entity.md#scale), and [Entity.color](../Reference/core/Classes/Entity.md#color) signatures all expose property wrappers rather than direct fields on the entity, and the reference docs for [ReadableHorizonProperty.get()](../Reference/core/Interfaces/ReadableHorizonProperty.md#get) and [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values) say reads and writes must flow through those methods. The current [horizon_core.d.ts](../../hw-project/types/horizon_core.d.ts) JSDoc goes further and makes the behavior explicit: mutating the state snapshot returned by [ReadableHorizonProperty.get()](../Reference/core/Interfaces/ReadableHorizonProperty.md#get) does not change the underlying value, and calling [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values) is the step that actually updates the property.

That means this pattern is incomplete even though it looks reasonable in ordinary TypeScript:

```ts
const pos = this.entity.position.get();
pos.x += 1;
// Missing: this.entity.position.set(pos)
```

After the assignment, only the local [Vec3](../Reference/core/Classes/Vec3.md) instance stored in `pos` has changed. The world-facing [Entity.position](../Reference/core/Classes/Entity.md#position) value is still unchanged until [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values) is called on the same property.

## The safe pattern is read, mutate, then write back

The most reliable mental model is a three-step cycle: read the property with [ReadableHorizonProperty.get()](../Reference/core/Interfaces/ReadableHorizonProperty.md#get), change the local value, then write the final value back with [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values). The official [Vec3](../Reference/core/Classes/Vec3.md) example already shows world updates being applied through [Entity.position](../Reference/core/Classes/Entity.md#position) by calling [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values) with a new [Vec3](../Reference/core/Classes/Vec3.md), which is the shortest form of that pattern when you do not need the previous value.

```ts
const pos = this.entity.position.get();
pos.x += 1;
pos.y += 2;
this.entity.position.set(pos);
```

When constructing a fresh value is easier than mutating an existing one, writing a new [Vec3](../Reference/core/Classes/Vec3.md), [Quaternion](../Reference/core/Classes/Quaternion.md), or [Color](../Reference/core/Classes/Color.md) directly into [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values) is usually clearer and avoids any doubt about whether a write-back occurred.

## Position and scale updates use the same write-back rule

[Entity.position](../Reference/core/Classes/Entity.md#position) and [Entity.scale](../Reference/core/Classes/Entity.md#scale) are published as [HorizonProperty](../Reference/core/Classes/HorizonProperty.md) wrappers over [Vec3](../Reference/core/Classes/Vec3.md) values. Because [Vec3](../Reference/core/Classes/Vec3.md) exposes mutable component fields, it is easy to mistake a retrieved value for a live handle into the entity. The write-back rule is the same in both cases: change the local [Vec3](../Reference/core/Classes/Vec3.md) however you want, then commit the final vector with [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values).

```ts
const scale = this.entity.scale.get();
scale.y *= 2;
this.entity.scale.set(scale);
```

Inline mutations on a temporary result such as `this.entity.position.get().x += 1` are especially error-prone because the changed [Vec3](../Reference/core/Classes/Vec3.md) has no stable variable name and is easy to discard mentally. The runtime effect is still the same: the temporary snapshot changes, then immediately becomes unreachable, and [Entity.position](../Reference/core/Classes/Entity.md#position) never receives a corresponding [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values) call.

## Rotation updates need the same final set

[Entity.rotation](../Reference/core/Classes/Entity.md#rotation) holds a [Quaternion](../Reference/core/Classes/Quaternion.md), not a [Vec3](../Reference/core/Classes/Vec3.md), but the write-back rule does not change. Any edit to a retrieved [Quaternion](../Reference/core/Classes/Quaternion.md) stays local until [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values) publishes it back to [Entity.rotation](../Reference/core/Classes/Entity.md#rotation).

```ts
const rotation = this.entity.rotation.get();
rotation.y += 0.2;
this.entity.rotation.set(rotation);
```

If the new orientation is easier to express by construction than mutation, creating a new [Quaternion](../Reference/core/Classes/Quaternion.md) and writing it directly is often safer than partially editing a snapshot.

## Color updates follow the same snapshot model

[Entity.color](../Reference/core/Classes/Entity.md#color) uses a [Color](../Reference/core/Classes/Color.md) value behind a [HorizonProperty](../Reference/core/Classes/HorizonProperty.md) wrapper, so it has the same read-modify-write requirement as transform properties. Changing component fields on a local [Color](../Reference/core/Classes/Color.md) object does not affect the entity until [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values) is called on [Entity.color](../Reference/core/Classes/Entity.md#color).

```ts
const tint = this.entity.color.get();
tint.r = 1;
tint.g = 0.25;
tint.b = 0.25;
this.entity.color.set(tint);
```

## Why the wrapper names can be confusing

The published [HorizonProperty](../Reference/core/Classes/HorizonProperty.md#remarks) remarks say that reference types such as [Vec3](../Reference/core/Classes/Vec3.md), [Quaternion](../Reference/core/Classes/Quaternion.md), and [Color](../Reference/core/Classes/Color.md) should use [HorizonReferenceProperty](../Reference/core/Classes/HorizonReferenceProperty.md), and the published [HorizonReferenceProperty](../Reference/core/Classes/HorizonReferenceProperty.md#remarks) remarks describe reads as returning a clone that can be mutated without mutating the cached value. At the same time, the generated [Entity.position](../Reference/core/Classes/Entity.md#position), [Entity.rotation](../Reference/core/Classes/Entity.md#rotation), [Entity.scale](../Reference/core/Classes/Entity.md#scale), and [Entity.color](../Reference/core/Classes/Entity.md#color) signatures still show [HorizonProperty](../Reference/core/Classes/HorizonProperty.md) rather than [HorizonReferenceProperty](../Reference/core/Classes/HorizonReferenceProperty.md).

The safest interpretation is to trust the shared behavior rather than the wrapper name alone. Both the official property docs and the current [horizon_core.d.ts](../../hw-project/types/horizon_core.d.ts) declarations agree that reading gives you a snapshot and writing happens through [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values). In practice, that means treating writable reference-valued properties as read-modify-write APIs regardless of whether the current signature is rendered as [HorizonProperty](../Reference/core/Classes/HorizonProperty.md) or [HorizonReferenceProperty](../Reference/core/Classes/HorizonReferenceProperty.md).

## Read-only snapshots are an even stronger no-op

The contrast with read-only properties is useful. [Entity.forward](../Reference/core/Classes/Entity.md#forward) and [Entity.children](../Reference/core/Classes/Entity.md#children) are published as [ReadableHorizonProperty](../Reference/core/Interfaces/ReadableHorizonProperty.md) values, so they expose [ReadableHorizonProperty.get()](../Reference/core/Interfaces/ReadableHorizonProperty.md#get) but not [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values). If you mutate the snapshot from one of those properties, there is not even a corresponding write-back API on that same property. Writable properties such as [Entity.position](../Reference/core/Classes/Entity.md#position) are safer only because they do provide a valid commit step.

## Practical habits that prevent silent no-ops

- After calling [ReadableHorizonProperty.get()](../Reference/core/Interfaces/ReadableHorizonProperty.md#get) on [Entity.position](../Reference/core/Classes/Entity.md#position), [Entity.rotation](../Reference/core/Classes/Entity.md#rotation), [Entity.scale](../Reference/core/Classes/Entity.md#scale), or [Entity.color](../Reference/core/Classes/Entity.md#color), plan the matching [WritableHorizonProperty.set()](../Reference/core/Interfaces/WritableHorizonProperty.md#setvalue-values) before making field edits.
- Prefer constructing a new [Vec3](../Reference/core/Classes/Vec3.md), [Quaternion](../Reference/core/Classes/Quaternion.md), or [Color](../Reference/core/Classes/Color.md) when that is clearer than mutating an old snapshot.
- Treat chained expressions like [Entity.position](../Reference/core/Classes/Entity.md#position) → [ReadableHorizonProperty.get()](../Reference/core/Interfaces/ReadableHorizonProperty.md#get) → field assignment as suspicious by default, because they hide the missing write-back step.
- Treat [ReadableHorizonProperty](../Reference/core/Interfaces/ReadableHorizonProperty.md)-only properties such as [Entity.forward](../Reference/core/Classes/Entity.md#forward) and [Entity.children](../Reference/core/Classes/Entity.md#children) as snapshots for inspection, not mutation targets.