# ComponentWithConstructor type

The base of a component definition that ensures methods being defined for a constructor.

## Signature

```typescript
export declare type ComponentWithConstructor<T extends Component> = new (...args: any[]) => T;
```

## References

[Component](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component)

## Remarks

This type is used for component definitions that require a constructor, ensuring type safety when creating component instances.