Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/variable-groups/using-variable-groups

# Using Variable Groups

Variable groups let you create sets of persistent variables that you can share across your worlds. This approach lets you build cross-world experiences using persisted information from any of your worlds. You can access the variable groups system from the **Systems** tab of creator tools. On this tab, you’ll find three sub-tabs that display the following types of variable groups. Those:

* **Added to the World**
* **Owned by Me**
* **Shared with Me**

With the introduction of variable groups, you are no longer restricted to using just six variable groups per world; you can create as many variable groups as you want.

> **Note:** To use the persistent variables from a variable group in your world, you must add that variable group to your world.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452554253_512536417950981_1692974654504870135_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=7Gh38KZwh4wQ7kNvwHjHTpw&_nc_oc=AdmVrQWKZO-Ut65J39fJiJkgI-pceX-iWL008kEWEcwihkrrJz7N668R0tyb67lWnqM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KACfJEcXKXhcD2GQqn1o9g&oh=00_AfmRnAG8W8DAePlRn0Gr5RBi0PFflecBsSf3YprVkqV3oA&oe=694BE000)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452665654_512536497950973_1194272625607849774_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=e25sEFjBOPgQ7kNvwFR8mLJ&_nc_oc=Adm6_bNnyeCJroP0rADFXWL2l1dVdJeLhiU_zzBPjyvgjDfAoRyUz91vnHdPZsT_rEc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=KACfJEcXKXhcD2GQqn1o9g&oh=00_AfmV_NuDW7BKoqxfDKV5nC7NkStH9yr0Ly9YnJJfkOMOvQ&oe=694BD5B0)

When you select a variable group, you’ll see all of the persistent variables that it contains. From here you can create, edit, and delete persistent variables from within a variable group.

> **Note:** You are limited to adding up to 100 persistent variables to a variable group.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452852984_512536451284311_5925156470849501450_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=kHQFoGkErzAQ7kNvwGIGCv0&_nc_oc=AdkFIz-0RIa0Muy5_-rTN8vWvrVsAmR5LIfsdV_MOW1CO2fhrUZ1ZznhsMxoZxFkPxg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=KACfJEcXKXhcD2GQqn1o9g&oh=00_Aflo3y1JhUh5NkBs7u-2KW5-VB8ISZ8wk_oUB3YBsWUdpQ&oe=694BDF80)

When you create a variable group, you can edit its name and description, and you can also choose whether you want to add it to the current world.

> **Note:** In order to add the variable group to the current world, you must own that world, and it must have less than six variable groups already.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452756647_512536487950974_3070301593230605430_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Mhjt26oqelwQ7kNvwEChA8y&_nc_oc=AdknX5nPpkgRpJVHu1EsmwlxNwtrYiK8xmoj3YlLeurbOJC-3p1WPHqSKbGFeZDv2b8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KACfJEcXKXhcD2GQqn1o9g&oh=00_AfmKH7n2VYeDOhxh2dJh9KJxnr3Ot6_Naa_Qk1UWwN-9Rg&oe=694BCDB7)

Once you create a variable group, you can then edit it, or delete it. Be careful when you delete a variable group, and when you edit its name. Editing the name requires that you update all of your scripts that use persistent variables from that variable group. Deleting a variable group also deletes all of its persistent variables, which breaks any scripts using them.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452864153_512536484617641_8300507730140246292_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=JVwJPWQPM-IQ7kNvwF1SQhm&_nc_oc=AdmdY_D8B0hwjOBCkTIJQl6R1-uwLFrWk1dC37QBgX6u-DI7lJCq-zTWP2L-sUfHLN8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KACfJEcXKXhcD2GQqn1o9g&oh=00_AflNWjAh9NnBMuNLM10SS1mXcczZOFPDMDSdGBF8S7hQMQ&oe=694BBF05)

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452873933_512536414617648_4553408675355629305_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=shqfoBuYbr8Q7kNvwFi9_ri&_nc_oc=AdmMmwpm8KILRjFkIxdLyzEwPSMsKkKKR2SGrMcLt28IOJ5mfjjhWYd2njdTXN2_raA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KACfJEcXKXhcD2GQqn1o9g&oh=00_AfmRn4964AcsYrhHOfGGIUsU06hzPjcMPlmpVZub7LE47Q&oe=694BE4AF)

When you add variable groups to your world, you can then access their persistent variables using “set” and “get” persistent player variable code blocks in your scripts.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452819269_512536471284309_8749603936744434663_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Dcwm9PAwD9wQ7kNvwFoLCpQ&_nc_oc=AdkojPqkwfJSJZ6TOlTDQvX_5Hbkq-3QIIZUDrxceIzTkH755STJgffafxKmvs3wuIk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KACfJEcXKXhcD2GQqn1o9g&oh=00_AfnxkLuJi4BHJEZ623IHvFWo0Ag4YXCj3CT1oGW7gUkqyA&oe=694BE8C7)

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452885444_512536371284319_6701700970291792058_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=9KeQi6pMPH4Q7kNvwFLKVfZ&_nc_oc=AdlVEf7FRN0p9DnQFSIqCpbAbYNZJJG8eYudRtb5VLbSW9EXmSZlyY50FWkUpATZL-Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KACfJEcXKXhcD2GQqn1o9g&oh=00_Afl0V0tpXbghaWzkMSN-wH2iasYzCFLM2-4eYgI5G3C1Fw&oe=694BE927)