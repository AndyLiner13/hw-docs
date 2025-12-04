Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_conditionalprops

# ConditionalProps type

Represents the props of a UINode.if() node (for conditional rendering).

## Signature

```
export declare type ConditionalProps = {
    condition: Bindable<boolean>;
    true?: UIChildren;
    false?: UIChildren;
};
```

## References

[Bindable](/hw-mcp-tools/documentation/hw-docs/Reference/ui/Type%20Aliases/Bindable.md), [UIChildren](/hw-mcp-tools/documentation/hw-docs/Reference/ui/Type%20Aliases/UIChildren.md)