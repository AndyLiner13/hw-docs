Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/sim-tycoon-tutorial/module-6-resource-converter

# Module 6 - Resource Converter System

The resource converter turns resources (gems or ore) collected by players into currency. The conversion happens when a player enters a trigger zone, converting all their resources in their inventory into the corresponding currencies. The system also updates HUD elements, adds to the player’s score, and plays visual and sound effects.

## System components

### ResourceConverter.ts

This script contains two parts:

- **convertOre()** – A function that handles the conversion process.
- **OreToCurrencyTrigger** – A trigger component that detects when a player enters and calls the conversion.

#### Property description

* **targetVfxEntity** – Entity where the conversion visual effect will play when resources are turned into currency.

#### Core functions

* **convertOre(player, rcData)** – Converts all ore (green, blue, purple, red) into corresponding currencies using the player’s stat multipliers.
* **OreToCurrencyTrigger.start()** – Calls `convertOre()` for the entering player.

## How to deploy

- Add `ResourceConverter.ts` to your project.
- Create a trigger entity in the world (e.g., a conversion station).
- Attach `OreToCurrencyTrigger` to the trigger.
- Assign a `targetVfxEntity` for the conversion effect.

## How to use

* Players mine resources (gems or ore) with tools like the pickaxe.
* When a player steps into the trigger, `OreToCurrencyTrigger` runs.
* All resources in player inventory are converted into currency.
* The HUD and leaderboard score update automatically.
* Visual and sound effects play to signal the conversion.

## Modifications

* Add new resource types (extend `convertOre()` with additional conversions).
* Change conversion multipliers (adjust `playerStats`).
* Customize effects by swapping `SFX_ConvertItem`, `SFX_UI_Reject`, or `VFX`.
* Add cooldowns or limits so conversion can only happen under certain conditions.