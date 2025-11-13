Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/qa-sessions/mhcp-qa-session-world-optimization-with-michael-isaza

Learn

# MHCP Q&A Session: World Optimization with Michael Isaza

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/453829193_510985161480834_4395201870457880785_n.mp4?_nc_cat=100&ccb=1-7&_nc_sid=6500a6&_nc_ohc=skd_R38ALe0Q7kNvwEb754Y&_nc_oc=Adk135XM3fxunwSU3IkinPT3SVJoZfXx0GDNqK5YcA54qvcTSylsiq2BcL2YPzPNS5w&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=UE7Oi8xRzKjqe_ngtetExg&oh=00_Afj_idv13NV_o5P14rt3MUGZFFj_kQsN0e_iISl7ESgU-w&oe=691B4580)

Join Meta expert, Michael Isaza, as he answers questions related to optimizing your Meta Horizon builds. If you liked this video, be sure to watch [the “World Optimization Best Practices” video](https://developers.meta.com/horizon-worlds/lea/learn/documentation/performance-best-practices-and-tooling/connect-23-video-series-world-optimization-best-practices)gain even more expertise in optimizing your worlds.

Timestamps:

0:10 - Intro

1:32 - Is the primitive code blocks scripting being traced in Perfetto, or is it TypeScript only? If it’s being tracked, what entry should we look for?

8:57 - If there is no occlusion culling, how do we prevent too much stuff from being in the frustum?

10:58 - How do we diagnose problems in the non-main threads, i.e. what should we be on the lookout for in the rendering thread, audio thread, UI/ReactVR thread, hardware/GPU thread?

13:16 - In VR worlds where ecosystem interactions are complex, what optimization strategies are critical to prevent these systems from overwhelming the computational resources of the VR platform when considering factors that exist on the Horizon side of the system that creators cannot control?

16:17 - Can you dive a bit into what CPU will affect vs GPU? I feel like I only understand a surface level of what affects CPU and what affects GPU.

25:08 - Does the perf tool impact performance? Is it a large enough impact to change stats?

26:38 - What is less expensive performance wise, recorded animations that are activated with a script or 100% scripted animations using ‘move over time’ and ‘rotate over time’ codeblocks?

29:09 - What things in the perfetto trace should we ignore even if they look ‘concerning’ because they are beyond the scope of anything we can do anything about?

35:15 - What are the key considerations for optimizing VR worlds to maintain a consistent experience across different hardware capabilities? When the Quest 2 eventually phases out years down the line, will the team provide us with advance notice to begin shifting more of our focus to Quest 3 compatible worlds?

ON THIS PAGE