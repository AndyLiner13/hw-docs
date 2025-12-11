Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/cui-api-introduction

# Custom UI API Introduction

## Introduction

### Creator Skill level

All levels

### Required Background Knowledge

No prior skills are required

### Recommended Background Knowledge

Windows Computers

## Description

In this guide, you’ll learn the fundamentals of the Custom UI (CUI) Gizmo, a powerful tool for creating custom interfaces. While traditionally requiring TypeScript knowledge and API expertise, this beginner-friendly tutorial breaks down complex concepts into accessible steps. You’ll gain hands-on experience with formatting basics and essential features, building the confidence needed to understand official documentation and start building your own custom interfaces right away.

## Learning Objectives

By reading and reviewing this written guide you will be able to:

* Setup The Desktop Editor
  + Add the CUI API to your worlds
* Create Base UIComponent Scripts
* Display Text On CUI
* Visualize The Boxes Inside of Boxes
* Organize Styles
* Understand Bindings
* Background Image Example
* Instructions Board Example
* ScrollView Example
* Learn more in docs
  + Tutorials
    -Custom UI

## What Is A Custom UI (CUI) Gizmo?

The Custom UI gizmo makes it possible to create interactive user interfaces that work great for both VR and XS users. You can create clickable buttons, display images, update text being displayed to specific users, and much more.

Creating with the Custom UI (CUI) Gizmo is sophisticated enough to warrant dedicated specialists on professional teams, similar to how teams might have dedicated animators or other specialized roles. The depth and complexity of CUI development makes it comparable to other specialized disciplines within production.

After completing this tutorial, I encourage you to continue deeper down the rabbit hole if you enjoy making these UIs. Alternatively, use the basics learned in this guide to augment your current workflow. There are dozens of niches in the creative process in Horizon, with new features like this one added regularly. It won’t be for everyone, but for those who have CSS background, or who pick it up quickly, have a blast!

### How important is knowing Horizon’s Typescript API, to get started?

Knowing Typescript may help, but the UI API is very different compared to the Horizon Core API, so you really can be a beginner and dive deep into UI with little background knowledge.

## Limitations And Use Cases

At first, your creativity might seem like the only limiting factor, and in some ways that is true. However, there are some limitations and use cases to be aware of.

### Text Styling Constraints

Unlike the Text Gizmo, a block of text displayed on the Custom UI cannot have multiple styles applied to it without a lot of extra work. You will often find yourself creating multiple header and body styles. You also have to apply color in these styles, so if you want a rainbow title, then you will have to color each letter with its own style (which is more work than it might at first seem).

### Static Layout Architecture

The Custom UI layout is determined prior to world start and cannot be modified with the current UI API. This means that if you want to have multiple pages, you will need to hide and show them as needed. Note that while it may seem intuitive to design multiple UINodes with active display bindings, this functionality is not supported in the current version (as of September 2024).

### Performance Constraints

The recommended update frequency is limited to **two updates per second** per world instance. This is very little, imagine you have a player walk up and it displays their name and score, that is two updates. This constraint applies globally across all Custom UI gizmos, not individually.
For example, one thing I tried to develop at first and learned just wasn’t possible was a cookie clicker-like game. But the number of clicks, color changes, and everything going on, was too much for the UI and it caused Horizon’s menus to stop working.

### System Impact

Custom UI implementations can have unexpected effects on world performance. Key considerations:

* Monitor binding update frequency carefully
* Performance issues may manifest in seemingly unrelated systems (e.g., delayed trigger responses, physics interactions)
* Use trace debugging to identify UI-related performance impacts early in development

**Mentor’s Note:** Overall, if you ask me what I think about the CUI gizmo- I love it! I love that it makes menus compatible on all devices, and I love how it looks. That being said I use it cautiously, and recommend sticking to simple Pop Ups or Text Gizmos when you need a lot of updates or are just developing something simple. Most CUIs take multiple hours to build, which can really slow down your production if there isn’t someone assigned to this task specifically.

## Desktop Editor Setup

When working with the Custom UI gizmo it is highly recommended to use the Horizon desktop editor. This is because when you update the UI, you will want to be able to see the changes quickly and iterate rapidly.

You’ll start by creating a new world, this is not required but is a low-risk way to get started and have a playground to learn in. You can then pull out the CUI gizmo via the **Shapes Drop Down>Gizmos>Custom UI**.

You can then adjust the position and rotation to your liking, and after selecting the gizmo, press **“F”** on your keyboard, to focus the gizmo. You can then use **Alt+Left Click** to rotate around, and your scroll wheel to zoom in and out.

*Note: Rotating around will be useful as the UI is only rendered on one side, so if you don’t see it later in the tutorial you can rotate to the other side.*

![Image shows a user beginning to work in the desktop editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473575538_631480276056594_4482215321456536119_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=CJ0_iLTvbi4Q7kNvwF9CB23&_nc_oc=Adn3vTx0ctmc5-iCDoKstQw3qdrPgJJoRqYzrB6l9U9eqYVxl7UdnQ-dmq9_ThIRvDDyytP3WEKVpW6RJhnz4say&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfmBtvT6BcXGD_7N-Tt8_5uNIa9R5SeRlBU7lCcryijlVA&oe=69556C8D)

Next, create your first script. In the example below, we will name it **CUI\_Test\_Entity**. The prefix “CUI” will help you easily find all scripts that are related to the CUI gizmo, you will see that later in this tutorial. “Test” lets you know what this script is supposed to do. “Entity” is one of several postfixes you can use to describe what the script is, in this case, it is attached to an entity, a Custom UI gizmo.

![Screenshot shows the script menu with CUI_Test_Entity entered in the field](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473765158_631480316056590_3304733782305001022_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=otzEe0zRaFEQ7kNvwH4mZ2a&_nc_oc=AdlyGpDXinuR1beLJU4dxeUmCqLlyi4-3jOBNbvhd5IFSu0OdOKR--XbBi7lhQ7Xv0hsr5TmT2vJPVgusUK4n4fK&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_Afm_UKj8JEMUOJriuidcOFZSTx-R2boOQxgq5D_M711ykA&oe=695592F3)

Now that you have created our first script, you can go back to the Scripts drop-down, and click the gear settings icon.

![Screenshot highlights the placement of the settings icon](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473556853_631480306056591_7590379382942365878_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=XT_55kIkXSUQ7kNvwHRSfWI&_nc_oc=AdkX0mU0lhV8Mjh6X_p9fbsj6fwvpgrgztaxr0teq_3E7hM2BNymdtmkcPO0OCHT90aTH5my24_5OPr5lFv5sCQa&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_Afn__GMUrjCGl_-mOfVHU7buDyUf2-4HuBimQH_gQZwnyg&oe=695575BE)

From the settings menu, select the API tab on the left, enable the UI API, and click Apply.

![Screenshot shows the settings menu with the UI API enabled](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473453002_631480372723251_7188675402706182604_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=HFAhoqQWeyYQ7kNvwEEFVEy&_nc_oc=AdnF91thZdknbsOXYzyFDXyS86K1mFB8wWgloA33oVDsc6hIuTZ_EKCBM5xHoH4m2H861hAL6ipnP6eRXLr-uZ9I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_Aflv7TzKaG6EQ_hHza7GGfl_YKv3zNXGRD1ZU_eJMYlaIw&oe=69558679)

You are now finished setting up. In the next step, you will begin working on the base UIComponent script.

## Create Base UIComponent Script

- Open your script in VS Code. From the Scripts drop-down to the right of your newly created script, click the three-dot icon. Then select “**Open in External Editor**.”

*Note: If this doesn’t do anything, you will need to install VS Code, and after installing restart your computer for Horizon to be able to “Open in External Editor,” ie. VS Code.*![Screenshot shows the settings menu a mouse cursor on the 'three-dot icon'](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473388018_631480302723258_7884291281224528330_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=QU_lhGi7lo4Q7kNvwGfel8f&_nc_oc=AdnuJEURZvdkpib64pnmBcbXS9_ep-9ss1N-NOfiWJNbM65TEmpme5oOqpjxrMCPcXnVcw3UaB1kt0i6iunVdDEi&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfmVUoqADoaumdG97cbODQUbZLCTLFbJJBSuvIsgl86P2g&oe=69556CB2)

- Adjust the default script to match the base UIComponent script seen below. To do this start by deleting the import line and the two “**hz**.” You can then explicitly import Component by backspacing the “**t**” in Component, and when we retype the **T**, click “**Enter**” on your keyboard to allow VS Code to automatically write the import line seen on line 1 in the screenshot below.

*Note: Using explicit importing is optional, but for this tutorial, it is recommended you follow this method instead of using “hz.” to reduce the chance of discrepancy-related errors.*

- Rewrite the first “**Component**” as UIComponent, matching line 4 in the script below. Be sure to click “**Enter**” again to allow VS Code to auto-import from the UI API.

You also need the “**initializeUI**” method, which must return a UINode, which you can do with “View.” You will see this written out on line 7 in the script below.

*Note: You can click “Enter” as you type to autocomplete. In some cases may need to so that the import line gets correctly filled out. For instance “View” is also an import from the UI API. You may also find that “UINode” doesn’t auto import, in which case, backspace the “e” and retype E, clicking Enter like before to import.*

- Add the preStart method.

*Note: If you don’t click enter to autocomplete, this method and the previous “initializeUI” method, they are both case sensitive, and if misspelled will not work correctly or report an error.*

![Screenshot shows an example script](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/473707634_631480299389925_1506503231421137776_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=JUx5kNijS6EQ7kNvwFxX_rW&_nc_oc=AdnTp5YeaZSZV5zwI5ReBAaCd7IH-z8KpWL5vi_x8O8wySirXy66FhjbMXinTFLhYA56631ZnF5i4da6cFZ5G1hP&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AflffbawDDMdkh-mKN5EHp8SlL9iLOkZaYrSvt8hFD0Atg&oe=69558F4F)
Let’s take a minute to understand how each of these lines works, and what they do.

**Lines 1 and 2:** The first two lines are imports, this declares what you are using in your script. If you come from a background in CodeBlocks, think of this as not having access to any CodeBlocks unless you explicitly requested them. Fortunately, these two lines are automatically written for you by VS Code.

**Line 4:** This is where you create and name your script. These are called Components, and they are the equivalent to a CodeBlock script in that they can be attached to an Entity (formerly known as objects in CodeBlocks). Components come with Horizon-specific features including the world start method, onUpdate, PPVs, etc. The Component ends on line 18 with the closing curly brace ( }).

When you go to attach the script to an entity, “**CUI\_Test\_Entity**” is the name of the script. You can rename this here if you want.

The start of line 4, “**class**” says that the “CUI\_Test\_Entity” is a reusable thing, like a template, and can therefore be attached to more than one entity if desired (just like a CodeBlock script can). Saying it “**extends**” UIComponent means that it gets all the features of Horizon mentioned above, plus some UI-specific features, including the ability to initializeUI.

*Note: This means it has to be attached to a CUI gizmo. The last bit “`<typeof CUI_Test_Entity>`” is a bit of Horizon magic that we won’t be looking at today, but makes our lives easier.*

**Line 5:** This is where you declare any variables you want to have available on the properties panel of our entity that runs this script. You’ll be doing this later to reference a texture asset. In CodeBlocks all variables had to be on the properties panel, in Typescript you can put other variables that don’t need to be on the properties panel below this, for instance on Line 6 you could say “orgPos = Vec3.zero;”

**Line 7:** This is where you initialize what is displayed on the UI gizmo. You return a UINode, “: UINode,” which is what will be displayed.

**Line 8:** This is where you return an empty View. This means nothing is currently being displayed, but you will change that very soon.

**Line 11:** This is the preStart method, for reference, methods are akin to functions, and may feel similar to events in CodeBlocks, but unlike events, when calling methods and functions, they occur instantly, before the next line of code is run (whereas CodeBlock events happen in the next frame).

*Note: The preStart method is called after initializeUI, which is why I organized the Component methods this way, though you could technically put them in reverse order: start => preStart => initializeUI. But don’t do that, lol!*

Use preStart to connect events and do anything that needs to happen before the start method of all Components are called.

**Line 15:** This is akin to the CodeBlock event “When World is Started.” Components require a start method but can be left empty like this one if you don’t need it. Whereas preStart is not required, but I like to include it in my base script as it is very useful.

**Line 19:** This is where you register your Component script so that it can be attached to entities in Horizon.

Now that you understand the base script, in the next section, you are going to attach the script and display a simple “Hello World” message.

## Displaying Hello World

To start, go back into Horizon and from the bottom of the CUI gizmo’s properties panel attach your script.

![Screenshot shows an example script being attached to the gizmo properties panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473590719_631480369389918_9061693884799285476_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=j1v5pI0tMVUQ7kNvwHyDXFq&_nc_oc=Adl81HdnCyU5DFTqCR6C3W9lG5SSqtSKK-8LlafZe0EJoopThtr9vkWF3qXZzYC3_ZBZ9ldUjnMYl_PEVpg7eRCy&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_Afn93y9lkDI-ehfL4Tpo3JQYP-dwJjQo9rvBNEdzLp4SmA&oe=69559D43)

In addition to creating a UINode with View, you can also do it with “Text.” Below you will see a change from “**View**” to use “**Text**,” don’t forget to click enter while typing Text, to both autocomplete and auto-import Text from the UI API.

Next, add the property “ **text: ‘Hello World!’** ” inside the curly braces. You will make this look pretty in the next section, but the gist is that the Text function takes a JSON Object parameter, the curly braces, commonly thought of as a bag of stuff, and requires one property to be filled out: “text.” There are a bunch of other properties in this “bag of stuff” that can be filled out and will be explored in the next step. You can then define the text as a string using single ticks: ‘Hello World!’.

![Image shows an example script with the text: 'Hello World!' property](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473323077_631480339389921_3285744369286532959_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=yxndGSlDmmMQ7kNvwE_10p2&_nc_oc=Admt2HUvuifAr0NhJ56Ivv7VDabfzQ2dxcdaR8bpLdZv2jP0TPXmW-Q7LeTgKpLlqz5L8OSnAs2DHAy9KHCif3Gu&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AflqLNmci_cT9_CIrFZ9EK4xhOLAAqk1aNF4lej1E-A5SA&oe=6955700C)

With that filled out, make sure to press Ctrl+S to save, and then you can return to Horizon, and press play on our world after compilation has finished (you’ll see compilation steps detailed on the console log, which only takes a few seconds).

*Note: If you don’t see anything on the UI gizmo, you may need to rotate and look at the other side. Press F to focus the UI gizmo, then Alt+Left Click to rotate around it.*

![Screenshot shows a world in desktop editor displaying the 'Hello World!' message](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473530862_631480296056592_8186256504370472838_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=5-zv3E_LWj0Q7kNvwHZLJyF&_nc_oc=AdkIT47nIHvVNLzXnbCGP_r_y0jrwYcJacLKYYKF7FCWP7FQ-HNoaruaca3Cla1NfWuAvTzmbU5sgeiU1myfcJ2J&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfmJQ-1H3qnmdEwcCYHXgj9BTdPjEMtJNvjEUpb8hFvG_Q&oe=69556CA6)

And just like that you have displayed your first message on a Custom UI gizmo, great work!

In the next section, you will start to understand the inner workings of UINodes and their children, which will enable you to position, scale, stylize, and much more!

## Boxes Inside of Boxes

The best analogy I have come across to help learn how to use the CSS-like styling used on the Custom UI gizmo is to start thinking of the whole thing as just one giant cardboard box.

Thinking top down, you can place additional boxes inside of this box, and further down, boxes in those boxes. For my fellow math nerds, the cardboard walls are infinitely thin unless you specify a border width.

Next, you can adjust “Text” to look pretty by putting “text: ‘Hello World!’” on its own line and adding a comma at the end of the line as seen below on line 9. The comma will allow you to add more properties to our “bag of stuff.”

Below text you will add a style property, which also takes a JSON Object (the curly braces aka a bag of stuff). When you type the first “{“ it will auto-complete the closing brace, while your cursor is between these curly braces, click enter to automatically format it. At this point, it is recommended to add a comma to the right of the closing curly brace (as seen on line 12 in the screenshot below). This is useful if you decide to add any additional properties in the future.

In the style properties, you are going to add a “borderColor,” and “borderWidth.” These are pretty straightforward and will allow us to visualize the default border of our box, the borderWidth is set to 2 pixels. This is helpful when starting out with the UI gizmo, and can be removed later after you have finished working out your UI’s style.

*Note: borderColor can be any color you like, make sure to autocomplete Color by clicking enter so that it is also imported. you are just using a simple red here, so technically you could just use “Color.red” and get the same result. But this, “new Color(1, 0, 0),” allows you to easily customize the color later if you decide you want to keep the border. The values are in the order RGB, with values ranging from 0 to 1, where 0 is no color, and 1 is 100%.*

![Image shows a sample script with the border options highlighted](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473759687_631480362723252_956441516191612248_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=Rfls5zhkRloQ7kNvwEh8qKl&_nc_oc=AdmrRDd3WJO4O1F2q6sImGu2KiwBMGDEKUOQx1VHqxtqiU1BpcjJOSJ27YNHxQYNHtmP6d3dTRleqHZWWoRn9lBl&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AflX1zoLrgWwUTFeo-oPlTHyyQ_JA_DN13ua_sGzL8dA9A&oe=69558A65)

Now pressing “ctrl+s” to save, you can go back into Horizon and wait for compilation to complete, making sure to press the world start button at the top center of our screen.

You might be surprised to see that our default text box stretches across the length but not the height of the gizmo. Later you will learn how to adjust the style properties to fill a percentage of the available space.

![Image shows a highlighted 'Hello World' image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473630492_631480359389919_281062405271264325_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=SFYYqia8B2QQ7kNvwGUsUiD&_nc_oc=AdnqMyNcEVac41Ct7hvtR_XBJtVntfh-gUpuWiJkxAQ5Ec1ZhU2bn7xPKD6I0dYq-rLLwVjhOJFRImj24eUOltC2&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AflCsR1JghupEutCiSZAwlrp5Y7n_INISwd9OBqfQD8M-w&oe=6955A0DC)

Before you do that though, you need to learn about children- UIChildren. UIChildren can either be a single UINode or an array of UINodes. It hasn’t been super clear, but both “Text” and “View” return UINodes. You may remember the initializeUI method must return a UINode, which you first created using View and then changed to Text. Both of these tell the UI gizmo what to render. But it only takes a single UINode. What if you want to render multiple? That is where children come in.

The “View” JSON Object from earlier has a property not available on Text called “children” where you can then use square brackets to create an array. In the example below you will see several text objects nested inside the square brackets, and at the bottom the style being applied to the group of children.

![Image shows an extended sample script with nested objects that have applied styles](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473527386_631480332723255_1020087181007245061_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=-ovIVrLA3HMQ7kNvwF6XIDJ&_nc_oc=AdmJAmcxsO3FHelWphMmkXZK7GAUlKJ8FUKKrjamy0Lm6wlqLilacBBzYa_y8xTZzxb3RJLbIfZcMQENQpmt9E8t&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AflG69l8F-6ySX7cLHtryvCR3YzMzPXbOKN18FAZU0Vk4w&oe=69559D50)

If you would like to continue following along, please adjust your previous initializeUI method to match the one above. This takes a bit of work, copy and paste can help, but a missing comma, or line off just slightly could cause an error. My recommendation is to move “Text” down and create a new View as seen below.

![Image shows a new view after the "text" field](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473449481_631480329389922_5747572748883123818_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=-jdI_6pNAGwQ7kNvwGdixA7&_nc_oc=AdndDz0LhOeW8knolqZ3dsYwEMzZmxGF6PbBH0qLfvHy0PIoZg0PQ9vJ6PDfRDBNVx08deB4DixTSvNzsIKOt5u5&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AflPId05F9hTr3Dx8gEgr_Q-oaQ-7tfUjpcrAzMUmWoqQQ&oe=69556C09)

You can then cut and paste the Text into the children’s square brackets. Make sure to convert the semicolon to a comma as seen on line 16. You can then copy and paste another copy below this to match the screenshot earlier and adjust each style to have a unique color.

![Image shows text being pasted back into the sample script as per the instructions](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473453125_631480356056586_2449452631674760424_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=7KSwIPIxj6YQ7kNvwGnn0vj&_nc_oc=AdlJGa5G7pqsoBvA_zRJzPXwqgIA6ZwuR3OvTwgmWUaDeksLxycKVC-oV-I0G38XSitDK9vExICrLFGyFHRFIz4J&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfkkNrmKkUImstE-NRnSBOpv6zqTv9gCOTLB47ZMUPodJQ&oe=69558AF5)

As you might imagine this can get crazy very quickly with so much nesting. There are a couple of tricks you will look at later that can help improve the readability and condense the initializeUI method down some. But first let’s see how these boxes in boxes look by saving, compiling, and starting our world.

As you can see, they are stacked by default. Thinking back to our cardboard box analogy you will notice that because our width is set to 2 pixels, the red border shrinks the space available by 2 pixels. When you delete these two style lines in the future the two Text children will reclaim the space.

![Screenshot shows 2 hello world messages displayed, with color borders](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473248041_631480279389927_1224305611724849647_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=pESmOapEKfkQ7kNvwGxz0Hr&_nc_oc=Adldy5JLp9f26c4pAcAf63pJ1dTKCa3H3Lxq3cTRA4Pu1JmjSAINvZ7k3LkPIUL_8yI5P3Lm7MbEA2Gi2-4nCkOy&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfnDGmTcayHjAkO2Shs0ntn3f9JTwZS3l4WX_PMLxbfQ5g&oe=69556CD6)

In the next section, you are going to explore more of the style options and learn how to better organize our styles.

## Organizing UI Styles

Start by creating a new script to store various styles, **CUI\_Styles\_Data**. Press enter on your keyboard to create the script.

![Image shows a user creating a CUI_Styles_Data script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473536317_631480326056589_5069739203234681704_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=nwkx9sDRlQgQ7kNvwE6EseR&_nc_oc=AdmALfd96V2b9dd87WZhqY9hTaqMW-MN6zU00lNpHLwQDxR1WHP_HEQVBgnnT6J-s6dPd8-T37v0x3arbPaBwIw4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfntC65LQY10FDAQYQ3_qZwHpFu28W0CRDE1qCf1gMeM2A&oe=69557E5D)

Once you have the new script you can click the three-dot icon, “**open in external editor**.” Alternatively back in VS Code, if you click the top left files icon, it will expand and show you all of your scripts. You can click on the newly created .ts file, and optionally close the file browser.

After loading the script, delete all the defaults. A shortcut to use is, “ctrl+a” to select all, and then backspace.

![Image shows a script with all of the defaults deleted](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473364465_631480282723260_2627229903712946738_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=6cgpfHdvO2UQ7kNvwHPZwuy&_nc_oc=AdnTPux5P37EMmG5oyrXN8sarxObTVuSX5B48Zg08mMSogLPWhp4_Mahft2oOBwByaLb7QUfsyCyvADekTqlgO_q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfkQyqKvEWzfr_Fe2dJMmGRvabqcVLhr6iRctwpgnvR5Mw&oe=69559A3B)

The idea of this script is to be a place you can store and modify our styles so it doesn’t clutter our initializeUI method. You could have multiple files like this, one for each UI gizmo, but instead you can create a folder structure by nesting JSON Objects, with each nested Object storing the styles for a specific UI gizmo. You’ll see this in practice from lines 14 to 19 in the screenshot below. You start by exporting a const Object named cuiStylesData, which allows us to import this data in any of our scripts. Then inside the curly braces you have another Object on line 15 named “test” matching the name of our UI gizmo’s script.

On line 16 you create an item named “text” which is a reference to “**testTextStyle**.” This format allows us to have cleaner names. As an example when using this you would write, “cuiStylesData.test.text” which is a lot easier to read than the alternative.

Above on lines 3 and 8 you create two new constants. One is a TextStyle, this allows us to adjust text font and size later. These different styles have properties specific to their type. ViewStyle is a good umbrella capturing most of the style options available.

Inside these styles you are introducing two new properties, “width,” and “height.” This allows us to specify what percentage of the available space in the parent UINode you want to occupy. You can use a number to specify pixels, but I highly encourage adopting percentages for everything except ScrollView where you can specify the amount that can be scrolled as a number in pixels.

![Image shows an example style script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473442498_631480319389923_7473526534380015109_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=qtapSsRLNqgQ7kNvwFOTVP0&_nc_oc=AdkRTQUm7Gn6V8-0LvsKTw-agY-e2RPa-092VEYttdXWNhlStB49jrQq6MC121Gdr7KzaHjCDRFa1zQ5o6Ppa7oD&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfmDuSreRrbe5hqUVHMQKw_1vWpVHzbLOIvtgDRhHmBKXw&oe=69557824)

Back in our CUI\_Test\_Entity script, let’s apply this to our View’s style. Below borderWidth you start with an ellipses, “...” which is the spread operator, and then import our cuiStylesData Object by clicking enter as you type it out. Then when you type period at the end you get a drop-down list and can select “test.view.” What you have done is spread the contents of the ViewStyle “view” to be included in our style’s properties.

![Image shows a viewstyle view for the example script](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473439276_631480322723256_2003121008108723121_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=EmzL2zp2OcMQ7kNvwEAkWI4&_nc_oc=AdnLTWARTTwpnGnEVEp9VOBgxKEzrB-9Rxz0WqvJJhYUyP4AANJGjtZiGSl-rpjMrUjd56sos_BsAu1JQZYwqyEW&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfmqeOg4aDrb2aq5NKjF2pTewABNN1HbEJJXTDYRmpJ1XQ&oe=69556E1A)

Now you can do the same thing to our “Text” children. I recommend putting the data to be spread at the top of our style, because if you write a property that was spread above, it is overwritten by the later one below.

![Image shows code as per the previous instructions](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473442399_631480352723253_1648226294578166336_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=BtJ8eUwvOm4Q7kNvwENp4wf&_nc_oc=AdnqyKj433I-gxgPIJzEwthUxmdO08avVmU6d4ul4aAY1KodVCxO0Bwt3yG5qahKE7X9WPT-KtRoIn5GXObLQPMy&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfmcFCOCtrnX8-JW_CN5M2CEuo0ejX9z5AJyTV6gOQXPxg&oe=6955849E)

Saving and compiling back in Horizon, you can now realize our dream of boxes in boxes!

![Screenshot displays a world with text boxes in boxes](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473801216_631480286056593_8304832575925416005_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=YPAB-qJs80kQ7kNvwHkgX41&_nc_oc=Adl64bkrWpDOexS7AtVxUmmDAwRQ3VkqdKRKCe8j6kXfO7ucRAsw54AcWueAQ9mhFveEYpQ8tgiCCI2lmG9SJSxU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfnYuPslxmibo8SNsQD865qh55j9l1wDbcAdLokWcTIAQw&oe=69559B7C)

Next, you are going to look at bindings, which are used to update the UI.

## What Are Bindings?

Bindings allow us to update our UI after the world has started. Bindings are able to be various simple types, ie: string, number, boolean, Color, LocalizableText, ImageSource.

*Note: You cannot make a UINode binding, this will throw an error at the time of writing (September 2024).*

Let’s start by looking at how to create a couple of bindings inside our component. Below you have a string and number binding. you create the **nameBinding** variable, then you set it to be equal to a new Binding of type string, and you set the default value to “Name.”

*Note: You cannot access the values of these bindings elsewhere, they are just for the CUI to read, if you need access to the current value, it is recommended to have a secondary variable to store the current value.*

![Image shows example bindings](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473788371_631480346056587_3758836557906571406_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=lB5CbPLdq0AQ7kNvwFXqNF7&_nc_oc=Adn9grUrwdTq0QQ80lL7I9__QsPuFfkUyeG6XcUPPZWDWb8897M4DcWhlopKsyRFR4eej9Sbnz7-m491NEAeca3L&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfkFSLAflK_KkEd3QIidJo1_UuWI4UlpSheoaP4CR3MzWw&oe=695584AA)

When a player enters the world, you can set the **nameBinding** using .set, the second parameter “[player]” is optional. This optional parameter allows us to specify a list of players who will receive the binding update. In this case, you only want the player who entered the world to see their name. The square brackets create an array, and you place the “player” inside. When this list parameter is not specified, it defaults to updating the bindings for all players.

![Code snippet shows the optional 'player' parameter](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473450918_631480349389920_6846511320562073639_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ckndrJsUO9gQ7kNvwGPSe6E&_nc_oc=AdlKJF2IU0yOCtblVd-khbKqagPRPpRfIYx2j3csy2Va-pKHBKHR7Wpj6irwDN8ejaLsAJUdFlKITV_1VXWboMsr&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AflzPWFYg4dF3iEkI91xF8z1i1xCfiztAP1d4KQPyI8d-g&oe=69557FC2)

To use this binding you just have to place it after the text property, ie: “**text: this.nameBinding**,” but then you would just have their name, for additional text, you can use derive. Below you can see that when you derive the binding, you get the name and using an arrow function, you can return a string.

*Note: “\n” is a line break and is the same as “`<br>`” on a Text Gizmo.*

![Code snippet shows an arrow function used to return a string as described previously](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/473534069_631480312723257_8695516344311955994_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=q9b_K-8nBBkQ7kNvwF-AM__&_nc_oc=AdlfeuW0CFWLA9fDKQcHFKNgZtMQOozt83NuWGUVmj3ZswqEubNQp_BbnKVrQq7PFcl6JapRJY4zCT2v2MsW2QBn&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfnRXyG6NJ7Qjak31tS0iSI5wRswnHqTZe3eyLohR_5LQQ&oe=69559832)

There is also .reset(), which “resets the player-specific value of the binding, if any, back to the global value.” You can also provide an array of players if you just want to reset some players.

![Code snippet shows .reset() being used](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473440370_631480309389924_3803244681385835232_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=zEzirlKaYv8Q7kNvwFvRO8K&_nc_oc=AdkfG7e629WlUshiriUL4J-4NWUEbI4sptUCVh7-Cd-E5EtJRZUNcF7tebkh_ixCcozLbxQw5sO56EtEnrtLtzvT&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfnMu6HlVQCvFG7SxSmpa3kCF5VEBLFbDixjEqN50zgldw&oe=69558944)

You can also use a map function to set the value of a binding, here is a screenshot of the example given here: <https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/playerspecific-custom-ui>

![Image shows bindings for multiple players](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473442035_631480289389926_4182927293809331075_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=eyslqFNh8z8Q7kNvwHfC9k4&_nc_oc=Adk2CYwHXn1WF54PwI1FTfH3U96J3vcwBQrlVuCAZs1OHKHnOKQ7MGTCTcVC1zQVtL65SXCIdivW-IH6ayCcfX8h&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfkEm-6zTvZ_KY9g2tfhmVOALTHF0unWW9b46WKqNrmIUQ&oe=69557FF9)

Next, you are going to look at and discuss various examples that you’ll be able to take apart and try on your own.

## Background Image Example

In this example, you display an image png asset, which is uploaded to your asset library as a texture, and then referenced on the properties panel of your CUI gizmo.

**Mentor’s Note:***I don’t like to use the “!” seen on line 13, but it is the easiest way to get this setup and working, otherwise you have to use an image binding and check that the bgImage is not undefined. Be aware that doing it this way will break if your asset is not referenced on the properties panel.*

![Image shows code snippet for including a background image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473691452_631480292723259_8863074035084342711_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=rB8oZrhHzmsQ7kNvwFlMR6X&_nc_oc=Adk8VI2UYJPf80_fKvPQTQlIOWaqs0fJh1jTUs9nc3XBJvrrfx5zbqQNFGKqkv9hftIc-Sh5YC1nVBY-lHm1au8h&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_Aflkt6K96TalNIESILWhww8bf7B2zAHzPu-nW-y9gaMtHw&oe=69556AF2)

## Instruction Board Example

This example shows how you can have multiple images, and when a user presses back or next buttons it changes to the next image.

![Image shows code snippet for an instruction board](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/473299682_631480342723254_5406964871793628909_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=UIEL8AL_qckQ7kNvwFIH7ZS&_nc_oc=Admt9HsuVJKiR8e8oayh935h4fssLfZQv9eQtV_7kHrRS-nzBwPtdCt6FfgQPOApPYbr0OOwoDQNgJq2UuDlv2rm&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfkThpz6MRLLyJexpD-ZouAXz7-5EveIg6OS9mnJbZEnKA&oe=69558F97)

## ScrollView Example

This example shows how to implement a ScrollView. It is relatively simple. Most of the time it is recommended using percentages for height and width. But in a ScrollView, the height is best as a number of pixels (seen on line 43).

*Note: At the time of writing you may need to go into VR to see it work, or preview the build on XS before it will start working in the Desktop editor. So if it doesn’t seem to work at first don’t worry, just try it from another device.*

![Image shows code snippet for implementing the scrollview](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473533283_631480336056588_431901923760677626_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=7zduIvWJ8QcQ7kNvwEKc9qJ&_nc_oc=AdllFt3aK800wTSWtpZbgT6lWwCXjSY5_wkAZYczBvbbZc7mJzkxWa1hiGyJenEKrDRiuuPExqtGxVMpXBYn1yHo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=MTEHObgnryPSCI-8CS6vmg&oh=00_AfkljuQ-RNizlaikVRzhut1ft1W3Rz-ev1gNqqy6fJHOxQ&oe=695575D8)

## Thank You!

From here, I hope you’ll continue growing your typescript and UI skillset, expanding on the knowledge gained today to bring great looking UIs to the visitors of your worlds! If you have any questions or need help, don’t hesitate to ask in Discord!

Sincerely,

Laex05

## Extended Learning

Below we have provided challenges for you to implement on your own. The Advanced task may require some outside knowledge, and we encourage you to ask questions in Discord if you get stuck or are unsure how to complete any of these.

### Novice

Create a UI with a background image, and an instruction board with multiple images.

### Intermediate

Create a UI with a ScrollView.

### Advanced

Learn about animated bindings on the docs site and create a simple animation, ie. image swiping in and out of view. <https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/animations-for-custom-ui>

### Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.