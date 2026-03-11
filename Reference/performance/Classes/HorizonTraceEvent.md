---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizontraceevent
---

# [HorizonTraceEvent Class](#horizontraceevent-class)

A trace event in Horizon Worlds.

## [Signature](#signature)

```ts
export declare class HorizonTraceEvent 
```

## [Constructors](#constructors)

### [(constructor)(samplerName, type, value)](#constructorsamplername-type-value)

Constructs a `HorizonTraceEvent` object.

**Signature**

```ts
constructor(samplerName: string, type: HorizonTraceEventType, value: number);
```

**Parameters**

samplerName: string

The name of the `HorizonTraceEvent` object.

type: [HorizonTraceEventType](../Enumerations/HorizonTraceEventType.md)

The type of the sampler.

value: number

The value of the trace.

## [Properties](#properties)

### [samplerName \[readonly\]](#samplername-readonly)

The name of the trace sampler for the event.

**Signature**

```ts
readonly samplerName: string;
```

### [timeStamp \[readonly\]](#timestamp-readonly)

The timestamp of event.

**Signature**

```ts
readonly timeStamp: number;
```

### [type \[readonly\]](#type-readonly)

The trace event type.

**Signature**

```ts
readonly type: HorizonTraceEventType;
```

### [value \[readonly\]](#value-readonly)

The value of the metric.

**Signature**

```ts
readonly value: number;
```

