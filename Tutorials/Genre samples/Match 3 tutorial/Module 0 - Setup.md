Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/match-3-tutorial/module-0-setup

# Module 0 - Setup

## Important Information

This content is a companion to the Match 3 genre sample world, which you can access through the desktop editor. When you open the genre sample world, the editor creates a copy for you to explore while following along with this guide. For more information, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).

In this genre sample, you learn how to create a simple and effective Match 3 game using ready-made assets.

Match 3 games are one of the most popular genres on PC and mobile, and such games include Gardenscapes, Royal Match, and Bejeweled. In Horizon Worlds, an example of a mobile Match 3 game is “Match and Flow”.

## Key Learning Objectives

This course teaches you how to build a complete Match 3 game. Here’s what you’ll learn in each module:

### Module 1: Foundation & Core Mechanics

* **Grid System**: Create and manage a tile-based game board using 2D arrays
* **Swap & Match Detection**: Implement tile swapping with horizontal and vertical match detection
* **Board Management**: Handle tile removal, gravity-based falling, and automatic refill systems
* **Cascade System**: Build state machine-driven cascades that create chain reactions
* **Win Conditions**: Track score objectives and implement star rating evaluation (1-3 stars)
* **Loss Conditions**: Manage move counters and trigger game-over states

### Module 2: Game Flow & Scoring

* **Score Calculation**: Calculate points using base scores and combo multipliers
* **Combo Multipliers**: Implement cascading score bonuses that reward chain reactions (1.0x → 5.0x)
* **Star Rating System**: Evaluate player performance against configurable thresholds

### Module 3: Advanced Features

* **Ability System Architecture**: Design unified systems for power-ups and boosters using the Strategy Pattern
* **Power-up Creation**: Generate special tiles from 4+ matches (Row Clear, Column Clear, Bomb, Color Clear)
* **Booster Inventory**: Track and manage player-owned consumable boosters
* **Targeting System**: Implement player input for directional booster activation
* **Combo Rewards**: Award boosters to players based on high combo achievements

### Module 4: Progression Systems

* **XP & Leveling**: Track player experience points with level-up thresholds and overflow handling
* **Achievement System**: Create milestone tracking with event-driven progress updates
* **Level Sequences**: Configure multiple levels with custom objectives, board sizes, and XP rewards
* **Objective Validators**: Implement win/loss condition checking for different game modes

### Customize your own Match 3 game

* **Asset Integration**: Replace default tiles with custom visual assets
* **Obstacle Design**: Create varied obstacle types that add strategic depth
* **Audio Implementation**: Customize sound effects and music for your game
* **Difficulty Balancing**: Design progressive difficulty curves across multiple levels

## Play the Finished Game

To explore the finished world on mobile or desktop, visit the [Match 3 world page](https://horizon.meta.com/world/771897102681444).

**Note**: The recommended experience for Match 3 is on a mobile device.

## Before you begin

### Prerequisites

Verify that you have access to your own copy of Match 3. For more information, see [Access Tutorial Worlds](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/access-tutorial-worlds).

**Note**: This tutorial assumes that you are familiar with the desktop editor, a desktop application for building in Meta Horizon Worlds. If you are new to the desktop editor, start with [Build your first game](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/build-your-first-game/module-1-build-your-first-game).

### Getting started

- Open the [Meta Quest Link](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/install-desktop-editor) application on your desktop.
- In the **Library tab**, locate the **Meta Horizon** application.
- From the context menu for the application, select **Start in Desktop Mode**.
- In the **Creation Home** page, select **My worlds** from the left navigation bar.
- Select your copy of the tutorial template.
- Open your copy of the tutorial world in the desktop editor.