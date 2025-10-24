# ConditionalProps type

Represents the props of a UINode.if() node (for conditional rendering).

## Signature

```typescript
export declare type ConditionalProps = {
    condition: Bindable<boolean>;
    true?: UIChildren;
    false?: UIChildren;
};
```

## References

[Bindable](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable), [UIChildren](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uichildren)