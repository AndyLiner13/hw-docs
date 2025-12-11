Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_iui

# IUI Interface

Basic UI functions for displaying popups and tooltips.

## Signature

```
export interface IUI
```

## Remarks

For an example, see the [Lobby tutorial](https://developers.meta.com/horizon-worlds/learn/documentation/tutorials/multiplayer-lobby-tutorial/module-4-starting-the-game#display-a-countdown-timer).

## Methods

|  |  |
| --- | --- |
| **dismissTooltip(player, playSound)** | Dismisses any active tooltip for the target player      Signature  ``` dismissTooltip(player: Player, playSound?: boolean): void; ```  Parameters  player: [Player](../Classes/Player.md)  the player that has their tooltip dismissed  playSound: boolean  *(Optional)* determines if a default "close sound" should play when the tooltip is closed  Returns  void |
| **showPopupForEveryone(text, displayTime, options)** | Shows a popup modal to all players.      Signature  ``` showPopupForEveryone(text: string | i18n_utils.LocalizableText, displayTime: number, options?: Partial<PopupOptions>): void; ```  Parameters  text: string | i18n\_utils.LocalizableText  The text to display in the popup.  displayTime: number  The duration, in seconds, to display the popup.  options: Partial<[PopupOptions](../Type%20Aliases/PopupOptions.md)>  *(Optional)* The configuration, such as color or position, for the popup.  Returns  void |
| **showPopupForPlayer(player, text, displayTime, options)** | Shows a popup modal to a player.      Signature  ``` showPopupForPlayer(player: Player, text: string | i18n_utils.LocalizableText, displayTime: number, options?: Partial<PopupOptions>): void; ```  Parameters  player: [Player](../Classes/Player.md)  The player to whom the popup is to displayed.  text: string | i18n\_utils.LocalizableText  The text to display in the popup.  displayTime: number  The duration, in seconds, to display the popup.  options: Partial<[PopupOptions](../Type%20Aliases/PopupOptions.md)>  *(Optional)* The configuration, such as color or position, for the popup.  Returns  void |
| **showTooltipForPlayer(player, tooltipAnchorLocation, tooltipText, options)** | Shows a tooltip modal to a specific player      Signature  ``` showTooltipForPlayer(player: Player, tooltipAnchorLocation: TooltipAnchorLocation, tooltipText: string | i18n_utils.LocalizableText, options?: Partial<TooltipOptions>): void; ```  Parameters  player: [Player](../Classes/Player.md)  the player this tooltip displays for  tooltipAnchorLocation: [TooltipAnchorLocation](../Enumerations/TooltipAnchorLocation.md)  the anchor point that is used to determine the tooltip display location  tooltipText: string | i18n\_utils.LocalizableText  the message the tooltip displays  options: Partial<[TooltipOptions](../Type%20Aliases/TooltipOptions.md)>  *(Optional)* configuration for the tooltip (display line, play sounds, attachment entity, etc)  Returns  void |