---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_focusedinteraction
---

# [FocusedInteraction Class](#focusedinteraction-class)

Options for setting up and customizing visual feedback when players interact with the world in Focused Interaction mode on web and mobile clients.

## [Signature](#signature)

```ts
export declare class FocusedInteraction 
```

## [Remarks](#remarks)

Focused Interaction mode replaces on-screen controls on web and mobile clients with touch and mouse input that includes direct input access.\
You can enable and disable Focused Interaction mode with the [Player.enterFocusedInteractionMode()](Player.md#enterfocusedinteractionmode) and [Player.exitFocusedInteractionMode()](Player.md#exitfocusedinteractionmode) methods.\
When Focused Interaction mode is enabled, you can subscribe to the [PlayerControls.onFocusedInteractionInputStarted](PlayerControls.md#onfocusedinteractioninputstarted), [PlayerControls.onFocusedInteractionInputMoved](PlayerControls.md#onfocusedinteractioninputmoved), and [PlayerControls.onFocusedInteractionInputEnded](PlayerControls.md#onfocusedinteractioninputended) events.\
For more information, see the [Focused Interaction guide](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/references-and-guides/how-to-use-focused-interaction).

## [Constructors](#constructors)

### [(constructor)(player)](#constructorplayer)

Creates a new `FocusedInteraction` instance.

**Signature**

```ts
constructor(player: Player);
```

**Parameters**

player: [Player](Player.md)

The player to assign to the focused interaction settings.

## [Properties](#properties)

### [player \[readonly\] protected](#player-readonly-protected)

The current player.

**Signature**

```ts
protected readonly player: Player;
```

## [Methods](#methods)

### [setTapOptions(isEnabled, tapOptions)](#settapoptionsisenabled-tapoptions)

Toggle and customize the visual feedback to display when players use tap input during [Focused Interaction mode](FocusedInteraction.md).

**Signature**

```ts
setTapOptions(isEnabled: boolean, tapOptions?: Partial<FocusedInteractionTapOptions>): void;
```

**Parameters**

isEnabled: boolean

true to enable visual feedback for tap input; false to disable it.

tapOptions: Partial<[FocusedInteractionTapOptions](../Type%20Aliases/FocusedInteractionTapOptions.md)>

*(Optional)* The options to customize the tap visuals.

**Returns**

void

### [setTrailOptions(isEnabled, trailOptions)](#settrailoptionsisenabled-trailoptions)

Toggle and customize visual feedback trails that are displayed when players use drag input during [Focused Interaction mode](FocusedInteraction.md).

**Signature**

```ts
setTrailOptions(isEnabled: boolean, trailOptions?: Partial<FocusedInteractionTrailOptions>): void;
```

**Parameters**

isEnabled: boolean

true to enable trails; false to disable them.

trailOptions: Partial<[FocusedInteractionTrailOptions](../Type%20Aliases/FocusedInteractionTrailOptions.md)>

*(Optional)* Options to customize trail visuals.

**Returns**

void

