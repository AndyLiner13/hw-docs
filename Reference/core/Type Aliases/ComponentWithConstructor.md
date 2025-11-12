Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_componentwithconstructor

API reference

# ComponentWithConstructor type

The base type of a [component](/hw-docs/Reference/core/Abstract%20Classes/Component.md) that takes a prop definition. This can be used to set default props for a base component.

## Signature

```
export declare type ComponentWithConstructor<TPropsDefinition, S extends SerializableState = SerializableState> = ComponentWithoutConstructor<TPropsDefinition> & {
    new (): Component<ComponentWithConstructor<TPropsDefinition, S>, S>;
};
```

## References

[SerializableState](/hw-docs/Reference/core/Type%20Aliases/SerializableState.md), [Component](/hw-docs/Reference/core/Abstract%20Classes/Component.md), [ComponentWithConstructor](/hw-docs/Reference/core/Type%20Aliases/ComponentWithConstructor.md)