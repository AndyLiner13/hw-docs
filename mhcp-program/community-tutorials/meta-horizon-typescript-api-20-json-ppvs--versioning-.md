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

![Screenshot 2024-03-12 165250.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452885043_512509794620310_1164532069211912730_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=KIC7ZzFPzVkQ7kNvwF07ZbX&_nc_oc=AdmXBTrfOoTMmrVGzQNiaJW4QKr4k87s2MzIoBoOcRnoWhje0VRkCn-y6spSPypdDSU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_Afjg77I9yi1I14u10K8XrbauA2RtTQK52ozIzuOrzJWG_Q&oe=692C00D2)

Click the plus icon to create a variable.

In this example, we will name it “TestVar” making sure to select “{ } Object” from the drop-down.

![Screenshot 2024-03-12 165344.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452652041_512509847953638_1230264767479043441_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZyRL8fERJcYQ7kNvwG_PdeK&_nc_oc=AdnVVz-gYAW9r8hlhAgcKxZvkj7pww5T3IlvWGevR8S-LZ7kMe6KRJ_xfC5vyYUYeXY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfjShXKRGiZqbPdZQyQIStnnDDTnCmPhz-52YbPdMQsTdw&oe=692BF72C)

Now that JSON Object PPV has been created, it can be used in TypeScript scripts by referencing it using the string name it was given: “TestVar.”

## Step 2: Create Scripts

To begin, we will create two scripts with the specified names seen below. It’s important to verify that Meta Horizon’s 2.0 API is selected by accessing the settings via the gear icon. ![Screenshot 2024-03-12 165632.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452915617_512509827953640_3795839271183190167_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=GOPXR6AXfroQ7kNvwHIYd7e&_nc_oc=AdkTMePHAvzhX72XMzGTIu1zp-CMiYdTD0zCwEmRqoqfvrWLnv6fcS4jap4Icrsu1Ss&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfhBcTkAANXdAMClDGDOhrBI4F1mXDwHDOYJokHUllJbNg&oe=692C017D)

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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452690902_512509841286972_4120111531248974789_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=hFGQp42OTo4Q7kNvwFm1Qtf&_nc_oc=Adn9xyXxiwoZISkTBvHg0nlFe4nVkzdJgZSPGht4OQ2spmicvFpBP86BrWRfUcSr-QE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfgExWSZkKDrBAxXySzcyXUcc0sjmkQtacTTiiOmwXwCZA&oe=692C070C)

## Step 3: Prepare Scripts

To get started delete all the prefilled code from the \_Defs file, and adjust the \_Manager to explicitly import Component, rather than \* as “hz” importing all.

Note: This is a personal preference, please choose the approach that works best for you.

### Mentor’s Note

I personally like the explicit approach as you will know all items that have been imported from specific APIs, and you can do less typing, which is always nice!

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452576403_512509797953643_5285657881568124068_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=k8i5vqd7GB4Q7kNvwEGCW4w&_nc_oc=Adl1Syo1ZEdCT6PC1A4S7kjKK_xv3KQ-Zpw_Ukuk_6c8wsuEPxHU_h7fDd_GGFZHT8I&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfggzsxK_4ZsanESjlMI3xSdbJciuFKn0UxVTs_i0jSmqg&oe=692BF6B1)

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452532488_512509834620306_1267219142950200425_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=4Wd3dV-37boQ7kNvwFIcYlp&_nc_oc=AdkZAyOAlgimgPrv3Pr2BNM5Zgfrms-VvwMjHogdJZsr9hyZZAfRM2q6dkQqHU3iSf8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfjrBg-jSWB_oV6TWJTmS-P5ThA2wEGWS4MG-iut71UUfw&oe=692BE001)

## What Are JSON Objects?

JSON objects are powerful variables that can store various types of data. JSON objects can even nest inside of each other. These may be referred to simply as objects, variable folders, or more informally “bags of stuff.”

This is a simple example storing just two variables for tracking a player’s name and number of visits:

```vs
const playerInfo = { name: ‘playerName’, visits: 0 };
```

In TypeScript it is often necessary to define a type to describe the object, for instance, in this case we would have:

```vs
type PlayerInfo = {name: string; visits: number};
```

We then need to declare the Type when creating the playerInfo variable:

```vs
const playerInfo: PlayerInfo = { name: ‘playerName’, visits: 0 };
```

Notice that the variable is in camelCase and the type is in PascalCase. This differentiation shows that the playerInfo is the object variable storing the data. And, PlayerInfo is the type we are declaring it to be.

Next let’s look at a complex example, with nested objects and multiple variable types. In this example, notice that when the type is larger the variable is broken onto its own line:

```vs
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

![Screenshot 2024-03-12 171631.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452881431_512509817953641_3022961139974047751_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=NWmMKcmBkO8Q7kNvwHsHTrL&_nc_oc=AdmxNWpRJhnMyQY1AmK7dkLtoRUuVKOF4kwRb8DaKsYhWj-BFdVL8q9AGIWZUfcNvDk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfhCHMDb-ZtgLs0GegVIfridzmfzq-oJRAmMR3SDNEG_NA&oe=692C0F1F)

Ensure that the PlayerVar\_Manager script is attached to an object in your world. In this example, I used a text object:

![Screenshot 2024-03-12 171735.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452513283_512509791286977_42569017604569069_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=KN9jTEWgzqkQ7kNvwEbUsui&_nc_oc=AdkIWBYHOL8uZQxynwoaIs0LbJ-cz2j04uem5Ubg99k-I5tbEk8EhkOLj__gHcOn6Bo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfhckZqqSme8IBwqFloUbRvGxOmv7tNmIceCWKwN9Pp3gQ&oe=692C0BA7)![Screenshot 2024-03-12 171909.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452742345_512509761286980_4350714917524728780_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=6jnrrYSwVgUQ7kNvwFn6ZTj&_nc_oc=AdkETEdF6Ih5to5MMGXvbfLJ-zhQRLFYYOM0QJ8BnYJNjb5GaVwm7OwOX0OCYzZO95E&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfixaO_RzrlApxVDCCZemiezW5CdXTYOyu53sv-elVCfQA&oe=692BDF35)![Screenshot 2024-03-12 171909.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452701864_512509787953644_6289865107426242307_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=ymuMXZ5Ac0gQ7kNvwHt3tgu&_nc_oc=AdkwTAKWOPIk9tORu1senkQo9w8a56WQi4nSjea-BcRe_vfbkqroVX1TV4fYG-Rn0iE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_Afj03VXC3qNVaaA68GFdkJFKkVb7JjwSK-iEJXrqzZ0-0g&oe=692BF852)

## Step 5: Define Type

Before we can get and set a JSON Object PPV, we need to define it. Because this type is stored in a \_Defs script, we need to be able to access it from our other script files. To do this we add the word export to the front.

![Screenshot 2024-03-12 181652.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452506810_512509757953647_8787940282338034104_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=nIhM9i4j5j8Q7kNvwFJNkYp&_nc_oc=AdnEYPnIZIMIqIeyRrt0gVPzyHjcePAtu08CDrsui4vsWXokPfpsGv0M7tMxcnZLxTg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfioOY1plJXWmgW6oQxn-HZc-9oD0AcSEUIuSM8ucSkkSA&oe=692C06BA)

Now that we have exported the type, we can import it into any of our other scripts by typing “PlayerVar” and clicking “enter” or “return” on our keyboard to import the type.

## Step 6: Map PlayerVar

Now that our \_Defs file is setup, we need a place to store all of our player variable data. We will do this in a \_Data script.

Create a new script in Meta Horizon named “PlayerVar\_Data,” and then we will delete all of the prefilled code as we did with the \_Defs script.

![Screenshot 2024-03-12 181658.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452554819_512509784620311_8209205062022272298_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=my7fr4mZrysQ7kNvwGt9pQ9&_nc_oc=AdkucyWaUt5pmyj1KXPlTWkWTvriWroxmkV3qtaOrbpx2vZJtCgFhRbgFuOe7sMEhUk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfhujH8MndXDJ8226XiHo0xewlvWBchJOdPOw-OzB3quJg&oe=692BFF65)

We will only need to write one line of code, and as we do, VS Code will write the import lines seen in the screenshot on lines 1 and 2.

```vs
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

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578528_512509781286978_2962179804368749502_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=P_nWsF3BoXoQ7kNvwEB6UGB&_nc_oc=AdkVu6j4tZiNp8Pt0mmbuf7k3mdttqWy1FVZW4-SqA6X7b09tKx7l7oZGQqtro4OVHY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfhODslmXPJNmuxjmDOhjeZdAXj7vHwCmevtkC3LuWx0lA&oe=692BD924)

At the beginning of the script, you’ll encounter the variables. These variables are globally scoped variables, which means they are accessible from anywhere inside this script. These variables are constants; for instance, the playerVariableVersion should only be updated manually when introducing new variables—a process detailed later in the document (Step 9). Similarly, the playerVarName remains unchanged as it serves as a reference to the PPV variable.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452893310_512509764620313_8601289411585962013_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=7qkfya_rpJ8Q7kNvwGJkpMK&_nc_oc=AdkTeODL3CKDjpx1dNZSNc1xucUQ1BxjhuaVM7VYOwg28vU1MbCsVZRYlRHCwomSCI8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_Afhep9lvT_GdEtnke6s4RnKVIAeSBH0bgQ94l3U9VoxzMA&oe=692BFBC2)

In playerEnterWorld we first get the PPV. Notice that it could be null, we handle this in the initializePlayerVar method (seen at the end of this step). Which we use to create a newPlayerVar. We have to create a newPlayerVar because the player may have last played in an older version with less variables stored in the PlayerVar type.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452963336_512509777953645_4263171605963207015_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=JLS9ie43Zf0Q7kNvwGhqcOR&_nc_oc=Admy8SnCYRwzaVeGeL8lU6m4pT687zAgsFTyj2w2jIxYCHBNdSmoycZKOVi6OQfzUwU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfiUhpWOYoy10mhQ25fpnUx3rD8udyYAJzLEFHFkoqEceA&oe=692BF3E8)

Then we update the visits to be visits + 1, using the shorthand visits++. To make sure this is working we add a console log.

The last step is to add the player to the map we created in the previous step. We do this by using the .set method, which will replace the previous value if it has already been set. You can use the .has method, if you want to see if the player has already been mapped.

In playerExitWorld we get the playerVar from the map, which if you hover over the const playerVar will show that it is of type PlayerVar or Undefined. This is because it is possible that a player has not yet been mapped. We can check for this with if (playerVar) which checks if it is “true,” meaning not *undefined* , *null* , *false* or sort of false (i.e., 0, empty string). We can use an else statement that calls on console log if it is undefined; this can help locate bugs now and in the future. It is recommended to use checks like this in your code.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452673104_512509774620312_3142404411627905147_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=KZkBa9cPS98Q7kNvwEXumgu&_nc_oc=Adkaa0YFdk6Ot51aLUSiGAD9FCNcdaAXtFYrBX6sc41B_gsvdEeh0YFneG4zgcOpKY8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfgCNAmm1H4MzyISSlwF1aZItgKclHc3_MwsBMvzJbSA7Q&oe=692C0051)

Now that we know playerVar is defined, we can set the player’s JSON Object PPV, which saves their JSON Object to the world’s persistent storage.

At the very end, we delete the player from the map.

Outside of our PlayerVar\_Manager class, we can create functions. Note that these are similar to methods, but methods are stored inside classes. In this case, we are creating a function called initializePlayerVar, which will return a PlayerVar.

This function is important because it allows us to take a potentially null/undefined value, or partially defined value, and create a new object variable.

**Please note**: There is an error as of the time of writing in Meta Horizon’s API, which says the variable could be defined or null, but is actually defined or undefined. This distinction caused an error with the code seen at the beginning of this step, **below the code is corrected, checking the truthiness of (prevPlayerVar) rather than (prevPlayerVar !== null).**

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452415047_512509744620315_2203337898861099810_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=DXdrXH9PEI8Q7kNvwEv5V9f&_nc_oc=AdkASH9vsyPiwN2iEcYCFgk1e89ntdGwDnwJXjJpv72eexU2uSKmSVviw0YuRjH51Ok&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfgNNGLrkU-VbXV9eV6H90jFFL8JyGhJXhSpeMo_Q4Ah4Q&oe=692BF616)

The first thing we do in this function is create a brand new object variable with values we would assign to a first-time visitor. That way if the prevPlayerVar is not truthy we return those values. Otherwise, we can check that the version contains values we want to recall, and save them to the new object.

Now you can compile your newly saved code and test it. If all goes well, every time you preview the world, your number of visits will go up by one, and log to the console!

## Step 8: Test PlayerVar Size

Now that we have our JSON Object PPV, we need to make sure we don’t run it over the 10,000 character limit. To test this we can create an artificial maxed variable and stringify it to see how long it is.

![Screenshot 2024-03-12 184022.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452751568_512509754620314_8517786802089207349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=xKoNERIc6ncQ7kNvwGphi__&_nc_oc=AdkVdJntF5cE2h3gyPxT0Cs2TdoAnJFSGdHAbnxGbLkipmWXXpkfFUqB20AfJsCQ7fc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfikkLZGl19kDNKX1PX1LDI4UoJ5sv0MkssQXy-r9MJB4Q&oe=692BF415)

In our testPlayerVarSize function, we have created a testPlayerVar variable with larger-than-possible values. We then calculate the length using JSON.stringify, and the .length property of strings. We then simply log that number to the console.

All that is left, is to call this in the start method. When we are done, we can delete this line of code from start, and write it in anytime we need to check the max length.

![Screenshot 2024-03-12 184035.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452616143_512509751286981_1414151313288137369_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=A4FgA4B6GuYQ7kNvwFgyWoQ&_nc_oc=AdlW_965EUavGtE0RuiuqWbdi6OLRNZYbWWxqzie3V5YkXGNZ4Ia0SYDt98WLO_89LI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfjVcHGQ5qrKN25S5ynmTvcYs7gByUn89A8a4htOcQfzuQ&oe=692BE4CB)

## Step 9: Add More Variables

Start by updating the type to include additional variables. In this case we added isAFK and afkCount:

![Screenshot 2024-03-19 at 12.18.46 PM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452916228_512509767953646_8032047240862163427_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=md4ZNUCzSkgQ7kNvwG4_f7T&_nc_oc=AdnPhWQi5h67KOjafOT0lAk5BlSOmy_cIDg0Lc4Xns-CbcqzS7oihSNmHMufMK_qAhk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfgFj2VObYGp33WyB0khgg0lS-aeEc_w7USAQgrUVfRoLA&oe=692C0CA7)

We then add these to the initialize and test size functions:

![Screenshot 2024-03-12 185301.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452742345_512509857953637_3325756538951273658_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=uR40LFJF6FwQ7kNvwEiGjiZ&_nc_oc=AdnweSKAOVTPt3R6x1gg-5HkX7bdFiusR4He5ZjDbOloNjmOyRoF7T0xOxRc0_r2DYo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfigCXxEKpk7hTsL9JPrydeXG-qBJxaD3ShK1XnuelZFZw&oe=692C0E8D)![Screenshot 2024-03-12 185200.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746744_512509741286982_2246072596883689413_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=kHGcdCEdpagQ7kNvwHvP0gK&_nc_oc=AdnfIXtBxX1SvX9niwsQyCccKE6ECil2U6Ax7B6jLTwDk8iPcPrEvqAVl7X4ogom-VY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfjMaptw-Rnfdvy1XFbbSTKfWk5tJuy-v7lC-QzhPeaC9w&oe=692BFAB9)

We also need to update the version number from 1 to 2:
![Screenshot 2024-03-12 185053.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452701864_512509737953649_3962852608460184155_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=MYOpXGBuHTUQ7kNvwG07bxb&_nc_oc=AdlKNGHAZ9sApzI8ES7sY2eyrh5CGqF9Sjk9boKZox-KaHi6qMsQQH4qPIxxuqy9UTs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_Afha3ewzMG07_7XNg3cqEi76Qt_pXSiSYHh3-0y3Jtk6MQ&oe=692C0EAA)

Then we can use this new version number to get the afkCount for players who have visited our world since the variable was added:

![Screenshot 2024-03-12 185249.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652242_512509854620304_1398487090111015541_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=9EN3Mb1HR_AQ7kNvwEdpDfo&_nc_oc=AdnAiOjqIoNxDtQUnaNUej2DGP2HMQxq6-x4wyJLWVksdK4YY2jNsk9GJVQny76YDGA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfjjNNsepH2AJGFk_QlfORt9FrITX-gO88Rtrx1pL1e1_A&oe=692BF95E)

## Step 10: Use the Variables

To get started using our new afkCount variable, we will connect the CodeBlockEvents for entering AFK to our local method:

![Screenshot 2024-03-12 185526.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452578037_512509851286971_2231847787475568309_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=IYJWwhbodXgQ7kNvwFMf_ch&_nc_oc=Admt1Ie-Fntfe0ZXijyQxTrFky1xQiWm2kOTjZr_gmdw-Dm1U6VIOekf7xu7ZdNlMvs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfhcP2XQkMPXGoVSHOhCZOAwBn_RVPraY8yl7coYiDZryg&oe=692BFB4D)

![Screenshot 2024-03-12 185514.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452909009_512509837953639_6530190211756898574_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=NLLrRY_-gUAQ7kNvwEmJcaw&_nc_oc=AdkFXEjA6aYuKMozJMf7H8716g_lrZs1rDrL6gE-eyw-KphDd-aRzB5Nrj8sE6Txovk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=P5_vmJixfiPCJIr71w1LDw&oh=00_AfhU1dg4uXtZ6oIVzNP5c_mRFATmR4B5V1UVwuiAUGSQ-Q&oe=692C064F)

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