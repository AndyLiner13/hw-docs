---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizoncountsampler
---

# [HorizonCountSampler Class](#horizoncountsampler-class)

A trace sampler that tracks the frequency of events.

## [Signature](#signature)

```ts
export declare class HorizonCountSampler 
```

## [Constructors](#constructors)

### [(constructor)(samplerName)](#constructorsamplername)

Constructs a new instance of the `HorizonCountSampler` class.

**Signature**

```ts
constructor(samplerName: string);
```

**Parameters**

samplerName: string

The name of the `HorizonCountSampler` instance.

## [Methods](#methods)

### [count(amount)](#countamount)

Tracks the number of trace events that occured.

**Signature**

```ts
count(amount: number): void;
```

**Parameters**

amount: number

The type of trace event to track.

**Returns**

void

