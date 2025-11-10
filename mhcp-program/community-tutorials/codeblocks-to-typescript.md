Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/codeblocks-to-typescript

# CodeBlocks to TypeScript

## Target Audience

Creators with an intermediate level skill in codeblocks.

## Recommended Prerequisite Background Knowledge

A basic understanding of CodeBlocks & TypeScript is recommended

## Required Resources

* Quest App Download: [Link](https://www.meta.com/help/quest/articles/headsets-and-accessories/oculus-link/requirements-quest-link/)
* Microsoft Visual Studio Code: [Link](https://code.visualstudio.com/)

## Description

This guide aims to make TypeScript more approachable by comparing it to your current knowledge of CodeBlocks. It will guide you through the transition from CodeBlocks to TypeScript, highlighting how TypeScript can significantly improve your programming skills for more flexible and functional script environments.

## Learning Objectives

By reading and reviewing this written guide you will be able to:

* Understand how to setup and use TypeScript in your worlds
* Understand TypeScript Properties, Variables, and Events
* Translate common CodeBlock scripts into TypeScript

## Part 1: Getting Started

### First Steps

Begin by setting up your development environment and creating your new world with these essential steps:

* Install [Microsoft Visual Studio Code](https://code.visualstudio.com/)
* Install [Meta Quest App](https://www.meta.com/help/quest/articles/headsets-and-accessories/oculus-link/requirements-quest-link/)
* Open and Sign into Quest App with your Meta Account
* Install [Meta Horizon Worlds](https://www.meta.com/experiences/meta-horizon-worlds/2532035600194083/) via Quest App Store
* [Launch Desktop Editor](/horizon-worlds/learn/documentation/desktop-editor/getting-started/introduction-to-desktop-editor/) by Clicking on the 3-little-dots ( … ) next to Meta Horizon Worlds in your Library and select Start in Desktop Mode
* Click the blue New World button in the top right corner
* Name your world, select the type, and select *Create*

### Configuring

Set up and configure your new script in the development environment by following these detailed steps:

* Click the down arrow for the Scripts Panel and select *Create New Script*![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452702897_512500621287894_8264079504247726649_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=3wnHn39DRxwQ7kNvwEG2mFH&_nc_oc=AdlywQJOhhuGPLL4q9ICHSa2Qr2kZNZsYd-DGhE-IH3h44P47jWfojYvnReiPFAtyKo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=DdlZwr_mAU-w4qfElSNBuw&oh=00_Afjyg6p-vpZ4E1bFOL_B9uae_L0HShXOFeQ4JeB3FdYgxA&oe=692C10D1)
* Name this script *ExampleScript* and hit the Enter key on your keyboard.
* Click the gear cog icon in the Scripts Panel.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452702844_512500524621237_7831056844952000870_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=xELsMGMlOdkQ7kNvwE1xMS1&_nc_oc=AdmHI5ny-D1XmOjElj517ieeUk07eD10GCpJH3YHQ6sQYXzqWRAaanU7mEVp05xANGE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=DdlZwr_mAU-w4qfElSNBuw&oh=00_AfhPCc4UJJfQaKL8CDcOAhf05-UD81K90JxAMfgDKOfpgg&oe=692BF835)
* External Editor should say Default (VS Code)
* External Editor Directory can be any folder you wish to store all of your world’s scripts.
* API Version needs to be changed to 2.0.0 if it isn’t already.
  + Note: You may need it to create a script(see below) before you can see the API 2.0.0 option.
* Camera and other features can be enabled here if required for your project.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452555778_512500527954570_5113380244908814218_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=tVPM_U0v5pwQ7kNvwGzYLHK&_nc_oc=AdnGeZyvedbsSh-fC0Op3i5zGUBpzBzHRvcNiUv5Ho_-3uvhz1cHjNzcqneOEvTu2kM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=DdlZwr_mAU-w4qfElSNBuw&oh=00_Afgd8dvu0EXwCcl5w644hekBa1Sm9vhewvovrIwyvR99AA&oe=692BF8A0)
* Click *Apply* after making any changes.
* Mouse over your newly created script, click the 3-vertical dots that appear and select *Open in External Editor* .
* This should open Visual Studio Code and ask if you trust the Author of this file, you can select *Yes, I trust the authors* .
* You can now see the default contents of your ExampleScript.ts file that you created.

## Part 2: Introduction to TypeScript (as a CodeBlock Scripter)

This table below compares the components of Meta Horizon Script (also known as CodeBlocks) with TypeScript, highlighting the terminology and functional similarities and differences in how objects, scripts, and other components are managed.

| **Components of a Meta Horizon Script****(a.k.a. CodeBlocks)** | **Components of a TypeScript File** |
| --- | --- |
| **Object** : Runs an instance of any attached scripts, referred to as `Self` | **Object** : Runs an instance of any attached scripts, referred to as `this/this.Entity` |
| **Script** : Determines the behavior of the object | **Script** : Determines the behavior of the object |
| **Variables** : Stores values related to the object | **Properties** : Stores values related to the object (as long as it is read-only, then just make it a private variable inside the class) |
| **Events** : Contains the logic that determines behavior | **Functions** : Contains the logic that determines behavior |
| **Actions** : Performs the behaviors | **Methods** : Performs the behaviors |

### Code Breakdown

If you followed the steps in the “Configuring” section in Part 1, your first script should now look like this:

#### ExampleScript.ts

```vs
import * as hz from 'horizon/core';

class ExampleScript extends hz.Component<typeof ExampleScript> {
  static propsDefinition = {};
  preStart() {}

  start() {}
}

hz.Component.register(ExampleScript);
```

Let’s break down this code line by line:

#### Import Statement

```vs
import * as hz from 'horizon/core';
```

This line is importing all exports from the “horizon/core” module and making them available under the h alias.

#### Class Declaration

```vs
class ExampleScript extends hz.Component<typeof ExampleScript> {
```

This is the declaration of a class named ExampleScript that extends the Component class from the “horizon/core” module. The *typeof ExampleScript* is a TypeScript feature that refers to the type of the ExampleScript class itself. This is required, but you won’t need to make any changes to it. Also take note of the opening curly brace `{` at the end. This often specifies the beginning scope of your code.

#### Static Property

```vs
  static propsDefinition = {};
```

This is a static property of the ExampleScript class. It’s an object that’s used to define the properties of the ExampleScript component. This is where we’ll define the properties found in a property panel after you attach a script. Again, note the opening and closing curly braces here indicating this property is currently empty.

#### Method

```vs
  preStart() {

  }
```

This is a method of the ExampleScript class, you will need to manually add this. The preStart method is typically used to initialize a component before the start method is called. Again with opening and closing curly braces with nothing inside to indicate the method is empty.

#### Method

```vs
  start() {

  }
```

This is another method of the ExampleScript class. The start method is typically used to initialize a component. Equivalent to the ***when world is started*** event.

#### Class Registration

```vs
}

hz.Component.register(ExampleScript);
```

This line calls the register method of the Component class from the “horizon/core” module, and passes the ExampleScript class as an argument. This is used to register the ExampleScript component with the “horizon/core.” It is required, you won’t need to make any changes here. You will also notice a closing curly brace which when combined with the opening curly brace back in our class declaration indicates the end of our Class.

### Test Your First Script

Follow these steps to test your first TypeScript script in Meta Horizon Worlds:

* Add a Debug Print/console.log() to your ***when world is started*** event, e.g. *console.log(‘hello world’).*

```vs
  start() { add code here }
```

* Attach your script to the spawn gizmo.
* Open your Console. Clear it. Stop the world, Start it again. Look for your Debug Print/console.log().

Congratulations, you just ran your first TypeScript in Meta Horizon Worlds!

We’re going to take it a bit further but first, let us talk about TypeScript Properties, Variables, and Events.

### TypeScript Properties & Variables

Here is a collection of data types that can be used to store information as an object property or script variable. Each data type has two examples. The first one is used with the static property propsDefinition that we talked about earlier, the second one is for defining a variable anywhere in your script.

* `Number` : Can be a single Decimal (base 10), Hexadecimal (base 16) or Octal (base 8).
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `num: { type: hz.PropTypes.Number, default: 0}` |  | `num: number = 0` |
* `NumberArray` : Can be a list of Decimals (base 10), Hexadecimals (base 16) or Octals (base 8).
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `numList: { type: hz.PropTypes.NumberArray, default: []}` |  | `num: number[] = []` |
* `String` : Stores text data surrounded by single quotation marks or double quotation marks.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `str: { type: hz.PropTypes.String, default: ‘Hello World’}` |  | `str: string = ‘Hello World’` |
* `StringArray` : Stores a list of text data.
  + |  |  |
    | --- | --- |
    | Ex.: `strList: { type: hz.PropTypes.StringArray, default: [‘Hello’, ‘World’]}` | `strList: string[] = [‘Hello’, ‘World’]` |
* `Boolean` : Stores a true or false value.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `bool: { type: hz.PropTypes.Boolean, default: false}` |  | `bool: boolean = false` |
* `BooleanArray` : Stores a list of true or false values.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `boolList: { type: hz.PropTypes.BooleanArray, default: [false]}` |  | `boolList: boolean[] = [false]` |
* `Vec3` : Stores a 3D Vector.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `vec: { type: hz.PropTypes.Vec3, default: new hz.vec3(0,0,0) }` |  | `vec: hz.vec3 = new hz.vec3(0,0,0)` |
* `Vec3Array` : Stores a list of 3D Vectors.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `vecList: { type: hz.PropTypes.Vec3Array, default: [new hz.vec3(0,0,0)]}` |  | `vecList: hz.vec3Array = [new hz.vec3(0,0,0)]` |
* `Color` : Stores a RGB color.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `_color: { type: hz.PropTypes.Color, default: new hz.Color(0,0,0)}` |  | `_color: hz.Color = new hz.Color(0,0,0)` |
* `ColorArray` : Stores a list of RGB Colors.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `colorList: { type: hz.PropTypes.ColorArray, default: [new hz.Color(0,0,0), new hz.Color(1,1,1)]}` |  | `colorList: hz.Color = [new hz.Color(0,0,0), new hz.Color(1,1,1)]` |
* `Entity` : Stores an object.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `obj: { type: hz.PropTypes.Entity }` |  | `obj: hz.Entity \| null = null` |
* `EntityArray` : Stores a list of objects.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `objList: { type: hz.PropTypes.EntityArray }` |  | `objList: hz.EntityArray = []` |
* `Quaternion` : Stores a rotation.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `rot: { type: hz.PropTypes.Quaternion, default: new hz.Quarterion(0,0,0,1) }` |  | `rot: hz.Quarterion = new hz.Quarterion(0,0,0,1)` |
* `QuaternionArray` : Stores a list of rotations.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `rotList: { type: hz.PropTypes.QuaternionArray, default: [new hz.Quaternion(0,0,0,1)] }` |  | `rotList: hz.Quaternion = [new hz.Quaternion(0,0,0,1)]` |
* `Player:` Stores a Player.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `p: { type: hz.PropTypes.Player, default: this.world.getServerPlayer()}` |  | `p: hz.Player \| null = null` |
* `PlayerArray` : Stores a list of Players.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `N/A` |  | `pList: hz.Player[] = []` |
* `Asset` : Stores an Asset.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `ass: { type: hz.PropTypes.Asset }` |  | `ass: hz.Asset \|null = null` |
* `AssetArray` : Stores a list of Assets.
  + |  |  |  |
    | --- | --- | --- |
    | Ex.: `N/A` |  | `assList: hz.Asset[] = []` |
* `Other Array Data Types` : There are several other interesting data storage types to research.
  + Ex.: Tuples, Enums, Maps, just a name a few.

### TypeScript Event Types

Here are the different types of events we can use in TypeScript, their specific purposes, and examples for listening to them and sending them:

* `Built-in CodeBlocks` : Used to connect events like TriggerEnter, GrabStart, and the rest.
  + Listening: `this``.connectCodeBlockEvent(``this``.entity, hz.CodeBlockEvents.OnPlayerEnterWorld,``this``.onPlayerEnterWorld.bind(``this``))`
  + Sending: You do not send Built-In Codeblocks.
* `CodeBlock Events` : Design like custom Meta Horizon Events and meant to communicate with CodeBlock scripts.
  + Listening: `this``.connectCodeBlockEvent(``this``.entity,``new``hz.CodeBlockEvent(``'codeblockEventName'``,[]),``this``.onCodeblockEventName.bind(``this``))`
  + Sending: `this``.sendCodeBlockEvent(``this``.entity,``new``hz.CodeBlockEvent(``'codeblockEventName'``,[]))`
* `Local Events` : Used to communicate with TypeScript on the same host.
  + Listening: `this``.connectLocalEvent(``this``.entity,``new``hz.LocalEvent(``'eventName'``),``this``.onEventName.bind(``this``))`
  + Sending: `this``.sendLocalEvent(``this``.entity,``new``hz.LocalEvent(``'eventName'``), {})`
* `Networked Events` : Used to communicate with TypeScript scripts on a different host.
  + Listening: `this``.connectNetworkEvent(``this``.entity,``new``hz.NetworkEvent(``'networkEvent'``),``this``.onNetworkEvent.bind(``this``))`
  + Sending: `this``.sendNetworkEvent(``this``.props.exampleObject,``new``hz.NetworkEvent(``'networkEvent'``), {})`
* `Local Broadcast Events` : Used to broadcast an event to all listeners on the same host.
  + Listening: `this``.connectLocalBroadcastEvent(``new``hz.LocalEvent(``'localBroadcastEvent'``)),``this``.onLocalBroadcastEvent.bind(``this``))`
  + Sending: `this``.sendLocalBroadcastEvent(``new``hz.LocalEvent(``'localBroadcastEvent'``), {})`
* `Networked Broadcast Events` : Used to broadcast an event to all listeners on different hosts.
  + Listening: `this``.connectNetworkBroadcastEvent(``new``hz.NetworkEvent(``'networkBroadcastEvent'``),``this``.onNetworkBroadcastEvent.bind(``this``))`
  + Sending: `this``.sendNetworkBroadcastEvent(``new``hz.NetworkEvent(``'networkBroadcastEvent'``), {})`

## Part 3: Sending Events

Review the following scripts and try to identify the different components, imports, the class beginning and ending syntax, properties, and methods. Then examine how these two scripts communicate with each other.

You should notice *basicScriptA.ts* is set up to send multiple events to *basicScriptB.ts* , which is set up to hear and react to those events.

#### basicScriptA.ts

```vs
import * as hz from 'horizon/core'
I’m
//Extended to create new scripts that can be attached to entities in the world, and to create new behaviors in Horizon.
class basicScriptA extends hz.Component<typeof basicScriptA> {

  //propsDefinition are read-only variables used to define the properties of the component.
  static propsDefinition = {
    exampleObject: {
      type: hz.PropTypes.Entity
    },
  }

  //I like to list my private variables here, ones I need to use or edit later in my script.
  private exampleWriteableString: string = "Hello World! #3"

  //preStart is guaranteed to run for all components before any component's start method is called.
  //I typically use this to connect to events.

  preStart(){
  }

  //Called when the component is started.

  start() {

    //Example of sending a Codeblock event

    if(this.props.exampleObject){
    this.sendCodeBlockEvent(this.props.exampleObject, new hz.CodeBlockEvent('codeblockEventName',[]))

    //Example of sending a Codeblock event with parameters
    this.sendCodeBlockEvent(this.props.exampleObject, new hz.CodeBlockEvent('codeblockEventNameParams',[hz.PropTypes.String]), "Hello World!")

    //Example of sending a Local event
    this.sendLocalEvent(this.props.exampleObject, new hz.LocalEvent('eventName'), {})

    //Example of sending a Local event with parameters
    this.sendLocalEvent(this.props.exampleObject, new hz.LocalEvent<{s: string}>('eventNameParams2'), {s: "Hello World! #2"})
    this.sendLocalEvent(this.props.exampleObject, new hz.LocalEvent<{s: string}>('eventNameParams3'), {s: this.exampleWriteableString})
    this.sendNetworkEvent(this.props.exampleObject, new hz.NetworkEvent('networkEvent'), {})
    }

    //Example of sending a Local broadcast event
    this.sendLocalBroadcastEvent(new hz.LocalEvent('localBroadcastEvent'), {})

    //Example of sending a Network broadcast event
    this.sendNetworkBroadcastEvent(new hz.NetworkEvent('networkBroadcastEvent'), {})
  }
}

hz.Component.register(basicScriptA)
```

You should notice that *basicScriptA.ts* ’s only job is to send multiple types of event examples when the script is started.

#### basicScriptB.ts

```vs
import * as hz from 'horizon/core'

//Extended to create new scripts that can be attached to entities in the world, and to create new behaviors in Horizon.
class basicScriptB extends hz.Component<typeof basicScriptB> {
  //preStart is guaranteed to run for all components before any component's start method is called.
  //I typically use this to connect to events.

  preStart(){
    //Examples of connecting to built-in horizon events.
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, this.onPlayerEnterWorld.bind(this))
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerExitWorld, this.onPlayerExitWorld.bind(this))

    //Examples of connecting to custom codeblock events.
    this.connectCodeBlockEvent(this.entity, new hz.CodeBlockEvent('codeblockEventName',[]), this.onCodeblockEventName.bind(this))
    this.connectCodeBlockEvent(this.entity, new hz.CodeBlockEvent('codeblockEventNameParams',[hz.PropTypes.String]), this.onCodeblockEventNameParams.bind(this))

    //Examples of connecting to TypeScript events.
    this.connectLocalEvent(this.entity, new hz.LocalEvent('eventName'), this.onEventName.bind(this))
    this.connectLocalEvent(this.entity, new hz.LocalEvent<{s: string}>('eventNameParams2'), (data: {s: string}) => this.eventNameParams2.bind(this
    //In practical terms, if eventNameParams2 and eventNameParams3 methods don't use this inside them to refer to the class instance,
    //there would be no difference between these two lines. However, if they do use this,
    //then the first line ensures that this refers to the correct object,
    //while the second line might lead to unexpected behavior if this doesn't refer to the class instance when the method is called.
    this.connectLocalEvent(this.entity, new hz.LocalEvent<{s: string}>('eventNameParams3'), (data: {s: string}) => this.eventNameParams3(data.s))
    this.connectNetworkEvent(this.entity, new hz.NetworkEvent('networkEvent'), this.onNetworkEvent.bind(this))

    //Examples of connecting to local broadcast events.
    this.connectLocalBroadcastEvent(new hz.LocalEvent('localBroadcastEvent'), this.onLocalBroadcastEvent.bind(this))

    //Example of connecting to a networked broadcast event.
    this.connectNetworkBroadcastEvent(new hz.NetworkEvent('networkBroadcastEvent'), this.onNetworkBroadcastEvent.bind(this))
  }

  //Called when the component is started.
  start() {
  }

  onPlayerEnterWorld(p: hz.Player){
    console.log(p.name.get() + " entered the world!")
  }

  onPlayerExitWorld(p: hz.Player){
    console.log(p.name.get() + " exited the world!")
  }

  onEventName(){
    console.log("eventName was triggered!")
  }

  onCodeblockEventName(){
    console.log("codeblockEventName was triggered!")

  onCodeblockEventNameParams(s: string){
    console.log("codeblockEventNameParams was triggered with parameter: " + s)

  eventNameParams2(s: string){
    console.log("eventNameParams2 was triggered with parameter: " + s)

  eventNameParams3(s: string){
    console.log("eventNameParams3 was triggered with parameter: " + s)
  }

  onLocalBroadcastEvent(){
    console.log("localBroadcastEvent was triggered!")

  onNetworkBroadcastEvent(){
    console.log("networkBroadcastEvent was triggered!")
  }

  onNetworkEvent(){
    console.log("networkEvent was triggered!")
  }
}

hz.Component.register(basicScriptB)
```

You should notice *basicScriptB.ts* ’s only job is to listen for events sent to itself and forward those events to local functions set in the bottom half of the script.

## Part 4: Basic Codeblock Conversions

Now we can review these common everyday codeblock scripts converted to TypeScript like basic player respawning, object grab/return scripts, projectile launchers, and more.

#### SimpleRespawnScript.ts

```vs
import * as hz from 'horizon/core';

class simpleRespawnScript extends hz.Component<typeof simpleRespawnScript> {
  static propsDefinition = {
    respawn: {
      type: hz.PropTypes.Entity,
    },
  };
  preStart() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      this.OnPlayerEnterTrigger.bind(this),
    );
  }
  start() {}
  OnPlayerEnterTrigger(p: hz.Player) {
    this.props.respawn?.as(hz.SpawnPointGizmo)?.teleportPlayer(p);
  }
}
hz.Component.register(simpleRespawnScript);
```

#### SimpleObjectGrab.ts

```vs
import * as hz from
class SimpleObjectGrab extends hz.Component<typeof SimpleObjectGrab> {

  static propsDefinition = {
  }

  preStart(){
    //#region Built-in Event Handlers
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnGrabStart,
      this.OnGrabStart.bind(this)
    )
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnGrabEnd,
      this.OnGrabEnd.bind(this)
    )
    //#endregion Built-in Event Handlers
  }

  start() {
    //Set the original position and rotation of the object.
    this.originalPosition = this.entity.position.get()
    this.originalRotation = this.entity.rotation.get()
  }

  //#region Private Variables
  private resetTimer: number = 0
  private originalPosition: hz.Vec3 = new hz.Vec3(0, 0, 0)
  private originalRotation: hz.Quaternion = new hz.Quaternion(0, 0, 0, 0
  //#endregion Private Variables
  OnGrabStart(r: boolean, p: hz.Player ) {

    //cancel the reset timer if the object is grabbed.
    this.async.clearTimeout(this.resetTimer)
  }

  OnGrabEnd(p: hz.Player) {
    //reset the object to its original position and rotation after 5 seconds.
    this.resetTimer = this.async.setTimeout(() => {
      this.entity.position.set(this.originalPosition)
      this.entity.rotation.set(this.originalRotation)
    }, 5000)
  }
}
hz.Component.register(SimpleObjectGrab)
```

#### VIPorStageScript.ts

```vs
import * as hz from 'horizon/core';

class VIPorStageScript extends hz.Component<typeof VIPorStageScript> {
  static propsDefinition = {
    respawn: {
      type: hz.PropTypes.Entity,
    },
    vipList: {
      type: hz.PropTypes.StringArray,
      default: ['SeeingBlue', 'Mutts_Mutts_Mutts', 'burnbuns', 'gausroth'],
    },
  };

  preStart() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      this.OnPlayerEnterTrigger.bind(this),
    );
  }
  start() {}
  OnPlayerEnterTrigger(p: hz.Player) {
    //only teleport the player if they are not on the vip list
    if (!this.props.vipList.includes(p.name.get())) {
      this.props.respawn?.as(hz.SpawnPointGizmo)?.teleportPlayer(p);
    }
  }
}
hz.Component.register(VIPorStageScript);
```

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.