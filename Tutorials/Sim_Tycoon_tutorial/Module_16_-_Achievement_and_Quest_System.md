# Module 16 - Achievement and Quest System

## System components

  
### QuestManager.ts

 This script manages the achievement and quest system, tracking player progress
and awarding achievements when specific conditions are met.  
#### Key features


• Progress Tracking: Monitors player actions and milestones
• Achievement Unlocking: Awards achievements when conditions are met
• Quest Management: Handles sequential and conditional quest chains
• Reward Distribution: Provides rewards for achievement completion
• Persistence: Saves achievement progress between sessions

  
#### Property description


• achievements: List of available achievements and their unlock conditions
• questChains: Sequential quest progression paths
• rewardTemplates: Templates for different types of rewards
• progressTrackers: Current progress toward incomplete achievements
• unlockedAchievements: List of achievements the player has earned

  
...
...
# Module 16 - Achievement and Quest System
...
## Achievement categories

  
### Tool progression achievements

 Achievements related to tool advancement:
• “First Steps”: Purchase your first tool (green pickaxe)
• “Tool Collector”: Own tools of at least 3 different tiers
• “Master Craftsman”: Upgrade a tool to the maximum tier
• “Tool Enthusiast”: Purchase 10 different tools total

  
### Mining achievements

 Resource collection milestones:
• “Novice Miner”: Mine 100 total resources
• “Resource Hunter”: Collect all three types of resources in one session
• “Efficiency Expert”: Mine 500 resources using tier 4+ tools
• “Master Miner”: Achieve 1000 total resources mined

  
...
...
# Module 16 - Achievement and Quest System
...
## Achievement categories
...
### Economic achievements

 Currency and trading accomplishments:
• “First Sale”: Complete your first resource conversion
• “Wealthy Trader”: Accumulate 1000 total currency
• “Economic Powerhouse”: Complete 100 successful transactions
• “Currency Master”: Own maximum amounts of all currency types

  
### Social achievements

 Multiplayer and collaboration recognition:
• “Teamwork!”: Participate in completing a global resource node
• “Social Butterfly”: Play in a world with 5 or more other players
• “Helpful Friend”: Assist another player in achieving their first upgrade
• “Community Leader”: Be present for 10 global node completions

  
...
...
# Module 16 - Achievement and Quest System
...
## Achievement categories

  
### Tool progression achievements
...
### Mining achievements
...
### Economic achievements
...
### Social achievements
...
...
# Module 16 - Achievement and Quest System
...
## Quest system mechanics

  
### Tutorial quests

 Guided progression for new players:
1. “Getting Started”: Complete the FTUE and purchase first tool
2. “First Mining Session”: Collect 10 resources of any type
3. “Economic Basics”: Convert resources to currency and make first upgrade
4. “Tool Mastery”: Upgrade tool to tier 3 or higher

  
### Daily challenges

 Repeatable objectives for ongoing engagement:
• “Daily Miner”: Mine 50 resources in a single day
• “Economic Activity”: Complete 5 transactions in one session
• “Tool Maintenance”: Repair tools 3 times in one day
• “Collaboration”: Participate in 2 global node completions

  
...
...
# Module 16 - Achievement and Quest System
...
## Quest system mechanics
...
### Long-term progression

 Extended goals that span multiple sessions:
• “Dedication”: Play the game for 7 consecutive days
• “Master Explorer”: Visit all available mining areas
• “Economic Empire”: Accumulate lifetime total of 10,000 currency
• “Tool Perfectionist”: Max out all tool categories

  
...
...
# Module 16 - Achievement and Quest System
...
## Quest system mechanics

  
### Tutorial quests
...
### Daily challenges
...
### Long-term progression
...
...
# Module 16 - Achievement and Quest System
...
## Integration with game systems

  
### Save system integration

 Achievement progress is persistently tracked:
• Unlocked achievements are saved between sessions
• Progress toward incomplete achievements is maintained
• Quest completion status persists across play sessions
• Achievement timestamps are recorded for leaderboards

  
### Reward system integration

 Achievements can provide various types of rewards:
• Currency Rewards: Bonus currency for achievement completion
• Tool Rewards: Special tools or upgrades as achievement rewards
• Cosmetic Rewards: Visual customizations or special effects
• Title Rewards: Player titles or badges for major achievements

  
### HUD integration

 Achievement system provides real-time feedback:
• Progress notifications appear when making advancement
• Achievement unlock notifications with celebration effects
• Quest objective tracking in the HUD interface
• Achievement gallery accessible through menu system

  
...
...
# Module 16 - Achievement and Quest System
...
## Customization guide

  
### Adding new achievements


1. Define achievement criteria and unlock conditions.
2. Add achievement entry to QuestManager configuration.
3. Implement progress tracking for relevant game events.
4. Create reward template for achievement completion.
5. Add achievement to HUD display system.
6. Test achievement unlock flow and reward distribution.

  
### Creating quest chains


1. Design sequential quest progression.
2. Define prerequisites and unlock conditions for each quest.
3. Implement quest completion detection.
4. Create branching paths for different player types.
5. Test quest flow and player guidance.
6. Balance difficulty and reward progression.

  
### Customizing rewards


1. Design reward templates for different achievement types.
2. Implement reward distribution mechanisms.
3. Create special effects for reward unlocking.
4. Balance reward values with game economy.
5. Test reward impact on player progression.

  
...
...
# Module 16 - Achievement and Quest System
...
## Performance considerations

  
### Efficient tracking


• Event-Based Updates: Only update progress when relevant events occur
• Batch Processing: Process multiple achievement checks together
• Cached Progress: Maintain progress cache for frequently checked achievements
• Selective Monitoring: Only track achievements that are still achievable

  
### Memory optimization


• Lazy Loading: Load achievement data only when needed
• Progress Compression: Efficient storage of achievement progress data
• Cleanup: Remove completed achievement tracking data when appropriate
• Batched Saves: Group achievement progress saves to reduce I/O

  
...
...
# Module 16 - Achievement and Quest System
...
## Best practices

  
### Achievement design


• Clear Objectives: Achievement goals should be easily understood
• Meaningful Progression: Each achievement should feel worthwhile
• Variety: Include achievements for different play styles and goals
• Balanced Difficulty: Mix easy, medium, and challenging achievements

  
### Player experience


• Visible Progress: Players should always see progress toward goals
• Immediate Feedback: Achievement unlocks should feel immediate and satisfying
• Optional Challenges: Achievements should enhance but not restrict gameplay
• Celebration: Achievement unlocks should include appropriate fanfare

  
...
...
# Module 16 - Achievement and Quest System
...
## Best practices
...
### Technical implementation


• Robust Tracking: Ensure achievement progress is accurately recorded
• Error Handling: Gracefully handle edge cases and data corruption
• Performance Impact: Minimize impact on core gameplay performance
• Extensibility: Design system to easily support new achievements

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Module 16 - Achievement and Quest System
...
## Best practices
...
### Technical implementation
...
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy/policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 16 - Achievement and Quest System
...
## Best practices

  
### Achievement design
...
### Player experience
...
### Technical implementation
...
...
# Module 16 - Achievement and Quest System
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsim-tycoon-tutorial%2Fmodule-16-achievement-quest-system%2F)
...
# Module 16 - Achievement and Quest System

 The achievement and quest system tracks player progress and provides goals and
rewards for specific milestones. It enhances player engagement through structured
progression and accomplishment recognition.  
## System components
...
## Achievement categories
...
## Quest system mechanics
...
## Integration with game systems
...
## Customization guide
...
## Performance considerations
...
## Best practices
...
## Additional Links
...
      Learn
# Module 16 - Achievement and Quest System
...
