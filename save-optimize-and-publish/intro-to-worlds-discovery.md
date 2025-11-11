Source: https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/intro-to-worlds-discovery

# Intro to Worlds discovery

## Introduction

As creators craft fun and engaging experiences in Worlds, we are here to help connect users with the most relevant and engaging worlds at every stage of their journey. Here we will go over how users discover worlds and how worlds are ranked across surfaces, as well as providing resources and insights you can use to improve user acquisition and engagement with your worlds.

#### TL;DR:

* Worlds discovery in Meta Horizon is primarily powered by our algorithmic recommendations that combine 4 distinct dimensional axes: Appeal, visit quality, repeat visitors, and technical performance.
* There are many ways you can improve the discoverability of your worlds, including providing high-quality accurate key art and descriptions, designing a good onboarding experience, implementing mechanisms for users to come back, and improving world quality by improving frame rate and crash rate. You can monitor the impact of the improvements you make in [world analytics](/hw-docs/performance-best-practices-and-tooling/analytics/world-analytics).
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
| **Appeal** *You should find content appealing in discovery.* | How well does a world get users to try the world based on art and information? | Proportion of users who have seen an impression of your world who then visit the world. | You can increase your world’s appeal by focusing on the world title, description, key art, and [thumbnail](/hw-docs/save-optimize-and-publish/thumbnail-ab-testing-tool). |
| **Visit quality** *You should find worlds compelling enough to have a sustained visit.* | How compelling is the world at hooking the user? Once users visit a world, was the experience enjoyable enough to stay for a while? | Sustained visit rate (% of visits with timespent more than 5 minutes in VR and 2 minutes on mobile) Timespent per visit. | You can increase the visit quality by incorporating a strong hook, tutorializing how to play, and making the world fun in the first few minutes. |
| **Repeat visitors** *You should find the experience rewarding and want to visit the world again.* | Do users return back to the world repeatedly? | Retention of users in world; Timespent per monthly active user. | You can increase the return visits by making the experience fun to replay and by using [persistent variables](/hw-docs/typescript/getting-started/persistent-variables-v2) to enable progress to be made over multiple sessions. |
| **Technical performance** *You should have a smooth experience within the world.* | How technically smooth is the experience within the world for the users? Are there crashes or frame drops that get in the way of the experience? | Frame rate in the world; crash rate in the world. | You can improve the technical performance of the world by using the [performance profiling and analytics tools](/hw-docs/performance-best-practices-and-tooling/introduction-to-performance) in the editor. |

### Promotions on Meta Horizon channels

Users may also discover worlds through Meta’s promotions on channels such as social media, email newsletters, and in-product spotlights. The criteria used for selection typically include quality of the worlds, mobile-specific optimization, engagement (i.e. timespent, retention), as well as how well the content fits into the themes of the marketing campaign. While there’s not a one-fits-all criteria, the rule of thumb is that popular, engaging worlds with high quality visual content and demonstrating exemplary use of creator tooling technologies have the highest chances of being featured.

### Horizon World discovery on Meta’s family of apps (FoA)

We have also started building the capabilities for worlds to be discovered and played directly within Facebook, Instagram, and others of Meta’s family of mobile apps. Today, you can visit the Gaming tab on Facebook mobile to find and play selected worlds. We are early in our journey and are still testing and iterating how Facebook and Instagram could be most effective as distribution channels for creators to acquire more worlds users more quickly. We will keep our community updated on our progress and share as the opportunity to be surfaced in Facebook and Instagram opens up broadly to the creator community. This will continue to follow the above principles of appeal, visit quality, repeat visitors, and technical performance.

## How to improve discoverability and acquire more users

The goal of our discovery system is to connect people with fun and engaging worlds that they enjoy. Improving the four values mentioned above (**appeal**, **visit quality**, **repeat visitors**, and **technical performance**) is the best way to increase your chances of getting discovered. You can monitor how well your progress and impact across these values using the [analytics](/hw-docs/performance-best-practices-and-tooling/analytics/world-analytics) tools, including impressions, sustained visit rate (SVR), and average time in world.

#### Appeal: Improve consideration

**Goal**: Increase the number of users who decide to visit your worlds as they discover them by providing high-quality accurate visuals and information
**Measured by**: Proportion of users who have seen an impression of your world who then visit the world
**Best practices**: Optimize world visuals to put your best foot forward

- **World images**: Quality images have been validated to be shown as one of the strongest levers to increase interest and downstream engagement. World images are the “book covers” in Meta Horizon, where accurate and exciting images can improve visits and time spent up to 40%. We have found that the closer the image is to the world experience, the more users will engage deeply. Focus on the following criteria:
  * Accurate gameplay that portrays real examples of in-world action
  * Accurate avatars, even when compared to more aesthetically pleasing avatars

- **Image A/B testing**: In the Developer Dashboard you can find the thumbnail A/B testing tool that allows you to upload an additional image and the system will test and provide results on which image drives more engagement. Given the impact that strong visuals can have on converting traffic, invest in testing different images to see what can be most appealing to grow your audience. You may want to test different examples of in-world action, different colors, brighter vs darker, logo styles. See documentation on [thumbnail A/B testing](/hw-docs/save-optimize-and-publish/thumbnail-ab-testing-tool).

- **Multiple image upload**: You will soon be able to upload 3 different image sizes for portrait, landscape, and square (16:9, 9:16, 1:1), which will map to the sizes used across different surfaces. It is imperative to design for these sizes to put your best foot forward, as square images (1:1) do not look appealing when cropped to another size like 16:9 (and vice versa). Poor cropping can significantly impair clicks and visits.
- **[Coming soon] World videos**: Along with your thumbnails, you will soon be able to upload videos, which have also been validated to be one of the strongest levers for world engagement (even stronger than images). The above principles apply on accuracy for quality engagement.

![Image shows two screenshots side by side, with the right image displaying a green checkmark noting it as the correct option](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/508550914_743234598214494_383569735638523571_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=PNqxuXz8WQEQ7kNvwGkjnNn&_nc_oc=AdntS4s7Hs_5Uyk5JRCdvy5u8cbn9NC4MpL5gb3Ng85t3R_diaDh77zayCO8XpqhCn0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=OvZScSUlbSKxpmWCNRh7vA&oh=00_AfjUP-7sIMJjoOFEMBuTwmZfw4nPUGRumHFTO7cz6gNyRw&oe=692BE8D4)*Kawaii Grocery before vs after, with testing showing significant improvement on traffic and visits*

Provide all the metadata requests for the system to accurately understand your world:

- **Title**: Ensure it is accurate, and be wary of long titles that could get cut off especially on smaller surfaces like mobile.
- **Description**: Many users will review the world details pages before visiting the world. Give informative and relevant descriptions so they understand what the experience is and how to interact in the world.
- **Genres**: While only 1 is required, providing 3 accurate tags will help users more quickly understand their interest and help the system distribute your world in relevant places. However, inaccurate genre tags can mislead users with high drop-offs that hurt engagement metrics used to rank your world and also muddy how the system understands your world.

![Image shows a world page with all of the metadata filled in](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/508387186_743234608214493_5074538767631862430_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=BBKvlIpl-ggQ7kNvwGyLCz7&_nc_oc=Adn8U7yFrXpinEpP3gHxSo7dR3zvvxHxBjT2NgcbGhZdKUpZB66lD-FNvtRJlr0fCoQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=OvZScSUlbSKxpmWCNRh7vA&oh=00_AfibX-X1t1nAthWuPHDQyJLGWkrWMiMs7BaGjU2qKOGvLQ&oe=692BE5DF)*Horizon central with clear assets, tags, and descriptions*

#### Visit quality: Hook and deepen engagement

**Goal**: Help users to learn about your worlds and how to enjoy the fun experiences you have created, especially new users.
**Measured by**: Time spent per visit, sustained visit rate (% of visits with timespent more than 5 minutes in VR and 2 minutes on mobile).
**Best practices**: Optimize the new user experience for a sustained first-time visit to your world.

- **Instructions**: Helpful and clear directions or tutorials on what to do on their first visit that is easily accessible from the spawn point. The showInfoSlides API for typescript is an easy way to do this for mobile users.
- **Multiplayer**: If your world is best played with other people, provide some things to do solo as well while the user is waiting for others to join or use [scripted NPCs](/hw-docs/desktop-editor/npcs/scripted-avatar-npcs/getting-started-with-scripted-avatar-npcs) to simulate other players. For worlds that have synchronous matches, use a lobby as a place where users can interact and queue up between matches.

![Image shows an example world with a tutorial pop-up window directing the player to the next goal](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/508136590_743234581547829_5814352829136910543_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=Plz0i3HLuGcQ7kNvwGJLtEU&_nc_oc=AdlzJMJJLS6Q7g3bGIrI5oBiE7hE7bU_4iowIQbnifiOYATd4NQRCiLKU0aJVQV3_oI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=OvZScSUlbSKxpmWCNRh7vA&oh=00_AfgIS1TODTuz6dPFd9hPIP0n9EAQUirU0QIq7i7rY7cL9g&oe=692BFAB0)*Shovel Up features new user onboarding with tutorials on what actions to take next*

#### Repeat consumption: Drive retention

**Goal**: Build content and mechanisms to give users a reason to come back to your world.
**Measured by**: Retention of users in world, timespent per monthly active user.
**Best practices**: Design an in-depth experience in your world and provide reasons for users to stay in your worlds and have fun for an extended time. We’ve built a suite of features you can implement in your worlds to engage your audience.

- **Persistent variables**: Persistent variables let you provide permanent progression to users that persists between sessions in your world, creating a deeper experience. See more documentation on [persistent variables](/hw-docs/typescript/getting-started/object-type-persistent-variables).
- **Quests**: Quests allow you to build achievements on top of persistent variables in ways that can be surfaced within the world (and outside of it). This gives users something to do and gives a sense of accomplishment in their first few moments within your world, and a reason to keep engaging in your world. See more documentation on [quests](/hw-docs/desktop-editor/quests-leaderboards-and-variable-groups/quests-overview).
- **Leaderboards**: Leaderboards allow you to automatically enter users into a score-based competition. This gives your content repeatability and a reason to keep playing, even if the gameplay is shallow. Reset your leaderboards at a regular interval to keep users motivated to come back and get back on the leaderboard. See more documentation on [leaderboards](/hw-docs/desktop-editor/quests-leaderboards-and-variable-groups/leaderboard-reset-frequency).

Maintain live operations of your world to consistently give users new reasons to come back.

- **World updates**: Actively maintain your worlds with fixes and new content to give users the feeling that it’s worth re-visiting time and time again.
- **Return game mechanics**: Integrate game mechanics that encourage users to come back periodically to make progress or collect rewards (e.g. daily log-in rewards).
- **[Events](/hw-docs/save-optimize-and-publish/creating-events/)** (currently available to Meta Horizon Creator Program members, [join now](https://developers.meta.com/horizon-worlds/programs)!): Host events in your world so users have fresh activities to do in your world. By hosting an event, users can subscribe and receive notifications to come back to your world. It also gives surfacing to your world in event shelves. When users have good experiences with your world’s events, they’ll subscribe to attend more, which creates a positive cycle of engagement and retention.
- **Save**: Help users come back to your world by encouraging them to save your world, which will help them to find your world again in the **Saved** entrypoint or shelf. Your world will also be eligible to be surfaced when we recommend content from a user’s list of saved worlds. You can do this via giving instructions in the world or by utilizing the save gizmo.

![Image shows the world listing for Bobber bay, including a note of recent updates](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/506476570_743234588214495_3191315324697182511_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=gk6-SLJH2hMQ7kNvwFZfM7u&_nc_oc=AdnLoCA-j1JSYGZ3P2gObZBqLYYwvM48Fd62IFiF083UQnoGWjick6EN-Vx08yXHbf4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=OvZScSUlbSKxpmWCNRh7vA&oh=00_Afj4FxlIw18OoAh9fGqfkSKkSF-HoVs5_GOj3GE4Dabf8Q&oe=692BFA10)*Bobber Bay Fishing does regular updates on new content*

![Image shows an example leaderboard](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/506452807_743234614881159_2816668089721638828_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=SJQ0e8KT-xUQ7kNvwG3BoXS&_nc_oc=AdkBbhVLQX5cjIZW8O6rqmsKKFzLRXwcVdHvrSkLdh6IFOIFBZ0x1s4mmrTZyPZo6Gk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=OvZScSUlbSKxpmWCNRh7vA&oh=00_Afhwt0czuQgVq-QK8bu6tHh4X6SBuiu2B5cl1QYDaJ_5lQ&oe=692C11A5)*Super Rumble implements a leaderboard for users to compete around*

#### Technical performance: Target performance benchmarks

**Goal**: No significant technical barriers to enjoying the world.
**Measured by**: Frame rate, crash rate.
**Best practices**: Technical performance impacts your success in the discovery system, especially frame rate and crash rate. Here are some technical benchmarks to shoot for:

- Frame rate: above 60 Frame Per Second (FPS P25);
- Crash rate: less than 5% crash rate.

We provide tools in the editor to test and optimize the performance of your worlds. Get more guidance on performance [here](/hw-docs/performance-best-practices-and-tooling/introduction-to-performance).

## How else does Meta help you to increase your world’s discovery?

There are opportunities for worlds to be featured in Meta-led promotions and other curated experiences, such as:

- Promotion of worlds on Meta Horizon app, Quest headsets and Meta FoA.
- Meta Horizon social posts, website, blog, email newsletters.
- Featuring as a [creator success story](https://developers.meta.com/horizon/discover/success-stories/spin-the-bottle).
- Promotion of winners from Meta-sponsored creator competitions or challenges.

What can creators do to improve your chances of being considered?

- Broadly appealing content (themes, gameplay, assets) that meet [Worlds content guidelines](/hw-docs/save-optimize-and-publish/restrictions-to-worlds-in-horizon), make sure you [fill in your world’s intended audience](/hw-docs/save-optimize-and-publish/intended-world-audience) in the world rating survey.
- Create high-quality key art and video assets (16:9, 9:16, 1:1).
- Ensure that worlds are accessible and “fast to fun” for new users.
- Integrate persistent variables, quests and leaderboards.
- Demonstrated a track record of investment in updates and live operations.

As you continuously optimize your worlds for better discovery, make sure to leverage the [Worlds analytics tool](/hw-docs/performance-best-practices-and-tooling/analytics/world-analytics) to monitor performance and insights about your worlds and the progress you’ve made.