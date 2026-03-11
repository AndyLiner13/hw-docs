---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizondurationsampler
---

# [HorizonDurationSampler Class](#horizondurationsampler-class)

A trace sampler that tracks the duration of function calls.

## [Signature](#signature)

```ts
export declare class HorizonDurationSampler 
```

## [Constructors](#constructors)

### [(constructor)(samplerName)](#constructorsamplername)

Constructs a new instance of the `HorizonDurationSampler` class.

**Signature**

```ts
constructor(samplerName: string);
```

**Parameters**

samplerName: string

The name of the `HorizonDurationSampler` instance.

## [Methods](#methods)

### [trace(fn)](#tracefn)

Tracks the duration of the given function call.

**Signature**

```ts
trace(fn: () => void): void;
```

**Parameters**

fn: () => void

The function call to track.

**Returns**

void

