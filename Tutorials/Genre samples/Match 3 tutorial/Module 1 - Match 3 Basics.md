Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/match-3-tutorial/module-1-match-3-basics

# Module 1 - Match 3 Basics

This module covers the core fundamentals of creating a Match 3 game.

The core gameplay is simple: players swap tiles to line up 3 or more of the same type in a row. This creates a “match,” which clears those tiles from the board.

After a match, tiles above the empty spaces drop down. This “cascade” effect can create new matches automatically. When a single move triggers multiple matches, these are called “combos”, and they give the player bonus points.

To win, players have to clear a specific number of tiles within a set number of moves. If they don’t clear enough tiles with the available moves, they typically lose.

A great Match 3 game encourages players to think ahead in order to chain multiple matches from a single move.

To look at any script mentioned in this module, open the **Scripts** menu in the top menu of the Horizon Editor. Then, click the **Scripts in this world** drop down.
<details>
<summary>A view of the "scripts in this world" drop down</summary>

<p></p>

[A view of the "scripts in this world" drop down](../../../image_data/8394453fd3b9283c5f7d2b379ab8d3c919cd15bb5c9d742b8529c063084dcc14.md)

### Overview
The image displays a user interface element that appears to be a dropdown menu or a modal window titled "Scripts." It is part of a larger application interface, likely related to game development or asset management, given the context of "Abilities" scripts listed. The menu is open, showing a list of script names with some metadata next to them.

### Key Elements
- **Dropdown Menu Title**: "Scripts"
  - **Location**: Top-left corner of the dropdown menu.
  - **Contents**: "Scripts in this world"
  - **Visual styling**: Blue background with white text.
- **Search Bar**: Located at the top of the dropdown menu.
  - **Location**: Below the title.
  - **Contents**: A placeholder search bar with a magnifying glass icon.
  - **Visual styling**: Dark background with white placeholder text.
- **Add Button**: A plus sign icon located to the right of the search bar.
  - **Location**: Right side of the search bar.
  - **Contents**: A plus sign.
  - **Visual styling**: White icon on a dark background.
- **Refresh Button**: A circular arrow icon located to the right of the add button.
  - **Location**: Right side of the add button.
  - **Contents**: A circular arrow.
  - **Visual styling**: White icon on a dark background.
- **List of Scripts**: A vertical list of script names.
  - **Location**: Below the search bar.
  - **Contents**: Script names such as "Abilities_AbilityEvents," "Abilities_AbilityRegistry," etc.
  - **Visual styling**: Dark background with white text.
- **Close Button**: An "X" icon located at the top-right corner of the dropdown menu.
  - **Location**: Top-right corner of the dropdown menu.
  - **Contents**: An "X" icon.
  - **Visual styling**: White icon on a dark background.

### Visual Flow / Relationships
- **Most Prominent Element**: The dropdown menu itself, as it is the central focus of the image.
- **Arrows/Connections**: No arrows or connections are visible within the dropdown menu.
- **Spatial Relationships**: The elements are arranged vertically, with the search bar and buttons at the top, followed by the list of scripts below.

</details>

<p></p>



## Try It First

<details>
<summary>Example of the Match 3 board</summary>

<p></p>

[Example of the Match 3 board](../../../image_data/b45a03d3c0ea0251ddb9ae41970f214c9c39d8822fc3c28668a514e4a5e87c42.md)

### Overview
This image depicts a mobile game interface, specifically a match-three puzzle game. The central focus is a grid filled with colorful gemstones arranged in a pattern. At the top, there are indicators for the goal and moves remaining. Below the grid, there are booster options available to the player. The bottom features a character model and a home button.

### Key Elements
- **Grid**: A 7x7 grid filled with various colored gemstones (purple, green, blue, red, orange). Each gemstone has a distinct shape (diamond, hexagon, triangle).
- **Goal**: Located at the top left, indicating the number of gems needed to complete the level (5 red, 5 purple, 5 green).
- **Score**: Displayed as "0" at the top center.
- **Moves Remaining**: Shown as "20" at the top right.
- **Booster Options**: Three icons labeled "Boosters" at the bottom center, each with a number "3" indicating the count of boosters available.
- **Character Model**: A male figure wearing a suit and glasses, positioned at the bottom left.
- **Home Button**: A circular icon with an upward arrow, located at the bottom center.

### Visual Flow / Relationships
The most prominent visual is the grid of gemstones, which takes up the majority of the screen. The goal and score are secondary but important indicators. The booster options are positioned at the bottom, providing quick access to additional gameplay aids. The character model and home button are at the very bottom, serving as navigational elements.

</details>

<p></p>



### Play the Match 3 Basics game

* **Objective:** Pop a certain number of colored gems within 20 moves!
  + 5 red gems
  + 5 pink gems
  + 5 green gems
* **How to Play:** Swipe on a tile in any direction to swap it with an adjacent tile.
* **Tips:** Look for moves that will cause tiles to fall and create chain reactions!

Take a few minutes to play and experience all the core mechanics. Notice how tiles fall, how combos multiply your score, and what happens when you run out of moves.

## What You’ll Learn

Now that you’ve experienced the game, let’s break down how each mechanic works in the code:

### Step 1: Match Mechanics

<details>
<summary>Example of a purple gem match in Match 3</summary>

<p></p>

[Example of a purple gem match in Match 3](../../../image_data/193fc05dac1ab2d7f7c0bd8f7951b07e03111a3ac69a3e53e0d4b01625756391.md)

### Overview
This image depicts a screenshot of a match-three puzzle game interface. The central focus is a grid filled with colorful gemstones arranged in a grid pattern. At the top, there are indicators for the goal and moves remaining. The bottom displays the score.

### Key Elements
- **Grid**: A 7x7 grid filled with various colored gemstones (orange, blue, purple, green, red).
- **Gemstones**: Each gemstone has a distinct shape (diamond, triangle, hexagon) and color. They are arranged in a scattered manner across the grid.
- **Score**: Located at the bottom center, displaying "SCORE: 0".
- **Goal**: At the top left, showing "GOAL" followed by three numbers (5, 5, 5) indicating the number of gems needed to achieve the goal.
- **Moves Remaining**: At the top right, displaying "MOVES" followed by the number "20".
- **Background**: The grid is set against a dark gray background with a subtle grid overlay.

### Visual Flow / Relationships
The grid is the most prominent visual element, taking up the majority of the screen space. The score, goal, and moves remaining are secondary elements placed above and below the grid respectively. There are no arrows or lines connecting elements, suggesting a static layout without interactive connections.

</details>

<p></p>



Learn about the basic swap-and-match system that makes tiles disappear when you line up 3 in a row.

In the code, you’ll find:

* `Basics_GameState_PlayerInput.ts`
  + `onSwipe()` - Detects the player’s swipe direction and initiates the swap
  + `onTouchStart()` - Handles player touch input on tiles
  + `getTile()` - Determines which tile the player touched using raycasting
* `Basics_SwapHandler.ts`
  + `validate(pos1, pos2)` - Checks if two tiles are adjacent (not diagonal)
  + `execute(pos1, pos2)` - Performs the tile swap on the board
  + `attemptSwap(pos1, pos2)` - Combines validation and execution
  + `attemptRevertSwap()` - Undoes swaps that don’t create matches
  + `areAdjacent()` - Helper that ensures tiles are horizontally or vertically adjacent
* `Basics_MatchFinder.ts`
  + `findMatches()` - Scans the entire board for 3+ tile matches
  + `findHorizontalMatches()` - Checks each row for consecutive matching tiles
  + `findVerticalMatches()` - Checks each column for consecutive matching tiles
  + `saveMatchIfValid()` - Records matches of 3 or more tiles

**Key implementation**: The match detection uses a line-scanning algorithm that checks each row and column independently. The `findMatchesInLine()` method counts consecutive identical tiles and saves groups of 3 or more. Diagonal matches are not detected.

Key files to explore:

* `Basics_SwapHandler:51` - Swap validation logic
* `Basics_MatchFinder.ts:22` - Match finding entry point
* `Basics_GameState_PlayerInput.ts:68` - Swipe handling

### Step 2: Board Management

<details>
<summary>Example of an orange gem match in Match 3</summary>

<p></p>

[Example of an orange gem match in Match 3](../../../image_data/14845a5c391492df05d5e6bf450633d3cfd94c561fa7bb7a98dcb6e41b367610.md)

### Overview
This image depicts a mobile game interface, specifically a match-three puzzle game. The central focus is a grid filled with colorful gemstones arranged in a grid pattern. At the top, there are indicators for the goal, score, moves remaining, and settings.

### Key Elements
- **Grid**: A 7x7 grid filled with various colored gemstones (red, blue, green, purple, orange, pink, and yellow).
- **Gemstones**: Each gemstone has a distinct shape (diamond, triangle, hexagon) and color. They are arranged randomly within the grid.
- **Score**: Located at the top center, displaying "SCORE: 0".
- **Goal**: Positioned at the top left, indicating the goal as "GOAL 5 5 5".
- **Moves Remaining**: At the top right, showing "MOVES 20".
- **Settings Button**: A small gear icon located at the top right next to the moves counter.
- **Navigation Buttons**: At the bottom, there are three buttons labeled with arrows pointing left, right, and up, likely for moving pieces within the grid.

### Visual Flow / Relationships
The most prominent visual element is the grid itself, which takes up the majority of the screen space. The score, goal, and moves remaining are secondary but equally important for gameplay. The navigation buttons at the bottom provide interactive control over the game mechanics. There are no arrows or lines connecting elements, suggesting a linear reading order from top to bottom and left to right.

</details>

<p></p>



Learn how the board stores tiles, removes matched ones, and refills empty spaces.

In the code, you’ll find:

* `Basics_GameBoard.ts`
  + `getTile(x, y)` - Retrieves the tile at a specific grid position
  + `setTile(x, y, tile)` - Places a tile at a specific position
  + `removeTile(x, y)` - Removes a tile from the board (leaves empty space)
  + `swapPositions(pos1, pos2)` - Swaps two tiles in the grid array
  + `popTileAtPosition(x, y)` - Clears a matched tile and sends it to the backlog
  + `getAllTiles()` - Returns array of all tiles currently on the board
  + `_grid` - The 2D array storing the board state. For example, `grid[y][x]`
* `Basics_GameState_Gravity.ts`
  + `applyGravity()` - Moves tiles downward to fill empty spaces below them
* `Basics_TileReplacer.ts`
  + `replaceLocation(x)` - Spawns a new tile at the top of a column
  + `generateTile(position)` - Creates a tile from the backlog at a specific position
  + `determineTileTypeConstraints()` - Prevents the board from spawning with matches
* `Basics_TileBacklog.ts` (object pooling system)
  + Stores pre-spawned tiles for performance
  + `dequeueRandom()` - Gets a random tile from the pool

**Key implementation**: The board uses a 2D array (`_grid[row][column]`) to track tile positions. Gravity is applied by looping through each column from bottom to top, checking for empty spaces, and moving tiles down one position at a time. New tiles spawn from the top of columns when spaces need to be filled.

Key files to explore:

* `Basics_GameBoard.ts` - Board grid structure
* `Basics_GameState_Gravity.ts` - Gravity application
* `Basics_TileReplacer.ts` - Tile refill system

### Step 3: Cascades

<details>
<summary>Example of a 3 match cascade in Match 3</summary>

<p></p>

[Example of a 3 match cascade in Match 3](../../../image_data/f44fe4f42c58614503d3dce37fe892d1623e03e968e59e187c2b21e273de968c.md)

### Overview
This image depicts a mobile game interface, specifically a match-three puzzle game. The central focus is a grid filled with various colored gemstones arranged in a triangular pattern. At the top, there are indicators for the goal, score, moves remaining, and settings.

### Key Elements
- **Grid**: A 7x7 grid filled with gemstones of different colors (orange, blue, purple, green, pink, red, and yellow).
- **Gemstones**: Each gemstone has a distinct color and shape (diamond, triangle, hexagon). They are arranged in a triangular formation within the grid.
- **Score**: Displayed as "SCORE: 480" in white text at the top-center of the grid.
- **Goal**: Shown as "GOAL 2 2 2" indicating the number of gems needed to complete the level.
- **Moves Remaining**: Displayed as "MOVES 18" in the top-right corner.
- **Settings Button**: A small gear icon located in the top-right corner of the grid.
- **Background**: The background is dark blue with a subtle grid pattern.

### Visual Flow / Relationships
The grid is the most prominent visual element, with the score, goal, and moves remaining displayed above it. The grid itself is divided into smaller sections by the grid lines, creating a clear visual hierarchy. The gems are arranged in a triangular pattern, suggesting a specific game mechanic related to matching them.

</details>

<p></p>



Learn about the cascade system that rewards players for creating chain reactions, powered by a state machine.

#### Understanding the State Machine

The game uses a *state machine* (`GameStateController`) that automatically creates cascades. When tiles fall and create new matches, the game loops through states:

<details>
<summary>A diagram of the state machine</summary>

<p></p>

[A diagram of the state machine](../../../image_data/d3cddc84d541635bdb309d3801cd29c3cf6f4a75c1b0c21948796b7f6c931cb1.md)

### Overview
This image is a flowchart depicting a sequence of steps in a game or algorithm process. It includes decision points, actions, and conditional paths.

### Key Elements
- **CHECK_MATCHES**: A rectangular box labeled "CHECK_MATCHES" at the top. It has a light blue background and contains the text "Finds matches."
- **Pop matched tiles**: A rectangular box below CHECK_MATCHES, with a gray background and the text "Pop matched tiles."
- **APPLY_GRAVITY**: Another rectangular box below "Pop matched tiles," with a light blue background and the text "APPLY_GRAVITY."
- **More Matches found?**: A diamond-shaped decision box below APPLY_GRAVITY, with a light blue background and the text "More Matches found?"
- **PLAYER_INPUT**: A green rectangular box below the decision box, labeled "PLAYER_INPUT."

### Visual Flow / Relationships
- The flowchart starts with CHECK_MATCHES.
- Arrows point downward from CHECK_MATCHES to "Pop matched tiles."
- From "Pop matched tiles," an arrow points to APPLY_GRAVITY.
- An arrow from APPLY_GRAVITY points to the decision box "More Matches found?" with the label "Tiles Fall."
- Inside the decision box, there are two paths: one labeled "Yes" pointing back to CHECK_MATCHES, and another labeled "No" pointing to PLAYER_INPUT.
- An arrow from PLAYER_INPUT points to the right, labeled "Player can move again."

</details>

<p></p>



In the code, you’ll find:

* `Basics_GameStateController.ts`
  + `setState(newState)` - Transitions between game states
  + `getCurrentState()` - Returns current state (`PLAYER_INPUT`, `CHECK_MATCHES`, etc.)
  + `update(deltaTime)` - Calls the active state’s update method for each frame
  + `_gameStates` - Map containing all state objects
* `Basics_GameState_CheckMatch.ts`
  + `start()` - Calls `findMatches()` when entering this state
  + `update()` - Pops matched tiles, then transitions to `APPLY_GRAVITY`
  + Publishes `MATCHES_FOUND` event with match data
* `Basics_GameEvents.ts`
  + `MATCHES_FOUND` - Event published when matches are detected
  + `STATE_CHANGED` - Event published when game state transitions
* `Score_ComboTracker.ts` (handles combo multipliers)
  + `incrementCombo()` - Called each time a cascade match occurs
  + `getMultiplier()` - Returns combo multiplier (1.0x → 1.5x → 2.0x → 2.5x, etc.)
  + `endCombo()` - Resets combo counter when returning to PLAYER\_INPUT
  + `MULTIPLIER_INCREMENT = 0.5` - Each combo adds 0.5x to the multiplier
  + `MAX_MULTIPLIER = 5.0` - Maximum multiplier cap

**Key implementation**: Cascades happen automatically through the state machine loop. Each time `CHECK_MATCHES` finds matches, it pops tiles and transitions to `APPLY_GRAVITY`. After gravity is applied, the game returns to `CHECK_MATCHES`, which automatically detects new matches created by falling tiles. The combo tracker increments with each pass through `CHECK_MATCHES`, increasing the score multiplier.

Key files to explore:

* `Basics_GameStateController.ts:90` - State transition system
* `Basics_GameState_CheckMatch.ts:30` - Match checking in cascades
* `Score_ComboTracker.ts:113` - Combo increment logic

### Step 4: Win Conditions

<details>
<summary>An example of winning in Match 3</summary>

<p></p>

[An example of winning in Match 3](../../../image_data/f6546ada27fada3b75c0363bc69b78ab75f58c521be4b601a9db096210d8a7c4.md)

### Overview
This image depicts a screenshot of a mobile game interface, specifically a match-three puzzle game. The central focus is a grid filled with various colored gemstones arranged in a pattern. At the top, there are indicators for the player's progress, score, moves remaining, and a goal counter. The layout suggests a level-based gameplay experience.

### Key Elements
- **Grid of Gemstones**: A 7x7 grid filled with colorful gemstones (triangles, diamonds, and hexagons) in shades of purple, blue, green, orange, pink, and red. The gems are arranged in a specific pattern.
- **Score Display**: Located at the top center, showing "SCORE: 2040".
- **Goal Counter**: Positioned at the top left, indicating the current goal as "GOAL 2 0 0".
- **Moves Remaining**: At the top right, displaying "MOVES 15".
- **Menu Icons**: Small icons at the top corners likely representing additional game options or settings.
- **Background**: A dark gray grid background with a lighter gray border around the gemstone grid.

### Visual Flow / Relationships
The most prominent visual element is the grid of gemstones, which occupies the central area of the screen. The score and goal counters are positioned above the grid, while the moves remaining indicator is on the far right. The menu icons are placed at the top corners, suggesting they can be accessed quickly without disrupting the main gameplay area.

</details>

<p></p>



To complete the board, players must complete all of the objectives before they run out of moves.

Players also earn points for each match they make, which is covered within [Module 2 - Scoring System](Module%202%20-%20Scoring%20System.md).

Let’s learn how the game tracks objectives and determines victory.

In the code, you’ll find:

* `Score_ScoreManager.ts`
  + `getTotalScore()` - Returns the current score
  + `addScore(matchInfo)` - Adds points when matches occur (base score × combo multiplier)
  + `getSessionData()` - Returns complete game stats (score, moves, time, combos)
* `Score_StarRating.ts`
  + `calculateRating(score)` - Evaluates the final score against thresholds, returns 0-3 stars
  + `StarThresholds` - Configuration type: `{oneStar, twoStars, threeStars}`
  + `wouldGetStars(score, stars)` - Checks if a score meets a specific star threshold
  + `getScoreNeededForNextStar()` - Shows how many more points are needed
* `Basics_GameEvents.ts`
  + `GAME_END` - Event that signals that the game has finished

**Key implementation**: Win conditions are typically checked by comparing the current score (from `ScoreManager`) against target thresholds. The `StarRating` system evaluates performance at game end, awarding 1-3 stars based on configurable score thresholds. All cascades from a move are processed before checking win conditions, ensuring combo points count toward victory.

Key files to explore:

* `Score_ScoreManager.ts:104` - Score calculation with combos
* `Score_StarRating.ts:54` - Star rating calculation
* `Score_Definitions.ts:24` - StarThresholds type definition

### Step 5: Loss Conditions

Learn how the game creates challenges through failure states.

In the code, you’ll find:

* `Basic_MoveTracker.ts`
  + `movesRemaining()` - Returns the number of moves made
  + `movesMade()` - Increments move counter after each valid swap
* `Basics_GameStateController.ts`
  + `endGame()` - Transitions to GAME\_OVER state
  + `EGameState.GAME_OVER` - The game over state enum value
  + `reset()` - Returns game to IDLE state
* `Basics_GameEvents.ts`
  + `GAME_END` - Event published when the game ends
  + `PLAYER_MOVE` - Event published when the player makes a valid move
  + `INVALID_MOVE` - Event published when the player attempts an invalid swap

**Key implementation**: Loss conditions typically trigger when the player runs out of moves without reaching the score target. The move counter is managed by `MoveTracker.moveMade()`, which is called whenever a valid swap occurs. Game logic (likely in a separate game manager) compares moves remaining against the move limit and calls `GameStateController.endGame()` when the limit is reached.

Key files to explore:

* `Score_ScoreManager.ts:155` - Move tracking
* `Basics_GameStateController.ts:189` - Game end transition
* `Basics_Definitions.ts:15` - EGameState enum

## Code Architecture Overview

The Match 3 Basics implementation follows this state machine flow:

<details>
<summary>State machine for the code architecture</summary>

<p></p>

[State machine for the code architecture](../../../image_data/296f6db65678a97083ff2e6a4316bc3613a4fc8c0d442c994d9fde22edd7a366.md)

### Overview
This image is a flowchart depicting a process related to player input validation and subsequent game logic execution. The flowchart includes decision points, actions, and transitions that guide the sequence of operations within a game-like scenario.

### Key Elements
1. **PLAYER_INPUT**
   - **Visual description**: A rounded rectangle with text inside.
   - **Location**: Top-left corner.
   - **Contents**: `PLAYER_INPUT`.
   - **Visual styling**: Light blue background, black border, centered text.

2. **Validation**
   - **Visual description**: A rounded rectangle with text inside.
   - **Location**: Below PLAYER_INPUT.
   - **Contents**: `Validation`.
   - **Visual styling**: Gray background, black border, centered text.

3. **SwapHandler.validate()**
   - **Visual description**: A diamond-shaped decision node.
   - **Location**: Below Validation.
   - **Contents**: `Valid swap?`.
   - **Visual styling**: Light blue background, black border, centered text.

4. **Execute Swap**
   - **Visual description**: A rounded rectangle with text inside.
   - **Location**: Below Valid swap?.
   - **Contents**: `Execute Swap`.
   - **Visual styling**: Gray background, black border, centered text.

5. **MOVE_TILES**
   - **Visual description**: A rounded rectangle with text inside.
   - **Location**: Below Execute Swap.
   - **Contents**: `MOVE_TILES`.
   - **Visual styling**: Gray background, black border, centered text.

6. **Animate movement**
   - **Visual description**: An arrow pointing right.
   - **Location**: To the right of MOVE_TILES.
   - **Contents**: None.
   - **Visual styling**: Black arrow, thin line.

7. **CHECK_MATCHES**
   - **Visual description**: A rounded rectangle with text inside.
   - **Location**: Below Animate movement.
   - **Contents**: `CHECK_MATCHES`.
   - **Visual styling**: Gray background, black border, centered text.

8. **MatchFinder.findMatches()**
   - **Visual description**: An arrow pointing right.
   - **Location**: To the right of CHECK_MATCHES.
   - **Contents**: None.
   - **Visual styling**: Black arrow, thin line.

9. **Matches found?**
   - **Visual description**: A diamond-shaped decision node.
   - **Location**: Below MatchFinder.findMatches().
   - **Contents**: `Matches found?`.
   - **Visual styling**: Light blue background, black border, centered text.

10. **Pop Tiles**
    - **Visual description**: A rounded rectangle with text inside.
    - **Location**: Below Matches found?.
    - **Contents**: `Pop Tiles`.
    - **Visual styling**: Gray background, black border, centered text.

11. **neBoard.popTileAtPosition()**
    - **Visual description**: An arrow pointing right.
    - **Location**: To the right of Pop Tiles.
    - **Contents**: None.
    - **Visual styling**: Black arrow, thin line.

12. **APPLY_GRAVITY**
    - **Visual description**: A rounded rectangle with text inside.
    - **Location**: Below neBoard.popTileAtPosition().
    - **Contents**: `APPLY_GRAVITY`.
    - **Visual styling**: Gray background, black border, centered text.

13. **applyGravity.drops tiles**
    - **Visual description**: An arrow pointing right.
    - **Location**: To the right of APPLY_GRAVITY.
    - **Contents**: None.
    - **Visual styling**: Black arrow, thin line.

14. **Refill**
    - **Visual description**: A rounded rectangle with text inside.
    - **Location**: Below applyGravity.drops tiles.
    - **Contents**: `Refill`.
    - **Visual styling**: Gray background, black border, centered text.

15. **eReplacer.replaceLocation()**
    - **Visual description**: An arrow pointing right.
    - **Location**: To the right of Refill.
    - **Contents**: None.
    - **Visual styling**: Black arrow, thin line.

16. **CHECK_MATCHES**
    - **Visual description**: A rounded rectangle with text inside.
    - **Location**: Below eReplacer.replaceLocation().
    - **Contents**: `CHECK_MATCHES`.
    - **Visual styling**: Gray background, black border, centered text.

17. **Check for cascades**
    - **Visual description**: An arrow pointing right.
    - **Location**: To the right of CHECK_MATCHES.
    - **Contents**: None.
    - **Visual styling**: Black arrow, thin line.

18. **More matches?**
    - **Visual description**: A diamond-shaped decision node.
    - **Location**: Below Check for cascades.
    - **Contents**: `More matches?`.
    - **Visual styling**: Light blue background, black border, centered text.

19. **Score Update**
    - **Visual description**: A rounded rectangle with text inside.
    - **Location**: Below More matches?.
    - **Contents**: `Score Update`.
    - **Visual styling**: Gray background, black border, centered text.

20. **ScoreManager calculates**
    - **Visual description**: An arrow pointing right.
    - **Location**: To the right of Score Update.
    - **Contents**: None.
    - **Visual styling**: Black arrow, thin line.

21. **Check End State**
    - **Visual description**: A rounded rectangle with text inside.
    - **Location**: Below ScoreManager calculates.
    - **Contents**: `Check End State`.
    - **Visual styling**: Gray background, black border, centered text.

22. **Evaluate Win/Loss**
    - **Visual description**: An arrow pointing right.
    - **Location**: To the right of Check End State.
    - **Contents**: None.
    - **Visual styling**: Black arrow, thin line.

23. **Game Over?**
    - **Visual description**: A diamond-shaped decision node.
    - **Location**: Below Evaluate Win/Loss.
    - **Contents**: `Game Over?`.
    - **Visual styling**: Light blue background, black border, centered text.

24. **End Game**
    - **Visual description**: A rounded rectangle with text inside.
    - **Location**: Below Game Over?.
    - **Contents**: `End Game`.
    - **Visual styling**: Gray background, black border, centered text.

25. **Revert swap**
    - **Visual description**: A rounded rectangle with text inside.
    - **Location**: To the right of Matches found?.
    - **Contents**: `Revert swap`.
    - **Visual styling**: Gray background, black border, centered text.

### Visual Flow / Relationships
- **Most prominent visually**: The central flow of the process, starting from PLAYER_INPUT and moving through various steps.
- **Arrows and lines**: Connects the nodes in a sequential manner, indicating the flow of the process.
- **Spatial relationships**: Nodes are arranged in a vertical sequence, with some branching decisions indicated by diamonds.

</details>

<p></p>



**Key insight**: The state machine automatically handles cascades by looping between `CHECK_MATCHES` and `APPLY_GRAVITY` until no more matches exist. The `ComboTracker` increments with each loop iteration, increasing the score multiplier.

## Your Turn to Experiment

Now that you understand the code structure, try modifying these values:

* In `Basics_MatchFinder.ts`
  + Line 240: Change `if (tiles.length < 3)` to `< 4` to require 4-tile matches instead of 3 (makes the game harder)
* In `ScoreAPI_ComboTracker.ts`
  + Line 38: Change `MULTIPLIER_INCREMENT = 0.5` to `1.0` to make combos more rewarding (1.0x → 2.0x → 3.0x)
  + Line 39: Change `MAX_MULTIPLIER = 5.0` to `10.0` to allow higher combo multipliers

### In your game configuration

* In the project hierarchy, expand the entity “BasicsPool.” Click on “CoreApi,” then look at the component fields on the right side. Adjust `xGridSize` and `yGridSize` to change board dimensions (8x8 is standard).
* In the same component fields, adjust `chanceToHaveNeighbouredGems` to control how often similar tiles spawn next to each other.

### Experiment Results

* Fewer tile types means easier to find matches
* Higher multiplier increment means more emphasis on cascade strategy
* Smaller board means fewer cascade opportunities