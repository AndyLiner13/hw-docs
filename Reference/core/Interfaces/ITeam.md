Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_iteam

# ITeam Interface

Basic functions for teams based gameplay.

## Signature

```
export interface ITeam
```

## Remarks

In horizon, every world comes with a team management logic. Players, at any moment during their session, can join, leave or change teams at will. But a player can only be in one team of a given team group.
Team groups are ways to separate teams in different sets. This allows the creation of multiple gameplay bubbles with their own teams in one single world.

## Methods

|  |  |
| --- | --- |
| **addLocalPlayerToTeam(teamName, teamGroupName)** | Adds the local player to a team. If the player was already in a team, they a removed from it at the same time. Client only, raises an exception on the server.      Signature  ``` addLocalPlayerToTeam(teamName: string, teamGroupName?: string): void; ```  Parameters  teamName: string  The name of the team to add to. Non existing teams are ignored.  teamGroupName: string  *(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.  Returns  void |
| **addPlayerToTeam(player, teamName, teamGroupName)** | Adds a player to a team. If the player was already in a team, they a removed from it at the same time. Server only. Raises an exception on clients.      Signature  ``` addPlayerToTeam(player: Player, teamName: string, teamGroupName?: string): void; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player object to add to the team.  teamName: string  The name of the team to add to. Non-existing teams are ignored.  teamGroupName: string  *(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Nnon-existing groups are ignored.  Returns  void |
| **createTeam(teamName, teamGroupName)** | Creates a new team within a group. Server only, raises an exception on clients.      Signature  ``` createTeam(teamName: string, teamGroupName?: string): void; ```  Parameters  teamName: string  The unique name of the team. Empty names are ignored. Duplicates are ignored.  teamGroupName: string  *(Optional)* The name of the group in which the team will exist. Undefined redirects to the Default group.  Returns  void |
| **createTeamGroup(name)** | Creates a new group of teams. Server only, raises an exception on clients.      Signature  ``` createTeamGroup(name: string): void; ```  Parameters  name: string  The unique name of the group to create. Empty names are ignored. Duplicates are ignored.  Returns  void |
| **deleteTeam(teamName, teamGroupName)** | Delete a team within a group. Server only, raises an exception on clients.      Signature  ``` deleteTeam(teamName: string, teamGroupName?: string): void; ```  Parameters  teamName: string  The name of the team to delete. Non-existing teams are ignored.  teamGroupName: string  *(Optional)* The name of the group from which the team will be removed. Undefined redirects to the Default group. Non existing groups are ignored.  Returns  void |
| **deleteTeamGroup(name)** | Deletes a group of teams. Server only, raises an exception on clients.      Signature  ``` deleteTeamGroup(name: string): void; ```  Parameters  name: string  The name of the group to delete. Default or non existing groups are ignored.  Returns  void |
| **getPlayerTeam(player, teamGroupName)** | Returns the name of the team a given player is in. If it doesn't exist, returns undefined.      Signature  ``` getPlayerTeam(player: Player, teamGroupName?: string): string | undefined; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  Player to get the team  teamGroupName: string  *(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.  Returns  string | undefined  The name of the team, or undefined if none. |
| **getTeamGroupNames()** | Gets the list of all groups currently existing in the world.      Signature  ``` getTeamGroupNames(): string[]; ```  Returns  string[]  The list of group names. |
| **getTeamNames(teamGroupName)** | Returns the list of all teams within a group.      Signature  ``` getTeamNames(teamGroupName?: string): string[]; ```  Parameters  teamGroupName: string  *(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.  Returns  string[]  The list of names of the teams. |
| **getTeamPlayers(world, teamName, teamGroupName)** | Returns the list of player IDs in a team. Player objects can be recovered from the [World.getPlayers()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#getplayers) list.      Signature  ``` getTeamPlayers(world: World, teamName: string, teamGroupName?: string): Player[]; ```  Parameters  world: [World](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world)  The world to extract the player list from.  teamName: string  The name of the team to add to. Non-existing teams are ignored.  teamGroupName: string  *(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.  Returns  [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)[]  The list of player IDs. |
| **removeLocalPlayerFromTeam(teamGroupName)** | Removes the local player from their team. Client only. Raises an exception on the server.      Signature  ``` removeLocalPlayerFromTeam(teamGroupName?: string): void; ```  Parameters  teamGroupName: string  *(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.  Returns  void |
| **removePlayerFromTeam(player, teamGroupName)** | Removes a player from their team. Server only. Raises an exception on clients.      Signature  ``` removePlayerFromTeam(player: Player, teamGroupName?: string): void; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  the player object to remove from the team.  teamGroupName: string  *(Optional)* The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.  Returns  void |