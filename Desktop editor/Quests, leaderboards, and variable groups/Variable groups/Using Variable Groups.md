Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/variable-groups/using-variable-groups

# Using Variable Groups

Variable groups let you create sets of persistent variables that you can share across your worlds. This approach lets you build cross-world experiences using persisted information from any of your worlds. You can access the variable groups system from the **Systems** tab of creator tools. On this tab, you’ll find three sub-tabs that display the following types of variable groups. Those:

* **Added to the World**
* **Owned by Me**
* **Shared with Me**

With the introduction of variable groups, you are no longer restricted to using just six variable groups per world; you can create as many variable groups as you want.

> **Note:** To use the persistent variables from a variable group in your world, you must add that variable group to your world.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452554253_512536417950981_1692974654504870135_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=vW518plPRQEQ7kNvwE3sCd8&_nc_oc=AdleifBorbVDVB8K4TxzF3Jg3-jE_FfN3CLl6AN4NCsbPKhxCzHl8j9LTiW25ZaOruDqYMvuFhXTv0iD1QOkqVbL&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FeN_hu9J5Lt8ffLvhX4wuQ&oh=00_Afn74yICudjkfOoBLwmQkXvgdG1mUIWqTHKror1fDWMEYQ&oe=69558B00)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452665654_512536497950973_1194272625607849774_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=PE-CgJ-oJy4Q7kNvwELOIU6&_nc_oc=AdmiAQXOEOetTipTsEF5KmTzxrUWSv0jbuKvT_BszakhjOxUJssPk2AwVuRjHZbve4ghG5OUwWDbPzLKtLwsJ3DZ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=FeN_hu9J5Lt8ffLvhX4wuQ&oh=00_AfmGjPdvjtqJ78YostrI8lWBa6zal7vCNdOHrmRRt8rdoQ&oe=695580B0)

When you select a variable group, you’ll see all of the persistent variables that it contains. From here you can create, edit, and delete persistent variables from within a variable group.

> **Note:** You are limited to adding up to 100 persistent variables to a variable group.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452852984_512536451284311_5925156470849501450_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=XZtG3_cZgKUQ7kNvwFDnU5k&_nc_oc=AdnURoX4kaBC-JzQnUkY1HSK94858OsSA2XKYy9Dfo-Ec6cTjqJqqVtdlPf_tnGJ-cdIHWdoNxuCNztp9sabwyIr&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=FeN_hu9J5Lt8ffLvhX4wuQ&oh=00_AflZuQXogSFGFgdU720GQHWFghCaxtQct7Y26tzLK4nrrQ&oe=69558A80)

When you create a variable group, you can edit its name and description, and you can also choose whether you want to add it to the current world.

> **Note:** In order to add the variable group to the current world, you must own that world, and it must have less than six variable groups already.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452756647_512536487950974_3070301593230605430_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=RBsDfWHhoewQ7kNvwG9JJtw&_nc_oc=AdlHwTyeDSEB5vmz27QLxcIoQ5EQtqnjk-brs3lRYAchRX6tSWkiafj2xpgy06c3gSP6B3YydJHbLNBeTxG8z8Fs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FeN_hu9J5Lt8ffLvhX4wuQ&oh=00_AfkC4jVvZRGH1jiTlYJBTca7pUp_eLmfTBFtAtsHRmOclA&oe=695578B7)

Once you create a variable group, you can then edit it, or delete it. Be careful when you delete a variable group, and when you edit its name. Editing the name requires that you update all of your scripts that use persistent variables from that variable group. Deleting a variable group also deletes all of its persistent variables, which breaks any scripts using them.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452864153_512536484617641_8300507730140246292_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=UmrQs0HaWboQ7kNvwE9ixz0&_nc_oc=AdkAf5dY-8n4bUQ6wCm5IkvBvq4uqwRwF-GmJ-ty_Tv9WzE7e0dA6z0o9bqFQY888CmFmNxO8Hy53U1jxAYW74qI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FeN_hu9J5Lt8ffLvhX4wuQ&oh=00_Afl0Cjrd20CMAzqzdIiLJa-VJfX080YhjU4spmVj9FfjcQ&oe=6955A245)

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452873933_512536414617648_4553408675355629305_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=YR_eE9yr7P0Q7kNvwFm7Zn-&_nc_oc=AdkSnIZsNHFEnbwEvv6bIAL1xMb1Rv9uFRZ3ZBysHuLr6SHAjnfvEOsYsVjCSHlCP8BfPIiyvTXTUpHKe1qsvkt6&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FeN_hu9J5Lt8ffLvhX4wuQ&oh=00_AfnifQX2ckFygoL5Wm7pZE7mu213mj9PZEl8YITf1SGkiQ&oe=69558FAF)

When you add variable groups to your world, you can then access their persistent variables using “set” and “get” persistent player variable code blocks in your scripts.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452819269_512536471284309_8749603936744434663_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=r7VGp3afM5AQ7kNvwHw_OG5&_nc_oc=Adm-jrK3Dk0k79C_WHgFgT51EAIW0erRVOfKWObNsiCLtpYZ-yNB4TnXmkdM_QVVPTky_fPKDFEXmHBGH9IGNJbS&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FeN_hu9J5Lt8ffLvhX4wuQ&oh=00_Afk6IVcsMUJdN69-OscSIeGHJGxu6ETADwRuBJ8Hp7Q61g&oe=695593C7)

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452885444_512536371284319_6701700970291792058_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=1C_BuKv7QCYQ7kNvwF3RZg-&_nc_oc=Admm3qTTydPQo4y2xHXLKv47KRQls9SiVtnZYQypZeQJ3rqiUCltNMDCklX32DqmdEoc93MPCtavvUbZN3wHPE8e&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=FeN_hu9J5Lt8ffLvhX4wuQ&oh=00_AfmM7qWTEFIohnhgntXmYSbm2YR9ZgTmjiDEPMpODgJr4Q&oe=69559427)