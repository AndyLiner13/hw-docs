---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_iteam
---

# [ITeam Interface](#iteam-interface)

Basic functions for teams based gameplay.

## [Signature](#signature)

```ts
export interface ITeam 
```

## [Remarks](#remarks)

In horizon, every world comes with a team management logic. Players, at any moment during their session, can join, leave or change teams at will. But a player can only be in one team of a given team group.\
Team groups are ways to separate teams in different sets. This allows the creation of multiple gameplay bubbles with their own teams in one single world.

## [Methods](#methods)

### [addLocalPlayerToTeam(teamName, teamGroupName)](#addlocalplayertoteamteamname-teamgroupname)

Adds the local player to a team. If the player was already in a team, they a removed from it at the same time. Client only, raises an exception on the server.

**Signature**

```ts
addLocalPlayerToTeam(teamName: string, teamGroupName?: string): void;
```

**Parameters**

teamName: string

The name of the team to add to. Non existing teams are ignored.

teamGroupName: string

*(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.

**Returns**

void

### [addPlayerToTeam(player, teamName, teamGroupName)](#addplayertoteamplayer-teamname-teamgroupname)

Adds a player to a team. If the player was already in a team, they a removed from it at the same time. Server only. Raises an exception on clients.

**Signature**

```ts
addPlayerToTeam(player: Player, teamName: string, teamGroupName?: string): void;
```

**Parameters**

player: [Player](../Classes/Player.md)

The player object to add to the team.

teamName: string

The name of the team to add to. Non-existing teams are ignored.

teamGroupName: string

*(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Nnon-existing groups are ignored.

**Returns**

void

### [createTeam(teamName, teamGroupName)](#createteamteamname-teamgroupname)

Creates a new team within a group. Server only, raises an exception on clients.

**Signature**

```ts
createTeam(teamName: string, teamGroupName?: string): void;
```

**Parameters**

teamName: string

The unique name of the team. Empty names are ignored. Duplicates are ignored.

teamGroupName: string

*(Optional)* The name of the group in which the team will exist. Undefined redirects to the Default group.

**Returns**

void

### [createTeamGroup(name)](#createteamgroupname)

Creates a new group of teams. Server only, raises an exception on clients.

**Signature**

```ts
createTeamGroup(name: string): void;
```

**Parameters**

name: string

The unique name of the group to create. Empty names are ignored. Duplicates are ignored.

**Returns**

void

### [deleteTeam(teamName, teamGroupName)](#deleteteamteamname-teamgroupname)

Delete a team within a group. Server only, raises an exception on clients.

**Signature**

```ts
deleteTeam(teamName: string, teamGroupName?: string): void;
```

**Parameters**

teamName: string

The name of the team to delete. Non-existing teams are ignored.

teamGroupName: string

*(Optional)* The name of the group from which the team will be removed. Undefined redirects to the Default group. Non existing groups are ignored.

**Returns**

void

### [deleteTeamGroup(name)](#deleteteamgroupname)

Deletes a group of teams. Server only, raises an exception on clients.

**Signature**

```ts
deleteTeamGroup(name: string): void;
```

**Parameters**

name: string

The name of the group to delete. Default or non existing groups are ignored.

**Returns**

void

### [getPlayerTeam(player, teamGroupName)](#getplayerteamplayer-teamgroupname)

Returns the name of the team a given player is in. If it doesn't exist, returns undefined.

**Signature**

```ts
getPlayerTeam(player: Player, teamGroupName?: string): string | undefined;
```

**Parameters**

player: [Player](../Classes/Player.md)

Player to get the team

teamGroupName: string

*(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.

**Returns**

string | undefined

The name of the team, or undefined if none.

### [getTeamGroupNames()](#getteamgroupnames)

Gets the list of all groups currently existing in the world.

**Signature**

```ts
getTeamGroupNames(): string[];
```

**Returns**

string\[]

The list of group names.

### [getTeamNames(teamGroupName)](#getteamnamesteamgroupname)

Returns the list of all teams within a group.

**Signature**

```ts
getTeamNames(teamGroupName?: string): string[];
```

**Parameters**

teamGroupName: string

*(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.

**Returns**

string\[]

The list of names of the teams.

### [getTeamPlayers(world, teamName, teamGroupName)](#getteamplayersworld-teamname-teamgroupname)

Returns the list of player IDs in a team. Player objects can be recovered from the [World.getPlayers()](../Classes/World.md#getplayers) list.

**Signature**

```ts
getTeamPlayers(world: World, teamName: string, teamGroupName?: string): Player[];
```

**Parameters**

world: [World](../Classes/World.md)

The world to extract the player list from.

teamName: string

The name of the team to add to. Non-existing teams are ignored.

teamGroupName: string

*(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.

**Returns**

[Player](../Classes/Player.md)\[]

The list of player IDs.

### [removeLocalPlayerFromTeam(teamGroupName)](#removelocalplayerfromteamteamgroupname)

Removes the local player from their team. Client only. Raises an exception on the server.

**Signature**

```ts
removeLocalPlayerFromTeam(teamGroupName?: string): void;
```

**Parameters**

teamGroupName: string

*(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.

**Returns**

void

### [removePlayerFromTeam(player, teamGroupName)](#removeplayerfromteamplayer-teamgroupname)

Removes a player from their team. Server only. Raises an exception on clients.

**Signature**

```ts
removePlayerFromTeam(player: Player, teamGroupName?: string): void;
```

**Parameters**

player: [Player](../Classes/Player.md)

the player object to remove from the team.

teamGroupName: string

*(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.

**Returns**

void

