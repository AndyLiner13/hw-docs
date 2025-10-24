# FocusedInteraction Class

Options for setting up and customizing visual feedback when players interact with the world in Focused Interaction mode on web and mobile clients.

## Signature

```typescript
export declare class FocusedInteraction
```

## Remarks

Focused Interaction mode replaces on-screen controls on web and mobile clients with touch and mouse input that includes direct input access.

You can enable and disable Focused Interaction mode with the [Player.enterFocusedInteractionMode()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#enterfocusedinteractionmode) and [Player.exitFocusedInteractionMode()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#exitfocusedinteractionmode) methods.

When Focused Interaction mode is enabled, you can subscribe to the [PlayerControls.onFocusedInteractionInputStarted](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols#onfocusedinteractioninputstarted), [PlayerControls.onFocusedInteractionInputMoved](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols#onfocusedinteractioninputmoved), and [PlayerControls.onFocusedInteractionInputEnded](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols#onfocusedinteractioninputended) events.

## Constructors

### (constructor)(player)

Creates a new FocusedInteraction instance.

**Signature:**
```typescript
constructor(player: Player);
```

**Parameters:**
- `player: Player` - The player to assign to the focused interaction settings.

## Properties

### player [readonly]

The current player.

**Signature:**
```typescript
protected readonly player: Player;
```

## Methods

### setTapOptions(isEnabled, tapOptions)

Toggle and customize the visual feedback to display when players use tap input during Focused Interaction mode.

**Signature:**
```typescript
setTapOptions(isEnabled: boolean, tapOptions?: Partial<FocusedInteractionTapOptions>): void;
```

**Parameters:**
- `isEnabled: boolean` - true to enable visual feedback for tap input; false to disable it.
- `tapOptions: Partial<FocusedInteractionTapOptions>` (Optional) - The options to customize the tap visuals.

**Returns:**
`void`

### setTrailOptions(isEnabled, trailOptions)

Toggle and customize visual feedback trails that are displayed when players use drag input during Focused Interaction mode.

**Signature:**
```typescript
setTrailOptions(isEnabled: boolean, trailOptions?: Partial<FocusedInteractionTrailOptions>): void;
```

**Parameters:**
- `isEnabled: boolean` - true to enable trails; false to disable them.
- `trailOptions: Partial<FocusedInteractionTrailOptions>` (Optional) - Options to customize trail visuals.

**Returns:**
`void`