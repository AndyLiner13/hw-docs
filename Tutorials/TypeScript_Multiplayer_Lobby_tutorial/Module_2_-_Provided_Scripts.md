# Module 2 - Provided Scripts

Some boilerplate scripts are provided with this tutorial. Each script defines a different TypeScript class of properties and methods. Let's take a look at each of the provided classes and their responsibilities.

## PlayerManager

The PlayerManager class is responsible for knowing about all the players in the world, which ones are waiting in the Lobby area, and which ones are in an ongoing match. It is also the component responsible for moving players from one area to another when a match is starting or stopping. This script is connected to predefined Code Block Events, which fire when a player enters or exits the world. It is also listening to a broadcast event for any GameState changes from our GameManager.

## GameManager

The GameManager class is responsible for managing the state of the game. It is configured to listen to a broadcast event that lets any component send a state change request. In this tutorial, the GameManager is also responsible for sending messages to all players.

## StartGameTrigger

The StartGameTrigger script listens to a Code Block Event that fires when a player enters. When it is received, the script then broadcasts that event out for other components to receive and process.

## EndGameTrigger

The EndGameTrigger script listens to a Code Block Event that fires when a player enters the trigger that marks the end of the game, and then broadcasts that event out for other components to receive and process.

## GameUtils

The GameUtils module contains helpful classes and enums that can be easily imported and used by any other component.

## Checkpoint

Done with Module 2. You are now familiar with all of the base scripts included in this game. The remaining modules of the tutorial involve completing the TODO items in these scripts.
