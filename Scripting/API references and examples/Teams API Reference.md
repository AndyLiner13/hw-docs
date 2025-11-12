Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/Teams-api

Learn

# Teams API Reference

## Basic functions for teams based gameplay.

In Horizon, every world comes with team management logic. Players can, at any time during their session, join, leave, or change teams at will. However, a player can only be in one team of a given team group.

Team groups are ways to separate teams into different sets. This allows the creation of multiple gameplay bubbles with their own teams in a single world.

## createTeamGroup

`createTeamGroup(name: string): void;`

Create a new group of teams. Server only, raises an exception on clients.

### Parameters

* `name` - unique name of the group to create. Empty or duplicate names will be ignored.

## deleteTeamGroup

`deleteTeamGroup(name: string): void;`

Create a new team within a group. Server only, raises an exception on clients.

### Parameters

* `name` - unique name of the group to create. Empty or duplicate names will be ignored.

## createTeam

`createTeam(teamName: string, teamGroupName?: string): void;`

Delete a team within a group. Server only, raises an exception on clients.

### Parameters

* `teamName` - unique name of a team. Empty or duplicate names will be ignored.
* `teamGroupName` - name of the group in which the team will exist. ‘Undefined’ redirects to the “Default” group.

## deleteTeam

`deleteTeam(teamName: string, teamGroupName?: string): void;`

Adds a player to a team; if the player was already in a team, they a removed from it at the same time. Server only, raises an exception on clients.

### Parameters

* `teamName` - name of the team to delete. Non-existing teams are ignored.
* `teamGroupName` - name of the group from which the team will be removed. ‘Undefined’ redirects to the “Default” group, while non-existing groups are ignored.

## addPlayerToTeam

`addPlayerToTeam(player: Player, teamName: string, teamGroupName?: string,): void;`

Removes a player from their team. Server only, raises an exception on clients.

### Parameters

* `player` - Player object to add to the team
* `teamName` - name of the team to add to. Non-existing teams are ignored
* `teamGroupName` - name of the group where the team exists.’Undefined’ redirects to the “Default” group, while non-existing groups are ignored.

## removePlayerFromTeam

`removePlayerFromTeam(player: Player, teamGroupName?: string): void;`

Adds the local player to a team. If the player was already in a team, they a removed from it at the same time. Client only, raises an exception on the server.

### Parameters

* `player` - Player object to remove from the team
* `teamGroupName` - name of the group where the team exists.’Undefined’ redirects to the “Default” group, while non-existing groups are ignored.

## addLocalPlayerToTeam

`addLocalPlayerToTeam(teamName: string, teamGroupName?: string): void;`

Removes the local player from their team. Client only, raises an exception on the server.

### Parameters

* `teamName` - name of the team to add to. Non-existing teams are ignored
* `teamGroupName` - name of the group where the team exists. ‘Undefined’ redirects to the “Default” group, while non-existing groups are ignored.

## removeLocalPlayerFromTeam

`removeLocalPlayerFromTeam(teamGroupName?: string): void;`

Returns the name of the team a given player is in. If it doesn’t exist, returns undefined.

### Parameters

* `teamGroupName` - name of the group where the team exists. ‘Undefined’ redirects to the “Default” group, while non-existing groups are ignored.

## getPlayerTeam

`getPlayerTeam(player: Player, teamGroupName?: string): string | undefined;`

Gets the list of all groups currently existing in the world. @returns the list of group names

### Parameters

* `player` - Player to get the team
* `teamGroupName` - name of the group where the team exists. ‘Undefined’ redirects to the “Default” group, while non-existing groups are ignored. If the player is not in a team, returns ‘Undefined’.

## getTeamGroupNames

`getTeamGroupNames(): string[];`

Returns the list of all teams withing a group.

## getTeamNames

`getTeamNames(teamGroupName?: string): string[];`

Returns the list of player IDs in a team. Player objects can be recovered from the `world.getPlayers()` list.

### Parameters

* `teamGroupName` - name of the group where the team exists. ‘Undefined’ redirects to the “Default” group, while non-existing groups are ignored. @returns the list of names of the teams.

## getTeamPlayers

```
getTeamPlayers(
    world: World,
    teamName: string,
    teamGroupName?: string,
  ): Player[];
```

Returns the list of player IDs in a team. Player objects can be recovered from the `world.getPlayers()` list.

### Parameters

`world` - world to extract the player list from
`teamName` - name of the team to add to. Non-existing teams are ignored.
`teamGroupName` - name of the group where the team exists. ‘Undefined’ redirects to the “Default” group, while non-existing groups are ignored. @returns the list of player IDs.

## OnPlayerChangedTeam codeblock event

In addition to the functions above, the `OnPlayerChangedTeam` event is a powerful tool for creators. A full list of codeblock events can be found [here](https://horizon.meta.com/resources/scripting-api/core.codeblockevents.md/?api_version=2.0.0).

| Event | Called when | Returns |
| --- | --- | --- |
| **OnPlayerChangedTeam** | Any player changes teams | player: Player, teamName: string, teamGroupName: string |