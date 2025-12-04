Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_focusedinteraction

# FocusedInteraction Class

Options for setting up and customizing visual feedback when players interact with the world in Focused Interaction mode on web and mobile clients.

## Signature

```
export declare class FocusedInteraction
```

## Remarks

Focused Interaction mode replaces on-screen controls on web and mobile clients with touch and mouse input that includes direct input access.
You can enable and disable Focused Interaction mode with the [Player.enterFocusedInteractionMode()](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md#enterfocusedinteractionmode) and [Player.exitFocusedInteractionMode()](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md#exitfocusedinteractionmode) methods.
When Focused Interaction mode is enabled, you can subscribe to the [PlayerControls.onFocusedInteractionInputStarted](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/PlayerControls.md#onfocusedinteractioninputstarted), [PlayerControls.onFocusedInteractionInputMoved](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/PlayerControls.md#onfocusedinteractioninputmoved), and [PlayerControls.onFocusedInteractionInputEnded](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/PlayerControls.md#onfocusedinteractioninputended) events.
For more information, see the [Focused Interaction guide](/hw-mcp-tools/documentation/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Focused%20Interaction.md).

## Constructors

|  |  |
| --- | --- |
| **(constructor)(player)** | Creates a new `FocusedInteraction` instance.  ---  Signature  ``` constructor(player: Player); ```  Parameters  player: [Player](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md)  The player to assign to the focused interaction settings. |

## Properties

|  |  |
| --- | --- |
| **player**  [readonly] protected | The current player.      Signature  ``` protected readonly player: Player; ``` |

## Methods

|  |  |
| --- | --- |
| **setTapOptions(isEnabled, tapOptions)** | Toggle and customize the visual feedback to display when players use tap input during [Focused Interaction mode](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/FocusedInteraction.md).      Signature  ``` setTapOptions(isEnabled: boolean, tapOptions?: Partial<FocusedInteractionTapOptions>): void; ```  Parameters  isEnabled: boolean  true to enable visual feedback for tap input; false to disable it.  tapOptions: Partial<[FocusedInteractionTapOptions](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/FocusedInteractionTapOptions.md)>  *(Optional)* The options to customize the tap visuals.  Returns  void |
| **setTrailOptions(isEnabled, trailOptions)** | Toggle and customize visual feedback trails that are displayed when players use drag input during [Focused Interaction mode](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/FocusedInteraction.md).      Signature  ``` setTrailOptions(isEnabled: boolean, trailOptions?: Partial<FocusedInteractionTrailOptions>): void; ```  Parameters  isEnabled: boolean  true to enable trails; false to disable them.  trailOptions: Partial<[FocusedInteractionTrailOptions](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/FocusedInteractionTrailOptions.md)>  *(Optional)* Options to customize trail visuals.  Returns  void |