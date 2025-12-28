Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/match-3-tutorial/module-2-scoring-system

# Module 2 - Scoring System

This module teaches you how to create a comprehensive scoring system for Match-3 games.

Players increase their score by creating cascades (multiple matches from a single move), clearing as many tiles as possible, and completing levels efficiently.

The scoring system uses a star rating model (1-3 stars) where players earn more stars by reaching higher score thresholds. This creates replay value as players try to improve their performance and achieve the coveted 3-star rating.

A well-designed scoring system rewards both skill (cascades, combos) and efficiency (time, moves), giving players clear feedback on their performance.

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
<summary>An example of the Match 3 board</summary>

<p></p>

[An example of the Match 3 board](../../../image_data/ff1a276534e455b338cd48939b04d0f338cf2fc9867905f9d4a77aed7b3ba8a9.md)

### Overview
This image depicts a mobile game interface, specifically a match-three puzzle game. The main focus is a grid filled with colorful gemstones arranged in a grid pattern. At the bottom, there are booster options, and at the top, there are goal indicators and a timer.

### Key Elements
- **Grid of Gemstones**: A large central area filled with various colored gemstones (diamonds, triangles, hexagons) arranged in a grid. Each gemstone has a distinct color and shape.
- **Booster Options**: Located at the bottom, there are three booster icons labeled "Boosters." Each icon has a number next to it indicating the count (3).
- **Goal Indicators**: At the top left, there are five goal indicators, each showing a different gemstone and the number 12 beneath them.
- **Score**: Displayed prominently in the center above the grid, showing a score of 0.
- **Timer**: Located at the top right, displaying "MOVIES 30," indicating a countdown timer.
- **Character**: A small character figure is positioned at the bottom left, standing in front of the booster options.
- **Home Button**: A circular icon with an upward arrow is located at the bottom center, likely serving as a home button.

### Visual Flow / Relationships
The most prominent visual element is the grid of gemstones, which takes up the majority of the screen. The booster options are secondary but still noticeable due to their placement below the main gameplay area. The goal indicators and timer provide contextual information about the game's objectives and time constraints. The character figure adds a playful element to the interface, suggesting a narrative or character-driven aspect to the game.

</details>

<p></p>



### Play the Scoring System game

* **Objective**: Match 10 of all colored gem types in 25 moves
* |  |  |  |
  | --- | --- | --- |
  | **Star Thresholds**: 1 star = 100 pts | 2 stars = 250 pts | 3 stars = 500 pts |
* **How to Play**: Focus on creating cascades to maximize combo multipliers.
* **Tips**: Longer combo chains multiply your score dramatically! Try to set up moves that create chain reactions.

Pay attention to how your score increases with each match, how combos multiply your points, and what score thresholds unlock each star rating.

## What You’ll Learn

Now that you’ve experienced how scoring drives the Match-3 experience, let’s explore the implementation:

### Step 1: Score Calculation

<details>
<summary>Match 3 example showing a 4 match cascade</summary>

<p></p>

[Match 3 example showing a 4 match cascade](../../../image_data/730a48c56a4866a5fdf6f0949d8b25a923b3695cc00d5433863211f169e15d4b.md)

### Overview
This image depicts a mobile game interface, specifically a puzzle game where players match colored shapes to achieve a goal. The game board is filled with various geometric shapes arranged in a grid pattern. At the top, there are indicators for the current stage, score, moves remaining, and a goal counter. The bottom part of the screen likely contains controls for gameplay actions.

### Key Elements
- **Game Board**: A grid filled with colorful geometric shapes (hexagons, triangles, diamonds, and pentagons) in various colors such as red, green, blue, purple, orange, and pink.
- **Shape Placement**: A small, highlighted shape (a purple diamond) is placed near the center of the board, ready to be moved.
- **Score**: Displayed at the top center as **2120**.
- **Moves Remaining**: Located at the top right, showing **21** moves left.
- **Goal Counter**: At the top left, indicating the number of shapes needed to complete the goal, which is **7** red hexagons, **5** green diamonds, **4** orange triangles, and **0** blue pentagons.
- **Stage Label**: At the top, labeled as **Stage: Abilities**.
- **UI Controls**: Buttons and icons at the top corners for navigation and settings.

### Visual Flow / Relationships
The most prominent visual elements are the game board and the shape placement cursor. The board takes up the majority of the screen space, with the score and moves remaining displayed above it. The goal counter is positioned to the left, providing context for the player’s objective. The UI controls are minimal but strategically placed for easy access during gameplay.

</details>

<p></p>



Learn how the game calculates points from matches and applies multipliers.

In the code, you’ll find:

* `Score_ScoreManager.ts`
  + `TilePopped()` - Calculates score for a single tile pop
  + `getTotalScore()` - Returns the current total score
  + `addBonus(bonusType, amount)` - Adds bonus points (time/move bonuses)
  + `getSessionData()` - Returns complete game statistics
  + `_totalScore` - Private field tracking cumulative score
  + `_scoreHistory` - Array of all scoring events for analysis
* `Score_Definitions.ts`
  + `EScoreEvent` - Enum of score event types (`MATCH_3`, `MATCH_4`, `MATCH_5_PLUS`, `COMBO`, `TIME_BONUS`, `MOVE_BONUS`)
  + `ScoreData` - Type containing event, baseScore, multiplier, totalScore, timestamp
  + `MatchScoreInfo` - Extends MatchInfo with scoring details

**Key implementation**: Score calculation follows this formula:

```
Final Score = Base Score (from match type) × Combo Multiplier
```

The `addScore()` method:

- Gets base score from `ScoreConfig` based on match type (3, 4, or 5+ tiles)
- Retrieves current combo multiplier from `ComboTracker`
- Multiplies base score by multiplier
- Adds to total score and publishes `SCORE_UPDATED` event

Key files to explore:

* `Score_ScoreManager.ts:104` - Match score calculation formula
* `Score_Definitions.ts:12` - EScoreEvent enumeration
* `Score_BonusCalculator.ts:26` - ScoreConfig type

### Step 2: Combo System

<details>
<summary>Match 3 example showing a 3 match cascade</summary>

<p></p>

[Match 3 example showing a 3 match cascade](../../../image_data/a5556472f40ed5729e471a2374b6eb7c9d1cde07020c2076f954c6386ec40095.md)

### Overview
This image depicts a mobile game interface with a grid-based puzzle game layout. The main focus is on a grid filled with various colored gemstones arranged in rows and columns. At the top, there are goal indicators and a score display. Below the grid, there are booster options, and at the bottom, there's a character standing on a platform with a home button.

### Key Elements
- **Grid**: A 7x8 grid filled with colorful gemstones (purple, green, blue, orange, red, pink, and yellow).
- **Gemstones**: Each gemstone has a distinct shape and color, placed within a grid cell.
- **Score Display**: Located above the grid, showing "SCORE: 840".
- **Goal Indicators**: Above the score, there are five goal markers labeled with numbers (9, 12, 12, 6, 6) and corresponding shapes (diamond, pentagon, triangle, diamond, diamond).
- **Moves Counter**: In the top right corner, displaying "MOVES 27".
- **Booster Options**: Three icons labeled "3" appear below the grid, representing different boosters.
- **Character**: A male figure in a suit stands on a platform at the bottom left.
- **Home Button**: A circular icon with a house symbol is located at the bottom center.

### Visual Flow / Relationships
The most prominent visual is the grid of gemstones. The score and goal indicators are secondary but important for gameplay. The booster options are positioned below the grid, suggesting they can be used during gameplay. The character and home button are at the bottom, indicating navigation or pause functionality.

</details>

<p></p>



Learn how cascades increase your score through multipliers.

In the code, you’ll find:

* `Score_ComboTracker.ts`
  + `incrementCombo()` - Called for each match in a cascade chain
  + `getMultiplier()` - Returns current multiplier (1.0x, 1.5x, 2.0x, etc.)
  + `endCombo()` - Resets combo when player makes a new move
  + `getCurrentCombo()` - Returns combo count
  + `getMaxCombo()` - Returns highest combo achieved this game
  + `getTotalCombos()` - Returns number of 2+ combo chains
* Combo Constants:
  + `BASE_MULTIPLIER = 1.0` - Starting multiplier (no combo)
  + `MULTIPLIER_INCREMENT = 0.5` - Each combo adds 0.5x
  + `MAX_MULTIPLIER = 5.0` - Maximum combo multiplier cap
* `Score_ComboTracker.ts` events:
  + `COMBO_STARTED` - Published when first match occurs
  + `COMBO_UPDATED` - Published when combo chain continues
  + `COMBO_ENDED` - Published when returning to player input

**Key implementation**: The combo multiplier formula:

```
Multiplier = BASE_MULTIPLIER + (combo - 1) × MULTIPLIER_INCREMENT
Capped at MAX_MULTIPLIER
```

Combo Examples:

* Combo 1 (first match): 1.0x multiplier → 100 pts × 1.0 = 100 pts
* Combo 2 (cascade): 1.5x multiplier → 100 pts × 1.5 = 150 pts
* Combo 3 (cascade): 2.0x multiplier → 100 pts × 2.0 = 200 pts
* Combo 4 (cascade): 2.5x multiplier → 100 pts × 2.5 = 250 pts
* Combo 10 (cascade): 5.0x multiplier (capped) → 100 pts × 5.0 = 500 pts

The combo counter increments with each match found during cascades, then resets when the game returns to `PLAYER_INPUT` state.

Key files to explore:

* `Score_ComboTracker.ts:113` - Combo increment logic
* `Score_ComboTracker.ts:137` - Multiplier calculation formula
* `Score_ComboTracker.ts:96` - Combo end/reset

### Step 3: Star Rating System

<details>
<summary>Match 3 example</summary>

<p></p>

[Match 3 example](../../../image_data/a4822f322569d05e515b2936055cc4cc83b9ef2a1c1fc7b0e8083222c799915b.md)

### Overview
This image depicts a user interface screen from a mobile game or application. It features a character model in the background, a congratulatory message, scores, and interactive buttons at the bottom.

### Key Elements
- **Character Model**: A male character wearing a suit and glasses is positioned centrally against a blue grid background.
- **Stars**: Three golden stars are displayed above the text "AMAZING JOB!".
- **Text**: The text "AMAZING JOB!" is prominently shown in white capital letters beneath the stars. Below that, the score "8920" is displayed in yellow.
- **Buttons**: Two buttons labeled "Retry" and "Next Stage" are located at the bottom of the screen.
- **Background**: The background is a gradient of dark blue shades with a subtle grid pattern.

### Visual Flow / Relationships
The most prominent visual elements are the stars and the congratulatory text. The score is secondary but still noticeable. The buttons at the bottom are designed to be easily accessible for the player to interact with.

</details>

<p></p>



Learn how the game evaluates performance and awards 1-3 stars.

In the code, you’ll find:

* `Score_StarRating.ts`
  + `calculateRating(score)` - Evaluates score and returns 0-3 stars
  + `setThresholds(thresholds)` - Updates star threshold configuration
  + `wouldGetStars(score, stars)` - Checks if score meets specific star level
  + `getScoreNeededForNextStar(currentScore)` - Shows points needed for next star
  + `getCurrentRating()` - Returns the current star rating
  + `_thresholds` - Private StarThresholds configuration
* `Score_Definitions.ts`
  + `StarThresholds` - Type: `{oneStar: number, twoStars: number, threeStars: number}`
* `Score_StarRating.ts` events:
  + `STAR_RATING_CALCULATED` - Published when star rating is determined

**Key implementation**: The star rating uses a simple threshold comparison.

```
if (score >= this._thresholds.threeStars) {
  rating = 3;
} else if (score >= this._thresholds.twoStars) {
  rating = 2;
} else if (score >= this._thresholds.oneStar) {
  rating = 1;
} else {
  rating = 0;
}
```

Star ratings are typically calculated at game end (when `ObjectiveManager.endGame()` is called). The thresholds are configurable per level, allowing difficulty scaling.

Example Configuration:

```
const easyLevel: StarThresholds = {
  oneStar: 1000,
  twoStars: 2000,
  threeStars: 3000
};

const hardLevel: StarThresholds = {
  oneStar: 3000,
  twoStars: 5000,
  threeStars: 8000
};
```

Key files to explore:

* `Score_StarRating.ts:54` - Star calculation logic
* `Score_StarRating.ts:114` - Score needed for next star
* `Score_Definitions.ts:24` - StarThresholds type

## Your Turn to Experiment

Now that you understand the scoring system, try modifying these values:

* In `Score_ComboTracker.ts`:
  + Line 37: Change `BASE_MULTIPLIER = 0.5` to `0.25` for gentler scaling (1.0x → 1.25x → 1.5x)
  + Line 35: Change `MULTIPLIER_INCREMENT = 0.5` to `1.0` for aggressive scaling (1.0x → 2.0x → 3.0x)
  + Line 36: Change `MAX_MULTIPLIER = 5.0` to `10.0` to reward extremely long combos

Experiment Results:

* Higher base scores = easier to reach star thresholds
* Higher multiplier increment = greater emphasis on combo strategy