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

  ![Select Custom Model Import](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/468198625_595241713013784_8092391770579618737_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=aV774pIieJkQ7kNvwGTCAip&_nc_oc=AdnQo_R4fe1ee4_8pfauHoN_-Skikevuo7jxOccSnVve8qgvknp0J_cl5oY92mX1QbqVIjSiEdQ8omxdqUjyimHT&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afm2a_a7Yr9xjG8FhbtwOoJmrKosr4EMB38nkXCHBxfayA&oe=69559154)

Adding the Text Gizmo, to a scene using the Desktop Editor is difficult. Meta recommends that you add the Text Gizmos in VR. But writing text in VR is also difficult, especially if you want to add any of the formatting options. If you want to use the Desktop Editor, see Adding text gizmos using the desktop editor.

- Add a text gizmo to your scene.
- Select the text gizmo from the Hierarchy.
- Edit the text field in the Property Panel. You can also adjust properties, like font size and color, just like you can in VR.

  ![Add the Text Gizmo to a scene use the Desktop Editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467769589_595241743013781_7349902689390694342_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=D-WX3KLnVDUQ7kNvwGoghzd&_nc_oc=AdmSM8oc4YoUB78SpwC3WlVqUtI-Yzy3L8RAbFhhCI01ya9-HXzUBNtjnABHRCIXmtcYkc1Ca-u9H6k9jUX1uLLk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfnF9Sc1uJWvpu7Mh8ZbI750gc4MqYlyyq4FH4SlXtAezQ&oe=69557D69)

You can use the text field to write text and to copy and paste text into the text gizmo.

## Adding Text Gizmos Using the Desktop Editor

Here are some tips to help you if you want to add a text gizmo using the Desktop Editor.

- Add a text gizmo to your scene, here are a couple of tips to make your life easier.

  ![Add a text gizmo to your scene](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467842483_595241769680445_620494155645858280_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=alaWJQOG0n4Q7kNvwE6X6AB&_nc_oc=AdmMCApCbMCSJhqsd86l1sVxPGlodtijHUFNfvmkwcLINKTrL0PLP_Ax_G6tEjadJgIio4-vqTEUUZ9opX_yk4Th&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfngvC3R6I6oeyNPteH0swj13486kO3ui_I4ZBS2E_LB8g&oe=695594F6)
- Add some filler text on the properties panel, in this case, in the image below, we have added “Hello World.”

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467879381_595241639680458_9173102621139393361_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=sspgnJEQWmAQ7kNvwHCfPG6&_nc_oc=Adku3MvEhK-QWLKpivtjoYve7KV0SqPkCwAE_zACNaG21LTtBpg43QrBDpyjutUre_VlEiwkXyN0vQ7bDQ4P1KFe&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Aflx_XZ9IhNaGbYpbWU1-pkzUtf2mnJ3RQinApvnvy4DJA&oe=69558D0D)
- Then, presuming you have an object you want to place the text up against, click on that reference object and right-click to copy the position of the reference object.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467856751_595241789680443_6078805237931826866_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=6wvdkKszDVkQ7kNvwFG2ZzA&_nc_oc=AdlV1BclM4ByMf4rHkBpZFUouaTxZVYVsk5FWwwRLTmLT99pbr93t31SSOtyHO36glwyTc9nJ-ruHNf2nyp_MsXf&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfkQE2dabCsVlZOSsDew8KQdx3Of7gWdNe4r_zlauu8m6A&oe=69559C17)
- You can then click on the Text Gizmo and right-click to paste the position. You may have to repeat these steps to paste the rotation from the reference object as well.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468018101_595241793013776_4213593910410519336_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=4eKrF09QP6cQ7kNvwGcgGex&_nc_oc=AdlANb4feISzJWQ5ffC0lli_waOLVshFkbRMrdpBrUMafudYSn5oe-r77NtIFn5bpUeHNWsDtFUV4ZxAcQyJ47v7&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfntaACyeUdmfEbFI9lGFC5tUciAvWWuo5VwoC9RtsEA5w&oe=69559BF2)
- Then, with the slide tool selected, and snapping turned off, grab one of the slide arrows to pull the text out of the reference object.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467952672_595241726347116_117331172420294193_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=n8E5IQITyA0Q7kNvwGLa9eH&_nc_oc=AdkhbMaHQUPNNolXOhii5C8k5qTV6QfInPsuBZciC6rmLqXpCNYMFGqX8n-iN124e_M4Z4LeqL1u5tc79qyEnWrE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afln-qPcVHyC1CLE1pQfMo7kVuUi7V8-YLxUDb_Tcb1cCw&oe=695581BE)
- Now that you have positioned the text, it may need to be rotated. If you copy and paste the rotation of the reference object, and it is still off, you may consider manually adjusting the values from the properties panel. Or you can use snap rotation, I like to set it to 90 degrees.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467899374_595241633013792_7017878112968153930_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=AsVJG0LUQ1IQ7kNvwH_DV13&_nc_oc=Adm9-d_7wt8WhWs8S8woK4e2C6XSHC1uaqJoG-gAktgsxoHHr3RIeLUHZsRBU-SMi-hxF2kS7f8srK2zM604A9b_&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfnC6KxQY-rlRV8tc3396ZK2vJUY0FUckWQgkI52NbL3kA&oe=69557382)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467842237_595241629680459_7331484596920045925_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=CB6kvF5Pn0cQ7kNvwFQnhak&_nc_oc=Adk10vOoSmcghsks1XWHaW9OhtUEte7KAf9w05nf4vo4kDDg9-B9Y_qJ1w_O7nIv87V3lqRUiWBrdmPbB7oxITHj&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afm4QAiPV9wBE-EiHpMRB7pdX782-Dyiq-hJEnNVnUHKng&oe=69558F82)

You should now have your text positioned and can fill out the text and properties to your liking.

## Script 1 & 2: Send String(s) from TypeScript To Codeblock scripts

In this first script, the goal isn’t to cover advanced TypeScript concepts but to simply allow you to use TypeScript code to augment your Codeblock scripts that need more rich text. You’ll do this by sending a string variable as a parameter. This can also be a list of strings. The script calls lists in TypeScript Arrays. It alternates between those terms in this section, referring to them as Lists when talking about Codeblocks, and Arrays when talking about TypeScript.

It’s important to start by noting the limitations of Codeblocks strings and lists. Both are limited to 1000 characters. There’s a maximum of 1000 items in Codeblock list, and a maximum of 1000 characters in a Codeblocks string. These limits don’t exist in TypeScript strings and Arrays. This is why you should consider learning TypeScript. TypeScript doesn’t get around the 1000-character limit of the Text Gizmo, so you might need to divide your text into multiple Text Gizmos.

This tutorial uses the Meta Horizon Worlds TypeScript 2.0 API. which as of July 2024 is the default, however, if you are not in 2.0, you may need to adjust your version from the Scripts tab, select the gear icon, and then Settings.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467842517_595241733013782_2128132337469528118_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=RG0MenCbR74Q7kNvwE6gQSE&_nc_oc=AdkHTKiCJfky5NshWVmxfUbmJChA1SA3g5qAS8o9fUc7QB-OP9osQD-xUcGqD8BSnEvpvx4eYF6rhH62xCs2Zr2j&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AflByUrTslbcpKxhjYh9yJmMuzWhjBoN9-T8Qxwwhxuymw&oe=69558B73)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467676822_595241729680449_3367236753877387468_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=J9A23NI1OhYQ7kNvwEUQvDA&_nc_oc=Adn7GFlB_WLmwXyLhiTdi2pbnHCwvFVM6YYhh2G_3zWSmEAVM38xHf_oxiD7VUSywQeTqTKE28YF6_Har-zv6uG-&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfnghlqDCOsaGXKH61mRNdGEKGKsx77bqGJR9Qm0n5fTMg&oe=69559199)

- If you would like experience writing TypeScript you can create a new script from the Scripts drop-down, in this case, we will name it **SendStringToCodeblocks\_Entity.**

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467776400_595241636347125_7347996169623556433_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=y8t8W2rosxwQ7kNvwHx8Wrl&_nc_oc=AdkL9JaVAfUa0r4S67Tl9XkIP8TqHKdEgYw6RIayP8GzrihR8LbIVth0btujdD3N-ik0gm7ixJulWmdBJEg24j4A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfkM1SAvwNeJrbgugxGW-aWBByFWfNcfLVV_JdziRrWmTA&oe=695588C2)
- You can then write the following script out.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467812886_595241736347115_791166171449353852_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=QymAuUp_qNcQ7kNvwELePej&_nc_oc=AdmFSq75iO06CnBnkzV1w5W-PNanQviQlPA_sCXU7-aAwDK376EFMEIKQZFUQjh3umIT6VkW_5UTnRsRQcyZrgDx&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afl_eLD2jI13z-xzF94qd5XmYdHvo8WrxVLyOCAvu7tfew&oe=69557E42)
- If you have never used TypeScript before, you should download this script by [clicking here](https://drive.google.com/file/d/1aYxgHRxceWXIJ8epHN01XXvWdzKKZ9s_/view?usp=sharing).
- Open the Scripts folder. Click on the **Scripts** drop-down, then select the three-dot icon, and “**Open the Scripts Folder in Explorer**.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467745430_595241703013785_5034482498143521700_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=wfqgSnOM-KcQ7kNvwG7uvji&_nc_oc=AdlgXaI8wov8wTpiqtIsIjXeHzCtCDMTcDnBVOmRaDZK5S96PfXeA6nHd-Q6FyJT650w22NHHMnJN12ZynUAfyMU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfnjtBmmpeMDmrh5wC6L-PdmBME1GY2_xY_ke3nPPHeYEA&oe=69556D34)
- Drag the script into the scripts folder.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468101013_595241763013779_4449412052777928746_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=FLrqWfxcYYoQ7kNvwG4Do4o&_nc_oc=AdnYkYomJ3azbHzXq058L5izlbzEotQjn5AeKNH1QqfVhdgU-HlriT2J5FeVR_XlW8GeeRCGiqxoEgnS9brLoXQC&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AflPyXijxIxDwL_KBanNYW2ySEz2ftYEfSclJ5ykzvg8ng&oe=69556C39)

As you are writing or downloading these scripts, here is the second script you will want to [click here](https://drive.google.com/file/d/1aRek4QMU_r3GB-YstadaXiTX2IVtH8aY/view?usp=sharing) to download.

Create a new script. Name it `SendStringsToCodeblocks_Entity`.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467993616_595241686347120_1623269506850882067_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=8hTwUcKr3mwQ7kNvwEiFnLX&_nc_oc=AdmIeKnEEokbQ2sGIWdwnqr5l1Z1Dr1OQwLlsYhVnR0sh3IkBH-XOmtwN59XttVOP2tTQAd4wx-QlDTB7G8GCD2C&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfnAqLSGauGBGLURq2rQdwruRcNH0lzxqmXoOfEiGbVHUw&oe=695593B6)

These two scripts serve slightly different purposes, the first one is for sending a single string, and the second an Array/List of strings. Unlike Codeblocks, not all TypeScript scripts have to be attached to an Entity (referred to as an object in Codeblocks), these two scripts, however, do need to run on an Entity so that you get access to the properties panel, allowing us to reference and send an event to another Entity, one that is running the Codeblock script you want to receive the string(s) on.

With the single string, you can reuse the script over and over, only needing to attach the script to another entity and adjust the “message” being sent from the properties panel. Don’t forget to reference the receiver on the properties panel too (notice in this photo no receiver is selected).

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467821732_595241739680448_6195733651696316672_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=aYyF_aldP1sQ7kNvwGHXyOv&_nc_oc=AdlL15uJr-CxLCjSdk8EpJ6iThVmk4hvzaGCbw-3-j4Lh7CxWp65hrry4RjbUk8W8Z6MTq6HRXejcaeZBVAyIJ2a&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfmIErsrvlOBaspB_3mQI9uhTkWG1_Nj_dVqBMXsk63k3A&oe=69559CA0)

For multiple strings, you’d need to be more creative with your scripting to reuse the script. So instead, for simplicity, it is recommended to duplicate the script and give it a slightly different name. Note that you will need to have installed VS Code to modify the script (remember to restart your computer after installing). You can then modify the script by pressing the three dot icon next to the script name in the scripts drop down, and clicking “open in external editor.”

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467812284_595241689680453_6429132513994036945_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=0-WhFZluw5kQ7kNvwFihOX5&_nc_oc=AdnGUYjoKZZELuCUKutD8ylXYnkJt2K2dYiRL3giWUU2A6C7vjjn3Q-KLCdnxdMHwFWLFQ4NSsnwOAwKBd6sBszX&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afl7alPaiirFiCDHV-_GtOuS5NeAh9qHNxA_zJS1AtbGGw&oe=695590CA)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467675726_595241693013786_881499020837805569_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=-7YFHckd6DcQ7kNvwHMS6YP&_nc_oc=AdmJNA3PYFv8qr78D0jEj_6zghf3DU1FKceUCpTX0slGR28tk6rztKbbux_Mer0tlMSoid2aktsj1g5nd2tkCeLI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afm4VPBKxJZ-QjxacbLNULiFifsTJVKIvxJoO17VVdJ76w&oe=6955A030)

Here inside VS Code, you can modify the array of messages to suit our needs, adding as many lines as you want.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467699038_595241759680446_1836027078983149650_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=RqF1BHtxhs4Q7kNvwGpMAgL&_nc_oc=AdmqJMquWx80DwiHjTlmCnvMFgmT3F6r-uXupFokysrretwaa2IjB5ivm0FoqDw8gK84jazE__aRMRBWUwPUB7K2&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afn_xfKyo_G3h07aPUXpDgnQXAK9hCVcGaPqvb14C0FsJg&oe=69559F3A)

With these scripts ready to go, you’ll need a Codeblock script to receive the message(s), a very simple script is shown below to demonstrate that it works by printing the message to the console:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467712412_595241706347118_4505531409967578681_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=1rFXotRFw4YQ7kNvwHTagp7&_nc_oc=AdlR2hcXJgDw44Gj1TAWeveGifstCOfuAmj592_THT_-SOJltaUnu7GY_CBUnGHHAStz_tn7TfW4gnxuWy5JSOZf&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfnjRu5nh9anbcaEK4GSDga0da2nbNYMYLdQE5nS_erppg&oe=69557D21)

Be sure to attach the scripts to entities. Attaching scripts is done at the bottom of the properties panel. In this case, text gizmos are used to run each of the scripts. If you give them good names, it’s easier to find them in the hierarchy.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467726387_595241696347119_674325849486122084_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=EtdIqodZAI0Q7kNvwEsFgXM&_nc_oc=AdlQ9v9d_M4d49aqNgpBT0OCg8bKCS7bRvmcp5jv7qlIoNy4HJG02ZmYQmQabdXkxBonoNHomwgJcaT4XZ2mshR_&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfmD7Z5hjmbv77DexuB84ur4lT11dIB1dcRIpRoC-a2SKg&oe=695580BD)

You can then drag the codeblocks receiver from the Hierarchy to the empty pill slot (the pill-shaped field in the bottom right corner with a circle-like icon.).

**Note**: You can also click on the pill slot to see a list of all the items in our world, and from there, at the top, you can search from the drop-down.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467898774_595241753013780_3884485395764561095_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZfDR-RuWKRMQ7kNvwEUVo9e&_nc_oc=Admuz4XSMNYVExbcmL-ceWeYWceKSmyJN0L3H0VtIpCrqJrbNiap6NRf-0XEhbk8wm-qyrCEYU4Jm3djZEGna2cS&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afkc-aeN5RiNoXEWUPIEkQvjhfrToknhdA4NVyLmX6D2WA&oe=6955A1F8)

**Bonus Tip:** You can find entities running a specific script by using the hierarchy filter, and selecting entities running a specific script.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467712854_595241673013788_1548314560034761599_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=rKhMPcNArjYQ7kNvwHL0KJg&_nc_oc=AdleKeZLaZnAL9kvEk68zqt9AiyqkpRU54xGWE2DtYZBhmgzzBBMSrwNOOCVK9OShJ07B9K7S9yIFuW3MSKPKTov&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AflH9ffF4GGdx1Z9LG7KLobtN_Om05U-Qal2f9695ObhBA&oe=69557371)

Run the world and see a console message displaying our messages.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467712412_595241709680451_974922764830194410_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=7r1wavMpqJYQ7kNvwGGFOqu&_nc_oc=AdnxTXZoNe69uskffhKkh6tYo1AVJd5IHrD99MGj-7HcnqzxHmef_oXfUkGM5Wez5IesaoHlS3a5rMyGuZEIZ4Zc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfmkLlRwz_4BSqZKTDXiBJNqbKN62kmVVK2RBzI1YbEJJw&oe=69557A3A)

## Script 3: Send Q&As From TypeScript To Codeblock Scripts

In this example, you’ll expand on what you learned in the first two sections. Instead of just sending data, now you will allow the Codeblock script to request two pieces of data: a question, and a list of possible answers.

You’ll need to create a new type of data called QuestionData that stores this string question and string array of answers. You might imagine this is a game show, and only the first answer in the array is the right answer, you could then randomly select wrong answers to mix in, scrambling them when displayed to the contestants.

You won’t be diving too deep into this script, which you can download [here](https://drive.google.com/file/d/1sgiIIyd_PrunVMYsv-hAn3cCfHatTf2v/view?usp=sharing), as it does show off some more advanced features, but if you have managed to do script 1 or 2 in the previous step, you should have no problem implementing this code.

**Mentor’s Note:** The “getRandomItemFromArray” function comes from a file that I add to all my worlds, and when it gets updated is shared in Discord. You can download the arrayUtils (created by the Vidyuu team) by clicking [here](https://drive.google.com/file/d/1Wlaru7gyQRTzjov5rACVMsr3lm3pG7PV/view?usp=sharing). Feel free to ask questions in Discord if you’d like to learn more.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467675376_595241699680452_8898738800974011262_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=SUzNNW-hXqEQ7kNvwHAN_n4&_nc_oc=Adl4dGckF2Q5Io5CHePnpW1kY6DkPUZWQFSMTqKl9r8e7dp5xuLPu-XWXNdeg-Gd4_mX0x-cazD_RiyDZJYcH3O1&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfnYB6oignX6q1Z-JsnBHlkD67dCWSyJNRhn1KQHDbIbsQ&oe=69558E21)

If you would prefer not to use the Vidyuu arrayUtils file, below is what that would look like. Instead you use a copy of the function from the arrayUtils file, pasted at the bottom of the script.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467811141_595241643013791_6766518816931739561_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=fGTEKV_koKcQ7kNvwHzZ3FZ&_nc_oc=AdnhPIfKFstv_9kw4PzsobL71bltQ6DpKgIbitrSr8dGZmThgdqyzj1HLeongwIxAL90uqof0trNx_Ti90LB1RMA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfkugGhIwSpYxpWxrsJla23AUaYrlgU27GOyHYBTlqL-xA&oe=6955840A)

To send this data to a Codeblock script, you created and then used a CodeBlockEvent with two parameters; String, and StringArray. This is received as a string, and string list, as seen in the screenshot below.

Note that this demo Codeblock script, receiver, will also need to be attached to an entity to run, and reference the entity running the QuestionData script. The QuestionData script will also need to reference this “receiver.” For this demo, you get a new question on world start and when received, print it to the console.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468091226_595241766347112_8886608641898299488_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=h-aYvW7CheQQ7kNvwEvhxKZ&_nc_oc=AdmWKN5DZddJ_9Yq9NKr0dcGxpVx3KX02YSMiNfB8Vk4dDNvLfH5BUjLWlYh5pFOn3Z-OKV5BKrmImEJV5BiZmEl&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfkeSliXsUULQhThBhj0TXxofzw0eo1g0UuWCGmYvUl_Bw&oe=69556CC2)

**Mentor’s Note:** This is just a taste of what easier text entry with TypeScript can unlock. Really looking forward to seeing how you use this in your worlds.

## Script 4: Receive Text In TypeScript From Codeblock Scripts

Next up we have one last Codeblock integration example.

In this case, you’ll send a message to TypeScript from Codeblocks. You can imagine an event in Codeblocks like this, with a string parameter as the message.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467864826_595241756347113_4361335022965837604_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=bWBlgNs3KUkQ7kNvwH2sj2d&_nc_oc=Adnd5tAl9xS_BCIpDYmyEKdmlB4Zgn_1YpDQQU1JME2wSoNF6rOIPPPwDodB2UJdbEYhKfUUXkqpnnXbJzFTUsNi&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfmkQgZhXJoGOX9VzZ-jyC-F_9SRjWNgLAnQEuJHwZmJ4w&oe=69559C77)

Then to receive the message in TypeScript, you will need to create a new CodeBlockEvent, which includes a parameter (slightly different from the previous example with no parameters). Then just connect the event like before, and in this case, you will log it to the console to show that it was received. You can download this script [here](https://drive.google.com/file/d/1Q7NFlLBJ6MpjLrh3O5gaYDLdWbrt3ejc/view?usp=sharing).

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468130683_595241646347124_3219773664877344729_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=2sADBBYb4w0Q7kNvwFh_Xdy&_nc_oc=Adld1CPhcZA5vCga8CehExbO4J5xw42hy57QwVdYwp7BHm0FUrosNLI4PQ90qGhQbxHi2wRHYt0236SGiRPq1krS&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AflSvc8giprI0hc_ufMP-cIhLk2mUOpO2qi2-z0oemhzEQ&oe=6955749A)

**Note:** If you are planning to stick with Codeblocks, this is the end of the Codeblock integration examples.

## Script 5: MegaText

If you haven’t used MegaText in Horizon, it a script written by the Vidyuu team in the Asset Library under interactive. It allows you to write text on a Text Gizmo with multiple lines. This makes formatting so much easier. The example below is the same script, rewritten in TypeScript, you can download it [here](https://drive.google.com/file/d/1hKw0YV-o_zjuGbXMPMI1fT1Yo0bfArKs/view?usp=sharing).

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467806940_595241649680457_6630269722610001617_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=kK-tttgRS-4Q7kNvwErOoQM&_nc_oc=Adl2P_mHXGtKew_ReXq2IHOruulSJLVG-XkdRlui5Uds5_H1G_OTri9ZM-RRuQDvjNZDi0mSlEI3nLzLS1LDvYMo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfkBxaLfYpnyDfPS06ST0sDBuKWXP5b0JH1yqM9OALyYyA&oe=69557A90)

The biggest difference is that this example only has 16 lines, and the Codeblocks asset has 32. You can duplicate row 20 and 31 to add more lines. Just make sure they are added in order and named appropriately.

To use MegaText, attach this script to a TextGizmo, and on the properties panel you can fill out multiple lines, making it much easier to write large blocks of text, and even add formatting. I’ve always recommended leaving gaps between lines so that you can come back later if you ever need to insert or add formatting styles. You can use this script both in the Horizon Desktop Editor and in VR.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467725469_595241653013790_6628002032060532237_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=u4dwI4trMzoQ7kNvwFGKRpA&_nc_oc=AdlQHbyLfoEgbJ4WzV4-xOd5bVfDA5Ghd8YIm8fBftRna5d51O5TCYrkLiXSKQ7-NsfeZ5GEX3axib9XwmQhpZsZ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfkFg5Nn6w90CT4j82ACXTH4FKufa9VbFsVFvnFejlgSQA&oe=6955811F)

## Script 6: Writing Text With Formatting In TypeScript

In this section, you’re going to write text in TypeScript, and apply it to a TextGizmo that is running the script. You can download this example [here](https://drive.google.com/file/d/1xYVDDff6BSr2_iSX3PDGzo-dfsvUgOq1/view?usp=sharing).

You’ve defined font and lineBreak string variables. This makes our lives a little easier, by making it so that you don’t have to remember or retype the angle brackets and this also makes our script easier to read. In addition, outside our class, you’ll notice the bold function allows us to easily apply bold to a string.

In start, you define a couple lines, add them all together using displayMe, and then apply the displayMe string to a TextGizmo.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468099956_595241716347117_3872321777488185735_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=r-PzmWfjWvIQ7kNvwFhQ_XI&_nc_oc=Adko2HrQmt_RHYVaYzMO-e6pmZMaj3uIuLFv8DDxALYmO0hYu-Dixp2Z2RUKyUaAhfkebDoj-cz7y9_I2x-hQKma&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfkzmKmc5mDsVHUa36mktDj1S79vuCXPTLRiFDWb7IxNpQ&oe=69559728)

You will need to make copies of this script if you want to have different text on multiple TextGizmos. Note that the name of the script needs to be unique, but the class in the script can have the same name, in this case “EasyText.”

Below you can see creating a new script with a different name, I would advise naming this based on the text they display. Then in VS Code you can copy paste the first script to replace the default script in EasyText2, filling it out with your new text. Notice that when you assign the script, on the left is the script name, and on the right is the class name.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468132793_595241656347123_767351154685953432_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=nCr2Ognt0E4Q7kNvwEMiCsl&_nc_oc=Adnt9ERsOVGMK0xiWuuj1tBlSdULCTlefZUGgUgHcPQDMopjG9Mnn23dcK8h0okRRpL0JCfd572pcvHZjZT_FJ9O&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfnyM-PkWmG1x3Gn8DPVi89XVDkGviBW3rIFqXQ-a-OYhw&oe=69559133)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467842237_595241659680456_1673158030815762410_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=JKhEJcS8TOwQ7kNvwHszSh4&_nc_oc=AdlzakRxL2Xzc1TaHOrB2M7nIIcWkkkpmPnTd6CEWTXFdfbs-21avj9Pb5o4H3FpRm2vExJ0_Jxg47jXmOSJX16K&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfkMGAqmhAoqD5--ZYvmbNdyOxsMDKXeNZuuptslJxIQrA&oe=69557874)

This example script has shown you how you can take the formatting options shown at the beginning, and apply them on your own. While this works wonderfully, as a part of this tutorial, I put together a formatting library, which you’ll see in the next step makes our lives even easier.

## Script 7: Write Text With a Formatting Library

This next script for you to [download](https://drive.google.com/file/d/122S7MyeFNDhkZ6oUG7nokfMQmswrgiPV/view?usp=sharing) is from the Formatting Library (written, a Utility script that you can use to make writing text with formatting a lot easier). If you have never used a library before, it is similar to an API, in that it provides you with additional functionality. To use, simply copy the UtilTextGizmo\_Func.ts file from the above download link into your scripts folder. You can then use the provided “formatting,” “Formats,” “Fonts,” “Materials, and “Gradients.”

Below is a simple demo, which can be downloaded by clicking [here](https://drive.google.com/file/d/15g5RvlCh2opLGxWfy_KJTelAP1tcLxvj/view?usp=sharing).

In this example, you imported “Formats” and “formatting” from the UtilTextGizmo\_Func.ts file. For the “title”, you have a string that gets three formatting options applied. After typing “formatting” when you type “.” a list of formatting options appear. Including a second list of “specialFormats.” You’ll notice that “Formats.bold” allows the applyFormat function to apply the bold format on your title. “Formats,” similar to “formatting,” also has a drop-down list after typing period.

And then similar to Script 6, you add the title and lines together. In this case, you use formatting to get an easier way of typing in line breaks. And then finally you display the string on the TextGizmo that has this script attached.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467878752_595241663013789_1810103766417245983_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=dxX2DT-9YZUQ7kNvwHj03Pd&_nc_oc=AdkbE5Ss6pjdIB0wHUinKnfbeLSETZ0VswvWOtZywbx9C7ehyNSeTZIx0em6DmLrAOLdTfAEdeUp6dWieWE6-IJV&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfmjcHydhRdYEbrikazWkorE3sZKXpJ6aKNS6z2bYkj2kg&oe=695579B3)

Using this on multiple TextGizmos will require you to duplicate the script. give it a good name, and then attach the new script to the relevant TextGizmo. This isn’t the only method, as you could have one text manager that has the TextGizmos referenced on its properties panel. So depending on your needs, be creative and feel free to ask for help in Discord.

In addition to “Formats” there are three other enums, which have their own formatting.apply functions you can use:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468159987_595241773013778_2634878764640219240_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=LBgrYSMyFw8Q7kNvwEJ3YnG&_nc_oc=Adm69mDa7de7Q0Nhd-0RRUTzdYP-X7Mxcw5pQosugRCHFmkSy2FU8SdCfCkm9FKl4iNIjK7MIVxz1F6jWRmKd73B&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfkIWJP79W1arbNHvawVliqvGSKdFrUSrzWX1uZDYiQ_Sg&oe=69559A91)

You can also use these on their own, if you don’t need to clear them at the end, ie:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468151290_595241666347122_8433285314453383764_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=D8JaTOT_IAUQ7kNvwGSSWxZ&_nc_oc=AdmoJxsNFz6lUF_z59yBpFdGG_W9h28qrPfSIcgMMz_d2rpwRMrgk-JkELIs1nhba8EIzRHZO8WnprnRNT5TlpBq&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afmbf_1MDPZWr1Wru0IA7CtJO1OoVFDAnvfKsxVq93YIWw&oe=695573A0)

Feel free to dig into the utility file on your own and learn more about how it works and what options are available.

## Script 8 & 9: Ad Lib Story Example

This next section may feel a bit intimidating because you’ll be using multiple scripts. The first script is where all the logic is stored. It is where you’ll spend most of your time. The second script is a data file, storing various strings in JSON objects. The last two scripts are utilities you have already used. They’re the formatting and arrayUtil libraries which allow you to easily apply formatting and work with arrays.

You can download the files here:

* [EasyStoryTrigger\_Entity.ts](https://drive.google.com/file/d/1IwalvBI24Yym2gCxPdjYB40bTGv_i1om/view?usp=sharing)
* [Story\_Data.ts](https://drive.google.com/file/d/12u_sTwv6i0Vla8QmfI_KZDou55sWaV0D/view?usp=sharing)
* [UtilArray\_Func.ts](https://drive.google.com/file/d/1Wlaru7gyQRTzjov5rACVMsr3lm3pG7PV/view?usp=drive_link)
* [UtilTextGizmo\_Func.ts](https://drive.google.com/file/d/122S7MyeFNDhkZ6oUG7nokfMQmswrgiPV/view?usp=drive_link)

Let’s start with `Story_Data.ts`, which is a relatively simple file that creates four string arrays, and then stores them in an exported JSON object called storyData. You can access all of these strings from your main script by importing storyData. You can imagine having as many of these string arrays as you need for your story.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467810576_595241776347111_3861804389282283223_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wRr909Tji-kQ7kNvwEz6suV&_nc_oc=AdkMFYBWJaVe19uTLRDj7cu7driWMu21Jgv0Zeda84v650PGEpWuZ27ayU3XyRsxDkKbB4AsqgZlCmNoqA3eapql&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AflpmfHyR1OF1_ZisqhazOG2YrcfEN_5DX-PZQs2yNKyTg&oe=695579E5)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467812778_595241719680450_2622406763657355553_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=F1h772QbwKYQ7kNvwEc2deU&_nc_oc=AdmmTZtErCZFzf6fayzHxv7OPMkwrGWWyzCwQizwBWr3qNu5yJLsP5MHTwRePW2X2QSOveNX8rYnBGMx8-Hg2zkL&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afm3Sb3R7ODpLYWLBV55Y6DduDp13_bU8ygrpkyXXSNCgw&oe=69557C3D)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467994252_595241783013777_9048662164141849098_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=kYHvtpmdHCIQ7kNvwFPlS6p&_nc_oc=Adm_whv-Ml3hMWbH_ejbHrMg5vHr6rFmopm255vQDPT92JQXqztgVlugIP-yEdXpvuKMfRJBHdd61Tm_wE-f6CQ5&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfmoBEzMIHjkF-MBa4iTTiWKKoH0lcSQZT_J2_O2WG-9Iw&oe=6955801F)

You can now see this all come together in the EasyStoryTrigger\_Entity.ts script above. The first thing you’ve probably already noticed is that you attach this demo script to a Trigger Gizmo. This allows you to test our script by simply touching a trigger. This does mean you need to reference the TextGizmo, which you do on line 8 in the propsDefinition. You must make sure to fill this out on the properties panel of our trigger that is running this script.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468090494_595241779680444_8145136237204572786_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=lqdl1f-jgQkQ7kNvwHq77zG&_nc_oc=AdkudFxhmvwPWsT0pN5a4YAZmBeQ8DfqL6UUhWTjxS3pukFGJBagdQ_VaG7C-iLM7eKTEc8dx69V0Ppge2TNr_nV&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afn0kqTB93IQyBL4plcNU3iLCPXfXhwfDVOnBwZvcyx5Zg&oe=695599EB)

In preStart, you connect the OnPlayerEnterTrigger event to our local method. In start(), you load a default story using ‘adventurer’ to fill in as the name for a player. You can see the playerEnterTrigger method also calls updateStory.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467809488_595241723013783_5934371754843220484_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=BssE8zhqlxQQ7kNvwExA18i&_nc_oc=Adlu_tKwCLI-XHmfxi8jJAe7YOF9SPpnCNbWBnr5Q2EHhRtYahxkbFsJ7ZtiLRC2XdCQHKDzSWQKk4mvzF0ShRC0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfmdrheKg7GuDvocPY6a0WesIwmUdE2GiqNgCMrOOkY6XQ&oe=6955734D)

The updateStory method starts by getting a story and then displays the story. Each of these are separate methods shown below. One returns a string, and the other updates the TextGizmo.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467767440_595241676347121_5786752982037091076_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=q_PZSKZYzhsQ7kNvwHvBnQY&_nc_oc=AdlRz4XCwuTQ2D9F2ok86MmjJptGOp-BwvYR2ze0foRmsn63ichpIBbzOnBB9wD6YHNpBw6RZ9UuyVNJI6Uf9s4Z&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfnZIOOBG1zU5B_nSs5gQ9LmPUtFawPErSYstD3gzqremQ&oe=69559FE7)

The getStory method is where all the magic occurs. It takes a name, ie. the player name, and returns a string, which is the story. The first thing you do in this method is set several variables by selecting a random string from storyData, and providing a fallback, in case our array of strings is empty.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468014262_595241786347110_8659952628007533587_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ovhA7_rgnIwQ7kNvwHc_rHT&_nc_oc=AdmT6TSO_3kBxHmIUSDbHJ4LYRUosKjIjYPXioPES3WDPHTq2R-GHuLgM5MWh0RBmnLKNJOtYaKBOpHxjNRTbCyS&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AflyGUxuORgcAKjdFPCgPU1ELPDdX2XbXzlC-orJBxOuHQ&oe=69557D12)

You then use formatting to capitalize the first letter in the greeting. There’s a second example on line 39, which sets the text to be the same as what’s on line 37. This is to show that you can choose the method of writing your story that makes the most sense to you. I personally prefer plusses “+” but the line 39 method takes up less space, and for some is easier to read.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467767655_595241746347114_4754993355373263784_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=PBR25Rw_9AYQ7kNvwHeJbJf&_nc_oc=AdnhsSiGCgQDpjZYD5QIOnKqG1ECSdm-rKeTyX_rJqCPzYLdFnrvd06_yTLN4yyZ27V30y7qTRgmTUq-ZXG1ukz6&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AflV06p_tl0DcTZPZsI3aQx9i3NM36WUCQYReKA54e0nLw&oe=695599E3)

Now that you’ve calculated the story, you can now return it.

Display story is similar to what you’ve done earlier in this tutorial, except you added a check and console log if the text property has not been referenced or doesn’t reference a TextGizmo.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467826529_595241679680454_2219293768184138846_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=JgH2u7AH-B0Q7kNvwH9D8LB&_nc_oc=AdlkejnwfOCSViSBQwcI5_yJN-iSHc-gVPVhY8zv3_WaYjl0pHPhVmB5CgHtmOBriQef5A0n-3iBNlG9Sim9roJL&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_Afn4TXs4dXNM_GQdrGOYRBhdNEpHrjavVFHjl8sn3DP13Q&oe=6955A0B6)

From this, you can extrapolate to create your own custom ad lib story. If you have questions or need help, don’t hesitate to ask in Discord.

## Script 10 & 11: Random Ad-Lib Story Example

In this section, you’ll elevate your ad lib story generation by randomly selecting a story and player. To do this, you’ll continue using the Story\_Data and utility scripts. You’ll add to it with an AdvancedStoryTrigger\_Entity script, and an additional import called storyFunc.

You can download the new files here:

* [AdvancedStoryTrigger\_Entity.ts](https://drive.google.com/file/d/1Mosj6KW_46cb35YyNTZDurvWIDH14rFw/view?usp=sharing)
* [Story\_Func.ts](https://drive.google.com/file/d/17696gjxbix-GYvL62mpGsrx7TaTRHFKA/view?usp=sharing)

Let’s start with something familiar, looking at Story\_Func. This is similar to our data file in that you have an exported variable, but instead of storing string data, it stores an array of functions. The creation of storyFunc declares itself to be an Array of functions that take a string parameter and return a string. This is just like our getStory method from script 8. In fact, line 10 is the same method, but as a function called story1. You can then duplicate this for as many stories as you want. Just make sure they are included in the array on line 5.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467995338_595241669680455_5348008257830303167_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ws_RUcrt94MQ7kNvwGcptFi&_nc_oc=AdmUAssyftTPRsqO56gz6NkgaRi5yzCQljIQJ0U_Igv6w2LHGZvbKvmiOucyNcKX70uV9jV1Ca0ZNgx3vvYNl1Ft&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfnDzxx5hsC998xUy5fjvjv6RDc-S9v9FBY8zst6FHxZ7A&oe=69557D07)

Next, you can take a look and see how this is used in the trigger script. The first difference you’ll notice is that you have an array of activePlayers, and in preStart you connect PlayerEnter and PlayerExit world events. Seen below on lines 23 and 27, you add players to the activePlayers array using push, and remove them using the arrayUtils removeItemFromArray function.

The next major difference is that in the playerEnterTrigger, you now select a randomPlayer and update the story using that player’s name.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467993359_595241749680447_7898377454591025856_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=M9fJqU7UBzsQ7kNvwEAYplp&_nc_oc=Adl9B0fJJaI2aJ0kyYhd2-qPx4AYcW-13PLccwREgmT5Wj_EKABNDRg0NOeYL24H-T_mSecvYKsOSKOpaRJvDdNt&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AfniZ_b0_vSxTNZI-KBHd0BDf9FYImAPIBlwk3ku3rskzg&oe=695574AB)

The next change is inside of getStory. You’ll get a randomStoryFunc from the array of storyFunc. If it is defined, then you’ll use it to generate a story. Otherwise, the list of functions may be empty, and you’ll log an error to the console, returning an empty string.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467952894_595241683013787_5146014287776986293_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=pn7war7Is3UQ7kNvwHbNh-K&_nc_oc=AdnuFLntIsyLvmxmF3jA23qMIBXvaOhksrrMxoSJnEtm8rU_AsXqDxqAePmVhXHmuPUYGZNgfGvuCODuESu8Ep4w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=aJTHnib5lSz1OZ_wkqZbQA&oh=00_AflTyJxQHjY83T-gwLCSCKa04D3M1PvyoDplQC5tSpebCA&oe=69558607)

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