Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/gameplay-tags-api/introduction-to-gameplay-tags

# Introduction to Gameplay Tags

Gameplay Tags are user-defined labels given to gameplay objects. These labels allow you to define sets of objects e.g., player, respawn, and enemy to identify and manipulate using scripts. This new tag type expands on the current functionality of tags - removing existing pain points - and aligns more closely with industry standards. To learn more about possible use-cases for tags and understand how tags are used in game development, visit the [Unity](https://docs.unity3d.com/Manual/Tags.html) and [Unreal](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/Tags/) documentation on tags. With this update, your entities will automatically migrate to the new field type: “gameplayTags” and be ready for use in scripts.

Gameplay Tags allow you to:

* Assign multiple tags to a single entity (up to 5 tags with a max of 20 characters per tag)
* Manipulate tags using TypeScript e.g. add, remove, set, and compare
* Search with Typescript using AND|OR to find entities with specific tags or sets of tags on a “World” level
* Assign tags to triggers and raycasts
* Filter entities by tags in Desktop Editor

For more information on the Gameplay Tags API and to see example code, see the [API reference doc](/horizon-worlds/learn/documentation/typescript/gameplay-tags-api/modify-gameplay-tags-on-entity-and-get-entities-with-tags/).

## Using Gameplay Tags in Desktop Editor and VR

Since this feature involves multiple moving parts, below are a few different scenarios for modifying and manipulating gameplay tags in Desktop Editor and Build Mode in Meta Horizon Worlds.

To quickly navigate to a specific editing workflow, use the following links:

* [Tag Editing in Desktop](/horizon-worlds/learn/documentation/typescript/gameplay-tags-api/introduction-to-gameplay-tags#tag-editing-in-desktop-editor)
* [Tag Editing in VR](/horizon-worlds/learn/documentation/typescript/gameplay-tags-api/introduction-to-gameplay-tags#tag-editing-in-vr)
* [Tag Filtering](/horizon-worlds/learn/documentation/typescript/gameplay-tags-api/introduction-to-gameplay-tags) (Desktop#tag-filtering-in-desktop-editor)

## Tag Editing in Desktop Editor

Using Desktop Editor, you can search for, add, remove, and modify gameplay tags.

**Search for a tag**

- Navigate to the right-most menu and find the “Gameplay Tags” section
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512510297953593_3713360108182145117_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=DITzaUxCPDEQ7kNvwFkvc9q&_nc_oc=AdnLVl12DqqJBxb2ja326g7Uui5LqYzLRanV-BU92s1jWegOKpIRWbJr96fZ3zrY02o&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_AfhkmcRzpLyv_Kp1PJHnJ-t77LwbLeBoHEbJq_4DWIK4_g&oe=692C11B0)
- Enter the keyword in the search bar and press enter
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452531950_512510307953592_5435334402365433075_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=LV-Nfdz6Tz0Q7kNvwG1Xpmc&_nc_oc=AdkYRF72zFeNfgA3IKUrQsOrpcMYKOmRjh4aO9c7myEQJ4uwD1t4fftgQmSdA6M2Ilw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_AfhJR3Q5J5jeTQTjracy2hKMsFviPId5_RbIKphdV0X_iQ&oe=692C0BC1)
- Any entities with this tag should appear

**Add a tag**

- Select the object
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452932800_512510317953591_7736172710593851318_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=0t2FqQ3Iqr8Q7kNvwEJBT6U&_nc_oc=AdkhPie2BL2fHJSBmjvd91zyGFrmURbiBZ0cgrc7fymrYXq2gwXtsobfkINPH8Dyj_4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_AfiExrR7IHiwExahgqqRzoRB9q37sSZmV83mWFobBRDqew&oe=692BEC14)
- Navigate to the right-most menu and find the “Gameplay Tags” section
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652805_512510324620257_7535330597218424662_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=3-TQWH5WU5QQ7kNvwHcUKLV&_nc_oc=AdlvSMa1_s9H5mStUeOWGcJMqXUaJae_nlMFGqHA3qfH3OfBKor-hk76Qji7VILVgWc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_AfhxJDBKc8zoykKFogyfi_G7DUJ0Yr9pPIPq70zu1VzI_g&oe=692C08CC)
- Select the “+” symbol next to the search bar
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533361_512510337953589_5428023551380485005_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=weVCLGYNk0AQ7kNvwFarQbs&_nc_oc=Adk5XjKJWDJ6xheLUExeXzFvU_8WiLdW4ZollXZlBMOg0TaVWbfF8voQa3fQEcScPEA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_AfhrpFc1q7KXTElh5TryukkwdpthGMJHZ3crBdmegl2_KA&oe=692BEDE8)
- Enter tag name into field and press enter
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698786_512510327953590_7203122234308935135_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=OJyDmCVqhKAQ7kNvwFAY5qZ&_nc_oc=Adn8X0kjHUxZ0pHa84ixZRJQZWCzM6IPAYo3e7GrunzcOHN4eo0FDnNZZ0qtHQNvrW0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_AfjoPZ_CnwEE1h7eWV3Ne4qJJNQWl0JJ3vwn90fUWLii2A&oe=692C106C)
- The tag will now appear under the object’s tags
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915412_512510331286923_4938518147116670862_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=wTU5O9MEMQwQ7kNvwFFb7Bj&_nc_oc=Adk47UPu9JPQR8P4KReKAi8OxO6bXl4jV09OZbQi3j8oe6S1l2-_4zf3QK7D99OX8mc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_Afjn8sfWAUfoDggSlv5Xxfu2yR-DjpdMj3IJSdBF3YmD6Q&oe=692BEBB2)

**Remove a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to remove and click on the “-” icon
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452533360_512510341286922_8800632251859838755_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=0iQMOmNE7lAQ7kNvwGFRq7S&_nc_oc=AdmumEFELVNzllSr8-A3pBYJX2FtAIe_qjR7_1S4R5H155t6p49G0MAJG2BZwavPu6k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_Afjz_iFTmsTxDOYgw2JCij2Zb3GWb7fwhTZkUPyQduLNmw&oe=692C10E2)
- The tag will be removed from the object’s tags

**Modify a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to modify and click on the pencil icon
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452704028_512510334620256_4085579888356380485_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=jmjqU1wfP3AQ7kNvwHSo1Uz&_nc_oc=Adk0_slAFRop5tH80cQJ5HhVljPYiPUYEXk_8ok-pSdIJAMZZBzRcFsQgASNl-SzcBs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_Afj47I-bjLv7fpZjjglIRJdy_gKl93siijrRyolr7qAJMw&oe=692BF2BE)
- Enter the new tag name or modifications
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001282_512510314620258_5253799186195480687_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=TqNLiISZlPMQ7kNvwEgB6Jl&_nc_oc=Adk91p6dGN0288eQPybgo269zLlU2IpF6A_gv7OZFGJGqWTu0STRNnOshxV6BIPIp9c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_Afjy3ohgrsVjyQGUe7NpcoAZr-J-nBL50TAn2a92yCQS9Q&oe=692BF04B)
- Click enter and the tag will update

## Tag Editing in VR

Adding, removing, and modifying tags in VR is a similar process to that of Desktop Editor. The following video shows where to find tags (under Attributes in a game object’s menu) and how to remove, add, and modify them.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453850100_962346978998093_3059839621993216811_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=43x4G13S2RIQ7kNvwHwviWm&_nc_oc=Adkn36wILAtjY3MnyR18KOfMHtXA-KIkGOFxFd78Y434XCwklHQRE7WF7OkBrz-kO10&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_AfhKS-YiprJv_D67-I-WaC0UocIcBgL_EA6splbj4kNRZg&oe=69176B23)

## Tag Filtering in Desktop Editor

In the “Hierarchy” menu of Desktop Editor, you’re able to filter entities by their associated tags. To do so, click on the filter icon and select the appropriate tag and watch the list re-populate with only the entities using that tag.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652242_512510271286929_4441725871151863114_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Cp7JXQKDUW8Q7kNvwFspp2e&_nc_oc=Adl_e1sAR3w65Y49kAij-OtHSup0-Ao0ASo6zXUZhURKkgxY4sjGBencli-hHarJvyY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kvdWD89DpPnBozrG07Y6rg&oh=00_AfgoQ9lbfxpXvNMlHUk51haC6vDm1eNp4Ml5m1_vvSpjTg&oe=692BDB3B)

## Known Issues

* Due to limitations on world builder that do not allow for collection types on Entity fields, tags are stored as a JSON serialized string. To counteract the performance implications of serialization, we’ve introduced a service that caches tags in a readily available set to perform any matching operation on an Entity’s tags.