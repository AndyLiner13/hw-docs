# PropsDefinitionFromComponent type

A helper utility that derives prop types from a component class type.

## Signature

```typescript
export declare type PropsDefinitionFromComponent<T> = T extends ComponentWithoutConstructor<infer TPropsDefinition> ? Readonly<TPropsDefinition> : never;
```