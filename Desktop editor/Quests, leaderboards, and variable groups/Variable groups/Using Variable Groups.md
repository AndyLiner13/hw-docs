Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/variable-groups/using-variable-groups

# Using Variable Groups

Variable groups let you create sets of persistent variables that you can share across your worlds. This approach lets you build cross-world experiences using persisted information from any of your worlds. You can access the variable groups system from the **Systems** tab of creator tools. On this tab, you’ll find three sub-tabs that display the following types of variable groups. Those:

* **Added to the World**
* **Owned by Me**
* **Shared with Me**

With the introduction of variable groups, you are no longer restricted to using just six variable groups per world; you can create as many variable groups as you want.

> **Note:** To use the persistent variables from a variable group in your world, you must add that variable group to your world.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452554253_512536417950981_1692974654504870135_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=LQFhBN6NIAAQ7kNvwGz5iJo&_nc_oc=Adkm4KRbuqrJdl7daapKz8CgG0UlfDmKhO0hRih3V1jFM8hlmu0QET5PyDLV9j66Gyo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=HWEHnQlVdhjL-bu3gFrIoA&oh=00_Afi16HUbsJKmQALVdbB2nTtZz3uUJWjHa8CbpMrAG27vvg&oe=693149C0)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452665654_512536497950973_1194272625607849774_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=mEyCCcPDL7MQ7kNvwGiKRWo&_nc_oc=Adm8sJAltt8_3lRsINJ6g29Qf2l02ORx-6OpFUW3Fsip_yxI5fAkXzQcgjphDug2iy8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=HWEHnQlVdhjL-bu3gFrIoA&oh=00_AfgCik0tYL2FDa9QhimhCJNnXWQWeuJYMS7eXBEtqanYAw&oe=69313F70)

When you select a variable group, you’ll see all of the persistent variables that it contains. From here you can create, edit, and delete persistent variables from within a variable group.

> **Note:** You are limited to adding up to 100 persistent variables to a variable group.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452852984_512536451284311_5925156470849501450_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=8WBYxQXyUrQQ7kNvwFD0Z2C&_nc_oc=AdlWMcWXyfofMI-3R1AYcwzYKQjdJrPQy46uizxAcb0KA4f9_FzQv7H-87LMBPzRNJU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=HWEHnQlVdhjL-bu3gFrIoA&oh=00_AfjNDy_x_61Uz3phdxpTzwD8E_D6JyT-FrBl1fj1RM5qMA&oe=69314940)

When you create a variable group, you can edit its name and description, and you can also choose whether you want to add it to the current world.

> **Note:** In order to add the variable group to the current world, you must own that world, and it must have less than six variable groups already.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452756647_512536487950974_3070301593230605430_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=LGix0897wdAQ7kNvwGI0fiu&_nc_oc=AdmR4GBfLJFeHoCzQ1jAXTKSSZdc2-4uvMNdPoFD23aWwEQ5Sy0nPlQaqNGfUUzouFk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=HWEHnQlVdhjL-bu3gFrIoA&oh=00_AfhsjXjPMv8v0-uCLW1MO57eKTFDHVixzL7FuWE5A5mN6g&oe=69313777)

Once you create a variable group, you can then edit it, or delete it. Be careful when you delete a variable group, and when you edit its name. Editing the name requires that you update all of your scripts that use persistent variables from that variable group. Deleting a variable group also deletes all of its persistent variables, which breaks any scripts using them.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452864153_512536484617641_8300507730140246292_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=4V-naB9ZzM0Q7kNvwEjphcH&_nc_oc=Admxf8vVZtOVx1n10Ke6LKBBhY0qJk_VH0ASMzxAymRjgLH-y0sx7Y6TMHUJU6B5fek&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=HWEHnQlVdhjL-bu3gFrIoA&oh=00_AfhcD3gZXdSVzOLJ8ZZTdHTdGLa7S8dJXA0ceWNiRUmrrA&oe=693128C5)

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452873933_512536414617648_4553408675355629305_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=F1vQa_SlSVMQ7kNvwFn6y1J&_nc_oc=Adm3sOP74NZmXKVyzgn8LqBdXtmnPdrMf9N-124EDzJMz_gMTjSX86G5m1zVPYmaN-k&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=HWEHnQlVdhjL-bu3gFrIoA&oh=00_Afhu9KsJIZbQVD254wfQd2VxyqCQQ6-x3XhO1i38ECUj4Q&oe=6931162F)

When you add variable groups to your world, you can then access their persistent variables using “set” and “get” persistent player variable code blocks in your scripts.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452819269_512536471284309_8749603936744434663_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=mOASam5MCpQQ7kNvwGzkrym&_nc_oc=Adn1wEOF5J55ggQNmsVfZ7MhXtgDlrq7h4FghOpD593kAt4Ri5n61WhutpsdX87zV3I&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=HWEHnQlVdhjL-bu3gFrIoA&oh=00_AfglRXLBqRPuhoxmUWWY_LhkSe0IMcx5WFWUXw8a8XrGUg&oe=69311A47)

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452885444_512536371284319_6701700970291792058_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=uWLluvMnvAEQ7kNvwHKiZdG&_nc_oc=AdmCYtjpfHuAJlTPBN_DY6TDRbgMBg9_gtJ17v0_g-GRtcU4YNWyC9q3m64JnUi68es&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=HWEHnQlVdhjL-bu3gFrIoA&oh=00_AfirxFcM-1ovyujlG_vffgKRmt0f9d2dLx6_nPpbV_8MsA&oe=69311AA7)