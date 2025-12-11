Source: https://developers.meta.com/horizon-worlds/release-notes/

# Release Notes

Wondering what's new with Meta Horizon worlds? Take a look at our release notes to learn about the latest new features and enhancements we've made to your Meta Horizon worlds experience.

---

# Meta Horizon v244 Release Notes

The v244 release contains the ability to generate 3D heatmap data for worlds and updates the the creative guidelines for world preview images in the Navigator UI ahead of its release, giving creators even more insight into their worlds. Read all about it below!

Read on for more details on Meta Horizon v244:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/594064815_1343173533689038_6483820331339147687_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=GAFdZQL3hR0Q7kNvwFK1Yd5&_nc_oc=AdmgQWxOlr-H34rUvV4Rg1pQcsyWyYbvcClaV415JDr3krrTaz99SWKb9fVEt4N3uW8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AflHaAgjxu6dRWMOz16a40hLTsewjuINi_brTFAq45qXjQ&oe=6954497C)

## Quality Of Life Improvements

* **[Developer Dashboard](https://horizon.meta.com/creator/worlds_all/) 3D Heatmaps**![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/594557540_1160677869468533_1078901159942852620_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=rZAJiyadyUwQ7kNvwGYuQDc&_nc_oc=Admofu0I6mcouxMgnQsztgySI4u4R_P8X73N0V3TIWCPWrFls-MShYFFS2IPK40TarA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AfnsBi8wyS8X4KcTMisCCwWbUBXHHVHpPddXBoaJeLyznQ&oe=69544B98)

+ The camera will now persist between refreshes, allowing creators to compare metrics with the same camera angles viewing their data.
+ When filtering data using the Data Settings: Percentile Filter, the heatmap will now recolor the data-cubes based on what is visible. This allows better viewing of high value areas of a world.

* **Creative Guidelines for World Preview Images in Navigator**

+ During the developer keynote at Connect, you may have seen our redesigned UI called Navigator – a personalized hub that makes navigating the metaverse intuitive and seamless.
+ This updated navigation will be coming soon, so to prepare, we’ve updated our [creative guidelines to include world preview images](Save,%20optimize,%20and%20publish/Worlds%20Asset%20Design%20Guidelines.md), which will help attract users and communicate what makes your world unique within Navigator.
+ While adding preview images is optional at this time, we highly recommend adding them soon and at least reviewing these new guidelines to ensure you have high-quality images.

---

# Meta Horizon v243 Release Notes

The v243 release contains the ability to generate voices for AI NPCs, as well as quality of life improvements for Noesis and a bunch of bug fixes, making building worlds easier and smoother than ever before. Read all about it below!

Read on for more details on Meta Horizon v243:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/591737655_1490479825372289_745779225719514255_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=qfZsHSIZCAQQ7kNvwH-funn&_nc_oc=AdkdRliM_-42zpdhNibmCNUaX3ZAXeNMkJPScOGn71GqIp-gAiM_cCKvGvugzen_7cc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AfksSEyRM_7vgJ38ji4Kxxuzf--IO7Etr-PAeA-UpcHpZw&oe=69542189)

## New Features

* **NPC Voices update:** When creating an AI NPC in the desktop editor you can now generate a voice for using AI. For more information, check the documentation [here](Desktop%20editor/NPCs/NPC%20Conversation/AI%20Speech%20NPCs.md#voice-and-speech).

## Quality Of Life Improvements

* Noesis Updates.

+ Noesis Gizmo API now exposes two most requested methods:

- `setLocalEntityVisibility(visible: boolean):` Show/hide UI locally for the client
- `changePage(xamlFile: NoesisAssetResource, dataContext?: IUiViewModelObject):` Dynamically switch XAML pages and optionally set a new data context

* **Command Parameter Support:** Developers can now utilize the CommandParameter attribute on XAML UI elements to pass a custom parameter directly to the corresponding TypeScript command handler
* **MouseMove Event Support:** UI elements can now respond to mouse movement using the `MouseMove` event
* **Image Resource Bindings:** Bind image assets to UI Elements in XAML with `{Binding Path=image}` from TypeScript
* **Two-Way Data Binding:** Use `Mode=TwoWay` in XAML for live sync between UI and TypeScript logic
* Support has been added for `GlobalResources.xaml`, which is heavily used by Noesis Studio. This feature enables seamless code sharing across various XAML pages
* **Animation Complete Trigger:** Add triggers for Storyboard completion using the `Storyboard Completed Trigger` and `InvokeCommandAction`

## Bug Fixes

* Fixed the issue with Unity Asset Bundles failing to load textures.
* Fixed an issue where the remote player's avatar is invisible while their player positions and colliders are correct.
* Fixed an issue with the Style2 avatar not refreshing after making changes from the web editor.
* Fixed an issue with being unable to enter the edit mode of a world, resulting in getting kicked out with an error message during loading.
* Fixed an issue with the avatar staying in the sitting pose when trying to move or stand up from a seat on XS platforms.
* Fixed an issue with the matchmaking player limit where only 9 out of 10 players could join worlds, preventing full participation.
* Fixed an issue where Rocky (the AI pet enthusiast NPC from the Pets Park pre-release) had a disembodied voice which could only be heard in certain locations, not attached to his mesh.
* Added the Custom UI Bindings Garbage Collection feature, reducing memory leaks caused by lack of garbage collection for CustomUI bindings.

---

# Meta Horizon v241 Release Notes

The new toolbar is now live as part of the v241 release, making building worlds easier and more intuitive for all creators. We look forward to hearing your feedback! This update also features functionality to record your world (MHCP only), customizable names and visibility for leaderboards and tiering for digital items (MHCP only), and updates to NoesisUI in the desktop editor. Read all about it below!

Read on for more details on Meta Horizon v241:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/581957643_1559902765206307_753059272481803957_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=lty2ns9buW8Q7kNvwFHVrNI&_nc_oc=Adkcft6AADCgCFO8TlWcvR_G9qFd8EccDIdmM9J6HaLv8LsVQe8jHgwLt8XEUaHWkAA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AflqXA3txZl5qkyOUBTN04uZOQkFA8IrckaavXn2Dv_YrQ&oe=69543154)

## New Features

* **Record your world (MHCP only):** We have begun to rollout access to a new tool in the desktop editor that lets you capture and export footage from different points of views, including player POV or by placing a camera anywhere you want in your world. You can even control what is included in your recording, like global audio, name tags, your avatar and audio, and even UI elements. At this time, the feature is only available to a subset of MHCP users, but we plan to continue expanding access to more world builders over time. To learn more, read the documentation [here](Save,%20optimize,%20and%20publish/Record%20world%20videos.md).
* **Customizable External Names and Visibility for Leaderboards:** Creators can now set a descriptive external name for each leaderboard and choose whether it is visible outside their world. When enabled, leaderboards and their names may appear in Facebook, Instagram and the Horizon mobile app, making it easier for users to understand what each leaderboard represents. The specific surfaces where leaderboards are shown will be determined by Meta. This update gives creators more control and improves clarity for users.
* **Tiering for Digital Items (MHCP Only):** Creator made avatar clothing will now be tiered as Common, Premium, Elite, and Legendary to help show the value of items to users. To learn more read the documentation [here](Avatars/Digital%20Item%20Tiering.md).
* **NoesisUI**: Creators can now specify a parameter for Command callback.

## Bug Fixes

* Fixed disabling the "Hide UI elements" setting in Player Mode freezing the game.
* Fixed the 'Comfort Rating' dropdown being unresponsive when publishing a world.
* Fixed an issue with asset pool gizmo.
* Fixed an issue with asset spawning.
* Fixed an issue with Unity Asset Bundles failing to load textures.

---

# Meta Horizon v240 Release Notes

The Horizon desktop editor toolbar has been updated! The updated toolbar improves the categorization of features including build options, systems options, preview options, scripts, and GenAI functions. Additionally, the NPC feature has been updated with an expanded catalogue of voices to add to your created NPC characters.

Read on for more details on Meta Horizon v240:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/577543412_1564427288239998_969561287266112495_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=X36at5ysu5cQ7kNvwHIwva0&_nc_oc=AdnwirJ-nUIN3iWIrraeI71l8hv9QNGzj5qhV8nmuyu0Ch-hnZxwOKufIxoZDsG_3Vs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AfmoXjWsZcV6j4KpEOUE8W-PPLxIrw5thxBSn568WiWd2Q&oe=69543B8A)

## New Features

* Horizon desktop editor toolbar updated with updated categorization for build options and features in the desktop editor. Check the updated [Creator Tools](Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Creator%20Tools.md) page for more information.
* We’ve updated the NPC voice process with an expanded catalogue of voices. You can now assign enhanced voices from a curated set of voices during the NPC creation process. Learn more [here](Desktop%20editor/NPCs/NPC%20Conversation/AI%20Speech%20NPCs.md#voice-and-speech).

## Bug Fixes

* Fixed invite-only group travel conflict when multiple invite-only travel are created at the same time.
* Fixed setWhoCanTrigger bug when used inside onPlayerEnterTrigger.
* Fixed several Custom UI issues including server-side rendering problems, failures to load to due to "event" from async, and an Intermittent Ownership Transfer failure causing missing Custom UI or Logic.
* Fixed a bug causing the player entity to be missing during PlayerJoin/PlayerLeave.

---

# Meta Horizon v239 Release Notes

**"Mobile Innovation" Competition (MHCP Only)**: We're excited to announce our grand finale competition for 2025, Mobile Innovation! This competition finale for 2025 challenges creators to design and build experiences that redefine what's possible on mobile devices within Horizon Worlds. Whether it's optimizing for touch, designing out-of-the-box mobile-first interactions, or leveraging the unique capabilities of smartphones, this theme is all about pushing the boundaries of mobile creativity and capabilities on Meta Horizon.
Visit the [competition site](https://mhcp-mobile-innovation.devpost.com/) to learn more about the competition, how we'll judge, and what it will take for you to be eligible to win.

Additionally, in v239 we're adding NoesisUI to the Horizon desktop editor! NoesisUI empowers users to build more robust and performant 2D UIs for their world.

Read on for more details on Meta Horizon v239:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/571349119_1511264456793529_3675016343678229996_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=AzAbBBoJKegQ7kNvwHBqxbO&_nc_oc=Adnfq_o3GgNUu9esTgU2YC6PbWiGstbldcTChMaxNymmXv2hoqxZeF_KYxbvla5o54E&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AfmVzIxIE3tvpuYFEqogNgD4fm95j8fNkIUfksCJ2WYcgw&oe=69543DFB)

## New Features

* **NoesisUI for Desktop Editor:** NoesisUI is a new 2D UI solution we have added to Horizon editor so creators can build more compelling, creative and performant 2D UI panels. When using Noesis with the desktop editor, users can build their UI panels in Noesis Studio and import them into the desktop editor. Check the documentation here for information on [creating your Noesis panels](Desktop%20editor/NoesisUI/Create%20a%20Noesis%20UI%20Panel.md), [configuring your NoesisUI panel](Desktop%20editor/NoesisUI/Customizing%20Noesis%20UI%20Behavior.md), [setting up animations for your panels](Desktop%20editor/NoesisUI/Noesis%20UI%20Animations.md), [performance considerations](Desktop%20editor/NoesisUI/Noesis%20UI%20Performance%20Considerations.md), and [fonts](Desktop%20editor/NoesisUI/Noesis%20UI%20Fonts%20Usage.md).
* **NoesisUI Tutorial World:** A new [tutorial world](Tutorials/Noesis%20UI%20tutorial%20world/Module%201%20-%20Setup.md) is also available that demonstrates the NoesisUI integration in the desktop editor and provides examples for implementing NoesisUI into your world. Check out the NoesisUI tutorial world here.
* **Player Locomotion API:** The player class in TypeScript now includes locomotion functions previously exclusive to NpcPlayer, enabling local player movement, pathfinding, jumping, and rotation. Great for 'tap to move' gameplay styles, see the API docs and tutorial for details.

## Bug Fixes

* Fixed a GPU crash that could occur when switching templates.
* Follow Camera: Vertical Offset can now be set up from the spawn point.
* The SharingAPI will now correctly pass the shareID variable instead of null.

---

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/571165114_1508250603632339_346638681177823591_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=1riAExIANQgQ7kNvwFKpJsd&_nc_oc=AdnWfACawpzdF_NjDF0gj8f7HAiZk2k-8ALMzqvpoxL268RPoweUFLk7DIft_iS3L1o&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AfnKRyhaitCXN7cRdgBWH0d4hJqNPLgZy9ikzIpxdPYHIQ&oe=695436EF)

# Meta Horizon v238 Release Notes

Read on for more details on Meta Horizon v238:

## Bug Fixes

* "Disable physics while grabbed" option is now enabled by default for new grabbable objects.

---

# Meta Horizon v237 Release Notes

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/566225250_4350745975155448_9066964261512399740_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=eyv4vaCEhBoQ7kNvwGhhqqb&_nc_oc=AdlCzK_wOnaxlm73WjoEvy_sLHDBFC_Lx1QljaPsWgO3LZLhg7yDFqe__2bUVA-uQ6s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_Aflvf8qGinDOlZFrvbHdodr5C0u0-C546XDTKeuxP540rg&oe=69544BAD)

Read on for more details on Meta Horizon v237

## New Features

* **Daily Claims Gizmo (MHCP Only):**
  Creators can now boost player engagement by adding the Daily Claims Gizmo to their worlds. This feature allows you to reward players with in-world items that can be claimed once per day, encouraging consistent visits and interaction. Players simply log in after 1:00 AM UTC and interact with the gizmo to claim their daily reward. Progress is preserved if a day is missed, so players can continue where they left off. The gizmo supports customizable reward sequences, UI themes, and auto-repeat cycles.
  Learn more about setting up and using the Daily Rewards Gizmo [here.](https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/daily-claims-gizmo)

## Bug Fixes

* Fixed truncation issue with **"Other items in this world"** text on mobile avatar item product description pages.
* Fixed a bug where users could experience a "Problem with connecting to the world" error when joining a new world.
* Fixed a bug where certain system drop down menus did not function correctly, blocking creators on creating or editing menu items under **Systems** such as **Commerce, Navigations** and more.
* Fixed a bug where users may crash when loading into worlds via the mobile app.
* Fixed a bug where mobile platform buttons may disappear when exiting and re-entering worlds.

---

# Meta Horizon v236 Release Notes

Read on for more details on Meta Horizon v236

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/559385672_2627241590960730_8754128353591310825_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=mC-zv4UwQKMQ7kNvwGEMAyN&_nc_oc=Adlg_PEXuOirMNH3YGja6J16u8EliHWdOTMpLBj-ayuNGvomtyWMsRNC7krA1bzCl3k&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_Afnd9Vzmk9x2538Eh9I13r0s2AkoTlKEjhoB4hCmM_qDBA&oe=69542045)

## New Features

* **Social Following API/Asset Template:**
  Creators can now showcase a curated list of Instagram and Horizon profiles in their world using the Social Following Asset Template, or the new `showProfilesToFollow` API. When users click the Social Following Asset or the `showProfilesToFollow` API is called, a dedicated page opens where users can browse and choose which Instagram or Horizon profiles to follow—making it easier for users to connect and stay up to date with their favourite creators. Learn more [here](Gizmos/Social%20Following%20for%20Instagram%20and%20Horizon.md).
* **Remixable Worlds:**
  Remixable Worlds is a feature, now available to all, that allows creators to make their world(s) cloneable by other creators to build on top of. Available worlds for creators to remix can be found on the Creation Home page of the Horizon editor in the *Worlds to Remix* section. Creators can make their worlds remixable in the Publish window within the editor. Learn more about this feature [here](Save,%20optimize,%20and%20publish/Horizon%20Remix%20Worlds.md).

## Quality Of Life Improvements

* **"Disable physics while grabbed"** option is enabled by default for new grabbable objects.
* Added filtering to the creation of NPCs to avoid any terms of service violations during NPC character creation rather than after.
* Creators can now iterate on their local files and refresh their assets by using the right-click menu without needing to go through all the import modal and file selection processes.
* Creators will now have one choice for Mesh Generation. This new update enhances the current Mesh Generation model. Learn more [here.](Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Mesh%20Generation%20Tool.md)

## Bug Fixes

* Fixed a bug where the **"Combine Selection"** option when combining assets in the hierarchy would not show or work as intended.
* Fixed a bug where NPC nametags could be shuffled and assigned to the incorrect NPCs.
* Fixed a bug where NPCs would all follow the same locomotion path, regardless of creator intent.

---

# Meta Horizon v235 Release Notes

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/556889063_855146954342326_531033109757397357_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=3az1G5VNLIAQ7kNvwEa8ypc&_nc_oc=AdkhNBNb2POv1ebUmA31Y64STQLbKQ-Uxxnc5G1-dj-CbSmYZaCdYPl8m0W_Zy2uJXw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AfkrAGNzsJW35QToUN9oIHSfTI1q-zxbXRcVF-s3HRQ-1Q&oe=695431BD)

## New Features

* **New Template World:** We are launching a new template world to help creators speed up their development. Find this when opening the editor in the creation home under the Template header.

+ **AI Conversation Template:** This template provides step-by-step instructions for setting up NPCs, customizing their personalities, and configuring how they respond to player actions and game events. Learn more about this template  [here](Tutorials/AI%20Conversation%20tutorial/Module%201%20-%20Introduction.md).

## Quality Of Life Improvements

* After selecting an object in the hierarchy and combining that selection with another entity, Ctrl+Z will now undo that combination if desired.
* 3D model implementation is now aligned with asset template implementations to fix lighting inconsistencies between models when spawning.
* Added NPC avatar turn animations for smaller turn radius' to reduce NPC "feet sliding".
* The player variable three-dot menu button is now hidden if there are no actions to show.

## Bug Fixes

* Fixed a bug where saved asset templates in the asset library would show gizmos in thumbnails incorrectly.
* Fixed a bug where applying a texture to an imported animated model caused a duplicate model to load.
* Fixed a bug when manually uncombining a combined asset, its position would become offset and change.
* Fixed a bug when combining texturized shapes or assets that would cause those assets to lose their original assigned texture.
* Fixed a bug where the mouse cursor would disappear after exiting preview mode in the editor.
* Fixed an issue where selecting local mode CustomUI in preview mode resulted in the UI disappearing.
* Fixed a bug where grab anchors on objects would not be visible in the editor.
* Fixed a bug with avatar bounding box height that was causing incorrect and unintended collisions.
* Fixed a bug where the World Shop and Daily Reward gizmos would not display properly.

---

# Meta Horizon v234 Release Notes

**Reminder:** The "Mobile Genre Showdown: Reloaded" competition is live and focused on designing and building new, innovative worlds with GenAI tools for Meta Horizon that work seamlessly on mobile, centered around specific genre games such as Simulation, Roleplay and Avatar Sim.
The submission period is open until October 30th, 2025. This is your chance to shine with the top 4 genre winners each taking home a whopping $200,000 each. Plus, 31 more talented creators will share $1,700,000 across multiple exciting categories
Visit the [competition site](https://mhcp-mobile-genre-2.devpost.com/) to learn more about the competition, how we'll judge, and what it will take for you to be eligible and win.

Read on for more details on Meta Horizon v234:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/555394727_773540015573606_204444784833276433_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=JAQUI42PP38Q7kNvwEq849J&_nc_oc=AdmJ-5EHZ_dt8XOKWmMHFoeLJa5ouJfTfANV10XAzKMFn1rRFhKmsqEDzRxURF-fxKE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AflLF4z5tsmdP7rFSeOc0VlhK2BHc8P8Msg3eL7E669NuA&oe=69541C5B)

## New Features

* **Shop Gizmo Screen Overlay Support (MHCP Only):** The world shop gizmo got an upgrade, it can now be displayed as a screen overlay, instead of the already existing spatial panel, via the new property "Display Mode". When set to "Overlay", but still in edit mode, the only notable change is the appearance of the close button on the panel. Start the simulation and you will see it disappear. To display it, or later hide it, use the new `setShopOverlayVisible` function. Learn more about the shop gizmo  [here](Gizmos/Shop%20gizmo.md).
* **Avatar Item Deep Links (MHCP Only):** Creators can now amplify the visibility of their created avatar items available outside their worlds by sharing direct links to individual listings and storefronts. After listing an item for acquisition outside your worlds, you can generate a shareable URL from the creator portal's item inventory page. These links can be pasted across platforms like Facebook, Instagram, and more, driving engagement and making it easier for users to discover and acquire your creations. Storefront links let users view all your listed items in one place. Learn more about this new feature [here](MHCP%20program/Monetization/Link%20to%20listed%20items.md).
* **Avatar Video Sharing (MHCP Only):** Creators can now share avatar-centric videos directly from Horizon to platforms like Facebook and Instagram, boosting the visibility and engagement of their digital goods. With the new Avatar Video Sharing feature, you can customize your avatar's look, add emotes and backdrops, and showcase avatar goods before sharing. When viewers see your avatar video on IG Stories, they can tap to explore and purchase the digital goods your avatar is wearing, driving discoverability and sales. This integrated experience creates a flywheel effect encouraging more engagement and purchases across the Horizon ecosystem. To get started, ensure you have the Horizon and IG apps installed, access to Video Composer, and your accounts linked. Learn more about this new feature [here](MHCP%20program/Monetization/Avatar%20Posts.md).
* **Public Animation Assets (MHCP Only):** We have released Public Animation Assets, available now for scripting on both Player and Non-Player Characters. This makes available an initial set of animations currently used on player characters including six core emotes, weapon animations and more. Creators can start experimenting with animation scripting without needing to learn how to make new animations themselves. Please check out the new assets in the Public Asset Library to see the full list which can now be found with a new animations asset filter! Learn more [here](https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/creating-avatar-animations).
* **Avatar Creation Prompts (MHCP Only):** Avatars can now be created by AI prompts! This feature was highlighted at Connect and is an expansion of our generative AI tooling suite to help you create new types of fully-rigged avatars from simple prompts. You can learn more about how to create avatars and NPCs on Horizon [here](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-gizmo/prompt-to-avatar-npcs).

## Quality Of Life Improvements

* We've improved panel management, making it easier to work with your projects. You can now show or hide the hierarchy and property panels as needed.
* The editor will also remember your last settings when you reopen it, including whether the hierarchy, property, and bottom navigation panels are expanded or collapsed, which tab you had selected, and whether the Gen AI modal was open or closed.

---

# Meta Horizon v233 Release Notes

**"Mobile Genre Showdown: Reloaded" Competition (MHCP Only):** We're excited to announce our fourth Meta Horizon Creator Competition in 2025, our biggest competition yet, with a chance to win a share of $2.5 million for all MHCP creators!

The "Mobile Genre Showdown: Reloaded" competition is focused on designing and building new, innovative worlds with GenAI tools for Meta Horizon that work seamlessly on mobile, centered around specific genre games such as Simulation, Roleplay and Avatar Sim. Creators are also encouraged in this competition to leverage the new GenAI features.
The submission period is open from now until October 30th, 2025. This is your chance to shine with the top 4 genre winners each taking home a whopping $200,000 each. Plus, 31 more talented creators will share $1,700,000 across multiple exciting categories.

Visit the [competition site](https://mhcp-mobile-genre-2.devpost.com/) to learn more about the competition, how we'll judge, and what it will take for you to be eligible and win.

Read on for more details on Meta Horizon v233

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/550126516_1329511801967592_6523216065991040107_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=WfbgrYqYgR4Q7kNvwGKaWjv&_nc_oc=AdlP2JSZbrMt4qJzSF00cen6DiDM-UZe_taics3c3nRoEvFJHWOY7C7w4wEMEcs564o&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AfkCmdppLmOUeGj0E83hPaBQ5CfalIVo2yyBPei3VtErKg&oe=695415F7)

## New Features

* **Transforming World Discovery:** We are continuously working on creating an intuitive, trusted, and effective discovery system, making it easy for users to find great experiences and for creators to grow with confidence. Rolling out now over time, we are excited to announce the following:
  + The World Detail Page (WDP) is being redesigned for a cleaner, smarter look, elevating creator recognition and making it easier for users to quickly see why a world is worth joining and jumping in right away.
  + We're introducing a new World Visits metric, so you can now easily see how popular a world truly is by viewing the real number of people who have joined each world. Find this in the Creator Portal.
  + A new world's rating system that lets you see feedback about your world, helping you optimize for the best user experiences.
* **Avatar Clothing Creation (MHCP Only):** We're excited to announce the expansion of clothing creation tools to all MHCP creators in Horizon Worlds! Creating and selling avatar clothing offers a new way for creators to enhance their worlds, monetize their creativity, and reach new audiences.
    
  For avatar clothing creation and best practices, items must be rated 10+, adhere to content guidelines, create original content and leverage AI responsibly. Learn more about this feature [here](https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/avatar-clothing-creation-and-selling).
* **New Tutorial and Template Worlds:** We are launching two new tutorial worlds and one new template world to help creators speed up their development. Find these when opening the editor in the creation home under the Tutorial and Template headers.
  + **Sim Tycoon | Template:** This tutorial contains all the game logic and systems needed for compelling player progression within a Sim Tycoon like game. It is designed to be easily reskinned and rethemed to anything the player can imagine. Learn more [here](Tutorials/Sim%20Tycoon%20tutorial/Module%200%20-%20Setup.md).
  + **Custom UI | Tutorial:** UI is very hard! With this sample world we provide several useful UI elements for Creators to copy and use in their game. Learn more [here](Tutorials/Custom%20UI%20tutorial%20world/Zone%200%20-%20Setup.md).
  + **New User Experience | Tutorial:** This sample world contains many useful components to help new users learn the game in a more step-by-step way: arrows to lure them to points of interest, hint texts, and the ability to lock progression on certain actions. Learn more [here](Tutorials/New%20User%20Experience%20tutorial/Module%201%20-%20Introduction.md).

## Quality of Life Improvements

* Improved tooltips on the NPC character creation screen for the Edit Avatar and Edit Character buttons for explaining when functionality gets disabled and why.
* Triggering animations on avatars with TypeScript can now be supplied an onEndBehavior to define whether to end, loop or pause when the animation is complete, replacing the Loop flag and adding the new option to pause on the final frame of an animation until canceled.
* Player avatars will now be hidden when editing with others in the desktop editor and not in preview mode.

## Bug Fixes

* Fixed a bug where a user's avatar would move forward unintentionally causing the user to look through their avatar's body.
* Fixed a bug where an avatar loaded into a world would fail resulting in a placeholder avatar.
* Fixed a bug where switching mobile avatars while in-world could cause swapped avatar issues.
* Fixed a bug where spawning a portal could break CustomUI for other users.

---

# Meta Horizon v231 Release Notes

Reminder: Submit your project for the Meta Horizon Creator Competition by September 10, 2025 (11:45 P.M. Pacific Time), for a chance to win part of over $1.5 million in cash prizes across Remixable Worlds, Tutorial, and Interactive Asset challenges. Don't miss this opportunity. Learn more [here](https://mhcp-open-source-competition.devpost.com/).

Read on for more details on Meta Horizon v231:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/543001249_1554106785458166_291874251711032008_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Rsyu6e7WsngQ7kNvwEDO6kq&_nc_oc=Adk_hDc9THcPFztFCg-xwxpcJhtSaaV2RpS_pOaCJN5ExNuffDWBjhLAJth6tiiVEds&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_Afn2RFmn3MDjNb1kNUUP7bFoblbZZWk7SIGfmedZIRym5w&oe=6954461A)

## New Features

* **Embodied LLM NPCs:** Today, we're excited to share that LLM-powered NPCs that support dynamic conversations are rolling out to the Worlds Desktop Editor starting Wednesday, September 10th. This new update will enable you to:
  + Make customizable NPCs that can engage in lifelike conversation by responding to player voice input.
  + Leverage our character building tools to specify scripted responses in combination with LLM responses.
  + Select voices from a voice library that can speak scripted and non-scripted dialogue.
  + Use your embodied NPCs in both VR and mobile worlds.
* As part of this update, we're also expanding the Character Builder panel with new features that you can use to define various characteristics for your NPCs, including your character's name, story, personality, dialogue, and test their responses. Later this year we'll also be adding functionality that enables your characters to feel even more authentic by leveraging AI to trigger in-world actions, dynamically converse with real players and more. Learn more [here](Desktop%20editor/NPCs/NPCs%20Overview.md).

## Bug Fixes

* Fixed a bug where other user avatars could appear as copies of yourself.
* Fixed a bug where Horizon interact buttons would display incorrectly over Custom UI.
* Fixed a bug where some avatars when using a first person view, would obstruct the player view while grabbing objects that use two handed grab presets.
* Fixed a bug where NPC character builder instructions and guardrails had no example text.
* Fixed a bug where all NPCs would play the same animation despite using different animation assets.

---

# Meta Horizon v230 Release Notes

This week, Worlds desktop editor is now in General Availability. Thank you for your feedback helping us improve the desktop editor during Early Access!

Read on for more details on Meta Horizon v230

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/540026516_773752591686896_3809304553087380741_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=OduygOMPyCgQ7kNvwGyG8JN&_nc_oc=Adn1Y2ovVG9_hWEESXZqrbDky5EC_ghwjNIAyDGs85MZ4LhTacoBqyuJzmmoG-MuvIo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_Aflv609O9SYw_3QfneWi_C7DuMI4cgW4S2cV5iUiQ7rJVw&oe=69542170)

## New Features

* **Mobile World Leaderboards (MHCP Only):** Creators are now able to share new and existing world leaderboards directly within the Meta Horizon app on their product description page. Learn more about this feature [here](Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Showing%20leaderboards%20in%20the%20Meta%20Horizon%20app.md).
* **Purchase API Callback (MHCP Only):** A new NetworkEvent is launching: OnPlayerPurchasedItemEvent. Connect to it, and you will be notified when a player makes a successful purchase from any shop in the session. With this, creators can add new gameplay elements such as showing a popup to equip the brand new sword a player just bought, progressing a quest or validating a tutorial for examples. Learn more about in-world purchases [here](MHCP%20program/Monetization/In-world%20purchase%20guide.md#purchase-event-listener).

## Quality of Life Improvements

* Optimizations to the initial spawning of assets.

## Bug Fixes

* Fixed a bug where some interaction buttons/prompts were incorrectly scaled.
* Fixed a bug where avatars would t-pose when idle for too long.

---

# Meta Horizon v229 Release Notes

This week in v229, we have numerous quality of life and bug fixes requested by the community.

Read on for more details on Meta Horizon v229

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/538274188_795639509604479_6404396624031413673_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=o-kSTPwoDtwQ7kNvwEO4-vE&_nc_oc=AdmoPfnC19P0_VZ5g_MSdjCQtZyfC30xQcL95F0ILFrSiY-27fycs5wQLQwR-LoSWJI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AfnQRBnmSZ8dsdizMOXQZF4T9tXPWtec7XpWyqtRqhJ-8A&oe=69542543)

## Quality of Life Improvements

* Enable searching editor hierarchy for entityid.

## Bug Fixes

* Fixed a bug where the speech bubble toggle wasn't always honored for NPCs that spawn at world start.
* Fixed a bug where undoing the delete of a Custom UI entity caused the UI to stop rendering until the world is reloaded.
* Fixed a bug where editing the template definition of an Asset Pool Asset Template respawns the referenced asset.
* Fixed a bug where combining large amounts of objects fails to finish the job and creates an unprocessed asset.

---

# Meta Horizon v228 Release Notes

The Open Source Champions competition is live! This competition offers an incredible opportunity to compete for a share of $1M in prizes, plus an additional $500K for newly introduced mini-challenges.

The **Open Source Champions** competition challenges creators to design and build a high-quality, inspiring and easy-to-extend remixable world to accelerate the creation process for other creators in the Horizon Worlds community. Remixable Worlds (MHCP Only) is a new feature that allows creators to make their world(s) clonable by other creators to build on top of.

In addition to the main focus on building remixable worlds, creators can enter two optional mini-challenges:

* **Interactive asset mini-challenge:** Create dynamic, remixable interactive public assets to support other creators.
* **High-quality tutorial mini-challenge:** Create engaging, high-quality tutorials to expand the MHCP documentation.

**Prizes**

* Best remixable worlds
  + 1st place: $100,000
  + 2nd place: $60,000
  + 3rd place: $50,000
  + Plus additional 32 prizes
* Mini-challenge winners (interactive asset and tutorial)
  + $500,000 shared among winners

Don't miss out on this opportunity! The submission window is open to **September 10, 2025 at 11:45 PM PDT**.

Visit the competition site [here](https://mhcp-open-source-competition.devpost.com/) to learn more about how to participate, what the judges are looking for, and how you can become an Open Source Champion.

Read on for more details on Meta Horizon v228

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/534422833_769756112105013_8661029236016705134_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=coXPXSz3SxYQ7kNvwFBNnW4&_nc_oc=AdkFDgbmEyHkJNE5WSgypG_rRZuvI4RnBBRtVudbOv7DNcjUMrM2R0e58u-lQQoPUxc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AflHX5ng-zMP68Q71KerZcPCNu8UZvOR0E7Eputx0GLOpA&oe=69541F94)

## New Features

* **Remixable Worlds (MHCP Only):** Remix Worlds is a feature that allows creators to make their world(s) cloneable by other creators to build on top of. Available worlds for creators to remix can be found on the Creation Home page of the Horizon editor in the Worlds to Remix section. Creators can make their worlds as remixable in the Publish window within the editor. Learn more about this feature [here](Save,%20optimize,%20and%20publish/Horizon%20Remix%20Worlds.md).
* **Environment Generation Tool (MHCP Only):** The GenAI Environment Generation tool allows you to quickly generate an environment for your world. This tool helps accelerate the process of world and environment building by adding generated meshes of varying sizes and complexities. Currently, this tool supports generating island themed environments, with more themes to come in the future. Learn more about this feature [here](Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Environment%20Generation%20Tool.md).

## Quality of Life Improvements

* Improved asset spawning to snap to all snappable objects and account for the spawned object's bounding box.
* Improved color tint behavior by making color changes immediately visible to creators.
* Updated AssetPools to spawn versioned assets instead of always spawning latest asset versions to avoid multiple versions of the same asset existing in the scene.

## Bug Fixes

* Fixed bugs related to exporting world geometry and downloading assets file in desktop editor.
* Fixed a bug that prevented NPC avatars from being moved by setting their position directly.

---

# Meta Horizon v227 Release Notes

This week in v227, we are launching audio previews in the asset library for all creators, which helps find the perfect sound to add to your world. Additionally, more supported audio formats are available including MP3 and FLAC (among others). An exciting community request is now available also as we added two new APIs to make scripting easier with **this.world.findEntity()** and **this.world.findEntities()** which enables creators to reference any entity in code by name.

**Note:** In v226 notes we mentioned an upcoming creator competition. We will have more information on this soon.

Read on for more details on Meta Horizon v227:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/530161553_1877485456167352_5255716721926701093_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=LeXx-JqhSYYQ7kNvwFty-xO&_nc_oc=Adk3uQk4ANsjKFh5NO52ixvwNl7K8DSVn4WJ6h0E-900HzfYBoALGZpYC8Po1bNozKk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AflpyNuPL6JydfHVFCQume9KGQ-IoqH5pYotVqC97CyCIg&oe=695426EE)

## New Features

* **Audio Previews in Asset Library:** Audio previews in the asset library are now available to all creators. This feature makes finding the perfect sound to add to your world more efficient. To use this feature, click the play button icon on the thumbnail within the asset library for any sound asset.
* **Additional Supported Audio Formats:** We've added support for MP3 (.mp3) and FLAC (.flac) audio file formats, in addition to OGG Opus (.opus) and WAV (.wav). Plus, we've added support for a wider range of sample rates, including 16 kHz, 22.05 kHz, 24 kHz, 44.1 kHz, and 48 kHz. This means you can now upload a wider variety of audio files to your worlds, making it easier to find the perfect sound.
* **Entity References By Name:** Added two new APIs to make scripting easier. **this.world.findEntity()** and **this.world.findEntities()** enables creators to reference any entity in code by name. This is basic functionality creators expect and find in tools like Roblox, Unity and Unreal. Pass in an optional root entity to only search a specific subtree, or a match operation, like starts with, ends with, or even a regex to more specifically query entities. Learn more about this feature [here](Reference/core/Classes/World.md#methods).

## Quality of Life Improvements

* Adding new logging so creators are alerted when "no mesh found" errors populate so the error can be detected when developing worlds.
* "F5" has been improved/updated as a hotkey. By pressing F5, creators will enter play mode, and pressing it again exits play mode, replacing the previous Shift+F5 exit shortcut for a simpler toggle experience.

## Bug Fixes

* Fixed a bug where "Clear on Enter Preview" did not clear the console when entering preview mode.
* Fixed a bug where the bug report hotkey could unintentionally trigger while using the in-game console while in preview mode.
* Fixed a bug where an error message would incorrectly appear when saving and applying a texture that was created with Gen AI.
* Fixed a bug where a black skydome could appear when generating a sky in the Gen AI tab.
* Fixed a bug where any custom UI that was deleted was not properly reverted when using the undo key.

---

# Meta Horizon v226 Release Notes

**Heads up creators** - Another exciting competition is coming, mark your calendars! Our next creator competition will be announced between August 7-11! Get ready for even more prizes, a new exciting competition focus area, mini-quests to win additional prizes, and more opportunities to showcase your creativity.

Read on for more details on Meta Horizon v226:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/526767937_718956634288466_2018836161174500979_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=yOWHaiunE_UQ7kNvwGIa1gX&_nc_oc=AdlmFrvcbj8g0O0zDeLGJAB3kWAb0apUqfsF-u8zEN5fpkxP3i2IrNykPWUG0nDRaRI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AfmRaImHXophoDzHorzHZqYH9Z3widQqLF4mytWwTAdz7Q&oe=69544496)

## New Features

* **Social API:** Creators now have the ability to add frictionless social features into their world via TypeScript. A [public demo world](https://horizon.meta.com/world/775581602295298/) has additionally been made for creators to experience the Social API firsthand. Learn more about this new feature [here](Reference/social/Classes/Social.md) and check out some of its abilities below.
  + Show player avatar icons in game
  + Reward players for following each other
  + Reward following new players in the server
  + Reward inviting friends to their server
* **Mobile Gestures API:** We have added a new API module to better help detect and allow creators to improve games that use tap, swipe, pan, and pinch gestures. Learn more about this feature [here](Reference/mobile_gestures/Classes/Gestures.md).
* **World Trailers:** Along with thumbnails, creators are now able to upload trailers to their product description page with future plans to test additional discovery surfaces. Trailers can be uploaded in 16:9 and 9:16 format and give players critical insights and surfacing into your world before jumping in. It is imperative to design for these sizes to put your best foot forward, as landscape videos (16:9) do not look appealing when cropped to another size like 9:16 (and vice versa). Poor cropping can significantly impair clicks and visits.
* **Creator Assistant:**The Worlds Desktop Editor is adding Creator Assistant to its already impressive, integrated, and comprehensive GenAI toolkit. Creator Assistant is your creation partner to not only accelerate the creation process, but make it easier also. Learn more about this feature [here](Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Assistant%20Tool.md).
* **Style Reference:** Style Reference allows creators to have more consistency and a faster path to desirable output by allowing them to generate, save, and re-use a desired style such that their outputs across modalities can be more consistent with easier prompting. Learn more about this feature [here](Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Style%20Reference.md).

## Quality of Life Improvements

* Added export support for multiple materials per object, material texture export, multi-UV channels, and specific mesh name.
* Improvements to speed of multiple assets spawning at once.
* All creators are now able to customize particle FX at runtime.

## Bug Fixes

* Fixed a bug where Editor performance degrades significantly when the camera is facing a large number of objects.
* Fixed a bug where the editor could timeout when spawning assets during runtime.
* Fixed a bug where navigating between worlds in the editor could cause NPCs from different worlds to share logs in the NPC Debugger; now, navigating always clears those logs.
* Fixed a bug where creators encountered difficulty transitioning between editor mode and preview mode when operating the door gizmo. Creators will now experience a seamless switch without getting stuck upon exiting preview mode.
* Fixed a bug where it was possible to edit the NPC gizmo's character name and the underlying AI conversation's character name to not match each other, which caused confusion. Now, the NPC gizmo's character name is not editable when an AI is attached, so it will always match the AI name.
* Fixed a bug causing a null reference on spawning Hybrid NPCs client side.

---

# Meta Horizon v224 Release Notes

In an upcoming release, we will be upgrading the Meta Horizon Desktop Editor to Unity 6. This upgrade ensures you have the most up-to-date and secure experience as a creator. We expect minimal impact to your workflow during this update. To help the update go smoothly, please coordinate with your entire team to update together. We recommend that once your workday is done, everyone shuts down their Desktop Editor. Avoid keeping the Editor open for multiple days in a row, as this can delay the update process.

Additionally this summer, we're testing new Meta Horizon Feed in VR and Meta Horizon mobile app interface designs to improve user engagement and discovery. The new designs will utilize all landscape, portrait and square world preview images. We strongly recommend that you review your existing preview images and ensure you have high-quality images across all three dimensions as soon as possible to ensure that your worlds are eligible to be featured in the upcoming new designs of Worlds discovery surfaces, and [get the best chance of being discovered.](Save,%20optimize,%20and%20publish/Intro%20to%20Worlds%20discovery.md)

To help you create the best preview images to showcase your worlds, we have published new [documentation](Save,%20optimize,%20and%20publish/Worlds%20Asset%20Design%20Guidelines.md) with image guidelines, including templates, examples and best practices. To learn more about the new Horizon Feed and mobile interface designs, please visit the blog [here](https://developers.meta.com/horizon/blog/meta-horizon-design-tests-coming-soon/).

Read on for more details on Meta Horizon v224:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/519964536_1885130389079245_5277775352498366_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=a99CptRARJUQ7kNvwE4f9vF&_nc_oc=Adm8WxlGDcDm1HsFR3n-EywSuhvTVEIyUu3TpTKoOoiyX6ykZQD8oq4DDp3wYAwB390&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_Afmj9SHAHZErB73hZEi649bmw4Obtk6TaLdkVG4Lc5RSqQ&oe=69542DAF)

## New Features

* **Notifications For Feedback Hub:** Rolling out over time, we will now email creators whenever we update their feedback status, such as requesting more information or when we ship a fix. Each notification links to the Feedback Center, where they can add context or review details.
* Added the ability for world creators to use custom asset textures as action button icons for Mobile and Desktop users. Learn more about this feature [here](Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Custom%20Input%20API.md).

## Quality of Life Improvements

* Creators now have the option to down res textures to 512 within the editor to help with performance and capacity limits for worlds.
* GenAI creator tools are now rolling out in the European Union (EU). Creators in the EU will now have access to all of the GenAI tools that are part of the Horizon Desktop Editor. Be sure to try these tools out!

## Bug Fixes

* Fixed a bug where creators after a long session quit the Editor, the Quest Link app will continue to say "Now Playing" and prevent the User from re-opening the Editor.
* Fixed a bug where the Editor would crash after creating a new world and waiting on the home screen for too long.
* Fixed a bug where opening a call from the social panel in Horizon Worlds opened the incorrect chat.
* Fixed a bug with LOD objects not being properly hidden through scripts.
* Fixed a bug where portals may not have automatically closed when selecting the "Go" button.

## Documentation Improvements

* Updates to World Preview Image Design Guidelines around image publishing standards for Horizon Worlds.

---

# Meta Horizon v223 Release Notes

This week in v223, we are launching improved creator control for shops and inventory which will help provide a more customized experience for users visiting worlds where creators choose to make their own shop and inventory systems. Additionally, audio previews in assets library (MHCP Only) were launched allowing the capability to listen to audio clips for any sound asset directly from assets library. Read on for more details on Meta Horizon v223:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/518327882_1233322694785860_78061001846773034_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=aoj1wSlFYuYQ7kNvwFCBrSu&_nc_oc=AdnM5cELpqx5MsUkRaOwjuQQ528eIYHd7FzQ6B9B29eZUiGy5QXuoGkz1N5IjNoFkiA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=504bY821yWIln6ha9pZRYA&oh=00_AfkHPJ0Qp3L88-GqYn0T_7NtzHmO7GXKRGv30FOF0My2-w&oe=69543942)

## New Features

* **Improved Creator Control for Shops and Inventory:** We've added a new feature that gives creators more control over the visibility of shops and inventory items within their virtual worlds. Now, creators can disable the default in-world shop and the 'In-world items' tab in the inventory for their worlds. This provides a more customized experience for users visiting those worlds when creators choose to make their own shop and inventory systems. Learn more about this feature [here](MHCP%20program/Monetization/In-world%20purchase%20guide.md).
* **Audio Preview in Assets Library (MHCP Only):** Introducing the capability to listen to audio clips for any sound asset directly from assets library. This feature makes finding the perfect sound to add to your world more efficient. To use this feature, click the play button icon on the thumbnail within the asset library for any sound asset.

## Quality of Life Improvements

* Portals and doors will no longer be usable for navigation while in the Editor or Edit mode.

## Bug Fixes

* Fixed bug with downsized textures overriding all other textures on multiple materials.