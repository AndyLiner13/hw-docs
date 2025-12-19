Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/horizon-traversal-sample-world/module-7-summary

# Module 7 - Summary

Hope you enjoyed playing and exploring Rooftop Racers! We had a lot of fun building it for you.

Please feel free to take from it anything that can help you build your worlds. Below are some ways in which you can leverage this content for yourself.

## Create asset templates

You can create asset templates for any of the entities or sets of entities in the world. When you create an asset template, you add the entity into your personal Asset Library, where you can modify and deploy back into worlds of your own creation.

**Tip**: If you are creating an asset template for an entity or group of entities that reference a script, the script is not included in the asset template. It must be managed separately.

## Import utilities

The GameUtils.ts and MathUtils.ts files contain some useful object definitions and functions. These files can be imported for use in your worlds.

## Export game systems

To export an individual system from this game, you typically need to do the following:

- Load the Rooftop Racers world into the desktop editor.
- If the system of interest controls a game entity or set of entities, locate an individual entity. Examples:
  - HUD Manager controls individual instances of the HUD, which are entities in the world. HUDLocal.ts is attached to each HUD entity.
  - OOB Manager includes the OOB trigger zone, which defines the perimeter of the game world.
- If desired, you can use the entities from Rooftop Racers in your game.
  - Right-click the topmost node of the entity in the game world and select **Create asset**. Store it in a folder in your assets.
  - **The game entity has been added to your set of assets and can be deployed back into your game world.**
- Otherwise, you can apply the TypeScript files to your game entities.
  - TypeScript files are not included in the entity you saved.
- Locate the TypeScript files required for the system.
  - As noted in the Setup module, each system typically has a manager file and a local script file.
  - You can copy and paste the contents of the files or locate them on your desktop and copy and paste the files themselves.
- Copy and paste Events.ts into your code.
- Remove or comment out unnecessary events from Events.ts.
- Connect the entity and code together.
- Integrate the entity elsewhere in your game, as needed.

## Expand the world

Create a clone of this world, and build your own race across the rooftops!

#### Exercises:

To explore your understanding of the game, see if you can create answers to any or all of the following:

* How would you insert another ring checkpoint in the game?
* Is there any place in the world map where a shortcut could be added? How would you do it?
* Could you create a way to bump into another player and steal their boost jump? Would that become a double-boost jump?