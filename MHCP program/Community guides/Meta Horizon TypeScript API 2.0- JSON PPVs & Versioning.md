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

![Screenshot 2024-03-12 165250.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452885043_512509794620310_1164532069211912730_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=5XQorOEycGsQ7kNvwE3iuGz&_nc_oc=AdmuwNO2KG27SGo2eO1G6IN34Gw6TQZY2fs2nhh70JxEqImp3siAcfhI_URtWucO9dY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfipOqCj2PeGUrm-PGm398PInSsGj70gAbeA3dOfjUCtow&oe=69465ED2)

Click the plus icon to create a variable.

In this example, we will name it “TestVar” making sure to select “{ } Object” from the drop-down.

![Screenshot 2024-03-12 165344.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452652041_512509847953638_1230264767479043441_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=O4aj-kRb3B4Q7kNvwElOIeH&_nc_oc=AdlgbkCTx9LRrOfMxu205l_89W0ZeHxkd1lAsTqMIhhRfxE-NLcfOOSqOlXp0U8jPPM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfhpTUeomM1lo_KxsUhtnB-svowh-pxEo-EEdM9q3nACQQ&oe=6946552C)

Now that JSON Object PPV has been created, it can be used in TypeScript scripts by referencing it using the string name it was given: “TestVar.”

## Step 2: Create Scripts

To begin, we will create two scripts with the specified names seen below. It’s important to verify that Meta Horizon’s 2.0 API is selected by accessing the settings via the gear icon. ![Screenshot 2024-03-12 165632.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452915617_512509827953640_3795839271183190167_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Wm5TIhaFt1cQ7kNvwH4FOBm&_nc_oc=AdmG7_MEB4MpS8xiexZ6raM10IYREJ3nK65N5kE02mYR7guGxsiOAIa4UmhCKIHJjdo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfiBy-V8feMx2f35nl3zjc4B_7XTTFWoOJsqvhoK8R7Hqw&oe=69465F7D)

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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452690902_512509841286972_4120111531248974789_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=VI_cAqfjX_QQ7kNvwGjTuTe&_nc_oc=Adm1WAJQhVulxuoeUc88C4mvOS8RHG9adZZDezp_-FuaDYi4rd8kHg0gU4kGxVbQpSM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfhKgqbrOkrLBX2vB6XGLCKxXprBvBMHgpLqRGiQvBH5iA&oe=69462CCC)

## Step 3: Prepare Scripts

To get started delete all the prefilled code from the \_Defs file, and adjust the \_Manager to explicitly import Component, rather than \* as “hz” importing all.

Note: This is a personal preference, please choose the approach that works best for you.

### Mentor’s Note

I personally like the explicit approach as you will know all items that have been imported from specific APIs, and you can do less typing, which is always nice!

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452576403_512509797953643_5285657881568124068_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=BjKhUqBMbgIQ7kNvwHnPYXM&_nc_oc=AdmsUBouTBh8KMF1ZRo8ity7qMP2qWSTSK1PghnrVPuPGZ-V7a0ty4R4nvtW8QSvAm4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_Afg2ucY8R5GUPg1d0X-89gfftBOAjgt7skvVj71oiT_M8g&oe=694654B1)

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452532488_512509834620306_1267219142950200425_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=SWrMZnWtKvkQ7kNvwHXDIML&_nc_oc=AdkMfePFVMqfbG5H836KMH7qb7bxiH11FzLAHoBU7gwhkikqA4P8Lr4BNm3Wt03LJVQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_Afj72DxZ2rLoXQMV0O593c36pFEgI2d7YQBJa_97DGlJ2w&oe=69463E01)

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

![Screenshot 2024-03-12 171631.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452881431_512509817953641_3022961139974047751_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=E2PBqFpafisQ7kNvwF7o5yu&_nc_oc=AdnN-KFqHP3p-QO9s10BUw5XkFVvfzye_EovMhg2hkMwjdBZMBHetLwJXYXLwqO3v2k&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfjshUcXtahPbDuvVzsCyMix0Fur9D6amcrdzVOwgcJixA&oe=694634DF)

Ensure that the PlayerVar\_Manager script is attached to an object in your world. In this example, I used a text object:

![Screenshot 2024-03-12 171735.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452513283_512509791286977_42569017604569069_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=PLgPq4dt-S4Q7kNvwELPLJ_&_nc_oc=AdmTFtft16VOYn_H_UAk3TYvXqGZxInDWWzWtz8-isQasZs-Kzc8eWkWePLpMB2ozYA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfiLnBjk8A-kT7zAJqffJ2b86EvWeqAyhyM1TiVt3U7lmg&oe=69463167)![Screenshot 2024-03-12 171909.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452742345_512509761286980_4350714917524728780_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=cad7j8sKMfAQ7kNvwH9RASu&_nc_oc=Adn_5TQmm73MUyk-8YfmKv8KvqW_oN6BILxLlWwmmNjpWypTSFB_ieQGrD8_MvQeWrw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfhLIFehbC2ISmiwO7W4_bD6-F8E4IHQdOlNY7zMl5tKzA&oe=69463D35)![Screenshot 2024-03-12 171909.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452701864_512509787953644_6289865107426242307_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=eBLKik4iTc8Q7kNvwER6oVh&_nc_oc=AdlEtgXYg-OSgZ7Yaltgidnd_MaX7TtrPNnDNVxLCUPAmXjgtiFDCnc0JsTDAeYJC4Q&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_Afjuk2vJ-v-KyLpNkIiJVUWpN3wMi8OZy6ZEeIw2AFxtGQ&oe=69465652)

## Step 5: Define Type

Before we can get and set a JSON Object PPV, we need to define it. Because this type is stored in a \_Defs script, we need to be able to access it from our other script files. To do this we add the word export to the front.

![Screenshot 2024-03-12 181652.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452506810_512509757953647_8787940282338034104_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=VynO82SAhDsQ7kNvwFPiR68&_nc_oc=Adlnl4wozASkJcNzMSkoQ5bKjXkVOOv--ExRwj9FUpcLZA23X2aRdDnwW4WrWKm3uOk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfiHeTSrSpwdyxaTpnUBzSxdYV721RMOtnH-hDX913s72Q&oe=69462C7A)

Now that we have exported the type, we can import it into any of our other scripts by typing “PlayerVar” and clicking “enter” or “return” on our keyboard to import the type.

## Step 6: Map PlayerVar

Now that our \_Defs file is setup, we need a place to store all of our player variable data. We will do this in a \_Data script.

Create a new script in Meta Horizon named “PlayerVar\_Data,” and then we will delete all of the prefilled code as we did with the \_Defs script.

![Screenshot 2024-03-12 181658.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452554819_512509784620311_8209205062022272298_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=sHGYLyJQ2foQ7kNvwH-voZt&_nc_oc=AdkGVkn5toWSJhyjM6EDOH1J_itZKiY1sxVU_xYe9cwNrziAmMDKEevJznuBzDUIEcA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfgzTlc-4oFRgaHlnArmkZGxG-aUHhU83iJFqictV5Vl0w&oe=69465D65)

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

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578528_512509781286978_2962179804368749502_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=9FTPXNhz8D8Q7kNvwEsOY8N&_nc_oc=AdmzM8GC1U2Z7UyKh9iGlefWRiXlYZrpDkY5U_-RnS6i2phwE1-zn6rlAJsZUTG0Z70&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AficV-uo4jpiTIda-RLsxLo7XpWVz6akmve2JHTYCxOkKw&oe=69463724)

At the beginning of the script, you’ll encounter the variables. These variables are globally scoped variables, which means they are accessible from anywhere inside this script. These variables are constants; for instance, the playerVariableVersion should only be updated manually when introducing new variables—a process detailed later in the document (Step 9). Similarly, the playerVarName remains unchanged as it serves as a reference to the PPV variable.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452893310_512509764620313_8601289411585962013_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=nuO37r5RJocQ7kNvwGwPKS5&_nc_oc=AdmM6BY0Fa-0nAnyMtuqXLlYSYHUQOjOVvjil1wwFCqP_Is0n_SUI2hAvESzmmcnZpo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfhqVpEYcwbEJR57UWHHJ3sSexHUgzMd7XC_sW1NFOmNWg&oe=694659C2)

In playerEnterWorld we first get the PPV. Notice that it could be null, we handle this in the initializePlayerVar method (seen at the end of this step). Which we use to create a newPlayerVar. We have to create a newPlayerVar because the player may have last played in an older version with less variables stored in the PlayerVar type.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452963336_512509777953645_4263171605963207015_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=jEkItV7gcyUQ7kNvwHchexk&_nc_oc=AdlWZUeLZEiac12lD0FwoWrZrbL0AY_b0PSeEM89ajUFp6NDtilmIsWrBfi0reM2pW0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_Afg_UtkBFkLyi7pdAXETRLZYT-KDEP21CfV2D6JFs_UmhA&oe=694651E8)

Then we update the visits to be visits + 1, using the shorthand visits++. To make sure this is working we add a console log.

The last step is to add the player to the map we created in the previous step. We do this by using the .set method, which will replace the previous value if it has already been set. You can use the .has method, if you want to see if the player has already been mapped.

In playerExitWorld we get the playerVar from the map, which if you hover over the const playerVar will show that it is of type PlayerVar or Undefined. This is because it is possible that a player has not yet been mapped. We can check for this with if (playerVar) which checks if it is “true,” meaning not *undefined* , *null* , *false* or sort of false (i.e., 0, empty string). We can use an else statement that calls on console log if it is undefined; this can help locate bugs now and in the future. It is recommended to use checks like this in your code.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452673104_512509774620312_3142404411627905147_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=LLgwDt7fNXEQ7kNvwHawLYI&_nc_oc=AdkeV9iPlSD9PcJFGi_W7mM3B5dLDBCwu7GXjciP1hpmrk6z8k6nRMPsYjsV3K2gbbw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfjDZi8RL60j8uYaJ_wTHcPf4L3e9H6Tgli-f15gbfLa0A&oe=69465E51)

Now that we know playerVar is defined, we can set the player’s JSON Object PPV, which saves their JSON Object to the world’s persistent storage.

At the very end, we delete the player from the map.

Outside of our PlayerVar\_Manager class, we can create functions. Note that these are similar to methods, but methods are stored inside classes. In this case, we are creating a function called initializePlayerVar, which will return a PlayerVar.

This function is important because it allows us to take a potentially null/undefined value, or partially defined value, and create a new object variable.

**Please note**: There is an error as of the time of writing in Meta Horizon’s API, which says the variable could be defined or null, but is actually defined or undefined. This distinction caused an error with the code seen at the beginning of this step, **below the code is corrected, checking the truthiness of (prevPlayerVar) rather than (prevPlayerVar !== null).**

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452415047_512509744620315_2203337898861099810_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=UefwLXLumVEQ7kNvwE9d756&_nc_oc=Adk5D0GR9tWuz69Ua2fVWjMeTRmGE_K_l0AyBCtBzA3hNVQS2NyJ3mfCIClvMufrlN8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_Afg3tGbtpf6-jSiGNInvfHp_CjK6rFfKfAZt_RTD28Pyvw&oe=69465416)

The first thing we do in this function is create a brand new object variable with values we would assign to a first-time visitor. That way if the prevPlayerVar is not truthy we return those values. Otherwise, we can check that the version contains values we want to recall, and save them to the new object.

Now you can compile your newly saved code and test it. If all goes well, every time you preview the world, your number of visits will go up by one, and log to the console!

## Step 8: Test PlayerVar Size

Now that we have our JSON Object PPV, we need to make sure we don’t run it over the 10,000 character limit. To test this we can create an artificial maxed variable and stringify it to see how long it is.

![Screenshot 2024-03-12 184022.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452751568_512509754620314_8517786802089207349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=6UxZ_dPRCh0Q7kNvwEuVqfI&_nc_oc=AdlX43YxyFNk5-Pn6cjmPv4V9Z1ShLj6ao6OQZkFesT2WHSAPIZrg7GnlEZC0yP8RuY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_Afgc1Bv4dvvc5cZesmaJ5Tw6Js8MvqEvXeCuFsYR2Kankw&oe=69465215)

In our testPlayerVarSize function, we have created a testPlayerVar variable with larger-than-possible values. We then calculate the length using JSON.stringify, and the .length property of strings. We then simply log that number to the console.

All that is left, is to call this in the start method. When we are done, we can delete this line of code from start, and write it in anytime we need to check the max length.

![Screenshot 2024-03-12 184035.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452616143_512509751286981_1414151313288137369_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=X4ym9M2ZLsQQ7kNvwEv2grg&_nc_oc=AdkOfChtxxOet4IcCxrhFisMIiVTD51F4EVIMklh_oSW7SMlXJ_bO44ibFPM2X-n8kg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_Afhld_FJA-08oaD1flMtLaFFkFThNvq9apZ0qxPyWMb7vg&oe=694642CB)

## Step 9: Add More Variables

Start by updating the type to include additional variables. In this case we added isAFK and afkCount:

![Screenshot 2024-03-19 at 12.18.46 PM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452916228_512509767953646_8032047240862163427_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=syg-X4i7Z5cQ7kNvwH3MFiL&_nc_oc=AdlzYFnOXfK2n3uOeXDvA_IKZMRyOjYdq-ORUkPghYMBYP7AFVcq28h8ckoggKZyvIc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfgAq_4XuK-TmhP9LRY-rHlVWCl4DnlhWFVxywYzEPFGDA&oe=69463267)

We then add these to the initialize and test size functions:

![Screenshot 2024-03-12 185301.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452742345_512509857953637_3325756538951273658_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=vnlcx9V81qkQ7kNvwHlBH_L&_nc_oc=AdlPsN7EPkYVe5zAbppg_lVEKo1UJxRRR60rTzPVqqLze3VCvcnBhIZ4w1YzL5VCjos&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_Afj0HGhjuuXA3ZplI810FRIwzwFIRIIfnMtG292ZQYkELQ&oe=6946344D)![Screenshot 2024-03-12 185200.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746744_512509741286982_2246072596883689413_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=5QDJctXnhdoQ7kNvwFM9TKt&_nc_oc=Adk3bKD46xsbOWgkgt9QbvSTpkIMtuYddLC08EWqyTT6yjdBsPZXMM0I04fDU18MbQw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfjbzDsUlhrWngumiLeEQzhz_YUbm66ux3f7pLIBRL8q0g&oe=694658B9)

We also need to update the version number from 1 to 2:
![Screenshot 2024-03-12 185053.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452701864_512509737953649_3962852608460184155_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=kxweLxwFUnYQ7kNvwGpECOp&_nc_oc=AdmpA6UqF6h4jELo5VY9tHsb3lIVRqUvhoEftREcdvh8j0EKPU1UQinj81OR8HYfth4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_Afh59n_LjPu_s3WqOTOzOA16AJF2xjI7HysRH4Up8T6LUg&oe=6946346A)

Then we can use this new version number to get the afkCount for players who have visited our world since the variable was added:

![Screenshot 2024-03-12 185249.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652242_512509854620304_1398487090111015541_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=-CL-pi34Ve8Q7kNvwH-bY0K&_nc_oc=AdmdKUp0ndLNQZHA0r6yq-6_su4WizuQOIhLmUHCiUmPDrOpQ022jVjy4MJsSDM5y1w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfhA-JG3mRuatAm_eWnFN8NTl9JZH40aov3r81c_QLZqFg&oe=6946575E)

## Step 10: Use the Variables

To get started using our new afkCount variable, we will connect the CodeBlockEvents for entering AFK to our local method:

![Screenshot 2024-03-12 185526.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452578037_512509851286971_2231847787475568309_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=-A-8-2r5190Q7kNvwFmSnOJ&_nc_oc=AdkHYMgSd-TMCVsVQ3jHGt5s4lIUJdEGhKayxWJAzteXOs3nAoNaBD3NDZ1lBFWgJ48&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfhJ--v4qmnrDGYDQdLwr8h8S2GvkdjOjuN6DjZDsY8xuQ&oe=6946594D)

![Screenshot 2024-03-12 185514.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452909009_512509837953639_6530190211756898574_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=WznGgS-7unsQ7kNvwHTFEtJ&_nc_oc=AdkhqH2XWz842q6vbOi5L4NbNwWH3LG73w2_t9jkVCVyE3zK9PEZG2rdIl6zgn35Cgc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9-hrBMbks8fM9h_FHFQDIw&oh=00_AfjFQXr65A71_AwXVXAKCAnhT-_n11R82Yla1NUKvrYk7w&oe=69462C0F)

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