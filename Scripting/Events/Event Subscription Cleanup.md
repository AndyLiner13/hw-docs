# Event Subscription Cleanup

## What an event subscription gives you

[Events Best Practices](Events%20Best%20Practices.md#unsubscribing-from-an-event) states that registering a listener for a broadcast, CodeBlock, or local event returns an [EventSubscription](../../Reference/core/Interfaces/EventSubscription.md). The returned [EventSubscription](../../Reference/core/Interfaces/EventSubscription.md) exists so a script can stop listening later by calling [EventSubscription.disconnect()](../../Reference/core/Interfaces/EventSubscription.md#disconnect), which is especially useful when a broadcast listener becomes inactive or unnecessary.

[Component.connectCodeBlockEvent()](../../Reference/core/Abstract%20Classes/Component.md), [Component.connectLocalEvent()](../../Reference/core/Abstract%20Classes/Component.md), [Component.connectLocalBroadcastEvent()](../../Reference/core/Abstract%20Classes/Component.md), [Component.connectNetworkEvent()](../../Reference/core/Abstract%20Classes/Component.md), and [Component.connectNetworkBroadcastEvent()](../../Reference/core/Abstract%20Classes/Component.md) all return [EventSubscription](../../Reference/core/Interfaces/EventSubscription.md) in the current type surface, so the same subscription-lifecycle model applies across the main event-listening APIs.

## What happens at component disposal

The main lifecycle guarantee lives in two different official places. [TypeScript Script Lifecycle](../TypeScript%20Script%20Lifecycle.md#typescript-component-lifecycle) says cleanup should be attached to [Component.dispose()](../../Reference/core/Abstract%20Classes/Component.md#dispose), while the [Component.dispose()](../../Reference/core/Abstract%20Classes/Component.md#dispose) reference says subscriptions created through the built-in connect methods are cleaned up automatically. The [Frame Update Cycle](../../Desktop%20editor/Frame%20Update%20Cycle.md#final-callbacks) page adds the runtime detail that subscriptions are disconnected for components marked for disposal before the [Component.dispose()](../../Reference/core/Abstract%20Classes/Component.md#dispose) callback runs.

That means storing every [EventSubscription](../../Reference/core/Interfaces/EventSubscription.md) purely so it can be disconnected during [Component.dispose()](../../Reference/core/Abstract%20Classes/Component.md#dispose) is not a general requirement of the public API. Automatic teardown already covers listeners registered through the built-in component event APIs when the component instance is destroyed, reset, de-spawned, or transferred to a new owner as described in [TypeScript Script Lifecycle](../TypeScript%20Script%20Lifecycle.md#typescript-component-lifecycle).

## When keeping the handle still matters

Keeping an [EventSubscription](../../Reference/core/Interfaces/EventSubscription.md) is still useful when the listener should stop before the component itself is disposed. That is the use case shown by [Events Best Practices](Events%20Best%20Practices.md#unsubscribing-from-an-event): a listener can be active for one phase of gameplay, disconnected with [EventSubscription.disconnect()](../../Reference/core/Interfaces/EventSubscription.md#disconnect), and then left inactive while the component continues running.

| Goal | Keep the [EventSubscription](../../Reference/core/Interfaces/EventSubscription.md)? | Why |
| --- | --- | --- |
| Stop a listener during normal gameplay while the component keeps running | Yes | [Events Best Practices](Events%20Best%20Practices.md#unsubscribing-from-an-event) explicitly shows using [EventSubscription.disconnect()](../../Reference/core/Interfaces/EventSubscription.md#disconnect) to stop unnecessary calls before component teardown. |
| Let a listener live for the entire component lifetime | Usually no | [Component.dispose()](../../Reference/core/Abstract%20Classes/Component.md#dispose) and [Frame Update Cycle](../../Desktop%20editor/Frame%20Update%20Cycle.md#final-callbacks) already describe automatic disconnection during disposal. |
| Coordinate other cleanup work alongside event teardown | Maybe | [TypeScript Script Lifecycle](../TypeScript%20Script%20Lifecycle.md#typescript-component-lifecycle) says cleanup belongs in [Component.dispose()](../../Reference/core/Abstract%20Classes/Component.md#dispose), so a stored handle can still be part of a broader shutdown sequence even though the event API itself already auto-cleans subscriptions. |

## Practical pattern

If a listener is meant to stay active for the whole lifetime of the component, it is reasonable to rely on the automatic cleanup described by [Component.dispose()](../../Reference/core/Abstract%20Classes/Component.md#dispose). If a listener is temporary, phase-based, or expensive enough that it should be turned off early, store the returned [EventSubscription](../../Reference/core/Interfaces/EventSubscription.md) and call [EventSubscription.disconnect()](../../Reference/core/Interfaces/EventSubscription.md#disconnect) as soon as the listener is no longer needed.

```ts
import * as hz from 'horizon/core';

class TemporaryUpdateListener extends hz.Component<typeof TemporaryUpdateListener> {
  private updateSub: hz.EventSubscription | null = null;
  private elapsed = 0;

  start() {
    this.updateSub = this.connectLocalBroadcastEvent(hz.World.onUpdate, ({ deltaTime }) => {
      this.elapsed += deltaTime;

      if (this.elapsed >= 3 && this.updateSub) {
        this.updateSub.disconnect();
        this.updateSub = null;
      }
    });
  }
}

hz.Component.register(TemporaryUpdateListener);
```

In this pattern, storing the [EventSubscription](../../Reference/core/Interfaces/EventSubscription.md) is valuable because the listener is intentionally shorter-lived than the component. If the listener were supposed to remain active until the component ended, the automatic disposal behavior documented on [Component.dispose()](../../Reference/core/Abstract%20Classes/Component.md#dispose) would already handle the final disconnect.