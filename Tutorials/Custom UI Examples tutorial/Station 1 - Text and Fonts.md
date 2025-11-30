Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-examples-tutorial/station-1-text-and-fonts

# Station 1 - Text and Fonts

Station 1 displays a simple set of text on a flat plane, in a variety of font faces.

![Image of Station 1](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475866616_646003184604303_6574302672366469433_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=BxDzvpGiYJgQ7kNvwHJcrzT&_nc_oc=AdmhMAixiTLf2RL-7y9bTMshc_asFN8qVFn11ZQDnmRi4gJWan72jCFyNlCsZifkpss&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=uEP2i9Br5UcAujD8rprAzg&oh=00_AfhKYx46OOjFjM35dtN1bzWZJYZth5qDqIpGAG6l5ca_LQ&oe=69463E54)

## Assets

* **Station01-CustomUI: CustomUI gizmo**
  + Visible: true
  + Script: the script that defines the custom UI elements must be attached.
    - In this case, the script name is Station01-CustomUIFonts
* **Station01-CustomUIFonts: script**
  + **Each customUI object is defined entirely in script.**

## Script

Open the Station01-CustomUIFonts script in the desktop editor.

The script attached to the CustomUI gizmo imports the API components required for text-based, custom UI development. These components are imported from the UI module of the API v2.0.0, which is referenced in code as:

```
horizon/ui
```

The custom UI panel object (called a **View** in code) is defined as a class that extends the abstract class: UIComponent. The abstract class provides the framework for the specific class, which can be referenced and used separately after you define it in your code.

* The elements of the panel are specified in the `initializeUI()` method, which returns a `View()` object definition.
* A View object is defined as a set of child objects, which can be:
  + Text objects
  + View objects
  + Image objects
* References to custom functions, which return any of the above types of objects

The declared class is registered with the UIComponent abstract class.

**The structure in the above script is commonly used in Meta Horizon Worlds scripts.**

## Key Learnings

### Meta Horizon Worlds learnings

* Structure of a basic script.
* Structure of a text-only custom UI definition.

### TypeScript coding

You can extend the basic structure of the script by exploring additional options for fonts and their styles, as well as style options for the View object. Use the steps below to explore these various options.

#### Available fonts

This script presents a list of fonts that are available. Are there more?

* If you are using Visual Studio Code, you can do the following. Your local code editor may have similar capabilities.
* Locate the following line in the script file:

```
Text({ text: "Anton", style: { fontFamily: "Anton" } }),
```

![Image of previous Typescript in VS Code editor](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/475816643_646003181270970_5106133646404735146_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=sNvz1nzLL_QQ7kNvwFznQYd&_nc_oc=AdkWbRH1JVoQSnxhSKVAIZxyd_5P3fwbmX1Ek1nYZ6KKpeHOj0kiv9gVmbSiMbMsYDs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=uEP2i9Br5UcAujD8rprAzg&oh=00_Afj1sY4qbPK_3BFnmYPi3fzkAbsN40dz5Reyktj5NV7cmQ&oe=69462A8A)

* Select this text: `fontFamily`. Right-click and select **Go to Definition**.
* That should open a separate file: horizon\_ui.d.ts. This file represents the declarations of the UI module of the v2.0.0 API. This declaration file is available locally in the same folder as your scripts for your review.
* The following line in the opened file is highlighted:

  ```
    fontFamily?: FontFamily;
  ```
* `fontFamily?` indicates that the fontFamily attribute referenced in the previous file is optional (the question mark). It is defined as an instance of the object: `FontFamily`.
* Now, highlight FontFamily. Right-click and select **Go to Definition**.
* You should now see the following line:

  ```
    export declare type FontFamily = 'Anton' | 'Bangers' | 'Kallisto' | 'Optimistic' | 'Oswald' | 'Roboto' | 'Roboto-Mono'
  ```
* This exported variable defines the type `FontFamily` to be this list of fonts.

These are the available font families. Based on the above, you have verified that the fonts displayed in the custom UI is the complete list.

**Note**: This method of exploring only works if you have defined the above values in the proper location within your code. You cannot simply type FontFamily in the script editor and then go to the proper definition for it.

#### Style options for text

You can follow a similar pattern to review the available style options that can be applied to text.

* Locate the following line in the original script file:

  ```
    Text({ text: "Anton", style: { fontFamily: "Anton" } }),
  ```
* Select style. Right-click and select **Go to Definition**.
* In the horizon\_ui.d.ts file, the following line is displayed:

  ```
    style?: TextStyle;
  ```
* The optional style attribute is defined as an instance of the TextStyle object. Right-click TextStyle and select **Go to Definition**.
* The following line is displayed:

  ```
    export declare type TextStyle = ViewStyle & {
  ```
* The attributes listed inside of the declaration can be applied to individual text elements.

#### View style options

* Locate:

  ```
    style: { backgroundColor: "black" },
  ```
* Right-click style and select **Go to Definition**.
* These options can be applied to the definition of the View object, which applies to the overall custom UI.

#### Commenting in JavaScript and TypeScript

```
// This is a single-line comment.

/*
      All of these lines are comments.

      This form of commenting is easier to read when more detail is needed.

      Note that when you insert the /* above, all following code that
      is not bracketed with the corresponding closing mark below is
      suddenly commented out. Until you add the closing comment,
      your code may appear "broken" in the editor.
*/
```

Commenting is super-important to add to your code. In the future, other teammates may need to review and use your code. Even if you are the only person writing code, you may not know how it works when you return to it in the future. Key things to include: intention of the code, any gotchas, any remaining ToDos.

### Copy and explore

You can copy this world and duplicate these assets to explore the following:

* Try out different fonts to see what works
* Explore styling options for text
* Explore View styling options
  + Explore length of text and size of panel and how it must be modified to fit your text correctly.