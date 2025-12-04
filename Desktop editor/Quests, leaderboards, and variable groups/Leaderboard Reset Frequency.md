Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/leaderboard-reset-frequency

# Leaderboard Reset Frequency

Important

 This feature is not available to all creators.

## Overview

Horizon’s Leaderboard Reset Frequency feature lets you set an option to reset a leaderboard at periodic intervals. You can configure the reset interval to one of the following values:

* **Daily**: Resets every day at 12:00 AM Pacific Time.
* **Weekly**: Resets every Monday at 12:00 AM Pacific Time (every Sunday night).
* **Monthly**: Resets on the 1st day of every calendar month at 12:00 AM Pacific Time.
* **Never**: Never resets. This is the default setting.

## Linking persistent variables

If you use a persistent variable to store a player’s scores in the leaderboard, then you can link the persistent variable so that it’s reset along with the leaderboard. In addition, if a player’s persistent variable is linked, all player entries for the persistent variable become zero when the leaderboard resets.

## How to set the leaderboard frequency

Learn the workflow involved in setting the leaderboard frequency by following these steps.

- Choose a reset cadence for a new or existing leaderboard.
  - In the CUI, navigate to **Systems** > **Leaderboards**.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452887990_512510354620254_7933510091704899504_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=QdmvPwHizWsQ7kNvwGxA102&_nc_oc=Adlt1kXLZZalJccuaVXBPGGCa0H6wDaw3ISPhnDhyLgg_ke_RdvmOqokn6RD2Du5yss&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ao0yz1Z1jAmv_VUvpgZTkw&oh=00_Afk9CwT7PFZ097i5rcNCUknb6HlkGlTUF3Ge-RZAdn-WWg&oe=694BC62E)
  - Either create a new leaderboard by selecting **Create Leaderboard**, or edit an existing leaderboard by selecting **Edit**.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452413517_512510364620253_2373137635050804707_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=yst6lpNktJAQ7kNvwF_35zU&_nc_oc=AdliCcqvBaNIg8Ne--y6UlWxeTb994VN9RftSW_5IoX5OCBVllELWFpy8Ahveq3L_EI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ao0yz1Z1jAmv_VUvpgZTkw&oh=00_AfmTQRPWSgD7neYo6kUn0Rp8Vubgsyvu8nARAb-Y6c8I8w&oe=694BE879)
  - Beside **Reset frequency**, select the interval that you want. This can be Daily, Weekly, or Monthly. The value defaults to Never.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452953630_512510321286924_6693651382984821063_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZHV6U2-9jDMQ7kNvwEHSmyr&_nc_oc=AdnkS5_MJ8IZnV4evYkhMBsk377Z8XVYlQ_0IWdWbOZmMnliGwx3bO2Bp6vnOqAPTsI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ao0yz1Z1jAmv_VUvpgZTkw&oh=00_Afk8Uzmz9JafDRfLiiaD9PIOR6HwBtFDGjJgaccgdq8XNA&oe=694BCCEF)
  - Save your changes by selecting **Save**.
- Optional: Link a player’s persistent variable to the leaderboard reset.

  - Set **Reset persistent variable (optional)** to Yes.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588453_512510267953596_8425387457302036980_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ahbI3aesZGgQ7kNvwEw2SlD&_nc_oc=AdkLNqPloeUucRLaXhAy2CF--Qdp2o21-nF09FJQ9HjxM9XlQNlAyjo9YXXplR-ZX-g&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ao0yz1Z1jAmv_VUvpgZTkw&oh=00_Afk7d8NxOXzmMeS9aitXnUlcsL3Ap01r8oAXyudq0GW_sw&oe=694BD939)
  - Select a persistent variable from one of the variable groups attached to this world.
    > **Note** : You can link only persistent variables with a number data type.
    > ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452757986_512510257953597_3604445875626678830_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=1V_Wpi2ANSgQ7kNvwHHEj_s&_nc_oc=AdngXMY4l81DhyHI1Acov-HpNZfxV1X1dpmB-kKIWnFwkYaPnuUhV6KxdBpxpgSv5Nk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ao0yz1Z1jAmv_VUvpgZTkw&oh=00_Afmgx5BmjEFKbr6E5EYY6Tg4Zw42nQ4U4cWb4oNDHY1LHw&oe=694BDDCD)
  - Save your changes by selecting **Save**.

## How leaderboard frequency affects world visitors

* All leaderboard entries are cleared on reset.
* Any user entries to the linked player persistent variable are set to zero.
* The Leaderboard gizmo shows a reset countdown for any leaderboard that periodically resets.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452818142_512510254620264_910205012762278358_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=vnvyVCIV6icQ7kNvwE7cNJq&_nc_oc=Adl7EgQ-VFnPWu_T4QcCP4Js0eJGVqoSl4CU91-SQ2bQ5Z9TeClN1nos3xnx_lF98E8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ao0yz1Z1jAmv_VUvpgZTkw&oh=00_AfmAEW19gODrU37YN-0R6IGPFo-69ElHJBJuOibF8HLA-A&oe=694BD526)

* If there are active users in a world when a leaderboard is scheduled to reset, then all leaderboard(s) scheduled to reset at that time automatically reset.
* If there are no users in the world at the time of the reset, then the reset happens silently, and changes are reflected the next time a player enters the world.

## Known Issue

The effect of a leaderboard reset takes time to propagate to the gizmo due to propagation delay. In most cases, this delay goes unnoticed. But in a scenario where there are active players updating their leaderboard scores at reset time, there might be a few second delay before all entries are cleared.