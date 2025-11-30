Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/text-as-asset-tutorial-world/module-2-using-text-assets-as-ingame-content

# Module 2 - Using Text assets as in-game content

![Image of Station 1, which is a trivia game whose questions are imported through text assets](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/488755539_688927730311848_6788371115967447808_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=i2Xzvx3CxJUQ7kNvwHegpPL&_nc_oc=AdmQMTiO2Ab4IEk2kxnTU6ARojNW9Yb5TbuVWuJeY3cNA2pTGZFfjVkXWHYnHRuPMXE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=naQ3NVYiBCyAh8jUOmyAGA&oh=00_AfgDtsFDCDjW4HRgubPTgLHNYH0-oFJI1zTUSoD4jSqvuw&oe=69462F1A)

Text assets can be used to upload in-game data from outside sources, which has several advantages:

* Text can be managed in an external tool, such as Excel, which supports tabular format.
* Text-based content can be curated by non-engineers, such as writers.
* Updates to in-game text do not touch the codebase.
* Updates do not require a re-publication in order for them to be available.

In this module, text as in-game content is used to implement a trivia game. Most trivia games are expected to have a large number of questions and answers that you can share with players. Text As Assets is one way to maintain and deliver large volumes of text content into your world. By updating the text asset periodically, you can insert and remove questions/answers to freshen your game content.

**How to use this module**:

Look at the `TriviaGameManager` script and object. By loading the asset with lots of questions and answers, you can deliver many trivia questions to players and update the world content without having to republish the world.

**Tip**: In the script’s comments, you can see example JSON records in use for this station, which you can use as the basis for creating your own content for this station.