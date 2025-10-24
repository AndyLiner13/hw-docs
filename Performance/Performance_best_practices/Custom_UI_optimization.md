# Custom UI optimization
...
## Architecture

 Here is a diagram to give more context to the performance guidance below. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452694018_512500247954598_2260285939721962465_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=GN74uQI6s1EQ7kNvwFbTQWH&_nc_oc=AdkUqBLREy7VpxiEimu5MxXXx3HM6y3vyFfMFUCiwjsjZETfl8uSZqX7BfpskWP2HQ4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=j0yvwxBTzELc5cdnEOMqWQ&oh=00_AfeFAOaWkrSmfLUn...
...
# Custom UI optimization
...
## Profiling UI

 It will be helpful to review the [Deep profiling](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/cpu-and-typescript-optimization-best-practices#typescript-optimization) section of the [CPU and TypeScript Optimization Best Practices doc](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/cpu-and-typescript-optimization-best-practices/). There is a bridge call and a network RPC event associated with every UI
binding set and callback. These actions make up for all main thread synchronous costs
associated with UI. Target a CPU total cost for all UI in the world of less than
0.5ms per frame on the local client, and 1.5ms per frame on the server. From a Deep trace pulled into Perfetto, watch the synchronous cost of these
markers:
...
...
# Custom UI optimization
...
## Profiling UI
...
• For binding sets, look at these traces:
  • Client:
   • Verts::PollDriver::PreFrame
   • Verts::PollDriver::Rpc
   • CustomUI::UpdateBinding
  • Server:
   • ScriptingRuntime::Bridge::SetUIBindings
   • CustomUI::UpdateBinding::Send
• For callbacks, look at these traces:
  • Client:
   • Verts::Update
  • Server:
   • ScriptingRuntime::HandleEvent::customuicallbackinternal
• Other useful traces:
  • CustomUI::UpdateImage::Send (server)
  • CustomUI::UpdateImage (client)
  • CustomUI::InitializeState::Send (server)
  • CustomUI::InitializeState (client)

 One useful method to make sense of this in aggregate is to drag a 5 second block
across the main thread and look at the total wall time for that marker, divided
...
...
# Custom UI optimization
...
## Profiling UI
...
by 360. For Verts::PollDriver::Rpc in the screengrab below, that is 0.25 ms
...
...
# Custom UI optimization
...
## Profiling UI
...
(90.03099 wall duration in seconds divided by 360 frames). ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452531523_512500287954594_2391930062797882965_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=MiRq_CCwgggQ7kNvwEIoZw2&_nc_oc=AdlQ2pCpy6uN2R4Em4mfi6Og4fZJjC8jY2T8wZ4XRg82lrRSIMUXi01xn97d3qn8WNQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=j0yvwxBTzELc5cdnEOMqWQ&oh=00_AfcnZkg...
...
# Custom UI optimization
...
## Binding set and callback frequency limits

 The following table shows the limit we have found for binding sets and
callbacks. Exceeding this will likely exceed the 1 ms per frame cost limit outlined
above.
|  |
|  |
| Binding set | <= 20 per frame (for all users) | <= 10 per frame |
| Callback | <= 1 per 2 frames (for all users) | <= 1 per 2 frames |

  
## Network latency limitations

 The communication loop between a UI panel rendered on a client, and the
associated TypeScript engine on the server, is limited by the network latency of the
viewer. Common situations in which this should be factored in:
• Style changes based on raycast/mouse interaction events like OnHover
• Animations driven from TypeScript by a sequence of binding set updates over a
period

 Even working within the binding and callback limits above, viewers may notice UI
delays associated with the network call round-trip.  
...
...
# Custom UI optimization
...
## Memory usage

 Textures by far outweigh any other memory cost associated with a UI entity. This
includes a mandatory ~40 MB ReactVR panel render texture, as well as a copy of
any texture asset referenced by a UI image component (once per UI entity that
contains a reference to that asset, no matter how many times). Setting the visibility of a UI entity to false frees all textures to garbage collection. As such, everything in the [Spawning objects](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/cpu-and-typescript-optimization-best-practices#spawning-objects) section of the [CPU and TypeScript Optimization Best Practices doc](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/cpu-and-typescript-optimization-best-practices/) applies here, and toggling visibility can be a costly operation (especially on
...
...
# Custom UI optimization
...
## Memory usage
...
the server). Where possible, set the visibility of the UI entity to true at initialization, and leave it that way.  
...
...
# Custom UI optimization
...
## ReactVR

 In testing, we have found bridge calls and RPC costs to be the bottleneck
setting the limit for binding/callback frequency, and not ReactVR. That isn’t to say a
sufficiently complex virtual DOM could present limits on the ReactVR side, too.
If you suspect issues with this due to the UI being laggy or slow to refresh,
...
...
# Custom UI optimization
...
## ReactVR
...
we recommend using the [Meta Quest Developer Hub](https://developer.oculus.com/meta-quest-developer-hub/?intern_source=devblog&intern_content=meta-quest-developer-hub-mqdh-30) (MQDH) desktop software to study deeper. ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452916138_512500291287927_6920496205870430314_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=slUhFeahy_8Q7kNvwGFAsl6&_nc_oc=AdlaMUFuSWgV1cKd7IyrfYgNaVWIvKRX4wZX4yLwBREbNXTUKF94NCwu_IkeemQCfsI&_nc_zt=14&_nc_ht=sc...
...
# Custom UI optimization
...
## ReactVR
...
 Here, a Perfetto trace can be pulled in the Performance section, similar to the
in-app trace that was described before. The difference is that this trace shows
activity in the Hermes thread, which holds work done by the ReactVR runtime
...
...
# Custom UI optimization
...
## ReactVR
...
engine. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452678439_512500237954599_2792407842991222345_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=uYtSNhfKhc4Q7kNvwGI8bV6&_nc_oc=Adk_uPAQOXZiIgL3ofYkf0PxdmMlFnEW6YSSoA1HWewRfZZAOFZYV2PgM1KiRSWJ5Bg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=j0yvwxBTzELc5cdnEOMqWQ&oh=00_AfcTdYAAG1wIJcoymVIQ-4LhzQNi7bTf7...
...
# Custom UI optimization
...
## ReactVR
...
 In the screenshot above, running time (the green square) of the Hermes thread,
across a 5 second segment, is around 1%. Try to keep this less than 50%, to leave
room for other Horizon system UI.  
...
...
# Custom UI optimization
...
## Gotchas and anti-patterns

 Some constructs may seem benign, but are not a good fit for Custom UI (at this
time), so we call out to them below.
1. Do not define bindings without a concrete purpose. This may happen by writing a
custom abstract API layer wrapping the base UI components (View, Image,
Pressable, etc.), and defining bindings for every prop as a convenience to consumers. On
the local client, a binding set operation passes the entire key-value store to
ReactVR. So the bigger this gets, the greater the CPU cost to perform a single
binding set.
2. Animations, by way of periodic binding updates, should be implemented with care
or not at all. This is due to the twofold nature of (a) bridge call frequency
limits, and (b) network latency and droughts/bursts associated with that.
...
...
# Custom UI optimization
...
## Gotchas and anti-patterns
...
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
...
...
# Custom UI optimization
...
## Gotchas and anti-patterns
...
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Custom UI optimization
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fperformance-best-practices-and-tooling%2Fperformance-best-practices%2Fcustom-ui-optimization%2F)
...
# Custom UI optimization

 Custom UI allows for maximum developer flexibility but misuse of the feature can
significantly degrade performance. Since UIs are built using a TypeScript API,
several observations follow from the TypeScript Optimization section, above. For
what follows, the reader is assumed to have a good understanding of the Custom
UI TypeScript API. See [Custom UI](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui/) docs.
• We suggest keeping main thread CPU cost under 0.5ms per frame on the local
client, and 1.5ms per frame on the server (See Profiling UI section below).
• Reduce binding set calls.
• Binding set calls and callbacks are networked RPC events between the local
client and server, so the total time of each async operation is bound by the network
latency of the viewer.

  
## Architecture
 ...
## Profiling UI
...
## Binding set and callback frequency limits
...
## Network latency limitations
...
...
# Custom UI optimization
...
## Memory usage
...
## ReactVR
...
## Gotchas and anti-patterns
...
## Additional Links
...
      Learn
# Custom UI optimization
