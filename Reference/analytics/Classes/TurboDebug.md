Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_turbodebug

API reference

# TurboDebug Class

A set of tools for debugging and testing Turbo implementations.

## Signature

```
export declare class TurboDebug
```

## Remarks

To use Turbo debugging, you must enable it by setting the [ITurboSettings.debug](https://developers.meta.com/horizon-worlds/reference/2.0.0/analytics_iturbosettings#debug) property to `true`.

## Properties

|  |  |
| --- | --- |
| **events**  static | An event subscription that delivers enriched analytics payloads to event listeners.      Signature  ``` static events: {         onDebugTurboPlayerEvent: hz.LocalEvent<{             player: hz.Player;             eventData: EventData;             action: Action;         }>;     }; ``` |