---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/unity_asset_bundles_assetbundleinstancereference
---

# [AssetBundleInstanceReference Class](#assetbundleinstancereference-class)

Represents a reference to a Unity AssetBundle.

## [Signature](#signature)

```ts
export declare class AssetBundleInstanceReference 
```

## [Constructors](#constructors)

### [(constructor)(entity, referenceName)](#constructorentity-referencename)

Creates an instance of AssetBundleInstanceReference.

**Signature**

```ts
constructor(entity: Entity, referenceName: string);
```

**Parameters**

entity: Entity

The parent entity.

referenceName: string

The name of the reference.

## [Properties](#properties)

### [style](#style)

**Signature**

```ts
style: IEntityStyle;
```

## [Methods](#methods)

### [getAnimationParameters()](#getanimationparameters)

Gets the parameters for an animation.

**Signature**

```ts
getAnimationParameters(): {
        [name: string]: string | string;
    };
```

**Returns**

{ \[name: string]: string | string; }

The names and types of the animation parameters.

### [isLoaded()](#isloaded)

Determines whether an AssetBundle is loaded.

**Signature**

```ts
isLoaded(): boolean;
```

**Returns**

boolean

`true` if the AssetBundle is loaded, `false` otherwise.

### [resetAnimationParameterTrigger(name, localOnly)](#resetanimationparametertriggername-localonly)

Resets the value of the animation parameter with the given name.

**Signature**

```ts
resetAnimationParameterTrigger(name: string, localOnly?: boolean): void;
```

**Parameters**

name: string

The name of the animation parameter to reset.

localOnly: boolean

*(Optional)*`true` only resets the local animation; otherwise, resets the global animation.

**Returns**

void

### [setAnimationParameterBool(name, value, localOnly)](#setanimationparameterboolname-value-localonly)

Sets the value of a boolean animation parameter.

**Signature**

```ts
setAnimationParameterBool(name: string, value: boolean, localOnly?: boolean): void;
```

**Parameters**

name: string

The name of the animation parameter to set.

value: boolean

The value for the animation parameter.

localOnly: boolean

*(Optional)*`true` only sets the value for the local animation; otherwise, sets the value for the global animation.

**Returns**

void

### [setAnimationParameterFloat(name, value, localOnly)](#setanimationparameterfloatname-value-localonly)

Sets the value of a float animation parameter.

**Signature**

```ts
setAnimationParameterFloat(name: string, value: number, localOnly?: boolean): void;
```

**Parameters**

name: string

The name of the animation parameter to set.

value: number

The value for the animation parameter.

localOnly: boolean

*(Optional)*`true` only sets the value for the local animation; otherwise, sets the value for the global animation.

**Returns**

void

### [setAnimationParameterInteger(name, value, localOnly)](#setanimationparameterintegername-value-localonly)

Sets the value of an integer animation parameter.

**Signature**

```ts
setAnimationParameterInteger(name: string, value: number, localOnly?: boolean): void;
```

**Parameters**

name: string

The name of the animation parameter to set.

value: number

The value for the animation parameter.

localOnly: boolean

*(Optional)*`true` only sets the value for the local animation; otherwise, sets the value for the global animation.

**Returns**

void

### [setAnimationParameterTrigger(name, localOnly)](#setanimationparametertriggername-localonly)

Activates an animation trigger.

**Signature**

```ts
setAnimationParameterTrigger(name: string, localOnly?: boolean): void;
```

**Parameters**

name: string

The name of the animation parameter to activate.

localOnly: boolean

*(Optional)*`true` only activates the local animation trigger; otherwise, activates the global animation trigger.

**Returns**

void

### [setMaterial(material, options)](#setmaterialmaterial-options)

Sets the material of a mesh.

**Signature**

```ts
setMaterial(material: string | MaterialAsset, options?: SetMaterialOptions): void;
```

**Parameters**

material: string | MaterialAsset

The material name or material asset to set.

options: [SetMaterialOptions](../Type%20Aliases/SetMaterialOptions.md)

*(Optional)* The slot index options for the material, which are used to specify the material to update when updating meshes with multiple materials.

**Returns**

void

**Examples**

```ts
class Button extends Component<typeof Button> {
  static propsDefinition = {
    material: {type: PropTypes.Asset},
    materialSlot: {type: PropTypes.Number},
    targetEntity: {type: PropTypes.Entity},
  };

  start() {
    this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, () => this.onButtonPress());
  }

  onButtonPress() {
    const options = { materialSlot: this.props.materialSlot };
    this.props.targetEntity
      .as(AssetBundleGizmo)!
      .getRoot()
      .setMaterial(this.props.material, options);
  }
}
```

**Remarks**

Material names reference materials registered in the SwappableMaterials list in Unity.

### [setMesh(meshName)](#setmeshmeshname)

Swaps the mesh of an entity with another mesh registered in the SwappableMesh list in Unity. Leave empty to hide the mesh.

**Signature**

```ts
setMesh(meshName: string): void;
```

**Parameters**

meshName: string

The name of the mesh to set, or empty string to hide the mesh.

**Returns**

void

