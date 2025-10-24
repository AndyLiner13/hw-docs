# AssetBundleGizmo Class

Extends Entity. Represents a Unity AssetBundle, which is an archive of design assets that Unity can load at runtime.

## Signature

```typescript
export declare class AssetBundleGizmo extends Entity
```

## Remarks

For more information about AssetBundles, see the [Horizon developer guides](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/unity-assetbundles/horizon-unity-assetbundles-overview) and the [Unity developer guides](https://docs.unity3d.com/Manual/AssetBundlesIntro.html) (external).

## Methods

### getPrefabNames()

Get the names of all prefabs in the AssetBundle instance.

**Signature:**
```typescript
getPrefabNames(): string[];
```

**Returns:**
`string[]` - The names of the prefabs in the AssetBundle instance.

### getReference(name, throwIfNotExist)

Gets an AssetBundleInstanceReference for an exposed GameObject in the loaded prefab. These need to be specified at export time in the HorizonUnityAssetReferences MonoBehaviour.

**Signature:**
```typescript
getReference(name: string, throwIfNotExist: boolean): AssetBundleInstanceReference;
```

**Parameters:**
- `name: string` - The name of the GameObject.
- `throwIfNotExist: boolean` - Indicates whether to throw an exception if the GameObject does not exist.

**Returns:**
`AssetBundleInstanceReference` - A reference to the GameObject.

**Exceptions:**
Thrown if throwIfNotExist is true and the GameObject does not exist.

### getRoot()

Gets an AssetBundleInstanceReference for the main GameObject.

**Signature:**
```typescript
getRoot(): AssetBundleInstanceReference;
```

**Returns:**
`AssetBundleInstanceReference` - A reference to the main GameObject.

### isLoaded()

Determines whether a prefab is instantiated and the root reference is ready.

**Signature:**
```typescript
isLoaded(): boolean;
```

**Returns:**
`boolean` - true if a prefab is instantiated and the root reference is ready, false otherwise.

### loadPrefab(name)

Loads a prefab from a Unity AssetBundle.

**Signature:**
```typescript
loadPrefab(name: string): void;
```

**Parameters:**
- `name: string` - The name of the prefab to load. The method retrieves the prefab names in the AssetBundle.

**Returns:**
`void`

**Examples:**
Dynamically load a prefab:
```typescript
this.entity.as(AssetBundleGizmo).loadPrefab("Prefab01");
```

**Remarks:**
A prefab is a type of preconfigured Unity GameObject that includes its dependent objects and can be stored as a reusable asset. To unload a prefab, see unloadPrefab().

### toString()

Returns the class type and ID of the AssetBundleGizmo.

**Signature:**
```typescript
toString(): string;
```

**Returns:**
`string` - The class type and ID of the AssetBundleGizmo.

### unloadPrefab()

Unloads the prefab in the AssetBundleGizmo.

**Signature:**
```typescript
unloadPrefab(): void;
```

**Returns:**
`void`

**Remarks:**
A prefab is a type of preconfigured Unity GameObject that includes its dependent objects and can be stored as a reusable asset.