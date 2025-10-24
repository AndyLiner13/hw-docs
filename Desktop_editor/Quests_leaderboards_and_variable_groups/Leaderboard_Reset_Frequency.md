# Leaderboard Reset Frequency

## Overview

 Horizon’s Leaderboard Reset Frequency feature lets you set an option to reset a
leaderboard at periodic intervals. You can configure the reset interval to one
of the following values:
• Daily: Resets every day at 12:00 AM Pacific Time.
• Weekly: Resets every Monday at 12:00 AM Pacific Time (every Sunday night).
• Monthly: Resets on the 1st day of every calendar month at 12:00 AM Pacific Time.
• Never: Never resets. This is the default setting.

  
## Linking persistent variables

 If you use a persistent variable to store a player’s scores in the leaderboard,
then you can link the persistent variable so that it’s reset along with the
leaderboard. In addition, if a player’s persistent variable is linked, all player
entries for the persistent variable become zero when the leaderboard resets.  
## How to set the leaderboard frequency

 Learn the workflow involved in setting the leaderboard frequency by following
these steps.
1. Choose a reset cadence for a new or existing leaderboard.
  1. In the CUI, navigate to Systems > Leaderboards. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452887990_512510354620254_7933510091704899504_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=2qCI_VK6SBcQ7kNvwFzk62g&_nc_oc=Adk4tXIeC5EPTIJPl5YnQ5PXIXEbXyIIw49cPlUkBSgkzu7tjJ8_DnJcLFtQK4uv0xc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=brLQGSA1VjnP8SmjP8xKCQ&oh=00_Afe...
  2. Either create a new leaderboard by selecting Create Leaderboard, or edit an existing leaderboard by selecting Edit. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452413517_512510364620253_2373137635050804707_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=PWItSuUUkUQQ7kNvwF2c5zA&_nc_oc=AdlngHv1z7suZkhb6DXGeLPMzP0yUg3rt489HUXh6fNHor7dcgxAsdJse3in4jkBd50&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=brLQGSA1VjnP8SmjP8xKCQ&oh...
  3. Beside Reset frequency, select the interval that you want. This can be Daily, Weekly, or Monthly. The
value defaults to Never. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452953630_512510321286924_6693651382984821063_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=mNs7bLzdaw0Q7kNvwHk7Djm&_nc_oc=Adk4vbS7KC_BXC00kKKHmRdmBQk4HPgeKu2EkF_69sFTHwIm_4hzC0kxrbkq-vzPz98&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=brLQGSA1VjnP8SmjP8xKCQ&oh=00_AfdcEcsMB-Xhv0RaDnn2ri9...
  4. Save your changes by selecting Save.
2.  Optional: Link a player’s persistent variable to the leaderboard reset.
  1. Set Reset persistent variable (optional) to Yes. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588453_512510267953596_8425387457302036980_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=UkD04eTOcnkQ7kNvwEfaVS9&_nc_oc=AdlqH7kOkw9czxvuc_2vC6SNxXYiNvZpakH0PThb-IWoxOJQjNuZ_4345qYx7ClCS5E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=brLQGSA1VjnP8SmjP8xKCQ&oh=00_Afcg...
  2. Select a persistent variable from one of the variable groups attached to this
world.> 
  3. Save your changes by selecting Save.
   Note : You can link only persistent variables with a number data type. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452757986_512510257953597_3604445875626678830_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=cVZtsBFOMakQ7kNvwHho2t7&_nc_oc=AdmT2RVgQbSXdzv5CTPOSpYMZJhPDS9NAQfHAVG2BC5xE0FE9QbUfUCqUU5ZpuAZsU4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=brLQGSA1VjnP8SmjP8xKCQ&oh=00_AfddmYW...
  
## How leaderboard frequency affects world visitors

• All leaderboard entries are cleared on reset.
• Any user entries to the linked player persistent variable are set to zero.
• The Leaderboard gizmo shows a reset countdown for any leaderboard that
periodically resets.
 ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452818142_512510254620264_910205012762278358_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=GV6EAk6BT6QQ7kNvwGJQhWH&_nc_oc=AdlbS6YkSEGgbvUs13TAzGLk4yqFTGROkAqvC-XiclJ8bwOEYOhqkiiPYKGB2KhYnMk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=brLQGSA1VjnP8SmjP8xKCQ&oh=00_Afd4vM0CkGtRc9OPaY-789xC3ny1...
• If there are active users in a world when a leaderboard is scheduled to reset,
then all leaderboard(s) scheduled to reset at that time automatically reset.
• If there are no users in the world at the time of the reset, then the reset
happens silently, and changes are reflected the next time a player enters the world.
## Known Issue

 The effect of a leaderboard reset takes time to propagate to the gizmo due to
propagation delay. In most cases, this delay goes unnoticed. But in a scenario
where there are active players updating their leaderboard scores at reset time,
there might be a few second delay before all entries are cleared.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
