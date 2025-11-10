Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/typescript-script-lifecycle

# TypeScript Script Lifecycle

This document describes the lifecycle of a TypeScript script and its components in Meta Horizon Worlds. Understanding the order of these events may help in debugging or optimizing your scripts.

## On world load

The following events happen when a world is loaded in edit mode or visit mode:

- The world snapshot is loaded, which includes script data.
- In edit mode, TypeScript scripts are transpiled if artifacts from a prior transpilation don’t exist in the snapshot. This can happen if a script had transpile errors on the last save.
  * If loading in visit mode, pre-existing transpilation artifacts are expected for all scripts.
- All TypeScript scripts are executed on all clients.
  * This doesn’t call any TypeScript component methods (such as `start` ), but if you have logic or logs at the top level of a script, this is when they are called.
  * **Script execution order is not guaranteed**. Avoid circular dependencies in your TypeScript modules; there will be warnings in the console if circular dependencies are present. In v2.0.0 of the TypeScript API, you can rely on the preStart method, which is guaranteed to be called before `start` on the local machine, and before any networked scripted events are triggered.
- The world start event is sent and all `start` methods are called on TypeScript components. All scripts with the default execution context will run on the server, and local scripts will run on the client that owns the entity the script component is attached to. On world load, local scripts start on the server but their ownership can be transferred later, either explicitly by scripting APIs or implicitly, such as by grabbing an object or using a projectile launcher.

## TypeScript component lifecycle

### Order of execution

**Note**: The order of execution of scripts is non-deterministic. When the world is initialized, each valid script is executed as soon as it is possible to execute. The execution sequence of scripts cannot be determined beforehand.

A TypeScript executes in the the following order over the lifecycle of each component in a script:

- The TypeScript module containing a component is executed and a `Component.register` call makes the component visible to the rest of the system (attaching to another entity, or using on an entity that the component has already been attached to).
- `initializeUI()` (Custom UI only): If your script includes Custom UI components, the `initializeUI()` method is called. This method is limited to initializing a custom UI component for display in the world.
- `preStart()` (TypeScript API v2.0.0 or later): `preStart()` is called before the `start()` method on a per-machine basis. All networked scripting events are buffered until all preStart methods have been called in the World. This guarantees that preStart code (such as setting up event listeners) is called before any start method is run on a component. The order of `preStart()` calls across scripts is not guaranteed.
- `start()`: The order of `start()` calls across scripts is not guaranteed. In TypeScript API v2.0.0 or later, `start()` always executes after `preStart()` on a per-machine basis.
- update: There is no explicit update method on TypeScript components. However, the `World.Update()` or `World.PrePhysicsUpdate()` system events can be listened to in order to run logic on every frame.
  a. `Update()` is run after physics simulations are run, and `PrePhysicsUpdate()` is run before physics simulations are run.
  b. `PrePhysicsUpdate()` is generally useful to deal with moving platforms before player positions are finalized. Any large amount of work should be split across multiple frames to ensure performance is stable.
- `dispose()`: `dispose()` is called when a TypeScript component instance is destroyed, when the world is stopped or reset, on ownership transfer, or when an entity attached to a script is de-spawned. Any cleanup should be hooked into the `dispose()` method.

The following events may be executed during the script lifecycle:

* `transferOwnership`: Transfer ownership is called before ownership is transferred from a component. It allows optional returning state information to be sent to the new owner. See “Ownership transfer” below.
* `receiveOwnership`: Receive ownership is called when a component receives ownership from another client. This may contain script state information passed from the prior owner. See “Ownership transfer” below.
* Timers: `async.setTimeout` and `async.setInterval` run some time after a specified number of milliseconds have passed. This is typically the soonest frame after the timer has elapsed. `setIinterval` timers run repeatedly at the set interval, and `setTimeout` timers run only once. See “Timed events” below.

## Ownership transfer

Ownership is a mechanism used to determine which client (either the server or a user’s device) is the authority for a particular entity’s state. A script component is attached to a particular entity, and that entity is owned by a particular client. So in effect, ownership determines where the script executes.

To learn more about ownership, see [Ownership in Meta Horizon Worlds](/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds/).

Ownership transfer is triggered explicitly by the scripting API, or implicitly by one of the following methods:

* Grabbing an entity transfers ownership of that entity to the player that grabbed it.
* Ownership transfers to a player when an entity is attached to the player.
* Ownership transfers on hit with a physical object that is already owned by someone else.

### Ownership transfer example

The following example shows the sequence of events that occur when transferring “ComponentA” from player1 to player2:

- ComponentA(player1) calls `this.owner.set(player2)`
  a. The `transferOwnership` method is called to send state to the new owner.
  b. The `dispose` method is called to clean up the component on this client.
- ComponentA(player2)
  a. `preStart` is called. (Only for TypeScript API v2.0.0 and newer.)
  b. `start` is called.
  c. `receiveOwnership` is called to handle any state sent from the prior owner.

## Timers

Although it’s best to avoid where possible, you may need to create sequence of events, such that one event occurs before another. The `async.setTimeout` and `async.setInterval` methods can be used to create interval-based execution of code.

### Simple timer example

In the following example, the script registers a listener to a local event called `testEvent` and then waits 500 milliseconds before sending out a `testEvent`.

```_ar4n
import {Component, LocalEvent} from 'horizon/core';

class MyEventExample extends Component {
  testEvent = new LocalEvent<{message: String}>('testEvent');

 start () {
    // Register to receive Local Event.
    this.connectLocalEvent (
      this.entity,
      this.testEvent,
      (data: {message: String}) => {
        console.log(data.message);
      });

    // Delay by 500 milliseconds to ensure listeners are ready.
    this.async.setTimeout(() => {
      this.sendLocalEvent(
        this.entity,
        this.testEvent,
        {message: "My Local Event Test"}
      );
    }, 500);
  }
}

Component.register(MyEventExample);
```

### Simple timer example using a Promise

It’s likely that waiting 500 milliseconds will work. However, in a complex runtime environment in which many scripts are being executed at startup, it may take longer for the event listener for `testEvent` to register, which causes the `sendLocalEvent` code to fail 500 milliseconds later.

In a client-server execution model, setting intervals between events does not guarantee that the first event properly executed at all; all that is guaranteed is that the timed interval has passed.

The following example improves the above code by wrapping these events in Promise logic. Within a Promise, you can execute code and then set the outcome of the Promise to `resolve` or `reject`.

* If the Promise is resolved successfully, the Promise object’s `then()` inline function can be defined to execute addtional code.
* If the Promise fails with the `reject` result, the Promise object’s `catch()` inline function can be defined with additional code, as well.

Within the Promise, the code attempts to connect to the local `testEvent` listener. If it fails, the `update` counter is incremented, and the connection is attempted again, up to 5 attempts.

**Tip**: This method offers retries and logging before completing subsequent operations.

```_ar4n
import {Component, LocalEvent, EventSubscription} from 'horizon/core';

class MyEventExample extends Component {
  testEvent = new LocalEvent<{message: String}>('testEvent');
  private createEventListenerPromise: Promise<boolean> | undefined = undefined;

  start () {

    this.createEventListenerPromise = new Promise((resolve, reject) => {
      let updates = 0;
      const intervalTime = 500;
    const maxUpdates = 5;
    const intervalId = this.async.setInterval(() => {
        // Register to receive Local Event.
        let myEventSubScription: EventSubscription = this.connectLocalEvent (
          this.entity,
          this.testEvent,
          (data: {message: String}) => {
            console.log(data.message);
    });

        // test if registration worked
        if (myEventSubScription) {
          this.async.clearInterval(intervalId); // be sure to stop executing this logic
          resolve(true);
        }
        else {
          // We can continue to expand this timer as desired. Since we opt out early, we really only wait as
      // long as needed vs for an arbitrary, hard coded amount of time.
          updates++;
          if (updates > maxUpdates) {
            console.error(`Failed to create listener for testEvent in ${updates} tries`);
            this.async.clearInterval(intervalId); // be sure to stop executing this logic
            reject();
          }
        }
      }, intervalTime);
    });

    // if Promise returns: resolve(true)
    this.createEventListenerPromise.then(() => {
      console.log('testEvent: Event listener created');
      this.sendLocalEvent(
        this.entity,
        this.testEvent,
        {message: "My Local Event Test"}
      );
    }).catch(() => {
      // if Promise returns: reject
      console.error('testEvent: Failed to create event listener');
    });
  }
}

Component.register(MyEventExample);
```

### Promise example 2

In the following example from a `start()` method, a Promise (`this.uabPaddeLoadPromise`) is created to manage the success/failure states of checking for whether a specific UAB has loaded into runtime memory, where it can be referenced. This Promise wraps around an asyc interval. Every 1000 milliseconds, the UAB is checked to see if it has loaded.

* If it has loaded, the Promise `resolve()` method is set to `true`, and the interval is cleared.
* If it has not, the `updates` counter is incremented and checked against the maximum permitted number of checks. In this case, it’s 30 checks or 30 seconds in which the UAB must be loaded. If this limit is exceeded, then the Promise is set to `reject()`.

Based on the above checks, the following methods on the Promise are executed:

* When `resolve(true)`, the Promise’s `then()` method is executed, allowing for various initialization activities, including making the entity visible and sending a network event to inform other entities information about the UAB.
* The `catch()` method on the Promise is executed when the Promise yields a `reject()`.

Using Promises, you can build more performant code with fewer sequencing issues.

```_ar4n
    this.uabPaddleLoadPromise = new Promise((resolve, reject) => {
      let updates = 0;
      const intervalTime = 1000;
      const totalTimeInSeconds = 30 * intervalTime;
      const maxUpdates = totalTimeInSeconds / intervalTime;
      const intervalId = this.async.setInterval(() => {
        if (this.uabPaddle.as(AssetBundleGizmo).isLoaded() == true) {
          this.async.clearInterval(intervalId); // be sure to stop executing this logic
          resolve(true);
        }
        else {
          // We can continue to expand this timer as desired. Since we opt out early, we really only wait as long as needed vs for an arbitrary, hard coded amount of time.
          updates++;
          if (updates > maxUpdates) {
            console.error(`Failed to load UAB model in ${totalTimeInSeconds}s`);
            this.async.clearInterval(intervalId); // be sure to stop executing this logic
            reject();
          }
        }
      }, intervalTime);
    });

    this.uabPaddleLoadPromise.then(() => {
      console.log(`Loaded UAB model: ${this.uabPaddle.name.get()} for player: ${this.entity.owner.get().name.get()}`);
      this.isUabLoaded = true;
      this.uabPaddle.visible.set(true);
      this.sendNetworkBroadcastEvent(Events.growPaddleOrBall, {
        meshContainer: this.meshContainer,
        UABModel: this.uabPaddle,
        duration: this.paddleAnimDurationSeconds,
        delay: 0,
        easeType: this.paddleAnimEaseType,
        targetScale: hz.Vec3.one,
      });
    }).catch(() => {
      this.isUabLoaded = false;
      console.error(`Failed to load UAB model: ${this.uabPaddle.name.get()} for player: ${this.entity.owner.get().name.get()}`);
    });
```