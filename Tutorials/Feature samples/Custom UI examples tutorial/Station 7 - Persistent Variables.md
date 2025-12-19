Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/custom-ui-examples-tutorial/station-7-persistent-variables

# Station 7 - Persistent Variables

This station demonstrates how to use persistent variables with your custom UIs.

A **persistent variable** is a per-player data storage object whose values persist across multiple entries in a world. So, you can use persistent variables to store state information. A persistent variable can be of Number type or Object type, which enables the storage of multiple values in a single, referenceable object.

> **Note**: While we are only creating a single world with a single persistent variable, it is a good practice to store them in a variable group, which allows for greater flexibility down the line. If you have built and stored your users’ data in variables inside a variable group, then that group can be added to any new worlds that you build in the future. If you did not add your persistent variable to a group, then the data in your PVAR is “trapped” in your first world. Creating them in a variable group is a safety measure here.

This station is composed of two separate custom UIs:

* **Station07a-SeeCandy**: This read-only UI shows the player’s current total, along with an editorial message depending on the amount of that total.
* **Station07b-GetCandy**: This UI allows the player to increase or decrease the total candy.

The total amount of candy for the player is retained in a persistent variable (`intCandy`) that is read, maintained, and updated from the world. The player’s total amount of candy is read whenever the player enters a trigger zone surrounding one of these UIs. The text entry in the UI is updated based on the value read from the persistent variable.

**Tip**: Two separate UIs are created here so that you can see how values set in one can be applied in another, using the persistent variable construct.

<details>
<summary>Image of Station 07a and Station 07b</summary>

<p></p>

[Image of Station 07a and Station 07b](../../../image_data/7ff414582c8811515df02514ed74f227b2f79ec619c2715b35a15cd4718db83a.md)

### Overview
The image depicts a 3D interface with various blocks arranged on a grid-like surface. The blocks appear to represent nodes or components within a workflow or programming environment. The title at the top reads "Station 07 - Candy!" suggesting a specific station or level within a larger system.

### Key Elements
- **Title Block**: Located at the top-center, the block is yellow with a green grid outline. It contains the text "Station 07 - Candy!" in black font.
- **Purple Blocks**: Two purple blocks are positioned on the left and right sides of the image. These blocks have white icons resembling code snippets and a file folder. The text "Station07b-GetC..." is partially visible on the right purple block.
- **Green Outline Blocks**: Two orange blocks with the text "TS" and a rightward arrow are centrally located. These blocks are outlined in green, indicating selection or active status.
- **Grid Surface**: The entire scene is set on a gray grid surface, which serves as the base for the blocks.

### Visual Flow / Relationships
The blocks are arranged in a way that suggests a workflow or sequence. The green-outlined blocks are central and appear to be the focus, while the purple blocks on the sides seem to provide additional information or options related to the central blocks.

</details>

<p></p>



## Create Variable Group and Persistent Variable

This station utilizes a single persistent variable to store the player’s current amount of candy. This value is stored in a persistent variable, so that it can be retrieved and used:

* between visits to the station, and
* between visits to the world.

Your candy is your candy. In broader terms, a variable group and its persistent variables provide mechanisms for persisting state information, such as inventory and saved game states, between playthroughs of your world experience, which ultimately leads to retention of your visitors.

**Note**: Data is stored per-player, so that whenever the player’s persistent variables are referenced in TypeScript, the appropriate values are retrieved for that specific player.

Each persistent variable is stored in a **variable group**, which is a container object for managing persistent variables. To make this station work, we must create a variable group, which contains the persistent variable. Notes:

* The persistent variable and variable group are referenced by name in the code, so you need to create them using the exact names that appear in the code.
* It’s possible to move variable groups between worlds.

  + You can import variable groups between worlds through the [Developer Dashboard](https://developers.meta.com/horizon/manage/). This method requires that you import them from another world.
  + You can import variable groups into a world when you own the variable group and the world. This method allows for complete ownership of the content.

For more information on variable groups and persistent variables, see [Using Variable Groups](../../../Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Variable%20groups/Using%20Variable%20Groups.md).

The next steps are to create a variable group and a persistent variable within that group.

### Create variable group

A variable group is simply a container for persistent variables. You can use the name of your variable group to indicate its scope. For example, names like: `playerInventory` or `savedStats` or similar can indicate the kinds of variables stored in them. In this case, to keep it simple, we create a variable group called: `vgStation07`

To create a variable group, please do the following.

- In the desktop editor menu bar, select **Systems menu > Variable Groups**.
- In the Variable Groups panel, click the **+ icon**:

<details>
<summary>Image of Variable Groups panel</summary>

<p></p>

[Image of Variable Groups panel](../../../image_data/b1504410481e29b762a0a35930f5e96dd1c1c3b58f75f75521b656c3e048ed2b.md)

### Overview
This image depicts a user interface element within a software application, specifically a modal window titled "Variable Groups." The window contains a search bar, a plus sign button, a dropdown menu, and a message explaining how to use persistent variables.

### Key Elements
- **Search Bar**: Located at the top-left, it has a magnifying glass icon and is empty.
- **Plus Sign Button**: Positioned to the right of the search bar, highlighted with a red bounding box. It is a white plus sign inside a red square.
- **Dropdown Menu**: Situated to the right of the plus sign button, labeled "Added to World" with a downward arrow indicating it can be expanded.
- **Message Text**: Below the dropdown, centered text explains how to use persistent variables, stating: "To use persistent variables from other worlds you own, add a variable group from another world through the ‘Owned by me’ tab or create a new one for this world."
- **Database Icon**: A gray database icon is placed centrally below the message text.

### Visual Flow / Relationships
The most prominent visual element is the database icon, which draws attention due to its central placement and larger size compared to the surrounding text and buttons. The search bar and plus sign button are secondary elements, designed to be interacted with. The dropdown menu provides additional options related to the current view. The message text explains the functionality of the interface, guiding the user on how to manage variable groups.

</details>

<p></p>



- In the Create Variable Group dialog, enter the following name: `vgStation07`.
  **Note**: This value must match the references to it in TypeScript. You should write it down for later use.
- Add a meaningful description. Example: `Variable Group for holding PVARs for Station 07`.
- When done, click **Create**.

### Create persistent variable

After you have created the above variable group, the empty variable group is displayed:

<details>
<summary>Click to create variable</summary>

<p></p>

[Click to create variable](../../../image_data/0ae2d31be5f651ba7af70024bfa039e1152382226330befe4768778fe916a2cd.md)

### Overview
The image depicts a user interface element within a software application, specifically a section for managing variable groups. The interface includes a header, search bar, and a central area for creating variables.

### Key Elements
- **Header**: Located at the top, it displays "Variable Groups" and a back arrow (`<`) indicating navigation to the previous screen. Below the title, the name "vgStation07" is shown, likely representing the current group being viewed. To the right of the group name, there is a plus sign (`+`) for adding new items, a gear icon for settings, and a vertical ellipsis (`...`) for more options.
- **Search Bar**: Positioned below the header, it contains a magnifying glass icon and a text input field for searching within the group.
- **Central Area**: This section is mostly empty except for a large hashtag symbol (#) centered on the screen. Below the hashtag, there is a description explaining the purpose of creating persistent variables across worlds and using them in scripts. A button labeled "Create Variable" is located at the bottom of this area.
- **Close Button**: An "X" icon is situated in the top-right corner of the header, presumably for closing the current view.

### Visual Flow / Relationships
The most prominent visual element is the hashtag symbol (#) in the central area, drawing attention to the action of creating variables. The search bar and header provide contextual information and navigation options. The "Create Variable" button is the call-to-action, encouraging interaction with the interface.

</details>

<p></p>



To create a persistent variable in this group, please do the following:

- Click the **Create Variable button**.
- In the Create Persistent Variable dialog, enter the following information:
  - Name: `intCandy`. This value must match what is used in the code.
  - Type: Select **Number**. Object type persistent variables are basically JSON arrays. In this case, we only need a simple numeric variable.
- If all looks fine, click **Create**.

**Note**: After you create your variable, you should shut down and restart your world for it to take effect.

### TypeScript references

You have created the following:

* **Variable group name**: `vgStation07`
* **Persistent variable name**: `intCandy`

In code, to reference a specific variable, you create named references like:

```
vgStation07:intCandy
```

In this tutorial, however, we manage these references in a different way.

**In Station07a-SeeCandy.ts**:

At the top of the file, you may see the following declared constants:

```
export const VarGroupName = "vgStation07"
export const PVARName = "intCandy"
```

Later in the code, the reference to the persistent variable is created as a concatenated string from these constants:

```
strPlayerCandyPVar = VarGroupName + ":" + PVARName as string; // Name of world PVar holding player's candy total. Define this PVar in your world as a simple Number type
```

You can search the rest of the file to see how `strPlayerCandyPVar` is used.

**In Station07b-GetCandy.ts**:

In this script for the second station, the exported constants from the SeeCandy script are imported as part of this declaration:

```
import { CandyUpdated, VarGroupName, PVARName } from 'Station07a-SeeCandy';
```

An identical declaration of `strPlayerCandyPVar` is defined in the file.

## Assets

**Station07b-SeeCandy**:

* Station07a-SeeCandy-UI
* Station07a-SeeCandy-Trigger
* Station07a-SeeCandy (script)

**Station07b-GetCandy**:

* Station07b-GetCandy-UI
* Station07b-GetCandy-Trigger
* Station07b-GetCandy (script)

#### CustomUI structures

- CustomUI object
- Script associated with customUI object
- Trigger Zone object surrounding the customUI object

Items #2 and #3 are referenced as properties on the CustomUI object, so that they can be referenced from within the code. More on this later.

The **Trigger Zone object** is new for this example. This instance of the Trigger Zone gizmo encloses the CustomUI object in your world. It is used to trigger the retrieval of the current values of the persistent variables for the player who enters the trigger. When the player approaches the customUI, the trigger zone code retrieves the values for the player’s points and populates the appropriate variables, which are referenced in this customUI definition. In this manner, the customUI retrieves the latest values for the variable(s) for the player whenever it is approached by the player.

> **Note**: It’s possible (and simpler) to gather variable values through code when the player enters the world, using the onPlayerEntersWorld CodeBlock event. However, this approach means that the variables are modifiable one and only one time in the world. In this case, the customUI object would have to be destroyed or made unavailable after the player interacted with it the first time--which is weird. A safer approach is to trigger the reading of the variables on approach to the customUI, every time.

The size and positioning of the Trigger Zone relative to the CustomUI needs to be tweaked to ensure that the distance from the customUI to the edge of the Trigger Zone is larger than the distance from the customUI to the radius of activation. The radius of activation means the point at which a Player can choose to work with the customUI.

* In the desktop editor, this means that point at which the user is presented with the E icon to engage.
* In the headset, this means that length of the raycasts from your avatar’s hands.
* These distances may be different.
* Keep in mind that it’s possible to approach a customUI from any direction to activate it. If you place it up against a wall, the Trigger Zone can be downsized in one axis.

> **Note**: Because of a delay in saving and reading persistent variables, the `Station07b.ts` script sends an event to the station 07a script when the player’s candy variable is saved. This variable includes the player and the value of the candy variable, which is then used to set the Binding in the custom UI. In this manner, station 07a gets updated faster than only reading the value from the persistent variable.

## Script

### Station07a-SeeCandy

<details>
<summary>Image of SeeCandy custom UI</summary>

<p></p>

[Image of SeeCandy custom UI](../../../image_data/3d0ddaf1b02df085fe998238aa975e50f834b304597ce63fee85898588164a0a.md)

### Overview
The image displays a sign with colorful text and numbers, set against a tiled orange background. The sign contains a message related to candy distribution.

### Key Elements
- **Visual description**: The sign has a rectangular shape with rounded corners.
- **Location**: Centered in the image.
- **Contents**: 
  - The word "CANDY!" is written in large letters, with each letter in a different color: C (green), A (pink), N (green), D (pink), Y (green), and ! (pink).
  - To the right of "CANDY!", there is a small arrow pointing right.
  - Below "CANDY!", the phrase "Total Candy" is written in black text.
  - Next to "Total Candy," the number "8" is displayed in yellow.
  - At the bottom, the phrase "Go ahead and help yourself." is written in blue text.
- **Visual styling**: The sign has a light green background with a subtle shadow effect, giving it a slight elevation. The text and arrow are outlined in black for better visibility.

### Visual Flow / Relationships
- The most prominent visual element is the word "CANDY!" due to its size and bright colors.
- The arrow next to "CANDY!" suggests direction or movement.
- The phrase "Total Candy" and the number "8" are closely aligned, indicating a summary of the total amount of candy available.
- The bottom message encourages viewers to take the candy.

</details>

<p></p>



Since this is read-only, it’s a bit simpler than the latter one. For brevity, it is provided here in parts.

#### Imports

These should look familiar:

```
// Imported components from the APIs.
import * as hz from "horizon/core";

// Imported components from the UI module.
import {
  UIComponent,
  View,
  Text,
  ViewStyle,
  Callback,
  Pressable,
  Binding,
  UINode,
} from "horizon/ui";
```

#### Class and variable declarations

```
class UIComponentSeeCandy extends UIComponent<typeof UIComponentSeeCandy> {
  static propsDefinition = {
    triggerZone: { type: hz.PropTypes.Entity }
  };

  panelHeight = 500; // default value is 500.
  panelWidth = 350; // default value is 500

  strPlayerCandyPVar = "intCandy" as string; // Name of world PVar holding player's candy total. Define this PVar in your world as a simple Number type
  strPlayerCandyTotal = new Binding<string>('0'); // Init and set default for string variable bound to custom UI for candy total;
  strMessage = new Binding<string>('Test Message'); // Init and set default for string variable bound to custom UI for the message associated with the total;
  strColor = new Binding<string>('red'); // Init and set default for string variable bound to custom UI for the message color associated with the total;
```

* In the properties for the class, we declare a property called `TriggerZone`, which is of type `hz.Entity`. When this script is attached to the customUI object, a new property labeled `TriggerZone` appears in the Properties panel for it. From this drop-down, a designer can select the trigger zone that is already in the world (an Entity), which the script can use as its trigger to read the persistent variable.
* The height and width in pixels of the panel is defined.
* You can see a number of variables declared, too.
  + The variable `strPlayerCandyPVar` is set to the value intCandy, which is the name of the persistent variable that stores each player’s total candy.
    **Note**: If you are recreating this example, you must create the persistent variable in the **Systems menu** when the desktop editor is opened to your own world.
  + There are several String variables created with a Binding definition, like:

```
strPlayerCandyTotal = new Binding<string>('0');
```

* These variables are bound to the customUI and assigned a default value. In the above case, the default is set to `0`.

**Note**: Any variable that you wish to store values that appear in your customUI must be captured to a Binding.

**Note**: All of these values should be set to String values. The above example represents the player’s candy total as a String. The values that are read from the persistent variable are Number values, which are cast to String values when refreshing the UI.

#### initializeUI() method

The `initializeUI()` method sets up the user interface.

**Note**: The `initializeUI()` method is executed first, before the `start()` method, so no user is looking at what is displayed when it is executed. The code relies on this order of execution, but it also means that we assign preliminary, default values before we can actually read in the player data.

Three views are declared:

* `ViewCandyHeader` - shows `Text()` view of a Candy! message at the top of the UI
* `ViewCandyTotal` - displays Text view a “Total Candy” message, including the player’s current total.

  + Please note the reference to the Binding variable as part of this `Text()` definition:

  `text: this.strPlayerCandyTotal,`

  + Since the variable `strPlayerCandyTotal` is scoped within the class definition, the `this` keyword provides a clear reference to it.
* `ViewCandyTotalMessage` - displays `Text()` view of a message, which is changed based on the value of the candy total variable.

  + In this case, the message is captured to the `strMessage` Binding:

  `text: this.strMessage,`

  + It is color-coded by referencing the `strColor` Binding:

  `color: this.strColor,`

After the `initializeUI()` method has been executed, then the UI has been defined as an object.

#### start() method

After `initializeUI()`, the `start()` method then executes. Here’s the whole code:

```
start() {
    // Initialize the UI for this player, when the attached trigger zone is entered.
    this.connectCodeBlockEvent(this.props.triggerZone, hz.CodeBlockEvents.OnPlayerEnterTrigger, (enteredBy: hz.Player) => {
    let sct = this.world.persistentStorage.getPlayerVariable(enteredBy, this.strPlayerCandyPVar);
    if ((sct == undefined) || (sct == null)) {
      console.log("Candy value is undefined for this player.")
      sct = 0;
    } else {
      console.log(enteredBy.name.get() + " player has " + sct.toString() + " points.")
    };
  this.refresh([enteredBy], sct);
  })
};
```

The code creates a listener to the onPlayerEnterTrigger CodeBlock event. This listener is defined to be attached to the trigger zone set in the Properties panel (`hz.props.triggerZone`), with the parameter `enteredBy` set to the player who enters the trigger.

When the trigger zone is breached, the onPlayerEnterTrigger CodeBlock event is fired, and the arrow function (code after the =>) does the following:

* Sets a local variable (`sct`) to be the value for the player of the persistent variable named in the `strPlayerCandyVar` variable.
* After a quick validation check, the `enteredBy` player and the `sct` variable are passed to the refresh code.

#### refresh()

When the player enters the trigger, the persistent variable is retrieved to a local variable, and then `refresh()` is called to update the custom UI with the variable and some related information.

Based on the value of the retrieved count of candy for the player, the `refresh()` code assigns a message and a color coding to the message.

A key line:

```
let scr: string = intPlayerCurrentScore.toString()
```

The persistent variable is stored as a Number. This value converts it to a String value so that it can be assigned to the Binding variable.

After the evaluations have been done, all of the Binding variables are assigned new values, all of which are String values:

```
this.strPlayerCandyTotal.set(scr);
this.strMessage.set(msg);
this.strColor.set(clr);
```

#### Summary

* Property in the code allows a designer to select a trigger zone to use as the trigger for an update to the custom UI.
* `initializeUI()` method sets of the elements of the custom UI.
* `start()` method:
  + Defines onPlayerEnterTrigger listener:
    - Retrieves persistent variable value for the player.
  + Executes `refresh()` code:
    - Based on value of the persistent variable, assigns message and color-coding.
    - When these values are assigned to the Binding variables, the UI is updated for the specific player who entered the trigger.

### Station07b-GetCandy

<details>
<summary>Image of GetCandy Custom UI</summary>

<p></p>

[Image of GetCandy Custom UI](../../../image_data/739cfaf9527af769dc037188c7ebc589e50c778fcc424e52a0d8df05d5aca1eb.md)

### Overview
This image depicts a user interface element that appears to be part of a game or application related to collecting candy. The central focus is a card-like interface with text and interactive buttons.

### Key Elements
- **Header Text**: Located at the top of the card, the text reads **"GetCANDY!"**. The word "Get" is in pink, "CANDY" is in green, and "! is in light blue. The text is centered within the card.
- **Total Candy Display**: Below the header, the text **"Total Candy: 8"** is displayed. The number "8" is in black, while the rest of the text is in gray.
- **Minus Button**: Positioned below the total candy display, there is a red button with a white minus sign (-).
- **Plus Button**: To the right of the minus button, there is a green button with a white plus sign (+).

### Visual Flow / Relationships
The most prominent visual element is the card itself, which contains all the other elements. The header text is the first thing the viewer sees, followed by the total candy count, and then the interactive buttons. There are no arrows or lines connecting the elements, but the layout suggests a sequential interaction flow where the user would interact with the buttons after viewing the total candy count.

</details>

<p></p>



This station includes buttons to allow the player to click +/- buttons to increase or decrease the amount of candy. The new amount for the candy total is written to the persistent variable upon exit, so that the player can go back to the first UI to see an updated value and message.

The script for the second UI extends from the first. The extensions allow for:

* Changing the value of the variable within the UI
* Writing the value back to the persistent variable when the player exits the trigger

Key differences are outlined below.

#### Local variables

A local variable is used to hold the value of the persistent variable.

```
// Station07b: Local value is used to store the value in the Custom UI as it is being changed.
// On exit, this value is posted back as the new value to the PVAR.
let intLocalCandyCount: number = 0;
```

The variable is a Number type, so that it can be incremented or decremented based on user action.

#### MyButton properties and definitions

Since this UI includes +/- buttons, the MyButton function and related property type definitions have returned. These definitions are very similar to those in use in Station05. Some modifications have been made to the button definitions for this UI.

#### Variables

The message (`strMessage`) and color (`strColor`) variables are removed, since they do not apply in this UI. As a result the Refresh code is much simpler.

#### initializeUI() method

The `initializeUI()` method is very similar. From the first station, the final row, which displayed the strMessage value, has been replaced with two +/- buttons instead.

Each of these buttons supports a localized `onClick()` event handler, which is defined as part of the button definition. Below is the entire definition for the Less button:

```
MyButton({
  label: "-",
  baseColor: "red",
  onClick: () => {
    // console.log("Pressed Less button.");
    if (intLocalCandyCount <= 0) {
      intLocalCandyCount = 0
    } else {
      intLocalCandyCount = intLocalCandyCount - 1
    }
    this.strPlayerCandyTotal.set(intLocalCandyCount.toString());
  },
  style: {
    marginRight: 12,
  },
}),
```

For the `onClick()` event, you can see that a data validation check is performed, else the local variable holding the total value of the candy (`intLocalCandyCount`) is decremented. This value is converted to a String and assigned to the Binding variable. Since this variable is bound to the UI, this assignment is done using the `set()` method:

```
this.strplayercandytotal.set(intlocalcandycount.tostring());
```

#### start() method

The `start()` method includes the onPlayerExitTrigger listener:

```
this.connectCodeBlockEvent(this.props.triggerZone, hz.CodeBlockEvents.OnPlayerExitTrigger, (enteredBy: hz.Player) => {
  this.refresh([enteredBy], intLocalCandyCount);
  this.world.persistentStorage.setPlayerVariable(enteredBy, this.strPlayerCandyPVar,intLocalCandyCount);
  this.sendNetworkBroadcastEvent(CandyUpdated, {player: enteredBy, intCandy: intLocalCandyCount});
});
```

When the player exits the trigger, it means that the player has left the custom user interface. In this case, the persistent variable for the exiting player is set to the value of the local variable: intLocalCandyCount.

> **Note**: When the player exits the interface, the CandyUpdated broadcast event is sent back to the Station07a script, which then updates its own custom UI with the new value. This saves the lag time of saving the persistent variable to storage and then reading the persistent variable back from storage if/when the player re-enters the other custom UI.

## Key Learnings

### Meta Horizon Worlds learnings

* Use of the Trigger Zone gizmo to capture trigger events
* Getting and setting persistent variables based on triggers
* Assigning and updating variables as Bindings to values in the user interface
  + Any variable that you wish to store values that appear in your customUI must be captured to a Binding.

### TypeScript coding

* `set()` method for Binding variables

`toString()` method for converting Number values to String values