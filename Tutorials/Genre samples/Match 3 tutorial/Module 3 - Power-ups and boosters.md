Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/match-3-tutorial/module-3-power-ups-and-boosters

# Module 3 - Power-ups and boosters

This module explains the difference between *power-ups* and *boosters*, which are essential to the Match-3 experience.

Power-ups are special tiles created by making matches of 4 or more tiles. When matched, the power-up appears on the board where the match occurred. Activating a power-up triggers a unique effect, such as clearing an entire row or all tiles within a radius.

Boosters are consumable items earned through achievements. Their effects can significantly impact the board—from removing a single tile to transforming multiple tiles into a specific type for easier matches.

<details>
<summary>Power-up example showing the color clear power-up</summary>

<p></p>

[Power-up example showing the color clear power-up](../../../image_data/63d737eed0445dd8b23702805049d9604000c984600804a837e2fd3245ee1092.md)

### Overview
This image depicts a screenshot from a mobile game interface. The central focus is a grid-based puzzle game board filled with various colored gemstones arranged in a pattern. Below the board, there are booster options labeled "Boosters," and at the bottom, there's a home button icon. The top of the screen displays the stage information ("Stage: Abilities"), goal ("Goal: 5"), score ("Score: 2200"), moves remaining ("Moves: 21"), and a settings gear icon.

### Key Elements
- **Game Board**: A grid filled with colorful gemstones (purple, orange, blue, green, red, pink, and brown). The gems are arranged in a specific pattern.
- **Booster Options**: Located below the game board, showing three boosters with corresponding icons and numbers (0, 3, 3).
- **Home Button**: At the bottom center, a circular icon with a house symbol.
- **Stage Information**: At the top left, "Stage: Abilities," "Goal: 5," and "Score: 2200." At the top right, "Moves: 21" and a settings gear icon.
- **Character**: A male character wearing a suit is partially visible on the left side of the screen.
- **Background**: A grid-like pattern in a light blue color.

### Visual Flow / Relationships
The most prominent visual is the game board, which takes up the majority of the screen space. The booster options are secondary but important for gameplay. The home button is a navigational element, placed at the bottom for easy access. The character is a decorative element, likely representing the player's avatar. The stage information is crucial for understanding the current level status.

</details>

<p></p>

<details>
<summary>Power-up example showing the line clear power up</summary>

<p></p>

[Power-up example showing the line clear power up](../../../image_data/2cb68e1584a607d911ce780af4d0da9880aeacca2079a52f63414ca80a26520c.md)

### Overview
This image depicts a mobile game interface showing a puzzle stage titled "Abilities." The main focus is a grid-based puzzle area filled with various colored tiles representing different shapes and colors. Below the puzzle grid, there's a notification indicating that a booster has been tapped, prompting the player to tap a tile to use it. At the bottom, there's a character standing next to a home icon, likely a navigation button. The top of the screen displays the goal number (4), score (2520), moves remaining (23), and a settings gear icon.

### Key Elements
- **Puzzle Grid**: A large rectangular grid filled with colorful tiles. Tiles include hexagons, triangles, and diamonds in red, purple, blue, green, orange, and pink.
- **Notification Box**: Located at the bottom of the screen, it reads: "You've tapped a booster! Tap a tile to use it."
- **Character**: A male figure dressed in a suit stands to the left of the notification box.
- **Home Icon**: A yellow house icon with an upward arrow is positioned at the bottom center of the screen.
- **Score and Moves**: Displayed at the top right, showing "Score: 2520" and "Moves: 23."
- **Goal**: Located at the top left, indicating "Goal: 4."

### Visual Flow / Relationships
The most prominent visual element is the puzzle grid, which occupies the central part of the screen. The notification box draws attention due to its placement below the grid and its contrasting color. The character and home icon are secondary elements, providing context and functionality within the game interface. The score and moves indicators are static elements placed at the top corners, serving as informational overlays.

</details>

<p></p>



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

### Play with Power-ups and boosters

**Objective**: Experience how power-ups and boosters change gameplay strategy

* **Power-ups to try**:
  + Make a 4-tile match to create a row/column clearing power-up.
  + Make a 5-tile match to create a color clear power-up.
  + Make an L- or T-shaped match to create a bomb power-up.
* **Boosters to try**:
  + Use the clear row booster to remove a strategic row.
  + Use the clear column booster to eliminate a column.
  + Use the shuffle board booster when no good moves are available.

**Note**: Notice how power-ups spawn from special matches and how boosters require targeting.

Take a few minutes to experiment with creating different power-ups and activating boosters. Notice the difference between the two systems and how they complement each other.

## What You’ll Learn

Now that you’ve experienced power-ups and boosters, let’s break down how each system works in the code:

### Step 1: Ability System Architecture

The abilities system is built as a plugin on top of the Basics system. It uses a unified architecture where both power-ups and boosters share the same execution logic, but differ in how they’re triggered:

* **Power-ups** are triggered when special tiles are matched or swapped on the board.
* **Boosters** are triggered by player action before making a move.

In the code, you’ll find:

* `Abilities_CoreAPI.ts`
  + `start()` - Initializes the abilities system and waits for BasicsCoreAPI to be ready
  + `onBasicsCoreReady()` - Creates all subsystems once the game board is initialized
  + `constructSystems()` - Instantiates all managers in the correct order
  + `registerPowerUps()` - Creates and registers all available abilities
  + Properties:
    - `powerUpRegistry` - Central registry for all ability implementations
    - `powerUpTileManager` - Handles creating special tiles on the board
    - `boosterInventory` - Tracks player’s available boosters
    - `boosterActivationManager` - Manages booster execution
    - `boosterTargetingManager` - Handles player targeting for directional boosters
    - `comboRewardsManager` - Awards boosters for high combos
* `Abilities_AbilityRegistry.ts`
  + `registerAbility(id, ability)` - Adds a new ability to the registry
  + `getAbility(id)` - Retrieves an ability by its unique ID
  + `executeAbility(id, position)` - Runs an ability’s effect
  + `hasAbility(id)` - Checks if an ability is registered
* `Abilities_Definitions.ts`
  + `EAbilityType` - Enum defining all ability types (CLEAR\_ROW, CLEAR\_COLUMN, BOMB\_CLEAR, etc.)
  + `IAbility` - Interface that all abilities must implement
  + `BoosterEntry` - Data structure for inventory entries
  + `PowerUpTileConfig` - Configuration for power-up visual assets
  + `BoosterConfig` - Configuration for starting booster amounts

**Key implementation**: The abilities system uses the strategy pattern where each ability implements the `IAbility` interface with an `execute()` method. The `AbilityRegistry` acts as a factory that stores and executes abilities without knowing their specific implementation details. This makes it easy to add new abilities without modifying existing code.

Key files to explore:

* `Abilities_CoreAPI.ts:89` - System initialization
* `Abilities_AbilityRegistry.ts:18` - Ability registration
* `Abilities_Definitions.ts:13` - Ability type definitions

### Step 2: Power-up Tile Creation

Learn how special matches automatically create power-up tiles on the board.

The `PowerUpTileManager` subscribes to match events and determines when to create power-up tiles based on match patterns. It uses an object pooling system to efficiently spawn and recycle special tiles.

Power-up Creation Rules:

| Power Up Type | Creation Rule |
| --- | --- |
| 4-in-a-row (Horizontal) | Creates a row clearing power-up |
| 4-in-a-row (Vertical) | Creates a column clearing power-up |
| 5-in-a-row | Creates a color clear power-up (clears all tiles of one type) |
| L- or T-shape | Creates a bomb power-up (clears 3x3 area) |

In the code, you’ll find:

* `Abilities_PowerUpTileManager.ts`
  + `handleMatchesFound(matchResults)` - Called automatically when matches are detected
  + `determinePowerUpType(position, matchInfo)` - Analyzes match pattern to determine which power-up to create
  + `determineLeastStaleTile(matchInfo)` - Finds the most recently moved tile in the match to place the power-up
  + `createSpecialTileAt(powerUpType, position)` - Spawns a power-up tile at the specified position
  + `spawnPowerUpTile(powerUpType, position, spawnLocation)` - Creates a new power-up tile entity with proper visuals
  + `popSpecialTile()` - Executes the power-up’s ability when it’s matched or swapped
  + `makeSubscriptions(powerUpType, tile)` - Sets up events for when the power-up is activated
  + `isMatchHorizontal()` - Determines if a 4-tile match is horizontal or vertical
* `Abilities_RegisteredAbilities.ts`
  + `ClearRowAbility` - Removes all tiles in a horizontal row
    - `execute(targetPosition)` - Loops through row and pops each tile
  + `ClearColumnAbility` - Removes all tiles in a vertical column
    - `execute(targetPosition)` - Loops through column and pops each tile
  + `ClearTileTypeAbility` - Removes all tiles of the same type as the target
    - `execute(targetPosition)` - Scans entire board and clears matching tile types
    - `getModifiedPos()` - Handles edge case where power-up is created from a swap
  + `BombAbility` - Clears tiles in a radius around the target
    - `execute(targetPosition)` - Clears 3x3 grid around target position
  + `ShuffleBoardAbility` - Randomizes all tiles on the board
    - `execute()` - Calls TileReplacer’s shuffle method
* `Abilities_AbilityEvents.ts`
  + `ON_SPECIAL_TILE_CREATED` - Published when a power-up tile spawns on the board

**Key implementation**: The system uses a backlog/object pool to pre-spawn power-up visuals for performance. When a match is found, the manager retrieves the least recently moved tile’s position (`determineLeastStaleTile`), determines which power-up to create based on match type, then swaps the matched tile with a power-up tile from the backlog. When the power-up tile is later matched or swapped (`POPPED` or `FINISHED_SWAP` events), it executes its ability through the registry.

Key files to explore:

* `Abilities_PowerUpTileManager.ts:164` - Match detection handler
* `Abilities_PowerUpTileManager.ts:166` - Power-up type determination
* `Abilities_RegisteredAbilities.ts:14` - ClearTileType implementation
* `Abilities_RegisteredAbilities.ts:144` - Bomb ability implementation

### Step 3: Booster Inventory & Activation

Learn how the booster system tracks player inventory and activates boosters before moves.

The booster system consists of two main components: the `BoosterInventory` which tracks quantities, and the `BoosterActivationManager` which handles execution and validation.

In the code, you’ll find:

* `Abilities_BoosterInventory.ts`
  + `initializeBoosters()` - Sets up starting booster quantities from config
  + `initializeBooster(id, initialCount)` - Creates a new booster entry
  + `canAfford(id)` - Checks if player has at least 1 of this booster
  + `addBooster(id, count)` - Adds boosters to inventory (for shop purchases or rewards)
  + `consumeBooster(id)` - Removes one booster from inventory (returns false if none available)
  + `getRemaining(id)` - Returns current count for a booster
  + `setCount(id, count)` - Directly sets booster count (useful for save/load)
  + `getAllBoosters()` - Returns array of all booster entries with counts
  + `_quantities` - Map storing booster ID → count
* `Abilities_BoosterActivationManager.ts`
  + `activateBooster(boosterId, targetPosition)` - Main entry point for booster activation
  + `canUseBooster()` - Validates that game is in PLAYER\_INPUT state
  + `subscribeToGameEvents()` - Listens to STATE\_CHANGED events
  + `onStateChanged(newState)` - Tracks current game state
  + `publishActivationSuccess()` - Fires event when booster activates
  + `publishActivationFailed()` - Fires event when activation fails
  + Activation Flow:
    + Validates game state is PLAYER\_INPUT
    + Checks if player has the booster in inventory
    + Gets ability from registry
    + Executes the ability’s effect
    + Transitions game to APPLY\_GRAVITY state
    + Consumes booster from inventory
    + Publishes activation event
* `Abilities_AbilityEvents.ts`
  + `ON_BOOSTER_ACTIVATED` - Published when booster successfully activates
  + `ON_BOOSTER_ACTIVATION_FAILED` - Published when activation fails (wrong state or no inventory)
  + `ON_BOOSTER_ADDED` - Published when boosters are added to inventory
  + `ON_BOOSTER_CONSUMED` - Published when a booster is used

**Key implementation**: The booster system uses event-driven architecture to communicate changes. When a booster is activated, the manager first validates preconditions (correct game state, sufficient inventory), then executes the ability through the shared registry, and finally updates inventory. The system automatically transitions the game state to `APPLY_GRAVITY` after activation so cascades can occur. All inventory changes publish events so the UI can update automatically.

**Booster vs power-up differences**

| Feature | Power-ups | Boosters |
| --- | --- | --- |
| Trigger | Matched/swapped on board | Activated before move |
| State | Any (checked during match) | Must be `PLAYER_INPUT` |
| Inventory | No tracking (tiles on board) | Tracked via `BoosterInventory` |
| Consumption | Automatic when matched | Explicit consumption |
| Creation | From special matches | Purchased or rewarded |

<details>
<summary>An example of the pictures for all of the boosters in Match 3</summary>

<p></p>

[An example of the pictures for all of the boosters in Match 3](../../../image_data/09ffebeb5abc25037a319506635762573825cb472e4d6bfdade7907f675e442d.md)

### Overview
This image depicts a section labeled "BOOSTERS" at the bottom of a user interface, likely from a mobile game. It shows three booster icons arranged horizontally, each accompanied by a number indicating the remaining count.

### Key Elements
- **Top Left Booster Icon**: A red rocket with a blue tail, labeled "3".
- **Center Booster Icon**: A purple star with a blue outline, also labeled "3".
- **Right Booster Icon**: A pink and white circular icon resembling a gear or arrow, labeled "0".

### Visual Flow / Relationships
The boosters are arranged in a horizontal line, with the numbers indicating the remaining count displayed below each icon. The layout is simple and straightforward, with no additional lines or arrows connecting the elements.

</details>

<p></p>



Key files to explore:

* `Abilities_BoosterInventory.ts:42` - Affordability check
* `Abilities_BoosterActivationManager.ts:84` - Activation flow
* `Abilities_BoosterActivationManager.ts:126` - State validation

### Step 4: Booster Targeting System

Learn how players select target positions for directional boosters.

Some boosters (like ClearRow and ClearColumn) require the player to select a target position on the board. The `BoosterTargetingManager` handles this by entering a special targeting mode and intercepting touch input.

In the code, you’ll find:

* `Abilities_BoosterTargetingManager.ts`
  + `enterTargetingMode(boosterId)` - Activates targeting mode for a specific booster
  + `cancelTargeting()` - Exits targeting mode without activating booster
  + `isAwaitingTarget()` - Returns true if currently in targeting mode
  + `getActiveBooster()` - Returns the ID of the booster awaiting targeting
  + `canEnterTargetingMode()` - Validates game state is PLAYER\_INPUT
  + `handleTouchStart(touchData)` - Intercepts touch input during targeting mode
  + `selectTarget(position)` - Called when player taps a tile, activates booster at position
  + `getTileFromTouch(touchData)` - Uses raycasting to determine which tile was touched
  + `subscribeToEvents()` - Listens to touch input and state changes
* `Basics_Input_Screen.ts`
  + `onTouchStart` - Event published when screen is touched
  + Provides `InteractionInfo` with world ray for raycasting

Targeting Flow:

- UI button calls `enterTargetingMode(boosterId)`
- Manager sets `_activeBoosterForTargeting` flag
- Player taps on the board
- `handleTouchStart` intercepts the touch before PlayerInputState
- Uses raycasting to get the tile at touch position
- Calls `selectTarget(position)` with the tile’s grid position
- Clears targeting mode flag
- Automatically calls `boosterActivationManager.activateBooster(boosterId, position)`

**Key implementation**: The targeting system uses an input interception pattern. It subscribes to the global `onTouchStart` event and checks if targeting mode is active. When active, it processes the touch, determines the tile position, and consumes the input (returns true) so the normal PlayerInputState doesn’t process it. This prevents the player from accidentally swapping tiles while targeting. The system validates that the game is in `PLAYER_INPUT` state before allowing targeting to prevent conflicts with animations or cascades.

Boosters that Require Targeting:

* `CLEAR_ROW` - Player selects any tile, clears that row
* `CLEAR_COLUMN` - Player selects any tile, clears that column
* `BOMB_CLEAR` - Player selects center point, clears 3x3 area
* `CLEAR_TILE_TYPE` - Player selects tile type to clear

Boosters that Don’t Require Targeting:

* `SHUFFLE_BOARD` - Affects entire board immediately

Key files to explore:

* `Abilities_BoosterTargetingManager.ts:70` - Enter targeting mode
* `Abilities_BoosterTargetingManager.ts:93` - Touch input interception
* `Abilities_BoosterTargetingManager.ts:120` - Target selection

### Step 5: Combo Rewards System

Learn how the game rewards players with boosters for achieving high combos.

The `ComboRewardsManager` listens to combo achievements and can award bonus boosters when players create impressive chain reactions.

In the code, you’ll find:

* `Abilities_ComboRewardsManager.ts`
  + `onMatchComboAchieved(comboData)` - Called when a combo milestone is reached
  + `onTilesClearedForCombo(tiles)` - Called when tiles are cleared in a combo chain
  + Example reward thresholds:
    - Combo level 5+: Could award shuffle booster
    - Combo level 10+: Could award clear row/column booster
    - 20+ tiles cleared: Could award bonus boosters

**Key implementation**: The combo rewards system provides a framework for awarding boosters based on player performance. The example implementation shows logging for high combos (level 5+), but the actual rewards are commented out, allowing developers to customize their own reward structure. This system encourages skillful play by providing tangible rewards for creating cascades.

**Integration with score system**: The combo system works alongside the `Score_ComboTracker` from Module 2, which tracks:

* Current combo level (consecutive cascade matches)
* Score multiplier (increases with each combo)
* Total tiles cleared in the combo chain

<details>
<summary>An example of crates being used in a 4 match cascade in Match 3</summary>

<p></p>

[An example of crates being used in a 4 match cascade in Match 3](../../../image_data/55fa05ae57124c63f8c426e446f0d73f3eb0e9b4d2ff37c45eb7fa1488140b58.md)

### Overview
This image depicts a mobile game interface, specifically a puzzle game where players match colored shapes to achieve a goal. The game board is filled with various geometric shapes arranged in a grid pattern. At the top, there are indicators for the current stage, score, moves remaining, and a goal counter.

### Key Elements
- **Game Board**: A grid filled with colorful geometric shapes (diamonds, triangles, hexagons) in various colors such as blue, green, purple, orange, red, and pink.
- **Score**: Located at the top center, displaying "SCORE: 720".
- **Moves Remaining**: Positioned at the top right, showing "MOVES 27".
- **Goal Counter**: At the top left, indicating "GOAL 0".
- **Stage Label**: At the top center, labeled "Stage: Abilities".
- **Buttons**: At the bottom, there are three buttons with icons representing different actions: a rocket, a star, and a circular arrow.
- **Background**: The game board has a dark gray background with a grid overlay.

### Visual Flow / Relationships
The most prominent visual element is the game board, which occupies the central area of the screen. The score, moves remaining, and goal counter are positioned at the top, providing essential information about the game progress. The buttons at the bottom suggest interactive elements that can be used during gameplay. The grid overlay on the game board helps in organizing the shapes for matching purposes.

</details>

<p></p>



Key files to explore:

* `Abilities_ComboRewardsManager.ts:28` - Combo achievement handler
* `Score_ComboTracker.ts:42` - Combo tracking (from Module 2)

## Setting Up Power-ups and Boosters

To configure the abilities system in your world:

### 1. Add the AbilitiesCoreAPI Component

Attach the `AbilitiesCoreAPI` component to an entity in your world. This component has several props to configure:

**Power-up visual configuration**

* `horizontalTileAsset` - Asset for row clearing power-up
* `horizontalTileRotation` - Rotation for the asset
* `horizontalTileScale` - Scale for the asset
* `verticalTileAsset` - Asset for column clearing power-up
* `verticalTileRotation` - Rotation for the asset
* `verticalTileScale` - Scale for the asset
* `colorTileAsset` - Asset for color clearing power-up
* `colorTileRotation` - Rotation for the asset
* `colorTileScale` - Scale for the asset
* `bombTileAsset` - Asset for bomb power-up
* `bombTileRotation` - Rotation for the asset
* `bombTileScale` - Scale for the asset

**Booster inventory configuration**

* `horizontalBoosterAmount` - Starting count of clear row boosters
* `verticalBoosterAmount` - Starting count of clear column boosters
* `shuffleBoosterAmount` - Starting count of shuffle board boosters

**Performance configuration**

* `powerUpBacklogSize` - Number of each power-up type to pre-spawn (object pooling)

### 2. Access the Abilities System in Your Code

```
import { AbilitiesCoreAPI, ABILITIES_READY } from 'Abilities_CoreAPI';
import { EAbilityType } from 'Abilities_Definitions';

// Wait for abilities system to initialize
ABILITIES_READY.subscribe((abilitiesAPI) => {
    console.log('Abilities system ready!');

    // Access subsystems
    const inventory = abilitiesAPI.boosterInventory;
    const activationManager = abilitiesAPI.boosterActivationManager;
    const targetingManager = abilitiesAPI.boosterTargetingManager;
});

// Or access the singleton directly after initialization
const abilitiesAPI = AbilitiesCoreAPI.instance;
```

### 3. Activate the System

The abilities system starts and stops with the game:

```
// Start abilities (enable power-up creation and booster usage)
await abilitiesAPI.startSystems();

// Stop abilities (disable during game over, menus, etc.)
abilitiesAPI.stopSystems();
```

### 4. Add Custom Abilities

To create a new ability:

```
import { IAbility, EAbilityType } from 'Abilities_Definitions';
import { BasicsCoreAPI } from 'Basics_CoreAPI';
import { GridPosition } from 'Basics_Definitions';

export class MyCustomAbility implements IAbility {
    readonly id: string = 'MY_CUSTOM_ABILITY';

    private _basicsCoreAPI: BasicsCoreAPI;

    constructor(basicsCoreAPI: BasicsCoreAPI) {
        this._basicsCoreAPI = basicsCoreAPI;
    }

    async execute(targetPosition?: GridPosition): Promise<boolean> {
        // Implement your custom ability logic here
        console.log('Custom ability activated!');

        // Example: Clear a diagonal line
        if (targetPosition) {
            const board = this._basicsCoreAPI.gameBoard;
            for (let i = 0; i < 3; i++) {
                const tile = board.getTile(targetPosition.x + i, targetPosition.y + i);
                if (tile) {
                    board.popTileAtPosition(targetPosition.x + i, targetPosition.y + i);
                }
            }
        }

        return true;
    }
}

// Register your custom ability
const myAbility = new MyCustomAbility(basicsCoreAPI);
abilitiesAPI.powerUpRegistry.registerAbility(myAbility.id, myAbility);
```