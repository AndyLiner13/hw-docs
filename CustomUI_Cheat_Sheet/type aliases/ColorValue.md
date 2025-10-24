# ColorValue type

The base type for colors.

## Signature

```typescript
export declare type ColorValue = string | Color;
```

## Remarks

When represented by a string, the following formats are allowed:
- RGB Hexadecimal - example: `#53575E`
- RGB (Red, Green, Blue) - example: `rgb(100, 50, 0)`
- RGBA (Red, Green, Blue, Alpha) - example: `rgba(255, 105, 180, 0)`
- HSL (Hue, Saturation, Lightness) - example: `hsl(0, 50%, 50%)`
- Named colors - example: `dodgerblue`