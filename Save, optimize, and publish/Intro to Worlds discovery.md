Source: https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/intro-to-worlds-discovery

# Intro to Worlds discovery

## Introduction

As creators craft fun and engaging experiences in Worlds, we are here to help connect users with the most relevant and engaging worlds at every stage of their journey. Here we will go over how users discover worlds and how worlds are ranked across surfaces, as well as providing resources and insights you can use to improve user acquisition and engagement with your worlds.

#### TL;DR:

* Worlds discovery in Meta Horizon is primarily powered by our algorithmic recommendations that combine 4 distinct dimensional axes: Appeal, visit quality, repeat visitors, and technical performance.
* There are many ways you can improve the discoverability of your worlds, including providing high-quality accurate key art and descriptions, designing a good onboarding experience, implementing mechanisms for users to come back, and improving world quality by improving frame rate and crash rate. You can monitor the impact of the improvements you make in [world analytics](../Performance/Analytics/World%20Analytics.md).
* We have started building the capabilities for worlds to be discovered and played directly within Facebook, Instagram, and others of Meta’s family of mobile apps. We will keep our community updated on our progress and share as the opportunity to be surfaced in Facebook and Instagram opens up broadly to the creator community.

## The discovery ecosystem in Worlds

Our goal is to surface the most engaging and active worlds to users and to help creators to find the right audience. Worlds discovery in Meta Horizon is primarily powered by our algorithmic recommendations that combine multiple criteria. In some scenarios, we also manually select worlds to spotlight.

### Worlds discovery surfaces

Users can discover worlds through multiple touchpoints on Meta Horizon mobile app and Quest headsets:

* **Horizon feed**: The feed is the first discovery surface users see, both in-headset and on mobile. As the default, the feed naturally reaches more users than any other surface; however, it also accounts for the lowest conversion rate since users often visit the feed without as much intent to explore specific content.
* **Horizon in-app menu**: This menu is available when users are in worlds, and includes many world shelves for users to browse.
* **Search**: Search supports users who are looking for specific content they want to try or casually browsing and looking at recommended titles before entering a query in the search bar.
* **Doors in worlds**: Creators can put doors to other worlds in their worlds. This enables a more embodied way to travel between worlds.
* **Horizon store**: The Horizon store is the primary commerce surface intended to help users find content they enjoy. The store is where users are actively seeking to browse and acquire new experiences.
* **Horizon Central**: Users may also discover worlds in Horizon Central, a social discovery hub world created by Meta Horizon. Some worlds are selected algorithmically, but we also curate worlds as part of promotional campaigns based on criteria such as the quality of the worlds and how well the content fits into the themes of the marketing campaign.

#### Mobile

| **Feed** | **Search** | **Store** | **In-World Menu** | **Doors** |
| --- | --- | --- | --- | --- |
| Image shows an example of the mobile feed | Images shows an example search screen | Image shows an example screen of the mobile store page | Image shows an example of the in-world menu | Image shows an example of doors |

#### VR

| **Feed** | **Search** | **Store** | **In-World Menu** | **Doors** |
| --- | --- | --- | --- | --- |
| Image shows an example of the VR feed | Image shows an example search window | Image shows an example of the VR store page | Image shows an example of the in-world menu | Image shows an example of doors |

### Algorithmic discovery

Our discovery algorithms source and rank worlds in many of the primary discovery surfaces. Some surfaces are personalized, and the content displayed may differ between different users. We help newly released and updated content gain visibility by providing it with initial traffic, allowing it to be evaluated and scale in the recommendation systems based on its performance. We primarily focus on **4 distinct dimensional axes (Appeal, visit quality, repeat visitors, and technical performance).**

| **Value** | **Description** | **Metric** | **How can I improve this?** |
| --- | --- | --- | --- |
| **Appeal** *You should find content appealing in discovery.* | How well does a world get users to try the world based on art and information? | Proportion of users who have seen an impression of your world who then visit the world. | You can increase your world’s appeal by focusing on the world title, description, key art, and [thumbnail](Thumbnail%20A-B%20testing%20tool.md). |
| **Visit quality** *You should find worlds compelling enough to have a sustained visit.* | How compelling is the world at hooking the user? Once users visit a world, was the experience enjoyable enough to stay for a while? | Sustained visit rate (% of visits with timespent more than 5 minutes in VR and 2 minutes on mobile) Timespent per visit. | You can increase the visit quality by incorporating a strong hook, tutorializing how to play, and making the world fun in the first few minutes. |
| **Repeat visitors** *You should find the experience rewarding and want to visit the world again.* | Do users return back to the world repeatedly? | Retention of users in world; Timespent per monthly active user. | You can increase the return visits by making the experience fun to replay and by using [persistent variables](../Scripting/Get%20started%20with%20TypeScript/Persistent%20Variables.md) to enable progress to be made over multiple sessions. |
| **Technical performance** *You should have a smooth experience within the world.* | How technically smooth is the experience within the world for the users? Are there crashes or frame drops that get in the way of the experience? | Frame rate in the world; crash rate in the world. | You can improve the technical performance of the world by using the [performance profiling and analytics tools](../Performance/Introduction%20to%20performance%20optimization.md) in the editor. |

### Promotions on Meta Horizon channels

Users may also discover worlds through Meta’s promotions on channels such as social media, email newsletters, and in-product spotlights. The criteria used for selection typically include quality of the worlds, mobile-specific optimization, engagement (i.e. timespent, retention), as well as how well the content fits into the themes of the marketing campaign. While there’s not a one-fits-all criteria, the rule of thumb is that popular, engaging worlds with high quality visual content and demonstrating exemplary use of creator tooling technologies have the highest chances of being featured.

### Horizon World discovery on Meta’s family of apps (FoA)

We have also started building the capabilities for worlds to be discovered and played directly within Facebook, Instagram, and others of Meta’s family of mobile apps. Today, you can visit the Gaming tab on Facebook mobile to find and play selected worlds. We are early in our journey and are still testing and iterating how Facebook and Instagram could be most effective as distribution channels for creators to acquire more worlds users more quickly. We will keep our community updated on our progress and share as the opportunity to be surfaced in Facebook and Instagram opens up broadly to the creator community. This will continue to follow the above principles of appeal, visit quality, repeat visitors, and technical performance.

## How to improve discoverability and acquire more users

The goal of our discovery system is to connect people with fun and engaging worlds that they enjoy. Improving the four values mentioned above (**appeal**, **visit quality**, **repeat visitors**, and **technical performance**) is the best way to increase your chances of getting discovered. You can monitor how well your progress and impact across these values using the [analytics](../Performance/Analytics/World%20Analytics.md) tools, including impressions, sustained visit rate (SVR), and average time in world.

#### Appeal: Improve consideration

**Goal**: Increase the number of users who decide to visit your worlds as they discover them by providing high-quality accurate visuals and information
**Measured by**: Proportion of users who have seen an impression of your world who then visit the world
**Best practices**: Optimize world visuals to put your best foot forward

- **World images**: Quality images have been validated to be shown as one of the strongest levers to increase interest and downstream engagement. World images are the “book covers” in Meta Horizon, where accurate and exciting images can improve visits and time spent up to 40%. We have found that the closer the image is to the world experience, the more users will engage deeply. Focus on the following criteria:
  * Accurate gameplay that portrays real examples of in-world action
  * Accurate avatars, even when compared to more aesthetically pleasing avatars
- **Image A/B testing**: In the Developer Dashboard you can find the thumbnail A/B testing tool that allows you to upload an additional image and the system will test and provide results on which image drives more engagement. Given the impact that strong visuals can have on converting traffic, invest in testing different images to see what can be most appealing to grow your audience. You may want to test different examples of in-world action, different colors, brighter vs darker, logo styles. See documentation on [thumbnail A/B testing](Thumbnail%20A-B%20testing%20tool.md).
- **Multiple image upload**: You will soon be able to upload 3 different image sizes for portrait, landscape, and square (16:9, 9:16, 1:1), which will map to the sizes used across different surfaces. It is imperative to design for these sizes to put your best foot forward, as square images (1:1) do not look appealing when cropped to another size like 16:9 (and vice versa). Poor cropping can significantly impair clicks and visits.
- **[Coming soon] World videos**: Along with your thumbnails, you will soon be able to upload videos, which have also been validated to be one of the strongest levers for world engagement (even stronger than images). The above principles apply on accuracy for quality engagement.

<details>
<summary>Image shows two screenshots side by side, with the right image displaying a green checkmark noting it as the correct option</summary>

<p></p>

[Image shows two screenshots side by side, with the right image displaying a green checkmark noting it as the correct option](../image_data/0b419bcfe431938526e560adf87abc00eb7b5daa27cd902d88e7dd6b735a3dd4.md)

### Overview
The image presents a side-by-side comparison of two visuals related to "Kawaii's Grocery." On the left, there is a promotional graphic, while on the right, there is a screenshot from a video game or interactive environment featuring a character.

### Key Elements
#### Left Panel
- **Visual description**: A colorful promotional graphic with autumn-themed elements.
- **Location**: Left side of the image.
- **Contents**: 
  - Text: "KAWAII'S GROCERY," "NEW AND IMPROVED!," "20+ NEW PRODUCTS!"
  - Icons: Various grocery items like bread, corn, carrots, and pumpkins.
  - Background: A gradient sky with autumn leaves scattered around.
- **Visual styling**: Bright colors, playful fonts, and a festive atmosphere.

#### Right Panel
- **Visual description**: A screenshot from a video game or interactive environment.
- **Location**: Right side of the image.
- **Contents**: 
  - A character holding a shopping cart.
  - Text: "KAWAII'S GROCERY" displayed prominently.
  - Background: An indoor grocery store setting with shelves and products.
- **Visual styling**: Realistic textures and lighting, typical of a 3D game environment.

#### Center
- **Visual description**: The word "VS" indicating a comparison.
- **Location**: Between the two panels.
- **Contents**: The letters "VS" in a simple font.
- **Visual styling**: Black text on a white background.

#### Top Right
- **Visual description**: A green checkmark icon.
- **Location**: Top right corner.
- **Contents**: A green square with a white checkmark inside.
- **Visual styling**: Minimalist design, commonly used as a symbol of approval or correctness.

### Visual Flow / Relationships
- **Most prominent visually**: The promotional graphic on the left due to its larger size and more vibrant colors.
- **Arrows/lines/connectors**: None.
- **Spatial relationships**: The left panel is larger and more detailed compared to the right panel, which is smaller and more focused on a single character. The "VS" text acts as a separator between the two visuals.

</details>

<p></p>

*Kawaii Grocery before vs after, with testing showing significant improvement on traffic and visits*

Provide all the metadata requests for the system to accurately understand your world:

- **Title**: Ensure it is accurate, and be wary of long titles that could get cut off especially on smaller surfaces like mobile.
- **Description**: Many users will review the world details pages before visiting the world. Give informative and relevant descriptions so they understand what the experience is and how to interact in the world.
- **Genres**: While only 1 is required, providing 3 accurate tags will help users more quickly understand their interest and help the system distribute your world in relevant places. However, inaccurate genre tags can mislead users with high drop-offs that hurt engagement metrics used to rank your world and also muddy how the system understands your world.

<details>
<summary>Image shows a world page with all of the metadata filled in</summary>

<p></p>

[Image shows a world page with all of the metadata filled in](../image_data/1e2fec4a3b655b30f99c7c5330304f60361a1429182233081f714208bfd900ab.md)

### Overview
The image is a screenshot of a game page titled "Horizon Central." It features a vibrant, futuristic cityscape as the background with large white text reading "Horizon Central." Below the title, there are several avatars of characters in a lively urban setting. On the right side, there is a vertical column with information about the game, including its rating, number of players currently online, and compatibility with mobile and VR platforms.

### Key Elements
- **Title**: "Horizon Central" in large white font against a colorful, neon-lit cityscape background.
- **Background**: A bustling, futuristic city scene with neon lights, buildings, and a street filled with characters.
- **Avatars**: Several characters are depicted in the foreground, standing in a social gathering area. They appear to be interacting with each other.
- **Right Column**: Contains game information such as ratings, player count, and compatibility details.
- **Rating**: "31.6K" with a thumbs-up icon.
- **Player Count**: "853 here now" with a small icon indicating players.
- **Compatibility**: "Mobile and VR" with a VR headset icon.
- **Social Interaction Button**: A black button labeled "Go" with a walking figure icon.
- **Share Button**: A light gray button with a share icon and the word "Share."

### Visual Flow / Relationships
- The most prominent visual is the large title "Horizon Central."
- The avatars are positioned in the lower part of the image, drawing attention to the social aspect of the game.
- The right column provides additional information in a structured layout, with clear headings and icons for easy navigation.

</details>

<p></p>

*Horizon central with clear assets, tags, and descriptions*

#### Visit quality: Hook and deepen engagement

**Goal**: Help users to learn about your worlds and how to enjoy the fun experiences you have created, especially new users.
**Measured by**: Time spent per visit, sustained visit rate (% of visits with timespent more than 5 minutes in VR and 2 minutes on mobile).
**Best practices**: Optimize the new user experience for a sustained first-time visit to your world.

- **Instructions**: Helpful and clear directions or tutorials on what to do on their first visit that is easily accessible from the spawn point. The showInfoSlides API for typescript is an easy way to do this for mobile users.
- **Multiplayer**: If your world is best played with other people, provide some things to do solo as well while the user is waiting for others to join or use [scripted NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/getting-started-with-scripted-avatar-npcs) to simulate other players. For worlds that have synchronous matches, use a lobby as a place where users can interact and queue up between matches.

<details>
<summary>Image shows an example world with a tutorial pop-up window directing the player to the next goal</summary>

<p></p>

[Image shows an example world with a tutorial pop-up window directing the player to the next goal](../image_data/67f37c092b6c442ac547c45d401c2fbcef13a2866d2de807d8a333eff5cafdec.md)

### Overview
This image depicts a scene from a video game interface, specifically a tutorial screen. The player character is standing on a wooden dock near a body of water, with a beach and some structures in the background. A dialogue box at the top provides instructions, while a prompt at the bottom instructs the player to tap anywhere to continue.

### Key Elements
- **Dialogue Box**: Located at the top center, it has a pink background with white text that reads, *"The arrow points to your next quest goal."*
- **Player Character**: Positioned on the dock, facing away from the camera. The character is wearing casual attire.
- **Quest Text**: Located in the upper left corner, it says, *"Talk to Doug Dig!"* with a blue background.
- **Version and Level**: On the left side, it displays *"v0.0.20"* and *"Level 1"* along with a progress bar indicating $0.
- **Navigation Controls**: At the top, there are icons for menu, pause, and settings.
- **Bottom Prompt**: At the very bottom, it says, *"Tap anywhere to continue."*
- **Inventory**: At the bottom right, there is an inventory slot showing a shovel icon.

### Visual Flow / Relationships
The most prominent visual element is the dialogue box, which draws attention due to its bright color and central placement. The player character is secondary but still noticeable. The quest text and version information provide context for the player. The bottom prompt encourages interaction, directing the player's focus downward. The dock and surrounding environment establish the setting.

</details>

<p></p>

*Shovel Up features new user onboarding with tutorials on what actions to take next*

#### Repeat consumption: Drive retention

**Goal**: Build content and mechanisms to give users a reason to come back to your world.
**Measured by**: Retention of users in world, timespent per monthly active user.
**Best practices**: Design an in-depth experience in your world and provide reasons for users to stay in your worlds and have fun for an extended time. We’ve built a suite of features you can implement in your worlds to engage your audience.

- **Persistent variables**: Persistent variables let you provide permanent progression to users that persists between sessions in your world, creating a deeper experience. See more documentation on [persistent variables](../Scripting/Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md).
- **Quests**: Quests allow you to build achievements on top of persistent variables in ways that can be surfaced within the world (and outside of it). This gives users something to do and gives a sense of accomplishment in their first few moments within your world, and a reason to keep engaging in your world. See more documentation on [quests](../Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Quests%20Overview.md).
- **Leaderboards**: Leaderboards allow you to automatically enter users into a score-based competition. This gives your content repeatability and a reason to keep playing, even if the gameplay is shallow. Reset your leaderboards at a regular interval to keep users motivated to come back and get back on the leaderboard. See more documentation on [leaderboards](../Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Leaderboard%20Reset%20Frequency.md).

Maintain live operations of your world to consistently give users new reasons to come back.

- **World updates**: Actively maintain your worlds with fixes and new content to give users the feeling that it’s worth re-visiting time and time again.
- **Return game mechanics**: Integrate game mechanics that encourage users to come back periodically to make progress or collect rewards (e.g. daily log-in rewards).
- **[Events](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/creating-events/)** (currently available to Meta Horizon Creator Program members, [join now](https://developers.meta.com/horizon-worlds/programs)!): Host events in your world so users have fresh activities to do in your world. By hosting an event, users can subscribe and receive notifications to come back to your world. It also gives surfacing to your world in event shelves. When users have good experiences with your world’s events, they’ll subscribe to attend more, which creates a positive cycle of engagement and retention.
- **Save**: Help users come back to your world by encouraging them to save your world, which will help them to find your world again in the **Saved** entrypoint or shelf. Your world will also be eligible to be surfaced when we recommend content from a user’s list of saved worlds. You can do this via giving instructions in the world or by utilizing the save gizmo.

<details>
<summary>Image shows the world listing for Bobber bay, including a note of recent updates</summary>

<p></p>

[Image shows the world listing for Bobber bay, including a note of recent updates](../image_data/b6516ba33dd1ca7c1146d3dbf1157ffeb48c46d0585228444814418d1b8d6ce0.md)

### Overview
The image displays a promotional graphic for the game "Bobber Bay Fishing." It features a vibrant, cartoon-style depiction of a fishing dock with the game title prominently displayed. The right side of the image contains information about the game, including player count, compatibility, and updates.

### Key Elements
- **Visual Description**: The left side showcases a wooden dock extending into water, with a sign that reads "WARP WHARF." There’s a fish near the dock, and a character standing on the dock. The right side has a title card with the game name "Bobber Bay Fishing," a player count indicator, and a description of the game's features.
- **Location**: The dock scene is on the left, while the game information is on the right.
- **Contents**: 
    - Left side: "WARP WHARF" sign, wooden dock, fish, character figure.
    - Right side: Title "Bobber Bay Fishing," player count "173 here now," compatibility "Mobile and VR," update notification "Bobber Bay Updated!" and a brief description of the game's features.
- **Visual Styling**: Bright, colorful graphics with a playful theme. The dock is detailed with ropes and wooden planks, while the text is bold and eye-catching.

### Visual Flow / Relationships
- Most prominent visually: The dock scene on the left.
- Spatial relationships: The dock scene is adjacent to the game information on the right. There are no arrows or lines connecting the two sections.

</details>

<p></p>

*Bobber Bay Fishing does regular updates on new content*

<details>
<summary>Image shows an example leaderboard</summary>

<p></p>

[Image shows an example leaderboard](../image_data/501f8af3579ea0d6803e64a692477acaef9b65dd16732abd58ce67e29c7b8be6.md)

### Overview
The image displays a leaderboard screen titled "Global Highest Level" within a game interface. The screen shows rankings of players based on their level scores, with a focus on the global leaderboard. The layout includes player names, their respective levels, and additional tabs for "My Rank," "Session," and "Mutuals."

### Key Elements
- **Title Bar**: Located at the top, the title "Global Highest Level" is prominently displayed in white text against a dark background. A trophy icon is situated above the title.
- **Tabs**: Below the title bar, there are three tabs labeled "Global," "My Rank," "Session," and "Mutuals." These tabs are white with black text.
- **Player List**: The central part of the screen lists players ranked from 1 to 10. Each entry includes a small profile picture next to the player's name and their corresponding level score.
    - **Visual description**: Circular profile pictures with varying avatars.
    - **Location**: Below the tabs.
    - **Contents**: Player names and level scores.
    - **Visual styling**: Dark background with light text for readability.
- **Ranking Numbers**: Numbers 1 through 10 are displayed vertically on the left side of the player list.
- **Player Names**: Names such as "Djmondoent," "BOND.007," "Joeyfosho," etc., are listed alongside their respective levels.
- **Level Scores**: Numerical values representing the players' levels appear to the right of each name.
- **Pagination**: At the bottom of the player list, there are navigation arrows indicating that more entries can be viewed.
- **Background**: The background of the leaderboard screen is dark, likely to enhance contrast and readability of the text and images.
- **Sidebar**: On the right side, there is a sidebar displaying "STATS" with a prompt to step into the stats section. This sidebar contains additional information and options related to the game.

### Visual Flow / Relationships
- **Most Prominent Element**: The leaderboard itself is the most prominent visual element.
- **Arrows and Lines**: Navigation arrows at the bottom suggest a way to scroll through more content.
- **Spatial Relationships**: The leaderboard is centered, with the sidebar on the right providing supplementary information. The tabs at the top allow users to switch between different views of the leaderboard data.

</details>

<p></p>

*Super Rumble implements a leaderboard for users to compete around*

#### Technical performance: Target performance benchmarks

**Goal**: No significant technical barriers to enjoying the world.
**Measured by**: Frame rate, crash rate.
**Best practices**: Technical performance impacts your success in the discovery system, especially frame rate and crash rate. Here are some technical benchmarks to shoot for:

- Frame rate: above 60 Frame Per Second (FPS P25);
- Crash rate: less than 5% crash rate.

We provide tools in the editor to test and optimize the performance of your worlds. Get more guidance on performance [here](../Performance/Introduction%20to%20performance%20optimization.md).

## How else does Meta help you to increase your world’s discovery?

There are opportunities for worlds to be featured in Meta-led promotions and other curated experiences, such as:

- Promotion of worlds on Meta Horizon app, Quest headsets and Meta FoA.
- Meta Horizon social posts, website, blog, email newsletters.
- Featuring as a [creator success story](https://developers.meta.com/horizon/discover/success-stories/spin-the-bottle).
- Promotion of winners from Meta-sponsored creator competitions or challenges.

What can creators do to improve your chances of being considered?

- Broadly appealing content (themes, gameplay, assets) that meet [Worlds content guidelines](Worlds%20content%20guidelines.md), make sure you [fill in your world’s intended audience](Providing%20your%20intended%20world%20audience%20when%20publishing.md) in the world rating survey.
- Create high-quality key art and video assets (16:9, 9:16, 1:1).
- Ensure that worlds are accessible and “fast to fun” for new users.
- Integrate persistent variables, quests and leaderboards.
- Demonstrated a track record of investment in updates and live operations.

As you continuously optimize your worlds for better discovery, make sure to leverage the [Worlds analytics tool](../Performance/Analytics/World%20Analytics.md) to monitor performance and insights about your worlds and the progress you’ve made.