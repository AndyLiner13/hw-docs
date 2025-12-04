Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/object-type-persistent-variables

# Object Type Persistent Variables

**Note**: Some scripts may present an error at compile due to a casting mismatch. To resolve, cast the return value for getPlayerVariable as a number and recompile your script.

## What problems do Object Type Persistent Variables solve?

Meta Horizon Worlds object type persistent variables enable you to save structured variable information between user sessions. The advantage of object type persistent variables is that they support JSON (JavaScript Object Notation), allowing you to save more complicated structured data as a single JSON object, instead of having to save multiple number-type persistent variables.

In the past, number-type persistent variables were only capable of using simple numbers. However, object type persistent variables allow you to store more complex and detailed variable types, such as strings, booleans, and lists. Having this additional functionality will enhance your world building experience.

## Known Issues and Limitations

* Each object type variable has a size limit of 10 KB. If you reach this size limit, create multiple variables instead.

### This document will cover the following topics:

* [Creating an Object-type variable](/hw-mcp-tools/documentation/hw-docs/Scripting/Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md#creating-an-object-type-variable)
* [Accessing variables from TypeScript](/hw-mcp-tools/documentation/hw-docs/Scripting/Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md#accessing-variables-from-typescript)
* [Updating a variable from TypeScript](/hw-mcp-tools/documentation/hw-docs/Scripting/Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md#updating-a-variable-from-typescript)
* [Best Practices](/hw-mcp-tools/documentation/hw-docs/Scripting/Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md#best-practices)

## Creating an Object-type variable

You can find persistent variables by looking under **Variable Groups** in the **Systems** menu of the CUI tool. When you create a new variable within a variable group, you’ll see an option to choose the **Number**, or the **Object** type.

- Access **Persistent Variables** in a **Variables Group** .
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452816754_512524701285486_2041147541414773851_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=fpqCABh2m2QQ7kNvwH90L6v&_nc_oc=AdlxnD5xwK1GKeQmfk2tmjalZoPJVwGVQqXbf5mCmdzXdJLD9yn5zNw5loM3MKlam8U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FOOjLExwYM9SUeKCgBjjHQ&oh=00_AfloJHCaeCFpUoCliVNmKD9I5cpwWeWoM11P6JG0kyiWvg&oe=694BD484)
- To configure a variable, specify either **Object** or **Number**:
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452965108_512524707952152_3292887128801188756_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=yvwiBnWwpj0Q7kNvwENdu40&_nc_oc=AdnQw3AJ5kItpqcxs_0Dp-DZNNESRlK1IMyube6e2h1NnGzC_0bmoDqF2UhssHs_ZSg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FOOjLExwYM9SUeKCgBjjHQ&oh=00_Aflc82DnO1jOYAmB7H9AXXmjy31NieU9kGz8bTXoTgUXFA&oe=694BD650)

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