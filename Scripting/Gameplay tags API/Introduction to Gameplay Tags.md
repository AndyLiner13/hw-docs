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
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512510297953593_3713360108182145117_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=DQE7vHAHmbcQ7kNvwFJLA7L&_nc_oc=AdkbEacFEiXYHhC32LoW1n4mWbyGh-f0d75AJ5_xelzcVuOiUwuc9u58sTB92N8-310&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_AfhghXjMdVfBJieIqjTuAZ_7Vi597jzs9xfD_kA7YSepTw&oe=692F95B0)
- Enter the keyword in the search bar and press enter
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452531950_512510307953592_5435334402365433075_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=RnCtO_YAm_MQ7kNvwEmVUVo&_nc_oc=AdkMMlF13yGEkXP_NQCAcNwEuVIHtyE018Rzu7IuGpVED6J6aacuzlYtz3FRivmC9SM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_AfiSrVsyRBe8QhzeOppfcJQxhZ0jGXtnY8Q0NeRaXm_elQ&oe=692FC801)
- Any entities with this tag should appear

**Add a tag**

- Select the object
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452932800_512510317953591_7736172710593851318_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=o8fibxcmt00Q7kNvwEApUOl&_nc_oc=AdnIep5ct4L3xQgzzz5F7GGeDdM3VN5mrqp73DSvtv5tQNb1wsQyb36xng4iKAjqe5c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_Afhg_GGO5rvJb5PlZiaLuaIsZ1pZUztFOSKtYdi4FZXthA&oe=692FA854)
- Navigate to the right-most menu and find the “Gameplay Tags” section
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652805_512510324620257_7535330597218424662_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=52DWEFSddSYQ7kNvwFToyGP&_nc_oc=AdnOaerLKrgMZ0FZdYtLHrZ9cdWhTr-iQEqjjP9bZBzsS1UzLMjpiIibJdvgrXcfuKM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_Afga1zNoEeK5IvHpQvIlMTlA1UgE0dOnXV7Rbbo1krfmwQ&oe=692FC50C)
- Select the “+” symbol next to the search bar
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533361_512510337953589_5428023551380485005_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=FeMMhCg_tegQ7kNvwFwQekQ&_nc_oc=AdmXpfy0fsEwDw28MpnV8FEW3jSZJ6dkh4cCm4F0j5lsgUUIv3PlZfJUrsW8hr2OsAU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_AfjOTnB5hUfyZSW3u3-Z1Kaopq5selXyIIxRYi1CTtRhHg&oe=692FAA28)
- Enter tag name into field and press enter
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698786_512510327953590_7203122234308935135_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=hsyPBghsTdQQ7kNvwEv_R0t&_nc_oc=AdkFu_iQqndv2wVEaqp1nuedBNcT103-WsEQeUnAjDviYjYYUYltgHo0PH_rV1uTwyw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_AfhGHjvEavNd_y-cOTp7_KRDdlpkGNQD2DCTcRAY5nQcUA&oe=692FCCAC)
- The tag will now appear under the object’s tags
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915412_512510331286923_4938518147116670862_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=5Zh-OKH6rB0Q7kNvwEEhjQx&_nc_oc=AdmRARdN7I60VNwkSs3A2O8fNuy0VzqfyQWjzuwwWYTwKqZaqtgTLVwfbU4eLCAEVKE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_Afj8jCr18094RRaVaooXV2Z4c6eQUC-pAOm4Si0qeB0KsA&oe=692FA7F2)

**Remove a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to remove and click on the “-” icon
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452533360_512510341286922_8800632251859838755_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Sa8w6rjZNuEQ7kNvwHkNjE-&_nc_oc=AdkJt_VYBF9Y1XrnPjcQ16c7sV_rx5NPKuclL_eH8e_6gxdpolqTLY4qqvNudC5ieN8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_AfhEr089U2EUphqceg_TAajAoH_aEPHpmmK8PvC_ptgyDw&oe=692FCD22)
- The tag will be removed from the object’s tags

**Modify a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to modify and click on the pencil icon
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452704028_512510334620256_4085579888356380485_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=OaYUOyFDP6IQ7kNvwFH3iOM&_nc_oc=Adm35L63lQq60jvVpb9IKV9B-s0NTGQL8ojy6N-DS1KpesOY9vnITzuodSQywOpnAYs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_AfhQ4Ut-8VOVJboKPzLqElRpghlmCdtZAEN4QY1NqZph0w&oe=692FAEFE)
- Enter the new tag name or modifications
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001282_512510314620258_5253799186195480687_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=7hkjFmmmLxUQ7kNvwGGfGp_&_nc_oc=Adlrmv1NQE9upwK-vZkfZjHLamv0kV06FN6PlugX3g2Dqjz4gFf43Va8JAEq0jtU4dY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_Afgp6cXDMq66dhzQKHMeQS65Hz0j3ZPLXiaUvDRhL3Xrrw&oe=692FAC8B)
- Click enter and the tag will update

## Tag Editing in VR

Adding, removing, and modifying tags in VR is a similar process to that of Desktop Editor. The following video shows where to find tags (under Attributes in a game object’s menu) and how to remove, add, and modify them.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453850100_962346978998093_3059839621993216811_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=DsjqMR4XiEkQ7kNvwESJEGU&_nc_oc=AdkmGPQv84f7-3zgVwRZZ2nYGxHxaXmFE3Qmh32dG8WE564O1lYKsCoL-NylAMnWz7Y&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_AfiOcjXJ8H0AbkjB2bKmbhVW5URXWtgDEyFT4ptveg_mbA&oe=691B2763)

## Tag Filtering in Desktop Editor

In the “Hierarchy” menu of Desktop Editor, you’re able to filter entities by their associated tags. To do so, click on the filter icon and select the appropriate tag and watch the list re-populate with only the entities using that tag.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652242_512510271286929_4441725871151863114_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=AD2l90FmeRAQ7kNvwExsQNu&_nc_oc=AdnrQGdu6u8NLE56rx6vhjtFmTjpuk6fP0vTB3n_VjujxkCyQ2aryBJ_e3XyCsVr5bk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JMSgTin-Cyv58yquFsduOQ&oh=00_AfhdvN4jWdy42pi7BMGH2wRsAS_W40P3aUOjvVaEG4GeKw&oe=692F977B)

## Known Issues

* Due to limitations on world builder that do not allow for collection types on Entity fields, tags are stored as a JSON serialized string. To counteract the performance implications of serialization, we’ve introduced a service that caches tags in a readily available set to perform any matching operation on an Entity’s tags.