# Horizon TypeScript APIs

 When working with TypeScript components, you’ll frequently want to use Horizon’s
APIs, because they are designed to streamline your development process. These
custom APIs define objects that represent different entities, provide libraries
for common tasks, and frameworks for building scalable applications. To use a Horizon API, import it from the `horizon/core` module. All new Worlds use V2 of the TypeScript API by default. We strongly recommend
using V2 of the API, as V1 is no longer updated with new features. You can choose
between V1 and V2 of the [API reference docs](https://horizon.meta.com/resources/scripting-api/core.md/?api_version=2.0.0) in the version selector dropdown at the top of the page.  
## Other resources


• View the online Horizon TypeScript API reference [here](https://horizon.meta.com/resources/scripting-api/core.md/?api_version=2.0.0). Be sure to select the correct version ( 1.0.0 or 2.0.0) in the version selector dropdown at the top of the page. New worlds use V2 of
the API by default.
• If you are new to using TypeScript modules, check out the TypeScript [official module documentation](https://www.typescriptlang.org/docs/handbook/modules.html).
 Horizon API content class list example below: ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665661_512510677953555_9214172361803849395_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=9RCe2yh5d_AQ7kNvwE9N31y&_nc_oc=AdkwYJVIX3yVvI5Y1wzGm6zfuoixZrRMcjy1mbwBJWoUUAZW1kZKVlW_JljTWOPeP0I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=mOlouj2Yfbn6oKTnmN-Naw&oh=00_AffJMb-YLE7opXx2DuouDAuD8fM1...
 Note: This is only a shapshot of the Classes available to you.  
## How to import an API - option 1

  
```
import {Vec3, Color} from 'horizon/core';
const v = new Vec3(1, 2, 1);
const c = new Color(1, 0, 0);
```
  
## How to import an API - option 2

  
```
import * as hz from 'horizon/core';
const v = new hz.Vec3(1, 2, 1);
```
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
