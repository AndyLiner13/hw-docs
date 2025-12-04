Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/getting-started-with-custom-model-import

# Getting started with 3D model import

## Custom model files

A custom 3D model is composed of multiple files, all of them must be specified when importing a 3D model into the desktop editor. The files include:

* An [FBX](https://en.wikipedia.org/wiki/FBX) file. This is the 3D model file format. It contains the 3D mesh along with scene data such as cameras, lighting, geometry, materials, and animations.
* One or more [PNG](https://en.wikipedia.org/wiki/PNG) files. These are image files, containing textures that map onto the model to make the spawned object look more realistic.

For example, you need to import five files in order to import this rifle asset:

![Image shows a 3D model of a futuristic rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/469383086_604977648706857_1533817991015737609_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Kd1ibcAgi-EQ7kNvwEpWrph&_nc_oc=AdlEyQuwegs_tHSZ25exRbq9hQVWWioaFFuBBjpbSv8Q09cr9EWm7VyAwpzVW-AOe7I&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cnBtZNUSxbcHdST05gp7Ow&oh=00_AfkhVfaRUeNYq7Aj8whED7UJBD2EAZ7V8BL2QWO5xjpddw&oe=694BB86A)

## Import a custom model asset

Follow this procedure to import a custom model asset, spawn an object from it, and add it to your scene.

**Note**: To complete this procedure, you need a custom 3D model (an FBX file and one or more PNG texture files) to import. If you don’t have a 3D model, you can get demo assets [here](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=hKO1ovie72AQ7kNvwGJghks&_nc_oc=AdmgGg61dbFY7D6JeXP02Zo0GifiRCdi_SWbACohWmOb81WqP5jvBiATxdOd1UBrYyM&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afn4GSc-fhDdXRdDocfJMGDHzkPc_KGdG9EPaF1NyCRg7w&oe=694BE3C5)
.

- From the Desktop Editor, click the **Asset Library** tab at the bottom of the screen and select **My Assets**.

  ![Click on the Asset Library tab to open the Personal Asset Library](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/463982802_573870205150935_1936916611175683589_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=7suWtQC9hzUQ7kNvwH79uF6&_nc_oc=AdlOacc2oWuwVjEH30s_cdoHgI6mvU8hokDiVMZaPExLW1D63vkDojuWrIbtqhfUZQQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cnBtZNUSxbcHdST05gp7Ow&oh=00_AfleFFQV3K5j_fjZ0iWgUmh3BtuLo-ULTNOXhex4DlFR4A&oe=694BCAA2)
- Add a new asset by clicking **Add New**, and select **3D Model** from the menu.

  ![The Import Models dialog box appears](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/469364005_604977652040190_8339871927361378787_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=muoOZ6VW8aQQ7kNvwHqgpuz&_nc_oc=AdkiivSTqpJf8imr2BZby1vBpIMZX7Kj8jITJQ-vs5CD5qzQweWUOTrmBgTJx684Po8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cnBtZNUSxbcHdST05gp7Ow&oh=00_AfnPpqaVrYsK4SESO6dqOC2ghC2xgdUZmmBCNnolcWEeKA&oe=694BD8EA)
- Select the asset files to import by clicking **+ Choose files on your device** on the dialog window that appears.
- In the file picker window, select the 3D model file and associated texture files; click **Open**.

  ![Select the five asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464310803_573870025150953_4833471769077242766_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=sPJDT2Eul9cQ7kNvwESvIEP&_nc_oc=AdnkHvQm9lpUbGZsTeEhYUzacOzqCY49yAam_sJMxNyw6Wap-3AQp7jFaXmO5o8WMbs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cnBtZNUSxbcHdST05gp7Ow&oh=00_Afnp6tjfiAr5R1ZJRXnhNVgJk_ET-_hnUQ6zvmUZUtrJ-g&oe=694BD6E8)
- In the dialog box, click **Import**. The following asset icon appears in your **My Assets** folder when the process is complete.

  ![This is what the rifle asset looks like after you import it](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464292127_573870045150951_3415127998518177098_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=1BOjCa-OyX4Q7kNvwFY2iio&_nc_oc=AdlLfFyxD3pcjY-rjGtkt89tlZWDYt4RFrLLkxVugMOjvRzd0eTdMC5hFsFA_Drn3-w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cnBtZNUSxbcHdST05gp7Ow&oh=00_AfmQtEM_0z5stm0_QuwbA7oR05UolqXld66i-MO9IviDNA&oe=694BB803)

Spawn an instance of the asset by clicking on the icon for the asset, dragging it into the scene, and dropping it anywhere in the scene. A rifle object appears in the scene, and in the hierarchy.

![The rifle floats over the pedestal](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475232756_641654861705802_4132254507512158168_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=3T52dWr15KQQ7kNvwHBimvT&_nc_oc=AdlWP62W2xkVKE9U-h3QnJSLFFBPiUdeQpFpq0v1yAWExR0sLlCe7MOvhpMH9ga6VJE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cnBtZNUSxbcHdST05gp7Ow&oh=00_AfnPUVZbgdomJZELufmARLk8msAlZqaWh2SnISV1OvQpmw&oe=694BDA57)

## Custom model workflows

In this section, you’ll learn about three workflows associated with custom models.

### Creating, saving, and importing custom 3D models

There are several requirements for creating and importing (ingesting) custom 3D models. There are naming conventions for files, specific file types, and texture types. For more information, see [Creating a Custom Model](/hw-mcp-tools/documentation/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

### Using static lighting to light a custom 3D model

Objects with built-in lighting can not be used in custom model worlds. This can be circumvented by setting up static lighting on a per-object basis using a static lighting gizmo. For more information, see [Static light gizmo](/hw-mcp-tools/documentation/hw-docs/Gizmos/Static%20light%20gizmo.md).

### Add collision to a custom 3D model

Your world’s performance degrades if you build your world with very detailed, complex 3D models. To improve your performance, Meta recommends that you add a simple collider to your 3D model’s FBX file, which turns it into a collider asset. You can define custom collision shapes in the FBX file. When these colliders are imported into Meta Horizon Worlds, they become collider entities. Collider entities are a new type of entity that are used only for collision. You can use the following types of colliders: **Box**, **Sphere**, **Capsule**, and **Mesh**.

A bonus mesh collider is available in the desktop editor. Although it doesn’t perform as well as the other colliders, it is more flexible and can conform to more complex shapes.

For more information, see the [Collider Ingestion User Guide](/hw-mcp-tools/documentation/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Collider%20Ingestion%20User%20Guide.md).

## 3D modelling resources

To learn more about 3D modelling, follow these links:

* [Glossary of 3D Terminology](https://www.inf.ed.ac.uk/teaching/courses/cg/Web/intro_graphics/glossary.html)
* [3D Modeling Tool Resources](/hw-mcp-tools/documentation/hw-docs/Custom%20models%20(FBX)/3D%20Modeling%20Tool%20Resources.md)
* [Custom Model Import Best Practices](/hw-mcp-tools/documentation/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Best%20practices%20for%20custom%20models.md)

## Known issues

* Custom model worlds don’t support spawning objects at runtime from assets that contain primitive shapes or static entities (entities with motion set to *NONE*). If you attempt to use such objects in your custom model world, you’ll break lighting and visuals, and it will impact your world’s performance.
* You cannot convert a primitive asset world into a custom model world.
* The desktop editor does not support custom shaders.
* When you publish your custom model world, it takes anywhere from one to two minutes for it to be cached. Caching ensures that subsequent visits to your world happen quicker. While your custom model world is being cached, you can still access it and load into your world, but you’ll notice that the load time is noticably longer.
* If caching fails, you’ll receive an email to let you know that your custom model world load time will take longer than normal. To fix this, simply re-publish your custom model world.

To receive the notification email, you must enable [Meta Quest > Email Preferences > App emails > Meta Horizon Worlds > Recommendations](https://secure.oculus.com/my/emails/).

* You can spawn objects from 3D custom models into a primitive asset world, but you won’t be able to publish it. A selection of primitive assets is available to use and publish in your custom model worlds.
* You can add primitive shapes (by clicking **Build > Shapes**) to your custom model world, but only for greyboxing. That is, you can’t use primitive shapes to build your entire world. You can always use custom 3D models to build your world after you’ve laid-out your design.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

- [Create your first world](/hw-mcp-tools/documentation/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md) using our step-by-step tutorial.
- If you have issues when running the desktop editor, see [Desktop Editor Troubleshooting](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Help%20and%20reference/Desktop%20editor%20troubleshooting.md)
- Learn about the desktop editor with the [Introduction to the Desktop Editor](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools Overview](/hw-mcp-tools/documentation/hw-docs/Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/) to learn about our program benefits.