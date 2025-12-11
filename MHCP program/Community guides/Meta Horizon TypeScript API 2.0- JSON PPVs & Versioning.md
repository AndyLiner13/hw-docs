Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-typescript-api-20-json-ppvs--versioning-

# Meta Horizon TypeScript API 2.0: JSON PPVs & Versioning

Author: Laex05

## Introduction

#### Creator Skill Level

Intermediate

#### Recommended Prerequisite Background Knowledge

Some TypeScript experience is recommended as well as access to the desktop editor, and VS Code.

#### Description

Learn how to create, store, and manage JSON Objects as Player Persistent Variables (PPVs) in Meta Horizon, including versioning for updates and expansions. Given Meta Horizon’s 10kb data limit for PPVs, we’ll show you how to evaluate and optimize your JSON Object’s size.

This knowledge enables the storage of hundreds of variables in a single JSON PPV, facilitating the creation of experiences that remember visitor progress and allow seamless continuation. Additionally, it supports the growth of player data in future updates without the need for new JSON PPVs.

#### Learning Objectives

By reading and reviewing this written guide you will be able to:

* Create and store JSON Objects as Player Persistent Variables
* Add versioning to JSON PPVs: allows for updating and adding new variables
* Check the variable’s max size

## Step 1: Create a JSON PPV

Once the world is loaded, click the systems drop-down and select “Persistent Variables.”

![Screenshot 2024-03-12 165250.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452885043_512509794620310_1164532069211912730_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=W97lvadbQW0Q7kNvwHv5EeK&_nc_oc=Adnrz7fgaAnoHu5IUbXJ5TrwLtlQk7ScR9dU7274AuuqQWFzIFm3ro8kkJFcifxqCtuVRS3b4EkWWcRD5Dj3SL20&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfmDVj0TaIjnGDbXGSvz_luPnsNkTsP-O0DAapdMGvPgdg&oe=69558812)

Click the plus icon to create a variable.

In this example, we will name it “TestVar” making sure to select “{ } Object” from the drop-down.

![Screenshot 2024-03-12 165344.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452652041_512509847953638_1230264767479043441_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=GlbLt7rE8NQQ7kNvwHo6mLi&_nc_oc=AdkpPgKrvKPjf2fMYFcZRgJGbl2lKGTYuhGrFJEuWeJRofEnmV5r9uuJGHPmKweW47uKJ34NN_3zwtL6MNmzRa8Q&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_Afkp_i8EHPXpz60fKKzvNKHNCXnxC2H-ZOhM1d6ha4vFQQ&oe=69557E6C)

Now that JSON Object PPV has been created, it can be used in TypeScript scripts by referencing it using the string name it was given: “TestVar.”

## Step 2: Create Scripts

To begin, we will create two scripts with the specified names seen below. It’s important to verify that Meta Horizon’s 2.0 API is selected by accessing the settings via the gear icon. ![Screenshot 2024-03-12 165632.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452915617_512509827953640_3795839271183190167_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=B_jgcPxY8BUQ7kNvwENjSMG&_nc_oc=Adl0Tixbld9TxIEQk_H7RJpR7qGAIKKoi4AW9AieGWbHImjwglCBgDVGniBq3wgO4jmD5ol91AfsYU6kppFfYqyX&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_Afk0DiqIHGxcTewUfPJxoy4nx22fm1ELUQPsxmNUCHmgrg&oe=695588BD)

### Specified Script Names:

* PlayerVar\_Defs
* PlayerVar\_Manager

### Mentor’s Note

Defs and \_Manager are two of several naming conventions I use in my scripts to help organize and plan my code. There are no right or wrong approaches, so feel free to adopt one that works well for you.

\_Defs store type declarations, classes, and enums.

\_Manager handles logic and typically has a Component that attaches to a single object in the world.

Other naming conventions I use include, \_Data, \_Entity, and \_Func.

### Script Setup

As of the current Meta Horizon desktop build (March 2024), creating a new world requires the initial creation of a 1.0 script prior to switching the script mode to 2.0. Once the switch is made, the 1.0 script can be deleted.

Access to this feature is found under the script tab: select the gear icon, followed by Script Settings to view the API Version drop-down:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452690902_512509841286972_4120111531248974789_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=UqJp95Jz-d0Q7kNvwFc0_pa&_nc_oc=AdlVfsAS2fmihOdPlZapwN9QQ7tV_SmPQJs1ngCNgH4zkt1HWu5T4TaHEl9XDKDcb2qrqG-LFkGky9_cquaKfl1N&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_Afk7f0HYyMyUwKOznj1FZcr4R_5YnQj6BtYNaf4b6A3Gdg&oe=69558E4C)

## Step 3: Prepare Scripts

To get started delete all the prefilled code from the \_Defs file, and adjust the \_Manager to explicitly import Component, rather than \* as “hz” importing all.

Note: This is a personal preference, please choose the approach that works best for you.

### Mentor’s Note

I personally like the explicit approach as you will know all items that have been imported from specific APIs, and you can do less typing, which is always nice!

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452576403_512509797953643_5285657881568124068_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=adKWDoV7M9AQ7kNvwHIQVUv&_nc_oc=AdnhaAAnSezMfm9uqz0BzTNlG4HA-aiJYmOGkleR0HyG3OjYhIMJQpBE4ufQZcNLKQHZEBPk6pgVktkP7CQ7wGj5&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_Afm448PkfxG68pg7az3pwFwCopczJrxRD1b9C32-3ZSQfw&oe=69557DF1)

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452532488_512509834620306_1267219142950200425_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=lJDCvy8ko1cQ7kNvwHA06RN&_nc_oc=AdkAS9iUfKRIU8jxYcxF1TeiBDM0xYHViDfr7u-WVzzvT7E3Et4FAB6t0r3VRSdG1VsAWiLl7AZKY00H1A300tmO&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_Afl6NuYJM9-B1XtdloaQtjLf-SE80YMHv4FNdTtb957hyw&oe=69559F81)

## What Are JSON Objects?

JSON objects are powerful variables that can store various types of data. JSON objects can even nest inside of each other. These may be referred to simply as objects, variable folders, or more informally “bags of stuff.”

This is a simple example storing just two variables for tracking a player’s name and number of visits:

```
const playerInfo = { name: ‘playerName’, visits: 0 };
```

In TypeScript it is often necessary to define a type to describe the object, for instance, in this case we would have:

```
type PlayerInfo = {name: string; visits: number};
```

We then need to declare the Type when creating the playerInfo variable:

```
const playerInfo: PlayerInfo = { name: ‘playerName’, visits: 0 };
```

Notice that the variable is in camelCase and the type is in PascalCase. This differentiation shows that the playerInfo is the object variable storing the data. And, PlayerInfo is the type we are declaring it to be.

Next let’s look at a complex example, with nested objects and multiple variable types. In this example, notice that when the type is larger the variable is broken onto its own line:

```
type PlayerInfo = {
name: string,
visits: PlayerVisits,
scores: PlayerScores,
};

type PlayerVisits = {
totalVisits: number,
uniqueDays: number,
totalTimeMins: number,
lastVisitTimeSinceEpochMs: number,
};

type PlayerScores = {
fastestTime: number,
highScore: number,
};

const playerInfo: PlayerInfo = {
name: ‘playerName’,
visits: {
totalVisits: 0,
uniqueDays: 0,
totalTimeMins: 0,
lastVisitTimeSinceEpochMs: 0,
},

scores: {
fastestTime: 0,
highScore: 0,
},
};
```

## Step 4: Connect Events

Next, we will connect the CodeBlockEvents for player enter and exit world to local methods. We have also added a console log to the methods to confirm the script is working.

![Screenshot 2024-03-12 171631.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452881431_512509817953641_3022961139974047751_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=qVBVDs3P1YcQ7kNvwHmW-C7&_nc_oc=AdnSQ0d44AEyUqjci212pPPWGCi9P3sXwJX_Hu35uor9VOeiFXW-TWGrENhnD0njU_Zt43C6Boyn-10P7ofuVT8D&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_Afk6c4jXaIA_FvgSi55paXwegktEEc3BpvuJQk7ucyxO7Q&oe=6955965F)

Ensure that the PlayerVar\_Manager script is attached to an object in your world. In this example, I used a text object:

![Screenshot 2024-03-12 171735.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452513283_512509791286977_42569017604569069_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=uoDMWiOlNXkQ7kNvwG0j9HO&_nc_oc=AdljzUm5Xe6vngjekHcp1Qd390ycc_T9PO5tSV4eheNIzHoHwZY3rrqZeBujpFNhCrq54gCTi_QJ-45KVsGQ8rj1&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfmiB7Jc2TMj1kaqU9vUau3tthv2rad22o-wE92IzxvKXQ&oe=695592E7)![Screenshot 2024-03-12 171909.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452742345_512509761286980_4350714917524728780_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=PpFryK5XfvcQ7kNvwEFnFk2&_nc_oc=AdkqWeNSPZ4w999vx2BvHVMf3ipUqtMuQaYEsP0-At4E30K6TTsTzKYakalp9XacA5z-EHLKX9Qoify2n9iyl9is&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfnP_xD7DgmzR7NjDFw7xk8OLbraWA9BrvAPlSkE9alfpg&oe=69559EB5)![Screenshot 2024-03-12 171909.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452701864_512509787953644_6289865107426242307_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=eHEd-hGWr90Q7kNvwFEkJnk&_nc_oc=AdkIR9vQc2kIdHlpWUlRqYftw7Qmn658cCz_h02ewrsY7HYtXZAiMzeqlfY4aYJSsDcDB7T7binb4uihO7Fl8LVQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_Afmh5SsBggAT4lL2UHHOCCtk8LdpXnCWD7VxFsP0BLbm0A&oe=69557F92)

## Step 5: Define Type

Before we can get and set a JSON Object PPV, we need to define it. Because this type is stored in a \_Defs script, we need to be able to access it from our other script files. To do this we add the word export to the front.

![Screenshot 2024-03-12 181652.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452506810_512509757953647_8787940282338034104_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=s_jksFybUUwQ7kNvwGF52sJ&_nc_oc=AdnxWVr2QFdhLaYl1Nh3gOma3a32N90SSbqRfZR3K1QagXuNJIkHDrekf81wEvuh-KBvCtL8L75ZRBniibPT_m_4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AflE3QzYtaubtkqbAIVm_JwxsuYRgar-i5XZ4HYkk24YWg&oe=69558DFA)

Now that we have exported the type, we can import it into any of our other scripts by typing “PlayerVar” and clicking “enter” or “return” on our keyboard to import the type.

## Step 6: Map PlayerVar

Now that our \_Defs file is setup, we need a place to store all of our player variable data. We will do this in a \_Data script.

Create a new script in Meta Horizon named “PlayerVar\_Data,” and then we will delete all of the prefilled code as we did with the \_Defs script.

![Screenshot 2024-03-12 181658.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452554819_512509784620311_8209205062022272298_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=2Ie-kSq8k7sQ7kNvwHzvshz&_nc_oc=Adn_TLLcgQ9d0Mb4BCn-IoQqGAYCAkEvEBjXLKw8Q9Gi4v471dYzkvnRGsKOqRRhAZLi6G9vDhvNlCLAtC-ic_LB&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfnfvS9c5Oqr_3wchdryiPrMWL0fVXr34nGzwbJoFT7PKg&oe=695586A5)

We will only need to write one line of code, and as we do, VS Code will write the import lines seen in the screenshot on lines 1 and 2.

```
export const allPlayerVarData = new Map<Player, PlayerVar>();
```

**Note:** You will need to press enter after typing “Player” and “PlayerVar” for these two types to be imported. If your IDE, in this case VS Code, doesn’t support automatic importing you may need to write lines 1 and 2.

## What is a Map?

A map is a data type that is similar to a list, but does not use indexes. Instead you can have one of the first type (the key), with the second type “mapped” to that key.

In this example (seen in the image above) we have a player as our key. Because a player cannot be in the world twice, only unique players can exist in our world, it makes for a perfect key. Then the data we are mapping to that player is the PlayerVar type we defined in the \_Defs file.

Exporting this map as a constant prevents overwriting it with a new map. Instead, modifications must be made using the map’s set and delete methods, which will be discussed later in this document.

We also export this data, because it is very likely you will need to use it across multiple scripts. Since we will not be setting the PPV until the player leaves the world, this means that the map will store the player’s JSON Object PPV for the duration of their stay. In other words it is the source of truth for the most up-to-date variable values.

## Step 7: PlayerVar\_Manager

In this step, we will start to write some code.  On the next few pages, we will provide in-depth explanations for each line:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578528_512509781286978_2962179804368749502_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=1yhBoMAwGjgQ7kNvwFMkjpd&_nc_oc=Adnt-0tZFhSp20jtSXzT-j8SD84fM1U5L_XgC5vc-Cfit1qnmkpxZZAEv7mZFKekvQuyocixwySmbeIoSU4X1KYP&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfktCPd0vUGLZ3Y_M4qLCpTH7fNPk4LMhVmcUYwyUsLHxg&oe=695598A4)

At the beginning of the script, you’ll encounter the variables. These variables are globally scoped variables, which means they are accessible from anywhere inside this script. These variables are constants; for instance, the playerVariableVersion should only be updated manually when introducing new variables—a process detailed later in the document (Step 9). Similarly, the playerVarName remains unchanged as it serves as a reference to the PPV variable.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452893310_512509764620313_8601289411585962013_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=gqAGONGe56sQ7kNvwFeI29K&_nc_oc=AdmtujqkM7-l6_xoYv38rvsxsOW5pANIqChFuVSUOnFqbu9YQawALrGe2mrhSZqpfZI5hkwnJcBIwJ2mgsZzSWME&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfkI5NBtOFl-X81L5Ej2kfP8Kcb3Fvt2JDN2nwwUaNxDYA&oe=69558302)

In playerEnterWorld we first get the PPV. Notice that it could be null, we handle this in the initializePlayerVar method (seen at the end of this step). Which we use to create a newPlayerVar. We have to create a newPlayerVar because the player may have last played in an older version with less variables stored in the PlayerVar type.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452963336_512509777953645_4263171605963207015_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=mMK4Pv4lDYgQ7kNvwElfsR-&_nc_oc=AdlxzFwouHOO8ALf1FTUxYU2RVf1pOGkQFn5iwFUTvRl4Az7tPZG4V-4T1D06r-q0VZTa3ou2WhAAZiUezmF16__&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AflT6U4rq1-m3Xn9_QOtB-W3ooA4x1hfrTVhiuY06vFoGw&oe=69557B28)

Then we update the visits to be visits + 1, using the shorthand visits++. To make sure this is working we add a console log.

The last step is to add the player to the map we created in the previous step. We do this by using the .set method, which will replace the previous value if it has already been set. You can use the .has method, if you want to see if the player has already been mapped.

In playerExitWorld we get the playerVar from the map, which if you hover over the const playerVar will show that it is of type PlayerVar or Undefined. This is because it is possible that a player has not yet been mapped. We can check for this with if (playerVar) which checks if it is “true,” meaning not *undefined* , *null* , *false* or sort of false (i.e., 0, empty string). We can use an else statement that calls on console log if it is undefined; this can help locate bugs now and in the future. It is recommended to use checks like this in your code.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452673104_512509774620312_3142404411627905147_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=qI5t9gtT5_sQ7kNvwHhbkLS&_nc_oc=AdmZdUuUchr1UyUzlx0XKilpdNUa8Hz6LQSwmkHJm9bx9QmIC4VHHBFjGWM6dV-sS8MbIx4Cx40b7rzJZDMsd7mX&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfkgCP5r0p2t9K5-dNb0mstg09ZFb6R6UBS6-kCGtfXkVg&oe=69558791)

Now that we know playerVar is defined, we can set the player’s JSON Object PPV, which saves their JSON Object to the world’s persistent storage.

At the very end, we delete the player from the map.

Outside of our PlayerVar\_Manager class, we can create functions. Note that these are similar to methods, but methods are stored inside classes. In this case, we are creating a function called initializePlayerVar, which will return a PlayerVar.

This function is important because it allows us to take a potentially null/undefined value, or partially defined value, and create a new object variable.

**Please note**: There is an error as of the time of writing in Meta Horizon’s API, which says the variable could be defined or null, but is actually defined or undefined. This distinction caused an error with the code seen at the beginning of this step, **below the code is corrected, checking the truthiness of (prevPlayerVar) rather than (prevPlayerVar !== null).**

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452415047_512509744620315_2203337898861099810_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=JEJ1QP18XzAQ7kNvwES4DUD&_nc_oc=AdmJwgDc4Zqo616xiLGxx97407WvXiD2JJnQIqCPI_60LtQOGYaoarntr4kZ2jG4JIuGsH2c2GcWZ4hwHvO3EVX4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AflpO4QtE8PiRYZTyuXO1BZM9grJWd2az1nCL-2TwLSyyw&oe=69557D56)

The first thing we do in this function is create a brand new object variable with values we would assign to a first-time visitor. That way if the prevPlayerVar is not truthy we return those values. Otherwise, we can check that the version contains values we want to recall, and save them to the new object.

Now you can compile your newly saved code and test it. If all goes well, every time you preview the world, your number of visits will go up by one, and log to the console!

## Step 8: Test PlayerVar Size

Now that we have our JSON Object PPV, we need to make sure we don’t run it over the 10,000 character limit. To test this we can create an artificial maxed variable and stringify it to see how long it is.

![Screenshot 2024-03-12 184022.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452751568_512509754620314_8517786802089207349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=HF9OOo4mjfAQ7kNvwEeMIj5&_nc_oc=AdkXrAeYU1rrx_bFYnZyALt8w9d026a1pW-HankRyxsgIoNibhSr6NERX6ls3p9wAZh1H6ueprdIUF_tJdr5eP52&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfmNyB6SRRWM6fY6ITlQ5OifrN_YC5lmpDgi96oV1frxqA&oe=69557B55)

In our testPlayerVarSize function, we have created a testPlayerVar variable with larger-than-possible values. We then calculate the length using JSON.stringify, and the .length property of strings. We then simply log that number to the console.

All that is left, is to call this in the start method. When we are done, we can delete this line of code from start, and write it in anytime we need to check the max length.

![Screenshot 2024-03-12 184035.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452616143_512509751286981_1414151313288137369_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=ntrwMGGpDvIQ7kNvwG1Y4fp&_nc_oc=AdlS9UNcU05NJ5kfCIbv3NRSpveCApN4paopXuaUUs1k9MYNB65gHdAi6tg7AeSR9d5252dIV1mN1gdPbKtLJI0J&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfkzS-2J22AXyCZ8Lm9JDZ6VlIAV7PhoLA-ZBL0vZZCeWw&oe=69556C0B)

## Step 9: Add More Variables

Start by updating the type to include additional variables. In this case we added isAFK and afkCount:

![Screenshot 2024-03-19 at 12.18.46 PM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452916228_512509767953646_8032047240862163427_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=LuMEhVcC8IwQ7kNvwGJebAX&_nc_oc=AdkeNZmRfu57mFBEPs_i7JdrDCCuZw4pv9_jYrbIO86fqtebXsCRQDWTliHVi4b09gBLWAzs2Qf1zUHxR1Goo-Bh&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfmSob0Exxlc7Ze54UVMBTrWmeGOAHhwZW7xVhcVp4sjNw&oe=695593E7)

We then add these to the initialize and test size functions:

![Screenshot 2024-03-12 185301.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452742345_512509857953637_3325756538951273658_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=G1jRqBQ0kHsQ7kNvwHbh2NP&_nc_oc=AdmIxurjn7E2PSCl12GOdhPZdExvzsR-jSWxqTjejCyQxOTRwLFVI5jZBqlI6klKYc6MPtHtzxS1KND3tg0LnavI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfmRinNFJ9NXp-6rOVHdNqvE2VUM0_ODomF_fjxn9EfbaA&oe=695595CD)![Screenshot 2024-03-12 185200.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746744_512509741286982_2246072596883689413_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=N1mAnQhE1_gQ7kNvwFOZCWR&_nc_oc=AdmBwQv1LUiX7FDyId5SGHXYy9O0sJdLbzqyNJNkPzxSDQpRacpbeZ0-dsnVLO7M-2LOChYuv3CM_xyF07-gKjpD&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfmV9X1Bwt871cpa-YRBQ9748x4GCz9ivVKHhHnAueddeA&oe=695581F9)

We also need to update the version number from 1 to 2:
![Screenshot 2024-03-12 185053.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452701864_512509737953649_3962852608460184155_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=qtTpjQla1ZoQ7kNvwFmZc2d&_nc_oc=AdmQpznmhLjCzGfnRNC06IjLqdDR8s2JYXHQGT172wOU0IZ2C4YTsGfObF5p3lZKmEoNEA0LGeJks58-PfO_dilD&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_Afkgs0YjQYBHNtCU2MyuBDat41l6kyVh5x89CiSukoA5Vw&oe=695595EA)

Then we can use this new version number to get the afkCount for players who have visited our world since the variable was added:

![Screenshot 2024-03-12 185249.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652242_512509854620304_1398487090111015541_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=eauGdCIf3w8Q7kNvwHehSPB&_nc_oc=AdnJfOdMUki2M2YWJbL-8hRFE2sS4d-gWDjMtFx2dmPsTPOn9u9Y2v08K0CM2EXoj1pyHNbmfwUYvMEH2fNi2VDq&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_AfkalssNDWG9G8atST2iOA8l2gA4g20HgbxiuDyIwX__hA&oe=6955809E)

## Step 10: Use the Variables

To get started using our new afkCount variable, we will connect the CodeBlockEvents for entering AFK to our local method:

![Screenshot 2024-03-12 185526.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452578037_512509851286971_2231847787475568309_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=v9qhNweHyikQ7kNvwEqtQ-V&_nc_oc=Adk7_d-uGfrahj1mSHIv27KnrBHSJh3xUUpPZHWkIgvspsAe7xMAuL073FRXiw7PYElcbhALTLSPfAURII9lgF85&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_Aflf9T-eFBB7mnancyYzpE3M2muC3N-vNY2UN9__DRVZaQ&oe=6955828D)

![Screenshot 2024-03-12 185514.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452909009_512509837953639_6530190211756898574_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=tgdvQmlrYW8Q7kNvwEA192j&_nc_oc=AdmvYKxH3x0av-guPfbhIhNzeQKQYgKkXoGTfI3_ucnAM_E3MpnGZhkKd_0uLONCgQ6mIWAayXUUQwVrx1R6s4Zv&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kwxDMe9nmQ02UsAiGnPOzg&oh=00_Afnz-vU7kowRGi47WpNCxPsVN4GsfrxTR72mznTta5acBQ&oe=69558D8F)

Then we can get the playerVar and check the truthiness, updating the count to be +1. For extra credit try adding the playerExitAFK method and updating the boolean we added to the playerVar. Setting it to true when AFK, and false when they return from AFK.

### Mentor’s Note

When a player arrives to your world, I have experienced in build mode this causing the AFK events to fire before the player enter world event does, so you will need to make sure the map has the player before setting the value, or check the truthiness as we did above.

## Further Assistance

Thank you for following along! This guide aims to unlock your TypeScript super powers, and add awesome new features to your worlds!

If you need additional support feel free to book me (Vidyuu / Laex05) for a 1:1 lesson.

Consider trying the extra credit tasks below to solidify your learning and take it to the next level!

## Next Steps

Below we have provided some challenges for you to try implementing on your own. These do require some outside knowledge, and we encourage you to ask questions in Discord if you get stuck or are unsure how to complete these. And as always I’d be happy to help you get unstuck, I’m just a Mentor Session away.

### Novice

Track player visits and time spent in your world.

### Intermediate

Track unique daily visits a player has had to your world.

### Advanced

Build a streak system to track how many days in a row each player has visited your world.

### Bonus

Give the player a reward for visiting your world once per day, and or when they reach time spent thresholds.