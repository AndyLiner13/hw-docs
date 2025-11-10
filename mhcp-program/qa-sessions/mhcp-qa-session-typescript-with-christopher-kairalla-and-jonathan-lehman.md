Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/qa-sessions/mhcp-qa-session-typescript-with-christopher-kairalla-and-jonathan-lehman

# MHCP Q&A Session: Typescript with Christopher Kairalla and Jonathan Lehman

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/10000000_1157664085536539_698185600567939749_n.mp4?_nc_cat=106&ccb=1-7&_nc_sid=6500a6&_nc_ohc=K0vmqzjinWwQ7kNvwESfmmV&_nc_oc=AdlEUkSCHdhOD6e0b0Ebtz2cvIiwMASzLnwxJoq2Qns99cXaML5BHOIpXTlqu3CozXg&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=BxfVw-UNlYRROGlV2XjmKQ&oh=00_Afiwdnsu3dIpXOg13ARwfDQYeNkAKO5MtLIwoR0ZZEP8Ig&oe=691781F3)

Join Meta experts, Christopher Kairalla and Jonathan Lehman for a Q&A session on Typescript moderated by Jeremy Sharff.

Timestamps:

[0:08] Intro

[1:19] Question 1: “How does TypeScript differ from code blocks in terms of performance and functionality? Specifically, what can I do with TypeScript that is not possible with code blocks?”

[9:48] Question 2: “Why is there an Entity.as() method instead of just using the TypeScript ‘as’ operator? Does .as() perform an operation to ‘change’ the Entity behind the scenes before returning the correct type? Why are entities not instantiated as their correct types and returned as their base class Entity? Or is the inheritance implied by the type hierarchy not actually implemented?“

[12:36] Question 3: “Is there a reliable method to execute a callback in the next frame? There are many corner cases when attempting this with OnUpdate or timers. The only reliable method seems to be sending network/code block events, which is unnecessarily cumbersome and restrictive in terms of what can be passed.”

[15:41] Question 4: “As a beginner who learns best through hands-on, step-by-step instruction, what advice do you have for creators who are not tech-savvy or have no coding experience?”

[19:40] Question 5: “Why are Players allowed in NetworkEvents, but not Entities or Assets? I sometimes have to resort to CodeBlockEvents just to send those types across the networks to other scripts. This seems like a design oversight. Shouldn’t Entity be added to the TransientSerializableState enum? Although I’m not particularly concerned whether it’s transient or not.”

[22:30] Question 6: “I can see that broadcast events can be used as a pseudo listen to events/connect events. In code blocks, I have a very widely used player manager that “listens” to the player object and executes those events on the host object. Is there a way or are there plans to allow player objects to create broadcast events or be listened to?”

[24:28] Question 7: “Could you provide the rollout schedule for the 2.0 API that has been hinted at in Discord? When will it be available for use, and when will the 1.0 API be disabled? Will this break published worlds still using 1.0?”

[28:39] Question 8: “In terms of scripting, can you help me understand how different items impact world performance? How can we ensure our scripts are resilient across different API versions, and are there plans to offer more direct equivalents to code blocks for monetization purposes?”

[32:34] Question 9: “Is there an opportunity to introduce our own music libraries and APIs? Or, is there a plan to establish an open system that allows trusted developers to integrate assets akin to MREs from Altspace?”

[34:56] Question 10: “Are there ongoing initiatives to integrate diverse AI technologies into the programming workflows for Meta Horizon Worlds?”

[39:32] Question 11: “I’m interested in learning about the forthcoming support for mobile and desktop development within Meta Horizon Worlds. Are there more tools anticipated to be released with the 2.0 update?”

[43:57] Question 12: “Some aspects of the API seem suboptimal, potentially to maintain backward compatibility with web browsers. Given that the API is custom-built for Meta Horizon Worlds, are there plans to refine these elements? For example, could the setTimeout() method be updated to avoid taking any[] args?”

[47:44] Question 13: “Do we have an official stance on using the API to train a private, local AI model that creates functional TS? Would this violate my NDA?”

[48:48] Outro

ON THIS PAGE