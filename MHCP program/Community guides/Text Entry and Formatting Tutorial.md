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

  ![Select Custom Model Import](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/468198625_595241713013784_8092391770579618737_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=OeW-fMc-r4UQ7kNvwGuOUMq&_nc_oc=AdlA7gqMR6rS6bBpLH2wfjDIkY89VyU4nSpEk6uwy-gYv97Y16h88PuR3NH-7sCqxIM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfkQTexjsjIx6rDbwjsrY1a6Och_WKiT-B5l3u9Q6WCegA&oe=694BE654)

Adding the Text Gizmo, to a scene using the Desktop Editor is difficult. Meta recommends that you add the Text Gizmos in VR. But writing text in VR is also difficult, especially if you want to add any of the formatting options. If you want to use the Desktop Editor, see Adding text gizmos using the desktop editor.

- Add a text gizmo to your scene.
- Select the text gizmo from the Hierarchy.
- Edit the text field in the Property Panel. You can also adjust properties, like font size and color, just like you can in VR.

  ![Add the Text Gizmo to a scene use the Desktop Editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467769589_595241743013781_7349902689390694342_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=SjySmdjq7k0Q7kNvwFkppyF&_nc_oc=AdmWuEMmtJv-B4wkws7D42fJHT1NaO3LxuY7WJIVlBlTAk1irZLcWA-5LnQzXbEMd0I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afk8q-BJ-xZ5Jp0kSUcpeY0iPMpahkEdaJh61V9qXoptEg&oe=694BD269)

You can use the text field to write text and to copy and paste text into the text gizmo.

## Adding Text Gizmos Using the Desktop Editor

Here are some tips to help you if you want to add a text gizmo using the Desktop Editor.

- Add a text gizmo to your scene, here are a couple of tips to make your life easier.

  ![Add a text gizmo to your scene](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467842483_595241769680445_620494155645858280_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=VCo89bzC_6IQ7kNvwGh4HMN&_nc_oc=AdmCfIBOB99ztrXAjhhiEZzpRDblKLC91bbzwvcweBgT6Vqe89zbzEJZbHtOXFIU2CE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfmJUWf_g3kcNhulylprVZ0E6po_SQRmsAXbmWT1nwjSEw&oe=694BE9F6)
- Add some filler text on the properties panel, in this case, in the image below, we have added “Hello World.”

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467879381_595241639680458_9173102621139393361_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=8nqRQ03qjREQ7kNvwH_rZ47&_nc_oc=AdlvsX7QAXlPlNDPj5oZIJkI-dw1XwVxsbM8AaZrayUDFH_3MCndVsRXxVSh2PPYxdk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfmUpl_tARA8dzLIXfI9C9iPZmGahhPc5LdQgsiuvodaig&oe=694BE20D)
- Then, presuming you have an object you want to place the text up against, click on that reference object and right-click to copy the position of the reference object.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467856751_595241789680443_6078805237931826866_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=KskgIErFRL0Q7kNvwFFQ1qE&_nc_oc=AdkW2yAMcihm_d_eL9Wn2STCGMeSkepWNMEx48Qrsoy4jijSWIQZunFq9EvfwPDmHv0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfkxI7H40I8n3kK6CpBYA9e_2LiBMnbKWlBPMpcvO3WXog&oe=694BB8D7)
- You can then click on the Text Gizmo and right-click to paste the position. You may have to repeat these steps to paste the rotation from the reference object as well.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468018101_595241793013776_4213593910410519336_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=KHhuRtQ9SLQQ7kNvwGw_zwK&_nc_oc=AdkmfrDQrMkQbjqKKc3tAARmv1A6wriGnfwg8U0BeBuIwZifEvncumPQ_KQKC_4Ni0I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfnRzpqKoX775vTQ28nGfhgJt3mwcMKVvUaLsNsF9lO_RQ&oe=694BB8B2)
- Then, with the slide tool selected, and snapping turned off, grab one of the slide arrows to pull the text out of the reference object.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467952672_595241726347116_117331172420294193_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=WUBigqi64gwQ7kNvwEGr2_c&_nc_oc=AdnmOfB1u7hKt8jyCONodyQs_wG9DLuZ2MS7o5Yh5dnHaS8lww6Mh1Gt9Q3I6O0-CII&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfnRqDvByObPRfb0febU8rxKz6_pGYWIuEN3CE1BbaL8gA&oe=694BD6BE)
- Now that you have positioned the text, it may need to be rotated. If you copy and paste the rotation of the reference object, and it is still off, you may consider manually adjusting the values from the properties panel. Or you can use snap rotation, I like to set it to 90 degrees.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467899374_595241633013792_7017878112968153930_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=SKz204Y75nYQ7kNvwH9ERgh&_nc_oc=AdnKQL2IhJ-WC--kCiNmw7RH-pjujN0Rf_eeVvKsZDQu0Up5ShSTHjSC3e6UOWFeSiY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afl1IsFSLwzhum7yTPHvIJAp-lrVKr6dNGxTakcf0z5fjA&oe=694BC882)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467842237_595241629680459_7331484596920045925_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=EthupIewxcIQ7kNvwE2qwDu&_nc_oc=AdnYnTG_kxPPMt2GFOTwFQObGVAYGIlWVqKXGalyTHDGbSOJFRDdhxVowkvmxJdJBOs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afl19KPQEb52molnNOzWgRHVZ3FflrKhcaG41Lun-oitYg&oe=694BE482)

You should now have your text positioned and can fill out the text and properties to your liking.

## Script 1 & 2: Send String(s) from TypeScript To Codeblock scripts

In this first script, the goal isn’t to cover advanced TypeScript concepts but to simply allow you to use TypeScript code to augment your Codeblock scripts that need more rich text. You’ll do this by sending a string variable as a parameter. This can also be a list of strings. The script calls lists in TypeScript Arrays. It alternates between those terms in this section, referring to them as Lists when talking about Codeblocks, and Arrays when talking about TypeScript.

It’s important to start by noting the limitations of Codeblocks strings and lists. Both are limited to 1000 characters. There’s a maximum of 1000 items in Codeblock list, and a maximum of 1000 characters in a Codeblocks string. These limits don’t exist in TypeScript strings and Arrays. This is why you should consider learning TypeScript. TypeScript doesn’t get around the 1000-character limit of the Text Gizmo, so you might need to divide your text into multiple Text Gizmos.

This tutorial uses the Meta Horizon Worlds TypeScript 2.0 API. which as of July 2024 is the default, however, if you are not in 2.0, you may need to adjust your version from the Scripts tab, select the gear icon, and then Settings.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467842517_595241733013782_2128132337469528118_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=0GY16dKWnVAQ7kNvwGG4-4F&_nc_oc=AdkNzOumtFhsLl2sOG38WsBYccejvbjZQ18DLld_6-ClZAWGNirjUlssJCehUx3fuhg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfnSHWOOM98dl1o1JfiSNLn09EcoV0oKUcwq8V7lye_UBw&oe=694BE073)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467676822_595241729680449_3367236753877387468_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=cSAcZIOju4EQ7kNvwF6m_OQ&_nc_oc=Adn_V1T-DMxZ3svdPyS70-S6XWUYTnWmuw5rPdWZxJ9h9Bpfj3tiY0X40a6PX-JZF60&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfmEUT2y0WSJ7jsArTj6ituD5IYjjhw0aBgdgCZtoWmo-A&oe=694BE699)

- If you would like experience writing TypeScript you can create a new script from the Scripts drop-down, in this case, we will name it **SendStringToCodeblocks\_Entity.**

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467776400_595241636347125_7347996169623556433_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=Je0v9CUpLLgQ7kNvwFyixD7&_nc_oc=AdnKepCtn_HalnLO88avcYB7Y05ARKeSq7FaW_AbGcOoN2BndnVM6FldpNUM-3BY_Co&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfmQJA8CC-Br7MONwf5Z5OKBdwlxiTzyd8JRECA2UqkX1A&oe=694BDDC2)
- You can then write the following script out.

  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467812886_595241736347115_791166171449353852_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=GUt_283tAsAQ7kNvwG97z7p&_nc_oc=Adn-iiHwCBCS6NTJwyrmop6roWuyuZKLn-O8Y0K3N1BHl0rdRj6An6fSc87AIraC1Ic&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfnJyt1tLUj4OkIJUIig9VDfnPnYlmk2mFaiiNYTr-45Cg&oe=694BD342)
- If you have never used TypeScript before, you should download this script by [clicking here](https://drive.google.com/file/d/1aYxgHRxceWXIJ8epHN01XXvWdzKKZ9s_/view?usp=sharing).
- Open the Scripts folder. Click on the **Scripts** drop-down, then select the three-dot icon, and “**Open the Scripts Folder in Explorer**.

  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467745430_595241703013785_5034482498143521700_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=-7NnAlhTmPYQ7kNvwHSS_g-&_nc_oc=AdlVp9kH3kBaku8WY533Z1keV3Ul0EbpZPk52QZUussWD0lJ1WvjK_AOJCC5VYDQxes&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfkoovwqUKPZP9MDnTnVH7XV1AZUkh_RXUQAh002fGQn5A&oe=694BC234)
- Drag the script into the scripts folder.

  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468101013_595241763013779_4449412052777928746_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=KFsQkk2Psz0Q7kNvwHjBoRD&_nc_oc=Adkyu2olWSB7pG2SscMUNAiy2yJMbAX5cpSym4Ar5bNDwVWN0IQtW4KvEaPDUxCeAxw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfksSfv2ekB_MxF-5MIOZwswSRnvV7HSbDK3AVAvBRsN_g&oe=694BC139)

As you are writing or downloading these scripts, here is the second script you will want to [click here](https://drive.google.com/file/d/1aRek4QMU_r3GB-YstadaXiTX2IVtH8aY/view?usp=sharing) to download.

Create a new script. Name it `SendStringsToCodeblocks_Entity`.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467993616_595241686347120_1623269506850882067_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=DVV7jAEYkGkQ7kNvwHfF2jJ&_nc_oc=Adn5JqVl8OFoYCXlaMviUWpm7oaRjWkeiz2O-sF1il40SGRstAEX8iV0Aal1S2NFlx0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AflqB9t8FvLxgC2j2fTPdDRFCJui_nGix1yUzaCz7LCPbA&oe=694BE8B6)

These two scripts serve slightly different purposes, the first one is for sending a single string, and the second an Array/List of strings. Unlike Codeblocks, not all TypeScript scripts have to be attached to an Entity (referred to as an object in Codeblocks), these two scripts, however, do need to run on an Entity so that you get access to the properties panel, allowing us to reference and send an event to another Entity, one that is running the Codeblock script you want to receive the string(s) on.

With the single string, you can reuse the script over and over, only needing to attach the script to another entity and adjust the “message” being sent from the properties panel. Don’t forget to reference the receiver on the properties panel too (notice in this photo no receiver is selected).

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467821732_595241739680448_6195733651696316672_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=K1j2H8TtEqgQ7kNvwEOLDKK&_nc_oc=AdnpU2gdnXk4Luj_Sb42GTVbcGKX2ZQqol4J3L5MdY3rlbKSit8CXiPQ5MoyMLnPpjI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afn_0EH3DQryRJanLhD0RZDBTBAGuwEUFedM2xe5CI1YLQ&oe=694BB960)

For multiple strings, you’d need to be more creative with your scripting to reuse the script. So instead, for simplicity, it is recommended to duplicate the script and give it a slightly different name. Note that you will need to have installed VS Code to modify the script (remember to restart your computer after installing). You can then modify the script by pressing the three dot icon next to the script name in the scripts drop down, and clicking “open in external editor.”

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467812284_595241689680453_6429132513994036945_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=OU_jc2KoNaQQ7kNvwE2L8-z&_nc_oc=Adn_bfQg7MNwpLIEcez1GjWRJWV1jqM8LvlmlfqPVLOegh1OGcLv4Z0MGBFbTZ7x7kQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afko1TzVFeaTmuTF-l1F347oXELXpSDoU0r3Z09BQIHZow&oe=694BE5CA)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467675726_595241693013786_881499020837805569_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ARij0yJ0I5wQ7kNvwGq-Em_&_nc_oc=AdmOLjdudHU9hJPWkCA0MkIItalOrtrr9gsk6Sm5UvGGOifn_AnfoQaaPnMLYrvto28&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfnWr37qFP6J712mrh2wYiBZcK_laerCMBm288rgO5u5ng&oe=694BBCF0)

Here inside VS Code, you can modify the array of messages to suit our needs, adding as many lines as you want.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467699038_595241759680446_1836027078983149650_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=qAnsAG2GQvkQ7kNvwGtKe15&_nc_oc=AdmkiVQgxxWkGZUwd7zPnbLQKviMXMNsCcRiOda6tJ55MNx15QOTx_14tBXcgiKMh5M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afn6WkZPq1m8IFgqRARcm9RrgKaCSbC9kvsn6Ro31_ryBg&oe=694BBBFA)

With these scripts ready to go, you’ll need a Codeblock script to receive the message(s), a very simple script is shown below to demonstrate that it works by printing the message to the console:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467712412_595241706347118_4505531409967578681_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=7Q-HowWyq68Q7kNvwGuxC06&_nc_oc=AdnUvxtZWQflmZVem5lKyHyMXZ4IaG-A1bIfZTPqEMgvncSbA7INvzIn-xGUfJT7m8E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfmBgJTL3_8Jhd0Ys6zy8LJsg72QnnQkfwkBLma290mmXA&oe=694BD221)

Be sure to attach the scripts to entities. Attaching scripts is done at the bottom of the properties panel. In this case, text gizmos are used to run each of the scripts. If you give them good names, it’s easier to find them in the hierarchy.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467726387_595241696347119_674325849486122084_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=dQJT7QMdR5QQ7kNvwFfPk-U&_nc_oc=AdlaL2A6a28myMzQUXm4p9GwIL8M0kEr2cHYr8rzPFFfIbicuRr7l_UFFkp3xgVNo2k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afn56nDe01qX9_1nf73wMPus7e1wAkZotA2OL-ot9QqpFA&oe=694BD5BD)

You can then drag the codeblocks receiver from the Hierarchy to the empty pill slot (the pill-shaped field in the bottom right corner with a circle-like icon.).

**Note**: You can also click on the pill slot to see a list of all the items in our world, and from there, at the top, you can search from the drop-down.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467898774_595241753013780_3884485395764561095_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=X4R1MVLBg_4Q7kNvwHrn9ty&_nc_oc=AdkZQAVVc2Pt5aIvfNfcvT-ZkXps6aqwsMq5-6tZVECsbdCxfqBwFfa0gKcScCviERY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfmvZakT6UbC_tAHLgM5x7U1l4I79d4QYKyqp9Wt0lkhOw&oe=694BBEB8)

**Bonus Tip:** You can find entities running a specific script by using the hierarchy filter, and selecting entities running a specific script.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467712854_595241673013788_1548314560034761599_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=IRhoVJZEdrIQ7kNvwFSS8tD&_nc_oc=AdkdWnLiJCGvF18zvi-mdIf3-sXCHUF0vFc8dXI5k6on2Y9gXVxUraC0Bc7nDFeQEsg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afk3vOWItNTIo7M_ntko8s6MR_BgJQcjhxXN0YWlfdmqTg&oe=694BC871)

Run the world and see a console message displaying our messages.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467712412_595241709680451_974922764830194410_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=PB8K5HtX50oQ7kNvwE7hQiJ&_nc_oc=AdnWrCe9dD-WhrnsVRwANge-iekCFW3kSNONpv1AwGpJgy-D2_c3r91nwKaaITVc1yk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfnEFQg0MYFM-23iP6ePfDtmjMPwh1DW6MlZfvS6HI6jYA&oe=694BCF3A)

## Script 3: Send Q&As From TypeScript To Codeblock Scripts

In this example, you’ll expand on what you learned in the first two sections. Instead of just sending data, now you will allow the Codeblock script to request two pieces of data: a question, and a list of possible answers.

You’ll need to create a new type of data called QuestionData that stores this string question and string array of answers. You might imagine this is a game show, and only the first answer in the array is the right answer, you could then randomly select wrong answers to mix in, scrambling them when displayed to the contestants.

You won’t be diving too deep into this script, which you can download [here](https://drive.google.com/file/d/1sgiIIyd_PrunVMYsv-hAn3cCfHatTf2v/view?usp=sharing), as it does show off some more advanced features, but if you have managed to do script 1 or 2 in the previous step, you should have no problem implementing this code.

**Mentor’s Note:** The “getRandomItemFromArray” function comes from a file that I add to all my worlds, and when it gets updated is shared in Discord. You can download the arrayUtils (created by the Vidyuu team) by clicking [here](https://drive.google.com/file/d/1Wlaru7gyQRTzjov5rACVMsr3lm3pG7PV/view?usp=sharing). Feel free to ask questions in Discord if you’d like to learn more.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467675376_595241699680452_8898738800974011262_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=XTco_gFuAGEQ7kNvwENqbKH&_nc_oc=AdnQexFoHeuINwdHu1pXlM8jKr9i3SRuelOOYdfjnpRVcSMhjy5lW9_OlMYQyuVwz2E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfkLPtPHaplR4Q0n-r-m9_3v_ooLxBrOTfUxNQgyUCrekQ&oe=694BE321)

If you would prefer not to use the Vidyuu arrayUtils file, below is what that would look like. Instead you use a copy of the function from the arrayUtils file, pasted at the bottom of the script.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467811141_595241643013791_6766518816931739561_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=2TrtI7zS55EQ7kNvwEI7Se_&_nc_oc=Adlb7NIdho1u0zVHaDrQ50VruECzXGg8Z0W_YR9x5-ckEG7fLHvNxtNzCGPpIJA7ZK8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfkN4hUvCx0cLB5skyPePg-YzazMo1EZeAUBhgfdJ3p5AQ&oe=694BD90A)

To send this data to a Codeblock script, you created and then used a CodeBlockEvent with two parameters; String, and StringArray. This is received as a string, and string list, as seen in the screenshot below.

Note that this demo Codeblock script, receiver, will also need to be attached to an entity to run, and reference the entity running the QuestionData script. The QuestionData script will also need to reference this “receiver.” For this demo, you get a new question on world start and when received, print it to the console.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468091226_595241766347112_8886608641898299488_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=izxs9PGhD_oQ7kNvwHuEz0I&_nc_oc=AdkG9bSPAj71uYjVGKjquPkJIu5lcfcrGEm_3Io1VZOn0ywBJg_Vh7EaVnIvV2nj9bo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfmAid8_pYxWU87u7BvOPGVyZHjtu5WMytyd6qM66Jwt8w&oe=694BC1C2)

**Mentor’s Note:** This is just a taste of what easier text entry with TypeScript can unlock. Really looking forward to seeing how you use this in your worlds.

## Script 4: Receive Text In TypeScript From Codeblock Scripts

Next up we have one last Codeblock integration example.

In this case, you’ll send a message to TypeScript from Codeblocks. You can imagine an event in Codeblocks like this, with a string parameter as the message.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467864826_595241756347113_4361335022965837604_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=shMCQPpRThUQ7kNvwGIF5yr&_nc_oc=Adn-Nj0_aDuzT3Sq7wh39WuVRqqLvV4i2yQdZLMfnIvJdliPyNkNlzAlgGSlfgx7oqY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfkbskgV9ZQnhTabpW3z_SA1js7kjv8Xbujt7BB3mvlduQ&oe=694BB937)

Then to receive the message in TypeScript, you will need to create a new CodeBlockEvent, which includes a parameter (slightly different from the previous example with no parameters). Then just connect the event like before, and in this case, you will log it to the console to show that it was received. You can download this script [here](https://drive.google.com/file/d/1Q7NFlLBJ6MpjLrh3O5gaYDLdWbrt3ejc/view?usp=sharing).

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468130683_595241646347124_3219773664877344729_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=qt0X5MtRmfAQ7kNvwG07J2E&_nc_oc=AdnkUmGiB4Tt4OrbYJAFFjSznkwKWtnZBiL49-sspLFCrqeY9L94u3j9P8_Vg6dNbXo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AflQ_-sw9KeRwduBuL_SdhoOQnmNS3JIOUsNyd7hPM4tPg&oe=694BC99A)

**Note:** If you are planning to stick with Codeblocks, this is the end of the Codeblock integration examples.

## Script 5: MegaText

If you haven’t used MegaText in Horizon, it a script written by the Vidyuu team in the Asset Library under interactive. It allows you to write text on a Text Gizmo with multiple lines. This makes formatting so much easier. The example below is the same script, rewritten in TypeScript, you can download it [here](https://drive.google.com/file/d/1hKw0YV-o_zjuGbXMPMI1fT1Yo0bfArKs/view?usp=sharing).

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467806940_595241649680457_6630269722610001617_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=-1VI06otmAMQ7kNvwGI8PTM&_nc_oc=AdlH_ArRTrhQwcUmxIb0ZtZn4yeUfq3R46TLCeMeh3qmAgMRcNXQU3rks25JITVAMJ4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfmWzRP56X2qouDED8tQUyL8WDusFwMujjLF67Cjo-6GqQ&oe=694BCF90)

The biggest difference is that this example only has 16 lines, and the Codeblocks asset has 32. You can duplicate row 20 and 31 to add more lines. Just make sure they are added in order and named appropriately.

To use MegaText, attach this script to a TextGizmo, and on the properties panel you can fill out multiple lines, making it much easier to write large blocks of text, and even add formatting. I’ve always recommended leaving gaps between lines so that you can come back later if you ever need to insert or add formatting styles. You can use this script both in the Horizon Desktop Editor and in VR.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467725469_595241653013790_6628002032060532237_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=HqKzJ893FIIQ7kNvwG_dMUg&_nc_oc=Adncm5g-1XHL9Qt4Gz50YkhABAHI4PrwbETtFZ4XsUPdHIED4LNacg8UUWck_l_jRKM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AflEofnW72VER33Ec7BRcXQ0tNT-M2vnOzKKg-FK0yXelQ&oe=694BD61F)

## Script 6: Writing Text With Formatting In TypeScript

In this section, you’re going to write text in TypeScript, and apply it to a TextGizmo that is running the script. You can download this example [here](https://drive.google.com/file/d/1xYVDDff6BSr2_iSX3PDGzo-dfsvUgOq1/view?usp=sharing).

You’ve defined font and lineBreak string variables. This makes our lives a little easier, by making it so that you don’t have to remember or retype the angle brackets and this also makes our script easier to read. In addition, outside our class, you’ll notice the bold function allows us to easily apply bold to a string.

In start, you define a couple lines, add them all together using displayMe, and then apply the displayMe string to a TextGizmo.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468099956_595241716347117_3872321777488185735_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=0EYEu4NO8SoQ7kNvwFDmXhW&_nc_oc=AdmZqH2yVkxs-2O0vB586oldTDzxkrVcyoDOxOnR5tyjD4OQYYONDeBMWVjphFYcMII&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afl3w2ZyxgWlP6WMQ6VzgnsxMFwHXKXvAukbJJ1kV1qLCw&oe=694BB3E8)

You will need to make copies of this script if you want to have different text on multiple TextGizmos. Note that the name of the script needs to be unique, but the class in the script can have the same name, in this case “EasyText.”

Below you can see creating a new script with a different name, I would advise naming this based on the text they display. Then in VS Code you can copy paste the first script to replace the default script in EasyText2, filling it out with your new text. Notice that when you assign the script, on the left is the script name, and on the right is the class name.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468132793_595241656347123_767351154685953432_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=6oS4RY_aNGsQ7kNvwGKUzgr&_nc_oc=AdnAC6bnGwrNh5rdAoXFrMVNhphm7GncQDdZq6W29puQc8ArL2S7IQKLs1U4QzsCe8E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AflohY7FnlRhs2JTjsBeHHAVguHfj7QMoJyT7uPK3OJa8w&oe=694BE633)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467842237_595241659680456_1673158030815762410_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=MtNJhyUKUXYQ7kNvwE23W4m&_nc_oc=AdmZs5bcKzU00EEh2A-eiuc2FepN7_y_9NxE88amNGq3DXcvW4SQqILj058wKxzlGdE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfnLI9Qwce3BdtRK5iONCfhfeqORMKYQLCWm0Hz7GwQn-g&oe=694BCD74)

This example script has shown you how you can take the formatting options shown at the beginning, and apply them on your own. While this works wonderfully, as a part of this tutorial, I put together a formatting library, which you’ll see in the next step makes our lives even easier.

## Script 7: Write Text With a Formatting Library

This next script for you to [download](https://drive.google.com/file/d/122S7MyeFNDhkZ6oUG7nokfMQmswrgiPV/view?usp=sharing) is from the Formatting Library (written, a Utility script that you can use to make writing text with formatting a lot easier). If you have never used a library before, it is similar to an API, in that it provides you with additional functionality. To use, simply copy the UtilTextGizmo\_Func.ts file from the above download link into your scripts folder. You can then use the provided “formatting,” “Formats,” “Fonts,” “Materials, and “Gradients.”

Below is a simple demo, which can be downloaded by clicking [here](https://drive.google.com/file/d/15g5RvlCh2opLGxWfy_KJTelAP1tcLxvj/view?usp=sharing).

In this example, you imported “Formats” and “formatting” from the UtilTextGizmo\_Func.ts file. For the “title”, you have a string that gets three formatting options applied. After typing “formatting” when you type “.” a list of formatting options appear. Including a second list of “specialFormats.” You’ll notice that “Formats.bold” allows the applyFormat function to apply the bold format on your title. “Formats,” similar to “formatting,” also has a drop-down list after typing period.

And then similar to Script 6, you add the title and lines together. In this case, you use formatting to get an easier way of typing in line breaks. And then finally you display the string on the TextGizmo that has this script attached.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467878752_595241663013789_1810103766417245983_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=txv7zrdjozYQ7kNvwHgK8cC&_nc_oc=AdnXf1sE5XKJFtP1-SnXvUberJwvxG29BjrDkEae_tatt2duM4NAN9XzyKw8-63C20U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AflmfIK2ih6B5GVi6RHwdzQqgGw-tpEIpnLHq3_v39P0QA&oe=694BCEB3)

Using this on multiple TextGizmos will require you to duplicate the script. give it a good name, and then attach the new script to the relevant TextGizmo. This isn’t the only method, as you could have one text manager that has the TextGizmos referenced on its properties panel. So depending on your needs, be creative and feel free to ask for help in Discord.

In addition to “Formats” there are three other enums, which have their own formatting.apply functions you can use:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468159987_595241773013778_2634878764640219240_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=8uNgmpvxa2sQ7kNvwEALITF&_nc_oc=AdnmLRZuI0pb33Oupdh9TSm7MiEYYisS8JC7a04jza457omvNA3AGokj8R1srchprfE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfkO5SRO_QaXAcjadGiLEgSp9z4MPg7xGG1_gnI2m2rxfg&oe=694BB751)

You can also use these on their own, if you don’t need to clear them at the end, ie:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468151290_595241666347122_8433285314453383764_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=rJcjvPv9nzsQ7kNvwFFithX&_nc_oc=Admvp5qYr3qAKcdppmpcnpjN6nNzHMewDo-PB-cEYgyx2zZE9VXZpwEYqTt8-uA7umo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfnXgq-OEDT-BYUHUq9pEEU9sBy0Yxh25hH-2jIo2exumA&oe=694BC8A0)

Feel free to dig into the utility file on your own and learn more about how it works and what options are available.

## Script 8 & 9: Ad Lib Story Example

This next section may feel a bit intimidating because you’ll be using multiple scripts. The first script is where all the logic is stored. It is where you’ll spend most of your time. The second script is a data file, storing various strings in JSON objects. The last two scripts are utilities you have already used. They’re the formatting and arrayUtil libraries which allow you to easily apply formatting and work with arrays.

You can download the files here:

* [EasyStoryTrigger\_Entity.ts](https://drive.google.com/file/d/1IwalvBI24Yym2gCxPdjYB40bTGv_i1om/view?usp=sharing)
* [Story\_Data.ts](https://drive.google.com/file/d/12u_sTwv6i0Vla8QmfI_KZDou55sWaV0D/view?usp=sharing)
* [UtilArray\_Func.ts](https://drive.google.com/file/d/1Wlaru7gyQRTzjov5rACVMsr3lm3pG7PV/view?usp=drive_link)
* [UtilTextGizmo\_Func.ts](https://drive.google.com/file/d/122S7MyeFNDhkZ6oUG7nokfMQmswrgiPV/view?usp=drive_link)

Let’s start with `Story_Data.ts`, which is a relatively simple file that creates four string arrays, and then stores them in an exported JSON object called storyData. You can access all of these strings from your main script by importing storyData. You can imagine having as many of these string arrays as you need for your story.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467810576_595241776347111_3861804389282283223_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=q9UBYcafI2QQ7kNvwG3f49u&_nc_oc=Adnvloq8BcAFVfb0yKwZj3olWDvi9Co1_2cDE6WS_WIf1FQW9oVDdhXQ9pOm71PsQwU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afn2RzS6wV3gioaG0hHb3rGHeTkB48SYT9NX8YLSKCKZ4w&oe=694BCEE5)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467812778_595241719680450_2622406763657355553_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=06FDeOxkAUgQ7kNvwEbiIwR&_nc_oc=AdmmIYybLKji1uNP4QDzlK1jdNUQmIM_EDqosgoaNRzMgq9Lh84bHsl79zopESMuRMk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afk-qDsSOVHzopIqFIaXMxxJsy0kH0W_Stnq_hVXyEMT7g&oe=694BD13D)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/467994252_595241783013777_9048662164141849098_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=rq7Q-ymtJtEQ7kNvwHtEOO4&_nc_oc=Adnb62ugaoJkv6ex2DIBp7Xk0EW-WpxmfaYfbDXfcpbm3iDtHgb7Dw-ZosU2YLyBx-s&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afktt4Wtvavb9tLVJOwj3hFJeOiSZ0lc-bEsWSZuQ6R2ew&oe=694BD51F)

You can now see this all come together in the EasyStoryTrigger\_Entity.ts script above. The first thing you’ve probably already noticed is that you attach this demo script to a Trigger Gizmo. This allows you to test our script by simply touching a trigger. This does mean you need to reference the TextGizmo, which you do on line 8 in the propsDefinition. You must make sure to fill this out on the properties panel of our trigger that is running this script.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468090494_595241779680444_8145136237204572786_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=mCYlgV_e4tQQ7kNvwHcgtup&_nc_oc=AdnQBs1IBpalS7dXtXRq9ziIWo3SngtwC1QVm-Mw3GYEKsgeI0dVyzOEruv3JvcQDTk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afk9B_m_tWG0ryePzVk0j0X-qX9IFYy5ne5Whp_8549FkA&oe=694BB6AB)

In preStart, you connect the OnPlayerEnterTrigger event to our local method. In start(), you load a default story using ‘adventurer’ to fill in as the name for a player. You can see the playerEnterTrigger method also calls updateStory.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467809488_595241723013783_5934371754843220484_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=9e-zNsNoi3EQ7kNvwEuE39H&_nc_oc=AdmY1psbBqY-0KG41dfRCPhaILfGi1SomSXz6Lto7cTUAThkuHEuLZ6faNhL7GjAzfk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afkeg-_GX3OzPW3_jr9LkoWUL2VUJ_xJIFm-vmq-J6hFMw&oe=694BC84D)

The updateStory method starts by getting a story and then displays the story. Each of these are separate methods shown below. One returns a string, and the other updates the TextGizmo.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467767440_595241676347121_5786752982037091076_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=1RFc3dHwYAUQ7kNvwG9COjE&_nc_oc=AdkA-QiVcDFSPwgZY-MwoxoVAJK5zRZu_z6EKOiDnHqGEpQyn5IbZbsX6Uvo5o-Ncos&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afk_enGambgGsW9yOQUMQVopZ-GP75IvBE1PoS_3ueRhig&oe=694BBCA7)

The getStory method is where all the magic occurs. It takes a name, ie. the player name, and returns a string, which is the story. The first thing you do in this method is set several variables by selecting a random string from storyData, and providing a fallback, in case our array of strings is empty.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468014262_595241786347110_8659952628007533587_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=D48bbEsHQHQQ7kNvwE3iAx9&_nc_oc=AdkeTVFGYAklFUVmvFt2jzXklaoxF7yaqYxhf7Xq5ndhAbvJnEzMHRAeh6NYHR5k2_0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfkcIbusmUpMDNO5tnSkrRicJQaxndGuj8e4UGa2IViDVQ&oe=694BD212)

You then use formatting to capitalize the first letter in the greeting. There’s a second example on line 39, which sets the text to be the same as what’s on line 37. This is to show that you can choose the method of writing your story that makes the most sense to you. I personally prefer plusses “+” but the line 39 method takes up less space, and for some is easier to read.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467767655_595241746347114_4754993355373263784_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=P8RXEx8wsIYQ7kNvwG77YLZ&_nc_oc=Adn5VITkCe5lhoYfTlIUiTUprhb-OhB2d8M_krWFYpM63Uz3k7wDOm-ogqE9w7TfF0E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfnbaPZzq1ZuXOTrWFTPAA-kTfwUfvmZzK175c8WgHg0UA&oe=694BB6A3)

Now that you’ve calculated the story, you can now return it.

Display story is similar to what you’ve done earlier in this tutorial, except you added a check and console log if the text property has not been referenced or doesn’t reference a TextGizmo.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467826529_595241679680454_2219293768184138846_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=bapSkIjRM6IQ7kNvwFX4za5&_nc_oc=AdlKeFTsBbk10ziSSXqYz7MfjrOIX9asmokSdVoSWjwJoBZnLaU3rW5lttALq1vqwYw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_Afkft4S1E2JD9iGdyKUIdpCUv0fI88FpE55lPYsQrnfChA&oe=694BBD76)

From this, you can extrapolate to create your own custom ad lib story. If you have questions or need help, don’t hesitate to ask in Discord.

## Script 10 & 11: Random Ad-Lib Story Example

In this section, you’ll elevate your ad lib story generation by randomly selecting a story and player. To do this, you’ll continue using the Story\_Data and utility scripts. You’ll add to it with an AdvancedStoryTrigger\_Entity script, and an additional import called storyFunc.

You can download the new files here:

* [AdvancedStoryTrigger\_Entity.ts](https://drive.google.com/file/d/1Mosj6KW_46cb35YyNTZDurvWIDH14rFw/view?usp=sharing)
* [Story\_Func.ts](https://drive.google.com/file/d/17696gjxbix-GYvL62mpGsrx7TaTRHFKA/view?usp=sharing)

Let’s start with something familiar, looking at Story\_Func. This is similar to our data file in that you have an exported variable, but instead of storing string data, it stores an array of functions. The creation of storyFunc declares itself to be an Array of functions that take a string parameter and return a string. This is just like our getStory method from script 8. In fact, line 10 is the same method, but as a function called story1. You can then duplicate this for as many stories as you want. Just make sure they are included in the array on line 5.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467995338_595241669680455_5348008257830303167_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=DADrhd0E6RoQ7kNvwF2ZiJ7&_nc_oc=Adl7PwmHa_WhuR0ekKRNBE1a8xjwoRYYiLmrCH7LCFZVvLlmIAiiN15dbUZ8OS0rnGY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfmGO8G8Pa152CQEQsw3S80khjEPUsmc4wtwlr4rk-aogA&oe=694BD207)

Next, you can take a look and see how this is used in the trigger script. The first difference you’ll notice is that you have an array of activePlayers, and in preStart you connect PlayerEnter and PlayerExit world events. Seen below on lines 23 and 27, you add players to the activePlayers array using push, and remove them using the arrayUtils removeItemFromArray function.

The next major difference is that in the playerEnterTrigger, you now select a randomPlayer and update the story using that player’s name.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/467993359_595241749680447_7898377454591025856_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=0SqcHnEFMmgQ7kNvwFp_BRy&_nc_oc=Adk28BJU32VoUOUrC9kCAgSwmkbHXfDCdp7-H6pD-XSpul2ucE5qydTbnwVW27CZJRo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfkdljDuTk2AK_8141Qp2CZYBqGGNs3pSD5Z39voR8avEg&oe=694BC9AB)

The next change is inside of getStory. You’ll get a randomStoryFunc from the array of storyFunc. If it is defined, then you’ll use it to generate a story. Otherwise, the list of functions may be empty, and you’ll log an error to the console, returning an empty string.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/467952894_595241683013787_5146014287776986293_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=0MqlXc3QpjcQ7kNvwF-kNA6&_nc_oc=AdnAmaKxy28Rhm2nwKywDRHqqrrqV7_BOwQD8BfVwjSM1zc9tdsMOhgOY9m14WsAIl0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EdXogtwygU6jci_cL6qJ9w&oh=00_AfmHPy2UPwEWSedBFbCQKygy-7pQlqQWRR9C8QH8gRf2hw&oe=694BDB07)

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