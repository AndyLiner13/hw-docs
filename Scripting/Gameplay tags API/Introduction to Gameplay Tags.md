Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/gameplay-tags-api/introduction-to-gameplay-tags

# Introduction to Gameplay Tags

Gameplay Tags are user-defined labels given to gameplay objects. These labels allow you to define sets of objects e.g., player, respawn, and enemy to identify and manipulate using scripts. This new tag type expands on the current functionality of tags - removing existing pain points - and aligns more closely with industry standards. To learn more about possible use-cases for tags and understand how tags are used in game development, visit the [Unity](https://docs.unity3d.com/Manual/Tags.html) and [Unreal](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/Tags/) documentation on tags. With this update, your entities will automatically migrate to the new field type: “gameplayTags” and be ready for use in scripts.

Gameplay Tags allow you to:

* Assign multiple tags to a single entity (up to 5 tags with a max of 20 characters per tag)
* Manipulate tags using TypeScript e.g. add, remove, set, and compare
* Search with Typescript using AND|OR to find entities with specific tags or sets of tags on a “World” level
* Assign tags to triggers and raycasts
* Filter entities by tags in Desktop Editor

For more information on the Gameplay Tags API and to see example code, see the [API reference doc](Modify%20and%20Retrieve%20Entity%20Tags.md).

## Using Gameplay Tags in Desktop Editor and VR

Since this feature involves multiple moving parts, below are a few different scenarios for modifying and manipulating gameplay tags in Desktop Editor and Build Mode in Meta Horizon Worlds.

To quickly navigate to a specific editing workflow, use the following links:

* [Tag Editing in Desktop](Introduction%20to%20Gameplay%20Tags.md#tag-editing-in-desktop-editor)
* [Tag Editing in VR](Introduction%20to%20Gameplay%20Tags.md#tag-editing-in-vr)
* [Tag Filtering](Introduction%20to%20Gameplay%20Tags.md) (Desktop#tag-filtering-in-desktop-editor)

## Tag Editing in Desktop Editor

Using Desktop Editor, you can search for, add, remove, and modify gameplay tags.

**Search for a tag**

- Navigate to the right-most menu and find the “Gameplay Tags” section
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512510297953593_3713360108182145117_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=ylrvrygakrAQ7kNvwFklVsu&_nc_oc=AdlMiiIPJAMZZ2G2viJAkRX40Kjn0ZaC9UBjp9su5uQYpkWXiTuyZX8oJ-NCEW_xjfcUn4GOvshJJiI8Nxlk8-SV&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_Afk1627QEHKPgZxhEdnu_9AvYcp757UxvBE1SgmGHNvEsQ&oe=695598F0)
- Enter the keyword in the search bar and press enter
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452531950_512510307953592_5435334402365433075_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=igr21issxaoQ7kNvwHcxr1y&_nc_oc=AdmpVmf87IFqrJss5IYF0ZnAJ1TX8Ke3hFccH-hIq0KterskptbYbmjHtQctbvEXMSAbPgdVSeUH9zgpBsBgxP0Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_AflQsIwqdiTpU5ELXmqdQN4911BlI14gWOmS1TuJCLqzVg&oe=69559301)
- Any entities with this tag should appear

**Add a tag**

- Select the object
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452932800_512510317953591_7736172710593851318_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=dr_eLMUobLAQ7kNvwGX4e1C&_nc_oc=AdlRHXfTBTnfhxLvs0f4TNlyhWQ2Qgq0bY6YYrHFYhQIFIx2-eoN84BN43244-zARaFWGOk00_v0QeyM9pZjs88z&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_AfmraHIhs9Q7pNVf2mOahGXX78ETup1eU6CjN40DNjo_bA&oe=69557354)
- Navigate to the right-most menu and find the “Gameplay Tags” section
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652805_512510324620257_7535330597218424662_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=RogQKZ1H3_4Q7kNvwF9H0hC&_nc_oc=AdlhZZ1IC-frFhOBmYqCECePSS6j3gLW7uuoVO_eJLn8qpfRLkRcqguNdIONLH8aptnF9vq_khQQbu5B9WrHOmHG&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_AflLxJq09bECYtNl-wxs_QIZe6jfBwOCDjI9vDkRvZH1zA&oe=6955900C)
- Select the “+” symbol next to the search bar
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533361_512510337953589_5428023551380485005_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=6iPhxVgc51EQ7kNvwELIqrO&_nc_oc=AdlN4sxJ0MvUOQ98oW4fORjl8qnM76DY9BL1fpBZOEpthcEfcYLQrk3lEZGv1Ut76RN1V5VJRYln9dZX8UKC6cA8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_AfmGCfSVWEBAqR5eeUffXVDORy8WrW5HMUGUzkofNnjuNw&oe=69557528)
- Enter tag name into field and press enter
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698786_512510327953590_7203122234308935135_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=6RjG7W3tiLgQ7kNvwHMb4Ie&_nc_oc=AdlzkEp0PO43uxgTSMMGc2LUZAsRxLAtJaQlSTiZPrcRmIXkUiFMExE5dlP10sfdwD4UI2YN5VHOPAjGMQ-sLYbZ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_AfnJctHyKDw7L8vKbgaIDwT5F4RdKuW8Xo0UB9V55BDTyg&oe=695597AC)
- The tag will now appear under the object’s tags
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915412_512510331286923_4938518147116670862_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=C-xzGd5tKKAQ7kNvwFPh9Ml&_nc_oc=AdmFYoQ0TCr0nMBcM_3PNlLH4x5koZLwk9Bxtx0nHf54ZwYZPZPENWpv7lUi9fCIr-tdBAOkal-IkNm91pW5bbEg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_AflsxKcHlkCuTRxdMh-MF6L_u4ovrLGME9rkoJT8YokuEQ&oe=695572F2)

**Remove a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to remove and click on the “-” icon
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452533360_512510341286922_8800632251859838755_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=2JbrcqLTlEUQ7kNvwGiwLeS&_nc_oc=Adli8IZtruFUk5Z14miUS0CG4suBk-6vN8M0YjxEU8Y_mQjT6Ng-4CRqr35A1Am4Dt6ozeXzzCehiDzoVgz38WgW&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_AfmMRRq9RB2stgh--foKDGWI_DxVEJNp1wUzPJv5uQG-EA&oe=69559822)
- The tag will be removed from the object’s tags

**Modify a tag**

Repeat steps 1 and 2 from “Add a tag”

- Navigate to the desired tag to modify and click on the pencil icon
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452704028_512510334620256_4085579888356380485_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=nfsDFJm_fUQQ7kNvwFGx6Ue&_nc_oc=AdmsdtZDJIJ1csyal2JWT3_w2pwZ4aDhbF3owWjcjnEL-nH3CYPvoGV-oPxuJoJRVA2YUGhCLxiPrQcpyagEACGt&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_AfmBLrQAi6yp8W2U0zDG4ZpvDgj5tn8SsTrDcGNB2oiWsw&oe=695579FE)
- Enter the new tag name or modifications
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001282_512510314620258_5253799186195480687_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=IGL_L4ksgmUQ7kNvwGF3pub&_nc_oc=AdlKhZa-2ZdakPHLkGLc9_g--r73jqX7W_pwtDxMr4RqhlDH52awIPC3F1_-xgJSmfvMIJl5laeHehApu61Y0oNL&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_AflYQbEM10mi5Eug3AWHWuUcPMM3L-ZpheV9Hunw0W_peg&oe=6955778B)
- Click enter and the tag will update

## Tag Editing in VR

Adding, removing, and modifying tags in VR is a similar process to that of Desktop Editor. The following video shows where to find tags (under Attributes in a game object’s menu) and how to remove, add, and modify them.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453850100_962346978998093_3059839621993216811_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=1-TK9dPm86cQ7kNvwHjbYE5&_nc_oc=AdmuYeAI7MdALWUrh2eC378t2h0Rvc7KnZMt1Tc035DGIeDIvSecXgJyF22mGcdyKTq6JwLA99pT06MvMEbaOLYG&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_Afk6IDU43yMC4zrzYlNL6wOmqYEtwcZuDOrHnrwcTLtZtQ&oe=69412AA3)

## Tag Filtering in Desktop Editor

In the “Hierarchy” menu of Desktop Editor, you’re able to filter entities by their associated tags. To do so, click on the filter icon and select the appropriate tag and watch the list re-populate with only the entities using that tag.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652242_512510271286929_4441725871151863114_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=9liuXM6BCXAQ7kNvwGkWZMS&_nc_oc=Adnpr0MvOh1f-wWSaFZYHErj0dpKJu1IAju5lXT2OfkxPeXrCXjVLOHv_MMILpAspw5VLlhJhplQU8Q2Qx5apRRj&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=YXKZzAMW-YamIUTryRtjrQ&oh=00_Aflq58kYafQxuYjGqdog7ePcWiHPpYGCwhYwRahe3NygtQ&oe=69559ABB)

## Known Issues

* Due to limitations on world builder that do not allow for collection types on Entity fields, tags are stored as a JSON serialized string. To counteract the performance implications of serialization, we’ve introduced a service that caches tags in a readily available set to perform any matching operation on an Entity’s tags.