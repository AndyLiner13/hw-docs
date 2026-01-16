Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_interactioninfo

# InteractionInfo type

Information about an input received from the player during [Focused Interaction](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_focusedinteraction) mode.

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

[Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)

## Remarks

interactionIndex: An index for differentiating between simultaneous inputs. The first input is 0, the second is 1, etc.
screenPosition: The screen position of the input normalized to the range (0,0) to (1,1).
worldRayOrigin: The origin point of a ray in the world generated from a touch gesture.
worldRayDirection: The direction vector of a ray in the world generated from a touch gesture.
interactionStringId: A unique string identifier for the interaction.
InteractionInfo is passed by the [PlayerControls.onFocusedInteractionInputStarted](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols#onfocusedinteractioninputstarted), [PlayerControls.onFocusedInteractionInputMoved](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols#onfocusedinteractioninputmoved), and [PlayerControls.onFocusedInteractionInputEnded](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols#onfocusedinteractioninputended) events.
For more information, see the [Focused Interaction guide](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/references-and-guides/how-to-use-focused-interaction).