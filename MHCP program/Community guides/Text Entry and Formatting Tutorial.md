Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/text-entry-tutorial

# Text Entry and Formatting Tutorial

In this tutorial, you’ll explore efficient methods for importing and manipulating text in Meta Horizon Worlds using TypeScript. You’ll learn the simplest ways to integrate large blocks of text, to format text using TypeScript code, and you’ll even learn how to create text dynamically.

You can use the example code in this tutorial can be used by creators of all skill levels. Don’t worry if you’re new to TypeScript. By the end of this tutorial, you’ll be able to import text, format text, and create exciting, randomized game mechanics that surprise and engage your visitors.

* Creator skill Level: All levels
* Required background knowledge: No prior skills required.
* Recommended background knowledge: Horizon Desktop Editor, TypeScript, VS Code, Codeblocks.

**Note:** This tutorial contains TypeScript code that you can download. This code was provided by MHCP mentor Laex05 and Vidyuu team. If you encounter any issues with the TypeScript code, you can contact info@vidyuu.com, or Laex05 on Discord for assistance.

## Learning Objectives

To complete this tutorial, you’ll complete the following tasks:

* Learn about formatting options available in the Text Gizmo using TextMeshPro
* Write and edit text using the Horizon Desktop Editor directly on TextGizmos
* Easily place TextGizmos using the Horizon Desktop Editor
* Send text & text arrays from TypeScript to Codeblock scripts
* Request from and send random questions and answers to Codeblocks from TypeScript
* Receive text in TypeScript from Codeblock scripts
* Create a “MegaText” script in TypeScript, which can be used on desktop and in headset
* Write text with formatting in TypeScript
* Write text with the Vidyuu formatting library in TypeScript
* Basic ad-lib story generation in TypeScript using string array imports
* Advanced ad-lib story generation in TypeScript by picking a random story template and random player name

## Text Gizmo Formatting Cheat Sheet

When writing text on the Horizon Text Gizmo, the formatting options listed below are great for creating rich text and style. In the “text” property of the properties panel or using “text.set” in a TextGizmo Entity in Typescript, you can insert these codes to create the associated formats. These work because the Text Gizmo uses TextMeshPro (notably the Custom UI Gizmo does not support TextMeshPro formatting options). TextMeshPro is built into the backend of Unity and thus Horizon. It is what enables these formatting options. It is not specifically endorsed by, or made available by Horizon, but it has been used by creators for years to create stylistic text. Consider downloading [this image](https://drive.google.com/file/d/1YhXm8MMNFZ_b8mO0Ec4fSs75S4uKEN4r/view?usp=sharing) and keeping a copy of it in a convenient location for all your Text Gizmo formatting needs (reminder these are not supported on the Custom UI Gizmo).

The Text Gizmo in Horizon can hold up to 1000 characters. This includes formatting characters. This limit is easy to hit when you want to create rich text blocks. In many cases, it might be useful to use multiple Text Gizmos. The new Custom UI Gizmo is also a great option, but it has a steep learning curve, and creating rich text is a lot more difficult as it uses CSS-like styling (but more on that in a different tutorial).

## Text Formatting Options

* **Sprites (Emoji)**
  + `<sprite=0> 😜<sprite=15>` 😍 (values range from 0 through 15)
  + `<sprite=”dropcap numbers” index=0>` (values range from 0 through 9)
* **Subscript & Superscript**
  + `<sub>subscript</sub>`
  + `<sup>superscript</sup>`
* **Character Spacing**
  + `<cspace=1>S p a c e </cspace>`
* **Line Height**
  + `<line-height=0.1></line-height>`
* **Alignment**
  + `<align=left></align>` (options for left, right, and center)
* **Color, Highlighting & Transparency**
  + The easiest way to color text is to paint the gizmo using the paint tool
  + `<color=#ff0000>Red<color=#00ff00>Green<color=#0000ff>Blue</color>`
    - RGB colors using hex values (where 00 is 0%, ff is 100%)
  + `<color=#ff000080>Color With Transparency</color>`
  + `<alpha=#80>Transparent</color>`
  + `<mark=#00ffff7f>Highlight</mark>`
  + Solid Transparency For Windows `<mark=#00ffff7f>[TAB] </mark>`
    - Press [TAB] on keyboard in Horizon
* **Italic, Underline, Bold, Strikethrough**
  + `<i>Italic</i>`
  + `<u>Underline</u>`
  + `<b>Bold</b>`
  + `<s>Strikethrough</s>`
* **Linebreak**
  + `<br>`
* **No Parse**
  + `<noparse></noparse>` (show codes like these)
* **Font Size**
  + `<size=1></size>` (relative to size set on Text Gizmo)
* **Equal Spacing**
  + `<mspace=0.1></mspace>`
* **Uppercase, Lowercase, Small Caps**
  + `<uppercase>UPPERCASE</uppercase>`
  + `<lowercase>lowercase</lowercase>`
  + `<smallcaps>SMALL CAPS</smallcaps>`
* **Position & Offsets**
  + `<pos=40em></pos><pos=60%></pos>` (horizontal position)
  + `<voffset=2em></voffset>` (vertical offset)
* **Rotated Text**
  + `<rotate=-20>Rotate</rotate>`
* **Font Options**
  + `<font=bangers sdf>BANGERS SDF</font>`
    - Other Font Options:
      * Anton SDF
      * Roboto-Bold SDF
      * Oswald Bold SDF
      * Electronic Highway Sign SDF
* **Font Materials**
  + `<font=anton sdf><material=anton sdf - drop shadow></material></font>`
    - Try painting some of these different colors
    - Other Material Options:
      * Anton SDF Outline
      * Bangers SDF - Drop Shadow
      * Bangers SDF - Outline
      * Bangers SDF Logo
      * Roboto-Bold SDF - Drop Shadow
      * LiberationSans SDF - Metallic Green
      * LiberationSans SDF - Drop Shadow
      * LiberationSans SDF - Overlay
* **Gradient Options**
  + `<gradient=”Yellow To Orange - Vertical"></gradient>`
    - Other Gradient Options:
      * Dark To Light Green - Vertical
      * Light To Dark Green - Vertical
      * Blue To Purple - Vertical
    - The color is sret to white, otherwise the colors blend together:
      * Text painted pale green
      * Text painted purple
      * Text painted green
      * Text painted yellow
      * Text painted white

## Edit Text Using the Desktop Editor

In this section, you’ll familiarize yourself with the Meta Horizon Worlds Desktop Editor. You’ll use it to create a new world, and then you’ll add a Text Gizmo to it.

To complete the following procedure, you’ll need:

* A Windows computer.
* The Meta Quest Link (Oculus) app.
* VS Code.

**Mentor’s Note:** I recommend creating a new world to serve as a playground for experimentation before starting. As an example, the image below shows this world is named “Text Tests” with the current date in parentheses.

- Launch the Meta Quest app.
- In the Meta Quest app, navigate to and start the Meta Horizon Worlds app in Desktop Mode.
- Create a new world. Give your world a name, and then select **Custom Model Import**.

  ![Select Custom Model Import](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/468198625_595241713013784_8092391770579618737_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=-wnqk0Ahj8QQ7kNvwHAbmWg&_nc_oc=Admwe9nMtWkKtvpl4w5pz_B088SnfbFuKqNXhu3pj6Ky3kASnCjACow8KYeqvH7CGI4&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfgSUvKttuIcqDMEWRy26QC1ldBq3Cxis5J2I3O-F9dxtQ&oe=69462FD4)

Adding the Text Gizmo, to a scene using the Desktop Editor is difficult. Meta recommends that you add the Text Gizmos in VR. But writing text in VR is also difficult, especially if you want to add any of the formatting options. If you want to use the Desktop Editor, see Adding text gizmos using the desktop editor.

- Add a text gizmo to your scene.
- Select the text gizmo from the Hierarchy.
- Edit the text field in the Property Panel. You can also adjust properties, like font size and color, just like you can in VR.

  ![Add the Text Gizmo to a scene use the Desktop Editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467769589_595241743013781_7349902689390694342_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=H50w_YfvjcgQ7kNvwE68HSG&_nc_oc=AdmjMIDpuMcB1nUzmtJy36TG5iZ8y8YlScRxFe2ixkOfzpAkmrYNKIE8hR6UDRKoeUc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfgWZ75qtoWPOf4e6ccqqnJfiFOou9VdOCViZBVXvBOeiA&oe=69465429)

You can use the text field to write text and to copy and paste text into the text gizmo.

## Adding Text Gizmos Using the Desktop Editor

Here are some tips to help you if you want to add a text gizmo using the Desktop Editor.

- Add a text gizmo to your scene, here are a couple of tips to make your life easier.

  ![Add a text gizmo to your scene](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467842483_595241769680445_620494155645858280_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=kx4ZDNBkQGMQ7kNvwEUFtWc&_nc_oc=AdlRVybvr9xMSL_1iJCzNrP4jghq5slOifVQ2iRCEvSllwCnbeuWmOa4x1fDz1AFlXY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfjGbSZn0wSHemHpPNzTb7-W-lKbeEQQFbK0sRKQIDR7rA&oe=69463376)
- Add some filler text on the properties panel, in this case, in the image below, we have added “Hello World.”

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467879381_595241639680458_9173102621139393361_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=5w3glk6pd2EQ7kNvwFidvS-&_nc_oc=Adl0HIxDWIKMRg1JB8kKoL_8EH4GN9_TXOGs4atnH4vLtNN24Y83n6J7BGN0UGyxIH8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfhtEO_gGRzlYMfxmS3S7fuWr_qCzUIW0drp3rHTtEFPOw&oe=69462B8D)
- Then, presuming you have an object you want to place the text up against, click on that reference object and right-click to copy the position of the reference object.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467856751_595241789680443_6078805237931826866_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=35CCY54UFzgQ7kNvwGXALJL&_nc_oc=AdnDTlCxeMa0kj9q7LbWPnPFcbai_Sz6-d_CuPhhMlMYlrIV6hYD29ngA17xwflhX2M&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfhpyZvTB5ClzdnNIIYJ_Ji0cKmyfiB5rCz3GGd778SQHw&oe=69463A97)
- You can then click on the Text Gizmo and right-click to paste the position. You may have to repeat these steps to paste the rotation from the reference object as well.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468018101_595241793013776_4213593910410519336_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fx57FcFzAZEQ7kNvwHjCRkK&_nc_oc=AdnQSgi7RnFtFbEwGFd8GyfYeKTl6VSFL6UgVIPVYm73HmAZTvaPiggyeDo2XIfGekM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfhZDrTGPvfwoS1jxf9WNE-sYvlQ2FC_VAGrv0gfqiwRrg&oe=69463A72)
- Then, with the slide tool selected, and snapping turned off, grab one of the slide arrows to pull the text out of the reference object.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467952672_595241726347116_117331172420294193_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=c4QpLIACvdwQ7kNvwGquNnw&_nc_oc=AdlUC0d9ufAbDcR-f3hnjpV4YkQcWk-sV2ebd_QoZq028fIyNkh9oVK47ebkKDiMwUY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfiAEpdtOlOD8HY01j77gd6xxAIHzzWa1QdpOiBkJgmLRw&oe=6946587E)
- Now that you have positioned the text, it may need to be rotated. If you copy and paste the rotation of the reference object, and it is still off, you may consider manually adjusting the values from the properties panel. Or you can use snap rotation, I like to set it to 90 degrees.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467899374_595241633013792_7017878112968153930_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=AXe10GFH-3cQ7kNvwFsfmJE&_nc_oc=AdlhMk5HVJpkdk6rfXU8VAdEJq3SlSUlLkosLq4OPCK14li8UAcO0FlGqlmgIA2BdG8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfhdwS3e-64xAV0AzXNDI5l9c2MLOLHtoGaGVmRgS_UgAw&oe=69464A42)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467842237_595241629680459_7331484596920045925_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z1i5iS32WUwQ7kNvwHWFSid&_nc_oc=AdnlC8lwVmW4JMbORKzqk6C_qDO0obNsTgZgLEcSllc_XYKpVKeMMnlQY0saZVSyBWE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afgi5RefG3i3v__kqSRwH-RIhfcQVZRDs4g4WkCLGGxXEw&oe=69462E02)

You should now have your text positioned and can fill out the text and properties to your liking.

## Script 1 & 2: Send String(s) from TypeScript To Codeblock scripts

In this first script, the goal isn’t to cover advanced TypeScript concepts but to simply allow you to use TypeScript code to augment your Codeblock scripts that need more rich text. You’ll do this by sending a string variable as a parameter. This can also be a list of strings. The script calls lists in TypeScript Arrays. It alternates between those terms in this section, referring to them as Lists when talking about Codeblocks, and Arrays when talking about TypeScript.

It’s important to start by noting the limitations of Codeblocks strings and lists. Both are limited to 1000 characters. There’s a maximum of 1000 items in Codeblock list, and a maximum of 1000 characters in a Codeblocks string. These limits don’t exist in TypeScript strings and Arrays. This is why you should consider learning TypeScript. TypeScript doesn’t get around the 1000-character limit of the Text Gizmo, so you might need to divide your text into multiple Text Gizmos.

This tutorial uses the Meta Horizon Worlds TypeScript 2.0 API. which as of July 2024 is the default, however, if you are not in 2.0, you may need to adjust your version from the Scripts tab, select the gear icon, and then Settings.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467842517_595241733013782_2128132337469528118_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZOMwq_R6FW4Q7kNvwG6MWXg&_nc_oc=AdlXxkqaGgW2EYCuNXUQ366f3GtCPFwh3RpY1n_nliYqGQYyYQLBPTgZ75UWLQHLy08&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afj4qoMDAMbkGZCBiUy4USr-ezic5iyX8ItPVZavxNITfQ&oe=69466233)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467676822_595241729680449_3367236753877387468_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=sABgyVSqKmwQ7kNvwFP9Jzj&_nc_oc=AdkotOvqHnXhnOFh1CFXvnNLhMaAm3tpIqASxu-uFdqjPQAyB06m8UX-fVolwXqsfRE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfgEXLLdGeG1Hn-i39YIyrw6cApvAQeZ3TjR6yWeld3_QQ&oe=69463019)

- If you would like experience writing TypeScript you can create a new script from the Scripts drop-down, in this case, we will name it **SendStringToCodeblocks\_Entity.**

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467776400_595241636347125_7347996169623556433_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=3sLI5lQ8XVMQ7kNvwHJikbm&_nc_oc=Adn57a-yl99hmwnTl5Xdd-3QI5t9_1ZYBrqzeciTWq-gl_PMmbI43I5B0zHqUk9Ma9w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfioD_NpQwHOcrb3DUFnDDGY4kpIcGQe7dUc5KweHAVNOw&oe=69465F82)
- You can then write the following script out.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467812886_595241736347115_791166171449353852_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=uFD46gaajz8Q7kNvwE3j9j5&_nc_oc=Adkwu75KLPwNvqEqZ5-O-YD-Joq2ush6fdrCbq68bdzRJRMQTQy2uRV19xCE9YSGhxI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afi1k1Yzl6nxqghQP_y9mk99yY9k2YTZWn-A4zI1GhAVYQ&oe=69465502)
- If you have never used TypeScript before, you should download this script by [clicking here](https://drive.google.com/file/d/1aYxgHRxceWXIJ8epHN01XXvWdzKKZ9s_/view?usp=sharing).
- Open the Scripts folder. Click on the **Scripts** drop-down, then select the three-dot icon, and “**Open the Scripts Folder in Explorer**.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467745430_595241703013785_5034482498143521700_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=9mOu2HxpElAQ7kNvwG-0sKK&_nc_oc=Adnvl6tfF4y05Pp5v5mH8rWtexSnec6Toh10hHxfPIN5Phlf4cag_MQ5RB9YmhAIfuw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfgOzxkI6x75uxFtKshSNMuAb8_fT0Zoo0h9kIszPxRniA&oe=694643F4)
- Drag the script into the scripts folder.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468101013_595241763013779_4449412052777928746_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ntvrSkf4qegQ7kNvwH5eo0l&_nc_oc=Adn_4P6IvGyMn24dKKQiQU2mVPh80HFFBmBfR_o625l8nYgWM-Uryr7F8qaZOGK0SoY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfhRrNhREX9iWGegUwrI5ai1lE6YqBn10omzDxymfpp43w&oe=694642F9)

As you are writing or downloading these scripts, here is the second script you will want to [click here](https://drive.google.com/file/d/1aRek4QMU_r3GB-YstadaXiTX2IVtH8aY/view?usp=sharing) to download.

Create a new script. Name it `SendStringsToCodeblocks_Entity`.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467993616_595241686347120_1623269506850882067_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=JAkbJHVRrtQQ7kNvwGG1K49&_nc_oc=Adn-CyFNE7yn14QASLzDI4bSDgUOAFTr5nF5dPMuYjZ7uvhPT3ahcP6UTL6jhJF8ihE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afj0yBcY0M_XLpwcPfn33_IFjIK1NKVA1QIEnOrEC8MJFg&oe=69463236)

These two scripts serve slightly different purposes, the first one is for sending a single string, and the second an Array/List of strings. Unlike Codeblocks, not all TypeScript scripts have to be attached to an Entity (referred to as an object in Codeblocks), these two scripts, however, do need to run on an Entity so that you get access to the properties panel, allowing us to reference and send an event to another Entity, one that is running the Codeblock script you want to receive the string(s) on.

With the single string, you can reuse the script over and over, only needing to attach the script to another entity and adjust the “message” being sent from the properties panel. Don’t forget to reference the receiver on the properties panel too (notice in this photo no receiver is selected).

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467821732_595241739680448_6195733651696316672_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=iBvEIS-9-_QQ7kNvwEBCsK2&_nc_oc=AdlDFzK9aLI6T-NJfeynfSjidFAuIvgV25Wj62h9BMti1LewB8PZzNN2DYbwhnUQ14I&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfjLx4DyRYZauCZVIhPasKsR7zejuPXL2kqO1T9CDHkPjA&oe=69463B20)

For multiple strings, you’d need to be more creative with your scripting to reuse the script. So instead, for simplicity, it is recommended to duplicate the script and give it a slightly different name. Note that you will need to have installed VS Code to modify the script (remember to restart your computer after installing). You can then modify the script by pressing the three dot icon next to the script name in the scripts drop down, and clicking “open in external editor.”

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467812284_595241689680453_6429132513994036945_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=uqy_stCiHMwQ7kNvwHf7XnT&_nc_oc=AdnfGbp-6XAQCPWZbizZGb1NepukEKgyT0pT6csqibe26ZyCjtDL_u8mqzgrv6JUhdM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfiPchYG4WHtdyx_7vhISYJuGNz1vdl4NwXOSfMWYaiKmw&oe=69462F4A)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467675726_595241693013786_881499020837805569_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=c4r9R2X4OhAQ7kNvwFMS9_R&_nc_oc=AdmiHOuzp2-8WqZXxrX8_ceinXUp5w59tTcKMBrqGKd6uMDWydgdA4VrDpMXIhG677g&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfibDWrrn1BHp0rGxoTZOnQqyrej_5IoLzSwVXFFwZuDfg&oe=69463EB0)

Here inside VS Code, you can modify the array of messages to suit our needs, adding as many lines as you want.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467699038_595241759680446_1836027078983149650_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=5rb9_UILncsQ7kNvwGS5t0J&_nc_oc=Adn0jqgIF71OphjyzjuFojImaD9b2lEYlD9Bm_9Qqya3bCcXoeE_AIgSHlySPoQZNwg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afjth7TvVS8XQyYt84wvQ1x97e7AoHimDGwNyHW3kxtMuw&oe=69463DBA)

With these scripts ready to go, you’ll need a Codeblock script to receive the message(s), a very simple script is shown below to demonstrate that it works by printing the message to the console:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467712412_595241706347118_4505531409967578681_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=caJL4YCWR_kQ7kNvwEucjVh&_nc_oc=AdljvLeKaBdtmG9cWEXK8GfMozEeU-sWqtempRNc3TiQ4ep12jSQmI2g4qKjZJcHsI0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfjfADrxcpf-3jJXWpSsMlc50le9G2x9CuDKfq8wXPanRQ&oe=694653E1)

Be sure to attach the scripts to entities. Attaching scripts is done at the bottom of the properties panel. In this case, text gizmos are used to run each of the scripts. If you give them good names, it’s easier to find them in the hierarchy.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467726387_595241696347119_674325849486122084_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=wOFu4d4NxfwQ7kNvwE_G0gI&_nc_oc=AdlXnX2djmbolRzzt0xtHoZRW7EV2p3exQpDmGcAXg-L0kxaa1HUEo5iPZgI3Oh6szg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfhaHzX4cLeL5JQFeoSkEy2yc_hltunpRsqZGby-fTb5Vg&oe=6946577D)

You can then drag the codeblocks receiver from the Hierarchy to the empty pill slot (the pill-shaped field in the bottom right corner with a circle-like icon.).

**Note**: You can also click on the pill slot to see a list of all the items in our world, and from there, at the top, you can search from the drop-down.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467898774_595241753013780_3884485395764561095_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=AHIUQenRITwQ7kNvwFDTl_D&_nc_oc=AdkXkzOoXolu5PRo_-wqI4W4XsIRWaL_v2ZNR0MjTRVytPeDQZ8ZL81C8f4YU0Zfuew&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afjw66FwsqY4ccvOko2MKFXwOi7FBJeCzyG0Vj8dCPKTSw&oe=69464078)

**Bonus Tip:** You can find entities running a specific script by using the hierarchy filter, and selecting entities running a specific script.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467712854_595241673013788_1548314560034761599_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=5SRzlkP2SZ8Q7kNvwEvnhIl&_nc_oc=AdmK42mJBCi2qq1_Xy8-lP5f13DUSiK1mSjiOA33oRJJqxTi3l3brHA1KQGxa_EU8ag&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afg5EA6WNiFuxwhgCnpqedXcZT8-Uc2uKheMu_k8aoBdAA&oe=69464A31)

Run the world and see a console message displaying our messages.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467712412_595241709680451_974922764830194410_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=00vu88FLtD8Q7kNvwHMNluG&_nc_oc=AdlJqSaE0_8tVaua6LqoS8LORks-aqYNCgTeSvGb0GI11rWoH_4pnZ4UNBHS6UjVqN8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afi403Od6_PrWayLuXQyo2vjBaFcsvNiruo2JLihJJ_fOw&oe=694650FA)

## Script 3: Send Q&As From TypeScript To Codeblock Scripts

In this example, you’ll expand on what you learned in the first two sections. Instead of just sending data, now you will allow the Codeblock script to request two pieces of data: a question, and a list of possible answers.

You’ll need to create a new type of data called QuestionData that stores this string question and string array of answers. You might imagine this is a game show, and only the first answer in the array is the right answer, you could then randomly select wrong answers to mix in, scrambling them when displayed to the contestants.

You won’t be diving too deep into this script, which you can download [here](https://drive.google.com/file/d/1sgiIIyd_PrunVMYsv-hAn3cCfHatTf2v/view?usp=sharing), as it does show off some more advanced features, but if you have managed to do script 1 or 2 in the previous step, you should have no problem implementing this code.

**Mentor’s Note:** The “getRandomItemFromArray” function comes from a file that I add to all my worlds, and when it gets updated is shared in Discord. You can download the arrayUtils (created by the Vidyuu team) by clicking [here](https://drive.google.com/file/d/1Wlaru7gyQRTzjov5rACVMsr3lm3pG7PV/view?usp=sharing). Feel free to ask questions in Discord if you’d like to learn more.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467675376_595241699680452_8898738800974011262_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=5q3ktMkaEDEQ7kNvwFl3Tw5&_nc_oc=AdmzOBykNRFvsTqUa5jFiFJLPsui0CngkIUKMVVvhxFWhGIgi0EGF_L5uMi7sIJPSLE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfhhKmITCQ0Oi95Ls1WunlstbHR-Td0rlP-Gc3O1wuOTrg&oe=69462CA1)

If you would prefer not to use the Vidyuu arrayUtils file, below is what that would look like. Instead you use a copy of the function from the arrayUtils file, pasted at the bottom of the script.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467811141_595241643013791_6766518816931739561_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=gKJp02f8B60Q7kNvwGFXZA1&_nc_oc=AdkhP5-SPasiY_A4xXa9kMqzxObyigTszspTM5Y_3KHbTTcxKxTWpRDeXZ08JUouZvY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfiQfoi2_HtPNLpxdlpB3NSUsj-d97JsmtIOepF2WeL_wg&oe=69465ACA)

To send this data to a Codeblock script, you created and then used a CodeBlockEvent with two parameters; String, and StringArray. This is received as a string, and string list, as seen in the screenshot below.

Note that this demo Codeblock script, receiver, will also need to be attached to an entity to run, and reference the entity running the QuestionData script. The QuestionData script will also need to reference this “receiver.” For this demo, you get a new question on world start and when received, print it to the console.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468091226_595241766347112_8886608641898299488_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=zEQfwB78QYQQ7kNvwF6KgNN&_nc_oc=AdluL8B5gQR2fZDU9thQJdNQgS3FE82XmtlXXS6lC-n2jAJCBZuVoHh5ENnVlbmiHXI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afi_28VwfWS0UQsMFhqUJeoYKRYWtuzS8fmxDc4pUkZydQ&oe=69464382)

**Mentor’s Note:** This is just a taste of what easier text entry with TypeScript can unlock. Really looking forward to seeing how you use this in your worlds.

## Script 4: Receive Text In TypeScript From Codeblock Scripts

Next up we have one last Codeblock integration example.

In this case, you’ll send a message to TypeScript from Codeblocks. You can imagine an event in Codeblocks like this, with a string parameter as the message.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467864826_595241756347113_4361335022965837604_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=E_6sih9HpsIQ7kNvwE0dA7R&_nc_oc=AdmR8z75SjVY4QtY4PBNGHnOAhndMWcqUoCrjaY3ocG_7LLVg-zUI_7t6g7Xp-sJ0Vs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afhi948p749NxZ2P3-9WuxihVtNnIM_kLNj9yt2xdyHQwg&oe=69463AF7)

Then to receive the message in TypeScript, you will need to create a new CodeBlockEvent, which includes a parameter (slightly different from the previous example with no parameters). Then just connect the event like before, and in this case, you will log it to the console to show that it was received. You can download this script [here](https://drive.google.com/file/d/1Q7NFlLBJ6MpjLrh3O5gaYDLdWbrt3ejc/view?usp=sharing).

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468130683_595241646347124_3219773664877344729_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=FA6iiRyfwxAQ7kNvwEL_V8t&_nc_oc=Adl-tYTfgPyXJEjp4rOKTZQVM06kXw2oypbJ1jh3NDT-rpV3qaOVCPEnerq_vXHlmvA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfiyLEO_JRQBgGM9qX2W6kqgcvpwvrwkpWqWMpHDk0N-_A&oe=69464B5A)

**Note:** If you are planning to stick with Codeblocks, this is the end of the Codeblock integration examples.

## Script 5: MegaText

If you haven’t used MegaText in Horizon, it a script written by the Vidyuu team in the Asset Library under interactive. It allows you to write text on a Text Gizmo with multiple lines. This makes formatting so much easier. The example below is the same script, rewritten in TypeScript, you can download it [here](https://drive.google.com/file/d/1hKw0YV-o_zjuGbXMPMI1fT1Yo0bfArKs/view?usp=sharing).

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467806940_595241649680457_6630269722610001617_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=wGjyLwYisAUQ7kNvwHAcfvz&_nc_oc=AdkrGUYDVdi34gAayV2rIBfritgIYsF7labpL-OHs6RnOjjIxHetoSdPzqLJ-vnAOUA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afhwa6dSYYm__oY8GftSEPED6gVZt6QnM4qDuEVHeQjNFg&oe=69465150)

The biggest difference is that this example only has 16 lines, and the Codeblocks asset has 32. You can duplicate row 20 and 31 to add more lines. Just make sure they are added in order and named appropriately.

To use MegaText, attach this script to a TextGizmo, and on the properties panel you can fill out multiple lines, making it much easier to write large blocks of text, and even add formatting. I’ve always recommended leaving gaps between lines so that you can come back later if you ever need to insert or add formatting styles. You can use this script both in the Horizon Desktop Editor and in VR.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467725469_595241653013790_6628002032060532237_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=8AlrOZTta44Q7kNvwGRMh8Z&_nc_oc=AdkcVNAapNGig6RX_Jq0rUcVMwXnDmoPM6guJJ1Vq2IgHq08JjjGCpg9VCy9veLA5Hc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfgomjWwChJvGOoKWgw8gZn906G6CXGpPfi8FtQ48Rmzlg&oe=694657DF)

## Script 6: Writing Text With Formatting In TypeScript

In this section, you’re going to write text in TypeScript, and apply it to a TextGizmo that is running the script. You can download this example [here](https://drive.google.com/file/d/1xYVDDff6BSr2_iSX3PDGzo-dfsvUgOq1/view?usp=sharing).

You’ve defined font and lineBreak string variables. This makes our lives a little easier, by making it so that you don’t have to remember or retype the angle brackets and this also makes our script easier to read. In addition, outside our class, you’ll notice the bold function allows us to easily apply bold to a string.

In start, you define a couple lines, add them all together using displayMe, and then apply the displayMe string to a TextGizmo.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468099956_595241716347117_3872321777488185735_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=HCy8PgHzmaEQ7kNvwGpW81u&_nc_oc=AdmH7Rnl3vp-jpoVJjSito4DOOm7giRm0j-L4lPXgm1riDycNWGp9a2TcqbDe6kBREI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfhjRW0XvgDB8mvO3Pzb85NR440LNUPow7YPoG1bRB79bA&oe=694635A8)

You will need to make copies of this script if you want to have different text on multiple TextGizmos. Note that the name of the script needs to be unique, but the class in the script can have the same name, in this case “EasyText.”

Below you can see creating a new script with a different name, I would advise naming this based on the text they display. Then in VS Code you can copy paste the first script to replace the default script in EasyText2, filling it out with your new text. Notice that when you assign the script, on the left is the script name, and on the right is the class name.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468132793_595241656347123_767351154685953432_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=0Hm2QG1pRVIQ7kNvwFhaYow&_nc_oc=Adlg8bkNayfyCdXVvjwJfL8KIBN8ApvBo4GcPQxuXSDJmpsluB4XyohZue5XmBobEXw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfjZXApnplFQeRsWwlHe5BeMCL4n2BOCEs_Q8QePsaiKGQ&oe=69462FB3)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467842237_595241659680456_1673158030815762410_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=uyfewJm8R18Q7kNvwEWf1YY&_nc_oc=AdkURCkxytB6P4OOf6IHKWuBEd_Jjz7c6f1L6n3Lq6BSGGCzcZXSXFIM5GKqi3r1tJ8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfiB9Z_c1yNK6pCVVLC1LqOTBXlv-w6fI33dcHXsWaPrfg&oe=69464F34)

This example script has shown you how you can take the formatting options shown at the beginning, and apply them on your own. While this works wonderfully, as a part of this tutorial, I put together a formatting library, which you’ll see in the next step makes our lives even easier.

## Script 7: Write Text With a Formatting Library

This next script for you to [download](https://drive.google.com/file/d/122S7MyeFNDhkZ6oUG7nokfMQmswrgiPV/view?usp=sharing) is from the Formatting Library (written, a Utility script that you can use to make writing text with formatting a lot easier). If you have never used a library before, it is similar to an API, in that it provides you with additional functionality. To use, simply copy the UtilTextGizmo\_Func.ts file from the above download link into your scripts folder. You can then use the provided “formatting,” “Formats,” “Fonts,” “Materials, and “Gradients.”

Below is a simple demo, which can be downloaded by clicking [here](https://drive.google.com/file/d/15g5RvlCh2opLGxWfy_KJTelAP1tcLxvj/view?usp=sharing).

In this example, you imported “Formats” and “formatting” from the UtilTextGizmo\_Func.ts file. For the “title”, you have a string that gets three formatting options applied. After typing “formatting” when you type “.” a list of formatting options appear. Including a second list of “specialFormats.” You’ll notice that “Formats.bold” allows the applyFormat function to apply the bold format on your title. “Formats,” similar to “formatting,” also has a drop-down list after typing period.

And then similar to Script 6, you add the title and lines together. In this case, you use formatting to get an easier way of typing in line breaks. And then finally you display the string on the TextGizmo that has this script attached.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467878752_595241663013789_1810103766417245983_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=5OajyGGXt4QQ7kNvwFYA20a&_nc_oc=Adk5XgSQHLSd8sYlXPlDLlbR8jLUXvfVFJoz0Oby4fqiPy1x5JCEytcYAJAECfzR2xU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfhJ2KLEG7SmuKz4JIR_QnsEA_1_1Jq94t-pFTILh4Wifw&oe=69465073)

Using this on multiple TextGizmos will require you to duplicate the script. give it a good name, and then attach the new script to the relevant TextGizmo. This isn’t the only method, as you could have one text manager that has the TextGizmos referenced on its properties panel. So depending on your needs, be creative and feel free to ask for help in Discord.

In addition to “Formats” there are three other enums, which have their own formatting.apply functions you can use:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468159987_595241773013778_2634878764640219240_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=kUDgAelFSQkQ7kNvwGlx8M8&_nc_oc=Adntp6AxOAg_Cr0n66NENVEQbYxDyEyKdy5g8KHAS1-XpGRDtf438EZKsi8vscfFJGU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfjGySamx9HI5xCo0DMz8qpomvddgOpOpg3iEbR4LaiNaw&oe=69463911)

You can also use these on their own, if you don’t need to clear them at the end, ie:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468151290_595241666347122_8433285314453383764_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=0UgJctaSqiUQ7kNvwFkoYJ2&_nc_oc=Adm5B3l-whuuw9pYfGgBbn5sO06IPmlXmQ5VG4duiaL12loRihgXmKuBBi_pQNYRG_A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfgBkGGcR65w5MQUCZVD1ZlCp1Jc4JuHfvldPi2vYL8UXw&oe=69464A60)

Feel free to dig into the utility file on your own and learn more about how it works and what options are available.

## Script 8 & 9: Ad Lib Story Example

This next section may feel a bit intimidating because you’ll be using multiple scripts. The first script is where all the logic is stored. It is where you’ll spend most of your time. The second script is a data file, storing various strings in JSON objects. The last two scripts are utilities you have already used. They’re the formatting and arrayUtil libraries which allow you to easily apply formatting and work with arrays.

You can download the files here:

* [EasyStoryTrigger\_Entity.ts](https://drive.google.com/file/d/1IwalvBI24Yym2gCxPdjYB40bTGv_i1om/view?usp=sharing)
* [Story\_Data.ts](https://drive.google.com/file/d/12u_sTwv6i0Vla8QmfI_KZDou55sWaV0D/view?usp=sharing)
* [UtilArray\_Func.ts](https://drive.google.com/file/d/1Wlaru7gyQRTzjov5rACVMsr3lm3pG7PV/view?usp=drive_link)
* [UtilTextGizmo\_Func.ts](https://drive.google.com/file/d/122S7MyeFNDhkZ6oUG7nokfMQmswrgiPV/view?usp=drive_link)

Let’s start with `Story_Data.ts`, which is a relatively simple file that creates four string arrays, and then stores them in an exported JSON object called storyData. You can access all of these strings from your main script by importing storyData. You can imagine having as many of these string arrays as you need for your story.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467810576_595241776347111_3861804389282283223_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=PCuXosMZt_EQ7kNvwGwZN3e&_nc_oc=AdnCsmrPeulhjnFFgMp2Mj91BYLIhQf0Db94DnamXUZjryTT5L4MknekVrjmN820Ems&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfizjTjtGorEAVu0_BC5XDkZPv29jhoHpwwQK1RUb_Rjew&oe=694650A5)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467812778_595241719680450_2622406763657355553_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=isZawFglK5IQ7kNvwGeix-P&_nc_oc=Adnb8fObBXdta0v01Wi2vSS8jAsX0udqJBjAbUpIIJbWLrC_SG-RWaB2gEFUxmeKBFQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfgVQmhDqWLwURcTTWXzrLayok63AXccKibrW76-UsYZ1w&oe=694652FD)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467994252_595241783013777_9048662164141849098_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=ITvWU2dVrewQ7kNvwGH5fmO&_nc_oc=AdmIrnVf3IfN0eodDhbFjc0z3uX9QiDtw6Jhw4hqzvykgIEDACXG4mtD9xfMWbLNlQA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afi-F5G5S2i7VEEEJ4UlQx5_biV4VPmmrVLOGIYScyvcmQ&oe=694656DF)

You can now see this all come together in the EasyStoryTrigger\_Entity.ts script above. The first thing you’ve probably already noticed is that you attach this demo script to a Trigger Gizmo. This allows you to test our script by simply touching a trigger. This does mean you need to reference the TextGizmo, which you do on line 8 in the propsDefinition. You must make sure to fill this out on the properties panel of our trigger that is running this script.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468090494_595241779680444_8145136237204572786_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=dyCryWrdcWAQ7kNvwH0xQ_h&_nc_oc=Adn-ZzcH3ptNkqAHmS9Y2QdQJ9KKX3Zt5EgCGeeqmjOo9mCUgT12Xm9gnzB9kc9CZW8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfgqnhrisW2ohEF00ING81Nox991OW0JlxpF5N47m86pIw&oe=6946386B)

In preStart, you connect the OnPlayerEnterTrigger event to our local method. In start(), you load a default story using ‘adventurer’ to fill in as the name for a player. You can see the playerEnterTrigger method also calls updateStory.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467809488_595241723013783_5934371754843220484_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=m6SGPSLIrb0Q7kNvwE_L3Vx&_nc_oc=AdlT3lz0FE7So2-QCn-UQBauz4IyFgp402gR_n0LXKJRhefjBaSUzsUOsFItsEz-yB8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfgSVAtV_wlB2lDIg556t-B2DUIrmni7Vqehj6EAifGf5g&oe=69464A0D)

The updateStory method starts by getting a story and then displays the story. Each of these are separate methods shown below. One returns a string, and the other updates the TextGizmo.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467767440_595241676347121_5786752982037091076_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=PvreLEmFnhAQ7kNvwFUW-N1&_nc_oc=AdlLzxJKOFRcBtsNXZXXyr4iwRCkK9vy6e0-U9R9Gh2Z-Z-Q4FvRgwWAMZYUDzG8Lc4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfjAsg5T834cE1k5Mh_VIAkrUlm3euOXUKYGEOaErwx13A&oe=69463E67)

The getStory method is where all the magic occurs. It takes a name, ie. the player name, and returns a string, which is the story. The first thing you do in this method is set several variables by selecting a random string from storyData, and providing a fallback, in case our array of strings is empty.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468014262_595241786347110_8659952628007533587_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=h_5JuUliudcQ7kNvwH8D1yw&_nc_oc=AdkJVsoTeyTmAAexgiLX16yJA9Pe7LFhBWK9F7gr5Xi-BQPwXKDl_3GpI6lSgY-pYaY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afhzf0lyh2hslMiUqCcWV3AM5FIiIem7J0YBLeRJ-Wuy9w&oe=694653D2)

You then use formatting to capitalize the first letter in the greeting. There’s a second example on line 39, which sets the text to be the same as what’s on line 37. This is to show that you can choose the method of writing your story that makes the most sense to you. I personally prefer plusses “+” but the line 39 method takes up less space, and for some is easier to read.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467767655_595241746347114_4754993355373263784_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=m39Y6juKmosQ7kNvwGPY-1Q&_nc_oc=AdnZOcQjYQUKz_ZOZ-arRaw26oCurplhBoWsxF3JkOBp3bh0TEgC1W7NWsnyEf2ZrQ8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afiia01Bngu0W52JPyHqfCkYTPbgWv7I5A3_lzZHv2ojTg&oe=69463863)

Now that you’ve calculated the story, you can now return it.

Display story is similar to what you’ve done earlier in this tutorial, except you added a check and console log if the text property has not been referenced or doesn’t reference a TextGizmo.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467826529_595241679680454_2219293768184138846_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=B8tqberMOL0Q7kNvwFn9UwC&_nc_oc=AdlMKsd7m0VyuN3d6ZEqqWqC2sFG6yhERlq-ES1wTNlXA-W7wd88CgPGot7wg5A9goo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfjzuFHlGBNtZhm0hJditaxBSxmyVK6y75CdWSqrBmdw7g&oe=69463F36)

From this, you can extrapolate to create your own custom ad lib story. If you have questions or need help, don’t hesitate to ask in Discord.

## Script 10 & 11: Random Ad-Lib Story Example

In this section, you’ll elevate your ad lib story generation by randomly selecting a story and player. To do this, you’ll continue using the Story\_Data and utility scripts. You’ll add to it with an AdvancedStoryTrigger\_Entity script, and an additional import called storyFunc.

You can download the new files here:

* [AdvancedStoryTrigger\_Entity.ts](https://drive.google.com/file/d/1Mosj6KW_46cb35YyNTZDurvWIDH14rFw/view?usp=sharing)
* [Story\_Func.ts](https://drive.google.com/file/d/17696gjxbix-GYvL62mpGsrx7TaTRHFKA/view?usp=sharing)

Let’s start with something familiar, looking at Story\_Func. This is similar to our data file in that you have an exported variable, but instead of storing string data, it stores an array of functions. The creation of storyFunc declares itself to be an Array of functions that take a string parameter and return a string. This is just like our getStory method from script 8. In fact, line 10 is the same method, but as a function called story1. You can then duplicate this for as many stories as you want. Just make sure they are included in the array on line 5.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467995338_595241669680455_5348008257830303167_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=srHLMSYJyo0Q7kNvwFYutDo&_nc_oc=AdkUy0trp4pu00STLcpGfW98tWYT9hYW-uC_C0LsuabZRmV12PpeJ1ckDLRO1CPc7m4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfgYbyizvbt0RI6SMrSFFGnYg4I_gqBZ0wIxizWv8OvKrg&oe=694653C7)

Next, you can take a look and see how this is used in the trigger script. The first difference you’ll notice is that you have an array of activePlayers, and in preStart you connect PlayerEnter and PlayerExit world events. Seen below on lines 23 and 27, you add players to the activePlayers array using push, and remove them using the arrayUtils removeItemFromArray function.

The next major difference is that in the playerEnterTrigger, you now select a randomPlayer and update the story using that player’s name.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467993359_595241749680447_7898377454591025856_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=OL_hvaMkj5MQ7kNvwGHmMN9&_nc_oc=AdlPNtZqq0jD-6IzDMrrH8tEqlx1aTY__wKPtr846A2AlZBi15ATJZEs3hhsdoge2mE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_AfiPjcHCYRprjaOmDUcQnbB2aZzNui5mBvJ8PPx1g6l4PQ&oe=69464B6B)

The next change is inside of getStory. You’ll get a randomStoryFunc from the array of storyFunc. If it is defined, then you’ll use it to generate a story. Otherwise, the list of functions may be empty, and you’ll log an error to the console, returning an empty string.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467952894_595241683013787_5146014287776986293_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=UUfQFJje2r4Q7kNvwGRfgm7&_nc_oc=Admgf51xpavTJceaOgKtf1g_vcu9CbweGDjc3z5jOiBb3eCC8LO6vOssScLOeL03eQo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NyU4vVxfXJYcqQyxVJA-dQ&oh=00_Afi4vWBXMXKklSopDh86A9hCnZr5jXibmHzEfGqv0P0jZQ&oe=69465CC7)

And like that, you can have as many random ad-lib stories as you want.

## Extended Learning

Below are challenges that you can implement on your own. The Advanced task might require some outside knowledge. We encourage you to ask questions in Discord if you get stuck or are unsure how to complete any of these.

**Novice**
Fix spelling mistakes and add formatting to pre-existing large blocks of text in TextGizmos.

**Intermediate**
Write your next large text paragraph using TypeScript and the provided Vidyuu formatting library.

**Advanced**
Integrate a randomly generated story into one of your worlds.

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.