Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_interactioninfo

# InteractionInfo type

Information about an input received from the player during [Focused Interaction](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/FocusedInteraction.md) mode.

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

[Vec3](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Vec3.md)

## Remarks

interactionIndex: An index for differentiating between simultaneous inputs. The first input is 0, the second is 1, etc.
screenPosition: The screen position of the input normalized to the range (0,0) to (1,1).
worldRayOrigin: The origin point of a ray in the world generated from a touch gesture.
worldRayDirection: The direction vector of a ray in the world generated from a touch gesture.
interactionStringId: A unique string identifier for the interaction.
InteractionInfo is passed by the [PlayerControls.onFocusedInteractionInputStarted](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/PlayerControls.md#onfocusedinteractioninputstarted), [PlayerControls.onFocusedInteractionInputMoved](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/PlayerControls.md#onfocusedinteractioninputmoved), and [PlayerControls.onFocusedInteractionInputEnded](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/PlayerControls.md#onfocusedinteractioninputended) events.
For more information, see the [Focused Interaction guide](/hw-mcp-tools/documentation/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Focused%20Interaction.md).