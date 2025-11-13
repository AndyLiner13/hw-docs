Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_class

# Class Interface

An interface representing a class.

## Signature

```
export interface Class<TConstructorParameters extends any[] = any[], TClassInstance = unknown>
```

## Methods

|  |  |
| --- | --- |
| **(new)(args)** | Creates a new instance of the class.      Signature  ``` new (...args: TConstructorParameters): TClassInstance; ```  Parameters  args: TConstructorParameters  The arguments for creating the instance.  Returns  TClassInstance  The new class instance. |