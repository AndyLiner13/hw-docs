# AssetBundleInstanceReference Class

Represents a reference to a Unity AssetBundle.

## Signature

```typescript
export declare class AssetBundleInstanceReference
```

## Constructors

### (constructor)(entity, referenceName)

Creates an instance of AssetBundleInstanceReference.

**Signature:**
```typescript
constructor(entity: Entity, referenceName: string);
```

**Parameters:**
- `entity: Entity` - The parent entity.
- `referenceName: string` - The name of the reference.

## Properties

### style

**Signature:**
```typescript
style: IEntityStyle;
```

## Methods

### getAnimationParameters()

Gets the parameters for an animation.

**Signature:**
```typescript
getAnimationParameters(): { [name: string]: string | string; };
```

**Returns:**
`{ [name: string]: string | string; }` - The names and types of the animation parameters.

### isLoaded()

Determines whether an AssetBundle is loaded.

**Signature:**
```typescript
isLoaded(): boolean;
```

**Returns:**
`boolean` - true if the AssetBundle is loaded, false otherwise.

### resetAnimationParameterTrigger(name, localOnly)

Resets the value of the animation parameter with the given name.

**Signature:**
```typescript
resetAnimationParameterTrigger(name: string, localOnly?: boolean): void;
```

**Parameters:**
- `name: string` - The name of the animation parameter to reset.
- `localOnly: boolean` (Optional) - true only resets the local animation; otherwise, resets the global animation.

**Returns:**
`void`

### setAnimationParameterBool(name, value, localOnly)

Sets the value of a boolean animation parameter.

**Signature:**
```typescript
setAnimationParameterBool(name: string, value: boolean, localOnly?: boolean): void;
```

**Parameters:**
- `name: string` - The name of the animation parameter to set.
- `value: boolean` - The value for the animation parameter.
- `localOnly: boolean` (Optional) - true only sets the value for the local animation; otherwise, sets the value for the global animation.

**Returns:**
`void`

### setAnimationParameterFloat(name, value, localOnly)

Sets the value of a float animation parameter.

**Signature:**
```typescript
setAnimationParameterFloat(name: string, value: number, localOnly?: boolean): void;
```

**Parameters:**
- `name: string` - The name of the animation parameter to set.
- `value: number` - The value for the animation parameter.
- `localOnly: boolean` (Optional) - true only sets the value for the local animation; otherwise, sets the value for the global animation.

**Returns:**
`void`

### setAnimationParameterInteger(name, value, localOnly)

Sets the value of an integer animation parameter.

**Signature:**
```typescript
setAnimationParameterInteger(name: string, value: number, localOnly?: boolean): void;
```

**Parameters:**
- `name: string` - The name of the animation parameter to set.
- `value: number` - The value for the animation parameter.
- `localOnly: boolean` (Optional) - true only sets the value for the local animation; otherwise, sets the value for the global animation.

**Returns:**
`void`

### setAnimationParameterTrigger(name, localOnly)

Activates an animation trigger.

**Signature:**
```typescript
setAnimationParameterTrigger(name: string, localOnly?: boolean): void;
```

**Parameters:**
- `name: string` - The name of the animation parameter to activate.
- `localOnly: boolean` (Optional) - true only activates the local animation trigger; otherwise, activates the global animation trigger.

**Returns:**
`void`

### setMaterial(material, options)

Sets the material of a mesh.

**Signature:**
```typescript
setMaterial(material: string | MaterialAsset, options?: SetMaterialOptions): void;
```

**Parameters:**
- `material: string | MaterialAsset` - The material name or material asset to set.
- `options: SetMaterialOptions` (Optional) - The slot index options for the material, which are used to specify the material to update when updating meshes with multiple materials.

**Returns:**
`void`

**Examples:**
```typescript
class Button extends Component<typeof Button> {
  static propsDefinition = {
    material: {type: PropTypes.Asset},
    materialSlot: {type: PropTypes.Number},
    targetEntity: {type: PropTypes.Entity}
  };
}
```

### setMesh(meshName)

Swaps the mesh of an entity with another mesh registered in the SwappableMesh list in Unity.

**Signature:**
```typescript
setMesh(meshName: string): void;
```

**Parameters:**
- `meshName: string` - The name of the mesh to set.

**Returns:**
`void`