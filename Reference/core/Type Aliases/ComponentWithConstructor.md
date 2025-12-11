Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_componentwithconstructor

# ComponentWithConstructor type

The base type of a [component](../Abstract%20Classes/Component.md) that takes a prop definition. This can be used to set default props for a base component.

## Signature

```
export declare type ComponentWithConstructor<TPropsDefinition, S extends SerializableState = SerializableState> = ComponentWithoutConstructor<TPropsDefinition> & {
    new (): Component<ComponentWithConstructor<TPropsDefinition, S>, S>;
};
```

## References

[SerializableState](SerializableState.md), [Component](../Abstract%20Classes/Component.md), [ComponentWithConstructor](ComponentWithConstructor.md)