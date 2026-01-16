Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/avatar-override-tutorial-world/module-3-core-game-system-scripts

# Module 3 - Core Game System Scripts

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/creator-monetization-partner-program).

In your game, the GameManager system consists of a set of scripts that drive core gameplay flow, state management, player showcases, timers, and event coordination. These scripts provide the foundation for managing game phases, player positioning, voting, and game lifecycle events.

## Script Descriptions

### **GameManager.ts**

The `GameManager.ts` script manages the overall game state transitions, timers, and player showcase sequences. It controls the flow between lobby, gameplay, showcase, and ending phases. The script listens for key events such as match registration, game over, and voting results, and broadcasts state changes and timer updates to other systems.

### **PlayerManager.ts**

The `PlayerManager.ts` script handles player positioning and teleportation across different game areas including lobby, match, and showcase. It manages spawn points for these areas and moves players accordingly during game state transitions. It also handles placing winners on podiums after the game ends.

### **VotingManager.ts**

The `VotingManager.ts` script implements the voting system used during the showcase phase. It manages vote buttons, tracks votes per player, enforces voting rules, and processes voting results. It also manages camera switching for players during showcase mode and controls button visibility.

### **GameUtils.ts**

The `GameUtils.ts` script defines the centralized event system used for communication between the GameManager, PlayerManager, VotingManager, and other components. It includes events for game state changes, player actions, voting, timers, and avatar customization.

## How to Deploy

You can deploy scripts in either of the following ways:

### Copy and Paste

TypeScript files are stored as text files on the server. When you load the script file in your external editor, you can copy and paste or save a local copy of the file.

Tip

This method is useful if you anticipate needing to make modifications of the file for your own purposes.