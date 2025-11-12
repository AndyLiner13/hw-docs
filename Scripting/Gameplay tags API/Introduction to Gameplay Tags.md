Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/gameplay-tags-api/introduction-to-gameplay-tags

Learn

# Introduction to Gameplay Tags

Gameplay Tags are user-defined labels given to gameplay objects. These labels allow you to define sets of objects e.g., player, respawn, and enemy to identify and manipulate using scripts. This new tag type expands on the current functionality of tags - removing existing pain points - and aligns more closely with industry standards. To learn more about possible use-cases for tags and understand how tags are used in game development, visit the [Unity](https://docs.unity3d.com/Manual/Tags.html) and [Unreal](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/Tags/) documentation on tags. With this update, your entities will automatically migrate to the new field type: “gameplayTags” and be ready for use in scripts.

Gameplay Tags allow you to:

* Assign multiple tags to a single entity (up to 5 tags with a max of 20 characters per tag)
* Manipulate tags using TypeScript e.g. add, remove, set, and compare
* Search with Typescript using AND|OR to find entities with specific tags or sets of tags on a “World” level
* Assign tags to triggers and raycasts
* Filter entities by tags in Desktop Editor

For more information on the Gameplay Tags API and to see example code, see the [API reference doc](/hw-docs/Scripting/Gameplay%20tags%20API/Modify%20and%20Retrieve%20Entity%20Tags.md).

## Using Gameplay Tags in Desktop Editor and VR

Since this feature involves multiple moving parts, below are a few different scenarios for modifying and manipulating gameplay tags in Desktop Editor and Build Mode in Meta Horizon Worlds.

To quickly navigate to a specific editing workflow, use the following links:

* [Tag Editing in Desktop](/hw-docs/Scripting/Gameplay%20tags%20API/Introduction%20to%20Gameplay%20Tags.md#tag-editing-in-desktop-editor)
* [Tag Editing in VR](/hw-docs/Scripting/Gameplay%20tags%20API/Introduction%20to%20Gameplay%20Tags.md#tag-editing-in-vr)
* [Tag Filtering](/hw-docs/Scripting/Gameplay%20tags%20API/Introduction%20to%20Gameplay%20Tags.md) (Desktop#tag-filtering-in-desktop-editor)

## Tag Editing in Desktop Editor

Using Desktop Editor, you can search for, add, remove, and modify gameplay tags.

**Search for a tag**

- Navigate to the right-most menu and find the “Gameplay Tags” section
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512510297953593_3713360108182145117_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=DITzaUxCPDEQ7kNvwFkvc9q&_nc_oc=AdnLVl12DqqJBxb2ja326g7Uui5LqYzLRanV-BU92s1jWegOKpIRWbJr96fZ3zrY02o&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_AfhjpNxoph2M2juPHdyNuW3X_48tkRQWx0Na9xBqpXVfrw&oe=692EB4B0)
- Enter the keyword in the search bar and press enter
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452531950_512510307953592_5435334402365433075_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=RnCtO_YAm_MQ7kNvwEmVUVo&_nc_oc=AdkMMlF13yGEkXP_NQCAcNwEuVIHtyE018Rzu7IuGpVED6J6aacuzlYtz3FRivmC9SM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_AfjKcfDn_d2CwMn34qcPopj6QIMz65qfTNF63EQXBrrwHQ&oe=692EAEC1)
- Any entities with this tag should appear

**Add a tag**

- Select the object
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452932800_512510317953591_7736172710593851318_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=0t2FqQ3Iqr8Q7kNvwEJBT6U&_nc_oc=AdkhPie2BL2fHJSBmjvd91zyGFrmURbiBZ0cgrc7fymrYXq2gwXtsobfkINPH8Dyj_4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_AfhrpyV2iXjJgFEARnWzs3dtJdTIBGtIl6FPAo9LYXIOBw&oe=692EC754)
- Navigate to the right-most menu and find the “Gameplay Tags” section
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652805_512510324620257_7535330597218424662_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=52DWEFSddSYQ7kNvwFToyGP&_nc_oc=AdnOaerLKrgMZ0FZdYtLHrZ9cdWhTr-iQEqjjP9bZBzsS1UzLMjpiIibJdvgrXcfuKM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_AfhNK9CNeIRo5qVMj4L4UG5qUBfCVZ8Dbx2q0tI6aRU7KQ&oe=692EABCC)
- Select the “+” symbol next to the search bar
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533361_512510337953589_5428023551380485005_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=FeMMhCg_tegQ7kNvwFwQekQ&_nc_oc=AdmXpfy0fsEwDw28MpnV8FEW3jSZJ6dkh4cCm4F0j5lsgUUIv3PlZfJUrsW8hr2OsAU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_AfgL1XQyyyRv9NBlfVkV5sCKm567KU4V_AS_fh7qvI7H1Q&oe=692EC928)
- Enter tag name into field and press enter
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698786_512510327953590_7203122234308935135_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=OJyDmCVqhKAQ7kNvwFAY5qZ&_nc_oc=Adn8X0kjHUxZ0pHa84ixZRJQZWCzM6IPAYo3e7GrunzcOHN4eo0FDnNZZ0qtHQNvrW0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_Afjse8cTTVDSHIfwG8HW29y3LgyPNaBN33hjyt6tePkqww&oe=692EB36C)
- The tag will now appear under the object’s tags
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915412_512510331286923_4938518147116670862_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=5Zh-OKH6rB0Q7kNvwEEhjQx&_nc_oc=AdmRARdN7I60VNwkSs3A2O8fNuy0VzqfyQWjzuwwWYTwKqZaqtgTLVwfbU4eLCAEVKE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_Afh3AtqtZM2sSCxZ4xVPpC8Fd2so8EQwBy9TnsMzt72NQw&oe=692EC6F2)

**Remove a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to remove and click on the “-” icon
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452533360_512510341286922_8800632251859838755_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=0iQMOmNE7lAQ7kNvwGFRq7S&_nc_oc=AdmumEFELVNzllSr8-A3pBYJX2FtAIe_qjR7_1S4R5H155t6p49G0MAJG2BZwavPu6k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_Afg7zb-uIB4cZDJD-jvp1oMpOQGo5dHBu4zXD12knwi4Gg&oe=692EB3E2)
- The tag will be removed from the object’s tags

**Modify a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to modify and click on the pencil icon
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452704028_512510334620256_4085579888356380485_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=OaYUOyFDP6IQ7kNvwFH3iOM&_nc_oc=Adm35L63lQq60jvVpb9IKV9B-s0NTGQL8ojy6N-DS1KpesOY9vnITzuodSQywOpnAYs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_AfhFWOtJIUedGckEp7dVYUlz_Gwj7CZ79AL4bjtUf_maKg&oe=692E95BE)
- Enter the new tag name or modifications
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001282_512510314620258_5253799186195480687_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=7hkjFmmmLxUQ7kNvwGGfGp_&_nc_oc=Adlrmv1NQE9upwK-vZkfZjHLamv0kV06FN6PlugX3g2Dqjz4gFf43Va8JAEq0jtU4dY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_Afh1pgetWqzsn57L8zT2LPxwRLcOfFulpy58Wkq904mSQw&oe=692E934B)
- Click enter and the tag will update

## Tag Editing in VR

Adding, removing, and modifying tags in VR is a similar process to that of Desktop Editor. The following video shows where to find tags (under Attributes in a game object’s menu) and how to remove, add, and modify them.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453850100_962346978998093_3059839621993216811_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=DsjqMR4XiEkQ7kNvwESJEGU&_nc_oc=AdkmGPQv84f7-3zgVwRZZ2nYGxHxaXmFE3Qmh32dG8WE564O1lYKsCoL-NylAMnWz7Y&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_AfiMo6CYrOpGGa5YPOMqWEV9z52JMTVXesVKMM5qkPaF3w&oe=691A4663)

## Tag Filtering in Desktop Editor

In the “Hierarchy” menu of Desktop Editor, you’re able to filter entities by their associated tags. To do so, click on the filter icon and select the appropriate tag and watch the list re-populate with only the entities using that tag.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652242_512510271286929_4441725871151863114_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=AD2l90FmeRAQ7kNvwExsQNu&_nc_oc=AdnrQGdu6u8NLE56rx6vhjtFmTjpuk6fP0vTB3n_VjujxkCyQ2aryBJ_e3XyCsVr5bk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=gESbgQCxS7N6t27twEyFFw&oh=00_Afhf678ybHPDNUYdzgzSxHA0Sh8KBvWmr0eNLTcTG301VQ&oe=692EB67B)

## Known Issues

* Due to limitations on world builder that do not allow for collection types on Entity fields, tags are stored as a JSON serialized string. To counteract the performance implications of serialization, we’ve introduced a service that caches tags in a readily available set to perform any matching operation on an Entity’s tags.