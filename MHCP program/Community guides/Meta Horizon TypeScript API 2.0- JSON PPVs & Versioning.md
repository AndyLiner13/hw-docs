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

![Screenshot 2024-03-12 165250.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452885043_512509794620310_1164532069211912730_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wW682LeknQIQ7kNvwH5r4rM&_nc_oc=AdkQPiSEt2rVwQTseS4wUE2WFHvLX9Oye6JhCwza5PN6GuiCnxYxJmVPZwvhT-tHFYs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AfmQpQQ65hEE_i2wP42Cn830v7NgOOJfhuF6WdFRx3ZGzg&oe=694BDD12)

Click the plus icon to create a variable.

In this example, we will name it “TestVar” making sure to select “{ } Object” from the drop-down.

![Screenshot 2024-03-12 165344.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452652041_512509847953638_1230264767479043441_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=XZQlRnJz3tgQ7kNvwG3xxcB&_nc_oc=AdnBD-bz25MrFi12TvbrP_EEhA_YujecgkSk4Y4JJcLY9va6zx0k8tKNS83AS656fcE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Aflv-QyVLcgloN27qs_EVu4nIqAK-kgq0lplI8lQTnEQkw&oe=694BD36C)

Now that JSON Object PPV has been created, it can be used in TypeScript scripts by referencing it using the string name it was given: “TestVar.”

## Step 2: Create Scripts

To begin, we will create two scripts with the specified names seen below. It’s important to verify that Meta Horizon’s 2.0 API is selected by accessing the settings via the gear icon. ![Screenshot 2024-03-12 165632.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452915617_512509827953640_3795839271183190167_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=dBS0Ja11Q74Q7kNvwHIN_dM&_nc_oc=AdkeRJvnDB70D-Nca7idQI5ZWkZ3NoKse-rW5fS2-uC016h7oNB55JM1Q88Zh39GlB8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Afkzt8ZmoRRApn7a8RDQNVwll9QUlB9JHVoWpbakpMAnIQ&oe=694BDDBD)

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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452690902_512509841286972_4120111531248974789_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Cd8evPT-xx8Q7kNvwEO7Jh9&_nc_oc=AdlA-R7p5QFwv12znJl23DjQJw4VRzFqs8JWSHLYY9qsKHTDG6__5gqV13zZQr6em1g&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Afnj5OPxq45jNs-7A_k0TQbeSXuSyj332rDd6Pd-6vtoRw&oe=694BE34C)

## Step 3: Prepare Scripts

To get started delete all the prefilled code from the \_Defs file, and adjust the \_Manager to explicitly import Component, rather than \* as “hz” importing all.

Note: This is a personal preference, please choose the approach that works best for you.

### Mentor’s Note

I personally like the explicit approach as you will know all items that have been imported from specific APIs, and you can do less typing, which is always nice!

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452576403_512509797953643_5285657881568124068_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Xd0Ytyk6QHwQ7kNvwEbgwys&_nc_oc=AdmzrKXSWe6a5zPfK-eOTi6KS9N1kyNuo15yPbAs17dxGg8xFokwQ7K6sfrSMiOh0_k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Afni0MqfkhQvkM9oCtrA7L1Tv8_41Pv909QP8U9YQJKdqQ&oe=694BD2F1)

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452532488_512509834620306_1267219142950200425_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=3ypfdudZyfQQ7kNvwFKx97p&_nc_oc=AdmbCIS0BaB-9dDWD7NuBjQj6ftZKsG5QFJGXnJ617JFtIQDF34vB0xsZUeTLyxev3I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AfnIUYy3IfHWvD2-RMC7thLnE1fb1my-Yy_SsVIcahXgfA&oe=694BBC41)

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

![Screenshot 2024-03-12 171631.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452881431_512509817953641_3022961139974047751_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=QIcR_64n2fgQ7kNvwHIBQiY&_nc_oc=AdltTD57ttI9se4rqCrjF6qyAjikGvx01NG9YBFGp-ke3AVwMJEw7UK9oY-R6bpOr2o&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AfkZQXJZTigxLjWADynQW1MSR-T5jmnwApGvR0HWVG761A&oe=694BEB5F)

Ensure that the PlayerVar\_Manager script is attached to an object in your world. In this example, I used a text object:

![Screenshot 2024-03-12 171735.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452513283_512509791286977_42569017604569069_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=PFnYgniDk9UQ7kNvwFgwp05&_nc_oc=AdmTz6KF_Ilc55ygcOsLh-SAxYuZhDuMnKDQtGbE9SYa4y5MqOKiM8UHdooTUwmQZhw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AflceoxK0QmuUMSA_t5JCCws_gbLWVBbU7RIX204Bk5bMA&oe=694BE7E7)![Screenshot 2024-03-12 171909.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452742345_512509761286980_4350714917524728780_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=_05Lgnh_pZsQ7kNvwGPs476&_nc_oc=Adm-XnKDrjFQE4k7lMIgqPdRNmJSFS-Acxz6pWYq5vOhUZARtyU_Ts-myuRg7gbCmSk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AfmztIGtaecqjaI0DMivZwHSjImF2nvVIHLjhyXVq6rncg&oe=694BBB75)![Screenshot 2024-03-12 171909.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452701864_512509787953644_6289865107426242307_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Eo7xE7zxwvsQ7kNvwGC3xYV&_nc_oc=AdkdYjkBiz4aPL3AJfKUFuPDKLuE9zL5QpdyEKrd-he3PcICGU-XstIYRpFbR0MjFvo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AflphrYVDkBXDOIL1bCows8E1FhEt8Y_PJcihzD4VbQaUg&oe=694BD492)

## Step 5: Define Type

Before we can get and set a JSON Object PPV, we need to define it. Because this type is stored in a \_Defs script, we need to be able to access it from our other script files. To do this we add the word export to the front.

![Screenshot 2024-03-12 181652.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452506810_512509757953647_8787940282338034104_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=R0TIqoeHFOwQ7kNvwHlaoaC&_nc_oc=Adl7xSk2RGxWYwixffHGiHYfM4wMayhB_fhD5TSy4_Y6UWHCUJDRY_FzScoyH-GyrZQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AfnhwiOOCT2-feAkOA5CywAoCotM2-nxg80IfGkNqR4PjQ&oe=694BE2FA)

Now that we have exported the type, we can import it into any of our other scripts by typing “PlayerVar” and clicking “enter” or “return” on our keyboard to import the type.

## Step 6: Map PlayerVar

Now that our \_Defs file is setup, we need a place to store all of our player variable data. We will do this in a \_Data script.

Create a new script in Meta Horizon named “PlayerVar\_Data,” and then we will delete all of the prefilled code as we did with the \_Defs script.

![Screenshot 2024-03-12 181658.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452554819_512509784620311_8209205062022272298_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=_QvdLs8Q8VQQ7kNvwE2mBW6&_nc_oc=AdkZMJJ9pRCLtdXWRVrIMHD2TuPNMFt6NFHA4jfMO-XMN-fcTa46vpH6dJTeoJ1aJzo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Afl9Rukq18Rnl1fIAvtqKB5eVHocwhkfGWJElGt0bMwvAw&oe=694BDBA5)

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

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578528_512509781286978_2962179804368749502_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=g3tYIRLj-_8Q7kNvwEf9Fe7&_nc_oc=AdmPYD9NqXcX3DC444NTT4ldgy-s-hPhqBg3ktepID-HVMilNU1Rl6FQfqgCwso7JiA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AflRgkSbLyLJLtfc0QVAhCnQJsF5M_Pz_qjYVO9bHx0XUA&oe=694BB564)

At the beginning of the script, you’ll encounter the variables. These variables are globally scoped variables, which means they are accessible from anywhere inside this script. These variables are constants; for instance, the playerVariableVersion should only be updated manually when introducing new variables—a process detailed later in the document (Step 9). Similarly, the playerVarName remains unchanged as it serves as a reference to the PPV variable.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452893310_512509764620313_8601289411585962013_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=vvBXG-Fn1p0Q7kNvwHq5Zvj&_nc_oc=AdmJOhFL5hqoAGfz74bopW_u_w_prcRqpHQsBrt-zpoMRz7Y33uzZSFfc1lH1Fa4s1k&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Aflgp3rd-DzjlMXxp39sw37JyMbvY8ixnoZZgTiKJMVZmw&oe=694BD802)

In playerEnterWorld we first get the PPV. Notice that it could be null, we handle this in the initializePlayerVar method (seen at the end of this step). Which we use to create a newPlayerVar. We have to create a newPlayerVar because the player may have last played in an older version with less variables stored in the PlayerVar type.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452963336_512509777953645_4263171605963207015_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=EdS53D4qItQQ7kNvwFXIqEI&_nc_oc=AdmkLMPoYYKPlOYI5lap57TBn6T27Lk-72h2KEefhuQVOWjIJHflk09e6TLHFjtbe0o&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AfnONS6DnHxfk-3zHpX6gTkJDo3dzYY-ayvWEdTwT0W7zw&oe=694BD028)

Then we update the visits to be visits + 1, using the shorthand visits++. To make sure this is working we add a console log.

The last step is to add the player to the map we created in the previous step. We do this by using the .set method, which will replace the previous value if it has already been set. You can use the .has method, if you want to see if the player has already been mapped.

In playerExitWorld we get the playerVar from the map, which if you hover over the const playerVar will show that it is of type PlayerVar or Undefined. This is because it is possible that a player has not yet been mapped. We can check for this with if (playerVar) which checks if it is “true,” meaning not *undefined* , *null* , *false* or sort of false (i.e., 0, empty string). We can use an else statement that calls on console log if it is undefined; this can help locate bugs now and in the future. It is recommended to use checks like this in your code.

![Screenshot 2024-03-12 181721.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452673104_512509774620312_3142404411627905147_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=81-fclQnq_oQ7kNvwFLNIju&_nc_oc=Adm2v-ayH5_qGMuv_gs3NjsXO4PeZ-_xsUqbhpj66mtwmwZUlmhlzItiE9QQdLE_V0k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AflTpYXv62OnzBt6QvItGvhuT7m4vhpXpKglYeBzGC8HlA&oe=694BDC91)

Now that we know playerVar is defined, we can set the player’s JSON Object PPV, which saves their JSON Object to the world’s persistent storage.

At the very end, we delete the player from the map.

Outside of our PlayerVar\_Manager class, we can create functions. Note that these are similar to methods, but methods are stored inside classes. In this case, we are creating a function called initializePlayerVar, which will return a PlayerVar.

This function is important because it allows us to take a potentially null/undefined value, or partially defined value, and create a new object variable.

**Please note**: There is an error as of the time of writing in Meta Horizon’s API, which says the variable could be defined or null, but is actually defined or undefined. This distinction caused an error with the code seen at the beginning of this step, **below the code is corrected, checking the truthiness of (prevPlayerVar) rather than (prevPlayerVar !== null).**

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452415047_512509744620315_2203337898861099810_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=h8aMo3DNwzUQ7kNvwEvVgYB&_nc_oc=AdkgMM98Ph142HdMWw81vcsXvzV3a8IZ_hqP5AQMmVkutoI4bmtjUYN9fC7PGLgPMVw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AfmZLIp1JMCuH_4hvLvAwUG3wU5SfpSOiqXGXAv0HITayA&oe=694BD256)

The first thing we do in this function is create a brand new object variable with values we would assign to a first-time visitor. That way if the prevPlayerVar is not truthy we return those values. Otherwise, we can check that the version contains values we want to recall, and save them to the new object.

Now you can compile your newly saved code and test it. If all goes well, every time you preview the world, your number of visits will go up by one, and log to the console!

## Step 8: Test PlayerVar Size

Now that we have our JSON Object PPV, we need to make sure we don’t run it over the 10,000 character limit. To test this we can create an artificial maxed variable and stringify it to see how long it is.

![Screenshot 2024-03-12 184022.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452751568_512509754620314_8517786802089207349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=udL1jkhNSBYQ7kNvwFjmKsi&_nc_oc=AdkpOmHhA1vmGbIpGgSJkias3DwA8EP6QdhJzlUeoYkUVdzhUabTKVc2itpyhEiRZis&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Afm1AAKq0gs3gCDNeqvTVyjrMV4HX1AotXov0FznTc0suQ&oe=694BD055)

In our testPlayerVarSize function, we have created a testPlayerVar variable with larger-than-possible values. We then calculate the length using JSON.stringify, and the .length property of strings. We then simply log that number to the console.

All that is left, is to call this in the start method. When we are done, we can delete this line of code from start, and write it in anytime we need to check the max length.

![Screenshot 2024-03-12 184035.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452616143_512509751286981_1414151313288137369_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=r7RfUGfjHAsQ7kNvwF0jPb_&_nc_oc=AdkZj7BNv7winDu0Oibj5_qOUECqZjfU29N3NRXoVfCpMEfsHKL_hhu_HEnv-cOT8E8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Afk1TadWhg663bmoOM2C9lpVj6MYvBJAhaYIoxROG798Ew&oe=694BC10B)

## Step 9: Add More Variables

Start by updating the type to include additional variables. In this case we added isAFK and afkCount:

![Screenshot 2024-03-19 at 12.18.46 PM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452916228_512509767953646_8032047240862163427_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=NLgSCcyOuY8Q7kNvwG_SQWv&_nc_oc=Adnk3OUgFT7NOWgACKZbSzWhv820JDkdBgWK7GTRXRQfSRXOk9FikdAA2aZKG0QyKWo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Afl_fP9DnQ4WOzB9-50YXTWJqFUrEfL4lUcGbzoXBogiBg&oe=694BE8E7)

We then add these to the initialize and test size functions:

![Screenshot 2024-03-12 185301.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452742345_512509857953637_3325756538951273658_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=MYmymKla6IIQ7kNvwEk8dQc&_nc_oc=AdnwHEKKRibaf_IISrvWdQut5qWUAOnF5kIpiif77_E8OsgFF8gq9BlywMjFAuhJVeU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AfnrXRUv55Di-TNk6hX4yekUucz4S_cCEy99bNLDd52QFg&oe=694BEACD)![Screenshot 2024-03-12 185200.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746744_512509741286982_2246072596883689413_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=03PfcrhYq40Q7kNvwGHCVjG&_nc_oc=AdlXAlq9T92cxqpfR-FjTyjnNTc83ZCDZCcBJwvU3rbOhtPsrSmshKjTbgJ4Ez383_A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AflyqU-2yetez3mikLxKQA_U_lpM2cdhzx9IPNnctQ9frg&oe=694BD6F9)

We also need to update the version number from 1 to 2:
![Screenshot 2024-03-12 185053.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452701864_512509737953649_3962852608460184155_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=TMxp-HGtHOwQ7kNvwFJk3QP&_nc_oc=AdmZnhaOoDS9JgJAt8R_dyjIvTA-C8pB-Z5a6B1M3ApzqJ2eRJcj_ropiTWM36gB3g4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_AflPLk2kibAbZ-xjxMeorF-r_hxOx9pvtj-SXUKTedn0ow&oe=694BEAEA)

Then we can use this new version number to get the afkCount for players who have visited our world since the variable was added:

![Screenshot 2024-03-12 185249.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652242_512509854620304_1398487090111015541_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=-Z3WbSnE-DgQ7kNvwGMkVyn&_nc_oc=AdnXll-PLj90I6PC6lkk4JkOGUjOwtYbbif-fuEz5mdsFkrmZo_ezDxpP1Gvj4WyKHs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Afl6Efq85QPWNP5GFobqAoxmleMAgxBOcS0J2BBjwxOJgA&oe=694BD59E)

## Step 10: Use the Variables

To get started using our new afkCount variable, we will connect the CodeBlockEvents for entering AFK to our local method:

![Screenshot 2024-03-12 185526.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452578037_512509851286971_2231847787475568309_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=7el-P6gnh54Q7kNvwHgdnkH&_nc_oc=AdmI8wFMYDXSg766PhzTPYMeW8CHSkJT0gO90hy7jZbeuZjSzT7Tnj7etgICsBn7GrY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Afl0qFxNjudgXl3EoUJyKej9vnxYjmLUcscqZYo4volk8A&oe=694BD78D)

![Screenshot 2024-03-12 185514.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452909009_512509837953639_6530190211756898574_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ugVrxdzCrQ0Q7kNvwGtVTne&_nc_oc=AdmC48V4uFqcTofBJhewCS_CZMa2AXedrKDBZGTIgH6yUtbDX5ImVj7q7Ym78At6CGY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=auLTzd6Y07EsnAQBTYRaSw&oh=00_Afm-EkQL4nBH8C9FC8KyJf5NfAQW_f0XQ1EH8NOP2375yg&oe=694BE28F)

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