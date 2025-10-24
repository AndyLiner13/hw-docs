# Introduction to Gameplay Tags

 Gameplay Tags are user-defined labels given to gameplay objects. These labels
allow you to define sets of objects e.g., player, respawn, and enemy to identify
and manipulate using scripts. This new tag type expands on the current
functionality of tags - removing existing pain points - and aligns more closely with
industry standards. To learn more about possible use-cases for tags and understand
how tags are used in game development, visit the [Unity](https://docs.unity3d.com/Manual/Tags.html) and [Unreal](https://docs.unrealengine.com/4.26/en-US/ProgrammingAndScripting/Tags/) documentation on tags. With this update, your entities will automatically
migrate to the new field type: “gameplayTags” and be ready for use in scripts. Gameplay Tags allow you to:
• Assign multiple tags to a single entity (up to 5 tags with a max of 20
characters per tag)
• Manipulate tags using TypeScript e.g. add, remove, set, and compare
• Search with Typescript using AND|OR to find entities with specific tags or sets
of tags on a “World” level
• Assign tags to triggers and raycasts
• Filter entities by tags in Desktop Editor

 For more information on the Gameplay Tags API and to see example code, see the [API reference doc](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/gameplay-tags-api/modify-gameplay-tags-on-entity-and-get-entities-with-tags/).  
## Using Gameplay Tags in Desktop Editor and VR

 Since this feature involves multiple moving parts, below are a few different
scenarios for modifying and manipulating gameplay tags in Desktop Editor and Build
Mode in Meta Horizon Worlds. To quickly navigate to a specific editing workflow, use the following links:
• Tag Editing in Desktop
• Tag Editing in VR
• Tag Filtering (Desktop#tag-filtering-in-desktop-editor)

  
### Tag Editing in Desktop Editor

 Using Desktop Editor, you can search for, add, remove, and modify gameplay tags. Search for a tag
1.  Navigate to the right-most menu and find the “Gameplay Tags” section ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512510297953593_3713360108182145117_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=UcPNe5BnE54Q7kNvwHqc3oQ&_nc_oc=AdkJeWUh9cKNEVj158z7B6_9nqruQAfcL9xRIK1YtRUxA1BtRa-H-WyXOh7_8Ewg61k&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_Afd8qm5...
2.  Enter the keyword in the search bar and press enter ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452531950_512510307953592_5435334402365433075_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=cyruRAztgkwQ7kNvwE6L0zi&_nc_oc=Adlsa6d13Bc1nfu81pBm_2EB42Y6jMjYB8sZhGBpXQ2myUOV4eDylVANHEuvMIzZnU8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_AfcZeFNEKe-BEJ73...
3.  Any entities with this tag should appear

 Add a tag
1.  Select the object ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452932800_512510317953591_7736172710593851318_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=MgGrgpO66gcQ7kNvwGXulib&_nc_oc=AdnZEsoiMNMM-4N9ejNEqW6a0FXR3zaZW-bCJaIbpAxaWUB2NPloGTj_Cxm3QtaZri4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_Affn_gifW78khdOhYAiHFccKvzLUi6l4K...
2.  Navigate to the right-most menu and find the “Gameplay Tags” section ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652805_512510324620257_7535330597218424662_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=avjmp7HzQXwQ7kNvwEjrKwm&_nc_oc=AdlaxVjbOih7Ffdj01SKSBBctPX3AtsHf6aOtxfBOECnNirm7ABpYFMYGkyvYiD8HE8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_AfcY2-jR7c0...
3.  Select the “+” symbol next to the search bar ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533361_512510337953589_5428023551380485005_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=xvFp6xcMvGAQ7kNvwFUBqiP&_nc_oc=AdnmSHdTUf8NzNNjrHSf07y0e2izPqLIjXwmZU2CTEoIOKq--41CUm4m6pOhwO0ocrE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_AffYI0OjuEllBOkl...
4.  Enter tag name into field and press enter ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698786_512510327953590_7203122234308935135_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=d4XQmAhpbL8Q7kNvwFMYc8d&_nc_oc=Adl34ygmHPdnfY2x3E7ZqNxEC-Q2Y48rm3U-7h-2yo-76zDEyP9YjIMWU14qmSNpnMo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_AfczbtjcyuVgPTLPYs...
5.  The tag will now appear under the object’s tags ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915412_512510331286923_4938518147116670862_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=nHkyzlC82KgQ7kNvwHBcAnh&_nc_oc=Adm6xLet_TGjMnsbIno0e_nu3R3QDWfj0423Cug3_0Jgf8WghHb3tvmuoPldInv6MQc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_AffHgkibgaqDAqlwLNBl...

 Remove a tag Repeat steps 1 and 2 from “Add a tag”
1.  Navigate to the desired tag to remove and click on the “-” icon ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452533360_512510341286922_8800632251859838755_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=gPO9-A2NVxQQ7kNvwGMe9tX&_nc_oc=AdncL41eRbVn_N_2pFJu2B4eQNuysCllFQshHSaZudtd2Glqi6MhNwu9kk-hA5v9mkM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_AfcVuEiH0...

2.  The tag will be removed from the object’s tags

 Modify a tag Repeat steps 1 and 2 from “Add a tag”
1.  Navigate to the desired tag to modify and click on the pencil icon ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452704028_512510334620256_4085579888356380485_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=IoMsOwImtXwQ7kNvwHOfTNk&_nc_oc=Adlpb9jFT7JkWRx7wMmuKO3WUBwnw7zuhJIhtuxQs-QkySrvPGOBo_PIZOsAq-cj9Yk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_AfclU4pa9u7_Xj...
2.  Enter the new tag name or modifications ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001282_512510314620258_5253799186195480687_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=YDcqDNmIDU0Q7kNvwGvecYL&_nc_oc=Adn9InyIdStjJ7sb0P0-Wk9Trt71L7m5y-_louhsXL-pnnzWVcMeNRtO2S5pkfa83xA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_AfdTJ-EFqCQ6LUVMQisuPl2T40Fi...
3.  Click enter and the tag will update
  
### Tag Editing in VR

 Adding, removing, and modifying tags in VR is a similar process to that of
Desktop Editor. The following video shows where to find tags (under Attributes in a
game object’s menu) and how to remove, add, and modify them.               
### Tag Filtering in Desktop Editor

 In the “Hierarchy” menu of Desktop Editor, you’re able to filter entities by
their associated tags. To do so, click on the filter icon and select the
appropriate tag and watch the list re-populate with only the entities using that tag. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652242_512510271286929_4441725871151863114_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=I_qZOZJMQo0Q7kNvwEKgiwy&_nc_oc=AdmvNfuJEaE9Eg083p1Yqoh9FL1m5fztHzk2d7mFQGUcNlnKZG1b7sP6fMDy8eXJuKQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=eC7ul_Rr_9OGOWTL2G0p-g&oh=00_AfcgPC...
  
## Known Issues


• Due to limitations on world builder that do not allow for collection types on
Entity fields, tags are stored as a JSON serialized string. To counteract the
performance implications of serialization, we’ve introduced a service that caches
tags in a readily available set to perform any matching operation on an Entity’s
tags.

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
