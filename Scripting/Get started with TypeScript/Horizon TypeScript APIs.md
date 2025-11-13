Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/horizon-typescript-apis

Learn

# Horizon TypeScript APIs

When working with TypeScript components, you’ll frequently want to use Horizon’s APIs, because they are designed to streamline your development process. These custom APIs define objects that represent different entities, provide libraries for common tasks, and frameworks for building scalable applications.

To use a Horizon API, import it from the `horizon/core` module.

All new Worlds use V2 of the TypeScript API by default. We strongly recommend using V2 of the API, as V1 is no longer updated with new features. You can choose between V1 and V2 of the [API reference docs](https://horizon.meta.com/resources/scripting-api/core.md/?api_version=2.0.0) in the version selector dropdown at the top of the page.

## Other resources

* View the online Horizon TypeScript API reference [here](https://horizon.meta.com/resources/scripting-api/core.md/?api_version=2.0.0). Be sure to select the correct version ( **1.0.0** or **2.0.0**) in the version selector dropdown at the top of the page. New worlds use V2 of the API by default.
* If you are new to using TypeScript modules, check out the TypeScript [official module documentation](https://www.typescriptlang.org/docs/handbook/modules.html).

Horizon API content class list example below:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665661_512510677953555_9214172361803849395_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=gVy5oLSnBQoQ7kNvwGMBqPH&_nc_oc=AdlBFFXuU0bdgx4HAPL_J5wUMPwHnsiXSUOywKQRXbBj14wfOepgT8er69MP6m6nPbU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KN0SRkP4WJSdtmT59gX6Ig&oh=00_Afib-vSHKg1JIuonK-6qX90HDm1X_deSNw7A07ox5RaKGg&oe=692FA543)

**Note:** This is only a shapshot of the Classes available to you.

## How to import an API - option 1

```
import {Vec3, Color} from 'horizon/core';
const v = new Vec3(1, 2, 1);
const c = new Color(1, 0, 0);
```

## How to import an API - option 2

```
import * as hz from 'horizon/core';
const v = new hz.Vec3(1, 2, 1);
```