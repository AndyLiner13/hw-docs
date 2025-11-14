Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/getting-started-with-custom-model-import

# Getting started with 3D model import

## Custom model files

A custom 3D model is composed of multiple files, all of them must be specified when importing a 3D model into the desktop editor. The files include:

* An [FBX](https://en.wikipedia.org/wiki/FBX) file. This is the 3D model file format. It contains the 3D mesh along with scene data such as cameras, lighting, geometry, materials, and animations.
* One or more [PNG](https://en.wikipedia.org/wiki/PNG) files. These are image files, containing textures that map onto the model to make the spawned object look more realistic.

For example, you need to import five files in order to import this rifle asset:

![Image shows a 3D model of a futuristic rifle](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/469383086_604977648706857_1533817991015737609_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=VkybNtPXCm0Q7kNvwH_GxZJ&_nc_oc=AdlGiCcsZKTEkmizXqHLc8l6sMzFSO6AFykcDrERY5YF_9lnODD83GjXWvfJdU8Y_ZI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6rWZygd0V3gAhlSz0IFIsQ&oh=00_Afhq3c_bFvMbGa7KAqdi5_3JAaUAfOjo-2Car5fle1mE8g&oe=6931222A)

## Import a custom model asset

Follow this procedure to import a custom model asset, spawn an object from it, and add it to your scene.

**Note**: To complete this procedure, you need a custom 3D model (an FBX file and one or more PNG texture files) to import. If you don’t have a 3D model, you can get demo assets [here](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/57572945_551676440543626_8228778286502058757_n.zip?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=4kUF2spOTiMQ7kNvwFpoUkQ&_nc_oc=AdlwAKMXDVe9JrOCiFP20XspS-og2thSwT8LRA_6JC1uh3PZK8p9maRFKiGKearIuB0&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afh-ncGVmr2wOXXYfEfAoO_1pdVfS4WyuS5pXxooLnGrEw&oe=69311545)
.

- From the Desktop Editor, click the **Asset Library** tab at the bottom of the screen and select **My Assets**.

  ![Click on the Asset Library tab to open the Personal Asset Library](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/463982802_573870205150935_1936916611175683589_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=JCiR1KiItrUQ7kNvwFD3tl5&_nc_oc=AdmTL55CP-XbLTK2K-_x3ix-BvGutA1kHWE10msIwpZJSfrF1J4IShdmsCFLKquWh60&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6rWZygd0V3gAhlSz0IFIsQ&oh=00_AfidGFZvH5ioFps7qFF0qfFqAQPX4G9-igcFwJQQIuaSsA&oe=69313462)
- Add a new asset by clicking **Add New**, and select **3D Model** from the menu.

  ![The Import Models dialog box appears](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/469364005_604977652040190_8339871927361378787_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=XI8nuK_fvxEQ7kNvwEaAYVf&_nc_oc=AdlFQhEa7HS5Q4hRN91UMVu1DUV011QYGl9--jz36oYeMZkITyQRHXCgzdogCgO55T8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6rWZygd0V3gAhlSz0IFIsQ&oh=00_Afg3I0Gk7HXVWOLIwBcKO6nwstu6pKl3zfP3yDRjRUzIxw&oe=693142AA)
- Select the asset files to import by clicking **+ Choose files on your device** on the dialog window that appears.
- In the file picker window, select the 3D model file and associated texture files; click **Open**.

  ![Select the five asset files](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464310803_573870025150953_4833471769077242766_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=3DIefsUyXskQ7kNvwFyYIgt&_nc_oc=AdmQ8A00A9iiJIwIX8DfhaS5nXi9EyUe3oXgSu5J4d_YN6swnZwN9hTonVNHZE6ades&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6rWZygd0V3gAhlSz0IFIsQ&oh=00_AfjiKBjHR2KagDiaTNtcLLla1W-jgLw1MduWhns6u8wiPw&oe=693140A8)
- In the dialog box, click **Import**. The following asset icon appears in your **My Assets** folder when the process is complete.

  ![This is what the rifle asset looks like after you import it](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/464292127_573870045150951_3415127998518177098_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=pEYOc9mQJDUQ7kNvwHzNiVw&_nc_oc=AdmL9N2FUwpSp3OIk_OFIG4Wy71FHGXkwvdpT5xwFrm6rE8k_8emKED7eNobRdV5E-I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6rWZygd0V3gAhlSz0IFIsQ&oh=00_AfgImLHrJQBAItvZpEAp3MCqWR47wuBCjwjfJDPsesY6Zw&oe=693121C3)

Spawn an instance of the asset by clicking on the icon for the asset, dragging it into the scene, and dropping it anywhere in the scene. A rifle object appears in the scene, and in the hierarchy.

![The rifle floats over the pedestal](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/475232756_641654861705802_4132254507512158168_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=c13_GnRbddQQ7kNvwE2J3TR&_nc_oc=AdmJ5XRpNQxtmNBOcIqbHbojC4CESdw3LX5OY962xkS4NE7CDvjpWzsR7rgfsW5HT9E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6rWZygd0V3gAhlSz0IFIsQ&oh=00_AfgmpXFpGs2lsPJO5JdXODyxZ1ezh2TgWC0q4zKJvmHKpw&oe=69314417)

## Custom model workflows

In this section, you’ll learn about three workflows associated with custom models.

### Creating, saving, and importing custom 3D models

There are several requirements for creating and importing (ingesting) custom 3D models. There are naming conventions for files, specific file types, and texture types. For more information, see [Creating a Custom Model](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

### Using static lighting to light a custom 3D model

Objects with built-in lighting can not be used in custom model worlds. This can be circumvented by setting up static lighting on a per-object basis using a static lighting gizmo. For more information, see [Static light gizmo](/hw-docs/Gizmos/Static%20light%20gizmo.md).

### Add collision to a custom 3D model

Your world’s performance degrades if you build your world with very detailed, complex 3D models. To improve your performance, Meta recommends that you add a simple collider to your 3D model’s FBX file, which turns it into a collider asset. You can define custom collision shapes in the FBX file. When these colliders are imported into Meta Horizon Worlds, they become collider entities. Collider entities are a new type of entity that are used only for collision. You can use the following types of colliders: **Box**, **Sphere**, **Capsule**, and **Mesh**.

A bonus mesh collider is available in the desktop editor. Although it doesn’t perform as well as the other colliders, it is more flexible and can conform to more complex shapes.

For more information, see the [Collider Ingestion User Guide](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Collider%20Ingestion%20User%20Guide.md).

## 3D modelling resources

To learn more about 3D modelling, follow these links:

* [Glossary of 3D Terminology](https://www.inf.ed.ac.uk/teaching/courses/cg/Web/intro_graphics/glossary.html)
* [3D Modeling Tool Resources](/hw-docs/Custom%20models%20(FBX)/3D%20Modeling%20Tool%20Resources.md)
* [Custom Model Import Best Practices](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Best%20practices%20for%20custom%20models.md)

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

- [Create your first world](/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md) using our step-by-step tutorial.
- If you have issues when running the desktop editor, see [Desktop Editor Troubleshooting](/hw-docs/Desktop%20editor/Help%20and%20reference/Desktop%20editor%20troubleshooting.md)
- Learn about the desktop editor with the [Introduction to the Desktop Editor](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools Overview](/hw-docs/Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs) to learn about our program benefits.