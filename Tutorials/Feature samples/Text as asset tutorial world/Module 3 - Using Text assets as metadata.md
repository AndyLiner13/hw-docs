Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/text-as-asset-tutorial-world/module-3-using-text-assets-as-metadata

# Module 3 - Using Text assets as metadata

Text assets can also be used to store metadata about the game. For example, you can store data about enemies, weapons, and environments as JSON data. Generating enemies using text does not necessarily require text as assets. However, as your world grows, the large volume of text can impact script sizing limits if the data is stored in TypeScript. Additionally, you can change or refresh this data by updating a single asset without engineering and without republishing the game.

<details>
<summary>Image of Station 2, which is a field where rows of monsters are spawned based on text assets</summary>

<p></p>

[Image of Station 2, which is a field where rows of monsters are spawned based on text assets](../../../image_data/0ab59f55c011793ade80a49039549ac73ce6114c557823bf713c5736cddecc9b.md)

### Overview
The image depicts a virtual environment within a game or simulation interface. It features a character standing in a grid-based area surrounded by various geometric shapes and floating numbers. The scene includes user interface elements at the top and bottom of the screen.

### Key Elements
- **Character**: A humanoid figure wearing a green shirt and black pants, positioned centrally in the foreground.
- **Geometric Shapes**: Various 3D shapes such as cubes, spheres, and pyramids are scattered around the character. These shapes are colored pink, green, purple, yellow, and blue.
- **Floating Numbers**: Large, colorful numbers (180, 150, 100, 200) are suspended in the air above the shapes.
- **User Interface Elements**: Located at the top left and right corners, there are icons and buttons labeled "TAB," "ESC," "[Internal] O," "V," and "B." Additional icons include a menu, pause, and bug report symbols.
- **Title**: At the top center, the text reads "Station2 - Monster Spawn."
- **Asset and Version IDs**: On the top right, there are IDs labeled "Asset ID" and "Version ID."

### Visual Flow / Relationships
- **Most Prominent Element**: The character is the focal point, with the floating numbers and shapes surrounding them.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: The shapes and numbers are distributed randomly across the scene, with no clear directional flow.

</details>

<p></p>



**How to use this module**:

Look at the `MonsterSpawnerManager` script and object. By loading the asset with the stats of enemies that you can spawn to fight, you are able to create a lot of enemies at once and control the scaling of their statistics in a predictable manner. In this example, hit point values are retrieved from the JSON asset, which can be used a vehicle for defining various aspects of enemy behavior.

**Tip**: In the script’s comments, you can see example JSON records in use for this station, which you can use as the basis for creating your own content for this station.