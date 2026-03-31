# Projectile Launcher TypeScript Migration

[ProjectileLauncherGizmo.launchProjectile()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchprojectilespeed), [CodeBlockEvents.OnProjectileHitObject](../Reference/core/Variables/CodeBlockEvents.md), and [CodeBlockEvents.OnProjectileHitWorld](../Reference/core/Variables/CodeBlockEvents.md) still appear in some official learning content, but the current API reference marks those surfaces as obsolete and points new code toward [ProjectileLauncherGizmo.launch()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchoptions) and [CodeBlockEvents.OnProjectileHitEntity](../Reference/core/Variables/CodeBlockEvents.md). This page puts those sources side by side so search results surface the preferred modern API and the older examples together.

## Current preferred projectile APIs

The current [ProjectileLauncherGizmo](../Reference/core/Classes/ProjectileLauncherGizmo.md) reference keeps both launch methods in the public surface, but it explicitly labels [ProjectileLauncherGizmo.launchProjectile()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchprojectilespeed) as obsolete and directs callers to [ProjectileLauncherGizmo.launch()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchoptions) instead. The replacement method takes a [LaunchProjectileOptions](../Reference/core/Type%20Aliases/LaunchProjectileOptions.md) object, so even the simple “speed only” case now flows through the options shape rather than a positional numeric argument.

The same pattern appears in projectile collision events. The current [CodeBlockEvents](../Reference/core/Variables/CodeBlockEvents.md) reference marks [CodeBlockEvents.OnProjectileHitObject](../Reference/core/Variables/CodeBlockEvents.md) and [CodeBlockEvents.OnProjectileHitWorld](../Reference/core/Variables/CodeBlockEvents.md) as deprecated and tells creators to use [CodeBlockEvents.OnProjectileHitEntity](../Reference/core/Variables/CodeBlockEvents.md) instead. The [Release Notes](../Release%20Notes.md#quality-of-life-improvements-26) also describe [CodeBlockEvents.OnProjectileHitEntity](../Reference/core/Variables/CodeBlockEvents.md) as the newer event that covers the older object-hit and world-hit cases.

The broader projectile guidance has already moved in the same direction. The [Projectile launcher gizmo](../Gizmos/Projectile%20launcher%20gizmo.md#scripting) guide points creators to [ProjectileLauncherGizmo](../Reference/core/Classes/ProjectileLauncherGizmo.md), [LaunchProjectileOptions](../Reference/core/Type%20Aliases/LaunchProjectileOptions.md), and the common collision listeners [CodeBlockEvents.OnProjectileHitEntity](../Reference/core/Variables/CodeBlockEvents.md) and [CodeBlockEvents.OnProjectileHitPlayer](../Reference/core/Variables/CodeBlockEvents.md) when describing scripted projectile behavior.

## Why older official examples still show up

Some official tutorials and examples still demonstrate the older API shapes. The [Example scripts library](API%20references%20and%20examples/Example%20scripts%20library.md) still shows [ProjectileLauncherGizmo.launchProjectile()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchprojectilespeed) in its projectile-launch example. The [Developing for web and mobile players tutorial](../Tutorials/Feature%20samples/Developing%20for%20web%20and%20mobile%20players%20tutorial/Module%206%20-%20Room%20A%20The%20Magic%20Wand.md) still uses [ProjectileLauncherGizmo.launchProjectile()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchprojectilespeed) in its scripted firing flow.

The [Create your first world tutorial, part 2](../Tutorials/Getting%20started/Create%20your%20first%20world%20tutorial%2C%20part%202.md) is even more mixed: it explains [ProjectileLauncherGizmo.launchProjectile()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchprojectilespeed) in the narrative, then updates the actual firing code to [ProjectileLauncherGizmo.launch()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchoptions), and later still demonstrates [CodeBlockEvents.OnProjectileHitObject](../Reference/core/Variables/CodeBlockEvents.md) for scorekeeping. That makes the tutorial useful as historical context, but it is not a reliable guide to which projectile APIs are now preferred for fresh code.

## Launch migration pattern

When older code passes a single speed value to [ProjectileLauncherGizmo.launchProjectile()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchprojectilespeed), the modern equivalent is usually to call [ProjectileLauncherGizmo.launch()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchoptions) with a [LaunchProjectileOptions](../Reference/core/Type%20Aliases/LaunchProjectileOptions.md) object containing `speed`.

```typescript
// Older shape still shown in some tutorials
launcherGizmo?.launchProjectile(50);

// Current reference-preferred shape
launcherGizmo?.launch({ speed: 50 });
```

That object form matters beyond deprecation cleanup. [LaunchProjectileOptions](../Reference/core/Type%20Aliases/LaunchProjectileOptions.md) is the extensibility point for duration and override start-position or direction settings, so adopting [ProjectileLauncherGizmo.launch()](../Reference/core/Classes/ProjectileLauncherGizmo.md#launchoptions) keeps the call site aligned with the rest of the current projectile API surface.

## Event migration pattern

Older code often treats [CodeBlockEvents.OnProjectileHitObject](../Reference/core/Variables/CodeBlockEvents.md) and [CodeBlockEvents.OnProjectileHitWorld](../Reference/core/Variables/CodeBlockEvents.md) as separate concepts. The current reference surface instead centers [CodeBlockEvents.OnProjectileHitEntity](../Reference/core/Variables/CodeBlockEvents.md), and the [Release Notes](../Release%20Notes.md#quality-of-life-improvements-26) describe it as the event that now covers both earlier cases.

```typescript
// Older tutorial pattern
this.connectCodeBlockEvent(
  launcherGizmo,
  hz.CodeBlockEvents.OnProjectileHitObject,
  (objectHit: hz.Entity, position: hz.Vec3, normal: hz.Vec3) => {
    this.points += 1;
  },
);

// Modern reference-preferred pattern
this.connectCodeBlockEvent(
  launcherGizmo,
  hz.CodeBlockEvents.OnProjectileHitEntity,
  (entityHit: hz.Entity, position: hz.Vec3, normal: hz.Vec3, isStaticHit: boolean) => {
    this.points += 1;
  },
);
```

This migration is not always a pure rename. [CodeBlockEvents.OnProjectileHitEntity](../Reference/core/Variables/CodeBlockEvents.md) carries a different callback shape than [CodeBlockEvents.OnProjectileHitObject](../Reference/core/Variables/CodeBlockEvents.md) or [CodeBlockEvents.OnProjectileHitWorld](../Reference/core/Variables/CodeBlockEvents.md), so code that relied on the older event split may need to branch on the extra `isStaticHit` signal or otherwise adjust its handler logic after switching.

## Safe interpretation when docs disagree

When official learning content and official reference pages disagree, the most stable rule for new code is to treat the current [ProjectileLauncherGizmo](../Reference/core/Classes/ProjectileLauncherGizmo.md) and [CodeBlockEvents](../Reference/core/Variables/CodeBlockEvents.md) references as the source of truth for preferred API usage, and to treat older tutorial examples as migration-era snapshots. That interpretation matches the [Projectile launcher gizmo](../Gizmos/Projectile%20launcher%20gizmo.md#scripting) guide, the [Release Notes](../Release%20Notes.md#quality-of-life-improvements-26), and the current reference pages even when older sample code has not yet been updated.