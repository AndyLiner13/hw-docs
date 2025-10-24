# GrabbableEntity Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) Represents an entity that a player can grab.

## Signature

```typescript
export declare class FocusedInteraction
```

## Constructors

| Constructor | Description |
|-------------|-------------|
| `constructor(player: Player)` | Creates a new FocusedInteraction instance. |

**Parameters:**
- `player: Player` - The player to assign to the focused interaction settings.

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `player` [readonly] | `Player` | The current player. |

## Methods

| Method | Description |
|--------|-------------|
| `setTapOptions(isEnabled: boolean, tapOptions?: Partial<FocusedInteractionTapOptions>): void` | Toggle and customize the visual feedback to display when players use tap input during Focused Interaction mode. |
| `setTrailOptions(isEnabled: boolean, trailOptions?: Partial<FocusedInteractionTrailOptions>): void` | Toggle and customize visual feedback trails that are displayed when players use drag input during Focused Interaction mode. |

### setTapOptions

Toggle and customize the visual feedback to display when players use tap input during Focused Interaction mode.

```typescript
setTapOptions(isEnabled: boolean, tapOptions?: Partial<FocusedInteractionTapOptions>): void
```

**Parameters:**
- `isEnabled: boolean` - true to enable visual feedback for tap input; false to disable it.
- `tapOptions: Partial<FocusedInteractionTapOptions>` - (Optional) The options to customize the tap visuals.

**Returns:** `void`

### setTrailOptions

Toggle and customize visual feedback trails that are displayed when players use drag input during Focused Interaction mode.

```typescript
setTrailOptions(isEnabled: boolean, trailOptions?: Partial<FocusedInteractionTrailOptions>): void
```

**Parameters:**
- `isEnabled: boolean` - true to enable trails; false to disable them.
- `trailOptions: Partial<FocusedInteractionTrailOptions>` - (Optional) Options to customize trail visuals.

**Returns:** `void`

## Remarks

Focused Interaction mode replaces on-screen controls on web and mobile clients with touch and mouse input that includes direct input access.

You can enable and disable Focused Interaction mode with the [Player.enterFocusedInteractionMode()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#enterfocusedinteractionmode) and [Player.exitFocusedInteractionMode()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player#exitfocusedinteractionmode) methods.

When Focused Interaction mode is enabled, you can subscribe to the [PlayerControls.onFocusedInteractionInputStarted](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols#onfocusedinteractioninputstarted), [PlayerControls.onFocusedInteractionInputMoved](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols#onfocusedinteractioninputmoved), and [PlayerControls.onFocusedInteractionInputEnded](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playercontrols#onfocusedinteractioninputended) events.

## Examples

### Setting Up Focused Interaction

```typescript
// Create focused interaction instance for a player
const focusedInteraction = new FocusedInteraction(player);

// Enable tap feedback with custom options
focusedInteraction.setTapOptions(true, {
    // Custom tap visual options
});

// Enable trail feedback with custom options
focusedInteraction.setTrailOptions(true, {
    // Custom trail visual options
});

// Enter focused interaction mode
player.enterFocusedInteractionMode();

// Set up event listeners
player.getControls().onFocusedInteractionInputStarted.add((event) => {
    console.log("Input started:", event);
});

player.getControls().onFocusedInteractionInputMoved.add((event) => {
    console.log("Input moved:", event);
});

player.getControls().onFocusedInteractionInputEnded.add((event) => {
    console.log("Input ended:", event);
});
```