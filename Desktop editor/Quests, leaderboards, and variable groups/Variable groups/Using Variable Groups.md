---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/variable-groups/using-variable-groups
---

# [Using Variable Groups](#using-variable-groups)

Variable groups let you create sets of persistent variables that you can share across your worlds. This approach lets you build cross-world experiences using persisted information from any of your worlds. You can access the variable groups system from the **Systems** tab of creator tools. On this tab, you’ll find three sub-tabs that display the following types of variable groups. Those:

- **Added to the World**
- **Owned by Me**
- **Shared with Me**

With the introduction of variable groups, you are no longer restricted to using just six variable groups per world; you can create as many variable groups as you want.

> [!Note]
>
> To use the persistent variables from a variable group in your world, you must add that variable group to your world.

![](../../../_assets/images/3f440e9c56b5a7d6d581d8698bed0bc7a6dbfa08acca9e2b059d941a6d0acf98.png)

![](../../../_assets/images/06bdf79f4b4c453c5c29191f724552984a9f603542b389345995d109045fe789.png)

When you select a variable group, you’ll see all of the persistent variables that it contains. From here you can create, edit, and delete persistent variables from within a variable group.

> [!Note]
>
> You are limited to adding up to 100 persistent variables to a variable group.

![](../../../_assets/images/45c1de497cca2ac5716d9206590fe4c0ed969e181c31a65b7301c3b1ea520705.png)

When you create a variable group, you can edit its name and description, and you can also choose whether you want to add it to the current world.

> [!Note]
>
> In order to add the variable group to the current world, you must own that world, and it must have less than six variable groups already.

![](../../../_assets/images/618e561fb5dbb19054586d3860cda2bcda4603150287cc55faa0a17017ab62cb.png)

Once you create a variable group, you can then edit it, or delete it. Be careful when you delete a variable group, and when you edit its name. Editing the name requires that you update all of your scripts that use persistent variables from that variable group. Deleting a variable group also deletes all of its persistent variables, which breaks any scripts using them.

![](../../../_assets/images/673e141b5868866ec959ef299a1782af402445d7ea33cfd56578377b1c6cc451.png)

![](../../../_assets/images/fa27e513fa5c30f9cb908daba97d8c247067f68c5f982de638072c979e8568c9.png)

When you add variable groups to your world, you can then access their persistent variables using “set” and “get” persistent player variable code blocks in your scripts.

![](../../../_assets/images/2a031fe096f3fdf5da85ddb061a95189a01a33726a19344981fcb4a62164a5e6.png)

![](../../../_assets/images/d2133337c816293f6c70c7fa992a8cfed07bcbda0488fe50d6c76892c1c49910.png)

