# Station 7 - Persistent Variables

## Create Variable Group and Persistent Variable

### Create variable group

 A variable group is simply a container for persistent variables. You can use the
name of your variable group to indicate its scope. For example, names like: `playerInventory` or `savedStats` or similar can indicate the kinds of variables stored in them. In this case, to
keep it simple, we create a variable group called: `vgStation07` To create a variable group, please do the following.
1. In the desktop editor menu bar, select Systems menu > Variable Groups.
2. In the Variable Groups panel, click the + icon:

 ![Image of Variable Groups panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487312856_686408250563796_4276880203328532826_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=xVAhts8q0XkQ7kNvwEKKUGT&_nc_oc=AdkcLefZWSMxjVigLBJZ6cTZjpICwSPEEYhHt3M8-hbVo69TyThPids5zKOVl3oELwI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hKPS32tlmaUYFUwfOLGdVg&oh=00_Afc6TL_T1MFO...

 ![Image of Variable Groups panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487312856_686408250563796_4276880203328532826_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=xVAhts8q0XkQ7kNvwEKKUGT&_nc_oc=AdkcLefZWSMxjVigLBJZ6cTZjpICwSPEEYhHt3M8-hbVo69TyThPids5zKOVl3oELwI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hKPS32tlmaUYFUwfOLGdVg&oh=00_Afc6TL_T1MFO...

1. In the Create Variable Group dialog, enter the following name: `vgStation07`. Note: This value must match the references to it in TypeScript. You should write it
down for later use.
2. Add a meaningful description. Example: `Variable Group for holding PVARs for Station 07`.
3. When done, click Create.

### Create persistent variable

 After you have created the above variable group, the empty variable group is
displayed: ![Click to create variable](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487304186_686408210563800_8556070025932445174_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=jfRoiDA304EQ7kNvwE09uyi&_nc_oc=Adnw-wxT0krrlVnTDI7qLGVq26I5qyc8qc09FduZLuTo5qUzL9fU8rTWoYgiALuZOSwQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hKPS32tlmaUYFUwfOLGdVg&oh=00_AfcEjAmQFDaAV...

 To create a persistent variable in this group, please do the following:
1. Click the Create Variable button.
2. In the Create Persistent Variable dialog, enter the following information:
  1. Name: `intCandy`. This value must match what is used in the code.
  2. Type: Select Number. Object type persistent variables are basically JSON arrays. In this case, we
only need a simple numeric variable.
3. If all looks fine, click Create.

 Note: After you create your variable, you should shut down and restart your world
for it to take effect.

### TypeScript references

 You have created the following:
• Variable group name: `vgStation07`
• Persistent variable name: `intCandy`

 In code, to reference a specific variable, you create named references like:  `vgStation07`:`intCandy` In this tutorial, however, we manage these references in a different way. In Station07a-SeeCandy.ts: At the top of the file, you may see the following declared constants:  
```
export const VarGroupName = "vgStation07"
export const PVARName = "intCandy"
```
 Later in the code, the reference to the persistent variable is created as a
concatenated string from these constants:  `strPlayerCandyPVar `=` `VarGroupName` `+` `":"` `+` `PVARName` `as` `string`;` `
```
// Name of world PVar holding player's candy total. Define this PVar in your world as a simple Number type
```
 You can search the rest of the file to see how `strPlayerCandyPVar` is used. In Station07b-GetCandy.ts: In this script for the second station, the exported constants from the SeeCandy
script are imported as part of this declaration:  `import` `{` `CandyUpdated`,` `VarGroupName`,` `PVARName` `}` `from` `'Station07a-SeeCandy'`;` An identical declaration of `strPlayerCandyPVar` is defined in the file.

 This station utilizes a single persistent variable to store the player’s current
amount of candy. This value is stored in a persistent variable, so that it can
be retrieved and used:
• between visits to the station, and
• between visits to the world.

 Your candy is your candy. In broader terms, a variable group and its persistent
variables provide mechanisms for persisting state information, such as inventory
and saved game states, between playthroughs of your world experience, which
ultimately leads to retention of your visitors. Note: Data is stored per-player, so that whenever the player’s persistent variables
are referenced in TypeScript, the appropriate values are retrieved for that
specific player. Each persistent variable is stored in a variable group, which is a container object for managing persistent variables. To make this
station work, we must create a variable group, which contains the persistent
variable. Notes:
• The persistent variable and variable group are referenced by name in the code,
so you need to create them using the exact names that appear in the code.
• It’s possible to move variable groups between worlds.
  • You can import variable groups between worlds through the Creator Portal: [https://horizon.meta.com/creator/](https://horizon.meta.com/creator/). This method requires that you import them from another world.
  • You can import variable groups into a world when you own the variable group and
the world. This method allows for complete ownership of the content.

 For more information on variable groups and persistent variables, see [Using Variable Groups](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/variable-groups/using-variable-groups). The next steps are to create a variable group and a persistent variable within
that group.

### Create variable group

### Create persistent variable

### TypeScript references

## Assets

#### CustomUI structures

1. CustomUI object
2. Script associated with customUI object
3. Trigger Zone object surrounding the customUI object

 Items #2 and #3 are referenced as properties on the CustomUI object, so that
they can be referenced from within the code. More on this later. The Trigger Zone object is new for this example. This instance of the Trigger Zone gizmo encloses the
CustomUI object in your world. It is used to trigger the retrieval of the current
values of the persistent variables for the player who enters the trigger. When
the player approaches the customUI, the trigger zone code retrieves the values
for the player’s points and populates the appropriate variables, which are
referenced in this customUI definition. In this manner, the customUI retrieves the
latest values for the variable(s) for the player whenever it is approached by the
player.

 Note: It’s possible (and simpler) to gather variable values through code when the
player enters the world, using the onPlayerEntersWorld CodeBlock event. However,
this approach means that the variables are modifiable one and only one time in
the world. In this case, the customUI object would have to be destroyed or made
unavailable after the player interacted with it the first time--which is weird. A
safer approach is to trigger the reading of the variables on approach to the
customUI, every time. The size and positioning of the Trigger Zone relative to the CustomUI needs to
be tweaked to ensure that the distance from the customUI to the edge of the
Trigger Zone is larger than the distance from the customUI to the radius of
activation. The radius of activation means the point at which a Player can choose to work
with the customUI.
• In the desktop editor, this means that point at which the user is presented with
the E icon to engage.
• In the headset, this means that length of the raycasts from the avatar’s hands.
• These distances may be different.
• Keep in mind that it’s possible to approach a customUI from any direction to
activate it. If you place it up against a wall, the Trigger Zone can be downsized
in one axis.

> 

 Note: Because of a delay in saving and reading persistent variables, the `Station07b.ts` script sends an event to the station 07a script when the player’s candy
variable is saved. This variable includes the player and the value of the candy
variable, which is then used to set the Binding in the custom UI. In this manner,
station 07a gets updated faster than only reading the value from the persistent
variable.

 Station07b-SeeCandy:
• Station07a-SeeCandy-UI
• Station07a-SeeCandy-Trigger
• Station07a-SeeCandy (script)

 Station07b-GetCandy:
• Station07b-GetCandy-UI
• Station07b-GetCandy-Trigger
• Station07b-GetCandy (script)

  
#### CustomUI structures

## Script

  
### Station07a-SeeCandy

#### Imports

 These should look familiar:  
```
// Imported components from the APIs.
import * as hz from "horizon/core";

// Imported components from the UI module.
import {
  UIComponent,
  View,
  Text,
  ViewStyle,
  Callback,
  Pressable,
  Binding,
  UINode,
} from "horizon/ui";
```
  
#### Class and variable declarations

  
```
class UIComponentSeeCandy extends UIComponent<typeof UIComponentSeeCandy> {
  static propsDefinition = {
    triggerZone: { type: hz.PropTypes.Entity }
  };

  panelHeight = 500; // default value is 500.
  panelWidth = 350; // default value is 500

  strPlayerCandyPVar = "intCandy" as string; // Name of world PVar holding player's candy total. Define this PVar in your world as a simple Number type
  strPlayerCandyTotal = new Binding<string>('0'); // Init and set default for string variable bound to custom UI for candy total;
  strMessage = new Binding<string>('Test Message'); // Init and set default for string variable bound to custom UI for the message associated with the total;
  strColor = new Binding<string>('red'); // Init and set default for string variable bound to custom UI for the message color associated with the total;
```

• In the properties for the class, we declare a property called `TriggerZone`, which is of type `hz.Entity`. When this script is attached to the customUI object, a new property labeled `TriggerZone` appears in the Properties panel for it. From this drop-down, a designer can
select the trigger zone that is already in the world (an Entity), which the script
can use as its trigger to read the persistent variable.
• The height and width in pixels of the panel is defined.
• You can see a number of variables declared, too.
  • The variable `strPlayerCandyPVar` is set to the value intCandy, which is the name of the persistent variable that
stores each player’s total candy. Note: If you are recreating this example, you must create the persistent variable in
the Systems menu when the desktop editor is opened to your own world.
  • There are several String variables created with a Binding definition, like:

  `strPlayerCandyTotal `=` `new` `Binding`<string>`(`'0'`);`
• These variables are bound to the customUI and assigned a default value. In the
above case, the default is set to `0`.

 Note: Any variable that you wish to store values that appear in your customUI must
be captured to a Binding. Note: All of these values should be set to String values. The above example
represents the player’s candy total as a String. The values that are read from the
persistent variable are Number values, which are cast to String values when
refreshing the UI.

#### initializeUI() method

 The `initializeUI()` method sets up the user interface. Note: The `initializeUI()` method is executed first, before the `start()` method, so no user is looking at what is displayed when it is executed. The
code relies on this order of execution, but it also means that we assign
preliminary, default values before we can actually read in the player data. Three views are declared:
•  `ViewCandyHeader` - shows `Text()` view of a Candy! message at the top of the UI
•  `ViewCandyTotal` - displays Text view a “Total Candy” message, including the player’s current
total.
  • Please note the reference to the Binding variable as part of this `Text()` definition:

 `text: this.strPlayerCandyTotal,`
  • Since the variable `strPlayerCandyTotal` is scoped within the class definition, the `this` keyword provides a clear reference to it.
•  `ViewCandyTotalMessage` - displays `Text()` view of a message, which is changed based on the value of the candy total
variable.
  • In this case, the message is captured to the `strMessage` Binding:

 `text: this.strMessage,`
  • It is color-coded by referencing the `strColor` Binding:

 `color: this.strColor,`

 After the `initializeUI()` method has been executed, then the UI has been defined as an object.

#### start() method

 After `initializeUI()`, the `start()` method then executes. Here’s the whole code:  
```
start() {
    // Initialize the UI for this player, when the attached trigger zone is entered.
    this.connectCodeBlockEvent(this.props.triggerZone, hz.CodeBlockEvents.OnPlayerEnterTrigger, (enteredBy: hz.Player) => {
    let sct = this.world.persistentStorage.getPlayerVariable(enteredBy, this.strPlayerCandyPVar);
    if ((sct == undefined) || (sct == null)) {
      console.log("Candy value is undefined for this player.")
      sct = 0;
    } else {
      console.log(enteredBy.name.get() + " player has " + sct.toString() + " points.")
    };
  this.refresh([enteredBy], sct);
  })
};
```
 The code creates a listener to the onPlayerEnterTrigger CodeBlock event. This
listener is defined to be attached to the trigger zone set in the Properties panel
(`hz.props.triggerZone`), with the parameter `enteredBy` set to the player who enters the trigger. When the trigger zone is breached, the onPlayerEnterTrigger CodeBlock event is
fired, and the arrow function (code after the =>) does the following:
• Sets a local variable (`sct`) to be the value for the player of the persistent variable named in the `strPlayerCandyVar` variable.
• After a quick validation check, the `enteredBy` player and the `sct` variable are passed to the refresh code.

#### refresh()

 When the player enters the trigger, the persistent variable is retrieved to a
local variable, and then `refresh()` is called to update the custom UI with the variable and some related
information. Based on the value of the retrieved count of candy for the player, the `refresh()` code assigns a message and a color coding to the message. A key line:  `let` scr`:` `string` `=` intPlayerCurrentScore`.`toString`()` The persistent variable is stored as a Number. This value converts it to a
String value so that it can be assigned to the Binding variable. After the evaluations have been done, all of the Binding variables are assigned
new values, all of which are String values:  
```
this.strPlayerCandyTotal.set(scr);
this.strMessage.set(msg);
this.strColor.set(clr);
```
  
#### Summary

• Property in the code allows a designer to select a trigger zone to use as the
trigger for an update to the custom UI.
• `initializeUI()` method sets of the elements of the custom UI.
• `start()` method:
  • Defines onPlayerEnterTrigger listener:
   • Retrieves persistent variable value for the player.
  • Executes `refresh()` code:
   • Based on value of the persistent variable, assigns message and color-coding.
   • When these values are assigned to the Binding variables, the UI is updated for
the specific player who entered the trigger.

 ![Image of SeeCandy custom UI](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475837292_646003207937634_8847080719704944893_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=phzsQeOgcz0Q7kNvwEpqU_N&_nc_oc=AdliTDOiWZ_U5N6KwmYSHTXleiz0qP7JIteQkv2yiN9ak6CEa8wJj7HiYMYf7-xnyWM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=hKPS32tlmaUYFUwfOLGdVg&oh=00_AfdT21pVtEqSgfic...

 Since this is read-only, it’s a bit simpler than the latter one. For brevity, it
is provided here in parts.

#### Imports

#### Class and variable declarations

#### initializeUI() method

#### start() method

#### refresh()

#### Summary

### Station07b-GetCandy

#### Local variables

 A local variable is used to hold the value of the persistent variable.  
```
// Station07b: Local value is used to store the value in the Custom UI as it is being changed.
// On exit, this value is posted back as the new value to the PVAR.
let intLocalCandyCount: number = 0;
```
 The variable is a Number type, so that it can be incremented or decremented
based on user action.

#### MyButton properties and definitions

 Since this UI includes +/- buttons, the MyButton function and related property
type definitions have returned. These definitions are very similar to those in
use in Station05. Some modifications have been made to the button definitions for
this UI.

#### Variables

 The message (`strMessage`) and color (`strColor`) variables are removed, since they do not apply in this UI. As a result the
Refresh code is much simpler.

#### initializeUI() method

 The `initializeUI()` method is very similar. From the first station, the final row, which displayed
the strMessage value, has been replaced with two +/- buttons instead. Each of these buttons supports a localized `onClick()` event handler, which is defined as part of the button definition. Below is the
entire definition for the Less button:  
```
MyButton({
  label: "-",
  baseColor: "red",
  onClick: () => {
    // console.log("Pressed Less button.");
    if (intLocalCandyCount <= 0) {
      intlocalcandycount = 0
    } else {
      intlocalcandycount = intlocalcandycount -1
    }
    this.strplayercandytotal.set(intlocalcandycount.tostring());
  },
  style: {
    marginRight = 12,
  },
}),
```
 For the `onClick()` event, you can see that a data validation check is performed, else the local
variable holding the total value of the candy (`intLocalCandyCount`) is decremented. This value is converted to a String and assigned to the
Binding variable. Since this variable is bound to the UI, this assignment is done
using the `set()` method:  `this`.`strplayercandytotal`.`set`(`intlocalcandycount`.`tostring`());`

#### start() method

 The `start()` method includes the onPlayerExitTrigger listener:  
```
this.connectCodeBlockEvent(this.props.triggerZone, hz.CodeBlockEvents.OnPlayerExitTrigger, (enteredBy: hz.Player) => {
  this.refresh([enteredBy], intLocalCandyCount);
  this.world.persistentStorage.setPlayerVariable(enteredBy, this.strPlayerCandyPVar,intLocalCandyCount);
  this.sendNetworkBroadcastEvent(CandyUpdated, {player: enteredBy, intCandy: intLocalCandyCount});
});
```
 When the player exits the trigger, it means that the player has left the custom
user interface. In this case, the persistent variable for the exiting player is
set to the value of the local variable: intLocalCandyCount.> 

 Note: When the player exits the interface, the CandyUpdated broadcast event is sent
back to the Station07a script, which then updates its own custom UI with the new
value. This saves the lag time of saving the persistent variable to storage and
then reading the persistent variable back from storage if/when the player
re-enters the other custom UI.

 ![Image of GetCandy Custom UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475774314_646003147937640_8923202629712416402_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=YEzGgZqDAa0Q7kNvwF1JYqD&_nc_oc=Adn01-4DihZ5Es2BvkPtDFdGeQaMU1MB81nLiaPkEYaC9MytSIRi5i2NLGiW1Cw7hwc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hKPS32tlmaUYFUwfOLGdVg&oh=00_AffuPHahq...

 This station includes buttons to allow the player to click +/- buttons to
increase or decrease the amount of candy. The new amount for the candy total is
written to the persistent variable upon exit, so that the player can go back to the
first UI to see an updated value and message. The script for the second UI extends from the first. The extensions allow for:
• Changing the value of the variable within the UI
• Writing the value back to the persistent variable when the player exits the
trigger

 Key differences are outlined below.

#### Local variables

#### MyButton properties and definitions

#### Variables

#### initializeUI() method

#### start() method

### Station07a-SeeCandy

### Station07b-GetCandy

## Key Learnings

  
### Meta Horizon Worlds learnings

• Use of the Trigger Zone gizmo to capture trigger events
• Getting and setting persistent variables based on triggers
• Assigning and updating variables as Bindings to values in the user interface
  • Any variable that you wish to store values that appear in your customUI must be
captured to a Binding.

  
### TypeScript coding

• `set()` method for Binding variables

 `toString()` method for converting Number values to String values    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)

[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

### Meta Horizon Worlds learnings

### TypeScript coding

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcustom-ui-examples-tutorial%2Fstation-7-persistent-variables%2F)

 This station demonstrates how to use persistent variables with your custom UIs. A persistent variable is a per-player data storage object whose values persist across multiple
entries in a world. So, you can use persistent variables to store state information. A
persistent variable can be of Number type or Object type, which enables the
storage of multiple values in a single, referenceable object.

 Note: While we are only creating a single world with a single persistent variable,
it is a good practice to store them in a variable group, which allows for greater
flexibility down the line. If you have built and stored your users’ data in
variables inside a variable group, then that group can be added to any new worlds
that you build in the future. If you did not add your persistent variable to a
group, then the data in your PVAR is “trapped” in your first world. Creating them
in a variable group is a safety measure here. This station is composed of two separate custom UIs:
• Station07a-SeeCandy: This read-only UI shows the player’s current total, along with an editorial
message depending on the amount of that total.
• Station07b-GetCandy: This UI allows the player to increase or decrease the total candy.

 The total amount of candy for the player is retained in a persistent variable (`intCandy`) that is read, maintained, and updated from the world. The player’s total
amount of candy is read whenever the player enters a trigger zone surrounding one of
these UIs. The text entry in the UI is updated based on the value read from the
persistent variable. Tip: Two separate UIs are created here so that you can see how values set in one
can be applied in another, using the persistent variable construct. ![Image of Station 07a and Station 07b](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/476438439_646003164604305_1740733839080850745_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=mL9qrYJ4_7wQ7kNvwECJLlh&_nc_oc=AdnXu_F5K1Kg42AkcrEiQYClNwQGfFstXhKJ3uwe6gZHzyMeH18tj2aQWvqe_r5s3j8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hKPS32tlmaUYFUwfOLGdVg&oh=00...

## Create Variable Group and Persistent Variable

## Assets

## Script

## Key Learnings

## Additional Links
