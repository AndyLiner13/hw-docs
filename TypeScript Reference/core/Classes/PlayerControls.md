# PlayerControls Class

Provides static methods to bind to, and query data about custom player input bindings.

## Signature

```typescript
export declare class PlayerControls
```

## Properties

| Property | Description |
| --- | --- |
| onFocusedInteractionInputEnded static [readonly] | This event broadcasts on the last frame of input when the player ends a touch gesture or mouse click while in Focused Interaction mode . Signature static readonly onFocusedInteractionInputEnded: LocalEvent<{ interactionInfo: InteractionInfo[]; }>; Remarks For more information, see the Focused Interaction guide . |
| onFocusedInteractionInputMoved static [readonly] | This event broadcasts while the player is in Focused Interaction mode while using touch gestures or mouse clicks. The event fires on all frames of the input except for the first and last frames which instead fire the PlayerControls.onFocusedInteractionInputStarted and PlayerControls.onFocusedInteractionInputEnded events respectively. Signature static readonly onFocusedInteractionInputMoved: LocalEvent<{ interactionInfo: InteractionInfo[]; }>; Remarks For more information, see the Focused Interaction guide . |
| onFocusedInteractionInputStarted static [readonly] | This event fires on the first frame of input when the player starts a touch gesture or mouse click while in Focused Interaction mode . Signature static readonly onFocusedInteractionInputStarted: LocalEvent<{ interactionInfo: InteractionInfo[]; }>; Remarks You can also receive input data from the PlayerControls.onFocusedInteractionInputMoved and PlayerControls.onFocusedInteractionInputEnded events during Focused Interaction mode. For more information, see the Focused Interaction guide . |
| onHolsteredItemsUpdated static [readonly] | This event fires when an item is holstered or unholstered. The purpose of this event is to populate a list of holstered items in a UI panel in order to allow the player to switch between them. Signature static readonly onHolsteredItemsUpdated: LocalEvent<{ player: Player; items: Entity[]; grabbedItem: Entity; }>; Remarks The grabbedItem also appears in the items list so this will need to be filtered out when iterating the list of items to display in the UI. |

## Methods

| Method | Description |
| --- | --- |
| connectLocalInput(input, icon, disposableObject, options) static | Connects to input events for the local player. Signature static connectLocalInput(input: PlayerInputAction, icon: ButtonIcon, disposableObject: DisposableObject, options?: PlayerControlsConnectOptions): PlayerInput; Parameters input: PlayerInputAction The action to respond to. icon: ButtonIcon The icon to use for the button, on platforms that display on-screen buttons for actions. disposableObject: DisposableObject The DisposableObject that controls the lifetime of the connection options: PlayerControlsConnectOptions (Optional) Connection options, see PlayerControlsConnectOptions for defaults. Returns PlayerInput A PlayerInput instance that can be used to poll the status of the input, or register a state change callback. Remarks This function fails if called on the server. On platforms that display on-screen buttons for actions (such as mobile), displays a button with the specified icon. |
| disableSystemControls(tapAnywhereDisabled) static | Disables the on-screen system controls for the local player. Signature static disableSystemControls(tapAnywhereDisabled?: boolean): void; Parameters tapAnywhereDisabled: boolean(Optional) True to disable on-screen system controls; false to enable them. The default value is false. Returns void Remarks This function fails if called on the server. |
| enableSystemControls() static | Enables the on-screen system controls for the local player. Signature static enableSystemControls(): void; Returns void Remarks This function fails if called on the server. |
| equipHolsteredItem(index) static | Equips the item at the selected holster index if there is one Signature static equipHolsteredItem(index: number): void; Parameters index: number Returns void |
| equipNextHolsteredItem() static | Equips the next holstered item if there is one Signature static equipNextHolsteredItem(): void; Returns void |
| equipPreviousHolsteredItem() static | Equips the previous holstered item if there is one Signature static equipPreviousHolsteredItem(): void; Returns void |
| getPlatformKeyNames(action) static | Returns a list of names that represent the physical buttons or keys bound to the specified action. Signature static getPlatformKeyNames(action: PlayerInputAction): Array<string>; Parameters action: PlayerInputAction The action to get the key names for. Returns Array<string>An array of key names. Remarks This function fails if called on the server. |
| isInputActionSupported(action) static | Indicates whether the action is supported on the current platform. Signature static isInputActionSupported(action: PlayerInputAction): boolean; Parameters action: PlayerInputAction The action to query. Returns booleantrue if the action is supported on the current platform; otherwise, false. Remarks This function fails if called on the server. Connecting to an unsupported input is allowed, but the input won't activate and its axis value will remain at 0. |
| triggerContextualMultiHolsterAction() static | Triggers a contextual based multi-holstering action if one is available. This function is designed to mirror the behaviour of the system holstering button, and will open the system holstering UI if there is more than one item holstered. Signature static triggerContextualMultiHolsterAction(): void; Returns void |
| triggerDropAction() static | Triggers the player action to drop the currently held item Signature static triggerDropAction(): void; Returns void |
| triggerInputActionDown(inputAction) static | Triggers the down event for an input action for the local player. Signature static triggerInputActionDown(inputAction: PlayerInputAction): void; Parameters inputAction: PlayerInputAction The action to trigger / activate. Returns void Remarks This function fails if called on the server. On platforms that display on-screen buttons for actions (such as mobile), triggers the specified action. |
| triggerInputActionUp(inputAction) static | Triggers the up event for an input action for the local player. Signature static triggerInputActionUp(inputAction: PlayerInputAction): void; Parameters inputAction: PlayerInputAction The action to trigger / activate. Returns void Remarks This function fails if called on the server. On platforms that display on-screen buttons for actions (such as mobile), triggers the specified action. |

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Freference%2F2.0.0%2Fcore_playercontrols%2F)