Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/text-as-asset-tutorial-world/module-4-using-text-assets-for-timed-events

# Module 4 - Using Text assets for timed events

Text assets can be used for creating dynamic events, which may be based on real-world time or events. For example, you can change your world to reflect a New Year’s theme or a National holiday theme. By having events defined in a Text asset, you can easily swap content in and out, without having to modify the world code and republish the world.

<details>
<summary>Image of Station 3, which features changing visual effects based on a timer</summary>

<p></p>

[Image of Station 3, which features changing visual effects based on a timer](../../../image_data/43ae62c192abf23eae5b564f1b25f42f9eb6cacf9125c131bae9d23ffd936d84.md)

### Overview
The image depicts a virtual environment interface, likely from a VR or AR application. It features a character standing in a grid-like space, with a countdown timer displayed prominently. The top bar includes various control icons and identifiers, suggesting this is part of a game or simulation.

### Key Elements
- **Title**: "Station3 -Timed Event" is displayed at the top-center.
- **Text**: "We are going to count to 30s" is shown in large red font above the timer.
- **Timer**: "14:31:33" is displayed in orange, indicating the remaining time.
- **Character**: A bald figure wearing a green shirt and black pants stands facing away from the viewer.
- **Background**: A simple grid pattern covers the floor and walls, with a gradient sky in the distance.
- **Control Icons**: On the left side, there are icons labeled "TAB," "ESC," "[Internal] O." On the right side, there are icons labeled "V" and "B."
- **Asset and Version IDs**: Located in the upper-right corner, displaying "Asset ID: 484524477660570" and "Version ID: 8050987654979869."

### Visual Flow / Relationships
The most prominent visual elements are the title, text, and timer. The character is positioned centrally but slightly below the middle of the screen. The control icons are arranged symmetrically on either side of the screen. The asset and version IDs are placed in the top-right corner, providing metadata about the scene.

</details>

<p></p>



**How to use this module**:

Look at the `TimeEventsManager` script and object. This example controls the world based on the number of seconds in the current minute. Relevant to games, for example, you can control the entire layout of your world during a holiday event by structuring the configuration inside a JSON text file and loading the appropriate one.

**Tip**: In the script’s comments, you can see example JSON records in use for this station, which you can use as the basis for creating your own content for this station.