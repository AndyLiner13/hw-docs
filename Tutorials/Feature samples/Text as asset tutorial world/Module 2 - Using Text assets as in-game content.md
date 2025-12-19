Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/text-as-asset-tutorial-world/module-2-using-text-assets-as-ingame-content

# Module 2 - Using Text assets as in-game content

<details>
<summary>Image of Station 1, which is a trivia game whose questions are imported through text assets</summary>

<p></p>

[Image of Station 1, which is a trivia game whose questions are imported through text assets](../../../image_data/b9f1230af2c25f9a06e03f6aee1fa27384a7837db4850310c7b0489bf843a6b9.md)

### Overview
This image depicts a screenshot from a trivia game interface titled "Station1 - Trivia Game." The screen shows a question displayed in the center, with two interactive buttons labeled "Yes" and "No" at the bottom. A character model is positioned in front of the question, facing away from the viewer. The game interface includes various control buttons and indicators at the top and right side of the screen.

### Key Elements
- **Title Bar**: Located at the top-center, displaying the game title "Station1 - Trivia Game."
- **Control Buttons**: Positioned on the left side, showing icons for menu, pause, and settings. Below these are keyboard shortcuts for "TAB," "ESC," and "[Internal]".
- **Score Display**: Situated near the top-center, showing "Score: 0" in green text.
- **Question Text**: Centered on the screen, reading, "The commercial UK channel ITV stands for `International Television`."
- **Interactive Buttons**: Two large orange buttons labeled "Yes" and "No" are placed at the bottom of the screen.
- **Character Model**: A 3D model of a person wearing a teal shirt and black pants, standing in front of the question.
- **Background**: A simple tiled wall with a light gray color.
- **Right Side Elements**: Includes a version ID and asset ID displayed vertically on the far right.

### Visual Flow / Relationships
- **Most Prominent Element**: The question text in the center.
- **Arrows/Connectors**: None.
- **Reading Order**: The question is read first, followed by the interactive buttons "Yes" and "No."

</details>

<p></p>



Text assets can be used to upload in-game data from outside sources, which has several advantages:

* Text can be managed in an external tool, such as Excel, which supports tabular format.
* Text-based content can be curated by non-engineers, such as writers.
* Updates to in-game text do not touch the codebase.
* Updates do not require a re-publication in order for them to be available.

In this module, text as in-game content is used to implement a trivia game. Most trivia games are expected to have a large number of questions and answers that you can share with players. Text As Assets is one way to maintain and deliver large volumes of text content into your world. By updating the text asset periodically, you can insert and remove questions/answers to freshen your game content.

**How to use this module**:

Look at the `TriviaGameManager` script and object. By loading the asset with lots of questions and answers, you can deliver many trivia questions to players and update the world content without having to republish the world.

**Tip**: In the script’s comments, you can see example JSON records in use for this station, which you can use as the basis for creating your own content for this station.