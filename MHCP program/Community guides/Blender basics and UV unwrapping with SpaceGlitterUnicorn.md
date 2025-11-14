Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/blender-basics-and-uv-unwrapping

# Blender basics and UV unwrapping with SpaceGlitterUnicorn

**Author**: SpaceGlitterUnicorn
**Date**: August 2024

## Introduction

This tutorial covers fundamental concepts in Blender, including 3D modeling, essential hotkeys, and UV unwrapping techniques. Following the steps outlined, you will learn how to create a simple book, table, and lamp, applying foundational skills in modeling and texturing.

🎥 Short videos are included throughout the written instructions to help you follow along.

**Creator Skill Level**
Beginner

**Recommended Background Knowledge**
Basic knowledge of the blender interface is good, but not required.

**Description**

This tutorial is focused on creating three simple objects: a book, a side table, and a lamp. Each object will be modeled step-by-step, followed by UV unwrapping to prepare the models for texturing. You will learn the essentials of Blender, including navigation, key hotkeys, and 3D modeling techniques. Throughout the tutorial, you will learn how to mark seams, unwrap meshes, and prepare for applying materials to the models. By the end, you will gain a solid understanding of basic 3D modeling and UV unwrapping in Blender, getting you started on future projects.

**Learning Objectives**

By reading and reviewing this written guide you will be able to:

* Understand Blender’s Interface:
  + Navigate the Blender workspace, including the 3D Viewport, Outliner, and Properties Panel.
* Master Basic 3D Navigation and Hotkeys:
  + Use essential Blender hotkeys (G, S, R, E) for moving, scaling, rotating, and extruding objects.
* Create Simple 3D Models:
  + Model a book, side table, and lamp using basic geometric shapes like cubes, cylinders, and cones.
* Apply UV Unwrapping Techniques:
  + Mark seams and unwrap 3D models for texturing purposes.
* Understand the Importance of UV Maps
  + Learn how UV maps work and why UV unwrapping is crucial for texturing in 3D modeling.

## Learning the Blender Interface

In this section, you will become more familiar with the basic interface, which includes:

* 3D Viewport
  + The 3D viewport in Blender is a 2D rectangle that allows users to visualize and interact with a 3D scene. It’s the main view that users see when they start Blender and is used for a variety of purposes, including modeling, animation, and texture painting.
* Outliner
  + The Outliner is the list of items in your blender file, such as mesh items, lights, materials, etc. This is where you will see your scene collections.
* Properties Panel
  + The Properties Panel in Blender is a user interface element that displays and allows editing of active data, such as the scene and object. The panel has several categories, or tabs, that group properties and settings by data type.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468450823_597980812739874_1049115858088829387_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=N-hB96du5BMQ7kNvwF8doBh&_nc_oc=AdkZD47xyNuk5UwW7nLlhudnFZ23I7H3mNhfrS5CFaeN_DMWXOKuHxRkGWSbF1GghNs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_Afi3o5Te-827PGMcAlM6RPySeDPhAx1dO0uS1BAuINuI6Q&oe=69311C23)

**Mentor’s Note:**
The best thing to do is to get familiar with these main areas. Explore and toggle all of the functions and see what they do!

Understanding basic Blender navigation and hotkeys is crucial for efficient workflow, allowing you to quickly manipulate objects, change camera angles, and access tools without relying solely on the mouse, significantly speeding up your 3D modeling, animation, and editing process; essentially, memorizing these key commands lets you work intuitively and seamlessly within the Blender interface, maximizing your creative productivity.

The quick examples are:

**Basic Navigation:**

* **Zoom**: Scroll wheel.
* **Pan**: Shift + middle mouse button.
* **Orbit**: Middle mouse button.

**Hotkeys Essentials:** Quick access to frequently used functions.

* **Move**: G
* **Rotate**: R
* **Scale**: S
* **Extrude**: E
* **Duplicate**: Shift + D
* **Undo**: Ctrl + Z

Here’s a [PDF with a full list of Basic Navigation and Hotkey Essentials](/hw-docs/MHCP%20program/Community%20guides/Basic%20Hotkey%20Guide%20to%20the%20Blenderverse.md).

**Basic Navigation and Hotkeys video walkthrough:**

[](https://video-dfw5-3.xx.fbcdn.net/v/t42.1790-2/468092420_387742254328197_9061162084494682747_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=6500a6&_nc_ohc=OB1mLYLZYXkQ7kNvwFTYWer&_nc_oc=AdlOztyk3GeKukrRDSW3ozE00An8Jc9WKCAY5YmgLaMwewsYi2mhduPpP_z_L4zTioo&_nc_zt=28&_nc_ht=video-dfw5-3.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_Afi4kokVU-g3xfwaXf-FQvqqIie94onbPJpElpbTCOabRg&oe=691CCE4B)

## Asset 1: Create a Book

Follow the steps below to create your first 3D asset:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468445600_597980802739875_2964957396061656219_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=O50g-C7vbdwQ7kNvwFbhxtr&_nc_oc=AdlI32XFxP6YsKP3h-q-lhAjH5QGBYdNJWiOv3ujIt4jXBMsWXkWSQZ1EAbJIxOKEJQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfjFuP-zLAwHi62CAp3X489CAC-PMYJxQ5KfGnoJv0pK0w&oe=69311E8F)

**Mentor’s Note:** Always use references when modeling. I have included my reference image of a book above.

### Book Asset Creation: A Step-by-Step Guide

- **Add a Cube**: Press **Shift + A** and select **Cube**.
- **Scale the Cube**: Use the **S** key to shape the cube into a rectangular book shape. Utilizing the **X** and **Y** axis to guide your scaling
- **Extruding:** In face select mode, Select where the book covers would be; front and back. Then select the spine. Press **E** to extrude.
- **Inset:** Staying in face select mode, now you will select where the pages will go. Press **I** to inset.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468529862_597980809406541_6907319099951515187_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ft4HfO2GsOUQ7kNvwFRdZca&_nc_oc=Adk6CgWkwqrMwHDuzvqk_nqP_1trETUp9q5QJt4f9_hAb-QbPubJk_wRsgjRrNKe9n8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfghNlK1SjC14iu9WVnN93izFflJSmCkliMyMalilYrYXA&oe=693142CB)

These guidelines will help you Model your book.

**Create a Book video walkthrough:**

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/467818278_543494048592517_1147038650273540791_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=6500a6&_nc_ohc=5K5CP2Tm-EsQ7kNvwFyslnc&_nc_oc=AdkZQpuAsafYk1XEAM7BCnrFAytvS2rcWw4G3E22kVJKWK8cPNptqB3KP5SAEL7olcs&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfiWDmUr5Gt183KV5Vle84JrNesyI1Zp_hBpVpLUWMFR4Q&oe=691CD590)

### Asset 2: Make That Table

This section will explore a more advanced technique to elevate your project.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468593117_597980816073207_7869972322125947484_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=MN2bptQQ2g0Q7kNvwGROWWp&_nc_oc=AdmZihFaYoMTPgcYPgeodwxBy_uhsyLCacEP-oMW4qEOmDqlqyXmCJLC1qvPFrW4NaA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfgiHryYIfHe4giqmgTCR3A392GEGsy7UTJTwpuE2a0Jow&oe=69311475)

**Mentor’s Note:** Save a lot. Save Often. Make it a habit to constantly save your progress. If you like what you made, **Press Save**!

### Table Asset Creation: A Step-by-Step Guide

- **Start with a cube**: Press **Shift + A** and choose **Mesh > Cube**.
- **Scaling and Shaping**: Use the **S** key to resize the cube to the desired table size.
- **Extruding:** Pressing **TAB** to go into edit mode, choose the face select tool, and select the top face. Press **E** to extrude by the\*\* Z\*\* axis. That will be your tabletop. You will use these same steps to create a drawer in the front face, Including\*\* I\*\* for Inset.
- **Creating Table Legs and adding edge loops:** Pressing **CTRL-R** to create edge loops to create some geometry for legs.
  * Note: This is a good time to experiment with symmetry, this will help create a more symmetrical and even build. The symmetry gizmo is located on the upper right-hand side of the **3D Viewport** in **Edit mode**.

  The image below will show the symmetry turned on by the X-axis, indicating mirrored actions. Take the time to experiment with symmetry!

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468426950_597980796073209_4096584711949522589_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=gd1iGgPPaNMQ7kNvwExZHtk&_nc_oc=Adl29GB-bWP8EFbNW1Boy3orH0zOWIgFR8pxk4sMct_NKHxv6UKUHzg_6PuIj2-AWas&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfgyTfbJ08VFQkOLvRjUMg1qoqDdaYX7zxmtJ6rNk3kWkg&oe=69313F1C)
- **Make a Drawer:** We’re going to go back to the face we left over specifically to build the drawer.
  * **Extrude Face:** Pressing **E** to extrude, Just enough to fill the space inside the table.
  * **Inset: \*\*Selecting the top face you’re going to press** I \*\*to inset.
  * \*\*Extrude Face: E \*\*Extruding that top face down to create the inside of the drawer.
- **Make a knob:** Let’s make a quick little knob for the drawer.
  * **Create a Cube: Shift + A** create cube. Here we are going to learn how to create a UV sphere.
  * **Add Modifier:** Here you are going to go to the right and look for the **Modifier tab**, Then select subdivision modifier. Then bring up 2 levels in the level viewport slider. Then Apply.
  * **Extrude and model:** Pressing **X** then the **Y** axix you’re going to squish in the sphere giving it a slight disk shape to form the knob. Selecting the 4 middle faces on one side of the sphere you’re going to **E** extrude outwards creating the stem of the knob.

**Mentor’s Note:** Be sure to make this Build your own and experiment with your own style!

Shown here are the different stages of the table being built! Sometimes it’s good to take a step back and look at the stages from a distance. If it looks close to this, you’re doing great!

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468544650_597980819406540_8924688177684564166_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=xr0Dsa79YFQQ7kNvwEGAWtJ&_nc_oc=Adk31PjP4uAHUAAjvah5quY2zJDI1KuCLUKij5JMQ-9FixXBNPjIxqBExuqlALu7YMQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfiEPvrvFNTQ-LmTxdoyfUUBzJK9qRkRgsJmKsAF8jbzQA&oe=69312D39)

**Make that Table video walkthrough:**

[](https://video-dfw5-3.xx.fbcdn.net/v/t42.1790-2/468230012_1122730475862007_6389819872229815162_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=6500a6&_nc_ohc=zaUP3k--AKoQ7kNvwFYlTTa&_nc_oc=AdnRQDpYOsx6K_pBn8zLgnvxkZ1hUIAHCmvylMFYMPGUszqZfm3MZHq1S9Ka9PGdMGc&_nc_zt=28&_nc_ht=video-dfw5-3.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfiAuNtKB-MjucWN0i3t6pBKkRr0k2fSU54coJqA7Lzong&oe=691CAF60)

## Asset 3: Brighten Up the Room with a Lamp

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468426021_597980826073206_2883939057841447670_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=znZ8f3XpZBIQ7kNvwFe3j6x&_nc_oc=AdnR81HShxH86zooVlMDCmqrDM6kqzXqLcm5xqW3P8mlBxBXRYMoDzE98WUiiiis41c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfhGTIKSHSf5WXVbUCpntUE_rt27Ho2Os7GWAFloHVTnOw&oe=69312563)

**Mentor’s Note:** Don’t be afraid to experiment by adding additional shapes to form your model.

### Lamp Asset Creation: A Step-by-Step Guide

- **Base Shape:** Start with a Cylinder by Pressing **Shift + A** and choose **Mesh > Cylinder**.(Be sure to bring down the poly count, there will be a tab in the lower left corner.) Then press **TAB** to jump into edit mode.
- **Extrude Up:** In face select mode, you will then select the top faces of the cylinder then **E** to extrude up. Alternate pressing **S** for scale to guide the model to the desired shape.
- **Add More Shapes:** What will your lampshade look like? Following the reference I will then Pressing **Shift + A** and choose **Mesh > Cylinder**. To create the lampshade. Then lower poly count on the lower left of your 3D Viewport. To Taper the lampshade, you will select top faces, and Press **S** to size it down.

After you create your mesh cylinder, this menu pops up on the lower left of your screen. Here you can adjust the vertice count! Keep an eye for these menus that pop up on the lower left, they can be very handy.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468425601_597980806073208_4836716041152208545_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=aiDFGK_1K-gQ7kNvwEzCF4u&_nc_oc=Adn2gFt-o5gov87WfSNqfeoAykM8xuHN6WBV5F5NTtiLNqW6pG8pgadTj9-oEa7fHV4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfinNnofN9qByYz0lJSfi3l9750Q7wVTTCPGTPcYtuKjYg&oe=6931280A)

- **Delete Faces and Extrude:** After the lampshade is modeled as desired, you will then delete the top faces on the cylinder and the bottom. Afterwards, Press **A** to select all. Press **E** to extrude.

**Brighten Up the Room With a Lamp Video Walkthrough:**

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/468399185_1345230203130323_8626381660905559130_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=6500a6&_nc_ohc=Dm9o8QeXSFcQ7kNvwEoV6Nl&_nc_oc=Adlrwx1WvzSwkoKb2ti6U2TSBVXQL9HfLG-9AHVFDC_5S3jnc3TtRMkgIX5I8V2vKdo&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfgeAKC3m3vmlZpVE4vxF0r0BOXyAy5DOyDCS2i8eMbAig&oe=691CC6B8)

Cheers! You’ve created your first set of 3D assets!

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468528836_597980822739873_1400011933091746245_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=NJqBlo2Mfw8Q7kNvwG1jkrM&_nc_oc=AdlC_rgGVkIgZVzCvtAXqnwI5u-cOin9j1wsG60gPA7HKB27YcHNjb0z-eqJJqsR23g&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfhOgqg64O98R2xqny88qhQRICvdmDD-M3ySu7c-IkljKQ&oe=69312957)

**Mentor Note:** With these same steps you can easily create your very own set of assets remembering to gather references and start with simple shapes!

Here is what the UV unwrapping stage will look like. It’s very basic and it should get you prepared for texturing! Pretend you’re taking a pair of scissors and cut along seams.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468544795_597980799406542_3094959477454634743_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=XRwGbX3j4fgQ7kNvwFAa8O-&_nc_oc=AdnDR_MCPRLzb8-Y7_1xf8nGn4GbJCAOMX8Vk144wgA3J0qZVUcCfoozTpwWHHc0dEU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_AfhAKJkvupHghzs953I6GJpW27DLcpHHTsRpDaPaoL9RuA&oe=693132C5)

## Introduction to UV Unwrapping

Now that we’ve got our models, let’s talk about UV unwrapping. This process allows us to apply textures to our 3D models.

**Mentor Note:** UV editing in Blender is the process of mapping a 2D image onto a 3D object, which gives the model more realism and control over how textures appear. The UV Editor is used to create and edit UV maps, which are flat areas that show how each face of a 3D object should be textured with a part of the 2D image.

### Unwrapping the Book Asset: Step-by-Step Guide

- **UV Editing Mode:** Select the book in object mode and locate the UV editing mode at the top center of the Blender interface. Now that we have the UV tab selected the screens will split. The left side will be the UV viewport, the right will be the 3D viewport.
- **Mark Seam:** Start by going into edge select mode and selecting the upper corner seams of the book, following your way around that very line. After that has been done press Right Click> Mark Seam, afterward select the inner seam running parallel to the same set of edge loops, and repeat. Creating seams as if you were cutting a pattern on a piece of paper.
- **Project from View:** Now that all seams have been marked let’s start unwrapping. Press A to select all, This ensures the proper parts are selected to work on. Afterward, on the upper side or the 3D Viewport, Locate the UV drop-down menu and select Project from View.
- **Unwrap:** On the left-hand side in the UV viewport locate the projected model. Press A to select all. Afterward, Right Click>Unwrap and you will see the book unwrapped flat! In 2D form.

**UV Unwrapping Video Walkthrough:**

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/10000000_1500170830674070_8467381353476647092_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=sJrk4cOZZqAQ7kNvwH7geii&_nc_oc=AdnOery01btfjFCz7Im79IhfgAmMry4Q8a_7vQohO5S6vwMpoHqWmv72aSPk9GiGhro&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=DPAlxztDIx0QJ2pgIWO9gA&oh=00_Afi-UDTA0PfzbbDaGyoUo343wvhbdatPYss_zHHSmwTZ1w&oe=691CACE7)

## Extended Learning

Below we have provided challenges for you to implement on your own. The advanced task may require some outside knowledge, and we encourage you to ask questions in Discord if you get stuck or are unsure how to complete any of these.

**Novice**

Create a House! In the tutorial link below, you will dive into learning how to make a structure that would pair nicely with your Book, Table, and Lamp.

https://youtu.be/qIf1je9OnMI?si=lkBmV4sMsJjLZUlZ

**Intermediate**

Make a Rocket! This item will explore more tools that will help you create things out of this world!

https://www.youtube.com/watch?v=04HFOAnCGfI&t=66s

**Advanced**

The Boss Round- but don’t be scared, the step-by-step tutorial linked below will guide you to create a bigger structure that is perfect for Horizon Living spaces. Make sure you give yourself time to complete this one. You won’t regret it!

https://www.youtube.com/watch?v=SzYgg6TeDfo&t=7s

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.