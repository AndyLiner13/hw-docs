# ITeam Interface

Basic functions for teams based gameplay.

## Signature

```typescript
export interface ITeam
```

## Remarks

In horizon, every world comes with a team management logic. Players, at any moment during their session, can join, leave or change teams at will. But a player can only be in one team of a given team group.

Team groups are ways to separate teams in different sets. This allows the creation of multiple gameplay bubbles with their own teams in one single world.

## Methods

| Method | Description |
| --- | --- |
| `addLocalPlayerToTeam(teamName, teamGroupName)` | Adds the local player to a team. If the player was already in a team, they a removed from it at the same time. Client only, raises an exception on the server.<br/>**Signature:** `addLocalPlayerToTeam(teamName: string, teamGroupName?: string): void;`<br/>**Parameters:** `teamName: string` - The name of the team to add to. Non existing teams are ignored, `teamGroupName: string` - (Optional) The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.<br/>**Returns:** `void` |
| `addPlayerToTeam(player, teamName, teamGroupName)` | Adds a player to a team. If the player was already in a team, they a removed from it at the same time. Server only. Raises an exception on clients.<br/>**Signature:** `addPlayerToTeam(player: Player, teamName: string, teamGroupName?: string): void;`<br/>**Parameters:** `player: Player` - The player object to add to the team, `teamName: string` - The name of the team to add to. Non-existing teams are ignored, `teamGroupName: string` - (Optional) The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.<br/>**Returns:** `void` |
| `createTeam(teamName, teamGroupName)` | Creates a new team within a group. Server only, raises an exception on clients.<br/>**Signature:** `createTeam(teamName: string, teamGroupName?: string): void;`<br/>**Parameters:** `teamName: string` - The unique name of the team. Empty names are ignored. Duplicates are ignored, `teamGroupName: string` - (Optional) The name of the group in which the team will exist. Undefined redirects to the Default group.<br/>**Returns:** `void` |
| `createTeamGroup(name)` | Creates a new group of teams. Server only, raises an exception on clients.<br/>**Signature:** `createTeamGroup(name: string): void;`<br/>**Parameters:** `name: string` - The unique name of the group to create. Empty names are ignored. Duplicates are ignored.<br/>**Returns:** `void` |
| `deleteTeam(teamName, teamGroupName)` | Delete a team within a group. Server only, raises an exception on clients.<br/>**Signature:** `deleteTeam(teamName: string, teamGroupName?: string): void;`<br/>**Parameters:** `teamName: string` - The name of the team to delete. Non-existing teams are ignored, `teamGroupName: string` - (Optional) The name of the group from which the team will be removed. Undefined redirects to the Default group. Non existing groups are ignored.<br/>**Returns:** `void` |
| `deleteTeamGroup(name)` | Deletes a group of teams. Server only, raises an exception on clients.<br/>**Signature:** `deleteTeamGroup(name: string): void;`<br/>**Parameters:** `name: string` - The name of the group to delete. Default or non existing groups are ignored.<br/>**Returns:** `void` |
| `getPlayerTeam(player, teamGroupName)` | Returns the name of the team a given player is in. If it doesn't exist, returns undefined.<br/>**Signature:** `getPlayerTeam(player: Player, teamGroupName?: string): string \| undefined;`<br/>**Parameters:** `player: Player` - Player to get the team, `teamGroupName: string` - (Optional) The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.<br/>**Returns:** `string \| undefined` - The name of the team, or undefined if none. |
| `getTeamGroupNames()` | Gets the list of all groups currently existing in the world.<br/>**Signature:** `getTeamGroupNames(): string[];`<br/>**Returns:** `string[]` - The list of group names. |
| `getTeamNames(teamGroupName)` | Returns the list of all teams within a group.<br/>**Signature:** `getTeamNames(teamGroupName?: string): string[];`<br/>**Parameters:** `teamGroupName: string` - (Optional) The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.<br/>**Returns:** `string[]` - The list of names of the teams. |
| `getTeamPlayers(world, teamName, teamGroupName)` | Returns the list of player IDs in a team. Player objects can be recovered from the World.getPlayers() list.<br/>**Signature:** `getTeamPlayers(world: World, teamName: string, teamGroupName?: string): Player[];`<br/>**Parameters:** `world: World` - The world to extract the player list from, `teamName: string` - The name of the team to add to. Non-existing teams are ignored, `teamGroupName: string` - (Optional) The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.<br/>**Returns:** `Player[]` - The list of player IDs. |
| `removeLocalPlayerFromTeam(teamGroupName)` | Removes the local player from their team. Client only. Raises an exception on the server.<br/>**Signature:** `removeLocalPlayerFromTeam(teamGroupName?: string): void;`<br/>**Parameters:** `teamGroupName: string` - (Optional) The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.<br/>**Returns:** `void` |
| `removePlayerFromTeam(player, teamGroupName)` | Removes a player from their team. Server only. Raises an exception on clients.<br/>**Signature:** `removePlayerFromTeam(player: Player, teamGroupName?: string): void;`<br/>**Parameters:** `player: Player` - the player object to remove from the team, `teamGroupName: string` - (Optional) The name of the group where the team exists. Undefined redirects to the Default group. Non-existing groups are ignored.<br/>**Returns:** `void` |