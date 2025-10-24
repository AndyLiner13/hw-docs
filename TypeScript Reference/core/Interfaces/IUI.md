# IUI Interface

Basic UI functions for displaying popups and tooltips.

## Signature

```typescript
export interface IUI
```

## Remarks

For an example, see the [Lobby tutorial](https://developers.meta.com/horizon-worlds/learn/documentation/tutorials/multiplayer-lobby-tutorial/module-4-starting-the-game#display-a-countdown-timer).

## Methods

| Method | Description |
| --- | --- |
| `dismissTooltip(player, playSound)` | Dismisses any active tooltip for the target player<br/>**Signature:** `dismissTooltip(player: Player, playSound?: boolean): void;`<br/>**Parameters:** `player: Player` - the player that has their tooltip dismissed, `playSound: boolean` - (Optional) determines if a default "close sound" should play when the tooltip is closed<br/>**Returns:** `void` |
| `showPopupForEveryone(text, displayTime, options)` | Shows a popup modal to all players<br/>**Signature:** `showPopupForEveryone(text: string \| i18n_utils.LocalizableText, displayTime: number, options?: Partial<PopupOptions>): void;`<br/>**Parameters:** `text` - The text to display in the popup, `displayTime: number` - The duration, in seconds, to display the popup, `options` - (Optional) The configuration, such as color or position, for the popup<br/>**Returns:** `void` |
| `showPopupForPlayer(player, text, displayTime, options)` | Shows a popup modal to a player<br/>**Signature:** `showPopupForPlayer(player: Player, text: string \| i18n_utils.LocalizableText, displayTime: number, options?: Partial<PopupOptions>): void;`<br/>**Parameters:** `player: Player` - The player to whom the popup is to displayed, `text` - The text to display in the popup, `displayTime: number` - The duration, in seconds, to display the popup, `options` - (Optional) The configuration, such as color or position, for the popup<br/>**Returns:** `void` |
| `showTooltipForPlayer(player, tooltipAnchorLocation, tooltipText, options)` | Shows a tooltip modal to a specific player<br/>**Signature:** `showTooltipForPlayer(player: Player, tooltipAnchorLocation: TooltipAnchorLocation, tooltipText: string \| i18n_utils.LocalizableText, options?: Partial<TooltipOptions>): void;`<br/>**Parameters:** `player: Player` - the player this tooltip displays for, `tooltipAnchorLocation: TooltipAnchorLocation` - the anchor point that is used to determine the tooltip display location, `tooltipText` - the message the tooltip displays, `options` - (Optional) configuration for the tooltip (display line, play sounds, attachment entity, etc)<br/>**Returns:** `void` |