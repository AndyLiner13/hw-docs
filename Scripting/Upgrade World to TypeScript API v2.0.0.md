Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/upgrade-world-to-typescript-api-v200

# Upgrade World to TypeScript API v2.0.0

If you have created a world using a previous version of the TypeScript API, we strongly recommend that you upgrade it to API v2.0.0 for the following reasons:

* All new API features are landing in v2.0.0 first. They are backported selectively and typically only upon request.
* All future development efforts are focused on API v2.0.0. Bug fixes are first applied to that API version.
* Previous versions of the API are no longer being updated.

This doc outlines some basic changes to address the majority of issues during upgrade.

For the official Meta documentation, please see [Meta Horizon TypeScript V2 changes](/hw-docs/Scripting/API%20references%20and%20examples/Horizon%20TypeScript%20V2%20Changes.md).

## Upgrading your world

You can use the following steps to upgrade your world to API v2.0.0 and to address most of your validation issues. The remaining steps are likely to be dependent on the nature of your implementation.

**To upgrade your scripts**

- Create a clone of your world. Append v2.0.0 to the name. For example: `My World v2.0.0`.
- Open `My World v2.0.0` in the desktop editor.
- Click the scripts icon.

  ![The scripts icon.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481214090_656120596925895_3668757336005554961_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=RGRhmDM8H04Q7kNvwGVhCnb&_nc_oc=AdlaWdNXNvSRP05yW7ml_ccTgopRPldVuK5pb9pK9H5wJh7khXz5fB7omPuPilAweEE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=U8_iLyHoe6ncYVe2APZFaw&oh=00_AfjJXszm0AqWGN24sEQrUBydnsaPHxlxO0qADjrKpDdudA&oe=6931429F)
- In the Scripts panel, click the **Settings** icon.

  ![The settings icon.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/480959063_656120593592562_4716792606270847229_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Yu8srNTGJ94Q7kNvwENOnfk&_nc_oc=Adn60hhA8iGPBVqK8kqEaGkynSkTrGe03Q-ERBsOR6DqhRGJOi3KK-hgUr6T4HuIwQ4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=U8_iLyHoe6ncYVe2APZFaw&oh=00_AfjtafUQp8MmkeK6Att5OJn4ExuB2Xo3kvDYUSj70IE3zw&oe=69313D00)
- In the **Script Settings** panel, note all API modules from prior versions that are currently enabled.

  **Note:** Any modules from prior versions that are currently enabled will remain enabled after switching to v2.0.0. This can cause problems with script execution. You should map them to their v2.0.0 equivalents, and then disable them before upgrading.
- Select **2.0.0** from the **API** version list.

  ![The API version list.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480739240_657839686753986_2429896285946758678_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=2CsMLm9okIQQ7kNvwGi8bwg&_nc_oc=AdmahQ3xW6bPvySgMSaOzhRLJ11knWq0ZdzGucz1cKNejLHw12dMKFXVIj8dHb4rOn8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=U8_iLyHoe6ncYVe2APZFaw&oh=00_AfgiJvyWPZm0asYNEdG6yGhqv7Bicc7XCXFDaN8HjHF7wQ&oe=6931427D)
- Enable the API modules that you use in your world.

  ![Scripts settings.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480749184_656120523592569_5025516330542005334_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=l8xTByQLsKsQ7kNvwGH-XgD&_nc_oc=AdkrKa7b2M8BM-MRgdE39AfGFYbOGfxdds4kVuZi-3Rhk4YBR2rrMWESTcQ0LtPNT7Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=U8_iLyHoe6ncYVe2APZFaw&oh=00_Afim0GkpPXccX9mynLC4Jc3u07Ib_OgdSlC1QUxCTH1UFA&oe=69311D59)
- Click **Apply**.

## Fixing script validation errors

Each of your scripts used for a prior version of the Typescript API is likely to contain errors. You can perform the following to address most upgrade errors.

**Note**: We recommend that you fix these errors file by file rather than all at once. If possible, perform fixes in a file that is simple and testable first. When fixing the scripts, you may also find it helpful to create a copy of each line, comment it out, and then perform the update.

### Fix imports

All import statements must be updated to point to API v2.0.0 and their equivalents.

#### General:

| **Search string** | @early\_access\_api/ |
| --- | --- |
| **Prior version** | import { UIComponent, View, Text } from “@early\_access\_api/ui”; |
| **Replace string** | horizon/ |
| **New version** | import { UIComponent, View, Text } from “horizon/ui”; |

**/v1 to /core:**

In prior versions of the API, the main module was the /v1 module. In API v2.0.0, the main module has been renamed to /core.

Following examples assume you have performed the above changes.

| **Search string** | horizon/v1 |
| --- | --- |
| **Prior version** | import \* as hz from `horizon/v1`; |
| **Replace string** | `horizon/core` |
| **New version** | import \* as hz from `horizon/core`; |

### Fix Props and class declarations

The Props declarations outside of the class declaration are no longer necessary. The static propsDefinition are simplified.

**Prior version**

```
type UIComponentGetCandyProps = {
  triggerZone: hz.Entity
};

class UIComponentGetCandy extends UIComponent {
  static propsDefinition: hz.PropsDefinition = {
    triggerZone: { type: hz.PropTypes.Entity }
};
```

**API v2.0.0 version**

```
class UIComponentGetCandy extends UIComponent<typeof UIComponentGetCandy> {
  static propsDefinition = {
    triggerZone: { type: hz.PropTypes.Entity }
  };
```

#### Changes

* The type declaration outside of the class declaration can be deleted in all cases.
* The `<Props>` declaration that is part of the class is changed to `<typeof MyClassName>`.
* Type information in the static props declaration is no longer needed.

### Fix properties references

Some scripts have references to properties that are exposed in the **Properties** panel in the desktop editor. For example:

```
static propsDefinition = {
    triggerZone: { type: hz.PropTypes.Entity }
};
```

Elsewhere in your scripts, you may have references like:

```
myVar = myFunction(this.props.triggerZone)
```

These are likely to be broken. The general rule in API v2.0.0 is that property references cannot be passed directly into function calls and event listeners. Instead, they must be captured to a variable first and then passed in.

This can be fixed in the following manner:

```
  let mv: hz.Entity | undefined = this.props.triggerZone
  myVar = myFunction(mv)
```

### Upgrade events

In API v2.0.0, event names have changed.

**Note**: The `HorizonEvent` type is no longer available in API v2.0.0. Please use `LocalEvent` or `NetworkEvent`.

| **Previous event name** | **API v2.0.0 event name** |
| --- | --- |
| `sendNetworkEntityEvent` | `sendNetworkEvent` |
| `sendEntityEvent` | `sendLocalEvent` |
| `connectEntityEvent` | `connectLocalEvent` |
| `connectBroadcastEvent` | `connectLocalBroadcastEvent` |
| `sendBroadcastEvent` | `sendLocalBroadcastEvent` |

### Iterate and Test

The above changes should address the majority of your validation errors in upgrading your TypeScript to API v2.0.0.

Additional errors may need to be debugged and tested.

If possible, you should test the results of individual scripts as you address issues. As needed, you should write test code or debugger messages to verify proper execution of your code.