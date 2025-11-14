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
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452887990_512510354620254_7933510091704899504_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=5JySxtRwessQ7kNvwHFQViF&_nc_oc=Adk_h9KSDSs9VJrsrN6CAmiycPlPZQn3M1ms9i0R-O7heSwQchkDt4P_yQhIh3hRH6k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=0mUyJME784q6Qyrtf2Tcfg&oh=00_AfhICMXWbTrB1Fg-PmBQw3Q44_tmfZVGtCfwbBh-o3IUKw&oe=69312FEE)
  - Either create a new leaderboard by selecting **Create Leaderboard**, or edit an existing leaderboard by selecting **Edit**.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452413517_512510364620253_2373137635050804707_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=7kntk31G00QQ7kNvwHNnFlk&_nc_oc=AdkGFJm5ZDLeQQsxTYGZcPKjMXl5jo0jkT-u4alpkA-kzwNQxYXzzu88BG2YD_C4ZRE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=0mUyJME784q6Qyrtf2Tcfg&oh=00_AfjJQBfwk4iAHa7XDDspq4C1HYOOP7AFc7Dw99KUbGzdmQ&oe=693119F9)
  - Beside **Reset frequency**, select the interval that you want. This can be Daily, Weekly, or Monthly. The value defaults to Never.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452953630_512510321286924_6693651382984821063_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=BwY-zIrlVG4Q7kNvwFaU871&_nc_oc=AdmoTNOfc4PAPVrS3UurOHiLpiQkyrZZJZQP-3C9boJWG3H4u3-imBsHDJrq1rM876g&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=0mUyJME784q6Qyrtf2Tcfg&oh=00_AfitfDjWAAB2bgl7bM85WjMaef9BOwK66KOq5Uq0rKYtbg&oe=693136AF)
  - Save your changes by selecting **Save**.
- Optional: Link a player’s persistent variable to the leaderboard reset.

  - Set **Reset persistent variable (optional)** to Yes.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588453_512510267953596_8425387457302036980_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=TRHJ-XxpEYwQ7kNvwGxp8fx&_nc_oc=AdlpqQd856eaSAgLTZyRJkfmIApq3ns5hUSoxK737mkdJK7rPX2YKElSRc-YeVRlO3c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=0mUyJME784q6Qyrtf2Tcfg&oh=00_AfjuZNIiCM7CHSoYyBPfCSluC1OSFTaBYUFMGc-JU1kJWA&oe=693142F9)
  - Select a persistent variable from one of the variable groups attached to this world.
    > **Note** : You can link only persistent variables with a number data type.
    > ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452757986_512510257953597_3604445875626678830_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=gK15TfJBPScQ7kNvwFIURr3&_nc_oc=AdmjwrswY3V8_SNYHP47XO5RwqEX0reJZYiiyhJW6nWDn3saAwSWBnae4JY2SS_cf3A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=0mUyJME784q6Qyrtf2Tcfg&oh=00_AfgRQ-KFeQkx2NO4FNr6rGQyJwFj2dzskdPPivNHHTyyVQ&oe=6931478D)
  - Save your changes by selecting **Save**.

## How leaderboard frequency affects world visitors

* All leaderboard entries are cleared on reset.
* Any user entries to the linked player persistent variable are set to zero.
* The Leaderboard gizmo shows a reset countdown for any leaderboard that periodically resets.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452818142_512510254620264_910205012762278358_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=nwsnPJaA3eAQ7kNvwF3SByR&_nc_oc=AdnxYbn-ngHeQ-Hk0miZu7Fg5TOY-sz5caTSDi3VkFUv9e7oPsNO3xZY53IokbXxllA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=0mUyJME784q6Qyrtf2Tcfg&oh=00_AfgjSsrCb7qdFqsZZvT6LLCp7F2wdW89srfRS41Df4HEXA&oe=69313EE6)

* If there are active users in a world when a leaderboard is scheduled to reset, then all leaderboard(s) scheduled to reset at that time automatically reset.
* If there are no users in the world at the time of the reset, then the reset happens silently, and changes are reflected the next time a player enters the world.

## Known Issue

The effect of a leaderboard reset takes time to propagate to the gizmo due to propagation delay. In most cases, this delay goes unnoticed. But in a scenario where there are active players updating their leaderboard scores at reset time, there might be a few second delay before all entries are cleared.