Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/typescript-faq

# TypeScript FAQ

**Q: How do I do something that there currently isn’t a TypeScript API for, but I can already do it with the existing scripting system?**

A: Text scripts and the existing scripting system can interact with events. You can send an event with data from your text script to a legacy script. Then use the legacy script to fill the missing API gap.

**Q: How do I use a JavaScript library that has no type information? (e.g. output of a Webpack build or minified JS file)?**

A: Add the comment: `// @ts-nocheck` to the top of the file.

**Q: I am having trouble accessing the Online web API reference. What steps do I take to resolve my access issues and what is it about?**

A: The [Horizon’s TypeScript API Reference](https://horizon.meta.com/resources/scripting-api/) provides a surface to read through the classes, functions, enumerations, type aliases, and variables that are available to use when writing Horizon type scripts. As APIs are added and updated within Horizon’s source code, reference documentation will be updated and made available through this surface, ensuring all creators can find the very latest APIs available in each world.

Step through the following:

- Make sure you have your Oculus and FB accounts linked via <https://accountscenter.facebook.com/profiles>
- Navigate to <https://horizon.meta.com/fetch-dogfooding-ck>
- Close that tab and then navigate to <https://horizon.meta.com/login>
- Hit “login” in the top right and log in using the Meta account you use for Horizon
- Confirm that you can visit <https://horizon.meta.com/creator/worlds_all/>
- If all steps above work, you now should be able to access the API reference: <https://horizon.meta.com/resources/scripting-api/index.md>

Common errors:

* I keep getting redirected to [https://about.meta.com/metaverse/...](https://about.meta.com/metaverse/?utm_source=about.facebook.com&utm_medium=redirect) whenever I visit horizon.meta.com
* + This is due to incorrect access (step 2), doesn’t have correct Horizon account linked (step 1) or missing (step 3). Attempt to follow the steps above again.
* I recently was added to the MHCP+ program and the above steps did not resolve the issue for me
  + It is possible that you might not have been granted access to the Typescript feature. Reach to your Meta focal contact to get your oculus ids added to the proper product access gates.

**Q: Can I open my code project directly in VSCode without going though the script panel in Horizon?**

A: Yes. VSCode has a handy **‘recently opened’** feature where you can easily find the world script folder.

**Q: How do I run actions with a delay (eg moveWithDelay)?**

A: With TypeScript there is not an explicit API, but you can do this using [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) which is available from within a Component.

```vs
import {Vec3, Color} from 'horizon/core';

class MyComponent extends Component {
  start() {
    const position = new Vec3(0, 1, 0);
    this.async.setTimeout(() => {
      // called after 1s
      this.entity.position.set(position);
    }, 1000 /* 1000ms, or 1s delay */);
  }
}

Component.register(MyComponent, "MyComponent");
```

If you want to run logic on every frame - use the `World.onUpdate` event.

```vs
this.connectBroadcastEvent(World.onUpdate, (data: { deltaTime: number }) => {
  // do stuff every frame - deltaTime is in microseconds
});
```

ON THIS PAGE