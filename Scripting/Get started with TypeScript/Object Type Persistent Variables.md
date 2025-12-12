Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/object-type-persistent-variables

# Object Type Persistent Variables

**Note**: Some scripts may present an error at compile due to a casting mismatch. To resolve, cast the return value for getPlayerVariable as a number and recompile your script.

## What problems do Object Type Persistent Variables solve?

Meta Horizon Worlds object type persistent variables enable you to save structured variable information between user sessions. The advantage of object type persistent variables is that they support JSON (JavaScript Object Notation), allowing you to save more complicated structured data as a single JSON object, instead of having to save multiple number-type persistent variables.

In the past, number-type persistent variables were only capable of using simple numbers. However, object type persistent variables allow you to store more complex and detailed variable types, such as strings, booleans, and lists. Having this additional functionality will enhance your world building experience.

## Known Issues and Limitations

* Each object type variable has a size limit of 10 KB. If you reach this size limit, create multiple variables instead.

### This document will cover the following topics:

* [Creating an Object-type variable](Object%20Type%20Persistent%20Variables.md#creating-an-object-type-variable)
* [Accessing variables from TypeScript](Object%20Type%20Persistent%20Variables.md#accessing-variables-from-typescript)
* [Updating a variable from TypeScript](Object%20Type%20Persistent%20Variables.md#updating-a-variable-from-typescript)
* [Best Practices](Object%20Type%20Persistent%20Variables.md#best-practices)

## Creating an Object-type variable

You can find persistent variables by looking under **Variable Groups** in the **Systems** menu of the CUI tool. When you create a new variable within a variable group, you’ll see an option to choose the **Number**, or the **Object** type.

- Access **Persistent Variables** in a **Variables Group** .
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/cfc6ac3a915832e21adb3d471e8f2269daca13db4a6a75e52533358d772b2ba8.md)
  
  ### Overview
  The image depicts a user interface screen from a software application, specifically a section related to managing persistent variables within a game development environment. The layout includes a sidebar menu on the left and a main content area on the right.
  
  ### Key Elements
  - **Sidebar Menu (Left Panel)**:
    - **Visual description**: A vertical menu with a dark background and light text.
    - **Location**: Left side of the screen.
    - **Contents**: Includes options such as "Systems," "Quests," "Leaderboards," "Commerce," "Variable Groups," "Added To World," "Owned By Me," and "Shared with Me." The "Added To World" option is highlighted, indicating it is currently selected.
    - **Visual styling**: Dark gray background, white text, and a subtle blue highlight under the selected option.
  
  - **Main Content Area (Right Panel)**:
    - **Visual description**: A large rectangular area with a dark background and light text.
    - **Location**: Right side of the screen.
    - **Contents**: Displays a heading "Persistent Variables (1/100)" followed by a description explaining the purpose of creating persistent variables across worlds and using them in scripts. Below this, there is a variable named "# v11 Number."
    - **Visual styling**: Dark gray background, white text, and a light gray number indicator (#).
  
  - **Top Bar (Right Panel)**:
    - **Visual description**: A horizontal bar at the top of the main content area.
    - **Location**: Top of the main content area.
    - **Contents**: Includes a back arrow, a title "hh1," a settings gear icon, and a "Create Variable" button.
    - **Visual styling**: White text and icons against a dark gray background.
  
  - **Sorting Dropdown (Right Panel)**:
    - **Visual description**: A dropdown menu for sorting variables alphabetically.
    - **Location**: Top-right corner of the main content area.
    - **Contents**: Displays "A-Z" with a downward arrow indicating a dropdown.
    - **Visual styling**: White text against a dark gray background.
  
  - **Action Buttons (Right Panel)**:
    - **Visual description**: Two small icons located to the right of the variable name "# v11 Number."
    - **Location**: Right side of the variable name.
    - **Contents**: An icon resembling a clipboard and another icon with three vertical dots.
    - **Visual styling**: White icons against a dark gray background.
  
  - **Bottom Navigation Bar**:
    - **Visual description**: A horizontal bar at the bottom of the screen with various icons.
    - **Location**: Bottom of the screen.
    - **Contents**: Includes icons for a cube, a wrench, a shopping bag, a globe, a play button, a code snippet, and a gear.
    - **Visual styling**: White icons against a dark gray background.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The main content area displaying the persistent variable information.
  - **Arrows/Lines/Connectors**: None.
  - **Reading Order**: The flow starts from the sidebar menu, moves to the main content area, and then to the bottom navigation bar.
  - **Spatial Relationships**: The sidebar menu is on the left, the main content area occupies the central and right portions of the screen, and the bottom navigation bar is at the very bottom.
  
  </details>
  
  <p></p>
  
  
- To configure a variable, specify either **Object** or **Number**:
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/180b076bb9c6d52a86ef78d2e9f56435ef8e6324278361b513660675306d0329.md)
  
  ### Overview
  The image displays a user interface screen from a software application, specifically a section for creating persistent variables within a game development environment. The screen includes a sidebar menu on the left and a main content area on the right. The main content area is focused on creating a new variable, with fields for entering the name and selecting the type of variable.
  
  ### Key Elements
  - **Sidebar Menu**: Located on the left side of the screen, with options such as "Systems," "Quests," "Leaderboards," "Commerce," "Variable Groups," "Added To World," "Owned By Me," and "Shared with Me." The "Variable Groups" option is highlighted, indicating it is currently selected.
  - **Main Content Area**: On the right, the title "Persistent Variables (1/100)" is displayed at the top. Below that, there is a brief description explaining the purpose of creating persistent variables. The main action is the creation of a new persistent variable, with fields for "Name" and "Type." A dropdown menu is open under the "Type" field, showing options "# Number" and "{} Object."
  - **Create Persistent Variable Section**: This section contains fields for entering the name and selecting the type of variable. There is also a "Cancel" button below the form fields.
  - **Top Bar**: At the top of the main content area, there is a back arrow, a settings gear icon, and a "Create Variable" button.
  - **Dropdown Menu**: Opened under the "Type" field, showing options "# Number" and "{} Object."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the open dropdown menu under the "Type" field. The form fields for "Name" and "Type" are adjacent to each other, with the "Name" field being larger and more prominent. The "Cancel" button is positioned below the form fields. The back arrow and settings gear icon are located at the top of the main content area, while the "Create Variable" button is on the far right. The sidebar menu on the left provides navigation options.
  
  </details>
  
  <p></p>
  
  

## Accessing variables from TypeScript

To interact with the variable(s) created in the previous step, you’ll need TypeScript logic that calls the Persistent Variable APIs. You can find these APIs in the `world` component in the `horizon/core` module. To add this definition to your TypeScript code, add the following import to the top of your component:

```
import * as hz from 'horizon/core';
```

When your script is configured, you’ll now see a `persistentStorage` object in your `this.world` definition. This object includes the `getPlayerVariable` function returning a type extending `PersistentSerializableState`, which is a composition of several base supported types such as number, boolean, string, and arrays of these base types.

If a player variable hasn’t yet been set (initialized), the `getPlayerVariable` method returns either `0` for number type variables, or `null` for object type variables. This allows you to handle cases where the variable might not have been set yet. You should include [typeof checks](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html) to confirm the value received and [assert the correct type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions).

### Number Type Variable Example

```
const num_var_name = 'my_var_group:user_level'; // Set as a number type.
this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, (player: hz.Player) => {
  let playerLevel = this.world.persistentStorage.getPlayerVariable<number>(
      player,
      num_var_name,
    );

    console.log('User level: ' + playerLevel);
  });
```

### Object Type Variable Example

```
const obj_var_name = 'my_var_group:user_info'; // Set as an object type.
type Perk = {
  id: number;
  name: string;
}

type Stats = {
  victories: number;
  has_completed_intro: boolean;
}

type User = {
  unlocked_perks: Perk[];
  stats: Stats;
}

this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, (player: hz.Player) => {
  let userInfo: User \| null = this.world.persistentStorage.getPlayerVariable<User>(
    player,
    obj_var_name
  );

  if (userInfo == null) {
    // Uninitialized state
    console.log('Player does not yet have data initialized for ' + obj_var_name);
  } else {
    console.log('Player victories count ' + userInfo.stats.victories);
  }
});
```

## Updating a variable from TypeScript

You can save persistent variables for the player using the `setPlayerVariable` function in the `persistentStorage` object. All data previously saved under the specified variable group and variable name is overwritten with the data passed into the method.

### Number Type Variable Example

```
// On a level update event, save the new user level.
this.connectEntityEvent(this.entity, LevelUpEvt, (data: {player: Player}) => {
  playerLevel += 1;
  this.world.persistentStorage.setPlayerVariable(
    data.player,
    num_var_name,
    playerLevel,
  );
});
```

### Object Type Variable Example

```
// On a perk unlock event,
// save the new perk to the UserInfo store.
this.connectEntityEvent(this.entity, PerkUnlockEvt, (data: {player: Player; perk: Perk}) => {
    userInfo.unlocked_perks.push(perk);
    this.world.persistentStorage.setPlayerVariable(
      data.player,
      obj_var_name,
      userInfo,
    );
  });
```

## Best Practices

### Create a Module to store Variable Names

Variable names are often used to retrieve and update values in the persistent variables store. If you change a persistent variable name, or the name of the variable group that it’s in, then you must modify all call sites to reference the updated name. Instead of hard-coding these values at call sites, Meta recommends that you save variable names in a module that you can easily import with your world’s scripts. See the following code for an example.

```
// Module: StructuredData
export const OBJECT_VAR = 'my_var_group:object_var';
export const NUMBER_VAR = 'my_var_group:number_var';
```