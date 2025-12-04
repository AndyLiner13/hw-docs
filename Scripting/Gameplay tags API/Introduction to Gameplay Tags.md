Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/gameplay-tags-api/introduction-to-gameplay-tags

# Introduction to Gameplay Tags

Gameplay Tags are user-defined labels given to gameplay objects. These labels allow you to define sets of objects e.g., player, respawn, and enemy to identify and manipulate using scripts. This new tag type expands on the current functionality of tags - removing existing pain points - and aligns more closely with industry standards. To learn more about possible use-cases for tags and understand how tags are used in game development, visit the [Unity](https://docs.unity3d.com/Manual/Tags.html) and [Unreal](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/Tags/) documentation on tags. With this update, your entities will automatically migrate to the new field type: “gameplayTags” and be ready for use in scripts.

Gameplay Tags allow you to:

* Assign multiple tags to a single entity (up to 5 tags with a max of 20 characters per tag)
* Manipulate tags using TypeScript e.g. add, remove, set, and compare
* Search with Typescript using AND|OR to find entities with specific tags or sets of tags on a “World” level
* Assign tags to triggers and raycasts
* Filter entities by tags in Desktop Editor

For more information on the Gameplay Tags API and to see example code, see the [API reference doc](/hw-mcp-tools/documentation/hw-docs/Scripting/Gameplay%20tags%20API/Modify%20and%20Retrieve%20Entity%20Tags.md).

## Using Gameplay Tags in Desktop Editor and VR

Since this feature involves multiple moving parts, below are a few different scenarios for modifying and manipulating gameplay tags in Desktop Editor and Build Mode in Meta Horizon Worlds.

To quickly navigate to a specific editing workflow, use the following links:

* [Tag Editing in Desktop](/hw-mcp-tools/documentation/hw-docs/Scripting/Gameplay%20tags%20API/Introduction%20to%20Gameplay%20Tags.md#tag-editing-in-desktop-editor)
* [Tag Editing in VR](/hw-mcp-tools/documentation/hw-docs/Scripting/Gameplay%20tags%20API/Introduction%20to%20Gameplay%20Tags.md#tag-editing-in-vr)
* [Tag Filtering](/hw-mcp-tools/documentation/hw-docs/Scripting/Gameplay%20tags%20API/Introduction%20to%20Gameplay%20Tags.md) (Desktop#tag-filtering-in-desktop-editor)

## Tag Editing in Desktop Editor

Using Desktop Editor, you can search for, add, remove, and modify gameplay tags.

**Search for a tag**

- Navigate to the right-most menu and find the “Gameplay Tags” section
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512510297953593_3713360108182145117_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=AGUk3n4tIPgQ7kNvwGYFebT&_nc_oc=AdmDAhWDz9U4aIpQ2m4W3BOl71UKrUgkqR5nfiEA3vQaCFPZ-UQucNdBsRTnpl9O95Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_AfnyTm5bvfcfZvyPkzCh-jiELDtXeYMU9hJYlYa3WH4n8g&oe=694BEDF0)
- Enter the keyword in the search bar and press enter
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452531950_512510307953592_5435334402365433075_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=ptFjzVxK5eAQ7kNvwG-RVxX&_nc_oc=AdlXJ5tZFv9BvQQ2yunwqnz9ehWUVtAOUHoMHtege9h94tO2I8UmUwa_r5x4FzN1wPE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_AflGfLkKXSy1E5EhSY4MWED2N5ct97Q_2XypGiCB-rlgBw&oe=694BE801)
- Any entities with this tag should appear

**Add a tag**

- Select the object
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452932800_512510317953591_7736172710593851318_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=p-NMUSyOupoQ7kNvwE3olQm&_nc_oc=Adlrz9a5d5Su-jcuu1ZGAMuvClHoPrbDNVIQwO2xyj1Wm49gtltFqMQ3Y6ItrTUPuUM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_AfnsZWarFB4W3-S5SX6XNdwA26Wyttb47laNCYVN9kB1rw&oe=694BC854)
- Navigate to the right-most menu and find the “Gameplay Tags” section
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652805_512510324620257_7535330597218424662_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=RryYvWh-_l0Q7kNvwFkFSaT&_nc_oc=AdnHnyB4LLvYlJB0LcUHv_zzucvoEWECUOD7EpmmoRtzsS8lod4PDBsFQAVsUFRNqQ4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_Afl8kMZlC9BD7C0UgP79yALi5b5aZ0ScuevJek-F9NnZjg&oe=694BE50C)
- Select the “+” symbol next to the search bar
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533361_512510337953589_5428023551380485005_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=M7Au7Rt8q9AQ7kNvwEOQ5o6&_nc_oc=AdmbTEIVGI2T38dgeJnxf52UTl05qyUae_iiRD3clKSfQS4VEWAA-Kvor26vSgt7LyI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_AflXYcCdGevWiqdZCHhRiwYKrVOdidDuuaa_m__PlnWFOw&oe=694BCA28)
- Enter tag name into field and press enter
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698786_512510327953590_7203122234308935135_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=D-pJbdME6A8Q7kNvwECwiLj&_nc_oc=AdmbNfn-dLWwNV8qEbEYISlpsPM6lvMDPyEcGfAQjOkgYY-XhoVZpPThtstdOAyS8PM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_Afl4Jg3CyQNjtqCB4lMR8WVjiDt65JuYkWb-Em7J3mCybw&oe=694BECAC)
- The tag will now appear under the object’s tags
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915412_512510331286923_4938518147116670862_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ObQV5jdHDTMQ7kNvwHtXbxU&_nc_oc=Adn9moLvxJq9usV0GgeWvClBc1SaaU__0XR6wp8X1Q-IZ-lYFWJr20yeAnCayEMcEVE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_Afm3hXKT-cyqCncQbC0ZQ15dD5ikPHQtA-1c12LXnh373Q&oe=694BC7F2)

**Remove a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to remove and click on the “-” icon
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452533360_512510341286922_8800632251859838755_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=I5P_mt8nfGkQ7kNvwGW7sXO&_nc_oc=Adk1pKQBjy3QPK2bxeW0-8pypx0cqFJVofewgqLp6xSpsKh-KPBCrFp9RGPoggZ0XCo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_Afl4S5Eo6UpgZtVtqUx5pxfEGlgDKq1Dx_9TlVlE19n9Uw&oe=694BED22)
- The tag will be removed from the object’s tags

**Modify a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to modify and click on the pencil icon
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452704028_512510334620256_4085579888356380485_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=pBd6Kej68OcQ7kNvwEST0D1&_nc_oc=AdkuwEeYgJa1bwDi8Fofg8acHKSa__DaNtAFIxWhRrvbVJudBtONYXgZI0Yh74ZxFCw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_Aflq8h3Pv2KvRBjmYzRSBnnyj4Xr4vDO2TemBWxWiUapkQ&oe=694BCEFE)
- Enter the new tag name or modifications
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001282_512510314620258_5253799186195480687_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=g4dNMtRafkIQ7kNvwG8kr44&_nc_oc=AdnRR0dEFQECuD1ANwWcUxgWtaOfr9ne9D1-qydvhmihH1ZrlpIcQ1_W-w3I5E0_Odk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_Afkzu9XO6e6QVTiGknksWP79HisheHOJfySRx5ShQx9GVA&oe=694BCC8B)
- Click enter and the tag will update

## Tag Editing in VR

Adding, removing, and modifying tags in VR is a similar process to that of Desktop Editor. The following video shows where to find tags (under Attributes in a game object’s menu) and how to remove, add, and modify them.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453850100_962346978998093_3059839621993216811_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=dmQhE714ewgQ7kNvwFFET8r&_nc_oc=Admgdr_JtRaEzc6R65eICVBWgiGBveKvWbj66Q0mJH4oO_x_js6c1alfn9vOvq19UC4&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_AfmpL3xcg1N2WJ66x42PYrMN4h6BbQSMd8fB8tzcTUi-bA&oe=69374763)

## Tag Filtering in Desktop Editor

In the “Hierarchy” menu of Desktop Editor, you’re able to filter entities by their associated tags. To do so, click on the filter icon and select the appropriate tag and watch the list re-populate with only the entities using that tag.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652242_512510271286929_4441725871151863114_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=-dIl74BX35AQ7kNvwHDJ57w&_nc_oc=AdnXOLDt-6FwJthdfPkVE2O1n1M_QKun0_YAXg3W89_orqaA1tBjWAyThjfZO5RpUlM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Qn-j_zXNu2niudKkh6aT5A&oh=00_Aflw6cabSg8E2VcCe8389BlD8yht1OxL4jpCMVafPIVj1g&oe=694BB77B)

## Known Issues

* Due to limitations on world builder that do not allow for collection types on Entity fields, tags are stored as a JSON serialized string. To counteract the performance implications of serialization, we’ve introduced a service that caches tags in a readily available set to perform any matching operation on an Entity’s tags.