Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_componentwithconstructor

# ComponentWithConstructor type

The base type of a [component](/hw-mcp-tools/documentation/hw-docs/Reference/core/Abstract%20Classes/Component.md) that takes a prop definition. This can be used to set default props for a base component.

## Signature

```
export declare type ComponentWithConstructor<TPropsDefinition, S extends SerializableState = SerializableState> = ComponentWithoutConstructor<TPropsDefinition> & {
    new (): Component<ComponentWithConstructor<TPropsDefinition, S>, S>;
};
```

## References

[SerializableState](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/SerializableState.md), [Component](/hw-mcp-tools/documentation/hw-docs/Reference/core/Abstract%20Classes/Component.md), [ComponentWithConstructor](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/ComponentWithConstructor.md)