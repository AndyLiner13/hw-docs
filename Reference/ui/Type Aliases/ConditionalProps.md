---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_conditionalprops
---

# [ConditionalProps type](#conditionalprops-type)

Represents the props of a UINode.if() node (for conditional rendering).

## [Signature](#signature)

```
export
 declare type 
ConditionalProps
 
=
 
{

    condition
:
 
Bindable
<boolean>
;

    
true
?:
 
UIChildren
;

    
false
?:
 
UIChildren
;


};
```

## [References](#references)

[Bindable](Bindable.md), [UIChildren](UIChildren.md)

