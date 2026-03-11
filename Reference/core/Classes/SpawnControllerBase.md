---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawncontrollerbase
---

# [SpawnControllerBase Class](#spawncontrollerbase-class)

The base class for a [spawn controller](SpawnController.md).\
For information about usage, see [Introduction to Asset Spawning](../../../Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md).

## [Signature](#signature)

```ts
export declare class SpawnControllerBase 
```

## [Properties](#properties)

### [\_spawnId protected](#_spawnid-protected)

The ID of the asset that is currently being spawned. This is a protected version of the property.

**Signature**

```ts
protected _spawnId: number;
```

### [currentState \[readonly\]](#currentstate-readonly)

The current spawn state of the spawn controller asset.

**Signature**

```ts
readonly currentState: ReadableHorizonProperty<SpawnState>;
```

### [rootEntities \[readonly\]](#rootentities-readonly)

A list of entities contained in a spawned asset.

**Signature**

```ts
readonly rootEntities: ReadableHorizonProperty<Entity[]>;
```

### [spawnError \[readonly\]](#spawnerror-readonly)

An error associated with the spawn operation.

**Signature**

```ts
readonly spawnError: ReadableHorizonProperty<SpawnError>;
```

### [spawnId \[readonly\]](#spawnid-readonly)

The ID of the asset that is currently being spawned.

**Signature**

```ts
get spawnId(): number;
```

### [targetState \[readonly\]](#targetstate-readonly)

The spawn state the spawn controller asset is attempting to reach.

**Signature**

```ts
readonly targetState: ReadableHorizonProperty<SpawnState>;
```

## [Methods](#methods)

### [dispose()](#dispose)

Unloads the asset data of a spawn controller, and performs cleanup on the spawn controller object.

**Signature**

```ts
dispose(): Promise<unknown>;
```

**Returns**

Promise\<unknown>

A promise that indicates whether the dispose operation succeeded.

**Remarks**

This method is equivalent to , except afterwards the spawn controller is no longer available for use and all of its methods throw errors. Call `dispose` in order to clean up resources that are no longer needed.

### [load()](#load)

Preloads the asset data for a spawn controller.

**Signature**

```ts
load(): Promise<void>;
```

**Returns**

Promise\<void>

A promise that indicates whether the operation succeeded.

### [pause()](#pause)

Pauses the spawning process for a spawn controller.

**Signature**

```ts
pause(): Promise<void>;
```

**Returns**

Promise\<void>

A promise that indicates whether the operation succeeded.

### [spawn()](#spawn)

Loads asset data if it's not previously loaded and then spawns the asset.

**Signature**

```ts
spawn(): Promise<void>;
```

**Returns**

Promise\<void>

A promise that indicates whether the operation succeeded.

### [unload()](#unload)

Unloads the spawn controller asset data. If the spawn controller isn't needed after the data is unloaded, call .

**Signature**

```ts
unload(): Promise<void>;
```

**Returns**

Promise\<void>

A promise that indicates whether the operation succeeded.

