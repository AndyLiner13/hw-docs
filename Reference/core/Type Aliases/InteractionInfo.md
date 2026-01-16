Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_interactioninfo

# InteractionInfo type

Information about an input received from the player during [Focused Interaction](../Classes/FocusedInteraction.md) mode.

## Signature

```
export declare type InteractionInfo = {
    interactionIndex: number;
    screenPosition: Vec3;
    worldRayOrigin: Vec3;
    worldRayDirection: Vec3;
    interactionStringId: string;
};
```

## References

[Vec3](../Classes/Vec3.md)

## Remarks

interactionIndex: An index for differentiating between simultaneous inputs. The first input is 0, the second is 1, etc.
screenPosition: The screen position of the input normalized to the range (0,0) to (1,1).
worldRayOrigin: The origin point of a ray in the world generated from a touch gesture.
worldRayDirection: The direction vector of a ray in the world generated from a touch gesture.
interactionStringId: A unique string identifier for the interaction.
InteractionInfo is passed by the [PlayerControls.onFocusedInteractionInputStarted](../Classes/PlayerControls.md#onfocusedinteractioninputstarted), [PlayerControls.onFocusedInteractionInputMoved](../Classes/PlayerControls.md#onfocusedinteractioninputmoved), and [PlayerControls.onFocusedInteractionInputEnded](../Classes/PlayerControls.md#onfocusedinteractioninputended) events.
For more information, see the [Focused Interaction guide](../../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Focused%20Interaction.md).