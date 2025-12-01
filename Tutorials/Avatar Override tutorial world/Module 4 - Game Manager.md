Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/avatar-override-tutorial-world/module-4-game-manager

# Module 4 - Game Manager

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/hw-docs/MHCP%20program/Monetization/Monetization%20opportunities.md).

The Game Manager system provides a centralized means of managing the events and actions of the game.

In general, Game Manager systems are responsible for initiating gameplay and completing the end-of-game steps. It can also serve as a repository for other significant game events, such as:

* Game progression with precise timing controls
* State management with automatic transitions
* Player coordination and showcase orchestration
* Avatar override management and reset functionality
* Player join/leave event handling

Note

This Game Manager handles automatic game progression through states. The actual player count requirements for game initiation are managed by the PlayerManager system, which coordinates with GameManager through events.

In Avatar Outfit Overrides, the Game Manager system handles these events with sophisticated timing and sequencing:

* **New Match Registration (onRegisterNewMatch):**

  + When a new match is registered, the GameManager initiates the countdown phase by transitioning the game state to Intermission. This triggers a configurable countdown timer before the main gameplay starts, allowing players to prepare.
* **Game Over (onGameOver):**

  + When the game ends, the GameManager triggers the ending sequence by showing a “Game Over” message to all players for 3 seconds. After a 3-second delay, players are transitioned back to the lobby, and the game prepares for the next round or reset.
* **Manual Game State Change (onGameStateSet):**

  + Other game systems can request the GameManager to change the game state manually. This event allows external scripts to control the game flow dynamically by setting the game to any valid state.
* **Showcase Initialization (onShowcaseInitialized):**

  + When the PlayerManager signals that the showcase phase is ready, the GameManager sets up a sequential queue of players to be showcased. It manages individual player timers (configurable duration per player) and handles automatic progression through all players in the showcase sequence.
* **Voting Results Ready (onVotingResultsReady):**

  + After the showcase, the VotingManager sends the voting results to the GameManager. The GameManager stores the winners and later places them on specific podium positions (1st, 2nd, 3rd place) in the lobby with timed announcements and celebratory messages.
* **Player Enters World (OnPlayerEnterWorld):**

  + When a player joins the game during an active match, the GameManager broadcasts this event so other systems can respond accordingly, such as updating player lists or UI elements.

## System Components

* **Game Manager reference object hosts `GameManager.ts`**

  + Manages the overall game flow with sophisticated timer management, including configurable durations for countdown (default: 30s), round duration (default: 60s), and individual player showcase time (default: 60s). Controls transitions between lobby, gameplay, showcase, and ending phases with precise timing constants.
  + Features advanced showcase queue management with sequential player processing, winner podium placement with staggered announcements, and centralized avatar override reset functionality with player iteration delays.
  + Script dependencies:
    - `GameUtils.ts` (for time conversions, constants, utility functions, and event definitions)
    - `PlayerManager.ts` (for showcase initialization and centralized player tracking)
    - `VotingManager.ts` (for voting results and winner determination)
* **Player Manager reference object hosts `PlayerManager.ts`**

  + Manages player positioning and teleportation across different game areas such as lobby, match, and showcase. Handles spawn points and player movement between areas, and provides centralized player tracking for other systems.
  + Script dependencies:
    - `GameUtils.ts` (for utilities and event communication)
* **Voting Manager reference object hosts `VotingManager.ts`**

  + Centralized voting system managing vote buttons, vote tracking, and voting logic during the showcase phase. Processes votes at showcase completion and determines 1st, 2nd, and 3rd place winners for podium placement.
  + Handles camera switching and button visibility for voting rounds.
  + Script dependencies:
    - `GameUtils.ts` (for utilities and event communication)
    - `PlayerCamera.ts` (for camera management)
* **GameUtils module hosts `GameUtils.ts`**

  + Defines all game-wide events used for communication between components, including game state changes, player events, voting events, timer updates, and showcase coordination. Also provides time conversion utilities and game constants used throughout the system.

## Key Implementation Features

* **Timer Management**: Sophisticated timer system with configurable durations, automatic cleanup, and real-time broadcasting of timer updates
* **Showcase Orchestration**: Sequential player processing with queue management, automatic player positioning, and timed transitions
* **Winner Celebration**: Staggered podium placement with individual announcements and celebratory messages
* **Avatar Reset System**: Centralized avatar override reset with player iteration and timing delays to ensure smooth transitions
* **State Transition Logic**: Comprehensive game state management with automatic progression and event-driven transitions