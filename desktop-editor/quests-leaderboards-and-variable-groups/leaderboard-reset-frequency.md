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
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452887990_512510354620254_7933510091704899504_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=THoMN9VEV8UQ7kNvwFBWxRd&_nc_oc=AdldJhm1IhOtbKEH32ZKc-sW1QeKrf6nRIXHKUp9Z_RXuqnYT8wFo4nSFn2Bqdzjb9k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_NbUmrdXK3OVdthxyJXmDg&oh=00_Afj3QGv0DlfHR8gyZXfFF9Wh4bV6Sr1P-PppLmIcNkpAXg&oe=692BE9EE)
  - Either create a new leaderboard by selecting **Create Leaderboard**, or edit an existing leaderboard by selecting **Edit**.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452413517_512510364620253_2373137635050804707_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=CvJN84ZiWd0Q7kNvwHYtzd1&_nc_oc=AdmH0WZt31OdWq1RMqLpDKLtpJOOTKjzi10t5AF5zodExw1slGM7iGVpsuRj-_wVBXI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_NbUmrdXK3OVdthxyJXmDg&oh=00_Afi7yaIfJDmOG1STIcjoGTKYnkpMeIyM7fvIaTiYpftBnw&oe=692C0C39)
  - Beside **Reset frequency**, select the interval that you want. This can be Daily, Weekly, or Monthly. The value defaults to Never.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452953630_512510321286924_6693651382984821063_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=MQ1LtoSBDw4Q7kNvwGSrL07&_nc_oc=AdnNP4Csnu535frO2-moEA1ttCAoBr5yJomumR2wRkMqukEI0ToYTEgTCyXIKdpb_KE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_NbUmrdXK3OVdthxyJXmDg&oh=00_AfiwesbbPrUhGaBvJBnLAdxI-7cOBt5p363qr49LoPSUJQ&oe=692BF0AF)
  - Save your changes by selecting **Save**.
- Optional: Link a player’s persistent variable to the leaderboard reset.

  - Set **Reset persistent variable (optional)** to Yes.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588453_512510267953596_8425387457302036980_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=gl_4C614ZjQQ7kNvwFH9EZr&_nc_oc=AdkGki1F16nVaqhLgT99ZH_-5DEmPqn8hAzxmRMi6kIvJdc0InuFn2qwvymOzj6LjNw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_NbUmrdXK3OVdthxyJXmDg&oh=00_AfgsxAypFM5sjfs2zaPfB_hiBsCrCE_5HnAvV020l09CIg&oe=692BFCF9)
  - Select a persistent variable from one of the variable groups attached to this world.
    > **Note** : You can link only persistent variables with a number data type.
    > ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452757986_512510257953597_3604445875626678830_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=iaaOxWYlULEQ7kNvwEU1ory&_nc_oc=AdlyH_h6fSSluWAlFJu83FH5DLhKz587ZSH4_ok_bdJ3NIBThcdVigP8JbFPXcWJVuM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=_NbUmrdXK3OVdthxyJXmDg&oh=00_AfiKXhUBphTzMJTMUWhW8CQ33zy9ucuuLZo_RbiSpP4wtQ&oe=692C018D)
  - Save your changes by selecting **Save**.

## How leaderboard frequency affects world visitors

* All leaderboard entries are cleared on reset.
* Any user entries to the linked player persistent variable are set to zero.
* The Leaderboard gizmo shows a reset countdown for any leaderboard that periodically resets.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452818142_512510254620264_910205012762278358_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q7sFQpMqkFAQ7kNvwEQLmnW&_nc_oc=Adk5YkcLa_ae9pcoKtpbf6UyThbbNwkoCT3UhmDmgnG8kQjEZrwSDoK2k3tDkIkGHpU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=_NbUmrdXK3OVdthxyJXmDg&oh=00_AfgB3UdQlmI9NyDMvB1fC9JBuZ5FSRIc5WG0ia6WsEalBg&oe=692BF8E6)

* If there are active users in a world when a leaderboard is scheduled to reset, then all leaderboard(s) scheduled to reset at that time automatically reset.
* If there are no users in the world at the time of the reset, then the reset happens silently, and changes are reflected the next time a player enters the world.

## Known Issue

The effect of a leaderboard reset takes time to propagate to the gizmo due to propagation delay. In most cases, this delay goes unnoticed. But in a scenario where there are active players updating their leaderboard scores at reset time, there might be a few second delay before all entries are cleared.