# IEntityStyle Interface

Represents a style for a Unity AssetBundle.

## Signature

```typescript
export interface IEntityStyle
```

## Examples

```typescript
outColor.rgb = lerp(inColor.rgb, Luminance(inColor.rgb) * tintColor, tintStrength) * brightness;
```

## Properties

### brightness

The brightness of the entity. brightness is from 0 - 100, 0 - black, 1 - no adjustment, 100 - very bright, defaults to 1.

**Signature:**
```typescript
brightness: HorizonProperty<number>;
```

### tintColor

The tint color of the entity. tintColor is in RGB range from 0 - 1, defaults to 1, 1, 1 (no tint color).

**Signature:**
```typescript
tintColor: HorizonProperty<Color>;
```

### tintStrength

The tint strength of the entity. tintStrength is from 0 - 1, 0 - no tint, 1 - fully tint, defaults to 0.

**Signature:**
```typescript
tintStrength: HorizonProperty<number>;
```