Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/text-as-asset-tutorial-world/module-3-using-text-assets-as-metadata

Learn

# Module 3 - Using Text assets as metadata

Text assets can also be used to store metadata about the game. For example, you can store data about enemies, weapons, and environments as JSON data. Generating enemies using text does not necessarily require text as assets. However, as your world grows, the large volume of text can impact script sizing limits if the data is stored in TypeScript. Additionally, you can change or refresh this data by updating a single asset without engineering and without republishing the game.

![Image of Station 2, which is a field where rows of monsters are spawned based on text assets](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488245749_688927723645182_272302914640578110_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=3_MPYfEPsbMQ7kNvwEcNgXz&_nc_oc=AdlHHI5KRLJXroPwnjMNAPIVN49iZQSRprlHBpUrgPaBmaxcL2hYjxMabWfV_ra6OI4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=s2rH57fSglB6_73OG6Y-Vw&oh=00_Afh40f8uo3fkr6AV70-3InPZ5-c24u2Okd3-KqATMrEn1A&oe=692EB73C)

**How to use this module**:

Look at the `MonsterSpawnerManager` script and object. By loading the asset with the stats of enemies that you can spawn to fight, you are able to create a lot of enemies at once and control the scaling of their statistics in a predictable manner. In this example, hit point values are retrieved from the JSON asset, which can be used a vehicle for defining various aspects of enemy behavior.

**Tip**: In the script’s comments, you can see example JSON records in use for this station, which you can use as the basis for creating your own content for this station.

ON THIS PAGE