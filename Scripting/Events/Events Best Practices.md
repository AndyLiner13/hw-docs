Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/events-best-practices

# Events Best Practices

## Unsubscribing from an event

Anytime you register a listener for a broadcast, CodeBlock, or local event, an EventSubscription object is returned. You can use this object to unsubscribe from these events, preventing unnecessary calls. This is especially useful for broadcast events that are inactive or unnecessary.

```
this.eventSubscription = this.connectBroadcastEvent(
  World.onUpdate,
  (data: {deltaTime: number}) => {
    // Do an action during the Update Loop.
  }
);

// Cancel subscription logic.
if(this.eventSubscription !== null) {
  this.eventSubscription.disconnect();
  this.eventSubscription = null;
}
```

## Delaying events with async.setTimeout()

When your world instance is initialized, each object’s script runs its `start()` method. If you have events sent instantly when this method is called, they may go unnoticed as other scripts may not have had time to register event listeners.

If you need to send events as soon as the world is initialized, you should wrap your send event logic within the `this.async.setTimeout()` function, ensuring that your scripts have enough time to initialize all of their listeners.

## Consolidating common events

Recreating the same events for different files is an anti-pattern to avoid in your Horizon code. Instead, we recommend that you create a single module with all events (CodeBlocks, local, and broadcast) to use within your scripts. Your module should look similar to the following:

```
// Module Name: 'EventContainer'
// This script contains all Events our world's code might run.
//
// import EventContainer from './EventContainer'

import { LocalEvent, CodeBlockEvent, Color, Entity, Player, PropTypes} from 'horizon/core';

const EventContainer = {
  testLocalEvent: new LocalEvent<{
    player: Player,
    entity: Entity,
  }>('testLocalEvent'),
  testBroadcastEvent: new LocalEvent<{
    color: Color,
  }>('testBroadcastEvent'),
  testCodeBlockEvent: new CodeBlockEvent<[
    caller: Entity,
    text: string,
    duration: number
    ]>('testCodeBlockEvent', [
    PropTypes.Entity,
    PropTypes.String,
    PropTypes.Number
  ]),
}

export default EventContainer;
```

## CodeBlock interoperability

TypeScript allows you to solve technical problems that are challenging to implement in CodeBlocks and migrating your codebase to TypeScript can take time. If you want to leverage TypeScript functionality right away, your existing system can communicate with new TypeScript-based systems using CodeBlock events. This approach enables you to:

* Implement complex calculations in TypeScript to simplify CodeBlock logic.
* Incorporate features only available in TypeScript APIs within your worlds.
* Reuse modules to reduce code redundancy.