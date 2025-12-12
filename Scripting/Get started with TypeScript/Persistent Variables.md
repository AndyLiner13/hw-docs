Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/persistent-variables-v2

# Persistent Variables

Persistent variables (or PVARs) enable the storage and retrieval of player-specific data during gameplay, which persists across the worlds that players explore. For example, you can use PVARs for storing a player’s inventory of objects, current hit points, and more. PVARs support two basic types of variable:

**Note**: Unless player data is stored in a persistent variable, it is not retained across play sessions.

* **Number**: Persistent variables of Number type are single entities that can contain a value of Number type. For example, you can store a player’s score, the current level, or other numeric data.
* **Object**: Persistent variables of Object type allow you to specify custom data types to hold sets of data of various data types, represented as JSON objects. Supported data types include Number, String, Boolean, and list types.

This article explores the basics of creating PVARs using TypeScript and provides some useful examples, from which you can base your own PVAR development.

## Known Issues and Limitations

* Object type variables have a size limit of 10kB. If you hit the limit, you must create multiple variables.
* A world can contain up to 5 variable groups. Each group has a limit of 150 persistent variables.
* Persistent variables are not accessible in a script executing in Local mode.

## Select or Create Variable Group

**Tip**: Variable groups can be shared across worlds. Ideally, your team’s variable groups would be created through a single shared or service account.

**Note**: All persistent variables must be created within a variable group.

**Note**: These steps utilize the Desktop Editor for creating and managing your variables and variable groups. These objects can also be created in headset.

To begin, you must create a new variable group to hold your persistent variables. If you have already created a variable group, you can skip this section.

- Open the Desktop Editor.
- From the menubar, select the **Systems menu**. Then, select **Variable Groups**.

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/8c2915e5f9472e2933f6e094127e7fe99724e459720ed22c06bdb826398ee4e1.md)
  
  ### Overview
  This image depicts a user interface section within a software application, specifically showing a list of variable groups under the "Systems" tab. The layout includes navigation options at the top, a search bar, and a list of variable groups with some interactive elements.
  
  ### Key Elements
  - **Navigation Bar**: Located at the top, with tabs labeled "Systems," "Scripts," and "Gen." Each tab has a downward arrow indicating a dropdown menu.
  - **Search Bar**: Positioned below the navigation bar, with a magnifying glass icon on the left side.
  - **Variable Groups List**: Below the search bar, displaying two entries:
    - **First Entry**: "v2.0.0 Example Cloned Variable Group" with a red and orange icon on the left, indicating persistent variables (3 Persistent Variables).
    - **Second Entry**: "varPlayerGlobals" with a similar icon, also indicating persistent variables (3 Persistent Variables) and collaborators (1 Collaborator).
  - **Dropdown Menu**: To the right of the search bar, labeled "Added to World" with a downward arrow, suggesting a filter or sorting option.
  - **Add Button**: A plus sign (+) icon located to the right of the search bar, likely for adding new items.
  - **Sort Icon**: An icon resembling a shuffle symbol (↑↓) next to the add button, possibly for sorting functionality.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the variable group entries, which are arranged in a vertical list. The navigation bar and search bar are positioned at the top, providing context and functionality. The dropdown menu and add button are secondary elements that interact with the main content. The sort icon is placed to the right of the search bar, indicating its relation to the search functionality.
  
  </details>
  
  <p></p>
  
  
- In the Variable Groups panel, you can select, import, or create a variable group to store your variables:

  * **Select**: Select one of the variable groups that has already been added to the world.
  * **Import**: You can import a variable group and all of its variables from another world. You must be the owner (creator) of the variable group.
  * **Create**: To create a new variable group, click the **+ icon**.
- In the Create Variable Group dialog:
  - **Name**: Enter a name for the variable group. This name is displayed in the user interface and is referenced in any TypeScript that you use to access the variable group.
  - **Description**: Enter a user-friendly description for the variable group.
  - **Add to this World**: Select this option to add the new variable group to the current world.
  - To create the new variable group, click **Create**.

After a variable group has been added to a world, scripts in the world can access the group and all of its variables.

## Create an Object-type persistent variable

The following basic steps describe how to create an Object persistent variable and can be used to create a Number-type variable, which is simpler to do.

- If you have not done so already, select the variable group in which to store your persistent variable.
- The name of your variable group and all persistent variables that it contains is displayed:

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/cdd2ad5c45bf83646cccc4fa983bd7d19de5f657b783b1789b1e547d8b13480a.md)
  
  ### Overview
  This image depicts a user interface section of a software application, specifically a variable management screen within a systems or scripts module. The interface includes a dropdown menu, a search bar, and a list of persistent variables.
  
  ### Key Elements
  - **Dropdown Menu**: Located at the top-left corner, labeled "Systems" with a downward arrow indicating a dropdown functionality.
  - **Search Bar**: Positioned below the dropdown menu, spanning horizontally across the middle of the screen. It has a magnifying glass icon on the left side.
  - **Persistent Variables List**: Below the search bar, displaying two entries:
    - **intTotalPoints**: A variable entry with a yellow icon and the label "Number".
    - **objQuestObjectives**: Another variable entry with a blue icon and the label "Object".
  - **Variable Groups Section**: Above the persistent variables list, labeled "Variable Groups". There is a partially visible group name starting with "v2.0.0 Example..." followed by ellipsis (...).
  - **Additional Controls**: To the right of the group name, there are a plus sign (+), a gear icon (settings), and a vertical ellipsis (...).
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the dropdown menu and the persistent variables list. The dropdown menu is the primary interactive element, suggesting that users can expand it to view more options. The persistent variables list is secondary but important as it displays the current state of the system's variables. The search bar acts as a tool for filtering through the variables. The layout follows a standard grid structure with elements aligned horizontally and vertically.
  
  </details>
  
  <p></p>
  
  
- Next to the name of the variable group, click the **+ icon**.
- In the Create Variable dialog:
  - **Name**: Enter the name of the variable. This name is displayed in the user interface and is referenced in any TypeScript that you use to access the variable.
  - **Type**: Select the variable type: 1) Number or 2) Object.
- Click **Create**.

You have created the variable. If you have created an Object-type variable, it contains no fields and data, which must be specified via TypeScript.

## Access persistent variables via TypeScript

### API module and references

Beginning in TypeScript v2.0.0, the `persistentStorage` object is available in the `horizon/core` module. To access this class when you’ve enabled the core module:

```
this.world.persistentStorage;
```

This object supports two methods:

* `getPlayerVariable`: This method returns a PvarPrimitive type representing either a number or an object for the specified variable for the specified player. If a player variable hasn’t been set, the `getPlayerVariable` function returns `0` as a default value. To handle cases where the variable may not have been set, your code should include [typeof checks](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html) to confirm the value received and [assert the correct type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions).
* `setPlayerVariable`: This method saves data into the specified persistent variable for the specified player. More on this later.

### Setting values for persistent variables

When you use `setPlayerVariable`to change values for a player’s variables:

* All requests to update are passed from the client to the server synchronously. As long as there are no network delays or other issues, the database used for persistent storage receives these updates very quickly.
* All updates are enqueued for the database.
* Every five seconds, per-user updates for persistent variables are applied.

**Note**: The database where persistent storage is maintained can be updated as frequently as once every five seconds. If you need to make changes to persistent variables on a more frequent basis, you should maintain them in local variables and then set up asynchronous updating.

## TypeScript Examples

### getPlayerVariable

#### Object example

This example uses the `getPlayerVariable` method to retrieve the data from the `player_details` variable with the `player_data` variable group, for the specified player who enters the world:

**Note**: Since all persistent variables must be stored in a variable group, any request to read or write a persistent variable from TypeScript must also include a reference to the variable group. See below.

```
// names of the variable group and persistent variable containing player data
const varGroupName: string = "varPlayerGlobals";
const varName: string = "player_details"; // Set as a JSON Object
const varKey: string = `${varGroupName}:${varName}`;

this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterWorld, (player: Player) => {
    const valueJson = this.world.persistentStorage.getPlayerVariable(
    player,varKey
);

let playerStats: {[key: string]: any};
if (valueJson === 0) { // Default value from store
    playerStats = {
        player_name: player.name.get(),
        player_rank: "Beginner",
    };
} else { // Saved data retrieved, cast to an object
    playerStats = valueJson as object;
};
console.log(playerStats.player_rank);
});
```

#### Number example

This example retrieves the variable `player_score` from variable group `varPlayerGlobals`. This variable is of Number type, which means it can contain a single numeric value.

```
// names of the variable group and persistent variable containing player data
const varGroupName: string = "varPlayerGlobals";
const varName: string = "player_score"; // Set as a Number
const varKey: string = `${varGroupName}:${varName}`;

this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterWorld, (player: Player) => {
    const playerScore = this.world.persistentStorage.getPlayerVariable(
    player,varKey
    ) as number;
    console.log("Player score: " + playerScore);
});
```

### setPlayerVariable

When you are ready to update a persistent variable, you send as input the local data to the `setPlayerVariable` method, which stores the variable data in persistent storage. Saving persistent variable data is completed by passing the player and variable to the `setPlayerVariable` method.

**Note**: All data in the persistent storage version of the variable is overwritten by the value or values that you pass to it. It is important to be consistent in how persistent variables are read and written within your scripts.

**Note**: The writing process may take a few seconds to complete. If the player data is required for other scripts in your world, it may be faster to create events and listeners for those events to pass updated persistent variable data between scripts in your world. Updating persistent storage can happen asynchronously.

#### Object example

In the following example, the updated value for the player’s rank is passed with the `PlayerRankChangeEvt` event. This data is applied to the `playerStats.player_rank` value, which is part of the JSON object for `PlayerStats`, set earlier in the code.

```
// On a player rank change event, save the new rank to the persistent variable
const varGroupName: string = "varPlayerGlobals";
const varName: string = "player_details"; // Set as a JSON Object
const varKey: string = `${varGroupName}:${varName}`;
this.connectEntityEvent(this.entity, PlayerRankChangeEvt, (data: {player: Player, rank: string}) => {
    playerStats.player_rank = data.rank;
    this.world.persistentStorage.setPlayerVariable(
        data.player,
        varKey, // Stored in "varPlayerGlobals:player_details"
        playerStats
    );
});
```

#### Number example

In this example, the `playerScore` local variable is written to the `player_score` persistent variable when the player exits the world:

```
const varGroupName: string = "varPlayerGlobals";
const varName: string = "player_score"; // Set as a Number
const varKey: string = `${varGroupName}:${varName}`;
this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerExitWorld, (player: Player) => {
    const playerScore = myPoints + teamPoints;
    this.world.persistentStorage.setPlayerVariable(
        player,
        varKey,
        playerScore
    );
    console.log("Player exited with score: " + playerScore);
});
```

## Best Practices

### Create a module to store variable names

Variable names are used to retrieve and update values in the persistent variables store. It’s best to store these values in a single module that other scripts can import and reference as needed:

```
// Module: StructuredData
export const OBJECT_VAR = 'varObject';
export const NUMBER_VAR = 'varNumber';
export const VARIABLE_GROUP_VAR = 'varPlayerGlobals';
```

### Create a type alias to variable structure

When saving object data within persistent storage, data is saved as JSON and includes all values within the object. If you later add a parameter to this object, previously saved player variables may not include this parameter and can lead to errors in your code.

**Note**: To avoid this issue, you should create an [`Interface`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces) or a [`Type Alias`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases) that represents the data you store.

These approaches ensure your data is strongly-typed with a clear definition of the values that are contained within persistent storage.

**Tip**: If you add new values to this definition, you can [mark them as optional](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties) so your code flag if an undefined check is required.

```
// Module: StructuredData
export type PlayerDetails = {
  player_name: string;
  player_score: number;
};

export interface CrossWorldVar {
  player_rank: string;
  player_achievements: Array;
}

// Component Logic:
const varKey: string = `${VARIABLE_GROUP_VAR}:${OBJECT_VAR}`;
let result: PlayerDetails;
const valueJson = this.world.persistentStorage.getPlayerVariable<any>(
  player,
  varKey,
);
if (valueJson === 0) {
  // Create a new instance of PlayerDetails
  result = {player_name: 'Test', player_score: 0};
} else {
  // Cast the data to PlayerDetails
  result = valueJson as PlayerDetails;
}
```