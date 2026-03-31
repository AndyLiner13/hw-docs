# TypeScript Lifecycle Timing Caveats

The official lifecycle guidance for [Component.preStart()](../Reference/core/Abstract%20Classes/Component.md#prestart), [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start), [Component.transferOwnership()](../Reference/core/Abstract%20Classes/Component.md#transferownership_oldowner-_newowner), [Component.receiveOwnership()](../Reference/core/Abstract%20Classes/Component.md#receiveownership_serializablestate-_oldowner-_newowner), [Component.async](../Reference/core/Abstract%20Classes/Component.md#async), and [CodeBlockEvents.OnPlayerExitWorld](../Reference/core/Variables/CodeBlockEvents.md#onplayerexitworld) is spread across several different pages. Reading those pages together reveals timing rules that are easy to miss if you only look at one API reference at a time. This guide consolidates those relationships and highlights the places where the official sources do not line up cleanly.

## Register listeners in preStart when startup ordering matters

[TypeScript Script Lifecycle](TypeScript%20Script%20Lifecycle.md) says [Component.preStart()](../Reference/core/Abstract%20Classes/Component.md#prestart) runs for every component before any [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) method runs, and it explicitly says that networked scripting events are buffered until all `preStart()` methods have been called. That is the strongest official guarantee about listener readiness during world startup.

The startup-event guidance becomes more concrete in [Events Best Practices](Events/Events%20Best%20Practices.md), which warns that events sent immediately when [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) runs can go unnoticed because other scripts may not have registered their listeners yet. The same page recommends wrapping the send in [Component.async](../Reference/core/Abstract%20Classes/Component.md#async) via `this.async.setTimeout()` so the world gets an extra turn to finish startup listener registration.

The generated [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) reference complicates this by saying `start()` is where you can add listeners that need to run when the script starts running. That statement is not wrong, but it is broader than the lifecycle guarantee. The practical reading is that listener registration in [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) is supported, but listener registration in [Component.preStart()](../Reference/core/Abstract%20Classes/Component.md#prestart) is safer when another component may emit a startup event immediately.

| Task | Safest place | Why |
| --- | --- | --- |
| Connect listeners that must hear the earliest startup traffic | [Component.preStart()](../Reference/core/Abstract%20Classes/Component.md#prestart) | [TypeScript Script Lifecycle](TypeScript%20Script%20Lifecycle.md) guarantees `preStart()` finishes for all components before any `start()` runs |
| Send an initialization event that depends on other listeners | [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) plus [Component.async](../Reference/core/Abstract%20Classes/Component.md#async) | [Events Best Practices](Events/Events%20Best%20Practices.md) recommends delaying the send so listeners have time to initialize |
| Discover other component instances with [Component.getComponents()](../Reference/core/Abstract%20Classes/Component.md#getcomponentstype-static) | [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) | The [Component.getComponents()](../Reference/core/Abstract%20Classes/Component.md#getcomponentstype-static) reference says it should not be used in `preStart()` because other component instances may not exist yet |

The [Component.getComponents()](../Reference/core/Abstract%20Classes/Component.md#getcomponentstype-static) caveat is especially important because it explains why [Component.preStart()](../Reference/core/Abstract%20Classes/Component.md#prestart) is not a universal replacement for [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start). `preStart()` is best for readiness-sensitive setup such as event connections. [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) remains the better place for work that depends on the rest of the component graph already existing.

## Startup sends need an extra scheduling step

[Events Best Practices](Events/Events%20Best%20Practices.md) does not just recommend delaying startup sends in theory. The official [CodeBlock Events](Events/CodeBlock%20Events.md) examples register listeners in [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) and then use [Component.async](../Reference/core/Abstract%20Classes/Component.md#async) to delay [Component.sendCodeBlockEvent()](../Reference/core/Abstract%20Classes/Component.md#sendcodeblockeventtarget-event-args) so listeners are ready. That makes the intended pattern explicit: connect first, then defer the first send.

The important nuance is that the extra timeout is about lifecycle sequencing, not long-duration waiting. In many cases `this.async.setTimeout(..., 0)` is enough because the goal is to move the send out of the same startup turn described in [Events Best Practices](Events/Events%20Best%20Practices.md), not to introduce a user-visible delay.

```typescript
import { Component, LocalEvent } from 'horizon/core';

const readyEvent = new LocalEvent<{ message: string }>('readyEvent');

class SafeStartup extends Component<typeof SafeStartup> {
  preStart() {
    this.connectLocalBroadcastEvent(readyEvent, ({ message }) => {
      console.log(message);
    });
  }

  start() {
    this.async.setTimeout(() => {
      this.sendLocalBroadcastEvent(readyEvent, { message: 'world ready' });
    }, 0);
  }
}

Component.register(SafeStartup);
```

## Ownership transfer replays startup and can still lose events

[TypeScript Script Lifecycle](TypeScript%20Script%20Lifecycle.md) describes ownership transfer as a lifecycle restart on the new owner: [Component.preStart()](../Reference/core/Abstract%20Classes/Component.md#prestart) runs, then [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) runs, and then [Component.receiveOwnership()](../Reference/core/Abstract%20Classes/Component.md#receiveownership_serializablestate-_oldowner-_newowner) receives transferred state. [Maintaining Local State on Ownership Change](Local%20scripting/Maintaining%20Local%20State%20on%20Ownership%20Change.md) and the [Component.transferOwnership()](../Reference/core/Abstract%20Classes/Component.md#transferownership_oldowner-_newowner) / [Component.receiveOwnership()](../Reference/core/Abstract%20Classes/Component.md#receiveownership_serializablestate-_oldowner-_newowner) references make clear that this is the supported path for preserving local runtime state.

[Getting Started with Local Scripting](Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md) adds the timing caveat that is easy to miss: when ownership changes, the local runtime calls [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) on the new local script instance, and any events fired before or during that transfer are lost, including events sent with a delay. That means delayed startup sends are helpful during normal world initialization, but they are not a guarantee that a transferring local script will catch everything.

The safe pattern is to use [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) to rebuild local subscriptions and default runtime state after transfer, and use [Component.receiveOwnership()](../Reference/core/Abstract%20Classes/Component.md#receiveownership_serializablestate-_oldowner-_newowner) only for the serializable state that must survive the handoff. If the state matters and you do not implement [Component.transferOwnership()](../Reference/core/Abstract%20Classes/Component.md#transferownership_oldowner-_newowner), [Maintaining Local State on Ownership Change](Local%20scripting/Maintaining%20Local%20State%20on%20Ownership%20Change.md) says that state is simply lost.

## Local scripts cannot rely on OnPlayerExitWorld for their own owner

The event catalog still exposes [CodeBlockEvents.OnPlayerExitWorld](../Reference/core/Variables/CodeBlockEvents.md#onplayerexitworld) as a normal built-in event, and the reference says it is broadcast from the server when a player exits the world. That description is true at the event-definition level, but it is incomplete for local-execution scripts.

[Getting Started with Local Scripting](Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md#onplayerexitworld-isnt-received-by-local-scripts) states that if a local script subscribes to [CodeBlockEvents.OnPlayerExitWorld](../Reference/core/Variables/CodeBlockEvents.md#onplayerexitworld), it will not receive that event when the player who owns the script leaves the world. The same page recommends using a default-execution script to track the event and then notify the local script. In practice, that means owner-exit cleanup should be coordinated by a server/default component rather than entrusted to the departing local component.

This restriction also explains why ownership-transfer cleanup can feel inconsistent if you only test with stable clients. A local script can keep working normally for many local events, but the owner-exit path is special because the script is disappearing at the same time the world is trying to announce the exit.

## Async start examples and void signatures do not fully agree

The public signatures for [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) and [UIComponent.start()](../Reference/ui/Abstract%20Classes/UIComponent.md#start) both say `start(): void`. At the same time, official examples in the [Social reference](../Reference/social/Classes/Social.md) and several tutorials use `async start()` directly. The current `.d.ts` surface mirrors that same contradiction by keeping the `void` signature while embedding `async start()` examples in JSDoc.

The safest way to read those sources together is conservative: official docs clearly permit authors to write `async start()` in examples, but the lifecycle documentation in [TypeScript Script Lifecycle](TypeScript%20Script%20Lifecycle.md) only promises ordering around [Component.preStart()](../Reference/core/Abstract%20Classes/Component.md#prestart) and [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start). It does not say that the lifecycle waits for a returned `Promise` before other components continue. If your logic depends on explicit sequencing, structure that sequencing inside your own component instead of assuming the broader lifecycle awaits your `async start()`.

```typescript
import { Component } from 'horizon/core';

class ExplicitStartup extends Component<typeof ExplicitStartup> {
  start() {
    void this.loadDataAndInitialize();
  }

  private async loadDataAndInitialize() {
    // Await here when your own component needs it,
    // without assuming other components wait for this promise.
  }
}

Component.register(ExplicitStartup);
```

## Practical checklist

- Use [Component.preStart()](../Reference/core/Abstract%20Classes/Component.md#prestart) for listener setup that must be ready before anyone emits startup traffic, because [TypeScript Script Lifecycle](TypeScript%20Script%20Lifecycle.md) gives `preStart()` the strongest ordering guarantee.
- Use [Component.start()](../Reference/core/Abstract%20Classes/Component.md#start) for work that depends on the rest of the world already existing, especially [Component.getComponents()](../Reference/core/Abstract%20Classes/Component.md#getcomponentstype-static) lookups.
- Use [Component.async](../Reference/core/Abstract%20Classes/Component.md#async) to delay the first startup send when peers may still be connecting listeners, as recommended by [Events Best Practices](Events/Events%20Best%20Practices.md).
- Implement [Component.transferOwnership()](../Reference/core/Abstract%20Classes/Component.md#transferownership_oldowner-_newowner) and [Component.receiveOwnership()](../Reference/core/Abstract%20Classes/Component.md#receiveownership_serializablestate-_oldowner-_newowner) when local runtime state must survive ownership changes, following [Maintaining Local State on Ownership Change](Local%20scripting/Maintaining%20Local%20State%20on%20Ownership%20Change.md).
- Do not rely on [CodeBlockEvents.OnPlayerExitWorld](../Reference/core/Variables/CodeBlockEvents.md#onplayerexitworld) to clean up the owner’s own local script; follow the workaround in [Getting Started with Local Scripting](Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md#onplayerexitworld-isnt-received-by-local-scripts).
- Treat `async start()` as a documentation-supported syntax pattern, but not as a documented lifecycle barrier, because the official sources show examples while still publishing `void` signatures.