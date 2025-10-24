# TypeScript FAQ

 Q: How do I do something that there currently isn’t a TypeScript API for, but I
can already do it with the existing scripting system? A: Text scripts and the existing scripting system can interact with events. You
can send an event with data from your text script to a legacy script. Then use
the legacy script to fill the missing API gap. Q: How do I use a JavaScript library that has no type information? (e.g. output
of a Webpack build or minified JS file)? A: Add the comment: `// @ts-nocheck` to the top of the file. Q: I am having trouble accessing the Online web API reference. What steps do I
take to resolve my access issues and what is it about? A: The [Horizon’s TypeScript API Reference](https://horizon.meta.com/resources/scripting-api/) provides a surface to read through the classes, functions, enumerations, type
aliases, and variables that are available to use when writing Horizon type
scripts. As APIs are added and updated within Horizon’s source code, reference
documentation will be updated and made available through this surface, ensuring all
creators can find the very latest APIs available in each world. Step through the following:
1. Make sure you have your Oculus and FB accounts linked via [https://accountscenter.facebook.com/profiles](https://accountscenter.facebook.com/profiles)
2. Navigate to [https://horizon.meta.com/fetch-dogfooding-ck](https://horizon.meta.com/fetch-dogfooding-ck)
3. Close that tab and then navigate to [https://horizon.meta.com/login](https://horizon.meta.com/login)
4. Hit “login” in the top right and log in using the Meta account you use for
Horizon
5. Confirm that you can visit [https://horizon.meta.com/creator/worlds_all/](https://horizon.meta.com/creator/worlds_all/)
6. If all steps above work, you now should be able to access the API reference: [https://horizon.meta.com/resources/scripting-api/index.md](https://horizon.meta.com/resources/scripting-api/index.md)

 Common errors:
•  I keep getting redirected to [https://about.meta.com/metaverse/...](https://about.meta.com/metaverse/?utm_source=about.facebook.com&utm_medium=redirect) whenever I visit horizon.meta.com
• 
  • This is due to incorrect access (step 2), doesn’t have correct Horizon account
linked (step 1) or missing (step 3). Attempt to follow the steps above again.
• I recently was added to the MHCP+ program and the above steps did not resolve
the issue for me
  • It is possible that you might not have been granted access to the Typescript
feature. Reach to your Meta focal contact to get your oculus ids added to the
proper product access gates.
 Q: Can I open my code project directly in VSCode without going though the script
panel in Horizon? A: Yes. VSCode has a handy ‘recently opened’ feature where you can easily find the world script folder. Q: How do I run actions with a delay (eg moveWithDelay)? A: With TypeScript there is not an explicit API, but you can do this using [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) which is available from within a Component.  
```
import {Vec3, Color} from 'horizon/core';

class MyComponent extends Component {
  start() {
    const position = new Vec3(0, 1, 0);   
    this.async.setTimeout(() => {     
      // called after 1s     
      this.entity.position.set(position);    
    }, 1000 /* 1000ms, or 1s delay */); 
  }
}

Component.register(MyComponent, "MyComponent");
```
 If you want to run logic on every frame - use the `World.onUpdate` event.  
```
this.connectBroadcastEvent(World.onUpdate, (data: { deltaTime: number }) => { 
  // do stuff every frame - deltaTime is in microseconds
});
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
