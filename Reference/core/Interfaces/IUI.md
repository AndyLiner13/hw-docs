---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_iui
---

# [IUI Interface](#iui-interface)

Basic UI functions for displaying popups and tooltips.

## [Signature](#signature)

```
export
 
interface
 IUI 
```

## [Remarks](#remarks)

For an example, see the [Lobby tutorial](../../../Tutorials/Feature%20samples/Multiplayer%20lobby%20tutorial/Module%204%20-%20Starting%20the%20Game.md#display-a-countdown-timer).

## [Methods](#methods)

|                                       |                                                                   |
| ------------------------------------- | ----------------------------------------------------------------- |
| **dismissTooltip(player, playSound)** | Dismisses any active tooltip for the target playerSignature\`\`\` |
| dismissTooltip                        |                                                                   |
| (                                     |                                                                   |
| player                                |                                                                   |
| :                                     |                                                                   |

Player
,
playSound
?:

boolean
):

void
;

````Parametersplayer: [Player](../Classes/Player.md)the player that has their tooltip dismissedplaySound: boolean*(Optional)* determines if a default "close sound" should play when the tooltip is closedReturnsvoid                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **showPopupForEveryone(text, displayTime, options)**                          | Shows a popup modal to all players.Signature```
showPopupForEveryone
(
text
:
 
string
 
|
 i18n_utils
.
LocalizableText
,
 displayTime
:
 number
,
 options
?:
 
Partial
<
PopupOptions
>):
 
void
;
```Parameterstext: string \| i18n\_utils.LocalizableTextThe text to display in the popup.displayTime: numberThe duration, in seconds, to display the popup.options: Partial<[PopupOptions](../Type%20Aliases/PopupOptions.md)>*(Optional)* The configuration, such as color or position, for the popup.Returnsvoid                                                                                                                                                                                                                                                                      |
| **showPopupForPlayer(player, text, displayTime, options)**                    | Shows a popup modal to a player.Signature```
showPopupForPlayer
(
player
:
 
Player
,
 text
:
 
string
 
|
 i18n_utils
.
LocalizableText
,
 displayTime
:
 number
,
 options
?:
 
Partial
<
PopupOptions
>):
 
void
;
```Parametersplayer: [Player](../Classes/Player.md)The player to whom the popup is to displayed.text: string \| i18n\_utils.LocalizableTextThe text to display in the popup.displayTime: numberThe duration, in seconds, to display the popup.options: Partial<[PopupOptions](../Type%20Aliases/PopupOptions.md)>*(Optional)* The configuration, such as color or position, for the popup.Returnsvoid                                                                                                                                                                   |
| **showTooltipForPlayer(player, tooltipAnchorLocation, tooltipText, options)** | Shows a tooltip modal to a specific playerSignature```
showTooltipForPlayer
(
player
:
 
Player
,
 tooltipAnchorLocation
:
 
TooltipAnchorLocation
,
 tooltipText
:
 
string
 
|
 i18n_utils
.
LocalizableText
,
 options
?:
 
Partial
<
TooltipOptions
>):
 
void
;
```Parametersplayer: [Player](../Classes/Player.md)the player this tooltip displays fortooltipAnchorLocation: [TooltipAnchorLocation](../Enumerations/TooltipAnchorLocation.md)the anchor point that is used to determine the tooltip display locationtooltipText: string \| i18n\_utils.LocalizableTextthe message the tooltip displaysoptions: Partial<[TooltipOptions](../Type%20Aliases/TooltipOptions.md)>*(Optional)* configuration for the tooltip (display line, play sounds, attachment entity, etc)Returnsvoid |
````

