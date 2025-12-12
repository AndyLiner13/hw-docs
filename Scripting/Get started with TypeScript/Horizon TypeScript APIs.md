Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/horizon-typescript-apis

# Horizon TypeScript APIs

When working with TypeScript components, you’ll frequently want to use Horizon’s APIs, because they are designed to streamline your development process. These custom APIs define objects that represent different entities, provide libraries for common tasks, and frameworks for building scalable applications.

To use a Horizon API, import it from the `horizon/core` module.

All new Worlds use V2 of the TypeScript API by default. We strongly recommend using V2 of the API, as V1 is no longer updated with new features. You can choose between V1 and V2 of the [API reference docs](https://horizon.meta.com/resources/scripting-api/core.md/?api_version=2.0.0) in the version selector dropdown at the top of the page.

## Other resources

* View the online Horizon TypeScript API reference [here](https://horizon.meta.com/resources/scripting-api/core.md/?api_version=2.0.0). Be sure to select the correct version ( **1.0.0** or **2.0.0**) in the version selector dropdown at the top of the page. New worlds use V2 of the API by default.
* If you are new to using TypeScript modules, check out the TypeScript [official module documentation](https://www.typescriptlang.org/docs/handbook/modules.html).

Horizon API content class list example below:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/afdb001575ec0ce2af797f5e183b2cbad1c9ce5d29bbc5d732bf41c27a60c7e6.md)

### Overview
The image displays a table titled "Classes" with two columns: "Class" and "Description". The table lists various classes related to entities and gizmos within a game development environment, specifically Horizon.

### Key Elements
- **Column Headers**: 
  - **Class**: Located at the top left, spanning the width of the first column.
  - **Description**: Located at the top right, spanning the width of the second column.
  
- **Rows**: Each row contains a class name and its corresponding description.
  - **AchievementsGizmo**: Represents an achievement gizmo in the world.
  - **AnimatedEntity**: Represents an entity that can be animated by a transform.
  - **Asset**: Represents an asset in Horizon world.
  - **AttachableEntity**: Represents an entity that can be attached to other entities.
  - **AudioGizmo**: Represents an Audio gizmo in the world.
  - **CodeBlockEvent**: Represents an event within the Code Block scripting system in Horizon. These events can be sent and received both locally and over the network, and only support predefined serializable types. These are less performant then LocalEvent, so use them with care.
  - **Color**: Represents an RGB color.
  - **DynamicLightGizmo**: Represents a dynamic lighting gizmo in the world.
  - **Entity**: Represents an entity in a world.
  - **GrabbableEntity**: Represents an entity that the user can grab.
  - **HorizonProperty**: Represents a property in Horizon world.

- **Background Colors**: Alternating light blue and white rows for better readability.

### Visual Flow / Relationships
The table is structured in a grid layout with alternating background colors for readability. The columns are clearly defined, and the descriptions provide context for each class listed.

</details>

<p></p>



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