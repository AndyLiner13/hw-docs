Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/unity_asset_bundles_ientitystyle

# IEntityStyle Interface

Represents a style for a Unity AssetBundle.

## Signature

```
export interface IEntityStyle
```

## Examples

```
outColor.rgb = lerp(inColor.rgb, Luminance(inColor.rgb) * tintColor, tintStrength) * brightness;
```

## Properties

|  |  |
| --- | --- |
| **brightness** | The brightness of the entity. `brightness` is from 0 - 100, 0 - black, 1 - no adjustment, 100 - very bright, defaults to 1.      Signature  ``` brightness: HorizonProperty<number>; ``` |
| **tintColor** | The tint color of the entity. `tintColor` is in RGB range from 0 - 1, defaults to 1, 1, 1 (no tint color).      Signature  ``` tintColor: HorizonProperty<Color>; ``` |
| **tintStrength** | The tint strength of the entity. `tintStrength` is from 0 - 1, 0 - no tint, 1 - fully tint, defaults to 0.      Signature  ``` tintStrength: HorizonProperty<number>; ``` |