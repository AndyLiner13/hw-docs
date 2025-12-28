Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/match-3-tutorial/module-4-progression

# Module 4 - Progression

This module teaches you how to create a progression system for your Match 3 game.

Progression systems determine how players unlock features and when those features become available.

Players earn experience points by completing levels and milestones throughout the game.

When players accumulate enough experience points to reach the level threshold, they level up and their profile level increases.

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

### Play the Progression System game

* **Objective**: Experience the full progression system with XP, levels, and achievements
* **How to Play**: Complete matches to earn XP and level up your profile
* **Tips**: Try to earn 3 stars for maximum XP! Watch for achievement notifications as you play.

Pay attention to how XP is awarded after each match, what happens when you level up, and how achievements track your progress across multiple games.

## What You’ll Learn

Now that you’ve experienced how progression enhances the Match-3 experience, let’s explore the implementation:

### Step 1: XP & Player Level

Learn how the game tracks player progression through experience points and levels.

In the code, you’ll find:

* `Progression_PlayerProfile.ts`
  + `playerLevel` - Current player level (starts at 0)
  + `currentXP` - Experience points accumulated toward next level
  + `getXPThresholdForNextLevel()` - Returns XP needed to reach next level
  + `getXPThresholdForLevel(level)` - Returns XP threshold for a specific level
  + `saveData()` - Persists profile data to player variables
  + `_data` - Private field storing PlayerProfileData (level, XP, highestCombo)
* `Progression_XPManager.ts`
  + `awardXP(amount)` - Adds XP to player profile and checks for level up
  + `checkLevelUp()` - Private method that handles level-up logic
  + `attemptLevelUp()` - Recursive function that handles multiple level-ups at once
* `Progression_XPRelay.ts`
  + `awardMatchXP(starRating)` - Converts star ratings into XP rewards
  + `overrideConfig(config)` - Customizes XP values per level
  + `resetConfig()` - Restores default XP configuration
  + Listens to `STAR_RATING_CALCULATED` event from scoring system
* `Progression_Definitions.ts`
  + `XPConfig` - Type defining XP reward values
  + `DEFAULT_XP_CONFIG` - Default values: [0, 50, 100, 150] XP for [0, 1, 2, 3] stars
  + `XPGainedData` - Event data published when XP is awarded
  + `LevelUpData` - Event data published when player levels up
  + `PlayerProfileData` - Player progression data model

**Key implementation**: The XP system uses a relay pattern to connect the scoring system to progression:

<details>
<summary>Chart for the xp system</summary>

<p></p>

[Chart for the xp system](../../../image_data/aa70261e58c97f82813634cc1ce4b843efcd42e769f26a2a919bc1747aabba42.md)

### Overview
This image depicts a flowchart illustrating a sequence of steps in a process related to player progression within a game. The flowchart uses rectangular boxes connected by arrows to indicate the direction of the process flow.

### Key Elements
1. **Star Rating Calculated**
   - **Visual description**: A light blue rectangle.
   - **Location**: Top-left corner.
   - **Contents**: Text inside reads "> Star Rating Calculated".
   - **Visual styling**: Light blue background, black border, small font size.

2. **XP Relay**
   - **Visual description**: A yellow rectangle.
   - **Location**: Center-left.
   - **Contents**: Text inside reads "> XP Relay".
   - **Visual styling**: Yellow background, black border, larger font size compared to the first box.

3. **XP Manager**
   - **Visual description**: A pink rectangle.
   - **Location**: Center-right.
   - **Contents**: Text inside reads "> XP Manager".
   - **Visual styling**: Pink background, black border, larger font size than previous boxes.

4. **Player Profile**
   - **Visual description**: A green rectangle.
   - **Location**: Bottom-right.
   - **Contents**: Text inside reads "> Player Profile".
   - **Visual styling**: Green background, black border, largest font size among all boxes.

5. **Level Up Event**
   - **Visual description**: An irregularly shaped gray parallelogram.
   - **Location**: Bottom-right, extending slightly beyond the green box.
   - **Contents**: Text inside reads "> Level Up Event".
   - **Visual styling**: Gray background, black border, smallest font size.

### Visual Flow / Relationships
- **Most prominent visually**: The sequence starts with the "Star Rating Calculated" box and ends with the "Level Up Event" parallelogram.
- **Arrows and lines**: Arrows connect the boxes sequentially, indicating the flow of the process.
- **Spatial relationships**: Boxes are arranged in a linear fashion from left to right, with the final step extending slightly beyond the last box.

</details>

<p></p>



The `awardMatchXP()` method in `Progression_XPRelay.ts:52`:

- Receives star rating (0-3) from scoring system
- Looks up XP reward from `xpPerStar` array in config
- Adds `baseMatchExperience` bonus to the reward
- Calls `xpManager.awardXP()` to add points to profile
- Saves profile data to player variables

The level-up system in `Progression_XPManager.ts:57`:

- Checks if `currentXP` >= `xpThresholdForNextLevel`
- Increments player level
- Calculates XP overflow (excess XP carries over)
- Recursively checks for additional level-ups (handles earning multiple levels at once)
- Publishes `LEVEL_UP` event with old level, new level, and overflow data

XP Configuration Example (In `Progression_Definitions.ts`):

```
// Default XP rewards
const DEFAULT_XP_CONFIG: XPConfig = {
  xpPerStar: [0, 50, 100, 150],  // 0 stars = 0 XP, 1 star = 50, etc.
  baseMatchExperience: 10         // Bonus XP for completing any match
}

// Example: Player earns 3 stars
// XP Awarded = xpPerStar[3] + baseMatchExperience
//            = 150 + 10 = 160 XP
```

**Level thresholds**:

The default level thresholds in `Progression_PlayerProfile.ts:19`:

```
levelThresholds: [
  200,    // Level 0 → 1: Need 200 XP
  400,    // Level 1 → 2: Need 400 XP
  700,    // Level 2 → 3: Need 700 XP
  1100,   // Level 3 → 4: Need 1100 XP
  1600    // Level 4 → 5: Need 1600 XP
]
```

Key files to explore:

* `Progression_XPRelay.ts:47` - Star rating to XP conversion
* `Progression_XPManager.ts:51` - Level-up logic
* `Progression_PlayerProfile.ts:77` - XP threshold lookup
* `Progression_Definitions.ts:37` - Default XP configuration

### Step 2: Player Achievements

Learn how achievements track player milestones and reward progress.

In the code, you’ll find:

* `Progression_AchievementManager.ts`
  + `storeAchievementRelay(relay)` - Registers a new achievement
  + `enableRelay(relay)` - Loads saved progress and activates achievement tracking
  + `saveProgress(relay)` - Persists achievement progress to player variables
  + `startSystem()` - Enables all registered achievements
  + `stopSystem()` - Disables all achievements (used when changing levels)
  + `_achievementRelays` - Map storing all registered achievements by ID
* `Progression_AchievementRelays.ts`
  + `BaseAchievementRelay` - Abstract base class for all achievements
  + `progress` - Current progress toward achievement goal
  + `progressUpdate` - Event published when progress changes
  + `enable()` / `disable()` - Control achievement tracking
  + `setProgress(progress)` - Used to restore saved progress
* `Progression_Definitions.ts`
  + `AchievementData` - Achievement configuration type
  + `IAchievementRelay` - Interface all achievements implement
  + Defines: `id`, `name`, `description`, `xpReward`, `currentProgress`, `customValidator`

**Key implementation**: Achievements use a relay architecture where each achievement listens to game events and tracks its own progress:

<details>
<summary>Chart for how player achievements work</summary>

<p></p>

[Chart for how player achievements work](../../../image_data/97f9b2c051514ef5c01ae23dd3fadb8aa8f67ab89f89290bcb4cb533d24a5aed.md)

### Overview
This image depicts a sequence diagram with four rectangular blocks connected by arrows, indicating a linear process flow. The blocks represent different stages or components of a workflow.

### Key Elements
1. **Game Event**
   - **Visual description**: A light blue rectangle.
   - **Location**: Leftmost block.
   - **Contents**: Contains the text "Game Event".
   - **Visual styling**: Light blue background, no border, medium-sized font.

2. **Achievement Relay**
   - **Visual description**: A yellow rectangle.
   - **Location**: Second block from the left.
   - **Contents**: Contains the text "Achievement Relay".
   - **Visual styling**: Yellow background, no border, medium-sized font.

3. **Progress Update**
   - **Visual description**: A pink rectangle.
   - **Location**: Third block from the left.
   - **Contents**: Contains the text "Progress Update".
   - **Visual styling**: Pink background, no border, medium-sized font.

4. **Save to PVars**
   - **Visual description**: A green rectangle.
   - **Location**: Rightmost block.
   - **Contents**: Contains the text "Save to PVars".
   - **Visual styling**: Green background, no border, medium-sized font.

### Visual Flow / Relationships
- **Most prominent visually**: The sequence of blocks from left to right.
- **Arrows**: There are arrows connecting each block sequentially, indicating the flow direction.
- **Spatial relationships**: Blocks are arranged in a horizontal line, with arrows pointing from one block to the next, suggesting a step-by-step progression.

</details>

<p></p>



How `TilePopAchievement` Works (`Progression_AchievementRelays.ts:70`):

- Component props define `achievementPvarId`, `tileType`, and `xpReward`
- On `enable()`: Subscribes to `TILE_POP` event from game
- When tile pops: Checks if tile type matches achievement requirement
- If matched: Increments progress counter and publishes `progressUpdate` event
- AchievementManager listens to `progressUpdate` and saves to player variables
- When goal reached: Awards XP through `xpManager.awardXP()`

**Achievement lifecycle**:

<details>
<summary>Chart of the achievement lifecycle</summary>

<p></p>

[Chart of the achievement lifecycle](../../../image_data/65101407da3d24d0768a09b2c70a758059589664a461999fe9069853610345b0.md)

### Overview
The image depicts a flowchart representing a system process with multiple steps and decision points. The flowchart includes start and end points, as well as various actions and conditions that guide the process through different stages.

### Key Elements
1. **Start**
   - **Visual description**: A circular node with a black dot inside.
   - **Location**: Top-center of the diagram.
   - **Contents**: "Start"
   - **Visual styling**: Black circle with white dot, located at the top of the flowchart.

2. **Registration**
   - **Visual description**: A rectangular node with rounded corners.
   - **Location**: Below the "Start" node.
   - **Contents**: "1. Registration"
   - **Visual styling**: Light blue background, white border, and text.

3. **System Start**
   - **Visual description**: A larger rectangle with a yellowish background.
   - **Location**: Below the "Registration" node.
   - **Contents**: "2. System Start"
   - **Visual styling**: Yellow background, white border, and text.

4. **Enable Relay**
   - **Visual description**: A smaller rectangle within the "System Start" section.
   - **Location**: Below the "Start" node in the "System Start" section.
   - **Contents**: "EnableRelay"
   - **Visual styling**: White background, black border, and text.

5. **Load saved progress from PVars**
   - **Visual description**: Another smaller rectangle within the "System Start" section.
   - **Location**: Below "EnableRelay".
   - **Contents**: "Load saved progress from PVars"
   - **Visual styling**: White background, black border, and text.

6. **Subscribe to game events**
   - **Visual description**: A third rectangle within the "System Start" section.
   - **Location**: Below "Load saved progress from PVars".
   - **Contents**: "Subscribe to game events"
   - **Visual styling**: White background, black border, and text.

7. **End**
   - **Visual description**: A circular node with a black dot inside.
   - **Location**: Below the "Subscribe to game events" node.
   - **Contents**: "End"
   - **Visual styling**: Black circle with white dot, located at the bottom of the "System Start" section.

8. **Progress Tracking**
   - **Visual description**: A large rectangle with a light green background.
   - **Location**: Below the "End" node in the "System Start" section.
   - **Contents**: "3. Progress Tracking"
   - **Visual styling**: Light green background, white border, and text.

9. **Waiting for TILE_POP event**
   - **Visual description**: A smaller rectangle within the "Progress Tracking" section.
   - **Location**: Below the "Start" node in the "Progress Tracking" section.
   - **Contents**: "Waiting for TILE_POP event"
   - **Visual styling**: White background, black border, and text.

10. **tilePopped(tile)**
    - **Visual description**: A diamond-shaped node within the "Progress Tracking" section.
    - **Location**: Below "Waiting for TILE_POP event".
    - **Contents**: "tilePopped(tile)"
    - **Visual styling**: White background, black border, and text.

11. **Does tile match requirement?**
    - **Visual description**: A diamond-shaped node within the "Progress Tracking" section.
    - **Location**: Below "tilePopped(tile)".
    - **Contents**: "Does tile match requirement?"
    - **Visual styling**: White background, black border, and text.

12. **Increment progress**
    - **Visual description**: A rectangle within the "Progress Tracking" section.
    - **Location**: Below the "Does tile match requirement?" node if the answer is "Matches".
    - **Contents**: "Increment progress"
    - **Visual styling**: White background, black border, and text.

13. **Publish progressUpdate event**
    - **Visual description**: A rectangle within the "Progress Tracking" section.
    - **Location**: Below "Increment progress".
    - **Contents**: "Publish progressUpdate event"
    - **Visual styling**: White background, black border, and text.

14. **Save to PVars**
    - **Visual description**: A rectangle within the "Progress Tracking" section.
    - **Location**: Below "Publish progressUpdate event".
    - **Contents**: "Save to PVars"
    - **Visual styling**: White background, black border, and text.

15. **No Match**
    - **Visual description**: An arrow pointing to the right.
    - **Location**: To the right of the "Does tile match requirement?" node if the answer is "No Match".
    - **Contents**: "No Match"
    - **Visual styling**: Black arrow pointing right.

16. **System Stop**
   - **Visual description**: A rectangle with a pink background.
   - **Location**: Below the "Save to PVars" node.
   - **Contents**: "4. System Stop"
   - **Visual styling**: Pink background, white border, and text.

17. **End**
   - **Visual description**: A circular node with a black dot inside.
   - **Location**: Below the "System Stop" node.
   - **Contents**: "End"
   - **Visual styling**: Black circle with white dot, located at the bottom of the flowchart.

### Visual Flow / Relationships
- **Most prominent visually**: The "Start" node at the top and the "End" nodes at the bottom of each section.
- **Arrows and lines**: Arrows connect the nodes, indicating the sequence of actions.
- **Spatial relationships**: Nodes are arranged in a vertical flow, with some branching decisions indicated by diamonds.

</details>

<p></p>



**Creating custom achievements**:

To create a new achievement type, extend `BaseAchievementRelay`:

```
export class ComboAchievement extends BaseAchievementRelay<typeof ComboAchievement> {
  // 1. Define props
  public static propsDefinition = {
    ...BaseAchievementRelay.propsDefinition,
    requiredComboCount: { type: PropTypes.Number },
  }

  // 2. Override enable() to subscribe to events
  override enable(): void {
    super.enable();
    this._subscriptionBag.add(
      scoreEvents.COMBO_UPDATED.subscribe(this.onComboUpdate.bind(this))
    );
  }

  // 3. Track progress when events occur
  private onComboUpdate(comboData: ComboData): void {
    if (comboData.count >= this.props.requiredComboCount) {
      this._progress++;
      this.progressUpdate.publish(this._progress);
    }
  }
}
```

**Achievement props configuration**:

Achievements are configured in the Horizon Worlds editor:

* `achievementPvarId`: Unique ID for saving progress (e.g., “M3: Achievement: Pop 100 Red Tiles”)
* `xpReward`: XP awarded when achievement is completed
* `tileType`: (TilePopAchievement only) Which tile type to track (e.g., “RED”, “BLUE”)

Key files to explore:

* `Progression_AchievementManager.ts:60` - Achievement registration
* `Progression_AchievementRelays.ts:70` - TilePopAchievement implementation
* `Progression_AchievementRelays.ts:95` - Event subscription pattern

### Step 3: Stage Sequences & Configuration

Learn how to create multiple levels with custom objectives and settings.

In the code, you’ll find:

* `Progression_LevelSequenceManager.ts`
  + `storeParentCollection(parentCollection)` - Registers a level sequence parent
  + `storeChild(child, config)` - Registers a level config component
  + `startLevelSequence(id)` - Activates all configs for a level
  + `checkIfLevelSequenceIsReady()` - Waits until all child configs are registered
  + `_stageConfigCollection` - Map of completed level configurations
* `Progression_LevelSequenceConfigs.ts`
  + `ParentLevelSequence` - Component that groups level config children
  + `BaseLevelConfig` - Abstract base for all configuration components
  + `ObjectiveScore` - Sets score target and move limit
  + `ObjectiveTileMatch` - Requires matching specific tile types
  + `ObjectiveStarRating` - Requires achieving star thresholds
  + `OverrideBoardGame` - Changes board dimensions and settings
  + `OverrideMatchExperience` - Customizes XP rewards per level
* `Progression_ObjectiveValidators.ts`
  + `ScoreObjectiveValidator` - Validates score-based win/loss conditions
  + `TileMatchObjective` - Validates tile-matching objectives
  + `StarRatingObjective` - Validates star-based objectives

**Key implementation**: Level sequences use a parent-child component pattern in Horizon Worlds:

<details>
<summary>Chart of level sequences</summary>

<p></p>

[Chart of level sequences](../../../image_data/7b9331369bbe2a0ba0141003df72d18992442eb755cd06e54952abc040422dc0.md)

### Overview
The image depicts a hierarchical diagram showing the relationship between a parent entity and its child components. The layout is structured to illustrate how the parent entity interacts with multiple child entities.

### Key Elements
- **ParentLevelSequence Entity**: Located at the top-center of the diagram. It is a blue rectangle labeled as an "Entity." There are two downward-pointing arrows connecting it to its child components.
- **ObjectiveScore Component**: Positioned to the left of the ParentLevelSequence Entity. It is a yellow rectangle with the label "Component."
- **ObjectiveStarRating Component**: Positioned centrally below the ParentLevelSequence Entity. It is also a yellow rectangle with the label "Component."
- **OverrideMatchExperience Component**: Positioned to the right of the ParentLevelSequence Entity. It is a yellow rectangle with the label "Component."

### Visual Flow / Relationships
- The ParentLevelSequence Entity is the most prominent element, serving as the central hub.
- Arrows connect the ParentLevelSequence Entity to its three child components, indicating a hierarchical relationship.
- The child components are arranged horizontally beneath the ParentLevelSequence Entity, suggesting a linear progression or sequence.

</details>

<p></p>



How Level Sequences Work:

- **Setup Phase** (`Progression_LevelSequenceConfigs.ts:60`):
  * `ParentLevelSequence` component stores parent info and child entities
  * Each child config component registers itself with `LevelSequenceManager`
  * When all children are registered, level sequence becomes “ready”
- **Activation Phase** (`Progression_LevelSequenceManager.ts:27`):
  * Call `startLevelSequence(levelId)` to activate a level
  * Manager clears previous validators from `ObjectiveManager`
  * Calls `activateConfig()` on each child component in sequence
  * Each config registers its validator or applies its settings
- **Configuration Types: Objective configurations** (create win/loss conditions)
  * In the hierarchy, navigate to `TutorialLevelPool`: `TutorialLevels` to see the Stages that have already been set up.
  * Create child entities under the parent (e.g. “Stage\_01”)
  * Add a component to the child entity by selecting “Attach Script”
  * In the drop-down bar, search for the config overrides defined in `Progression_LevelSequenceConfigs`
  * Examples:
  * To create a new “Goal” objective to match 30 red tiles, attach component `ObjectiveTileMatch` and assign the `tileType` and `matchAmount` quantities.
    <details>
    <summary>An image of the match amount parameter</summary>
    
    <p></p>
    
    [An image of the match amount parameter](../../../image_data/9a2f8683334100239c46649ee9a958c1b9ea6dfac50c1921ed5e8b850680e180.md)
    
    ### Overview
    This image depicts a user interface element, specifically a settings or configuration panel within a software application. The panel is part of a larger interface that appears to be related to game development or level design, given the terminology used ("Progression_LevelSequenceConfigs").
    
    ### Key Elements
    - **Panel Title**: Located at the top-left, the title reads `Progression_LevelSequenceConfigs:ObjectiveTileMatch`. This is a nested configuration path indicating the specific section being edited.
    - **Tile Type Input**: Positioned on the left side, labeled `tileType`, with the value `RED` entered into the input field.
    - **Match Amount Input**: Below the tile type input, labeled `matchAmount`, with the value `30` entered into the input field.
    - **Expand/Collapse Button**: Located at the top-left of the panel, indicated by a triangle icon (`▼`). This button likely toggles the visibility of the nested configuration options.
    - **Three Dots Menu**: At the top-right of the panel, there are three vertically aligned dots, typically representing a menu or additional options for the panel.
    - **Background**: The panel has a dark background with light gray accents for the input fields and labels.
    
    ### Visual Flow / Relationships
    The most prominent visual element is the nested configuration path at the top. The inputs for `tileType` and `matchAmount` are arranged vertically, with the `tileType` input above the `matchAmount` input. The expand/collapse button is positioned to the left of the title, and the three dots menu is to the right. There are no arrows or lines connecting elements, suggesting a linear reading order from top to bottom.
    
    </details>
    
    <p></p>
    
    
  * To adjust star thresholds, attach component `OverrideStaRatingThreshold` and assign new values to the thresholds.
    <details>
    <summary>An image of the star threshold parameters</summary>
    
    <p></p>
    
    [An image of the star threshold parameters](../../../image_data/beb59456e6601fc687749a51903a15efe89a7fd9db7a307b540e256ebe57c165.md)
    
    ### Overview
    This image depicts a user interface element showing configuration settings for thresholds related to star ratings within a game or application. The layout is structured as a table with two columns: one for the threshold names and another for numerical values.
    
    ### Key Elements
    - **Threshold Names Column**: Located in the left column, containing labels such as `oneStarThreshold`, `twoStarThreshold`, and `threeStarThreshold`.
    - **Threshold Values Column**: Positioned to the right of the threshold names, displaying numerical values (`10`, `50`, `100`) corresponding to the respective thresholds.
    - **Expandable Section Header**: At the top-left, there is a header that can be expanded or collapsed, indicated by a triangle icon and some placeholder text (`Progression_LevelSequenceConfigs:OverrideStarRatingThr...`). This suggests that more information might be available when expanded.
    - **Three Dots Icon**: Positioned at the far right of the header, likely indicating additional options or settings related to the configuration.
    
    ### Visual Flow / Relationships
    The most prominent visual element is the expandable section header, which draws attention due to its larger size and distinct iconography. The thresholds and their values are arranged in a clear, tabular format, facilitating easy reading and comparison. There are no arrows or lines connecting elements, but the layout implies a logical progression from the header to the specific configurations listed below.
    
    </details>
    
    <p></p>
    
    
- **Override Configs** (customize level settings)
  * Similarly, you can override level settings such as the board size and the amount of XP needed for Star Ratings.
  * To assign a unique board size, attach component `OverrideBoardGame` to assign a unique grid size and chance for the same gem to spawn in an adjacent tile.
    <details>
    <summary>An image of the grid size parameters</summary>
    
    <p></p>
    
    [An image of the grid size parameters](../../../image_data/20a61f085a7c59eae64308e03521e303b25f7fb3d22dfc35ac2d89ffcd8fe8f7.md)
    
    ### Overview
    This image depicts a user interface element showing configuration settings for a game or application named "Progression_LevelSequenceConfigs:OverrideBoardGame". The interface includes a tree-like structure with expandable sections and a form-like area displaying configurable parameters.
    
    ### Key Elements
    - **Tree Structure**: Located at the top-left, it shows an expandable section labeled `{}` Progression_LevelSequenceConfigs:OverrideBoardGame. The section is partially expanded, revealing child nodes.
    - **Form Area**: Positioned to the right of the tree structure, it contains three configurable parameters:
      - **xGridSize**: A text field with the value `4`.
      - **yGridSize**: Another text field with the value `4`.
      - **chanceToHaveNeighbor**: A text field with the value `50`.
    
    ### Visual Flow / Relationships
    The form area is the most prominent visual element due to its larger size compared to the tree structure. The parameters are arranged vertically, with each parameter having its own text field. There are no arrows or lines connecting the elements, indicating a simple linear reading order from top to bottom.
    
    </details>
    
    <p></p>
    
    
  * To override the amount of XP awarded, attach `OverrideMatchExperience`<details>
                                                                          <summary>An image of the parameters for xp awarded by number of stars</summary>
                                                                          
                                                                          <p></p>
                                                                          
                                                                          [An image of the parameters for xp awarded by number of stars](../../../image_data/8ffbc72695a920e91e735d104efc1592b338b8a748a0798021a31997a6fa5685.md)
                                                                          
                                                                          ### Overview
                                                                          This image depicts a user interface element showing configuration settings for a game or application feature related to level progression and board blockers. The layout is structured as a table with key-value pairs.
                                                                          
                                                                          ### Key Elements
                                                                          - **Key**: xGridPos
                                                                            - **Visual description**: Text label indicating the key name.
                                                                            - **Location**: Top-left corner of the row.
                                                                            - **Contents**: `xGridPos`
                                                                            - **Visual styling**: White text on a dark background.
                                                                          - **Value**: 6
                                                                            - **Visual description**: Numeric value displayed next to the key.
                                                                            - **Location**: To the right of the key.
                                                                            - **Contents**: `6`
                                                                            - **Visual styling**: White text on a dark background.
                                                                          - **Key**: yGridPos
                                                                            - **Visual description**: Text label indicating the key name.
                                                                            - **Location**: Top-left corner of the row.
                                                                            - **Contents**: `yGridPos`
                                                                            - **Visual styling**: White text on a dark background.
                                                                          - **Value**: 5
                                                                            - **Visual description**: Numeric value displayed next to the key.
                                                                            - **Location**: To the right of the key.
                                                                            - **Contents**: `5`
                                                                            - **Visual styling**: White text on a dark background.
                                                                          - **Key**: blockerType
                                                                            - **Visual description**: Text label indicating the key name.
                                                                            - **Location**: Top-left corner of the row.
                                                                            - **Contents**: `blockerType`
                                                                            - **Visual styling**: White text on a dark background.
                                                                          - **Value**: 4
                                                                            - **Visual description**: Numeric value displayed next to the key.
                                                                            - **Location**: To the right of the key.
                                                                            - **Contents**: `4`
                                                                            - **Visual styling**: White text on a dark background.
                                                                          - **Key**: blockerPattern
                                                                            - **Visual description**: Text label indicating the key name.
                                                                            - **Location**: Top-left corner of the row.
                                                                            - **Contents**: `blockerPattern`
                                                                            - **Visual styling**: White text on a dark background.
                                                                          - **Value**: Single
                                                                            - **Visual description**: Text value displayed next to the key.
                                                                            - **Location**: To the right of the key.
                                                                            - **Contents**: `Single`
                                                                            - **Visual styling**: White text on a dark background.
                                                                          
                                                                          ### Visual Flow / Relationships
                                                                          The visual hierarchy is clear, with keys on the left and corresponding values on the right. There are no arrows or lines connecting elements, and the reading order follows a left-to-right, top-to-bottom sequence.
                                                                          
                                                                          </details>
                                                                          
                                                                          <p></p>
                                                                          
                                                                          
  * To override this level by adding blocker tiles, attach component `AddBoardBlockers`, then define the tile position, the type of blocker, and the `blockerPattern`.
    <details>
    <summary>An image of the parameters for blocker tiles</summary>
    
    <p></p>
    
    [An image of the parameters for blocker tiles](../../../image_data/8ffbc72695a920e91e735d104efc1592b338b8a748a0798021a31997a6fa5685.md)
    
    ### Overview
    This image depicts a user interface element showing configuration settings for a game or application feature related to level progression and board blockers. The layout is structured as a table with key-value pairs.
    
    ### Key Elements
    - **Key**: xGridPos
      - **Visual description**: Text label indicating the key name.
      - **Location**: Top-left corner of the row.
      - **Contents**: `xGridPos`
      - **Visual styling**: White text on a dark background.
    - **Value**: 6
      - **Visual description**: Numeric value displayed next to the key.
      - **Location**: To the right of the key.
      - **Contents**: `6`
      - **Visual styling**: White text on a dark background.
    - **Key**: yGridPos
      - **Visual description**: Text label indicating the key name.
      - **Location**: Top-left corner of the row.
      - **Contents**: `yGridPos`
      - **Visual styling**: White text on a dark background.
    - **Value**: 5
      - **Visual description**: Numeric value displayed next to the key.
      - **Location**: To the right of the key.
      - **Contents**: `5`
      - **Visual styling**: White text on a dark background.
    - **Key**: blockerType
      - **Visual description**: Text label indicating the key name.
      - **Location**: Top-left corner of the row.
      - **Contents**: `blockerType`
      - **Visual styling**: White text on a dark background.
    - **Value**: 4
      - **Visual description**: Numeric value displayed next to the key.
      - **Location**: To the right of the key.
      - **Contents**: `4`
      - **Visual styling**: White text on a dark background.
    - **Key**: blockerPattern
      - **Visual description**: Text label indicating the key name.
      - **Location**: Top-left corner of the row.
      - **Contents**: `blockerPattern`
      - **Visual styling**: White text on a dark background.
    - **Value**: Single
      - **Visual description**: Text value displayed next to the key.
      - **Location**: To the right of the key.
      - **Contents**: `Single`
      - **Visual styling**: White text on a dark background.
    
    ### Visual Flow / Relationships
    The visual hierarchy is clear, with keys on the left and corresponding values on the right. There are no arrows or lines connecting elements, and the reading order follows a left-to-right, top-to-bottom sequence.
    
    </details>
    
    <p></p>
    
    

**Creating a multi-level game**:

In the Horizon Worlds editor:

- Create a `ParentLevelSequence` component on an entity by clicking the attach script button and selecting `ParentLevelSequence.ts` from the drop down menu.
  * Set `levelId` to unique identifier (e.g., “level\_1”)
  * Set `levelName` to display name (e.g., “Level 1: Easy Mode”)
- Add child entities with config components:

  ```
  Level 1 Parent Entity
    ├─ Child: ObjectiveStarRating (defines win condition)
    ├─ Child: OverrideBoardGame (makes board 6x6)
    └─ Child: OverrideMatchExperience (doubles XP rewards)
  ```
- In code, the level is activated by calculating `progressionAPI.levelSequenceManager.StartLevelSequence(LevelID)` and passing in a level ID:
  * All current level IDs can be found in `Tutorial_Definitions.ts:1-10`.
  * Add new levels into this list.

```
// When player selects a level
progressionAPI.levelSequenceManager.startLevelSequence("level_1");

// This will:
// 1. Clear previous objectives
// 2. Apply board override (6x6 grid)
// 3. Apply XP override (double rewards)
// 4. Register star rating objective validator
```

**Objective validator flow**:

<details>
<summary>Chart of objective validation</summary>

<p></p>

[Chart of objective validation](../../../image_data/4dfbd39f3e8d606100a7d4d5bc7738e11ac111274b39abb252e731bf7149604f.md)

### Overview
This image depicts a flowchart representing the end-of-match process in a game scenario. It outlines the sequence of actions taken after a match is completed, including checks for win conditions and lose conditions, leading to either a win or loss outcome or continuing play.

### Key Elements
1. **Match Completed**
   - **Visual description**: A rectangular box with rounded corners.
   - **Location**: Top of the flowchart.
   - **Contents**: "Match Completed"
   - **Visual styling**: Light blue background, black border.

2. **ObjectiveManager.checkObjectives()**
   - **Visual description**: A rectangular box with rounded corners.
   - **Location**: Below "Match Completed."
   - **Contents**: "ObjectiveManager.checkObjectives()"
   - **Visual styling**: Gray background, black border.

3. **validator.checkWinCondition()**
   - **Visual description**: A rectangular box with rounded corners.
   - **Location**: Below "ObjectiveManager.checkObjectives()."
   - **Contents**: "validator.checkWinCondition()"
   - **Visual styling**: Gray background, black border.

4. **Win?**
   - **Visual description**: A diamond-shaped decision point.
   - **Location**: Below "validator.checkWinCondition()."
   - **Contents**: "Win?"
   - **Visual styling**: Gray background, black border.

5. **Game Over - Win**
   - **Visual description**: A rectangular box with rounded corners.
   - **Location**: To the right of the "Win?" decision point.
   - **Contents**: "Game Over - Win"
   - **Visual styling**: Green background, black border.

6. **validator.checkLoseCondition()**
   - **Visual description**: A rectangular box with rounded corners.
   - **Location**: Below the "Win?" decision point.
   - **Contents**: "validator.checkLoseCondition()"
   - **Visual styling**: Gray background, black border.

7. **Lose?**
   - **Visual description**: A diamond-shaped decision point.
   - **Location**: Below "validator.checkLoseCondition()."
   - **Contents**: "Lose?"
   - **Visual styling**: Gray background, black border.

8. **Game Over - Lose**
   - **Visual description**: A rectangular box with rounded corners.
   - **Location**: To the right of the "Lose?" decision point.
   - **Contents**: "Game Over - Lose"
   - **Visual styling**: Red background, black border.

9. **Continue Playing**
   - **Visual description**: A rectangular box with rounded corners.
   - **Location**: Below the "Lose?" decision point.
   - **Contents**: "Continue Playing"
   - **Visual styling**: Yellow background, black border.

### Visual Flow / Relationships
- The flowchart starts at "Match Completed."
- It proceeds through "ObjectiveManager.checkObjectives()" and "validator.checkWinCondition()" to determine if a win condition has been met.
- If a win condition is met ("Yes"), it leads to "Game Over - Win."
- If no win condition is met ("No"), it proceeds to "validator.checkLoseCondition()" to check for a lose condition.
- If a lose condition is met ("Yes"), it leads to "Game Over - Lose."
- If no lose condition is met ("No"), it leads back to "Continue Playing."

</details>

<p></p>



Each validator implements `IObjectiveValidator` interface:

```
interface IObjectiveValidator {
  checkWinCondition(): boolean;
  checkLoseCondition(): boolean;
  endReason: string;  // Description of why game ended
}
```

**Example: progressive difficulty**

```
// Level 1: Easy (generous thresholds)
Level 1 Configs:
  - ObjectiveStarRating: [1000, 2000, 3000] for [1, 2, 3] stars
  - OverrideMatchExperience: [75, 150, 225] XP per star

// Level 5: Hard (strict thresholds)
Level 5 Configs:
  - ObjectiveStarRating: [5000, 8000, 12000] for [1, 2, 3] stars
  - OverrideBoardGame: 10x10 grid, more tiles = more complexity
  - OverrideMatchExperience: [50, 100, 150] XP (lower rewards)
```

Key files to explore:

* `Progression_LevelSequenceManager.ts:27` - Level activation logic
* `Progression_LevelSequenceConfigs.ts:76` - ObjectiveScore implementation
* `Progression_LevelSequenceConfigs.ts:313` - OverrideMatchExperience implementation
* `Progression_ObjectiveValidators.ts:151` - StarRatingObjective validation

### Progression System Architecture

The progression system integrates with other game modules through events:

<details>
<summary>Chart of the scoring system</summary>

<p></p>

[Chart of the scoring system](../../../image_data/ccf2c0099bffdfcb7b62d33cf3af1b6548eff3588ff48a3e572518ade5ec06f8.md)

### Overview
The image depicts a flowchart-style diagram illustrating the structure and interactions within a system, specifically a Progression System that includes components related to scoring, achievements, experience points (XP), and player profiles. The diagram uses rectangles to represent different modules or systems, with arrows indicating the flow of data or events between them.

### Key Elements
- **Scoring System**: Located at the top, represented by a yellow rectangle containing three nested rectangles labeled **ScoreManager**, **StarRating**, and **ComboTracker**. These appear to be sub-modules under the Scoring System.
- **Progression System**: A large blue rectangle spanning the middle and bottom of the diagram, labeled as the main system. It contains several interconnected components.
  - **Achievement System**: A purple rectangle within the Progression System, containing a nested gray rectangle labeled **Achievement Relays** with items like **TilePop**, **Combo**, and **Custom...**.
  - **XP Relay**: A yellow rectangle within the Progression System, labeled **XP Relay** with the note **Listen to Star Events**.
  - **XP Manager**: A pink rectangle within the Progression System, labeled **XP Manager** with items **Award XP** and **Level Up**.
  - **LevelSequenceManager**: A dark gray rectangle within the Progression System, containing items **Objective Configs**, **Board Overrides**, and **XP Overides**.
  - **PlayerProfile**: A green rectangle within the Progression System, labeled **PlayerProfile** with items **Level**, **XP**, and **Thresholds**.
- **Game Events**: A dashed arrow pointing from the Scoring System to the Achievement System, labeled **Game Events**.
- **STAR_RATING_CALCULATED**: A dashed arrow pointing from the Scoring System to the XP Relay, labeled **STAR_RATING_CALCULATED**.

### Visual Flow / Relationships
- The most prominent visual elements are the nested rectangles under the Scoring System and the interconnected components within the Progression System.
- Arrows indicate the flow of data or events, with **Game Events** flowing into the Achievement System and **STAR_RATING_CALCULATED** flowing into the XP Relay.
- Spatial relationships show a hierarchical structure, with the Scoring System as a parent module influencing the Achievement System and the XP Relay through specific events.

</details>

<p></p>



**Event flow**:

<details>
<summary>Chart of the event flow</summary>

<p></p>

[Chart of the event flow](../../../image_data/f894c225cb11564133631bef2ad1d62a37cd65da7f49b2b6ef87d71dfb5635c2.md)

### Overview
This image depicts a sequence diagram illustrating the interactions between various components in a game system. The diagram shows how different entities communicate with each other through messages and events. Components include Player, Game, ScoreManager, ComboTracker, StarRating, XP Relay, XP Manager, PlayerProfile, and Achievements.

### Key Elements
- **Player**: Located at the far left, represented as a yellow rectangle. It sends a message "Complete Match" to the Game.
- **Game**: A blue rectangle located next to the Player. It receives the "Complete Match" message and responds with "Calculate Score."
- **ScoreManager**: A green rectangle. It receives the "Calculate Score" message and sends back a "Return Multiplier" message.
- **ComboTracker**: Another green rectangle. It receives the "Update Multiplier" message and calculates stars.
- **StarRating**: A green rectangle. It calculates stars and sends a message "STAR_RATING_CALCULATED" to the XP Relay.
- **XP Relay**: A purple rectangle. It receives the "STAR_RATING_CALCULATED" message and awards XP.
- **XP Manager**: A purple rectangle. It receives the "Award XP" message and checks if the threshold is met.
- **PlayerProfile**: A purple rectangle. It receives the "Add XP" message and checks if the threshold is met.
- **Achievements**: A purple rectangle. It receives the "Check Threshold" message and awards bonus XP.

### Visual Flow / Relationships
The diagram uses arrows to indicate the direction of communication between components. The most prominent visual elements are the messages being sent and received between the components. The sequence starts with the Player completing a match, which triggers a series of calculations and updates that ultimately lead to XP being awarded and achievements being unlocked.

</details>

<p></p>

