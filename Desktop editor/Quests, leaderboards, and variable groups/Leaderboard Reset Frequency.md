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
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452887990_512510354620254_7933510091704899504_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=cY3pFoVEtKAQ7kNvwFSNGOo&_nc_oc=AdmsNwdq3IARJLSRaxUBW1s-2L2f4azUpTXHe43Iekav_NFsJz7PVYbageGdSe0UJV-Spqo15m5ENbqUbnJr4lgc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6AN-3Zj1uUCz2bmp74oKeQ&oh=00_Afl1fAo841gUCkpTsXAyuC-sarXBJnihmUU_YOfZ4VXbvA&oe=6955712E)
  - Either create a new leaderboard by selecting **Create Leaderboard**, or edit an existing leaderboard by selecting **Edit**.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452413517_512510364620253_2373137635050804707_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Sh9iYox4QIAQ7kNvwFYk4Jw&_nc_oc=AdnBWj86FpucgSpMaWKX-pHTjsVL_HIJBaEJk-x-qX_2DzB9a-vDBgh_trLi1xVFHQLYZCcYbxitrXp4iWlnwuO5&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6AN-3Zj1uUCz2bmp74oKeQ&oh=00_AfmPsk9lezvNyFen0kkkcyNM-WLgL7c9LhMoVjbB9MpajQ&oe=69559379)
  - Beside **Reset frequency**, select the interval that you want. This can be Daily, Weekly, or Monthly. The value defaults to Never.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452953630_512510321286924_6693651382984821063_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=fupgbPWZJ28Q7kNvwFtU1Cf&_nc_oc=AdmTBZe__a0omyc2apX9OY0e0qNDIahWOOxiose2SplLOYOA-RC3a06G19TyrFQb_t71hCSaE9EstOJdX8dBVz43&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6AN-3Zj1uUCz2bmp74oKeQ&oh=00_AflNwgFX4pXlawOe2fhvpywWAMETb4LWS7e02YdlholVbA&oe=695577EF)
  - Save your changes by selecting **Save**.
- Optional: Link a player’s persistent variable to the leaderboard reset.

  - Set **Reset persistent variable (optional)** to Yes.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588453_512510267953596_8425387457302036980_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=wIlYAiP2qGcQ7kNvwHek7hl&_nc_oc=AdkPlPfh6Lq03GB0O0kqIKoLk8c4TsteWq9eU8Cnz11Wik-z8K9SIxxaORVM48XYuv-qUgjYTL-OueRcJqMWkHQc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6AN-3Zj1uUCz2bmp74oKeQ&oh=00_Afl0QzjRdxdeyDZ7WKPDMJy8-WoO_1p9_3Vjj5vQgjHFmw&oe=69558439)
  - Select a persistent variable from one of the variable groups attached to this world.
    > **Note** : You can link only persistent variables with a number data type.
    > ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452757986_512510257953597_3604445875626678830_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=d2YJbUBgs-0Q7kNvwEL_LeD&_nc_oc=Adll_cdDWQuO4ILSRKDaa4uSdCyqE2xUU5JA2q5x_G4Kf0Jvh1PIOUNI0zrCfON82Rz6RxjwoQ_7NGxzPfV5BMah&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6AN-3Zj1uUCz2bmp74oKeQ&oh=00_AfnWPiTx3NQBx1p9Sl2S9TZyZ-K1MQxTo3S4583lQRLY9w&oe=695588CD)
  - Save your changes by selecting **Save**.

## How leaderboard frequency affects world visitors

* All leaderboard entries are cleared on reset.
* Any user entries to the linked player persistent variable are set to zero.
* The Leaderboard gizmo shows a reset countdown for any leaderboard that periodically resets.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452818142_512510254620264_910205012762278358_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=1k-W1mXjeUYQ7kNvwH-FlNo&_nc_oc=AdmKiE7QrDpPuKmwX4ql545vCAmy9J1_DY0c2ZVyIEnnW03-2DfPVxNv-8BPZjrKDD9Tc_WiKyEsSDfhrpn17sSw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6AN-3Zj1uUCz2bmp74oKeQ&oh=00_AfmYcfrEjbj9FT4LNVvamzfXxRuyML1gRG4Emt1_Kp8bWg&oe=69558026)

* If there are active users in a world when a leaderboard is scheduled to reset, then all leaderboard(s) scheduled to reset at that time automatically reset.
* If there are no users in the world at the time of the reset, then the reset happens silently, and changes are reflected the next time a player enters the world.

## Known Issue

The effect of a leaderboard reset takes time to propagate to the gizmo due to propagation delay. In most cases, this delay goes unnoticed. But in a scenario where there are active players updating their leaderboard scores at reset time, there might be a few second delay before all entries are cleared.