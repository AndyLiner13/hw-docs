Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/horizon-typescript-v2-changes

# Horizon TypeScript V2 Changes

All new worlds use the TypeScript API V2 by default. We strongly recommend upgrading your worlds to this version of the API, as previous versions are no longer being updated.

This article describes recent API changes and some of the updates you may need to make to your scripts to ensure compatibility with the current API version.

For details about the current APIs, see the [API reference documentation](https://horizon.meta.com/resources/scripting-api/index).

## Summary

This table summarizes recent changes:

| **Category** | **Type** | **Summary** |
| --- | --- | --- |
| [Modules](/hw-docs/Scripting/Get%20started%20with%20TypeScript/Modules%20and%20Global%20Functions.md) | Major | Changed the module names as follows:  - Changed the prefix for module names from `@early_access_api` to `horizon`.  - Changed the module name for the core APIs from `v1` to `core`. |
| [Component](/hw-docs/Scripting/Get%20started%20with%20TypeScript/TypeScript%20Components,%20Properties,%20and%20Variables.md) | Major | - Reduced the amount of boilerplate code required to create components in scripts.  - Added a `prestart` method to the `Component` class. |
| Entity and Asset properties | Major | - Enabled nullability for properties that receive `Entity` or `Asset` types. |
| Entity.as | Standard | - Updated the `Entity.as` method to return a nullable type. |
| PhysicalEntity | Standard | - The `PhysicalEntity.applyForceAtPosition` method now uses the impulse `PhysicsForceMode` instead of force. |
| Class IDs | Standard | - Changed all internal class IDs to the `bigint` type. |
| SpawnTargetState | Standard | - Removed the export of the `SpawnTargetState` enum. |
| [LocalEvent](/hw-docs/Scripting/Events/Local%20Events.md) | Standard | - In the `LocalEvent` constructor, the `name` parameter is now optional, and is assigned a unique ID if the parameter isn’t specified. |
| [Component](/hw-docs/Scripting/Get%20started%20with%20TypeScript/TypeScript%20Components,%20Properties,%20and%20Variables.md) | Renamed APIs | - `sendNetworkEntityEvent` to `sendNetworkEvent`  - `sendEntityEvent` to `sendLocalEvent`  -`connectEntityEvent` to `connectLocalEvent`  - `connectBroadcastEvent` to `connectLocalBroadcastEvent`  -`sendBroadcastEvent` to `sendLocalBroadcastEvent` |
| Interfaces | Renamed APIs | - `IEntityStyle` to `EntityStyle` |
| Classes | Removed APIs | - `HorizonEvent` to `LocalEvent` |
| Entity class | Removed APIs | - `setVisibleToAllPlayers` to `setVisibilityForPlayers`  - `setVisibleToPlayers` to `resetVisibilityForPlayers` |

## Major changes

This section describes the most impactful changes that are likely to affect the widest range of scripts.

### Module names

The module names for the APIs have been renamed as follows:

* The `@early_access_api` prefix changed to `horizon`.
* The module name for the core APIs changed from `v1` to `core`.

Because of these changes, you must update these import statements in all scripts that import previous versions of the APIs. For example:

* Core APIs:
  + Old: `import * as hz from “@early_access_api/v1”;`
  + New: `import * as hz from “horizon/core”;`
* NavMesh APIs:
  + Old: `import * as hz from “@early_access_api/navmesh”;`
  + New: `import * as hz from “horizon/navmesh”;`

### Components

Components have been updated as follows:

* Components now require less boilerplate code when you create them in scripts.

**Old:**

```
type TestProps = {
  num: number;
  numDefaulted: number
};

class TestClass extends Component<TestProps> {
  static propsDefinition = {
    num: {type: 'number'},
    numDefaulted: {type: 'number', default: 0},
  };

  start(): void {
    const n: number | undefined = this.props.num;
    const numDefaulted: number | undefined = this.props.numDefaulted;
  }
}
```

**New:**

```
class TestClass extends Component<typeof TestClass> {
  static propsDefinition = {
    num: {type: 'number'},
    numDefaulted: {type: 'number', default: 10},
    entity: {type: PropTypes.Entity}
  };

  start(): void {
    const n: number = this.props.num;
    const entity: Entity | undefined = this.props.entity;
  }
}
```

If you want to create your own base `Component` class by extending `Component`, you can do the following:

```
class Foo<T> extends Component<typeof Foo & T> {
  ...
}

class Bar extends Foo<typeof Bar>
static propsDefinition = {
  ...Foo.propsDefinition,
  // new props
}
```

* The `Component` class now has a `prestart` method, which you can use to set up components before `start` is called on any components in the world. For example, you might want to do this when setting up event listeners.

### Entity and Asset properties

* Properties that receive `Entity` or `Asset` types now have nullability enabled. As a result, you must check if they are null before using them in your code. Previously this was often accomplished by calling `Entity.exists()`. Now you can check for null values by doing the following:

```
 start(): void {
  const exampleEntity: Entity | undefined = this.props.entityProp;
  const exampleAsset: Asset | undefined = this.props.assetProp;

  if (exampleEntity != null) {
    // Use as before
  }
}
```

## Standard changes

* The `Entity.as` method now returns a nullable type.
* The `PhysicalEntity.applyForceAtPosition` method now uses the impulse `PhysicsForceMode` instead of force.
* All internal class IDs have been changed to the `bigint` type, which allows scripts to serialize entities across the network.
* The export of the `SpawnTargetState` enum has been removed.
* In the `LocalEvent` constructor, the `name` parameter is now optional, and is assigned a unique ID if the parameter isn’t specified.
* Updated `RaycastHit` response type. You now must check `.targetType` before accessing `.target` .

```
const hit = this._raycaster.raycast(
  this._raycaster.position.get(),
  this._raycaster.forward.get(),
  {
    layerType: hz.LayerType.Objects,
    maxDistance: this.props.maxGrabDistance
  });

if (hit && hit.targetType == hz.RaycastTargetType.Entity) {
  const entity = hit.target;
  entity.color.set(hz.Color.green)
  // do something
}
```

## Renamed APIs

| **Section** | **Old** | **New** |
| --- | --- | --- |
| Component class | `sendNetworkEntityEvent` | `sendNetworkEvent` |
|  | `sendEntityEvent` | `sendLocalEvent` |
|  | `connectEntityEvent` | `connectLocalEvent` |
|  | `connectBroadcastEvent` | `connectLocalBroadcastEvent` |
|  | `sendBroadcastEvent` | `sendLocalBroadcastEvent` |
|  | `connectNetworkEntityEvent` | `connectNetworkEvent` |
| Interfaces | `IEntityStyle` | `EntityStyle` |

## Removed APIs

The following APIs were previously deprecated and have now been removed in V2.

| **Section** | **Removed** | **Alternative** | **Notes** |
| --- | --- | --- | --- |
| Classes |  | `LocalEvent` | We now support local and network TypeScript events. The use of `HorizonEvent` and `NetworkEvent` together caused confusion. |
| Entity class | `setVisibleToAllPlayers` | `setVisibilityForPlayers` | The new API is more inline with expected user behavior. |
| Entity class | `setVisibleToPlayers` | `resetVisibilityForPlayers` | The new API is more inline with expected user behavior. |