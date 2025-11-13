Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/variable-groups/using-variable-groups

# Using Variable Groups

Variable groups let you create sets of persistent variables that you can share across your worlds. This approach lets you build cross-world experiences using persisted information from any of your worlds. You can access the variable groups system from the **Systems** tab of creator tools. On this tab, you’ll find three sub-tabs that display the following types of variable groups. Those:

* **Added to the World**
* **Owned by Me**
* **Shared with Me**

With the introduction of variable groups, you are no longer restricted to using just six variable groups per world; you can create as many variable groups as you want.

> **Note:** To use the persistent variables from a variable group in your world, you must add that variable group to your world.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452554253_512536417950981_1692974654504870135_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=LQFhBN6NIAAQ7kNvwGz5iJo&_nc_oc=Adkm4KRbuqrJdl7daapKz8CgG0UlfDmKhO0hRih3V1jFM8hlmu0QET5PyDLV9j66Gyo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RulMd7hBL1oeKRxIyk_7Mg&oh=00_Afh0yaP5aOlZzjhzrDm0L-O1EJExIuYc9Tvulhb0MrywSA&oe=692FC000)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452665654_512536497950973_1194272625607849774_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=mEyCCcPDL7MQ7kNvwGiKRWo&_nc_oc=Adm8sJAltt8_3lRsINJ6g29Qf2l02ORx-6OpFUW3Fsip_yxI5fAkXzQcgjphDug2iy8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=RulMd7hBL1oeKRxIyk_7Mg&oh=00_Afj37mtVcfuG8Nm8ytV0eUcoAJ-GcKsRiRCNB__aKoqwcA&oe=692FB5B0)

When you select a variable group, you’ll see all of the persistent variables that it contains. From here you can create, edit, and delete persistent variables from within a variable group.

> **Note:** You are limited to adding up to 100 persistent variables to a variable group.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452852984_512536451284311_5925156470849501450_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=8WBYxQXyUrQQ7kNvwFD0Z2C&_nc_oc=AdlWMcWXyfofMI-3R1AYcwzYKQjdJrPQy46uizxAcb0KA4f9_FzQv7H-87LMBPzRNJU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=RulMd7hBL1oeKRxIyk_7Mg&oh=00_AfgScxuPYSR0XpNOKHNE2oForPEJ8nVrUkZVBFF5YjsUTg&oe=692FBF80)

When you create a variable group, you can edit its name and description, and you can also choose whether you want to add it to the current world.

> **Note:** In order to add the variable group to the current world, you must own that world, and it must have less than six variable groups already.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452756647_512536487950974_3070301593230605430_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=aUfLK9ywXY4Q7kNvwFV9bDM&_nc_oc=AdksvD-9P0HC5zL9qzygy5CbaGUY9sliWUVvh_hBoDyunb7cwZXMcGkPyQZiwA5YCA8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RulMd7hBL1oeKRxIyk_7Mg&oh=00_AfjDlbfMR5wtoJaeAFXPD5BJ58VGAIowJTfxdP5mM2ua8w&oe=692FADB7)

Once you create a variable group, you can then edit it, or delete it. Be careful when you delete a variable group, and when you edit its name. Editing the name requires that you update all of your scripts that use persistent variables from that variable group. Deleting a variable group also deletes all of its persistent variables, which breaks any scripts using them.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452864153_512536484617641_8300507730140246292_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=4V-naB9ZzM0Q7kNvwEjphcH&_nc_oc=Admxf8vVZtOVx1n10Ke6LKBBhY0qJk_VH0ASMzxAymRjgLH-y0sx7Y6TMHUJU6B5fek&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RulMd7hBL1oeKRxIyk_7Mg&oh=00_AfhohcOgTVJarRuyXikwpp4nFbsLXYVA3-7961pokWQbyQ&oe=692F9F05)

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452873933_512536414617648_4553408675355629305_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=n9LxhSUi1WAQ7kNvwF0cAF8&_nc_oc=Adne7eeLWVUxPCbp_6nsNrIVAjWSm4RwE47KcYU42-zulMv2fVq183YzsDvdR2ZRriU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RulMd7hBL1oeKRxIyk_7Mg&oh=00_AfgqKvaQbK0qjR4uhc8CLucrsynU1cRbe9ME2XNrT9mdgg&oe=692FC4AF)

When you add variable groups to your world, you can then access their persistent variables using “set” and “get” persistent player variable code blocks in your scripts.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452819269_512536471284309_8749603936744434663_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=3wuENwRqoE0Q7kNvwFJxTeA&_nc_oc=AdmcbOKTz45VUdG2wR-5m9Gzo1jOfkf47XbxxSdp5qbGZUsjjRM6AdZgffW4v_wTCO0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RulMd7hBL1oeKRxIyk_7Mg&oh=00_AfhH3AtRxmNp19qZFIMl6RDfhjyKPfKyEZbf0U45dRXCqw&oe=692FC8C7)

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452885444_512536371284319_6701700970291792058_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=uWLluvMnvAEQ7kNvwHKiZdG&_nc_oc=AdmCYtjpfHuAJlTPBN_DY6TDRbgMBg9_gtJ17v0_g-GRtcU4YNWyC9q3m64JnUi68es&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RulMd7hBL1oeKRxIyk_7Mg&oh=00_AfgBhEuP1NOPKragDZYGrW5mXkY0dJqhcZk6AlqMJgnmrA&oe=692FC927)

ON THIS PAGE