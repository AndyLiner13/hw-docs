# FocusedInteractionOptions type

The options for the [Player.enterFocusedInteractionMode()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#enterfocusedinteractionmode) method.

## Signature

```typescript
export declare type FocusedInteractionOptions = {
    disableFocusExitButton?: boolean | null;
    interactionStringId?: string | null;
};
```

## Remarks

This type defines the `options` parameter of the [Player.enterFocusedInteractionMode()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#enterfocusedinteractionmode) method. The [DefaultFocusedInteractionEnableOptions](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_defaultfocusedinteractionenableoptions) variable contains the default values.

`disableFocusExitButton` - True to disable the Exit button during Focused Interaction mode. The default value is `false`.