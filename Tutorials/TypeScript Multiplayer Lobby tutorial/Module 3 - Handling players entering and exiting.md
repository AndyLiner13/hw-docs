Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/multiplayer-lobby-tutorial/module-3-handling-players-entering-and-exiting

# Module 3 - Handling players entering and exiting

In Meta Horizon Worlds, players can travel to a world at any time during the world’s life. However, a game may have already been in progress, and you want to prevent players from immediately joining the in-progress game without kicking them out of the overall experience. How do you do that?

To manage these states, we need to know about the status of the game and the status of the players (are they in the game or not), which can be a little difficult to manage. In this tutorial, we explore one way to solve manage player/game states.

We start by adding functionality to help us understand the current number of players in the world. Those players are divided between those players currently in an active match and those waiting in a lobby area. In the provided **GameUtils.ts** file, there are a couple of helpful classes to simplify this tracking for us.

## Adding and Removing players to the match

In the **PlayerManager** script, we make a couple of replacements to add and remove players from the matchPlayers array.

In the file, search for the following:

```
// TODO: when players enter, add them to our list of MatchPlayers
```

Replace the above with:

```
this.matchPlayers.addNewPlayer(player);
```

Next, replace:

```
// TODO: when a player leaves, remove them from our list of MatchPlayers
```

With:

```
this.matchPlayers.removePlayer(player);
```

That’s it! Our helper classes and functions really made that simple.

**Tip**: The **PlayerList** and **MatchPlayers** util classes can be copied and reused in any project.

## Checkpoint

Done with Module 3. After completing this module your game is now tracking all players in the world, all players in the lobby, and all players in a match.

If you want to see more of how this works, check out the **MatchPlayers** class in the **GameUtils** file.