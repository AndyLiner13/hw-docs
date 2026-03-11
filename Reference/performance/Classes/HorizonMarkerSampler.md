---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizonmarkersampler
---

# [HorizonMarkerSampler Class](#horizonmarkersampler-class)

A trace sampler that flags events.

## [Signature](#signature)

```ts
export declare class HorizonMarkerSampler 
```

## [Remarks](#remarks)

Events flagged by this sampler aggregate to 1 if invoked and 0 if not.

## [Constructors](#constructors)

### [(constructor)(samplerName)](#constructorsamplername)

Constructs a new instance of the `HorizonMarkerSampler` class.

**Signature**

```ts
constructor(samplerName: string);
```

**Parameters**

samplerName: string

The name of the `HorizonMarkerSampler` instance.

## [Methods](#methods)

### [mark()](#mark)

Flags an event, which aggregates to 1 if the event is called and 0 if it's not called.

**Signature**

```ts
mark(): void;
```

**Returns**

void

