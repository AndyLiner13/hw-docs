Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_propsfromdefinitions

# PropsFromDefinitions type

The properties for initializing a component.

## Signature

```
export declare type PropsFromDefinitions<T> = {
    [K in keyof T]: T[K] extends never ? never : T[K] extends {
        type: NullablePropTypes;
        default?: never;
    } ? Readonly<PropTypeFromEnum<T[K]['type']>> | undefined : T[K] extends {
        type: NonNullablePropTypes;
        default?: PropTypeFromEnum<NonNullablePropTypes>;
    } ? Readonly<PropTypeFromEnum<T[K]['type']>> : never;
};
```

## Remarks

Used to provide input for instances in the UI.