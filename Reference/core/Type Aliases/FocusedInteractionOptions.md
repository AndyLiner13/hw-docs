---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_focusedinteractionoptions
---

# [FocusedInteractionOptions type](#focusedinteractionoptions-type)

The options for the [Player.enterFocusedInteractionMode()](../Classes/Player.md#enterfocusedinteractionmode) method.

## [Signature](#signature)

```
export
 declare type 
FocusedInteractionOptions
 
=
 
{

    disableFocusExitButton
?:
 
boolean
 
|
 
null
;

    interactionStringId
?:
 
string
 
|
 
null
;


};
```

## [Remarks](#remarks)

This type defines the `options` parameter of the [Player.enterFocusedInteractionMode()](../Classes/Player.md#enterfocusedinteractionmode) method. The [DefaultFocusedInteractionEnableOptions](../Variables/DefaultFocusedInteractionEnableOptions.md) variable contains the default values.\
`disableFocusExitButton` - True to disable the Exit button during Focused Interaction mode. The default value is `false`.

