Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/avatar-override-tutorial-world/module-8-game-utilities

# Module 8 - Game Utilities

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

The `GameUtils.ts` script is a centralized collection of utility functions and classes that provide time unit conversions, avatar ID management, showcase position tracking, popup settings configuration, and player data management. It simplifies gameplay development by offering reusable code for common tasks.

## System Components

PlayerManager reference object hosts `PlayerManager.ts`.

PlayerManager.ts:

* **`AvatarID:`**
  + An enumeration of avatar IDs used in the game.
  + Values:
    - DEFAULT
    - Other values specific to your game’s avatar
* **`ShowcasePosition:`**
  + An enumeration of showcase positions used in the game.
  + Values:
    - Stage
    - Floor
    - FirstPlace
    - SecondPlace
    - ThirdPlace
* **`popUpSettings:`**
  + Settings for popup messages displayed during gameplay.
  + Properties:
    - Various settings for customizing popup behavior and appearance
* **`MatchPlayers:`**
  + A class for managing player data and tracking.
  + Methods:
    - addPlayer(player)
    - removePlayer(player)
    - getPlayersIn(area)

## How to Use

To use Game Utilities, follow these steps:

* **Import GameUtils:** Import the GameUtils module in your script using `import * as utils from 'GameUtils';`.
* **Utilize Utility Functions:** Use the provided utility functions and classes to simplify your code and improve gameplay management.

For example, you can use `utils.secondsToMs(10)` to convert 10 seconds to milliseconds or `utils.AvatarID.DEFAULT` to access the default avatar ID.

## Modifications

### **Add Another Phase or Game Mode**

You can extend or modify the GameUtils module to fit your specific game requirements. Some potential modifications include:

* Adding new utility functions or classes to support additional gameplay features.
* Customizing existing functions or classes to better suit your game’s needs.