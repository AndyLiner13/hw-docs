Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/variable-groups/world-level-variables

# Create world level variables

World level variables allow you to host group activities or create community persistence in your world and persist that information across multiple instances.

## Set up world level variables

Use the following process to create a world level variable:

- Select **Systems** > **Variable Groups** from the menu bar.
- In the Variable Groups panel, click the **Create Variable Group** button, then name your created variable group.
- After creating the variable group, click the **Create Variable** button. In the **Create Persistent Variable** panel, use the **Variable Type** dropdown to select **World Persistent Variable**.
  <details>
  <summary>Create Persistent Variable panel</summary>
  
  <p></p>
  
  [Create Persistent Variable panel](../../../image_data/cb0637885d3718f3dd3c24d8642e811202ed38f29012b9385996b18a9c2d19d2.md)
  
  ### Overview
  This image depicts a modal dialog box titled "Create Persistent Variable." It contains form fields for creating a persistent variable within a game development interface. The dialog box includes options for selecting the variable type, entering the name, choosing the data type, setting an initial value, and two buttons labeled "Cancel" and "Create."
  
  ### Key Elements
  - **Title Bar**: Located at the top of the dialog box, reads "Create Persistent Variable."
  - **Close Button**: Positioned on the right side of the title bar, represented by an "X."
  - **Variable Type Section**: On the left side, labeled "Variable Type," with a dropdown menu currently set to "World Persistent Variable."
  - **Name Field**: Below the Variable Type section, labeled "Name," with no text entered.
  - **Data Type Section**: Below the Name field, labeled "Data Type," with no selection made.
  - **Initial Value Section**: Below the Data Type section, labeled "Initial Value," showing the number "0."
  - **Dropdown Menu**: A dropdown menu is open, showing two options: "Player Persistent Variable" and "World Persistent Variable," with "World Persistent Variable" selected.
  - **Buttons**: At the bottom of the dialog box, there are two buttons labeled "Cancel" and "Create."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the dropdown menu, as it is open and actively selected. The form fields are arranged vertically, with the "Variable Type" section being the first, followed by the "Name," "Data Type," and "Initial Value" sections. The buttons at the bottom are aligned horizontally, with "Cancel" on the left and "Create" on the right. There are no arrows or lines connecting elements, but the form fields follow a logical sequence for data entry.
  
  </details>
  
  <p></p>
  
  
- Next, name your created variable and select the **Data Type**. You can choose from the following data types:
  * Number - used by world counter APIS to save community activity counters
  * Object - used by world variable APIs to save complex world states
- After selecting the **Data Type** input a value for the **Initial Value**.

## Use world level variables

After setting up world level variables, you can use them in your scripts. Reference the following sample scripts to use world level variables in your scripts:

### Import required modules

```
import * as hz from 'horizon/core';
```

### Get a world level variable

```
const value = this.world.persistentStorageWorld.getWorldVariable<string>(
 "VG:WPVar"
);
console.log("World Variable Value: " + value);
```

### Fetch a world variable

```
await this.world.persistentStorageWorld.fetchWorldVariableAsync(
 "VG:WPVar"
).then((value) => {
 console.log("World Variable Value: " + value);
});
```

### Set a world variable

```
await this.world.persistentStorageWorld.setWorldVariableAcrossAllInstancesAsync(
 "VG:WPVar",
 { "key": "value" }
).then((value) => {
 console.log("World Variable Set: " + value);
});
```

> **Note:** When multiple instances update the same world variable simultaneously, race conditions can cause data loss. For scenarios requiring data integrity (like leaderboards or shared inventory), see [Concurrent-safe world level variable updates](../../../Scripting/API%20references%20and%20examples/Concurrent-safe%20world%20level%20variable%20updates.md) to learn about conflict detection and protection.

## Set world-level counters

After creating a world level variable of type number, you can use it to set world-level counters. The counter APIs can be used to bump certain logic in the game such as `make_wish` or `catch_butteryfly` etc.

Reference the following sample scripts to use world level counters in your scripts:

### Get world counter

```
const value = this.world.persistentStorageWorld.getWorldCounter<string>(
 "VG:WPVar"
);
console.log("World Variable Value: " + value);
```

### Increment a world counter

```
await this.world.persistentStorageWorld.incrementWorldCounter(
 "VG:WPVar",
 10
).then((value) => {
 console.log("World Counter: " + value);
});
```