Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-tutorial-world/zone-0-setup

Learn

# Zone 0 - Setup

Welcome, creators!

This documentation serves as a companion guide to the **Custom UI Tutorial**, one of the tutorial worlds available in the Home section of the Horizon Desktop Editor. This world is designed to help you learn how to use Custom UI in your own worlds.

![Custom UI Tutorial World Cover Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/550042330_817392014132085_1043491075615758728_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=bOLBgPgYOMIQ7kNvwHTiRfe&_nc_oc=Adn9ZVxofTsaysCPuML27VxSPRXwD_i5aHGCsvpZYveeM4oLNNvNeVfenvJAFeNT_Z4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=s7dMc4JlxdZHxuNAcJvlSg&oh=00_AfhFO65DCA3XXwU7hHAoR7OnjfHMVQqnnoDFxsRhpmIbug&oe=692FAABC)

## Finding and opening the tutorial world

To access the Custom UI Tutorial World:

- Open the Horizon Desktop Editor to be taken to the **Creation Home** page.
- Select **Tutorials** from the left navigation options.
- Look for **Custom UI Tutorial** in the list of available tutorial worlds and click to open and explore the world.

Each zone and station described in this guide corresponds to the interactive examples you can experience firsthand in the world.

## Tutorial world overview

This world covers how to use Custom UI assets available in the public library. The goal of this tutorial world is to be a demo space to find Custom UI examples that you can use in your worlds while also providing examples on how to use the asset in your worlds. To use this world to its fullest extent, you should have a basic understanding of [TypeScript](/hw-docs/Scripting/Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md), [Custom UI](/hw-docs/Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md), and [asset templates](/hw-docs/Desktop%20editor/Assets/Asset%20Templates.md).

Although implementing Custom UI requires knowledge of TypeScript, these Custom UI examples come with functions to simplify the process of using them. These Custom UI examples should help you get past the difficult part of building a Custom UI from scratch and get you to the important part of being able to use Custom UI in your world.

The first step to utilizing these Custom UI examples is to explore this world. The tutorial world is laid out like a mall where the Custom UI stations are located along the main hallway. The space is divided into rooms or zones, each with a theme to help focus your exploration. In order to maximize performance, the Custom UI examples are hidden from view until you step into the room.

The zones in this example world are:

* **[Zone 1: Option Lists](/hw-docs/Tutorials/Custom%20UI%20tutorial%20world/Zone%201%20-%20Option%20Lists.md)** - Toggle lists, radio buttons, task lists, and option APIs
* **[Zone 2: Basics](/hw-docs/Tutorials/Custom%20UI%20tutorial%20world/Zone%202%20-%20Basics.md)** - Basic buttons, timers, dialog prompts, and button APIs
* **[Zone 3: Bars](/hw-docs/Tutorials/Custom%20UI%20tutorial%20world/Zone%203%20-%20Bars.md)** - Loading bars and health bars with progress indicators
* **[Zone 4: Advanced Lists](/hw-docs/Tutorials/Custom%20UI%20tutorial%20world/Zone%204%20-%20Advanced%20Lists.md)** - Inventory systems, stats lists, and player lists
* **[Zone 5: Animation](/hw-docs/Tutorials/Custom%20UI%20tutorial%20world/Zone%205%20-%20Animation.md)** - Spinning elements, timers with animation, and sliding banners
* **[Zone 6: Scroll Views](/hw-docs/Tutorials/Custom%20UI%20tutorial%20world/Zone%206%20-%20Scroll%20Views.md)** - Basic text scrolling and advanced scrollable content
* **[Zone 7: HUD](/hw-docs/Tutorials/Custom%20UI%20tutorial%20world/Zone%207%20-%20HUD.md)** - Head-up display implementations for games
* **[Zone 8: Store](/hw-docs/Tutorials/Custom%20UI%20tutorial%20world/Zone%208%20-%20Store.md)** - Comprehensive storefront with purchase functionality

Each zone contains multiple stations with working examples, complete documentation, and implementation details for the Custom UI components.

Each Custom UI station is structured similarly:

* Station info panel: This panel lists the station number, the station name, the asset name, the asset ID, and the TypeScript filename(s).
* Custom UI gizmo: Place this gizmo in your own world for players to interact with.
* Demo: You can step on triggers to see how the Custom UI example works. The demo provides a basic example of how players can interact with the Custom UI gizmo.

## APIs

This world and all assets referenced from this world use the custom UI API in Horizon Worlds. Make sure your world has this toggle set or else none of these assets will work.

* Scripts > Settings > API > `horizon\ui` - make sure this is set to **On**

## Using the asset templates

Once you have explored the world and found a Custom UI you wish to use, you need to import it into your world. Start by checking the station info panel for the asset name and ID, then use this information to find the asset in the public library.

Once you have found the asset, drag and drop it from the public assets folder into your world. When the asset is in your world, everything should be included with the Custom UI asset:

* The station info panel
* The Custom UI gizmo
* A demo

With the script and documentation, you have all the information needed to hook up the Custom UI example in your world.

## Best Practices

### Performance Optimization

Custom UI is one of the most expensive gizmos in terms of performance. It is recommended to use no more than eight at once. If more Custom UI gizmos are placed in the world, your world can suffer frame drops, lag, performance issues, and particularly issues with Custom UI. Although the adverse performance sometimes affects only Custom UI, it can affect other parts of your world.

To avoid these performance issues, we recommend trying the following best practices:

* Reusing gizmos is the safest way to minimize your Custom UI usage. This approach has some drawbacks, though, when it comes to the number of players in the world. This method requires moving similar Custom UIs in the world so that UIs in two separate places are actually one singular UI.
* Combining multiple Custom UIs into one gizmo is another effective approach. Although this method requires TypeScript to implement, combining Custom UIs means they do not need to be overlaid on top of each other.
* The simplest method is to hide Custom UIs when not in use. This example world uses this exact approach. Hiding Custom UIs is a cheap way to reduce the load on the Custom UI thread. The one downside is it is not as effective if multiple players in your world trigger the visibility of multiple Custom UIs.

Multiple approaches exist for making Custom UI more performant in your world. You may need to experiment to see which method works best for your world.

## Customization

### Color palette

Most of these Custom UI examples have a color palette which you can use to customize the look of the UI. This example world comes with three different color palettes:

* (0) = blue (the default option)
* (1) = green
* (2) yellow

Of course, you can create other color palettes for your Custom UIs by modifying `cuiFlexPanel.ts`. Edit this TypeScript file to create and add new color themes. Look at lines 93–120, for example, to inspect the green color palette. You can copy and paste that section to use as a template for modifying the hex codes to different colors.

After you create a new style, you need to add it to the switch statement in the Custom UI gizmo. For example, you can add a new `case 3:` setting to lines 158–168 in the `BasicButton.ts` script. This will set the theme to your newly created one.

### Font

Set the font family and letter spacing here. Since Custom UI gizmos are initialized at world startup, fontFamily normally needs to be set immediately.

You can change letter spacing if the font you’re using is too crowded (the Bangers font, for example).