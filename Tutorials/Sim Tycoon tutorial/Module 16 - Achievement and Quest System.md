Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/sim-tycoon-tutorial/module-16-achievement-quest-system

Learn

# Module 16 - Achievement and Quest System

The achievement and quest system tracks player progress and provides goals and rewards for specific milestones. It enhances player engagement through structured progression and accomplishment recognition.

## System components

### QuestManager.ts

This script manages the achievement and quest system, tracking player progress and awarding achievements when specific conditions are met.

#### Key features

* **Progress Tracking**: Monitors player actions and milestones
* **Achievement Unlocking**: Awards achievements when conditions are met
* **Quest Management**: Handles sequential and conditional quest chains
* **Reward Distribution**: Provides rewards for achievement completion
* **Persistence**: Saves achievement progress between sessions

#### Property description

* **achievements**: List of available achievements and their unlock conditions
* **questChains**: Sequential quest progression paths
* **rewardTemplates**: Templates for different types of rewards
* **progressTrackers**: Current progress toward incomplete achievements
* **unlockedAchievements**: List of achievements the player has earned

## Achievement categories

### Tool progression achievements

Achievements related to tool advancement:

* **“First Steps”**: Purchase your first tool (green pickaxe)
* **“Tool Collector”**: Own tools of at least 3 different tiers
* **“Master Craftsman”**: Upgrade a tool to the maximum tier
* **“Tool Enthusiast”**: Purchase 10 different tools total

### Mining achievements

Resource collection milestones:

* **“Novice Miner”**: Mine 100 total resources
* **“Resource Hunter”**: Collect all three types of resources in one session
* **“Efficiency Expert”**: Mine 500 resources using tier 4+ tools
* **“Master Miner”**: Achieve 1000 total resources mined

### Economic achievements

Currency and trading accomplishments:

* **“First Sale”**: Complete your first resource conversion
* **“Wealthy Trader”**: Accumulate 1000 total currency
* **“Economic Powerhouse”**: Complete 100 successful transactions
* **“Currency Master”**: Own maximum amounts of all currency types

### Social achievements

Multiplayer and collaboration recognition:

* **“Teamwork!”**: Participate in completing a global resource node
* **“Social Butterfly”**: Play in a world with 5 or more other players
* **“Helpful Friend”**: Assist another player in achieving their first upgrade
* **“Community Leader”**: Be present for 10 global node completions

## Quest system mechanics

### Tutorial quests

Guided progression for new players:

- **“Getting Started”**: Complete the FTUE and purchase first tool
- **“First Mining Session”**: Collect 10 resources of any type
- **“Economic Basics”**: Convert resources to currency and make first upgrade
- **“Tool Mastery”**: Upgrade tool to tier 3 or higher

### Daily challenges

Repeatable objectives for ongoing engagement:

* **“Daily Miner”**: Mine 50 resources in a single day
* **“Economic Activity”**: Complete 5 transactions in one session
* **“Tool Maintenance”**: Repair tools 3 times in one day
* **“Collaboration”**: Participate in 2 global node completions

### Long-term progression

Extended goals that span multiple sessions:

* **“Dedication”**: Play the game for 7 consecutive days
* **“Master Explorer”**: Visit all available mining areas
* **“Economic Empire”**: Accumulate lifetime total of 10,000 currency
* **“Tool Perfectionist”**: Max out all tool categories

## Integration with game systems

### Save system integration

Achievement progress is persistently tracked:

* Unlocked achievements are saved between sessions
* Progress toward incomplete achievements is maintained
* Quest completion status persists across play sessions
* Achievement timestamps are recorded for leaderboards

### Reward system integration

Achievements can provide various types of rewards:

* **Currency Rewards**: Bonus currency for achievement completion
* **Tool Rewards**: Special tools or upgrades as achievement rewards
* **Cosmetic Rewards**: Visual customizations or special effects
* **Title Rewards**: Player titles or badges for major achievements

### HUD integration

Achievement system provides real-time feedback:

* Progress notifications appear when making advancement
* Achievement unlock notifications with celebration effects
* Quest objective tracking in the HUD interface
* Achievement gallery accessible through menu system

## Customization guide

### Adding new achievements

- Define achievement criteria and unlock conditions.
- Add achievement entry to QuestManager configuration.
- Implement progress tracking for relevant game events.
- Create reward template for achievement completion.
- Add achievement to HUD display system.
- Test achievement unlock flow and reward distribution.

### Creating quest chains

- Design sequential quest progression.
- Define prerequisites and unlock conditions for each quest.
- Implement quest completion detection.
- Create branching paths for different player types.
- Test quest flow and player guidance.
- Balance difficulty and reward progression.

### Customizing rewards

- Design reward templates for different achievement types.
- Implement reward distribution mechanisms.
- Create special effects for reward unlocking.
- Balance reward values with game economy.
- Test reward impact on player progression.

## Performance considerations

### Efficient tracking

* **Event-Based Updates**: Only update progress when relevant events occur
* **Batch Processing**: Process multiple achievement checks together
* **Cached Progress**: Maintain progress cache for frequently checked achievements
* **Selective Monitoring**: Only track achievements that are still achievable

### Memory optimization

* **Lazy Loading**: Load achievement data only when needed
* **Progress Compression**: Efficient storage of achievement progress data
* **Cleanup**: Remove completed achievement tracking data when appropriate
* **Batched Saves**: Group achievement progress saves to reduce I/O

## Best practices

### Achievement design

* **Clear Objectives**: Achievement goals should be easily understood
* **Meaningful Progression**: Each achievement should feel worthwhile
* **Variety**: Include achievements for different play styles and goals
* **Balanced Difficulty**: Mix easy, medium, and challenging achievements

### Player experience

* **Visible Progress**: Players should always see progress toward goals
* **Immediate Feedback**: Achievement unlocks should feel immediate and satisfying
* **Optional Challenges**: Achievements should enhance but not restrict gameplay
* **Celebration**: Achievement unlocks should include appropriate fanfare

### Technical implementation

* **Robust Tracking**: Ensure achievement progress is accurately recorded
* **Error Handling**: Gracefully handle edge cases and data corruption
* **Performance Impact**: Minimize impact on core gameplay performance
* **Extensibility**: Design system to easily support new achievements