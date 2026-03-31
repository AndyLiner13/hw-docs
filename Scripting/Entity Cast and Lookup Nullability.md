# Entity Cast and Lookup Nullability

[World.findEntity(name)](../Reference/core/Classes/World.md#findentityname) and [AssetPoolGizmo.getPooledEntity()](../Reference/core/Classes/AssetPoolGizmo.md#getpooledentity) are straightforward nullability APIs in the current Horizon Worlds documentation. Both references explicitly return `Entity | undefined`, and the [World.findEntity(name)](../Reference/core/Classes/World.md#findentityname) page also states that duplicate names cause the method to log an error and return `undefined`. In practical terms, those two APIs have a stable, documented requirement: treat the result as optional until you have checked it.

[Entity.as(entityClass)](../Reference/core/Classes/Entity.md#asentityclass) is not as clear. The [Horizon TypeScript V2 Changes](API references and examples/Horizon TypeScript V2 Changes.md) guide says that [Entity.as(entityClass)](../Reference/core/Classes/Entity.md#asentityclass) "now returns a nullable type," but the current [Entity reference](../Reference/core/Classes/Entity.md#asentityclass) still shows a non-nullable signature that returns `T`. That means the migration guide and the generated API reference do not currently agree about whether a failed cast should be modeled in the type system.

This contradiction matters because tooling can reason about [World.findEntity(name)](../Reference/core/Classes/World.md#findentityname) and [AssetPoolGizmo.getPooledEntity()](../Reference/core/Classes/AssetPoolGizmo.md#getpooledentity) from their present signatures alone, but it cannot infer the same thing from [Entity.as(entityClass)](../Reference/core/Classes/Entity.md#asentityclass) without choosing which official source to trust. If a rule or helper is built from the current generated reference surface, [Entity.as(entityClass)](../Reference/core/Classes/Entity.md#asentityclass) looks non-nullable. If it is built from the migration guidance, the same API should be guarded like a nullable lookup.

## Lookups that are clearly nullable today

[World.findEntity(name)](../Reference/core/Classes/World.md#findentityname) is the safest example of a documented nullable lookup because its page describes both failure modes and performance guidance. It returns `undefined` when no entity is found, and it also returns `undefined` when more than one entity shares the same name. The same page recommends caching the result outside update loops, which makes a guard-and-cache pattern the documented baseline for name lookups.

[AssetPoolGizmo.getPooledEntity()](../Reference/core/Classes/AssetPoolGizmo.md#getpooledentity) is similarly explicit. The reference states that the method returns `undefined` when the pool has no remaining entity available. That means code that immediately dereferences the result is relying on an unstated assumption about pool capacity rather than on the API contract.

```ts
const door = this.world.findEntity('Door');
if (!door) {
  return;
}

const pooledEffect = this.props.effectPool?.getPooledEntity();
if (!pooledEffect) {
  return;
}

door.visible.set(false);
pooledEffect.visible.set(true);
```

## The current `Entity.as()` mismatch

The [Horizon TypeScript V2 Changes](API references and examples/Horizon TypeScript V2 Changes.md) page treats [Entity.as(entityClass)](../Reference/core/Classes/Entity.md#asentityclass) as part of the broader v2 nullability shift. The current [Entity reference](../Reference/core/Classes/Entity.md#asentityclass), however, still publishes a non-nullable `T` return type for [Entity.as(entityClass)](../Reference/core/Classes/Entity.md#asentityclass). Those two statements cannot both describe the same present-day type surface.

The practical consequence is that a null-check after [Entity.as(entityClass)](../Reference/core/Classes/Entity.md#asentityclass) is a defensive runtime pattern, not a type-driven requirement enforced by the current reference signature. If you are writing editor tooling, diagnostics, or wrapper helpers, treat this as a documentation conflict that needs an explicit product decision rather than assuming the current reference page and the migration guide already agree.

```ts
const maybePose = this.entity.as(AvatarPoseGizmo);

// This guard matches the migration guide's nullability model,
// even though the current generated reference signature is non-nullable.
if (!maybePose) {
  return;
}

maybePose.exitAllowed.set(false);
```

## Safe guidance when the sources disagree

When you need behavior that is unquestionably aligned with the current published reference surface, prefer APIs whose nullability is explicit in both prose and signature, such as [World.findEntity(name)](../Reference/core/Classes/World.md#findentityname) and [AssetPoolGizmo.getPooledEntity()](../Reference/core/Classes/AssetPoolGizmo.md#getpooledentity). When you need to rely on [Entity.as(entityClass)](../Reference/core/Classes/Entity.md#asentityclass), document which official source you are following and keep that choice consistent across diagnostics, helper functions, and code review guidance.

That distinction is especially important when a project mixes runtime entity lookups, pooled entities, and ownership-transfer code. The ownership-transfer APIs [Component.transferOwnership()](../Reference/core/Abstract%20Classes/Component.md#transferownership_oldowner-_newowner) and [Component.receiveOwnership()](../Reference/core/Abstract%20Classes/Component.md#receiveownership_serializablestate-_oldowner-_newowner) use [SerializableState](../Reference/core/Type%20Aliases/SerializableState.md), which is strongly documented and type-defined. By contrast, the nullability story for [Entity.as(entityClass)](../Reference/core/Classes/Entity.md#asentityclass) still requires human interpretation because the official migration guide and the generated reference page diverge.