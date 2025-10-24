# Turbo Variable

Represents an analytics managers for sending analytics data to the In-World Analytics system for logging. This variable is a shared instance of the `TurboManager` class.

## Signature

```typescript
Turbo: TurboManager
```

## Remarks

The `Turbo` instance is used to implement an analytics manager in TypeScript for sending analytics events directly to the server for logging.

The `Turbo` instance provides several important methods to call from your analytics manager: the `Turbo.register(component, configs)` and `Turbo.send(event, payload)` methods.

Before using the `Turbo` instance to create an analytics manager, you must complete these steps:

1. In Desktop Editor, enable the horizon/analytics setting in Script Settings.
2. Optional but helpful: In Desktop Editor, enable TurboAnalytics in the Asset Library.
3. Add an [entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) to your world that you can attach to the the Analytics API in your script. This can be an empty entity.

To create your analytics manager, do the following in your script:

1. Create a class for your analytics manager by extending the [Component](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component) class.
2. If you aren't using the [default](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodefaultsettings) Turbo settings, configure the analytics categories you want to capture in the [ITurboSettings](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings) interface.
3. In a script, register your analytics manager with the Turbo interface by calling the `Turbo.register(component, configs)` method. When you call this method, pass in your component and Turbo settings.
4. Add `Turbo.send(event, payload)` calls to the event subscriptions that you want to log with In-World Analytics.

When you call this method, pass in the event name from the [TurboEvents](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turboevents) variable and the payload objects to log. For available payloads, see the Type Alias section of the API documentation. The name of the payload type will correspond to the event name in the [TurboEvents](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turboevents) variable.

5. Add a `player: string` field to the payload. For example `player: this.serverPlayer`. This field is not defined in [TurboEvents](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turboevents) because it is defined in the underlying type, so it is required.

For more information on using In-World Analytics, see the [In-World Analytics](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/advanced/using-in-world-analytics) guide.

## Examples

This example script implements a custom analytics manager that sends the OnAreaEnter event when the current player enters the lobby area of the world.

```typescript
import * as hz from 'horizon/core';
import {Turbo, TurboDefaultSettings, TurboEvents, AreaEnterPayload} from 'horizon/analytics';

// Creates the analytics event to send.
export const areaEntered = new hz.LocalEvent<{ player: hz.Player, area: string }>("areaEntered");

// Creates an analytics manager.
export class AnalyticsManager extends hz.Component {
 static propsDefinition = {
   overrideDebug: { type: hz.PropTypes.Boolean, default: false },
 };
 static s_instance: AnalyticsManager;
 serverPlayer!: hz.Player;
 serverPlayerID!: number;
 overrideDebug!: boolean;

 start() {
   // Registers the analytics manager with the Turbo interface.
   Turbo.register(this, TurboDefaultSettings);
   AnalyticsManager.s_instance = this;
   this.subscribeToEvents();
  }

 // You can group event subscriptions in this method.
 private subscribeToEvents() {
   // Creates the event payload to send.
   const areaEnterPayload: AreaEnterPayload = {
     actionArea: `CombatTutorial`,
     actionAreaIsLobbySection: false,
     actionAreaIsPlayerReadyZone: true,
     turboState: ParticipationEnum.IN_ROUND,
     nextArea: {
       actionArea: `Stage1`,
       actionAreaIsLobbySection: false,
       actionAreaIsPlayerReadyZone: true,
     },
     player: this.serverPlayer
   };

   // The event subscription to track.
   this.connectLocalBroadcastEvent(areaEntered, (data) => {
     // This call sends the analytics event for logging.
     Turbo.send(TurboEvents.OnAreaEnter, areaEnterPayload);
   });
 }
}
```