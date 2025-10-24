# SpawnControllerBase Class

The base class for a [spawn controller](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawncontroller).

For information about usage, see [Introduction to Asset Spawning](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/introduction-to-asset-spawning).

## Signature

```typescript
export declare class SpawnControllerBase
```

## Properties

| Property | Description |
| --- | --- |
| _spawnId | The ID of the asset that is currently being spawned. This is a protected version of the property. Signature protected _spawnId: number; |
| currentState [readonly] | The current spawn state of the spawn controller asset. Signature readonly currentState: ReadableHorizonProperty<SpawnState>; |
| rootEntities [readonly] | A list of entities contained in a spawned asset. Signature readonly rootEntities: ReadableHorizonProperty<Entity[]>; |
| spawnError [readonly] | An error associated with the spawn operation. Signature readonly spawnError: ReadableHorizonProperty<SpawnError>; |
| spawnId [readonly] | The ID of the asset that is currently being spawned. Signature get spawnId(): number; |
| targetState [readonly] | The spawn state the spawn controller asset is attempting to reach. Signature readonly targetState: ReadableHorizonProperty<SpawnState>; |

## Methods

| Method | Description |
| --- | --- |
| dispose() | Unloads the asset data of a spawn controller, and performs cleanup on the spawn controller object. Signature dispose(): Promise<unknown>; Returns Promise<unknown>A promise that indicates whether the dispose operation succeeded. Remarks This method is equivalent to , except afterwards the spawn controller is no longer available for use and all of its methods throw errors. Call dispose in order to clean up resources that are no longer needed. |
| load() | Preloads the asset data for a spawn controller. Signature load(): Promise<void>; Returns Promise<void>A promise that indicates whether the operation succeeded. |
| pause() | Pauses the spawning process for a spawn controller. Signature pause(): Promise<void>; Returns Promise<void>A promise that indicates whether the operation succeeded. |
| spawn() | Loads asset data if it's not previously loaded and then spawns the asset. Signature spawn(): Promise<void>; Returns Promise<void>A promise that indicates whether the operation succeeded. |
| unload() | Unloads the spawn controller asset data. If the spawn controller isn't needed after the data is unloaded, call . Signature unload(): Promise<void>; Returns Promise<void>A promise that indicates whether the operation succeeded. |

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Freference%2F2.0.0%2Fcore_spawncontrollerbase%2F)