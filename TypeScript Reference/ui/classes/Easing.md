# Easing Class

A set of easing functions for configuring [timing animations](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_timinganimationconfig). Easing functions provide physical motion animations.

## Signature

```typescript
export declare class Easing
```

## Properties

| Property | Description |
| --- | --- |
| back static [readonly] | A back easing. **Signature:** `static get back(): Easing;` |
| bounce static [readonly] | An easing that provides a bouncing animation. **Signature:** `static get bounce(): Easing;` |
| circle static [readonly] | A circular easing. **Signature:** `static get circle(): Easing;` |
| cubic static [readonly] | A cubic easing. **Signature:** `static get cubic(): Easing;` |
| ease static [readonly] | An easing that starts slow, accelerates quickly, and then gradually slows down until stopping. **Signature:** `static get ease(): Easing;` |
| exp static [readonly] | An exponential easing. **Signature:** `static get exp(): Easing;` |
| linear static [readonly] | A linear easing. **Signature:** `static get linear(): Easing;` |
| quad static [readonly] | A quadratic easing. **Signature:** `static get quad(): Easing;` |
| sin static [readonly] | A sin easing. **Signature:** `static get sin(): Easing;` |

## Methods

| Method | Description |
| --- | --- |
| bezier(x1, y1, x2, y2) static | Returns an easing that uses a cubic bezier curve. **Signature:** `static bezier(x1: number, y1: number, x2: number, y2: number): Easing;` **Parameters:** `x1: number` - The x coordinate of the first control point of the curve. `y1: number` - The y coordinate of the first control point. `x2: number` - The x coordinate of the second control point. `y2: number` - The y coordinate of the second control point. **Returns:** Easing |
| elastic(bounciness) static | Returns an elastic easing. **Signature:** `static elastic(bounciness: number): Easing;` **Parameters:** `bounciness: number` **Returns:** Easing - The updated easing. |
| in(easing) static | Returns an easing that runs forwards. **Signature:** `static in(easing: Easing): Easing;` **Parameters:** `easing: Easing` - The easing to update. **Returns:** Easing - The updated easing. |
| inOut(easing) static | Returns an easing that runs forwards and then backwards. **Signature:** `static inOut(easing: Easing): Easing;` **Parameters:** `easing: Easing` - The easing to update. **Returns:** Easing - The updated easing. |
| out(easing) static | Returns an easing that runs backwards. **Signature:** `static out(easing: Easing): Easing;` **Parameters:** `easing: Easing` - The easing to update. **Returns:** Easing - The updated easing. |
| poly(n) static | Returns a power easing. **Signature:** `static poly(n: number): Easing;` **Parameters:** `n: number` **Returns:** Easing - The updated easing. |